(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7198],{"./node_modules/@jetbrains/icons/checkmark.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.853 3.149c.248.24.254.636.014.884l-8.541 8.816a.625.625 0 0 1-.863.033L1.177 9.085a.625.625 0 0 1 .83-.936l3.837 3.401 8.125-8.387a.625.625 0 0 1 .884-.014Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/chevron-down.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.942 5.808a.625.625 0 0 0-.884 0L8 8.866 4.942 5.808a.625.625 0 1 0-.884.884l3.5 3.5c.244.244.64.244.884 0l3.5-3.5a.625.625 0 0 0 0-.884Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M9.918 2.065a.6.6 0 0 1 .002.849L6.849 5.998 9.924 9.07l-.424.425-.424.424-3.074-3.072-3.07 3.083a.6.6 0 1 1-.85-.847L5.153 6 2.08 2.928a.6.6 0 1 1 .849-.849L6 5.15l3.07-3.082a.6.6 0 0 1 .848-.002ZM9.5 9.495l-.424.425a.6.6 0 1 0 .848-.849l-.424.425Z" clip-rule="evenodd"/></svg>'},"./src/tags-list/tags-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,withIcons:()=>withIcons});var _jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@jetbrains/icons/checkmark.js"),_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_0__),_tags_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tags-list/tags-list.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tags List",parameters:{notes:"Displays a list of tags."}},basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tags_list__WEBPACK_IMPORTED_MODULE_2__.A,{className:"test-additional-class",tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});basic.storyName="basic";const withIcons=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tags_list__WEBPACK_IMPORTED_MODULE_2__.A,{tags:[{key:"test1",label:"test1",rgTagIcon:_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_0___default()},{key:"test2",label:"test2"}]});withIcons.storyName="with icons";const disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tags_list__WEBPACK_IMPORTED_MODULE_2__.A,{disabled:!0,tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});disabled.storyName="disabled",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => <TagsList className=\"test-additional-class\" tags={[{\n  key: 'test1',\n  label: 'test1'\n}, {\n  key: 'test2',\n  label: 'test2'\n}]} />",...basic.parameters?.docs?.source}}},withIcons.parameters={...withIcons.parameters,docs:{...withIcons.parameters?.docs,source:{originalSource:"() => <TagsList tags={[{\n  key: 'test1',\n  label: 'test1',\n  rgTagIcon: checkmarkIcon\n}, {\n  key: 'test2',\n  label: 'test2'\n}]} />",...withIcons.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:"() => <TagsList disabled tags={[{\n  key: 'test1',\n  label: 'test1'\n}, {\n  key: 'test2',\n  label: 'test2'\n}]} />",...disabled.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);