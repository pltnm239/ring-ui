import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import dataTests from '../global/data-tests';

import LoaderCore from './loader__core';

/**
 * @name Loader
 */

export default class Loader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    colors: PropTypes.array,
    message: PropTypes.string,
    'data-test': PropTypes.string
  };

  componentWillUnmount() {
    this.loader.destroy();
  }

  initLoader = el => {
    if (el) {
      this.loader = new LoaderCore(el, this.props);
    }
  };

  render() {
    const {message, size, colors, 'data-test': dataTest, ...restProps} = this.props; // eslint-disable-line no-unused-vars
    return (
      <div
        data-test={dataTests('ring-loader', dataTest)}
        {...restProps}
        ref={this.initLoader}
      />
    );
  }
}
