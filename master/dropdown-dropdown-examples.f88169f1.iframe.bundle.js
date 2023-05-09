(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[3931],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/chevron-down.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="8 10.99 3.5 6.5 4.5 5.5 8 9.01 11.51 5.5 12.49 6.5 8 10.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/dropdown/dropdown.examples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{autofocusOnOpen:()=>autofocusOnOpen,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,renderProps:()=>renderProps,withActiveClassName:()=>withActiveClassName,withCustomAnchorAndPopup:()=>withCustomAnchorAndPopup,withCustomAnchorAndPopupAndContentAccessibilityHandling:()=>withCustomAnchorAndPopupAndContentAccessibilityHandling,withHoverMode:()=>withHoverMode,withHoverModeAndDisabledClickMode:()=>withHoverModeAndDisabledClickMode});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_chevron_down__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-down.js"),_jetbrains_icons_chevron_down__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_chevron_down__WEBPACK_IMPORTED_MODULE_1__),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/react-decorator.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/list/list.tsx"),_popup_popup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/popup/popup.tsx"),_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/popup-menu/popup-menu.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/button/button.tsx"),_link_link__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/link/link.tsx"),_input_input__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/input/input.tsx"),_global_get_uid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/get-uid.ts"),_dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/dropdown.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:"import React from 'react';\nimport chevronDownIcon from '@jetbrains/icons/chevron-down';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport {ActiveItemContext} from '../list/list';\n\nimport Popup from '../popup/popup';\nimport PopupMenu from '../popup-menu/popup-menu';\nimport Button from '../button/button';\nimport Link from '../link/link';\nimport Input from '../input/input';\nimport getUID from '../global/get-uid';\n\nimport Dropdown from './dropdown';\n\nexport default {\n  title: 'Components/Dropdown',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'A stateful popup with a clickable anchor.',\n\n    hermione: {\n      actions: [\n        {type: 'click', selector: '[data-test~=ring-dropdown]'},\n        {\n          type: 'capture',\n          name: 'dropdown',\n          selector: ['[data-test~=ring-dropdown]', '[data-test~=ring-popup]']\n        }\n      ]\n    }\n  }\n};\n\nexport const basic = () => (\n  <Dropdown anchor=\"Click me\">\n    <Popup>Popup content</Popup>\n  </Dropdown>\n);\n\nbasic.storyName = 'basic';\n\nexport const withCustomAnchorAndPopup = () => (\n  <Dropdown anchor={<Button delayed>Edit</Button>}>\n    <PopupMenu closeOnSelect data={['Cut', 'Copy', 'Paste'].map(label => ({label}))}/>\n  </Dropdown>\n);\n\nexport const withCustomAnchorAndPopupAndContentAccessibilityHandling = () => {\n  const listId = getUID('popup-menu-list-id');\n\n  return (\n    <ActiveItemContext.Provider>\n      <Dropdown anchor={({active}) => (\n        <ActiveItemContext.ValueContext.Consumer>\n          {activeItemId => {\n            const anchorAriaProps = active && activeItemId\n              ? {'aria-owns': listId, 'aria-activedescendant': activeItemId}\n              : {};\n            return (\n              <Button\n                {...anchorAriaProps}\n                delayed\n              >Edit</Button>\n            );\n          }}\n        </ActiveItemContext.ValueContext.Consumer>\n      )}\n      >\n        <PopupMenu\n          id={listId}\n          ariaLabel=\"My options menu\"\n          closeOnSelect\n          activateFirstItem\n          data={['Cut', 'Copy', 'Paste'].map(label => ({label, key: label.toLowerCase()}))}\n        />\n      </Dropdown>\n    </ActiveItemContext.Provider>\n  );\n};\n\nwithCustomAnchorAndPopup.storyName = 'with custom anchor and popup';\n\nexport const withActiveClassName = () => (\n  <Dropdown\n    className=\"chevron\"\n    activeClassName=\"rotated\"\n    anchor={<Button title=\"Details\" icon={chevronDownIcon}/>}\n  >\n    <Popup>Popup content</Popup>\n  </Dropdown>\n);\n\nwithActiveClassName.storyName = 'with activeClassName';\n\nwithActiveClassName.parameters = {\n  storyStyles: `\n<style>\n  .chevron svg {\n    transition: transform 0.3s ease-out;\n    transform-origin: 50% 40%;\n    transform: rotate(0deg);\n  }\n\n  .rotated svg {\n    transform: rotate(180deg);\n  }\n</style>`\n};\n\nexport const withHoverMode = () => (\n  <Dropdown anchor=\"Hover over me\" hoverMode>\n    <Popup>\n      <div>Outer popup</div>\n    </Popup>\n  </Dropdown>\n);\n\nwithHoverMode.storyName = 'with hover mode';\n\nexport const withHoverModeAndDisabledClickMode = () => (\n  <Dropdown anchor={<Link href=\"\">Hover over me</Link>} clickMode={false} hoverMode>\n    <Popup>Popup content</Popup>\n  </Dropdown>\n);\n\nwithHoverModeAndDisabledClickMode.storyName = 'with hover mode and disabled click mode';\nwithHoverModeAndDisabledClickMode.parameters = {hermione: {skip: true}};\n\nexport const autofocusOnOpen = () => (\n  <div>\n    <div style={{height: '90vh'}}/>\n    <Dropdown anchor=\"Scroll and then click me\">\n      <Popup trapFocus autoFocusFirst>\n        <Input className=\"ring-js-shortcuts\"/>\n      </Popup>\n    </Dropdown>\n    <div style={{height: '50vh'}}/>\n  </div>\n);\n\nautofocusOnOpen.storyName = 'autofocus on open';\nautofocusOnOpen.parameters = {hermione: {skip: true}};\n\nexport const renderProps = () => (\n  <Dropdown anchor=\"Click me\">\n    {props => <Popup {...props}><Button onClick={props.onCloseAttempt} text>Close</Button></Popup>}\n  </Dropdown>\n);\nrenderProps.parameters = {hermione: {skip: true}};\n",locationsMap:{basic:{startLoc:{col:21,line:37},endLoc:{col:1,line:41},startBody:{col:21,line:37},endBody:{col:1,line:41}},"with-custom-anchor-and-popup":{startLoc:{col:40,line:45},endLoc:{col:1,line:49},startBody:{col:40,line:45},endBody:{col:1,line:49}},"with-custom-anchor-and-popup-and-content-accessibility-handling":{startLoc:{col:71,line:51},endLoc:{col:1,line:82},startBody:{col:71,line:51},endBody:{col:1,line:82}},"with-active-class-name":{startLoc:{col:35,line:86},endLoc:{col:1,line:94},startBody:{col:35,line:86},endBody:{col:1,line:94}},"with-hover-mode":{startLoc:{col:29,line:113},endLoc:{col:1,line:119},startBody:{col:29,line:113},endBody:{col:1,line:119}},"with-hover-mode-and-disabled-click-mode":{startLoc:{col:49,line:123},endLoc:{col:1,line:127},startBody:{col:49,line:123},endBody:{col:1,line:127}},"autofocus-on-open":{startLoc:{col:31,line:132},endLoc:{col:1,line:142},startBody:{col:31,line:132},endBody:{col:1,line:142}},"render-props":{startLoc:{col:27,line:147},endLoc:{col:1,line:151},startBody:{col:27,line:147},endBody:{col:1,line:151}}}},notes:"A stateful popup with a clickable anchor.",hermione:{actions:[{type:"click",selector:"[data-test~=ring-dropdown]"},{type:"capture",name:"dropdown",selector:["[data-test~=ring-dropdown]","[data-test~=ring-popup]"]}]}}},basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:"Click me"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,null,"Popup content"));basic.storyName="basic";const withCustomAnchorAndPopup=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_5__.ZP,{delayed:!0},"Edit")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_6__.default,{closeOnSelect:!0,data:["Cut","Copy","Paste"].map((label=>({label})))})),withCustomAnchorAndPopupAndContentAccessibilityHandling=()=>{const listId=(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_7__.Z)("popup-menu-list-id");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_8__.t.Provider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:_ref=>{let{active}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_8__.t.ValueContext.Consumer,null,(activeItemId=>{const anchorAriaProps=active&&activeItemId?{"aria-owns":listId,"aria-activedescendant":activeItemId}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_5__.ZP,_extends({},anchorAriaProps,{delayed:!0}),"Edit")}))}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_menu_popup_menu__WEBPACK_IMPORTED_MODULE_6__.default,{id:listId,ariaLabel:"My options menu",closeOnSelect:!0,activateFirstItem:!0,data:["Cut","Copy","Paste"].map((label=>({label,key:label.toLowerCase()})))})))};withCustomAnchorAndPopup.storyName="with custom anchor and popup";const withActiveClassName=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"chevron",activeClassName:"rotated",anchor:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_5__.ZP,{title:"Details",icon:_jetbrains_icons_chevron_down__WEBPACK_IMPORTED_MODULE_1___default()})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,null,"Popup content"));withActiveClassName.storyName="with activeClassName",withActiveClassName.parameters={storyStyles:"\n<style>\n  .chevron svg {\n    transition: transform 0.3s ease-out;\n    transform-origin: 50% 40%;\n    transform: rotate(0deg);\n  }\n\n  .rotated svg {\n    transform: rotate(180deg);\n  }\n</style>"};const withHoverMode=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:"Hover over me",hoverMode:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Outer popup")));withHoverMode.storyName="with hover mode";const withHoverModeAndDisabledClickMode=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_link__WEBPACK_IMPORTED_MODULE_9__.ZP,{href:""},"Hover over me"),clickMode:!1,hoverMode:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,null,"Popup content"));withHoverModeAndDisabledClickMode.storyName="with hover mode and disabled click mode",withHoverModeAndDisabledClickMode.parameters={hermione:{skip:!0}};const autofocusOnOpen=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"90vh"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:"Scroll and then click me"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,{trapFocus:!0,autoFocusFirst:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_input__WEBPACK_IMPORTED_MODULE_10__.ZP,{className:"ring-js-shortcuts"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"50vh"}}));autofocusOnOpen.storyName="autofocus on open",autofocusOnOpen.parameters={hermione:{skip:!0}};const renderProps=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{anchor:"Click me"},(props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_4__.default,props,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_5__.ZP,{onClick:props.onCloseAttempt,text:!0},"Close"))));renderProps.parameters={hermione:{skip:!0}},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),withCustomAnchorAndPopup.__docgenInfo={description:"",methods:[],displayName:"withCustomAnchorAndPopup"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"withCustomAnchorAndPopup",docgenInfo:withCustomAnchorAndPopup.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),withCustomAnchorAndPopupAndContentAccessibilityHandling.__docgenInfo={description:"",methods:[],displayName:"withCustomAnchorAndPopupAndContentAccessibilityHandling"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"withCustomAnchorAndPopupAndContentAccessibilityHandling",docgenInfo:withCustomAnchorAndPopupAndContentAccessibilityHandling.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),withActiveClassName.__docgenInfo={description:"",methods:[],displayName:"withActiveClassName"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"withActiveClassName",docgenInfo:withActiveClassName.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),withHoverMode.__docgenInfo={description:"",methods:[],displayName:"withHoverMode"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"withHoverMode",docgenInfo:withHoverMode.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),withHoverModeAndDisabledClickMode.__docgenInfo={description:"",methods:[],displayName:"withHoverModeAndDisabledClickMode"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"withHoverModeAndDisabledClickMode",docgenInfo:withHoverModeAndDisabledClickMode.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),autofocusOnOpen.__docgenInfo={description:"",methods:[],displayName:"autofocusOnOpen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"autofocusOnOpen",docgenInfo:autofocusOnOpen.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"}),renderProps.__docgenInfo={description:"",methods:[],displayName:"renderProps"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.examples.tsx"]={name:"renderProps",docgenInfo:renderProps.__docgenInfo,path:"src/dropdown/dropdown.examples.tsx"})},"./src/dropdown/anchor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/chevron-10px.js"),_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/button.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Anchor=_ref=>{let{children,className,...restProps}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_4__.ZP,_extends({"data-test-ring-dropdown-anchor":!0,text:!0,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().anchor,className)},restProps),children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.ZP,{glyph:_jetbrains_icons_chevron_10px__WEBPACK_IMPORTED_MODULE_1___default(),className:_dropdown_css__WEBPACK_IMPORTED_MODULE_3___default().chevron}))};Anchor.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Anchor.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Anchor);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/anchor.tsx"]={name:"Anchor",docgenInfo:Anchor.__docgenInfo,path:"src/dropdown/anchor.tsx"})},"./src/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Dropdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/typescript-utils.ts"),_anchor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dropdown/anchor.tsx"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown/dropdown.css"),_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_dropdown_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={anchor:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().element,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]).isRequired,initShown:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,clickMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverMode:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,hoverShowTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,hoverHideTimeOut:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onShow:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onHide:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};static defaultProps={initShown:!1,clickMode:!0,hoverMode:!1,hoverShowTimeOut:300,hoverHideTimeOut:600,disabled:!1,onShow:()=>{},onHide:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};state={show:this.props.initShown,pinned:!1};onClick=()=>{if(this.props.disabled)return;const{show,pinned}=this.state;let nextPinned=pinned;if(this.props.hoverMode)if(pinned)nextPinned=!1;else if(nextPinned=!0,show)return void this.setState({pinned:!0});this._toggle(!show,nextPinned)};onChildCloseAttempt=()=>{let nextPinned=this.state.pinned;this.props.hoverMode&&(nextPinned=!1),this._toggle(!1,nextPinned)};hoverTimer;onMouseEnter=event=>{this.props.disabled||(this._clearTimer(),this.props.onMouseEnter?.(event),this.hoverTimer=window.setTimeout((()=>{this.state.show||this._toggle(!0)}),this.props.hoverShowTimeOut))};onMouseLeave=event=>{this.props.disabled||(this.props.onMouseLeave?.(event),this.state.pinned||(this._clearTimer(),this.hoverTimer=window.setTimeout((()=>{this.state.show&&this._toggle(!1)}),this.props.hoverHideTimeOut)))};handlePopupInteraction=()=>{this.setState((_ref=>{let{pinned}=_ref;return pinned?null:{pinned:!0}}))};toggle(){let show=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.show;this._toggle(show)}_toggle(show){let pinned=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.pinned;this.setState({show,pinned},(()=>show?this.props.onShow():this.props.onHide()))}_clearTimer(){this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)}render(){const{show,pinned}=this.state,{initShown,onShow,onHide,hoverShowTimeOut,hoverHideTimeOut,children,anchor,className,activeClassName,hoverMode,clickMode,"data-test":dataTest,disabled,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_dropdown_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown,className,{[null!=activeClassName?activeClassName:""]:null!=activeClassName&&show});let anchorElement;const active=hoverMode?pinned:show;switch(typeof anchor){case"string":anchorElement=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_anchor__WEBPACK_IMPORTED_MODULE_4__.Z,{active},anchor);break;case"function":anchorElement=anchor({active:show,pinned});break;default:anchorElement=(0,_global_typescript_utils__WEBPACK_IMPORTED_MODULE_5__.k)(anchor)||"string"==typeof anchor.type?anchor:(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,{active})}const childProps={hidden:!show,onCloseAttempt:this.onChildCloseAttempt,onMouseDown:hoverMode?this.handlePopupInteraction:void 0,onContextMenu:hoverMode?this.handlePopupInteraction:void 0,dontCloseOnAnchorClick:!0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.Z)("ring-dropdown",dataTest)},restProps,{onClick:clickMode?this.onClick:void 0,role:"presentation",onMouseEnter:hoverMode?this.onMouseEnter:void 0,onMouseLeave:hoverMode?this.onMouseLeave:void 0,className:classes}),anchorElement,"function"==typeof children?children(childProps):(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,childProps))}}Dropdown.__docgenInfo={description:"@name Dropdown",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onChildCloseAttempt",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseEnter",docblock:null,modifiers:[],params:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],returns:null},{name:"onMouseLeave",docblock:null,modifiers:[],params:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],returns:null},{name:"handlePopupInteraction",docblock:null,modifiers:[],params:[],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[{name:"show",type:null}],returns:null},{name:"_toggle",docblock:null,modifiers:[],params:[{name:"show",type:{name:"boolean"}},{name:"pinned",type:null}],returns:null},{name:"_clearTimer",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dropdown",props:{initShown:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},clickMode:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},hoverMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},hoverShowTimeOut:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:"",tsType:{name:"number"}},hoverHideTimeOut:{defaultValue:{value:"600",computed:!1},type:{name:"number"},required:!1,description:"",tsType:{name:"number"}},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},onShow:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},onHide:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"unknown"}},onMouseEnter:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},onMouseLeave:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},anchor:{type:{name:"union",value:[{name:"node"},{name:"func"}]},required:!0,description:"Can be string, React element, or a function accepting an object with {active, pinned} properties and returning a React element\nReact element should render some interactive HTML element like `button` or `a`",tsType:{name:"union",raw:"ReactElement | readonly ReactElement[] | string | ((props: AnchorProps) => ReactNode)",elements:[{name:"ReactElement"},{name:"unknown"},{name:"string"},{name:"unknown"}]}},children:{type:{name:"union",value:[{name:"element"},{name:"func"}]},required:!0,description:"",tsType:{name:"union",raw:"ReactElement<PopupAttrs> | ((props: Omit<PopupAttrs, 'children'>) => ReactNode)",elements:[{name:"ReactElement",elements:[{name:"PopupAttrs"}],raw:"ReactElement<PopupAttrs>"},{name:"unknown"}]}},className:{type:{name:"string"},required:!1,description:""},activeClassName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["Omit"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.tsx"]={name:"Dropdown",docgenInfo:Dropdown.__docgenInfo,path:"src/dropdown/dropdown.tsx"})},"./src/global/typescript-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>isTruthy,k:()=>isArray});const isArray=arg=>Array.isArray(arg),isTruthy=arg=>Boolean(arg)},"./src/popup-menu/popup-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>ListProps,default:()=>PopupMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_popup_popup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/popup/popup.tsx"),_list_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/list/list.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{children,...popupPropTypes}=_popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.propTypes||{};class PopupMenu extends _popup_popup__WEBPACK_IMPORTED_MODULE_1__.default{static isItemType=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.isItemType;static ListProps=_list_list__WEBPACK_IMPORTED_MODULE_2__.default.ListProps;static defaultProps={..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps,..._popup_popup__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps,renderOptimization:!1,closeOnSelect:!1};onSelect=(item,event)=>{this.props.closeOnSelect&&this._onCloseAttempt(event),this.props.onSelect(item,event)};list;listRef=el=>{this.list=el};getInternalContent(){const{className,...props}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_list__WEBPACK_IMPORTED_MODULE_2__.default,_extends({ref:this.listRef},props,{maxHeight:this.popup&&parseFloat(this.popup.style.maxHeight),shortcuts:this.shouldUseShortcuts(),onSelect:this.onSelect})))}}PopupMenu.propTypes={...popupPropTypes,..._list_list__WEBPACK_IMPORTED_MODULE_2__.default.propTypes,closeOnSelect:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const{ListProps}=_list_list__WEBPACK_IMPORTED_MODULE_2__.default},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".dropdown_c237 {\n  display: inline-block;\n}\n\n.anchor_dff2.anchor_dff2 {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron_a400 {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n","",{version:3,sources:["webpack://./src/dropdown/dropdown.css"],names:[],mappings:"AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,gBAAgB;;EAEhB,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n.dropdown {\n  display: inline-block;\n}\n\n.anchor.anchor {\n  margin: 0 -3px;\n  padding: 0 3px;\n\n  font: inherit;\n}\n\n.chevron {\n  margin-left: 2px;\n\n  line-height: normal;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dropdown:"dropdown_c237",anchor:"anchor_dff2",chevron:"chevron_a400"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/dropdown/dropdown.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dropdown/dropdown.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);