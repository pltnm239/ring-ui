import React, {InputHTMLAttributes, useEffect} from 'react';
import classNames from 'classnames';

import Heading, {Levels} from '../heading/heading';
import Button from '../button/button';
import {Size} from '../input/input';
import inputStyles from '../input/input.css';
import getUID from '../global/get-uid';
import Shortcuts from '../shortcuts/shortcuts';

import styles from './editable-heading.css';

export {Levels};
export {Size};

export interface EditableHeadingTranslations {
  save: string;
  cancel: string;
}

export type EditableHeadingProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'size'> & {
  level?: Levels;
  headingClassName?: string | null;
  inputClassName?: string | null;
  isEditing?: boolean;
  isSavingPossible?: boolean;
  isSaving?: boolean;
  children?: string;
  embedded?: boolean;
  size?: Size;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  'data-test'?: string | null;
  error?: string;
  multiline?: boolean;
  renderMenu?: () => React.ReactNode;
  translations?: EditableHeadingTranslations;
};

function noop() {}

export const EditableHeading = (props: EditableHeadingProps) => {
  const {
    level = Levels.H1, className, headingClassName, inputClassName, children,
    isEditing = false, isSavingPossible = false, isSaving = false, embedded = false,
    size = Size.L, onEdit = noop, onSave = noop, onCancel = noop,
    autoFocus = true, 'data-test': dataTest, error, disabled, multiline = false,
    renderMenu = () => null,
    onFocus, onBlur,
    translations = {
      save: 'Save',
      cancel: 'Cancel'
    },
    ...restProps
  } = props;

  const [shortcutsScope] = React.useState(getUID('ring-editable-heading-'));
  const [isInFocus, setIsInFocus] = React.useState(false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [isInSelectionMode, setIsInSelectionMode] = React.useState(false);

  const hasError = error !== undefined;

  const isSaveDisabled =
    !isSavingPossible || !children || children.trim() === '' || hasError || isSaving;

  const isCancelDisabled = isSaving;

  const isShortcutsDisabled = !isInFocus || isSaving;

  const shortcutsMap = React.useMemo(() => {
    const map: Record<string, ()=>void> = {};
    if (!isSaveDisabled) {
      map.enter = onSave;
    }
    if (isCancelDisabled) {
      map.esc = onCancel;
    }

    return map;
  }, [isSaveDisabled, isCancelDisabled, onSave, onCancel]);

  const classes = classNames(styles.editableHeading, className, {
    [styles.fullSize]: isEditing && size === Size.FULL,
    [styles.isEditing]: isEditing,
    [styles.error]: hasError,
    [styles.disabled]: disabled,
    [styles.multiline]: multiline,
    [styles.selectionMode]: isInSelectionMode
  });

  const headingClasses = classNames(styles.heading, headingClassName, styles[`size${size}`]);

  const inputClasses = classNames(
    'ring-js-shortcuts',
    styles.input,
    inputStyles[`size${size}`],
    styles[`level${level}`],
    inputClassName
  );

  const onHeadingMouseDown = React.useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const onMouseMove = React.useCallback(() => {
    if (!isMouseDown) {
      return;
    }

    setIsInSelectionMode(true);
  }, [isMouseDown]);

  const onMouseUp = React.useCallback(() => {
    if (isMouseDown && !isInSelectionMode && !disabled) {
      onEdit();
    }

    setIsMouseDown(false);
    setIsInSelectionMode(false);
  }, [isMouseDown, isInSelectionMode, disabled, onEdit]);

  const onInputFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsInFocus(true);
    onFocus?.(e);
  }, [onFocus]);

  const onInputBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsInFocus(false);
    onBlur?.(e);
  }, [onBlur]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  });

  return (
    <>
      <div className={classes}>
        {!disabled && isEditing
          ? (
            <>
              <Shortcuts
                map={shortcutsMap}
                scope={shortcutsScope}
                disabled={isShortcutsDisabled}
              />

              <input
                className={inputClasses}
                value={children}
                autoFocus={autoFocus}
                data-test={dataTest}
                disabled={isSaving}
                {...restProps}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
              />
            </>
          )
          : (
            <button
              type="button"
              className={styles.headingWrapperButton}
              onMouseDown={onHeadingMouseDown}
            >
              <Heading
                className={headingClasses}
                level={level}
                data-test={dataTest}
              >{children}</Heading>
            </button>
          )
        }

        {!isEditing && (
          renderMenu()
        )}

        {isEditing && !embedded && (
          <>
            <Button
              className={styles.button}
              primary
              disabled={isSaveDisabled}
              loader={isSaving}
              onClick={onSave}
            >{translations.save}</Button>

            <Button
              className={styles.button}
              disabled={isCancelDisabled}
              onClick={onCancel}
            >{translations.cancel}</Button>
          </>
        )}
      </div>

      {isEditing && error && (
        <div className={classNames(styles.errorText, inputStyles[`size${size}`])}>{error}</div>
      )}
    </>
  );
};

export default React.memo(EditableHeading);