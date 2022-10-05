"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[7805],{36063:function(e,t,n){n.d(t,{$o:function(){return c},t7:function(){return d}});var r=n(37716),s=n(72458),i=n(16738);const a=n.n(i)()||i,o=new r.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function l(e,t){const n=Array(e);for(let r=0;r<e;r++)n[r]=t(r);return n}let d=(()=>{class e extends s._A{constructor(e,t){super(),this._options=t,this.setLocale(e||a.locale())}setLocale(e){super.setLocale(e);let t=a.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:l(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,n){const r=this._createMoment({year:e,month:t,date:n}).locale(this.locale);return r.isValid(),r}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,a.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return a.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return a.invalid()}_createMoment(e,t,n){const{strict:r,useUtc:s}=this._options||{};return s?a.utc(e,t,n,r):a(e,t,n,r)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(s.Ad,8),r.LFG(o,8))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();const c={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},55563:function(e,t,n){n.d(t,{s:function(){return u}});var r=n(3679),s=n(22238),i=n(37716),a=n(60758),o=n(38583),l=n(51095);function d(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"th",5),i._uU(2),i.qZA(),i.BQk()),2&e){const e=t.$implicit;i.xp6(2),i.hij(" ",e.label," ")}}function c(e,t){if(1&e){const e=i.EpF();i.ynx(0),i.TgZ(1,"tr"),i.TgZ(2,"td",9),i._uU(3),i.qZA(),i.TgZ(4,"td",10),i._uU(5),i.qZA(),i.TgZ(6,"td",10),i._uU(7),i.qZA(),i.TgZ(8,"td",10),i._uU(9),i.qZA(),i.TgZ(10,"td",10),i._uU(11),i.qZA(),i.TgZ(12,"td",10),i._uU(13),i.qZA(),i.TgZ(14,"td",10),i.TgZ(15,"div",11),i.TgZ(16,"input",12),i.NdJ("change",function(t){const n=i.CHM(e).$implicit;return i.oxw().onSelectChange(n,t)}),i.qZA(),i.TgZ(17,"label",13),i._uU(18," Seleccionar "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.BQk()}if(2&e){const e=t.$implicit,n=i.oxw();i.xp6(3),i.hij(" ",e.carnet," "),i.xp6(2),i.hij(" ",e.first_name," "),i.xp6(2),i.hij(" ",e.last_name," "),i.xp6(2),i.hij(" ",e.gender?"Masculino":"Femenino"," "),i.xp6(2),i.hij(" ",e.year," "),i.xp6(2),i.hij(" ",e.id_degree.name," "),i.xp6(3),i.Q6J("checked",n.onCheck(e.id,e))}}let u=(()=>{class e{constructor(e,t,n){var s;this.dialogRef=e,this.data=t,this.studentsService=n,this.listRegistry=[],this.fields=[{label:"carnet",field:"carnet"},{label:"first_name",field:"first_name"},{label:"last_name",field:"last_name"},{label:"gender",field:"gender"},{label:"year",field:"year"},{label:"id_degree",field:"id_degree"}],this.studentId=null,this.student=[],this.studentsId=[],this.isSelected=!1,this.listCheck=[],this.check=!1,this.searchForm=new r.cw({field:new r.NI(null===(s=this.fields[0])||void 0===s?void 0:s.field,[r.kI.minLength(1),r.kI.required]),value:new r.NI("",[r.kI.minLength(1),r.kI.required])}),null!=t.studentVal&&(this.listCheck=t.studentVal,this.studentsId=t.studentVal),null!=t.studentObj&&(this.student=t.studentObj),this.onLoadMainData()}onLoadMainData(){this.studentsService.get().subscribe(e=>{this.listRegistry=e.data})}onSearchMainData(){if(this.searchForm.valid){const e=this.studentsService.buildQuery([this.searchForm.controls.field.value,this.searchForm.controls.value.value]);this.studentsService.getStudents(e).subscribe(e=>{this.listRegistry=e.data.students.edges})}}onSelectChange(e,t){t.target.checked?(this.isSelected=!0,this.student.push(e),this.studentsId.push(e.id)):(this.isSelected=!0,this.studentId=e.id,this.student=this.student.filter(e=>e.id!==this.studentId),this.studentsId=this.studentsId.filter(e=>e!==this.studentId))}onSaveSelection(){this.dialogRef.close({code:"onSaveSelection",student:this.student,studentsId:this.studentsId})}onCancelSelection(){this.dialogRef.close({code:"onSelectionCancel",student:this.student,studentsId:this.studentsId})}onCheck(e,t){this.check=!1;for(let n=0;n<this.listCheck.length;n++)e==this.listCheck[n]&&(this.check=!0);return this.check}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(s.so),i.Y36(s.WI),i.Y36(a.q))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-select-students"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"min-w-full","text-center","max-h-90"],[1,"border-b","bg-gray-800"],[4,"ngFor","ngForOf"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"form-check"],["type","checkbox","value","","id","flexCheckChecked","ng-model","students.selected",1,"form-check-input","appearance-none","h-4","w-4","border","border-gray-300","rounded-sm","bg-white","checked:bg-blue-600","checked:border-blue-600","focus:outline-none","transition","duration-200","mt-1","align-top","bg-no-repeat","bg-center","bg-contain","float-left","mr-2","cursor-pointer",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"]],template:function(e,t){1&e&&(i.TgZ(0,"div"),i.TgZ(1,"h2",0),i._uU(2,"Patient Select:"),i.qZA(),i.TgZ(3,"div",1),i.ynx(4),i.TgZ(5,"table",2),i.TgZ(6,"thead",3),i.TgZ(7,"tr"),i.YNc(8,d,3,1,"ng-container",4),i.TgZ(9,"th",5),i._uU(10," actions "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"tbody"),i.YNc(12,c,19,7,"ng-container",4),i.qZA(),i.qZA(),i.BQk(),i.TgZ(13,"div",6),i.TgZ(14,"button",7),i.NdJ("click",function(){return t.onSaveSelection()}),i._uU(15," Save "),i.qZA(),i.TgZ(16,"button",8),i.NdJ("click",function(){return t.onCancelSelection()}),i._uU(17," Cancel "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(8),i.Q6J("ngForOf",t.fields),i.xp6(4),i.Q6J("ngForOf",t.listRegistry),i.xp6(2),i.Q6J("disabled",!t.isSelected))},directives:[s.uh,s.xY,o.sg,l.lW],styles:[""]}),e})()},80496:function(e,t,n){n.d(t,{j:function(){return u}});var r=n(38583),s=n(3679),i=n(51095),a=n(22238),o=n(98295),l=n(76627),d=n(67441),c=n(37716);let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,a.Is,s.u5,s.UX,o.lN,d.LD,l.Ps,i.ot]]}),e})()},60758:function(e,t,n){n.d(t,{q:function(){return g}});var r=n(50752),s=n(94402),i=n(59193),a=n(40205),o=n(15257),l=n(5304),d=n(93342),c=n(37716),u=n(94270),h=n(1400);let g=(()=>{class e{constructor(e,t,n){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=n,this.table="student"}get(e=[],t=0,n=100){return(0,s.D)(this.supaBaseService.onSelectRequest(this.table,t,n,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}getFunctionView(e){return(0,s.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,o.q)(1),(0,d.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}insert(e){return(0,s.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}update(e,t){return(0,s.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}delete(e){return(0,s.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}buildQuery(e){let t,n=[];for(let r=0;r<e.length;r+=3)"relation"==e[r+2]?n.push(`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`):"gender"==e[r+2]?(t=!!e[r+1].includes("M"),n.push(`${e[r]}:{equalTo:${t}}`)):n.push(`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${n.toString()}})`}getStudents(e){return this.apollo.watchQuery({query:r.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}onCreateStudent(e,t,n,s,a,d){return this.apollo.mutate({mutation:r.Ps`
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
        `,variables:{id_degree:{add:e},gender:t,carnet:n,last_name:s,first_name:a,year:d}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}onEditStudent(e,t,n,s,a,d,c,u){return this.apollo.mutate({mutation:r.Ps`
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
        `,variables:{id:e,id_degree:{remove:t,add:n},gender:s,carnet:a,last_name:d,first_name:c,year:u}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}onDeleteStudent(e){return this.apollo.mutate({mutation:r.Ps`
          mutation deleteStudent($id: ID!) {
            deleteStudent(input: { id: $id }) {
              student {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),i.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(r._M),c.LFG(u.P),c.LFG(h.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);