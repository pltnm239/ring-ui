/**
 * @fileoverview Popup Menu.
 * @jsx React.DOM
 */

var fuzzysearch = require('fuzzysearch');

var React = require('react');
var Popup = require('popup/popup');
var List = require('list/list');
var Input = require('input/input');

/**
 * @constructor
 * @mixes {Popup.Mixin}
 * @extends {ReactComponent}
 * @example

   <example name="Popup Menu">
   <file name="index.html">
   <div>
   <div id="popup"></div>
   </div>
   </file>
   <file name="index.js" webpack="true">
   var PopupMenu = require('./popup-menu.jsx');

   var popupMenu = PopupMenu.renderComponent(PopupMenu({
        filter: true,
        anchorElement: document.getElementById('popup'),
        corner: PopupMenu.PopupProps.Corner.TOP_LEFT,
        classNames: ['additional', 'class', 'names']
      }, null));

   popupMenu.setProps({data: [
        {'label': 'One'},
        {'label': 'Two', 'href': 'http://www.jetbrains.com'},
        {'label': 'Three', 'type': PopupMenu.ListProps.Type.ITEM, 'href': 'http://www.jetbrains.com'},
        {'type': PopupMenu.ListProps.Type.SEPARATOR},
        {'label': 'Four', 'type': PopupMenu.ListProps.Type.LINK},
        {'label': 'Five', 'type': PopupMenu.ListProps.Type.LINK, 'href': 'http://www.jetbrains.com', 'className': 'test'},
        {'type': PopupMenu.ListProps.Type.SEPARATOR, 'description': 'Test group'},
        {'label': '1 Element in group', 'type': PopupMenu.ListProps.Type.ITEM},
        {'label': '2 Element in group', 'type': PopupMenu.ListProps.Type.ITEM}
      ]});
   </file>
   </example>
 */
var PopupMenu = React.createClass({
  mixins: [Popup.Mixin, List.Mixin],

  getDefaultProps: function () {
    return {
      data: [],
      filter: false
    };
  },

  getInitialState: function () {
    return {text: ''};
  },

  componentDidUpdate: function () {
    if (this.refs.filter && this.isVisible()) {
      this.refs.filter.getDOMNode().focus();
    }
  },

  handleInput: function (e) {
    this.setState({text: e.target.value});
  },

  filterFn: function (item, string) {
    return !item.label || fuzzysearch(string.toLowerCase(), item.label.toLowerCase());
  },

  filter: function (data) {
    if (!this.props.filter || this.state.text === '') {
      return data;
    }

    var string = this.state.text;
    var filterFn = this.props.filter.fn || this.filterFn;

    return data.filter(function (item) {
      return filterFn(item, string);
    });
  },

  getInput: function () {
    return (
      <div className="ring-popup__filter-wrapper">
        <Input ref="filter"
          className="ring-js-shortcuts ring-input_filter-popup"
          placeholder={this.props.filter.placeholder || ''}
          onInput={this.handleInput}/>
      </div>
    );
  },

  /** @override */
  getInternalContent: function () {
    return (
      <div>
        {!!this.props.filter && this.getInput()}
        <List ref="List"
          data={this.filter(this.props.data)}
          hint={this.props.hint}
          hintOnSelection={this.props.hintOnSelection}
          maxHeight={this._getStyles().maxHeight}
          onSelect={this.props.onSelect}
          shortcuts={this.shortcutsEnabled()}/>
      </div>
    );
  }
});

module.exports = PopupMenu;
