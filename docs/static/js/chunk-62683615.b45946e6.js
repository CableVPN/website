(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62683615"],{1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),i=n("d784"),o=n("44e7"),u=n("825a"),l=n("1d80"),s=n("4840"),d=n("8aa5"),b=n("50c4"),f=n("577e"),p=n("dc4a"),h=n("4dae"),v=n("14c3"),m=n("9263"),O=n("9f7f"),j=n("d039"),g=O.UNSUPPORTED_Y,w=4294967295,x=Math.min,y=[].push,P=c(/./.exec),S=c(y),_=c("".slice),E=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=f(l(this)),i=void 0===n?w:n>>>0;if(0===i)return[];if(void 0===e)return[c];if(!o(e))return a(t,c,e,i);var u,s,d,b=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,O=new RegExp(e.source,p+"g");while(u=a(m,O,c)){if(s=O.lastIndex,s>v&&(S(b,_(c,v,u.index)),u.length>1&&u.index<c.length&&r(y,b,h(u,1)),d=u[0].length,v=s,b.length>=i))break;O.lastIndex===u.index&&O.lastIndex++}return v===c.length?!d&&P(O,"")||S(b,""):S(b,_(c,v)),b.length>i?h(b,0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=l(this),i=void 0==t?void 0:p(t,e);return i?a(i,t,r,n):a(c,f(r),t,n)},function(e,r){var a=u(this),i=f(e),o=n(c,a,i,r,c!==t);if(o.done)return o.value;var l=s(a,RegExp),p=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),m=new l(g?"^(?:"+a.source+")":a,h),O=void 0===r?w:r>>>0;if(0===O)return[];if(0===i.length)return null===v(m,i)?[i]:[];var j=0,y=0,P=[];while(y<i.length){m.lastIndex=g?0:y;var E,F=v(m,g?_(i,y):i);if(null===F||(E=x(b(m.lastIndex+(g?y:0)),i.length))===j)y=d(i,y,p);else{if(S(P,_(i,j,y)),P.length===O)return P;for(var R=1;R<=F.length-1;R++)if(S(P,F[R]),P.length===O)return P;y=j=E}}return S(P,_(i,j)),P}]}),!E,g)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),i=n("1626"),o=n("c6b6"),u=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===o(e))return a(u,e,t);throw l("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"504e":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},c17a:function(e,t,n){"use strict";n("504e")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),c=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),l=o("species"),s=RegExp.prototype;e.exports=function(e,t,n,d){var b=o(e),f=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),p=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!p||n){var h=r(/./[b]),v=t(b,""[e],(function(e,t,n,a,i){var o=r(e),u=t.exec;return u===c||u===s.exec?f&&!i?{done:!0,value:h(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(s,b,v[1])}d&&u(s[b],"sham",!0)}},d925:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"code-tip-title"},c={class:"mail-text mb15"},i={class:"text-box"},o={class:"newer-box"},u={href:"/signin.html",class:"turbo-link ml5"};function l(e,t,n,l,s,d){var b=Object(r["P"])("layout-header"),f=Object(r["P"])("a-input-password"),p=Object(r["P"])("a-form-item"),h=Object(r["P"])("a-button"),v=Object(r["P"])("a-form"),m=Object(r["P"])("account"),O=Object(r["P"])("a-layout-content");return Object(r["G"])(),Object(r["l"])(r["b"],null,[Object(r["o"])(b),Object(r["o"])(O,{class:"content"},{default:Object(r["ab"])((function(){return[Object(r["o"])(m,null,{title:Object(r["ab"])((function(){return[Object(r["n"])(Object(r["S"])(e.$t("Reset password")),1)]})),main:Object(r["ab"])((function(){return[Object(r["o"])(v,{layout:"vertical",model:l.formState,class:"form",onFinish:l.onFinished,onFinishFailed:l.onFinishFailed},{default:Object(r["ab"])((function(){return[Object(r["m"])("div",a,Object(r["S"])(e.$t("Account")),1),Object(r["m"])("div",c,Object(r["S"])(l.email),1),Object(r["o"])(p,{label:e.$t("Password"),name:"credential",rules:[{required:!0,message:e.$t("Please input password")}]},{default:Object(r["ab"])((function(){return[Object(r["o"])(f,{value:l.formState.credential,"onUpdate:value":t[0]||(t[0]=function(e){return l.formState.credential=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(r["o"])(p,{label:e.$t("Confirm password"),name:"credential_repeated",rules:[{required:!0,message:e.$t("Please input confirm password")},{validator:l.repeatValidator}]},{default:Object(r["ab"])((function(){return[Object(r["o"])(f,{value:l.formState.credential_repeated,"onUpdate:value":t[1]||(t[1]=function(e){return l.formState.credential_repeated=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(r["o"])(p,{class:"mb30"},{default:Object(r["ab"])((function(){return[Object(r["o"])(h,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:""},{default:Object(r["ab"])((function(){return[Object(r["n"])(Object(r["S"])(e.$t("Continue")),1)]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),Object(r["m"])("div",i,[Object(r["m"])("div",o,[Object(r["m"])("span",null,Object(r["S"])(e.$t("Return to")),1),Object(r["m"])("a",u,Object(r["S"])(e.$t("Sign in")),1)])])]})),_:1})]})),_:1})],64)}var s=n("1da1"),d=(n("96cf"),n("ac1f"),n("1276"),n("d9e2"),n("b17e")),b=n("47e2"),f=n("fa7d"),p=n("6c02"),h=n("7dfd"),v=n("96c7"),m=n("4c16"),O={name:"Code",components:{LayoutHeader:v["a"],Account:m["a"]},setup:function(){var e=Object(p["c"])(),t=Object(b["b"])(),n=t.t,a=e.query,c=a.email,i=a.code,o=Object(r["K"])({credential:"",credential_repeated:""});function u(e){for(var t=e.split(""),n=!0,r=1;r<t.length-1;r++){var a=t[r-1].charCodeAt(),c=t[r].charCodeAt(),i=t[r+1].charCodeAt();i-c==1&&c-a==1&&(n=!1)}return!n}function l(e,t,n){return t?d["r"](/(\w)*(\w)\2{2}(\w)*/,t)?n(new Error("Password cannot be 3 or more consecutive same characters")):u(t)?n(new Error("Password cannot be 3 or more consecutive characters in sequence")):d["r"](/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20})/,t)?void n():n(new Error("Password must be 8-20 characters and contain upper and lower case characters and numbers")):n()}function v(e,t,r){return Object(f["b"])(o.credential)?r():d["g"](t,o.credential)?void r():r(new Error(n("Confirm password is not equal to password")))}function m(e){return O.apply(this,arguments)}function O(){return O=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["f"])(c,t.credential,t.credential_repeated,i);case 2:e.sent,location.href="/signin.html";case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(){}return{formState:o,onFinished:m,onFinishFailed:j,email:c,passwordValidator:l,repeatValidator:v}}},j=(n("c17a"),n("6b0d")),g=n.n(j);const w=g()(O,[["render",l],["__scopeId","data-v-502f6f07"]]);t["default"]=w}}]);