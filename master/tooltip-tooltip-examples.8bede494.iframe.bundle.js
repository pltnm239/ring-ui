(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1771],{"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/tooltip/tooltip.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},displayedWhenNecessary:function(){return displayedWhenNecessary},nested:function(){return nested}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button/button.tsx"),_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tooltip/tooltip.tsx");__webpack_exports__.default={title:"Components/Tooltip",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React, {CSSProperties, Fragment} from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Button from '../button/button';\n\nimport Tooltip from './tooltip';\n\nexport default {\n  title: 'Components/Tooltip',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a tooltip.',\n    zeplinLink: 'https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc71cc9f8daafc0afcfa'\n  }\n};\n\nexport const basic = () => (\n  <div style={{paddingBottom: '100px'}}>\n    <Tooltip title=\"Explanation\">\n      <Button id=\"button-with-tooltip\">Button that requires an explanation</Button>\n    </Tooltip>\n  </div>\n);\n\nbasic.storyName = 'basic';\n\nbasic.parameters = {\n  hermione: {\n    actions: [\n      {type: 'mouseEvent', selector: '[data-test~=ring-tooltip]', eventname: 'mouseover'},\n      {type: 'wait', delay: 500},\n      {type: 'capture', name: '', selector: '#storybook-root'}\n    ]\n  }\n};\n\nexport const displayedWhenNecessary = () => {\n  const loremIpsum =\n    'Lorem ipsum dolor sit amet, vitae alienum prodesset vis ei, quando nullam ' +\n    'oportere sea eu, vim an labore diceret docendi. Vim ne illud iusto feugait, ' +\n    'sea laudem prompta accommodare eu, vidit noster efficiantur est id. Ex vide ' +\n    'tollit necessitatibus est, eum no quas dicunt. Luptatum singulis usu ne, cu ' +\n    'sit populo semper civibus. Tamquam dolorem qui ea, nec no dolor vidisse conceptam, ' +\n    'an est ponderum eloquentiam.';\n\n  const overflowStyles: CSSProperties = {\n    display: 'block',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap'\n  };\n\n  return (\n    <Fragment>\n      <div style={{paddingBottom: '200px'}}>\n        <Tooltip long title={loremIpsum} selfOverflowOnly className=\"lorem-ipsum__text\">\n          <b>{\"Tooltip won't be displayed:\"}</b> {loremIpsum}\n        </Tooltip>\n      </div>\n      <div style={{paddingBottom: '200px'}}>\n        <Tooltip\n          long\n          title={loremIpsum}\n          selfOverflowOnly\n          style={overflowStyles}\n          className=\"lorem-ipsum__text_overflow\"\n        >\n          <b>Tooltip will be displayed:</b> {loremIpsum}\n        </Tooltip>\n      </div>\n    </Fragment>\n  );\n};\n\ndisplayedWhenNecessary.storyName = 'displayed when necessary';\n\ndisplayedWhenNecessary.parameters = {\n  hermione: {\n    actions: [\n      {type: 'mouseEvent', selector: '.lorem-ipsum__text', eventname: 'mouseover'},\n      {type: 'capture', name: 'full text element', selector: '#storybook-root'},\n      {type: 'mouseEvent', selector: '.lorem-ipsum__text_overflow', eventname: 'mouseover'},\n      {type: 'capture', name: 'cut text element', selector: '#storybook-root'}\n    ]\n  }\n};\n\nexport const nested = () => (\n  <div style={{paddingBottom: '100px'}}>\n    <Tooltip title=\"Explanation\">\n      Some text with an explanation.\n\n      <Tooltip title=\"Nested Explanation\">\n        <strong> Some text inside with a separate explanation. </strong>\n\n        <Tooltip title=\"Nested Nested Explanation\">\n          <Button id=\"button-with-tooltip\">Inline button that requires an explanation too</Button>\n        </Tooltip>\n\n        <strong> Some text inside with a separate explanation. </strong>\n      </Tooltip>\n\n      Some text with an explanation.\n    </Tooltip>\n  </div>\n);\n\nnested.storyName = 'nested';\n\nnested.parameters = {\n  hermione: {\n    actions: [\n      {type: 'mouseEvent', selector: '[data-test~=ring-tooltip]', eventname: 'mouseover'},\n      {type: 'wait', delay: 500},\n      {type: 'capture', name: '', selector: '#storybook-root'}\n    ]\n  }\n};\n",locationsMap:{basic:{startLoc:{col:21,line:19},endLoc:{col:1,line:25},startBody:{col:21,line:19},endBody:{col:1,line:25}},"displayed-when-necessary":{startLoc:{col:38,line:39},endLoc:{col:1,line:75},startBody:{col:38,line:39},endBody:{col:1,line:75}},nested:{startLoc:{col:22,line:90},endLoc:{col:1,line:108},startBody:{col:22,line:90},endBody:{col:1,line:108}}}},notes:"Displays a tooltip.",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc71cc9f8daafc0afcfa"}};const basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"100px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"Explanation"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{id:"button-with-tooltip"},"Button that requires an explanation")));basic.storyName="basic",basic.parameters={hermione:{actions:[{type:"mouseEvent",selector:"[data-test~=ring-tooltip]",eventname:"mouseover"},{type:"wait",delay:500},{type:"capture",name:"",selector:"#storybook-root"}]}};const displayedWhenNecessary=()=>{const loremIpsum="Lorem ipsum dolor sit amet, vitae alienum prodesset vis ei, quando nullam oportere sea eu, vim an labore diceret docendi. Vim ne illud iusto feugait, sea laudem prompta accommodare eu, vidit noster efficiantur est id. Ex vide tollit necessitatibus est, eum no quas dicunt. Luptatum singulis usu ne, cu sit populo semper civibus. Tamquam dolorem qui ea, nec no dolor vidisse conceptam, an est ponderum eloquentiam.";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"200px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{long:!0,title:loremIpsum,selfOverflowOnly:!0,className:"lorem-ipsum__text"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Tooltip won't be displayed:")," ",loremIpsum)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"200px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{long:!0,title:loremIpsum,selfOverflowOnly:!0,style:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"lorem-ipsum__text_overflow"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Tooltip will be displayed:")," ",loremIpsum)))};displayedWhenNecessary.storyName="displayed when necessary",displayedWhenNecessary.parameters={hermione:{actions:[{type:"mouseEvent",selector:".lorem-ipsum__text",eventname:"mouseover"},{type:"capture",name:"full text element",selector:"#storybook-root"},{type:"mouseEvent",selector:".lorem-ipsum__text_overflow",eventname:"mouseover"},{type:"capture",name:"cut text element",selector:"#storybook-root"}]}};const nested=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"100px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"Explanation"},"Some text with an explanation.",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"Nested Explanation"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null," Some text inside with a separate explanation. "),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"Nested Nested Explanation"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{id:"button-with-tooltip"},"Inline button that requires an explanation too")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null," Some text inside with a separate explanation. ")),"Some text with an explanation."));nested.storyName="nested",nested.parameters={hermione:{actions:[{type:"mouseEvent",selector:"[data-test~=ring-tooltip]",eventname:"mouseover"},{type:"wait",delay:500},{type:"capture",name:"",selector:"#storybook-root"}]}},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/tooltip/tooltip.examples.tsx"}),displayedWhenNecessary.__docgenInfo={description:"",methods:[],displayName:"displayedWhenNecessary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.examples.tsx"]={name:"displayedWhenNecessary",docgenInfo:displayedWhenNecessary.__docgenInfo,path:"src/tooltip/tooltip.examples.tsx"}),nested.__docgenInfo={description:"",methods:[],displayName:"nested"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.examples.tsx"]={name:"nested",docgenInfo:nested.__docgenInfo,path:"src/tooltip/tooltip.examples.tsx"})},"./src/tooltip/tooltip.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Tooltip}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_popup_popup__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/popup/popup.tsx"),_global_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/dom.ts"),_global_data_tests__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/data-tests.ts"),_global_schedule_raf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/schedule-raf.ts"),_tooltip_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tooltip/tooltip.css"),_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const scheduleScroll=(0,_global_schedule_raf__WEBPACK_IMPORTED_MODULE_3__.Z)(),TooltipContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);class Tooltip extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={delay:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,selfOverflowOnly:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,popupProps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,title:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};static defaultProps={title:"",selfOverflowOnly:!1,popupProps:{}};state={showPopup:!1,showNestedPopup:!1};componentDidMount(){this.props.title&&this.addListeners()}componentDidUpdate(prevProps){!prevProps.title&&this.props.title?this.addListeners():prevProps.title&&!this.props.title&&this.listeners.removeAll()}componentWillUnmount(){clearTimeout(this.timeout),this.listeners.removeAll()}static PopupProps=_popup_popup__WEBPACK_IMPORTED_MODULE_5__.default.PopupProps;static contextType=TooltipContext;timeout;listeners=new _global_dom__WEBPACK_IMPORTED_MODULE_6__.zy;containerNode;containerRef=el=>{this.containerNode=el};tryToShowPopup=()=>{const{delay:delay,title:title}=this.props;title&&(delay?this.timeout=window.setTimeout(this.showPopup,delay):this.showPopup())};showPopup=()=>{if(this.props.selfOverflowOnly){const{containerNode:containerNode}=this;if(!containerNode)return;if(0===containerNode.clientWidth&&0===containerNode.clientHeight)return;if(containerNode.scrollWidth<=containerNode.clientWidth&&containerNode.scrollHeight<=containerNode.clientHeight)return}this.context?.onNestedTooltipShow(),this.setState({showPopup:!0})};hidePopup=()=>{clearTimeout(this.timeout),this.context?.onNestedTooltipHide(),this.setState({showPopup:!1})};addListeners(){null!=this.containerNode&&(this.listeners.add(this.containerNode,"mouseover",this.tryToShowPopup),this.listeners.add(this.containerNode,"mouseout",this.hidePopup)),this.listeners.add(document,"scroll",(()=>scheduleScroll(this.hidePopup)),{passive:!0})}popup;popupRef=el=>{this.popup=el};onNestedTooltipShow=()=>{this.setState({showNestedPopup:!0})};onNestedTooltipHide=()=>{this.setState({showNestedPopup:!1})};render(){const{children:children,"data-test":dataTest,title:title,delay:delay,selfOverflowOnly:selfOverflowOnly,popupProps:popupProps,long:long,...restProps}=this.props,ariaProps="string"==typeof title&&title?{"aria-label":title,role:"tooltip"}:{},{onNestedTooltipShow:onNestedTooltipShow,onNestedTooltipHide:onNestedTooltipHide}=this;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TooltipContext.Provider,{value:{onNestedTooltipShow:onNestedTooltipShow,onNestedTooltipHide:onNestedTooltipHide}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_extends({},ariaProps,restProps,{ref:this.containerRef,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_7__.Z)("ring-tooltip",dataTest),"data-test-title":"string"==typeof title?title:void 0}),children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_5__.default,_extends({trapFocus:!1,hidden:!this.state.showPopup||this.state.showNestedPopup,onCloseAttempt:this.hidePopup,maxHeight:400,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default().tooltip,{[_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default().long]:long}),attached:!1,top:4,dontCloseOnAnchorClick:!0,ref:this.popupRef},popupProps),title)))}}Tooltip.__docgenInfo={description:"@name Tooltip",methods:[{name:"containerRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"tryToShowPopup",docblock:null,modifiers:[],params:[],returns:null},{name:"showPopup",docblock:null,modifiers:[],params:[],returns:null},{name:"hidePopup",docblock:null,modifiers:[],params:[],returns:null},{name:"addListeners",docblock:null,modifiers:[],params:[],returns:null},{name:"popupRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"Popup | null",elements:[{name:"Popup"},{name:"null"}]}}],returns:null},{name:"onNestedTooltipShow",docblock:null,modifiers:[],params:[],returns:null},{name:"onNestedTooltipHide",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tooltip",props:{title:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:"",tsType:{name:"union",raw:"ReactNode | null | undefined",elements:[{name:"ReactNode"},{name:"null"},{name:"undefined"}]}},selfOverflowOnly:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},popupProps:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:"",tsType:{name:"union",raw:"Partial<PopupAttrs> | null | undefined",elements:[{name:"Partial",elements:[{name:"PopupAttrs"}],raw:"Partial<PopupAttrs>"},{name:"null"},{name:"undefined"}]}},delay:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | null | undefined",elements:[{name:"number"},{name:"null"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},long:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""}},composes:["Omit"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.tsx"]={name:"Tooltip",docgenInfo:Tooltip.__docgenInfo,path:"src/tooltip/tooltip.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tooltip/tooltip.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".tooltip_bbe9 {\n  max-width: 400px;\n  padding: 8px;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n}\n\n.long_c327 {\n  padding: 8px 12px;\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n","",{version:3,sources:["webpack://./src/tooltip/tooltip.css"],names:[],mappings:"AAIA;EACE,gBAA0B;EAC1B,YAAa;;EAEb,gBAAgB;;EAEhB,6BAA6B;AAC/B;;AAEA;EACE,iBAA8B;;EAE9B,wCAAwC;EACxC,2CAA2C;AAC7C",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.tooltip {\n  max-width: calc(unit * 50);\n  padding: unit;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n}\n\n.long {\n  padding: unit calc(unit * 1.5);\n\n  font-size: var(--ring-font-size-smaller);\n  line-height: var(--ring-line-height-lowest);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,tooltip:"tooltip_bbe9",long:"long_c327"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/tooltip/tooltip.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tooltip/tooltip.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);