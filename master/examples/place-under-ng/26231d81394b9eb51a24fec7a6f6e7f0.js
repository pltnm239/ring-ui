!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1117)}({0:function(e,t){e.exports=vendor_lib},1:function(e,t,n){e.exports=n(0)(452)},10:function(e,t,n){e.exports=n(0)(402)},1117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(47),o=(n.n(i),n(576),n(31));window.addEventListener("scroll",function(){var e=document.querySelector(".target-element"),t=n.i(o.e)();e.style.position=t>30?"fixed":"static"})},12:function(e,t,n){e.exports=n(0)(390)},18:function(e,t,n){e.exports=n(0)(359)},23:function(e,t,n){e.exports=n(0)(442)},3:function(e,t,n){e.exports=n(0)(476)},31:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function s(e){if(e instanceof Range||c(e)){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}return Object.assign({},H)}function l(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function u(){return window.innerHeight}function d(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function h(e){e.preventDefault&&e.preventDefault()}n.d(t,"d",function(){return C}),t.h=c,t.a=s,t.b=l,t.g=u,t.e=d,t.f=f,n.d(t,"l",function(){return T}),n.d(t,"j",function(){return k}),n.d(t,"k",function(){return L}),n.d(t,"c",function(){return z}),t.i=h;var p=n(3),v=(n.n(p),n(1)),m=(n.n(v),n(23)),g=(n.n(m),n(80)),b=(n.n(g),n(10)),y=(n.n(b),n(7)),w=(n.n(y),n(8)),x=(n.n(w),n(5)),E=(n.n(x),n(32)),S=(n.n(E),n(34)),A=(n.n(S),n(12)),C=(n.n(A),window.getComputedStyle.bind(window)),H={top:0,right:0,bottom:0,left:0,width:0,height:0},T=function(e){return function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).filter(function(e){return!!e}).forEach(function(n){return t[e](n)})}},k=T("add"),L=T("remove"),z=function(){function e(){i(this,e),a(this,"_all",new Set)}return r(e,[{key:"add",value:function(e,t,n,i){e.addEventListener(t,n,i);var o=function(){return e.removeEventListener(t,n,i)};return this._all.add(o),o}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(t){return e.remove(t)})}}]),e}()},32:function(e,t,n){e.exports=n(0)(468)},33:function(e,t,n){e.exports=n(0)(261)},34:function(e,t,n){e.exports=n(0)(427)},439:function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return!(!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()||e&&e!==function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},i.isLegacyOpera=function(){return!!window.opera}},440:function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},466:function(e,t,n){"use strict";function i(){function e(e,t){t||(t=e,e=0),e>r?r=e:e<a&&(a=e),i[e]||(i[e]=[]),i[e].push(t),o++}function t(){for(var e=a;e<=r;e++)for(var t=i[e],n=0;n<t.length;n++){var o=t[n];o()}}function n(){return o}var i={},o=0,r=0,a=0;return{add:e,process:t,size:n}}var o=n(467);e.exports=function(e){function t(e,t){!p&&d&&u&&0===h.size()&&a(),h.add(e,t)}function n(){for(p=!0;h.size();){var e=h;h=i(),e.process()}p=!1}function r(e){p||(void 0===e&&(e=u),f&&(c(f),f=null),e?a():n())}function a(){f=s(n)}function c(e){return clearTimeout(e)}function s(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var l=e.reporter,u=o.getOption(e,"async",!0),d=o.getOption(e,"auto",!0);d&&!u&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),u=!0);var f,h=i(),p=!1;return{add:t,force:r}}},467:function(e,t,n){"use strict";function i(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}(e.exports={}).getOption=i},469:function(e,t,n){"use strict";var i=n(439);e.exports=function(e){function t(e,t){function n(){t(e)}if(i.isIE(8))l(e).object={proxy:n},e.attachEvent("onresize",n);else{var o=r(e);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}}function n(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function o(e,t,o){o||(o=t,t=e,e=null),e=e||{},e.debug,i.isIE(8)?o(t):function(t,o){function r(){function n(){if("static"===d.position){t.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,o){var r=i[o];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(t.warn("An element that is positioned static has style."+o+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+o+" will be set to 0. Element: ",n),n.style.setProperty(o,"0",e.important?"important":""))};n(c,t,d,"top"),n(c,t,d,"right"),n(c,t,d,"bottom"),n(c,t,d,"left")}}function r(){function e(t,n){if(!t.contentDocument)return void setTimeout(function(){e(t,n)},100);n(t.contentDocument)}u||n(),e(this,function(e){o(t)})}""!==d.position&&(n(d),u=!0);var s=document.createElement("object");s.style.cssText=a,s.tabIndex=-1,s.type="text/html",s.onload=r,i.isIE()||(s.data="about:blank"),l(t)&&(t.appendChild(s),l(t).object=s,i.isIE()&&(s.data="about:blank"))}var a=n(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),u=!1,d=window.getComputedStyle(t),f=t.offsetWidth,h=t.offsetHeight;l(t).startSize={width:f,height:h},s?s.add(r):r()}(t,o)}function r(e){return l(e).object}function a(e){if(l(e)){var t=r(e);t&&(i.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),delete l(e).object)}}e=e||{};var c=e.reporter,s=e.batchProcessor,l=e.stateHandler.getState;if(!c)throw new Error("Missing required dependency: reporter.");return{makeDetectable:o,addListener:t,uninstall:a}}},47:function(e,t,n){e.exports=n(0)(258)},470:function(e,t,n){"use strict";var i=n(440).forEach;e.exports=function(e){function t(e){o(e,b,y)}function n(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function o(e,t,i){if(!e.getElementById(t)){var o=i+"_animation",r=i+"_animation_active",a="/* Created by the element-resize-detector library. */\n";a+="."+i+" > div::-webkit-scrollbar { "+n(["display: none"])+" }\n\n",a+="."+r+" { "+n(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+o,"animation-name: "+o])+" }\n",a+="@-webkit-keyframes "+o+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",a+="@keyframes "+o+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(n,i){i=i||function(t){e.head.appendChild(t)};var o=e.createElement("style");o.innerHTML=n,o.id=t,i(o)}(a)}}function r(e){e.className+=" "+y+"_animation_active"}function a(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return h.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function c(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return h.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function s(e){return v(e).container.childNodes[0].childNodes[0].childNodes[0]}function l(e){return v(e).container.childNodes[0].childNodes[0].childNodes[1]}function u(e,t){if(!v(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");v(e).listeners.push(t)}function d(e,t,o){function c(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(m.get(t),"Scroll: "),h.log.apply)h.log.apply(null,n);else for(var i=0;i<n.length;i++)h.log(n[i])}}function u(e){var t=v(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function d(){var e=window.getComputedStyle(t),n={};return n.position=e.position,n.width=t.offsetWidth,n.height=t.offsetHeight,n.top=e.top,n.right=e.right,n.bottom=e.bottom,n.left=e.left,n.widthCSS=e.width,n.heightCSS=e.height,n}function f(){var e=d();v(t).startSize={width:e.width,height:e.height},c("Element start size",v(t).startSize)}function b(){v(t).listeners=[]}function w(){if(c("storeStyle invoked."),!v(t))return void c("Aborting because element has been uninstalled");var e=d();v(t).style=e}function x(e,t,n){v(e).lastWidth=t,v(e).lastHeight=n}function E(e){return s(e).childNodes[0]}function S(){return 2*g.width+1}function A(){return 2*g.height+1}function C(e){return e+10+S()}function H(e){return e+10+A()}function T(e){return 2*e+S()}function k(e){return 2*e+A()}function L(e,t,n){var i=s(e),o=l(e),r=C(t),a=H(n),c=T(t),u=k(n);i.scrollLeft=r,i.scrollTop=a,o.scrollLeft=c,o.scrollTop=u}function z(){var e=v(t).container;if(!e){e=document.createElement("div"),e.className=y,e.style.cssText=n(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),v(t).container=e,r(e),t.appendChild(e);var i=function(){v(t).onRendered&&v(t).onRendered()};a(e,"animationstart",i),v(t).onAnimationStart=i}return e}function P(){function i(){v(t).onExpand&&v(t).onExpand()}function o(){v(t).onShrink&&v(t).onShrink()}if(c("Injecting elements"),!v(t))return void c("Aborting because element has been uninstalled");!function(){var n=v(t).style;if("static"===n.position){t.style.setProperty("position","relative",e.important?"important":"");var i=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};i(h,t,n,"top"),i(h,t,n,"right"),i(h,t,n,"bottom"),i(h,t,n,"left")}}();var r=v(t).container;r||(r=z());var s=g.width,l=g.height,u=n(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),d=n(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(function(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0",["left: "+e,"top: "+t,"right: "+i,"bottom: "+n]}(-(1+s),-(1+l),-l,-s))),f=n(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),p=n(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),m=n(["position: absolute","left: 0","top: 0"]),b=n(["position: absolute","width: 200%","height: 200%"]),w=document.createElement("div"),x=document.createElement("div"),E=document.createElement("div"),S=document.createElement("div"),A=document.createElement("div"),C=document.createElement("div");w.dir="ltr",w.style.cssText=u,w.className=y,x.className=y,x.style.cssText=d,E.style.cssText=f,S.style.cssText=m,A.style.cssText=p,C.style.cssText=b,E.appendChild(S),A.appendChild(C),x.appendChild(E),x.appendChild(A),w.appendChild(x),r.appendChild(w),a(E,"scroll",i),a(A,"scroll",o),v(t).onExpandScroll=i,v(t).onShrinkScroll=o}function N(){function n(t,n,i){var o=E(t),r=C(n),a=H(i);o.style.setProperty("width",r+"px",e.important?"important":""),o.style.setProperty("height",a+"px",e.important?"important":"")}function o(i){var o=t.offsetWidth,a=t.offsetHeight,s=o!==v(t).lastWidth||a!==v(t).lastHeight;c("Storing current size",o,a),x(t,o,a),p.add(0,function(){if(s){if(!v(t))return void c("Aborting because element has been uninstalled");if(!r())return void c("Aborting because element container has not been initialized");if(e.debug){var i=t.offsetWidth,l=t.offsetHeight;i===o&&l===a||h.warn(m.get(t),"Scroll: Size changed before updating detector elements.")}n(t,o,a)}}),p.add(1,function(){return v(t)?r()?void L(t,o,a):void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")}),s&&i&&p.add(2,function(){return v(t)?r()?void i():void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")})}function r(){return!!v(t).container}function a(){c("notifyListenersIfNeeded invoked");var e=v(t);return function(){return void 0===v(t).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?c("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?c("Not notifying: Size already notified"):(c("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(v(t).listeners,function(e){e(t)}))}function d(){if(c("startanimation triggered."),u(t))return void c("Ignoring since element is still unrendered...");c("Element rendered.");var e=s(t),n=l(t);0!==e.scrollLeft&&0!==e.scrollTop&&0!==n.scrollLeft&&0!==n.scrollTop||(c("Scrollbars out of sync. Updating detector elements..."),o(a))}function f(){if(c("Scroll detected."),u(t))return void c("Scroll event fired while unrendered. Ignoring...");o(a)}if(c("registerListenersAndPositionElements invoked."),!v(t))return void c("Aborting because element has been uninstalled");v(t).onRendered=d,v(t).onExpand=f,v(t).onShrink=f;var g=v(t).style;n(t,g.width,g.height)}function D(){if(c("finalizeDomMutation invoked."),!v(t))return void c("Aborting because element has been uninstalled");var e=v(t).style;x(t,e.width,e.height),L(t,e.width,e.height)}function I(){o(t)}function O(){c("Installing..."),b(),f(),p.add(0,w),p.add(1,P),p.add(2,N),p.add(3,D),p.add(4,I)}o||(o=t,t=e,e=null),e=e||{},c("Making detectable..."),function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(t)?(c("Element is detached"),z(),c("Waiting until element is attached..."),v(t).onRendered=function(){c("Element is now attached"),O()}):O()}function f(e){var t=v(e);t&&(t.onExpandScroll&&c(s(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&c(l(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&c(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var h=e.reporter,p=e.batchProcessor,v=e.stateHandler.getState,m=(e.stateHandler.hasState,e.idHandler);if(!p)throw new Error("Missing required dependency: batchProcessor");if(!h)throw new Error("Missing required dependency: reporter.");var g=function(){var e=document.createElement("div");e.style.cssText=n(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var t=document.createElement("div");t.style.cssText=n(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var i=500-t.clientWidth,o=500-t.clientHeight;return document.body.removeChild(t),{width:i,height:o}}(),b="erd_scroll_detection_scrollbar_style",y="erd_scroll_detection_container";return t(window.document),{makeDetectable:d,addListener:u,uninstall:f,initDocument:t}}},471:function(e,t,n){"use strict";function i(e){return Array.isArray(e)||void 0!==e.length}function o(e){if(Array.isArray(e))return e;var t=[];return c(e,function(e){t.push(e)}),t}function r(e){return e&&1===e.nodeType}function a(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}var c=n(440).forEach,s=n(472),l=n(475),u=n(473),d=n(474),f=n(476),h=n(439),p=n(466),v=n(477),m=n(469),g=n(470);e.exports=function(e){function t(e,t,n){function s(e){var t=H.get(e);c(t,function(t){t(e)})}function l(e,t,n){H.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(r(t))t=[t];else{if(!i(t))return E.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=o(t)}var u=0,d=a(e,"callOnAdd",A.callOnAdd),f=a(e,"onReady",function(){}),h=a(e,"debug",A.debug);c(t,function(e){v.getState(e)||(v.initState(e),y.set(e));var i=y.get(e);if(h&&E.log("Attaching listener to element",i,e),!T.isDetectable(e))return h&&E.log(i,"Not detectable."),T.isBusy(e)?(h&&E.log(i,"System busy making it detectable"),l(d,e,n),P[i]=P[i]||[],void P[i].push(function(){++u===t.length&&f()})):(h&&E.log(i,"Making detectable..."),T.markBusy(e,!0),C.makeDetectable({debug:h,important:L},e,function(e){if(h&&E.log(i,"onElementDetectable"),v.getState(e)){T.markAsDetectable(e),T.markBusy(e,!1),C.addListener(e,s),l(d,e,n);var o=v.getState(e);if(o&&o.startSize){var r=e.offsetWidth,a=e.offsetHeight;o.startSize.width===r&&o.startSize.height===a||s(e)}P[i]&&c(P[i],function(e){e()})}else h&&E.log(i,"Element uninstalled before being detectable.");delete P[i],++u===t.length&&f()}));h&&E.log(i,"Already detecable, adding listener."),l(d,e,n),u++}),u===t.length&&f()}function n(e){if(!e)return E.error("At least one element is required.");if(r(e))e=[e];else{if(!i(e))return E.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=o(e)}c(e,function(e){H.removeAllListeners(e),C.uninstall(e),v.cleanState(e)})}function b(e){C.initDocument&&C.initDocument(e)}e=e||{};var y;if(e.idHandler)y={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var w=u(),x=d({idGenerator:w,stateHandler:v});y=x}var E=e.reporter;E||(E=f(!1===E));var S=a(e,"batchProcessor",p({reporter:E})),A={};A.callOnAdd=!!a(e,"callOnAdd",!0),A.debug=!!a(e,"debug",!1);var C,H=l(y),T=s({stateHandler:v}),k=a(e,"strategy","object"),L=a(e,"important",!1),z={reporter:E,batchProcessor:S,stateHandler:v,idHandler:y,important:L};if("scroll"===k&&(h.isLegacyOpera()?(E.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),k="object"):h.isIE(9)&&(E.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),k="object")),"scroll"===k)C=g(z);else{if("object"!==k)throw new Error("Invalid strategy name: "+k);C=m(z)}var P={};return{listenTo:t,removeListener:H.removeListener,removeAllListeners:H.removeAllListeners,uninstall:n,initDocument:b}}},472:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=r(e);return t&&!!t.isDetectable}function n(e){r(e).isDetectable=!0}function i(e){return!!r(e).busy}function o(e,t){r(e).busy=!!t}var r=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:i,markBusy:o}}},473:function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},474:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=o(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=i.generate();return t.id=n,n}var i=e.idGenerator,o=e.stateHandler.getState;return{get:t,set:n}}},475:function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:r[n]||[]}function n(t,n){var i=e.get(t);r[i]||(r[i]=[]),r[i].push(n)}function i(e,n){for(var i=t(e),o=0,r=i.length;o<r;++o)if(i[o]===n){i.splice(o,1);break}}function o(e){var n=t(e);n&&(n.length=0)}var r={};return{get:t,add:n,removeListener:i,removeAllListeners:o}}},476:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},477:function(e,t,n){"use strict";function i(e){return e[a]={},o(e)}function o(e){return e[a]}function r(e){delete e[a]}var a="_erd";e.exports={initState:i,getState:o,cleanState:r}},5:function(e,t,n){e.exports=n(0)(406)},512:function(e,t){function n(e,t,n){var i;return function(){if(!t)return e.apply(this,arguments);var o=this,r=arguments,a=n&&!i;return clearTimeout(i),i=setTimeout(function(){if(i=null,!a)return e.apply(o,r)},t),a?e.apply(this,arguments):void 0}}e.exports=n},576:function(e,t,n){"use strict";var i=n(18),o=(n.n(i),n(82)),r=(n.n(o),n(5)),a=(n.n(r),n(34)),c=(n.n(a),n(47)),s=n.n(c),l=n(33),u=(n.n(l),n(512)),d=n.n(u),f=n(471),h=n.n(f),p=n(31),v=h()(),m=s.a.module("Ring.place-under",[]);m.directive("rgPlaceUnder",["$window","getClosestElementWithCommonParent","rgPlaceUnderHelper",function(e,t,n){return{restrict:"A",link:function(e,i,o){function r(n){n&&e.$evalAsync(function(){var e=t(a,n);if(!e)throw new Error("rgPlaceUnder cannot find element to sync with.");c.syncPositionWith(e)})}var a=i[0],c=n.createPositionSynchronizer(a,o,e);o.$observe("rgPlaceUnder",r)}}}]),m.factory("getClosestElementWithCommonParent",function(){return function e(t,n){var i=t.parentNode;return i?i.query(n)||e(i,n):null}}),m.factory("rgPlaceUnderHelper",["$window",function(e){var t=10,i=50,o=50;return{DEBOUNCE_INTERVAL:t,AFTER_SCROLL_RECHECK_INTERVAL:i,HEIGHT_CHECK_INTERVAL:o,createPositionSynchronizer:function(r,a,c){function s(t){return new Promise(function(n){function i(){0===t.offsetHeight?e.setTimeout(i,o):n()}i()})}function l(t){var i=n.i(p.e)(),o=e.document.documentElement&&e.document.documentElement.offsetHeight||e.document.body.offsetHeight,a=t.offsetHeight,c=t.getBoundingClientRect().top+i,s=c+a,l=Math.max(s-i,a);if(r.style.marginTop="".concat(l+h,"px"),m){var u=0;if(g.length)for(var d=0;d<g.length;d++){var f=g[d].split(";"),v=e.document.querySelector(f[0]),b=f[1]?parseInt(f[1],10):0;if(v){var y=v.getBoundingClientRect();if(0===y.top)continue;var w=parseInt(e.getComputedStyle(v).getPropertyValue("margin-top"),10);(u=o-y.top+w+b)<0&&(u=0);break}}r.style.height="calc(100% - ".concat(parseInt(r.style.marginTop,10)+u,"px)")}}function u(){b.map(function(e){return e()}),b=[]}function f(n){var o=this;u();var r=d()(function(){return o.onScroll(n)},i),s=d()(function(){o.onScroll(n),r()},t);this.waitForNonZeroHeight(n).then(s),e.addEventListener("scroll",s),b.push(function(){e.removeEventListener("scroll",s)}),b.push(c.$watch("show",s)),b.push(c.$on("rgPlaceUnder:sync",s));var l=a.listenToHeightChange?e.document.querySelector(a.listenToHeightChange):e.document.body;v.listenTo(l,s),b.push(function(){return v.removeAllListeners(l)})}var h=parseInt(a.placeTopOffset,10)||0,m=a.syncHeight,g=[],b=[];return a.syncBottom&&(g=a.syncBottom.split(",")),c.$on("$destroy",u),{waitForNonZeroHeight:s,onScroll:l,syncPositionWith:f}}}}]),t.a=m.name},7:function(e,t,n){e.exports=n(0)(477)},8:function(e,t,n){e.exports=n(0)(90)},80:function(e,t,n){e.exports=n(0)(429)},82:function(e,t,n){e.exports=n(0)(125)}});