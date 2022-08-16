"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4194],{40334:function(e,t,i){i.d(t,{e:function(){return q}});var n=i(3679),r=i(22238),o=i(37716),a=i(9685),s=i(51095),l=i(98295),d=i(67441),c=i(38583),u=i(76627),p=i(49983),g=i(72458);function h(e,t){if(1&e&&(o.ynx(0),o.TgZ(1,"mat-option",20),o._uU(2),o.qZA(),o.BQk()),2&e){const e=t.$implicit;o.xp6(1),o.Q6J("value",e),o.xp6(1),o.Oqu(e.label)}}function m(e,t){1&e&&(o.TgZ(0,"span"),o._uU(1,"Debe ingresar este campo!!"),o.qZA())}function _(e,t){if(1&e&&(o.ynx(0),o.TgZ(1,"th",16),o._uU(2),o.qZA(),o.BQk()),2&e){const e=t.$implicit;o.xp6(2),o.hij(" ",e.label," ")}}function f(e,t){if(1&e&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&e){const e=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",e.tableDisplay," ")}}function y(e,t){if(1&e&&(o.ynx(0),o.YNc(1,f,3,1,"ng-container",12),o.BQk()),2&e){const e=t.$implicit,i=o.oxw().$implicit;o.xp6(1),o.Q6J("ngIf",i.value==e)}}function b(e,t){if(1&e&&(o.ynx(0),o.YNc(1,y,2,1,"ng-container",8),o.BQk()),2&e){const e=o.oxw().$implicit;o.xp6(1),o.Q6J("ngForOf",e.node.years.split(","))}}function Z(e,t){if(1&e&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&e){const e=t.index,i=o.oxw().$implicit;o.xp6(1),o.hij(" ",i.node.id_degree.edges.length>0?i.node.id_degree.edges[e].node.name:""," ")}}const S=function(e,t){return{"bg-gray-500":e,"bg-white border-b hover:bg-gray-300":t}};function $(e,t){if(1&e){const e=o.EpF();o.ynx(0),o.TgZ(1,"tr",21),o.TgZ(2,"td",22),o._uU(3),o.qZA(),o.TgZ(4,"td",22),o._uU(5),o.qZA(),o.TgZ(6,"td",22),o._uU(7),o.qZA(),o.TgZ(8,"td",22),o._uU(9),o.qZA(),o.TgZ(10,"td",23),o._uU(11),o.ALo(12,"date"),o.qZA(),o.TgZ(13,"td",23),o._uU(14),o.ALo(15,"date"),o.qZA(),o.TgZ(16,"td",23),o._uU(17),o.qZA(),o.TgZ(18,"td",23),o._uU(19),o.qZA(),o.TgZ(20,"td",23),o.YNc(21,b,2,1,"ng-container",8),o.qZA(),o.TgZ(22,"td",23),o._uU(23),o.qZA(),o.TgZ(24,"td",23),o.YNc(25,Z,3,1,"ng-container",8),o.qZA(),o.TgZ(26,"td",23),o._uU(27),o.qZA(),o.TgZ(28,"td",23),o.TgZ(29,"div",24),o.TgZ(30,"button",25),o.NdJ("click",function(){const t=o.CHM(e).$implicit;return o.oxw().onSelectChange(t.node)}),o.TgZ(31,"mat-icon"),o._uU(32,"select_all"),o.qZA(),o.TgZ(33,"span",26),o._uU(34,"Seleccionar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()}if(2&e){const e=t.$implicit,i=o.oxw();o.xp6(1),o.Q6J("ngClass",o.WLB(19,S,e.node.id==i.opportunityId,e.node.id!=i.opportunityId)),o.xp6(2),o.hij(" ",e.node.name," "),o.xp6(2),o.hij(" ",e.node.position," "),o.xp6(2),o.hij(" ",e.node.available_spaces," "),o.xp6(2),o.hij(" ",e.node.type," "),o.xp6(2),o.hij(" ",o.xi3(12,13,e.node.start_date,"yyyy-MM-dd")," "),o.xp6(3),o.hij(" ",o.xi3(15,16,e.node.end_date,"yyyy-MM-dd")," "),o.xp6(3),o.hij(" ",e.node.end_process?"Concluido":"Abirto"," "),o.xp6(2),o.hij(" ",e.node.student_selected?"Si":"No"," "),o.xp6(2),o.Q6J("ngForOf",i.years),o.xp6(2),o.hij(" ",e.node.id_company.edges.length>0?e.node.id_company.edges[0].node.name:""," "),o.xp6(2),o.Q6J("ngForOf",e.node.id_degree.edges),o.xp6(2),o.hij(" ",e.node.id_area_position.edges.length>0?e.node.id_area_position.edges[0].node.name:""," ")}}let q=(()=>{class e{constructor(e,t,i){var r;this.dialogRef=e,this.data=t,this.opportunityService=i,this.listRegistry=[],this.years=[{name:"Primer a\xf1o",tableDisplay:"1ro",value:"1"},{name:"Segundo a\xf1o",tableDisplay:"2do",value:"2"},{name:"Tercero a\xf1o",tableDisplay:"3ro",value:"3"},{name:"Cuarto a\xf1o",tableDisplay:"4to",value:"4"},{name:"Quinto a\xf1o",tableDisplay:"5to",value:"5"},{name:"Graduado",tableDisplay:"Grad",value:"6"}],this.fields=[{label:"Codigo",field:"name",type:"field",searchable:!0,placeholder:"Ingrese el codigo de la oportunidad"},{label:"Puesto",field:"position",type:"field",searchable:!0,placeholder:"Ingrese el puesto"},{label:"Puesto disponible",field:"available_spaces",type:"field",searchable:!0,placeholder:"Ingrese el numero de puestos disponibles"},{label:"Tipo",field:"type",type:"field",searchable:!0,placeholder:"Ingrese el tipo de la opportunidad"},{label:"Fecha de inicio",field:"start_date",type:"date",searchable:!0,placeholder:"Ingrese la fecha de inicio"},{label:"Fecha de fin",field:"end_date",type:"date",searchable:!0,placeholder:"Ingrese la fecha de fin"},{label:"Concluido",field:"end_process",type:"field",searchable:!0,placeholder:"Seleccione si la opportunidad esta concluida"},{label:"Estudiante asignado",field:"student_selected",type:"field",searchable:!0,placeholder:"Seleccione si fue asignado a un estudiante"},{label:"A\xf1os",field:"years",type:"field",searchable:!0,placeholder:"Seleccione los a\xf1os"},{label:"Empresa",field:"id_company",type:"relation",searchable:!0,placeholder:"Selecione la empresa"},{label:"Carreras",field:"id_degree",type:"relation",searchable:!1,placeholder:"Selecione las carreras"},{label:"Area de conocimiento",field:"id_area_position",type:"relation",searchable:!0,placeholder:"Selecione el area de conocimiento"}],this.opportunityId=null,this.opportunity=null,this.isSelected=!1,this.searchForm=new n.cw({field:new n.NI(null===(r=this.fields[0])||void 0===r?void 0:r.field,[n.kI.minLength(1),n.kI.required]),value:new n.NI("",[n.kI.minLength(1),n.kI.required])}),null!=t.opportunity&&(this.opportunityId=t.opportunity),this.onLoadMainData()}onLoadMainData(){this.opportunityService.getOpportunities("").subscribe(e=>{this.listRegistry=e.data.opportunities.edges})}onSearchMainData(){if(this.searchForm.valid){const e=this.opportunityService.buildQuery([this.searchForm.controls.field.value.field,this.searchForm.controls.value.value,this.searchForm.controls.field.value.type]);this.opportunityService.getOpportunities(e).subscribe(e=>{this.listRegistry=e.data.opportunities.edges})}}onSelectChange(e){e.id===this.opportunityId?(this.isSelected=!1,this.opportunityId=null,this.opportunity=null):(this.opportunityId=e.id,this.isSelected=!0,this.opportunity=e)}onSaveSelection(){this.dialogRef.close({code:"onSaveSelection",opportunity:this.opportunity})}onCancelSelection(){this.dialogRef.close({code:"onSelectionCancel",opportunity:this.opportunity})}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.so),o.Y36(r.WI),o.Y36(a.E))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-select-oppotunity"]],decls:37,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","","formControlName","value"],[4,"ngIf"],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[3,"value"],[3,"ngClass"],[1,"py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-blue-500",3,"click"],[1,"ml-2"]],template:function(e,t){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h2",0),o._uU(2,"Seleccion de opportindad de empleo:"),o.qZA(),o.TgZ(3,"div",1),o.ynx(4),o.TgZ(5,"div",2),o.TgZ(6,"form",3),o.TgZ(7,"button",4),o.NdJ("click",function(){return t.onLoadMainData()}),o.TgZ(8,"span",5),o.TgZ(9,"span"),o._uU(10,"Reset"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"mat-form-field",6),o.TgZ(12,"mat-select",7),o.YNc(13,h,3,2,"ng-container",8),o.qZA(),o.qZA(),o.TgZ(14,"mat-form-field",9),o._UZ(15,"mat-icon",10),o._UZ(16,"input",11),o.TgZ(17,"mat-error"),o.YNc(18,m,2,0,"span",12),o.qZA(),o.qZA(),o.TgZ(19,"button",13),o.NdJ("click",function(){return t.onSearchMainData()}),o.TgZ(20,"span",5),o.TgZ(21,"span"),o._uU(22,"Buscar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.ynx(23),o.TgZ(24,"table",14),o.TgZ(25,"thead",15),o.TgZ(26,"tr"),o.YNc(27,_,3,1,"ng-container",8),o.TgZ(28,"th",16),o._uU(29," Acciones "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(30,"tbody"),o.YNc(31,$,35,22,"ng-container",8),o.qZA(),o.qZA(),o.BQk(),o.qZA(),o.BQk(),o.TgZ(32,"div",17),o.TgZ(33,"button",18),o.NdJ("click",function(){return t.onSaveSelection()}),o._uU(34," Save "),o.qZA(),o.TgZ(35,"button",19),o.NdJ("click",function(){return t.onCancelSelection()}),o._uU(36," Cancel "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(6),o.Q6J("formGroup",t.searchForm),o.xp6(7),o.Q6J("ngForOf",t.fields),o.xp6(1),o.Q6J("floatLabel","always"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:search"),o.xp6(3),o.Q6J("ngIf",t.searchForm.get("value").hasError("required")&&t.searchForm.get("value").touched),o.xp6(9),o.Q6J("ngForOf",t.fields),o.xp6(4),o.Q6J("ngForOf",t.listRegistry),o.xp6(2),o.Q6J("disabled",!t.isSelected))},directives:[r.uh,r.xY,n._Y,n.JL,n.sg,s.lW,l.KE,d.gD,n.JJ,n.u,c.sg,u.Hw,l.qo,p.Nt,n.Fj,l.TO,c.O5,g.ey,c.mk],pipes:[c.uU],styles:[""]}),e})()},17068:function(e,t,i){i.d(t,{o:function(){return g}});var n=i(3679),r=i(22238),o=i(37716),a=i(60758),s=i(38583),l=i(51095),d=i(76627);function c(e,t){if(1&e&&(o.ynx(0),o.TgZ(1,"th",5),o._uU(2),o.qZA(),o.BQk()),2&e){const e=t.$implicit;o.xp6(2),o.hij(" ",e.label," ")}}const u=function(e,t){return{"bg-gray-500":e,"bg-white border-b hover:bg-gray-300":t}};function p(e,t){if(1&e){const e=o.EpF();o.ynx(0),o.TgZ(1,"tr",9),o.TgZ(2,"td",10),o._uU(3),o.qZA(),o.TgZ(4,"td",11),o._uU(5),o.qZA(),o.TgZ(6,"td",11),o._uU(7),o.qZA(),o.TgZ(8,"td",11),o._uU(9),o.qZA(),o.TgZ(10,"td",11),o._uU(11),o.qZA(),o.TgZ(12,"td",11),o._uU(13),o.qZA(),o.TgZ(14,"td",11),o.TgZ(15,"div",12),o.TgZ(16,"button",13),o.NdJ("click",function(){const t=o.CHM(e).$implicit;return o.oxw().onSelectChange(t)}),o.TgZ(17,"mat-icon"),o._uU(18,"select_all"),o.qZA(),o.TgZ(19,"span",14),o._uU(20,"Seleccionar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()}if(2&e){const e=t.$implicit,i=o.oxw();o.xp6(1),o.Q6J("ngClass",o.WLB(7,u,e.id==i.studentId,e.id!=i.studentId)),o.xp6(2),o.hij(" ",e.carnet," "),o.xp6(2),o.hij(" ",e.first_name," "),o.xp6(2),o.hij(" ",e.last_name," "),o.xp6(2),o.hij(" ",e.gender?"Masculino":"Femenino"," "),o.xp6(2),o.hij(" ",e.year," "),o.xp6(2),o.hij(" ",e.id_degree.name," ")}}let g=(()=>{class e{constructor(e,t,i){var r;this.dialogRef=e,this.data=t,this.studentsService=i,this.listRegistry=[],this.fields=[{label:"carnet",field:"carnet"},{label:"first_name",field:"first_name"},{label:"last_name",field:"last_name"},{label:"gender",field:"gender"},{label:"year",field:"year"},{label:"id_degree",field:"id_degree"}],this.studentId=null,this.student=null,this.isSelected=!1,this.searchForm=new n.cw({field:new n.NI(null===(r=this.fields[0])||void 0===r?void 0:r.field,[n.kI.minLength(1),n.kI.required]),value:new n.NI("",[n.kI.minLength(1),n.kI.required])}),null!=t.student&&(this.studentId=t.student),this.onLoadMainData()}onLoadMainData(){this.studentsService.get().subscribe(e=>{this.listRegistry=e.data})}onSearchMainData(){}onSelectChange(e){e.id===this.studentId?(this.isSelected=!1,this.studentId=null,this.student=null):(this.studentId=e.id,this.isSelected=!0,this.student=e)}onSaveSelection(){this.dialogRef.close({code:"onSaveSelection",student:this.student})}onCancelSelection(){this.dialogRef.close({code:"onSelectionCancel",student:this.student})}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.so),o.Y36(r.WI),o.Y36(a.q))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-select-student"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"min-w-full","text-center","max-h-90"],[1,"border-b","bg-gray-800"],[4,"ngFor","ngForOf"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[3,"ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-blue-500",3,"click"],[1,"ml-2"]],template:function(e,t){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h2",0),o._uU(2,"Patient Select:"),o.qZA(),o.TgZ(3,"div",1),o.ynx(4),o.TgZ(5,"table",2),o.TgZ(6,"thead",3),o.TgZ(7,"tr"),o.YNc(8,c,3,1,"ng-container",4),o.TgZ(9,"th",5),o._uU(10," actions "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"tbody"),o.YNc(12,p,21,10,"ng-container",4),o.qZA(),o.qZA(),o.BQk(),o.TgZ(13,"div",6),o.TgZ(14,"button",7),o.NdJ("click",function(){return t.onSaveSelection()}),o._uU(15," Guardar "),o.qZA(),o.TgZ(16,"button",8),o.NdJ("click",function(){return t.onCancelSelection()}),o._uU(17," Cancelar "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Q6J("ngForOf",t.fields),o.xp6(4),o.Q6J("ngForOf",t.listRegistry),o.xp6(2),o.Q6J("disabled",!t.isSelected))},directives:[r.uh,r.xY,s.sg,l.lW,s.mk,d.Hw],styles:[""]}),e})()},9685:function(e,t,i){i.d(t,{E:function(){return g}});var n=i(50752),r=i(94402),o=i(40205),a=i(59193),s=i(15257),l=i(93342),d=i(5304),c=i(37716),u=i(94270),p=i(1400);let g=(()=>{class e{constructor(e,t,i){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=i,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}get(e=[],t=0,i=100,n=!1){return n||e.push({field:"opportunity_type",value:!0,type:"eq",subfield:null}),(0,r.D)(this.supaBaseService.onSelectRequest(this.view,t,i,"*",e)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}getFunctionView(e,t,i="opportunity_type",n="true",c="searchinview",u=this.view){return(0,r.D)(this.supaBaseService.onSelectFuntionView(c,u,e,t,i,n)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}insert(e){return(0,r.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}insertMtM(e){return(0,r.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}update(e,t){return(0,r.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}delete(e){return(0,r.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}deleteMtM(e,t){return(0,r.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,s.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,o._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}buildQuery(e){let t,i=[];for(let n=0;n<e.length;n+=3)if("relation"==e[n+2])i.push(`${e[n]}:{have:{name:{matchesRegex:"${e[n+1]}"}}}`);else if("bool"==e[n+2])t="Si"==e[n+1]||"Concluido"==e[n+1],i.push(`${e[n]}:{equalTo:${t}}`);else if("number"==e[n+2])t="Si"==e[n+1],i.push(`${e[n]}:{equalTo:${e[n+1]}}`);else if("date"==e[n+2]){let t=new Date((e[n+1]+"T00:00:00").toString()),r=new Date((e[n+1]+"T23:59:59").toString());i.push(`${e[n]}:{greaterThanOrEqualTo:"${t.toISOString()}", lessThanOrEqualTo:"${r.toISOString()}" }`)}else i.push(`${e[n]}:{matchesRegex:"${e[n+1]}"}`);return`${i.toString()}`}getOpportunities(e){return this.apollo.watchQuery({query:n.Ps`
          query opportunities {
            opportunities(where:{opportunity_type:{equalTo:true},${e}}) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  name
                  position
                  available_spaces
                  type
                  createdAt
                  start_date
                  end_date
                  end_process
                  student_selected
                  opportunity_type
                  years
                  id_company {
                    edges {
                      node {
                        id
                        code
                        name
                        contact
                      }
                    }
                    count
                  }

                  id_degree {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                    count
                  }
                  id_area_position {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                    count
                  }
                }
              }
              count
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,s.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}getAreaPositions(e=[],t=0,i=100){return(0,r.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,i,"*",e)).pipe((0,s.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}oncreateOpportunity(e,t,i,r,o,l,c,u,p,g,h,m,_){let f=[];return h.map(e=>{f.push(`add: "${e}" `)}),f.toString(),this.apollo.mutate({mutation:n.Ps`
          mutation createOpportunity(
            $name: String!
            $position: String!
            $available_spaces: Float!
            $type: String!
            $start_date: Date!
            $end_date: Date!
            $end_process: Boolean!
            $student_selected: Boolean!
            $opportunity_type: Boolean!
            $years: String!
            $id_degree: DegreeRelationInput!
            $id_company: CompanyRelationInput!
            $id_area_position: Area_positionRelationInput!
          ) {
            createOpportunity(
              input: {
                fields: {
                  name: $name
                  position: $position
                  available_spaces: $available_spaces
                  type: $type
                  start_date: $start_date
                  end_date: $end_date
                  end_process: $end_process
                  student_selected: $student_selected
                  opportunity_type: $opportunity_type
                  years: $years
                  id_degree: $id_degree
                  id_company: $id_company
                  id_area_position: $id_area_position
                }
              }
            ) {
              opportunity {
                id
              }
            }
          }
        `,variables:{name:e,position:t,available_spaces:Number(i),type:r,start_date:o,end_date:l,end_process:c,student_selected:u,opportunity_type:p,years:g.toLocaleString(),id_degree:{add:h},id_company:{add:m},id_area_position:{add:_}}}).pipe((0,s.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onEditOpportunity(e,t,i,r,o,l,c,u,p,g,h,m,_,f,y,b,Z){return this.apollo.mutate({mutation:n.Ps`
          mutation updateOpportunity(
            $id: ID!
            $name: String!
            $position: String!
            $available_spaces: Float!
            $type: String!
            $start_date: Date!
            $end_date: Date!
            $end_process: Boolean!
            $student_selected: Boolean!
            $opportunity_type: Boolean!
            $years: String!
            $id_degree: DegreeRelationInput!
            $id_company: CompanyRelationInput!
            $id_area_position: Area_positionRelationInput!
          ) {
            updateOpportunity(
              input: {
                id: $id
                fields: {
                  name: $name
                  position: $position
                  available_spaces: $available_spaces
                  type: $type
                  start_date: $start_date
                  end_date: $end_date
                  end_process: $end_process
                  student_selected: $student_selected
                  opportunity_type: $opportunity_type
                  years: $years
                  id_degree: $id_degree
                  id_company: $id_company
                  id_area_position: $id_area_position
                }
              }
            ) {
              opportunity {
                id
              }
            }
          }
        `,variables:{id:e,name:t,position:i,available_spaces:Number(r),type:o,start_date:l,end_date:c,end_process:u,student_selected:p,opportunity_type:g,years:h.toLocaleString(),id_company:{remove:y,add:_},id_degree:{remove:b,add:m},id_area_position:{remove:Z,add:f}}}).pipe((0,s.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteOpportunity(e){return this.apollo.mutate({mutation:n.Ps`
          mutation deleteOpportunity($id: ID!) {
            deleteOpportunity(input: { id: $id }) {
              opportunity {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,s.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,o._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n._M),c.LFG(u.P),c.LFG(p.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},60758:function(e,t,i){i.d(t,{q:function(){return g}});var n=i(50752),r=i(94402),o=i(59193),a=i(40205),s=i(15257),l=i(5304),d=i(93342),c=i(37716),u=i(94270),p=i(1400);let g=(()=>{class e{constructor(e,t,i){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=i,this.table="student"}get(e=[],t=0,i=100){return(0,r.D)(this.supaBaseService.onSelectRequest(this.table,t,i,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}getFunctionView(e){return(0,r.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,s.q)(1),(0,d.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}insert(e){return(0,r.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}update(e,t){return(0,r.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}delete(e){return(0,r.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}buildQuery(e){let t,i=[];for(let n=0;n<e.length;n+=3)"relation"==e[n+2]?i.push(`${e[n]}:{have:{name:{matchesRegex:"${e[n+1]}"}}}`):"gender"==e[n+2]?(t=!!e[n+1].includes("M"),i.push(`${e[n]}:{equalTo:${t}}`)):i.push(`${e[n]}:{matchesRegex:"${e[n+1]}"}`);return`(where:{${i.toString()}})`}getStudents(e){return this.apollo.watchQuery({query:n.Ps`
          query students {
            students${e} {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  carnet
                  first_name
                  last_name
                  gender
                  year
                  id_degree {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}onCreateStudent(e,t,i,r,a,d){return this.apollo.mutate({mutation:n.Ps`
          mutation createStudent(
            $id_degree: DegreeRelationInput!
            $gender: Boolean!
            $carnet: String!
            $last_name: String!
            $first_name: String!
            $year: String!
          ) {
            createStudent(
              input: {
                fields: {
                  id_degree: $id_degree
                  gender: $gender
                  carnet: $carnet
                  last_name: $last_name
                  first_name: $first_name
                  year: $year
                }
              }
            ) {
              student {
                id
              }
            }
          }
        `,variables:{id_degree:{add:e},gender:t,carnet:i,last_name:r,first_name:a,year:d}}).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}onEditStudent(e,t,i,r,a,d,c,u){return this.apollo.mutate({mutation:n.Ps`
          mutation updateStudent(
            $id: ID!
            $id_degree: DegreeRelationInput!
            $gender: Boolean!
            $carnet: String!
            $last_name: String!
            $first_name: String!
            $year: String!
          ) {
            updateStudent(
              input: {
                id: $id
                fields: {
                  id_degree: $id_degree
                  gender: $gender
                  carnet: $carnet
                  last_name: $last_name
                  first_name: $first_name
                  year: $year
                }
              }
            ) {
              student {
                id
              }
            }
          }
        `,variables:{id:e,id_degree:{remove:t,add:i},gender:r,carnet:a,last_name:d,first_name:c,year:u}}).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}onDeleteStudent(e){return this.apollo.mutate({mutation:n.Ps`
          mutation deleteStudent($id: ID!) {
            deleteStudent(input: { id: $id }) {
              student {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),o.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n._M),c.LFG(u.P),c.LFG(p.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);