!function(){"use strict";var e,n,t,i,a,o,r,s;function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,n,t){return n&&d(e.prototype,n),t&&d(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4194],{40334:function(e,n,t){t.d(n,{e:function(){return k}});var i=t(3679),a=t(22238),o=t(37716),r=t(9685),s=t(51095),l=t(98295),d=t(67441),p=t(38583),f=t(76627),h=t(49983),g=t(72458);function y(e,n){if(1&e&&(o.ynx(0),o.TgZ(1,"mat-option",20),o._uU(2),o.qZA(),o.BQk()),2&e){var t=n.$implicit;o.xp6(1),o.Q6J("value",t),o.xp6(1),o.Oqu(t.label)}}function m(e,n){1&e&&(o.TgZ(0,"span"),o._uU(1,"Debe ingresar este campo!!"),o.qZA())}function _(e,n){if(1&e&&(o.ynx(0),o.TgZ(1,"th",16),o._uU(2),o.qZA(),o.BQk()),2&e){var t=n.$implicit;o.xp6(2),o.hij(" ",t.label," ")}}function v(e,n){if(1&e&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&e){var t=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t.tableDisplay," ")}}function b(e,n){if(1&e&&(o.ynx(0),o.YNc(1,v,3,1,"ng-container",12),o.BQk()),2&e){var t=n.$implicit,i=o.oxw().$implicit;o.xp6(1),o.Q6J("ngIf",i.value==t)}}function Z(e,n){if(1&e&&(o.ynx(0),o.YNc(1,b,2,1,"ng-container",8),o.BQk()),2&e){var t=o.oxw().$implicit;o.xp6(1),o.Q6J("ngForOf",t.node.years.split(","))}}function S(e,n){if(1&e&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&e){var t=n.index,i=o.oxw().$implicit;o.xp6(1),o.hij(" ",i.node.id_degree.edges.length>0?i.node.id_degree.edges[t].node.name:""," ")}}var q=function(e,n){return{"bg-gray-500":e,"bg-white border-b hover:bg-gray-300":n}};function x(e,n){if(1&e){var t=o.EpF();o.ynx(0),o.TgZ(1,"tr",21),o.TgZ(2,"td",22),o._uU(3),o.qZA(),o.TgZ(4,"td",22),o._uU(5),o.qZA(),o.TgZ(6,"td",22),o._uU(7),o.qZA(),o.TgZ(8,"td",22),o._uU(9),o.qZA(),o.TgZ(10,"td",23),o._uU(11),o.ALo(12,"date"),o.qZA(),o.TgZ(13,"td",23),o._uU(14),o.ALo(15,"date"),o.qZA(),o.TgZ(16,"td",23),o._uU(17),o.qZA(),o.TgZ(18,"td",23),o._uU(19),o.qZA(),o.TgZ(20,"td",23),o.YNc(21,Z,2,1,"ng-container",8),o.qZA(),o.TgZ(22,"td",23),o._uU(23),o.qZA(),o.TgZ(24,"td",23),o.YNc(25,S,3,1,"ng-container",8),o.qZA(),o.TgZ(26,"td",23),o._uU(27),o.qZA(),o.TgZ(28,"td",23),o.TgZ(29,"div",24),o.TgZ(30,"button",25),o.NdJ("click",function(){var e=o.CHM(t).$implicit;return o.oxw().onSelectChange(e.node)}),o.TgZ(31,"mat-icon"),o._uU(32,"select_all"),o.qZA(),o.TgZ(33,"span",26),o._uU(34,"Seleccionar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()}if(2&e){var i=n.$implicit,a=o.oxw();o.xp6(1),o.Q6J("ngClass",o.WLB(19,q,i.node.id==a.opportunityId,i.node.id!=a.opportunityId)),o.xp6(2),o.hij(" ",i.node.name," "),o.xp6(2),o.hij(" ",i.node.position," "),o.xp6(2),o.hij(" ",i.node.available_spaces," "),o.xp6(2),o.hij(" ",i.node.type," "),o.xp6(2),o.hij(" ",o.xi3(12,13,i.node.start_date,"yyyy-MM-dd")," "),o.xp6(3),o.hij(" ",o.xi3(15,16,i.node.end_date,"yyyy-MM-dd")," "),o.xp6(3),o.hij(" ",i.node.end_process?"Concluido":"Abirto"," "),o.xp6(2),o.hij(" ",i.node.student_selected?"Si":"No"," "),o.xp6(2),o.Q6J("ngForOf",a.years),o.xp6(2),o.hij(" ",i.node.id_company.edges.length>0?i.node.id_company.edges[0].node.name:""," "),o.xp6(2),o.Q6J("ngForOf",i.node.id_degree.edges),o.xp6(2),o.hij(" ",i.node.id_area_position.edges.length>0?i.node.id_area_position.edges[0].node.name:""," ")}}var $,k=(($=function(){function e(n,t,a){var o;u(this,e),this.dialogRef=n,this.data=t,this.opportunityService=a,this.listRegistry=[],this.years=[{name:"Primer a\xf1o",tableDisplay:"1ro",value:"1"},{name:"Segundo a\xf1o",tableDisplay:"2do",value:"2"},{name:"Tercero a\xf1o",tableDisplay:"3ro",value:"3"},{name:"Cuarto a\xf1o",tableDisplay:"4to",value:"4"},{name:"Quinto a\xf1o",tableDisplay:"5to",value:"5"},{name:"Graduado",tableDisplay:"Grad",value:"6"}],this.fields=[{label:"Codigo",field:"name",type:"field",searchable:!0,placeholder:"Ingrese el codigo de la oportunidad"},{label:"Puesto",field:"position",type:"field",searchable:!0,placeholder:"Ingrese el puesto"},{label:"Puesto disponible",field:"available_spaces",type:"field",searchable:!0,placeholder:"Ingrese el numero de puestos disponibles"},{label:"Tipo",field:"type",type:"field",searchable:!0,placeholder:"Ingrese el tipo de la opportunidad"},{label:"Fecha de inicio",field:"start_date",type:"date",searchable:!0,placeholder:"Ingrese la fecha de inicio"},{label:"Fecha de fin",field:"end_date",type:"date",searchable:!0,placeholder:"Ingrese la fecha de fin"},{label:"Concluido",field:"end_process",type:"field",searchable:!0,placeholder:"Seleccione si la opportunidad esta concluida"},{label:"Estudiante asignado",field:"student_selected",type:"field",searchable:!0,placeholder:"Seleccione si fue asignado a un estudiante"},{label:"A\xf1os",field:"years",type:"field",searchable:!0,placeholder:"Seleccione los a\xf1os"},{label:"Empresa",field:"id_company",type:"relation",searchable:!0,placeholder:"Selecione la empresa"},{label:"Carreras",field:"id_degree",type:"relation",searchable:!1,placeholder:"Selecione las carreras"},{label:"Area de conocimiento",field:"id_area_position",type:"relation",searchable:!0,placeholder:"Selecione el area de conocimiento"}],this.opportunityId=null,this.opportunity=null,this.isSelected=!1,this.searchForm=new i.cw({field:new i.NI(null===(o=this.fields[0])||void 0===o?void 0:o.field,[i.kI.minLength(1),i.kI.required]),value:new i.NI("",[i.kI.minLength(1),i.kI.required])}),null!=t.opportunity&&(this.opportunityId=t.opportunity),this.onLoadMainData()}return c(e,[{key:"onLoadMainData",value:function(){var e=this;this.opportunityService.getOpportunities("").subscribe(function(n){e.listRegistry=n.data.opportunities.edges})}},{key:"onSearchMainData",value:function(){var e=this;if(this.searchForm.valid){var n=this.opportunityService.buildQuery([this.searchForm.controls.field.value.field,this.searchForm.controls.value.value,this.searchForm.controls.field.value.type]);this.opportunityService.getOpportunities(n).subscribe(function(n){e.listRegistry=n.data.opportunities.edges})}}},{key:"onSelectChange",value:function(e){e.id===this.opportunityId?(this.isSelected=!1,this.opportunityId=null,this.opportunity=null):(this.opportunityId=e.id,this.isSelected=!0,this.opportunity=e)}},{key:"onSaveSelection",value:function(){this.dialogRef.close({code:"onSaveSelection",opportunity:this.opportunity})}},{key:"onCancelSelection",value:function(){this.dialogRef.close({code:"onSelectionCancel",opportunity:this.opportunity})}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||$)(o.Y36(a.so),o.Y36(a.WI),o.Y36(r.E))},$.\u0275cmp=o.Xpm({type:$,selectors:[["app-select-oppotunity"]],decls:37,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","","formControlName","value"],[4,"ngIf"],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[3,"value"],[3,"ngClass"],[1,"py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-blue-500",3,"click"],[1,"ml-2"]],template:function(e,n){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h2",0),o._uU(2,"Seleccion de opportindad de empleo:"),o.qZA(),o.TgZ(3,"div",1),o.ynx(4),o.TgZ(5,"div",2),o.TgZ(6,"form",3),o.TgZ(7,"button",4),o.NdJ("click",function(){return n.onLoadMainData()}),o.TgZ(8,"span",5),o.TgZ(9,"span"),o._uU(10,"Reset"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"mat-form-field",6),o.TgZ(12,"mat-select",7),o.YNc(13,y,3,2,"ng-container",8),o.qZA(),o.qZA(),o.TgZ(14,"mat-form-field",9),o._UZ(15,"mat-icon",10),o._UZ(16,"input",11),o.TgZ(17,"mat-error"),o.YNc(18,m,2,0,"span",12),o.qZA(),o.qZA(),o.TgZ(19,"button",13),o.NdJ("click",function(){return n.onSearchMainData()}),o.TgZ(20,"span",5),o.TgZ(21,"span"),o._uU(22,"Buscar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.ynx(23),o.TgZ(24,"table",14),o.TgZ(25,"thead",15),o.TgZ(26,"tr"),o.YNc(27,_,3,1,"ng-container",8),o.TgZ(28,"th",16),o._uU(29," Acciones "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(30,"tbody"),o.YNc(31,x,35,22,"ng-container",8),o.qZA(),o.qZA(),o.BQk(),o.qZA(),o.BQk(),o.TgZ(32,"div",17),o.TgZ(33,"button",18),o.NdJ("click",function(){return n.onSaveSelection()}),o._uU(34," Save "),o.qZA(),o.TgZ(35,"button",19),o.NdJ("click",function(){return n.onCancelSelection()}),o._uU(36," Cancel "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(6),o.Q6J("formGroup",n.searchForm),o.xp6(7),o.Q6J("ngForOf",n.fields),o.xp6(1),o.Q6J("floatLabel","always"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:search"),o.xp6(3),o.Q6J("ngIf",n.searchForm.get("value").hasError("required")&&n.searchForm.get("value").touched),o.xp6(9),o.Q6J("ngForOf",n.fields),o.xp6(4),o.Q6J("ngForOf",n.listRegistry),o.xp6(2),o.Q6J("disabled",!n.isSelected))},directives:[a.uh,a.xY,i._Y,i.JL,i.sg,s.lW,l.KE,d.gD,i.JJ,i.u,p.sg,f.Hw,l.qo,h.Nt,i.Fj,l.TO,p.O5,g.ey,p.mk],pipes:[p.uU],styles:[""]}),$)},17068:function(e,n,t){t.d(n,{o:function(){return y}});var i=t(3679),a=t(22238),o=t(37716),r=t(60758),s=t(38583),l=t(51095),d=t(76627);function p(e,n){if(1&e&&(o.ynx(0),o.TgZ(1,"th",5),o._uU(2),o.qZA(),o.BQk()),2&e){var t=n.$implicit;o.xp6(2),o.hij(" ",t.label," ")}}var f=function(e,n){return{"bg-gray-500":e,"bg-white border-b hover:bg-gray-300":n}};function h(e,n){if(1&e){var t=o.EpF();o.ynx(0),o.TgZ(1,"tr",9),o.TgZ(2,"td",10),o._uU(3),o.qZA(),o.TgZ(4,"td",11),o._uU(5),o.qZA(),o.TgZ(6,"td",11),o._uU(7),o.qZA(),o.TgZ(8,"td",11),o._uU(9),o.qZA(),o.TgZ(10,"td",11),o._uU(11),o.qZA(),o.TgZ(12,"td",11),o._uU(13),o.qZA(),o.TgZ(14,"td",11),o.TgZ(15,"div",12),o.TgZ(16,"button",13),o.NdJ("click",function(){var e=o.CHM(t).$implicit;return o.oxw().onSelectChange(e)}),o.TgZ(17,"mat-icon"),o._uU(18,"select_all"),o.qZA(),o.TgZ(19,"span",14),o._uU(20,"Seleccionar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()}if(2&e){var i=n.$implicit,a=o.oxw();o.xp6(1),o.Q6J("ngClass",o.WLB(7,f,i.id==a.studentId,i.id!=a.studentId)),o.xp6(2),o.hij(" ",i.carnet," "),o.xp6(2),o.hij(" ",i.first_name," "),o.xp6(2),o.hij(" ",i.last_name," "),o.xp6(2),o.hij(" ",i.gender?"Masculino":"Femenino"," "),o.xp6(2),o.hij(" ",i.year," "),o.xp6(2),o.hij(" ",i.id_degree.name," ")}}var g,y=((g=function(){function e(n,t,a){var o;u(this,e),this.dialogRef=n,this.data=t,this.studentsService=a,this.listRegistry=[],this.fields=[{label:"carnet",field:"carnet"},{label:"first_name",field:"first_name"},{label:"last_name",field:"last_name"},{label:"gender",field:"gender"},{label:"year",field:"year"},{label:"id_degree",field:"id_degree"}],this.studentId=null,this.student=null,this.isSelected=!1,this.searchForm=new i.cw({field:new i.NI(null===(o=this.fields[0])||void 0===o?void 0:o.field,[i.kI.minLength(1),i.kI.required]),value:new i.NI("",[i.kI.minLength(1),i.kI.required])}),null!=t.student&&(this.studentId=t.student),this.onLoadMainData()}return c(e,[{key:"onLoadMainData",value:function(){var e=this;this.studentsService.get().subscribe(function(n){e.listRegistry=n.data})}},{key:"onSearchMainData",value:function(){}},{key:"onSelectChange",value:function(e){e.id===this.studentId?(this.isSelected=!1,this.studentId=null,this.student=null):(this.studentId=e.id,this.isSelected=!0,this.student=e)}},{key:"onSaveSelection",value:function(){this.dialogRef.close({code:"onSaveSelection",student:this.student})}},{key:"onCancelSelection",value:function(){this.dialogRef.close({code:"onSelectionCancel",student:this.student})}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||g)(o.Y36(a.so),o.Y36(a.WI),o.Y36(r.q))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-select-student"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"min-w-full","text-center","max-h-90"],[1,"border-b","bg-gray-800"],[4,"ngFor","ngForOf"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[3,"ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-blue-500",3,"click"],[1,"ml-2"]],template:function(e,n){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h2",0),o._uU(2,"Patient Select:"),o.qZA(),o.TgZ(3,"div",1),o.ynx(4),o.TgZ(5,"table",2),o.TgZ(6,"thead",3),o.TgZ(7,"tr"),o.YNc(8,p,3,1,"ng-container",4),o.TgZ(9,"th",5),o._uU(10," actions "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"tbody"),o.YNc(12,h,21,10,"ng-container",4),o.qZA(),o.qZA(),o.BQk(),o.TgZ(13,"div",6),o.TgZ(14,"button",7),o.NdJ("click",function(){return n.onSaveSelection()}),o._uU(15," Guardar "),o.qZA(),o.TgZ(16,"button",8),o.NdJ("click",function(){return n.onCancelSelection()}),o._uU(17," Cancelar "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Q6J("ngForOf",n.fields),o.xp6(4),o.Q6J("ngForOf",n.listRegistry),o.xp6(2),o.Q6J("disabled",!n.isSelected))},directives:[a.uh,a.xY,s.sg,l.lW,s.mk,d.Hw],styles:[""]}),g)},9685:function(a,o,r){r.d(o,{E:function(){return Z}});var s,d=r(50752),p=r(94402),f=r(40205),h=r(59193),g=r(15257),y=r(93342),m=r(5304),_=r(37716),v=r(94270),b=r(1400),Z=((s=function(){function a(e,n,t){u(this,a),this.apollo=e,this.supaBaseService=n,this._fuseConfirmationService=t,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}return c(a,[{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a||n.push({field:"opportunity_type",value:!0,type:"eq",subfield:null}),(0,p.D)(this.supaBaseService.onSelectRequest(this.view,t,i,"*",n)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(n,t){return e.errorHandle(n),h.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"opportunity_type",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"true",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.view;return(0,p.D)(this.supaBaseService.onSelectFuntionView(o,r,e,n,i,a)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"insert",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"insertMtM",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"update",value:function(e,n){var t=this;return(0,p.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"delete",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"deleteMtM",value:function(e,n){var t=this;return(0,p.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,n)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"buildQuery",value:function(e){for(var n,t=[],i=0;i<e.length;i+=3)if("relation"==e[i+2])t.push("".concat(e[i],':{have:{name:{matchesRegex:"').concat(e[i+1],'"}}}'));else if("bool"==e[i+2])n="Si"==e[i+1]||"Concluido"==e[i+1],t.push("".concat(e[i],":{equalTo:").concat(n,"}"));else if("number"==e[i+2])n="Si"==e[i+1],t.push("".concat(e[i],":{equalTo:").concat(e[i+1],"}"));else if("date"==e[i+2]){var a=new Date((e[i+1]+"T00:00:00").toString()),o=new Date((e[i+1]+"T23:59:59").toString());t.push("".concat(e[i],':{greaterThanOrEqualTo:"').concat(a.toISOString(),'", lessThanOrEqualTo:"').concat(o.toISOString(),'" }'))}else t.push("".concat(e[i],':{matchesRegex:"').concat(e[i+1],'"}'));return"".concat(t.toString())}},{key:"getOpportunities",value:function(n){var t=this;return this.apollo.watchQuery({query:d.Ps(e||(e=l(["\n          query opportunities {\n            opportunities(where:{opportunity_type:{equalTo:true},","}) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  name\n                  position\n                  available_spaces\n                  type\n                  createdAt\n                  start_date\n                  end_date\n                  end_process\n                  student_selected\n                  opportunity_type\n                  years\n                  id_company {\n                    edges {\n                      node {\n                        id\n                        code\n                        name\n                        contact\n                      }\n                    }\n                    count\n                  }\n\n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                    count\n                  }\n                  id_area_position {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                    count\n                  }\n                }\n              }\n              count\n            }\n          }\n        "])),n),fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,m.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"getAreaPositions",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,i,"*",n)).pipe((0,g.q)(1),(0,m.K)(function(n,t){return e.errorHandle(n),h.E}))}},{key:"oncreateOpportunity",value:function(e,t,i,a,o,r,s,u,c,p,f,y,_){var v=this,b=[];return f.map(function(e){b.push('add: "'.concat(e,'" '))}),b.toString(),this.apollo.mutate({mutation:d.Ps(n||(n=l(["\n          mutation createOpportunity(\n            $name: String!\n            $position: String!\n            $available_spaces: Float!\n            $type: String!\n            $start_date: Date!\n            $end_date: Date!\n            $end_process: Boolean!\n            $student_selected: Boolean!\n            $opportunity_type: Boolean!\n            $years: String!\n            $id_degree: DegreeRelationInput!\n            $id_company: CompanyRelationInput!\n            $id_area_position: Area_positionRelationInput!\n          ) {\n            createOpportunity(\n              input: {\n                fields: {\n                  name: $name\n                  position: $position\n                  available_spaces: $available_spaces\n                  type: $type\n                  start_date: $start_date\n                  end_date: $end_date\n                  end_process: $end_process\n                  student_selected: $student_selected\n                  opportunity_type: $opportunity_type\n                  years: $years\n                  id_degree: $id_degree\n                  id_company: $id_company\n                  id_area_position: $id_area_position\n                }\n              }\n            ) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{name:e,position:t,available_spaces:Number(i),type:a,start_date:o,end_date:r,end_process:s,student_selected:u,opportunity_type:c,years:p.toLocaleString(),id_degree:{add:f},id_company:{add:y},id_area_position:{add:_}}}).pipe((0,g.q)(1),(0,m.K)(function(e,n){return v.errorHandle(e),h.E}))}},{key:"onEditOpportunity",value:function(e,n,i,a,o,r,s,u,c,p,f,y,_,v,b,Z,S){var q=this;return this.apollo.mutate({mutation:d.Ps(t||(t=l(["\n          mutation updateOpportunity(\n            $id: ID!\n            $name: String!\n            $position: String!\n            $available_spaces: Float!\n            $type: String!\n            $start_date: Date!\n            $end_date: Date!\n            $end_process: Boolean!\n            $student_selected: Boolean!\n            $opportunity_type: Boolean!\n            $years: String!\n            $id_degree: DegreeRelationInput!\n            $id_company: CompanyRelationInput!\n            $id_area_position: Area_positionRelationInput!\n          ) {\n            updateOpportunity(\n              input: {\n                id: $id\n                fields: {\n                  name: $name\n                  position: $position\n                  available_spaces: $available_spaces\n                  type: $type\n                  start_date: $start_date\n                  end_date: $end_date\n                  end_process: $end_process\n                  student_selected: $student_selected\n                  opportunity_type: $opportunity_type\n                  years: $years\n                  id_degree: $id_degree\n                  id_company: $id_company\n                  id_area_position: $id_area_position\n                }\n              }\n            ) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,name:n,position:i,available_spaces:Number(a),type:o,start_date:r,end_date:s,end_process:u,student_selected:c,opportunity_type:p,years:f.toLocaleString(),id_company:{remove:b,add:_},id_degree:{remove:Z,add:y},id_area_position:{remove:S,add:v}}}).pipe((0,g.q)(1),(0,m.K)(function(e,n){return q.errorHandle(e),h.E}))}},{key:"onDeleteOpportunity",value:function(e){var n=this;return this.apollo.mutate({mutation:d.Ps(i||(i=l(["\n          mutation deleteOpportunity($id: ID!) {\n            deleteOpportunity(input: { id: $id }) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,g.q)(1),(0,m.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,f._)("error")}}]),a}()).\u0275fac=function(e){return new(e||s)(_.LFG(d._M),_.LFG(v.P),_.LFG(b.R))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},60758:function(e,n,t){t.d(n,{q:function(){return Z}});var i,d=t(50752),p=t(94402),f=t(59193),h=t(40205),g=t(15257),y=t(5304),m=t(93342),_=t(37716),v=t(94270),b=t(1400),Z=((i=function(){function e(n,t,i){u(this,e),this.apollo=n,this.supaBaseService=t,this._fuseConfirmationService=i,this.table="student"}return c(e,[{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest(this.table,t,i,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",n)).pipe((0,g.q)(1),(0,y.K)(function(n,t){return e.errorHandle(n),f.E}))}},{key:"getFunctionView",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,g.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,h._)(e.error)}),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"insert",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"update",value:function(e,n){var t=this;return(0,p.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,g.q)(1),(0,y.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"delete",value:function(e){var n=this;return(0,p.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"buildQuery",value:function(e){for(var n,t=[],i=0;i<e.length;i+=3)"relation"==e[i+2]?t.push("".concat(e[i],':{have:{name:{matchesRegex:"').concat(e[i+1],'"}}}')):"gender"==e[i+2]?(n=!!e[i+1].includes("M"),t.push("".concat(e[i],":{equalTo:").concat(n,"}"))):t.push("".concat(e[i],':{matchesRegex:"').concat(e[i+1],'"}'));return"(where:{".concat(t.toString(),"})")}},{key:"getStudents",value:function(e){var n=this;return this.apollo.watchQuery({query:d.Ps(a||(a=l(["\n          query students {\n            students"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  carnet\n                  first_name\n                  last_name\n                  gender\n                  year\n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        "])),e),fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"onCreateStudent",value:function(e,n,t,i,a,r){var s=this;return this.apollo.mutate({mutation:d.Ps(o||(o=l(["\n          mutation createStudent(\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            createStudent(\n              input: {\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id_degree:{add:e},gender:n,carnet:t,last_name:i,first_name:a,year:r}}).pipe((0,g.q)(1),(0,y.K)(function(e,n){return s.errorHandle(e),f.E}))}},{key:"onEditStudent",value:function(e,n,t,i,a,o,s,u){var c=this;return this.apollo.mutate({mutation:d.Ps(r||(r=l(["\n          mutation updateStudent(\n            $id: ID!\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            updateStudent(\n              input: {\n                id: $id\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,id_degree:{remove:n,add:t},gender:i,carnet:a,last_name:o,first_name:s,year:u}}).pipe((0,g.q)(1),(0,y.K)(function(e,n){return c.errorHandle(e),f.E}))}},{key:"onDeleteStudent",value:function(e){var n=this;return this.apollo.mutate({mutation:d.Ps(s||(s=l(["\n          mutation deleteStudent($id: ID!) {\n            deleteStudent(input: { id: $id }) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,h._)("error")}}]),e}()).\u0275fac=function(e){return new(e||i)(_.LFG(d._M),_.LFG(v.P),_.LFG(b.R))},i.\u0275prov=_.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)}}])}();