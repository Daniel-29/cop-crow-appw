!function(){"use strict";var e,n;function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[2835],{6657:function(e,n,t){t.d(n,{_:function(){return _}});var o=t(3679),a=t(22238),s=t(37716),c=t(53817),l=t(51095),u=t(98295),d=t(67441),f=t(38583),p=t(76627),h=t(49983),m=t(72458);function g(e,n){if(1&e&&(s.ynx(0),s.TgZ(1,"mat-option",20),s._uU(2),s.qZA(),s.BQk()),2&e){var t=n.$implicit;s.xp6(1),s.Q6J("value",t),s.xp6(1),s.Oqu(t.label)}}function v(e,n){1&e&&(s.TgZ(0,"span"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function y(e,n){if(1&e&&(s.ynx(0),s.TgZ(1,"th",16),s._uU(2),s.qZA(),s.BQk()),2&e){var t=n.$implicit;s.xp6(2),s.hij(" ",t.label," ")}}var b=function(e,n){return{"bg-gray-500":e,"bg-white border-b hover:bg-gray-300":n}};function Z(e,n){if(1&e){var t=s.EpF();s.ynx(0),s.TgZ(1,"tr",21),s.TgZ(2,"td",22),s._uU(3),s.qZA(),s.TgZ(4,"td",23),s._uU(5),s.qZA(),s.TgZ(6,"td",23),s._uU(7),s.qZA(),s.TgZ(8,"td",23),s._uU(9),s.qZA(),s.TgZ(10,"td",23),s._uU(11),s.qZA(),s.TgZ(12,"td",23),s._uU(13),s.qZA(),s.TgZ(14,"td",23),s._uU(15),s.qZA(),s.TgZ(16,"td",23),s._uU(17),s.qZA(),s.TgZ(18,"td",23),s.TgZ(19,"div",24),s.TgZ(20,"button",25),s.NdJ("click",function(){var e=s.CHM(t).$implicit;return s.oxw().onSelectChange(e.node)}),s.TgZ(21,"mat-icon"),s._uU(22,"select_all"),s.qZA(),s.TgZ(23,"span",26),s._uU(24,"Seleccionar"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&e){var i=n.$implicit,o=s.oxw();s.xp6(1),s.Q6J("ngClass",s.WLB(9,b,i.node.id==o.companyId,i.node.id!=o.companyId)),s.xp6(2),s.hij(" ",i.node.code," "),s.xp6(2),s.hij(" ",i.node.name," "),s.xp6(2),s.hij(" ",i.node.contact," "),s.xp6(2),s.hij(" ",i.node.position," "),s.xp6(2),s.hij(" ",i.node.email," "),s.xp6(2),s.hij(" ",i.node.phone_number," "),s.xp6(2),s.hij(" ",i.node.id_institution_type.edges.length>0?i.node.id_institution_type.edges[0].node.name:""," "),s.xp6(2),s.hij(" ",i.node.id_institution_clasification.edges.length>0?i.node.id_institution_clasification.edges[0].node.name:""," ")}}var q,_=((q=function(){function e(n,t,r){var a;i(this,e),this.dialogRef=n,this.data=t,this.companyService=r,this.listRegistry=[],this.fields=[{label:"Codigo",field:"code",type:"field",searchable:!0,placeholder:"Codigo"},{label:"Nombre",field:"name",type:"field",searchable:!0,placeholder:"Nombre"},{label:"Contacto",field:"contact",type:"field",searchable:!0,placeholder:"Contacto"},{label:"Posicion",field:"position",type:"field",searchable:!0,placeholder:"Posicion"},{label:"Telefono",field:"phone_number",type:"field",searchable:!0,placeholder:"Telefono"},{label:"Correo",field:"email",type:"field",searchable:!0,placeholder:"Correo"},{label:"Tipo",field:"id_institution_type",type:"relation"},{label:"Clasificacion",field:"id_institution_clasification",type:"relation"}],this.companyId=null,this.company=null,this.isSelected=!1,this.searchForm=new o.cw({field:new o.NI(null===(a=this.fields[0])||void 0===a?void 0:a.field,[o.kI.minLength(1),o.kI.required]),value:new o.NI("",[o.kI.minLength(1),o.kI.required])}),null!=t.company&&(this.companyId=t.company),this.onLoadMainData()}return r(e,[{key:"onLoadMainData",value:function(){var e=this;this.companyService.getCompanies("").subscribe(function(n){e.listRegistry=n.data.companies.edges})}},{key:"onSearchMainData",value:function(){var e=this;if(this.searchForm.valid){var n=this.companyService.buildQuery([this.searchForm.controls.field.value.field,this.searchForm.controls.value.value,this.searchForm.controls.field.value.type]);this.companyService.getCompanies(n).subscribe(function(n){e.listRegistry=n.data.companies.edges})}}},{key:"onSelectChange",value:function(e){e.id===this.companyId?(this.isSelected=!1,this.companyId=null,this.company=null):(this.companyId=e.id,this.isSelected=!0,this.company=e)}},{key:"onSaveSelection",value:function(){this.dialogRef.close({code:"onSaveSelection",company:this.company})}},{key:"onCancelSelection",value:function(){this.dialogRef.close({code:"onSelectionCancel",company:this.company})}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||q)(s.Y36(a.so),s.Y36(a.WI),s.Y36(c.J))},q.\u0275cmp=s.Xpm({type:q,selectors:[["app-select-company"]],decls:37,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","","formControlName","value"],[4,"ngIf"],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"min-w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[3,"value"],[3,"ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-blue-500",3,"click"],[1,"ml-2"]],template:function(e,n){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"h2",0),s._uU(2,"Seleccion de empresa:"),s.qZA(),s.TgZ(3,"div",1),s.ynx(4),s.TgZ(5,"div",2),s.TgZ(6,"form",3),s.TgZ(7,"button",4),s.NdJ("click",function(){return n.onLoadMainData()}),s.TgZ(8,"span",5),s.TgZ(9,"span"),s._uU(10,"Reset"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"mat-form-field",6),s.TgZ(12,"mat-select",7),s.YNc(13,g,3,2,"ng-container",8),s.qZA(),s.qZA(),s.TgZ(14,"mat-form-field",9),s._UZ(15,"mat-icon",10),s._UZ(16,"input",11),s.TgZ(17,"mat-error"),s.YNc(18,v,2,0,"span",12),s.qZA(),s.qZA(),s.TgZ(19,"button",13),s.NdJ("click",function(){return n.onSearchMainData()}),s.TgZ(20,"span",5),s.TgZ(21,"span"),s._uU(22,"Buscar"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.ynx(23),s.TgZ(24,"table",14),s.TgZ(25,"thead",15),s.TgZ(26,"tr"),s.YNc(27,y,3,1,"ng-container",8),s.TgZ(28,"th",16),s._uU(29," Acciones "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(30,"tbody"),s.YNc(31,Z,25,12,"ng-container",8),s.qZA(),s.qZA(),s.BQk(),s.qZA(),s.BQk(),s.TgZ(32,"div",17),s.TgZ(33,"button",18),s.NdJ("click",function(){return n.onSaveSelection()}),s._uU(34," Save "),s.qZA(),s.TgZ(35,"button",19),s.NdJ("click",function(){return n.onCancelSelection()}),s._uU(36," Cancel "),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(6),s.Q6J("formGroup",n.searchForm),s.xp6(7),s.Q6J("ngForOf",n.fields),s.xp6(1),s.Q6J("floatLabel","always"),s.xp6(1),s.Q6J("svgIcon","heroicons_solid:search"),s.xp6(3),s.Q6J("ngIf",n.searchForm.get("value").hasError("required")&&n.searchForm.get("value").touched),s.xp6(9),s.Q6J("ngForOf",n.fields),s.xp6(4),s.Q6J("ngForOf",n.listRegistry),s.xp6(2),s.Q6J("disabled",!n.isSelected))},directives:[a.uh,a.xY,o._Y,o.JL,o.sg,l.lW,u.KE,d.gD,o.JJ,o.u,f.sg,p.Hw,u.qo,h.Nt,o.Fj,u.TO,f.O5,m.ey,f.mk],styles:[""]}),q)},53817:function(n,o,a){a.d(o,{J:function(){return v}});var s,c=a(50752),l=a(59193),u=a(94402),d=a(40205),f=a(15257),p=a(5304),h=a(37716),m=a(94270),g=a(1400),v=((s=function(){function n(e,t,o){i(this,n),this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=o,this.table="company"}return r(n,[{key:"getCompanies",value:function(n){var i=this;return this.apollo.watchQuery({query:c.Ps(e||(e=t(["\n          query listCompanies {\n            companies"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  name\n                  code\n                  contact\n                  position\n                  email\n                  phone_number\n                  id_institution_type {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                  id_institution_clasification {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              count\n            }\n          }\n        "])),n),fetchPolicy:"network-only"}).valueChanges.pipe((0,f.q)(1),(0,p.K)(function(e,n){return i.errorHandle(e),l.E}))}},{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,u.D)(this.supaBaseService.onSelectRequest(this.table,t,i,"\n    *, \n    id_institution_type!inner(*), \n    id_institution_clasification!inner(*)\n    ",n)).pipe((0,f.q)(1),(0,p.K)(function(n,t){return e.errorHandle(n),l.E}))}},{key:"getClasificationCompany",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,u.D)(this.supaBaseService.onSelectRequest("institution_clasification",t,i,"\n    *\n    ",n)).pipe((0,f.q)(1),(0,p.K)(function(n,t){return e.errorHandle(n),l.E}))}},{key:"getTypesCompany",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,u.D)(this.supaBaseService.onSelectRequest("institution_type",t,i,"\n    *\n    ",n)).pipe((0,f.q)(1),(0,p.K)(function(n,t){return e.errorHandle(n),l.E}))}},{key:"insert",value:function(e){var n=this;return(0,u.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,f.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),l.E}))}},{key:"update",value:function(e,n){var t=this;return(0,u.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,f.q)(1),(0,p.K)(function(e,n){return t.errorHandle(e),l.E}))}},{key:"delete",value:function(e){var n=this;return(0,u.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,f.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),l.E}))}},{key:"buildQuery",value:function(e){for(var n=[],t=0;t<e.length;t+=3)n.push("relation"==e[t+2]?"".concat(e[t],':{have:{name:{matchesRegex:"').concat(e[t+1],'"}}}'):"".concat(e[t],':{matchesRegex:"').concat(e[t+1],'"}'));return"(where:{".concat(n.toString(),"})")}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,d._)("error")}}]),n}()).\u0275fac=function(e){return new(e||s)(h.LFG(c._M),h.LFG(m.P),h.LFG(g.R))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},28456:function(e,o,a){a.d(o,{q:function(){return v}});var s,c=a(50752),l=a(94402),u=a(59193),d=a(40205),f=a(15257),p=a(5304),h=a(37716),m=a(94270),g=a(1400),v=((s=function(){function e(n,t,o){i(this,e),this.apollo=n,this.supaBaseService=t,this._fuseConfirmationService=o,this.table="degree"}return r(e,[{key:"get",value:function(){var e=this;return(0,l.D)(this.supaBaseService.onSelectRequest(this.table)).pipe((0,f.q)(1),(0,p.K)(function(n,t){return e.errorHandle(n),u.E}))}},{key:"insert",value:function(e){var n=this;return(0,l.D)(this.supaBaseService.onInsertRequest(this.table,{name:e})).pipe((0,f.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),u.E}))}},{key:"update",value:function(e,n){var t=this;return(0,l.D)(this.supaBaseService.onUpdateRequest(this.table,{name:n},e)).pipe((0,f.q)(1),(0,p.K)(function(e,n){return t.errorHandle(e),u.E}))}},{key:"delete",value:function(e){var n=this;return(0,l.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,f.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),u.E}))}},{key:"getDegrees",value:function(e){var i=this;return this.apollo.watchQuery({query:c.Ps(n||(n=t(["\n          query listDegrees {\n            degrees {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  name\n                }\n              }\n              count\n            }\n          }\n        "]))),fetchPolicy:"network-only"}).valueChanges.pipe((0,f.q)(1),(0,p.K)(function(e,n){return i.errorHandle(e),u.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,d._)("error")}}]),e}()).\u0275fac=function(e){return new(e||s)(h.LFG(c._M),h.LFG(m.P),h.LFG(g.R))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)}}])}();