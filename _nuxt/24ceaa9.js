(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e,r){var content=r(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("1efc1400",content,!0,{sourceMap:!1})},243:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{formSubmitted:!1,form:{email:{state:!0,value:""},password:{state:!0,value:""},growth:{state:!0,value:""},dateOfBirth:{state:!0,value:""},photo:{state:!0,value:""}}}},methods:{submit:function(){for(var t in this.form){var e=!0;this.form[t].state=!!this.form[t].value,this.form[t].value||(e=!1),this.formSubmitted=e}},input:function(t,e){this.form[t].state=!!e},onChangePhoto:function(t){this.form.photo.value=t.returnValue,this.form.photo.state=!!this.form.photo.value}}},l=(r(244),r(53)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.formSubmitted?r("h1",[t._v("You were successfully registered!")]):r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("h1",[t._v("Registration")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email.value,expression:"form.email.value"}],staticClass:"form-control",class:{_error:!t.form.email.state},attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.form.email.value},on:{input:[function(e){e.target.composing||t.$set(t.form.email,"value",e.target.value)},function(e){return t.input("email",e.target.value)}]}}),t._v(" "),t.form.email.state?t._e():r("small",{staticClass:"form-text _error"},[t._v("Please, fill the field")])]),t._v(" "),r("div",{staticClass:"form-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password.value,expression:"form.password.value"}],staticClass:"form-control",class:{_error:!t.form.password.state},attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.form.password.value},on:{input:[function(e){e.target.composing||t.$set(t.form.password,"value",e.target.value)},function(e){return t.input("password",e.target.value)}]}}),t._v(" "),t.form.password.state?t._e():r("small",{staticClass:"form-text _error"},[t._v("Please, fill the field")])])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.growth.value,expression:"form.growth.value"}],staticClass:"form-control",class:{_error:!t.form.growth.state},attrs:{type:"number",id:"exampleGrowth"},domProps:{value:t.form.growth.value},on:{input:[function(e){e.target.composing||t.$set(t.form.growth,"value",e.target.value)},function(e){return t.input("growth",e.target.value)}]}}),t._v(" "),t.form.growth.state?t._e():r("small",{staticClass:"form-text _error"},[t._v("Please, fill the field")])]),t._v(" "),r("div",{staticClass:"form-group"},[t._m(3),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateOfBirth.value,expression:"form.dateOfBirth.value"}],staticClass:"form-control",class:{_error:!t.form.dateOfBirth.state},attrs:{type:"date",id:"dateOfBirth"},domProps:{value:t.form.dateOfBirth.value},on:{input:[function(e){e.target.composing||t.$set(t.form.dateOfBirth,"value",e.target.value)},function(e){return t.input("dateOfBirth",e.target.value)}]}}),t._v(" "),t.form.dateOfBirth.state?t._e():r("small",{staticClass:"form-text _error"},[t._v("Please, fill the field")])])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group"},[t._m(4),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"exampleFormControlFile1"},on:{change:t.onChangePhoto}}),t._v(" "),t.form.photo.state?t._e():r("small",{staticClass:"form-text _error"},[t._v("Please, choose photo")])])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address"),r("sup",[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password"),r("sup",[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"exampleGrowth"}},[t._v("Growth"),r("sup",[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"dateOfBirth"}},[t._v("Date of Birth"),r("sup",[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"exampleFormControlFile1"}},[t._v("Avatar"),r("sup",[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:r(243).default})},244:function(t,e,r){"use strict";r(242)},245:function(t,e,r){var o=r(58)(!1);o.push([t.i,".form-group{flex-grow:1;margin-left:.5em;margin-right:.5em;text-align:left}._error{border-color:red}.form-text._error{color:red}",""]),t.exports=o}}]);