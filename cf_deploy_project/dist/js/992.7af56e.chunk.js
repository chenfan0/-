"use strict";(self.webpackChunkvue3_cms=self.webpackChunkvue3_cms||[]).push([[992],{8399:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(440),a=n(3800),o=n(6252),l=n(2262),i=n(4250),u=n(3946);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}var d={class:"page-modal"},p={class:"dialog-footer"},m=(0,o.Uk)("取消"),s=(0,o.Uk)("确定");var y=(0,o.aZ)({props:{modalConfig:{type:Object,required:!0},pageName:{type:String,required:!0},otherInfo:{type:Object,dafault:function(){return{}}}},setup:function(e,t){var n=t.expose,c=function(){"edit"===g.value&&w.dispatch("system/editPageDataAction",{id:v.value.id,editData:f({},h.value,y.otherInfo),pageName:y.pageName}),"new"===g.value&&w.dispatch("system/createPageDataAction",{newData:f({},h.value,y.otherInfo),pageName:y.pageName}),b.value=!1},y=e,b=(0,l.iH)(!1),v=(0,l.iH)({}),g=(0,l.iH)(),h=(0,o.Fl)((function(){var e={};return y.modalConfig.formItems.forEach((function(t){v.value[t.field]&&(e[t.field]=v.value[t.field])})),e})),w=(0,i.oR)();return n({dialogVisible:b,modalData:v,handleConfirmClick:c,type:g}),function(t,n){var i=a.mi,f=r.d0;return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(f,{modelValue:b.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return b.value=e}),title:"新建",width:"30%",center:"","destroy-on-close":""},{footer:(0,o.w5)((function(){return[(0,o._)("span",p,[(0,o.Wm)(i,{onClick:n[1]||(n[1]=function(e){return b.value=!1})},{default:(0,o.w5)((function(){return[m]})),_:1}),(0,o.Wm)(i,{type:"primary",onClick:c},{default:(0,o.w5)((function(){return[s]})),_:1})])]})),default:(0,o.w5)((function(){return[(0,o._)("span",null,[(0,o.Wm)((0,l.SU)(u.Z),(0,o.dG)(e.modalConfig,{modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return v.value=e})}),null,16,["modelValue"]),(0,o.WI)(t.$slots,"default")])]})),_:3},8,["modelValue"])])}}})},6635:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(2262);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=(0,r.iH)();return[n,function(e){n.value.modalData=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},e),t&&t(e),n.value.dialogVisible=!0,n.value.type="edit"},function(){n.value.modalData={},e&&e(),n.value.dialogVisible=!0,n.value.type="new"}]}},3144:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(6252),a=n(2262),o=n(8055),l=n(6624),i=n(8399),u={formItems:[{field:"name",label:"类别名称",type:"input",placeholder:"请输入查询的类别名称"}]},c={title:"商品类别列表",propList:[{prop:"name",label:"商品类别",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"180"},{prop:"updateAt",label:"更新时间",minWidth:"180"},{prop:"operation",label:"操作",minWidth:"100"}],showIndex:!0},f={labelWidth:"100px",formItems:[{field:"name",label:"类别名称",type:"input",placeholder:"请输入类别名称"}],colLayout:{xl:24},itemStyle:{}},d=n(4980),p=n(6635);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y={class:"category"};var b=(0,r.aZ)({setup:function(e){var t=s((0,d.b)(),3),n=t[0],m=t[1],b=t[2],v=s((0,p.S)(),3),g=v[0],h=v[1],w=v[2];return function(e,t){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)((0,a.SU)(o.Z),{"form-search-config":(0,a.SU)(u),onResetClick:(0,a.SU)(b),onSearchClick:(0,a.SU)(m)},null,8,["form-search-config","onResetClick","onSearchClick"]),(0,r.Wm)((0,a.SU)(l.Z),{ref_key:"pageContentRef",ref:n,"table-content-config":(0,a.SU)(c),"page-name":"category",onEditClick:(0,a.SU)(h),onNewClick:(0,a.SU)(w)},null,8,["table-content-config","onEditClick","onNewClick"]),(0,r.Wm)((0,a.SU)(i.Z),{ref_key:"pageModalRef",ref:g,"modal-config":(0,a.SU)(f),"page-name":"category"},null,8,["modal-config"])])}}})}}]);