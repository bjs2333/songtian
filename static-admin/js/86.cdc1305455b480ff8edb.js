(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"2QyF":function(a,e,t){"use strict";t.r(e);var r=t("Dm6a"),i=t.n(r);for(var s in r)["default"].indexOf(s)<0&&function(a){t.d(e,a,(function(){return r[a]}))}(s);e.default=i.a},Dm6a:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(t("QbLZ"));t("lpfh");var i=s(t("wKmE"));function s(a){return a&&a.__esModule?a:{default:a}}e.default=(0,r.default)({name:"pay-config-wx-view"},i.default)},cI1c:function(a,e,t){"use strict";t.r(e);var r=t("kZVE"),i=t("2QyF");for(var s in i)["default"].indexOf(s)<0&&function(a){t.d(e,a,(function(){return i[a]}))}(s);var d=t("KHd+"),n=Object(d.a)(i.default,r.a,r.b,!1,null,null,null);e.default=n.exports},kZVE:function(a,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i}));var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("Card",{attrs:{header:"微信支付配置"}}),a._v(" "),t("Card",{attrs:{header:"APPID："}},[t("CardRow",{attrs:{description:"appid是微信公众帐号或小程序的唯一标识"}},[t("el-input",{model:{value:a.appId,callback:function(e){a.appId=e},expression:"appId"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"微信支付的商户号（mch_id）："}},[t("CardRow",{attrs:{description:"商户申请微信支付后，由微信支付分配的商户收款帐号"}},[t("el-input",{model:{value:a.mchId,callback:function(e){a.mchId=e},expression:"mchId"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"API密匙（key）："}},[t("CardRow",{attrs:{description:"交易过程生成签名的密钥"}},[t("el-input",{model:{value:a.apiKey,callback:function(e){a.apiKey=e},expression:"apiKey"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"APIV3密匙（key）："}},[t("CardRow",{attrs:{description:"交易过程生成签名的密钥"}},[t("el-input",{model:{value:a.apiKeyV3,callback:function(e){a.apiKeyV3=e},expression:"apiKeyV3"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"证书序列号（serialNo）："}},[t("CardRow",{attrs:{description:"证书序列号"}},[t("el-input",{model:{value:a.serialNo,callback:function(e){a.serialNo=e},expression:"serialNo"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"已开通企业付款到零钱产品"}},[t("CardRow",{staticClass:"card-pay",attrs:{description:"开通后才可使用企业向个人付款，付款资金将直接进入用户零钱的功能。否则将采用提交手机号，人工打款到微信手机账号的方式。"}},[t("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)],1),a._v(" "),t("Card",{attrs:{header:"已开通商家转账到零钱产品"}},[t("CardRow",{staticClass:"card-pay",attrs:{description:"可通过该功能批量向用户的微信零钱进行转账。"}},[t("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:a.value2,callback:function(e){a.value2=e},expression:"value2"}})],1)],1),a._v(" "),t("Card",{staticClass:"footer-btn"},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:a.submitConfiguration}},[a._v("提交")])],1)],1)},i=[]},wKmE:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(t("4gYi")),i=s(t("pNQN"));function s(a){return a&&a.__esModule?a:{default:a}}e.default={data:function(){return{appId:"",mchId:"",apiKey:"",apiKeyV3:"",serialNo:"",appSecret:"",type:"",iOSPay:!1,value:!1,value2:!1}},created:function(){var a=this.$route.query.type;this.type=a,this.loadStatus()},methods:{loadStatus:function(){var a=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?a.$message.error(e.errors[0].code):(a.appId=e.readdata._data.paycenter.app_id,a.mchId=e.readdata._data.paycenter.mch_id,a.apiKey=e.readdata._data.paycenter.api_key,a.apiKeyV3=e.readdata._data.paycenter.api_keyv3,a.serialNo=e.readdata._data.paycenter.serial_no,a.appSecret=e.readdata._data.paycenter.app_secret,a.iOSPay=e.readdata._data.paycenter.wxpay_ios,a.value=e.readdata._data.paycenter.wxpay_mchpay_close,a.value2=e.readdata._data.paycenter.wxpay_mchpay2_close)})).catch((function(a){}))},submitConfiguration:function(){var a=this;this.value&&this.value2?this.$message.error("提现产品只能选其一"):this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"app_id",value:this.appId,tag:this.type}},{attributes:{key:"mch_id",value:this.mchId,tag:this.type}},{attributes:{key:"api_key",value:this.apiKey,tag:this.type}},{attributes:{key:"app_secret",value:this.appSecret,tag:this.type}},{attributes:{key:"wxpay_ios",value:this.iOSPay,tag:this.type}},{attributes:{key:"wxpay_mchpay_close",value:this.value,tag:this.type}},{attributes:{key:"wxpay_mchpay2_close",value:this.value2,tag:this.type}},{attributes:{key:"api_keyv3",value:this.apiKeyV3,tag:this.type}},{attributes:{key:"serial_no",value:this.serialNo,tag:this.type}}]}}).then((function(e){e.errors?a.$message.error(e.errors[0].code):a.$message({message:"提交成功",type:"success"})}))}},components:{Card:r.default,CardRow:i.default}}}}]);