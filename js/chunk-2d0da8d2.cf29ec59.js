(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da8d2"],{"6ba1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"mx-0 px-0 d-flex"},[a("v-select",{staticClass:"mr-4",attrs:{items:t.duration,label:"Transaction duration",dense:"",color:"deep-purple accent-4",outlined:"","hide-details":""},on:{change:t.setDurationWithSelect}}),a("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{color:"deep-purple accent-4",text:"",dark:""}},"v-btn",n,!1),r),[t._v(" Custom ")])]}}])},[a("v-card",{attrs:{width:"300"}},[a("v-card-text",{staticClass:"ma-0 pa-0"},[a("v-time-picker",{attrs:{format:"ampm","full-width":"",color:"deep-purple accent-4"},on:{change:t.setDurationWithClock},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1)],1)},n=[],c=a("5530"),o=a("2f62"),s={data:function(){return{duration:["Less than 30 minutes","1 houre","5 hours"],picker:null}},methods:{setDurationWithSelect:function(t){this.traderCrypto.traderCryptoInputs.duration=t},setDurationWithClock:function(){this.traderCrypto.traderCryptoInputs.duration=this.picker,console.log(this.traderCrypto.traderCryptoInputs.duration)}},computed:Object(c["a"])({},Object(o["d"])(["traderCrypto"]))},i=s,l=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),h=a("b0af"),f=a("99d9"),k=a("e449"),m=a("b974"),C=a("c964"),v=Object(l["a"])(i,r,n,!1,null,null,null);e["default"]=v.exports;d()(v,{VBtn:p["a"],VCard:h["a"],VCardText:f["b"],VMenu:k["a"],VSelect:m["a"],VTimePicker:C["a"]})}}]);
//# sourceMappingURL=chunk-2d0da8d2.cf29ec59.js.map