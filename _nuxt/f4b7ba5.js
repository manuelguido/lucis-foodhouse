(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{395:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("4c835bf2",content,!0,{sourceMap:!1})},416:function(t,e,o){"use strict";o(395)},417:function(t,e,o){var n=o(20)(!1);n.push([t.i,'#map[data-v-4aa6d98f]{width:50%;overflow:hidden!important;padding:0!important;box-shadow:0 .07em .125em 0 rgba(0,0,0,.15)!important}#map[data-v-4aa6d98f],.map-rounded[data-v-4aa6d98f]{border-radius:4px!important}@media (min-width:992px){#map[data-v-4aa6d98f]{height:500px}}.marker-popup[data-v-4aa6d98f]{font-family:"Nunito",sans-serif}.marker-popup h3[data-v-4aa6d98f]{font-size:17px!important}',""]),t.exports=n},435:function(t,e,o){"use strict";o.r(e);var n=o(391),r=o(429),d=o(430);delete n.Icon.Default.prototype._getIconUrl,n.Icon.Default.mergeOptions({iconRetinaUrl:o(413),iconUrl:o(414),shadowUrl:o(415)});var c={name:"Map",components:{LMap:r.a,LTileLayer:d.a},data:function(){return{zoom:12,center:Object(n.latLng)(-34.906,-57.89),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"Olavarría",currentZoom:12,currentCenter:Object(n.latLng)(-34.906,-57.89),showParagraph:!1,mapOptions:{zoomSnap:.5}}},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},coord:function(t){return Object(n.latLng)(t.latitude,t.longitude)}}},l=(o(416),o(16)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"map"}},[e("l-map",{staticClass:"map-rounded",staticStyle:{height:"100%"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1)],1)}),[],!1,null,"4aa6d98f",null);e.default=component.exports}}]);