"use strict";(self.webpackChunkvue3_cms=self.webpackChunkvue3_cms||[]).push([[12],{8399:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(440),l=n(3800),a=n(6252),o=n(2262),i=n(4250),u=n(3946);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var d={class:"page-modal"},p={class:"dialog-footer"},m=(0,a.Uk)("取消"),s=(0,a.Uk)("确定");var b=(0,a.aZ)({props:{modalConfig:{type:Object,required:!0},pageName:{type:String,required:!0},otherInfo:{type:Object,dafault:function(){return{}}}},setup:function(e,t){var n=t.expose,f=function(){"edit"===v.value&&w.dispatch("system/editPageDataAction",{id:h.value.id,editData:c({},g.value,b.otherInfo),pageName:b.pageName}),"new"===v.value&&w.dispatch("system/createPageDataAction",{newData:c({},g.value,b.otherInfo),pageName:b.pageName}),y.value=!1},b=e,y=(0,o.iH)(!1),h=(0,o.iH)({}),v=(0,o.iH)(),g=(0,a.Fl)((function(){var e={};return b.modalConfig.formItems.forEach((function(t){h.value[t.field]&&(e[t.field]=h.value[t.field])})),e})),w=(0,i.oR)();return n({dialogVisible:y,modalData:h,handleConfirmClick:f,type:v}),function(t,n){var i=l.mi,c=r.d0;return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(c,{modelValue:y.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return y.value=e}),title:"新建",width:"30%",center:"","destroy-on-close":""},{footer:(0,a.w5)((function(){return[(0,a._)("span",p,[(0,a.Wm)(i,{onClick:n[1]||(n[1]=function(e){return y.value=!1})},{default:(0,a.w5)((function(){return[m]})),_:1}),(0,a.Wm)(i,{type:"primary",onClick:f},{default:(0,a.w5)((function(){return[s]})),_:1})])]})),default:(0,a.w5)((function(){return[(0,a._)("span",null,[(0,a.Wm)((0,o.SU)(u.Z),(0,a.dG)(e.modalConfig,{modelValue:h.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return h.value=e})}),null,16,["modelValue"]),(0,a.WI)(t.$slots,"default")])]})),_:3},8,["modelValue"])])}}})},6635:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(2262);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=(0,r.iH)();return[n,function(e){n.value.modalData=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e),t&&t(e),n.value.dialogVisible=!0,n.value.type="edit"},function(){n.value.modalData={},e&&e(),n.value.dialogVisible=!0,n.value.type="new"}]}},5536:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(6252),l=n(2262),a=n(4250),o={formItems:[{field:"id",label:"id",type:"input",placeholder:"请输入查询id"},{field:"name",label:"用户名",type:"input",placeholder:"请输入用户名"},{label:"真实姓名",type:"input",field:"realname",placeholder:"请输入真实姓名"},{label:"电话号码",type:"input",field:"cellphone",placeholder:"请输入手机号"}]},i={title:"用户列表",propList:[{prop:"name",label:"用户名",minWidth:"100"},{prop:"realname",label:"真实姓名",minWidth:"100"},{prop:"cellphone",label:"手机号码",minWidth:"120"},{prop:"createAt",label:"创建时间",minWidth:"180"},{prop:"updateAt",label:"更新时间",minWidth:"180"},{prop:"operation",label:"操作",minWidth:"100"}],showIndex:!0,showSelection:!0},u={labelWidth:"100px",formItems:[{field:"name",label:"用户名",type:"input",placeholder:"请输入用户名"},{field:"password",label:"密码",type:"password",placeholder:"请输入密码"},{label:"真实姓名",type:"input",field:"realname",placeholder:"请输入真实姓名"},{label:"手机号码",type:"input",field:"cellphone",placeholder:"请输入手机号"},{field:"departmentId",label:"请选择部门",type:"select",placeholder:"请选择部门"},{field:"roleId",label:"请选择角色",type:"select",placeholder:"请选择角色"}],colLayout:{xl:24},itemStyle:{}},f=n(8055),c=n(6624),d=n(8399),p=n(4980),m=n(6635);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y={class:"user"};var h=(0,r.aZ)({setup:function(e){var t=b((0,p.b)(),3),n=t[0],s=t[1],h=t[2],v=(0,a.oR)(),g=(0,r.Fl)((function(){return u.formItems.find((function(e){return"departmentId"===e.field})).options=v.state.entireDepartment.map((function(e){return{label:e.name,value:e.id}})),u.formItems.find((function(e){return"roleId"===e.field})).options=v.state.entireRole.map((function(e){return{label:e.name,value:e.id}})),u})),w=b((0,m.S)((function(){u.formItems.find((function(e){return"password"===e.field})).isHidden=!1}),(function(){u.formItems.find((function(e){return"password"===e.field})).isHidden=!0})),3),S=w[0],C=w[1],k=w[2];return function(e,t){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)((0,l.SU)(f.Z),{formSearchConfig:(0,l.SU)(o),onResetClick:(0,l.SU)(h),onSearchClick:(0,l.SU)(s)},null,8,["formSearchConfig","onResetClick","onSearchClick"]),(0,r.Wm)((0,l.SU)(c.Z),{ref_key:"pageContentRef",ref:n,tableContentConfig:(0,l.SU)(i),pageName:"users",onEditClick:(0,l.SU)(C),onNewClick:(0,l.SU)(k)},null,8,["tableContentConfig","onEditClick","onNewClick"]),(0,r.Wm)((0,l.SU)(d.Z),{ref_key:"pageModalRef",ref:S,modalConfig:(0,l.SU)(g),pageName:"users"},null,8,["modalConfig"])])}}})}}]);