(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[3280],{"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/loader/loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader/loader.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loader",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport {Story} from '@storybook/react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Loader, {LoaderProps} from './loader';\n\nexport default {\n  title: 'Components/Loader',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    component: Loader,\n    framework: 'react',\n\n    hermione: {skip: true}\n  }\n};\n\nexport const basic: Story<LoaderProps> = args => <Loader {...args}/>;\n\nbasic.storyName = 'Loader';\nbasic.args = {message: 'Loading...'};\n",locationsMap:{basic:{startLoc:{col:41,line:21},endLoc:{col:68,line:21},startBody:{col:41,line:21},endBody:{col:68,line:21}}}},component:_loader__WEBPACK_IMPORTED_MODULE_2__.Z,framework:"react",hermione:{skip:!0}}},basic=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_loader__WEBPACK_IMPORTED_MODULE_2__.Z,args);basic.storyName="Loader",basic.args={message:"Loading..."},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader/loader.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/loader/loader.stories.tsx"})},"./src/loader/loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Loader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/data-tests.ts"),_loader_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader/loader__core.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Loader extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,colors:prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,message:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,stop:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,deterministic:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool};componentDidUpdate(prevProps){this.loader&&(!prevProps.stop&&this.props.stop?this.loader.stopAnimation():prevProps.stop&&!this.props.stop&&this.loader.startAnimation())}componentWillUnmount(){this.loader?.destroy()}loader;initLoader=el=>{el&&(this.loader=new _loader_core__WEBPACK_IMPORTED_MODULE_2__.Z(el,this.props))};render(){const{message,size,colors,"data-test":dataTest,stop,deterministic,...restProps}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_3__.Z)("ring-loader",dataTest)},restProps,{ref:this.initLoader}))}}Loader.__docgenInfo={description:"Displays a large animated loader with an optional caption. Typical use cases: page loading animation, major action animation.",methods:[{name:"initLoader",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"Node | null",elements:[{name:"Node"},{name:"null"}]}}],returns:null}],displayName:"Loader",props:{className:{type:{name:"string"},required:!1,description:""},size:{type:{name:"number"},required:!1,description:""},colors:{type:{name:"array"},required:!1,description:""},message:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},stop:{type:{name:"bool"},required:!1,description:""},deterministic:{type:{name:"bool"},required:!1,description:""}},composes:["Partial","HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader/loader.tsx"]={name:"Loader",docgenInfo:Loader.__docgenInfo,path:"src/loader/loader.tsx"})},"./src/loader/loader__core.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LoaderCore});var _global_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/dom.ts"),_loader_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/loader/loader.css"),_loader_css__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_loader_css__WEBPACK_IMPORTED_MODULE_0__);class Particle{radius;x;y;color;decay;life;constructor(_ref){let{x,y,radius,color}=_ref;this.radius=radius,this.x=x,this.y=y,this.color=color,this.decay=.01,this.life=1}step(){this.life-=this.decay}isAlive(){return this.life>=0}draw(ctx){const alpha=this.life>=0?this.life:0;ctx.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`,ctx.beginPath(),ctx.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),ctx.fill()}}function deterministic(){return.5}class LoaderCore{static defaultProps={size:64,stop:!1,deterministic:!1,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]};static calculateGradient(startColor,stopColor,position){const calculateChannelValue=(a,b)=>a+Math.round((b-a)*position);return{r:calculateChannelValue(startColor.r,stopColor.r),g:calculateChannelValue(startColor.g,stopColor.g),b:calculateChannelValue(startColor.b,stopColor.b)}}props;canvas;textNode;ctx;height;width;particles;baseSpeed;colorIndex;maxRadius;minRadius;colorChangeTick;x;y;radius;hSpeed;vSpeed;radiusSpeed;tick;isRunning;constructor(containerNode,props){this.props=Object.assign({},LoaderCore.defaultProps,props),this.canvas=document.createElement("canvas"),this.canvas.dataset.test="ring-loader",this.canvas.classList.add(_loader_css__WEBPACK_IMPORTED_MODULE_0___default().canvas),this.textNode=document.createElement("div"),this.textNode.dataset.test="ring-loader-text",this.textNode.classList.add(_loader_css__WEBPACK_IMPORTED_MODULE_0___default().text),this.textNode.textContent=this.props.message?this.props.message:"",containerNode.appendChild(this.canvas),containerNode.appendChild(this.textNode);const pixelRatio=LoaderCore.getPixelRatio(),canvasSize=this.props.size*pixelRatio;this.canvas.width=canvasSize,this.canvas.height=canvasSize,this.canvas.style.width=`${this.props.size}px`,this.canvas.style.height=`${this.props.size}px`,this.ctx=this.canvas.getContext("2d"),this.ctx?.scale(pixelRatio,pixelRatio),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!this.props.stop,this.isRunning?this.startAnimation():this.draw()}static getPixelRatio(){return(0,_global_dom__WEBPACK_IMPORTED_MODULE_1__.mX)()}prepareInitialState(ticks){for(let i=0;i<ticks;i++)this.step()}handleLimits(coord,radius,speed,limit){const randomizedSpeedChange=(this.props.deterministic?deterministic:Math.random)()-this.baseSpeed/2;return coord+2*radius+this.baseSpeed>=limit?-(this.baseSpeed+randomizedSpeedChange):coord<=this.baseSpeed?this.baseSpeed+randomizedSpeedChange:speed}calculateNextCoordinates(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}calculateNextRadius(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}getNextColor(){const colors=this.props.colors,currentColor=colors[this.colorIndex],nextColor=colors[this.colorIndex+1]||colors[0];return LoaderCore.calculateGradient(currentColor,nextColor,this.tick/this.colorChangeTick)}nextTick(){this.tick++,this.tick>this.colorChangeTick&&(this.tick=0,this.colorIndex++,this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}step(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach((particle=>particle.step())),this.particles.push(new Particle({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}removeDeadParticles(){this.particles=this.particles.filter((it=>it.isAlive()))}draw(){const ctx=this.ctx;null!=ctx&&(ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach((particle=>particle.draw(ctx))))}loop(){this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame((()=>this.loop()))}updateMessage(text){this.textNode.textContent=text||""}stopAnimation(){this.isRunning=!1,this.canvas.classList.remove(_loader_css__WEBPACK_IMPORTED_MODULE_0___default().animate)}startAnimation(){this.isRunning=!0,this.canvas.classList.add(_loader_css__WEBPACK_IMPORTED_MODULE_0___default().animate),this.loop()}destroy(){this.isRunning=!1}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader/loader.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,"@keyframes rotation-keyframes_d87b {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.canvas_b4b4 {\n  display: block;\n\n  margin: 16px auto;\n\n  pointer-events: none;\n}\n\n.animate_f7ea {\n  animation: rotation-keyframes_d87b 36s linear infinite;\n}\n\n.text_fd63 {\n  text-align: center;\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n}\n","",{version:3,sources:["webpack://./src/loader/loader.css"],names:[],mappings:"AAIA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,cAAc;;EAEd,iBAA2B;;EAE3B,oBAAoB;AACtB;;AAEA;EACE,sDAAiD;AACnD;;AAEA;EACE,kBAAkB;;EAElB,oCAAoC;EACpC,gCAAgC;EAChC,oCAAoC;AACtC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n@keyframes rotation-keyframes {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.canvas {\n  display: block;\n\n  margin: calc(unit * 2) auto;\n\n  pointer-events: none;\n}\n\n.animate {\n  animation: rotation-keyframes 36s linear infinite;\n}\n\n.text {\n  text-align: center;\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,canvas:"canvas_b4b4",animate:"animate_f7ea","rotation-keyframes":"rotation-keyframes_d87b",text:"text_fd63"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/loader/loader.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader/loader.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);