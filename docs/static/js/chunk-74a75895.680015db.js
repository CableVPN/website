(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a75895"],{"16dd":function(e,t,n){},2173:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"code-tip"},r={class:"mail-text"},o={class:"resend-box mt20"},i={class:"resend-text"},u={class:"text-box"},s={class:"newer-box"},b={href:"/signin.html",class:"turbo-link ml5"};function d(e,t,n,d,l,j){var O=Object(c["P"])("layout-header"),f=Object(c["P"])("a-input"),m=Object(c["P"])("a-form-item"),p=Object(c["P"])("a-button"),h=Object(c["P"])("a-form"),v=Object(c["P"])("account"),y=Object(c["P"])("a-layout-content");return Object(c["G"])(),Object(c["l"])(c["b"],null,[Object(c["o"])(O),Object(c["o"])(y,{class:"content"},{default:Object(c["ab"])((function(){return[Object(c["o"])(v,null,{title:Object(c["ab"])((function(){return[Object(c["n"])(Object(c["S"])(e.$t("Verify Code")),1)]})),main:Object(c["ab"])((function(){return[Object(c["o"])(h,{layout:"vertical",model:d.formState,class:"form",onFinish:d.onFinished,onFinishFailed:d.onFinishFailed},{default:Object(c["ab"])((function(){return[Object(c["m"])("div",a,Object(c["S"])(e.$t("Enter the code we just sent to")),1),Object(c["m"])("div",r,Object(c["S"])(d.email),1),Object(c["m"])("div",o,[Object(c["m"])("div",i,Object(c["S"])(e.$t("Code will valid in 1 hour")),1),Object(c["m"])("div",{class:"resend-text turbo-link pointer",onClick:t[0]||(t[0]=function(){return d.sendCode&&d.sendCode.apply(d,arguments)})},Object(c["S"])(e.$t("Send code")),1)]),Object(c["o"])(m,{label:e.$t("verify code"),name:"code",rules:[{required:!0,message:e.$t("Please input verify code")}]},{default:Object(c["ab"])((function(){return[Object(c["o"])(f,{value:d.formState.code,"onUpdate:value":t[1]||(t[1]=function(e){return d.formState.code=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(c["o"])(m,{class:"mb30"},{default:Object(c["ab"])((function(){return[Object(c["o"])(p,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:d.loading},{default:Object(c["ab"])((function(){return[Object(c["n"])(Object(c["S"])(e.$t("Continue")),1)]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),Object(c["m"])("div",u,[Object(c["m"])("div",s,[Object(c["m"])("span",null,Object(c["S"])(e.$t("Return to")),1),Object(c["m"])("a",b,Object(c["S"])(e.$t("Sign in")),1)])])]})),_:1})]})),_:1})],64)}n("368b");var l=n("56cd"),j=n("1da1"),O=(n("96cf"),n("6c02")),f=n("7dfd"),m=n("96c7"),p=n("4c16"),h={name:"Code",components:{LayoutHeader:m["a"],Account:p["a"]},setup:function(){var e=Object(c["L"])(!1),t=Object(O["c"])(),n=Object(O["d"])(),a=t.query.email,r=Object(c["K"])({code:""});function o(){return i.apply(this,arguments)}function i(){return i=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["g"])(a);case 2:t=e.sent,t.sent?l["a"].success({message:"Success",description:"Send code success"}):l["a"].error({message:"Fail",description:"Send code fail"});case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=Object(j["a"])(regeneratorRuntime.mark((function t(c){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,Object(f["h"])(a,c.code).catch((function(e){}));case 3:if(r=t.sent,e.value=!1,r.verified){t.next=7;break}return t.abrupt("return");case 7:n.push({name:"credential",query:{email:a,code:c.code}});case 8:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function b(){}return{formState:r,onFinished:u,onFinishFailed:b,email:a,sendCode:o,loading:e}}},v=(n("7a1e"),n("6b0d")),y=n.n(v);const S=y()(h,[["render",d],["__scopeId","data-v-776112ac"]]);t["default"]=S},"7a1e":function(e,t,n){"use strict";n("16dd")}}]);