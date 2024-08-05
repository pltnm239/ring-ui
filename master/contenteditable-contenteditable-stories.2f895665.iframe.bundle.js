"use strict";(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[5190],{"./src/contenteditable/contenteditable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _contenteditable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contenteditable/contenteditable.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ContentEditable",parameters:{notes:"Provides a ContentEditable component."}},basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contenteditable__WEBPACK_IMPORTED_MODULE_1__.A,{className:"my-input","aria-label":"My input",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["text ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"bold text"})," text"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contenteditable__WEBPACK_IMPORTED_MODULE_1__.A,{className:"my-input","aria-label":"My input",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["text ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"bold text"})," text"]})})]});basic.storyName="ContentEditable",basic.parameters={storyStyles:"\n<style>\n    .my-input {\n      padding-left: 4px;\n    }\n\n    .my-input[disabled] {\n      border: 1px solid var(--ring-border-disabled-color);\n      background-color: var(--ring-disabled-background-color);\n    }\n</style>"},basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:'() => <div>\n    <ContentEditable className="my-input" aria-label="My input">\n      <span>\n        text <b>bold text</b> text\n      </span>\n    </ContentEditable>\n    <ContentEditable className="my-input" aria-label="My input" disabled>\n      <span>\n        text <b>bold text</b> text\n      </span>\n    </ContentEditable>\n  </div>',...basic.parameters?.docs?.source}}}},"./src/contenteditable/contenteditable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_dom_server__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/server.browser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function noop(){}const commonPropTypes={disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,componentDidUpdate:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onComponentUpdate:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,inputRef:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,prop_types__WEBPACK_IMPORTED_MODULE_3___default().object])};class ContentEditableBase extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={...commonPropTypes,__html:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};static defaultProps={disabled:!1,tabIndex:0,onInput:noop,onComponentUpdate:noop};shouldComponentUpdate(nextProps){return nextProps.disabled!==this.props.disabled||nextProps.__html!==this.props.__html}componentDidUpdate(prevProps){this.props.onComponentUpdate(prevProps)}render(){const{__html,onComponentUpdate,disabled,tabIndex,inputRef,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{...props,ref:inputRef,disabled,role:"textbox",tabIndex:disabled?void 0:tabIndex,contentEditable:!this.props.disabled,dangerouslySetInnerHTML:{__html}})}}const ContentEditable=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContentEditableBase,{...props,__html:(0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.qV)(children)});ContentEditable.propTypes={...commonPropTypes,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};const __WEBPACK_DEFAULT_EXPORT__=ContentEditable;ContentEditable.__docgenInfo={description:"",methods:[],displayName:"ContentEditable",props:{disabled:{description:"",type:{name:"bool"},required:!1},tabIndex:{description:"",type:{name:"number"},required:!1},componentDidUpdate:{description:"",type:{name:"func"},required:!1},onComponentUpdate:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1},inputRef:{description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},children:{description:"",type:{name:"node"},required:!1}}}}}]);