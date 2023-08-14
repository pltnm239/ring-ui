(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[999],{"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/progress-bar/progress-bar.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_progress_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/progress-bar/progress-bar.tsx");const disableAnimations=window.location.search.includes("block-animations");__webpack_exports__.default={parameters:{storySource:{source:"import React, {Component} from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport ProgressBar from './progress-bar';\n\nconst disableAnimations = window.location.search.includes('block-animations');\n\nexport default {\n  title: 'Components/Progress Bar',\n  decorators: [reactDecorator()]\n};\n\nexport const basic = () => {\n  interface ProgressBarDemoState {\n    value: number\n  }\n  class ProgressBarDemo extends Component<{}, ProgressBarDemoState> {\n    state = {\n      value: disableAnimations ? 0.5 : 0\n    };\n\n    componentDidMount() {\n      if (disableAnimations) {\n        return;\n      }\n      setInterval(\n        () => this.setState(({value}) => ({value: value >= 1 ? 0 : value + 0.1})),\n        500\n      );\n    }\n\n    render() {\n      const {value} = this.state;\n\n      return (\n        <div>\n          <div style={{height: '25px', paddingTop: '25px'}}>\n            <ProgressBar label=\"Progress\" value={value} style={{width: 288}}/>\n          </div>\n\n          <div style={{height: '25px', paddingTop: '25px', background: '#F0F0F0'}}>\n            <ProgressBar label=\"Progress\" value={value} style={{width: 288}}/>\n          </div>\n        </div>\n      );\n    }\n  }\n\n  return <ProgressBarDemo/>;\n};\n\nbasic.storyName = 'Progress Bar';\n",locationsMap:{basic:{startLoc:{col:21,line:14},endLoc:{col:1,line:51},startBody:{col:21,line:14},endBody:{col:1,line:51}}}}},title:"Components/Progress Bar",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()]};const basic=()=>{class ProgressBarDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={value:disableAnimations?.5:0};componentDidMount(){disableAnimations||setInterval((()=>this.setState((_ref=>{let{value:value}=_ref;return{value:value>=1?0:value+.1}}))),500)}render(){const{value:value}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"25px",paddingTop:"25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Z,{label:"Progress",value:value,style:{width:288}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"25px",paddingTop:"25px",background:"#F0F0F0"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Z,{label:"Progress",value:value,style:{width:288}})))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProgressBarDemo,null)};basic.storyName="Progress Bar",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/progress-bar/progress-bar.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/progress-bar/progress-bar.examples.tsx"})},"./src/progress-bar/progress-bar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ProgressBar}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_progress_bar_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/progress-bar/progress-bar.css"),_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_progress_bar_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class ProgressBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static toPercent(value,max){const percents=100*value/max;return percents>100?100:percents}static propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,global:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,max:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number};static defaultProps={max:1,value:0,label:"Progress"};progressbarWrapper;progressbarWrapperRef=el=>{this.progressbarWrapper=el};progressbar;progressbarRef=el=>{this.progressbar=el};render(){const{className:className,global:global,max:max,value:value,label:label,...otherProps}=this.props,width=value?`${ProgressBar.toPercent(value,max)}%`:void 0,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar,className,{[_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().globalMode]:global});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},otherProps,{className:classes,ref:this.progressbarWrapperRef}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_progress_bar_css__WEBPACK_IMPORTED_MODULE_2___default().line,ref:this.progressbarRef,role:"progressbar","aria-label":label,"aria-valuenow":value,"aria-valuemin":0,"aria-valuemax":max,style:{width:width}}))}}ProgressBar.__docgenInfo={description:"@name Progress Bar",methods:[{name:"toPercent",docblock:"@param {number} value The progress task value\n@param {number} max The maximum value\n@return {number} The progress task value in percents\n@private",modifiers:["static"],params:[{name:"value",description:"The progress task value",type:{name:"number"},optional:!1},{name:"max",description:"The maximum value",type:{name:"number"},optional:!1}],returns:{description:"The progress task value in percents",type:{name:"number"}},description:null},{name:"progressbarWrapperRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"progressbarRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"ProgressBar",props:{max:{defaultValue:{value:"1.0",computed:!1},type:{name:"number"},required:!1,description:"A floating point number that specifies minimum completion rate for a task to be considered\ncomplete. Default value is 1.0.\n@type {number}",tsType:{name:"number"}},value:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"A floating point number that specifies current task completion rate.\n@type {number}",tsType:{name:"number"}},label:{defaultValue:{value:"'Progress'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},global:{type:{name:"bool"},required:!1,description:"Sets the ring-progress-bar_global class to position the progress bar on top of the screen.\nShould be placed directly inside body, will be positioned right below .ring-header\nif placed adjacent to it.\n@type {boolean}",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},className:{type:{name:"string"},required:!1,description:"Custom class\n@type {string}"},style:{type:{name:"object"},required:!1,description:""}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/progress-bar/progress-bar.tsx"]={name:"ProgressBar",docgenInfo:ProgressBar.__docgenInfo,path:"src/progress-bar/progress-bar.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/progress-bar/progress-bar.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --ring-progress-bar-background-color: rgba(0, 0, 0, 0.2);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.6);\n}\n\n."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark+',\n.ring-ui-theme-dark {\n  --ring-progress-bar-background-color: rgba(255, 255, 255, 0.3);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.4);\n}\n\n.progressBar_b130 {\n  position: relative;\n  z-index: 1; /* Required to see border-radius on animated background */\n\n  overflow: hidden;\n\n  height: 4px;\n  margin-bottom: 4px;\n\n  border-radius: 2px;\n  background-color: rgba(0, 0, 0, 0.2);\n  background-color: var(--ring-progress-bar-background-color);\n}\n\n.globalMode_b965 {\n  position: absolute;\n  top: 0;\n\n  width: 100%;\n\n  background: transparent;\n}\n\n.line_a000 {\n  float: left;\n\n  width: 0;\n  height: 100%;\n\n  transition: width 0.6s ease;\n  text-align: center;\n\n  color: var(--ring-content-background-color);\n  border-radius: 2px;\n  background-color: var(--ring-main-color);\n\n  line-height: 4px;\n}\n\n.line_a000::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: "";\n    animation: progress-bar_d193 2500ms linear infinite;\n\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0));\n\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--ring-progress-bar-line-background-color), rgba(0, 0, 0, 0));\n    background-repeat: no-repeat;\n  }\n\n@keyframes progress-bar_d193 {\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n}\n',"",{version:3,sources:["webpack://./src/progress-bar/progress-bar.css"],names:[],mappings:"AAKA;EACE,wDAAwD;EACxD,mEAAmE;AACrE;;AAEA;;EAEE,8DAA8D;EAC9D,mEAAmE;AACrE;;AAEA;EACE,kBAAkB;EAClB,UAAU,EAAE,yDAAyD;;EAErE,gBAAgB;;EAEhB,WAAsB;EACtB,kBAA6B;;EAE7B,kBAAkB;EAClB,oCAA2D;EAA3D,2DAA2D;AAC7D;;AAEA;EACE,kBAAkB;EAClB,MAAM;;EAEN,WAAW;;EAEX,uBAAuB;AACzB;;AAEA;EACE,WAAW;;EAEX,QAAQ;EACR,YAAY;;EAEZ,2BAA2B;EAC3B,kBAAkB;;EAElB,2CAA2C;EAC3C,kBAAkB;EAClB,wCAAwC;;EAExC,gBAA2B;AAe7B;;AAbE;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;;IAEP,WAAW;IACX,mDAA8C;;IAE9C,yGAA+H;;IAA/H,+HAA+H;IAC/H,4BAA4B;EAC9B;;AAGF;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,2BAA2B;EAC7B;AACF",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  --ring-progress-bar-background-color: rgba(0, 0, 0, 0.2);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.6);\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  --ring-progress-bar-background-color: rgba(255, 255, 255, 0.3);\n  --ring-progress-bar-line-background-color: rgba(255, 255, 255, 0.4);\n}\n\n.progressBar {\n  position: relative;\n  z-index: 1; /* Required to see border-radius on animated background */\n\n  overflow: hidden;\n\n  height: calc(unit / 2);\n  margin-bottom: calc(unit / 2);\n\n  border-radius: 2px;\n  background-color: var(--ring-progress-bar-background-color);\n}\n\n.globalMode {\n  position: absolute;\n  top: 0;\n\n  width: 100%;\n\n  background: transparent;\n}\n\n.line {\n  float: left;\n\n  width: 0;\n  height: 100%;\n\n  transition: width 0.6s ease;\n  text-align: center;\n\n  color: var(--ring-content-background-color);\n  border-radius: 2px;\n  background-color: var(--ring-main-color);\n\n  line-height: calc(unit / 2);\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: "";\n    animation: progress-bar 2500ms linear infinite;\n\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--ring-progress-bar-line-background-color), rgba(0, 0, 0, 0));\n    background-repeat: no-repeat;\n  }\n}\n\n@keyframes progress-bar {\n  from {\n    transform: translateX(-100%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark,unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit,progressBar:"progressBar_b130",globalMode:"globalMode_b965",line:"line_a000","progress-bar":"progress-bar_d193"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/progress-bar/progress-bar.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/progress-bar/progress-bar.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);