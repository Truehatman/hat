"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3816],{15958:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var r=n(22258),a=n(15537),o=n(85893),i=n(5255),s=n(89667),c=n(17024),u=n(66530),l=n(91864),d=n(57894),f=n(96878),h=n(73845),p=n(9669),v=n.n(p),m=n(50175),y=n.n(m);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),s=new $(a||[]);return r(i,"_invoke",{value:Z(t,n,s)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==e&&n.call(y,o)&&(v=y);var b=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(r,o,i,s){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==_(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,s)}))}s(c.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function Z(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=k(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new x(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function b(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function w(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){b(o,r,a,i,s,"next",t)}function s(t){b(o,r,a,i,s,"throw",t)}i(void 0)}))}}const x={mixins:[n(74944).Z],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Add-ons")}},data:function(){return{form:new(y()),data:{}}},created:function(){var t=this;return w(g().mark((function e(){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().get("/api/admin/add-ons");case 2:n=e.sent,r=n.data,t.data=r;case 5:case"end":return e.stop()}}),e)})))()},methods:{disable:function(t){var e=this;return w(g().mark((function n(){var r,a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.form.post("/api/admin/add-ons/".concat(t,"/disable"));case 2:r=n.sent,a=r.data,e.$store.dispatch("message/"+(a.success?"success":"error"),{text:a.message}),a.success&&(e.data.packages[t].enabled=!1,e.data.packages[t].update_available=!1,e.data.packages[t].update_can_be_installed=!1);case 6:case"end":return n.stop()}}),n)})))()},enable:function(t){var e=this;return w(g().mark((function n(){var r,a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.form.post("/api/admin/add-ons/".concat(t,"/enable"));case 2:r=n.sent,(a=r.data).success?e.$router.go():e.$store.dispatch("message/error",{text:a.message});case 5:case"end":return n.stop()}}),n)})))()}}};const Z=(0,n(51900).Z)(x,(function(){var t=this,e=t._self._c;return e(u.Z,[e(d.Z,[e(c.Z,{attrs:{cols:"12"}},[e(o.Z,[e(f.Z,[e(h.qW,[t._v("\n            "+t._s(t.$t("Add-ons"))+"\n          ")])],1),t._v(" "),e(i.ZB,[e(d.Z,{staticClass:"mt-1"},[e(c.Z,[e(a.Z,{attrs:{color:"primary",to:{name:"admin.add-ons.bundle"}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                  mdi-package-variant\n                ")]),t._v("\n                "+t._s(t.$t("Register bundle"))+"\n              ")],1)],1)],1),t._v(" "),t._l(t.data.packages,(function(n,u){return e(d.Z,{key:u},[e(c.Z,[e(o.Z,{attrs:{outlined:""}},[e(i.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(n.name)+"\n                  "),n.enabled?[e(s.Z,{staticClass:"ml-2",attrs:{color:"secondary",small:"",label:""}},[t._v("\n                      "+t._s(n.version)+"\n                    ")])]:t._e()],2),t._v(" "),e(i.ZB,[t._v("\n                  "+t._s(n.description)+"\n                  "),n.missing_system_requirements.length?e(r.Z,{staticClass:"mt-5",attrs:{prominent:"",border:"left",type:"warning",icon:null,outlined:""}},[e("h6",{staticClass:"text-h6 font-weight-light mb-3"},[t._v("\n                      "+t._s(t.$t("System requirements"))+"\n                    ")]),t._v(" "),e("ul",t._l(n.missing_system_requirements,(function(n,r){return e("li",{key:r},[t._v("\n                        "+t._s(n.title)+"\n                      ")])})),0)]):t._e(),t._v(" "),n.enabled&&n.update_available&&!n.update_can_be_installed?e("div",{staticClass:"mt-2 error--text"},[t._v("\n                    "+t._s(t.$t("Please upgrade Stake to version {0} first to be able to upgrade the add-on.",[t.data.releases["add-ons"][u].min_app_version]))+"\n                  ")]):!n.installed||n.enabled||n.min_app_version_installed?t._e():e("div",{staticClass:"mt-2 error--text"},[t._v("\n                    "+t._s(t.$t("Please upgrade Stake to version {0} to use this add-on",[n.min_app_version]))+"\n                  ")])],1),t._v(" "),e(i.h7,[n.installed&&n.min_app_version_installed?[n.update_available?[n.hash?e(a.Z,{attrs:{outlined:"",color:"warning",to:{name:"admin.add-ons.install",params:{id:u}},disabled:!n.update_can_be_installed}},[e(l.Z,{attrs:{left:""}},[t._v("\n                          mdi-upload\n                        ")]),t._v("\n                        "+t._s(t.$t("Upgrade to {0}",[t.data.releases["add-ons"][u].version]))+"\n                      ")],1):t._e()]:n.enabled?[n.hash?e(a.Z,{attrs:{outlined:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:u}}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                          mdi-autorenew\n                        ")]),t._v("\n                        "+t._s(t.$t("Re-install"))+"\n                      ")],1):t._e()]:t._e(),t._v(" "),n.enabled?e(a.Z,{attrs:{outlined:"",color:"error"},on:{click:function(e){return t.disable(u)}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                        mdi-close\n                      ")]),t._v("\n                      "+t._s(t.$t("Disable"))+"\n                    ")],1):e(a.Z,{attrs:{outlined:"",color:"success"},on:{click:function(e){return t.enable(u)}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                        mdi-check\n                      ")]),t._v("\n                      "+t._s(t.$t("Enable"))+"\n                    ")],1),t._v(" "),e(a.Z,{attrs:{outlined:"",color:"grey",to:{name:"admin.add-ons.changelog",params:{id:u}}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                        mdi-text\n                      ")]),t._v("\n                      "+t._s(t.$t("Changelog"))+"\n                    ")],1)]:n.installed?t._e():[n.purchase_url?e(a.Z,{attrs:{outlined:"",color:"primary",href:n.purchase_url,target:"_blank"}},[e(l.Z,{attrs:{left:""}},[t._v("\n                        mdi-cart\n                      ")]),t._v("\n                      "+t._s(t.$t("Purchase"))+"\n                    ")],1):t._e(),t._v(" "),n.hash?e(a.Z,{attrs:{outlined:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:u}}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                        mdi-download\n                      ")]),t._v("\n                      "+t._s(t.$t("Install"))+"\n                    ")],1):t._e()]],2)],1)],1)],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);