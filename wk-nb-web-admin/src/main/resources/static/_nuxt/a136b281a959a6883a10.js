(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{725:function(t,e,r){"use strict";r.r(e);r(91),r(44),r(35),r(26),r(69),r(27);var o=r(28),n=r(88),l=r(55);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={layout:"login",middleware:"notAuthenticated",data:function(){var t=this;return{captchaImg:null,mustCaptcha:!1,ruleForm:{username:"superadmin",password:"1"},rules:{username:[{required:!0,message:this.$t("system.login.tip.username"),trigger:"blur"}],password:[{required:!0,message:this.$t("system.login.tip.password"),trigger:"blur"}],platformCaptcha:[{validator:function(e,r,o){!t.mustCaptcha||""!==r&&void 0!==r?o():o(new Error(t.$t("system.login.tip.captcha")))},trigger:"blur"}]},btnLoading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["siteInfo"])),methods:{getCaptchaImg:function(){var t=this;this.$axios.$get(n.a+"?rnd="+Math.random(),{responseType:"blob"}).then((function(e){var r=new FileReader;r.onload=function(e){t.captchaImg=e.target.result},r.readAsDataURL(e)}))},submitForm:function(t){var e,data,r,o;return regeneratorRuntime.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,regeneratorRuntime.awrap(this.$refs[t].validate());case 3:return this.btnLoading=!0,l.next=6,regeneratorRuntime.awrap(this.$axios.$post(n.c,this.ruleForm));case 6:if(e=l.sent,data=e.data,500202!==e.code){l.next=14;break}return this.btnLoading=!1,this.mustCaptcha=!0,this.getCaptchaImg(),l.abrupt("return");case 14:r=data.token,o=data.user.id,this.$store.commit("setAuth",r),this.$cookies.set("X-Token",r),this.$cookies.set("X-Id",o),window.location.href="/",l.next=24;break;case 21:l.prev=21,l.t0=l.catch(0),this.btnLoading=!1;case 24:case"end":return l.stop()}}),null,this,[[0,21]])},resetForm:function(t){this.$refs[t].resetFields()}}},d=r(11),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"platform-login"},[r("div",{staticClass:"platform-login-form"},[t._m(0),t._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.$t("system.login.tip.title")))])]),t._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{prop:"username","label-width":"0px"}},[r("el-input",{attrs:{type:"text",size:"small",placeholder:t.$t("system.login.tip.username"),"prefix-icon":"fa fa-user"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"password","label-width":"0px"}},[r("el-input",{attrs:{type:"password",size:"small",placeholder:t.$t("system.login.tip.password"),"prefix-icon":"fa fa-lock",prop:"password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("ruleForm")}},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),t._v(" "),t.mustCaptcha?r("el-form-item",{attrs:{prop:"platformCaptcha","label-width":"0px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"small","prefix-icon":"fa fa-keyboard-o",prop:"platformCaptcha"},model:{value:t.ruleForm.platformCaptcha,callback:function(e){t.$set(t.ruleForm,"platformCaptcha",e)},expression:"ruleForm.platformCaptcha"}})],1),t._v(" "),r("el-col",{attrs:{span:2}}),t._v(" "),r("el-col",{attrs:{span:10}},[r("img",{staticStyle:{width:"80px",height:"32px","padding-top":"3px","margin-top":"2px"},attrs:{src:t.captchaImg},on:{click:t.getCaptchaImg}})])],1)],1):t._e(),t._v(" "),r("el-button",{attrs:{loading:t.btnLoading,type:"primary",size:"small"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("\n          "+t._s(t.$t("system.login.tip.login"))+"\n        ")])],1),t._v(" "),r("div",{staticClass:"ft"},[t._v("\n        "+t._s(t.siteInfo.providerCode)+"\n      ")])],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"platform-login-info"},[e("img",{staticClass:"platform-login-logo-pic",attrs:{src:"/assets/images/logo.svg"}})])}],!1,null,null,null);e.default=component.exports}}]);