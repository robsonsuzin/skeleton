(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{4019:function(t,e,n){"use strict";var a=n("f4d0"),i=n.n(a);i.a},"48e7":function(t,e,n){"use strict";var a=n("e881"),i=n.n(a);i.a},"6c9a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticClass:"DashboardLayout",class:{"DashboardLayout--modal":t.modal},attrs:{view:"hHh LpR fff"}},[t.modal?t._e():n("q-header",{staticClass:"DashboardLayout__header bg-primary text-white",attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.leftDrawer=!t.leftDrawer}}}),n("img",{staticClass:"DashboardLayout__header_logo hide-in-1024",attrs:{src:"statics/dashboard/header-logo.png"}}),n("q-space"),n("div",{staticClass:"DashboardLayout__header_details row no-wrap items-center"},[n("app-breadcrumb")],1),n("q-space"),n("DashboardMenu")],1)],1),n("q-drawer",{attrs:{side:"left",elevated:"","content-class":"bg-white"},model:{value:t.leftDrawer,callback:function(e){t.leftDrawer=e},expression:"leftDrawer"}},[n("q-scroll-area",{staticClass:"fit"},[n("div",{staticClass:"DashboardLayout__drawer_header"},[n("img",{attrs:{src:"statics/dashboard/header-logo.png"}})]),n("DashboardActions",{attrs:{actions:t.actions}})],1)],1),n("q-page-container",[n("transition",{attrs:{name:t.transitionName,mode:"out-in"},on:{beforeLeave:t.beforeLeave,enter:t.enter,afterEnter:t.afterEnter}},[n("router-view",{key:t.key})],1)],1)],1)},i=[],o={computed:{transitionName:function(){return this.$store.getters["dashboard/getTransition"]}},methods:{beforeLeave:function(t){this.prevHeight=window.getComputedStyle(t).height},enter:function(t){var e=window.getComputedStyle(t),n=e.height;t.style.height=this.prevHeight,window.setTimeout((function(){t.style.height=n}))},afterEnter:function(t){t.style.height="auto"}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-list",{attrs:{bordered:"",separator:""}},[t._l(t.actions,(function(e){return[n("DashboardAction",{key:e.uuid,attrs:{action:e},on:{popup:t.openPopup}})]}))],2)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.action.children&&t.action.children.length?n("q-expansion-item",{key:t.action.uuid,attrs:{icon:t.action.icon,label:t.action.name,value:t.expanded}},[t._l(t.action.children,(function(e,a){return[n("DashboardAction",{key:a,attrs:{action:e},on:{active:function(e){t.expanded=!0},popup:function(e){return t.$emit("popup",e)}}})]}))],2):n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"resource-not-implemented":!t.action.path,"resource-separated":t.action.separated},attrs:{clickable:"",active:t.isActive},on:{click:function(e){return t.openAction(t.action)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.action.icon}})],1),n("q-item-section",[t._v("\n    "+t._s(t.action.name)+"\n  ")]),n("q-item-section",{staticClass:"open-in-popup",staticStyle:{padding:"0"},attrs:{side:""}},[n("q-btn",{attrs:{icon:"open_in_new",flat:"",dense:"",round:"",size:"0.6rem"},on:{click:function(e){return t.openInPopup(e,t.action)}}})],1)],1)},l=[],u=(n("28a5"),n("6762"),n("2fdb"),{name:"DashboardAction",props:{action:{type:Object,required:!0}},computed:{isActive:function(){var t=this.$route.path,e=this.action.path;return t.includes("".concat(this.action.path,"/"))||t===e}},data:function(){return{expanded:!1}},methods:{openAction:function(t){var e=t.path.split("?").shift();this.$router.push({path:e})},openInPopup:function(t,e){t.stopPropagation(),t.preventDefault(),this.$emit("popup",e.path)}},watch:{isActive:{immediate:!0,handler:function(t){t&&this.$emit("active",!0)}}}}),d=u,p=n("2877"),h=Object(p["a"])(d,c,l,!1,null,"7be522cc",null),m=h.exports,f={name:"DashboardActions",components:{DashboardAction:m},props:{actions:{type:[Array,Object],default:function(){return[]}}},methods:{openPopup:function(t){var e=void 0!==window.screenLeft?window.screenLeft:window.screenX,n=void 0!==window.screenTop?window.screenTop:window.screenY,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,i=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,o=1024,r=600,s=a/window.screen.availWidth,c=(a-o)/2/s+e,l=(i-r)/2/s+n,u="menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width="+o/s+",height="+r/s+",top="+l+",left="+c,d="".concat(window.location.origin).concat(window.location.pathname,"#").concat(t,"?modal=true"),p="Popup",h=window.open(d,p,u);window.focus&&h.focus()}}},g=f,w=Object(p["a"])(g,r,s,!1,null,"9b0a03e4",null),b=w.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-btn-dropdown",{attrs:{stretch:"",flat:"","content-class":"DashboardLayout__dropdown_menu"},scopedSlots:t._u([{key:"label",fn:function(){return[n("small",{staticClass:"DashboardLayout__user q-pl-sm q-pr-md"},[t._v(t._s(t.name))]),n("q-avatar",{attrs:{color:"white","text-color":"primary"}},[t._v("\n      "+t._s(t.letter)+"\n    ")])]},proxy:!0}])},[n("q-list",[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/dashboard/home/profile"}},[n("q-item-section",[n("q-item-label",[t._v(t._s(t.$lang("app.menu.profile.label")))]),n("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(t.$lang("app.menu.profile.caption"))+"\n        ")])],1)],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.exit}},[n("q-item-section",[n("q-item-label",[t._v(t._s(t.$lang("app.menu.logout.label")))]),n("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(t.$lang("app.menu.logout.caption"))+"\n        ")])],1)],1),t.$dev?n("q-item",[n("q-item-section",[t.$dev?n("q-toggle",{staticClass:"desktop-only hide-in-1200",attrs:{label:"Debugger",color:"red"},model:{value:t.debugging,callback:function(e){t.debugging=e},expression:"debugging"}}):t._e()],1)],1):t._e()],1)],1)},_=[],q=n("a18c"),$={name:"DashboardMenu",data:function(){return{debugging:!1}},computed:{name:function(){return this.$util.get(this.$store.getters["auth/getUser"],"login")},letter:function(){var t=this.$util.get(this.$store.getters["auth/getUser"],"name");return t?String(t).substring(0,1).toLocaleUpperCase():""}},methods:{exit:function(){this.$store.dispatch("auth/updateUser",void 0).then(this.logout)},logout:function(){var t=this;this.$store.dispatch("auth/logout").then((function(){return t.$browse(q["b"])}))}},created:function(){var t=this;this.$dev&&(this.debugging=this.$store.getters["app/getDebuggers"],this.$watch("debugging",(function(e){t.$store.dispatch("app/setDebuggers",e)})))}},D=$,y=(n("4019"),Object(p["a"])(D,v,_,!1,null,null,null)),k=y.exports,x=n("9561"),L={name:"DashboardLayout",components:{AppBreadcrumb:x["a"],DashboardMenu:k,DashboardActions:b},mixins:[o],data:function(){return{leftDrawer:!1,modal:!1,offline:!1}},computed:{key:function(){return this.$route.fullPath},actions:function(){return this.$store.getters["auth/getActions"]},title:function(){return this.$store.getters["dashboard/getTitle"]}},watch:{leftDrawer:function(t){window.localStorage.setItem("leftDrawer",t?"true":"false")},title:{immediate:!0,handler:function(t){window.document.title=t}}},created:function(){var t=this;if(this.offline=this.$store.getters["app/getOffline"],this.$watch("offline",(function(e){t.$store.dispatch("app/setOffline",e)})),this.$route.query.modal)this.modal=!0;else{var e=window.localStorage.getItem("leftDrawer");this.leftDrawer=null===e||"true"===e}},mounted:function(){this.$q.loading.hide()}},A=L,C=(n("48e7"),Object(p["a"])(A,a,i,!1,null,null,null));e["default"]=C.exports},e881:function(t,e,n){},f4d0:function(t,e,n){}}]);