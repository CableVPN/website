(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},a=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0b28a1":"d306d44a","chunk-2d0b9da9":"cdb05f63","chunk-2d0baadb":"971a8da3","chunk-2d0bcde4":"240fe67d","chunk-2d0c0484":"dd1e5f10","chunk-2d0c0e96":"54b04287","chunk-2d0c19a6":"0ae27300","chunk-2d0d2ba0":"e9fb87a7","chunk-2d0dd642":"4d772b2d","chunk-2d20ff34":"cdca7e8d","chunk-2d213b39":"27ec398b","chunk-2d218077":"f4efa382","chunk-2d21a426":"e19a2feb","chunk-2d21ad95":"0a1eb55a","chunk-2d21d6ce":"3788db0d","chunk-2d21dc94":"3ca2cae1","chunk-2d2223a5":"d55c83e7","chunk-2d2268eb":"2bd87ff0","chunk-2d2382a8":"602449fa"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-common"]),n()})({0:function(e,t,n){e.exports=n("df31")},"1a07":function(e,t,n){e.exports=n.p+"static/img/img_1@2x.a19f8868.png"},"30d8":function(e,t,n){},"4bb1":function(e,t,n){"use strict";n("96e1")},6037:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA0lBMVEX///8AAAD+/v4CAgL///8zMzMJCQljY2NeXl75+fkoKChISEj///////////////////////////8NDQ2SkpKOjo4HBwcUFBQZGRmGhoaYmJglJSUxMTFMTExnZ2e0tLQXFxcjIyMtLS0rKys9PT1QUFBzc3N8fHykpKSrq6vd3d3q6ur29vb///8SEhIfHx84ODhDQ0NRUVFXV1dbW1twcHCdnZ2vr6/Ozs7X19d2dnaCgoKKioq8vLzCwsLl5eXk5OT19fVtbW2Li4vt7e0AAABCeJk2AAAARXRSTlPMAMv+FfL86OnN9e7HwbaSfFY++9/f/fn44d318+3n2fn29PTw7OXj29rRz81Y+vfx7+zr6uXd2dTS5OLg19bQ0M3m4M/3NZJCAAACLUlEQVRYw83X12KqQBAG4D80idgBC3YTu7GX9OSUef9XOlFQWD2Bxb3Jd78j+M8uO7hxKflsJgVOqUw2r3gL4S7PSYhJyil+gUIaV0gXjgUeJFxFenALFCRcSSrsCyhpXC2tfBXIQUDuBooEAZKCPITkkYWQLDIQkkEKQlL4yZ4q9aQpF6dto9e8jR/wQKUAc/WIWJptOiMvnsDtV0KmS9oLb9OOO/R/S76/4iNJ37nnqXB7R99bIVqCwliIMqQvRXW9eU4YLbowHUflnySa25VudaqV5z1LL9KZBMJtaeas/FU16/48zL8I1TFeNPYXfxPLRpjHeoPOGDox6giz6xOjvdbvNmxfzBBmxDx/8u2Qi8MUMPmboDvxkikxuwphZuTTB/DUKaCEMHKg7/unyBvMfuAsoA3lhl+AO0bTz18lA57g9ipPEMZPzCIqeQfIgHzyDqG6pwT37TN0QzAD622Eez1FUN1Xcc+Ptf/8O0QYkad/6KgNDt4b85amlRcWx4F0PMwrhzzkP4hr6xV4Nt137t0iHsmLrHt8lM4bs1sniNL0GrZHR6o18r51rzV6RyTd6wM52D2qsai19uHwHOuq+7sJutSZgMNn1c2hTOeqY3AZH56haJvEUj/ifVxLTos5SPQ4iTb3r6FVloHTsRn7giETGU696H4fHAmxfdrLWsmwt5W+M8JPlhJcLnzVFb5sC1/3hQcO0ZFHeOgSHfuEB0/x0Vd8+BYe//8BIMzaNsireiQAAAAASUVORK5CYII="},7593:function(e,t,n){},9157:function(e,t,n){e.exports=n.p+"static/img/mockup@2x.54faf7da.png"},"96b7":function(e,t,n){"use strict";n("30d8")},"96e1":function(e,t,n){},bd40:function(e,t,n){"use strict";n("7593")},df31:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),a=n("154c"),c=n.n(a),i=n("3f35"),u=n.n(i),s=n("97db"),l=n.n(s),f=n("6037"),b=n.n(f),d=n("9157"),p=n.n(d),m=n("1a07"),O=n.n(m),j=n("fe18"),g=n.n(j),h=function(e){return Object(o["J"])("data-v-5365fee7"),e=e(),Object(o["H"])(),e},v={class:"banner"},y=h((function(){return Object(o["m"])("div",{class:"banner-bg"},null,-1)})),w=h((function(){return Object(o["m"])("a",{href:"https://apps.apple.com/app/turbo-max-vpn-fast-secure/id6443779742",target:"_blank"},[Object(o["m"])("img",{src:c.a,alt:"",srcset:"",class:"intro-available-icon"})],-1)})),k=h((function(){return Object(o["m"])("a",{href:"https://play.google.com/store/apps/details?id=top.yalaso.supervpn",target:"_blank"},[Object(o["m"])("img",{src:u.a,alt:"",srcset:"",class:"intro-available-icon"})],-1)})),A=h((function(){return Object(o["m"])("a",{href:"https://chrome.google.com/webstore/detail/neo-vpn-free-vpn-proxy-fo/djnmclbegajogllkfbggkahbjijohgai",target:"_blank"},[Object(o["m"])("img",{src:l.a,alt:"",srcset:"",class:"intro-available-icon"})],-1)})),x=h((function(){return Object(o["m"])("a",{href:"https://microsoftedge.microsoft.com/addons/detail/neo-vpn-free-vpn-proxy-/mmijnkoejofpkeiajhdjolcjbfagafac?hl=en-US",target:"_blank"},[Object(o["m"])("img",{src:b.a,alt:"",srcset:"",class:"intro-available-icon"})],-1)})),S=h((function(){return Object(o["m"])("img",{src:p.a,alt:"",srcset:"",class:"intro-img"},null,-1)})),P={class:"fetures"},M={class:"fetures-title"},L=h((function(){return Object(o["m"])("br",null,null,-1)})),N={class:"fetures-content"},z=h((function(){return Object(o["m"])("img",{src:O.a,alt:"",class:"feture-img"},null,-1)})),H=h((function(){return Object(o["m"])("img",{src:g.a,alt:"",class:"feture-img"},null,-1)})),T={class:"fetures-title"},_={class:"fetures-content"},C=h((function(){return Object(o["m"])("img",{src:g.a,alt:"",class:"feture-img"},null,-1)}));function Q(e,t,n,r,a,c){var i=Object(o["P"])("layout-header"),u=Object(o["P"])("get-neo"),s=Object(o["P"])("a-col"),l=Object(o["P"])("a-row"),f=Object(o["P"])("a-layout-content"),b=Object(o["P"])("layout-footer");return Object(o["G"])(),Object(o["l"])(o["b"],null,[Object(o["o"])(i),Object(o["o"])(f,null,{default:Object(o["ab"])((function(){return[Object(o["m"])("div",v,[y,Object(o["o"])(l,{class:"banner-info"},{default:Object(o["ab"])((function(){return[Object(o["o"])(s,{md:12,class:"intro-group intro-group-left"},{default:Object(o["ab"])((function(){return[Object(o["m"])("div",{class:Object(o["x"])(["intro-title",{rtl:a.rtl}])},Object(o["S"])(e.$t("One tap to privacy")),3),Object(o["m"])("div",{class:Object(o["x"])(["intro-text",{rtl:a.rtl}])},Object(o["S"])(e.$t("Surf, stream, game, and get work done while maintaining your privacy online. Whether you’re traveling, using public WiFi, or simply looking for more online security, we will always put your privacy first.")),3),Object(o["m"])("div",{class:Object(o["x"])(["intro-available",{rtl:a.rtl}])},[Object(o["m"])("span",{class:Object(o["x"])(["intro-available-text",{rtl:a.rtl}])},Object(o["S"])(e.$t("Avaliable on")),3),w,k,A,x],2),Object(o["o"])(u,{size:"lg"})]})),_:1}),Object(o["o"])(s,{md:12,class:"intro-group intro-group-right"},{default:Object(o["ab"])((function(){return[S]})),_:1})]})),_:1})]),Object(o["m"])("div",P,[Object(o["o"])(l,{class:"fetures-item"},{default:Object(o["ab"])((function(){return[Object(o["o"])(s,{md:12,class:"fetures-list"},{default:Object(o["ab"])((function(){return[Object(o["m"])("div",M,[Object(o["n"])(Object(o["S"])(e.$t("No login"))+", ",1),L,Object(o["n"])(" "+Object(o["S"])(e.$t("no fake reviews")),1)]),Object(o["m"])("div",N,Object(o["S"])(e.$t("No logging of your network activity.You can use our product We never pay for reviews and do not have an affiliate program, so you won’t find us on the ‘top 10 best VPN’ lists..")),1),Object(o["o"])(u,{size:"sm"})]})),_:1}),Object(o["o"])(s,{md:12},{default:Object(o["ab"])((function(){return[z]})),_:1})]})),_:1}),Object(o["o"])(l,{class:"fetures-item"},{default:Object(o["ab"])((function(){return[Object(o["o"])(s,{md:12,class:"hide-sm"},{default:Object(o["ab"])((function(){return[H]})),_:1}),Object(o["o"])(s,{md:12,class:"fetures-list pl65"},{default:Object(o["ab"])((function(){return[Object(o["m"])("div",T,Object(o["S"])(e.$t("Enjoy Stable speed")),1),Object(o["m"])("div",_,Object(o["S"])(e.$t("Regardless you are on business trip or at home, our ultra-fast VPN speed and incredibly stable VPN connection allows you to access any content wherever you are.")),1),Object(o["o"])(u,{size:"sm"}),Object(o["o"])(s,{md:12,class:"display-sm mt30"},{default:Object(o["ab"])((function(){return[C]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(o["o"])(b)],64)}var U=Object(o["m"])("div",null,null,-1);function V(e,t,n,r,a,c){return Object(o["G"])(),Object(o["l"])(o["b"],null,[Object(o["m"])("a",{href:"javascript:void(0);",class:Object(o["x"])(["turbo-btn btn-download",n.size,{rtl:e.rtl}]),onClick:t[0]||(t[0]=function(){return c.downloadHandler&&c.downloadHandler.apply(c,arguments)})},Object(o["S"])(e.$t("Get Turbo Max")),3),U],64)}var F={name:"GetNeo",props:{size:{type:String,default:"sm"}},methods:{downloadHandler:function(){location.href="/subscriptions.html"}}},B=(n("96b7"),n("6b0d")),R=n.n(B);const E=R()(F,[["render",V]]);var I=E,J=n("96c7"),X=n("9ef1"),K={name:"Index",components:{LayoutFooter:X["a"],LayoutHeader:J["a"],GetNeo:I},data:function(){return{fetures:[{title:"No login",content:"No logging of your network activity.You can use our product anonymously."},{title:"Free",content:"All our services are free, while some ads would show."},{title:"No fake reviews",content:"We never pay for reviews and do not have an affiliate program, so you won’t find us on the ‘top 10 best VPN’ lists."},{title:"Stable speed",content:"With the IPSec protocol, you could have a good experience."}],rtl:window.rtl}},mounted:function(){console.log("index")}};n("4bb1"),n("bd40");const D=R()(K,[["render",Q],["__scopeId","data-v-5365fee7"]]);var q=D,Y=n("e8cd"),W=n("495e");n("62fc");function G(){return Z.apply(this,arguments)}function Z(){return Z=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(o["i"])(q),e.next=3,Object(Y["a"])(t);case 3:t.use(W["a"]).mount("#app");case 4:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}G()},fe18:function(e,t,n){e.exports=n.p+"static/img/img_2@2x.32ae924e.png"}});