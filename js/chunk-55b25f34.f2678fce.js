(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55b25f34"],{"0ca4":function(t,e,a){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"20aa":function(t,e,a){"use strict";a("0ca4")},"56ec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Product")},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("AddNewProduct",{staticClass:"mb-5"}),a("ProductTable",{staticClass:"white mt-10"}),a("ViewDetails"),a("EditProduct")],1)},i=[],c=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-table",{staticClass:"white",scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",{staticClass:"white"},[a("vs-th",{staticClass:"white"},[t._v(" ID ")]),a("vs-th",{staticClass:"white"},[t._v(" Product name ")]),a("vs-th",{staticClass:"white"},[t._v(" Final price ")]),a("vs-th",{staticClass:"white"},[t._v(" Initial price ")]),a("vs-th",{staticClass:"white"},[t._v(" Charge ")]),a("vs-th",{staticClass:"white"},[t._v(" Quantity ")]),a("vs-th",{staticClass:"white"},[t._v(" Status ")]),a("vs-th",{staticClass:"white"},[t._v(" View ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.$vs.getPage(t.products,t.page,t.max),(function(e,n){return a("vs-tr",{key:n,attrs:{data:e},scopedSlots:t._u([{key:"expand",fn:function(){return[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between","align-items":"center"}},[a("div",{staticStyle:{display:"flex","justify-content":"flex-start","align-items":"center"}},[null!=e.image?a("vs-avatar",{attrs:{color:"#F9FCFD"}},[a("img",{attrs:{src:e.image,alt:""}})]):a("vs-avatar",{attrs:{color:"#6200EA"},scopedSlots:t._u([{key:"text",fn:function(){return[t._v(" "+t._s(e.name.toUpperCase())+" ")]},proxy:!0}],null,!0)}),a("p",{staticStyle:{"margin-top":"23px","margin-left":"5px"}},[t._v(" "+t._s(e.name)+" ")])],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-start","align-items":"center"}},[a("vs-button",{attrs:{flat:"",color:"#6200EA"},on:{click:function(a){return t.openEditProductDialog(e)}}},[a("i",{staticClass:"lar la-edit",staticStyle:{"font-size":"1.3rem"}}),t._v(" Edit ")])],1),a("div",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"flex-start","align-items":"center"}},[a("p",{staticClass:"mt-10 mb-5 py-0 text-body-5 grey--text text--darken-3 font-weight-bold"},[t._v(" Seller details ")]),a("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",[a("vs-th"),a("vs-th",[t._v("Name")]),a("vs-th",[t._v("Phone")]),a("vs-th",[t._v("Email")]),a("vs-th",[t._v("country")])],1)]},proxy:!0},{key:"tbody",fn:function(){return[a("vs-tr",{attrs:{data:e}},[a("vs-td",[a("vs-avatar",[a("img",{attrs:{src:e.seller.image,alt:""}})])],1),a("vs-td",[t._v(" "+t._s(e.seller.fullName)+" ")]),a("vs-td",[t._v(" "+t._s(e.seller.phone)+" ")]),a("vs-td",[t._v(" "+t._s(e.seller.email)+" ")]),a("vs-td",[t._v(" "+t._s(e.seller.country)+" ")])],1)]},proxy:!0}],null,!0)})],1)])]},proxy:!0}],null,!0)},[a("vs-td",[t._v(" "+t._s(e.slug)+" ")]),a("vs-td",[t._v(" "+t._s(e.name)+" ")]),a("vs-td",[t._v(" ₦"+t._s(e.finalPrice)+" ")]),a("vs-td",[t._v(" ₦"+t._s(e.initialPrice)+" ")]),a("vs-td",[t._v(" ₦"+t._s(e.transactionCharge)+" ")]),a("vs-td",[t._v(" "+t._s(e.quantity)+" ")]),a("vs-td",[a("v-btn",{staticClass:"text-capitalize rounded-lg",class:{"orange lighten-5 orange--text text--accent-3":"inactive"==e.status,"green lighten-5 green--text text--darken-1":"completed"==e.status,"deep-purple lighten-5 deep-purple--text text--darken-1":"ongoing"==e.status},attrs:{dark:"",small:"",depressed:""}},[t._v(" "+t._s(e.status)+" ")])],1),a("vs-td",[a("div",{staticClass:"d-flex"},[a("vs-button",{attrs:{icon:"",transparent:"",color:"#2A00A2"},on:{click:function(a){return t.viewProductDetails(e)}}},[a("i",{staticClass:"lar la-eye"})])],1)])],1)}))},proxy:!0},{key:"footer",fn:function(){return[a("vs-pagination",{attrs:{color:"#6200EA",length:t.$vs.getLength(t.products,t.max)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})]},proxy:!0}])})}),l=[],u=a("2f62"),d={data:function(){return{page:1,max:7,pageCount:0,itemsPerPage:8,fab:!0}},mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll(".vs-table__td");if(t)for(var e=function(e){setTimeout((function(){t[e].style.padding="0 8px"}),100)},a=0;a<=t.length-1;a++)e(a);var n=document.querySelector(".vs-table__footer");n&&(n.style.background="none")}))},methods:Object(c["a"])({},Object(u["b"])(["viewProductDetails","openEditProductDialog"])),computed:Object(c["a"])(Object(c["a"])({},Object(u["d"])(["product"])),Object(u["c"])(["products"]))},v=d,f=a("2877"),p=a("6544"),h=a.n(p),b=a("8336"),g=Object(f["a"])(v,o,l,!1,null,null,null),m=g.exports;h()(g,{VBtn:b["a"]});var _={data:function(){return{active:"GoodAndProducts",showGoodAndProduct:!0}},components:{ProductTable:m,ViewDetails:function(){return Promise.all([a.e("chunk-0d0c7ddf"),a.e("chunk-5a8001a6")]).then(a.bind(null,"b6fd"))},AddNewProduct:function(){return Promise.all([a.e("chunk-aa2f8f1c"),a.e("chunk-f74817b4"),a.e("chunk-5cf5977c")]).then(a.bind(null,"9a14"))},EditProduct:function(){return Promise.all([a.e("chunk-aa2f8f1c"),a.e("chunk-f74817b4"),a.e("chunk-489499b7")]).then(a.bind(null,"df7e"))}},mounted:function(){var t=this;this.$nextTick((function(){t.getProducts(),t.active="GoodAndProducts";var e=document.querySelector(".v-slide-group__content");e&&(e.style.overflowX="auto",e.style.overflowY="hidden")}))},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["getProducts"])),{},{checkList:function(t){"All"==t.title?this.transaction.search="":this.transaction.search=t.title}}),computed:Object(c["a"])(Object(c["a"])({},Object(u["d"])(["transaction"])),Object(u["c"])(["transactionFilters"]))},y=_,x=(a("20aa"),a("a523")),w=Object(f["a"])(y,r,i,!1,null,null,null),P=w.exports;h()(w,{VContainer:x["a"]});var k={components:{Product:P}},C=k,j=Object(f["a"])(C,n,s,!1,null,null,null);e["default"]=j.exports},"841c":function(t,e,a){"use strict";var n=a("c65b"),s=a("d784"),r=a("825a"),i=a("1d80"),c=a("129f"),o=a("577e"),l=a("dc4a"),u=a("14c3");s("search",(function(t,e,a){return[function(e){var a=i(this),s=void 0==e?void 0:l(e,t);return s?n(s,e,a):new RegExp(e)[t](o(a))},function(t){var n=r(this),s=o(t),i=a(e,n,s);if(i.done)return i.value;var l=n.lastIndex;c(l,0)||(n.lastIndex=0);var d=u(n,s);return c(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function s(t){return n["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,s=a.data,r=a.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var i=s.attrs;if(i){s.attrs={};var c=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(s.staticClass+=" ".concat(c.join(" ")))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,r)}})}var r=a("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,s=e.data,i=e.children,c=s.attrs;return c&&(s.attrs={},a=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),i)}})}}]);
//# sourceMappingURL=chunk-55b25f34.f2678fce.js.map