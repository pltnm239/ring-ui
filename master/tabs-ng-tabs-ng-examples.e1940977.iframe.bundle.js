(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[3378],{"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/tabs-ng/tabs-ng.examples.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/angular-decorator.js"),_tabs_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tabs-ng/tabs-ng.js");__webpack_exports__.default={title:"Legacy Angular/Tabs Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:'import angular from \'angular\';\n\nimport angularDecorator, {APP_NAME} from \'../../.storybook/angular-decorator\';\n\nimport RingTabs from \'./tabs-ng\';\n\nexport default {\n  title: \'Legacy Angular/Tabs Ng\',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: \'Displays a tabset.\'\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [RingTabs]);\n\n  return `\n      <rg-tabs class="container container_tabs">\n        <rg-tabs-pane x-title="Settings">Settings tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Access" counter="7">Access tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Disabled" ng-disabled="true" counter="8">Inaccessible tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Members">Members tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Members" counter="666">Members 666 tab content</rg-tabs-pane>\n      </rg-tabs>\n    `;\n};\n\nbasic.storyName = \'basic\';\n',locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:1,line:28},startBody:{col:21,line:16},endBody:{col:1,line:28}}}},notes:"Displays a tabset."}};const basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_tabs_ng__WEBPACK_IMPORTED_MODULE_2__.Z]),'\n      <rg-tabs class="container container_tabs">\n        <rg-tabs-pane x-title="Settings">Settings tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Access" counter="7">Access tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Disabled" ng-disabled="true" counter="8">Inaccessible tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Members">Members tab content</rg-tabs-pane>\n        <rg-tabs-pane x-title="Members" counter="666">Members 666 tab content</rg-tabs-pane>\n      </rg-tabs>\n    ');basic.storyName="basic"},"./src/tabs-ng/tabs-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return tabs_ng}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),tabs=__webpack_require__("./src/tabs/tabs.css"),tabs_default=__webpack_require__.n(tabs);const angularModule=angular_default().module("Ring.tabs",[]);angularModule.directive("rgTabs",["$location","$rootScope",function rgTabsDirective($location,$rootScope){return{restrict:"E",transclude:!0,template:'<div\n  ng-class=":: styles.tabs"\n  rg-shortcuts="ring-tabs"\n  shortcuts-map="keyMap"\n  shortcuts-focus="focus"\n>\n  <div\n    ng-class=":: [styles.titles, tabsClass]"\n    role="tablist"\n  >\n    <button\n      role="tab"\n      type="button"\n      ng-repeat="pane in panes | orderBy:\'tabIndex\'"\n      ng-click="control.select(pane)"\n      ng-attr-tabindex="{{(pane.selected || pane.ngDisabled) ? -1 : 0}}"\n      ng-disabled="pane.ngDisabled"\n      data-test="ring-tab"\n      ng-attr-data-test-active="{{pane.selected  ? \'true\' : \'false\'}}"\n      ng-attr-class="{{ tabClass(pane) }}"\n    ><span\n      ng-class=":: styles.visible">{{pane.title}}<span\n      ng-class=":: styles.tabCounter"\n      ng-show="pane.counter !== undefined">{{ pane.counter }}</span\n    ></span>\x3c!--\n      hack for preserving constant tab width\n    --\x3e<span ng-class=":: styles.hidden">{{pane.title}}<span\n      ng-class=":: styles.tabCounter" ng-show="pane.counter !== undefined">{{ pane.counter }}</span></span>\n      <span ng-class=":: styles.hiddenBold">{{pane.title}}<span\n        ng-class=":: styles.tabCounter" ng-show="pane.counter !== undefined">{{ pane.counter }}</span></span>\n      <span ng-class=":: styles.hiddenRegular">{{pane.title}}<span\n        ng-class=":: styles.tabCounter" ng-show="pane.counter !== undefined">{{ pane.counter }}</span></span>\n    </button>\n  </div>\n\n  <div ng-transclude></div>\n\n</div>',replace:!0,scope:{tabParameter:"@",tabsClass:"=",control:"=?",disableLocationChanging:"="},controller:["$scope",function controller($scope){function getTabIdFromUrl(){return $location.search()[$scope.tabParameter]}function doSelect(newPane,skipUrlUpdate){if(newPane!==$scope.current&&!newPane.ngDisabled)for(let index=0;index<$scope.panes.length;index++){const pane=$scope.panes[index];pane===newPane||pane.tabId===newPane?($scope.current=newPane,pane.selected=!0,skipUrlUpdate||$location.search($scope.tabParameter,newPane.tabId)):pane.selected=!1}}function getNextPaneIndex(reverseOrder){const currentTabIndex=$scope.panes.indexOf($scope.current);let next=currentTabIndex;do{next+=reverseOrder?-1:1}while(next>-1&&next<$scope.panes.length&&$scope.panes[next].ngDisabled);return next>=$scope.panes.length?next=$scope.panes.length-1:next<0&&(next=0),$scope.panes[next].ngDisabled?currentTabIndex:next}function checkCurrentTab(){$scope.panes.length&&doSelect(function getCurrentTab(){const currentTabId=getTabIdFromUrl();if(currentTabId){const currentTab=$scope.panes.find((pane=>pane.tabId===currentTabId));return currentTab&&!currentTab.ngDisabled?currentTab:$scope.panes[getNextPaneIndex()]}return $scope.panes[0]}(),!0)}$scope.panes=[],$scope.current=null,$scope.styles=tabs_default(),this.addTab=tab=>{$scope.panes.push(tab),1!==$scope.panes.length&&tab.tabId!==getTabIdFromUrl()||doSelect(tab,!0)},this.removeTab=tab=>{const index=$scope.panes.indexOf(tab);$scope.panes.splice(index,1),checkCurrentTab()},this.checkPane=checkCurrentTab,$scope.$on("$destroy",$rootScope.$on("$routeUpdate",checkCurrentTab)),$scope.control={},$scope.control.isLast=()=>$scope.panes.indexOf($scope.current)===$scope.panes.length-1,$scope.control.isFirst=()=>0===$scope.panes.indexOf($scope.current),$scope.control.select=pane=>{doSelect(pane,$scope.disableLocationChanging)},$scope.control.next=()=>{const next=getNextPaneIndex();doSelect($scope.panes[next],$scope.disableLocationChanging)},$scope.control.prev=()=>{const prev=getNextPaneIndex(!0);doSelect($scope.panes[prev],$scope.disableLocationChanging)},$scope.keyMap={next:$scope.control.next,prev:$scope.control.prev,focus:()=>($scope.focus=!$scope.focus,!$scope.focus)},$scope.tabClass=pane=>classnames_default()(tabs_default().title,tabs_default().titleLegacy,{[tabs_default().selected]:pane.selected}),this.$onInit=()=>{$scope.tabParameter||($scope.tabParameter="tab")}}]}}]),angularModule.directive("rgTabsPane",(function rgTabsPaneDirective(){return{require:"^rgTabs",restrict:"E",transclude:!0,scope:{title:"@",counter:"@",tabId:"@?",tabIndex:"@?",selected:"=?",ngDisabled:"=?"},link:function link(scope,element,attrs,tabsCtrl){scope.tabId=scope.tabId||scope.title.toLowerCase().replace(" ","-"),scope.tabIndex=scope.tabIndex?+scope.tabIndex:0,tabsCtrl.addTab(scope),scope.$on("$destroy",(()=>{tabsCtrl.removeTab(scope)}))},template:'<div class="ring-tabs__content" ng-class="{\'ring-tabs__content_active\':selected}" ng-if="selected" ng-transclude></div>'}}));var tabs_ng=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tabs/tabs.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_link_link_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_link_link_css__WEBPACK_IMPORTED_MODULE_5__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,"/* ensure styles order */\n\n:root {\n  --ring-selected-tab-color: var(--ring-text-color);\n}\n\n."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark+",\n.ring-ui-theme-dark {\n  --ring-selected-tab-color: var(--ring-main-color);\n}\n\n.tabs_d1b7 {\n}\n\n.titles_fae8 {\n  display: inline-block;\n\n  margin-bottom: 16px;\n}\n\n.titles_fae8 {\n  box-shadow: inset 0 -1px 0 0 var(--ring-line-color);\n}\n\n.title_d6fe {\n\n  position: relative;\n\n  display: inline-block;\n\n  padding: 0;\n\n  cursor: pointer;\n\n  color: inherit;\n\n  border: none;\n  border-radius: 0;\n  background: none;\n\n  line-height: 32px;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .title_d6fe.selected_db72:hover,\n    .title_d6fe.collapsed_fed3:hover {\n      color: inherit;\n      box-shadow: inset 0 -2px 0 0 var(--ring-text-color);\n    }\n\n    .title_d6fe:hover:not(.selected_db72),\n    .title_d6fe:hover:not(.collapsed_fed3) {\n      color: var(--ring-link-hover-color);\n      outline-style: none;\n      box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);\n    }}\n\n.title_d6fe.selected_db72:active,\n    .title_d6fe.collapsed_fed3:active {\n      color: inherit;\n      box-shadow: inset 0 -2px 0 0 var(--ring-text-color);\n    }\n\n.title_d6fe:active:not(.selected_db72),\n    .title_d6fe:active:not(.collapsed_fed3) {\n      color: var(--ring-link-hover-color);\n      outline-style: none;\n      box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);\n    }\n\n.title_d6fe:focus-visible {\n    color: var(--ring-main-color);\n    box-shadow: inset 0 -2px 0 0 var(--ring-main-color);\n  }\n\n.title_d6fe[disabled] {\n    pointer-events: none;\n  }\n\n.title_d6fe.titleLegacy_c903 {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.title_d6fe + .title_d6fe {\n  margin-left: 24px;\n}\n\n.title_d6fe[disabled] {\n  color: var(--ring-disabled-color);\n}\n\n.selected_db72 {\n  cursor: default;\n\n  color: var(--ring-active-text-color);\n\n  outline: none;\n  box-shadow: inset 0 -2px 0 0 var(--ring-text-color);\n  box-shadow: inset 0 -2px 0 0 var(--ring-selected-tab-color);\n\n  font-weight: bold;\n}\n\n.visible_bea5 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  text-align: center;\n}\n\n.container_bcc1 {\n  display: flex;\n  flex-direction: column;\n}\n\n.hidden_bcd6 {\n  display: flex;\n  visibility: hidden;\n}\n\n.hiddenBold_fdfa {\n  display: flex;\n  visibility: hidden;\n\n  height: 0;\n\n  font-weight: bold;\n}\n\n.hiddenRegular_dc75 {\n  display: flex;\n  visibility: hidden;\n\n  height: 0;\n\n  font-weight: normal;\n}\n\n.tabCounter_e3fc {\n  padding-left: 8px;\n\n  color: var(--ring-secondary-color);\n\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 19px; /* prevent jumps in Firefox */\n}\n\n.autoCollapseContainer_c762 {\n  position: relative;\n}\n\n.autoCollapse_cdca {\n  position: relative;\n\n  display: inline-flex;\n  visibility: hidden;\n  overflow: hidden;\n\n  max-width: 100%;\n}\n\n.autoCollapse_cdca .title_d6fe {\n  flex-shrink: 0;\n}\n\n.rendered_b876.adjusted_bbfe {\n  visibility: visible;\n  overflow: visible;\n}\n\n.measure_d2ac {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  overflow: hidden;\n\n  height: 0;\n  margin: 0;\n\n  pointer-events: none;\n\n  opacity: 0;\n}\n\n.morePopup_c02f {\n  display: flex;\n  flex-direction: column;\n}\n\n.collapsed_fed3.collapsed_fed3 {\n  width: 100%;\n\n  border-bottom: none;\n  box-shadow: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.collapsed_fed3.collapsed_fed3:hover {\n    box-shadow: none;\n  }}\n\n.collapsed_fed3.collapsed_fed3[disabled] {\n  color: var(--ring-disabled-color);\n}\n\n.collapsed_fed3 .visible_bea5,\n.collapsed_fed3 .hidden_bcd6 {\n  text-align: left;\n}\n\n.chevron_ea7c {\n  padding-left: 4px;\n}\n\n.morePopupBeforeEnd_e5b2.morePopupBeforeEnd_e5b2.morePopupBeforeEnd_e5b2 {\n  padding: 0;\n}\n\n.morePopupBeforeEnd_e5b2 ~ div {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/tabs/tabs.css","<no source>"],names:[],mappings:"AAEA,wBAAwB;;AAQxB;EACE,iDAAiD;AACnD;;AAEA;;EAEE,iDAAiD;AACnD;;AAEA;AAEA;;AAEA;EACE,qBAAqB;;EAErB,mBAA6B;AAC/B;;AAEA;EACE,mDAA8C;AAChD;;AAEA;;EAGE,kBAAkB;;EAElB,qBAAqB;;EAErB,UAAU;;EAEV,eAAe;;EAEf,cAAc;;EAEd,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;;EAEhB,iBAA2B;AA0B7B;;AC5EA;IAAA;;MAAA,eAAA;MAAA,oDAAA;KAAA;;IAAA;;MAAA,oCAAA;MAAA,oBAAA;MAAA,0DAAA;KAAA,CAAA;;ADsDI;;MAEE,cAAc;MACd,mDAAuD;IACzD;;AAEA;;MAEE,mCAAmC;MACnC,mBAAmB;MACnB,yDAAyD;IAC3D;;AAGF;IACE,6BAA6B;IAC7B,mDAAuD;EACzD;;AAEA;IACE,oBAAoB;EACtB;;AAGF;EACE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,iBAA2B;AAC7B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,eAAe;;EAEf,oCAAoC;;EAEpC,aAAa;EACb,mDAA+D;EAA/D,2DAA+D;;EAE/D,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB,SAAS;;EAET,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB,SAAS;;EAET,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;;EAEjB,kCAAkC;;EAElC,eAAe;EACf,mBAAmB;EACnB,iBAAiB,EAAE,6BAA6B;AAClD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;;EAElB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;;EAEhB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;;EAEP,gBAAgB;;EAEhB,SAAS;EACT,SAAS;;EAET,oBAAoB;;EAEpB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;;EAEX,mBAAmB;EACnB,gBAAgB;AAKlB;;AC1MA,wGAAA;IAAA,iBAAA;GAAA,CAAA;;AD4MA;EACE,iCAAiC;AACnC;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf",sourcesContent:['@import "../global/variables.css";\n\n/* ensure styles order */\n@import "../link/link.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n@value line-shadow: inset 0 -1px 0 0;\n@value selected-line-shadow: inset 0 -2px 0 0;\n\n:root {\n  --ring-selected-tab-color: var(--ring-text-color);\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  --ring-selected-tab-color: var(--ring-main-color);\n}\n\n.tabs {\n  composes: font from "../global/global.css";\n}\n\n.titles {\n  display: inline-block;\n\n  margin-bottom: calc(unit * 2);\n}\n\n.titles {\n  box-shadow: line-shadow var(--ring-line-color);\n}\n\n.title {\n  composes: font from "../global/global.css";\n\n  position: relative;\n\n  display: inline-block;\n\n  padding: 0;\n\n  cursor: pointer;\n\n  color: inherit;\n\n  border: none;\n  border-radius: 0;\n  background: none;\n\n  line-height: calc(unit * 4);\n\n  &:hover,\n  &:active {\n    &.selected,\n    &.collapsed {\n      color: inherit;\n      box-shadow: selected-line-shadow var(--ring-text-color);\n    }\n\n    &:not(.selected),\n    &:not(.collapsed) {\n      color: var(--ring-link-hover-color);\n      outline-style: none;\n      box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);\n    }\n  }\n\n  &:focus-visible {\n    color: var(--ring-main-color);\n    box-shadow: selected-line-shadow var(--ring-main-color);\n  }\n\n  &[disabled] {\n    pointer-events: none;\n  }\n}\n\n.title.titleLegacy {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.title + .title {\n  margin-left: calc(unit * 3);\n}\n\n.title[disabled] {\n  color: var(--ring-disabled-color);\n}\n\n.selected {\n  cursor: default;\n\n  color: var(--ring-active-text-color);\n\n  outline: none;\n  box-shadow: selected-line-shadow var(--ring-selected-tab-color);\n\n  font-weight: bold;\n}\n\n.visible {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.hidden {\n  display: flex;\n  visibility: hidden;\n}\n\n.hiddenBold {\n  display: flex;\n  visibility: hidden;\n\n  height: 0;\n\n  font-weight: bold;\n}\n\n.hiddenRegular {\n  display: flex;\n  visibility: hidden;\n\n  height: 0;\n\n  font-weight: normal;\n}\n\n.tabCounter {\n  padding-left: 8px;\n\n  color: var(--ring-secondary-color);\n\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 19px; /* prevent jumps in Firefox */\n}\n\n.autoCollapseContainer {\n  position: relative;\n}\n\n.autoCollapse {\n  position: relative;\n\n  display: inline-flex;\n  visibility: hidden;\n  overflow: hidden;\n\n  max-width: 100%;\n}\n\n.autoCollapse .title {\n  flex-shrink: 0;\n}\n\n.rendered.adjusted {\n  visibility: visible;\n  overflow: visible;\n}\n\n.measure {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  overflow: hidden;\n\n  height: 0;\n  margin: 0;\n\n  pointer-events: none;\n\n  opacity: 0;\n}\n\n.morePopup {\n  display: flex;\n  flex-direction: column;\n}\n\n.collapsed.collapsed {\n  width: 100%;\n\n  border-bottom: none;\n  box-shadow: none;\n\n  &:hover {\n    box-shadow: none;\n  }\n}\n\n.collapsed.collapsed[disabled] {\n  color: var(--ring-disabled-color);\n}\n\n.collapsed .visible,\n.collapsed .hidden {\n  text-align: left;\n}\n\n.chevron {\n  padding-left: 4px;\n}\n\n.morePopupBeforeEnd.morePopupBeforeEnd.morePopupBeforeEnd {\n  padding: 0;\n}\n\n.morePopupBeforeEnd ~ div {\n  display: none;\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark,unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit,"line-shadow":"inset 0 -1px 0 0","selected-line-shadow":"inset 0 -2px 0 0",tabs:"tabs_d1b7 "+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.font,titles:"titles_fae8",title:"title_d6fe "+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.font,selected:"selected_db72",collapsed:"collapsed_fed3",titleLegacy:"titleLegacy_c903",visible:"visible_bea5",container:"container_bcc1",hidden:"hidden_bcd6",hiddenBold:"hiddenBold_fdfa",hiddenRegular:"hiddenRegular_dc75",tabCounter:"tabCounter_e3fc",autoCollapseContainer:"autoCollapseContainer_c762",autoCollapse:"autoCollapse_cdca",rendered:"rendered_b876",adjusted:"adjusted_bbfe",measure:"measure_d2ac",morePopup:"morePopup_c02f",chevron:"chevron_ea7c",morePopupBeforeEnd:"morePopupBeforeEnd_e5b2"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/tabs/tabs.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tabs/tabs.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);