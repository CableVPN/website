(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d01878"],{2173:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=function(e){return Object(c["E"])("data-v-40647adf"),e=e(),Object(c["C"])(),e},o=Object(c["n"])("Verify Code"),a=r((function(){return Object(c["m"])("div",{class:"code-tip"},"Enter the code we just sent to",-1)})),i={class:"mail-text"},u={class:"resend-box mt20"},s=r((function(){return Object(c["m"])("div",{class:"resend-text"},"Code will valid in 1 hour",-1)})),d=Object(c["n"])(" Continue "),l=r((function(){return Object(c["m"])("div",{class:"text-box"},[Object(c["m"])("div",{class:"newer-box"},[Object(c["m"])("span",null,"Return to"),Object(c["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)}));function b(e,t,n,r,b,f){var j=Object(c["K"])("layout-header"),O=Object(c["K"])("a-input"),m=Object(c["K"])("a-form-item"),p=Object(c["K"])("a-button"),v=Object(c["K"])("a-form"),h=Object(c["K"])("account"),y=Object(c["K"])("a-layout-content");return Object(c["B"])(),Object(c["l"])(c["b"],null,[Object(c["o"])(j),Object(c["o"])(y,{class:"content"},{default:Object(c["S"])((function(){return[Object(c["o"])(h,null,{title:Object(c["S"])((function(){return[o]})),main:Object(c["S"])((function(){return[Object(c["o"])(v,{layout:"vertical",model:r.formState,class:"form",onFinish:r.onFinished,onFinishFailed:r.onFinishFailed},{default:Object(c["S"])((function(){return[a,Object(c["m"])("div",i,Object(c["M"])(r.email),1),Object(c["m"])("div",u,[s,Object(c["m"])("div",{class:"resend-text turbo-link pointer",onClick:t[0]||(t[0]=function(){return r.sendCode&&r.sendCode.apply(r,arguments)})},"Send code")]),Object(c["o"])(m,{label:"verify code",name:"code",rules:[{required:!0,message:"Please input verify code"}]},{default:Object(c["S"])((function(){return[Object(c["o"])(O,{value:r.formState.code,"onUpdate:value":t[1]||(t[1]=function(e){return r.formState.code=e}),class:"turbo-input"},null,8,["value"])]})),_:1}),Object(c["o"])(m,{class:"mb30"},{default:Object(c["S"])((function(){return[Object(c["o"])(p,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:r.loading},{default:Object(c["S"])((function(){return[d]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),l]})),_:1})]})),_:1})],64)}n("368b");var f=n("56cd"),j=n("1da1"),O=(n("96cf"),n("6c02")),m=n("7dfd"),p=n("96c7"),v=n("4c16"),h={name:"Code",components:{LayoutHeader:p["a"],Account:v["a"]},setup:function(){var e=Object(c["G"])(!1),t=Object(O["c"])(),n=Object(O["d"])(),r=t.query.email,o=Object(c["F"])({code:""});function a(){return i.apply(this,arguments)}function i(){return i=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["f"])(r);case 2:t=e.sent,t.sent?f["a"].success({message:"Success",description:"Send code success"}):f["a"].error({message:"Fail",description:"Send code fail"});case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=Object(j["a"])(regeneratorRuntime.mark((function t(c){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,Object(m["g"])(r,c.code).catch((function(e){}));case 3:if(o=t.sent,e.value=!1,o.verified){t.next=7;break}return t.abrupt("return");case 7:n.push({name:"credential",query:{email:r,code:c.code}});case 8:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function d(){}return{formState:o,onFinished:u,onFinishFailed:d,email:r,sendCode:a,loading:e}}},y=(n("f08f"),n("6b0d")),S=n.n(y);const g=S()(h,[["render",b],["__scopeId","data-v-40647adf"]]);t["default"]=g},"8f2f":function(e,t,n){},f08f:function(e,t,n){"use strict";n("8f2f")}}]);