(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f039c6de"],{"0529":function(t,s,e){},"104a":function(t,s,e){"use strict";e("0529")},3408:function(t,s,e){},"35ac":function(t,s,e){},"4e1a":function(t,s,e){t.exports=e.p+"img/paddi.1717719a.png"},5497:function(t,s,e){t.exports=e.p+"img/takeOff.c02417b9.svg"},"798b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Signin")},n=[],i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"auth"},[a("Nav"),a("div",{staticClass:"splat"}),a("img",{staticClass:"takeOffCOntainer",attrs:{src:e("5497")}}),a("img",{staticClass:"cash",attrs:{src:e("bf92"),alt:""}}),a("img",{staticClass:"hand",attrs:{src:e("f2a6"),alt:""}}),a("img",{staticClass:"check",attrs:{src:e("a0a6"),alt:""}}),a("div",{staticClass:"mainSection"},[a("div",{staticClass:"textArea"},[t._m(0),a("p",[t._v(" If you already have an account"),a("br"),t._v("You can "),a("router-link",{attrs:{to:"/signup"}},[t._v("Register here!")])],1)]),a("vs-card",{staticClass:"formCard",attrs:{type:"1"},scopedSlots:t._u([{key:"text",fn:function(){return[a("div",{staticClass:"center content-inputs"},[a("vs-input",{attrs:{placeholder:"Name",type:"email"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("i",{staticClass:"las la-at",staticStyle:{"font-size":"1.2rem"}})]},proxy:!0}]),model:{value:t.signin.credential.email,callback:function(s){t.$set(t.signin.credential,"email",s)},expression:"signin.credential.email"}})],1),a("div",{staticClass:"center content-inputs"},[a("vs-input",{attrs:{type:"password",placeholder:"Password",progress:t.getProgress,visiblePassword:t.hasVisiblePassword,"icon-after":""},on:{"click-icon":function(s){t.hasVisiblePassword=!t.hasVisiblePassword},keypress:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.signinUser.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.hasVisiblePassword?a("i",{staticClass:"las la-eye-slash",staticStyle:{"font-size":"1.2rem"}}):a("i",{staticClass:"las la-eye",staticStyle:{"font-size":"1.2rem"}})]},proxy:!0},t.getProgress>=100?{key:"message-success",fn:function(){return[t._v(" Secure password ")]},proxy:!0}:null],null,!0),model:{value:t.signin.credential.password,callback:function(s){t.$set(t.signin.credential,"password",s)},expression:"signin.credential.password"}})],1),a("div",{staticClass:"forgotPassword"},[a("router-link",{staticClass:"font-weight-bold",attrs:{to:"/forgotPassword"}},[t._v("Forgot password")])],1),a("div",{staticClass:"center authButtonContainer"},[a("vs-button",{staticClass:"authButton",attrs:{size:"large",loading:t.signin.loading,block:"",color:"#6E14EC"},on:{click:t.signinUser}},[t._v("Sign In")])],1)]},proxy:!0}])})],1)],1)},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",[t._v("Sign In and"),e("br"),t._v("Enjoy Safer Transactions")])}],c=e("5530"),o=(e("ac1f"),e("00b4"),e("fc93")),l=e("2f62"),u={data:function(){return{hasVisiblePassword:!1}},components:{Nav:o["a"]},methods:Object(c["a"])({},Object(l["b"])(["signinUser"])),computed:Object(c["a"])({getProgress:function(){var t=0;return/\d/.test(this.signin.credential.password)&&(t+=20),/(.*[A-Z].*)/.test(this.signin.credential.password)&&(t+=20),/(.*[a-z].*)/.test(this.signin.credential.password)&&(t+=20),this.signin.credential.password.length>=6&&(t+=20),/[^A-Za-z0-9]/.test(this.signin.credential.password)&&(t+=20),t}},Object(l["d"])(["signin"]))},d=u,f=(e("fba6"),e("2877")),p=Object(f["a"])(d,i,r,!1,null,"d9afaa24",null),g=p.exports,h={components:{Signin:g}},v=h,b=Object(f["a"])(v,a,n,!1,null,null,null);s["default"]=b.exports},8212:function(t,s,e){"use strict";var a=e("5530"),n=(e("a9e3"),e("3408"),e("a9ad")),i=e("24b2"),r=e("a236"),c=e("80d2"),o=e("58df");s["a"]=Object(o["a"])(n["a"],i["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(a["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(a["a"])({height:Object(c["h"])(this.size),minWidth:Object(c["h"])(this.size),width:Object(c["h"])(this.size)},this.measurableStyles)}},render:function(t){var s={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,s),this.$slots.default)}})},a0a6:function(t,s,e){t.exports=e.p+"img/check.c8d59da0.svg"},bf92:function(t,s,e){t.exports=e.p+"img/cash.1476ef4f.svg"},f2a6:function(t,s,e){t.exports=e.p+"img/hand.a0290947.svg"},fba6:function(t,s,e){"use strict";e("35ac")},fc93:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("vs-navbar",{staticClass:"nav",attrs:{"center-collapsed":"",fixed:!0},scopedSlots:t._u([{key:"left",fn:function(){return[a("v-avatar",{attrs:{size:"40",tile:""}},[a("img",{attrs:{src:e("4e1a")}})]),a("span",{staticClass:"ml-2 font-weight-bold text-body-2 grey--text text--darken-3"},[t._v("Trustpaddi")])]},proxy:!0},{key:"right",fn:function(){return[a("vs-button",{attrs:{color:"#6E14EC",to:"/signin",flat:""}},[t._v("Sign In")]),a("vs-button",{attrs:{color:"#6E14EC",to:"/signup"}},[t._v("Sign Up")])]},proxy:!0}])})},n=[],i={},r=i,c=(e("104a"),e("2877")),o=e("6544"),l=e.n(o),u=e("8212"),d=Object(c["a"])(r,a,n,!1,null,"ee98a494",null);s["a"]=d.exports;l()(d,{VAvatar:u["a"]})}}]);
//# sourceMappingURL=chunk-f039c6de.7b8ba48d.js.map