"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[430],{85798:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(15537),a=n(85893),o=n(5255),s=n(17024),i=n(66530),c=n(45578),u=n(83240),l=n(91864),d=n(57894),m=n(10698),p=n(27935),f=n(22515),v=n(84002),h=n(96878),y=n(73845),_=n(9669),g=n.n(_),b=n(50175),w=n.n(b),Z=n(74944),x=n(18001),F=n(21556);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function $(){$=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,s=Object.create(o.prototype),i=new L(a||[]);return r(s,"_invoke",{value:w(t,n,i)}),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function m(){}function p(){}function f(){}var v={};c(v,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(S([])));y&&y!==e&&n.call(y,o)&&(v=y);var _=f.prototype=m.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(r,o,s,i){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==k(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,i)}),(function(t){a("throw",t,s,i)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,i)}))}i(c.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=Z(s,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function Z(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,r(_,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var s=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},g(_),c(_,i,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;F(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function L(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){L(o,r,a,s,i,"next",t)}function i(t){L(o,r,a,s,i,"throw",t)}s(void 0)}))}}const C={mixins:[Z.Z],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Maintenance")}},data:function(){return{data:{},maintenanceFormIsValid:null,maintenanceForm:new(w()),commandFormIsValid:null,commandForm:new(w())({command:null,arguments:{}}),cronJobsModal:!1,queueWorkerModal:!1,cronJobsOutput:null,supervisorStatusOutput:null,migrationForm:new(w()),cacheForm:new(w()),clearQueueForm:new(w())({queue:null}),getCronJobsForm:new(w()),getSupervisorServiceStatusForm:new(w()),restartQueueWorkerForm:new(w())}},computed:{commands:function(){return this.data.commands?this.data.commands.map((function(t){return{value:t.class,text:t.description}})):[]},dataLoaded:function(){return this.data&&Object.keys(this.data).length>0}},created:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().get("/api/admin/maintenance");case 2:n=e.sent,r=n.data,t.data=r;case 5:case"end":return e.stop()}}),e)})))()},methods:{switchMaintenanceMode:function(){var t=this;return S($().mark((function e(){var n,r,a;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data.maintenance_mode?"up":"down",e.next=3,t.maintenanceForm.post("/api/admin/maintenance/".concat(n));case 3:r=e.sent,a=r.data,t.data.maintenance_mode=!t.data.maintenance_mode,t.$store.dispatch("message/"+(a.success?"success":"error"),{text:a.message});case 7:case"end":return e.stop()}}),e)})))()},executeCommand:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.commandForm.post("/api/admin/maintenance/command");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},migrate:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.migrationForm.post("/api/admin/maintenance/migrate");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},clearCache:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cacheForm.post("/api/admin/maintenance/cache");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},clearQueue:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.clearQueueForm.post("/api/admin/maintenance/queues/clear");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},stopQueueWorker:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.restartQueueWorkerForm.post((0,F.B)("admin.maintenance.worker.restart"));case 2:n=e.sent,r=n.data,t.$store.dispatch("message/"+(r.success?"success":"error"),{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},getCronJobs:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.cronJobsOutput=null,e.next=3,t.getCronJobsForm.post((0,F.B)("admin.maintenance.cron.jobs"));case 3:n=e.sent,(r=n.data).success?(t.cronJobsModal=!0,t.cronJobsOutput=r.output):t.$store.dispatch("message/error",{text:r.message});case 6:case"end":return e.stop()}}),e)})))()},getSupervisorServiceStatus:function(){var t=this;return S($().mark((function e(){var n,r;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.supervisorStatusOutput=null,e.next=3,t.getSupervisorServiceStatusForm.post((0,F.B)("admin.maintenance.supervisor.status"));case 3:n=e.sent,(r=n.data).success?(t.queueWorkerModal=!0,t.supervisorStatusOutput=r.output):t.$store.dispatch("message/error",{text:r.message});case 6:case"end":return e.stop()}}),e)})))()},copyToClipboard:function(t){return(0,x.vQ)(t.$el.querySelector("input"))}}};const E=(0,n(51900).Z)(C,(function(){var t=this,e=t._self._c;return e(i.Z,[e(d.Z,[e(s.Z,{attrs:{cols:"12"}},[e(a.Z,[e(h.Z,[e(y.qW,[t._v("\n            "+t._s(t.$t("Maintenance"))+"\n          ")])],1),t._v(" "),e(o.ZB,[e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("System info"))+"\n                ")]),t._v(" "),e(o.ZB,[e(p.Z,{attrs:{type:"list-item-three-line",loading:!t.dataLoaded}},[e("div",t._l(t.data.system_info,(function(n,r){return e("div",{key:r},[t._v("\n                        "+t._s(n.title)+": "+t._s(n.value)+"\n                      ")])})),0)])],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Application version"))+"\n                ")]),t._v(" "),e(o.ZB,[e(p.Z,{attrs:{type:"text",loading:!t.dataLoaded}},[t.data.update_available?e("p",{staticClass:"warning--text mb-0"},[e(l.Z,{attrs:{color:"warning",left:""}},[t._v("\n                        mdi-alert\n                      ")]),t._v("\n                      "+t._s(t.$t("New version {0} is available ({1} currently installed).",[t.data.latest_version,t.data.current_version]))+"\n                      "),e("a",{attrs:{href:"/admin/help/app#q10"}},[t._v(t._s(t.$t("How to upgrade?")))])],1):e("p",{staticClass:"success--text mb-0"},[e(l.Z,{attrs:{color:"success",left:""}},[t._v("\n                        mdi-check-all\n                      ")]),t._v("\n                      "+t._s(t.$t("Application is up-to-date (version {0} is installed).",[t.data.latest_version]))+"\n                    ")],1)])],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Cron"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("Some application tasks should be run on a regular basis."))+"\n                    "+t._s(t.$t("To automatically execute these tasks, add the following system cron job."))+"\n                    "+t._s(t.$t("If you are adding a cron job via cPanel, you will need to omit the leading asterisk characters."))+"\n                    "+t._s(t.$t("Please refer to the installation guide for more information on how to add a cron job."))+"\n                  ")]),t._v(" "),e(u.Z,{on:{submit:function(e){return e.preventDefault(),t.cron.apply(null,arguments)}}},[e(v.Z,{ref:"cron",attrs:{dense:"",outlined:"",readonly:"","append-icon":"mdi-content-copy",value:t.data.cron_job_cmd,disabled:!t.dataLoaded},on:{"click:append":function(e){return t.copyToClipboard(t.$refs.cron)}}})],1),t._v(" "),e(p.Z,{attrs:{type:"text",loading:!t.dataLoaded}},[e(u.Z,{staticClass:"d-inline",on:{submit:function(e){return e.preventDefault(),t.getCronJobs.apply(null,arguments)}}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.dataLoaded||t.getCronJobsForm.busy,loading:t.getCronJobsForm.busy}},[t._v("\n                        "+t._s(t.$t("Cron jobs"))+"\n                      ")])],1),t._v(" "),e(c.Z,{model:{value:t.cronJobsModal,callback:function(e){t.cronJobsModal=e},expression:"cronJobsModal"}},[e(a.Z,[e(h.Z,[e(y.qW,[t._v("\n                            "+t._s(t.$t("Cron jobs"))+"\n                          ")]),t._v(" "),e(f.Z),t._v(" "),e(r.Z,{attrs:{icon:""},on:{click:function(e){t.cronJobsModal=!1}}},[e(l.Z,[t._v("mdi-close")])],1)],1),t._v(" "),e(o.ZB,[e("pre",[t._v(t._s(t.cronJobsOutput))])])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Cache"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("The application caches templates, configuration, translation strings, aggregated data etc to improve performance."))+"\n                    "+t._s(t.$t("To clear all caches at once click the button below."))+"\n                  ")]),t._v(" "),e(u.Z,{on:{submit:function(e){return e.preventDefault(),t.clearCache.apply(null,arguments)}}},[e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:t.cacheForm.busy,loading:t.cacheForm.busy}},[t._v("\n                        "+t._s(t.$t("Clear cache"))+"\n                      ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Database"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("After upgrading to a new version of the application it is necessary to update the database objects."))+"\n                    "+t._s(t.$t("All current data will be preserved."))+"\n                  ")]),t._v(" "),e(u.Z,{on:{submit:function(e){return e.preventDefault(),t.migrate.apply(null,arguments)}}},[e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:t.migrationForm.busy,loading:t.migrationForm.busy}},[t._v("\n                        "+t._s(t.$t("Update database"))+"\n                      ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Tasks"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("The app provides a number of service tasks, which can be executed on demand."))+"\n                  ")]),t._v(" "),e(u.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.executeCommand.apply(null,arguments)}},model:{value:t.commandFormIsValid,callback:function(e){t.commandFormIsValid=e},expression:"commandFormIsValid"}},[e(m.Z,{attrs:{items:t.commands,label:t.$t("Task"),error:t.commandForm.errors.has("command"),"error-messages":t.commandForm.errors.get("command"),outlined:"",disabled:!t.data.commands},model:{value:t.commandForm.command,callback:function(e){t.$set(t.commandForm,"command",e)},expression:"commandForm.command"}}),t._v(" "),t.commandForm.command?[t._l(t.data.commands,(function(n){return[n.class===t.commandForm.command?t._l(n.arguments,(function(n,r){return e(v.Z,{key:r,attrs:{label:t.$t(n.title),rules:[t.validationRequired],placeholder:n.default,error:t.commandForm.errors.has("arguments"),"error-messages":t.commandForm.errors.get("arguments"),outlined:""},model:{value:t.commandForm.arguments[n.id],callback:function(e){t.$set(t.commandForm.arguments,n.id,e)},expression:"commandForm.arguments[arg.id]"}})})):t._e()]}))]:t._e(),t._v(" "),e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.commandForm.command||!t.commandFormIsValid||t.commandForm.busy,loading:t.commandForm.busy}},[t._v("\n                        "+t._s(t.$t("Execute"))+"\n                      ")])],1)],2)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Maintenance mode"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("You can enable maintenance mode while updating the application or performing other maintenance tasks so that no one except administrators can use the site."))+"\n                  ")]),t._v(" "),e(u.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.switchMaintenanceMode.apply(null,arguments)}},model:{value:t.maintenanceFormIsValid,callback:function(e){t.maintenanceFormIsValid=e},expression:"maintenanceFormIsValid"}},[e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.maintenanceFormIsValid||t.maintenanceForm.busy,loading:t.maintenanceForm.busy}},[t.data.maintenance_mode?[t._v("\n                          "+t._s(t.$t("Disable maintenance mode"))+"\n                        ")]:[t._v("\n                          "+t._s(t.$t("Enable maintenance mode"))+"\n                        ")]],2)],1)],1)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Queues"))+"\n                ")]),t._v(" "),e(o.ZB,[e(d.Z,[e(s.Z,[e(r.Z,{attrs:{to:{name:"admin.maintenance.jobs.index"},color:"primary"}},[t._v("\n                        "+t._s(t.$t("Jobs"))+"\n                      ")]),t._v(" "),e(r.Z,{attrs:{to:{name:"admin.maintenance.failed-jobs.index"},color:"primary"}},[t._v("\n                        "+t._s(t.$t("Failed jobs"))+"\n                      ")])],1)],1),t._v(" "),e(u.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.clearQueue.apply(null,arguments)}}},[e(m.Z,{attrs:{items:t.data.queues,label:t.$t("Queue"),outlined:"",disabled:!t.data.queues,"hide-details":!0},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.clearQueueForm.queue||t.clearQueueForm.busy,loading:t.clearQueueForm.busy}},[t._v("\n                            "+t._s(t.$t("Delete all jobs from the queue"))+"\n                          ")])],1)]},proxy:!0}]),model:{value:t.clearQueueForm.queue,callback:function(e){t.$set(t.clearQueueForm,"queue",e)},expression:"clearQueueForm.queue"}})],1),t._v(" "),e(d.Z,{staticClass:"mt-2"},[e(s.Z,{attrs:{cols:"12"}},[e(c.Z,{model:{value:t.queueWorkerModal,callback:function(e){t.queueWorkerModal=e},expression:"queueWorkerModal"}},[e(a.Z,[e(h.Z,[e(y.qW,[t._v("\n                              "+t._s(t.$t("Supervisor status"))+"\n                            ")]),t._v(" "),e(f.Z),t._v(" "),e(r.Z,{attrs:{icon:""},on:{click:function(e){t.queueWorkerModal=!1}}},[e(l.Z,[t._v("mdi-close")])],1)],1),t._v(" "),e(o.ZB,[e("pre",[t._v(t._s(t.supervisorStatusOutput))])])],1)],1),t._v(" "),e(u.Z,{staticClass:"d-inline",on:{submit:function(e){return e.preventDefault(),t.getSupervisorServiceStatus.apply(null,arguments)}}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.dataLoaded||t.getSupervisorServiceStatusForm.busy,loading:t.getSupervisorServiceStatusForm.busy}},[t._v("\n                          "+t._s(t.$t("Supervisor status"))+"\n                        ")])],1),t._v(" "),e(u.Z,{staticClass:"d-inline",on:{submit:function(e){return e.preventDefault(),t.stopQueueWorker.apply(null,arguments)}}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.dataLoaded||t.restartQueueWorkerForm.busy,loading:t.restartQueueWorkerForm.busy}},[t._v("\n                          "+t._s(t.$t("Restart queue worker"))+"\n                        ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(d.Z,[e(s.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Log files"))+"\n                ")]),t._v(" "),e(o.ZB,[e(p.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[t.data.log_files&&t.data.log_files.length?e("div",t._l(t.data.log_files,(function(n,a){return e(r.Z,{key:a,staticClass:"text-lowercase",attrs:{color:n.isWritable?"primary":"error",tile:"",text:"",to:{name:"admin.maintenance.logs.show",params:{file:n.name}}}},[e(l.Z,{attrs:{left:""}},[t._v("\n                          mdi-file\n                        ")]),t._v("\n                        "+t._s(n.name)+".log\n                        ("+t._s(n.size)+" "+t._s(t.$t("MB"))+")\n                        "),n.isWritable?t._e():e("span",{staticClass:"text-uppercase"},[t._v("\n                          "+t._s(t.$t("Permission error"))+"!\n                        ")])],1)})),1):e("div",[t._v("\n                      "+t._s(t.$t("There are no log files."))+"\n                    ")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);