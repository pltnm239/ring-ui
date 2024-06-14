(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[8022],{"./node_modules/@jetbrains/icons/checkmark.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.853 3.149c.248.24.254.636.014.884l-8.541 8.816a.625.625 0 0 1-.863.033L1.177 9.085a.625.625 0 0 1 .83-.936l3.837 3.401 8.125-8.387a.625.625 0 0 1 .884-.014Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884L8.883 8.006l4.546 4.552a.625.625 0 1 1-.884.884L8 8.89l-4.545 4.55a.625.625 0 0 1-.884-.883l4.546-4.552-4.56-4.564a.625.625 0 1 1 .885-.884L8 7.122l4.558-4.564a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/exception.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8.85 5a.85.85 0 1 0-1.7 0v3a.85.85 0 0 0 1.7 0V5ZM8 9.95a.85.85 0 0 0 0 1.7h.007a.85.85 0 0 0 0-1.7H8Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/warning.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.7 14.243c.29.171.63.257 1.024.257h10.473c.393 0 .732-.086 1.016-.257.29-.172.513-.402.67-.691.159-.29.238-.61.238-.962a1.917 1.917 0 0 0-.271-.983L9.606 2.47a1.818 1.818 0 0 0-.718-.725A1.888 1.888 0 0 0 7.96 1.5c-.325 0-.636.081-.935.244a1.775 1.775 0 0 0-.71.725L1.07 11.607a2.018 2.018 0 0 0-.04 1.944c.157.29.38.52.67.692Zm6.267-4.43c-.393 0-.596-.2-.61-.597l-.094-3.292a.607.607 0 0 1 .182-.488.7.7 0 0 1 .509-.19.71.71 0 0 1 .514.197.59.59 0 0 1 .19.48L8.55 9.217c-.01.397-.204.596-.583.596Zm0 2.248a.829.829 0 0 1-.569-.21.706.706 0 0 1-.23-.535c0-.212.077-.388.23-.528a.814.814 0 0 1 .57-.217c.216 0 .401.07.555.21.158.14.237.318.237.535a.683.683 0 0 1-.237.535.811.811 0 0 1-.556.21Z" clip-rule="evenodd"/></svg>'},"./src/alert-service/alert-service.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_dom_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-dom/client.js"),_global_get_uid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/get-uid.ts"),_alert_alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/alert/container.tsx"),_alert_alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/alert/alert.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=new class AlertService{defaultTimeout=0;showingAlerts=[];containerElement=document.createElement("div");reactRoot=(0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(this.containerElement);_getShowingAlerts(){return[...this.showingAlerts]}renderAlertContainer(alerts){return 0===alerts.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_alert_alert__WEBPACK_IMPORTED_MODULE_2__.A,{children:alerts.map((alert=>{const{message,key,...rest}=alert;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay,{...rest,children:message},key)}))})}renderAlerts(){this.reactRoot.render(this.renderAlertContainer(this.showingAlerts))}findSameAlert(message,type){return this.showingAlerts.filter((it=>it.type===type&&it.message===message))[0]}startAlertClosing(alert){alert.isClosing=!0,this.renderAlerts()}remove(key){const alertToClose=this.showingAlerts.filter((alert=>alert.key===key))[0];alertToClose&&this.startAlertClosing(alertToClose)}removeWithoutAnimation(key){this.showingAlerts=this.showingAlerts.filter((alert=>alert.key!==key)),this.renderAlerts()}stopShakingWhenAnimationDone(shakingAlert){setTimeout((()=>{shakingAlert.showWithAnimation=!1,shakingAlert.isShaking=!1,this.renderAlerts()}),_alert_alert__WEBPACK_IMPORTED_MODULE_3__.hH)}addAlert(message,type,timeout=this.defaultTimeout,options={}){const{onCloseRequest,onClose,...restOptions}=options,sameAlert=this.findSameAlert(message,type);if(sameAlert)return sameAlert.isShaking=!0,this.renderAlerts(),this.stopShakingWhenAnimationDone(sameAlert),sameAlert.key;const alert={key:(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_4__.A)("alert-service-"),message,type,timeout,isClosing:!1,onCloseRequest:()=>{onCloseRequest&&onCloseRequest(),this.startAlertClosing(alert)},onClose:()=>{onClose&&onClose(),this.removeWithoutAnimation(alert.key)},...restOptions};return this.showingAlerts=[alert,...this.showingAlerts],this.renderAlerts(),alert.key}setDefaultTimeout(timeout){this.defaultTimeout=timeout}error(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.ERROR,timeout)}message(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.MESSAGE,timeout)}warning(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.WARNING,timeout)}successMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.SUCCESS,timeout)}loadingMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_3__.Ay.Type.LOADING,timeout)}}},"./src/storage/storage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>storage});var alert_service=__webpack_require__("./src/alert-service/alert-service.tsx");class LocalStorage{static async safePromise(resolver){try{return await new Promise(resolver)}catch(e){throw e instanceof Error&&"NS_ERROR_FILE_CORRUPTED"===e.name&&alert_service.A.error('Sorry, it looks like your browser storage is corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and setting time range to "Everything". This will remove the corrupted browser storage across all sites.'),e}}storageType;constructor(config={}){this.storageType="session"===config.type?"sessionStorage":"localStorage"}get(name){return LocalStorage.safePromise((resolve=>{const value=window[this.storageType].getItem(name);if(null!=value)try{resolve(JSON.parse(value))}catch(e){resolve(value)}else resolve(value)}))}set(name,value){return LocalStorage.safePromise((resolve=>{window[this.storageType].setItem(name,JSON.stringify(value)),resolve(value)}))}remove(name){const storageType=this.storageType;return LocalStorage.safePromise((resolve=>{window[storageType].hasOwnProperty(name)&&window[storageType].removeItem(name),resolve()}))}each(callback){const storageType=this.storageType;return LocalStorage.safePromise((resolve=>{const promises=[];for(const item in window[storageType])if(window[storageType].hasOwnProperty(item)){const value=window[storageType].getItem(item);let resolvedValue=null;if(null!=value)try{resolvedValue=JSON.parse(value)}catch(e){resolvedValue=value}promises.push(Promise.resolve(callback(item,resolvedValue)))}resolve(Promise.all(promises))}))}on(name,callback){function handleStorage(e){if(e.key===name)if(null!=e.newValue)try{callback(JSON.parse(e.newValue))}catch(err){callback(e.newValue)}else callback(e.newValue)}return window.addEventListener("storage",handleStorage,!1),()=>window.removeEventListener("storage",handleStorage,!1)}}var deep_equal=__webpack_require__("./node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal);class FallbackStorage{static DEFAULT_COOKIE_NAME="localStorage";static DEFAULT_SESSION_COOKIE_NAME="sessionStorage";static DEFAULT_CHECK_DELAY=3e3;static COOKIE_EXPIRES=365;static QUOTA=4093;static _createCookie(name,value,days){let date,expires;days?(date=new Date,date.setTime(date.getTime()+864e5*days),expires=`; expires=${date.toUTCString()}`):expires=";",document.cookie=`${name}=${value}${expires}; path=/`}static _readCookie(name){const nameEQ=`${name}=`,cookies=document.cookie.split(";");let cookie;for(let i=0;i<cookies.length;i++){for(cookie=cookies[i];" "===cookie.charAt(0);)cookie=cookie.substring(1,cookie.length);if(0===cookie.indexOf(nameEQ))return cookie.substring(nameEQ.length,cookie.length)}}cookieName;checkDelay;expires;constructor(config={}){const session="session"===config.type;this.cookieName=config.cookieName||(session?FallbackStorage.DEFAULT_SESSION_COOKIE_NAME:FallbackStorage.DEFAULT_COOKIE_NAME),this.checkDelay=config.checkDelay||FallbackStorage.DEFAULT_CHECK_DELAY,this.expires=session?FallbackStorage.COOKIE_EXPIRES:null}_read(){return new Promise(((resolve,reject)=>{const rawData=FallbackStorage._readCookie(this.cookieName);null!=rawData?resolve(JSON.parse(decodeURIComponent(rawData))):reject()})).catch((()=>({})))}_write(data){return new Promise((resolve=>{const stringData=encodeURIComponent(JSON.stringify(data));return FallbackStorage._createCookie(this.cookieName,"{}"===stringData?"":stringData,this.expires),resolve(data)}))}get(key){return this._read().then((data=>data[key]||null))}async set(key,value){const data=await this._read();return key&&(null!=value?data[key]=value:Reflect.deleteProperty(data,key)),await this._write(data),value}async remove(key){await this.set(key,null)}each(callback){return"function"!=typeof callback?Promise.reject(new Error("Callback is not a function")):this._read().then((data=>{const promises=[];for(const key in data)data.hasOwnProperty(key)&&promises.push(callback(key,data[key]));return Promise.all(promises)}))}on(key,callback){let stop=!1;const checkForChange=oldValue=>{this.get(key).then((newValue=>{stop||(deep_equal_default()(oldValue,newValue)||callback(newValue),window.setTimeout((()=>checkForChange(oldValue)),this.checkDelay))}))};return this.get(key).then(checkForChange),()=>{stop=!0}}}let Storage=LocalStorage;try{const temp="testStorage";localStorage.setItem(temp,temp),localStorage.removeItem(temp)}catch(e){Storage=FallbackStorage}const storage=Storage},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c,\n.withLinks_a3f8 a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (resolution >= 2dppx) {\n\n.link_c73c,\n.withLinks_a3f8 a {\n    text-decoration-thickness: 0.5px;\n}\n  }\n\n.hover_e4ca:is(.link_c73c,.withLinks_a3f8 a) {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.pseudo_cb40:is(.link_c73c,.withLinks_a3f8 a):hover {\n    text-decoration: none;\n  }}\n\n:is(.link_c73c,.withLinks_a3f8 a):focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n.link_c73c.active_eef2 {\n  color: inherit;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;;EAEE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EAE7B,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;EAC9B,0BAA0B;AAuB5B;;ACpCA,wGAAA;IAAA,gCAAA;;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;ADeE;;AAbF;;IAcI,gCAAgC;AAoBpC;EAnBE;;AAEA;IAEE,+BAA+B;;IAE/B,gBAAgB;;IAEhB,mCAAmC;EACrC;;AAEA,yDAAyD;;AC5B3D,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADiCE;IACE,oDAAoD;EACtD;;AAGF;EACE,cAAc;AAChB;;ACxCA,wGAAA;EAAA,eAAA;CAAA,CAAA;;AD8CA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link,\n.withLinks a {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n\n  text-decoration-line: none;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n\n  @media (resolution >= 2dppx) {\n    text-decoration-thickness: 0.5px;\n  }\n\n  &:hover,\n  &.hover {\n    text-decoration-line: underline;\n\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &.pseudo:hover {\n    text-decoration: none;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n.link.active {\n  color: inherit;\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",withLinks:"withLinks_a3f8",hover:"hover_e4ca",pseudo:"pseudo_cb40",active:"active_eef2",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/storage/storage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storage/storage.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Storage",parameters:{notes:"Provides a façade to localStorage/sessionStorage/cookies.",screenshots:{skip:!0}}},Basic=()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const storage=new _storage__WEBPACK_IMPORTED_MODULE_2__.A;let value;!async function init(){const storedValue=await storage.get("storage-example-key");if(storedValue)value=storedValue;else{const generatedValue=Math.random().toString();await storage.set("storage-example-key",generatedValue),value=generatedValue}setText(`Stored value = ${value}`)}()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:text})};Basic.storyName="Storage",Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => {\n  const [text, setText] = useState('');\n  useEffect(() => {\n    const STORAGE_KEY = 'storage-example-key';\n    const storage = new Storage();\n    let value;\n    async function init() {\n      const storedValue = await storage.get(STORAGE_KEY);\n      if (!storedValue) {\n        const generatedValue = Math.random().toString();\n        await storage.set(STORAGE_KEY, generatedValue);\n        value = generatedValue;\n      } else {\n        value = storedValue;\n      }\n      setText(`Stored value = ${value}`);\n    }\n    init();\n  }, []);\n  return <div>{text}</div>;\n}",...Basic.parameters?.docs?.source}}}},"?4f7e":()=>{}}]);