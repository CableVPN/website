(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-165919e2"],{"903a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=function(e){return Object(c["F"])("data-v-7567771c"),e=e(),Object(c["D"])(),e},a=Object(c["n"])("Verify Code"),i=r((function(){return Object(c["m"])("div",{class:"code-tip"},"Enter the code we just sent to",-1)})),o={class:"mail-text"},u={class:"resend-box mt20"},s=r((function(){return Object(c["m"])("div",{class:"resend-text"},"Code will valid in 1 hour",-1)})),l=Object(c["n"])(" Continue "),d=r((function(){return Object(c["m"])("div",{class:"text-box"},[Object(c["m"])("div",{class:"newer-box"},[Object(c["m"])("span",null,"Already have an account?"),Object(c["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)})),b=r((function(){return Object(c["m"])("div",{class:"tip-text"},[Object(c["n"])(" By signing up, you accept our "),Object(c["m"])("a",{href:"/terms_of_service.html",class:"turbo-link"},"Terms of service"),Object(c["n"])(" and "),Object(c["m"])("a",{href:"/policy.html",class:"turbo-link"},"policy")],-1)}));function f(e,t,n,r,f,j){var m=Object(c["L"])("layout-header"),O=Object(c["L"])("a-input"),p=Object(c["L"])("a-form-item"),h=Object(c["L"])("a-button"),v=Object(c["L"])("a-form"),y=Object(c["L"])("account"),g=Object(c["L"])("a-layout-content");return Object(c["C"])(),Object(c["l"])(c["b"],null,[Object(c["o"])(m),Object(c["o"])(g,{class:"content"},{default:Object(c["T"])((function(){return[Object(c["o"])(y,null,{title:Object(c["T"])((function(){return[a]})),main:Object(c["T"])((function(){return[Object(c["o"])(v,{layout:"vertical",model:r.formState,class:"form",onFinish:r.onFinished,onFinishFailed:r.onFinishFailed},{default:Object(c["T"])((function(){return[i,Object(c["m"])("div",o,Object(c["N"])(r.email),1),Object(c["m"])("div",u,[s,Object(c["m"])("div",{class:"resend-text turbo-link pointer",onClick:t[0]||(t[0]=function(){return r.sendCode&&r.sendCode.apply(r,arguments)})},"Send code")]),Object(c["o"])(p,{label:"verify code",name:"code",rules:[{required:!0,message:"Please input verify code"}]},{default:Object(c["T"])((function(){return[Object(c["o"])(O,{value:r.formState.code,"onUpdate:value":t[1]||(t[1]=function(e){return r.formState.code=e}),class:"turbo-input"},null,8,["value"])]})),_:1}),Object(c["o"])(p,{class:"mb30"},{default:Object(c["T"])((function(){return[Object(c["o"])(h,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:r.loading},{default:Object(c["T"])((function(){return[l]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),d,b]})),_:1})]})),_:1})],64)}n("368b");var j=n("56cd"),m=n("1da1"),O=(n("96cf"),n("6c02")),p=n("7dfd"),h=n("96c7"),v=n("4c16"),y={name:"Code",components:{LayoutHeader:h["a"],Account:v["a"]},setup:function(){var e=Object(c["H"])(!1),t=Object(O["c"])(),n=Object(O["d"])(),r=t.query.email,a=Object(c["G"])({code:""});function i(){return o.apply(this,arguments)}function o(){return o=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["f"])(r);case 2:t=e.sent,t.sent?j["a"].success({message:"Success",description:"Send code success"}):j["a"].error({message:"Fail",description:"Send code fail"});case 4:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=Object(m["a"])(regeneratorRuntime.mark((function t(c){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,Object(p["g"])(r,c.code).catch((function(e){}));case 3:if(a=t.sent,e.value=!1,a.verified){t.next=7;break}return t.abrupt("return");case 7:n.push({name:"credential",query:{email:r,code:c.code}});case 8:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){}return{formState:a,onFinished:u,onFinishFailed:l,email:r,sendCode:i,loading:e}}},g=(n("de65"),n("6b0d")),w=n.n(g);const F=w()(y,[["render",f],["__scopeId","data-v-7567771c"]]);t["default"]=F},b1fb:function(e,t,n){},de65:function(e,t,n){"use strict";n("b1fb")}}]);