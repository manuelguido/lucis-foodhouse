(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24,25],{343:function(t,e,n){"use strict";var r=n(2),c=n(346);r({target:"String",proto:!0,forced:n(347)("link")},{link:function(t){return c(this,"a","href",t)}})},346:function(t,e,n){var r=n(4),c=n(26),o=n(13),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=o(c(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+f(o(r),l,"&quot;")+'"'),v+">"+d+"</"+e+">"}},347:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},380:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("4b4e102b",content,!0,{sourceMap:!1})},391:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{tag:{type:String,default:"h1"},text:{type:String,default:""}},data:function(){return{classList:"h2-responsive bebas text-white-a ls-9 mb-4 mb-lg-5"}}}),c=n(15),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(t.tag,{tag:"component",class:t.classList},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,n){"use strict";n(380)},399:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,".glass-light[data-v-b45cfbfe]{background:rgba(35,35,35,.37)}.glass-dark[data-v-b45cfbfe],.glass-light[data-v-b45cfbfe]{backdrop-filter:blur(18.7px);-webkit-backdrop-filter:blur(18.7px);box-shadow:0 4px 30px rgba(0,0,0,.1)}.glass-dark[data-v-b45cfbfe]{background:rgba(35,35,35,.7)}.glass-white-dark[data-v-b45cfbfe],.glass-white-light[data-v-b45cfbfe]{background:hsla(0,0%,100%,.1)}.glass-white-dark[data-v-b45cfbfe],.glass-white-light[data-v-b45cfbfe],.social-item[data-v-b45cfbfe]{backdrop-filter:blur(18.7px);-webkit-backdrop-filter:blur(18.7px);box-shadow:0 4px 30px rgba(0,0,0,.1)}.social-item[data-v-b45cfbfe]{background:rgba(35,35,35,.7);display:block}.social-item[data-v-b45cfbfe]:hover{opacity:.8}.social-item[data-v-b45cfbfe]:active{opacity:.5}.inner[data-v-b45cfbfe],.social-item[data-v-b45cfbfe]{border-radius:16px}.inner[data-v-b45cfbfe]{border:1px solid;display:flex;justify-content:space-between}.social-item.instagram .inner[data-v-b45cfbfe]{background:rgba(228,64,95,.025);border-color:#e4405f;color:#e4405f}.social-item.whatsapp .inner[data-v-b45cfbfe]{background:rgba(37,211,102,.025);border-color:#25d366;color:#25d366}",""]),r.locals={},t.exports=r},406:function(t,e,n){"use strict";n.r(e);n(343);var r=n(0).a.extend({name:"ViewContactSocialLink",props:{link:{type:Object,required:!0},target:{type:String,default:"_blank"}},computed:{iconClassList:function(){return"".concat(this.link.icon," mr-3 white-d")},classList:function(){return["social-item h4-responsive ls-4 fw-300 mx-3 mb-4 mb-xl-0","d-flex justify-content-center align-items-center",this.link.color]},innerclassList:function(){return["inner bebas h4-responsive ls-4 fw-300 py-2 px-4","d-flex justify-content-center align-items-center",this.link.color]}}}),c=(n(398),n(15)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a",{class:t.classList,attrs:{target:t.target,href:t.link.url}},[e("div",{class:t.innerclassList},[e("i",{class:t.iconClassList}),t._v("\n    "+t._s(t.link.text)+"\n  ")])])}),[],!1,null,"b45cfbfe",null);e.default=component.exports},422:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"ViewContactSocial",data:function(){return{title:"Contactate con nosotros",socialLinks:[{icon:"fab fa-instagram",text:"@lucishamburguesas",url:"https://www.instagram.com/lucishamburguesas/",color:"instagram"},{icon:"fab fa-whatsapp",text:"2284624049",url:"https://api.whatsapp.com/send/?phone=5492284666083&text&type=phone_number&app_absent=0",color:"whatsapp"}]}}}),c=n(15),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("ViewContactTitle",{attrs:{text:t.title}}),t._v(" "),e("div",{staticClass:"row justify-content-center social-links"},t._l(t.socialLinks,(function(link,i){return e("span",{key:i},[e("ViewContactSocialLink",{attrs:{link:link}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ViewContactTitle:n(391).default,ViewContactSocialLink:n(406).default})}}]);