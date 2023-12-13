(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[4925],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./src/caret/caret.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_link_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/link/link.tsx"),_input_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/input/input.tsx"),_caret__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/caret/caret.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Utilities/Caret",parameters:{storySource:{source:"import React, {useEffect, useRef} from 'react';\n\nimport Link from '../link/link';\n\nimport Input from '../input/input';\n\nimport Caret from './caret';\n\nexport default {\n  title: 'Utilities/Caret',\n\n  parameters: {\n    notes:\n      'Allows manipulation of the caret position in a text box or a contenteditable element. Ported from [jquery-caret](https://github.com/accursoft/caret/).',\n    hermione: {skip: true}\n  }\n};\n\nexport const Basic = () => {\n  const input = useRef<HTMLTextAreaElement>(null);\n  const caret = useRef<Caret>();\n  useEffect(() => {\n    if (input.current != null) {\n      caret.current = new Caret(input.current);\n    }\n  }, []);\n\n  return (\n    <>\n      <Input\n        multiline\n        inputRef={input}\n        label=\"Textarea\"\n        defaultValue={`Lorem ipsum\ndolor sit amet`}\n      />\n      <div>\n        <Link\n          pseudo\n          onClick={event => {\n            caret.current?.focus();\n            caret.current?.setPosition(4);\n            event.preventDefault();\n          }}\n        >Set caret position</Link>\n      </div>\n    </>\n  );\n};\n\nBasic.storyName = 'Caret';\n",locationsMap:{basic:{startLoc:{col:21,line:19},endLoc:{col:1,line:49},startBody:{col:21,line:19},endBody:{col:1,line:49}}}},notes:"Allows manipulation of the caret position in a text box or a contenteditable element. Ported from [jquery-caret](https://github.com/accursoft/caret/).",hermione:{skip:!0}}},Basic=()=>{const input=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),caret=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{null!=input.current&&(caret.current=new _caret__WEBPACK_IMPORTED_MODULE_1__.Z(input.current))}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_input__WEBPACK_IMPORTED_MODULE_2__.ZP,{multiline:!0,inputRef:input,label:"Textarea",defaultValue:"Lorem ipsum\ndolor sit amet"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_link__WEBPACK_IMPORTED_MODULE_3__.Z,{pseudo:!0,onClick:event=>{caret.current?.focus(),caret.current?.setPosition(4),event.preventDefault()}},"Set caret position")))};Basic.storyName="Caret"},"./src/caret/caret.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Caret});var _global_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/global/dom.ts");class Caret{static returnRE=/\r/g;static normalizeNewlines(value){return"string"==typeof value?value.replace(this.returnRE,""):value}target;constructor(target){this.target=target}isContentEditable(){return"true"===this.target.contentEditable}focus(){document.activeElement&&document.activeElement===this.target||this.target.focus()}getAbsolutePosition(node){let _curNode=node,curPos=0;for(;null!=_curNode&&_curNode!==this.target;){for(;_curNode.previousSibling;){var _curNode$previousSibl;curPos+=null!==(_curNode$previousSibl=_curNode.previousSibling.textContent?.length)&&void 0!==_curNode$previousSibl?_curNode$previousSibl:0,_curNode=_curNode.previousSibling}_curNode=_curNode.parentNode}return curPos}getPosition(params={}){if(this.isContentEditable()){params.avoidFocus||this.focus();const selection=window.getSelection();if(!selection?.rangeCount)return 0;const range1=selection.getRangeAt(0),range2=range1.cloneRange();range2.selectNodeContents(this.target),range2.setEnd(range1.endContainer,range1.endOffset);const _curNode=range1.startContainer;if(this.target===_curNode)return 0===range1.startOffset||null==_curNode.textContent?0:_curNode.textContent.length;if(!this.target.contains(_curNode))return-1;if(!_curNode)return"selectionStart"in this.target&&this.target.selectionStart||-1;const curPos=this.getAbsolutePosition(_curNode);if(range1.startContainer===range1.endContainer)return range1.startOffset===range1.endOffset?curPos+range1.startOffset:{startOffset:curPos+range1.startOffset,endOffset:curPos+range1.endOffset,position:range2.toString().length};return{startOffset:curPos+range1.startOffset,endOffset:this.getAbsolutePosition(range1.endContainer)+range1.endOffset,position:range2.toString().length}}return"selectionStart"in this.target&&this.target.selectionStart||-1}getRelativePosition(curNode,position){let curPos=0,_curNode=curNode;if(!_curNode)return{_curNode:this.target,_correctedPosition:position};if(0===position){for(;3!==_curNode.nodeType;)_curNode=_curNode.childNodes[0];return{_curNode,_correctedPosition:position}}let i=-1;if(_curNode&&void 0!==_curNode.nodeType)for(;curPos<position&&3!==_curNode.nodeType&&(i++,null!=_curNode.childNodes[i]);){var _curNode$childNodes$i,_curNode$textContent$;curPos+=null!==(_curNode$childNodes$i=_curNode.childNodes[i].textContent?.length)&&void 0!==_curNode$childNodes$i?_curNode$childNodes$i:0,curPos>=position&&(_curNode=_curNode.childNodes[i],curPos-=null!==(_curNode$textContent$=_curNode.textContent?.length)&&void 0!==_curNode$textContent$?_curNode$textContent$:0,i=-1)}return{_curNode,_correctedPosition:position-curPos}}setPosition(position){const isContentEditable=this.isContentEditable();let correctedPosition,curNode=this.target&&this.target.childNodes[0];if(void 0!==position)if("object"==typeof position){const range=new Range,start=this.getRelativePosition(curNode,position.startOffset);range.setStart(start._curNode,start._correctedPosition);const end=this.getRelativePosition(curNode,position.endOffset);range.setEnd(end._curNode,end._correctedPosition),correctedPosition=range}else if(-1===position){var _value$length;const value=isContentEditable?this.target.textContent:Caret.normalizeNewlines("value"in this.target?this.target.value:void 0);correctedPosition=null!==(_value$length=value?.length)&&void 0!==_value$length?_value$length:0}else{const{_curNode,_correctedPosition}=this.getRelativePosition(curNode,position);curNode=_curNode,correctedPosition=_correctedPosition}if(isContentEditable){this.focus();try{correctedPosition instanceof Range?(window.getSelection()?.removeAllRanges(),window.getSelection()?.addRange(correctedPosition)):window.getSelection()?.collapse(curNode||this.target,correctedPosition)}catch(e){}}else"setSelectionRange"in this.target&&"number"==typeof correctedPosition&&this.target.setSelectionRange(correctedPosition,correctedPosition);return correctedPosition}getOffset(){let range,offset=0;try{range=window.getSelection()?.getRangeAt(0).cloneRange(),range?.setStart(range.startContainer,range.startOffset-1)}catch(e){return offset}return range&&0!==range.endOffset&&""!==range.toString()&&(offset=(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(range).right-(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(this.target).left-(range.startContainer instanceof HTMLElement&&range.startContainer.offsetLeft||0)),offset}}},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_3__.Z;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]),"data-test":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button"},props,{className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_5__.Z)("ring-link",dataTest)}),children):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent,_extends({},props,{href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_5__.Z)("ring-link",dataTest)}),children)}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_3__.Z)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (min-resolution: 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (min-resolution: 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);