(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[9487],{"./src/storage/storage.examples.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/storage/storage.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Storage",parameters:{storySource:{source:"import Storage from './storage';\n\nexport default {\n  title: 'Components/Storage',\n\n  parameters: {\n    notes: 'Provides a façade to localStorage/sessionStorage/cookies.',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  const STORAGE_KEY = 'storage-example-key';\n  const storage = new Storage();\n  const node = document.createElement('div');\n\n  let value;\n\n  async function init() {\n    const storedValue = await storage.get(STORAGE_KEY);\n    if (!storedValue) {\n      const generatedValue = Math.random().toString();\n      await storage.set(STORAGE_KEY, generatedValue);\n      value = generatedValue;\n    } else {\n      value = storedValue;\n    }\n\n    node.innerText = `Stored value = ${value}`;\n  }\n\n  init();\n\n  return node;\n};\n\nbasic.storyName = 'Storage';\n",locationsMap:{basic:{startLoc:{col:21,line:12},endLoc:{col:1,line:35},startBody:{col:21,line:12},endBody:{col:1,line:35}}}},notes:"Provides a façade to localStorage/sessionStorage/cookies.",hermione:{skip:!0}}},basic=()=>{const storage=new _storage__WEBPACK_IMPORTED_MODULE_0__.Z,node=document.createElement("div");let value;return async function init(){const storedValue=await storage.get("storage-example-key");if(storedValue)value=storedValue;else{const generatedValue=Math.random().toString();await storage.set("storage-example-key",generatedValue),value=generatedValue}node.innerText=`Stored value = ${value}`}(),node};basic.storyName="Storage"},"./src/alert-service/alert-service.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/react-render-adapter.ts"),_global_get_uid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/get-uid.ts"),_alert_alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/alert/container.tsx"),_alert_alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/alert/alert.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=new class AlertService{defaultTimeout=0;showingAlerts=[];containerElement=document.createElement("div");_getShowingAlerts(){return[...this.showingAlerts]}renderAlertContainer(alerts){return 0===alerts.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_1__.Z,null,alerts.map((alert=>{const{message,key,...rest}=alert;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP,_extends({key},rest),message)})))}renderAlerts(){(0,_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__.sY)(this.renderAlertContainer(this.showingAlerts),this.containerElement)}findSameAlert(message,type){return this.showingAlerts.filter((it=>it.type===type&&it.message===message))[0]}startAlertClosing(alert){alert.isClosing=!0,this.renderAlerts()}remove(key){const alertToClose=this.showingAlerts.filter((alert=>alert.key===key))[0];alertToClose&&this.startAlertClosing(alertToClose)}removeWithoutAnimation(key){this.showingAlerts=this.showingAlerts.filter((alert=>alert.key!==key)),this.renderAlerts()}stopShakingWhenAnimationDone(shakingAlert){setTimeout((()=>{shakingAlert.showWithAnimation=!1,shakingAlert.isShaking=!1,this.renderAlerts()}),_alert_alert__WEBPACK_IMPORTED_MODULE_2__.o)}addAlert(message,type){let timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.defaultTimeout,options=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{onCloseRequest,onClose,...restOptions}=options,sameAlert=this.findSameAlert(message,type);if(sameAlert)return sameAlert.isShaking=!0,this.renderAlerts(),this.stopShakingWhenAnimationDone(sameAlert),sameAlert.key;const alert={key:(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_4__.Z)("alert-service-"),message,type,timeout,isClosing:!1,onCloseRequest:()=>{onCloseRequest&&onCloseRequest(),this.startAlertClosing(alert)},onClose:()=>{onClose&&onClose(),this.removeWithoutAnimation(alert.key)},...restOptions};return this.showingAlerts=[alert,...this.showingAlerts],this.renderAlerts(),alert.key}setDefaultTimeout(timeout){this.defaultTimeout=timeout}error(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.ERROR,timeout)}message(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.MESSAGE,timeout)}warning(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.WARNING,timeout)}successMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.SUCCESS,timeout)}loadingMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.LOADING,timeout)}}},"./src/storage/storage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>storage});var alert_service=__webpack_require__("./src/alert-service/alert-service.tsx");class LocalStorage{static async safePromise(resolver){try{return await new Promise(resolver)}catch(e){throw e instanceof Error&&"NS_ERROR_FILE_CORRUPTED"===e.name&&alert_service.Z.error('Sorry, it looks like your browser storage is corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and setting time range to "Everything". This will remove the corrupted browser storage across all sites.'),e}}storageType;constructor(){let config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.storageType="session"===config.type?"sessionStorage":"localStorage"}get(name){return LocalStorage.safePromise((resolve=>{const value=window[this.storageType].getItem(name);if(null!=value)try{resolve(JSON.parse(value))}catch(e){resolve(value)}else resolve(value)}))}set(name,value){return LocalStorage.safePromise((resolve=>{window[this.storageType].setItem(name,JSON.stringify(value)),resolve(value)}))}remove(name){const storageType=this.storageType;return LocalStorage.safePromise((resolve=>{window[storageType].hasOwnProperty(name)&&window[storageType].removeItem(name),resolve()}))}each(callback){const storageType=this.storageType;return LocalStorage.safePromise((resolve=>{const promises=[];for(const item in window[storageType])if(window[storageType].hasOwnProperty(item)){const value=window[storageType].getItem(item);let resolvedValue=null;if(null!=value)try{resolvedValue=JSON.parse(value)}catch(e){resolvedValue=value}promises.push(Promise.resolve(callback(item,resolvedValue)))}resolve(Promise.all(promises))}))}on(name,callback){function handleStorage(e){if(e.key===name)if(null!=e.newValue)try{callback(JSON.parse(e.newValue))}catch(err){callback(e.newValue)}else callback(e.newValue)}return window.addEventListener("storage",handleStorage,!1),()=>window.removeEventListener("storage",handleStorage,!1)}}var deep_equal=__webpack_require__("./node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal);class FallbackStorage{static DEFAULT_COOKIE_NAME="localStorage";static DEFAULT_SESSION_COOKIE_NAME="sessionStorage";static DEFAULT_CHECK_DELAY=3e3;static COOKIE_EXPIRES=365;static QUOTA=4093;static _createCookie(name,value,days){let date,expires;days?(date=new Date,date.setTime(date.getTime()+864e5*days),expires=`; expires=${date.toUTCString()}`):expires=";",document.cookie=`${name}=${value}${expires}; path=/`}static _readCookie(name){const nameEQ=`${name}=`,cookies=document.cookie.split(";");let cookie;for(let i=0;i<cookies.length;i++){for(cookie=cookies[i];" "===cookie.charAt(0);)cookie=cookie.substring(1,cookie.length);if(0===cookie.indexOf(nameEQ))return cookie.substring(nameEQ.length,cookie.length)}}cookieName;checkDelay;expires;constructor(){let config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const session="session"===config.type;this.cookieName=config.cookieName||(session?FallbackStorage.DEFAULT_SESSION_COOKIE_NAME:FallbackStorage.DEFAULT_COOKIE_NAME),this.checkDelay=config.checkDelay||FallbackStorage.DEFAULT_CHECK_DELAY,this.expires=session?FallbackStorage.COOKIE_EXPIRES:null}_read(){return new Promise(((resolve,reject)=>{const rawData=FallbackStorage._readCookie(this.cookieName);null!=rawData?resolve(JSON.parse(decodeURIComponent(rawData))):reject()})).catch((()=>({})))}_write(data){return new Promise((resolve=>{const stringData=encodeURIComponent(JSON.stringify(data));return FallbackStorage._createCookie(this.cookieName,"{}"===stringData?"":stringData,this.expires),resolve(data)}))}get(key){return this._read().then((data=>data[key]||null))}async set(key,value){const data=await this._read();return key&&(null!=value?data[key]=value:Reflect.deleteProperty(data,key)),await this._write(data),value}async remove(key){await this.set(key,null)}each(callback){return"function"!=typeof callback?Promise.reject(new Error("Callback is not a function")):this._read().then((data=>{const promises=[];for(const key in data)data.hasOwnProperty(key)&&promises.push(callback(key,data[key]));return Promise.all(promises)}))}on(key,callback){let stop=!1;const checkForChange=oldValue=>{this.get(key).then((newValue=>{stop||(deep_equal_default()(oldValue,newValue)||callback(newValue),window.setTimeout((()=>checkForChange(oldValue)),this.checkDelay))}))};return this.get(key).then(checkForChange),()=>{stop=!0}}}let Storage=LocalStorage;try{const temp="testStorage";localStorage.setItem(temp,temp),localStorage.removeItem(temp)}catch(e){Storage=FallbackStorage}const storage=Storage},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"?4f7e":()=>{}}]);