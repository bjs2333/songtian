(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1220:function(t,e,r){},1335:function(t,e,r){"use strict";r(1220)},1440:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(20),r(66),{name:"Close",data:function(){return{close_tips:"",forums:""}},computed:{tips:function(){return this.$store.state.forum.error?this.$store.state.forum.error.detail:""}},mounted:function(){var t=this;this.getSiteInfo(),this.$store.dispatch("jv/get","/forum").then((function(e){t.forums=e,t.forums&&t.forums.set_site&&!t.forums.set_site.site_close&&window.location.replace("/")}))},methods:{getSiteInfo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$store.state.forum.error,t.close_tips=r?r.detail:"";case 2:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:this.$t("site.siteClose")}}}),c=(r(1335),r(12)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"close-info"},[r("div",{staticClass:"title"},[t._v("抱歉，论坛暂时关闭")]),t._v(" "),r("div",{staticClass:"text"},[t._v("管理员关闭了论坛，请稍后访问。")]),t._v(" "),r("div",{staticClass:"time"},[t._v(t._s(t.close_tips||t.tips))])])}),[],!1,null,"7bc4f7c0",null);e.default=component.exports}}]);