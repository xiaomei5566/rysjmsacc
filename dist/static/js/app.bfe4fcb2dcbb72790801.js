webpackJsonp([0],{"93Go":function(t,s){},JiuA:function(t,s){},Lb5u:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("VCXJ"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"router-view"},[s("router-view")],1)])},staticRenderFns:[]},e=i("8AGX")({},n,!1,function(t){i("wA9S")},null,null).exports,c=i("zO6J"),o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"nav"}},[i("div",{staticClass:"nav-items"},[i("router-link",{attrs:{to:"/message","active-class":"active",replace:""}},[i("div",{staticClass:"nav-bottom"},[i("i",{staticClass:"icon-message"}),t._v(" "),i("span",{staticClass:"nav-message"},[t._v("信息")])])])],1),t._v(" "),i("div",{staticClass:"nav-items"},[i("router-link",{attrs:{to:"/work","active-class":"active",replace:""}},[i("div",{staticClass:"nav-bottom"},[i("i",{staticClass:"icon-app"}),t._v(" "),i("span",{staticClass:"nav-message"},[t._v("工作")])])])],1),t._v(" "),i("div",{staticClass:"nav-items"},[i("router-link",{attrs:{to:"/myself","active-class":"active",replace:""}},[i("div",{staticClass:"nav-bottom"},[i("i",{staticClass:"icon-myhome"}),t._v(" "),i("span",{staticClass:"nav-message"},[t._v("我的")])])])],1)])},staticRenderFns:[]},l=i("8AGX")({},o,!1,function(t){i("SFET")},null,null).exports,r=i("Hu4l"),v=i.n(r),_={components:{navIndex:l},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new v.a(t.$refs.wrapper,{click:!0})})}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"message"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{ref:"wrapper",staticClass:"message-content"},[a("ul",[a("li",[a("router-link",{staticClass:"message-items",attrs:{to:"/message/chat/1"}},[a("img",{attrs:{src:i("ibQc"),width:"60px",height:"60px"}}),t._v(" "),a("div",[a("span",{staticClass:"title"},[t._v("如何正确使用Vue.js的组件")]),t._v(" "),a("span",{staticClass:"content"},[t._v("better-scroll 对外暴露了一个 BScroll 的类，我们初始化只需要 new 一个类的实例即可。第一个参数就是我们 wrapper 的 DOM 对象，第二个是一些配置参数，具体参考 better-scroll")])]),t._v(" "),a("div",{staticClass:"message-bottom"},[a("span",{staticClass:"message-time"},[t._v("04:39")]),t._v(" "),a("span",{staticClass:"message-count"},[a("span",{staticClass:"count-background"},[t._v("5")])])])])],1)])]),t._v(" "),a("navIndex")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"message-header"},[s("p",[this._v("信息")]),this._v(" "),s("i",{staticClass:"icon-contact"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-bars"},[s("i",{staticClass:"icon-search search-logo"}),this._v(" "),s("input",{attrs:{type:"select",placeholder:"search"}}),this._v(" "),s("i",{staticClass:"icon-mic search-bottom"})])])}]},h=i("8AGX")(_,u,!1,function(t){i("kUhH")},null,null).exports,p={methods:{goTo:function(t){this.$router.push({path:t})}},components:{navIndex:l},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new v.a(t.$refs.wrapper,{click:!0})})}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{ref:"wrapper",staticClass:"wrapper"},[i("ul",{staticClass:"content"},[i("li",[i("div",{staticClass:"work"},[t._m(2),t._v(" "),i("div",{staticClass:"work-content"},[i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(3),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(4),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(5),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(6),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(7),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(8),t._v(" "),i("span",[t._v("通知")])])])])]),t._v(" "),i("li",[i("div",{staticClass:"work"},[t._m(9),t._v(" "),i("div",{staticClass:"work-content"},[i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(10),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(11),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(12),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(13),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(14),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(15),t._v(" "),i("span",[t._v("通知")])])])])]),t._v(" "),i("li",[i("div",{staticClass:"work"},[t._m(16),t._v(" "),i("div",{staticClass:"work-content"},[i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(17),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(18),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(19),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(20),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(21),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(22),t._v(" "),i("span",[t._v("通知")])])])])]),t._v(" "),i("li",[i("div",{staticClass:"work"},[t._m(23),t._v(" "),i("div",{staticClass:"work-content"},[i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(24),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(25),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(26),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(27),t._v(" "),i("span",[t._v("通知")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/approval")}}},[t._m(28),t._v(" "),i("span",[t._v("审核")])]),t._v(" "),i("a",{staticClass:"work-items",on:{click:function(s){t.goTo("/notice/list")}}},[t._m(29),t._v(" "),i("span",[t._v("通知")])])])])])])]),t._v(" "),i("navIndex")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("p",[this._v("成都荣耀世纪")]),this._v(" "),s("i",{staticClass:"icon-message"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notice"},[s("i",{staticClass:"icon-bullhorn"}),this._v(" "),s("span",[this._v("乐乐直播工资安排：按小时计算工资，分为两个工资档，根据主播自身条件定档")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"work-title"},[s("p",[this._v("应用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_3"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_4"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"work-title"},[s("p",[this._v("应用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_3"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_4"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"work-title"},[s("p",[this._v("应用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_3"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_4"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"work-title"},[s("p",[this._v("应用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_3"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_4"},[s("p",[this._v("通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_1"},[s("p",[this._v("审")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color_2"},[s("p",[this._v("通")])])}]},f=i("8AGX")(p,m,!1,function(t){i("93Go")},null,null).exports,d={mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new v.a(t.$refs.wrapper,{})})},components:{navIndex:l}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"myself-box"},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("div",{ref:"wrapper",staticClass:"my-wrapper"},[this._m(2)]),this._v(" "),s("navIndex")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"myself-header"},[s("p",[this._v("我的")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"myself-message"},[s("div",{staticClass:"myself-message-box"},[s("div",{staticClass:"myself-name"},[s("p",[this._v("程序员")]),this._v(" "),s("div",{staticClass:"myself-avatar"},[s("p",[this._v("码农")])])]),this._v(" "),s("div",{staticClass:"myself-position"},[s("div",{staticClass:"position-name"},[s("p",[this._v("开发部")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"}),this._v(" "),s("p",[this._v("程序员")])]),this._v(" "),s("i",{staticClass:"icon-phone phone-right"})]),this._v(" "),s("div",{staticClass:"myself-work-status"},[s("span",{staticClass:"work-status"}),this._v(" "),s("p",{staticClass:"status-message"},[this._v("在职")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"myself-content"},[s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])]),this._v(" "),s("li",{staticClass:"myself-items"},[s("div",{staticClass:"functionList"},[s("div",{staticClass:"functionImg"},[s("div",{staticClass:"functionImgBox"},[s("i",{staticClass:"icon-favorite"})])]),this._v(" "),s("div",{staticClass:"functionContent"},[s("p",[this._v("我的钱包")]),this._v(" "),s("i",{staticClass:"icon-arrow_right"})]),this._v(" "),s("div",{staticClass:"functionClear"})])])])}]},g=i("8AGX")(d,C,!1,function(t){i("JiuA")},null,null).exports,k={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"header"}},[i("div",{staticClass:"back_logo",on:{click:t.backUrl}},[i("i",{staticClass:"icon-arrow_left"})]),t._v(" "),i("div",{staticClass:"header_content"},[t._v(t._s(t.HData.title))]),t._v(" "),i("div",{staticClass:"header_bottom"},[null!=t.HData.name?i("span",{on:{click:function(s){t.go("/"+t.HData.url)}}},[t._v(t._s(t.HData.name))]):t._e()])])},staticRenderFns:[]},w=i("8AGX")({props:{HData:{default:"null"}},methods:{backUrl:function(){this.$router.go(-1)},go:function(t){this.$router.push({path:t})}}},k,!1,function(t){i("zqzD")},null,null).exports,$={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"appList"},[i("div",{staticClass:"appList-title"},[i("p",[t._v(t._s(t.AppList.name))])]),t._v(" "),i("div",{staticClass:"appList-content"},t._l(t.AppList.list,function(s){return i("a",{staticClass:"appList-items",on:{click:function(i){t.goTo("/"+s.goToUrl)}}},[i("div",{class:"color_"+s.color},[i("p",[t._v(t._s(s.key))])]),t._v(" "),i("span",[t._v(t._s(s.name))])])}))])},staticRenderFns:[]},x={mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new v.a(t.$refs.wrapper,{click:!0})})},components:{"v-header":w,AppList:i("8AGX")({props:["AppList"],methods:{goTo:function(t){this.$router.push({path:t})}}},$,!1,function(t){i("Wpzn")},null,null).exports},data:function(){return{AppList:[{name:"财务",list:[{name:"报销",goToUrl:"approval",key:"报",color:1},{name:"报销",goToUrl:"approval",key:"报",color:2},{name:"报销",goToUrl:"approval",key:"报",color:3}]},{name:"人事",list:[{name:"转正",goToUrl:"approval",key:"转",color:2},{name:"转正",goToUrl:"approval",key:"转",color:3},{name:"转正",goToUrl:"approval",key:"转",color:4}]}],HData:{name:null,url:null,title:"审批"}}}},E={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("v-header",{attrs:{HData:this.HData}}),this._v(" "),s("div",{ref:"wrapper"},[this._m(0),this._v(" "),s("div",{staticClass:"approval-content"},[s("ul",this._l(this.AppList,function(t){return s("li",{staticClass:"approval-items"},[s("AppList",{attrs:{AppList:t}})],1)}))])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"approvalTab"},[s("div",{staticClass:"approvalTab-items"},[s("i",{staticClass:"icon-message"}),this._v(" "),s("span",[this._v("我审批的")])]),this._v(" "),s("div",{staticClass:"approvalTab-items"},[s("i",{staticClass:"icon-message"}),this._v(" "),s("span",[this._v("我发起的")])]),this._v(" "),s("div",{staticClass:"approvalTab-items"},[s("i",{staticClass:"icon-message"}),this._v(" "),s("span",[this._v("抄送我的")])])])}]},T=i("8AGX")(x,E,!1,function(t){i("k1ZB")},null,null).exports,b={props:["item"],methods:{go:function(t){console.log(t),this.$router.push({path:t})}}},y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"messageModel"},[1==t.item.type?i("div",{staticClass:"textMessageBox"},[i("div",{staticClass:"avatar",class:"float_"+t.item.direction},[i("img",{attrs:{src:t.item.avatar,height:"60px",width:"60px"}})]),t._v(" "),i("div",{staticClass:"textMessageContent",class:"float_"+t.item.direction},[t._v(t._s(t.item.content))])]):t._e(),t._v(" "),2==t.item.type?i("div",{staticClass:"noticeMessageBox"},[i("div",{staticClass:"noticeAvatar"},[i("img",{attrs:{src:t.item.avatar,height:"60px",width:"60px"}})]),t._v(" "),i("div",{staticClass:"noticeMessageContent",on:{click:function(s){t.go(t.item.url)}}},[i("label",[t._v(t._s(t.item.direction))]),t._v(" "),i("p",[t._v(t._s(t.item.content))])]),t._v(" "),i("div")]):t._e()])])},staticRenderFns:[]},A={components:{"v-header":w,ChartContent:i("8AGX")(b,y,!1,function(t){i("VNos")},null,null).exports},data:function(){return{HData:{title:"机器人",name:null,url:"/"},message:null,messageData:[{type:1,content:"你好，三爷！",avatar:"http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png",direction:"left"},{type:2,content:"你好，三爷！",avatar:"http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png",direction:"left",url:"/work"}]}},mounted:function(){var t=this;this.$nextTick(function(){t.scroll=new v.a(t.$refs.wrapper,{click:!0})})},methods:{submitMessage:function(){var t=this;this.messageData.push({type:1,content:this.message,avatar:"http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png",direction:"right"}),this.message=null,this.$nextTick(function(){t.scroll.refresh(),t.scroll.scrollTo(0,t.scroll.maxScrollY,100)})}}},I={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("v-header",{attrs:{HData:t.HData}}),t._v(" "),i("div",{ref:"wrapper",staticClass:"chat-box"},[i("ul",t._l(t.messageData,function(t){return i("li",{staticClass:"chat-items"},[i("ChartContent",{attrs:{item:t}})],1)}))]),t._v(" "),i("div",{staticClass:"chat-inputBox"},[i("div",{staticClass:"input-add"}),t._v(" "),i("div",{staticClass:"input-box"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{rows:"1"},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-submit"},[i("button",{on:{click:t.submitMessage}},[t._v("发送")])])])],1)},staticRenderFns:[]},L=i("8AGX")(A,I,!1,function(t){i("rLf3")},null,null).exports,D={components:{"v-header":w},data:function(){return{HData:{name:null,title:"发公告",url:null}}}},H={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("v-header",{attrs:{HData:this.HData}})],1)},staticRenderFns:[]},B=i("8AGX")(D,H,!1,function(t){i("SmxJ")},null,null).exports,G={components:{"v-header":w},data:function(){return{HData:{name:"新建",title:"公告",url:"notice"}}}},X={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",[s("v-header",{attrs:{HData:this.HData}})],1),this._v(" "),s("div",{staticClass:"noticeNav"},[s("div",{staticClass:"noticeNavTab"},[s("router-link",{attrs:{to:"/notice/list/read","active-class":"active",replace:""}},[this._v("已读")])],1),this._v(" "),s("div",{staticClass:"noticeNavTab"},[s("router-link",{attrs:{to:"/notice/list/unread","active-class":"active",replace:""}},[this._v("未读")])],1)]),this._v(" "),s("div",{ref:"wrapper",staticClass:"noticeWrapper"},[s("router-view")],1)])},staticRenderFns:[]},F=i("8AGX")(G,X,!1,function(t){i("jXah")},null,null).exports,R={render:function(){var t=this.$createElement,s=this._self._c||t;return s("router-link",{staticClass:"message-items",attrs:{to:"/notice/detail/1"}},[s("img",{attrs:{src:i("ibQc"),width:"60px",height:"60px"}}),this._v(" "),s("div",[s("span",{staticClass:"title"},[this._v("公告")]),this._v(" "),s("span",{staticClass:"content"},[this._v("三爷很累")])]),this._v(" "),s("div",{staticClass:"message-bottom"},[s("span",{staticClass:"message-time"},[this._v("04:39")]),this._v(" "),s("span",{staticClass:"message-count"},[s("span",{staticClass:"count-background"},[this._v("5")])])])])},staticRenderFns:[]},U=i("8AGX")({},R,!1,function(t){i("h/KG")},null,null).exports;a.a.use(c.a);var M=new c.a({routes:[{path:"/",redirect:"/message"},{path:"/message",component:h},{path:"/work",component:f},{path:"/myself",component:g},{path:"/approval",component:T},{path:"/message/chat/:id",name:"chat",component:L},{path:"/notice",name:"notice",component:B},{name:"noticeList",path:"/notice/list",component:F,children:[{name:"read",path:"read",component:U},{name:"unread",path:"unread",component:U}]}]});i("Lb5u");a.a.config.productionTip=!1,new a.a({el:"#app",router:M,template:"<App/>",components:{App:e}})},SFET:function(t,s){},SmxJ:function(t,s){},VNos:function(t,s){},Wpzn:function(t,s){},"h/KG":function(t,s){},ibQc:function(t,s,i){t.exports=i.p+"static/img/avatar1.49318f0.png"},jXah:function(t,s){},k1ZB:function(t,s){},kUhH:function(t,s){},rLf3:function(t,s){},wA9S:function(t,s){},zqzD:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bfe4fcb2dcbb72790801.js.map