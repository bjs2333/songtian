(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1049:function(t,e,r){"use strict";r(961)},1052:function(t,e,r){"use strict";r.r(e);var n={name:"TopicWxPay",props:{qrCode:{type:String,default:""}}},o=(r(1049),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("message-box",{attrs:{title:t.$t("pay.pay")},on:{close:function(e){return t.$emit("close")}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("svg-icon",{staticStyle:{fill:"#09BB07","font-size":"30px"},attrs:{type:"wechat"}}),t._v(" "),r("span",[t._v(t._s(t.$t("pay.wxPay")))])],1),t._v(" "),r("div",{staticClass:"tip"},[t._v(t._s(t.$t("pay.wechatTimeLimit")))]),t._v(" "),r("div",{staticClass:"container-qr-code"},[r("img",{staticStyle:{width:"138px",height:"138px"},attrs:{src:t.qrCode,alt:"qr-code"}})]),t._v(" "),r("div",{staticClass:"scan-tip"},[r("svg-icon",{staticStyle:{display:"block","font-size":"32px"},attrs:{type:"wx-scan"}}),t._v(" "),r("div",{staticClass:"tip"},[r("span",[t._v(t._s(t.$t("pay.wechatScan")))]),t._v(" "),r("span",[t._v(t._s(t.$t("pay.wechatScanPay")))])])],1)])])}),[],!1,null,"028323c1",null);e.default=component.exports;installComponents(component,{SvgIcon:r(78).default,MessageBox:r(877).default})},1067:function(t,e,r){r(14),t.exports={data:function(){return{orderNo:"",paymentType:0,paymentStatus:0}},methods:{createOrder:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!this.defaultLoading){this.defaultLoading=!0;var d={_jv:{type:"/orders"},is_anonymous:t,type:n,amount:r};return d.payee_id=c,this.threadId&&(d.thread_id=this.threadId),this.$store.dispatch("jv/post",d).then((function(data){e.orderNo=data.order_sn,e.paymentType=o}),(function(t){return e.handleError(t)}))}},payOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r={_jv:{type:"/trade/pay/order/".concat(this.orderNo)},order_sn:this.orderNo,payment_type:this.paymentType,pay_password:e};return this.$store.dispatch("jv/post",r).then((function(data){return 10===t.paymentType?data.wechat_qrcode:(t.$message.success(t.$t("pay.paySuccess")),t.passwordError=!1,t.showPasswordInput=!1,t.orderNo)}),(function(e){var r=e.response.data.errors;return"pay_password_failures_times_toplimit"===r[0].code?(t.passwordError=!0,t.passwordErrorTip=t.$t("core.pay_password_failures_times_toplimit"),Promise.reject()):"validation_error"===r[0].code?(t.passwordError=!0,t.passwordErrorTip=r[0].detail[0],Promise.reject()):void t.handleError(e)}))},wxPayActive:function(){var t=this;return this.showWxPay=!0,new Promise((function(e,r){var n=setInterval((function(){1===t.paymentStatus&&(clearInterval(n),t.showWxPay=!1,t.$message.success(t.$t("pay.paySuccess")),e(t.orderNo)),t.showWxPay||(clearInterval(n),r()),t.getOrderStatus()}),1e3)}))},getOrderStatus:function(){var t=this,e={_jv:{type:"/orders/".concat(this.orderNo)},orderNo:this.orderNo};return this.$store.dispatch("jv/get",e).then((function(data){t.paymentStatus=data.status}),(function(e){return t.handleError(e)}))},onFindPassword:function(){this.showPasswordInput=this.passwordError=!1,this.passwordErrorTip="",this.findPassword=!0}}}},1068:function(t,e,r){"use strict";r(983)},1069:function(t,e,r){"use strict";r(984)},1070:function(t,e,r){"use strict";r(985)},1075:function(t,e,r){"use strict";r.r(e);r(207);var n=r(947),o={name:"TopicCheckoutCounter",props:{redpacket:{type:Object,default:function(){}},offerMoney:{type:[String,Number],default:0},threadType:{type:Number,default:0},user:{type:Object,default:function(){}},amount:{type:[String,Number],default:""},content:{type:String,default:""},rewardOrPay:{type:String,default:""},beAskedUser:{type:Object,default:function(){}},showAnonymous:{type:Boolean,default:!0},askOrWatchAnswer:{type:String,default:"ask"},showWechatPay:{type:Boolean,default:!0},lowestPrice:{type:[String,Number],default:""}},data:function(){return{hideAvatar:!1,text:["getRemainingContent","getRemainingContent","getVideo","getPicture","getAudio","getRemainingContent"],payWay:"wxPay",rewardAmount:"",defaultAmounts:["1","2","5","10","20","50","88","128"],loading:!1}},computed:{showAmount:function(){return"redpacket"===this.rewardOrPay?1===this.redpacket.rule?this.formatToFixed(this.redpacket.money):this.formatToFixed(this.redpacket.money*this.redpacket.number):"offerReward"===this.rewardOrPay?this.formatToFixed(this.offerMoney):"reward"===this.rewardOrPay?this.formatToFixed(this.rewardAmount):"renewal"===this.rewardOrPay?this.formatToFixed(this.lowestPrice):this.amount},userWallet:function(){var t=this.$store.state.user.info.attributes;return{walletBalance:t.walletBalance,canWalletPay:t.canWalletPay}},enoughBalance:function(){return"reward"===this.rewardOrPay?parseFloat(this.rewardAmount||"0")<=parseFloat(this.userWallet.walletBalance):"redpacket"===this.rewardOrPay||"offerReward"===this.rewardOrPay?this.showAmount<=parseFloat(this.userWallet.walletBalance):parseFloat(this.amount)<=parseFloat(this.userWallet.walletBalance)}},watch:{showWechatPay:{handler:function(t){this.payWay=t?"wxPay":"walletPay"},immediate:!0}},created:function(){var t=this;this.loading=!0;var e=this.$store.state.user.info.id;e?this.$store.dispatch("user/getUserInfo",e).then((function(){t.$store.commit("session/SET_USER_ID",e),t.loading=!1}),(function(e){return t.$store.commit("user/SET_USER_INFO",{})})):this.loading=!1},methods:{handlePay:function(){if("renewal"===this.rewardOrPay&&(this.rewardAmount=this.lowestPrice),"redpacket"===this.rewardOrPay||"offerReward"===this.rewardOrPay?this.rewardAmount=+this.showAmount:this.rewardAmount=+this.formatToFixed(this.rewardAmount),"walletPay"===this.payWay&&+this.userWallet.walletBalance<this.rewardAmount)return this.$message.warning("钱包余额不足");this.$emit("paying",{payWay:this.payWay,hideAvatar:this.hideAvatar,rewardAmount:this.rewardAmount})},formatAmount:function(t){t.target.value=Object(n.a)(t.target.value),this.rewardAmount=t.target.value},formatToFixed:function(t){return(parseFloat(t||"0")+1e-6).toFixed(2)}}},c=(r(1068),r(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("message-box",{attrs:{title:t.$t("pay.checkoutCounter")},on:{close:function(e){return t.$emit("close")}}},[r("div",{staticClass:"top"},[r("div",{staticClass:"row"},[r("div",{staticClass:"head"},[t._v(t._s(t.$t("pay.payProduct")))]),t._v(" "),"redpacket"===t.rewardOrPay?r("div",{staticClass:"body product-information"},[r("span",{staticClass:"title"},[t._v("支付红包")]),t._v(" "),r("span",[t._v("支付人："+t._s(t.user.username||""))])]):5===t.threadType&&"offerReward"===t.rewardOrPay?r("div",{staticClass:"body product-information"},[r("span",{staticClass:"title"},[t._v("支付悬赏")]),t._v(" "),r("span",[t._v("支付人："+t._s(t.user.username||""))])]):5===t.threadType&&"reward"===t.rewardOrPay?r("div",{staticClass:"body product-information"},[r("span",{staticClass:"title"},[t._v("\n          "+t._s("ask"===t.askOrWatchAnswer?t.$t("post.askHim"):t.$t("topic.watchAnswer"))+"\n        ")]),t._v(" "),r("span",[t._v(t._s(t.$t("post.answerer")+t.beAskedUser.username))])]):10===t.threadType&&"renewal"===t.rewardOrPay?r("div",{staticClass:"body product-information"},[r("span",{staticClass:"title"},[t._v("站点续费")])]):r("div",{staticClass:"body product-information"},["reward"===t.rewardOrPay?r("span",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("pay.supportAuthor")+t.$t("pay.keepWriting"))+"\n        ")]):r("span",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("pay.supportAuthor")+t.$t("pay."+t.text[t.threadType])+t.$t("pay.getRight"))+"\n        ")]),t._v(" "),r("span",[t._v(t._s(t.$t("topic.author")+": "+(t.user.username||"")))]),t._v(" "),r("span",{staticClass:"thread-content",domProps:{innerHTML:t._s(t.$xss(t.$t("topic.content")+": "+t.content))}})]),t._v(" "),"pay"===t.rewardOrPay?r("div",{staticClass:"amount"},[t._v("￥"+t._s(t.showAmount))]):t._e()]),t._v(" "),"renewal"===t.rewardOrPay?r("div",{staticClass:"row"},[r("div",{staticClass:"head reward"},[t._v("\n        "+t._s(t.$t("site.pay")+t.$t("pay.sumOfMoney"))+"\n      ")]),t._v(" "),r("div",{staticClass:"body reward"},[r("label",[r("span",[t._v("￥")]),t._v(" "),r("input",{attrs:{disabled:0!==t.lowestPrice,maxlength:"7",type:"text"},domProps:{value:t.lowestPrice}})])])]):t._e(),t._v(" "),"reward"===t.rewardOrPay?r("div",{staticClass:"row"},[r("div",{staticClass:"head reward"},[t._v("\n        "+t._s(t.$t("topic.reward")+t.$t("pay.sumOfMoney"))+"\n      ")]),t._v(" "),r("div",{staticClass:"body reward"},[r("label",[r("span",[t._v("￥")]),t._v(" "),r("input",{attrs:{placeholder:t.$t("pay.inputRewardAmount"),maxlength:"7",type:"text"},domProps:{value:t.rewardAmount},on:{input:t.formatAmount}})]),t._v(" "),r("div",{staticClass:"default-amounts"},t._l(t.defaultAmounts,(function(e,n){return r("button",{key:n,class:{selected:e===t.rewardAmount},on:{click:function(r){t.rewardAmount=e}}},[t._v("\n            ￥"+t._s(e)+"\n          ")])})),0)])]):t._e(),t._v(" "),t.showAnonymous?r("div",{staticClass:"row"},[r("div",{staticClass:"head"},[t._v(t._s(t.$t("pay.hideAvatar")))]),t._v(" "),r("div",{staticClass:"body hide-avatar",on:{click:function(e){t.hideAvatar=!t.hideAvatar}}},[t.hideAvatar?r("svg-icon",{staticStyle:{"font-size":"18px"},attrs:{type:"checked"}}):r("svg-icon",{staticStyle:{"font-size":"18px"},attrs:{type:"unchecked"}}),t._v(" "),r("span",[t._v(t._s(t.$t("pay.hideMyAvatar")))])],1)]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"head"},[t._v(t._s(t.$t("pay.payType")))]),t._v(" "),t.showWechatPay?r("div",{staticClass:"body pay-way"},[r("div",{staticClass:"pay-card",class:{"pay-card":!0,selected:"wxPay"===t.payWay},on:{click:function(e){t.payWay="wxPay"}}},[r("div",{staticClass:"detail"},[r("div",{staticClass:"pay-title"},[r("svg-icon",{staticClass:"active-svg-wx",staticStyle:{fill:"#8590A6","font-size":"20px"},attrs:{type:"wechat"}}),t._v(" "),r("span",[t._v(t._s(t.$t("pay.wxPay")))]),t._v(" "),r("div",{staticClass:"pay-tip"},[r("div",[r("span",[t._v(t._s(t.$t("pay.wxPayTipUse")))]),t._v(" "),r("span",{staticClass:"active-tip",staticStyle:{"font-weight":"bold"}},[t._v("\n                    "+t._s(t.$t("pay.wxPayTipScan"))+"\n                  ")])]),t._v(" "),r("span",[t._v(t._s(t.$t("pay.wxPayTipPay")))])])],1),t._v(" "),r("div",{staticClass:"pay-amount"},[t._v("￥"+t._s(t.showAmount))])])])]):t._e(),t._v(" "),r("div",{staticClass:"body pay-way"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"pay-card",class:{"pay-card":!0,selected:"walletPay"===t.payWay},on:{click:function(e){t.payWay="walletPay"}}},[r("div",{staticClass:"detail"},[r("div",{staticClass:"pay-title"},[r("svg-icon",{staticClass:"active-svg-wallet",staticStyle:{fill:"#8590a6","font-size":"20px"},attrs:{type:"wallet"}}),t._v(" "),r("span",[t._v(t._s(t.$t("pay.walletPay")))]),t._v(" "),r("div",{staticClass:"pay-tip"},[t.enoughBalance?r("div",[t.userWallet.canWalletPay?t._e():r("nuxt-link",{staticClass:"not-enough-balance",attrs:{to:"/my/wallet"}},[t._v("\n                    "+t._s(t.$t("pay.needToResetPassword"))+"\n                  ")]),t._v(" "),r("div",[t._v(t._s(t.$t("pay.walletBalance")))])],1):r("div",[t.userWallet.canWalletPay?r("span",{staticClass:"not-enough-balance"},[t._v(t._s(t.$t("pay.walletBalanceNo")))]):r("nuxt-link",{staticClass:"not-enough-balance",attrs:{to:"/my/wallet"}},[t._v("\n                    "+t._s(t.$t("pay.needToResetPassword"))+"\n                  ")])],1),t._v(" "),r("div",[r("span",[t._v("￥ "+t._s(t.userWallet.walletBalance))])])])],1),t._v(" "),r("div",{staticClass:"pay-amount"},[t._v("￥"+t._s(t.showAmount))])])])])])]),t._v(" "),r("div",{staticClass:"bottom"},["redpacket"!==t.rewardOrPay&&"offerReward"!==t.rewardOrPay&&"renewal"!==t.rewardOrPay?r("span",[t._v("￥\n      "+t._s(t.showAmount+t.$t("pay.rmb")+t.$t("pay.payTo")+"，"+(t.beAskedUser.username||t.user.username))+"\n      "+t._s("wxPay"===t.payWay?t.$t("pay.ofAccount"):t.$t("pay.ofWalletAccount"))+"\n    ")]):t._e(),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:"wxPay"===t.payWay,expression:"payWay === 'wxPay'"}],staticClass:"checkout-button",attrs:{type:"primary"},on:{click:t.handlePay}},[t._v("\n      "+t._s(t.$t("pay.scanPay"))+"\n    ")]),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:"walletPay"===t.payWay,expression:"payWay === 'walletPay'"}],staticClass:"checkout-button",staticStyle:{margin:"0"},attrs:{disabled:!t.enoughBalance||!t.userWallet.canWalletPay,type:"primary"},on:{click:t.handlePay}},[t._v("\n      "+t._s(t.$t("pay.surePay"))+"\n    ")])],1)])}),[],!1,null,"2783aa83",null);e.default=component.exports;installComponents(component,{SvgIcon:r(78).default,MessageBox:r(877).default})},1076:function(t,e,r){"use strict";r.r(e);r(207);var n={name:"TopicPassword",props:{price:{type:[Number,String],default:""},passwordError:{type:Boolean,default:!1},passwordErrorTip:{type:String,default:""}}},o=(r(1069),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("message-box",{attrs:{title:t.$t("pay.checkoutCounter")},on:{close:function(e){return t.$emit("close")}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"block show-amount"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("pay.pay")+t.$t("pay.sumOfMoney")))]),t._v(" "),r("div",{staticClass:"amount"},[r("span",{staticClass:"icon"},[t._v("￥")]),t._v(" "),r("span",[t._v(t._s(t.price))])])]),t._v(" "),r("div",{staticClass:"block input-password"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("pay.payPassword")))]),t._v(" "),r("password-input",{attrs:{error:t.passwordError},on:{password:function(e){return t.$emit("password",e)},type:function(e){return t.$emit("update:passwordError",!1)}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.passwordError,expression:"passwordError"}],staticClass:"error-tip"},[t._v("\n        "+t._s(t.passwordErrorTip?t.passwordErrorTip:t.$t("pay.passwordError"))+"\n      ")])],1),t._v(" "),r("span",{staticClass:"forget-password",on:{click:function(e){return t.$emit("findPassword")}}},[t._v(t._s(t.$t("topic.forgetPasswordFindIt")))])])])}),[],!1,null,"0b2b60f4",null);e.default=component.exports;installComponents(component,{PasswordInput:r(1079).default,MessageBox:r(877).default})},1079:function(t,e,r){"use strict";r.r(e);var n={name:"PasswordInput",props:{error:{type:Boolean,default:!1}},data:function(){return{password:""}},watch:{error:function(t){t&&(this.password="")}},mounted:function(){document.addEventListener("keyup",this.onInput)},methods:{onInput:function(t){if(["0","1","2","3","4","5","6","7","8","9"].indexOf(t.key)>=0&&(this.password+=t.key,this.$emit("type")),6===this.password.length)return this.$emit("password",this.password);this.password.length>6&&(this.password=this.password.substring(0,6)),"Backspace"===t.key&&(this.password=this.password.substr(0,this.password.length-1))}}},o=(r(1070),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"code"},t._l(6,(function(e,n){return r("span",{key:n,class:{"code-item":!0,filled:t.password[n],error:t.error}},[t._v(t._s(t.password[n]?"*":" "))])})),0)}),[],!1,null,"49461560",null);e.default=component.exports},1183:function(t,e,r){},1284:function(t,e,r){"use strict";r(1183)},1426:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(14),r(18),r(81),r(51),r(214),r(66),r(20),r(873)),c=r.n(o),head=r(874),d=r.n(head),time=r(875),l=r(1067),f=r.n(l),v={layout:"center_layout",name:"SiteInfo",mixins:[c.a,d.a,f.a],data:function(){return{showCheckoutCounter:!1,title:this.$t("manage.circleinfo"),userId:this.$store.state.user.info.id,groupsId:"",inputInfo:"",isModify:!1,loading:!1,permissionList:[],showWxPay:!1,wechatQrCode:"",showPasswordInput:!1,passwordError:!1,findPassword:!1,passwordErrorTip:""}},computed:{currentUser:function(){return this.$store.state.user.info.attributes||{}},forums:function(){var t=this.$store.state.site.info.attributes;return t},userInfo:function(){return this.$store.state.user.info.attributes||{}},day:function(){var t=this.$store.state.site.info.attributes;return t&&t.set_site&&t.set_site.site_expire?t.set_site.site_expire:""},price:function(){var t=this.$store.state.site.info.attributes;return t&&t.set_site&&t.set_site.site_price?t.set_site.site_price:0},canWechatPay:function(){return!(!this.forums||!this.forums.paycenter)&&this.forums.paycenter.wxpay_close}},mounted:function(){this.inputInfo=this.forums&&this.forums.set_site&&this.forums.set_site.site_introduction,this.groupsId=this.forums&&this.forums.user&&this.forums.user.groups&&this.forums.user.groups.length>0&&this.forums.user.groups[0].id,this.getPermissions(),this.reloadForums()},methods:{jump2ManagePage:function(){this.forums&&this.forums.other&&(this.forums.other.can_edit_user_group||this.forums.other.can_edit_user_status)&&this.$router.push("/manage")},reloadForums:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("site/getSiteInfo");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))()},handleModify:function(){this.isModify=!this.isModify,this.isModify&&(this.inputInfo=this.forums&&this.forums.set_site&&this.forums.set_site.site_introduction)},confirmModify:function(){var t=this;if(!this.loading){var e={data:[{attributes:{key:"site_introduction",value:this.inputInfo,tag:"default"}}]};this.loading=!0,this.$store.dispatch("jv/post",[{_jv:{type:"settings"}},{data:e}]).then(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("site/getSiteInfo");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:t.isModify=!1,t.$message.success(t.$t("discuzq.msgBox.modifySuccess"));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).catch((function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}},getPermissions:function(){var t=this;this.$store.dispatch("jv/get",["groups",{params:{"filter[type]":"invite",include:["permission"]}}]).then((function(e){var r=t.forums&&t.forums.user&&t.forums.user.groups&&t.forums.user.groups.length>0&&t.forums.user.groups[0].id,n=[];e.forEach((function(t){+t._jv.id==+r&&(n=(n=t.permission).filter((function(t){return"createThread"!==t.permission})))})),t.permissionList=n.filter((function(t){return"user.edit"!==t.permission}))}))},handleExpiredAt:function(t){return t?t.substr(0,10):this.$t("site.permanent")},handlePermission:function(t){return t.includes("canBeAsked.money")?this.$t("permission.canBeAsked_money",{lowPrice:t.match(/\d+$/)[0]}):this.$t("permission.".concat(t.replace(/\./g,"_")))},handleDays:function(t){var e=Math.round(new Date(t)/1e3);return Object(time.c)(e)},renewal:function(){this.showCheckoutCounter=!0},paying:function(t){var e=this,r=t.payWay,n=t.hideAvatar,o=t.rewardAmount;if("walletPay"===r)this.createOrder(n,o,8,20).then((function(){e.showPasswordInput=!0})).finally((function(){e.defaultLoading=!1}));else if("wxPay"===r){if(!this.forums.paycenter.wxpay_close)return this.$message.warning(this.$t("pay.wxPayClose"));this.createOrder(n,o,8,10).then((function(){e.payOrder().then((function(t){e.wechatQrCode=t,e.wxPayActive().then((function(){e.getUserInfo()}),(function(){}))}),(function(){}))})).finally((function(){e.defaultLoading=!1}))}this.showCheckoutCounter=!1},onPasswordInputCompleted:function(t){var e=this;this.payOrder(t).then((function(){e.getUserInfo()}),(function(){}))},getUserInfo:function(){var t=this,e=this.$store.state.user.info.id;this.$store.dispatch("user/getUserInfo",e).then((function(){t.$store.commit("session/SET_USER_ID",e),t.loading=!1}),(function(e){return t.$store.commit("user/SET_USER_INFO",{})}))}}},h=(r(1284),r(12)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-info-container"},[t.forums?n("div",[n("div",{staticClass:"logo-content"},[n("img",{staticClass:"logo",attrs:{src:t.forums.set_site&&t.forums.set_site.site_logo?t.forums.set_site.site_logo:r(353),alt:"logo"}})]),t._v(" "),n("div",{staticClass:"site-info"},[n("div",{staticClass:"avatar"},[t.forums.set_site&&t.forums.set_site.site_author?n("avatar",{attrs:{user:{id:t.forums.set_site.site_author.id,username:t.forums.set_site.site_author.username,avatarUrl:t.forums.set_site.site_author.avatar},size:40,round:!0}}):n("avatar",{attrs:{user:{id:0,username:"无",avatarUrl:""},"prevent-jump":!0,size:40,round:!0}}),t._v(" "),t.forums.set_site&&t.forums.set_site.site_author?n("div",{staticClass:"right"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("site.circlemaster")))]),t._v(" "),n("div",{staticClass:"value name text-hidden"},[t._v("\n            "+t._s(t.forums.set_site&&t.forums.set_site.site_author.username)+"\n          ")])]):t._e()],1),t._v(" "),n("div",{staticClass:"member",on:{click:t.jump2ManagePage}},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("home.theme")))]),t._v(" "),n("div",{staticClass:"value"},[t._v("\n          "+t._s(t.forums.other&&t.forums.other.count_users)+"\n        ")])]),t._v(" "),n("div",{staticClass:"threads"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("manage.contents")))]),t._v(" "),n("div",{staticClass:"value"},[t._v("\n          "+t._s(t.forums.other&&t.forums.other.count_threads)+"\n        ")])]),t._v(" "),n("div",{staticClass:"create-time"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("manage.creationtime")))]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_install?n("div",{staticClass:"value"},[t._v("\n          "+t._s((t.forums.set_site&&t.forums.set_site.site_install).substr(0,10))+"\n        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"site-detail"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title base-font-size"},[t._v("\n          "+t._s(t.$t("manage.siteintroduction"))+"\n        ")]),t._v(" "),1==+t.groupsId?n("div",{staticClass:"modify",on:{click:t.handleModify}},[t._v("\n          "+t._s(t.$t("profile.modify"))+"\n        ")]):t._e()]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_introduction?n("div",{staticClass:"content base-font-size"},[t._v("\n        "+t._s(t.forums.set_site.site_introduction)+"\n      ")]):n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("modify.noSiteInfo"))+"\n      ")]),t._v(" "),n("el-dialog",{attrs:{title:t.$t("modify.modifySiteInfo"),visible:t.isModify,width:"620px","custom-class":"custom-dialog","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.isModify=e}}},[n("div",{staticClass:"dialog-main"},[n("el-input",{staticClass:"custom-input",attrs:{type:"textarea",rows:5,placeholder:t.$t("modify.siteInfoPlaceholder")},model:{value:t.inputInfo,callback:function(e){t.inputInfo=e},expression:"inputInfo"}})],1),t._v(" "),n("div",{staticClass:"dialog-footer"},[n("el-button",{attrs:{type:"primary",size:"medium",loading:t.loading},on:{click:t.confirmModify}},[t._v("\n            "+t._s(t.$t("discuzq.ok"))+"\n          ")]),t._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:function(e){t.isModify=!1}}},[t._v("\n            "+t._s(t.$t("discuzq.msgBox.cancel"))+"\n          ")])],1)])],1),t._v(" "),t.forums&&t.forums.set_site?n("div",{staticClass:"circlemode"},[n("div",{staticClass:"title base-font-size"},[t._v("\n        "+t._s(t.$t("site.circlemode"))+" \\ "+t._s(t.$t("site.price"))+"\n      ")]),t._v(" "),t.forums.set_site&&"public"===t.forums.set_site.site_mode?n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("site.publicmode"))+" \\ "+t._s(t.$t("post.free"))+"\n      ")]):n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("site.paymentmode"))+" \\ "+t._s(t.$t("post.yuanItem"))+t._s(t.forums.set_site.site_price)+" （"+t._s(t.forums.set_site.site_expire?t.$t("site.periodvalidity")+t.forums.set_site.site_expire+t.$t("site.day"):t.$t("site.permanent"))+"）\n      ")])]):t._e(),t._v(" "),n("div",{staticClass:"permission"},[n("div",{staticClass:"title base-font-size"},[t._v("\n        "+t._s(t.$t("manage.myRole"))+" \\ "+t._s(t.$t("site.permission"))+"\n      ")]),t._v(" "),t.userInfo?n("div",{staticClass:"user-detail"},[n("div",{staticClass:"avatar"},[n("avatar",{attrs:{user:{id:t.userInfo.id,username:t.userInfo.username,avatarUrl:t.userInfo.avatarUrl},"prevent-jump":!0,size:50,round:!0}})],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"name base-font-size"},[t._v(t._s(t.userInfo.username))]),t._v(" "),n("div",{staticClass:"role"},[t._v("\n            "+t._s(t.$t("site.role"))+"\n            "+t._s(t.forums.user&&t.forums.user.groups&&t.forums.user.groups.length>0&&t.forums.user.groups[0].name||"")+"\n          ")]),t._v(" "),t.userInfo.joinedAt?n("div",{staticClass:"join-time"},[t._v("\n            "+t._s(t.$t("manage.joinedTime"))+"\n            "+t._s(t.userInfo.joinedAt.substr(0,10))+"\n            "),t.forums&&"pay"===t.forums.set_site.site_mode?n("div",{staticClass:"inline"},[t._v("\n              , "+t._s(t.$t("site.periodvalidity")+t.$t("site.to")+"："+t.handleExpiredAt(t.userInfo.expiredAt))+"\n              ")]):t._e(),t._v(" "),t.forums.set_site&&"pay"===t.forums.set_site.site_mode&&""!==t.forums.set_site.site_expire?n("div",{staticClass:"inline renewal",on:{click:t.renewal}},[t._v("\n              "+t._s(""===t.day?t.$t("site.renewal"):t.$t("site.renewalTime",{num:t.day}))+"\n            ")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"permission-list"},t._l(t.permissionList,(function(e,r){return n("div",{key:r,staticClass:"item"},[t._v("\n              "+t._s(t.handlePermission(e.permission))+"\n            ")])})),0)])]):t._e()])]):t._e(),t._v(" "),t.showCheckoutCounter?n("topic-checkout-counter",{attrs:{"thread-type":10,user:t.currentUser||{},"be-asked-user":{},amount:0,"show-anonymous":!1,"show-wechat-pay":t.canWechatPay,"reward-or-pay":"renewal","offer-money":2,"lowest-price":t.price},on:{close:function(e){t.showCheckoutCounter=!1},paying:t.paying}}):t._e(),t._v(" "),t.showWxPay?n("topic-wx-pay",{attrs:{"qr-code":t.wechatQrCode},on:{close:function(e){t.showWxPay=!1}}}):t._e(),t._v(" "),t.showPasswordInput?n("topic-password",{attrs:{price:t.price,"password-error":t.passwordError,"password-error-tip":t.passwordErrorTip},on:{"update:passwordError":function(e){t.passwordError=e},"update:password-error":function(e){t.passwordError=e},close:function(e){t.showPasswordInput=t.passwordError=!1},password:t.onPasswordInputCompleted,findPassword:t.onFindPassword}}):t._e(),t._v(" "),t.findPassword&&t.currentUser.originalMobile?n("find-paypwd",{attrs:{mobile:t.currentUser.mobile,phonenum:t.currentUser.originalMobile},on:{close:function(e){t.findPassword=!1}}}):t._e(),t._v(" "),t.findPassword&&!t.currentUser.originalMobile?n("without-phone",{on:{close:function(e){t.findPassword=!1}}}):t._e()],1)}),[],!1,null,"1df62316",null);e.default=component.exports;installComponents(component,{Avatar:r(344).default,TopicCheckoutCounter:r(1075).default,TopicWxPay:r(1052).default,TopicPassword:r(1076).default,FindPaypwd:r(1086).default,WithoutPhone:r(1087).default})},873:function(t,e,r){var n=r(882);r(20),r(66),t.exports={data:function(){var t=this;return{errorCodeHandler:{default:{model_not_found:function(){return t.$router.replace("/error")},not_authenticated:function(){return t.$router.push("/user/login")}},thread:{permission_denied:function(){return t.$router.replace("/error?code=permissionDenied")}}}}},methods:{handleError:function(t){var e=arguments,r=this;return n(regeneratorRuntime.mark((function n(){var o,c,d,l,f,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.length>1&&void 0!==e[1]?e[1]:"",c=t.response.data.errors,!(Array.isArray(c)&&c.length>0)){n.next=17;break}if(d=c[0].code,l=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,f=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:r.$t("core.".concat(l)),"site_closed"!==c[0].code){n.next=10;break}return n.next=9,r.siteClose(c);case 9:return n.abrupt("return",n.sent);case 10:if("need_ext_fields"!==c[0].code){n.next=14;break}return v=r.$store.getters["session/get"]("userId"),r.$router.push("/user/supple-mentary?id=".concat(v)),n.abrupt("return");case 14:"Permission Denied"===d?r.$message.error(r.$t("core.permission_denied2")):"content_banned_show_words"===d?r.$message.error(r.$t("core.content_banned_show_words")+c[0].detail):r.$message.error(f),r.errorCodeHandler.default[d]&&r.errorCodeHandler.default[d](),o&&r.errorCodeHandler[o][d]&&r.errorCodeHandler[o][d]();case 17:case"end":return n.stop()}}),n)})))()},siteClose:function(t){var e=this;return n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("forum/setError",{code:t[0].code,detail:t[0].detail&&t[0].detail.length>0&&t[0].detail[0]});case 3:return r.next=5,e.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},874:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},875:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}));r(66),r(209);var n=function(time){var t=((window.currentTime||new Date)-new Date(time))/1e3;return 0===parseInt(t)?"刚刚发布":parseInt(t)<60?"".concat(parseInt(t),"秒前"):parseInt(t/60)<60?"".concat(parseInt(t/60),"分钟前"):parseInt(t/60/60)<16?"".concat(parseInt(t/60/60),"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),r=Math.round(new Date/1e3)-e,n=parseInt(r/86400,0);if(n>365){var o=parseInt(r/86400/365,0);return"".concat(o,"年")}return"".concat(n,"天")}},877:function(t,e,r){"use strict";r.r(e);var n={name:"MessageBox",props:{width:{type:String,default:"820px"},title:{type:String,default:""},overflow:{type:String,default:"auto"}}},o=(r(955),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Cover"),t._v(" "),r("div",{staticClass:"message-box",style:{overflow:t.overflow,width:t.width}},[r("div",{staticClass:"container-title"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("svg-icon",{staticStyle:{"font-size":"14px",cursor:"pointer",fill:"#6d6d6d"},attrs:{type:"close"},on:{click:function(e){return t.$emit("close")}}})],1),t._v(" "),t._t("default")],2)],1)}),[],!1,null,"05e0d157",null);e.default=component.exports;installComponents(component,{Cover:r(891).default,SvgIcon:r(78).default})},882:function(t,e){function r(t,e,r,n,o,c,d){try{var l=t[c](d),f=l.value}catch(t){return void r(t)}l.done?e(f):Promise.resolve(f).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var d=t.apply(e,n);function l(t){r(d,o,c,l,f,"next",t)}function f(t){r(d,o,c,l,f,"throw",t)}l(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},894:function(t,e,r){},947:function(t,e,r){"use strict";r(66);e.a=function(t){return t[0]===t[1]&&"0"===t[0]&&(t=t.substr(0,1)),t.replace(/[^\d.]/g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^(-)*(\d+)\.(\d\d).*$/,"$1$2.$3").replace(/^\./g,"")}},955:function(t,e,r){"use strict";r(894)},961:function(t,e,r){},983:function(t,e,r){},984:function(t,e,r){},985:function(t,e,r){}}]);