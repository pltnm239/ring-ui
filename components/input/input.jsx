import React from 'react';
import classNames from 'classnames';
import RingComponent from 'ring-component/ring-component';
import factory from 'factory-decorator/factory-decorator';
import './input.scss';

/**
 * @name Input
 * @constructor
 * @extends {ReactComponent}
 * @example
   <example name="Input">
     <file name="index.html">
       <div id="input"></div>
     </file>

     <file name="index.js" webpack="true">
       var render = require('react-dom').render;
       var Input = require('input/input');

       render(
         Input.factory(),
         document.getElementById('input')
       );
     </file>
   </example>
 */
@factory
export default class Input extends RingComponent {
  render() {
    let classes = classNames('ring-input', this.props.className);
    return <input {...this.props} className={classes}/>;
  }
}
