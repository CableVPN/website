(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],l=0,f=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={signin:0},c=[];function u(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0aa1e7":"ea5c3857","chunk-2d0abc58":"d3b173f2","chunk-2d0b28a1":"d306d44a","chunk-2d0b9da9":"cdb05f63","chunk-2d0baadb":"971a8da3","chunk-2d0bcde4":"240fe67d","chunk-2d0c0484":"dd1e5f10","chunk-2d0c0e96":"54b04287","chunk-2d0c19a6":"2cd1f66d","chunk-2d0cbb01":"8e9b0a9b","chunk-2d0d2ba0":"e9fb87a7","chunk-2d0dd642":"4d772b2d","chunk-2d20ff34":"c4c1e200","chunk-2d213b39":"27ec398b","chunk-2d218077":"9c549b6d","chunk-2d21a426":"c031de8a","chunk-2d21ad95":"0a1eb55a","chunk-2d21d6ce":"3788db0d","chunk-2d21dc94":"3ca2cae1","chunk-2d2223a5":"d55c83e7","chunk-2d2268eb":"2bd87ff0","chunk-2d2382a8":"602449fa"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=u(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;c.push([3,"chunk-common"]),n()})({"0d3b":function(e,t,n){var r=n("d039"),a=n("b622"),c=n("c430"),u=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),c&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[u]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),u=n("1626"),o=n("c6b6"),i=n("9263"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(u(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===o(e))return a(i,e,t);throw s("RegExp#exec called on incompatible receiver")}},3:function(e,t,n){e.exports=n("f105")},5352:function(e,t,n){"use strict";n("e260");var r=n("23e7"),a=n("da84"),c=n("d066"),u=n("c65b"),o=n("e330"),i=n("0d3b"),s=n("6eeb"),l=n("e2cc"),d=n("d44e"),f=n("9ed3"),h=n("69f3"),b=n("19aa"),p=n("1626"),v=n("1a2d"),g=n("0366"),m=n("f5df"),y=n("825a"),O=n("861d"),j=n("577e"),w=n("7c73"),k=n("5c6c"),x=n("9a1f"),R=n("35a1"),S=n("d6d6"),P=n("b622"),U=n("addb"),L=P("iterator"),_="URLSearchParams",E=_+"Iterator",F=h.set,I=h.getterFor(_),M=h.getterFor(E),T=c("fetch"),$=c("Request"),q=c("Headers"),A=$&&$.prototype,C=q&&q.prototype,N=a.RegExp,J=a.TypeError,Q=a.decodeURIComponent,z=a.encodeURIComponent,G=o("".charAt),H=o([].join),K=o([].push),B=o("".replace),D=o([].shift),V=o([].splice),W=o("".split),X=o("".slice),Y=/\+/g,Z=Array(4),ee=function(e){return Z[e-1]||(Z[e-1]=N("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return Q(e)}catch(t){return e}},ne=function(e){var t=B(e,Y," "),n=4;try{return Q(t)}catch(r){while(n)t=B(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ce=function(e){return ae[e]},ue=function(e){return B(z(e),re,ce)},oe=f((function(e,t){F(this,{type:E,iterator:x(I(e).entries),kind:t})}),"Iterator",(function(){var e=M(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ie=function(e){this.entries=[],this.url=null,void 0!==e&&(O(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===G(e,0)?X(e,1):e:j(e)))};ie.prototype={type:_,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,a,c,o,i,s=R(e);if(s){t=x(e,s),n=t.next;while(!(r=u(n,t)).done){if(a=x(y(r.value)),c=a.next,(o=u(c,a)).done||(i=u(c,a)).done||!u(c,a).done)throw J("Expected sequence with length 2");K(this.entries,{key:j(o.value),value:j(i.value)})}}else for(var l in e)v(e,l)&&K(this.entries,{key:l,value:j(e[l])})},parseQuery:function(e){if(e){var t,n,r=W(e,"&"),a=0;while(a<r.length)t=r[a++],t.length&&(n=W(t,"="),K(this.entries,{key:ne(D(n)),value:ne(H(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],K(n,ue(e.key)+"="+ue(e.value));return H(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var se=function(){b(this,le);var e=arguments.length>0?arguments[0]:void 0;F(this,new ie(e))},le=se.prototype;if(l(le,{append:function(e,t){S(arguments.length,2);var n=I(this);K(n.entries,{key:j(e),value:j(t)}),n.updateURL()},delete:function(e){S(arguments.length,1);var t=I(this),n=t.entries,r=j(e),a=0;while(a<n.length)n[a].key===r?V(n,a,1):a++;t.updateURL()},get:function(e){S(arguments.length,1);for(var t=I(this).entries,n=j(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){S(arguments.length,1);for(var t=I(this).entries,n=j(e),r=[],a=0;a<t.length;a++)t[a].key===n&&K(r,t[a].value);return r},has:function(e){S(arguments.length,1);var t=I(this).entries,n=j(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){S(arguments.length,1);for(var n,r=I(this),a=r.entries,c=!1,u=j(e),o=j(t),i=0;i<a.length;i++)n=a[i],n.key===u&&(c?V(a,i--,1):(c=!0,n.value=o));c||K(a,{key:u,value:o}),r.updateURL()},sort:function(){var e=I(this);U(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=I(this).entries,r=g(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),s(le,L,le.entries,{name:"entries"}),s(le,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),d(se,_),r({global:!0,forced:!i},{URLSearchParams:se}),!i&&p(q)){var de=o(C.has),fe=o(C.set),he=function(e){if(O(e)){var t,n=e.body;if(m(n)===_)return t=e.headers?new q(e.headers):new q,de(t,"content-type")||fe(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),w(e,{body:k(0,j(n)),headers:k(0,t)})}return e};if(p(T)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return T(e,arguments.length>1?he(arguments[1]):{})}}),p($)){var be=function(e){return b(this,A),new $(e,arguments.length>1?he(arguments[1]):{})};A.constructor=be,be.prototype=A,r({global:!0,forced:!0},{Request:be})}}e.exports={URLSearchParams:se,getState:I}},"841c":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),c=n("825a"),u=n("1d80"),o=n("129f"),i=n("577e"),s=n("dc4a"),l=n("14c3");a("search",(function(e,t,n){return[function(t){var n=u(this),a=void 0==t?void 0:s(t,e);return a?r(a,t,n):new RegExp(t)[e](i(n))},function(e){var r=c(this),a=i(e),u=n(t,r,a);if(u.done)return u.value;var s=r.lastIndex;o(s,0)||(r.lastIndex=0);var d=l(r,a);return o(r.lastIndex,s)||(r.lastIndex=s),null===d?-1:d.index}]}))},9861:function(e,t,n){n("5352")},aa95:function(e,t,n){},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,c=function(e,t){var n=e.length,i=a(n/2);return n<8?u(e,t):o(e,c(r(e,0,i),t),c(r(e,i),t),t)},u=function(e,t){var n,r,a=e.length,c=1;while(c<a){r=c,n=e[c];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==c++&&(e[r]=n)}return e},o=function(e,t,n,r){var a=t.length,c=n.length,u=0,o=0;while(u<a||o<c)e[u+o]=u<a&&o<c?r(t[u],n[o])<=0?t[u++]:n[o++]:u<a?t[u++]:n[o++];return e};e.exports=c},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),c=n("9263"),u=n("d039"),o=n("b622"),i=n("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var f=o(e),h=!u((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),b=h&&!u((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!b||n){var p=r(/./[f]),v=t(f,""[e],(function(e,t,n,a,u){var o=r(e),i=t.exec;return i===c||i===l.exec?h&&!u?{done:!0,value:p(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(l,f,v[1])}d&&i(l[f],"sham",!0)}},f105:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),c={class:"text-box"},u={href:"/reset_pw.html",class:"turbo-link"},o={class:"newer-box"},i={href:"/signup.html",class:"turbo-link ml5"};function s(e,t,n,r,s,l){var d=Object(a["P"])("layout-header"),f=Object(a["P"])("a-alert"),h=Object(a["P"])("a-input"),b=Object(a["P"])("a-form-item"),p=Object(a["P"])("a-input-password"),v=Object(a["P"])("a-button"),g=Object(a["P"])("a-form"),m=Object(a["P"])("account"),y=Object(a["P"])("a-layout-content");return Object(a["G"])(),Object(a["l"])(a["b"],null,[Object(a["o"])(d),Object(a["o"])(y,{class:"content"},{default:Object(a["ab"])((function(){return[Object(a["o"])(m,null,{title:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Sign in")),1)]})),main:Object(a["ab"])((function(){return[Object(a["o"])(g,{layout:"vertical",model:r.formState,class:"form",onFinish:r.onFinished,onFinishFailed:r.onFinishFailed},{default:Object(a["ab"])((function(){return[r.errorMsg?(Object(a["G"])(),Object(a["j"])(f,{key:0,message:r.errorMsg,type:"error"},null,8,["message"])):Object(a["k"])("",!0),Object(a["o"])(b,{label:e.$t("Email address"),class:"mt10",name:"username",rules:[{required:!0,message:e.$t("Please input email address")}]},{default:Object(a["ab"])((function(){return[Object(a["o"])(h,{value:r.formState.username,"onUpdate:value":t[0]||(t[0]=function(e){return r.formState.username=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(a["o"])(b,{label:e.$t("Password"),name:"password",rules:[{required:!0,message:e.$t("Please input password")}]},{default:Object(a["ab"])((function(){return[Object(a["o"])(p,{value:r.formState.password,"onUpdate:value":t[1]||(t[1]=function(e){return r.formState.password=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(a["o"])(b,{class:"mb15"},{default:Object(a["ab"])((function(){return[Object(a["o"])(v,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:r.loading},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Sign in")),1)]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),Object(a["m"])("div",c,[Object(a["m"])("a",u,Object(a["S"])(e.$t("Forget your password"))+"?",1),Object(a["m"])("div",o,[Object(a["m"])("span",null,Object(a["S"])(e.$t("New to"))+" Turbo Max?",1),Object(a["m"])("a",i,Object(a["S"])(e.$t("Sign up")),1)])])]})),_:1})]})),_:1})],64)}var l=n("5530"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("5d2d")),f=n("fa7d"),h=n("96c7"),b=n("4c16"),p=n("7dfd"),v=n("5a50"),g={name:"Index",components:{LayoutHeader:h["a"],Account:b["a"]},setup:function(){var e=Object(a["L"])(""),t=Object(a["L"])(!1),n=Object(a["K"])({username:"",password:""});function c(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(n){var r,a,c,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value=!0,e.next=3,Object(p["c"])(n.username,n.password).catch((function(){}));case 3:if(r=e.sent,t.value=!1,r){e.next=7;break}return e.abrupt("return");case 7:a=r.token,c=Object(l["a"])({},r),delete c.token,d["a"].set("TOKEN",a,v["c"]),d["a"].set("USERINFO",c,v["c"]),u=null,Object(f["d"])(d["a"].get("subscription_id"))&&(u="/subscriptions.html"),o=new URLSearchParams(location.search),location.href=o.get("redirect_url")||u||"/user.html";case 16:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function o(){}return{errorMsg:e,formState:n,onFinished:c,onFinishFailed:o,loading:t}}},m=(n("f726"),n("6b0d")),y=n.n(m);const O=y()(g,[["render",s],["__scopeId","data-v-c0d8828e"]]);var j=O,w=n("e8cd"),k=n("495e");n("62fc");function x(){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(a["i"])(j),e.next=3,Object(w["a"])(t);case 3:t.use(k["a"]).mount("#app");case 4:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}x()},f726:function(e,t,n){"use strict";n("aa95")}});