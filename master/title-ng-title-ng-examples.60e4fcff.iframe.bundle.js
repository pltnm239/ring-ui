"use strict";(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[8102],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/title-ng/title-ng.examples.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>title_ng_examples});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js");const angularModule=angular_default().module("Ring.title",[]);angularModule.directive("rgPageTitle",(function rgPageTitleDirective(){return{scope:{rgPageTitle:"@?",noTitle:"@?",delimiter:"@"},controller:["$rootScope","$scope","$element","$attrs","pageTitle","$injector",function controller($rootScope,$scope,$element,$attrs,pageTitle,$injector){const elementText=$element[0].textContent;let offScopeWatch=angular_default().noop;const offRouteWatch=$rootScope.$on("$routeChangeSuccess",((event,current)=>{if(current.$$route&&current.$$route.redirectTo)return;let routeTitle=current.$$route&&current.$$route.title;pageTitle.setCurrent($scope.rgPageTitle||elementText),!1!==routeTitle&&((angular_default().isArray(routeTitle)||angular_default().isFunction(routeTitle))&&(routeTitle=$injector.invoke(routeTitle)),pageTitle.addElement(routeTitle||$scope.noTitle))}));$scope.$on("$destroy",(()=>{offRouteWatch(),offScopeWatch()})),this.$onInit=()=>{pageTitle.setDelimiter($scope.delimiter),$attrs.rgPageTitle&&(offScopeWatch=$scope.$watch("rgPageTitle",(newBaseTitle=>{pageTitle.setRootElement(newBaseTitle)})))}}]}})),angularModule.service("pageTitle",["$interpolate","$document",function service($interpolate,$document){let delimiter=" | ",current=$document[0].title;function setTitle(text){current=text&&$interpolate(text)(),updateDocumentTitle(current)}function updateDocumentTitle(text){$document[0].title=text}function replacePart(element){let replaceIndex=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const titleElements=current.split(delimiter);titleElements[-1===replaceIndex?titleElements.length-1:replaceIndex]=element,setTitle(titleElements.join(delimiter))}this.setDelimiter=newDelimiter=>{delimiter=newDelimiter||delimiter},this.setCurrent=newBase=>{current=newBase},this.setText=text=>updateDocumentTitle(text),this.addElement=(element,fieldName)=>{element.$promise?element.$promise.then((Data=>{this.addElement(Data[fieldName||"name"])})):function prepend(element){setTitle(current?element+delimiter+current:element)}(fieldName?element[fieldName]:element)},this.updateElement=(element,fieldName)=>{element.$promise?element.$promise.then((Data=>{this.updateElement(Data[fieldName||"name"])})):replacePart(fieldName?element[fieldName]:element)},this.setRootElement=element=>{replacePart(element,-1)}}]);const title_ng=angularModule.name;const title_ng_examples={title:"Legacy Angular/Title Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport TitleNG from './title-ng';\n\nexport default {\n  title: 'Legacy Angular/Title Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'A component for manipulating page title.',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [TitleNG]).run(pageTitle => {\n    pageTitle.addElement('Some page');\n  });\n\n  return `\n        <h4>Open the example in a separate tab to see how tab title changes.</h4>\n\n        \x3c!--It is better to use this directive with <title> tag in your <head> section.--\x3e\n        <div rg-page-title=\"App name\">Title should be \"Some page | App name\"</div>\n    `;\n};\n\nbasic.storyName = 'Title Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:28},startBody:{col:21,line:17},endBody:{col:1,line:28}}}},notes:"A component for manipulating page title.",hermione:{skip:!0}}},basic=()=>(angular_default().module(angular_decorator.i,[title_ng]).run(["pageTitle",pageTitle=>{pageTitle.addElement("Some page")}]),'\n        <h4>Open the example in a separate tab to see how tab title changes.</h4>\n\n        \x3c!--It is better to use this directive with <title> tag in your <head> section.--\x3e\n        <div rg-page-title="App name">Title should be "Some page | App name"</div>\n    ');basic.storyName="Title Ng"}}]);