(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b072814"],{2017:function(e,t,n){"use strict";var s=n("b12d"),a=n.n(s);a.a},7991:function(e,t,n){},"99b3":function(e,t,n){"use strict";var s=n("7991"),a=n.n(s);a.a},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("疫情出入登记后台")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),e.is_check?e._e():n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleCheck(t)}}},[e._v("人机验证")]),e._v(" "),e.is_check?n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"success"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]):e._e()],1)],1)},a=[],r=n("61f7"),o=n("c24f"),i={name:"Login",data:function(){var e=function(e,t,n){Object(r["b"])(t)?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"111111"},waterCheck:{ticket:"",randstr:""},is_check:!1,loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){if(void 0===window.TencentCaptcha){var e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.type="text/javascript",e.src="https://ssl.captcha.qq.com/TCaptcha.js",t.appendChild(e)}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleCheck:function(){var e=this,t=new window.TencentCaptcha("2032327562",(function(t){0===t.ret?(e.waterCheck.ticket=t.ticket,e.waterCheck.randstr=t.randstr,Object(o["d"])(e.waterCheck).then((function(t){console.log(t),1===t.CaptchaCode?e.is_check=!0:e.$message({message:"验证失败",type:"warning"})}))):e.$message({message:"放弃了验证",type:"warning"})}));t.show()},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},c=i,l=(n("2017"),n("99b3"),n("2877")),d=Object(l["a"])(c,s,a,!1,null,"69d41a36",null);t["default"]=d.exports},b12d:function(e,t,n){}}]);