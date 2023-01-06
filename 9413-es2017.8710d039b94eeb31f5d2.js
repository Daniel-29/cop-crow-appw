"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9413],{36063:function(e,t,r){r.d(t,{$o:function(){return d},t7:function(){return c}});var a=r(37716),i=r(72458),n=r(16738);const o=r.n(n)()||n,s=new a.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function l(e,t){const r=Array(e);for(let a=0;a<e;a++)r[a]=t(a);return r}let c=(()=>{class e extends i._A{constructor(e,t){super(),this._options=t,this.setLocale(e||o.locale())}setLocale(e){super.setLocale(e);let t=o.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:l(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,r){const a=this._createMoment({year:e,month:t,date:r}).locale(this.locale);return a.isValid(),a}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,o.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return o.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return o.invalid()}_createMoment(e,t,r){const{strict:a,useUtc:i}=this._options||{};return i?o.utc(e,t,r,a):o(e,t,r,a)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(i.Ad,8),a.LFG(s,8))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();const d={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},19602:function(e,t,r){r.d(t,{y:function(){return g}});var a=r(39490),i=r(28288),n=r(37716),o=r(38583);function s(e,t){1&e&&(n.ynx(0),n.TgZ(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"div",2),n.Hsn(4,1),n.qZA(),n.BQk())}function l(e,t){1&e&&(n.TgZ(0,"div",4),n.Hsn(1,3),n.qZA()),2&e&&n.Q6J("@expandCollapse",void 0)}function c(e,t){if(1&e&&(n.ynx(0),n.Hsn(1,2),n.YNc(2,l,2,1,"div",3),n.BQk()),2&e){const e=n.oxw();n.xp6(2),n.Q6J("ngIf",e.expanded)}}const d=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],u=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let g=(()=>{class e{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,a.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,a.Ig)(e.flippable.currentValue))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(e,t){2&e&&n.Tol(t.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[n.TTD],ngContentSelectors:u,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(e,t){1&e&&(n.F$t(d),n.YNc(0,s,5,0,"ng-container",0),n.YNc(1,c,3,1,"ng-container",0)),2&e&&(n.Q6J("ngIf",t.flippable),n.xp6(1),n.Q6J("ngIf",!t.flippable))},directives:[o.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:i.L}}),e})()},25553:function(e,t,r){r.d(t,{J:function(){return a.J}});var a=r(18421)},18421:function(e,t,r){r.d(t,{J:function(){return a.J}}),r(19602);var a=r(33564)},9413:function(e,t,r){r.r(t),r.d(t,{AcademyMeetingModule:function(){return ee}});var a=r(38583),i=r(3679),n=r(37716),o=r(32489),s=r(1400),l=r(50752),c=r(94402),d=r(59193),u=r(40205),g=r(15257),p=r(5304),m=r(93342),f=r(94270);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="academy_meeting"}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)t.push("relation"==e[r+2]?`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`:`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${t.toString()}})`}getView(e=[],t=0,r=100){return(0,c.D)(this.supaBaseService.onSelectRequest("AcademyMeetingDegrees",t,r,"*",e)).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}getFunctionView(e,t,r="",a="",i="searchinview",n="AcademyMeetingDegrees"){return(0,c.D)(this.supaBaseService.onSelectFuntionView(i,n,e,t,r,a)).pipe((0,g.q)(1),(0,m.b)(e=>{if(null!=e.error)throw(0,u._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}getAcademyMeetings(e){return this.apollo.watchQuery({query:l.Ps`
          query listAcademyMeetings {
            academy_meetings${e} {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  description                
                  id_degree {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                  date
                }
              }
              count
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onCreateAcademyMeeting(e,t){return(0,c.D)(this.supaBaseService.onInsertRequest(this.table,{description:e,date:t})).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onInsertDegree(e,t){return(0,c.D)(this.supaBaseService.onInsertRequest("academy_meeting_degree",{id_academy_meeting:e,id_degree:t})).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onEditAcademyMeeting(e,t,r){return(0,c.D)(this.supaBaseService.onUpdateRequest(this.table,{description:t,date:r},e)).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onDeleteAcademyMeeting(e){return(0,c.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onDeleteDegrees(e){return(0,c.D)(this.supaBaseService.onDeleteMiddleTable("academy_meeting_degree",e,"id_academy_meeting")).pipe((0,g.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),d.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,u._)("error")}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(l._M),n.LFG(f.P),n.LFG(s.R))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=r(28456),Z=r(26927),v=r(1769),w=r(98295),x=r(67441),y=r(76627),_=r(49983),q=r(43220),A=r(51095),D=r(65939),T=r(99692),k=r(72458);function I(e,t){if(1&e&&(n.TgZ(0,"mat-option",61),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.Q6J("value",e.id),n.xp6(1),n.Oqu(e.name)}}function F(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe seleccionar una opcion!!"),n.qZA())}function M(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}function S(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}function U(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"mat-option",61),n._uU(2),n.qZA(),n.qZA()),2&e){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("value",e),n.xp6(1),n.Oqu(e.label)}}function J(e,t){if(1&e&&(n.ynx(0),n.YNc(1,U,3,2,"div",22),n.BQk()),2&e){const e=t.$implicit;n.xp6(1),n.Q6J("ngIf",1==e.searchable)}}function N(e,t){1&e&&n._UZ(0,"div")}function Q(e,t){1&e&&(n.TgZ(0,"span"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}function Y(e,t){if(1&e&&(n.TgZ(0,"mat-form-field",62),n._UZ(1,"mat-icon",21),n._UZ(2,"input",63),n._UZ(3,"mat-datepicker-toggle",26),n._UZ(4,"mat-datepicker",null,58),n.TgZ(6,"mat-error"),n.YNc(7,Q,2,0,"span",22),n.qZA(),n.qZA()),2&e){const e=n.MAs(5),t=n.oxw();n.Q6J("floatLabel","always"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:search"),n.xp6(1),n.Q6J("matDatepicker",e)("placeholder",t.Desde),n.xp6(1),n.Q6J("for",e),n.xp6(4),n.Q6J("ngIf",t.searchForm.get("value").hasError("required")&&t.searchForm.get("value").touched)}}function L(e,t){1&e&&(n.TgZ(0,"span"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}function O(e,t){if(1&e&&(n.TgZ(0,"mat-form-field",62),n._UZ(1,"mat-icon",21),n._UZ(2,"input",64),n.TgZ(3,"mat-error"),n.YNc(4,L,2,0,"span",22),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.Q6J("floatLabel","always"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:search"),n.xp6(3),n.Q6J("ngIf",e.searchForm.get("value").hasError("required")&&e.searchForm.get("value").touched)}}function C(e,t){if(1&e&&(n.ynx(0),n.TgZ(1,"th",50),n._uU(2),n.qZA(),n.BQk()),2&e){const e=t.$implicit;n.xp6(2),n.hij(" ",e.label," ")}}function E(e,t){if(1&e&&(n.ynx(0),n._uU(1),n._UZ(2,"br"),n.BQk()),2&e){const e=t.index,r=n.oxw().$implicit;n.xp6(1),n.hij(" ",r.id_degree.length>0?r.id_degree[e].name:""," ")}}function B(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tr",65),n.TgZ(1,"td",66),n.YNc(2,E,3,1,"ng-container",43),n.qZA(),n.TgZ(3,"td",67),n._uU(4),n.qZA(),n.TgZ(5,"td",66),n._uU(6),n.ALo(7,"date"),n.qZA(),n.TgZ(8,"td",66),n.TgZ(9,"div",68),n.TgZ(10,"button",69),n.NdJ("click",function(){const t=n.CHM(e).$implicit;return n.oxw().toggleDrawerOpen("leftDrawer",t)}),n.TgZ(11,"mat-icon",70),n.O4$(),n.TgZ(12,"svg",71),n._UZ(13,"path",72),n.qZA(),n.qZA(),n.kcU(),n.TgZ(14,"span",73),n._uU(15,"Editar"),n.qZA(),n.qZA(),n.TgZ(16,"button",74),n.NdJ("click",function(){const t=n.CHM(e).$implicit;return n.oxw().onDeleteRegistry(t.id)}),n.TgZ(17,"mat-icon",75),n.O4$(),n.TgZ(18,"svg",71),n._UZ(19,"path",76),n.qZA(),n.qZA(),n.kcU(),n.TgZ(20,"span",73),n._uU(21,"Eliminar"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit;n.xp6(2),n.Q6J("ngForOf",e.id_degree),n.xp6(2),n.hij(" ",e.description," "),n.xp6(2),n.hij(" ",n.xi3(7,3,e.date,"yyyy-MM-dd")," ")}}function R(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}function z(e,t){if(1&e&&(n.TgZ(0,"mat-option",61),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.Q6J("value",e.id),n.xp6(1),n.Oqu(e.name)}}function H(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe seleccionar una opcion!!"),n.qZA())}function $(e,t){1&e&&(n.TgZ(0,"mat-error"),n._uU(1,"Debe ingresar este campo!!"),n.qZA())}let P=(()=>{class e{constructor(e,t,r,a){this._fuseDrawerService=e,this._fuseConfirmationService=t,this.academyMeetingService=r,this.degreesService=a,this.fields=[{label:"Carrera",field:"id_degree",type:"json",subfield:null,searchable:!0},{label:"Descripci\xf3n del tema",field:"description",type:"ilike",subfield:null,searchable:!0},{label:"Fecha",field:"date",type:"date",subfield:null,searchable:!0,placeholder:"fecha"}],this.listRegistry=[],this.listDegrees=[],this.newForm=new i.cw({id_degree:new i.NI(null,[i.kI.required]),description:new i.NI("",[i.kI.minLength(3),i.kI.required]),date:new i.NI(new Date,[i.kI.minLength(3),i.kI.required])}),this.searchForm=new i.cw({field:new i.NI(this.fields[0],[i.kI.minLength(1),i.kI.required]),value:new i.NI("",[i.kI.minLength(1),i.kI.required])}),this.editForm=new i.cw({id:new i.NI("",[i.kI.minLength(3),i.kI.required]),id_degree:new i.NI(null,[i.kI.required]),description:new i.NI("",[i.kI.minLength(3),i.kI.required]),date:new i.NI("",[i.kI.minLength(3),i.kI.required])}),this.pagination={length:100,pageSize:10,pageIndex:0,pageSizeOptions:[5,10,25,50,100],showFirstLastButtons:!1},this.onLoadMainData(),this.onLoadDegrees()}handlePageEvent(e){this.pagination.length=e.length,this.pagination.pageSize=e.pageSize,this.pagination.pageIndex=e.pageIndex,this.onLoadMainData()}onLoadMainData(){this.academyMeetingService.getView([],this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize).subscribe(e=>{this.listRegistry=e.data})}findInvalidControls(){const e=[],t=this.newForm.controls;for(const r in t)t[r].invalid&&e.push(r);return e}onSearchMainData(){if(this.searchForm.valid){const e={field:this.searchForm.controls.field.value.field,value:this.searchForm.controls.value.value,type:this.searchForm.controls.field.value.type,subfield:this.searchForm.controls.field.value.subfield};"json"==e.type?(this.pagination.pageIndex=0,this.academyMeetingService.getFunctionView(e.field,e.value).subscribe(e=>{this.listRegistry=e.data[0].value.value,this.pagination.length=this.listRegistry.length})):this.academyMeetingService.getView([e],this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize).subscribe(e=>{this.listRegistry=e.data})}}onLoadDegrees(){this.degreesService.get().subscribe(e=>{this.listDegrees=e.data})}ngOnInit(){}onEditRegistry(){this.editForm.valid&&this.academyMeetingService.onDeleteDegrees(this.editForm.controls.id.value).subscribe(e=>{for(let t=0;t<this.editForm.controls.id_degree.value.length;t++)this.academyMeetingService.onInsertDegree(this.editForm.controls.id.value,this.editForm.controls.id_degree.value[t]).subscribe(e=>{this.onLoadMainData()});this.academyMeetingService.onEditAcademyMeeting(this.editForm.controls.id.value,this.editForm.controls.description.value,this.editForm.controls.date.value).subscribe(e=>{this.academyMeetingService.onSuccessDialog("actualizo")})})}onNewRegistry(){this.newForm.valid&&this.academyMeetingService.onCreateAcademyMeeting(this.newForm.controls.description.value,this.newForm.controls.date.value).subscribe(e=>{this.id=e.data[0].id.toString();for(let t=0;t<this.newForm.controls.id_degree.value.length;t++)this.academyMeetingService.onInsertDegree(this.id,this.newForm.controls.id_degree.value[t]).subscribe(e=>{this.newForm.reset(),this.onLoadMainData()});this.academyMeetingService.onSuccessDialog("creo")})}onDeleteRegistry(e){this._fuseConfirmationService.open({title:"Alerta",message:"Desea eliminar este registro?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"warning"},actions:{confirm:{show:!0,label:"Si",color:"primary"},cancel:{show:!0,label:"No"}},dismissible:!1}).afterClosed().subscribe(t=>{"confirmed"==t&&this.academyMeetingService.onDeleteDegrees(e).subscribe(t=>{this.academyMeetingService.onDeleteAcademyMeeting(e).subscribe(e=>{this.onLoadMainData()})})})}toggleDrawerOpen(e,t){if(t){this.editForm.controls.id.setValue(t.id);let e=[];t.id_degree.length>0&&t.id_degree.map(t=>{e.push(t.id)}),this.editForm.controls.id_degree.setValue(e),this.editForm.controls.description.setValue(t.description),this.editForm.controls.date.setValue(t.date)}this._fuseDrawerService.getComponent(e).toggle()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o._),n.Y36(s.R),n.Y36(h),n.Y36(b.q))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-academy-meeting"]],decls:129,vars:39,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","pt-6","sm:px-4","sm:pb-4","relative","flex","overflow-hidden"],[1,"w-3/5","make-drawer-content-scrollable",3,"name","opened","mode"],[1,"flex","justify-center","h-400","min-h-400","max-h-400","border-2","border-dashed","border-gray-300","p-6"],[1,"ng-untouched","ng-pristine","ng-valid",3,"formGroup"],[1,"flex","flex-col","mt-2","bg-card","shadow","rounded"],[1,"p-8","bg-gray-50","dark:bg-gray-700"],[1,"text-lg","font-medium"],[1,"text-secondary"],["role","separator","aria-orientation","horizontal",1,"mat-divider","mat-divider-horizontal"],[1,"mt-4","p-2","pb-2"],[1,""],[1,"fuse-mat-no-subscript","w-full"],["formControlName","id_degree","multiple",""],[3,"value",4,"ngFor","ngForOf"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[4,"ngIf"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","formControlName","description",3,"placeholder"],["matInput","","formControlName","date",3,"matDatepicker","placeholder"],["matSuffix","",3,"for"],["newDate",""],[1,"flex","items-center","justify-end","mt-10"],["mat-button","",1,"mat-focus-indicator","mat-button","mat-button-base",3,"click"],[1,"mat-button-wrapper"],["matripple","","ng-reflect-disabled","false","ng-reflect-centered","false","ng-reflect-trigger","[object HTMLButtonElement]",1,"mat-ripple","mat-button-ripple"],[1,"mat-button-focus-overlay"],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary"],["type","submit",1,"mat-button-wrapper",3,"click"],[1,"w-full","h-full",3,"animationDuration"],["label","Ver registros"],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"min-w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],["class","bg-white border-b hover:bg-gray-300",4,"ngFor","ngForOf"],[1,"mt-14"],["aria-label","Select page",1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex","page"],["label","Agregar"],[1,"px-4","w-full","border-2","border-dashed","border-gray-300","rounded-2xl"],[1,"flex","flex-col","mt-8","bg-card","shadow","rounded","overflow-hidden"],[1,"mt-8","p-8","pb-4"],["editDate",""],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary",3,"click"],["type","none",1,"mat-button-wrapper"],[3,"value"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matInput","","formControlName","value",3,"matDatepicker","placeholder"],["placeholder","Search by title or description","matInput","","formControlName","value"],[1,"bg-white","border-b","hover:bg-gray-300"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"text-sm","text-gray-900","font-light"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-amber-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","mail","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","text-hint","mat-icon-no-color"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"],[1,"ml-2"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-red-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","phone","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","text-hint","mat-icon-no-color"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div"),n.TgZ(5,"a",4),n._uU(6,"Orientaci\xf3n Estudiantil"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"div",5),n.TgZ(8,"h2",6),n._uU(9," Reunion con academia "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"div",7),n.TgZ(11,"fuse-drawer",8),n.TgZ(12,"div",9),n.TgZ(13,"form",10),n.TgZ(14,"div",11),n.TgZ(15,"div",12),n.TgZ(16,"p",13),n._uU(17," Formulario de modificaci\xf3n de reunion con academia "),n.qZA(),n.TgZ(18,"p",14),n._uU(19,"Rellene los campos a continuacion."),n.qZA(),n.qZA(),n._UZ(20,"mat-divider",15),n.TgZ(21,"div",16),n.TgZ(22,"div",17),n.TgZ(23,"mat-form-field",18),n.TgZ(24,"mat-label"),n._uU(25,"Carrera:"),n.qZA(),n.TgZ(26,"mat-select",19),n.YNc(27,I,2,2,"mat-option",20),n.qZA(),n._UZ(28,"mat-icon",21),n.qZA(),n.YNc(29,F,2,0,"mat-error",22),n.TgZ(30,"mat-form-field",18),n.TgZ(31,"mat-label"),n._uU(32,"Descripcion:"),n.qZA(),n._UZ(33,"mat-icon",23),n._UZ(34,"input",24),n.qZA(),n.YNc(35,M,2,0,"mat-error",22),n.TgZ(36,"mat-form-field",18),n.TgZ(37,"mat-label"),n._uU(38,"Fecha :"),n.qZA(),n._UZ(39,"input",25),n._UZ(40,"mat-datepicker-toggle",26),n._UZ(41,"mat-datepicker",null,27),n.qZA(),n.YNc(43,S,2,0,"mat-error",22),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"div",28),n.TgZ(45,"button",29),n.NdJ("click",function(){return t.toggleDrawerOpen("leftDrawer")}),n.TgZ(46,"span",30),n._uU(47," Cancelar "),n.qZA(),n._UZ(48,"span",31),n._UZ(49,"span",32),n.qZA(),n.TgZ(50,"button",33),n.TgZ(51,"button",34),n.NdJ("click",function(){return t.onEditRegistry(),t.toggleDrawerOpen("leftDrawer")}),n._uU(52," Guardar"),n.qZA(),n._UZ(53,"span",31),n._UZ(54,"span",32),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(55,"mat-tab-group",35),n.TgZ(56,"mat-tab",36),n.TgZ(57,"div",37),n.TgZ(58,"form",38),n.TgZ(59,"button",39),n.NdJ("click",function(){return t.onLoadMainData()}),n.TgZ(60,"span",40),n.TgZ(61,"span"),n._uU(62,"Reset"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(63,"mat-form-field",41),n.TgZ(64,"mat-select",42),n.YNc(65,J,2,1,"ng-container",43),n.qZA(),n.qZA(),n.YNc(66,N,1,0,"div",44),n.YNc(67,Y,8,6,"ng-template",null,45,n.W1O),n.YNc(69,O,5,3,"ng-template",null,46,n.W1O),n.TgZ(71,"button",47),n.NdJ("click",function(){return t.onSearchMainData()}),n.TgZ(72,"span",40),n.TgZ(73,"span"),n._uU(74,"Buscar"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.ynx(75),n.TgZ(76,"table",48),n.TgZ(77,"thead",49),n.TgZ(78,"tr"),n.YNc(79,C,3,1,"ng-container",43),n.TgZ(80,"th",50),n._uU(81," Acciones "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(82,"tbody"),n.YNc(83,B,22,6,"tr",51),n.qZA(),n.qZA(),n.TgZ(84,"div",52),n.TgZ(85,"mat-paginator",53),n.NdJ("page",function(e){return t.handlePageEvent(e)}),n.qZA(),n.qZA(),n.BQk(),n.qZA(),n.qZA(),n.TgZ(86,"mat-tab",54),n.TgZ(87,"div",55),n.TgZ(88,"form",10),n.TgZ(89,"div",56),n.TgZ(90,"div",12),n.TgZ(91,"p",13),n._uU(92," Formulario de regitro de reunion con academia "),n.qZA(),n.TgZ(93,"p",14),n._uU(94,"Rellene los campos a continuacion."),n.qZA(),n.qZA(),n._UZ(95,"mat-divider",15),n.TgZ(96,"div",57),n.TgZ(97,"mat-form-field",18),n.TgZ(98,"mat-label"),n._uU(99),n.qZA(),n._UZ(100,"input",25),n._UZ(101,"mat-datepicker-toggle",26),n._UZ(102,"mat-datepicker",null,58),n.qZA(),n.YNc(104,R,2,0,"mat-error",22),n.TgZ(105,"mat-form-field",18),n.TgZ(106,"mat-label"),n._uU(107,"Carrera:"),n.qZA(),n.TgZ(108,"mat-select",19),n.YNc(109,z,2,2,"mat-option",20),n.qZA(),n._UZ(110,"mat-icon",21),n.qZA(),n.YNc(111,H,2,0,"mat-error",22),n.TgZ(112,"mat-form-field",18),n.TgZ(113,"mat-label"),n._uU(114,"Descripcion del tema:"),n.qZA(),n._UZ(115,"mat-icon",23),n._UZ(116,"input",24),n.qZA(),n.YNc(117,$,2,0,"mat-error",22),n.qZA(),n.qZA(),n.TgZ(118,"div",28),n.TgZ(119,"button",29),n.NdJ("click",function(){return t.newForm.reset()}),n.TgZ(120,"span",30),n._uU(121," Cancelar "),n.qZA(),n._UZ(122,"span",31),n._UZ(123,"span",32),n.qZA(),n.TgZ(124,"button",59),n.NdJ("click",function(){return t.onNewRegistry()}),n.TgZ(125,"span",60),n._uU(126,"Agregar"),n.qZA(),n._UZ(127,"span",31),n._UZ(128,"span",32),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e){const e=n.MAs(42),r=n.MAs(68),a=n.MAs(70),i=n.MAs(103);n.xp6(11),n.Q6J("name","leftDrawer")("opened",!1)("mode","side"),n.xp6(2),n.Q6J("formGroup",t.editForm),n.xp6(14),n.Q6J("ngForOf",t.listDegrees),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:location-marker"),n.xp6(1),n.Q6J("ngIf",t.editForm.get("id_degree").hasError("required")&&t.editForm.get("id_degree").touched),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:briefcase"),n.xp6(1),n.Q6J("placeholder","Descripcion"),n.xp6(1),n.Q6J("ngIf",t.editForm.get("description").hasError("required")&&t.editForm.get("description").touched),n.xp6(4),n.Q6J("matDatepicker",e)("placeholder","Fecha"),n.xp6(1),n.Q6J("for",e),n.xp6(3),n.Q6J("ngIf",t.editForm.get("date").hasError("required")&&t.editForm.get("date").touched),n.xp6(12),n.Q6J("animationDuration","0"),n.xp6(3),n.Q6J("formGroup",t.searchForm),n.xp6(7),n.Q6J("ngForOf",t.fields),n.xp6(1),n.Q6J("ngIf","date"==t.searchForm.controls.field.value.field)("ngIfThen",r)("ngIfElse",a),n.xp6(13),n.Q6J("ngForOf",t.fields),n.xp6(4),n.Q6J("ngForOf",t.listRegistry),n.xp6(2),n.Q6J("length",t.pagination.length)("pageSize",t.pagination.pageSize)("showFirstLastButtons",t.pagination.showFirstLastButtons)("pageSizeOptions",t.pagination.pageSizeOptions)("pageIndex",t.pagination.pageIndex),n.xp6(3),n.Q6J("formGroup",t.newForm),n.xp6(11),n.hij("",null==t.fields[2]?null:t.fields[2].label,":"),n.xp6(1),n.Q6J("matDatepicker",i)("placeholder",null==t.fields[2]?null:t.fields[2].placeholder),n.xp6(1),n.Q6J("for",i),n.xp6(3),n.Q6J("ngIf",t.newForm.get("date").hasError("required")&&t.newForm.get("date").touched),n.xp6(5),n.Q6J("ngForOf",t.listDegrees),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:location-marker"),n.xp6(1),n.Q6J("ngIf",t.newForm.get("id_degree").hasError("required")&&t.newForm.get("id_degree").touched),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:briefcase"),n.xp6(1),n.Q6J("placeholder","Descripcion del tema tratado"),n.xp6(1),n.Q6J("ngIf",t.newForm.get("description").hasError("required")&&t.newForm.get("description").touched)}},directives:[Z.F,i._Y,i.JL,i.sg,v.d,w.KE,w.hX,x.gD,i.JJ,i.u,a.sg,y.Hw,w.qo,a.O5,_.Nt,i.Fj,q.hl,q.nW,w.R9,q.Mq,A.lW,D.SP,D.uX,T.NW,k.ey,w.TO],pipes:[a.uU],styles:[""]}),e})();var V=r(36063),j=r(11494),W=r(63423),G=r(25553),K=r(82120);const X=[{path:"",component:P}];let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[{provide:k._A,useClass:V.t7,deps:[k.Ad]},{provide:k.sG,useValue:V.$o}],imports:[[a.ez,W.Bz.forChild(X),G.J,y.Ps,D.Nh,v.t,w.lN,_.c,K.k,x.LD,i.UX,i.u5,j.JX,A.ot,q.FA,T.TU]]}),e})()},28456:function(e,t,r){r.d(t,{q:function(){return g}});var a=r(50752),i=r(94402),n=r(59193),o=r(40205),s=r(15257),l=r(5304),c=r(37716),d=r(94270),u=r(1400);let g=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="degree"}get(e="*",t=null,r=null){return(0,i.D)(this.supaBaseService.onSelectRequest(this.table)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),n.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,{name:e})).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),n.E)))}update(e,t){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,{name:t},e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),n.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),n.E)))}getDegrees(e){return this.apollo.watchQuery({query:a.Ps`
          query listDegrees {
            degrees {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  name
                }
              }
              count
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,s.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),n.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,o._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(a._M),c.LFG(d.P),c.LFG(u.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);