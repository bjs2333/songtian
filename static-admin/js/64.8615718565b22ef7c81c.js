(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"9kjX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("Dt3C")),i=o(a("rWG0")),s=o(a("7qpD")),n=o(a("VVfg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{searchData:{userName:"",reportType:null,reportTime:["",""],status:0},reportTypeData:[{name:"主题",id:1},{name:"评论/回复",id:2}],reportListAll:[],reportList:[],submitForm:[],pageData:{pageSize:10,pageCount:1,pageNumber:1,pageTotal:0},subLoading:!1,visible:!1}},methods:{closeDelet:function(t){this.$refs[t][0].doClose()},radioChange:function(t,e){switch(t){case 0:this.submitForm[e].type=0;break;case 1:this.submitForm[e].type=1}},formatDate:function(t){return this.$dayjs(t).format("YYYY-MM-DD HH:mm")},getType:function(t){return 0===t?"个人主页":1===t?"主题":2===t?"评论/回复":void 0},getUrl:function(t,e,a){var r="";return{href:r=0===a?0===e?"/pagthreadIDes/profile/index?userId="+t:"/topic/index?id="+e:"/pages/topic/comment?threadId="+e+"&commentId="+a,url:window.origin+r}},searchClick:function(){this.searchData.reportTime=null==this.searchData.reportTime?["",""]:this.searchData.reportTime,this.searchData.reportType=""===this.searchData.reportType?null:this.searchData.reportType,this.pageData.pageNumber=1,this.getReportList(1)},getReportList:function(t){var e=this,a=this.searchData;this.appFetch({url:"reports",method:"get",data:{"filter[username]":a.userName,"filter[status]":0,"filter[type]":a.reportType,"filter[start_time]":a.reportTime[0],"filter[end_time]":a.reportTime[1],"page[number]":t,"page[limit]":this.pageData.pageSize}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.reportList=t.readdata,e.pageData.pageTotal=t.meta.total,e.pageData.pageCount=t.meta.pageCount,e.reportListAll=[],e.submitForm=[],e.reportList.forEach((function(t){e.reportListAll.push(t._data.id),e.submitForm.push({radio:"",id:t._data.id,type:null})})))}))},handleCurrentChange:function(t){this.pageData.pageNumber=t,this.getReportList(t)},operationsSubmit:function(t,e,a){var r=[],i={status:1};if("delete"===t)switch(e){case 1:this.deleteOperation(a);break;case 2:this.deleteOperation(this.reportListAll.toString())}else{switch(e){case 1:r=[{type:"report",id:a,attributes:i}];break;case 2:this.reportListAll.forEach((function(t){r.push({type:"report",id:t,attributes:i})}))}this.HandledOperation(r)}},deleteOperation:function(t){var e=this;this.appFetch({url:"reportsBatch",splice:"/"+t,method:"delete"}).then((function(t){}));setTimeout((function(){e.subLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getReportList(Number(n.default.getLItem("pageNumber"))||1)}),300)},HandledOperation:function(t){var e=this;this.appFetch({url:"reports",splice:"/batch",method:"patch",data:{data:t}}).then((function(t){t&&(e.subLoading=!1,e.$message({message:"操作成功",type:"success"}),e.getReportList(Number(n.default.getLItem("pageNumber"))||1))}))},submitClick:function(){if(this.submitForm.some((function(t){return 0===t.type||(1===t.type||void 0)}))){this.subLoading=!0;var t=[],e=[],a={status:1};this.submitForm.forEach((function(r){0===r.type&&t.push(r.id),1===r.type&&e.push({type:"report",id:r.id,attributes:a})})),t.length>0&&this.deleteOperation(t.join(",")),e.length>0&&this.HandledOperation(e)}else this.$message({showClose:!0,message:"操作举报列表为空，请选择举报信息",type:"warning"})},getCreated:function(t){t?this.getReportList(1):this.getReportList(Number(n.default.getLItem("pageNumber"))||1)}},created:function(){this.getUrl()},beforeRouteEnter:function(t,e,a){a((function(a){t.name!==e.name&&null!==e.name?a.getCreated(!0):a.getCreated(!1)}))},components:{ContArrange:r.default,Page:i.default,tableNoList:s.default}}},AZdf:function(t,e,a){"use strict";a.r(e);var r=a("kSVB"),i=a("nVfn");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var n=a("KHd+"),o=Object(n.a)(i.default,r.a,r.b,!1,null,null,null);e.default=o.exports},"KHd+":function(t,e,a){"use strict";function r(t,e,a,r,i,s,n,o){var l,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=a,p._compiled=!0),r&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},p._ssrRegister=l):i&&(l=o?function(){i.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(p.functional){p._injectStyles=l;var u=p.render;p.render=function(t,e){return l.call(e),u(t,e)}}else{var c=p.beforeCreate;p.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:p}}a.d(e,"a",(function(){return r}))},"P/Re":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(a("QbLZ"));a("lL+3");var i=s(a("9kjX"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"report-manage-view"},i.default)},kSVB:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-manage-box"},[a("div",{staticClass:"report-manage-header"},[a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[t._v("举报人：")]),t._v(" "),a("el-input",{attrs:{size:"medium",clearable:""},model:{value:t.searchData.userName,callback:function(e){t.$set(t.searchData,"userName",e)},expression:"searchData.userName"}})],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[t._v("举报类型：")]),t._v(" "),a("el-select",{attrs:{clearable:"",size:"medium"},model:{value:t.searchData.reportType,callback:function(e){t.$set(t.searchData,"reportType",e)},expression:"searchData.reportType"}},t._l(t.reportTypeData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title time-title"},[t._v("举报时间范围：")]),t._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"",size:"medium","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.searchData.reportTime,callback:function(e){t.$set(t.searchData,"reportTime",e)},expression:"searchData.reportTime"}})],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),a("div",{staticClass:"report-manage-content"},[a("div",{staticClass:"report-manage-content__header"},[t._v("举报列表")]),t._v(" "),t._l(t.reportList,(function(e,r){return a("ContArrange",{key:e._data.id,staticClass:"report-manage-content__table",attrs:{establish:e.user?e.user._data.username:"该用户被删除",userId:e.user?e.user._data.id:"该用户被删除",time:t.formatDate(e._data.created_at),type:t.getType(e._data.type)}},[a("div",{staticClass:"report-manage-content__table-side",attrs:{slot:"side"},slot:"side"},[a("el-radio-group",{on:{change:function(e){return t.radioChange(e,r)}},model:{value:t.submitForm[r].radio,callback:function(e){t.$set(t.submitForm[r],"radio",e)},expression:"submitForm[index].radio"}},[a("el-radio",{attrs:{label:0}},[t._v("删除")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("已处理")])],1)],1),t._v(" "),a("div",{staticClass:"report-manage-content__table-main",attrs:{slot:"main"},slot:"main"},[a("p",[t._v("\n\t\t\t\t\t\t页面地址：\n\t\t\t\t\t\t"),a("a",{staticStyle:{color:"#3E4043"},attrs:{href:t.getUrl(e.user._data.id,e._data.thread_id,e._data.post_id).href,target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.getUrl(e.user._data.id,e._data.thread_id,e._data.post_id).url)+"\n\t\t\t\t\t\t")])]),t._v(" "),a("p",[t._v("举报时间："+t._s(t.formatDate(e._data.updated_at)))]),t._v(" "),a("p",[t._v("举报理由：")]),t._v(" "),a("p",[t._v(t._s(e._data.reason))])]),t._v(" "),a("div",{staticClass:"report-manage-content__table-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-popover",{ref:"popover-"+r,refInFor:!0,attrs:{width:"100",placement:"top"}},[a("p",[t._v("确定删除该项吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.closeDelet("popover-"+r)}}},[t._v("\n                  取消\n                ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.operationsSubmit("delete",1,e._data.id),t.closeDelet("popover-"+r)}}},[t._v("确定")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1),t._v(" "),a("i"),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.operationsSubmit("handle",1,e._data.id)}}},[t._v("标记已处理")])],1)])})),t._v(" "),a("tableNoList",{directives:[{name:"show",rawName:"v-show",value:t.reportList.length<1,expression:"reportList.length < 1"}]}),t._v(" "),t.pageData.pageCount>1?a("Page",{attrs:{"current-page":t.pageData.pageNumber,"page-size":t.pageData.pageSize,total:t.pageData.pageTotal},on:{"current-change":t.handleCurrentChange}}):t._e()],2),t._v(" "),a("div",{staticClass:"report-manage-footer"},[a("el-button",{attrs:{size:"small",type:"primary",loading:t.subLoading},on:{click:t.submitClick}},[t._v("提交")]),t._v(" "),a("el-popover",{attrs:{width:"100",placement:"top"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("p",[t._v("确定删除该项吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){t.visible=!1}}},[t._v("\n                  取消\n                ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.operationsSubmit("delete",2),t.visible=!1}}},[t._v("确定")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("全部删除")])],1),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.operationsSubmit("handle",2)}}},[t._v("全部标记已处理")])],1)])},i=[]},nVfn:function(t,e,a){"use strict";a.r(e);var r=a("P/Re"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(s);e.default=i.a}}]);