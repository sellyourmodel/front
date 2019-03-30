!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function i(e){var t=e.length,i=re.type(e);return"function"!==i&&!re.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e))}function n(e,t,i){if(re.isFunction(t))return re.grep(e,function(e,n){return!!t.call(e,n,e)!==i});if(t.nodeType)return re.grep(e,function(e){return e===t!==i});if("string"==typeof t){if(fe.test(t))return re.filter(t,e,i);t=re.filter(t,e)}return re.grep(e,function(e){return re.inArray(e,t)>=0!==i})}function o(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function r(e){var t=we[e]={};return re.each(e.match(be)||[],function(e,i){t[i]=!0}),t}function s(){ge.addEventListener?(ge.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1)):(ge.detachEvent("onreadystatechange",a),e.detachEvent("onload",a))}function a(){(ge.addEventListener||"load"===event.type||"complete"===ge.readyState)&&(s(),re.ready())}function l(e,t,i){if(void 0===i&&1===e.nodeType){var n="data-"+t.replace(Se,"-$1").toLowerCase();if("string"==typeof(i=e.getAttribute(n))){try{i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:Ce.test(i)?re.parseJSON(i):i)}catch(e){}re.data(e,t,i)}else i=void 0}return i}function c(e){var t;for(t in e)if(("data"!==t||!re.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function d(e,t,i,n){if(re.acceptData(e)){var o,r,s=re.expando,a=e.nodeType,l=a?re.cache:e,c=a?e[s]:e[s]&&s;if(c&&l[c]&&(n||l[c].data)||void 0!==i||"string"!=typeof t)return c||(c=a?e[s]=V.pop()||re.guid++:s),l[c]||(l[c]=a?{}:{toJSON:re.noop}),("object"==typeof t||"function"==typeof t)&&(n?l[c]=re.extend(l[c],t):l[c].data=re.extend(l[c].data,t)),r=l[c],n||(r.data||(r.data={}),r=r.data),void 0!==i&&(r[re.camelCase(t)]=i),"string"==typeof t?null==(o=r[t])&&(o=r[re.camelCase(t)]):o=r,o}}function u(e,t,i){if(re.acceptData(e)){var n,o,r=e.nodeType,s=r?re.cache:e,a=r?e[re.expando]:re.expando;if(s[a]){if(t&&(n=i?s[a]:s[a].data)){re.isArray(t)?t=t.concat(re.map(t,re.camelCase)):t in n?t=[t]:(t=re.camelCase(t),t=t in n?[t]:t.split(" ")),o=t.length;for(;o--;)delete n[t[o]];if(i?!c(n):!re.isEmptyObject(n))return}(i||(delete s[a].data,c(s[a])))&&(r?re.cleanData([e],!0):ne.deleteExpando||s!=s.window?delete s[a]:s[a]=null)}}}function p(){return!0}function f(){return!1}function h(){try{return ge.activeElement}catch(e){}}function g(e){var t=Pe.split("|"),i=e.createDocumentFragment();if(i.createElement)for(;t.length;)i.createElement(t.pop());return i}function v(e,t){var i,n,o=0,r=typeof e.getElementsByTagName!==Te?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==Te?e.querySelectorAll(t||"*"):void 0;if(!r)for(r=[],i=e.childNodes||e;null!=(n=i[o]);o++)!t||re.nodeName(n,t)?r.push(n):re.merge(r,v(n,t));return void 0===t||t&&re.nodeName(e,t)?re.merge([e],r):r}function m(e){Ne.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t){return re.nodeName(e,"table")&&re.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==re.find.attr(e,"type"))+"/"+e.type,e}function w(e){var t=Qe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function x(e,t){for(var i,n=0;null!=(i=e[n]);n++)re._data(i,"globalEval",!t||re._data(t[n],"globalEval"))}function k(e,t){if(1===t.nodeType&&re.hasData(e)){var i,n,o,r=re._data(e),s=re._data(t,r),a=r.events;if(a){delete s.handle,s.events={};for(i in a)for(n=0,o=a[i].length;o>n;n++)re.event.add(t,i,a[i][n])}s.data&&(s.data=re.extend({},s.data))}}function T(e,t){var i,n,o;if(1===t.nodeType){if(i=t.nodeName.toLowerCase(),!ne.noCloneEvent&&t[re.expando]){o=re._data(t);for(n in o.events)re.removeEvent(t,n,o.handle);t.removeAttribute(re.expando)}"script"===i&&t.text!==e.text?(b(t).text=e.text,w(t)):"object"===i?(t.parentNode&&(t.outerHTML=e.outerHTML),ne.html5Clone&&e.innerHTML&&!re.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===i&&Ne.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===i?t.defaultSelected=t.selected=e.defaultSelected:("input"===i||"textarea"===i)&&(t.defaultValue=e.defaultValue)}}function C(t,i){var n=re(i.createElement(t)).appendTo(i.body),o=e.getDefaultComputedStyle?e.getDefaultComputedStyle(n[0]).display:re.css(n[0],"display");return n.detach(),o}function S(e){var t=ge,i=Ze[e];return i||(i=C(e,t),"none"!==i&&i||(Ge=(Ge||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ge[0].contentWindow||Ge[0].contentDocument).document,t.write(),t.close(),i=C(e,t),Ge.detach()),Ze[e]=i),i}function $(e,t){return{get:function(){var i=e();if(null!=i)return i?void delete this.get:(this.get=t).apply(this,arguments)}}}function j(e,t){if(t in e)return t;for(var i=t.charAt(0).toUpperCase()+t.slice(1),n=t,o=pt.length;o--;)if((t=pt[o]+i)in e)return t;return n}function E(e,t){for(var i,n,o,r=[],s=0,a=e.length;a>s;s++)n=e[s],n.style&&(r[s]=re._data(n,"olddisplay"),i=n.style.display,t?(r[s]||"none"!==i||(n.style.display=""),""===n.style.display&&Ee(n)&&(r[s]=re._data(n,"olddisplay",S(n.nodeName)))):r[s]||(o=Ee(n),(i&&"none"!==i||!o)&&re._data(n,"olddisplay",o?i:re.css(n,"display"))));for(s=0;a>s;s++)n=e[s],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[s]||"":"none"));return e}function A(e,t,i){var n=lt.exec(t);return n?Math.max(0,n[1]-(i||0))+(n[2]||"px"):t}function N(e,t,i,n,o){for(var r=i===(n?"border":"content")?4:"width"===t?1:0,s=0;4>r;r+=2)"margin"===i&&(s+=re.css(e,i+je[r],!0,o)),n?("content"===i&&(s-=re.css(e,"padding"+je[r],!0,o)),"margin"!==i&&(s-=re.css(e,"border"+je[r]+"Width",!0,o))):(s+=re.css(e,"padding"+je[r],!0,o),"padding"!==i&&(s+=re.css(e,"border"+je[r]+"Width",!0,o)));return s}function H(e,t,i){var n=!0,o="width"===t?e.offsetWidth:e.offsetHeight,r=et(e),s=ne.boxSizing()&&"border-box"===re.css(e,"boxSizing",!1,r);if(0>=o||null==o){if(o=tt(e,t,r),(0>o||null==o)&&(o=e.style[t]),nt.test(o))return o;n=s&&(ne.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+N(e,t,i||(s?"border":"content"),n,r)+"px"}function L(e,t,i,n,o){return new L.prototype.init(e,t,i,n,o)}function D(){return setTimeout(function(){ft=void 0}),ft=re.now()}function O(e,t){var i,n={height:e},o=0;for(t=t?1:0;4>o;o+=2-t)i=je[o],n["margin"+i]=n["padding"+i]=e;return t&&(n.opacity=n.width=e),n}function _(e,t,i){for(var n,o=(bt[t]||[]).concat(bt["*"]),r=0,s=o.length;s>r;r++)if(n=o[r].call(i,t,e))return n}function P(e,t,i){var n,o,r,s,a,l,c,d,u=this,p={},f=e.style,h=e.nodeType&&Ee(e),g=re._data(e,"fxshow");i.queue||(a=re._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,re.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],c=re.css(e,"display"),d=S(e.nodeName),"none"===c&&(c=d),"inline"===c&&"none"===re.css(e,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==d?f.zoom=1:f.display="inline-block")),i.overflow&&(f.overflow="hidden",ne.shrinkWrapBlocks()||u.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]}));for(n in t)if(o=t[n],gt.exec(o)){if(delete t[n],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!g||void 0===g[n])continue;h=!0}p[n]=g&&g[n]||re.style(e,n)}if(!re.isEmptyObject(p)){g?"hidden"in g&&(h=g.hidden):g=re._data(e,"fxshow",{}),r&&(g.hidden=!h),h?re(e).show():u.done(function(){re(e).hide()}),u.done(function(){var t;re._removeData(e,"fxshow");for(t in p)re.style(e,t,p[t])});for(n in p)s=_(h?g[n]:0,n,u),n in g||(g[n]=s.start,h&&(s.end=s.start,s.start="width"===n||"height"===n?1:0))}}function M(e,t){var i,n,o,r,s;for(i in e)if(n=re.camelCase(i),o=t[n],r=e[i],re.isArray(r)&&(o=r[1],r=e[i]=r[0]),i!==n&&(e[n]=r,delete e[i]),(s=re.cssHooks[n])&&"expand"in s){r=s.expand(r),delete e[n];for(i in r)i in e||(e[i]=r[i],t[i]=o)}else t[n]=o}function q(e,t,i){var n,o,r=0,s=yt.length,a=re.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ft||D(),i=Math.max(0,c.startTime+c.duration-t),n=i/c.duration||0,r=1-n,s=0,l=c.tweens.length;l>s;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,i]),1>r&&l?i:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{}},i),originalProperties:t,originalOptions:i,startTime:ft||D(),duration:i.duration,tweens:[],createTween:function(t,i){var n=re.Tween(e,c.opts,t,i,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(n),n},stop:function(t){var i=0,n=t?c.tweens.length:0;if(o)return this;for(o=!0;n>i;i++)c.tweens[i].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),d=c.props;for(M(d,c.opts.specialEasing);s>r;r++)if(n=yt[r].call(c,e,d,c.opts))return n;return re.map(d,_,c),re.isFunction(c.opts.start)&&c.opts.start.call(e,c),re.fx.timer(re.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function W(e){return function(t,i){"string"!=typeof t&&(i=t,t="*");var n,o=0,r=t.toLowerCase().match(be)||[];if(re.isFunction(i))for(;n=r[o++];)"+"===n.charAt(0)?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(i)):(e[n]=e[n]||[]).push(i)}}function z(e,t,i,n){function o(a){var l;return r[a]=!0,re.each(e[a]||[],function(e,a){var c=a(t,i,n);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=e===Rt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function I(e,t){var i,n,o=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function F(e,t,i){for(var n,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o)for(s in a)if(a[s]&&a[s].test(o)){l.unshift(s);break}if(l[0]in i)r=l[0];else{for(s in i){if(!l[0]||e.converters[s+" "+l[0]]){r=s;break}n||(n=s)}r=r||n}return r?(r!==l[0]&&l.unshift(r),i[r]):void 0}function R(e,t,i,n){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(i[e.responseFields[r]]=t),!l&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if(a=o.split(" "),a[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],d.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function B(e,t,i,n){var o;if(re.isArray(t))re.each(t,function(t,o){i||Ut.test(e)?n(e,o):B(e+"["+("object"==typeof o?t:"")+"]",o,i,n)});else if(i||"object"!==re.type(t))n(e,t);else for(o in t)B(e+"["+o+"]",t[o],i,n)}function X(){try{return new e.XMLHttpRequest}catch(e){}}function U(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function Q(e){return re.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var V=[],Y=V.slice,K=V.concat,J=V.push,G=V.indexOf,Z={},ee=Z.toString,te=Z.hasOwnProperty,ie="".trim,ne={},oe="1.11.0",re=function(e,t){return new re.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,le=/-([\da-z])/gi,ce=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:oe,constructor:re,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return re.each(this,e,t)},map:function(e){return this.pushStack(re.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,i=+e+(0>e?t:0);return this.pushStack(i>=0&&t>i?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:J,sort:V.sort,splice:V.splice},re.extend=re.fn.extend=function(){var e,t,i,n,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||re.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(o=arguments[a]))for(n in o)e=s[n],i=o[n],s!==i&&(c&&i&&(re.isPlainObject(i)||(t=re.isArray(i)))?(t?(t=!1,r=e&&re.isArray(e)?e:[]):r=e&&re.isPlainObject(e)?e:{},s[n]=re.extend(c,r,i)):void 0!==i&&(s[n]=i));return s},re.extend({expando:"jQuery"+(oe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray||function(e){return"array"===re.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==re.type(e)||e.nodeType||re.isWindow(e))return!1;try{if(e.constructor&&!te.call(e,"constructor")&&!te.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(ne.ownLast)for(t in e)return te.call(e,t);for(t in e);return void 0===t||te.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Z[ee.call(e)]||"object":typeof e},globalEval:function(t){t&&re.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ae,"ms-").replace(le,ce)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var o=0,r=e.length,s=i(e);if(n){if(s)for(;r>o&&!1!==t.apply(e[o],n);o++);else for(o in e)if(!1===t.apply(e[o],n))break}else if(s)for(;r>o&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},trim:ie&&!ie.call("\ufeff ")?function(e){return null==e?"":ie.call(e)}:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?re.merge(n,"string"==typeof e?[e]:e):J.call(n,e)),n},inArray:function(e,t,i){var n;if(t){if(G)return G.call(t,e,i);for(n=t.length,i=i?0>i?Math.max(0,n+i):i:0;n>i;i++)if(i in t&&t[i]===e)return i}return-1},merge:function(e,t){for(var i=+t.length,n=0,o=e.length;i>n;)e[o++]=t[n++];if(i!==i)for(;void 0!==t[n];)e[o++]=t[n++];return e.length=o,e},grep:function(e,t,i){for(var n=[],o=0,r=e.length,s=!i;r>o;o++)!t(e[o],o)!==s&&n.push(e[o]);return n},map:function(e,t,n){var o,r=0,s=e.length,a=i(e),l=[];if(a)for(;s>r;r++)null!=(o=t(e[r],r,n))&&l.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&l.push(o);return K.apply([],l)},guid:1,proxy:function(e,t){var i,n,o;return"string"==typeof t&&(o=e[t],t=e,e=o),re.isFunction(e)?(i=Y.call(arguments,2),n=function(){return e.apply(t||this,i.concat(Y.call(arguments)))},n.guid=e.guid=e.guid||re.guid++,n):void 0},now:function(){return+new Date},support:ne}),re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var de=function(e){function t(e,t,i,n){var o,r,s,a,l,c,u,h,g,v;if((t?t.ownerDocument||t:z)!==L&&H(t),t=t||L,i=i||[],!e||"string"!=typeof e)return i;if(1!==(a=t.nodeType)&&9!==a)return[];if(O&&!n){if(o=ye.exec(e))if(s=o[1]){if(9===a){if(!(r=t.getElementById(s))||!r.parentNode)return i;if(r.id===s)return i.push(r),i}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(s))&&q(t,r)&&r.id===s)return i.push(r),i}else{if(o[2])return Z.apply(i,t.getElementsByTagName(e)),i;if((s=o[3])&&T.getElementsByClassName&&t.getElementsByClassName)return Z.apply(i,t.getElementsByClassName(s)),i}if(T.qsa&&(!_||!_.test(e))){if(h=u=W,g=t,v=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=p(e),(u=t.getAttribute("id"))?h=u.replace(we,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=c.length;l--;)c[l]=h+f(c[l]);g=be.test(e)&&d(t.parentNode)||t,v=c.join(",")}if(v)try{return Z.apply(i,g.querySelectorAll(v)),i}catch(e){}finally{u||t.removeAttribute("id")}}}return x(e.replace(le,"$1"),t,i,n)}function i(){function e(i,n){return t.push(i+" ")>C.cacheLength&&delete e[t.shift()],e[i+" "]=n}var t=[];return e}function n(e){return e[W]=!0,e}function o(e){var t=L.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var i=e.split("|"),n=e.length;n--;)C.attrHandle[i[n]]=t}function s(e,t){var i=t&&e,n=i&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(n)return n;if(i)for(;i=i.nextSibling;)if(i===t)return-1;return e?1:-1}function a(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function l(e){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===e}}function c(e){return n(function(t){return t=+t,n(function(i,n){for(var o,r=e([],i.length,t),s=r.length;s--;)i[o=r[s]]&&(i[o]=!(n[o]=i[o]))})})}function d(e){return e&&typeof e.getElementsByTagName!==Q&&e}function u(){}function p(e,i){var n,o,r,s,a,l,c,d=B[e+" "];if(d)return i?0:d.slice(0);for(a=e,l=[],c=C.preFilter;a;){(!n||(o=ce.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),n=!1,(o=de.exec(a))&&(n=o.shift(),r.push({value:n,type:o[0].replace(le," ")}),a=a.slice(n.length));for(s in C.filter)!(o=he[s].exec(a))||c[s]&&!(o=c[s](o))||(n=o.shift(),r.push({value:n,type:s,matches:o}),a=a.slice(n.length));if(!n)break}return i?a.length:a?t.error(e):B(e,l).slice(0)}function f(e){for(var t=0,i=e.length,n="";i>t;t++)n+=e[t].value;return n}function h(e,t,i){var n=t.dir,o=i&&"parentNode"===n,r=F++;return t.first?function(t,i,r){for(;t=t[n];)if(1===t.nodeType||o)return e(t,i,r)}:function(t,i,s){var a,l,c=[I,r];if(s){for(;t=t[n];)if((1===t.nodeType||o)&&e(t,i,s))return!0}else for(;t=t[n];)if(1===t.nodeType||o){if(l=t[W]||(t[W]={}),(a=l[n])&&a[0]===I&&a[1]===r)return c[2]=a[2];if(l[n]=c,c[2]=e(t,i,s))return!0}}}function g(e){return e.length>1?function(t,i,n){for(var o=e.length;o--;)if(!e[o](t,i,n))return!1;return!0}:e[0]}function v(e,t,i,n,o){for(var r,s=[],a=0,l=e.length,c=null!=t;l>a;a++)(r=e[a])&&(!i||i(r,n,o))&&(s.push(r),c&&t.push(a));return s}function m(e,t,i,o,r,s){return o&&!o[W]&&(o=m(o)),r&&!r[W]&&(r=m(r,s)),n(function(n,s,a,l){var c,d,u,p=[],f=[],h=s.length,g=n||w(t||"*",a.nodeType?[a]:a,[]),m=!e||!n&&t?g:v(g,p,e,a,l),y=i?r||(n?e:h||o)?[]:s:m;if(i&&i(m,y,a,l),o)for(c=v(y,f),o(c,[],a,l),d=c.length;d--;)(u=c[d])&&(y[f[d]]=!(m[f[d]]=u));if(n){if(r||e){if(r){for(c=[],d=y.length;d--;)(u=y[d])&&c.push(m[d]=u);r(null,y=[],c,l)}for(d=y.length;d--;)(u=y[d])&&(c=r?te.call(n,u):p[d])>-1&&(n[c]=!(s[c]=u))}}else y=v(y===s?y.splice(h,y.length):y),r?r(null,s,y,l):Z.apply(s,y)})}function y(e){for(var t,i,n,o=e.length,r=C.relative[e[0].type],s=r||C.relative[" "],a=r?1:0,l=h(function(e){return e===t},s,!0),c=h(function(e){return te.call(t,e)>-1},s,!0),d=[function(e,i,n){return!r&&(n||i!==E)||((t=i).nodeType?l(e,i,n):c(e,i,n))}];o>a;a++)if(i=C.relative[e[a].type])d=[h(g(d),i)];else{if(i=C.filter[e[a].type].apply(null,e[a].matches),i[W]){for(n=++a;o>n&&!C.relative[e[n].type];n++);return m(a>1&&g(d),a>1&&f(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(le,"$1"),i,n>a&&y(e.slice(a,n)),o>n&&y(e=e.slice(n)),o>n&&f(e))}d.push(i)}return g(d)}function b(e,i){var o=i.length>0,r=e.length>0,s=function(n,s,a,l,c){var d,u,p,f=0,h="0",g=n&&[],m=[],y=E,b=n||r&&C.find.TAG("*",c),w=I+=null==y?1:Math.random()||.1,x=b.length;for(c&&(E=s!==L&&s);h!==x&&null!=(d=b[h]);h++){if(r&&d){for(u=0;p=e[u++];)if(p(d,s,a)){l.push(d);break}c&&(I=w)}o&&((d=!p&&d)&&f--,n&&g.push(d))}if(f+=h,o&&h!==f){for(u=0;p=i[u++];)p(g,m,s,a);if(n){if(f>0)for(;h--;)g[h]||m[h]||(m[h]=J.call(l));m=v(m)}Z.apply(l,m),c&&!n&&m.length>0&&f+i.length>1&&t.uniqueSort(l)}return c&&(I=w,E=y),g};return o?n(s):s}function w(e,i,n){for(var o=0,r=i.length;r>o;o++)t(e,i[o],n);return n}function x(e,t,i,n){var o,r,s,a,l,c=p(e);if(!n&&1===c.length){if(r=c[0]=c[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&T.getById&&9===t.nodeType&&O&&C.relative[r[1].type]){if(!(t=(C.find.ID(s.matches[0].replace(xe,ke),t)||[])[0]))return i;e=e.slice(r.shift().value.length)}for(o=he.needsContext.test(e)?0:r.length;o--&&(s=r[o],!C.relative[a=s.type]);)if((l=C.find[a])&&(n=l(s.matches[0].replace(xe,ke),be.test(r[0].type)&&d(t.parentNode)||t))){if(r.splice(o,1),!(e=n.length&&f(r)))return Z.apply(i,n),i;break}}return j(e,c)(n,t,!O,i,be.test(e)&&d(t.parentNode)||t),i}var k,T,C,S,$,j,E,A,N,H,L,D,O,_,P,M,q,W="sizzle"+-new Date,z=e.document,I=0,F=0,R=i(),B=i(),X=i(),U=function(e,t){return e===t&&(N=!0),0},Q="undefined",V=1<<31,Y={}.hasOwnProperty,K=[],J=K.pop,G=K.push,Z=K.push,ee=K.slice,te=K.indexOf||function(e){for(var t=0,i=this.length;i>t;t++)if(this[t]===e)return t;return-1},ie="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",oe="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=oe.replace("w","w#"),se="\\["+ne+"*("+oe+")"+ne+"*(?:([*^$|!~]?=)"+ne+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+re+")|)|)"+ne+"*\\]",ae=":("+oe+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+se.replace(3,8)+")*)|.*)\\)|)",le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),de=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ue=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(ae),fe=new RegExp("^"+re+"$"),he={ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),TAG:new RegExp("^("+oe.replace("w","w*")+")"),ATTR:new RegExp("^"+se),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+ie+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),ke=function(e,t,i){var n="0x"+t-65536;return n!==n||i?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)};try{Z.apply(K=ee.call(z.childNodes),z.childNodes),K[z.childNodes.length].nodeType}catch(e){Z={apply:K.length?function(e,t){G.apply(e,ee.call(t))}:function(e,t){for(var i=e.length,n=0;e[i++]=t[n++];);e.length=i-1}}}T=t.support={},$=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},H=t.setDocument=function(e){var t,i=e?e.ownerDocument||e:z,n=i.defaultView;return i!==L&&9===i.nodeType&&i.documentElement?(L=i,D=i.documentElement,O=!$(i),n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",function(){H()},!1):n.attachEvent&&n.attachEvent("onunload",function(){H()})),T.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=o(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=me.test(i.getElementsByClassName)&&o(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),T.getById=o(function(e){return D.appendChild(e).id=W,!i.getElementsByName||!i.getElementsByName(W).length}),T.getById?(C.find.ID=function(e,t){if(typeof t.getElementById!==Q&&O){var i=t.getElementById(e);return i&&i.parentNode?[i]:[]}},C.filter.ID=function(e){var t=e.replace(xe,ke);return function(e){return e.getAttribute("id")===t}}):(delete C.find.ID,C.filter.ID=function(e){var t=e.replace(xe,ke);return function(e){var i=typeof e.getAttributeNode!==Q&&e.getAttributeNode("id");return i&&i.value===t}}),C.find.TAG=T.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==Q?t.getElementsByTagName(e):void 0}:function(e,t){var i,n=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;i=r[o++];)1===i.nodeType&&n.push(i);return n}return r},C.find.CLASS=T.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==Q&&O?t.getElementsByClassName(e):void 0},P=[],_=[],(T.qsa=me.test(i.querySelectorAll))&&(o(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&_.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||_.push("\\["+ne+"*(?:value|"+ie+")"),e.querySelectorAll(":checked").length||_.push(":checked")}),o(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&_.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||_.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),_.push(",.*:")})),(T.matchesSelector=me.test(M=D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(e){T.disconnectedMatch=M.call(e,"div"),M.call(e,"[s!='']:x"),P.push("!=",ae)}),_=_.length&&new RegExp(_.join("|")),P=P.length&&new RegExp(P.join("|")),t=me.test(D.compareDocumentPosition),q=t||me.test(D.contains)?function(e,t){var i=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return N=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===z&&q(z,e)?-1:t===i||t.ownerDocument===z&&q(z,t)?1:A?te.call(A,e)-te.call(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return N=!0,0;var n,o=0,r=e.parentNode,a=t.parentNode,l=[e],c=[t];if(!r||!a)return e===i?-1:t===i?1:r?-1:a?1:A?te.call(A,e)-te.call(A,t):0;if(r===a)return s(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;l[o]===c[o];)o++;return o?s(l[o],c[o]):l[o]===z?-1:c[o]===z?1:0},i):L},t.matches=function(e,i){return t(e,null,null,i)},t.matchesSelector=function(e,i){if((e.ownerDocument||e)!==L&&H(e),i=i.replace(ue,"='$1']"),!(!T.matchesSelector||!O||P&&P.test(i)||_&&_.test(i)))try{var n=M.call(e,i);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return t(i,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&H(e),q(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&H(e);var i=C.attrHandle[t.toLowerCase()],n=i&&Y.call(C.attrHandle,t.toLowerCase())?i(e,t,!O):void 0;return void 0!==n?n:T.attributes||!O?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,i=[],n=0,o=0;if(N=!T.detectDuplicates,A=!T.sortStable&&e.slice(0),e.sort(U),N){for(;t=e[o++];)t===e[o]&&(n=i.push(o));for(;n--;)e.splice(i[n],1)}return A=null,e},S=t.getText=function(e){var t,i="",n=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=S(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[n++];)i+=S(t);return i},C=t.selectors={cacheLength:50,createPseudo:n,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,ke),e[3]=(e[4]||e[5]||"").replace(xe,ke),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,i=!e[5]&&e[2];return he.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:i&&pe.test(i)&&(t=p(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,ke).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=R[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&R(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Q&&e.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(o){var r=t.attr(o,e);return null==r?"!="===i:!i||(r+="","="===i?r===n:"!="===i?r!==n:"^="===i?n&&0===r.indexOf(n):"*="===i?n&&r.indexOf(n)>-1:"$="===i?n&&r.slice(-n.length)===n:"~="===i?(" "+r+" ").indexOf(n)>-1:"|="===i&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,i,n,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===n&&0===o?function(e){return!!e.parentNode}:function(t,i,l){var c,d,u,p,f,h,g=r!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!l&&!a;if(v){if(r){for(;g;){for(u=t;u=u[g];)if(a?u.nodeName.toLowerCase()===m:1===u.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(d=v[W]||(v[W]={}),c=d[e]||[],f=c[0]===I&&c[1],p=c[0]===I&&c[2],u=f&&v.childNodes[f];u=++f&&u&&u[g]||(p=f=0)||h.pop();)if(1===u.nodeType&&++p&&u===t){d[e]=[I,f,p];break}}else if(y&&(c=(t[W]||(t[W]={}))[e])&&c[0]===I)p=c[1];else for(;(u=++f&&u&&u[g]||(p=f=0)||h.pop())&&((a?u.nodeName.toLowerCase()!==m:1!==u.nodeType)||!++p||(y&&((u[W]||(u[W]={}))[e]=[I,p]),u!==t)););return(p-=o)===n||p%n==0&&p/n>=0}}},PSEUDO:function(e,i){var o,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[W]?r(i):r.length>1?(o=[e,e,"",i],C.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n,o=r(e,i),s=o.length;s--;)n=te.call(e,o[s]),e[n]=!(t[n]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:n(function(e){var t=[],i=[],o=j(e.replace(le,"$1"));return o[W]?n(function(e,t,i,n){for(var r,s=o(e,null,n,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,n,r){return t[0]=e,o(t,null,r,i),!i.pop()}}),has:n(function(e){return function(i){return t(e,i).length>0}}),contains:n(function(e){return function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:n(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,ke).toLowerCase(),function(t){var i;do{if(i=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(i=i.toLowerCase())===e||0===i.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var i=e.location&&e.location.hash;return i&&i.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,i){return[0>i?i+t:i]}),even:c(function(e,t){for(var i=0;t>i;i+=2)e.push(i);return e}),odd:c(function(e,t){for(var i=1;t>i;i+=2)e.push(i);return e}),lt:c(function(e,t,i){for(var n=0>i?i+t:i;--n>=0;)e.push(n);return e}),gt:c(function(e,t,i){for(var n=0>i?i+t:i;++n<t;)e.push(n);return e})}},C.pseudos.nth=C.pseudos.eq;for(k in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[k]=a(k);for(k in{submit:!0,reset:!0})C.pseudos[k]=l(k);return u.prototype=C.filters=C.pseudos,C.setFilters=new u,j=t.compile=function(e,t){var i,n=[],o=[],r=X[e+" "];if(!r){for(t||(t=p(e)),i=t.length;i--;)r=y(t[i]),r[W]?n.push(r):o.push(r);r=X(e,b(o,n))}return r},T.sortStable=W.split("").sort(U).join("")===W,T.detectDuplicates=!!N,H(),T.sortDetached=o(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,i){return i?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,i){return i||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(ie,function(e,t,i){var n;return i?void 0:!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),t}(e);re.find=de,re.expr=de.selectors,re.expr[":"]=re.expr.pseudos,re.unique=de.uniqueSort,re.text=de.getText,re.isXMLDoc=de.isXML,re.contains=de.contains;var ue=re.expr.match.needsContext,pe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;re.filter=function(e,t,i){var n=t[0];return i&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?re.find.matchesSelector(n,e)?[n]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({find:function(e){var t,i=[],n=this,o=n.length;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;o>t;t++)if(re.contains(n[t],this))return!0}));for(t=0;o>t;t++)re.find(e,n[t],i);return i=this.pushStack(o>1?re.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(n(this,e||[],!1))},not:function(e){return this.pushStack(n(this,e||[],!0))},is:function(e){return!!n(this,"string"==typeof e&&ue.test(e)?re(e):e||[],!1).length}});var he,ge=e.document,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(re.fn.init=function(e,t){var i,n;if(!e)return this;if("string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ve.exec(e))||!i[1]&&t)return!t||t.jquery?(t||he).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof re?t[0]:t,re.merge(this,re.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:ge,!0)),pe.test(i[1])&&re.isPlainObject(t))for(i in t)re.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}if((n=ge.getElementById(i[2]))&&n.parentNode){if(n.id!==i[2])return he.find(e);this.length=1,this[0]=n}return this.context=ge,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?void 0!==he.ready?he.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))}).prototype=re.fn,he=re(ge);var me=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};re.extend({dir:function(e,t,i){for(var n=[],o=e[t];o&&9!==o.nodeType&&(void 0===i||1!==o.nodeType||!re(o).is(i));)1===o.nodeType&&n.push(o),o=o[t];return n},sibling:function(e,t){for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);return i}}),re.fn.extend({has:function(e){var t,i=re(e,this),n=i.length;return this.filter(function(){for(t=0;n>t;t++)if(re.contains(this,i[t]))return!0})},closest:function(e,t){for(var i,n=0,o=this.length,r=[],s=ue.test(e)||"string"!=typeof e?re(e,t||this.context):0;o>n;n++)for(i=this[n];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(s?s.index(i)>-1:1===i.nodeType&&re.find.matchesSelector(i,e))){r.push(i);break}return this.pushStack(r.length>1?re.unique(r):r)},index:function(e){return e?"string"==typeof e?re.inArray(this[0],re(e)):re.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.unique(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return re.dir(e,"parentNode")},parentsUntil:function(e,t,i){return re.dir(e,"parentNode",i)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return re.dir(e,"nextSibling")},prevAll:function(e){return re.dir(e,"previousSibling")},nextUntil:function(e,t,i){return re.dir(e,"nextSibling",i)},prevUntil:function(e,t,i){return re.dir(e,"previousSibling",i)},siblings:function(e){return re.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return re.sibling(e.firstChild)},contents:function(e){return re.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(i,n){var o=re.map(this,t,i);return"Until"!==e.slice(-5)&&(n=i),n&&"string"==typeof n&&(o=re.filter(n,o)),this.length>1&&(ye[e]||(o=re.unique(o)),me.test(e)&&(o=o.reverse())),this.pushStack(o)}});var be=/\S+/g,we={};re.Callbacks=function(e){e="string"==typeof e?we[e]||r(e):re.extend({},e);var t,i,n,o,s,a,l=[],c=!e.once&&[],d=function(r){for(i=e.memory&&r,n=!0,s=a||0,a=0,o=l.length,t=!0;l&&o>s;s++)if(!1===l[s].apply(r[0],r[1])&&e.stopOnFalse){i=!1;break}t=!1,l&&(c?c.length&&d(c.shift()):i?l=[]:u.disable())},u={add:function(){if(l){var n=l.length;!function t(i){re.each(i,function(i,n){var o=re.type(n);"function"===o?e.unique&&u.has(n)||l.push(n):n&&n.length&&"string"!==o&&t(n)})}(arguments),t?o=l.length:i&&(a=n,d(i))}return this},remove:function(){return l&&re.each(arguments,function(e,i){for(var n;(n=re.inArray(i,l,n))>-1;)l.splice(n,1),t&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?re.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=c=i=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,i||u.disable(),this},locked:function(){return!c},fireWith:function(e,i){return!l||n&&!c||(i=i||[],i=[e,i.slice?i.slice():i],t?c.push(i):d(i)),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},re.extend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],i="pending",n={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(i){re.each(t,function(t,r){var s=re.isFunction(e[t])&&e[t];o[r[1]](function(){var e=s&&s.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[r[0]+"With"](this===n?i.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,n):n}},o={};return n.pipe=n.then,re.each(t,function(e,r){var s=r[2],a=r[3];n[r[1]]=s.add,a&&s.add(function(){i=a},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?n:this,arguments),this},o[r[0]+"With"]=s.fireWith}),n.promise(o),e&&e.call(o,o),o},when:function(e){var t,i,n,o=0,r=Y.call(arguments),s=r.length,a=1!==s||e&&re.isFunction(e.promise)?s:0,l=1===a?e:re.Deferred(),c=function(e,i,n){return function(o){i[e]=this,n[e]=arguments.length>1?Y.call(arguments):o,n===t?l.notifyWith(i,n):--a||l.resolveWith(i,n)}};if(s>1)for(t=new Array(s),i=new Array(s),n=new Array(s);s>o;o++)r[o]&&re.isFunction(r[o].promise)?r[o].promise().done(c(o,n,r)).fail(l.reject).progress(c(o,i,t)):--a;return a||l.resolveWith(n,r),l.promise()}});var xe;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.ready(!0)},ready:function(e){if(!0===e?!--re.readyWait:!re.isReady){if(!ge.body)return setTimeout(re.ready);re.isReady=!0,!0!==e&&--re.readyWait>0||(xe.resolveWith(ge,[re]),re.fn.trigger&&re(ge).trigger("ready").off("ready"))}}}),re.ready.promise=function(t){if(!xe)if(xe=re.Deferred(),"complete"===ge.readyState)setTimeout(re.ready);else if(ge.addEventListener)ge.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1);else{ge.attachEvent("onreadystatechange",a),e.attachEvent("onload",a);var i=!1;try{i=null==e.frameElement&&ge.documentElement}catch(e){}i&&i.doScroll&&function e(){if(!re.isReady){try{i.doScroll("left")}catch(t){return setTimeout(e,50)}s(),re.ready()}}()}return xe.promise(t)};var ke,Te="undefined";for(ke in re(ne))break;ne.ownLast="0"!==ke,ne.inlineBlockNeedsLayout=!1,re(function(){var e,t,i=ge.getElementsByTagName("body")[0];i&&(e=ge.createElement("div"),e.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",t=ge.createElement("div"),i.appendChild(e).appendChild(t),typeof t.style.zoom!==Te&&(t.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(ne.inlineBlockNeedsLayout=3===t.offsetWidth)&&(i.style.zoom=1)),i.removeChild(e),e=t=null)}),function(){var e=ge.createElement("div");if(null==ne.deleteExpando){ne.deleteExpando=!0;try{delete e.test}catch(e){ne.deleteExpando=!1}}e=null}(),re.acceptData=function(e){var t=re.noData[(e.nodeName+" ").toLowerCase()],i=+e.nodeType||1;return(1===i||9===i)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var Ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Se=/([A-Z])/g;re.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?re.cache[e[re.expando]]:e[re.expando])&&!c(e)},data:function(e,t,i){return d(e,t,i)},removeData:function(e,t){return u(e,t)},_data:function(e,t,i){return d(e,t,i,!0)},_removeData:function(e,t){return u(e,t,!0)}}),re.fn.extend({data:function(e,t){var i,n,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=re.data(r),1===r.nodeType&&!re._data(r,"parsedAttrs"))){for(i=s.length;i--;)n=s[i].name,0===n.indexOf("data-")&&(n=re.camelCase(n.slice(5)),l(r,n,o[n]));re._data(r,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){re.data(this,e)}):arguments.length>1?this.each(function(){re.data(this,e,t)}):r?l(r,e,re.data(r,e)):void 0},removeData:function(e){return this.each(function(){re.removeData(this,e)})}}),re.extend({queue:function(e,t,i){var n;return e?(t=(t||"fx")+"queue",n=re._data(e,t),i&&(!n||re.isArray(i)?n=re._data(e,t,re.makeArray(i)):n.push(i)),n||[]):void 0},dequeue:function(e,t){t=t||"fx";var i=re.queue(e,t),n=i.length,o=i.shift(),r=re._queueHooks(e,t),s=function(){re.dequeue(e,t)};"inprogress"===o&&(o=i.shift(),n--),o&&("fx"===t&&i.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!n&&r&&r.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return re._data(e,i)||re._data(e,i,{empty:re.Callbacks("once memory").add(function(){re._removeData(e,t+"queue"),re._removeData(e,i)})})}}),re.fn.extend({queue:function(e,t){var i=2;return"string"!=typeof e&&(t=e,e="fx",i--),arguments.length<i?re.queue(this[0],e):void 0===t?this:this.each(function(){var i=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,n=1,o=re.Deferred(),r=this,s=this.length,a=function(){--n||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(i=re._data(r[s],e+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),o.promise(t)}});var $e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=["Top","Right","Bottom","Left"],Ee=function(e,t){return e=t||e,"none"===re.css(e,"display")||!re.contains(e.ownerDocument,e)},Ae=re.access=function(e,t,i,n,o,r,s){var a=0,l=e.length,c=null==i;if("object"===re.type(i)){o=!0;for(a in i)re.access(e,t,a,i[a],!0,r,s)}else if(void 0!==n&&(o=!0,re.isFunction(n)||(s=!0),c&&(s?(t.call(e,n),t=null):(c=t,t=function(e,t,i){return c.call(re(e),i)})),t))for(;l>a;a++)t(e[a],i,s?n:n.call(e[a],a,t(e[a],i)));return o?e:c?t.call(e):l?t(e[0],i):r},Ne=/^(?:checkbox|radio)$/i;!function(){var e=ge.createDocumentFragment(),t=ge.createElement("div"),i=ge.createElement("input");if(t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a>",ne.leadingWhitespace=3===t.firstChild.nodeType,ne.tbody=!t.getElementsByTagName("tbody").length,ne.htmlSerialize=!!t.getElementsByTagName("link").length,ne.html5Clone="<:nav></:nav>"!==ge.createElement("nav").cloneNode(!0).outerHTML,i.type="checkbox",i.checked=!0,e.appendChild(i),ne.appendChecked=i.checked,t.innerHTML="<textarea>x</textarea>",ne.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",ne.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,ne.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){ne.noCloneEvent=!1}),t.cloneNode(!0).click()),null==ne.deleteExpando){ne.deleteExpando=!0;try{delete t.test}catch(e){ne.deleteExpando=!1}}e=t=i=null}(),function(){var t,i,n=ge.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})i="on"+t,(ne[t+"Bubbles"]=i in e)||(n.setAttribute(i,"t"),ne[t+"Bubbles"]=!1===n.attributes[i].expando);n=null}();var He=/^(?:input|select|textarea)$/i,Le=/^key/,De=/^(?:mouse|contextmenu)|click/,Oe=/^(?:focusinfocus|focusoutblur)$/,_e=/^([^.]*)(?:\.(.+)|)$/;re.event={global:{},add:function(e,t,i,n,o){var r,s,a,l,c,d,u,p,f,h,g,v=re._data(e);if(v){for(i.handler&&(l=i,i=l.handler,o=l.selector),i.guid||(i.guid=re.guid++),(s=v.events)||(s=v.events={}),(d=v.handle)||(d=v.handle=function(e){return typeof re===Te||e&&re.event.triggered===e.type?void 0:re.event.dispatch.apply(d.elem,arguments)},d.elem=e),t=(t||"").match(be)||[""],a=t.length;a--;)r=_e.exec(t[a])||[],f=g=r[1],h=(r[2]||"").split(".").sort(),f&&(c=re.event.special[f]||{},f=(o?c.delegateType:c.bindType)||f,c=re.event.special[f]||{},u=re.extend({type:f,origType:g,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&re.expr.match.needsContext.test(o),namespace:h.join(".")},l),(p=s[f])||(p=s[f]=[],p.delegateCount=0,c.setup&&!1!==c.setup.call(e,n,h,d)||(e.addEventListener?e.addEventListener(f,d,!1):e.attachEvent&&e.attachEvent("on"+f,d))),c.add&&(c.add.call(e,u),u.handler.guid||(u.handler.guid=i.guid)),o?p.splice(p.delegateCount++,0,u):p.push(u),re.event.global[f]=!0);e=null}},remove:function(e,t,i,n,o){var r,s,a,l,c,d,u,p,f,h,g,v=re.hasData(e)&&re._data(e);if(v&&(d=v.events)){for(t=(t||"").match(be)||[""],c=t.length;c--;)if(a=_e.exec(t[c])||[],f=g=a[1],h=(a[2]||"").split(".").sort(),f){for(u=re.event.special[f]||{},f=(n?u.delegateType:u.bindType)||f,p=d[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=p.length;r--;)s=p[r],!o&&g!==s.origType||i&&i.guid!==s.guid||a&&!a.test(s.namespace)||n&&n!==s.selector&&("**"!==n||!s.selector)||(p.splice(r,1),s.selector&&p.delegateCount--,u.remove&&u.remove.call(e,s));l&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,h,v.handle)||re.removeEvent(e,f,v.handle),delete d[f])}else for(f in d)re.event.remove(e,f+t[c],i,n,!0);re.isEmptyObject(d)&&(delete v.handle,re._removeData(e,"events"))}},trigger:function(t,i,n,o){var r,s,a,l,c,d,u,p=[n||ge],f=te.call(t,"type")?t.type:t,h=te.call(t,"namespace")?t.namespace.split("."):[];if(a=d=n=n||ge,3!==n.nodeType&&8!==n.nodeType&&!Oe.test(f+re.event.triggered)&&(f.indexOf(".")>=0&&(h=f.split("."),f=h.shift(),h.sort()),s=f.indexOf(":")<0&&"on"+f,t=t[re.expando]?t:new re.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),i=null==i?[t]:re.makeArray(i,[t]),c=re.event.special[f]||{},o||!c.trigger||!1!==c.trigger.apply(n,i))){if(!o&&!c.noBubble&&!re.isWindow(n)){for(l=c.delegateType||f,Oe.test(l+f)||(a=a.parentNode);a;a=a.parentNode)p.push(a),d=a;d===(n.ownerDocument||ge)&&p.push(d.defaultView||d.parentWindow||e)}for(u=0;(a=p[u++])&&!t.isPropagationStopped();)t.type=u>1?l:c.bindType||f,r=(re._data(a,"events")||{})[t.type]&&re._data(a,"handle"),r&&r.apply(a,i),(r=s&&a[s])&&r.apply&&re.acceptData(a)&&(t.result=r.apply(a,i),!1===t.result&&t.preventDefault());if(t.type=f,!o&&!t.isDefaultPrevented()&&(!c._default||!1===c._default.apply(p.pop(),i))&&re.acceptData(n)&&s&&n[f]&&!re.isWindow(n)){d=n[s],d&&(n[s]=null),re.event.triggered=f;try{n[f]()}catch(e){}re.event.triggered=void 0,d&&(n[s]=d)}return t.result}},dispatch:function(e){e=re.event.fix(e);var t,i,n,o,r,s=[],a=Y.call(arguments),l=(re._data(this,"events")||{})[e.type]||[],c=re.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=re.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(n=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(n.namespace))&&(e.handleObj=n,e.data=n.data,void 0!==(i=((re.event.special[n.origType]||{}).handle||n.handler).apply(o.elem,a))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var i,n,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(o=[],r=0;a>r;r++)n=t[r],i=n.selector+" ",void 0===o[i]&&(o[i]=n.needsContext?re(i,this).index(l)>=0:re.find(i,this,null,[l]).length),o[i]&&o.push(n);o.length&&s.push({elem:l,handlers:o})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},fix:function(e){if(e[re.expando])return e;var t,i,n,o=e.type,r=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=De.test(o)?this.mouseHooks:Le.test(o)?this.keyHooks:{}),n=s.props?this.props.concat(s.props):this.props,e=new re.Event(r),t=n.length;t--;)i=n[t],e[i]=r[i];return e.target||(e.target=r.srcElement||ge),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var i,n,o,r=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||ge,o=n.documentElement,i=n.body,e.pageX=t.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return re.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,i,n){var o=re.extend(new re.Event,i,{type:e,isSimulated:!0,originalEvent:{}});n?re.event.trigger(o,null,t):re.event.dispatch.call(t,o),o.isDefaultPrevented()&&i.preventDefault()}},re.removeEvent=ge.removeEventListener?function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i,!1)}:function(e,t,i){var n="on"+t;e.detachEvent&&(typeof e[n]===Te&&(e[n]=null),e.detachEvent(n,i))},re.Event=function(e,t){return this instanceof re.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&(!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault())?p:f):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),void(this[re.expando]=!0)):new re.Event(e,t)},re.Event.prototype={isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=p,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=p,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=p,this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var i,n=this,o=e.relatedTarget,r=e.handleObj;return(!o||o!==n&&!re.contains(n,o))&&(e.type=r.origType,i=r.handler.apply(this,arguments),e.type=t),i}}}),ne.submitBubbles||(re.event.special.submit={setup:function(){return!re.nodeName(this,"form")&&void re.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,i=re.nodeName(t,"input")||re.nodeName(t,"button")?t.form:void 0;i&&!re._data(i,"submitBubbles")&&(re.event.add(i,"submit._submit",function(e){e._submit_bubble=!0}),re._data(i,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&re.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!re.nodeName(this,"form")&&void re.event.remove(this,"._submit")}}),ne.changeBubbles||(re.event.special.change={setup:function(){return He.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(re.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),re.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),re.event.simulate("change",this,e,!0)})),!1):void re.event.add(this,"beforeactivate._change",function(e){var t=e.target;He.test(t.nodeName)&&!re._data(t,"changeBubbles")&&(re.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||re.event.simulate("change",this.parentNode,e,!0)}),re._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return re.event.remove(this,"._change"),!He.test(this.nodeName)}}),ne.focusinBubbles||re.each({focus:"focusin",blur:"focusout"},function(e,t){var i=function(e){re.event.simulate(t,e.target,re.event.fix(e),!0)};re.event.special[t]={setup:function(){var n=this.ownerDocument||this,o=re._data(n,t);o||n.addEventListener(e,i,!0),re._data(n,t,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this,o=re._data(n,t)-1;o?re._data(n,t,o):(n.removeEventListener(e,i,!0),re._removeData(n,t))}}}),re.fn.extend({on:function(e,t,i,n,o){var r,s;if("object"==typeof e){"string"!=typeof t&&(i=i||t,t=void 0);for(r in e)this.on(r,t,i,e[r],o);return this}if(null==i&&null==n?(n=t,i=t=void 0):null==n&&("string"==typeof t?(n=i,i=void 0):(n=i,i=t,t=void 0)),!1===n)n=f;else if(!n)return this;return 1===o&&(s=n,n=function(e){return re().off(e),s.apply(this,arguments)},n.guid=s.guid||(s.guid=re.guid++)),this.each(function(){re.event.add(this,e,n,i,t)})},one:function(e,t,i,n){return this.on(e,t,i,n,1)},off:function(e,t,i){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,re(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(i=t,t=void 0),!1===i&&(i=f),this.each(function(){re.event.remove(this,e,i,t)})},trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];return i?re.event.trigger(e,t,i,!0):void 0}});var Pe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Me=/ jQuery\d+="(?:null|\d+)"/g,qe=new RegExp("<(?:"+Pe+")[\\s/>]","i"),We=/^\s+/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ie=/<([\w:]+)/,Fe=/<tbody/i,Re=/<|&#?\w+;/,Be=/<(?:script|style|link)/i,Xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ue=/^$|\/(?:java|ecma)script/i,Qe=/^true\/(.*)/,Ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ye={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ne.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ke=g(ge),Je=Ke.appendChild(ge.createElement("div"));Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td,re.extend({clone:function(e,t,i){var n,o,r,s,a,l=re.contains(e.ownerDocument,e);if(ne.html5Clone||re.isXMLDoc(e)||!qe.test("<"+e.nodeName+">")?r=e.cloneNode(!0):(Je.innerHTML=e.outerHTML,Je.removeChild(r=Je.firstChild)),!(ne.noCloneEvent&&ne.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(n=v(r),a=v(e),s=0;null!=(o=a[s]);++s)n[s]&&T(o,n[s]);if(t)if(i)for(a=a||v(e),n=n||v(r),s=0;null!=(o=a[s]);s++)k(o,n[s]);else k(e,r);return n=v(r,"script"),n.length>0&&x(n,!l&&v(e,"script")),n=a=o=null,r},buildFragment:function(e,t,i,n){for(var o,r,s,a,l,c,d,u=e.length,p=g(t),f=[],h=0;u>h;h++)if((r=e[h])||0===r)if("object"===re.type(r))re.merge(f,r.nodeType?[r]:r);else if(Re.test(r)){for(a=a||p.appendChild(t.createElement("div")),l=(Ie.exec(r)||["",""])[1].toLowerCase(),d=Ye[l]||Ye._default,a.innerHTML=d[1]+r.replace(ze,"<$1></$2>")+d[2],o=d[0];o--;)a=a.lastChild;if(!ne.leadingWhitespace&&We.test(r)&&f.push(t.createTextNode(We.exec(r)[0])),!ne.tbody)for(r="table"!==l||Fe.test(r)?"<table>"!==d[1]||Fe.test(r)?0:a:a.firstChild,o=r&&r.childNodes.length;o--;)re.nodeName(c=r.childNodes[o],"tbody")&&!c.childNodes.length&&r.removeChild(c);for(re.merge(f,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=p.lastChild}else f.push(t.createTextNode(r));for(a&&p.removeChild(a),ne.appendChecked||re.grep(v(f,"input"),m),h=0;r=f[h++];)if((!n||-1===re.inArray(r,n))&&(s=re.contains(r.ownerDocument,r),a=v(p.appendChild(r),"script"),s&&x(a),i))for(o=0;r=a[o++];)Ue.test(r.type||"")&&i.push(r);return a=null,p},cleanData:function(e,t){for(var i,n,o,r,s=0,a=re.expando,l=re.cache,c=ne.deleteExpando,d=re.event.special;null!=(i=e[s]);s++)if((t||re.acceptData(i))&&(o=i[a],r=o&&l[o])){if(r.events)for(n in r.events)d[n]?re.event.remove(i,n):re.removeEvent(i,n,r.handle);l[o]&&(delete l[o],c?delete i[a]:typeof i.removeAttribute!==Te?i.removeAttribute(a):i[a]=null,V.push(o))}}}),re.fn.extend({text:function(e){return Ae(this,function(e){return void 0===e?re.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ge).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){y(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var i,n=e?re.filter(e,this):this,o=0;null!=(i=n[o]);o++)t||1!==i.nodeType||re.cleanData(v(i)),i.parentNode&&(t&&re.contains(i.ownerDocument,i)&&x(v(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&re.cleanData(v(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&re.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return Ae(this,function(e){var t=this[0]||{},i=0,n=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Me,""):void 0;if(!("string"!=typeof e||Be.test(e)||!ne.htmlSerialize&&qe.test(e)||!ne.leadingWhitespace&&We.test(e)||Ye[(Ie.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(ze,"<$1></$2>");try{for(;n>i;i++)t=this[i]||{},1===t.nodeType&&(re.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,re.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=K.apply([],e);var i,n,o,r,s,a,l=0,c=this.length,d=this,u=c-1,p=e[0],f=re.isFunction(p);if(f||c>1&&"string"==typeof p&&!ne.checkClone&&Xe.test(p))return this.each(function(i){var n=d.eq(i);f&&(e[0]=p.call(this,i,n.html())),n.domManip(e,t)});if(c&&(a=re.buildFragment(e,this[0].ownerDocument,!1,this),i=a.firstChild,1===a.childNodes.length&&(a=i),i)){for(r=re.map(v(a,"script"),b),o=r.length;c>l;l++)n=a,l!==u&&(n=re.clone(n,!0,!0),o&&re.merge(r,v(n,"script"))),t.call(this[l],n,l);if(o)for(s=r[r.length-1].ownerDocument,re.map(r,w),l=0;o>l;l++)n=r[l],Ue.test(n.type||"")&&!re._data(n,"globalEval")&&re.contains(s,n)&&(n.src?re._evalUrl&&re._evalUrl(n.src):re.globalEval((n.text||n.textContent||n.innerHTML||"").replace(Ve,"")));a=i=null}return this}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){re.fn[e]=function(e){for(var i,n=0,o=[],r=re(e),s=r.length-1;s>=n;n++)i=n===s?this:this.clone(!0),re(r[n])[t](i),J.apply(o,i.get());return this.pushStack(o)}});var Ge,Ze={};!function(){var e,t,i=ge.createElement("div");i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=i.getElementsByTagName("a")[0],e.style.cssText="float:left;opacity:.5",ne.opacity=/^0.5/.test(e.style.opacity),ne.cssFloat=!!e.style.cssFloat,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===i.style.backgroundClip,e=i=null,ne.shrinkWrapBlocks=function(){var e,i,n;if(null==t){if(!(e=ge.getElementsByTagName("body")[0]))return;i=ge.createElement("div"),n=ge.createElement("div"),e.appendChild(i).appendChild(n),t=!1,typeof n.style.zoom!==Te&&(n.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",n.innerHTML="<div></div>",n.firstChild.style.width="5px",t=3!==n.offsetWidth),e.removeChild(i),e=i=n=null}return t}}();var et,tt,it=/^margin/,nt=new RegExp("^("+$e+")(?!px)[a-z%]+$","i"),ot=/^(top|right|bottom|left)$/;e.getComputedStyle?(et=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)},tt=function(e,t,i){var n,o,r,s,a=e.style;return i=i||et(e),s=i?i.getPropertyValue(t)||i[t]:void 0,i&&(""!==s||re.contains(e.ownerDocument,e)||(s=re.style(e,t)),nt.test(s)&&it.test(t)&&(n=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=i.width,a.width=n,a.minWidth=o,a.maxWidth=r)),void 0===s?s:s+""}):ge.documentElement.currentStyle&&(et=function(e){return e.currentStyle},tt=function(e,t,i){var n,o,r,s,a=e.style;return i=i||et(e),s=i?i[t]:void 0,null==s&&a&&a[t]&&(s=a[t]),nt.test(s)&&!ot.test(t)&&(n=a.left,o=e.runtimeStyle,r=o&&o.left,r&&(o.left=e.currentStyle.left),a.left="fontSize"===t?"1em":s,s=a.pixelLeft+"px",a.left=n,r&&(o.left=r)),void 0===s?s:s+""||"auto"}),!function(){function t(){var t,i,n=ge.getElementsByTagName("body")[0];n&&(t=ge.createElement("div"),i=ge.createElement("div"),t.style.cssText=c,n.appendChild(t).appendChild(i),i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",re.swap(n,null!=n.style.zoom?{zoom:1}:{},function(){o=4===i.offsetWidth}),r=!0,s=!1,a=!0,e.getComputedStyle&&(s="1%"!==(e.getComputedStyle(i,null)||{}).top,r="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width),n.removeChild(t),i=n=null)}var i,n,o,r,s,a,l=ge.createElement("div"),c="border:0;width:0;height:0;position:absolute;top:0;left:-9999px";l.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=l.getElementsByTagName("a")[0],i.style.cssText="float:left;opacity:.5",ne.opacity=/^0.5/.test(i.style.opacity),ne.cssFloat=!!i.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===l.style.backgroundClip,i=l=null,re.extend(ne,{reliableHiddenOffsets:function(){if(null!=n)return n;var e,t,i,o=ge.createElement("div"),r=ge.getElementsByTagName("body")[0];return r?(o.setAttribute("className","t"),o.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=ge.createElement("div"),e.style.cssText=c,r.appendChild(e).appendChild(o),o.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=o.getElementsByTagName("td"),t[0].style.cssText="padding:0;margin:0;border:0;display:none",i=0===t[0].offsetHeight,t[0].style.display="",t[1].style.display="none",n=i&&0===t[0].offsetHeight,r.removeChild(e),o=r=null,n):void 0},boxSizing:function(){return null==o&&t(),o},boxSizingReliable:function(){return null==r&&t(),r},pixelPosition:function(){return null==s&&t(),s},reliableMarginRight:function(){var t,i,n,o;if(null==a&&e.getComputedStyle){if(!(t=ge.getElementsByTagName("body")[0]))return;i=ge.createElement("div"),n=ge.createElement("div"),i.style.cssText=c,t.appendChild(i).appendChild(n),o=n.appendChild(ge.createElement("div")),o.style.cssText=n.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0",o.style.marginRight=o.style.width="0",n.style.width="1px",a=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight),t.removeChild(i)}return a}})}(),re.swap=function(e,t,i,n){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=i.apply(e,n||[]);for(r in t)e.style[r]=s[r];return o};var rt=/alpha\([^)]*\)/i,st=/opacity\s*=\s*([^)]*)/,at=/^(none|table(?!-c[ea]).+)/,lt=new RegExp("^("+$e+")(.*)$","i"),ct=new RegExp("^([+-])=("+$e+")","i"),dt={position:"absolute",visibility:"hidden",display:"block"},ut={letterSpacing:0,fontWeight:400},pt=["Webkit","O","Moz","ms"];re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=tt(e,"opacity");return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:ne.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,i,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=re.camelCase(t),l=e.style;if(t=re.cssProps[a]||(re.cssProps[a]=j(l,a)),s=re.cssHooks[t]||re.cssHooks[a],void 0===i)return s&&"get"in s&&void 0!==(o=s.get(e,!1,n))?o:l[t];if(r=typeof i,"string"===r&&(o=ct.exec(i))&&(i=(o[1]+1)*o[2]+parseFloat(re.css(e,t)),r="number"),null!=i&&i===i&&("number"!==r||re.cssNumber[a]||(i+="px"),ne.clearCloneStyle||""!==i||0!==t.indexOf("background")||(l[t]="inherit"),!(s&&"set"in s&&void 0===(i=s.set(e,i,n)))))try{l[t]="",l[t]=i}catch(e){}}},css:function(e,t,i,n){var o,r,s,a=re.camelCase(t);return t=re.cssProps[a]||(re.cssProps[a]=j(e.style,a)),s=re.cssHooks[t]||re.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,i)),void 0===r&&(r=tt(e,t,n)),"normal"===r&&t in ut&&(r=ut[t]),""===i||i?(o=parseFloat(r),!0===i||re.isNumeric(o)?o||0:r):r}}),re.each(["height","width"],function(e,t){re.cssHooks[t]={get:function(e,i,n){return i?0===e.offsetWidth&&at.test(re.css(e,"display"))?re.swap(e,dt,function(){return H(e,t,n)}):H(e,t,n):void 0},set:function(e,i,n){var o=n&&et(e);return A(e,i,n?N(e,t,n,ne.boxSizing()&&"border-box"===re.css(e,"boxSizing",!1,o),o):0)}}}),ne.opacity||(re.cssHooks.opacity={get:function(e,t){return st.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var i=e.style,n=e.currentStyle,o=re.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=n&&n.filter||i.filter||"";i.zoom=1,(t>=1||""===t)&&""===re.trim(r.replace(rt,""))&&i.removeAttribute&&(i.removeAttribute("filter"),""===t||n&&!n.filter)||(i.filter=rt.test(r)?r.replace(rt,o):r+" "+o)}}),re.cssHooks.marginRight=$(ne.reliableMarginRight,function(e,t){return t?re.swap(e,{display:"inline-block"},tt,[e,"marginRight"]):void 0}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(i){for(var n=0,o={},r="string"==typeof i?i.split(" "):[i];4>n;n++)o[e+je[n]+t]=r[n]||r[n-2]||r[0];return o}},it.test(e)||(re.cssHooks[e+t].set=A)}),re.fn.extend({css:function(e,t){return Ae(this,function(e,t,i){var n,o,r={},s=0;if(re.isArray(t)){for(n=et(e),o=t.length;o>s;s++)r[t[s]]=re.css(e,t[s],!1,n);return r}return void 0!==i?re.style(e,t,i):re.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0)},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ee(this)?re(this).show():re(this).hide()})}}),re.Tween=L,L.prototype={constructor:L,init:function(e,t,i,n,o,r){this.elem=e,this.prop=i,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=r||(re.cssNumber[i]?"":"px")},cur:function(){var e=L.propHooks[this.prop];return e&&e.get?e.get(this):L.propHooks._default.get(this)},run:function(e){var t,i=L.propHooks[this.prop];return this.pos=t=this.options.duration?re.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=re.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[re.cssProps[e.prop]]||re.cssHooks[e.prop])?re.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},re.fx=L.prototype.init,re.fx.step={};var ft,ht,gt=/^(?:toggle|show|hide)$/,vt=new RegExp("^(?:([+-])=|)("+$e+")([a-z%]*)$","i"),mt=/queueHooks$/,yt=[P],bt={"*":[function(e,t){var i=this.createTween(e,t),n=i.cur(),o=vt.exec(t),r=o&&o[3]||(re.cssNumber[e]?"":"px"),s=(re.cssNumber[e]||"px"!==r&&+n)&&vt.exec(re.css(i.elem,e)),a=1,l=20;if(s&&s[3]!==r){r=r||s[3],o=o||[],s=+n||1;do{a=a||".5",s/=a,re.style(i.elem,e,s+r)}while(a!==(a=i.cur()/n)&&1!==a&&--l)}return o&&(s=i.start=+s||+n||0,i.unit=r,i.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),i}]};re.Animation=re.extend(q,{tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var i,n=0,o=e.length;o>n;n++)i=e[n],bt[i]=bt[i]||[],bt[i].unshift(t)},prefilter:function(e,t){t?yt.unshift(e):yt.push(e)}}),re.speed=function(e,t,i){var n=e&&"object"==typeof e?re.extend({},e):{complete:i||!i&&t||re.isFunction(e)&&e,duration:e,easing:i&&t||t&&!re.isFunction(t)&&t};return n.duration=re.fx.off?0:"number"==typeof n.duration?n.duration:n.duration in re.fx.speeds?re.fx.speeds[n.duration]:re.fx.speeds._default,(null==n.queue||!0===n.queue)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){re.isFunction(n.old)&&n.old.call(this),n.queue&&re.dequeue(this,n.queue)},n},re.fn.extend({fadeTo:function(e,t,i,n){return this.filter(Ee).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(e,t,i,n){var o=re.isEmptyObject(e),r=re.speed(t,i,n),s=function(){var t=q(this,re.extend({},e),r);(o||re._data(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(e,t,i){var n=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof e&&(i=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=re.timers,s=re._data(this);if(o)s[o]&&s[o].stop&&n(s[o]);else for(o in s)s[o]&&s[o].stop&&mt.test(o)&&n(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(i),t=!1,r.splice(o,1));(t||!i)&&re.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,i=re._data(this),n=i[e+"queue"],o=i[e+"queueHooks"],r=re.timers,s=n?n.length:0;for(i.finish=!0,re.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;s>t;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete i.finish})}}),re.each(["toggle","show","hide"],function(e,t){var i=re.fn[t];re.fn[t]=function(e,n,o){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(O(t,!0),e,n,o)}}),re.each({slideDown:O("show"),slideUp:O("hide"),slideToggle:O("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,i,n){return this.animate(t,e,i,n)}}),re.timers=[],re.fx.tick=function(){var e,t=re.timers,i=0;for(ft=re.now();i<t.length;i++)(e=t[i])()||t[i]!==e||t.splice(i--,1);t.length||re.fx.stop(),ft=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.timers.pop()},re.fx.interval=13,re.fx.start=function(){ht||(ht=setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){clearInterval(ht),ht=null},re.fx.speeds={slow:600,fast:200,_default:400},re.fn.delay=function(e,t){return e=re.fx?re.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i){var n=setTimeout(t,e);i.stop=function(){clearTimeout(n)}})},function(){var e,t,i,n,o=ge.createElement("div");o.setAttribute("className","t"),o.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=o.getElementsByTagName("a")[0],i=ge.createElement("select"),n=i.appendChild(ge.createElement("option")),t=o.getElementsByTagName("input")[0],e.style.cssText="top:1px",ne.getSetAttribute="t"!==o.className,ne.style=/top/.test(e.getAttribute("style")),ne.hrefNormalized="/a"===e.getAttribute("href"),ne.checkOn=!!t.value,ne.optSelected=n.selected,ne.enctype=!!ge.createElement("form").enctype,i.disabled=!0,ne.optDisabled=!n.disabled,t=ge.createElement("input"),t.setAttribute("value",""),ne.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),ne.radioValue="t"===t.value,e=t=i=n=o=null}();var wt=/\r/g;re.fn.extend({val:function(e){var t,i,n,o=this[0];return arguments.length?(n=re.isFunction(e),this.each(function(i){var o;1===this.nodeType&&(o=n?e.call(this,i,re(this).val()):e,null==o?o="":"number"==typeof o?o+="":re.isArray(o)&&(o=re.map(o,function(e){return null==e?"":e+""})),(t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=re.valHooks[o.type]||re.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(i=t.get(o,"value"))?i:(i=o.value,"string"==typeof i?i.replace(wt,""):null==i?"":i)):void 0}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return null!=t?t:re.text(e)}},select:{get:function(e){for(var t,i,n=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,s=r?null:[],a=r?o+1:n.length,l=0>o?a:r?o:0;a>l;l++)if(i=n[l],!(!i.selected&&l!==o||(ne.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&re.nodeName(i.parentNode,"optgroup"))){if(t=re(i).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var i,n,o=e.options,r=re.makeArray(t),s=o.length;s--;)if(n=o[s],re.inArray(re.valHooks.option.get(n),r)>=0)try{n.selected=i=!0}catch(e){n.scrollHeight}else n.selected=!1;return i||(e.selectedIndex=-1),o}}}}),re.each(["radio","checkbox"],function(){re.valHooks[this]={set:function(e,t){return re.isArray(t)?e.checked=re.inArray(re(e).val(),t)>=0:void 0}},ne.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var xt,kt,Tt=re.expr.attrHandle,Ct=/^(?:checked|selected)$/i,St=ne.getSetAttribute,$t=ne.input;re.fn.extend({attr:function(e,t){return Ae(this,re.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,i){var n,o,r=e.nodeType;if(e&&3!==r&&8!==r&&2!==r)return typeof e.getAttribute===Te?re.prop(e,t,i):(1===r&&re.isXMLDoc(e)||(t=t.toLowerCase(),n=re.attrHooks[t]||(re.expr.match.bool.test(t)?kt:xt)),void 0===i?n&&"get"in n&&null!==(o=n.get(e,t))?o:(o=re.find.attr(e,t),null==o?void 0:o):null!==i?n&&"set"in n&&void 0!==(o=n.set(e,i,t))?o:(e.setAttribute(t,i+""),i):void re.removeAttr(e,t))},removeAttr:function(e,t){var i,n,o=0,r=t&&t.match(be);if(r&&1===e.nodeType)for(;i=r[o++];)n=re.propFix[i]||i,re.expr.match.bool.test(i)?$t&&St||!Ct.test(i)?e[n]=!1:e[re.camelCase("default-"+i)]=e[n]=!1:re.attr(e,i,""),e.removeAttribute(St?i:n)},attrHooks:{type:{set:function(e,t){if(!ne.radioValue&&"radio"===t&&re.nodeName(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}}}),kt={set:function(e,t,i){return!1===t?re.removeAttr(e,i):$t&&St||!Ct.test(i)?e.setAttribute(!St&&re.propFix[i]||i,i):e[re.camelCase("default-"+i)]=e[i]=!0,i}},re.each(re.expr.match.bool.source.match(/\w+/g),function(e,t){var i=Tt[t]||re.find.attr;Tt[t]=$t&&St||!Ct.test(t)?function(e,t,n){var o,r;return n||(r=Tt[t],Tt[t]=o,o=null!=i(e,t,n)?t.toLowerCase():null,Tt[t]=r),o}:function(e,t,i){return i?void 0:e[re.camelCase("default-"+t)]?t.toLowerCase():null}}),$t&&St||(re.attrHooks.value={set:function(e,t,i){return re.nodeName(e,"input")?void(e.defaultValue=t):xt&&xt.set(e,t,i)}}),St||(xt={set:function(e,t,i){var n=e.getAttributeNode(i);return n||e.setAttributeNode(n=e.ownerDocument.createAttribute(i)),n.value=t+="","value"===i||t===e.getAttribute(i)?t:void 0}},Tt.id=Tt.name=Tt.coords=function(e,t,i){var n;return i?void 0:(n=e.getAttributeNode(t))&&""!==n.value?n.value:null},re.valHooks.button={get:function(e,t){var i=e.getAttributeNode(t);return i&&i.specified?i.value:void 0},set:xt.set},re.attrHooks.contenteditable={set:function(e,t,i){xt.set(e,""!==t&&t,i)}},re.each(["width","height"],function(e,t){re.attrHooks[t]={set:function(e,i){return""===i?(e.setAttribute(t,"auto"),i):void 0}}})),ne.style||(re.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var jt=/^(?:input|select|textarea|button|object)$/i,Et=/^(?:a|area)$/i;re.fn.extend({prop:function(e,t){return Ae(this,re.prop,e,t,arguments.length>1)},removeProp:function(e){return e=re.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),re.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,i){var n,o,r,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return r=1!==s||!re.isXMLDoc(e),r&&(t=re.propFix[t]||t,o=re.propHooks[t]),void 0!==i?o&&"set"in o&&void 0!==(n=o.set(e,i,t))?n:e[t]=i:o&&"get"in o&&null!==(n=o.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){var t=re.find.attr(e,"tabindex");return t?parseInt(t,10):jt.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}}}),ne.hrefNormalized||re.each(["href","src"],function(e,t){re.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),ne.optSelected||(re.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),re.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this}),ne.enctype||(re.propFix.enctype="encoding");var At=/[\t\r\n\f]/g;re.fn.extend({addClass:function(e){var t,i,n,o,r,s,a=0,l=this.length,c="string"==typeof e&&e;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,this.className))});if(c)for(t=(e||"").match(be)||[];l>a;a++)if(i=this[a],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(At," "):" ")){for(r=0;o=t[r++];)n.indexOf(" "+o+" ")<0&&(n+=o+" ");s=re.trim(n),i.className!==s&&(i.className=s)}return this},removeClass:function(e){var t,i,n,o,r,s,a=0,l=this.length,c=0===arguments.length||"string"==typeof e&&e;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,this.className))});if(c)for(t=(e||"").match(be)||[];l>a;a++)if(i=this[a],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(At," "):"")){for(r=0;o=t[r++];)for(;n.indexOf(" "+o+" ")>=0;)n=n.replace(" "+o+" "," ");s=e?re.trim(n):"",i.className!==s&&(i.className=s)}return this},toggleClass:function(e,t){var i=typeof e;return"boolean"==typeof t&&"string"===i?t?this.addClass(e):this.removeClass(e):this.each(re.isFunction(e)?function(i){re(this).toggleClass(e.call(this,i,this.className,t),t)}:function(){if("string"===i)for(var t,n=0,o=re(this),r=e.match(be)||[];t=r[n++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else(i===Te||"boolean"===i)&&(this.className&&re._data(this,"__className__",this.className),this.className=this.className||!1===e?"":re._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",i=0,n=this.length;n>i;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(At," ").indexOf(t)>=0)return!0;return!1}}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,i){return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}}),re.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,n){return this.on(t,e,i,n)},undelegate:function(e,t,i){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}});var Nt=re.now(),Ht=/\?/,Lt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;re.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var i,n=null,o=re.trim(t+"");return o&&!re.trim(o.replace(Lt,function(e,t,o,r){return i&&t&&(n=0),0===n?e:(i=o||t,n+=!r-!o,"")}))?Function("return "+o)():re.error("Invalid JSON: "+t)},re.parseXML=function(t){var i,n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(n=new DOMParser,i=n.parseFromString(t,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(t))}catch(e){i=void 0}return i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||re.error("Invalid XML: "+t),i};var Dt,Ot,_t=/#.*$/,Pt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wt=/^(?:GET|HEAD)$/,zt=/^\/\//,It=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ft={},Rt={},Bt="*/".concat("*");try{Ot=location.href}catch(e){Ot=ge.createElement("a"),Ot.href="",Ot=Ot.href}Dt=It.exec(Ot.toLowerCase())||[],re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ot,type:"GET",isLocal:qt.test(Dt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,re.ajaxSettings),t):I(re.ajaxSettings,e)},ajaxPrefilter:W(Ft),ajaxTransport:W(Rt),ajax:function(e,t){function i(e,t,i,n){var o,d,m,y,w,k=t;2!==b&&(b=2,a&&clearTimeout(a),c=void 0,s=n||"",x.readyState=e>0?4:0,o=e>=200&&300>e||304===e,i&&(y=F(u,x,i)),y=R(u,y,x,o),o?(u.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(re.lastModified[r]=w),(w=x.getResponseHeader("etag"))&&(re.etag[r]=w)),204===e||"HEAD"===u.type?k="nocontent":304===e?k="notmodified":(k=y.state,d=y.data,m=y.error,o=!m)):(m=k,(e||!k)&&(k="error",0>e&&(e=0))),x.status=e,x.statusText=(t||k)+"",o?h.resolveWith(p,[d,k,x]):h.rejectWith(p,[x,k,m]),x.statusCode(v),v=void 0,l&&f.trigger(o?"ajaxSuccess":"ajaxError",[x,u,o?d:m]),g.fireWith(p,[x,k]),l&&(f.trigger("ajaxComplete",[x,u]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,o,r,s,a,l,c,d,u=re.ajaxSetup({},t),p=u.context||u,f=u.context&&(p.nodeType||p.jquery)?re(p):re.event,h=re.Deferred(),g=re.Callbacks("once memory"),v=u.statusCode||{},m={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!d)for(d={};t=Mt.exec(s);)d[t[1].toLowerCase()]=t[2];t=d[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var i=e.toLowerCase();return b||(e=y[i]=y[i]||e,m[e]=t),this},overrideMimeType:function(e){return b||(u.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)v[t]=[v[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return c&&c.abort(t),i(0,t),this}};if(h.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,u.url=((e||u.url||Ot)+"").replace(_t,"").replace(zt,Dt[1]+"//"),u.type=t.method||t.type||u.method||u.type,u.dataTypes=re.trim(u.dataType||"*").toLowerCase().match(be)||[""],null==u.crossDomain&&(n=It.exec(u.url.toLowerCase()),u.crossDomain=!(!n||n[1]===Dt[1]&&n[2]===Dt[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(Dt[3]||("http:"===Dt[1]?"80":"443")))),u.data&&u.processData&&"string"!=typeof u.data&&(u.data=re.param(u.data,u.traditional)),z(Ft,u,t,x),2===b)return x;l=u.global,l&&0==re.active++&&re.event.trigger("ajaxStart"),u.type=u.type.toUpperCase(),u.hasContent=!Wt.test(u.type),r=u.url,u.hasContent||(u.data&&(r=u.url+=(Ht.test(r)?"&":"?")+u.data,delete u.data),!1===u.cache&&(u.url=Pt.test(r)?r.replace(Pt,"$1_="+Nt++):r+(Ht.test(r)?"&":"?")+"_="+Nt++)),u.ifModified&&(re.lastModified[r]&&x.setRequestHeader("If-Modified-Since",re.lastModified[r]),re.etag[r]&&x.setRequestHeader("If-None-Match",re.etag[r])),(u.data&&u.hasContent&&!1!==u.contentType||t.contentType)&&x.setRequestHeader("Content-Type",u.contentType),x.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+("*"!==u.dataTypes[0]?", "+Bt+"; q=0.01":""):u.accepts["*"]);for(o in u.headers)x.setRequestHeader(o,u.headers[o]);if(u.beforeSend&&(!1===u.beforeSend.call(p,x,u)||2===b))return x.abort();w="abort";for(o in{success:1,error:1,complete:1})x[o](u[o]);if(c=z(Rt,u,t,x)){x.readyState=1,l&&f.trigger("ajaxSend",[x,u]),u.async&&u.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},u.timeout));try{b=1,c.send(m,i)}catch(e){if(!(2>b))throw e;i(-1,e)}}else i(-1,"No Transport");return x},getJSON:function(e,t,i){return re.get(e,t,i,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,i,n,o){return re.isFunction(i)&&(o=o||n,n=i,i=void 0),re.ajax({url:e,type:t,dataType:o,data:i,success:n})}}),re.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},re.fn.extend({wrapAll:function(e){if(re.isFunction(e))return this.each(function(t){re(this).wrapAll(e.call(this,t))});if(this[0]){var t=re(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(re.isFunction(e)?function(t){re(this).wrapInner(e.call(this,t))}:function(){var t=re(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(i){re(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ne.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||re.css(e,"display"))},re.expr.filters.visible=function(e){return!re.expr.filters.hidden(e)};var Xt=/%20/g,Ut=/\[\]$/,Qt=/\r?\n/g,Vt=/^(?:submit|button|image|reset|file)$/i,Yt=/^(?:input|select|textarea|keygen)/i;re.param=function(e,t){var i,n=[],o=function(e,t){t=re.isFunction(t)?t():null==t?"":t,n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){o(this.name,this.value)});else for(i in e)B(i,e[i],t,o);return n.join("&").replace(Xt,"+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&Yt.test(this.nodeName)&&!Vt.test(e)&&(this.checked||!Ne.test(e))}).map(function(e,t){var i=re(this).val();return null==i?null:re.isArray(i)?re.map(i,function(e){return{name:t.name,value:e.replace(Qt,"\r\n")}}):{name:t.name,value:i.replace(Qt,"\r\n")}}).get()}}),re.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||U()}:X;var Kt=0,Jt={},Gt=re.ajaxSettings.xhr();e.ActiveXObject&&re(e).on("unload",function(){for(var e in Jt)Jt[e](void 0,!0)}),ne.cors=!!Gt&&"withCredentials"in Gt,(Gt=ne.ajax=!!Gt)&&re.ajaxTransport(function(e){if(!e.crossDomain||ne.cors){var t;return{send:function(i,n){var o,r=e.xhr(),s=++Kt;if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)r[o]=e.xhrFields[o];e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(o in i)void 0!==i[o]&&r.setRequestHeader(o,i[o]+"");r.send(e.hasContent&&e.data||null),t=function(i,o){var a,l,c;if(t&&(o||4===r.readyState))if(delete Jt[s],t=void 0,r.onreadystatechange=re.noop,o)4!==r.readyState&&r.abort();else{c={},a=r.status,"string"==typeof r.responseText&&(c.text=r.responseText);try{l=r.statusText}catch(e){l=""}a||!e.isLocal||e.crossDomain?1223===a&&(a=204):a=c.text?200:404}c&&n(a,l,c,r.getAllResponseHeaders())},e.async?4===r.readyState?setTimeout(t):r.onreadystatechange=Jt[s]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),re.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,i=ge.head||re("head")[0]||ge.documentElement;return{send:function(n,o){t=ge.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,i){(i||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,i||o(200,"success"))},i.insertBefore(t,i.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var Zt=[],ei=/(=)\?(?=&|$)|\?\?/;re.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Zt.pop()||re.expando+"_"+Nt++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(t,i,n){var o,r,s,a=!1!==t.jsonp&&(ei.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&ei.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=re.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(ei,"$1"+o):!1!==t.jsonp&&(t.url+=(Ht.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||re.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},n.always(function(){e[o]=r,t[o]&&(t.jsonpCallback=i.jsonpCallback,Zt.push(o)),s&&re.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),re.parseHTML=function(e,t,i){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(i=t,t=!1),t=t||ge;var n=pe.exec(e),o=!i&&[];return n?[t.createElement(n[1])]:(n=re.buildFragment([e],t,o),o&&o.length&&re(o).remove(),re.merge([],n.childNodes))};var ti=re.fn.load;re.fn.load=function(e,t,i){if("string"!=typeof e&&ti)return ti.apply(this,arguments);var n,o,r,s=this,a=e.indexOf(" ");return a>=0&&(n=e.slice(a,e.length),e=e.slice(0,a)),re.isFunction(t)?(i=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&re.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments,s.html(n?re("<div>").append(re.parseHTML(e)).find(n):e)}).complete(i&&function(e,t){s.each(i,o||[e.responseText,t,e])}),this},re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){return e===t.elem}).length};var ii=e.document.documentElement;re.offset={setOffset:function(e,t,i){var n,o,r,s,a,l,c,d=re.css(e,"position"),u=re(e),p={};"static"===d&&(e.style.position="relative"),a=u.offset(),r=re.css(e,"top"),l=re.css(e,"left"),c=("absolute"===d||"fixed"===d)&&re.inArray("auto",[r,l])>-1,c?(n=u.position(),s=n.top,o=n.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),re.isFunction(t)&&(t=t.call(e,i,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):u.css(p)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){re.offset.setOffset(this,e,t)});var t,i,n={top:0,left:0},o=this[0],r=o&&o.ownerDocument;return r?(t=r.documentElement,re.contains(t,o)?(typeof o.getBoundingClientRect!==Te&&(n=o.getBoundingClientRect()),i=Q(r),{top:n.top+(i.pageYOffset||t.scrollTop)-(t.clientTop||0),left:n.left+(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):n):void 0},position:function(){if(this[0]){var e,t,i={top:0,left:0},n=this[0];return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(i=e.offset()),i.top+=re.css(e[0],"borderTopWidth",!0),i.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-re.css(n,"marginTop",!0),left:t.left-i.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||ii;e&&!re.nodeName(e,"html")&&"static"===re.css(e,"position");)e=e.offsetParent;return e||ii})}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var i=/Y/.test(t);re.fn[e]=function(n){return Ae(this,function(e,n,o){var r=Q(e);return void 0===o?r?t in r?r[t]:r.document.documentElement[n]:e[n]:void(r?r.scrollTo(i?re(r).scrollLeft():o,i?o:re(r).scrollTop()):e[n]=o)},e,n,arguments.length,null)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=$(ne.pixelPosition,function(e,i){return i?(i=tt(e,t),nt.test(i)?re(e).position()[t]+"px":i):void 0})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,n){re.fn[n]=function(n,o){var r=arguments.length&&(i||"boolean"!=typeof n),s=i||(!0===n||!0===o?"margin":"border");return Ae(this,function(t,i,n){var o;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===n?re.css(t,i,s):re.style(t,i,n,s)},t,r?n:void 0,r,null)}})}),re.fn.size=function(){return this.length},re.fn.andSelf=re.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return re});var ni=e.jQuery,oi=e.$;return re.noConflict=function(t){return e.$===re&&(e.$=oi),t&&e.jQuery===re&&(e.jQuery=ni),re},typeof t===Te&&(e.jQuery=e.$=re),re}),void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t,i){function n(i){r[i]||(r[i]=!0,e.migrateWarnings.push(i),t.console&&console.warn&&!e.migrateMute&&(console.warn("JQMIGRATE: "+i),e.migrateTrace&&console.trace&&console.trace()))}function o(t,o,r,s){if(Object.defineProperty)try{return Object.defineProperty(t,o,{configurable:!0,enumerable:!0,get:function(){return n(s),r},set:function(e){n(s),r=e}}),i}catch(e){}e._definePropertyBroken=!0,t[o]=r}var r={};e.migrateWarnings=[],!e.migrateMute&&t.console&&console.log&&console.log("JQMIGRATE: Logging is active"),e.migrateTrace===i&&(e.migrateTrace=!0),e.migrateReset=function(){r={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&n("jQuery is not compatible with Quirks Mode");var s=e("<input/>",{size:1}).attr("size")&&e.attrFn,a=e.attr,l=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return i},d=/^(?:input|button)$/i,u=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;o(e,"attrFn",s||{},"jQuery.attrFn is deprecated"),e.attr=function(t,o,r,l){var c=o.toLowerCase(),h=t&&t.nodeType;return l&&(4>a.length&&n("jQuery.fn.attr( props, pass ) is deprecated"),t&&!u.test(h)&&(s?o in s:e.isFunction(e.fn[o])))?e(t)[o](r):("type"===o&&r!==i&&d.test(t.nodeName)&&t.parentNode&&n("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,n){var o,r=e.prop(t,n);return!0===r||"boolean"!=typeof r&&(o=t.getAttributeNode(n))&&!1!==o.nodeValue?n.toLowerCase():i},set:function(t,i,n){var o;return!1===i?e.removeAttr(t,n):(o=e.propFix[n]||n,o in t&&(t[o]=!0),t.setAttribute(n,n.toLowerCase())),n}},f.test(c)&&n("jQuery.fn.attr('"+c+"') may use property instead of attribute")),a.call(e,t,o,r))},e.attrHooks.value={get:function(e,t){var i=(e.nodeName||"").toLowerCase();return"button"===i?l.apply(this,arguments):("input"!==i&&"option"!==i&&n("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var o=(e.nodeName||"").toLowerCase();return"button"===o?c.apply(this,arguments):("input"!==o&&"option"!==o&&n("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,i)}};var h,g,v=e.fn.init,m=e.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;e.fn.init=function(t,i,o){var r;return t&&"string"==typeof t&&!e.isPlainObject(i)&&(r=y.exec(t))&&r[1]&&("<"!==t.charAt(0)&&n("$(html) HTML strings must start with '<' character"),i&&i.context&&(i=i.context),e.parseHTML)?v.call(this,e.parseHTML(e.trim(t),i,!0),i,o):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(n("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(h=e.uaMatch(navigator.userAgent),g={},h.browser&&(g[h.browser]=!0,g.version=h.version),g.chrome?g.webkit=!0:g.webkit&&(g.safari=!0),e.browser=g),o(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,i){return new t.fn.init(e,i)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(n,o){return o&&o instanceof e&&!(o instanceof t)&&(o=t(o)),e.fn.init.call(this,n,o,i)},t.fn.init.prototype=t.fn;var i=t(document);return n("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var o,r,s=this[0];return!s||"events"!==t||1!==arguments.length||(o=e.data(s,t),r=e._data(s,t),o!==i&&o!==r||r===i)?b.apply(this,arguments):(n("Use of jQuery.fn.data('events') is deprecated"),r)};var w=/\/(java|ecma)script/i,x=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),x.apply(this,arguments)},e.clean||(e.clean=function(t,o,r,s){o=o||document,o=!o.nodeType&&o[0]||o,o=o.ownerDocument||o,n("jQuery.clean() is deprecated");var a,l,c,d,u=[];if(e.merge(u,e.buildFragment(t,o).childNodes),r)for(c=function(e){return!e.type||w.test(e.type)?s?s.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e):i},a=0;null!=(l=u[a]);a++)e.nodeName(l,"script")&&c(l)||(r.appendChild(l),l.getElementsByTagName!==i&&(d=e.grep(e.merge([],l.getElementsByTagName("script")),c),u.splice.apply(u,[a+1,0].concat(d)),a+=d.length));return u});var k=e.event.add,T=e.event.remove,C=e.event.trigger,S=e.fn.toggle,$=e.fn.live,j=e.fn.die,E="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",A=RegExp("\\b(?:"+E+")\\b"),N=/(?:^|\s)hover(\.\S+|)\b/,H=function(t){return"string"!=typeof t||e.event.special.hover?t:(N.test(t)&&n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(N,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&o(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,i,o,r){e!==document&&A.test(t)&&n("AJAX events should be attached to document: "+t),k.call(this,e,H(t||""),i,o,r)},e.event.remove=function(e,t,i,n,o){T.call(this,e,H(t)||"",i,n,o)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return n("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,i){if(!e.isFunction(t)||!e.isFunction(i))return S.apply(this,arguments);n("jQuery.fn.toggle(handler, handler...) is deprecated");var o=arguments,r=t.guid||e.guid++,s=0,a=function(i){var n=(e._data(this,"lastToggle"+t.guid)||0)%s;return e._data(this,"lastToggle"+t.guid,n+1),i.preventDefault(),o[n].apply(this,arguments)||!1};for(a.guid=r;o.length>s;)o[s++].guid=r;return this.click(a)},e.fn.live=function(t,i,o){return n("jQuery.fn.live() is deprecated"),$?$.apply(this,arguments):(e(this.context).on(t,this.selector,i,o),this)},e.fn.die=function(t,i){return n("jQuery.fn.die() is deprecated"),j?j.apply(this,arguments):(e(this.context).off(t,this.selector||"**",i),this)},e.event.trigger=function(e,t,i,o){return i||A.test(e)||n("Global events are undocumented and deprecated"),C.call(this,e,t,i||document,o)},e.each(E.split("|"),function(t,i){e.event.special[i]={setup:function(){var t=this;return t!==document&&(e.event.add(document,i+"."+e.guid,function(){e.event.trigger(i,null,t,!0)}),e._data(this,i,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,i+"."+e._data(this,i)),!1}}})}(jQuery,window),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,i){this.element=t,this.options=e.extend({},o,i),this.init()}function i(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var i=e("div.jq-selectbox.opened"),o=e("div.jq-selectbox__search input",i),r=e("div.jq-selectbox__dropdown",i);i.find("select").data("_"+n).options.onSelectClosed.call(i),o.length&&o.val("").keyup(),r.hide().find("li.sel").addClass("selected"),i.removeClass("focused opened dropup dropdown")}}var n="styler",o={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){void 0!==n.attr("id")&&""!==n.attr("id")&&(this.id=n.attr("id")+o.idSuffix),this.title=n.attr("title"),this.classes=n.attr("class"),this.data=n.data()}var n=e(this.element),o=this.options,r=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),s=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(n.is(":checkbox")){var a=function(){var i=new t,o=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:i.id,title:i.title}).addClass(i.classes).data(i.data);n.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(o).prependTo(o),o.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),n.is(":checked")&&o.addClass("checked"),n.is(":disabled")&&o.addClass("disabled"),o.click(function(e){e.preventDefault(),o.is(".disabled")||(n.is(":checked")?(n.prop("checked",!1),o.removeClass("checked")):(n.prop("checked",!0),o.addClass("checked")),n.focus().change())}),n.closest("label").add('label[for="'+n.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(o).length||(o.triggerHandler("click"),t.preventDefault())}),n.on("change.styler",function(){n.is(":checked")?o.addClass("checked"):o.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&o.click()}).on("focus.styler",function(){o.is(".disabled")||o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")})};a(),n.on("refresh",function(){n.closest("label").add('label[for="'+n.attr("id")+'"]').off(".styler"),n.off(".styler").parent().before(n).remove(),a()})}else if(n.is(":radio")){var l=function(){var i=new t,o=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:i.id,title:i.title}).addClass(i.classes).data(i.data);n.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(o).prependTo(o),o.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),n.is(":checked")&&o.addClass("checked"),n.is(":disabled")&&o.addClass("disabled"),e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})},e.fn.commonParent=function(){return e(this).commonParents().first()},o.click(function(t){if(t.preventDefault(),!o.is(".disabled")){var i=e('input[name="'+n.attr("name")+'"]');i.commonParent().find(i).prop("checked",!1).parent().removeClass("checked"),n.prop("checked",!0).parent().addClass("checked"),n.focus().change()}}),n.closest("label").add('label[for="'+n.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(o).length||(o.triggerHandler("click"),t.preventDefault())}),n.on("change.styler",function(){n.parent().addClass("checked")}).on("focus.styler",function(){o.is(".disabled")||o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")})};l(),n.on("refresh",function(){n.closest("label").add('label[for="'+n.attr("id")+'"]').off(".styler"),n.off(".styler").parent().before(n).remove(),l()})}else if(n.is(":file")){n.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"});var c=function(){var i=new t,r=n.data("placeholder");void 0===r&&(r=o.filePlaceholder);var s=n.data("browse");void 0!==s&&""!==s||(s=o.fileBrowse);var a=e('<div class="jq-file"><div class="jq-file__name">'+r+'</div><div class="jq-file__browse">'+s+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:i.id,title:i.title}).addClass(i.classes).data(i.data);n.after(a).appendTo(a),n.is(":disabled")&&a.addClass("disabled"),n.on("change.styler",function(){var t=n.val(),i=e("div.jq-file__name",a);if(n.is("[multiple]")){t="";var s=n[0].files.length;if(s>0){var l=n.data("number");void 0===l&&(l=o.fileNumber),l=l.replace("%s",s),t=l}}i.text(t.replace(/.+[\\\/]/,"")),""===t?(i.text(r),a.removeClass("changed")):a.addClass("changed")}).on("focus.styler",function(){a.addClass("focused")}).on("blur.styler",function(){a.removeClass("focused")}).on("click.styler",function(){a.removeClass("focused")})};c(),n.on("refresh",function(){n.off(".styler").parent().before(n).remove(),c()})}else if(n.is('input[type="number"]')){var d=function(){var i=new t,o=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:i.id,title:i.title}).addClass(i.classes).data(i.data);n.after(o).prependTo(o).wrap('<div class="jq-number__field"></div>'),n.is(":disabled")&&o.addClass("disabled");var r,s,a,l=null,c=null;void 0!==n.attr("min")&&(r=n.attr("min")),void 0!==n.attr("max")&&(s=n.attr("max")),a=void 0!==n.attr("step")&&e.isNumeric(n.attr("step"))?Number(n.attr("step")):Number(1);var d=function(t){var i,o=n.val();e.isNumeric(o)||(o=0,n.val("0")),t.is(".minus")?i=Number(o)-a:t.is(".plus")&&(i=Number(o)+a);var l=(a.toString().split(".")[1]||[]).length;if(l>0){for(var c="1";c.length<=l;)c+="0";i=Math.round(i*c)/c}e.isNumeric(r)&&e.isNumeric(s)?i>=r&&s>=i&&n.val(i):e.isNumeric(r)&&!e.isNumeric(s)?i>=r&&n.val(i):!e.isNumeric(r)&&e.isNumeric(s)?s>=i&&n.val(i):n.val(i)};o.is(".disabled")||(o.on("mousedown","div.jq-number__spin",function(){var t=e(this);d(t),l=setTimeout(function(){c=setInterval(function(){d(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(l),clearInterval(c)}).on("mouseup","div.jq-number__spin",function(){n.change()}),n.on("focus.styler",function(){o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")}))};d(),n.on("refresh",function(){n.off(".styler").closest(".jq-number").before(n).remove(),d()})}else if(n.is("select")){var u=function(){function a(t){t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(t){var i=null;"mousewheel"==t.type?i=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"==t.type&&(i=40*t.originalEvent.detail),i&&(t.stopPropagation(),t.preventDefault(),e(this).scrollTop(i+e(this).scrollTop()))})}function l(){for(var e=0;e<u.length;e++){var t=u.eq(e),i="",n="",r="",s="",a="",l="",c="",d="",f="";t.prop("selected")&&(n="selected sel"),t.is(":disabled")&&(n="disabled"),t.is(":selected:disabled")&&(n="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(s=' id="'+t.attr("id")+o.idSuffix+'"'),void 0!==t.attr("title")&&""!==u.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(c=" "+t.attr("class"),f=' data-jqfs-class="'+t.attr("class")+'"');var h=t.data();for(var g in h)""!==h[g]&&(l+=" data-"+g+'="'+h[g]+'"');n+c!==""&&(r=' class="'+n+c+'"'),i="<li"+f+l+r+a+s+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(d=" "+t.parent().attr("class")),i="<li"+f+l+' class="'+n+c+" option"+d+'"'+a+s+">"+t.html()+"</li>",t.is(":first-child")&&(i='<li class="optgroup'+d+'">'+t.parent().attr("label")+"</li>"+i)),p+=i}}function c(){var s=new t,c="",d=n.data("placeholder"),f=n.data("search"),h=n.data("search-limit"),g=n.data("search-not-found"),v=n.data("search-placeholder"),m=n.data("z-index"),y=n.data("smart-positioning");void 0===d&&(d=o.selectPlaceholder),void 0!==f&&""!==f||(f=o.selectSearch),void 0!==h&&""!==h||(h=o.selectSearchLimit),void 0!==g&&""!==g||(g=o.selectSearchNotFound),void 0===v&&(v=o.selectSearchPlaceholder),void 0!==m&&""!==m||(m=o.singleSelectzIndex),void 0!==y&&""!==y||(y=o.selectSmartPositioning);var b=e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:m}).attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);n.css({margin:0,padding:0}).after(b).prependTo(b);var w=e("div.jq-selectbox__select",b),x=e("div.jq-selectbox__select-text",b),k=u.filter(":selected");l(),f&&(c='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+v+'"></div><div class="jq-selectbox__not-found">'+g+"</div>");var T=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+c+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+p+"</ul></div>");b.append(T);var C=e("ul",T),S=e("li",T),$=e("input",T),j=e("div.jq-selectbox__not-found",T).hide();S.length<h&&$.parent().hide(),""===u.first().text()&&u.first().is(":selected")?x.text(d).addClass("placeholder"):x.text(k.text());var E=0,A=0;if(S.css({display:"inline-block"}),S.each(function(){var t=e(this);t.innerWidth()>E&&(E=t.innerWidth(),A=t.width())}),S.css({display:""}),x.is(".placeholder")&&x.width()>E)x.width(x.width());else{var N=b.clone().appendTo("body").width("auto"),H=N.outerWidth();N.remove(),H==b.outerWidth()&&x.width(A)}E>b.width()&&T.width(E),""===u.first().text()&&""!==n.data("placeholder")&&S.first().hide(),n.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var L=b.outerHeight(!0),D=$.parent().outerHeight(!0),O=C.css("max-height"),_=S.filter(".selected");_.length<1&&S.first().addClass("selected sel"),void 0===S.data("li-height")&&S.data("li-height",S.outerHeight());var P=T.css("top");if("auto"==T.css("left")&&T.css({left:0}),"auto"==T.css("top")&&(T.css({top:L}),P=L),T.hide(),_.length&&(u.first().text()!=k.text()&&b.addClass("changed"),b.data("jqfs-class",_.data("jqfs-class")),b.addClass(_.data("jqfs-class"))),n.is(":disabled"))return b.addClass("disabled"),!1;w.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&o.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),n.focus(),!r){var t=e(window),i=S.data("li-height"),s=b.offset().top,l=t.height()-L-(s-t.scrollTop()),c=n.data("visible-options");void 0!==c&&""!==c||(c=o.selectVisibleOptions);var d=5*i,p=i*c;c>0&&6>c&&(d=p),0===c&&(p="auto");var f=function(){T.height("auto").css({bottom:"auto",top:P});var e=function(){C.css("max-height",Math.floor((l-20-D)/i)*i)};e(),C.css("max-height",p),"none"!=O&&C.css("max-height",O),l<T.outerHeight()+20&&e()},h=function(){T.height("auto").css({top:"auto",bottom:P});var e=function(){C.css("max-height",Math.floor((s-t.scrollTop()-20-D)/i)*i)};e(),C.css("max-height",p),"none"!=O&&C.css("max-height",O),s-t.scrollTop()-20<T.outerHeight()+20&&e()};!0===y||1===y?l>d+D+20?(f(),b.removeClass("dropup").addClass("dropdown")):(h(),b.removeClass("dropdown").addClass("dropup")):!1!==y&&0!==y||l>d+D+20&&(f(),b.removeClass("dropup").addClass("dropdown")),b.offset().left+T.outerWidth()>t.width()&&T.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:m-1}).removeClass("opened"),b.css({zIndex:m}),T.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),T.show(),b.addClass("opened focused"),o.onSelectOpened.call(b)):(T.hide(),b.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&o.onSelectClosed.call(b)),$.length&&($.val("").keyup(),j.hide(),$.keyup(function(){var t=e(this).val();S.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===u.first().text()&&""!==n.data("placeholder")&&S.first().hide(),S.filter(":visible").length<1?j.show():j.hide()})),S.filter(".selected").length&&(""===n.val()?C.scrollTop(0):(C.innerHeight()/i%2!=0&&(i/=2),C.scrollTop(C.scrollTop()+S.filter(".selected").position().top-C.innerHeight()/2+i))),a(C)}}),S.hover(function(){e(this).siblings().removeClass("selected")});var M=S.filter(".selected").text();S.filter(":not(.disabled):not(.optgroup)").click(function(){n.focus();var t=e(this),i=t.text();if(!t.is(".selected")){var r=t.index();r-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),u.prop("selected",!1).eq(r).prop("selected",!0),M=i,x.text(i),b.data("jqfs-class")&&b.removeClass(b.data("jqfs-class")),b.data("jqfs-class",t.data("jqfs-class")),b.addClass(t.data("jqfs-class")),n.change()}T.hide(),b.removeClass("opened dropup dropdown"),o.onSelectClosed.call(b)}),T.mouseout(function(){e("li.sel",T).addClass("selected")}),n.on("change.styler",function(){x.text(u.filter(":selected").text()).removeClass("placeholder"),S.removeClass("selected sel").not(".optgroup").eq(n[0].selectedIndex).addClass("selected sel"),u.first().text()!=S.filter(".selected").text()?b.addClass("changed"):b.removeClass("changed")}).on("focus.styler",function(){b.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){b.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=S.data("li-height");""===n.val()?x.text(d).addClass("placeholder"):x.text(u.filter(":selected").text()),S.removeClass("selected sel").not(".optgroup").eq(n[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===n.val()?C.scrollTop(0):C.scrollTop(C.scrollTop()+S.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||C.scrollTop(C.scrollTop()+S.filter(".selected").position().top-C.innerHeight()+t),13==e.which&&(e.preventDefault(),T.hide(),b.removeClass("opened dropup dropdown"),o.onSelectClosed.call(b))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),w.click())}),i.registered||(e(document).on("click",i),i.registered=!0)}function d(){var i=new t,o=e('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:i.id,title:i.title}).addClass(i.classes).data(i.data);n.css({margin:0,padding:0}).after(o),l(),o.append("<ul>"+p+"</ul>");var r=e("ul",o).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),s=e("li",o).attr("unselectable","on"),c=n.attr("size"),d=r.outerHeight(),f=s.outerHeight();void 0!==c&&c>0?r.css({height:f*c}):r.css({height:4*f}),d>o.height()&&(r.css("overflowY","scroll"),a(r),s.filter(".selected").length&&r.scrollTop(r.scrollTop()+s.filter(".selected").position().top)),n.prependTo(o).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),n.is(":disabled")?(o.addClass("disabled"),u.each(function(){e(this).is(":selected")&&s.eq(e(this).index()).addClass("selected")})):(s.filter(":not(.disabled):not(.optgroup)").click(function(t){n.focus();var i=e(this);if(t.ctrlKey||t.metaKey||i.addClass("selected"),t.shiftKey||i.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||i.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(i.is(".selected")?i.removeClass("selected first"):i.addClass("selected first"),i.siblings().removeClass("first")),t.shiftKey){var o=!1,r=!1;i.siblings().removeClass("selected").siblings(".first").addClass("selected"),i.prevAll().each(function(){e(this).is(".first")&&(o=!0)}),i.nextAll().each(function(){e(this).is(".first")&&(r=!0)}),o&&i.prevAll().each(function(){return!e(this).is(".selected")&&void e(this).not(".disabled, .optgroup").addClass("selected")}),r&&i.nextAll().each(function(){return!e(this).is(".selected")&&void e(this).not(".disabled, .optgroup").addClass("selected")}),1==s.filter(".selected").length&&i.addClass("first")}u.prop("selected",!1),s.filter(".selected").each(function(){var t=e(this),i=t.index();t.is(".option")&&(i-=t.prevAll(".optgroup").length),u.eq(i).prop("selected",!0)}),n.change()}),u.each(function(t){e(this).data("optionIndex",t)}),n.on("change.styler",function(){s.removeClass("selected");var t=[];u.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),s.not(".optgroup").filter(function(i){return e.inArray(i,t)>-1}).addClass("selected")}).on("focus.styler",function(){o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")}),d>o.height()&&n.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||r.scrollTop(r.scrollTop()+s.filter(".selected").position().top-f),40!=e.which&&39!=e.which&&34!=e.which||r.scrollTop(r.scrollTop()+s.filter(".selected:last").position().top-r.innerHeight()+2*f)}))}var u=e("option",n),p="";if(n.is("[multiple]")){if(s||r)return;d()}else c()};u(),n.on("refresh",function(){n.off(".styler").parent().before(n).remove(),u()})}else n.is(":reset")&&n.on("click",function(){setTimeout(function(){n.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+n).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+n).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+n).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[n]=function(i){var o=arguments;if(void 0===i||"object"==typeof i)return this.each(function(){e.data(this,"_"+n)||e.data(this,"_"+n,new t(this,i))}).promise().done(function(){var t=e(this[0]).data("_"+n);t&&t.options.onFormStyled.call()}),this;if("string"==typeof i&&"_"!==i[0]&&"init"!==i){var r;return this.each(function(){var s=e.data(this,"_"+n);s instanceof t&&"function"==typeof s[i]&&(r=s[i].apply(s,Array.prototype.slice.call(o,1)))}),void 0!==r?r:this}},i.registered=!1}),function(e,t,i,n){var o=i("html"),r=i(e),s=i(t),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==n,u=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},f=function(e){return p(e)&&0<e.indexOf("%")},h=function(e,t){var i=parseInt(e,10)||0;return t&&f(e)&&(i*=a.getViewport()[t]/100),Math.ceil(i)},g=function(e,t){return h(e,t)+"px"};i.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(i.isPlainObject(t)||(t={}),!1!==a.close(!0)))return i.isArray(e)||(e=u(e)?i(e).get():[e]),i.each(e,function(o,r){var s,l,c,d,f,h={};"object"===i.type(r)&&(r.nodeType&&(r=i(r)),u(r)?(h={href:r.data("fancybox-href")||r.attr("href"),title:r.data("fancybox-title")||r.attr("title"),isDom:!0,element:r},i.metadata&&i.extend(!0,h,r.metadata())):h=r),s=t.href||h.href||(p(r)?r:null),l=t.title!==n?t.title:h.title||"",d=(c=t.content||h.content)?"html":t.type||h.type,!d&&h.isDom&&((d=r.data("fancybox-type"))||(d=(d=r.prop("class").match(/fancybox\.(\w+)/))?d[1]:null)),p(s)&&(d||(a.isImage(s)?d="image":a.isSWF(s)?d="swf":"#"===s.charAt(0)?d="inline":p(r)&&(d="html",c=r)),"ajax"===d&&(f=s.split(/\s+/,2),s=f.shift(),f=f.shift())),c||("inline"===d?s?c=i(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):h.isDom&&(c=r):"html"===d?c=s:!d&&!s&&h.isDom&&(d="inline",c=r)),i.extend(h,{href:s,type:d,content:c,title:l,selector:f}),e[o]=h}),a.opts=i.extend(!0,{},a.defaults,t),t.keys!==n&&(a.opts.keys=!!t.keys&&i.extend({},a.defaults.keys,t.keys)),a.group=e,a._start(a.opts.index)},cancel:function(){var e=a.coming;e&&!1!==a.trigger("onCancel")&&(a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(e))},close:function(e){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&!0!==e?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(a.player.timer)},i=function(){t(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},n=function(){t(),s.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")};!0===e||!a.player.isActive&&!1!==e?a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,s.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":t}),i(),a.trigger("onPlayStart")):n()},next:function(e){var t=a.current;t&&(p(e)||(e=t.direction.next),a.jumpto(t.index+1,e,"next"))},prev:function(e){var t=a.current;t&&(p(e)||(e=t.direction.prev),a.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=a.current;o&&(e=h(e),a.direction=t||o.direction[e>=o.index?"next":"prev"],a.router=i||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(a.cancel(),a._start(e)))},reposition:function(e,t){var n,o=a.current,r=o?o.wrap:null;r&&(n=a._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.stop(!0,!0).animate(n,200)):(r.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(c),c=null),a.isOpen&&!c&&(c=setTimeout(function(){var n=a.current;n&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&a._setDimension(),"scroll"===t&&n.canShrink||a.reposition(e),a.trigger("onUpdate"),c=null)},i&&!d?0:300))},toggle:function(e){a.isOpen&&(a.current.fitToView="boolean"===i.type(e)?e:!a.current.fitToView,d&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){s.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;a.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"),s.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),a.cancel())}),a.defaults.fixed||(t=a.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=a.current&&a.current.locked||!1,i={x:r.scrollLeft(),y:r.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=d&&e.innerWidth?e.innerWidth:r.width(),i.h=d&&e.innerHeight?e.innerHeight:r.height()),i},unbindEvents:function(){a.wrap&&u(a.wrap)&&a.wrap.unbind(".fb"),s.unbind(".fb"),r.unbind(".fb")},bindEvents:function(){var e,t=a.current;t&&(r.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),a.update),(e=t.keys)&&s.bind("keydown.fb",function(o){var r=o.which||o.keyCode,s=o.target||o.srcElement;if(27===r&&a.coming)return!1;!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!o.metaKey&&(!s||!s.type&&!i(s).is("[contenteditable]"))&&i.each(e,function(e,s){return 1<t.group.length&&s[r]!==n?(a[e](s[r]),o.preventDefault(),!1):-1<i.inArray(r,s)?(a[e](),o.preventDefault(),!1):void 0})}),i.fn.mousewheel&&t.mouseWheel&&a.wrap.bind("mousewheel.fb",function(e,n,o,r){for(var s=i(e.target||null),l=!1;s.length&&!l&&!s.is(".fancybox-skin")&&!s.is(".fancybox-wrap");)l=s[0]&&!(s[0].style.overflow&&"hidden"===s[0].style.overflow)&&(s[0].clientWidth&&s[0].scrollWidth>s[0].clientWidth||s[0].clientHeight&&s[0].scrollHeight>s[0].clientHeight),s=i(s).parent();0!==n&&!l&&1<a.group.length&&!t.canShrink&&(0<r||0<o?a.prev(0<r?"down":"left"):(0>r||0>o)&&a.next(0>r?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||a.coming||a.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),!1===n)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&a.helpers[t]&&i.isFunction(a.helpers[t][e])&&a.helpers[t][e](i.extend(!0,{},a.helpers[t].defaults,n),o)}),s.trigger(e)}},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o={};if(e=h(e),!(t=a.group[e]||null))return!1;if(o=i.extend(!0,{},a.opts,t),t=o.margin,n=o.padding,"number"===i.type(t)&&(o.margin=[t,t,t,t]),"number"===i.type(n)&&(o.padding=[n,n,n,n]),o.modal&&i.extend(!0,o,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),o.autoSize&&(o.autoWidth=o.autoHeight=!0),"auto"===o.width&&(o.autoWidth=!0),"auto"===o.height&&(o.autoHeight=!0),o.group=a.group,o.index=e,a.coming=o,!1===a.trigger("beforeLoad"))a.coming=null;else{if(n=o.type,t=o.href,!n)return a.coming=null,!(!a.current||!a.router||"jumpto"===a.router)&&(a.current.index=e,a[a.router](a.direction));if(a.isActive=!0,"image"!==n&&"swf"!==n||(o.autoHeight=o.autoWidth=!1,o.scrolling="visible"),"image"===n&&(o.aspectRatio=!0),"iframe"===n&&d&&(o.scrolling="scroll"),o.wrap=i(o.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+n+" fancybox-tmp "+o.wrapCSS).appendTo(o.parent||"body"),i.extend(o,{skin:i(".fancybox-skin",o.wrap),outer:i(".fancybox-outer",o.wrap),inner:i(".fancybox-inner",o.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){o.skin.css("padding"+t,g(o.padding[e]))}),a.trigger("onReady"),"inline"===n||"html"===n){if(!o.content||!o.content.length)return a._error("content")}else if(!t)return a._error("href");"image"===n?a._loadImage():"ajax"===n?a._loadAjax():"iframe"===n?a._loadIframe():a._afterLoad()}},_error:function(e){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var e=a.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,a._error("image")},e.src=a.coming.href,!0!==e.complete&&a.showLoading()},_loadAjax:function(){var e=a.coming;a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){a.coming&&"abort"!==t?a._error("ajax",e):a.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,a._afterLoad())}}))},_loadIframe:function(){var e=a.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(a.showLoading(),t.one("load",function(){i(this).data("ready",1),d||i(this).bind("load.fb",a.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||a._afterLoad()},_preloadImages:function(){var e,t,i=a.group,n=a.current,o=i.length,r=n.preload?Math.min(n.preload,o-1):0;for(t=1;t<=r;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,r,s=a.coming,l=a.current;if(a.hideLoading(),s&&!1!==a.isActive)if(!1===a.trigger("afterLoad",s,l))s.wrap.stop(!0).trigger("onReset").remove(),a.coming=null;else{switch(l&&(a.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),e=s.content,t=s.type,n=s.scrolling,i.extend(a,{wrap:s.wrap,skin:s.skin,outer:s.outer,inner:s.inner,current:s,previous:l}),o=s.href,t){case"inline":case"ajax":case"html":s.selector?e=i("<div>").html(e).find(s.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),s.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=s.tpl.image.replace("{href}",o);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+o+'"></param>',r="",i.each(s.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',r+=" "+t+'="'+i+'"'}),e+='<embed src="'+o+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}(!u(e)||!e.parent().is(s.inner))&&s.inner.append(e),a.trigger("beforeShow"),s.inner.css("overflow","yes"===n?"scroll":"no"===n?"hidden":n),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?l.prevMethod&&a.transitions[l.prevMethod]():i(".fancybox-wrap").not(s.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?s.nextMethod:s.openMethod](),a._preloadImages()}},_setDimension:function(){var e,t,n,o,r,s,l,c,d,u=a.getViewport(),p=0,v=!1,m=!1,v=a.wrap,y=a.skin,b=a.inner,w=a.current,m=w.width,x=w.height,k=w.minWidth,T=w.minHeight,C=w.maxWidth,S=w.maxHeight,$=w.scrolling,j=w.scrollOutside?w.scrollbarWidth:0,E=w.margin,A=h(E[1]+E[3]),N=h(E[0]+E[2]);if(v.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"),E=h(y.outerWidth(!0)-y.width()),e=h(y.outerHeight(!0)-y.height()),t=A+E,n=N+e,o=f(m)?(u.w-t)*h(m)/100:m,r=f(x)?(u.h-n)*h(x)/100:x,"iframe"===w.type){if(d=w.content,w.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(b.width(o).height(9999),s=d.contents().find("body"),j&&s.css("overflow-x","hidden"),r=s.outerHeight(!0))}catch(e){}}else(w.autoWidth||w.autoHeight)&&(b.addClass("fancybox-tmp"),w.autoWidth||b.width(o),w.autoHeight||b.height(r),w.autoWidth&&(o=b.width()),w.autoHeight&&(r=b.height()),b.removeClass("fancybox-tmp"));if(m=h(o),x=h(r),c=o/r,k=h(f(k)?h(k,"w")-t:k),C=h(f(C)?h(C,"w")-t:C),T=h(f(T)?h(T,"h")-n:T),S=h(f(S)?h(S,"h")-n:S),s=C,l=S,w.fitToView&&(C=Math.min(u.w-t,C),S=Math.min(u.h-n,S)),t=u.w-A,N=u.h-N,w.aspectRatio?(m>C&&(m=C,x=h(m/c)),x>S&&(x=S,m=h(x*c)),m<k&&(m=k,x=h(m/c)),x<T&&(x=T,m=h(x*c))):(m=Math.max(k,Math.min(m,C)),w.autoHeight&&"iframe"!==w.type&&(b.width(m),x=b.height()),x=Math.max(T,Math.min(x,S))),w.fitToView)if(b.width(m).height(x),v.width(m+E),u=v.width(),A=v.height(),w.aspectRatio)for(;(u>t||A>N)&&m>k&&x>T&&!(19<p++);)x=Math.max(T,Math.min(S,x-10)),m=h(x*c),m<k&&(m=k,x=h(m/c)),m>C&&(m=C,x=h(m/c)),b.width(m).height(x),v.width(m+E),u=v.width(),A=v.height();else m=Math.max(k,Math.min(m,m-(u-t))),x=Math.max(T,Math.min(x,x-(A-N)));j&&"auto"===$&&x<r&&m+E+j<t&&(m+=j),b.width(m).height(x),v.width(m+E),u=v.width(),A=v.height(),v=(u>t||A>N)&&m>k&&x>T,m=w.aspectRatio?m<s&&x<l&&m<o&&x<r:(m<s||x<l)&&(m<o||x<r),i.extend(w,{dim:{width:g(u),height:g(A)},origWidth:o,origHeight:r,canShrink:v,canExpand:m,wPadding:E,hPadding:e,wrapSpace:A-y.outerHeight(!0),skinSpace:y.height()-x}),!d&&w.autoHeight&&x>T&&x<S&&!m&&b.height("auto")},_getPosition:function(e){var t=a.current,i=a.getViewport(),n=t.margin,o=a.wrap.width()+n[1]+n[3],r=a.wrap.height()+n[0]+n[2],n={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&r<=i.h&&o<=i.w?n.position="fixed":t.locked||(n.top+=i.y,n.left+=i.x),n.top=g(Math.max(n.top,n.top+(i.h-r)*t.topRatio)),n.left=g(Math.max(n.left,n.left+(i.w-o)*t.leftRatio)),n},_afterZoomIn:function(){var e=a.current;e&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened"),a.update(),(e.closeClick||e.nextClick&&1<a.group.length)&&a.inner.css("cursor","pointer").bind("click.fb",function(t){!i(t.target).is("a")&&!i(t.target).parent().is("a")&&(t.preventDefault(),a[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(e){e.preventDefault(),a.close()}),e.arrows&&1<a.group.length&&((e.loop||0<e.index)&&i(e.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(e.loop||e.index<a.group.length-1)&&i(e.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),e.loop||e.index!==e.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play()):a.play(!1))},_afterZoomOut:function(e){e=e||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",e)}}),a.transitions={getOrigPosition:function(){var e=a.current,t=e.element,i=e.orig,n={},o=50,r=50,s=e.hPadding,l=e.wPadding,c=a.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),u(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),r=i.outerHeight())):(n.top=c.y+(c.h-r)*e.topRatio,n.left=c.x+(c.w-o)*e.leftRatio),("fixed"===a.wrap.css("position")||e.locked)&&(n.top-=c.y,n.left-=c.x),n={top:g(n.top-s*e.topRatio),left:g(n.left-l*e.leftRatio),width:g(o+l),height:g(r+s)}},step:function(e,t){var i,n,o=t.prop;n=a.current;var r=n.wrapSpace,s=n.skinSpace;"width"!==o&&"height"!==o||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),a.isClosing&&(i=1-i),n="width"===o?n.wPadding:n.hPadding,n=e-n,a.skin[o](h("width"===o?n:n-r*i)),a.inner[o](h("width"===o?n:n-r*i-s*i)))},zoomIn:function(){var e=a.current,t=e.pos,n=e.openEffect,o="elastic"===n,r=i.extend({opacity:1},t);delete r.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),a.wrap.css(t).animate(r,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var e=a.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),a.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var e,t=a.current,i=t.nextEffect,n=t.pos,o={opacity:1},r=a.direction;n.opacity=.1,"elastic"===i&&(e="down"===r||"up"===r?"top":"left","down"===r||"right"===r?(n[e]=g(h(n[e])-200),o[e]="+=200px"):(n[e]=g(h(n[e])+200),o[e]="-=200px")),"none"===i?a._afterZoomIn():a.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var e=a.previous,t=e.prevEffect,n={opacity:.1},o=a.direction;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"=200px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(a.coming?a.coming.parent:e.parent),this.fixed=!1,e.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(r.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){if(i(e.target).hasClass("fancybox-overlay"))return a.isActive?a.close():t.close(),!1}),this.overlay.css(e.css).show()},close:function(){var e,t;r.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),e=r.scrollTop(),t=r.scrollLeft(),this.el.removeClass("fancybox-lock"),r.scrollTop(e).scrollLeft(t)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),s.width()>e&&(i=s.width())):s.width()>r.width()&&(i=s.width()),this.overlay.width(i).height(s.height())},onReady:function(e,t){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(e),e.locked&&this.fixed&&t.fixed&&(n||(this.margin=s.height()>r.height()&&i("html").css("margin-right").replace("px","")),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var n,o;t.locked&&(!1!==this.margin&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=r.scrollTop(),o=r.scrollLeft(),this.el.addClass("fancybox-lock"),r.scrollTop(n).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!a.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=a.current,n=t.title,o=e.type;if(i.isFunction(n)&&(n=n.call(t.element,t)),p(n)&&""!==i.trim(n)){switch(t=i('<div class="fancybox-title fancybox-title-'+o+'-wrap">'+n+"</div>"),o){case"inside":o=a.skin;break;case"outside":o=a.wrap;break;case"over":o=a.inner;break;default:o=a.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(h(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](o)}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",r=function(r){var s,l,c=i(this).blur(),d=t;!r.ctrlKey&&!r.altKey&&!r.shiftKey&&!r.metaKey&&!c.is(".fancybox-wrap")&&(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),d=c.index(this)),e.index=d,!1!==a.open(c,e)&&r.preventDefault())};return e=e||{},t=e.index||0,o&&!1!==e.live?s.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",r):n.unbind("click.fb-start").bind("click.fb-start",r),this.filter("[data-fancybox-start=1]").trigger("click"),this},s.ready(function(){var t,r;if(i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t}),i.support.fixedPosition===n){t=i.support,r=i('<div style="position:fixed;top:20px;"></div>').appendTo("body");var s=20===r[0].offsetTop||15===r[0].offsetTop;r.remove(),t.fixedPosition=s}i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),o.addClass("fancybox-lock-test"),r=i(e).width(),o.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),window.jQuery&&function(e){if(!e.support.opacity&&!e.support.style)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}e.fn.rating=function(t){if(0==this.length)return this;if("string"==typeof arguments[0]){if(this.length>1){var i=arguments;return this.each(function(){e.fn.rating.apply(e(this),i)})}return e.fn.rating[arguments[0]].apply(this,e.makeArray(arguments).slice(1)||[]),this}var t=e.extend({},e.fn.rating.options,t||{});return e.fn.rating.calls++,this.not(".star-rating-applied").addClass("star-rating-applied").each(function(){var i,n=e(this),o=(this.name||"unnamed-rating").replace(/\[|\]/g,"_").replace(/^\_+|\_+$/g,""),r=e(this.form||document.body),s=r.data("rating");s&&s.call==e.fn.rating.calls||(s={count:0,call:e.fn.rating.calls});var a=s[o]||r.data("rating"+o);a&&(i=a.data("rating")),a&&i?i.count++:(i=e.extend({},t||{},(e.metadata?n.metadata():e.meta?n.data():null)||{},{count:0,stars:[],inputs:[]}),i.serial=s.count++,a=e('<span class="star-rating-control"/>'),n.before(a),a.addClass("rating-to-be-drawn"),(n.attr("disabled")||n.hasClass("disabled"))&&(i.readOnly=!0),n.hasClass("required")&&(i.required=!0),a.append(i.cancel=e('<div class="rating-cancel"><a title="'+i.cancel+'">'+i.cancelValue+"</a></div>").on("click",function(){e(this).rating("select")}).on("mouseover",function(){e(this).rating("drain"),e(this).addClass("star-rating-hover")}).on("mouseout",function(){e(this).rating("draw"),e(this).removeClass("star-rating-hover")}).data("rating",i)));var l=e('<div role="text" aria-label="'+this.title+'" class="star-rating rater-'+i.serial+'"><a title="'+(this.title||this.value)+'">'+this.value+"</a></div>");if(a.append(l),this.id&&l.attr("id",this.id),this.className&&l.addClass(this.className),i.half&&(i.split=2),"number"==typeof i.split&&i.split>0){var c=(e.fn.width?l.width():0)||i.starWidth,d=i.count%i.split,u=Math.floor(c/i.split);l.width(u).find("a").css({"margin-left":"-"+d*u+"px"})}i.readOnly?l.addClass("star-rating-readonly"):l.addClass("star-rating-live").on("click",function(){e(this).rating("select")}).on("mouseover",function(){e(this).rating("fill"),e(this).rating("focus")}).on("mouseout",function(){e(this).rating("draw"),e(this).rating("blur")}),this.checked&&(i.current=l),"A"==this.nodeName&&e(this).hasClass("selected")&&(i.current=l),n.hide(),n.on("change.rating",function(t){if(t.selfTriggered)return!1;e(this).rating("select")}),l.data("rating.input",n.data("rating.star",l)),i.stars[i.stars.length]=l[0],i.inputs[i.inputs.length]=n[0],i.rater=s[o]=a,i.context=r,n.data("rating",i),a.data("rating",i),l.data("rating",i),r.data("rating",s),r.data("rating"+o,a)}),e(".rating-to-be-drawn").rating("draw").removeClass("rating-to-be-drawn"),this},e.extend(e.fn.rating,{calls:0,focus:function(){var t=this.data("rating");if(!t)return this;if(!t.focus)return this;var i=e(this).data("rating.input")||e("INPUT"==this.tagName?this:null);t.focus&&t.focus.apply(i[0],[i.val(),e("a",i.data("rating.star"))[0]])},blur:function(){var t=this.data("rating");if(!t)return this;if(!t.blur)return this;var i=e(this).data("rating.input")||e("INPUT"==this.tagName?this:null);t.blur&&t.blur.apply(i[0],[i.val(),e("a",i.data("rating.star"))[0]])},fill:function(){var e=this.data("rating");if(!e)return this;e.readOnly||(this.rating("drain"),this.prevAll().addBack().filter(".rater-"+e.serial).addClass("star-rating-hover"))},drain:function(){var e=this.data("rating");if(!e)return this;e.readOnly||e.rater.children().filter(".rater-"+e.serial).removeClass("star-rating-on").removeClass("star-rating-hover")},draw:function(){var t=this.data("rating");if(!t)return this;this.rating("drain");var i=e(t.current),n=i.length?i.prevAll().addBack().filter(".rater-"+t.serial):null;n&&n.addClass("star-rating-on"),t.cancel[t.readOnly||t.required?"hide":"show"](),this.siblings()[t.readOnly?"addClass":"removeClass"]("star-rating-readonly")},select:function(t,i){var n=this.data("rating");if(!n)return this;if(!n.readOnly){if(n.current=null,void 0!==t||this.length>1){if("number"==typeof t)return e(n.stars[t]).rating("select",void 0,i);if("string"==typeof t)return e.each(n.stars,function(){e(this).data("rating.input").val()==t&&e(this).rating("select",void 0,i)}),this}else n.current="INPUT"==this[0].tagName?this.data("rating.star"):this.is(".rater-"+n.serial)?this:null;this.data("rating",n),this.rating("draw");var o=e(n.current?n.current.data("rating.input"):null),r=e(n.inputs).filter(":checked");return e(n.inputs).not(o).prop("checked",!1),o.prop("checked",!0),e(o.length?o:r).trigger({type:"change",selfTriggered:!0}),(i||void 0==i)&&n.callback&&n.callback.apply(o[0],[o.val(),e("a",n.current)[0]]),this}},readOnly:function(t,i){var n=this.data("rating");if(!n)return this;n.readOnly=!(!t&&void 0!=t),i?e(n.inputs).attr("disabled","disabled"):e(n.inputs).removeAttr("disabled"),this.data("rating",n),this.rating("draw")},disable:function(){this.rating("readOnly",!0,!0)},enable:function(){this.rating("readOnly",!1,!1)}}),e.fn.rating.options={cancel:"Cancel Rating",cancelValue:"",split:0,starWidth:16},e(function(){e("input[type=radio].star").rating()})}(jQuery),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,n){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,n,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=i++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var i=0;return t}(),t.prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,n){var o=this;if("boolean"==typeof i)n=i,i=null;else if(0>i||i>=o.slideCount)return!1;o.unload(),"number"==typeof i?0===i&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):n?e(t).insertBefore(o.$slides.eq(i)):e(t).insertAfter(o.$slides.eq(i)):!0===n?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var n={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,i):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,i):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),!1===o.options.vertical?(n[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(n)):(n[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(n))},complete:function(){i&&i.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?n[o.animType]="translate3d("+t+"px, 0px, 0px)":n[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(n),i&&setTimeout(function(){o.disableTransition(),i.call()},o.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this,n=i.getNavTarget();null!==n&&"object"==typeof n&&n.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};!1===t.options.fade?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,n=this;if(!0===n.options.dots&&n.slideCount>n.options.slidesToShow){for(n.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(n.options.dotsClass),t=0;t<=n.getDotCount();t+=1)i.append(e("<li />").append(n.options.customPaging.call(this,n,t)));n.$dots=i.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(!0===t.options.centerMode||!0===t.options.swipeToSlide)&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,n,o,r,s,a=this;if(n=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;o>e;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var d=e*s+(t*a.options.slidesPerRow+i);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}n.appendChild(l)}a.$slider.empty().append(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var n,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(n in s.breakpoints)s.breakpoints.hasOwnProperty(n)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[n]&&(o=s.breakpoints[n]):r>s.breakpoints[n]&&(o=s.breakpoints[n]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||i)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||!1===a||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,i){var n,o,r,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!=0,n=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":o=0===n?s.options.slidesToScroll:s.options.slidesToShow-n,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-o,!1,i);break;case"next":o=0===n?s.options.slidesToScroll:n,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+o,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i;if(t=this.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;!1===i.cssTransitions?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(i){i.stopImmediatePropagation();var n=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=n.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,n=0;if(!0===e.options.infinite)for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)n=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else n=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return n-1},t.prototype.getLeft=function(e){var t,i,n,o=this,r=0;return o.slideOffset=0,i=o.$slides.first().outerHeight(!0),!0===o.options.infinite?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,r=i*o.options.slidesToShow*-1),o.slideCount%o.options.slidesToScroll!=0&&e+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(e>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(e-o.slideCount))*o.slideWidth*-1,r=(o.options.slidesToShow-(e-o.slideCount))*i*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,r=o.slideCount%o.options.slidesToScroll*i*-1))):e+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(e+o.options.slidesToShow-o.slideCount)*o.slideWidth,r=(e+o.options.slidesToShow-o.slideCount)*i),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,r=0),!0===o.options.centerMode&&!0===o.options.infinite?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:!0===o.options.centerMode&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),t=!1===o.options.vertical?e*o.slideWidth*-1+o.slideOffset:e*i*-1+r,!0===o.options.variableWidth&&(n=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow),t=!0===o.options.rtl?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===o.options.centerMode&&(n=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow+1),t=!0===o.options.rtl?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,t+=(o.$list.width()-n.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,n=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(i=-1*t.options.slidesToScroll,n=-1*t.options.slidesToScroll,e=2*t.slideCount);e>i;)o.push(i),i=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,n=this;return i=!0===n.options.centerMode?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,!0===n.options.swipeToSlide?(n.$slideTrack.find(".slick-slide").each(function(o,r){return r.offsetLeft-i+e(r).outerWidth()/2>-1*n.swipeLeft?(t=r,!1):void 0}),Math.abs(e(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+i})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(i){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+i,id:"slick-slide"+t.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),n=document.createElement("img");n.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,i])})},n.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,i])},n.src=i})}var i,n,o,r,s=this;!0===s.options.centerMode?!0===s.options.infinite?(o=s.currentSlide+(s.options.slidesToShow/2+1),r=o+s.options.slidesToShow+2):(o=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),r=s.options.slidesToShow/2+1+2+s.currentSlide):(o=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,r=Math.ceil(o+s.options.slidesToShow),!0===s.options.fade&&(o>0&&o--,r<=s.slideCount&&r++)),i=s.$slider.find(".slick-slide").slice(o,r),t(i),s.slideCount<=s.options.slidesToShow?(n=s.$slider.find(".slick-slide"),t(n)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(n=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(n)):0===s.currentSlide&&(n=s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow),t(n))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&t.initADA())},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,n,o,r=this,s=e("img[data-lazy]",r.$slider);s.length?(i=s.first(),n=i.attr("data-lazy"),o=document.createElement("img"),o.onload=function(){i.attr("src",n).removeAttr("data-lazy").removeClass("slick-loading"),!0===r.options.adaptiveHeight&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,i,n]),r.progressiveLazyLoad()},o.onerror=function(){3>t?setTimeout(function(){r.progressiveLazyLoad(t+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,i,n]),r.progressiveLazyLoad())},o.src=n):r.$slider.trigger("allImagesLoaded",[r])},t.prototype.refresh=function(t){var i,n,o=this;n=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>n&&(o.currentSlide=n),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),i=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:i}),o.init(),t||o.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,n,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(t in r)if(n=o.breakpoints.length-1,i=r[t].breakpoint,r.hasOwnProperty(t)){for(;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===i&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(i),o.breakpointSettings[i]=r[t].settings}o.breakpoints.sort(function(e,t){return o.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var n=this;return"boolean"==typeof e?(t=e,e=!0===t?0:n.slideCount-1):e=!0===t?--e:e,!(n.slideCount<1||0>e||e>n.slideCount-1)&&(n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(e).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,void n.reinit())},t.prototype.setCSS=function(e){var t,i,n=this,o={};!0===n.options.rtl&&(e=-e),t="left"==n.positionProp?Math.ceil(e)+"px":"0px",i="top"==n.positionProp?Math.ceil(e)+"px":"0px",o[n.positionProp]=e,!1===n.transformsEnabled?n.$slideTrack.css(o):(o={},!1===n.cssTransitions?(o[n.animType]="translate("+t+", "+i+")",n.$slideTrack.css(o)):(o[n.animType]="translate3d("+t+", "+i+", 0px)",n.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(n,o){t=i.slideWidth*n*-1,!0===i.options.rtl?e(o).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,i,n,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(n=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(n=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[n]=o;else if("multiple"===r)e.each(n,function(e,t){s.options[e]=t});else if("responsive"===r)for(i in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[i]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[i].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[i])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.msTransition)&&!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,i,n,o,r=this;i=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode?(t=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(n=r.options.slidesToShow+e,i.slice(n-t+1,n+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&i.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=r.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,n=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?i.slice(n-(r.options.slidesToShow-o),n+o).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===r.options.lazyLoad&&r.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,n,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(i=null,o.slideCount>o.options.slidesToShow)){for(n=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-n;t-=1)i=t-1,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;n>t;t+=1)i=t,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,n=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(n.attr("data-slick-index"));return o||(o=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(o),void i.asNavFor(o)):void i.slideHandler(o)},t.prototype.slideHandler=function(e,t,i){var n,o,r,s,a,l=null,c=this;return t=t||!1,!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e||c.slideCount<=c.options.slidesToShow?void 0:(!1===t&&c.asNavFor(e),n=e,l=c.getLeft(n),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(0>e||e>c.getDotCount()*c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i?c.animateSlide(s,function(){c.postSlide(n)}):c.postSlide(n))):!1===c.options.infinite&&!0===c.options.centerMode&&(0>e||e>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i?c.animateSlide(s,function(){c.postSlide(n)}):c.postSlide(n))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=0>n?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+n:n>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:n-c.slideCount:n,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=c.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==i?(c.fadeSlideOut(r),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight()):void(!0!==i?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o))))},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,n,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(t,e),n=Math.round(180*i/Math.PI),0>n&&(n=360-Math.abs(n)),45>=n&&n>=0?!1===o.options.rtl?"left":"right":360>=n&&n>=315?!1===o.options.rtl?"left":"right":n>=135&&225>=n?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?n>=35&&135>=n?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,n=this;if(n.dragging=!1,n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),void 0===n.touchObject.curX)return!1;if(!0===n.touchObject.edgeHit&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(i=n.swipeDirection()){case"left":case"down":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1}"vertical"!=i&&(n.slideHandler(t),n.touchObject={},n.$slider.trigger("swipe",[n,i]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,n,o,r,s=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),!0===s.options.verticalSwiping&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),i=s.swipeDirection(),"vertical"!==i?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),o=(!1===s.options.rtl?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),!0===s.options.verticalSwiping&&(o=s.touchObject.curY>s.touchObject.startY?1:-1),n=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,!1===s.options.infinite&&(0===s.currentSlide&&"right"===i||s.currentSlide>=s.getDotCount()&&"left"===i)&&(n=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),!1===s.options.vertical?s.swipeLeft=t+n*o:s.swipeLeft=t+n*(s.$list.height()/s.listWidth)*o,!0===s.options.verticalSwiping&&(s.swipeLeft=t+n*o),!0!==s.options.fade&&!1!==s.options.touchMove&&(!0===s.animating?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,n=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=n.length;for(e=0;s>e;e++)if("object"==typeof o||void 0===o?n[e].slick=new t(n[e],o):i=n[e].slick[o].apply(n[e].slick,r),void 0!==i)return i;return n}});
$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    }
    ;
    $('body').removeClass('loaded');

    /*$('.product-list__img').each(function(){
     var imgProduct = $(this).find('img').attr('src');
     $(this).css({'background-image':'url('imgProduct')'})
     });*/


});
function viewport() {
    var e = window,
        a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
};
$(function () {

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    $('.js-link-open').click(function () {
        var dataTarget = $(this).attr('data-target');
        $('.js-link-open').removeClass('active')
        $(this).addClass('active')
        $('.block-pof').show();
        if ($(dataTarget).is(':visible')) {
            $(this).removeClass('active')
            $('.block-pof').hide();
        } else {

            $(this).addClass('active')
            $('.block-pof').show();
        }
        if ($(dataTarget).length) {
            $('.js-open-block:not(.js-open-block-noclose)').not(dataTarget).hide();
            $(dataTarget).toggle();

        }

        return false;
    });


    $('.block-pof').click(function () {
        $('.js-open-block').hide();
        $('.js-link-open').removeClass('active');
        $(this).hide();
    });

    $('.lang-list__link').click(function () {
        var flag = $(this).html();
        $('.nav-list__icon').html(flag);
        $('.block-pof').hide();
        $('.lang-list').hide();
    });

    $('.tabs li a').click(function () {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).parents('.tab-wrap').find('.tab-show-all .tab-more').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var tabClass = $(this).attr('data-tab');
        $("." + tabClass).removeClass('hide');
        $(this).parent().addClass('active');
        if ($('.js-hide-bg').hasClass('active')) {
            $('.content-wrap').removeClass('bg');
        } else if ($('.js-show-bg').hasClass('active')) {
            $('.content-wrap').addClass('bg');
        }
        $('.column').css('height', 'auto');
        var max_col_height = 0;
        $('.column').each(function () {
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.column').height(max_col_height);
        return false;
    });

    if ($('.styler').length) {
        $('.styler').styler();
    }

    if ($('.select2').length) {
        $('.select2').select2();
    }

    if ($('.select2-tags').length) {
        $('.select2-tags').select2({tags: true});
    }

    if ($('.js-date').length) {
        $(".js-date").datepicker({
            language: 'ru',
            dateFormat: "dd.mm.yy",
            yearRange: "-100:+0",
            firstDay: 1,
            changeMonth: true,
            changeYear: true
        });
    }

    // accordion
    $('.accordion__head').on('click', function () {
        var el = $(this);
        $(this).parents('.accordion-wrap').toggleClass('active');
        el.next('.accordion__body').slideToggle();
        el.toggleClass('open');
        return false;
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
    });

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

});
$('.header-top').append('<div class= "menu-btn"><span></span></div>');
var flagMenu = 0
$('.menu-btn').click(function () {
    if (flagMenu == 0) {
        $('.header-top').css('height', 'auto')
        $('.box-nav-list').slideDown()
        $('.menu-btn').addClass('btn-close')

        flagMenu = 1
    }
    else {
//		$('.header-top').css('height','45px')
        $('.box-nav-list').slideUp()
        $('.menu-btn').removeClass('btn-close')
        flagMenu = 0
    }
})

/*$('.navigation__title').click(function(){
 $(this).next('.navigation-list').slideToggle();
 })*/


var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    $('.content').css({/*'padding-bottom':height_footer+15, 'padding-top':height_header+10*/});
    var viewport_wid = viewport().width;
    if (viewport_wid >= 601) {
        var max_col_height = 0;
        $('.column').each(function () {
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.column').height(max_col_height);
    }


    if (viewport_wid >= 767) {
        $("header").removeClass("fixed");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("body").addClass("fixed-header");
                $("header").addClass("fixed");
                $('.nav-profile').slideUp();
            } else {
                $("body").removeClass("fixed-header");
                $("header").removeClass("fixed");
            }
            ;

        });
    }

    if ($('.slider-for').length) {
        $('.slider-for').slick("getSlick").refresh();
    }
    ;
    if ($('.slider-nav').length) {
        $('.slider-nav').slick("getSlick").refresh();
    }
    ;

    if ($('.js-hide-bg').hasClass('active')) {
        $('.content-wrap').removeClass('bg');
    } else if ($('.js-show-bg').hasClass('active')) {
        $('.content-wrap').addClass('bg');
    }


}
$(window).bind('load', handler);
$(window).bind('resize', handler);




/*! jQuery UI - v1.11.1+CommonJS - 2014-09-17
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if (typeof exports === "object") {
		// Node/CommonJS:
		factory(require("jquery"));

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));

!function(e){"use strict";function t(e,i,o){var a,n=document.createElement("img");return n.onerror=function(a){return t.onerror(n,a,e,i,o)},n.onload=function(a){return t.onload(n,a,e,i,o)},"string"==typeof e?(t.fetchBlob(e,function(i){i?(e=i,a=t.createObjectURL(e)):(a=e,o&&o.crossOrigin&&(n.crossOrigin=o.crossOrigin)),n.src=a},o),n):t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e)?(a=n._objectURL=t.createObjectURL(e),a?(n.src=a,n):t.readFile(e,function(e){var t=e.target;t&&t.result?n.src=t.result:i&&i(e)})):void 0}function i(e,i){!e._objectURL||i&&i.noRevoke||(t.revokeObjectURL(e._objectURL),delete e._objectURL)}var o=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.fetchBlob=function(e,t,i){t()},t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transform=function(e,t,i,o,a){i(e,a)},t.onerror=function(e,t,o,a,n){i(e,n),a&&a.call(e,t)},t.onload=function(e,o,a,n,r){i(e,r),n&&t.transform(e,r,n,a,{})},t.createObjectURL=function(e){return!!o&&o.createObjectURL(e)},t.revokeObjectURL=function(e){return!!o&&o.revokeObjectURL(e)},t.readFile=function(e,t,i){if(window.FileReader){var o=new FileReader;if(o.onload=o.onerror=t,i=i||"readAsDataURL",o[i])return o[i](e),o}return!1},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.loadImage=t}(window),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],e):e("object"==typeof module&&module.exports?require("./load-image"):window.loadImage)}(function(e){"use strict";var t=e.transform;e.transform=function(i,o,a,n,r){t.call(e,e.scale(i,o,r),o,a,n,r)},e.transformCoordinates=function(){},e.getTransformedOptions=function(e,t){var i,o,a,n,r=t.aspectRatio;if(!r)return t;i={};for(o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);return i.crop=!0,a=e.naturalWidth||e.width,n=e.naturalHeight||e.height,a/n>r?(i.maxWidth=n*r,i.maxHeight=n):(i.maxWidth=a,i.maxHeight=a/r),i},e.renderImageToCanvas=function(e,t,i,o,a,n,r,s,l,d){return e.getContext("2d").drawImage(t,i,o,a,n,r,s,l,d),e},e.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},e.scale=function(t,i,o){function a(){var e=Math.max((l||v)/v,(d||w)/w);e>1&&(v*=e,w*=e)}function n(){var e=Math.min((r||v)/v,(s||w)/w);e<1&&(v*=e,w*=e)}i=i||{};var r,s,l,d,c,u,f,g,h,m,p,S=document.createElement("canvas"),b=t.getContext||e.hasCanvasOption(i)&&S.getContext,x=t.naturalWidth||t.width,y=t.naturalHeight||t.height,v=x,w=y;if(b&&(i=e.getTransformedOptions(t,i,o),f=i.left||0,g=i.top||0,i.sourceWidth?(c=i.sourceWidth,void 0!==i.right&&void 0===i.left&&(f=x-c-i.right)):c=x-f-(i.right||0),i.sourceHeight?(u=i.sourceHeight,void 0!==i.bottom&&void 0===i.top&&(g=y-u-i.bottom)):u=y-g-(i.bottom||0),v=c,w=u),r=i.maxWidth,s=i.maxHeight,l=i.minWidth,d=i.minHeight,b&&r&&s&&i.crop?(v=r,w=s,p=c/u-r/s,p<0?(u=s*c/r,void 0===i.top&&void 0===i.bottom&&(g=(y-u)/2)):p>0&&(c=r*u/s,void 0===i.left&&void 0===i.right&&(f=(x-c)/2))):((i.contain||i.cover)&&(l=r=r||l,d=s=s||d),i.cover?(n(),a()):(a(),n())),b){if(h=i.pixelRatio,h>1&&(S.style.width=v+"px",S.style.height=w+"px",v*=h,w*=h,S.getContext("2d").scale(h,h)),m=i.downsamplingRatio,m>0&&m<1&&v<c&&w<u)for(;c*m>v;)S.width=c*m,S.height=u*m,e.renderImageToCanvas(S,t,f,g,c,u,0,0,S.width,S.height),f=0,g=0,c=S.width,u=S.height,t=document.createElement("canvas"),t.width=c,t.height=u,e.renderImageToCanvas(t,S,0,0,c,u,0,0,c,u);return S.width=v,S.height=w,e.transformCoordinates(S,i),e.renderImageToCanvas(S,t,f,g,c,u,0,0,v,w)}return t.width=v,t.height=w,t}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],e):e("object"==typeof module&&module.exports?require("./load-image"):window.loadImage)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,i,o,a){o=o||{},a=a||{};var n=this,r=o.maxMetaDataSize||262144,s=!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);!s&&e.readFile(e.blobSlice.call(t,0,r),function(t){if(t.target.error)return console.log(t.target.error),void i(a);var r,s,l,d,c=t.target.result,u=new DataView(c),f=2,g=u.byteLength-4,h=f;if(65496===u.getUint16(0)){for(;f<g&&(r=u.getUint16(f),r>=65504&&r<=65519||65534===r);){if(s=u.getUint16(f+2)+2,f+s>u.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(l=e.metaDataParsers.jpeg[r])for(d=0;d<l.length;d+=1)l[d].call(n,u,f,s,a,o);f+=s,h=f}!o.disableImageHead&&h>6&&(c.slice?a.imageHead=c.slice(0,h):a.imageHead=new Uint8Array(c).subarray(0,h))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(a)},"readAsArrayBuffer")||i(a)},e.hasMetaOption=function(e){return e&&e.meta};var i=e.transform;e.transform=function(t,o,a,n,r){e.hasMetaOption(o)?e.parseMetaData(n,function(r){i.call(e,t,o,a,n,r)},o,r):i.apply(e,arguments)}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-meta")):e(window.loadImage)}(function(e){"use strict";"fetch"in window&&"Request"in window&&(e.fetchBlob=function(t,i,o){return e.hasMetaOption(o)?fetch(new Request(t,o)).then(function(e){return e.blob()}).then(i).catch(function(e){console.log(e),i()}):void i()})}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-meta")):e(window.loadImage)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,i){var o,a,n;if(!i||t+i>e.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");for(o=[],a=0;a<i;a+=1)n=e.getUint8(t+a),o.push((n<16?"0":"")+n.toString(16));return"data:image/jpeg,%"+o.join("%")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,i,o,a,n,r){var s,l,d,c,u,f,g=e.exifTagTypes[a];if(!g)return void console.log("Invalid Exif data: Invalid tag type.");if(s=g.size*n,l=s>4?i+t.getUint32(o+8,r):o+8,l+s>t.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");if(1===n)return g.getValue(t,l,r);for(d=[],c=0;c<n;c+=1)d[c]=g.getValue(t,l+c*g.size,r);if(g.ascii){for(u="",c=0;c<d.length&&(f=d[c],"\0"!==f);c+=1)u+=f;return u}return d},e.parseExifTag=function(t,i,o,a,n){var r=t.getUint16(o,a);n.exif[r]=e.getExifValue(t,i,o,t.getUint16(o+2,a),t.getUint32(o+4,a),a)},e.parseExifTags=function(e,t,i,o,a){var n,r,s;if(i+6>e.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");if(n=e.getUint16(i,o),r=i+2+12*n,r+4>e.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");for(s=0;s<n;s+=1)this.parseExifTag(e,t,i+2+12*s,o,a);return e.getUint32(r,o)},e.parseExifData=function(t,i,o,a,n){if(!n.disableExif){var r,s,l,d=i+10;if(1165519206===t.getUint32(i+4)){if(d+8>t.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");if(0!==t.getUint16(i+8))return void console.log("Invalid Exif data: Missing byte alignment offset.");switch(t.getUint16(d)){case 18761:r=!0;break;case 19789:r=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}if(42!==t.getUint16(d+2,r))return void console.log("Invalid Exif data: Missing TIFF marker.");s=t.getUint32(d+4,r),a.exif=new e.ExifMap,s=e.parseExifTags(t,d,d+s,r,a),s&&!n.disableExifThumbnail&&(l={exif:{}},s=e.parseExifTags(t,d,d+s,r,l),l.exif[513]&&(a.exif.Thumbnail=e.getExifThumbnail(t,d+l.exif[513],l.exif[514]))),a.exif[34665]&&!n.disableExifSub&&e.parseExifTags(t,d,d+a.exif[34665],r,a),a.exif[34853]&&!n.disableExifGps&&e.parseExifTags(t,d,d+a.exif[34853],r,a)}}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-exif"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-exif")):e(window.loadImage)}(function(e){"use strict";e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,i=e.tags,o=e.map;for(t in i)i.hasOwnProperty(t)&&(o[i[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e],t&&(i[t]=this.getText(t)));return i}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-scale","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-scale"),require("./load-image-meta")):e(window.loadImage)}(function(e){"use strict";var t=e.hasCanvasOption,i=e.hasMetaOption,o=e.transformCoordinates,a=e.getTransformedOptions;e.hasCanvasOption=function(i){return!!i.orientation||t.call(e,i)},e.hasMetaOption=function(t){return t&&t.orientation===!0||i.call(e,t)},e.transformCoordinates=function(t,i){o.call(e,t,i);var a=t.getContext("2d"),n=t.width,r=t.height,s=t.style.width,l=t.style.height,d=i.orientation;if(d&&!(d>8))switch(d>4&&(t.width=r,t.height=n,t.style.width=l,t.style.height=s),d){case 2:a.translate(n,0),a.scale(-1,1);break;case 3:a.translate(n,r),a.rotate(Math.PI);break;case 4:a.translate(0,r),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-r);break;case 7:a.rotate(.5*Math.PI),a.translate(n,-r),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-n,0)}},e.getTransformedOptions=function(t,i,o){var n,r,s=a.call(e,t,i),l=s.orientation;if(l===!0&&o&&o.exif&&(l=o.exif.get("Orientation")),!l||l>8||1===l)return s;n={};for(r in s)s.hasOwnProperty(r)&&(n[r]=s[r]);switch(n.orientation=l,l){case 2:n.left=s.right,n.right=s.left;break;case 3:n.left=s.right,n.top=s.bottom,n.right=s.left,n.bottom=s.top;break;case 4:n.top=s.bottom,n.bottom=s.top;break;case 5:n.left=s.top,n.top=s.left,n.right=s.bottom,n.bottom=s.right;break;case 6:n.left=s.top,n.top=s.right,n.right=s.bottom,n.bottom=s.left;break;case 7:n.left=s.bottom,n.top=s.right,n.right=s.top,n.bottom=s.left;break;case 8:n.left=s.bottom,n.top=s.left,n.right=s.top,n.bottom=s.right}return n.orientation>4&&(n.maxWidth=s.maxHeight,n.maxHeight=s.maxWidth,n.minWidth=s.minHeight,n.minHeight=s.minWidth,n.sourceWidth=s.sourceHeight,n.sourceHeight=s.sourceWidth),n}});
//# sourceMappingURL=load-image.all.min.js.map
!function(t){"use strict";var e=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,o=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),n=o&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,i=(o||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,i,l,u,b,c,d,B,f;if(e=t.match(a),!e)throw new Error("invalid data URI");for(i=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),b=l?atob(u):decodeURIComponent(u),c=new ArrayBuffer(b.length),d=new Uint8Array(c),B=0;B<b.length;B+=1)d[B]=b.charCodeAt(B);return o?new Blob([n?d:c],{type:i}):(f=new r,f.append(c),f.getBlob(i))};t.HTMLCanvasElement&&!e.toBlob&&(e.mozGetAsFile?e.toBlob=function(t,o,n){t(n&&e.toDataURL&&i?i(this.toDataURL(o,n)):this.mozGetAsFile("blob",o))}:e.toDataURL&&i&&(e.toBlob=function(t,e,o){t(i(this.toDataURL(e,o)))})),"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof module&&module.exports?module.exports=i:t.dataURLtoBlob=i}(window);
//# sourceMappingURL=canvas-to-blob.min.js.map
/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*************************
 * Croppie
 * Copyright 2016
 * Foliotek
 * Version: 2.2.0
 *
 * Patched by Ivanov Alexey
 * Add orientation to method get
 *
 *************************/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}));
    }
}(this, function (exports) {

    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"==typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"==typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a},"undefined"!=typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    /* Utilities */
    function loadImage(src, imageEl) {
        var img = imageEl || new Image(),
            prom;

        if (img.src === src) {
            // If image source hasn't changed, return a promise that resolves immediately
            prom = new Promise(function (resolve, reject) {
                resolve(img);
            });
        } else {
            prom = new Promise(function (resolve, reject) {
                if (src.substring(0,4).toLowerCase() === 'http') {
                    img.setAttribute('crossOrigin', 'anonymous');
                }
                img.onload = function () {
                    setTimeout(function () {
                        resolve(img);
                    }, 1);
                };
            });

            img.src = src;
        }

        img.style.opacity = 0;

        return prom;
    }

    /* CSS Transform Prototype */
    var _TRANSLATE = 'translate3d',
        _TRANSLATE_SUFFIX = ', 0px';
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(_TRANSLATE.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img, cb) {
        if (!window.EXIF) {
            cb(0);
        }

        EXIF.getData(img, function () {
            var orientation = EXIF.getTag(this, 'Orientation');
            cb(orientation);
        });
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
            case 2:
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;

            case 3:
                ctx.translate(width, height);
                ctx.rotate(180*Math.PI/180);
                break;

            case 4:
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;

            case 5:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(90*Math.PI/180);
                ctx.scale(1, -1);
                break;

            case 6:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(90*Math.PI/180);
                ctx.translate(0, -height);
                break;

            case 7:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(-90*Math.PI/180);
                ctx.translate(-width, height);
                ctx.scale(1, -1);
                break;

            case 8:
                canvas.width = height;
                canvas.height = width;
                ctx.translate(0, width);
                ctx.rotate(-90*Math.PI/180);
                break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, canvas;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        // orientation
        self.orientation = 0;

        // Generating Markup
        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = self.elements.img;
        }

        addClass(boundary, 'cr-boundary');
        css(boundary, {
            width: self.options.boundary.width + 'px',
            height: self.options.boundary.height + 'px'
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        // Initialize drag & zoom
        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }
    }

    function _initRotationControls () {
        // TODO - Not a fan of these controls
        return;
        var self = this,
            wrap, btnLeft, btnRight, iLeft, iRight;

        wrap = document.createElement('div');
        self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
        self.elements.orientationBtnRight = btnRight = document.createElement('button');

        wrap.appendChild(btnLeft);
        wrap.appendChild(btnRight);

        iLeft = document.createElement('i');
        iRight = document.createElement('i');
        btnLeft.appendChild(iLeft);
        btnRight.appendChild(iRight);

        addClass(wrap, 'cr-rotate-controls');
        addClass(btnLeft, 'cr-rotate-l');
        addClass(btnRight, 'cr-rotate-r');

        self.elements.boundary.appendChild(wrap);

        btnLeft.addEventListener('click', function () {
            self.rotate(-90);
        });
        btnRight.addEventListener('click', function () {
            self.rotate(90);
        });
    }

    function _hasExif() {
        // todo - remove options.exif after deprecation
        return (this.options.enableExif || this.options.exif) && window.EXIF;
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            this.elements.zoomer.value = fix(v, 4);
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = 1;
        zoomer.style.display = self.options.showZoomer ? '' : 'none';

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + delta;

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview),
            transCss = {};

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.options.boundary.width / 2,
            centerFromBoundaryY = self.options.boundary.height / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint() {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        center.y = top / scale;
        center.x = left / scale;

        adj.y = (center.y - pc.y) * (1 - scale);
        adj.x = (center.x - pc.x) * (1 - scale);

        transform.x -= adj.x;
        transform.y -= adj.y;

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode == UP_ARROW || ev.keyCode == DOWN_ARROW)) {
                var zoom = 0.0;
                if (ev.keyCode == UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value, 10) + parseFloat(self.elements.zoomer.step, 10)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value, 10) - parseFloat(self.elements.zoomer.step, 10)
                }
                self.setZoom(zoom);
            }
            else if (ev.keyCode >= 37 && ev.keyCode <= 40) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            };

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                };
            };
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type == 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get(),
            ev;

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$) {
            self.$(self.element).trigger('update', data)
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            minZoom = 0,
            maxZoom = 1.5,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            zoomer = self.elements.zoomer,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self),
            imgData,
            vpData,
            boundaryData,
            minW,
            minH;

        if (!isVisible || self.data.bound) {
            // if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = img.getBoundingClientRect();
        vpData = self.elements.viewport.getBoundingClientRect();
        boundaryData = self.elements.boundary.getBoundingClientRect();
        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;

        if (self.options.enableZoom) {
            if (self.options.enforceBoundary) {
                minW = vpData.width / imgData.width;
                minH = vpData.height / imgData.height;
                minZoom = Math.max(minW, minH);
            }

            if (minZoom >= maxZoom) {
                maxZoom = minZoom + 1;
            }

            zoomer.min = fix(minZoom, 4);
            zoomer.max = fix(maxZoom, 4);
            initialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            _setZoomerVal.call(self, initialZoom);
            dispatchChange(zoomer);
        }

        self._currentZoom = transformReset.scale = initialZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _bindPoints(points) {
        if (points.length != 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
        // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d'),
            exif = _hasExif.call(self),
            customOrientation = self.options.enableOrientation && customOrientation;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        if (exif) {
            getExifOrientation(img, function (orientation) {
                drawCanvas(canvas, img, parseInt(orientation));
                if (customOrientation) {
                    drawCanvas(canvas, img, customOrientation);
                }
            });
        } else if (customOrientation) {
            drawCanvas(canvas, img, customOrientation);
        }
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getCanvasResult(img, data) {
        var points = data.points,
            left = points[0],
            top = points[1],
            width = (points[2] - points[0]),
            height = (points[3] - points[1]),
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            outWidth = width,
            outHeight = height;

        if (data.outputWidth && data.outputHeight) {
            outWidth = data.outputWidth;
            outHeight = data.outputHeight;
        }

        canvas.width = outWidth;
        canvas.height = outHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, outWidth, outHeight);
        }
        ctx.drawImage(img, left, top, width, height, 0, 0, outWidth, outHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(outWidth / 2, outHeight / 2, outWidth / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas.toDataURL(data.format, data.quality);
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [];

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) == 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.points = (points || self.data.points).map(function (p) {
            return parseFloat(p);
        });
        var prom = loadImage(url, self.elements.img);
        prom.then(function () {
            if (self.options.useCanvas) {
                self.elements.img.exifdata = null;
                _transferImageToCanvas.call(self, options.orientation || 1);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            if (cb) {
                cb();
            }
        });
        return prom;
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            x2 = x1 + vpData.width,
            y2 = y1 + vpData.height,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(RESULT_DEFAULTS, deepExtend({}, options)),
            type = (typeof (options) === 'string' ? options : (opts.type || 'viewport')),
            size = opts.size,
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve, reject) {
            if (type === 'canvas') {
                resolve(_getCanvasResult.call(self, self.elements.preview, data));
            }
            else {
                resolve(_getHtmlResult.call(self, data));
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas) {
            throw 'Croppie: Cannot rotate without enableOrientation';
        }

        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            copy = document.createElement('canvas'),
            ornt = 1;

        copy.width = canvas.width;
        copy.height = canvas.height;
        var ctx = copy.getContext('2d');
        ctx.drawImage(canvas, 0, 0);

        if (deg === 90 || deg === -270) ornt = 6;
        if (deg === -90 || deg === 270) ornt = 8;
        if (deg === 180 || deg === -180) ornt = 3;

        self.orientation++;
        if(self.orientation == 4 || self.orientation == -4){
            self.orientation = 0;
        }

        drawCanvas(canvas, copy, ornt);
        _onZoom.call(self);
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        this.element = element;
        this.options = deepExtend(deepExtend({}, Croppie.defaults), opts);

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: {
            width: 300,
            height: 300
        },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        update: function () { }
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            return _get.call(this);
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });

    exports.Croppie = window.Croppie = Croppie;

    if (typeof module === 'object' && !!module.exports) {
        module.exports = Croppie;
    }
}));
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

