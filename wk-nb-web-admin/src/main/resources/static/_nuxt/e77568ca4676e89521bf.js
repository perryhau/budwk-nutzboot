(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{691:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"g",(function(){return l})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return m})),o.d(e,"d",(function(){return d})),o.d(e,"h",(function(){return c})),o.d(e,"f",(function(){return f})),o.d(e,"e",(function(){return h}));var n="/platform/sys/unit/child",l="/platform/sys/unit/tree",r="/platform/sys/unit/create",m="/platform/sys/unit/delete/",d="/platform/sys/unit/get/",c="/platform/sys/unit/update",f="/platform/sys/unit/get_sort_tree",h="/platform/sys/unit/sort"},726:function(t,e,o){"use strict";o.r(e);o(68);var n=o(691),l={middleware:["authenticated","check_permissions"],data:function(){var t=this;return{loading:!0,btnLoading:!1,listLoading:!1,addDialogVisible:!1,updateDialogVisible:!1,sortDialogVisible:!1,tableData:[],tableKey:"",options:[],sortMenuData:[],formData:{id:"",parentId:""},props:{lazy:!0,checkStrictly:!0,multiple:!1,emitPath:!1,lazyLoad:function(e,o){t.$axios.$get(n.g,{params:{pid:e.value}}).then((function(t){0===t.code&&o(t.data)}))}},treeProps:{children:"children",label:"label"}}},computed:{formRules:function(){var t={name:[{required:!0,message:this.$t("sys.manage.unit.form.name"),trigger:"blur"}],email:[{required:!1,message:this.$t("sys.manage.unit.form.email"),trigger:"blur"},{type:"email",message:this.$t("sys.manage.unit.form.emailCheck"),trigger:["blur","change"]}]};return t}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.listLoading=!0,this.$axios.$get(n.a).then((function(e){t.listLoading=!1,0===e.code&&(t.tableData=e.data,t.tableKey=+new Date)}))},loadChild:function(t,e,o){this.$axios.$get(n.a,{params:{pid:t.id}}).then((function(t){0===t.code&&o(t.data)}))},openAdd:function(){this.formData={},this.options=[],this.addDialogVisible=!0},doAdd:function(){var t=this;this.$refs.addForm.validate((function(e){e&&(t.btnLoading=!0,t.$axios.$post(n.b,t.formData).then((function(e){t.btnLoading=!1,0===e.code&&(t.$message({message:e.msg,type:"success"}),t.loadData(),t.addDialogVisible=!1)})))}))},updateRow:function(t){var e=this;this.$axios.$get(n.d+t.id).then((function(t){0===t.code&&(e.formData=t.data,e.updateDialogVisible=!0)}))},doUpdate:function(){var t=this;this.$refs.updateForm.validate((function(e){e&&(t.btnLoading=!0,t.$axios.$post(n.h,t.formData).then((function(e){t.btnLoading=!1,0===e.code&&(t.$message({message:e.msg,type:"success"}),t.loadData(),t.updateDialogVisible=!1)})))}))},deleteRow:function(t){var e=this;this.$confirm(this.$t("sys.manage.unit.delete",{name:t.name}),this.$t("system.commons.txt.notice"),{confirmButtonText:this.$t("system.commons.button.ok"),cancelButtonText:this.$t("system.commons.button.cancel"),type:"warning"}).then((function(){e.$axios.$delete(n.c+t.id).then((function(t){0===t.code&&(e.$message({message:t.msg,type:"success"}),e.loadData())}))}))},openSort:function(){var t=this;this.$axios.$get(n.f).then((function(e){0===e.code&&(t.sortMenuData=e.data)})),this.sortDialogVisible=!0},sortAllowDrop:function(t,e,o){if(t.data.parentId===e.data.parentId)return"prev"===o},getTreeIds:function(t,data){var e=this;data.forEach((function(o){t.push(o.id),o.children&&o.children.length>0&&e.getTreeIds(t,o.children)}))},doSort:function(){var t=this;this.btnLoading=!0;var e=[];this.getTreeIds(e,this.sortMenuData),this.$axios.$post(n.e,{ids:e.toString()}).then((function(e){t.btnLoading=!1,0===e.code&&(t.sortDialogVisible=!1,t.loadData())}))}}},r=o(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"platform-content"},[o("h4",{staticClass:"platform-content-title"},[o("span",[t._v(t._s(t.$t("sys.manage.unit")))]),t._v(" "),o("div",{staticClass:"platform-list-op"},[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.create",expression:"'sys.manage.unit.create'"}],attrs:{size:"small",type:"primary"},on:{click:t.openAdd}},[t._v("\n        "+t._s(t.$t("sys.manage.unit.create"))+"\n      ")]),t._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.update",expression:"'sys.manage.unit.update'"}],attrs:{size:"small"},on:{click:t.openSort}},[t._v("\n        "+t._s(t.$t("sys.manage.unit.sort"))+"\n      ")])],1)]),t._v(" "),o("div",{staticClass:"platform-content-info"},[o("div",{staticClass:"platform-content-list"},[o("div",{staticClass:"platform-content-list-table"},[o("el-table",{key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.tableData,size:"small","highlight-current-row":!0,"row-key":"id",lazy:"",load:t.loadChild}},[o("el-table-column",{attrs:{label:t.$t("sys.manage.unit.form.name"),"header-align":"center",prop:"name",width:"200px","show-overflow-tooltip":!0,align:"left"}}),t._v(" "),o("el-table-column",{attrs:{label:t.$t("sys.manage.unit.form.address"),"header-align":"left",prop:"address","show-overflow-tooltip":!0,align:"left"}}),t._v(" "),o("el-table-column",{attrs:{label:t.$t("sys.manage.unit.form.telephone"),"header-align":"left",prop:"telephone","show-overflow-tooltip":!0,align:"left"}}),t._v(" "),o("el-table-column",{attrs:{label:t.$t("sys.manage.unit.form.website"),"header-align":"left",prop:"website","show-overflow-tooltip":!0,align:"left"}}),t._v(" "),o("el-table-column",{attrs:{label:t.$t("system.commons.txt.ext"),"header-align":"center","show-overflow-tooltip":!0,align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.update",expression:"'sys.manage.unit.update'"}],attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),t.updateRow(e.row)}}},[t._v("\n                "+t._s(t.$t("system.commons.button.update.mini"))+"\n              ")]),t._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.delete",expression:"'sys.manage.unit.delete'"}],staticClass:"button-delete-color",attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),t.deleteRow(e.row)}}},[t._v("\n                "+t._s(t.$t("system.commons.button.delete.mini"))+"\n              ")])]}}])})],1)],1)])]),t._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.create",expression:"'sys.manage.unit.create'"}],attrs:{title:t.$t("sys.manage.unit.create"),visible:t.addDialogVisible,"close-on-click-modal":!1,width:"40%"},on:{"update:visible":function(e){t.addDialogVisible=e}}},[o("el-form",{ref:"addForm",attrs:{model:t.formData,rules:t.formRules,size:"small","label-width":"100px"}},[o("el-form-item",{attrs:{prop:"parentId",label:t.$t("sys.manage.unit.form.parentId")}},[o("el-cascader",{staticStyle:{width:"100%"},attrs:{props:t.props,options:t.options,placeholder:t.$t("sys.manage.unit.form.parentRoot")},model:{value:t.formData.parentId,callback:function(e){t.$set(t.formData,"parentId",e)},expression:"formData.parentId"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"name",label:t.$t("sys.manage.unit.form.name")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.name"),"auto-complete":"off",tabindex:"2",type:"text"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"aliasName",label:t.$t("sys.manage.unit.form.aliasName")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.aliasName"),"auto-complete":"off",tabindex:"3",type:"text"},model:{value:t.formData.aliasName,callback:function(e){t.$set(t.formData,"aliasName",e)},expression:"formData.aliasName"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"unitcode",label:t.$t("sys.manage.unit.form.unitcode")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.unitcode"),"auto-complete":"off",tabindex:"4",type:"text"},model:{value:t.formData.unitcode,callback:function(e){t.$set(t.formData,"unitcode",e)},expression:"formData.unitcode"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"address",label:t.$t("sys.manage.unit.form.address")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.address"),"auto-complete":"off",tabindex:"5",type:"text"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"telephone",label:t.$t("sys.manage.unit.form.telephone")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.telephone"),"auto-complete":"off",tabindex:"6",type:"text"},model:{value:t.formData.telephone,callback:function(e){t.$set(t.formData,"telephone",e)},expression:"formData.telephone"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"email",label:t.$t("sys.manage.unit.form.email")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.email"),"auto-complete":"off",tabindex:"7",type:"text"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"website",label:t.$t("sys.manage.unit.form.website")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.website"),"auto-complete":"off",tabindex:"8",type:"text"},model:{value:t.formData.website,callback:function(e){t.$set(t.formData,"website",e)},expression:"formData.website"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"note",label:t.$t("sys.manage.unit.form.note")}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}})],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v(t._s(t.$t("system.commons.button.cancel")))]),t._v(" "),o("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.doAdd}},[t._v(t._s(t.$t("system.commons.button.ok")))])],1)],1),t._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.update",expression:"'sys.manage.unit.update'"}],attrs:{title:t.$t("sys.manage.unit.update"),visible:t.updateDialogVisible,"close-on-click-modal":!1,width:"40%"},on:{"update:visible":function(e){t.updateDialogVisible=e}}},[o("el-form",{ref:"updateForm",attrs:{model:t.formData,rules:t.formRules,size:"small","label-width":"100px"}},[o("el-form-item",{attrs:{prop:"name",label:t.$t("sys.manage.unit.form.name")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.name"),"auto-complete":"off",tabindex:"2",type:"text"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"aliasName",label:t.$t("sys.manage.unit.form.aliasName")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.aliasName"),"auto-complete":"off",tabindex:"3",type:"text"},model:{value:t.formData.aliasName,callback:function(e){t.$set(t.formData,"aliasName",e)},expression:"formData.aliasName"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"unitcode",label:t.$t("sys.manage.unit.form.unitcode")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.unitcode"),"auto-complete":"off",tabindex:"4",type:"text"},model:{value:t.formData.unitcode,callback:function(e){t.$set(t.formData,"unitcode",e)},expression:"formData.unitcode"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"address",label:t.$t("sys.manage.unit.form.address")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.address"),"auto-complete":"off",tabindex:"5",type:"text"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"telephone",label:t.$t("sys.manage.unit.form.telephone")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.telephone"),"auto-complete":"off",tabindex:"6",type:"text"},model:{value:t.formData.telephone,callback:function(e){t.$set(t.formData,"telephone",e)},expression:"formData.telephone"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"email",label:t.$t("sys.manage.unit.form.email")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.email"),"auto-complete":"off",tabindex:"7",type:"text"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"website",label:t.$t("sys.manage.unit.form.website")}},[o("el-input",{attrs:{maxlength:"100",placeholder:t.$t("sys.manage.unit.form.website"),"auto-complete":"off",tabindex:"8",type:"text"},model:{value:t.formData.website,callback:function(e){t.$set(t.formData,"website",e)},expression:"formData.website"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"note",label:t.$t("sys.manage.unit.form.note")}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}})],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.updateDialogVisible=!1}}},[t._v(t._s(t.$t("system.commons.button.cancel")))]),t._v(" "),o("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.doUpdate}},[t._v(t._s(t.$t("system.commons.button.ok")))])],1)],1),t._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.unit.update",expression:"'sys.manage.unit.update'"}],attrs:{title:t.$t("sys.manage.unit.sort"),visible:t.sortDialogVisible,width:"50%"},on:{"update:visible":function(e){t.sortDialogVisible=e}}},[o("el-tree",{ref:"sortMenuTree",attrs:{data:t.sortMenuData,draggable:"","allow-drop":t.sortAllowDrop,"node-key":"id",props:t.treeProps},scopedSlots:t._u([{key:"default",fn:function(e){return o("span",{staticClass:"custom-tree-node"},[o("span",[t._v(t._s(e.node.label))])])}}])}),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.sortDialogVisible=!1}}},[t._v(t._s(t.$t("system.commons.button.cancel")))]),t._v(" "),o("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.doSort}},[t._v(t._s(t.$t("system.commons.button.ok")))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);