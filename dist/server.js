!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=17)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){e.exports=n(14)},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(u=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(i," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var u,c,i;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var i=[].concat(e[c]);r&&a[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t,n){(t=n(11)(!1)).push([e.i,".Red {\r\n  background: red;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  width: 128px;\r\n  height: 128px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n",""]),e.exports=t},function(e,t,n){(t=n(11)(!1)).push([e.i,".Blue {\r\n  background: blue;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n  width: 128px;\r\n  height: 128px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r);function o(e,t,n,r,a,o,u){try{var c=e[o](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function c(e){o(u,r,a,c,i,"next",e)}function i(e){o(u,r,a,c,i,"throw",e)}c(void 0)}))}}var c=n(0),i=n.n(c),s=n(7),l=n.n(s),p=n(8),f=n.n(p),d=n(1),m=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/red"},"Red")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/blue"},"Blue")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/users"},"Users")))},v=(n(15),function(){return i.a.createElement("div",{className:"Red"},"Red")}),h=function(){return i.a.createElement(v,null)},b=(n(16),function(){return i.a.createElement("div",{className:"Blue"},"Blue")}),E=function(){return i.a.createElement(b,null)},y=function(e){var t=e.users;return t?i.a.createElement("div",null,i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},g=n(3);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(9),w=n.n(S),P=n(4),R=a.a.mark(F),k=a.a.mark(I),_="users/GET_USERS_PENDING",U="users/GET_USERS_SUCCESS",q="users/GET_USERS_FAILURE",T="users/GET_USER",D="users/GET_USER_SUCCESS",C="users/GET_USER_FAILURE",L=function(e){return{type:q,error:!0,payload:e}},N=function(e){return{type:T,payload:e}},G=function(e){return{type:D,payload:e}},M=function(e){return{type:C,payload:e,error:!0}},A=function(e){return w.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function F(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(P.call)(A,e.payload);case 3:return t=n.sent,n.next=6,Object(P.put)(G(t.data));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(P.put)(M(n.t0));case 12:case"end":return n.stop()}}),R,null,[[0,8]])}function I(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.takeEvery)(T,F);case 2:case"end":return e.stop()}}),k)}var B={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return O({},e,{loading:O({},e.loading,{users:!0})});case U:return O({},e,{loading:O({},e.loading,{users:!1}),users:t.payload.data});case q:return O({},e,{loading:O({},e.loading,{users:!1}),error:O({},e.error,{users:t.payload})});case T:return O({},e,{loading:O({},e.loading,{user:!0}),error:O({},e.error,{user:null})});case D:return O({},e,{loading:O({},e.loading,{user:!1}),user:t.payload});case C:return O({},e,{loading:O({},e.loading,{user:!1}),error:O({},e.error,{user:t.payload})});default:return e}},z=Object(c.createContext)(null),Y=z,$=function(e){var t=e.resolve,n=Object(c.useContext)(z);return n?n.done?null:(n.promises.push(Promise.resolve(t())),null):null},H=Object(g.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=u(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:_}),e.next=4,w.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,t({type:U,payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t(L(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.users,n=e.getUsers;return Object(c.useEffect)((function(){t||n()}),[n,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{users:t}),i.a.createElement($,{resolve:n}))})),K=function(e){var t=e.user,n=t.email,r=t.name,a=t.username;return i.a.createElement("div",null,i.a.createElement("h1",null,a," (",r,")"),i.a.createElement("p",null,i.a.createElement("b",null,"e-mail:")," ",n))},Q=function(e){var t,n,r=e.id,a=Object(g.useSelector)((function(e){return e.users.user})),o=Object(g.useDispatch)();return t=function(){return o(N(r))},(n=Object(c.useContext)(z))&&!n.done&&n.promises.push(Promise.resolve(t())),Object(c.useEffect)((function(){a&&a.id===parseInt(r,10)||o(N(r))}),[o,r,a]),a?i.a.createElement(K,{user:a}):null},V=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null),i.a.createElement(d.Route,{path:"/users/:id",render:function(e){var t=e.match;return(i.a.createElement(Q,{id:t.params.id}))}}))},W=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("hr",null),i.a.createElement(d.Route,{path:"/red",component:h}),i.a.createElement(d.Route,{path:"/blue",component:E}),i.a.createElement(d.Route,{path:"/users",component:V}))},X=n(10),Z=n.n(X),ee=n(12),te=n.n(ee),ne=n(5),re=n(6),ae=n.n(re),oe=a.a.mark(ue);function ue(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.all)([I()]);case 2:case"end":return e.stop()}}),oe)}var ce=Object(ne.combineReducers)({users:J}),ie=n(13),se=n.n(ie),le=JSON.parse(te.a.readFileSync(Z.a.resolve("./build/asset-manifest.json"),"utf8")),pe=Object.keys(le.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(le[e],'"><\/script>')})).join("");function fe(e,t){return console.log(le.files),'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1,shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title>React App</title>\n    <link href="'.concat(le.files["main.css"],'" rel="stylesheet" />\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root">\n      ').concat(e,"\n    </div>\n    ").concat(t,'\n    <script src="').concat(le.files["runtime~main.js"],'"><\/script>\n    ').concat(pe,'\n    <script src="').concat(le.files["main.js"],'"><\/script>\n  </body>\n  </html>\n    ')}var de=f()(),me=function(){var e=u(a.a.mark((function e(t,n,r){var o,u,c,s,p,f,m,v,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={done:!1,promises:[]},u={},c=ae()(),s=Object(ne.createStore)(ce,Object(ne.applyMiddleware)(se.a,c)),p=c.run(ue).toPromise(),f=i.a.createElement(Y.Provider,{value:o},i.a.createElement(g.Provider,{store:s},i.a.createElement(d.StaticRouter,{location:t.url,context:u},i.a.createElement(W,null)))),l.a.renderToStaticMarkup(f),s.dispatch(re.END),e.prev=8,e.next=11,p;case 11:return e.next=13,Promise.all(o.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",n.status(500));case 18:o.done=!0,m=l.a.renderToString(f),v=JSON.stringify(s.getState()).replace(/</g,"\\u003c"),h="<script>_ _PRELOADED_STATE_ _ = ".concat(v,"<\/script>"),n.send(fe(m,h));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),ve=f.a.static(Z.a.resolve("./build"),{index:!1});de.use(ve),de.use(me),de.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);