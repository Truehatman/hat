"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4535],{61482:(t,r,e)=>{e.r(r),e.d(r,{default:()=>$});var n=e(99856),o=e(15537),i=e(85893),a=e(5255),c=e(84656),u=e(17024),s=e(66530),l=e(83240),f=e(21933),h=e(57894),p=e(84002),v=e(96878),y=e(73845),d=e(9669),m=e.n(d),g=e(80010),b=e(50175),w=e.n(b),O=e(74944),x=e(28279),_=e(43407),j=e(20629),P=e(97991);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function E(){E=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:O(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function v(){}var y={};u(y,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(k([])));m&&m!==r&&e.call(m,i)&&(y=m);var g=v.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==L(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function O(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=x(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function x(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function k(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function S(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Z(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?S(Object(e),!0).forEach((function(r){C(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function C(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==L(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===L(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const N={components:{Web3Auth:_.Z,Oauth:x.Z,VueRecaptcha:P.Z},mixins:[O.Z],middleware:"guest",metaInfo:function(){return{title:this.$t("Authentication")}},data:function(){return{loading:!1,csrfCookieRetrieved:!1,showPassword:!1,form:new(w())({email:null,password:null,remember:"",recaptcha:null})}},computed:Z(Z({},(0,j.rn)("auth",["user"])),{},{appLogoUrl:function(){return(0,g.v)("app.logo")},emailAuth:function(){return(0,g.v)("settings.users.email_auth")},recaptchaPublicKey:function(){return(0,g.v)("services.recaptcha.public_key")}}),methods:{login:function(){var t,r=this;return(t=E().mark((function t(){var e,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.loading=!0,r.csrfCookieRetrieved){t.next=5;break}return t.next=4,m().get("/sanctum/csrf-cookie");case 4:r.csrfCookieRetrieved=!0;case 5:return t.next=7,r.form.post("/api/auth/login").catch((function(){return r.recaptchaPublicKey&&(r.form.recaptcha=null,r.$refs.recaptcha.reset(),r.loading=!1),{}}));case 7:e=t.sent,(n=e.data)?(r.$store.dispatch("auth/updateUser",n),r.user.two_factor_auth_enabled&&!r.user.two_factor_auth_passed?r.$router.push({name:"2fa"}):r.$router.push({name:"home"})):r.loading=!1;case 10:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){k(i,n,o,a,c,"next",t)}function c(t){k(i,n,o,a,c,"throw",t)}a(void 0)}))})()}}};const $=(0,e(51900).Z)(N,(function(){var t=this,r=t._self._c;return r(s.Z,{staticClass:"fill-height",attrs:{fluid:""}},[r(h.Z,{attrs:{align:"center",justify:"center"}},[r(u.Z,{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r(i.Z,{staticClass:"elevation-12"},[r(v.Z,{attrs:{color:"primary"}},[r("router-link",{attrs:{to:{name:"home"}}},[r(n.Z,{attrs:{size:"40",tile:""}},[r(f.Z,{attrs:{src:t.appLogoUrl}})],1)],1),t._v(" "),r(y.qW,{staticClass:"ml-2"},[t._v("\n            "+t._s(t.$t("Authentication"))+"\n          ")])],1),t._v(" "),r(a.ZB,[r("oauth"),t._v(" "),r("web3-auth"),t._v(" "),t.emailAuth?r(l.Z,{on:{submit:function(r){return r.preventDefault(),t.login.apply(null,arguments)}},model:{value:t.formIsValid,callback:function(r){t.formIsValid=r},expression:"formIsValid"}},[r(p.Z,{attrs:{label:t.$t("Email"),type:"email",name:"email",rules:[t.validationRequired,t.validationEmail],error:t.form.errors.has("email"),"error-messages":t.form.errors.get("email"),outlined:""},on:{keydown:t.clearFormErrors},model:{value:t.form.email,callback:function(r){t.$set(t.form,"email",r)},expression:"form.email"}}),t._v(" "),r(p.Z,{attrs:{label:t.$t("Password"),"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",name:"password",rules:[t.validationRequired],error:t.form.errors.has("password"),"error-messages":t.form.errors.get("password"),outlined:"",counter:!0},on:{"click:append":function(r){t.showPassword=!t.showPassword},keydown:t.clearFormErrors},model:{value:t.form.password,callback:function(r){t.$set(t.form,"password",r)},expression:"form.password"}}),t._v(" "),r(c.Z,{attrs:{name:"remember",label:t.$t("Remember me"),color:"primary","true-value":"1","false-value":""},model:{value:t.form.remember,callback:function(r){t.$set(t.form,"remember",r)},expression:"form.remember"}}),t._v(" "),t.recaptchaPublicKey?r("vue-recaptcha",{ref:"recaptcha",staticClass:"mb-3",attrs:{sitekey:t.recaptchaPublicKey,loadRecaptchaScript:!0,theme:this.$vuetify.theme.isDark?"dark":"light"},on:{verify:function(r){return t.form.recaptcha=r}}}):t._e(),t._v(" "),r(h.Z,{attrs:{align:"center"}},[r(u.Z,{staticClass:"text-center text-md-left"},[r(o.Z,{attrs:{type:"submit",color:"primary",disabled:!t.formIsValid||t.loading||!!t.recaptchaPublicKey&&!t.form.recaptcha,loading:t.loading}},[t._v("\n                  "+t._s(t.$t("Log in"))+"\n                ")])],1),t._v(" "),r(u.Z,{staticClass:"d-flex flex-column text-center text-md-right"},[r("router-link",{attrs:{to:{name:"register"}}},[t._v("\n                  "+t._s(t.$t("Not signed up?"))+"\n                ")]),t._v(" "),r("router-link",{attrs:{to:{name:"password.email"}}},[t._v("\n                  "+t._s(t.$t("Forgot password?"))+"\n                ")])],1)],1)],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},12507:(t,r,e)=>{e.d(r,{Z:()=>v});var n=e(80010),o=e(18001),i=e(20629),a=e(9669),c=e.n(a);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:_(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function v(){}function y(){}function d(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==r&&e.call(b,i)&&(m=b);var w=d.prototype=v.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,i,a,c){var s=h(t[n],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function _(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function l(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){p(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==u(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===u(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const v={name:"OAuth",computed:h(h({},(0,i.rn)("auth",["user"])),{},{providers:function(){return(0,n.v)("oauth")},providersCount:function(){return this.providers?Object.keys(this.providers).length:0}}),methods:{ucfirst:o.Ps,loginWith:function(t){return(r=s().mark((function r(){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c().post("/api/oauth/".concat(t,"/url"));case 2:e=r.sent,n=e.data,window.location.href=n.url;case 5:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){l(i,n,o,a,c,"next",t)}function c(t){l(i,n,o,a,c,"throw",t)}a(void 0)}))})();var r}}}},43205:(t,r,e)=>{e.d(r,{Z:()=>s});var n=e(80010),o=e(18001);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){u(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===i(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const s={computed:c(c({},(0,e(20629).rn)("auth",["user"])),{},{providers:function(){return(0,n.v)("auth.web3")},providersCount:function(){return this.providers?Object.keys(this.providers).length:0}}),methods:{ucfirst:o.Ps}}},96354:(t,r,e)=>{e.d(r,{s:()=>u,x:()=>s});var n=e(15537),o=e(17024),i=e(91864),a=e(57894),c=e(5269),u=function(){var t=this,r=t._self._c;return t.providersCount?r(a.Z,{staticClass:"my-0"},[r(o.Z,{staticClass:"text-center"},t._l(t.providers,(function(e,o){return r(n.Z,{key:o,staticClass:"mx-2",attrs:{fab:"",icon:"",elevation:"5"},on:{click:function(r){return t.loginWith(o)}}},[r(c.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[r(i.Z,t._g({attrs:{large:""}},a),[t._v("\n            mdi-"+t._s(e.mdi||o)+"\n          ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("Log in with {0}",[t.ucfirst(o)])))])])],1)})),1)],1):t._e()},s=[]},4679:(t,r,e)=>{e.d(r,{s:()=>a,x:()=>c});var n=e(15537),o=e(17024),i=e(57894),a=function(){var t=this,r=t._self._c;return t.providersCount?r(i.Z,{staticClass:"mb-3"},t._l(t.providers,(function(e,i){return r(o.Z,{key:i,staticClass:"text-center",attrs:{cols:"12"}},[r(n.Z,{attrs:{color:"secondary",elevation:"5",to:{name:"login.web3",params:{provider:i}}}},[t._v("\n      "+t._s(t.$t("Log in with {0}",[t.ucfirst(i)]))+"\n    ")])],1)})),1):t._e()},c=[]}}]);