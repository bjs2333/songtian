(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"/Qvz":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{header:"短信配置"}}),t._v(" "),a("Card",{attrs:{header:"SDK AppID:"}},[a("CardRow",{attrs:{description:"SDK AppID是短信应用的唯一标识，调用短信API接口时，需要提供该参数"}},[a("el-input",{attrs:{clearable:""},model:{value:t.sdkAppId,callback:function(e){t.sdkAppId=e},expression:"sdkAppId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"App Key:"}},[a("CardRow",{attrs:{description:"App Key：App Key是用来校验短信发送合法性的密码，与SDK AppID对应"}},[a("el-input",{attrs:{clearable:""},model:{value:t.appKey,callback:function(e){t.appKey=e},expression:"appKey"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"短信验证码使用模板ID："}},[a("CardRow",{attrs:{description:"填写在腾讯云已配置并审核通过的短信验证码的模板的ID"},scopedSlots:t._u([{key:"tail",fn:function(){return[a("a",{attrs:{href:"https://cloud.tencent.com/product/sms",target:"_blank"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[a("el-input",{attrs:{clearable:""},model:{value:t.smsId,callback:function(e){t.smsId=e},expression:"smsId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"短信签名："}},[a("CardRow",{attrs:{description:"填写在腾讯云已配置并审核通过的短信签名内容"}},[a("el-input",{attrs:{clearable:""},model:{value:t.smsSignature,callback:function(e){t.smsSignature=e},expression:"smsSignature"}})],1)],1),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.Submission}},[t._v("提交")])],1)],1)},r=[]},H7jw:function(t,e,a){"use strict";a.r(e);var s=a("/Qvz"),r=a("hgJm");for(var d in r)["default"].indexOf(d)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(d);var n=a("KHd+"),u=Object(n.a)(r.default,s.a,s.b,!1,null,null,null);e.default=u.exports},hgJm:function(t,e,a){"use strict";a.r(e);var s=a("w3Ge"),r=a.n(s);for(var d in s)["default"].indexOf(d)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(d);e.default=r.a},w3Ge:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=d(a("QbLZ"));a("lpfh");var r=d(a("z5fL"));function d(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({name:"tencent-cloud-config-sms-view"},r.default)},z5fL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=d(a("4gYi")),r=d(a("pNQN"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{sdkAppId:"",appKey:"",smsId:"",smsSignature:""}},created:function(){var t=this.$route.query.type;this.type=t,this.tencentCloudSms()},methods:{tencentCloudSms:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.sdkAppId=e.readdata._data.qcloud.qcloud_sms_app_id,t.appKey=e.readdata._data.qcloud.qcloud_sms_app_key,t.smsId=e.readdata._data.qcloud.qcloud_sms_template_id,t.smsSignature=e.readdata._data.qcloud.qcloud_sms_sign)}))},Submission:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"qcloud_sms_app_id",value:this.sdkAppId,tag:"qcloud"}},{attributes:{key:"qcloud_sms_app_key",value:this.appKey,tag:"qcloud"}},{attributes:{key:"qcloud_sms_template_id",value:this.smsId,tag:"qcloud"}},{attributes:{key:"qcloud_sms_sign",value:this.smsSignature,tag:"qcloud"}}]}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.$message({message:"提交成功",type:"success"})}))}},components:{Card:s.default,CardRow:r.default}}}}]);