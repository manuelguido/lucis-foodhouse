(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15,16,21],{343:function(t,e,n){"use strict";var r=n(2),o=n(346);r({target:"String",proto:!0,forced:n(347)("link")},{link:function(t){return o(this,"a","href",t)}})},345:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("dab5a942",content,!0,{sourceMap:!1})},346:function(t,e,n){var r=n(4),o=n(26),l=n(13),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=l(o(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(l(r),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},347:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},350:function(t,e,n){"use strict";n.r(e);n(343);var r=n(0).a.extend({name:"TextLink",props:{link:{type:Object,required:!0},target:{type:String,default:"_blank"}}}),o=(n(353),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a",{staticClass:"link",attrs:{href:t.link.route,target:t.target}},[t._v("\n  "+t._s(t.link.text)+"\n")])}),[],!1,null,"73abfe15",null);e.default=component.exports},353:function(t,e,n){"use strict";n(345)},354:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,".link[data-v-73abfe15]{color:#fcdc2c!important;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.link[data-v-73abfe15]:not(:hover){opacity:.35}.link[data-v-73abfe15]:hover{opacity:1}.link[data-v-73abfe15]:active{opacity:.6}",""]),r.locals={},t.exports=r},375:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("0cc1da1e",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);n(343);var r=n(0).a.extend({name:"Footer",data:function(){return{text:"© 2019 Copyright: ",link:{route:"/",text:"Lucis Food House"}}}}),o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"text-white-c"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),e("TextLink",{attrs:{link:t.link,target:""}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextLink:n(350).default})},390:function(t,e,n){"use strict";n.r(e);n(343);var r=n(0).a.extend({name:"Footer",data:function(){return{text:"Developed by: ",link:{route:"https://manuelguido.dev",text:"Manuel Guido"}}}}),o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"footer-author text-white-a"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),e("TextLink",{attrs:{link:t.link}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextLink:n(350).default})},394:function(t,e,n){"use strict";n(375)},395:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,".glass-light[data-v-e46082e6]{background:rgba(35,35,35,.37)}.glass-dark[data-v-e46082e6],.glass-light[data-v-e46082e6]{backdrop-filter:blur(18.7px);-webkit-backdrop-filter:blur(18.7px);box-shadow:0 4px 30px rgba(0,0,0,.1)}.glass-dark[data-v-e46082e6]{background:rgba(35,35,35,.7)}.glass-white-dark[data-v-e46082e6],.glass-white-light[data-v-e46082e6]{background:hsla(0,0%,100%,.1)}.footer[data-v-e46082e6],.glass-white-dark[data-v-e46082e6],.glass-white-light[data-v-e46082e6]{backdrop-filter:blur(18.7px);-webkit-backdrop-filter:blur(18.7px);box-shadow:0 4px 30px rgba(0,0,0,.1)}.footer[data-v-e46082e6]{background:rgba(35,35,35,.37);bottom:0;display:flex;justify-content:space-between;position:fixed;width:100%}@media screen and (min-width:992px){.footer[data-v-e46082e6]{padding:1rem 8rem}}@media screen and (max-width:992px){.footer[data-v-e46082e6]{padding:1rem 2rem}}",""]),r.locals={},t.exports=r},401:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"Footer"}),o=(n(394),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"footer"},[e("div",{staticClass:"mr-3"},[e("NavigationFooterCopyright")],1),t._v(" "),e("NavigationFooterAuthor")],1)}),[],!1,null,"e46082e6",null);e.default=component.exports;installComponents(component,{NavigationFooterCopyright:n(389).default,NavigationFooterAuthor:n(390).default})}}]);