/*! jQuery UI - v1.12.1 - 2017-02-28
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/datepicker.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.ui = $.ui || {};

var version = $.ui.version = "1.12.1";


/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

var widget = $.widget;


/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


( function() {
var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[ 0 ];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div " +
				"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
				"<div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[ 0 ];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[ 0 ].clientWidth;
		}

		div.remove();

		return ( cachedScrollbarWidth = w1 - w2 );
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[ 0 ] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
			hasOffset = !isWindow && !isDocument;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: withinElement.outerWidth(),
			height: withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// Make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[ 0 ].preventDefault ) {

		// Force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;

	// Clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// Force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1 ) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// Calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// Reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	} );

	// Normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each( function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
				scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
				scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				} );
			}
		} );

		if ( options.using ) {

			// Adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	} );
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// Element is wider than within
			if ( data.collisionWidth > outerWidth ) {

				// Element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
						withinOffset;
					position.left += overLeft - newOverRight;

				// Element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;

				// Element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}

			// Too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;

			// Too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;

			// Adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// Element is taller than within
			if ( data.collisionHeight > outerHeight ) {

				// Element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
						withinOffset;
					position.top += overTop - newOverBottom;

				// Element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;

				// Element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}

			// Too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;

			// Too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;

			// Adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
					outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
					atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
					outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
					offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

} )();

var position = $.ui.position;


/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


var keycode = $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};


/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



var uniqueId = $.fn.extend( {
	uniqueId: ( function() {
		var uuid = 0;

		return function() {
			return this.each( function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			} );
		};
	} )(),

	removeUniqueId: function() {
		return this.each( function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		} );
	}
} );


// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css



$.extend( $.ui, { datepicker: { version: "1.12.1" } } );

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {

		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {

			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[ "" ] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: [ "January","February","March","April","May","June",
			"July","August","September","October","November","December" ], // Names of months for drop-down and formatting
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
		dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
		dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
		dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend( this._defaults, this.regional[ "" ] );
	this.regional.en = $.extend( true, {}, this.regional[ "" ] );
	this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
}

$.extend( Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function( settings ) {
		datepicker_extendRemove( this._defaults, settings || {} );
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function( target, settings ) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = ( nodeName === "div" || nodeName === "span" );
		if ( !target.id ) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst( $( target ), inline );
		inst.settings = $.extend( {}, settings || {} );
		if ( nodeName === "input" ) {
			this._connectDatepicker( target, inst );
		} else if ( inline ) {
			this._inlineDatepicker( target, inst );
		}
	},

	/* Create a new instance object. */
	_newInst: function( target, inline ) {
		var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
		return { id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: ( !inline ? this.dpDiv : // presentation div
			datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function( target, inst ) {
		var input = $( target );
		inst.append = $( [] );
		inst.trigger = $( [] );
		if ( input.hasClass( this.markerClassName ) ) {
			return;
		}
		this._attachments( input, inst );
		input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
			on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
		this._autoSize( inst );
		$.data( target, "datepicker", inst );

		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function( input, inst ) {
		var showOn, buttonText, buttonImage,
			appendText = this._get( inst, "appendText" ),
			isRTL = this._get( inst, "isRTL" );

		if ( inst.append ) {
			inst.append.remove();
		}
		if ( appendText ) {
			inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
			input[ isRTL ? "before" : "after" ]( inst.append );
		}

		input.off( "focus", this._showDatepicker );

		if ( inst.trigger ) {
			inst.trigger.remove();
		}

		showOn = this._get( inst, "showOn" );
		if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
			input.on( "focus", this._showDatepicker );
		}
		if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
			buttonText = this._get( inst, "buttonText" );
			buttonImage = this._get( inst, "buttonImage" );
			inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
				$( "<img/>" ).addClass( this._triggerClass ).
					attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
				$( "<button type='button'></button>" ).addClass( this._triggerClass ).
					html( !buttonImage ? buttonText : $( "<img/>" ).attr(
					{ src:buttonImage, alt:buttonText, title:buttonText } ) ) );
			input[ isRTL ? "before" : "after" ]( inst.trigger );
			inst.trigger.on( "click", function() {
				if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
					$.datepicker._hideDatepicker();
				} else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker( input[ 0 ] );
				} else {
					$.datepicker._showDatepicker( input[ 0 ] );
				}
				return false;
			} );
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function( inst ) {
		if ( this._get( inst, "autoSize" ) && !inst.inline ) {
			var findMax, max, maxI, i,
				date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
				dateFormat = this._get( inst, "dateFormat" );

			if ( dateFormat.match( /[DM]/ ) ) {
				findMax = function( names ) {
					max = 0;
					maxI = 0;
					for ( i = 0; i < names.length; i++ ) {
						if ( names[ i ].length > max ) {
							max = names[ i ].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
					"monthNames" : "monthNamesShort" ) ) ) );
				date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
					"dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
			}
			inst.input.attr( "size", this._formatDate( inst, date ).length );
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function( target, inst ) {
		var divSpan = $( target );
		if ( divSpan.hasClass( this.markerClassName ) ) {
			return;
		}
		divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
		$.data( target, "datepicker", inst );
		this._setDate( inst, this._getDefaultDate( inst ), true );
		this._updateDatepicker( inst );
		this._updateAlternate( inst );

		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}

		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function( input, date, onSelect, settings, pos ) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if ( !inst ) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $( "<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>" );
			this._dialogInput.on( "keydown", this._doKeyDown );
			$( "body" ).append( this._dialogInput );
			inst = this._dialogInst = this._newInst( this._dialogInput, false );
			inst.settings = {};
			$.data( this._dialogInput[ 0 ], "datepicker", inst );
		}
		datepicker_extendRemove( inst.settings, settings || {} );
		date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
		this._dialogInput.val( date );

		this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
		if ( !this._pos ) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
		}

		// Move input on screen for focus, but hidden behind dialog
		this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass( this._dialogClass );
		this._showDatepicker( this._dialogInput[ 0 ] );
		if ( $.blockUI ) {
			$.blockUI( this.dpDiv );
		}
		$.data( this._dialogInput[ 0 ], "datepicker", inst );
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function( target ) {
		var nodeName,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData( target, "datepicker" );
		if ( nodeName === "input" ) {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass( this.markerClassName ).
				off( "focus", this._showDatepicker ).
				off( "keydown", this._doKeyDown ).
				off( "keypress", this._doKeyPress ).
				off( "keyup", this._doKeyUp );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			$target.removeClass( this.markerClassName ).empty();
		}

		if ( datepicker_instActive === inst ) {
			datepicker_instActive = null;
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = false;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = false; } ).end().
				filter( "img" ).css( { opacity: "1.0", cursor: "" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().removeClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
				prop( "disabled", false );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = true;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = true; } ).end().
				filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().addClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
				prop( "disabled", true );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
		this._disabledInputs[ this._disabledInputs.length ] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function( target ) {
		if ( !target ) {
			return false;
		}
		for ( var i = 0; i < this._disabledInputs.length; i++ ) {
			if ( this._disabledInputs[ i ] === target ) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function( target ) {
		try {
			return $.data( target, "datepicker" );
		}
		catch ( err ) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function( target, name, value ) {
		var settings, date, minDate, maxDate,
			inst = this._getInst( target );

		if ( arguments.length === 2 && typeof name === "string" ) {
			return ( name === "defaults" ? $.extend( {}, $.datepicker._defaults ) :
				( inst ? ( name === "all" ? $.extend( {}, inst.settings ) :
				this._get( inst, name ) ) : null ) );
		}

		settings = name || {};
		if ( typeof name === "string" ) {
			settings = {};
			settings[ name ] = value;
		}

		if ( inst ) {
			if ( this._curInst === inst ) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker( target, true );
			minDate = this._getMinMaxDate( inst, "min" );
			maxDate = this._getMinMaxDate( inst, "max" );
			datepicker_extendRemove( inst.settings, settings );

			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
				inst.settings.minDate = this._formatDate( inst, minDate );
			}
			if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
				inst.settings.maxDate = this._formatDate( inst, maxDate );
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker( target );
				} else {
					this._enableDatepicker( target );
				}
			}
			this._attachments( $( target ), inst );
			this._autoSize( inst );
			this._setDate( inst, date );
			this._updateAlternate( inst );
			this._updateDatepicker( inst );
		}
	},

	// Change method deprecated
	_changeDatepicker: function( target, name, value ) {
		this._optionDatepicker( target, name, value );
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function( target ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._updateDatepicker( inst );
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function( target, date ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._setDate( inst, date );
			this._updateDatepicker( inst );
			this._updateAlternate( inst );
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function( target, noDefault ) {
		var inst = this._getInst( target );
		if ( inst && !inst.inline ) {
			this._setDateFromField( inst, noDefault );
		}
		return ( inst ? this._getDate( inst ) : null );
	},

	/* Handle keystrokes. */
	_doKeyDown: function( event ) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst( event.target ),
			handled = true,
			isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

		inst._keyEvent = true;
		if ( $.datepicker._datepickerShowing ) {
			switch ( event.keyCode ) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv );
						if ( sel[ 0 ] ) {
							$.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
						}

						onSelect = $.datepicker._get( inst, "onSelect" );
						if ( onSelect ) {
							dateStr = $.datepicker._formatDate( inst );

							// Trigger custom callback
							onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							-$.datepicker._get( inst, "stepBigMonths" ) :
							-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							+$.datepicker._get( inst, "stepBigMonths" ) :
							+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // next month/year on page down/+ ctrl
				case 35: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._clearDate( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._gotoToday( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// -1 day on ctrl or command +left
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								-$.datepicker._get( inst, "stepBigMonths" ) :
								-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +left on Mac
						break;
				case 38: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, -7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// +1 day on ctrl or command +right
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								+$.datepicker._get( inst, "stepBigMonths" ) :
								+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +right
						break;
				case 40: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, +7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker( this );
		} else {
			handled = false;
		}

		if ( handled ) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function( event ) {
		var chars, chr,
			inst = $.datepicker._getInst( event.target );

		if ( $.datepicker._get( inst, "constrainInput" ) ) {
			chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
			chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
			return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function( event ) {
		var date,
			inst = $.datepicker._getInst( event.target );

		if ( inst.input.val() !== inst.lastVal ) {
			try {
				date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
					( inst.input ? inst.input.val() : null ),
					$.datepicker._getFormatConfig( inst ) );

				if ( date ) { // only if valid
					$.datepicker._setDateFromField( inst );
					$.datepicker._updateAlternate( inst );
					$.datepicker._updateDatepicker( inst );
				}
			}
			catch ( err ) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function( input ) {
		input = input.target || input;
		if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
			input = $( "input", input.parentNode )[ 0 ];
		}

		if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst( input );
		if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
			$.datepicker._curInst.dpDiv.stop( true, true );
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
			}
		}

		beforeShow = $.datepicker._get( inst, "beforeShow" );
		beforeShowSettings = beforeShow ? beforeShow.apply( input, [ input, inst ] ) : {};
		if ( beforeShowSettings === false ) {
			return;
		}
		datepicker_extendRemove( inst.settings, beforeShowSettings );

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField( inst );

		if ( $.datepicker._inDialog ) { // hide cursor
			input.value = "";
		}
		if ( !$.datepicker._pos ) { // position below input
			$.datepicker._pos = $.datepicker._findPos( input );
			$.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$( input ).parents().each( function() {
			isFixed |= $( this ).css( "position" ) === "fixed";
			return !isFixed;
		} );

		offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
		$.datepicker._pos = null;

		//to avoid flashes on Firefox
		inst.dpDiv.empty();

		// determine sizing offscreen
		inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
		$.datepicker._updateDatepicker( inst );

		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset( inst, offset, isFixed );
		inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
			"static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
			left: offset.left + "px", top: offset.top + "px" } );

		if ( !inst.inline ) {
			showAnim = $.datepicker._get( inst, "showAnim" );
			duration = $.datepicker._get( inst, "duration" );
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
			} else {
				inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.trigger( "focus" );
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function( inst ) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append( this._generateHTML( inst ) );
		this._attachHandlers( inst );

		var origyearshtml,
			numMonths = this._getNumberOfMonths( inst ),
			cols = numMonths[ 1 ],
			width = 17,
			activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

		if ( activeCell.length > 0 ) {
			datepicker_handleMouseover.apply( activeCell.get( 0 ) );
		}

		inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
		if ( cols > 1 ) {
			inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
		}
		inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-multi" );
		inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-rtl" );

		if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.trigger( "focus" );
		}

		// Deffered render of the years select (to avoid flashes on Firefox)
		if ( inst.yearshtml ) {
			origyearshtml = inst.yearshtml;
			setTimeout( function() {

				//assure that inst.yearshtml didn't change.
				if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
					inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
				}
				origyearshtml = inst.yearshtml = null;
			}, 0 );
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function( inst, offset, isFixed ) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
			viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

		offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
		offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
		offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

		// Now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
			Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
		offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
			Math.abs( dpHeight + inputHeight ) : 0 );

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function( obj ) {
		var position,
			inst = this._getInst( obj ),
			isRTL = this._get( inst, "isRTL" );

		while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
			obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
		}

		position = $( obj ).offset();
		return [ position.left, position.top ];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function( input ) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
			return;
		}

		if ( this._datepickerShowing ) {
			showAnim = this._get( inst, "showAnim" );
			duration = this._get( inst, "duration" );
			postProcess = function() {
				$.datepicker._tidyDialog( inst );
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
			} else {
				inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
					( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
			}

			if ( !showAnim ) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get( inst, "onClose" );
			if ( onClose ) {
				onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
			}

			this._lastInput = null;
			if ( this._inDialog ) {
				this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
				if ( $.blockUI ) {
					$.unblockUI();
					$( "body" ).append( this.dpDiv );
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function( inst ) {
		inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function( event ) {
		if ( !$.datepicker._curInst ) {
			return;
		}

		var $target = $( event.target ),
			inst = $.datepicker._getInst( $target[ 0 ] );

		if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
				$target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
				!$target.hasClass( $.datepicker.markerClassName ) &&
				!$target.closest( "." + $.datepicker._triggerClass ).length &&
				$.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
			( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function( id, offset, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}
		this._adjustInstDate( inst, offset +
			( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
			period );
		this._updateDatepicker( inst );
	},

	/* Action for current link. */
	_gotoToday: function( id ) {
		var date,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange( inst );
		this._adjustDate( target );
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function( id, select, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
		inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
			parseInt( select.options[ select.selectedIndex ].value, 10 );

		this._notifyChange( inst );
		this._adjustDate( target );
	},

	/* Action for selecting a day. */
	_selectDay: function( id, month, year, td ) {
		var inst,
			target = $( id );

		if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}

		inst = this._getInst( target[ 0 ] );
		inst.selectedDay = inst.currentDay = $( "a", td ).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate( id, this._formatDate( inst,
			inst.currentDay, inst.currentMonth, inst.currentYear ) );
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function( id ) {
		var target = $( id );
		this._selectDate( target, "" );
	},

	/* Update the input field with the selected date. */
	_selectDate: function( id, dateStr ) {
		var onSelect,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
		if ( inst.input ) {
			inst.input.val( dateStr );
		}
		this._updateAlternate( inst );

		onSelect = this._get( inst, "onSelect" );
		if ( onSelect ) {
			onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
		} else if ( inst.input ) {
			inst.input.trigger( "change" ); // fire the change event
		}

		if ( inst.inline ) {
			this._updateDatepicker( inst );
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[ 0 ];
			if ( typeof( inst.input[ 0 ] ) !== "object" ) {
				inst.input.trigger( "focus" ); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function( inst ) {
		var altFormat, date, dateStr,
			altField = this._get( inst, "altField" );

		if ( altField ) { // update alternate field too
			altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
			date = this._getDate( inst );
			dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
			$( altField ).val( dateStr );
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function( date ) {
		var day = date.getDay();
		return [ ( day > 0 && day < 6 ), "" ];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function( date ) {
		var time,
			checkDate = new Date( date.getTime() );

		// Find Thursday of this week starting on Monday
		checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

		time = checkDate.getTime();
		checkDate.setMonth( 0 ); // Compare with Jan 1
		checkDate.setDate( 1 );
		return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function( format, value, settings ) {
		if ( format == null || value == null ) {
			throw "Invalid arguments";
		}

		value = ( typeof value === "object" ? value.toString() : value + "" );
		if ( value === "" ) {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
			shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Extract a number from the string value
			getNumber = function( match ) {
				var isDoubled = lookAhead( match ),
					size = ( match === "@" ? 14 : ( match === "!" ? 20 :
					( match === "y" && isDoubled ? 4 : ( match === "o" ? 3 : 2 ) ) ) ),
					minSize = ( match === "y" ? size : 1 ),
					digits = new RegExp( "^\\d{" + minSize + "," + size + "}" ),
					num = value.substring( iValue ).match( digits );
				if ( !num ) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[ 0 ].length;
				return parseInt( num[ 0 ], 10 );
			},

			// Extract a name from the string value and convert to an index
			getName = function( match, shortNames, longNames ) {
				var index = -1,
					names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
						return [ [ k, v ] ];
					} ).sort( function( a, b ) {
						return -( a[ 1 ].length - b[ 1 ].length );
					} );

				$.each( names, function( i, pair ) {
					var name = pair[ 1 ];
					if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
						index = pair[ 0 ];
						iValue += name.length;
						return false;
					}
				} );
				if ( index !== -1 ) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},

			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d":
						day = getNumber( "d" );
						break;
					case "D":
						getName( "D", dayNamesShort, dayNames );
						break;
					case "o":
						doy = getNumber( "o" );
						break;
					case "m":
						month = getNumber( "m" );
						break;
					case "M":
						month = getName( "M", monthNamesShort, monthNames );
						break;
					case "y":
						year = getNumber( "y" );
						break;
					case "@":
						date = new Date( getNumber( "@" ) );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if ( lookAhead( "'" ) ) {
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if ( iValue < value.length ) {
			extra = value.substr( iValue );
			if ( !/^\s+/.test( extra ) ) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if ( year === -1 ) {
			year = new Date().getFullYear();
		} else if ( year < 100 ) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				( year <= shortYearCutoff ? 0 : -100 );
		}

		if ( doy > -1 ) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth( year, month - 1 );
				if ( day <= dim ) {
					break;
				}
				month++;
				day -= dim;
			} while ( true );
		}

		date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
		if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
		Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function( format, date, settings ) {
		if ( !date ) {
			return "";
		}

		var iFormat,
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Format a number, with leading zero if necessary
			formatNumber = function( match, value, len ) {
				var num = "" + value;
				if ( lookAhead( match ) ) {
					while ( num.length < len ) {
						num = "0" + num;
					}
				}
				return num;
			},

			// Format a name, short or long as requested
			formatName = function( match, value, shortNames, longNames ) {
				return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
			},
			output = "",
			literal = false;

		if ( date ) {
			for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
				if ( literal ) {
					if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
						literal = false;
					} else {
						output += format.charAt( iFormat );
					}
				} else {
					switch ( format.charAt( iFormat ) ) {
						case "d":
							output += formatNumber( "d", date.getDate(), 2 );
							break;
						case "D":
							output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
							break;
						case "o":
							output += formatNumber( "o",
								Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
							break;
						case "m":
							output += formatNumber( "m", date.getMonth() + 1, 2 );
							break;
						case "M":
							output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
							break;
						case "y":
							output += ( lookAhead( "y" ) ? date.getFullYear() :
								( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if ( lookAhead( "'" ) ) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt( iFormat );
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function( format ) {
		var iFormat,
			chars = "",
			literal = false,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					chars += format.charAt( iFormat );
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if ( lookAhead( "'" ) ) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt( iFormat );
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function( inst, name ) {
		return inst.settings[ name ] !== undefined ?
			inst.settings[ name ] : this._defaults[ name ];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function( inst, noDefault ) {
		if ( inst.input.val() === inst.lastVal ) {
			return;
		}

		var dateFormat = this._get( inst, "dateFormat" ),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate( inst ),
			date = defaultDate,
			settings = this._getFormatConfig( inst );

		try {
			date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
		} catch ( event ) {
			dates = ( noDefault ? "" : dates );
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = ( dates ? date.getDate() : 0 );
		inst.currentMonth = ( dates ? date.getMonth() : 0 );
		inst.currentYear = ( dates ? date.getFullYear() : 0 );
		this._adjustInstDate( inst );
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function( inst ) {
		return this._restrictMinMax( inst,
			this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function( inst, date, defaultDate ) {
		var offsetNumeric = function( offset ) {
				var date = new Date();
				date.setDate( date.getDate() + offset );
				return date;
			},
			offsetString = function( offset ) {
				try {
					return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
						offset, $.datepicker._getFormatConfig( inst ) );
				}
				catch ( e ) {

					// Ignore
				}

				var date = ( offset.toLowerCase().match( /^c/ ) ?
					$.datepicker._getDate( inst ) : null ) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec( offset );

				while ( matches ) {
					switch ( matches[ 2 ] || "d" ) {
						case "d" : case "D" :
							day += parseInt( matches[ 1 ], 10 ); break;
						case "w" : case "W" :
							day += parseInt( matches[ 1 ], 10 ) * 7; break;
						case "m" : case "M" :
							month += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
						case "y": case "Y" :
							year += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
					}
					matches = pattern.exec( offset );
				}
				return new Date( year, month, day );
			},
			newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
				( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

		newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
		if ( newDate ) {
			newDate.setHours( 0 );
			newDate.setMinutes( 0 );
			newDate.setSeconds( 0 );
			newDate.setMilliseconds( 0 );
		}
		return this._daylightSavingAdjust( newDate );
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function( date ) {
		if ( !date ) {
			return null;
		}
		date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function( inst, date, noChange ) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
			this._notifyChange( inst );
		}
		this._adjustInstDate( inst );
		if ( inst.input ) {
			inst.input.val( clear ? "" : this._formatDate( inst ) );
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function( inst ) {
		var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
			this._daylightSavingAdjust( new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function( inst ) {
		var stepMonths = this._get( inst, "stepMonths" ),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find( "[data-handler]" ).map( function() {
			var handler = {
				prev: function() {
					$.datepicker._adjustDate( id, -stepMonths, "M" );
				},
				next: function() {
					$.datepicker._adjustDate( id, +stepMonths, "M" );
				},
				hide: function() {
					$.datepicker._hideDatepicker();
				},
				today: function() {
					$.datepicker._gotoToday( id );
				},
				selectDay: function() {
					$.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
					return false;
				},
				selectMonth: function() {
					$.datepicker._selectMonthYear( id, this, "M" );
					return false;
				},
				selectYear: function() {
					$.datepicker._selectMonthYear( id, this, "Y" );
					return false;
				}
			};
			$( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
		} );
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function( inst ) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
			isRTL = this._get( inst, "isRTL" ),
			showButtonPanel = this._get( inst, "showButtonPanel" ),
			hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
			navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
			numMonths = this._getNumberOfMonths( inst ),
			showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
			stepMonths = this._get( inst, "stepMonths" ),
			isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
			currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
				new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
			minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if ( drawMonth < 0 ) {
			drawMonth += 12;
			drawYear--;
		}
		if ( maxDate ) {
			maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
				maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
			maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
			while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
				drawMonth--;
				if ( drawMonth < 0 ) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get( inst, "prevText" );
		prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

		nextText = this._get( inst, "nextText" );
		nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

		currentText = this._get( inst, "currentText" );
		gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
		currentText = ( !navigationAsDateFormat ? currentText :
			this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

		controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get( inst, "closeText" ) + "</button>" : "" );

		buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
			( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

		firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
		firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

		showWeek = this._get( inst, "showWeek" );
		dayNames = this._get( inst, "dayNames" );
		dayNamesMin = this._get( inst, "dayNamesMin" );
		monthNames = this._get( inst, "monthNames" );
		monthNamesShort = this._get( inst, "monthNamesShort" );
		beforeShowDay = this._get( inst, "beforeShowDay" );
		showOtherMonths = this._get( inst, "showOtherMonths" );
		selectOtherMonths = this._get( inst, "selectOtherMonths" );
		defaultDate = this._getDefaultDate( inst );
		html = "";

		for ( row = 0; row < numMonths[ 0 ]; row++ ) {
			group = "";
			this.maxRows = 4;
			for ( col = 0; col < numMonths[ 1 ]; col++ ) {
				selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
				cornerClass = " ui-corner-all";
				calender = "";
				if ( isMultiMonth ) {
					calender += "<div class='ui-datepicker-group";
					if ( numMonths[ 1 ] > 1 ) {
						switch ( col ) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
							case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
					( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
					this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
				for ( dow = 0; dow < 7; dow++ ) { // days of the week
					day = ( dow + firstDay ) % 7;
					thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
						"<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
				if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
					inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
				}
				leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
				curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
				numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
				for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
					calender += "<tr>";
					tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
					for ( dow = 0; dow < 7; dow++ ) { // create date picker days
						daySettings = ( beforeShowDay ?
							beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
						otherMonth = ( printDate.getMonth() !== drawMonth );
						unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
							( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
						tbody += "<td class='" +
							( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
							( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
							( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
							( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "" ) + // highlight selected day
							( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
							( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
							( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
							( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
							( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g, "&#39;" ) + "'" : "" ) + // cell title
							( unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'" ) + ">" + // actions
							( otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							( unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							( printDate.getTime() === today.getTime() ? " ui-state-highlight" : "" ) +
							( printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "" ) + // highlight selected day
							( otherMonth ? " ui-priority-secondary" : "" ) + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>" ) ) + "</td>"; // display selectable date
						printDate.setDate( printDate.getDate() + 1 );
						printDate = this._daylightSavingAdjust( printDate );
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if ( drawMonth > 11 ) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + ( isMultiMonth ? "</div>" +
							( ( numMonths[ 0 ] > 0 && col === numMonths[ 1 ] - 1 ) ? "<div class='ui-datepicker-row-break'></div>" : "" ) : "" );
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function( inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort ) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get( inst, "changeMonth" ),
			changeYear = this._get( inst, "changeYear" ),
			showMonthAfterYear = this._get( inst, "showMonthAfterYear" ),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// Month selection
		if ( secondary || !changeMonth ) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
		} else {
			inMinYear = ( minDate && minDate.getFullYear() === drawYear );
			inMaxYear = ( maxDate && maxDate.getFullYear() === drawYear );
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++ ) {
				if ( ( !inMinYear || month >= minDate.getMonth() ) && ( !inMaxYear || month <= maxDate.getMonth() ) ) {
					monthHtml += "<option value='" + month + "'" +
						( month === drawMonth ? " selected='selected'" : "" ) +
						">" + monthNamesShort[ month ] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if ( !showMonthAfterYear ) {
			html += monthHtml + ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" );
		}

		// Year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if ( secondary || !changeYear ) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {

				// determine range of years to display
				years = this._get( inst, "yearRange" ).split( ":" );
				thisYear = new Date().getFullYear();
				determineYear = function( value ) {
					var year = ( value.match( /c[+\-].*/ ) ? drawYear + parseInt( value.substring( 1 ), 10 ) :
						( value.match( /[+\-].*/ ) ? thisYear + parseInt( value, 10 ) :
						parseInt( value, 10 ) ) );
					return ( isNaN( year ) ? thisYear : year );
				};
				year = determineYear( years[ 0 ] );
				endYear = Math.max( year, determineYear( years[ 1 ] || "" ) );
				year = ( minDate ? Math.max( year, minDate.getFullYear() ) : year );
				endYear = ( maxDate ? Math.min( endYear, maxDate.getFullYear() ) : endYear );
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for ( ; year <= endYear; year++ ) {
					inst.yearshtml += "<option value='" + year + "'" +
						( year === drawYear ? " selected='selected'" : "" ) +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get( inst, "yearSuffix" );
		if ( showMonthAfterYear ) {
			html += ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" ) + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function( inst, offset, period ) {
		var year = inst.selectedYear + ( period === "Y" ? offset : 0 ),
			month = inst.selectedMonth + ( period === "M" ? offset : 0 ),
			day = Math.min( inst.selectedDay, this._getDaysInMonth( year, month ) ) + ( period === "D" ? offset : 0 ),
			date = this._restrictMinMax( inst, this._daylightSavingAdjust( new Date( year, month, day ) ) );

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if ( period === "M" || period === "Y" ) {
			this._notifyChange( inst );
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function( inst, date ) {
		var minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			newDate = ( minDate && date < minDate ? minDate : date );
		return ( maxDate && newDate > maxDate ? maxDate : newDate );
	},

	/* Notify change of month/year. */
	_notifyChange: function( inst ) {
		var onChange = this._get( inst, "onChangeMonthYear" );
		if ( onChange ) {
			onChange.apply( ( inst.input ? inst.input[ 0 ] : null ),
				[ inst.selectedYear, inst.selectedMonth + 1, inst ] );
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function( inst ) {
		var numMonths = this._get( inst, "numberOfMonths" );
		return ( numMonths == null ? [ 1, 1 ] : ( typeof numMonths === "number" ? [ 1, numMonths ] : numMonths ) );
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function( inst, minMax ) {
		return this._determineDate( inst, this._get( inst, minMax + "Date" ), null );
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function( year, month ) {
		return 32 - this._daylightSavingAdjust( new Date( year, month, 32 ) ).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function( year, month ) {
		return new Date( year, month, 1 ).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function( inst, offset, curYear, curMonth ) {
		var numMonths = this._getNumberOfMonths( inst ),
			date = this._daylightSavingAdjust( new Date( curYear,
			curMonth + ( offset < 0 ? offset : numMonths[ 0 ] * numMonths[ 1 ] ), 1 ) );

		if ( offset < 0 ) {
			date.setDate( this._getDaysInMonth( date.getFullYear(), date.getMonth() ) );
		}
		return this._isInRange( inst, date );
	},

	/* Is the given date in the accepted range? */
	_isInRange: function( inst, date ) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			minYear = null,
			maxYear = null,
			years = this._get( inst, "yearRange" );
			if ( years ) {
				yearSplit = years.split( ":" );
				currentYear = new Date().getFullYear();
				minYear = parseInt( yearSplit[ 0 ], 10 );
				maxYear = parseInt( yearSplit[ 1 ], 10 );
				if ( yearSplit[ 0 ].match( /[+\-].*/ ) ) {
					minYear += currentYear;
				}
				if ( yearSplit[ 1 ].match( /[+\-].*/ ) ) {
					maxYear += currentYear;
				}
			}

		return ( ( !minDate || date.getTime() >= minDate.getTime() ) &&
			( !maxDate || date.getTime() <= maxDate.getTime() ) &&
			( !minYear || date.getFullYear() >= minYear ) &&
			( !maxYear || date.getFullYear() <= maxYear ) );
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function( inst ) {
		var shortYearCutoff = this._get( inst, "shortYearCutoff" );
		shortYearCutoff = ( typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt( shortYearCutoff, 10 ) );
		return { shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get( inst, "dayNamesShort" ), dayNames: this._get( inst, "dayNames" ),
			monthNamesShort: this._get( inst, "monthNamesShort" ), monthNames: this._get( inst, "monthNames" ) };
	},

	/* Format the given date for display. */
	_formatDate: function( inst, day, month, year ) {
		if ( !day ) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = ( day ? ( typeof day === "object" ? day :
			this._daylightSavingAdjust( new Date( year, month, day ) ) ) :
			this._daylightSavingAdjust( new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
		return this.formatDate( this._get( inst, "dateFormat" ), date, this._getFormatConfig( inst ) );
	}
} );

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover( dpDiv ) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.on( "mouseout", selector, function() {
			$( this ).removeClass( "ui-state-hover" );
			if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
				$( this ).removeClass( "ui-datepicker-prev-hover" );
			}
			if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
				$( this ).removeClass( "ui-datepicker-next-hover" );
			}
		} )
		.on( "mouseover", selector, datepicker_handleMouseover );
}

function datepicker_handleMouseover() {
	if ( !$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] : datepicker_instActive.input[ 0 ] ) ) {
		$( this ).parents( ".ui-datepicker-calendar" ).find( "a" ).removeClass( "ui-state-hover" );
		$( this ).addClass( "ui-state-hover" );
		if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
			$( this ).addClass( "ui-datepicker-prev-hover" );
		}
		if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
			$( this ).addClass( "ui-datepicker-next-hover" );
		}
	}
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove( target, props ) {
	$.extend( target, props );
	for ( var name in props ) {
		if ( props[ name ] == null ) {
			target[ name ] = props[ name ];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function( options ) {

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if ( !$.datepicker.initialized ) {
		$( document ).on( "mousedown", $.datepicker._checkExternalClick );
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ( $( "#" + $.datepicker._mainDivId ).length === 0 ) {
		$( "body" ).append( $.datepicker.dpDiv );
	}

	var otherArgs = Array.prototype.slice.call( arguments, 1 );
	if ( typeof options === "string" && ( options === "isDisabled" || options === "getDate" || options === "widget" ) ) {
		return $.datepicker[ "_" + options + "Datepicker" ].
			apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
	}
	if ( options === "option" && arguments.length === 2 && typeof arguments[ 1 ] === "string" ) {
		return $.datepicker[ "_" + options + "Datepicker" ].
			apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
	}
	return this.each( function() {
		typeof options === "string" ?
			$.datepicker[ "_" + options + "Datepicker" ].
				apply( $.datepicker, [ this ].concat( otherArgs ) ) :
			$.datepicker._attachDatepicker( this, options );
	} );
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.12.1";

var widgetsDatepicker = $.datepicker;


/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.tooltip", {
	version: "1.12.1",
	options: {
		classes: {
			"ui-tooltip": "ui-corner-all ui-widget-shadow"
		},
		content: function() {

			// support: IE<9, Opera in jQuery <1.7
			// .text() can't accept undefined, so coerce to a string
			var title = $( this ).attr( "title" ) || "";

			// Escape title, since we're going from an attribute to raw HTML
			return $( "<a>" ).text( title ).html();
		},
		hide: true,

		// Disabled elements have inconsistent behavior across browsers (#8661)
		items: "[title]:not([disabled])",
		position: {
			my: "left top+15",
			at: "left bottom",
			collision: "flipfit flip"
		},
		show: true,
		track: false,

		// Callbacks
		close: null,
		open: null
	},

	_addDescribedBy: function( elem, id ) {
		var describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ );
		describedby.push( id );
		elem
			.data( "ui-tooltip-id", id )
			.attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
	},

	_removeDescribedBy: function( elem ) {
		var id = elem.data( "ui-tooltip-id" ),
			describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ ),
			index = $.inArray( id, describedby );

		if ( index !== -1 ) {
			describedby.splice( index, 1 );
		}

		elem.removeData( "ui-tooltip-id" );
		describedby = $.trim( describedby.join( " " ) );
		if ( describedby ) {
			elem.attr( "aria-describedby", describedby );
		} else {
			elem.removeAttr( "aria-describedby" );
		}
	},

	_create: function() {
		this._on( {
			mouseover: "open",
			focusin: "open"
		} );

		// IDs of generated tooltips, needed for destroy
		this.tooltips = {};

		// IDs of parent tooltips where we removed the title attribute
		this.parents = {};

		// Append the aria-live region so tooltips announce correctly
		this.liveRegion = $( "<div>" )
			.attr( {
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			} )
			.appendTo( this.document[ 0 ].body );
		this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

		this.disabledTitles = $( [] );
	},

	_setOption: function( key, value ) {
		var that = this;

		this._super( key, value );

		if ( key === "content" ) {
			$.each( this.tooltips, function( id, tooltipData ) {
				that._updateContent( tooltipData.element );
			} );
		}
	},

	_setOptionDisabled: function( value ) {
		this[ value ? "_disable" : "_enable" ]();
	},

	_disable: function() {
		var that = this;

		// Close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {
			var event = $.Event( "blur" );
			event.target = event.currentTarget = tooltipData.element[ 0 ];
			that.close( event, true );
		} );

		// Remove title attributes to prevent native tooltips
		this.disabledTitles = this.disabledTitles.add(
			this.element.find( this.options.items ).addBack()
				.filter( function() {
					var element = $( this );
					if ( element.is( "[title]" ) ) {
						return element
							.data( "ui-tooltip-title", element.attr( "title" ) )
							.removeAttr( "title" );
					}
				} )
		);
	},

	_enable: function() {

		// restore title attributes
		this.disabledTitles.each( function() {
			var element = $( this );
			if ( element.data( "ui-tooltip-title" ) ) {
				element.attr( "title", element.data( "ui-tooltip-title" ) );
			}
		} );
		this.disabledTitles = $( [] );
	},

	open: function( event ) {
		var that = this,
			target = $( event ? event.target : this.element )

				// we need closest here due to mouseover bubbling,
				// but always pointing at the same event target
				.closest( this.options.items );

		// No element to show a tooltip for or the tooltip is already open
		if ( !target.length || target.data( "ui-tooltip-id" ) ) {
			return;
		}

		if ( target.attr( "title" ) ) {
			target.data( "ui-tooltip-title", target.attr( "title" ) );
		}

		target.data( "ui-tooltip-open", true );

		// Kill parent tooltips, custom or native, for hover
		if ( event && event.type === "mouseover" ) {
			target.parents().each( function() {
				var parent = $( this ),
					blurEvent;
				if ( parent.data( "ui-tooltip-open" ) ) {
					blurEvent = $.Event( "blur" );
					blurEvent.target = blurEvent.currentTarget = this;
					that.close( blurEvent, true );
				}
				if ( parent.attr( "title" ) ) {
					parent.uniqueId();
					that.parents[ this.id ] = {
						element: this,
						title: parent.attr( "title" )
					};
					parent.attr( "title", "" );
				}
			} );
		}

		this._registerCloseHandlers( event, target );
		this._updateContent( target, event );
	},

	_updateContent: function( target, event ) {
		var content,
			contentOption = this.options.content,
			that = this,
			eventType = event ? event.type : null;

		if ( typeof contentOption === "string" || contentOption.nodeType ||
				contentOption.jquery ) {
			return this._open( event, target, contentOption );
		}

		content = contentOption.call( target[ 0 ], function( response ) {

			// IE may instantly serve a cached response for ajax requests
			// delay this call to _open so the other call to _open runs first
			that._delay( function() {

				// Ignore async response if tooltip was closed already
				if ( !target.data( "ui-tooltip-open" ) ) {
					return;
				}

				// JQuery creates a special event for focusin when it doesn't
				// exist natively. To improve performance, the native event
				// object is reused and the type is changed. Therefore, we can't
				// rely on the type being correct after the event finished
				// bubbling, so we set it back to the previous value. (#8740)
				if ( event ) {
					event.type = eventType;
				}
				this._open( event, target, response );
			} );
		} );
		if ( content ) {
			this._open( event, target, content );
		}
	},

	_open: function( event, target, content ) {
		var tooltipData, tooltip, delayedShow, a11yContent,
			positionOption = $.extend( {}, this.options.position );

		if ( !content ) {
			return;
		}

		// Content can be updated multiple times. If the tooltip already
		// exists, then just update the content and bail.
		tooltipData = this._find( target );
		if ( tooltipData ) {
			tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
			return;
		}

		// If we have a title, clear it to prevent the native tooltip
		// we have to check first to avoid defining a title if none exists
		// (we don't want to cause an element to start matching [title])
		//
		// We use removeAttr only for key events, to allow IE to export the correct
		// accessible attributes. For mouse events, set to empty string to avoid
		// native tooltip showing up (happens only when removing inside mouseover).
		if ( target.is( "[title]" ) ) {
			if ( event && event.type === "mouseover" ) {
				target.attr( "title", "" );
			} else {
				target.removeAttr( "title" );
			}
		}

		tooltipData = this._tooltip( target );
		tooltip = tooltipData.tooltip;
		this._addDescribedBy( target, tooltip.attr( "id" ) );
		tooltip.find( ".ui-tooltip-content" ).html( content );

		// Support: Voiceover on OS X, JAWS on IE <= 9
		// JAWS announces deletions even when aria-relevant="additions"
		// Voiceover will sometimes re-read the entire log region's contents from the beginning
		this.liveRegion.children().hide();
		a11yContent = $( "<div>" ).html( tooltip.find( ".ui-tooltip-content" ).html() );
		a11yContent.removeAttr( "name" ).find( "[name]" ).removeAttr( "name" );
		a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
		a11yContent.appendTo( this.liveRegion );

		function position( event ) {
			positionOption.of = event;
			if ( tooltip.is( ":hidden" ) ) {
				return;
			}
			tooltip.position( positionOption );
		}
		if ( this.options.track && event && /^mouse/.test( event.type ) ) {
			this._on( this.document, {
				mousemove: position
			} );

			// trigger once to override element-relative positioning
			position( event );
		} else {
			tooltip.position( $.extend( {
				of: target
			}, this.options.position ) );
		}

		tooltip.hide();

		this._show( tooltip, this.options.show );

		// Handle tracking tooltips that are shown with a delay (#8644). As soon
		// as the tooltip is visible, position the tooltip using the most recent
		// event.
		// Adds the check to add the timers only when both delay and track options are set (#14682)
		if ( this.options.track && this.options.show && this.options.show.delay ) {
			delayedShow = this.delayedShow = setInterval( function() {
				if ( tooltip.is( ":visible" ) ) {
					position( positionOption.of );
					clearInterval( delayedShow );
				}
			}, $.fx.interval );
		}

		this._trigger( "open", event, { tooltip: tooltip } );
	},

	_registerCloseHandlers: function( event, target ) {
		var events = {
			keyup: function( event ) {
				if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
					var fakeEvent = $.Event( event );
					fakeEvent.currentTarget = target[ 0 ];
					this.close( fakeEvent, true );
				}
			}
		};

		// Only bind remove handler for delegated targets. Non-delegated
		// tooltips will handle this in destroy.
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			events.remove = function() {
				this._removeTooltip( this._find( target ).tooltip );
			};
		}

		if ( !event || event.type === "mouseover" ) {
			events.mouseleave = "close";
		}
		if ( !event || event.type === "focusin" ) {
			events.focusout = "close";
		}
		this._on( true, target, events );
	},

	close: function( event ) {
		var tooltip,
			that = this,
			target = $( event ? event.currentTarget : this.element ),
			tooltipData = this._find( target );

		// The tooltip may already be closed
		if ( !tooltipData ) {

			// We set ui-tooltip-open immediately upon open (in open()), but only set the
			// additional data once there's actually content to show (in _open()). So even if the
			// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
			// the period between open() and _open().
			target.removeData( "ui-tooltip-open" );
			return;
		}

		tooltip = tooltipData.tooltip;

		// Disabling closes the tooltip, so we need to track when we're closing
		// to avoid an infinite loop in case the tooltip becomes disabled on close
		if ( tooltipData.closing ) {
			return;
		}

		// Clear the interval for delayed tracking tooltips
		clearInterval( this.delayedShow );

		// Only set title if we had one before (see comment in _open())
		// If the title attribute has changed since open(), don't restore
		if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
			target.attr( "title", target.data( "ui-tooltip-title" ) );
		}

		this._removeDescribedBy( target );

		tooltipData.hiding = true;
		tooltip.stop( true );
		this._hide( tooltip, this.options.hide, function() {
			that._removeTooltip( $( this ) );
		} );

		target.removeData( "ui-tooltip-open" );
		this._off( target, "mouseleave focusout keyup" );

		// Remove 'remove' binding only on delegated targets
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			this._off( target, "remove" );
		}
		this._off( this.document, "mousemove" );

		if ( event && event.type === "mouseleave" ) {
			$.each( this.parents, function( id, parent ) {
				$( parent.element ).attr( "title", parent.title );
				delete that.parents[ id ];
			} );
		}

		tooltipData.closing = true;
		this._trigger( "close", event, { tooltip: tooltip } );
		if ( !tooltipData.hiding ) {
			tooltipData.closing = false;
		}
	},

	_tooltip: function( element ) {
		var tooltip = $( "<div>" ).attr( "role", "tooltip" ),
			content = $( "<div>" ).appendTo( tooltip ),
			id = tooltip.uniqueId().attr( "id" );

		this._addClass( content, "ui-tooltip-content" );
		this._addClass( tooltip, "ui-tooltip", "ui-widget ui-widget-content" );

		tooltip.appendTo( this._appendTo( element ) );

		return this.tooltips[ id ] = {
			element: element,
			tooltip: tooltip
		};
	},

	_find: function( target ) {
		var id = target.data( "ui-tooltip-id" );
		return id ? this.tooltips[ id ] : null;
	},

	_removeTooltip: function( tooltip ) {
		tooltip.remove();
		delete this.tooltips[ tooltip.attr( "id" ) ];
	},

	_appendTo: function( target ) {
		var element = target.closest( ".ui-front, dialog" );

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_destroy: function() {
		var that = this;

		// Close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {

			// Delegate to close method to handle common cleanup
			var event = $.Event( "blur" ),
				element = tooltipData.element;
			event.target = event.currentTarget = element[ 0 ];
			that.close( event, true );

			// Remove immediately; destroying an open tooltip doesn't use the
			// hide animation
			$( "#" + id ).remove();

			// Restore the title
			if ( element.data( "ui-tooltip-title" ) ) {

				// If the title attribute has changed since open(), don't restore
				if ( !element.attr( "title" ) ) {
					element.attr( "title", element.data( "ui-tooltip-title" ) );
				}
				element.removeData( "ui-tooltip-title" );
			}
		} );
		this.liveRegion.remove();
	}
} );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for tooltipClass option
	$.widget( "ui.tooltip", $.ui.tooltip, {
		options: {
			tooltipClass: null
		},
		_tooltip: function() {
			var tooltipData = this._superApply( arguments );
			if ( this.options.tooltipClass ) {
				tooltipData.tooltip.addClass( this.options.tooltipClass );
			}
			return tooltipData;
		}
	} );
}

var widgetsTooltip = $.ui.tooltip;




}));
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
/*!
 AnythingSlider v1.9.6 minified using Google Closure Compiler
 Original by Chris Coyier: http://css-tricks.com
 Get the latest version: https://github.com/CSS-Tricks/AnythingSlider
*/
;(function(d,l,n){d.anythingSlider=function(m,p){var a=this,b,k;a.el=m;a.$el=d(m).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');a.$el.data("AnythingSlider",a);a.init=function(){a.options=b=d.extend({},d.anythingSlider.defaults,p);a.initialized=!1;d.isFunction(b.onBeforeInitialize)&&a.$el.bind("before_initialize",b.onBeforeInitialize);a.$el.trigger("before_initialize",a);d('\x3c!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");\x3c/script><![endif]--\x3e').appendTo("body").remove();
a.$wrapper=a.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-"+b.theme);a.$outer=a.$wrapper.parent();a.$window=a.$el.closest("div.anythingWindow");a.$win=d(l);a.$controls=d('<div class="anythingControls"></div>');a.$nav=d('<ul class="thumbNav"><li><a><span></span></a></li></ul>');a.$startStop=d('<a href="#" class="start-stop"></a>');(b.buildStartStop||b.buildNavigation)&&a.$controls.appendTo(b.appendControlsTo&&d(b.appendControlsTo).length?d(b.appendControlsTo):a.$wrapper);b.buildNavigation&&
a.$nav.appendTo(b.appendNavigationTo&&d(b.appendNavigationTo).length?d(b.appendNavigationTo):a.$controls);b.buildStartStop&&a.$startStop.appendTo(b.appendStartStopTo&&d(b.appendStartStopTo).length?d(b.appendStartStopTo):a.$controls);a.runTimes=d(".anythingBase").length;a.regex=b.hashTags?new RegExp("panel"+a.runTimes+"-(\\d+)","i"):null;1===a.runTimes&&a.makeActive();a.flag=!1;b.autoPlayLocked&&(b.autoPlay=!0);a.playing=b.autoPlay;a.slideshow=!1;a.hovered=!1;a.panelSize=[];a.currentPage=a.targetPage=
b.startPanel=parseInt(b.startPanel,10)||1;b.changeBy=parseInt(b.changeBy,10)||1;k=(b.mode||"h").toLowerCase().match(/(h|v|f)/);k=b.vertical?"v":(k||["h"])[0];b.mode="v"===k?"vertical":"f"===k?"fade":"horizontal";"f"===k&&(b.showMultiple=1,b.infiniteSlides=!1);a.adj=b.infiniteSlides?0:1;a.adjustMultiple=0;b.playRtl&&a.$wrapper.addClass("rtl");b.buildStartStop&&a.buildAutoPlay();b.buildArrows&&a.buildNextBackButtons();a.$lastPage=a.$targetPage=a.$currentPage;if(b.expand){if(!0===b.aspectRatio)b.aspectRatio=
a.$el.width()/a.$el.height();else if("string"===typeof b.aspectRatio&&-1!==b.aspectRatio.indexOf(":")){var c=b.aspectRatio.split(":");b.aspectRatio=c[0]/c[1]}0<b.aspectRatio&&1<b.showMultiple&&(b.aspectRatio*=b.showMultiple)}a.updateSlider();b.expand&&(a.$window.css({width:"100%",height:"100%"}),a.checkResize());d.isFunction(d.easing[b.easing])||(b.easing="swing");b.pauseOnHover&&a.$wrapper.hover(function(){a.playing&&(a.$el.trigger("slideshow_paused",a),a.clearTimer(!0))},function(){a.playing&&(a.$el.trigger("slideshow_unpaused",
a),a.startStop(a.playing,!0))});a.slideControls(!1);a.$wrapper.bind("mouseenter mouseleave",function(b){d(this)["mouseenter"===b.type?"addClass":"removeClass"]("anythingSlider-hovered");a.hovered="mouseenter"===b.type?!0:!1;a.slideControls(a.hovered)});d(n).keyup(function(c){if(b.enableKeyboard&&a.$wrapper.hasClass("activeSlider")&&!c.target.tagName.match("TEXTAREA|INPUT|SELECT")&&("vertical"===b.mode||38!==c.which&&40!==c.which))switch(c.which){case 39:case 40:a.goForward();break;case 37:case 38:a.goBack()}});
a.currentPage=(b.hashTags?a.gotoHash():"")||b.startPanel||1;a.gotoPage(a.currentPage,!1,null,-1);var f="slideshow_resized slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");d.each("onSliderResize onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "),function(c,h){d.isFunction(b[h])&&a.$el.bind(f[c],b[h])});d.isFunction(b.onSlideComplete)&&a.$el.bind("slide_complete",
function(){setTimeout(function(){b.onSlideComplete(a)},0);return!1});a.initialized=!0;a.$el.trigger("initialized",a);a.startStop(b.autoPlay)};a.updateSlider=function(){a.$el.children(".cloned").remove();a.navTextVisible="hidden"!==a.$nav.find("span:first").css("visibility");a.$nav.empty();a.currentPage=a.currentPage||1;a.$items=a.$el.children();a.pages=a.$items.length;a.dir="vertical"===b.mode?"top":"left";b.showMultiple=parseInt(b.showMultiple,10)||1;b.navigationSize=!1===b.navigationSize?0:parseInt(b.navigationSize,
10)||0;a.$items.find("a").unbind("focus.AnythingSlider").bind("focus.AnythingSlider",function(c){var f=d(this).closest(".panel"),f=a.$items.index(f)+a.adj;a.$items.find(".focusedLink").removeClass("focusedLink");d(this).addClass("focusedLink");a.$window.scrollLeft(0).scrollTop(0);-1!==f&&(f>=a.currentPage+b.showMultiple||f<a.currentPage)&&(a.gotoPage(f),c.preventDefault())});1<b.showMultiple&&(b.showMultiple>a.pages&&(b.showMultiple=a.pages),a.adjustMultiple=b.infiniteSlides&&1<a.pages?0:b.showMultiple-
1);a.$controls.add(a.$nav).add(a.$startStop).add(a.$forward).add(a.$back)[1>=a.pages?"hide":"show"]();1<a.pages&&a.buildNavigation();"fade"!==b.mode&&b.infiniteSlides&&1<a.pages&&(a.$el.prepend(a.$items.filter(":last").clone().addClass("cloned")),1<b.showMultiple?a.$el.append(a.$items.filter(":lt("+b.showMultiple+")").clone().addClass("cloned multiple")):a.$el.append(a.$items.filter(":first").clone().addClass("cloned")),a.$el.find(".cloned").each(function(){d(this).find("a,input,textarea,select,button,area,form").attr({disabled:"disabled",
name:""});d(this).find("[id]")[d.fn.addBack?"addBack":"andSelf"]().removeAttr("id")}));a.$items=a.$el.addClass(b.mode).children().addClass("panel");a.setDimensions();b.resizeContents?(a.$items.css("width",a.width),a.$wrapper.css("width",a.getDim(a.currentPage)[0]).add(a.$items).css("height",a.height)):a.$win.load(function(){a.setDimensions();k=a.getDim(a.currentPage);a.$wrapper.css({width:k[0],height:k[1]});a.setCurrentPage(a.currentPage,!1)});a.currentPage>a.pages&&(a.currentPage=a.pages);a.setCurrentPage(a.currentPage,
!1);a.$nav.find("a").eq(a.currentPage-1).addClass("cur");"fade"===b.mode&&(k=a.$items.eq(a.currentPage-1),b.resumeOnVisible?k.css({opacity:1,visibility:"visible"}).siblings().css({opacity:0,visibility:"hidden"}):(a.$items.css("opacity",1),k.fadeIn(0).siblings().fadeOut(0)))};a.buildNavigation=function(){if(b.buildNavigation&&1<a.pages){var c,f,e,h,g;a.$items.filter(":not(.cloned)").each(function(q){g=d("<li/>");e=q+1;f=(1===e?" first":"")+(e===a.pages?" last":"");c='<a class="panel'+e+(a.navTextVisible?
'"':" "+b.tooltipClass+'" title="@"')+' href="#"><span>@</span></a>';d.isFunction(b.navigationFormatter)?(h=b.navigationFormatter(e,d(this)),"string"===typeof h?g.html(c.replace(/@/g,h)):g=d("<li/>",h)):g.html(c.replace(/@/g,e));g.appendTo(a.$nav).addClass(f).data("index",e)});a.$nav.children("li").bind(b.clickControls,function(c){!a.flag&&b.enableNavigation&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.gotoPage(d(this).data("index")));c.preventDefault()});b.navigationSize&&b.navigationSize<
a.pages&&(a.$controls.find(".anythingNavWindow").length||a.$nav.before('<ul><li class="prev"><a href="#"><span>'+b.backText+"</span></a></li></ul>").after('<ul><li class="next"><a href="#"><span>'+b.forwardText+"</span></a></li></ul>").wrap('<div class="anythingNavWindow"></div>'),a.navWidths=a.$nav.find("li").map(function(){return d(this).outerWidth(!0)+Math.ceil(parseInt(d(this).find("span").css("left"),10)/2||0)}).get(),a.navLeft=1,a.$nav.width(a.navWidth(1,a.pages+1)+25),a.$controls.find(".anythingNavWindow").width(a.navWidth(1,
b.navigationSize+1)).end().find(".prev,.next").bind(b.clickControls,function(c){a.flag||(a.flag=!0,setTimeout(function(){a.flag=!1},200),a.navWindow(a.navLeft+b.navigationSize*(d(this).is(".prev")?-1:1)));c.preventDefault()}))}};a.navWidth=function(b,f){var e,d=Math.max(b,f),g=0;for(e=Math.min(b,f);e<d;e++)g+=a.navWidths[e-1]||0;return g};a.navWindow=function(c){if(b.navigationSize&&b.navigationSize<a.pages&&a.navWidths){var f=a.pages-b.navigationSize+1;c=1>=c?1:1<c&&c<f?c:f;c!==a.navLeft&&(a.$controls.find(".anythingNavWindow").animate({scrollLeft:a.navWidth(1,
c),width:a.navWidth(c,c+b.navigationSize)},{queue:!1,duration:b.animationTime}),a.navLeft=c)}};a.buildNextBackButtons=function(){a.$forward=d('<span class="arrow forward"><a href="#"><span>'+b.forwardText+"</span></a></span>");a.$back=d('<span class="arrow back"><a href="#"><span>'+b.backText+"</span></a></span>");a.$back.bind(b.clickBackArrow,function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goBack());c.preventDefault()});a.$forward.bind(b.clickForwardArrow,
function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goForward());c.preventDefault()});a.$back.add(a.$forward).find("a").bind("focusin focusout",function(){d(this).toggleClass("hover")});a.$back.appendTo(b.appendBackTo&&d(b.appendBackTo).length?d(b.appendBackTo):a.$wrapper);a.$forward.appendTo(b.appendForwardTo&&d(b.appendForwardTo).length?d(b.appendForwardTo):a.$wrapper);a.arrowWidth=a.$forward.width();a.arrowRight=parseInt(a.$forward.css("right"),10);a.arrowLeft=
parseInt(a.$back.css("left"),10)};a.buildAutoPlay=function(){a.$startStop.html("<span>"+(a.playing?b.stopText:b.startText)+"</span>").bind(b.clickSlideshow,function(c){b.enableStartStop&&(a.startStop(!a.playing),a.makeActive(),a.playing&&!b.autoPlayDelayed&&a.goForward(!0,b.playRtl));c.preventDefault()}).bind("focusin focusout",function(){d(this).toggleClass("hover")})};a.checkResize=function(b){var f=!!(n.hidden||n.webkitHidden||n.mozHidden||n.msHidden);clearTimeout(a.resizeTimer);a.resizeTimer=
setTimeout(function(){var e=a.$outer.width(),d="BODY"===a.$outer[0].tagName?a.$win.height():a.$outer.height();f||a.lastDim[0]===e&&a.lastDim[1]===d||(a.setDimensions(),a.$el.trigger("slideshow_resized",a),a.gotoPage(a.currentPage,a.playing,null,-1));"undefined"===typeof b&&a.checkResize()},f?2E3:500)};a.setDimensions=function(){a.$wrapper.find(".anythingWindow, .anythingBase, .panel")[d.fn.addBack?"addBack":"andSelf"]().css({width:"",height:""});a.width=a.$el.width();a.height=a.$el.height();a.outerPad=
[a.$wrapper.innerWidth()-a.$wrapper.width(),a.$wrapper.innerHeight()-a.$wrapper.height()];var c,f,e,h,g=0,m={width:"100%",height:"100%"},k=1<b.showMultiple&&"horizontal"===b.mode?a.width||a.$window.width()/b.showMultiple:a.$window.width(),n=1<b.showMultiple&&"vertical"===b.mode?a.height/b.showMultiple||a.$window.height()/b.showMultiple:a.$window.height();if(b.expand){a.lastDim=[a.$outer.width(),a.$outer.height()];c=a.lastDim[0]-a.outerPad[0];f=a.lastDim[1]-a.outerPad[1];if(b.aspectRatio&&b.aspectRatio<
a.width){var l=f*b.aspectRatio;l<c?c=l:(l=c/b.aspectRatio,l<f&&(f=l))}a.$wrapper.add(a.$window).css({width:c,height:f});a.height=f=1<b.showMultiple&&"vertical"===b.mode?n:f;a.width=k=1<b.showMultiple&&"horizontal"===b.mode?c/b.showMultiple:c;a.$items.css({width:k,height:n})}a.$items.each(function(l){h=d(this);e=h.children();b.resizeContents?(c=a.width,f=a.height,h.css({width:c,height:f}),e.length&&("EMBED"===e[0].tagName&&e.attr(m),"OBJECT"===e[0].tagName&&e.find("embed").attr(m),1===e.length&&e.css(m))):
("vertical"===b.mode?(c=h.css("display","inline-block").width(),h.css("display","")):c=h.width()||a.width,1===e.length&&c>=k&&(c=e.width()>=k?k:e.width(),e.css("max-width",c)),h.css({width:c,height:""}),f=1===e.length?e.outerHeight(!0):h.height(),f<=a.outerPad[1]&&(f=a.height),h.css("height",f));a.panelSize[l]=[c,f,g];g+="vertical"===b.mode?f:c});a.$el.css("vertical"===b.mode?"height":"width","fade"===b.mode?a.width:g)};a.getDim=function(c){var f,e,d=a.width,g=a.height;if(1>a.pages||isNaN(c))return[d,
g];c=b.infiniteSlides&&1<a.pages?c:c-1;if(e=a.panelSize[c])d=e[0]||d,g=e[1]||g;if(1<b.showMultiple)for(e=1;e<b.showMultiple;e++)f=c+e,"vertical"===b.mode?(d=Math.max(d,a.panelSize[f][0]),g+=a.panelSize[f][1]):(d+=a.panelSize[f][0],g=Math.max(g,a.panelSize[f][1]));return[d,g]};a.goForward=function(c,d){a.gotoPage(a[b.allowRapidChange?"targetPage":"currentPage"]+b.changeBy*(d?-1:1),c)};a.goBack=function(c){a.gotoPage(a[b.allowRapidChange?"targetPage":"currentPage"]-b.changeBy,c)};a.gotoPage=function(c,
f,e,h){!0!==f&&(f=!1,a.startStop(!1),a.makeActive());/^[#|.]/.test(c)&&d(c).length&&(c=d(c).closest(".panel").index()+a.adj);if(1!==b.changeBy){var g=a.pages-a.adjustMultiple;1>c&&(c=b.stopAtEnd?1:b.infiniteSlides?a.pages+c:b.showMultiple>1-c?1:g);c>a.pages?c=b.stopAtEnd?a.pages:b.showMultiple>1-c?1:c-=g:c>=g&&(c=g)}1>=a.pages||(a.$lastPage=a.$currentPage,"number"!==typeof c&&(c=parseInt(c,10)||b.startPanel,a.setCurrentPage(c)),f&&b.isVideoPlaying(a)||(b.stopAtEnd&&!b.infiniteSlides&&c>a.pages-b.showMultiple&&
(c=a.pages-b.showMultiple+1),a.exactPage=c,c>a.pages+1-a.adj&&(c=b.infiniteSlides||b.stopAtEnd?a.pages:1),c<a.adj&&(c=b.infiniteSlides||b.stopAtEnd?1:a.pages),b.infiniteSlides||(a.exactPage=c),a.currentPage=c>a.pages?a.pages:1>c?1:a.currentPage,a.$currentPage=a.$items.eq(a.currentPage-a.adj),a.targetPage=0===c?a.pages:c>a.pages?1:c,a.$targetPage=a.$items.eq(a.targetPage-a.adj),h="undefined"!==typeof h?h:b.animationTime,0<=h&&a.$el.trigger("slide_init",a),0<h&&!0===b.toggleControls&&a.slideControls(!0),
b.buildNavigation&&a.setNavigation(a.targetPage),!0!==f&&(f=!1),(!f||b.stopAtEnd&&c===a.pages)&&a.startStop(!1),0<=h&&a.$el.trigger("slide_begin",a),setTimeout(function(d){var f,g=!0;b.allowRapidChange&&a.$wrapper.add(a.$el).add(a.$items).stop(!0,!0);b.resizeContents||(f=a.getDim(c),d={},a.$wrapper.width()!==f[0]&&(d.width=f[0]||a.width,g=!1),a.$wrapper.height()!==f[1]&&(d.height=f[1]||a.height,g=!1),g||a.$wrapper.filter(":not(:animated)").animate(d,{queue:!1,duration:0>h?0:h,easing:b.easing}));"fade"===
b.mode?a.$lastPage[0]!==a.$targetPage[0]?(a.fadeIt(a.$lastPage,0,h),a.fadeIt(a.$targetPage,1,h,function(){a.endAnimation(c,e,h)})):a.endAnimation(c,e,h):(d={},d[a.dir]=-a.panelSize[b.infiniteSlides&&1<a.pages?c:c-1][2],"vertical"!==b.mode||b.resizeContents||(d.width=f[0]),a.$el.filter(":not(:animated)").animate(d,{queue:!1,duration:0>h?0:h,easing:b.easing,complete:function(){a.endAnimation(c,e,h)}}))},parseInt(b.delayBeforeAnimate,10)||0)))};a.endAnimation=function(c,d,e){0===c?(a.$el.css(a.dir,"fade"===
b.mode?0:-a.panelSize[a.pages][2]),c=a.pages):c>a.pages&&(a.$el.css(a.dir,"fade"===b.mode?0:-a.panelSize[1][2]),c=1);a.exactPage=c;a.setCurrentPage(c,!1);"fade"===b.mode&&a.fadeIt(a.$items.not(":eq("+(c-a.adj)+")"),0,0);a.hovered||a.slideControls(!1);b.hashTags&&a.setHash(c);0<=e&&a.$el.trigger("slide_complete",a);"function"===typeof d&&d(a);b.autoPlayLocked&&!a.playing&&setTimeout(function(){a.startStop(!0)},b.resumeDelay-(b.autoPlayDelayed?b.delay:0))};a.fadeIt=function(a,f,e,h){var g=a.filter(":not(:animated)");
a=0>e?0:e;if(b.resumeOnVisible)1===f&&g.css("visibility","visible"),g.fadeTo(a,f,function(){0===f&&g.css("visibility","hidden");d.isFunction(h)&&h()});else g[0===f?"fadeOut":"fadeIn"](a,h)};a.setCurrentPage=function(c,d){c=parseInt(c,10);if(!(1>a.pages||0===c||isNaN(c))){c>a.pages+1-a.adj&&(c=a.pages-a.adj);c<a.adj&&(c=1);b.buildArrows&&!b.infiniteSlides&&b.stopAtEnd&&(a.$forward[c===a.pages-a.adjustMultiple?"addClass":"removeClass"]("disabled"),a.$back[1===c?"addClass":"removeClass"]("disabled"),
c===a.pages&&a.playing&&a.startStop());if(!d){var e=a.getDim(c);a.$wrapper.css({width:e[0],height:e[1]}).add(a.$window).scrollLeft(0).scrollTop(0);a.$el.css(a.dir,"fade"===b.mode?0:-a.panelSize[b.infiniteSlides&&1<a.pages?c:c-1][2])}a.currentPage=c;a.$currentPage=a.$items.removeClass("activePage").eq(c-a.adj).addClass("activePage");b.buildNavigation&&a.setNavigation(c)}};a.setNavigation=function(b){a.$nav.find(".cur").removeClass("cur").end().find("a").eq(b-1).addClass("cur")};a.makeActive=function(){a.$wrapper.hasClass("activeSlider")||
(d(".activeSlider").removeClass("activeSlider"),a.$wrapper.addClass("activeSlider"))};a.gotoHash=function(){var c=l.location.hash,f=c.indexOf("&"),e=c.match(a.regex);null!==e||/^#&/.test(c)||/#!?\//.test(c)||/\=/.test(c)?null!==e&&(e=b.hashTags?parseInt(e[1],10):null):(c=c.substring(0,0<=f?f:c.length),e=d(c).length&&d(c).closest(".anythingBase")[0]===a.el?a.$items.index(d(c).closest(".panel"))+a.adj:null);return e};a.setHash=function(b){var d="panel"+a.runTimes+"-",e=l.location.hash;"undefined"!==
typeof e&&(l.location.hash=0<e.indexOf(d)?e.replace(a.regex,d+b):e+"&"+d+b)};a.slideControls=function(c){var d=c?"slideDown":"slideUp",e=c?0:b.animationTime,h=c?b.animationTime:0,g=c?1:0;c=c?0:1;b.toggleControls&&a.$controls.stop(!0,!0).delay(e)[d](b.animationTime/2).delay(h);b.buildArrows&&b.toggleArrows&&(!a.hovered&&a.playing&&(c=1,g=0),a.$forward.stop(!0,!0).delay(e).animate({right:a.arrowRight+c*a.arrowWidth,opacity:g},b.animationTime/2),a.$back.stop(!0,!0).delay(e).animate({left:a.arrowLeft+
c*a.arrowWidth,opacity:g},b.animationTime/2))};a.clearTimer=function(b){a.timer&&(l.clearInterval(a.timer),!b&&a.slideshow&&(a.$el.trigger("slideshow_stop",a),a.slideshow=!1))};a.startStop=function(c,d){!0!==c&&(c=!1);(a.playing=c)&&!d&&(a.$el.trigger("slideshow_start",a),a.slideshow=!0);b.buildStartStop&&(a.$startStop.toggleClass("playing",c).find("span").html(c?b.stopText:b.startText),"hidden"===a.$startStop.find("span").css("visibility")&&a.$startStop.addClass(b.tooltipClass).attr("title",c?b.stopText:
b.startText));c?(a.clearTimer(!0),a.timer=l.setInterval(function(){n.hidden||n.webkitHidden||n.mozHidden||n.msHidden?b.autoPlayLocked||a.startStop():b.isVideoPlaying(a)?b.resumeOnVideoEnd||a.startStop():a.goForward(!0,b.playRtl)},b.delay)):a.clearTimer()};a.init()};d.anythingSlider.defaults={theme:"default",mode:"horiz",expand:!1,resizeContents:!0,showMultiple:!1,easing:"swing",buildArrows:!0,buildNavigation:!0,buildStartStop:!0,toggleArrows:!1,toggleControls:!1,startText:"Start",stopText:"Stop",
forwardText:"&raquo;",backText:"&laquo;",tooltipClass:"tooltip",enableArrows:!0,enableNavigation:!0,enableStartStop:!0,enableKeyboard:!0,startPanel:1,changeBy:1,hashTags:!0,infiniteSlides:!0,navigationFormatter:null,navigationSize:!1,autoPlay:!1,autoPlayLocked:!1,autoPlayDelayed:!1,pauseOnHover:!0,stopAtEnd:!1,playRtl:!1,delay:3E3,resumeDelay:15E3,animationTime:600,delayBeforeAnimate:0,clickForwardArrow:"click",clickBackArrow:"click",clickControls:"click focusin",clickSlideshow:"click",allowRapidChange:!1,
resumeOnVideoEnd:!0,resumeOnVisible:!0,isVideoPlaying:function(d){return!1}};d.fn.anythingSlider=function(m,l){return this.each(function(){var a,b=d(this).data("AnythingSlider");(typeof m).match("object|undefined")?b?b.updateSlider():new d.anythingSlider(this,m):/\d/.test(m)&&!isNaN(m)&&b?(a="number"===typeof m?m:parseInt(d.trim(m),10),1<=a&&a<=b.pages&&b.gotoPage(a,!1,l)):/^[#|.]/.test(m)&&d(m).length&&b.gotoPage(m,!1,l)})}})(jQuery,window,document);
function deleteMainImg(e){
    $(e).closest('.model-files__item').remove();
    $('.js-image-add-input').slideDown();
}

function deleteOtherFiles(e){
    $(e).closest('.model-files__item').remove();
}

function cropPhoto(points, zoom){
    if($(".js-crop-btn").hasClass('disabled')){
        return false;
    }
    $(".js-crop-btn").addClass('disabled');

    console.log(points, zoom);

    return;
    $.ajax({
        type        : "POST",
        url         : linkCrop,
        data:       {points:points, zoom: zoom, orientation:orientation},
        dataType: 'json',
        before: function(){

        },
        success     : function(data, status, object) {
            if (data.error) {
                $(".js-modal-error").html(data.error_text).slideDown();
                $(".js-modal-success").html("");
            }
            else {
                $(".js-avatar").attr('src',data.image + "?rand=" + getRandomInt(0,100000));
                $('#avatarModal').modal('hide');
                $(".js-avatar-error").html("");
                $(".js-avatar-success").html("Аватар успешно изменен");
            }
            $(".js-cropper-btn").html($(".js-cropper-btn").data('old-val')).removeClass('disabled');
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".js-modal-error").html("Корректировка фото временно недоступна").slideDown();
            $(".js-modal-success").html("");
            $(".js-cropper-btn").html($(".js-cropper-btn").data('old-val')).removeClass('disabled');
        }
    });
}

function cropImage() {
    $.fancybox({
        'href' : '#crop'
    });
}

function ajaxAddModelError(text) {
    /*alert(text);
    return;*/
    $(".js-add-model-result").html(text).removeClass('add-model__success').addClass('add-model__error').fadeIn();
    setTimeout(function () {
        $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
    }, 5000);
}


function addModel(){

    var form = $(".js-add-model-form");
    var submit = form.find("[type=submit]");
    submit.attr('data-old-val', submit.html()).html('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddModelError(data.error_text);
            }
            else {
                $(".js-add-model-btn").hide();
                $(".js-add-model-result").html('Модель добавлена, <a href="' + data.url + '">перейти к ее карточке</a>').removeClass('add-model__error').fadeIn();
                /*setTimeout(function () {
                    $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
                }, 5000);*/
            }
            submit.html(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddModelError("Добавление модели времено недоступно");
        }
    });
}


function editModel(){

    var form = $(".js-add-model-form");
    var submit = form.find("[type=submit]");
    submit.attr('data-old-val', submit.html()).html('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddModelError(data.error_text);
            }
            else {
                $(".js-add-model-result").html('Модель отредактирована').removeClass('add-model__error').fadeIn();
                setTimeout(function () {
                    $(".js-add-model-result").html('').removeClass('add-model__success').removeClass('add-model__error').fadeOut();
                }, 5000);
            }
            submit.html(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddModelError("Редактирование модели времено недоступно");
        }
    });
}
function setBuyCount(price){
    var count = parseInt($(".js-buy-count").val());
    var accountsum = parseInt($("[name=accountsum]").val());

    if(count <= 0 || isNaN(count)){
        ajaxBuyModelsError("Кол-во моделей должно быть число больше нуля");
        return;
    }

    if(count < 2){
        ajaxBuyModelsError("Минимальное кол-во моделей для покупки - 2 шт.");
        return;
    }

    if($("#no-use-account-sum").prop('checked')){
        $(".js-buy-count").html(count*price);
        $(".js-buy-count-pay").html(count*price);
    }else{
        var sum = count*price;
        if(accountsum > sum){
            var pay = 0;
        }else{
            var pay = sum-accountsum;
        }
        $(".js-buy-count").html(sum);
        $(".js-buy-count-pay").html(pay);
    }

}

function buyModels(){

    var count = parseInt($(".js-buy-count").val());
    var dontUseAccountBalance = $("#no-use-account-sum").prop('checked');
    if(dontUseAccountBalance){
        dontUseAccountBalance = '1';
    }else{
        dontUseAccountBalance = '0';
    }

    if(count <= 0 || isNaN(count)){
        ajaxBuyModelsError("Кол-во моделей должно быть число больше нуля");
        return;
    }

    if(count < 2){
        ajaxBuyModelsError("Минимальное кол-во моделей для покупки - 2 шт.");
        return;
    }

    if($("#buy-rules").prop('checked') == false){
        ajaxBuyModelsError("Примите пользовательское соглашение");
        return;
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_buy_write'),
        data: {count: count, dontUseAccountBalance:dontUseAccountBalance},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxBuyModelsError(data.error_text);
            }
            else {
                window.location.assign(data.url);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxBuyModelsError("Покупка моделей временно недоступна");
        }
    });
}

function ajaxBuyModelsError(text) {
    /*alert(text);
     return;*/
    $(".js-buy-models-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-buy-models-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

function questionBuyModel(){
    $(".buy-block__confirm").fadeIn();
}

function buyThisModel(e, id){
    $.ajax({
        type: "POST",
        url: Routing.generate('product_buy_write'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(e).closest('.js-model-files').html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Покупка моделей временно недоступна");
        }
    });
}


function likeProduct(id, e){

    var likesContainer = $(e).parent().parent().find('.js-product-likes');

    $.ajax({
        type: "POST",
        url: Routing.generate('product_like'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                likesContainer.html(data.likes);
                $(e).attr('disabled', 'disabled').html($(e).attr('data-change-name'));
                // if(data.active){
                //     $(e).addClass('active');
                // }
                // else{
                //     $(e).removeClass('active');
                // }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}


function favoriteProduct(id, e){

    $.ajax({
        type: "POST",
        url: Routing.generate('product_favorite'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                if(data.active){
                    $(e).html('В избранном');
                }
                else{
                    $(e).html('В избранное');
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}


function addModelComment(id, e){

    var textarea = $(".js-comments-textarea");

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('product_comment_write'),
        data: {id: id, text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-comments").html(data.html);
                textarea.val("");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}
jQuery(function ($) {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Пред',
        nextText: 'След',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});


function saveSettings(){

    var form = $(".js-settings-form");

    form.find('input.error').removeClass('error');

    var error = false;

    form.find('.js-require').each(function(){
        var input = $(this);
        input.val($.trim(input.val()));

        if(input.val() == ''){
            input.addClass('error');
            error = true;
        }
    });

    if(error){
        ajaxAddSettingsError("Заполните все обязательные поля");
        return false;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddSettingsError(data.error_text);
                if(data.error_type == 'email'){
                    form.find('input[name=email]').addClass('error');
                }
                if(data.error_type == 'nickname'){
                    form.find('input[name=nickname]').addClass('error');
                }
                if(data.error_type == 'birthdate'){
                    form.find('input[name=birthdate]').addClass('error');
                }
            }
            else {
                $(".js-settings-result").html("Профиль обновлен").addClass('settings__success').removeClass('settings__error').fadeIn();
                setTimeout(function () {
                    $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
                }, 5000);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddSettingsError("Редактирование профиля времено недоступено");
        }
    });
}

function ajaxAddSettingsError(text) {
    /*alert(text);
    return;*/
    $(".js-settings-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

$(document).ready(function() {
    $(".js-buy-count").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});
function catalogFilter(){

    var form = $(".js-category-filter");

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-products").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Фильтр временно недоступен");
        }
    });
}
function ajaxLoginError(form, text) {
    form.find(".js-login-error").html(text).fadeIn();
    setTimeout(function () {
        form.find(".js-login-error").html('').fadeOut();
    }, 5000);
}

function ajaxLogin(e) {

    var form = $(e).closest(".js-login");

    var login = form.find("input[name=_username]").val();
    var pass = form.find("input[name=_password]").val();

    if (login == '' || pass == '') {
        ajaxLoginError(form, "Введите e-mail и пароль");
        return;
    }

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxLoginError(form, data.error_text);
            }
            else {
                window.location.reload();
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxLoginError(form, "Вход на сайт времено недоступен");
            submit.val(submit.attr('data-old-val'));
        }
    });
}
$(function () {
    $('.slider').anythingSlider({
        theme: "sym",
        buildNavigation: true,
        buildStartStop: false,
        hashTags: false,
        onSlideComplete: function (slider) {
            $(".slider__bg .slider__bg-item.active").fadeOut().removeClass('active');
            $(".slider__bg .slider__bg-item").eq(slider.currentPage - 1).fadeIn().addClass('active');
        },
        expand: true,
        /*resizeContents: true,*/
        autoPlay: true,
        delay: 15000
    });
});


function sendUserMessage(id, e){

    var textarea = $(".js-comments-textarea");
    var btn = $(e);

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
        return;
    }

    btn.attr('data-old-val', btn.html()).html('Идет отправка...').prop('disabled', true);

    $.ajax({
        type: "POST",
        url: Routing.generate('messages_dialog_write', {id:id}),
        data: {text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-messages").html(data.html);
                textarea.val("");
            }
            btn.html(btn.attr('data-old-val')).prop('disabled', false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
            btn.html(btn.attr('data-old-val')).prop('disabled', false);
        }
    });
}
function ajaxModeration() {

    var form = $(".js-moderation-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxBlock() {

    var form = $(".js-block-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxAdminComment() {

    var form = $(".js-commentAdmin-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
                $(".js-commentAdmin-textarea").val('');
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxUnBlock() {

    var form = $(".js-unblock-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Модерация временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}

function ajaxDelete() {

    var form = $(".js-delete-form");

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $.fancybox.close();
                $(".js-model-info").html(data.modelInfo);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Удаление временно недоступно");
            submit.val(submit.attr('data-old-val'));
        }
    });
}
function showShare(){
    $(".js-share-btn").hide();
    $(".js-share-block").show();
    Ya.share2('share-block');
}

function showDeleteComment(e){
    $(e).closest('.comment').find('.delete-question').slideToggle();
}

function cancelDeleteComment(e){
    $(e).closest('.comment').find('.delete-question').slideUp();
}

function deleteComment(id, e){

    $.ajax({
        type: "POST",
        url: Routing.generate('product_comment_delete'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(e).closest('.comment').remove();
                //$(".js-comments").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}
function ajaxRegistrationError(text) {
    if($(window).scrollTop() > $(".js-registration").offset().top - 120){
        $('html, body').animate({
            scrollTop: $(".js-registration").offset().top - 120
        }, 1000);
    }
    $(".js-registration-error").html(text).fadeIn();
    setTimeout(function () {
        $(".js-registration-error").html('').fadeOut();
    }, 5000);
}

function ajaxRegistration() {

    var form = $(".js-registration");

    var login = form.find("input[name=email]").val();
    var nickname = form.find("input[name=nickname]").val();
    var pass = form.find("input[name=password]").val();
    var pass2 = form.find("input[name=password_repeat]").val();

    if (login == '' || nickname == '' || pass == '' || pass2 == '') {
        ajaxRegistrationError("Заполните все поля");
        return;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxRegistrationError(data.error_text);
            }
            else {
                window.location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxRegistrationError("Регистрация времено недоступна");
        }
    });
}
var autoSearch_i = 0;

function autoSearch(e) {
    var val = $(e).val();

    autoSearch_i++;

    if (val.length > 1) {
        setTimeout('autoSearchStart(' + autoSearch_i + ');', 100);
    }
    else {
        $(".js-quick-search-results").hide().html('');
    }

}

function filtersCheckboxClick(){
    var count = $(".js-filters-block input[type=checkbox]:checked").length;
    $(".js-filter-styles-count").html("(" + count +")");
}

function autoSearchStart(i) {
    if (i != autoSearch_i) {
        return;
    }

    var val = $(".js-search-val").val();

    $.get(Routing.generate('search_quick'), {search: val}, function (response) {
        if (response.length > 0) {
            $(".js-quick-search-results").show().html(response);
        }
        else {
            $(".js-quick-search-results").hide().html('');
        }
    });

}

$(document).ready(function() {
    $(".js-filters-link").click(function(){
        $(".js-filters-block").slideToggle();
    });
    filtersCheckboxClick();
});
function subscribe(){
    var email = $(".js-subscribe-email").val();

    var submit = $(".js-subscribe-submit");
    submit.attr('data-old-val', submit.val()).val('Подождите...');

    $.ajax({
        type: "POST",
        url: Routing.generate('subscribe'),
        data: {email: email},
        dataType: "json",
        before: function () {

        },
        success: function (data, status, object) {
            if (data.error) {
                $('.js-subscribe-message').removeClass('subscribe__success').addClass('subscribe__error').html(data.error_text).fadeIn();
            }
            else {
                $('.js-subscribe-message').removeClass('subscribe__error').addClass('subscribe__success').html("Вы успешно подписались на рассылку").fadeIn();
            }
            submit.val(submit.attr('data-old-val'));
            setTimeout(function(){
                $('.js-subscribe-message').removeClass('error').removeClass('success').html("").fadeOut();
            }, 5000);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('.js-subscribe-message').removeClass('subscribe__success').addClass('subscribe__error').html("Подписка временно недоступна").fadeIn();
            submit.val(submit.attr('data-old-val'));
            setTimeout(function(){
                $('.js-subscribe-message').removeClass('subscribe__error').removeClass('subscribe__success').html("").fadeOut();
            }, 5000);
        }
    });
}

$(function(){
    $(".js-subscribe-email").keypress(function(e) {
        if(e.which == 13) {
            subscribe();
        }
    });
});


function addTicket(){

    var form = $(".js-settings-form");

    form.find('input.error').removeClass('error');

    var error = false;

    form.find('.js-require').each(function(){
        var input = $(this);
        input.val($.trim(input.val()));

        if(input.val() == ''){
            input.addClass('error');
            error = true;
        }
    });

    if(error){
        ajaxAddTicketError("Заполните все обязательные поля");
        return false;
    }

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxAddTicketError(data.error_text);
                if(data.error_type == 'email'){
                    form.find('input[name=email]').addClass('error');
                }
                if(data.error_type == 'nickname'){
                    form.find('input[name=nickname]').addClass('error');
                }
                if(data.error_type == 'birthdate'){
                    form.find('input[name=birthdate]').addClass('error');
                }
            }
            else {
                window.location.assign(data.url);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxAddTicketError("Обращение в тех поддержку времено недоступено");
        }
    });
}

function ajaxAddTicketError(text) {
    /*alert(text);
    return;*/
    $(".js-settings-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-settings-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

function addTicketComment(id, e){

    var textarea = $(".js-comments-textarea");

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_tickets_item_comment_write', {id: id}),
        data: {text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-comments").html(data.html);
                textarea.val("");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}

function ticketSetStatus(id, status){

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_tickets_item_status_change', {id:id}),
        data: {status:status},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-ticket-data").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}
function ajaxWithdrawalError(text) {
    $(".js-withdrawal-add-error").html(text).fadeIn();
    setTimeout(function () {
        $(".js-withdrawal-add-error").html('').fadeOut();
    }, 5000);
}

function ajaxWithdrawalAdd() {

    var form = $(".js-withdrawal-add-form");

    /*var login = form.find("input[name=_username]").val();
    var pass = form.find("input[name=_password]").val();

    if (login == '' || pass == '') {
        ajaxLoginError("Введите e-mail и пароль");
        return;
    }

    var submit = form.find('input[type=submit]');
    submit.attr('data-old-val', submit.val()).val('Подождите...');*/

    $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxWithdrawalError(data.error_text);
            }
            else {
                $(".js-withdrawals").html(data.html);
                $(".withdrawals__field input").val('');
                $(".withdrawals__success").slideDown();
                setTimeout(function(){
                    $(".withdrawal__success").slideUp();
                }, 5000);
            }
            submit.val(submit.attr('data-old-val'));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxWithdrawalError("Отправка заявок временно недоступна");
            submit.val(submit.attr('data-old-val'));
        }
    });
}