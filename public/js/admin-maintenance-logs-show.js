"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4906],{25925:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(1519),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".log[data-v-906f4f1a]{max-height:65vh;overflow-x:hidden;overflow-y:scroll}",""]);const i=o},53739:(t,e,r)=>{r.r(e),r.d(e,{default:()=>E});var n=r(15537),o=r(85893),i=r(5255),a=r(66530),c=r(91864),u=r(27935),l=r(22515),s=r(96878),f=r(73845),h=r(9669),p=r.n(h),d=r(21556);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var g={};u(g,i,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(j([])));w&&w!==e&&r.call(w,i)&&(g=w);var x=d.prototype=h.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))}}const w={metaInfo:function(){return{title:this.$t("Logs")}},props:{file:{type:String,required:!1,default:""}},data:function(){return{size:null,content:null}},computed:{fetchUrl:function(){return(0,d.B)("logs.show").replace("{file}",this.file)},deleteUrl:function(){return(0,d.B)("logs.delete").replace("{file}",this.file)},downloadUrl:function(){return(0,d.B)("logs.download").replace("{file}",this.file)}},created:function(){var t=this;return m(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$route.params.file?t.fetchLogFile():t.$router.replace({name:"admin.maintenance.index"});case 1:case"end":return e.stop()}}),e)})))()},methods:{fetchLogFile:function(){var t=this;return m(y().mark((function e(){var r,n,o,i;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get(t.fetchUrl);case 2:r=e.sent,n=r.data,o=n.size,i=n.content,t.size=o,t.content=i;case 8:case"end":return e.stop()}}),e)})))()},deleteLogFile:function(){var t=this;return m(y().mark((function e(){var r,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().delete(t.fetchUrl);case 2:r=e.sent,n=r.data,t.$store.dispatch("message/"+(n.success?"success":"error"),{text:n.message}),t.$router.push({name:"admin.maintenance.index"});case 6:case"end":return e.stop()}}),e)})))()}}};var x=r(93379),b=r.n(x),_=r(25925),L={insert:"head",singleton:!1};b()(_.Z,L);_.Z.locals;const E=(0,r(51900).Z)(w,(function(){var t=this,e=t._self._c;return e(a.Z,{attrs:{fluid:""}},[e(o.Z,[e(s.Z,[e(n.Z,{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[e(c.Z,[t._v("mdi-arrow-left")])],1),t._v(" "),e(f.qW,[t._v("\n        "+t._s(t.file)+".log\n        "),null!==t.size?[t._v("\n          ("+t._s(t.size)+" "+t._s(t.$t("MB"))+")\n        ")]:t._e()],2),t._v(" "),e(l.Z),t._v(" "),e(n.Z,{attrs:{icon:"",href:t.downloadUrl,target:"_blank"}},[e(c.Z,[t._v("\n          mdi-download\n        ")])],1),t._v(" "),e(n.Z,{attrs:{icon:""},on:{click:t.deleteLogFile}},[e(c.Z,[t._v("\n          mdi-delete\n        ")])],1)],1),t._v(" "),e(i.ZB,[e(u.Z,{staticClass:"my-3",attrs:{type:"paragraph@3",loading:null===t.content}},[e("pre",{staticClass:"log"},[t._v(t._s(t.content))])])],1)],1)],1)}),[],!1,null,"906f4f1a",null).exports}}]);