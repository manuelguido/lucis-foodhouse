(window.webpackJsonp=window.webpackJsonp||[]).push([[15,21],{333:function(t,e,n){"use strict";var r=n(2),o=n(336);r({target:"String",proto:!0,forced:n(337)("link")},{link:function(t){return o(this,"a","href",t)}})},335:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("4c8cef4b",content,!0,{sourceMap:!1})},336:function(t,e,n){var r=n(7),o=n(27),l=n(13),c=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=l(o(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+f(l(r),c,"&quot;")+'"'),v+">"+d+"</"+e+">"}},337:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},340:function(t,e,n){"use strict";n.r(e);n(333);var r=n(0).a.extend({name:"TextLink",props:{link:{type:Object,required:!0},target:{type:String,default:"_blank"}}}),o=(n(343),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a",{staticClass:"link",attrs:{href:t.link.route,target:t.target}},[t._v("\n  "+t._s(t.link.text)+"\n")])}),[],!1,null,"73abfe15",null);e.default=component.exports},343:function(t,e,n){"use strict";n(335)},344:function(t,e,n){var r=n(20)(!1);r.push([t.i,".link[data-v-73abfe15]{cursor:pointer;color:#fcdc2c!important;text-decoration:none}.link[data-v-73abfe15]:not(:hover){opacity:.35}.link[data-v-73abfe15]:hover{opacity:1}.link[data-v-73abfe15]:active{opacity:.6}",""]),t.exports=r},377:function(t,e,n){"use strict";n.r(e);n(333);var r=n(0).a.extend({name:"Footer",data:function(){return{text:"Developed by: ",link:{route:"https://manuelguido.dev",text:"Manuel Guido"}}}}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",{staticClass:"footer-author text-white-a"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),e("TextLink",{attrs:{link:t.link}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextLink:n(340).default})}}]);