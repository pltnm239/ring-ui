(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[8125],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/progress-bar-ng/progress-bar-ng.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>progress_bar_ng_stories});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),angular_component_factory=__webpack_require__("./src/global/angular-component-factory.js"),progress_bar=__webpack_require__("./src/progress-bar/progress-bar.tsx");const progress_bar_ng=(0,angular_component_factory.Z)(progress_bar.Z,"ProgressBar").name;const disableAnimations=window.location.search.includes("block-animations"),progress_bar_ng_stories={title:"Legacy Angular/Progress Bar Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport RingProgressBar from './progress-bar-ng';\n\nconst disableAnimations = window.location.search.includes('block-animations');\n\nexport default {\n  title: 'Legacy Angular/Progress Bar Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Provides an Angular wrapper for Progress Bar.'\n  }\n};\n\nexport const basic = () => {\n  angular.\n    module(APP_NAME, [RingProgressBar]).\n    controller('ExampleCtrl', function controller($interval) {\n      this.value = disableAnimations ? 0.5 : 0;\n\n      if (!disableAnimations) {\n        $interval(() => {\n          const currentValue = this.value;\n          this.value = currentValue >= 1 ? 0 : currentValue + 0.1;\n        }, 500);\n      }\n    });\n  return `\n      <div ng-controller=\"ExampleCtrl as ctrl\">\n        <div style=\"height: 25px; padding-top: 25px;\">\n          <rg-progress-bar label=\"'Progress'\" value=\"ctrl.value\" class=\"example-progress\"></rg-progress-bar>\n        </div>\n        <div style=\"height: 25px; background: #F0F0F0; padding-top: 25px;\">\n          <rg-progress-bar label=\"'Progress'\" value=\"ctrl.value\" class=\"example-progress\"></rg-progress-bar>\n        </div>\n      </div>\n    `;\n};\n\nbasic.storyName = 'Progress Bar Ng';\n\nbasic.parameters = {\n  storyStyles: `\n<style>\n  .example-progress > * {\n    width: 288px;\n  }\n</style>`\n};\n",locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:1,line:41},startBody:{col:21,line:18},endBody:{col:1,line:41}}}},notes:"Provides an Angular wrapper for Progress Bar."}},basic=()=>(angular_default().module(angular_decorator.i,[progress_bar_ng]).controller("ExampleCtrl",["$interval",function controller($interval){this.value=disableAnimations?.5:0,disableAnimations||$interval((()=>{const currentValue=this.value;this.value=currentValue>=1?0:currentValue+.1}),500)}]),'\n      <div ng-controller="ExampleCtrl as ctrl">\n        <div style="height: 25px; padding-top: 25px;">\n          <rg-progress-bar label="\'Progress\'" value="ctrl.value" class="example-progress"></rg-progress-bar>\n        </div>\n        <div style="height: 25px; background: #F0F0F0; padding-top: 25px;">\n          <rg-progress-bar label="\'Progress\'" value="ctrl.value" class="example-progress"></rg-progress-bar>\n        </div>\n      </div>\n    ');basic.storyName="Progress Bar Ng",basic.parameters={storyStyles:"\n<style>\n  .example-progress > * {\n    width: 288px;\n  }\n</style>"}},"./src/global/angular-component-factory.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>createAngularComponent,Z:()=>angular_component_factory});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),react=__webpack_require__("./node_modules/react/index.js"),react_render_adapter=__webpack_require__("./src/global/react-render-adapter.ts"),ring_angular_component=__webpack_require__("./src/global/ring-angular-component.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);class Renderer extends react.Component{static propTypes={className:prop_types_default().string,nodes:prop_types_default().oneOfType([prop_types_default().array,prop_types_default().object])};componentDidMount(){const{node}=this,{nodes}=this.props;node&&nodes&&nodes.length&&Array.from(this.props.nodes).forEach((nodeToRender=>node.appendChild(nodeToRender)))}node;nodeRef=node=>{this.node=node};render(){const{className}=this.props;return react.createElement("div",{className,ref:this.nodeRef})}}function createAngularComponent(Component){const propKeys=Object.keys(Component.propTypes),bindings={};propKeys.forEach((key=>{bindings[key]="<"}));class AngularComponent extends ring_angular_component.Z{static bindings=bindings;static transclude=!0;$postLink(){const{$transclude}=this.$inject;$transclude((clone=>{this.container=document.createElement("div");for(let i=0;i<clone.length;i++)this.container.appendChild(clone[i]);this.render()}))}$onChanges(){this.container&&this.render()}$onDestroy(){(0,react_render_adapter.uy)(this.$inject.$element[0])}render(){var _this=this;const{$scope,$element:{0:container}}=this.$inject,props={};propKeys.forEach((key=>{void 0!==this[key]&&("function"==typeof this[key]?props[key]=function(){const ret=_this[key](...arguments);return $scope.$applyAsync(),ret}:props[key]=this[key])}));const hasInnerContent=this.container.hasChildNodes();(0,react_render_adapter.sY)(react.createElement(Component,props,hasInnerContent?react.createElement(Renderer,{nodes:this.container.childNodes}):null),container)}}return AngularComponent.$inject=["$scope","$element","$transclude"],AngularComponent}Renderer.__docgenInfo={description:"",methods:[{name:"nodeRef",docblock:null,modifiers:[],params:[{name:"node",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"Renderer",props:{className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},nodes:{type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!0,description:"",tsType:{name:"union",raw:"readonly Node[] | NodeList",elements:[{name:"unknown"},{name:"NodeList"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/react-dom-renderer.tsx"]={name:"Renderer",docgenInfo:Renderer.__docgenInfo,path:"src/global/react-dom-renderer.tsx"});const angular_component_factory=function angularComponentFactory(Component,name){const angularModuleName=`Ring.${name[0].toLowerCase()+name.slice(1)}`;return angular_default().module(angularModuleName,[]).component(function getAngularComponentName(name){return`rg${name}`}(name),createAngularComponent(Component))}},"./src/global/ring-angular-component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>RingAngularComponent});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/progress-bar/progress-bar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ProgressBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_progress_bar_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/progress-bar/progress-bar.css"),_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_progress_bar_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ProgressBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static toPercent(value,max){const percents=100*value/max;return percents>100?100:percents}static propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,global:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,max:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,staticColor:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};static defaultProps={max:1,value:0,label:"Progress"};progressbarWrapper;progressbarWrapperRef=el=>{this.progressbarWrapper=el};progressbar;progressbarRef=el=>{this.progressbar=el};render(){const{className,global,max,value,label,staticColor,...otherProps}=this.props,width=value?`${ProgressBar.toPercent(value,max)}%`:void 0,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar,className,{[_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().globalMode]:global,[_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().staticLineColor]:staticColor});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},otherProps,{className:classes,ref:this.progressbarWrapperRef}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().line,ref:this.progressbarRef,role:"progressbar","aria-label":label,"aria-valuenow":value,"aria-valuemin":0,"aria-valuemax":max,style:{width}}))}}ProgressBar.__docgenInfo={description:"@name Progress Bar",methods:[{name:"toPercent",docblock:"@param {number} value The progress task value\n@param {number} max The maximum value\n@return {number} The progress task value in percents\n@private",modifiers:["static"],params:[{name:"value",description:"The progress task value",type:{name:"number"},optional:!1},{name:"max",description:"The maximum value",type:{name:"number"},optional:!1}],returns:{description:"The progress task value in percents",type:{name:"number"}},description:null},{name:"progressbarWrapperRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"progressbarRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"ProgressBar",props:{max:{defaultValue:{value:"1.0",computed:!1},type:{name:"number"},required:!1,description:"A floating point number that specifies minimum completion rate for a task to be considered\ncomplete. Default value is 1.0.\n@type {number}",tsType:{name:"number"}},value:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"A floating point number that specifies current task completion rate.\n@type {number}",tsType:{name:"number"}},label:{defaultValue:{value:"'Progress'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},global:{type:{name:"bool"},required:!1,description:"Sets the ring-progress-bar_global class to position the progress bar on top of the screen.\nShould be placed directly inside body, will be positioned right below .ring-header\nif placed adjacent to it.\n@type {boolean}",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},className:{type:{name:"string"},required:!1,description:"Custom class\n@type {string}"},style:{type:{name:"object"},required:!1,description:""},staticColor:{type:{name:"bool"},required:!1,description:"Disables Disabled progress bar color animation and sets it to static color.\n@type {boolean}",tsType:{name:"boolean"}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/progress-bar/progress-bar.tsx"]={name:"ProgressBar",docgenInfo:ProgressBar.__docgenInfo,path:"src/progress-bar/progress-bar.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/progress-bar/progress-bar.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,`:root {\n  --ring-progress-bar-background-color: rgba(0, 0, 0, 0.2);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.6);\n}\n\n.${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark},\n.ring-ui-theme-dark {\n  --ring-progress-bar-background-color: rgba(255, 255, 255, 0.3);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.4);\n}\n\n.progressBar_b130 {\n  position: relative;\n  z-index: 1; /* Required to see border-radius on animated background */\n\n  overflow: hidden;\n\n  height: 4px;\n  margin-bottom: 4px;\n\n  border-radius: 2px;\n  background-color: var(--ring-progress-bar-background-color);\n}\n\n.globalMode_b965 {\n  position: absolute;\n  top: 0;\n\n  width: 100%;\n\n  background: transparent;\n}\n\n.line_a000 {\n  float: left;\n\n  width: 0;\n  height: 100%;\n\n  transition: width 0.6s ease;\n  text-align: center;\n\n  color: var(--ring-content-background-color);\n  border-radius: 2px;\n  background-color: var(--ring-main-color);\n\n  line-height: 4px;\n}\n\n.line_a000::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: "";\n    animation: progress-bar_d193 2500ms linear infinite;\n\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--ring-progress-bar-line-background-color), rgba(0, 0, 0, 0));\n    background-repeat: no-repeat;\n  }\n\n.staticLineColor_b390 .line_a000::after  {\n      animation: none;\n\n      background-image: var(--ring-progress-bar-line-background-color);\n    }\n\n@keyframes progress-bar_d193 {\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n}\n`,"",{version:3,sources:["webpack://./src/progress-bar/progress-bar.css"],names:[],mappings:"AAKA;EACE,wDAAwD;EACxD,mEAAmE;AACrE;;AAEA;;EAEE,8DAA8D;EAC9D,mEAAmE;AACrE;;AAEA;EACE,kBAAkB;EAClB,UAAU,EAAE,yDAAyD;;EAErE,gBAAgB;;EAEhB,WAAsB;EACtB,kBAA6B;;EAE7B,kBAAkB;EAClB,2DAA2D;AAC7D;;AAEA;EACE,kBAAkB;EAClB,MAAM;;EAEN,WAAW;;EAEX,uBAAuB;AACzB;;AAEA;EACE,WAAW;;EAEX,QAAQ;EACR,YAAY;;EAEZ,2BAA2B;EAC3B,kBAAkB;;EAElB,2CAA2C;EAC3C,kBAAkB;EAClB,wCAAwC;;EAExC,gBAA2B;AAqB7B;;AAnBE;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;;IAEP,WAAW;IACX,mDAA8C;;IAE9C,+HAA+H;IAC/H,4BAA4B;EAO9B;;AALE;MACE,eAAe;;MAEf,gEAAgE;IAClE;;AAIJ;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,2BAA2B;EAC7B;AACF",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  --ring-progress-bar-background-color: rgba(0, 0, 0, 0.2);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.6);\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  --ring-progress-bar-background-color: rgba(255, 255, 255, 0.3);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.4);\n}\n\n.progressBar {\n  position: relative;\n  z-index: 1; /* Required to see border-radius on animated background */\n\n  overflow: hidden;\n\n  height: calc(unit / 2);\n  margin-bottom: calc(unit / 2);\n\n  border-radius: 2px;\n  background-color: var(--ring-progress-bar-background-color);\n}\n\n.globalMode {\n  position: absolute;\n  top: 0;\n\n  width: 100%;\n\n  background: transparent;\n}\n\n.line {\n  float: left;\n\n  width: 0;\n  height: 100%;\n\n  transition: width 0.6s ease;\n  text-align: center;\n\n  color: var(--ring-content-background-color);\n  border-radius: 2px;\n  background-color: var(--ring-main-color);\n\n  line-height: calc(unit / 2);\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: "";\n    animation: progress-bar 2500ms linear infinite;\n\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--ring-progress-bar-line-background-color), rgba(0, 0, 0, 0));\n    background-repeat: no-repeat;\n\n    .staticLineColor &  {\n      animation: none;\n\n      background-image: var(--ring-progress-bar-line-background-color);\n    }\n  }\n}\n\n@keyframes progress-bar {\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark}`,unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit}`,progressBar:"progressBar_b130",globalMode:"globalMode_b965",line:"line_a000","progress-bar":"progress-bar_d193",staticLineColor:"staticLineColor_b390"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/progress-bar/progress-bar.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/progress-bar/progress-bar.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);