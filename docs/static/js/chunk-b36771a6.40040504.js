(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b36771a6"],{"22ee":function(e,t,n){"use strict";n("6be9")},"390f":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"text-box"},r={class:"newer-box"},i={href:"/signin.html",class:"turbo-link ml5"};function o(e,t,n,o,u,s){var b=Object(a["P"])("layout-header"),l=Object(a["P"])("a-input"),d=Object(a["P"])("a-form-item"),f=Object(a["P"])("a-button"),j=Object(a["P"])("a-form"),m=Object(a["P"])("account"),O=Object(a["P"])("a-layout-content");return Object(a["G"])(),Object(a["l"])(a["b"],null,[Object(a["o"])(b),Object(a["o"])(O,{class:"content"},{default:Object(a["ab"])((function(){return[Object(a["o"])(m,null,{title:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Forgot password")),1)]})),main:Object(a["ab"])((function(){return[Object(a["o"])(j,{layout:"vertical",model:o.formState,class:"form",onFinish:o.onFinished,onFinishFailed:o.onFinishFailed},{default:Object(a["ab"])((function(){return[Object(a["o"])(d,{label:e.$t("Email address"),class:"mt10",name:"email",rules:[{asyncValidator:o.check},{required:!0,message:"Please input email"}]},{default:Object(a["ab"])((function(){return[Object(a["o"])(l,{value:o.formState.email,"onUpdate:value":t[0]||(t[0]=function(e){return o.formState.email=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label","rules"]),Object(a["o"])(d,{class:"mb30"},{default:Object(a["ab"])((function(){return[Object(a["o"])(f,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:o.loading},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Continue")),1)]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),Object(a["m"])("div",c,[Object(a["m"])("div",r,[Object(a["m"])("span",null,Object(a["S"])(e.$t("Return to")),1),Object(a["m"])("a",i,Object(a["S"])(e.$t("Sign in")),1)])])]})),_:1})]})),_:1})],64)}var u=n("1da1"),s=(n("96cf"),n("ac1f"),n("00b4"),n("d9e2"),n("6c02")),b=n("96c7"),l=n("4c16"),d=n("7dfd"),f=n("5a50"),j={name:"Index",components:{LayoutHeader:b["a"],Account:l["a"]},setup:function(){var e=Object(a["L"])(""),t=Object(a["L"])(!1),n=Object(s["d"])(),c=Object(a["K"])({email:""});function r(e,t,n){return i.apply(this,arguments)}function i(){return i=Object(u["a"])(regeneratorRuntime.mark((function e(t,n,a){var c,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,n&&c.test(n)){e.next=3;break}return e.abrupt("return",a(new Error("Please input email address")));case 3:return r={app_id:f["a"],app_type:f["b"],identity_type:1,identify:n},e.next=6,Object(d["a"])(r);case 6:i=e.sent,i.is_existed?a():a(new Error("Email address doesn’t exist"));case 8:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function o(e){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.push({name:"code",query:t});case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function l(e){console.log(e)}return{check:r,errorMsg:e,formState:c,onFinished:o,onFinishFailed:l,loading:t}}},m=(n("22ee"),n("6b0d")),O=n.n(m);const p=O()(j,[["render",o],["__scopeId","data-v-4e1edbc7"]]);t["default"]=p},"6be9":function(e,t,n){}}]);