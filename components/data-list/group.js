/* @flow */
/* eslint-disable react/jsx-no-literals */
import React, {PureComponent, Element} from 'react';
import classNames from 'classnames';

import Link from '../link/link';
import Text from '../text/text';

import Item from './item';
import type {GroupType, ItemType} from './types';
import styles from './data-list.css';

type Props = {
  group: GroupType,
  title: string,
  items: ItemType[],
  className?: string,
  onItemCollapse: (item?: ItemType) => void,
  onItemExpand: (item?: ItemType) => void,
  isItemCollapsed: (item?: ItemType) => boolean,
  showMoreLessButton: boolean,
  fullyShown: boolean,
  onGroupShowMore: (group?: GroupType) => void,
  onGroupShowLess: (group?: GroupType) => void,
  focused: boolean
};

export default class Group extends PureComponent {
  static defaultProps = {
    onItemCollapse: () => {},
    onItemExpand: () => {},
    isItemCollapsed: () => true,
    showMoreLessButton: false,
    fullyShown: true,
    onGroupShowMore: () => {},
    onGroupShowLess: () => {},
    focused: false
  };

  props: Props;

  onShowMore = () => {
    const {onGroupShowMore, group} = this.props;
    onGroupShowMore(group);
  }

  onShowLess = () => {
    const {onGroupShowLess, group} = this.props;
    onGroupShowLess(group);
  }

  render(): Element<any> {
    const {
      title, items, onItemCollapse, onItemExpand,
      isItemCollapsed, showMoreLessButton, fullyShown,
      focused
    } = this.props;

    let moreLessButton;
    if (showMoreLessButton) {
      if (fullyShown) {
        moreLessButton = (
          <Text comment={true}>
            <Link
              inherit={true}
              pseudo={true}
              onClick={this.onShowLess}
            >Show less</Link>
          </Text>
        );
      } else {
        moreLessButton = (
          <Text comment={true}>
            <Link
              inherit={true}
              pseudo={true}
              onClick={this.onShowMore}
            >Show more</Link>
          </Text>
        );
      }
    } else {
      moreLessButton = null;
    }

    const classes = classNames(this.props.className, {
      [styles.groupTitle]: true,
      [styles.groupTitleFocused]: focused
    });

    return (
      <li>
        <div
          className={classes}
          tabIndex="0"
        >{title}</div>

        {items.length ? (
          <ul className={styles.group}>
            {items.map(item => (
              <Item
                key={item.id}
                item={item}
                title={item.title}
                selectable={item.selectable}
                subitems={item.subitems}
                onExpand={onItemExpand}
                onCollapse={onItemCollapse}
                collapsed={isItemCollapsed(item)}
              />
            ))}

            {
              moreLessButton ? (
                <li className={styles.item} style={{marginLeft: '27px'}}>{moreLessButton}</li>
              ) : null
            }
          </ul>
        ) : null}
      </li>
    );
  }
}
