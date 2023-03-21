(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1233:function(e,t,r){},1349:function(e,t,r){"use strict";r(1233)},1451:function(e,t,r){"use strict";r.r(t);var head=r(874),o=r.n(head),n=r(873),c=r.n(n),d=r(208),l=r.n(d),f={name:"Login",mixins:[o.a,c.a,l.a],data:function(){return{title:this.$t("user.login"),userName:"",passWord:"",checked:!0,activeName:"0",site_mode:"",isPaid:!1,code:"",loading:!1,canReg:!1,ischeck:!0,preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{forums:{handler:function(e){e.set_reg&&e.set_reg.register_close&&(this.canReg=!0)}}},mounted:function(){var e=this.$route.query,code=e.code,t=e.preurl;t&&(this.preurl=t),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.forums&&this.forums.set_reg&&this.forums.set_reg.register_close&&(this.canReg=!0)},methods:{check:function(e){this.ischeck=e},UserLogin:function(){var e=this;if(this.loading=!0,""===this.userName)this.$message.error("用户名不能为空"),this.loading=!1;else if(""===this.passWord)this.$message.error("密码不能为空"),this.loading=!1;else{var t={data:{attributes:{username:this.userName,password:this.passWord}}};this.$store.dispatch("session/h5Login",t).then((function(t){if(e.loading=!1,t&&t.data&&t.data.data&&t.data.data.id&&(e.logind(t),e.userName="",e.passWord=""),t&&t.data&&t.data.errors&&"register_validate"===t.data.errors[0].code&&(e.$store.commit("session/SET_AUDIT_INFO",{errorCode:"register_validate",username:e.userName}),e.$router.push("/user/warning")),t&&t.data&&t.data.errors&&t.data.errors[0]){var r=t.data.errors[0].detail?t.data.errors[0].detail[0]:t.data.errors[0].code,o=t.data.errors[0].detail?t.data.errors[0].detail[0]:e.$t("core.".concat(r));e.$message.error(o)}})).catch((function(t){e.loading=!1}))}},toRegister:function(){this.$router.push("/user/register?code=".concat(this.code,"&preurl=").concat(this.preurl))},iscanReg:function(){return[this.canReg&&this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type?"":"noreg"]},toWechat:function(){this.$router.push("/user/wechat?code=".concat(this.code,"&preurl=").concat(this.preurl))},toPhonelogin:function(){this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type?this.$router.push("/user/phone-login-register?code=".concat(this.code,"&preurl=").concat(this.preurl)):this.$router.push("/user/phone-login?code=".concat(this.code,"&preurl=").concat(this.preurl))}}},m=(r(1349),r(12)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"register"},[r("div",{staticClass:"register-header"},[e._v(e._s(e.$t("user.userlogin")))]),e._v(" "),r("div",{staticClass:"register-content"},[r("form",[r("div",{staticClass:"input-box"},[r("span",{staticClass:"title"},[e._v(e._s(e.$t("user.usrname"))+"：")]),e._v(" "),r("el-input",{model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),r("div",{staticClass:"input-box"},[r("span",{staticClass:"title"},[e._v(e._s(e.$t("user.pwd"))+"：")]),e._v(" "),r("el-input",{attrs:{type:"password","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.UserLogin(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),e._v(" "),r("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:e.UserLogin}},[e._v("\n        "+e._s(e.$t("user.login"))+"\n      ")]),e._v(" "),r("div",{staticClass:"desc"},[r("div",{staticClass:"agreement"},[r("el-checkbox",{staticClass:"checkbox-btn",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),r("span",{staticClass:"agree"},[e._v(e._s(e.$t("user.status"))+" ")])],1),e._v(" "),r("div",{staticClass:"logorreg"},[e.canReg&&e.forums&&e.forums.set_reg&&0===e.forums.set_reg.register_type?r("span",[e._v("\n            "+e._s(e.$t("user.noexist"))+"\n            "),r("span",{staticClass:"agreement_text",on:{click:e.toRegister}},[e._v("\n              "+e._s(e.$t("user.register"))+"\n            ")])]):e._e(),e._v(" "),e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms?r("nuxt-link",{class:["findpass",e.iscanReg()],attrs:{to:"/modify/findpwd"}},[e._v("\n            "+e._s(e.$t("modify.findpawdtitle"))+"\n          ")]):e._e()],1)]),e._v(" "),r("div",{staticClass:"otherlogin"},[e.forums&&e.forums.passport&&e.forums.passport.oplatform_close&&e.forums.passport.offiaccount_close||e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms&&e.forums.set_reg&&2!==e.forums.set_reg.register_type||e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms&&e.forums.set_reg&&2===e.forums.set_reg.register_type&&e.forums.passport&&!e.forums.passport.oplatform_close?r("div",{staticClass:"otherlogin-title"}):e._e(),e._v(" "),e.forums&&e.forums.passport&&e.forums.passport.oplatform_close&&e.forums.passport.offiaccount_close?r("svg-icon",{staticClass:"wechat-icon",attrs:{type:"wechatlogin"},on:{click:e.toWechat}}):e._e(),e._v(" "),e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms&&e.forums.set_reg&&2!==e.forums.set_reg.register_type?r("svg-icon",{staticClass:"phone-icon",attrs:{type:"phonelogin"},on:{click:e.toPhonelogin}}):e._e(),e._v(" "),e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_sms&&e.forums.set_reg&&2===e.forums.set_reg.register_type&&e.forums.passport&&!e.forums.passport.oplatform_close?r("svg-icon",{staticClass:"phone-icon",attrs:{type:"phonelogin"},on:{click:e.toPhonelogin}}):e._e()],1)],1)])]):e._e()}),[],!1,null,"8570e16c",null);t.default=component.exports;installComponents(component,{SvgIcon:r(78).default})},873:function(e,t,r){var o=r(882);r(20),r(66),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error?code=permissionDenied")}}}}},methods:{handleError:function(e){var t=arguments,r=this;return o(regeneratorRuntime.mark((function o(){var n,c,d,l,f,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=t.length>1&&void 0!==t[1]?t[1]:"",c=e.response.data.errors,!(Array.isArray(c)&&c.length>0)){o.next=17;break}if(d=c[0].code,l=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,f=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:r.$t("core.".concat(l)),"site_closed"!==c[0].code){o.next=10;break}return o.next=9,r.siteClose(c);case 9:return o.abrupt("return",o.sent);case 10:if("need_ext_fields"!==c[0].code){o.next=14;break}return m=r.$store.getters["session/get"]("userId"),r.$router.push("/user/supple-mentary?id=".concat(m)),o.abrupt("return");case 14:"Permission Denied"===d?r.$message.error(r.$t("core.permission_denied2")):"content_banned_show_words"===d?r.$message.error(r.$t("core.content_banned_show_words")+c[0].detail):r.$message.error(f),r.errorCodeHandler.default[d]&&r.errorCodeHandler.default[d](),n&&r.errorCodeHandler[n][d]&&r.errorCodeHandler[n][d]();case 17:case"end":return o.stop()}}),o)})))()},siteClose:function(e){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return r.next=5,t.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},874:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},882:function(e,t){function r(e,t,r,o,n,c,d){try{var l=e[c](d),f=l.value}catch(e){return void r(e)}l.done?t(f):Promise.resolve(f).then(o,n)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(n,c){var d=e.apply(t,o);function l(e){r(d,n,c,l,f,"next",e)}function f(e){r(d,n,c,l,f,"throw",e)}l(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0}}]);