(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"Jx3/":function(e,t,a){"use strict";a.r(t);var s=a("pvgk"),i=a("T7dQ");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var l=a("KHd+"),n=Object(l.a)(i.default,s.a,s.b,!1,null,null,null);t.default=n.exports},T7dQ:function(e,t,a){"use strict";a.r(t);var s=a("ryiF"),i=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(r);t.default=i.a},bsHS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=c(a("Dt3C")),i=c(a("7qpD")),r=c(a("rWG0")),l=c(a("CKnL")),n=c(a("VVfg")),o=c(a("6NK7"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},searchData:{pageSelect:"10",themeAuthor:"",themeKeyWords:"",dataValue:["",""]},checkAll:!1,checkAllNum:0,themeListAll:[],checkedTheme:[],isIndeterminate:!1,themeList:[],currentPag:1,total:0,pageCount:1,showViewer:!1,subLoading:!1,visible:!1}},methods:{closeDelet:function(e){this.$refs[e][0].doClose()},searchClick:function(){this.searchData.dataValue=null==this.searchData.dataValue?["",""]:this.searchData.dataValue,this.currentPag=1,this.getPostsList(1)},formatDate:function(e){return this.$dayjs(e).format("YYYY-MM-DD HH:mm")},handleCheckAllChange:function(e){this.checkedTheme=e?this.themeListAll:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e,t,a){var s=this.checkedTheme.length;this.checkAll=s===this.themeListAll.length,this.isIndeterminate=s>0&&s<this.themeListAll.length},handleCurrentChange:function(e){document.getElementsByClassName("index-main-con__main")[0].scrollTop=0,this.isIndeterminate=!1,this.currentPag=e,this.checkAll=!1,this.getPostsList(e)},deleteAllClick:function(){this.subLoading=!0;var e=[];this.checkedTheme.forEach((function(t){e.push({id:t,attributes:{isDeleted:!0}})})),this.deletedPostsBatch(e)},imgShowClick:function(e,t){var a=this;this.url=[];var s=[];e.forEach((function(e){s.push(e._data.url)})),this.url.push(s[t]),s.forEach((function(e,s){s>t&&a.url.push(e)})),s.forEach((function(e,s){s<t&&a.url.push(e)})),this.showViewer=!0},closeViewer:function(){this.showViewer=!1},singleOperationSubmit:function(e,t,a){switch(e){case 1:this.deletedPosts(t);break;case 2:var s=this.$router.resolve({path:"/reply-to-topic/"+a+"/"+t,query:{edit:"reply"}});window.open(s.href,"_blank");break;default:this.$message.error("系统错误，请刷新页面")}},titleIcon:function(e){return o.default.titleIcon(e)},getPostsList:function(e){var t=this,a=this.searchData;this.appFetch({url:"posts",method:"get",data:{include:["user","thread","thread.category","thread.firstPost","images"],"filter[isDeleted]":"no","filter[isApproved]":"1","filter[username]":a.themeAuthor,"page[number]":e,"page[size]":a.pageSelect,"filter[q]":a.themeKeyWords,"filter[createdAtBegin]":a.dataValue[0],"filter[createdAtEnd]":a.dataValue[1],sort:"-createdAt"}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.themeList=e.readdata,t.total=e.meta.postCount,t.pageCount=e.meta.pageCount,t.themeListAll=[],t.themeList.forEach((function(e,a){t.themeListAll.push(e._data.id)})))})).catch((function(e){}))},deletedPostsBatch:function(e){var t=this;this.appFetch({url:"postsBatch",method:"PATCH",data:{data:e}}).then((function(e){t.subLoading=!1,e.meta?e.meta.forEach((function(e,a){setTimeout((function(){t.$message.error(e.code)}),500*(a+1))})):(t.getPostsList(Number(n.default.getLItem("currentPag"))||1),t.$message({message:"操作成功",type:"success"}),t.isIndeterminate=!1,t.checkAll=!1)})).catch((function(e){}))},deletedPosts:function(e){var t=this;this.appFetch({url:"posts",method:"patch",splice:"/"+e,data:{data:{attributes:{isDeleted:!0}}}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.getPostsList(Number(n.default.getLItem("currentPag"))||1),t.$message({message:"操作成功",type:"success"}))}))}},created:function(){this.currentPag=Number(n.default.getLItem("currentPag"))||1,this.getPostsList(Number(n.default.getLItem("currentPag"))||1)},components:{ContArrange:s.default,tableNoList:i.default,ElImageViewer:l.default,Page:r.default}}},pvgk:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"latest-reply-box"},[a("div",{staticClass:"latest-reply-header"},[a("div",{staticClass:"latest-reply-header_top condition-box"},[a("div",{staticClass:"latest-reply-header_condition latest-reply-header_condition-lf"},[a("span",{staticClass:"latest-reply-header_condition-title"},[e._v("作者：")]),e._v(" "),a("el-input",{attrs:{size:"medium",placeholder:"搜索作者",clearable:""},model:{value:e.searchData.themeAuthor,callback:function(t){e.$set(e.searchData,"themeAuthor",t)},expression:"searchData.themeAuthor"}})],1),e._v(" "),a("div",{staticClass:"latest-reply-header_condition"},[a("span",{staticClass:"latest-reply-header_condition-title"},[e._v("内容包含：")]),e._v(" "),a("el-input",{attrs:{size:"medium",placeholder:"搜索内容包含",clearable:""},model:{value:e.searchData.themeKeyWords,callback:function(t){e.$set(e.searchData,"themeKeyWords",t)},expression:"searchData.themeKeyWords"}})],1)]),e._v(" "),a("div",{staticClass:"latest-reply-header_bottom condition-box"},[a("div",{staticClass:"latest-reply-header_condition condition-time"},[a("span",{staticClass:"latest-reply-header_condition-title"},[e._v("发布时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"picker-options":e.pickerOptions},model:{value:e.searchData.dataValue,callback:function(t){e.$set(e.searchData,"dataValue",t)},expression:"searchData.dataValue"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.searchClick}},[e._v("搜索")])],1)])]),e._v(" "),a("div",{staticClass:"latest-reply-theme"},[a("div",{staticClass:"latest-reply-theme__table"},[a("div",{staticClass:"latest-reply-theme__table-header"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}}),e._v(" "),a("p",{staticClass:"latest-reply-theme__table-header__title"},[e._v("回复列表")])],1),e._v(" "),e._l(e.themeList,(function(t,s){return a("ContArrange",{key:t._data.id,attrs:{replyBy:t.user?t.user._data.username:"该用户被删除",themeName:1===t.thread._data.type?t.thread._data.title:t.thread.firstPost._data.content,titleIcon:e.titleIcon(t.thread._data),finalPost:e.formatDate(t._data.updatedAt),userId:t.user?t.user._data.id:"该用户被删除"}},[a("div",{staticClass:"latest-reply-theme__table-side",attrs:{slot:"side"},slot:"side"},[a("el-checkbox",{attrs:{label:t._data.id},on:{change:function(t){return e.handleCheckedCitiesChange()}},model:{value:e.checkedTheme,callback:function(t){e.checkedTheme=t},expression:"checkedTheme"}})],1),e._v(" "),a("div",{staticClass:"latest-reply-theme__table-main",attrs:{slot:"main"},slot:"main"},[a("a",{staticClass:"latest-reply-theme__table-main__cont-text",attrs:{href:"/topic/index?id="+t.thread._data.id,target:"_blank"},domProps:{innerHTML:e._s(t._data.contentHtml)}}),e._v(" "),a("div",{staticClass:"latest-reply-theme__table-main__cont-imgs"},e._l(t.images,(function(s,i){return a("p",{key:i,staticClass:"latest-reply-theme__table-main__cont-imgs-p"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s._data.thumbUrl,expression:"item._data.thumbUrl"}],attrs:{alt:s._data.fileName},on:{click:function(a){return e.imgShowClick(t.images,i)}}})])})),0)]),e._v(" "),a("div",{staticClass:"latest-reply-theme__table-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"latest-reply-theme__table-footer__lf"},[a("el-popover",{ref:"popover-"+s,refInFor:!0,attrs:{width:"100",placement:"top"}},[a("p",[e._v("确定删除该项吗？")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.closeDelet("popover-"+s)}}},[e._v("\n              取消\n            ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.singleOperationSubmit(1,t._data.id),e.closeDelet("popover-"+s)}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)],1)])])})),e._v(" "),e.showViewer?a("el-image-viewer",{attrs:{"on-close":e.closeViewer,"url-list":e.url}}):e._e(),e._v(" "),a("tableNoList",{directives:[{name:"show",rawName:"v-show",value:e.themeList.length<1,expression:"themeList.length < 1"}]}),e._v(" "),e.pageCount>1?a("Page",{attrs:{"current-page":e.currentPag,"page-size":parseInt(e.searchData.pageSelect),total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],2)]),e._v(" "),a("div",{staticClass:"latest-reply-footer"},[a("el-popover",{attrs:{width:"100",placement:"top"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("p",[e._v("确定删除该项吗？")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("\n              取消\n            ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.deleteAllClick(),e.visible=!1}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"small",type:"primary",loading:e.subLoading},slot:"reference"},[e._v("删除")])],1)],1)])},i=[]},ryiF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(a("QbLZ")),i=r(a("bsHS"));function r(e){return e&&e.__esModule?e:{default:e}}a("lL+3"),t.default=(0,s.default)({name:"shopReplyView"},i.default)}}]);