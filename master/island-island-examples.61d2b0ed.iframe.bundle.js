(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[4933],{"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/island/island.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},withResizeableHeader:function(){return withResizeableHeader},withScroll:function(){return withScroll}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_island__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/island/island.tsx"),_island__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/island/header.tsx"),_island__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/island/content.tsx");__webpack_exports__.default={title:"Components/Island",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Island, {AdaptiveIsland, Header, Content} from './island';\n\nexport default {\n  title: 'Components/Island',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays an island.',\n    hermione: {captureSelector: '*[data-test~=ring-island]'}\n  }\n};\n\nexport const basic = () => (\n  <Island>\n    <Header border>Title</Header>\n    <Content>Content</Content>\n  </Island>\n);\n\nbasic.storyName = 'basic';\n\nexport const withScroll = () => (\n  <Island className=\"limited-island\" narrow>\n    <Header border>Title</Header>\n    <Content fade>\n      {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. It has survived not only five\n      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}\n    </Content>\n  </Island>\n);\n\nwithScroll.storyName = 'with scroll';\n\nwithScroll.parameters = {\n  storyStyles: `\n<style>\n  .limited-island {\n    height: 200px;\n    width: 200px;\n  }\n</style>\n      `\n};\n\nexport const withResizeableHeader = () => (\n  <AdaptiveIsland className=\"limited-island\" narrow>\n    <Header>Title</Header>\n    <Content fade>\n      {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. It has survived not only five\n      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}\n    </Content>\n  </AdaptiveIsland>\n);\n\nwithResizeableHeader.storyName = 'with resizeable header';\n\nwithResizeableHeader.parameters = {\n  storyStyles: `\n<style>\n  .limited-island {\n    height: 200px;\n    width: 200px;\n  }\n</style>\n      `\n};\n",locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:22},startBody:{col:21,line:17},endBody:{col:1,line:22}},"with-scroll":{startLoc:{col:26,line:26},endLoc:{col:1,line:36},startBody:{col:26,line:26},endBody:{col:1,line:36}},"with-resizeable-header":{startLoc:{col:36,line:51},endLoc:{col:1,line:61},startBody:{col:36,line:51},endBody:{col:1,line:61}}}},notes:"Displays an island.",hermione:{captureSelector:"*[data-test~=ring-island]"}}};const basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_2__.ZP,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_3__.Z,{border:!0},"Title"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Content"));basic.storyName="basic";const withScroll=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_2__.ZP,{className:"limited-island",narrow:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_3__.Z,{border:!0},"Title"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_4__.Z,{fade:!0},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. It has survived not only five\n      centuries, but also the leap into electronic typesetting, remaining essentially unchanged."));withScroll.storyName="with scroll",withScroll.parameters={storyStyles:"\n<style>\n  .limited-island {\n    height: 200px;\n    width: 200px;\n  }\n</style>\n      "};const withResizeableHeader=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_2__.R8,{className:"limited-island",narrow:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_3__.Z,null,"Title"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island__WEBPACK_IMPORTED_MODULE_4__.Z,{fade:!0},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. It has survived not only five\n      centuries, but also the leap into electronic typesetting, remaining essentially unchanged."));withResizeableHeader.storyName="with resizeable header",withResizeableHeader.parameters={storyStyles:"\n<style>\n  .limited-island {\n    height: 200px;\n    width: 200px;\n  }\n</style>\n      "},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/island.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/island/island.examples.tsx"}),withScroll.__docgenInfo={description:"",methods:[],displayName:"withScroll"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/island.examples.tsx"]={name:"withScroll",docgenInfo:withScroll.__docgenInfo,path:"src/island/island.examples.tsx"}),withResizeableHeader.__docgenInfo={description:"",methods:[],displayName:"withResizeableHeader"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/island.examples.tsx"]={name:"withResizeableHeader",docgenInfo:withResizeableHeader.__docgenInfo,path:"src/island/island.examples.tsx"})},"./src/global/linear-function.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function linearFunction(x0,y0,a){return{y(x){return+y0+(x-x0)*a},x(y){return+x0+(y-y0)/a}}}function interpolateLinear(x0,x1,phase){return linearFunction(x0,x0,phase).y(x1)}__webpack_require__.d(__webpack_exports__,{Z:function(){return linearFunction},e:function(){return interpolateLinear}})},"./src/island/adaptive-island-hoc.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{PN:function(){return PhaseContext},ZP:function(){return adaptiveIslandHOC},cg:function(){return ScrollHandlerContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_global_linear_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/linear-function.ts");const TITLE_RESIZE_END=20,TITLE_RESIZE_THRESHOLD=36,PhaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),ScrollHandlerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function adaptiveIslandHOC(ComposedComponent){return class AdaptiveIsland extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes=ComposedComponent.propTypes;state={phase:null};onContentScroll=_ref=>{var _this$state$phase;let{scrollTop:scrollTop,scrollHeight:scrollHeight,clientHeight:clientHeight}=_ref;if(scrollHeight-clientHeight>=(0,_global_linear_function__WEBPACK_IMPORTED_MODULE_1__.e)(TITLE_RESIZE_THRESHOLD,TITLE_RESIZE_END,null!==(_this$state$phase=this.state.phase)&&void 0!==_this$state$phase?_this$state$phase:0)){const phase=Math.min(1,scrollTop/TITLE_RESIZE_END);this.setState({phase:phase})}};render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PhaseContext.Provider,{value:this.state.phase},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollHandlerContext.Provider,{value:this.onContentScroll},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent,this.props)))}}}},"./src/island/content.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),element_resize_detector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/element-resize-detector/src/element-resize-detector.js"),element_resize_detector__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(element_resize_detector__WEBPACK_IMPORTED_MODULE_2__),_global_schedule_raf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/schedule-raf.ts"),_island_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/island/island.css"),_island_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_island_css__WEBPACK_IMPORTED_MODULE_3__),_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/island/adaptive-island-hoc.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const scheduleScrollAction=(0,_global_schedule_raf__WEBPACK_IMPORTED_MODULE_4__.Z)(),noop=()=>{};class Content extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,scrollableWrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,fade:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,bottomBorder:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,onScroll:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onScrollToBottom:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func};static defaultProps={fade:!0,bottomBorder:!1,onScroll:noop,onScrollToBottom:noop};state={scrolledToTop:!0,scrolledToBottom:!1};componentWillUnmount(){this.scrollableNode=null,this.wrapperNode&&this.resizeDetector.removeAllListeners(this.wrapperNode)}resizeDetector=element_resize_detector__WEBPACK_IMPORTED_MODULE_2___default()({strategy:"scroll"});wrapperNode;setWrapper=node=>{node&&(this.wrapperNode=node,this.resizeDetector.listenTo(node,this.calculateScrollPosition))};calculateScrollPosition=()=>scheduleScrollAction((()=>{const{scrollableNode:scrollableNode}=this;if(!scrollableNode)return;this.props.onScroll(scrollableNode);const{scrollTop:scrollTop,scrollHeight:scrollHeight,offsetHeight:offsetHeight}=scrollableNode,scrolledToTop=0===scrollTop,scrolledToBottom=offsetHeight+scrollTop>=scrollHeight-16;scrolledToBottom&&this.props.onScrollToBottom?.(),this.setState({scrolledToTop:scrolledToTop,scrolledToBottom:scrolledToBottom})}));scrollableNode;setScrollableNodeAndCalculatePosition=node=>{node&&(this.scrollableNode=node,this.calculateScrollPosition())};render(){const{children:children,className:className,bottomBorder:bottomBorder,scrollableWrapperClassName:scrollableWrapperClassName,onScroll:onScroll,onScrollToBottom:onScrollToBottom,fade:fade,...restProps}=this.props,{scrolledToTop:scrolledToTop,scrolledToBottom:scrolledToBottom}=this.state,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_3___default().content,className,{[_island_css__WEBPACK_IMPORTED_MODULE_3___default().contentWithTopFade]:fade&&!scrolledToTop,[_island_css__WEBPACK_IMPORTED_MODULE_3___default().contentWithBottomFade]:fade&&!scrolledToBottom,[_island_css__WEBPACK_IMPORTED_MODULE_3___default().withTransparentBottomBorder]:bottomBorder,[_island_css__WEBPACK_IMPORTED_MODULE_3___default().withBottomBorder]:bottomBorder&&!scrolledToBottom}),scrollableWrapperClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_3___default().scrollableWrapper,scrollableWrapperClassName);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":"ring-island-content",className:classes}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{tabIndex:0,"data-scrollable-container":!0,className:scrollableWrapperClasses,ref:this.setScrollableNodeAndCalculatePosition,onScroll:fade?this.calculateScrollPosition:noop},fade&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:this.setWrapper},children),!fade&&children))}}const ContentWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_6__.cg.Consumer,null,(onScroll=>{const addProps=null!=onScroll?{onScroll:onScroll,bottomBorder:!0}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content,_extends({},props,addProps,{ref:ref}))}))));ContentWrapper.displayName="ContentWrapper",ContentWrapper.__docgenInfo={description:"",methods:[],displayName:"ContentWrapper"},__webpack_exports__.Z=ContentWrapper,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/content.tsx"]={name:"ContentWrapper",docgenInfo:ContentWrapper.__docgenInfo,path:"src/island/content.tsx"})},"./src/island/header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_linear_function__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/linear-function.ts"),_island_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/island/island.css"),_island_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_island_css__WEBPACK_IMPORTED_MODULE_2__),_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/adaptive-island-hoc.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Start={FONT_SIZE:24,LINE_HEIGHT:28,PADDING_TOP:24,PADDING_BOTTOM:0,X:0,Y:0,SPACING:0},End={FONT_SIZE:13,LINE_HEIGHT:20,PADDING_TOP:16,PADDING_BOTTOM:8,X:.4,Y:.1,SPACING:1.09};class Header extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,border:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,wrapWithTitle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,phase:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number};static defaultProps={wrapWithTitle:!0};style(name){var _this$props$phase;return(0,_global_linear_function__WEBPACK_IMPORTED_MODULE_4__.e)(Start[name],End[name],null!==(_this$props$phase=this.props.phase)&&void 0!==_this$props$phase?_this$props$phase:0)}render(){const{children:children,className:className,wrapWithTitle:wrapWithTitle,border:border,phase:phase,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_2___default().header,className,{[_island_css__WEBPACK_IMPORTED_MODULE_2___default().withBottomBorder]:border||null!=phase&&phase>=.5}),headerStyle=null!=phase?{lineHeight:`${this.style("LINE_HEIGHT")}px`,paddingTop:this.style("PADDING_TOP"),paddingBottom:this.style("PADDING_BOTTOM")}:void 0,scaleFont=null!=phase&&this.style("FONT_SIZE")/Start.FONT_SIZE,titleStyle=null!=phase&&phase<1?{fontSize:Start.FONT_SIZE,transform:`translate(${this.style("X")}px, ${this.style("Y")}px) scale(${scaleFont})`,letterSpacing:this.style("SPACING")}:void 0;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":"ring-island-header",className:classes,style:headerStyle}),wrapWithTitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:_island_css__WEBPACK_IMPORTED_MODULE_2___default().title,style:titleStyle},children),!wrapWithTitle&&children)}}const HeaderWrapper=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__.PN.Consumer,null,(phase=>{const addProps=null!=phase?{phase:phase}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,_extends({},props,addProps))}));HeaderWrapper.__docgenInfo={description:"",methods:[],displayName:"HeaderWrapper",props:{wrapWithTitle:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""},phase:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}},composes:["HTMLAttributes"]},__webpack_exports__.Z=HeaderWrapper,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/header.tsx"]={name:"HeaderWrapper",docgenInfo:HeaderWrapper.__docgenInfo,path:"src/island/header.tsx"})},"./src/island/island.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R8:function(){return AdaptiveIsland},ZP:function(){return Island}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/adaptive-island-hoc.tsx"),_island_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/island/island.css"),_island_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_island_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Island extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,narrow:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,withoutPaddings:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};render(){const{children:children,className:className,narrow:narrow,withoutPaddings:withoutPaddings,"data-test":dataTest,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_2___default().island,className,{[_island_css__WEBPACK_IMPORTED_MODULE_2___default().narrowIsland]:narrow,[_island_css__WEBPACK_IMPORTED_MODULE_2___default().withoutPaddings]:withoutPaddings});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{className:classes,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-island",dataTest)}),children)}}const AdaptiveIsland=(0,_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__.ZP)(Island);Island.__docgenInfo={description:"@name Island",methods:[],displayName:"Island",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},narrow:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},withoutPaddings:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/island/island.tsx"]={name:"Island",docgenInfo:Island.__docgenInfo,path:"src/island/island.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/island/island.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.island_a108 {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder_cf73 {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header_e0dd {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px 32px 8px;\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder_f0ca.withBottomBorder_f0ca {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title_e090 {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland_d80d .header_e0dd {\n  padding: 0 16px;\n}\n\n.content_bc46 {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper_eae7 {\n  overflow: auto;\n\n  width: 100%;\n  padding: 16px 32px;\n}\n\n.scrollableWrapper_eae7:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n.narrowIsland_d80d .scrollableWrapper_eae7 {\n  padding: 16px 16px;\n}\n\n.withoutPaddings_ff2c .scrollableWrapper_eae7 {\n  padding: 0;\n}\n\n.contentWithTopFade_db2a::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n\n.contentWithTopFade_db2a:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade_e909::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n',"",{version:3,sources:["webpack://./src/island/island.css"],names:[],mappings:"AAMA;EACE,aAAa;EACb,sBAAsB;;EAEtB,wCAAwC;EACxC,wCAAwC;;EAExC,sDAAsD;EACtD,oDAAoD;AACtD;;AAEA;EACE,oCAAoC;;EAEpC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,sBAA2C;;EAE3C,oCAAoC;;EAEpC,oCAAoC;;EAEpC,iBAAiB;AACnB;;AAEA;EACE,mDAAmD;EACnD,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,SAAS;;EAET,uBAAuB;EACvB,sBAAsB;;EAEtB,gCAAgC;;EAEhC,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,eAAyB;AAC3B;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,cAAc;;EAEd,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,cAAc;;EAEd,WAAW;EACX,kBAAsC;AAKxC;;AAHE;IACE,aAAa;EACf;;AAGF;EACE,kBAAsC;AACxC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,YAAsB;;EAEtB,WAAW;;EAEX,oBAAoB;;EAEpB,YAAY;;EAEZ,iGAAgE;AAClE;;AAEA;EACE,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,YAAsB;;EAEtB,WAAW;EACX,oBAAoB;;EAEpB,YAAY;EACZ,qDAAqD;EACrD,oDAAoD;EACpD,oGAAmE;AACrE",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value gradientStart: rgba(255, 255, 255, 0);\n@value gradientStop: var(--ring-content-background-color);\n\n.island {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header {\n  box-sizing: border-box;\n  width: 100%;\n  padding: calc(unit * 2) calc(unit * 4) unit;\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder.withBottomBorder {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland .header {\n  padding: 0 calc(unit * 2);\n}\n\n.content {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper {\n  overflow: auto;\n\n  width: 100%;\n  padding: calc(unit * 2) calc(unit * 4);\n\n  &:focus:not(:focus-visible) {\n    outline: none;\n  }\n}\n\n.narrowIsland .scrollableWrapper {\n  padding: calc(unit * 2) calc(unit * 2);\n}\n\n.withoutPaddings .scrollableWrapper {\n  padding: 0;\n}\n\n.contentWithTopFade::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(unit * 3);\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, gradientStart, gradientStop);\n}\n\n.contentWithTopFade:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(unit * 3);\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, gradientStart, gradientStop);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,gradientStart:"rgba(255, 255, 255, 0)",gradientStop:"var(--ring-content-background-color)",island:"island_a108",withTransparentBottomBorder:"withTransparentBottomBorder_cf73",header:"header_e0dd",withBottomBorder:"withBottomBorder_f0ca",title:"title_e090",narrowIsland:"narrowIsland_d80d",content:"content_bc46",scrollableWrapper:"scrollableWrapper_eae7",withoutPaddings:"withoutPaddings_ff2c",contentWithTopFade:"contentWithTopFade_db2a",contentWithBottomFade:"contentWithBottomFade_e909"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/island/island.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/island/island.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);