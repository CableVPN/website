(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,a=1;a<o.length;a++){var c=o[a];0!==i[c]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},i={terms_of_service:0},n=[];function a(e){return s.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0aa1e7":"ea5c3857","chunk-2d0abc58":"d3b173f2","chunk-2d0b28a1":"d306d44a","chunk-2d0b9da9":"cdb05f63","chunk-2d0baadb":"971a8da3","chunk-2d0bcde4":"240fe67d","chunk-2d0c0484":"dd1e5f10","chunk-2d0c0e96":"54b04287","chunk-2d0c19a6":"2cd1f66d","chunk-2d0cbb01":"8e9b0a9b","chunk-2d0d2ba0":"e9fb87a7","chunk-2d0dd642":"4d772b2d","chunk-2d20ff34":"c4c1e200","chunk-2d213b39":"27ec398b","chunk-2d218077":"9c549b6d","chunk-2d21a426":"c031de8a","chunk-2d21ad95":"0a1eb55a","chunk-2d21d6ce":"3788db0d","chunk-2d21dc94":"3ca2cae1","chunk-2d2223a5":"d55c83e7","chunk-2d2268eb":"2bd87ff0","chunk-2d2382a8":"602449fa"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=i[e]=[t,r]}));t.push(o[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(d);var o=i[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,o[1](u)}i[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;n.push([7,"chunk-common"]),o()})({"1e21":function(e,t,o){},7:function(e,t,o){e.exports=o("ccb5")},c51c:function(e,t,o){"use strict";o("1e21")},ccb5:function(e,t,o){"use strict";o.r(t);var r=o("1da1"),i=(o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("96cf"),o("7a23")),n={class:"policy-title"},a={class:"policy-title"};function s(e,t,o,r,s,c){var u=Object(i["P"])("layout-header"),d=Object(i["P"])("a-layout-content"),l=Object(i["P"])("layout-footer");return Object(i["G"])(),Object(i["l"])(i["b"],null,[Object(i["o"])(u),Object(i["o"])(d,null,{default:Object(i["ab"])((function(){return[(Object(i["G"])(!0),Object(i["l"])(i["b"],null,Object(i["N"])(r.termsOfServices,(function(t){return Object(i["G"])(),Object(i["l"])("div",{key:t.title,class:"container ltr"},[Object(i["m"])("header",n,Object(i["S"])(t.title),1),t.contents?(Object(i["G"])(!0),Object(i["l"])(i["b"],{key:0},Object(i["N"])(t.contents,(function(e){return Object(i["G"])(),Object(i["l"])("p",{key:e,class:"policy-content"},Object(i["S"])(e),1)})),128)):Object(i["k"])("",!0),t.children?(Object(i["G"])(!0),Object(i["l"])(i["b"],{key:1},Object(i["N"])(t.children,(function(t){return Object(i["G"])(),Object(i["l"])("div",{key:e.content},[Object(i["m"])("header",a,Object(i["S"])(t.title),1),(Object(i["G"])(!0),Object(i["l"])(i["b"],null,Object(i["N"])(t.contents,(function(e){return Object(i["G"])(),Object(i["l"])("p",{key:e,class:"policy-content"},Object(i["S"])(e),1)})),128))])})),128)):Object(i["k"])("",!0)])})),128))]})),_:1}),Object(i["o"])(l)],64)}var c=o("96c7"),u=o("9ef1"),d=[{title:"Last updated: 2022.10.23",contents:['These Terms of Service ("Terms") govern your use of and access to our website ("Website"), applications ("Apps") and other services (collectively, the "Services").','The Services are provided by Yalaso-Tech PTE. LTD. ("we," "us," "our," or "Turbo Max"). Please note that the Terms constitute a binding legal agreement between you ("User" or "You") and Turbo Max. By visiting our websites, installing, and/or using the Services, you acknowledge that you have read the Terms, understand them, and agree to be bound by these Terms. If you do not agree with these Terms or any provisions hereof, please do not install the Apps and do not use our Services.\n    ']},{title:"1. General",contents:['Our Services are virtual private network ("VPN") services, which enhance internet security and privacy.',"In order to use some of the Services, you will be asked to set up an account. You are solely responsible for all usage or activity on your account including, but not limited to, use of the account by any person who uses your account, with or without authorization, or who has access to any computer on which your account resides or is accessible.","We do not log or store any records on user’s activity using our Services, but if you choose to create a user account, you must provide some basic information. You must maintain and update this information current, truthful, complete, and accurate. You warrant that you are authorized to provide such information. You authorize us to verify your information at any time. If it is found to be untrue, inaccurate, not current or incomplete, we retain the right, in our sole discretion, to suspend or terminate your user account and your access to the Services.","You are responsible for maintaining the confidentiality of your account, username and password and for restricting access to your account. You may not share your password or other account access information with any other party, temporarily or permanently, and you agree to accept responsibility for all activities that occur under your account or password, whether or not authorized by you. You agree to immediately notify us of any unauthorized use of your account, username or password, as the case may be.","Your use of the Services is at your own risk. The Services may be modified, updated, interrupted or suspended at any time without notice or liability. We do not bear any liability for any harm or other adverse consequences to you, caused by this. Turbo Max, its owners, employees, agents and others that are involved with the Services are not in any way or form liable for any harm of any kind executed or intended, resulting from or arising through or from the use of any account registered with Services."]},{title:"2. Modification",contents:["All users of Turbo Max Services are obliged to ensure that they are familiar with the most current wording of the Terms. The change of the Terms may be communicated to you by publishing the updated Terms on Turbo Max website, where the date of the most current wording of the Terms is indicated at the top of the web page. Since you agree to be bound by these Terms each time you use the Turbo Max services, please consider reviewing the terms each time when you use the Turbo Max services. Each update of the terms comes into force as of the moment when it is published on this web page. You understand and agree that any continued use and access to the Turbo Max Services after any updates to these terms are published, means that you voluntarily agree to be bound by the updated Terms. "]},{title:"3. Privacy Policy",contents:["We do not log any user activity (sites visited, DNS lookups, emails etc.) We only log access attempts to our servers (for security and troubleshooting). We do not get involved in any form of censorship. We do not give your personal info to any third parties. We do not cooperate with any requests for information unless we are ordered by a court of competent jurisdiction and the vast majority of these requests would not be from a court of competent jurisdiction. We will protect you to the max and our system is setup to automatically do so. There are hundreds of good reasons for being anonymous and we respect them fully.","For information about how we process information about you and your use of our Services, please see our Privacy Policy."]},{title:" 4. Third-Party Websites and Services ",contents:['We may provide you with content belonging to Third Parties ("Third Parties") or links leading to third-party websites. We are not responsible for the availability of the content provided by Third Parties as they are not under the control or supervision of Turbo Max, and they may have different terms of use and policies. Your access through our Services to any website, service, or content provided by Third Parties does not indicate any relationship between us and such Third Parties.',"Also, we may use the services provided by other third parties, from time to time, include computer software supplied by third parties, which is utilized by permission of the respective licensors and/or copyright holders on the terms provided by such parties. We expressly disclaims any warranty or other assurance to you regarding such third-party’s services."]},{title:"5. License",contents:["Subject to the terms and conditions of these Terms, we grant you a limited, revocable, non-exclusive, personal, non-transferable, non-sublicensable, fixed-term license to: (1) download our Apps; and (2) enter into the Website; and (3) use the Services, including, without limitation, the products and services made available on or through the our Apps or our Website. No other right or license, express or implied, of any kind is granted to you hereunder with respect to the Services. The license provided herein is effective until terminated. This license automatically terminates if you fail to comply with these Terms.","The Services, including, but not limited to, our Apps and Website, are owned and copyrighted by Turbo Max and protected worldwide. We retain all right, title and interest in and to the Services and any portion thereof, including, without limitation, all copyrights, trademarks, service marks, patents, trade secrets and other intellectual property rights. You shall not take any action to jeopardize, limit or interfere in any manner with our ownership of and rights with respect to the Services. All rights are reserved unless otherwise noted.","By accessing and using this website and by using the Services, you accept and acknowledge that the Services, including the appearance, content, selection, assembly and functionality and any other parts or specifics of our Website and the Apps, is the ownership of Turbo Max (despite whether the specific content is individually protected by copyright), and you are forbidden from registration, adoption or any other use of trade names, symbols or signs that are either identical or confusingly similar to any trademarks owned by Turbo Max."]},{title:"6. Subscriptions",contents:['By subscribing to the Services, you agree to become a subscriber ("Subscriber") for the period you have elected. A full list of subscription plans and pricing is available on the Website and Apps. We reserves the right to amend subscription fees or institute new fees at any time upon reasonable advance notice posted on the Website or Apps or sent via email. Any changes to the pricing will not affect the Subscriber’s current subscription period, but may become effective upon subscription renewal, which will be decided solely at the discretion of Turbo Max. Subscription purchases and refunds are handled via multiple third-party payment companies. To find out more about these third party payment companies and how they process your data, please refer to our Privacy Policy.',"Subscriptions will automatically renew unless you turned off the auto-renew at least 24-hours before the end of the current subscription period. The subscription fee will be charged for renewal within 24-hours prior to the end of the current subscription period to the payment method you last selected. Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's Account Settings after purchase."]},{title:"7. Refund Policy",contents:["(1) If you purchased the Turbo Max VPN product (or Service) from the Turbo Max VPN official Website, we offer you a 30-day money-back guarantee. You may cancel your subscription for any reason within 30 days of your initial purchase and you will receive a full refund of the amount you paid.","Refunds beyond the 30-day purchase window will be considered, at the sole discretion of Turbo Max, if you can demonstrate that the Service was not available or usable during the subscription period and that reasonable attempts were made to contact Turbo Max to resolve the issue. In this case, Turbo Max may provide the Subscriber with a pro-rata refund of service fees paid during the period when the Service was not available or usable.","(2) If you purchased the Turbo Max VPN product (or Service) from the Apple App Store (iTunes), you do not have access to the 30-day money-back guarantee. Instead, you can request refunds through the App Store, which are issued solely at the discretion of Apple Support.","(3) If you purchased the Turbo Max VPN product (or Service) from Google Play Store, you do not have access to the 30-day money-back guarantee. Only if you can demonstrate that the Service was not available or usable during the subscription period and that reasonable attempts were made to contact Turbo Max to resolve the issue, Turbo Max may provide you with a pro-rata refund of service fees paid during the period when the Service was not available or usable.","(4) If you purchased the Turbo Max VPN product (or service) from 3rd party platform (eg: Codashop, or others), please kindly contact the respective platform support for assistance.","Refunds are generally processed within fourteen (14) business days, and are made to the original form of payment used for purchase.","If you have any additional questions or would like to request a refund, feel free to contact us via the in-app feedback system or email us."]},{title:" 8. Prohibited and restricted uses ",contents:["We do not condone any unlawful use of the Services. Our Services shall not be used for any criminal, illicit and illegal acts, and you accept and agree not to violate any law of any jurisdiction that you are originating from and any other applicable law. It is your responsibility to know and comprehend any and all relevant laws related to any jurisdiction or venue that concerns you, your actions and your use of Services. We reserve the right to limit, in our sole discretion, the availability of the Services or any portion thereof, to any person, entity, geographic area, or jurisdiction, at any time.","In order to protect the Services from being misused or used to harm someone, we reserves the right to take appropriate measures when our Services are being used contrary to these Terms and applicable laws. You agree that we may terminate your account or take any other legal measure provided by law, without providing a refund for Services already paid, if you misuse the Service.","You agree that you shall not:",'Send or transmit unsolicited advertisements or content (i.e., "spam") over the Services.',"Send, post, or transmit over the Services any content which is illegal, hateful, threatening, insulting, or defamatory; infringes on intellectual property rights; invades privacy; or incites violence.","Upload, download, post, reproduce, or distribute any content protected by copyright or any other proprietary right without first having obtained permission from the owner of the proprietary content.","Upload, download, post, reproduce, or distribute any content that includes sexual or explicit depictions of minors.","Engage in any conduct that restricts or inhibits any other Subscriber from using or enjoying the Services.",'Attempt to access, probe, or connect to computing devices without proper authorization (i.e., any form of "hacking").',"Attempt to compile, utilize, or distribute a list of IP addresses operated by Turbo Max in conjunction with the Services.","Use the Service for anything other than lawful purposes."]},{title:"9. Disclaimer of warranties",contents:['The services (including, without limitation, our applications, services and websites) are provided "as is" and with all faults. we make no representation or warranty whatsoever regarding the completeness, accuracy, adequacy, suitability, functionality, availability, or operation of the services. you acknowledge that we do not have control over your use of the services, and we do not warrant the performance or results that may be obtained through your use of the services. you assume all risks and responsibility for your use of the services and for any loss of or errors in any data or information. to the full extent permissible by applicable law, we disclaim all warranties, express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement, and any warranties arising through course of dealing or usage of trade. without limiting the foregoing, we neither warrant nor represent that your use of the services will not infringe the rights of any third parties, nor that the services will be available for your access or use, nor that operation of the services will be error-free or uninterrupted. please note that some jurisdictions may not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you. in addition, you may also have other rights that vary from one jurisdiction to another jurisdiction.']},{title:"10. Limitation of liability",contents:["Your use of the services is at your own risk. neither we nor any of its parents, subsidiaries or affiliates, nor any of their employees, officers or directors, shall be liable for any direct, indirect, punitive, incidental, special, consequential, or other damages (including, without limitation, loss of data or information of any kind, loss of business, lost profits, interruption of business, cost of cover or any other damages) arising out of or in any way related to this agreement or the use or inability to use the services, whether based on contract, tort, strict liability or otherwise, even if we have been advised of the possibility of such damages. in any case, the liability of turbo max shall not exceed what the user paid to turbo max and shall not include attorney fees or court costs irrespective of any laws or statutes that may prescribe otherwise.\n    "]},{title:"11. Indemnification",contents:["You agree, at your own expense, to indemnify, defend and hold harmless Turbo Max, its parents, subsidiaries and affiliates, and their officers, directors, employees, agents, distributors and licensees, from and against any judgments, losses, deficiencies, damages, liabilities, costs, claims, demands, suits, and expenses (including, without limitation, reasonable attorneys’ fees, expert witness fees and expenses) incurred in, arising out of or in any way related to your breach of these Terms, your use of the Services, or any of your other acts or omissions."]},{title:"12. Choice of Law",contents:["These Terms shall be governed by and construed in accordance with the laws of the Singapore, excluding its conflicts of law."]},{title:"13. Arbitration",contents:["If a dispute arises in connection with these Terms, You agree to negotiate with Turbo Max to attempt to resolve it. If the dispute is not resolved through those negotiations, you agree to submit the dispute to the Singapore International Arbitration Centre (SIAC) for final settlement. The venue of the arbitration shall be Singapore and the language of the arbitration shall be English."]}],l={name:"Index",components:{LayoutFooter:u["a"],LayoutHeader:c["a"]},setup:function(){return{termsOfServices:d}}},h=(o("c51c"),o("6b0d")),p=o.n(h);const y=p()(l,[["render",s],["__scopeId","data-v-72297c0e"]]);var f=y,b=o("495e"),m=o("e8cd");o("62fc");function v(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(i["i"])(f),e.next=3,Object(m["a"])(t);case 3:t.use(b["a"]).mount("#app");case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}v()}});