(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"eedabc6f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4855:function(e,t,n){"use strict";var r=n("cfd6"),o=n.n(r);o.a},"4b1e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("v-content",[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-navigation-drawer",{staticClass:"teal",attrs:{dark:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"mt-8 mb-5"},[n("v-avatar",[n("v-icon",{attrs:{"x-large":""}},[e._v("fab fa-pied-piper-alt")])],1)],1)],1),n("v-list",e._l(e.links,(function(t){return n("v-list-item",{key:t.text,attrs:{router:"",to:t.route,activeclass:"border"}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1),n("v-flex",{staticClass:"ma-2"},[[n("v-carousel",{attrs:{cycle:"",dark:"",height:"230","height-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.slides,(function(t,r){return n("v-carousel-item",{key:r},[n("v-sheet",{attrs:{color:"white",height:"80%",align:"center",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"grey--text"},[n("h4",[e._v("Suggested Ideas")]),n("p",{staticClass:"ma-2"},[e._v(e._s(t))]),n("v-btn",{attrs:{outlined:"",color:"indigo"}},[e._v("Read More")])],1)])],1)],1)})),1)]],2)],1)],1)},s=[],c={data:function(){return{drawer:!0,links:[{icon:"fas fa-home",text:"Home",route:"/"},{icon:"fas fa-tachometer-alt",text:"Energy",route:"/Energy"},{icon:"fas fa-user",text:"Personal Information",route:"/user"},{icon:"fas fa-cog",text:"Settings",route:"/settings"},{icon:"fas fa-sign-out-alt",text:"Log Out",route:"/sign-out"},{icon:"fas fa-info-circle",text:"About",route:"/About"}],slides:["IOT is used for this Smart Switch","IOT is used for this Smart Switch","IOT is used for this Smart Switch","IOT is used for this Smart Switch"]}}},u=c,l=(n("4855"),n("2877")),f=n("6544"),d=n.n(f),v=n("8212"),p=n("8336"),h=n("5e66"),m=n("3e35"),g=n("0e8f"),b=n("132d"),w=n("a722"),y=n("8860"),k=n("da13"),x=n("1800"),_=n("5d23"),V=n("f774"),O=n("0fd9"),S=n("8dd9"),C=Object(l["a"])(u,i,s,!1,null,"4ce0d7ed",null),j=C.exports;d()(C,{VAvatar:v["a"],VBtn:p["a"],VCarousel:h["a"],VCarouselItem:m["a"],VFlex:g["a"],VIcon:b["a"],VLayout:w["a"],VList:y["a"],VListItem:k["a"],VListItemAction:x["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:V["a"],VRow:O["a"],VSheet:S["a"]});var A={name:"App",components:{Navbar:j},data:function(){return{}}},I=A,L=n("7496"),P=n("a75b"),T=Object(l["a"])(I,o,a,!1,null,null,null),E=T.exports;d()(T,{VApp:L["a"],VContent:P["a"]});var N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var $=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{"{background":"$vuetify.theme.themes.light.background}"}},[n("v-container",[n("v-layout",{staticClass:"ma-4",attrs:{row:""}},[n("v-app",{staticClass:"rounded",staticStyle:{"background-color":"grey lighten-1"}}),n("v-row",[n("v-col",{staticClass:"light",attrs:{cols:"12",md:"8"}})],1)],1)],1)],1)},F=[],R={data:function(){return{}},name:"home",components:{},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},q=R,B=(n("fc28"),n("62ad")),H=n("a523"),J=Object(l["a"])(q,M,F,!1,null,"f561739c",null),D=J.exports;d()(J,{VApp:L["a"],VCol:B["a"],VContainer:H["a"],VLayout:w["a"],VRow:O["a"]}),r["a"].use($["a"]);var z=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new $["a"]({routes:z}),K=G,Q=n("2f62");r["a"].use(Q["a"]);var U=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=(n("15f5"),n("d1e78"),n("f309")),X=n("fcf4");r["a"].use(W["a"]);var Y=new W["a"]({icons:{iconfont:"md"},theme:{themes:{light:{background:X["a"].teal.accent2},dark:{background:X["a"].teal}}}});r["a"].config.productionTip=!1,new r["a"]({router:K,store:U,vuetify:Y,render:function(e){return e(E)}}).$mount("#app")},cfd6:function(e,t,n){},fc28:function(e,t,n){"use strict";var r=n("4b1e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0f42f259.js.map