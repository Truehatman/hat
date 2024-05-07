"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9842],{54438:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(66530),a=r(7144),o=r(67502),i=r(71616);const s={components:{UserAvatar:r(54806).Z,UserProfileModal:i.Z,DataTable:a.Z,GameMenu:o.Z},middleware:["auth","verified","2fa_passed"],metaInfo:function(){return{title:this.$t("Recent games")}},computed:{headers:function(){return[{text:this.$t("Player"),value:"account.user.name",sortable:!1},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",align:"right",format:"decimal"},{text:this.$t("Win"),value:"win",align:"right",format:"decimal"},{text:this.$t("Profit"),value:"profit",align:"right",format:"decimal"},{text:this.$t("Played"),value:"created_ago",align:"right"},{value:"actions",sortable:!1,align:"right"}]}}};const l=(0,r(51900).Z)(s,(function(){var t=this,e=t._self._c;return e(n.Z,[e("data-table",{attrs:{api:"/api/history/recent",title:t.$t("Recent games"),headers:t.headers,"sort-by":"created_at"},scopedSlots:t._u([{key:"item.account.user.name",fn:function(r){var n=r.item.account.user;return[e("user-avatar",{attrs:{user:n}}),t._v(" "),e("user-profile-modal",{attrs:{user:n}})]}},{key:"item.actions",fn:function(t){var r=t.item;return[e("game-menu",{attrs:{id:r.id,small:""}})]}}])})],1)}),[],!1,null,null,null).exports},4434:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(9669),a=r.n(n),o=r(20629),i=r(18001),s=r(12169),l=r(72220);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new O(a||[]);return n(i,"_invoke",{value:$(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function v(){}function m(){}var y={};l(y,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&r.call(b,o)&&(y=b);var _=m.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(n,o,i,s){var l=h(t[n],t,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==u(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return a("throw",t,i,s)}))}s(l.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function $(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=Z(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function Z(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=m,n(_,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(_),l(_,s,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function d(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const v={name:"DataTable",components:{SearchMenu:r(35598).Z,FilterMenu:l.Z},props:{title:{type:String,required:!0},api:{type:String,required:!0},filters:{type:Array,required:!1,default:function(){return[]}},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},search:{type:Boolean,required:!1,default:!1},searchPlaceholder:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:f(f({},(0,o.Se)({cacheGet:"cache/get"})),{},{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(t,e){return t["item."+e.value]=e,t}),{})}}),created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null,filters:{}}},methods:f(f({},(0,o.nv)({cachePut:"cache/put"})),{},{get:function(){return i.U2.apply(void 0,arguments)},format:function(t,e){return"function"==typeof s[t]?s[t](e):e},updateDataTableOptions:function(t){var e=t.page,r=t.itemsPerPage,n=t.sortBy,a=t.sortDesc;this.options=f(f({},this.options),{},{page:e,itemsPerPage:r,sortBy:n[0],sortDesc:a[0]}),this.cacheOptions(),this.fetchData()},cacheOptions:function(){var t=f(f({},this.options),{},{filters:{},search:null});this.cachePut({key:this.cacheKey,value:t})},filterData:function(t){this.options.filters=t,this.fetchData()},searchData:function(t){this.options.search=t,this.fetchData()},fetchData:function(){var t,e=this;return(t=c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,a().get(e.api,{params:f({page:e.options.page,items_per_page:e.options.itemsPerPage,sort_by:e.options.sortBy,sort_direction:e.sortDirection,search:e.options.search},e.options.filters)});case 3:r=t.sent,n=r.data,e.items=n.items,e.itemsTotal=n.count,e.loading=!1;case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){d(o,n,a,i,s,"next",t)}function s(t){d(o,n,a,i,s,"throw",t)}i(void 0)}))})()}})}},78200:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Approved"),value:"approved"},{text:this.$t("Rejected"),value:"rejected"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},15896:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Sign up"),value:"sign_up"},{text:this.$t("Game loss"),value:"game_loss"},{text:this.$t("Game win"),value:"game_win"},{text:this.$t("Deposit"),value:"deposit"}]}},methods:{change:function(){this.$emit("change",{type:this.value})}}}},5417:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1},hideDetails:{type:Boolean,required:!1,default:!1},solo:{type:Boolean,required:!1,default:!1}},data:function(){return{value:"month",options:[{text:this.$t("By day"),value:"day"},{text:this.$t("By week"),value:"week"},{text:this.$t("By month"),value:"month"},{text:this.$t("By year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},23376:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Yes"),value:1},{text:this.$t("No"),value:0}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},68612:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Created"),value:"created"},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Completed"),value:"completed"},{text:this.$t("Cancelled"),value:"cancelled"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},97448:(t,e,r)=>{r.d(e,{Z:()=>y});var n=r(3184),a=r(63006),o=r(99660),i=r(70485),s=r(89813),l=r(20186),u=r(21448),c=r(48781),d=r(36516),h=r(49724);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===f(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const y={components:{PeriodFilter:n.Z,ComparisonPeriodFilter:a.Z,UserRoleFilter:o.Z,UserStatusFilter:i.Z,GameFilter:s.Z,GameResultFilter:l.Z,DepositWithdrawalStatusFilter:u.Z,DepositWithdrawalMethodStatusFilter:c.Z,AffiliateCommissionTypeFilter:d.Z,AffiliateCommissionStatusFilter:h.Z},props:{filters:{type:Array,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,values:{},key:1}},methods:{change:function(t){this.values=v(v({},this.values),t)},reset:function(){this.key++,this.values={},this.apply()},apply:function(){this.menu=!1,this.$emit("apply",this.values)}}}},78879:(t,e,r)=>{function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:()=>o});const o={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null}},computed:{games:function(){return this.$store.getters["package-manager/getByType"](["game","prediction"])},options:function(){var t=this;return[{text:this.$t("All"),value:null}].concat(n(Object.keys(this.games).map((function(e){return{text:t.games[e].name,value:e}}))))}},methods:{change:function(){this.$emit("change",{game:this.value})}}}},41969:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Profitable"),value:"profitable"},{text:this.$t("Unprofitable"),value:"unprofitable"}]}},methods:{change:function(){this.$emit("change",{result:this.value})}}}},39554:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1},hideDetails:{type:Boolean,required:!1,default:!1},solo:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All time"),value:null},{text:this.$t("Last 24 hours"),value:"last24"},{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},77852:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.value})}}}},88464:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Active"),value:"active"},{text:this.$t("Blocked"),value:"blocked"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},87607:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:["id","small"]}},9483:(t,e,r)=>{r.d(e,{Z:()=>n});const n={props:{placeholder:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,value:null}},methods:{reset:function(){this.value=null,this.search()},search:function(){this.menu=!1,this.$emit("search",this.value)}}}},31719:(t,e,r)=>{r.d(e,{s:()=>h,x:()=>f});var n=r(15537),a=r(85893),o=r(5255),i=r(31280),s=r(91864),l=r(27935),u=r(22515),c=r(96878),d=r(73845),h=function(){var t=this,e=t._self._c;return e(a.Z,[e(c.Z,[t._t("toolbar-prepend"),t._v(" "),e(d.qW,[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e(u.Z),t._v(" "),e(n.Z,{attrs:{icon:"",loading:t.loading,disabled:t.loading},on:{click:t.fetchData}},[e(s.Z,[t._v("mdi-cached")])],1),t._v(" "),t.filters.length?e("filter-menu",{attrs:{filters:t.filters,disabled:t.loading},on:{apply:function(e){return t.filterData(e)}}}):t._e(),t._v(" "),t.search?e("search-menu",{attrs:{placeholder:t.searchPlaceholder,disabled:t.loading},on:{search:function(e){return t.searchData(e)}}}):t._e(),t._v(" "),t._t("toolbar-append")],2),t._v(" "),e(o.ZB,[t._t("table-prepend"),t._v(" "),e(i.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.options.page,"sort-by":t.options.sortBy,"sort-desc":t.options.sortDesc,"items-per-page":t.options.itemsPerPage,"footer-props":t.footerProps,"server-items-length":t.itemsTotal,loading:t.loading,"must-sort":!0,"hide-default-footer":t.hideFooter,"no-data-text":t.$t("No data found"),"no-results-text":t.$t("No data found")},on:{"update:options":t.updateDataTableOptions},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(Array(t.options.itemsPerPage).fill(0),(function(t,r){return e("div",{key:r,staticClass:"align-center my-7"},[e(l.Z,{attrs:{type:"text"}})],1)}))},proxy:!0},t._l(t.slotHeaderMap,(function(e,r){return{key:r,fn:function(n){var a=n.item;return[t.$scopedSlots[r]?t._t(r,null,{item:a}):[t._v("\n          "+t._s(e.format?t.format(e.format,t.get(a,e.value)):t.get(a,e.value))+"\n        ")]]}}}))],null,!0)}),t._v(" "),t._t("table-append")],2)],1)},f=[]},43376:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},14607:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Type"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},76071:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,solo:t.solo,"hide-details":t.hideDetails,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},82051:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Enabled"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},79179:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},18662:(t,e,r)=>{r.d(e,{s:()=>c,x:()=>d});var n=r(15537),a=r(85893),o=r(5255),i=r(18163),s=r(91864),l=r(27099),u=r(22515),c=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on;return[e(n.Z,t._g({attrs:{icon:"",disabled:t.disabled}},a),[e(s.Z,{attrs:{color:Object.keys(t.values).length?"primary":void 0}},[t._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(a.Z,{attrs:{outlined:""}},[e(o.EB,[t._v("\n      "+t._s(t.$t("Filter"))+"\n    ")]),t._v(" "),e(i.Z),t._v(" "),e(o.ZB,{staticClass:"pt-5"},t._l(t.filters,(function(r){return e("".concat(r,"-filter"),{key:"".concat(r,"-").concat(t.key),tag:"component",on:{change:function(e){return t.change(e)}}})})),1),t._v(" "),e(o.h7,[e(u.Z),t._v(" "),e(n.Z,{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.reset}},[t._v("\n        "+t._s(t.$t("Reset"))+"\n      ")]),t._v(" "),e(n.Z,{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.apply}},[t._v("\n        "+t._s(t.$t("Apply"))+"\n      ")])],1)],1)],1)},d=[]},94344:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Game"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},60863:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Result"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},97936:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,solo:t.solo,"hide-details":t.hideDetails,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},51177:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Role"),disabled:t.disabled,outlined:"",multiple:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},47714:(t,e,r)=>{r.d(e,{s:()=>a,x:()=>o});var n=r(10698),a=function(){var t=this;return(0,t._self._c)(n.Z,{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[]},5750:(t,e,r)=>{r.d(e,{s:()=>c,x:()=>d});var n=r(15537),a=r(91864),o=r(48694),i=r(15151),s=r(53146),l=r(33560),u=r(27099),c=function(){var t=this,e=t._self._c;return e(u.Z,{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[e(n.Z,t._g({attrs:{icon:""}},o),[e(a.Z,{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(o.Z,[e(i.Z,{attrs:{to:{name:"history.games.show",params:{id:t.id}},exact:""}},[e(l.Z,[e(a.Z,{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),e(s.km,[e(s.V9,[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),e(i.Z,{attrs:{to:{name:"history.games.verify",params:{id:t.id}},exact:""}},[e(l.Z,[e(a.Z,{attrs:{small:t.small}},[t._v("mdi-check-decagram")])],1),t._v(" "),e(s.km,[e(s.V9,[t._v(t._s(t.$t("Verify")))])],1)],1)],1)],1)},d=[]},68266:(t,e,r)=>{r.d(e,{s:()=>h,x:()=>f});var n=r(15537),a=r(85893),o=r(5255),i=r(18163),s=r(83240),l=r(91864),u=r(27099),c=r(22515),d=r(84002),h=function(){var t=this,e=t._self._c;return e(u.Z,{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on;return[e(n.Z,t._g({attrs:{icon:"",disabled:t.disabled}},a),[e(l.Z,{attrs:{color:t.value?"primary":void 0}},[t._v("\n        mdi-magnify\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(a.Z,{attrs:{outlined:""}},[e(o.EB,[t._v("\n      "+t._s(t.$t("Search"))+"\n    ")]),t._v(" "),e(i.Z),t._v(" "),e(o.ZB,{staticClass:"pt-5"},[e(s.Z,{on:{submit:function(e){return e.preventDefault(),t.search.apply(null,arguments)}}},[e(d.Z,{attrs:{label:t.$t("Search"),placeholder:t.placeholder||t.$t("Search..."),outlined:"",autofocus:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),e(o.h7,[e(c.Z),t._v(" "),e(n.Z,{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.reset}},[t._v("\n        "+t._s(t.$t("Reset"))+"\n      ")]),t._v(" "),e(n.Z,{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.search}},[t._v("\n        "+t._s(t.$t("Search"))+"\n      ")])],1)],1)],1)},f=[]}}]);