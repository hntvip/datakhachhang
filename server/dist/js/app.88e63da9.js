(function(e){function t(t){for(var n,u,s=t[0],i=t[1],c=t[2],l=0,m=[];l<s.length;l++)u=s[l],a[u]&&m.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ff3be652"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},o=[],u=(r("7c55"),r("2877")),s={},i=Object(u["a"])(s,a,o,!1,null,null,null),c=i.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v("Thêm Thông tin Khách hàng")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userName"}},[e._v("Your UserName:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.name,expression:"userData.name"}],staticClass:"form-control",attrs:{type:"text",id:"userName"},domProps:{value:e.userData.name},on:{input:function(t){t.target.composing||e.$set(e.userData,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phoneNumber"}},[e._v("Your phone Number:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.phoneNumber,expression:"userData.phoneNumber"}],staticClass:"form-control",attrs:{type:"text",id:"phoneNumber"},domProps:{value:e.userData.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.userData,"phoneNumber",t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.submitted(t)}}},[e._v("Submit!\n  ")]),e.isSubmitted?r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[e._v("Result Form Data")]),e._v("\n          name: "+e._s(e.userData.name)+"\n          phone: "+e._s(e.userData.phoneNumber)+"\n      ")])]):e._e()])},d=[],h=(r("7f7f"),r("bc3a")),b=r.n(h),v={name:"HelloWorld",data:function(){return{userData:{name:"",phoneNumber:0,placeOrder:"",orderNumber:0,result:{}},errors:[],isSubmitted:!1,users:[]}},props:{msg:String},methods:{submitted:function(){var e=this,t="http://damp-temple-98347.herokuapp.com:1234/khachhang/create";b.a.post(t,{name:this.userData.name,phoneNumber:this.userData.phoneNumber,address:this.userData.address,placeOrder:this.userData.placeOrder,orderNumber:this.userData.orderNumber}).then(function(t){e.users=t.data,e.isSubmitted=!0}).catch(function(t){e.errors.push(t)})}}},g=v,_=(r("d592"),Object(u["a"])(g,f,d,!1,null,"793b289c",null)),y=_.exports,N={name:"home",components:{HelloWorld:y}},D=N,w=Object(u["a"])(D,p,m,!1,null,null,null),O=w.exports;n["a"].use(l["a"]);var j=new l["a"]({routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(e){return e(c)}}).$mount("#app")},"5c48":function(e,t,r){},"5f87":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("5c48"),a=r.n(n);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d592:function(e,t,r){"use strict";var n=r("5f87"),a=r.n(n);a.a}});
//# sourceMappingURL=app.88e63da9.js.map