(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[2446],{"./src/scrollable-section/scrollable-section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _scrollable_section__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/scrollable-section/scrollable-section.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Scrollable Section",component:_scrollable_section__WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scrollable_section__WEBPACK_IMPORTED_MODULE_1__.A,{tabIndex:0,style:{height:100,width:200},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:300},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() =>\n// should be focusable because it's scrollable and has no interactive content\n<ScrollableSection tabIndex={0} style={{\n  height: 100,\n  width: 200\n}}>\n    <div style={{\n    width: 300\n  }}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </div>\n  </ScrollableSection>",...Default.parameters?.docs?.source}}}},"./src/scrollable-section/scrollable-section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ScrollableSection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/scrollable-section/scrollable-section.css"),_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ScrollableSection({className,...restProps}){const[scrolledToTop,setScrolledToTop]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[scrolledToRight,setScrolledToRight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[scrolledToBottom,setScrolledToBottom]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[scrolledToLeft,setScrolledToLeft]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),calculateScrollPosition=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(null!=ref.current){const{scrollTop,scrollLeft,scrollHeight,scrollWidth,offsetHeight,offsetWidth}=ref.current;setScrolledToTop(0===scrollTop),setScrolledToRight(offsetWidth+scrollLeft>=scrollWidth),setScrolledToBottom(offsetHeight+scrollTop>=scrollHeight),setScrolledToLeft(0===scrollLeft)}}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(requestAnimationFrame(calculateScrollPosition),window.addEventListener("resize",calculateScrollPosition),()=>window.removeEventListener("resize",calculateScrollPosition))),[calculateScrollPosition]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{...restProps,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default().scrollableSection,className,{[_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default().withTopBorder]:!scrolledToTop,[_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default().withRightBorder]:!scrolledToRight,[_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default().withBottomBorder]:!scrolledToBottom,[_scrollable_section_css__WEBPACK_IMPORTED_MODULE_2___default().withLeftBorder]:!scrolledToLeft}),ref,onScroll:calculateScrollPosition})}ScrollableSection.__docgenInfo={description:"",methods:[],displayName:"ScrollableSection"}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scrollable-section/scrollable-section.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"\n\n.scrollableSection_dbbb {\n  --ring-scrollable-section-top-shadow: transparent;\n  --ring-scrollable-section-right-shadow: transparent;\n  --ring-scrollable-section-bottom-shadow: transparent;\n  --ring-scrollable-section-left-shadow: transparent;\n\n  overflow: auto;\n\n  box-shadow: inset 0 1px 0 var(--ring-scrollable-section-top-shadow),\n              inset -1px 0 0 var(--ring-scrollable-section-right-shadow),\n              inset 0 -1px 0 var(--ring-scrollable-section-bottom-shadow),\n              inset 1px 0 0 var(--ring-scrollable-section-left-shadow);\n}\n\n.withTopBorder_b46e {\n  --ring-scrollable-section-top-shadow: var(--ring-line-color);\n}\n\n.withRightBorder_c7c6 {\n  --ring-scrollable-section-right-shadow: var(--ring-line-color);\n}\n\n.withBottomBorder_bbba {\n  --ring-scrollable-section-bottom-shadow: var(--ring-line-color);\n}\n\n.withLeftBorder_e17a {\n  --ring-scrollable-section-left-shadow: var(--ring-line-color);\n}\n","",{version:3,sources:["webpack://./src/scrollable-section/scrollable-section.css"],names:[],mappings:";;AAEA;EACE,iDAAiD;EACjD,mDAAmD;EACnD,oDAAoD;EACpD,kDAAkD;;EAElD,cAAc;;EAEd;;;sEAGoE;AACtE;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;EACE,8DAA8D;AAChE;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,6DAA6D;AAC/D",sourcesContent:["\n\n.scrollableSection {\n  --ring-scrollable-section-top-shadow: transparent;\n  --ring-scrollable-section-right-shadow: transparent;\n  --ring-scrollable-section-bottom-shadow: transparent;\n  --ring-scrollable-section-left-shadow: transparent;\n\n  overflow: auto;\n\n  box-shadow: inset 0 1px 0 var(--ring-scrollable-section-top-shadow),\n              inset -1px 0 0 var(--ring-scrollable-section-right-shadow),\n              inset 0 -1px 0 var(--ring-scrollable-section-bottom-shadow),\n              inset 1px 0 0 var(--ring-scrollable-section-left-shadow);\n}\n\n.withTopBorder {\n  --ring-scrollable-section-top-shadow: var(--ring-line-color);\n}\n\n.withRightBorder {\n  --ring-scrollable-section-right-shadow: var(--ring-line-color);\n}\n\n.withBottomBorder {\n  --ring-scrollable-section-bottom-shadow: var(--ring-line-color);\n}\n\n.withLeftBorder {\n  --ring-scrollable-section-left-shadow: var(--ring-line-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={scrollableSection:"scrollableSection_dbbb",withTopBorder:"withTopBorder_b46e",withRightBorder:"withRightBorder_c7c6",withBottomBorder:"withBottomBorder_bbba",withLeftBorder:"withLeftBorder_e17a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/scrollable-section/scrollable-section.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scrollable-section/scrollable-section.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);