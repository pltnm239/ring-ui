(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[8206],{"./node_modules/@jetbrains/icons/checkmark.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.853 3.149c.248.24.254.636.014.884l-8.541 8.816a.625.625 0 0 1-.863.033L1.177 9.085a.625.625 0 0 1 .83-.936l3.837 3.401 8.125-8.387a.625.625 0 0 1 .884-.014Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/chevron-down.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.942 5.808a.625.625 0 0 0-.884 0L8 8.866 4.942 5.808a.625.625 0 1 0-.884.884l3.5 3.5c.244.244.64.244.884 0l3.5-3.5a.625.625 0 0 0 0-.884Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884L8.883 8.006l4.546 4.552a.625.625 0 1 1-.884.884L8 8.89l-4.545 4.55a.625.625 0 0 1-.884-.883l4.546-4.552-4.56-4.564a.625.625 0 1 1 .885-.884L8 7.122l4.558-4.564a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/exception.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8.85 5a.85.85 0 1 0-1.7 0v3a.85.85 0 0 0 1.7 0V5ZM8 9.95a.85.85 0 0 0 0 1.7h.007a.85.85 0 0 0 0-1.7H8Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/warning.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.7 14.243c.29.171.63.257 1.024.257h10.473c.393 0 .732-.086 1.016-.257.29-.172.513-.402.67-.691.159-.29.238-.61.238-.962a1.917 1.917 0 0 0-.271-.983L9.606 2.47a1.818 1.818 0 0 0-.718-.725A1.888 1.888 0 0 0 7.96 1.5c-.325 0-.636.081-.935.244a1.775 1.775 0 0 0-.71.725L1.07 11.607a2.018 2.018 0 0 0-.04 1.944c.157.29.38.52.67.692Zm6.267-4.43c-.393 0-.596-.2-.61-.597l-.094-3.292a.607.607 0 0 1 .182-.488.7.7 0 0 1 .509-.19.71.71 0 0 1 .514.197.59.59 0 0 1 .19.48L8.55 9.217c-.01.397-.204.596-.583.596Zm0 2.248a.829.829 0 0 1-.569-.21.706.706 0 0 1-.23-.535c0-.212.077-.388.23-.528a.814.814 0 0 1 .57-.217c.216 0 .401.07.555.21.158.14.237.318.237.535a.683.683 0 0 1-.237.535.811.811 0 0 1-.556.21Z" clip-rule="evenodd"/></svg>'},"./src/alert-service/alert-service.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_dom_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-dom/client.js"),_global_get_uid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/get-uid.ts"),_alert_alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/alert/container.tsx"),_alert_alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/alert/alert.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=new class AlertService{defaultTimeout=0;showingAlerts=[];containerElement=document.createElement("div");reactRoot=(0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(this.containerElement);_getShowingAlerts(){return[...this.showingAlerts]}renderAlertContainer(alerts){return 0===alerts.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_alert_alert__WEBPACK_IMPORTED_MODULE_2__.A,{children:alerts.map((alert=>{const{message,key,...rest}=alert;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay,{...rest,children:message},key)}))})}renderAlerts(){this.reactRoot.render(this.renderAlertContainer(this.showingAlerts))}findSameAlert(message,type){return this.showingAlerts.filter((it=>it.type===type&&it.message===message))[0]}startAlertClosing(alert){alert.isClosing=!0,this.renderAlerts()}remove(key){const alertToClose=this.showingAlerts.filter((alert=>alert.key===key))[0];alertToClose&&this.startAlertClosing(alertToClose)}removeWithoutAnimation(key){this.showingAlerts=this.showingAlerts.filter((alert=>alert.key!==key)),this.renderAlerts()}stopShakingWhenAnimationDone(shakingAlert){setTimeout((()=>{shakingAlert.showWithAnimation=!1,shakingAlert.isShaking=!1,this.renderAlerts()}),_alert_alert__WEBPACK_IMPORTED_MODULE_3__.hH)}addAlert(message,type,timeout=this.defaultTimeout,options={}){const{onCloseRequest,onClose,...restOptions}=options,sameAlert=this.findSameAlert(message,type);if(sameAlert)return sameAlert.isShaking=!0,this.renderAlerts(),this.stopShakingWhenAnimationDone(sameAlert),sameAlert.key;const alert={key:(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_4__.A)("alert-service-"),message,type,timeout,isClosing:!1,onCloseRequest:()=>{onCloseRequest&&onCloseRequest(),this.startAlertClosing(alert)},onClose:()=>{onClose&&onClose(),this.removeWithoutAnimation(alert.key)},...restOptions};return this.showingAlerts=[alert,...this.showingAlerts],this.renderAlerts(),alert.key}setDefaultTimeout(timeout){this.defaultTimeout=timeout}error(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.ERROR,timeout)}message(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.MESSAGE,timeout)}warning(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.WARNING,timeout)}successMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.SUCCESS,timeout)}loadingMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.LOADING,timeout)}}},"./src/clipboard/clipboard.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>clipboard_clipboard});var alert_service=__webpack_require__("./src/alert-service/alert-service.tsx");function getClipboardImplementation(){return navigator.clipboard&&!window.isSecureContext?{copy:text=>navigator.clipboard.writeText(text),copyHTML:html=>navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([html],{type:"text/html"})})])}:{copy:str=>Promise.resolve(function copyTextToClipboard(str){const el=document.createElement("textarea");el.value=str,el.setAttribute("readonly",""),el.style.position="absolute",el.style.left="-9999px",document.body.appendChild(el);const selection=document.getSelection(),selected=!!(selection&&selection.rangeCount>0)&&selection.getRangeAt(0);el.select(),document.execCommand("copy"),document.body.removeChild(el),selected&&selection&&(selection.removeAllRanges(),selection.addRange(selected))}(str)),copyHTML:html=>Promise.resolve(function copyHTMLToClipboard(str){const el=document.createElement("div");el.innerHTML=str,el.setAttribute("readonly",""),el.style.position="absolute",el.style.left="-9999px",document.body.appendChild(el);const selection=document.getSelection(),selected=!!(selection&&selection.rangeCount>0)&&selection.getRangeAt(0);selection?.removeAllRanges();const range=document.createRange();range.selectNode(el),selection?.addRange(range),document.execCommand("copy"),selection?.removeAllRanges(),document.execCommand("copy"),document.body.removeChild(el),selected&&selection&&selection.addRange(selected)}(html))}}async function copy(text,successMessage,errorMessage,delay=1e3,isHtml=!1){try{const clipboardImpl=getClipboardImplementation(),copyMethod=isHtml?clipboardImpl.copyHTML:clipboardImpl.copy;await copyMethod(text),successMessage&&alert_service.A.successMessage(successMessage,delay)}catch(e){errorMessage&&alert_service.A.error(errorMessage,delay),console.error(e)}}const clipboard_clipboard={copyText:async(text,successMessage,errorMessage,delay=1e3)=>await copy(text,successMessage,errorMessage,delay),copyHTML:async(html,successMessage,errorMessage,delay=1e3)=>await copy(html,successMessage,errorMessage,delay,!0)}},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func};render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",...props,className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComposedComponent,{...props,href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.A)("ring-link",dataTest),children})}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_4__.A)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (resolution >= 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (resolution >= 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/clipboard/clipboard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{copyToClipboard:()=>copyToClipboard,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_link_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.tsx"),_clipboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/clipboard/clipboard.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Clipboard",parameters:{notes:"Displays a link which copies test to clipboard.",screenshots:{skip:!0}}},DEMO_TEXT="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.",copyToClipboard=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:DEMO_TEXT}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_link_link__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:()=>_clipboard__WEBPACK_IMPORTED_MODULE_3__.A.copyText(DEMO_TEXT,"Text copied!","Text copying error"),pseudo:!0,children:"Copy"})})]});copyToClipboard.parameters={...copyToClipboard.parameters,docs:{...copyToClipboard.parameters?.docs,source:{originalSource:"() => <Fragment>\n    <div>{DEMO_TEXT}</div>\n    <div>\n      <Link onClick={() => clipboard.copyText(DEMO_TEXT, 'Text copied!', 'Text copying error')} pseudo>\n        Copy\n      </Link>\n    </div>\n  </Fragment>",...copyToClipboard.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);