"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9269],{36063:function(e,t,r){r.d(t,{$o:function(){return c},t7:function(){return d}});var n=r(37716),i=r(72458),s=r(16738);const a=r.n(s)()||s,o=new n.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function l(e,t){const r=Array(e);for(let n=0;n<e;n++)r[n]=t(n);return r}let d=(()=>{class e extends i._A{constructor(e,t){super(),this._options=t,this.setLocale(e||a.locale())}setLocale(e){super.setLocale(e);let t=a.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:l(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,r){const n=this._createMoment({year:e,month:t,date:r}).locale(this.locale);return n.isValid(),n}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,a.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return a.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return a.invalid()}_createMoment(e,t,r){const{strict:n,useUtc:i}=this._options||{};return i?a.utc(e,t,r,n):a(e,t,r,n)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(i.Ad,8),n.LFG(o,8))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();const c={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},55563:function(e,t,r){r.d(t,{s:function(){return u}});var n=r(3679),i=r(22238),s=r(37716),a=r(60758),o=r(38583),l=r(51095);function d(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"th",5),s._uU(2),s.qZA(),s.BQk()),2&e){const e=t.$implicit;s.xp6(2),s.hij(" ",e.label," ")}}function c(e,t){if(1&e){const e=s.EpF();s.ynx(0),s.TgZ(1,"tr"),s.TgZ(2,"td",9),s._uU(3),s.qZA(),s.TgZ(4,"td",10),s._uU(5),s.qZA(),s.TgZ(6,"td",10),s._uU(7),s.qZA(),s.TgZ(8,"td",10),s._uU(9),s.qZA(),s.TgZ(10,"td",10),s._uU(11),s.qZA(),s.TgZ(12,"td",10),s._uU(13),s.qZA(),s.TgZ(14,"td",10),s.TgZ(15,"div",11),s.TgZ(16,"input",12),s.NdJ("change",function(t){const r=s.CHM(e).$implicit;return s.oxw().onSelectChange(r,t)}),s.qZA(),s.TgZ(17,"label",13),s._uU(18," Seleccionar "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&e){const e=t.$implicit,r=s.oxw();s.xp6(3),s.hij(" ",e.carnet," "),s.xp6(2),s.hij(" ",e.first_name," "),s.xp6(2),s.hij(" ",e.last_name," "),s.xp6(2),s.hij(" ",e.gender?"Masculino":"Femenino"," "),s.xp6(2),s.hij(" ",e.year," "),s.xp6(2),s.hij(" ",e.id_degree.name," "),s.xp6(3),s.Q6J("checked",r.onCheck(e.id,e))}}let u=(()=>{class e{constructor(e,t,r){var i;this.dialogRef=e,this.data=t,this.studentsService=r,this.listRegistry=[],this.fields=[{label:"carnet",field:"carnet"},{label:"first_name",field:"first_name"},{label:"last_name",field:"last_name"},{label:"gender",field:"gender"},{label:"year",field:"year"},{label:"id_degree",field:"id_degree"}],this.studentId=null,this.student=[],this.studentsId=[],this.isSelected=!1,this.listCheck=[],this.check=!1,this.searchForm=new n.cw({field:new n.NI(null===(i=this.fields[0])||void 0===i?void 0:i.field,[n.kI.minLength(1),n.kI.required]),value:new n.NI("",[n.kI.minLength(1),n.kI.required])}),null!=t.studentVal&&(this.listCheck=t.studentVal,this.studentsId=t.studentVal),null!=t.studentObj&&(this.student=t.studentObj),this.onLoadMainData()}onLoadMainData(){this.studentsService.get().subscribe(e=>{this.listRegistry=e.data})}onSearchMainData(){if(this.searchForm.valid){const e=this.studentsService.buildQuery([this.searchForm.controls.field.value,this.searchForm.controls.value.value]);this.studentsService.getStudents(e).subscribe(e=>{this.listRegistry=e.data.students.edges})}}onSelectChange(e,t){t.target.checked?(this.isSelected=!0,this.student.push(e),this.studentsId.push(e.id)):(this.isSelected=!0,this.studentId=e.id,this.student=this.student.filter(e=>e.id!==this.studentId),this.studentsId=this.studentsId.filter(e=>e!==this.studentId))}onSaveSelection(){this.dialogRef.close({code:"onSaveSelection",student:this.student,studentsId:this.studentsId})}onCancelSelection(){this.dialogRef.close({code:"onSelectionCancel",student:this.student,studentsId:this.studentsId})}onCheck(e,t){this.check=!1;for(let r=0;r<this.listCheck.length;r++)e==this.listCheck[r]&&(this.check=!0);return this.check}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(i.so),s.Y36(i.WI),s.Y36(a.q))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-select-students"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"min-w-full","text-center","max-h-90"],[1,"border-b","bg-gray-800"],[4,"ngFor","ngForOf"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"form-check"],["type","checkbox","value","","id","flexCheckChecked","ng-model","students.selected",1,"form-check-input","appearance-none","h-4","w-4","border","border-gray-300","rounded-sm","bg-white","checked:bg-blue-600","checked:border-blue-600","focus:outline-none","transition","duration-200","mt-1","align-top","bg-no-repeat","bg-center","bg-contain","float-left","mr-2","cursor-pointer",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"]],template:function(e,t){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"h2",0),s._uU(2,"Patient Select:"),s.qZA(),s.TgZ(3,"div",1),s.ynx(4),s.TgZ(5,"table",2),s.TgZ(6,"thead",3),s.TgZ(7,"tr"),s.YNc(8,d,3,1,"ng-container",4),s.TgZ(9,"th",5),s._uU(10," actions "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"tbody"),s.YNc(12,c,19,7,"ng-container",4),s.qZA(),s.qZA(),s.BQk(),s.TgZ(13,"div",6),s.TgZ(14,"button",7),s.NdJ("click",function(){return t.onSaveSelection()}),s._uU(15," Save "),s.qZA(),s.TgZ(16,"button",8),s.NdJ("click",function(){return t.onCancelSelection()}),s._uU(17," Cancel "),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(8),s.Q6J("ngForOf",t.fields),s.xp6(4),s.Q6J("ngForOf",t.listRegistry),s.xp6(2),s.Q6J("disabled",!t.isSelected))},directives:[i.uh,i.xY,o.sg,l.lW],styles:[""]}),e})()},80496:function(e,t,r){r.d(t,{j:function(){return u}});var n=r(38583),i=r(3679),s=r(51095),a=r(22238),o=r(98295),l=r(76627),d=r(67441),c=r(37716);let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,a.Is,i.u5,i.UX,o.lN,d.LD,l.Ps,s.ot]]}),e})()},60758:function(e,t,r){r.d(t,{q:function(){return g}});var n=r(50752),i=r(94402),s=r(59193),a=r(40205),o=r(15257),l=r(5304),d=r(93342),c=r(37716),u=r(94270),h=r(1400);let g=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="student"}get(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.table,t,r,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}getFunctionView(e){return(0,i.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,o.q)(1),(0,d.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}update(e,t){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}buildQuery(e){let t,r=[];for(let n=0;n<e.length;n+=3)"relation"==e[n+2]?r.push(`${e[n]}:{have:{name:{matchesRegex:"${e[n+1]}"}}}`):"gender"==e[n+2]?(t=!!e[n+1].includes("M"),r.push(`${e[n]}:{equalTo:${t}}`)):r.push(`${e[n]}:{matchesRegex:"${e[n+1]}"}`);return`(where:{${r.toString()}})`}getStudents(e){return this.apollo.watchQuery({query:n.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onCreateStudent(e,t,r,i,a,d){return this.apollo.mutate({mutation:n.Ps`
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
        `,variables:{id_degree:{add:e},gender:t,carnet:r,last_name:i,first_name:a,year:d}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onEditStudent(e,t,r,i,a,d,c,u){return this.apollo.mutate({mutation:n.Ps`
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
        `,variables:{id:e,id_degree:{remove:t,add:r},gender:i,carnet:a,last_name:d,first_name:c,year:u}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onDeleteStudent(e){return this.apollo.mutate({mutation:n.Ps`
          mutation deleteStudent($id: ID!) {
            deleteStudent(input: { id: $id }) {
              student {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n._M),c.LFG(u.P),c.LFG(h.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},16141:function(e,t,r){r.d(t,{n:function(){return g}});var n=r(50752),i=r(94402),s=r(40205),a=r(59193),o=r(15257),l=r(93342),d=r(5304),c=r(37716),u=r(94270),h=r(1400);let g=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="workshop",this.tableOtM="category"}get(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.table,t,r,"id,name,updated_at,created_at,id_category!inner(*)",e)).pipe((0,o.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,o.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}update(e,t){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,o.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,o.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}getCategoriesWorkshop(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,r,"id,name,updated_at,created_at",e)).pipe((0,o.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)t.push("relation"==e[r+2]?`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`:`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${t.toString()}})`}getWorkshops(e){return this.apollo.watchQuery({query:n.Ps`
        query listWorkshops {
          workshops${e} {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                name
                id_category{
                  edges{node{
                    id
                    name
                  }}
                }
              }
            }
            count
          }
        }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,o.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onCreateWorkshop(e,t){return this.apollo.mutate({mutation:n.Ps`
          mutation insertWorkshop(
            $name: String!
            $id_category: CategoryRelationInput!
          ) {
            createWorkshop(
              input: {
                fields: {
                  name: $name
                  id_category: $id_category
                }
              }
            ) {
              workshop {
                id
              }
            }
          }
        `,variables:{name:e,id_category:{add:t}}}).pipe((0,o.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteWorkshop(e){return this.apollo.mutate({mutation:n.Ps`
          mutation deleteWorkshop($id: ID!) {
            deleteWorkshop(input: { id: $id }) {
              workshop {
                name
              }
            }
          }
        `,variables:{id:e}}).pipe((0,o.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onEditWorkshop(e,t,r,i){return this.apollo.mutate({mutation:n.Ps`
          mutation updateWorkshop(
            $id: ID!
            $name: String!
            $id_category: CategoryRelationInput!
          ) {
            updateWorkshop(
              input: {
                id: $id
                fields: {
                  name: $name
                  id_category: $id_category
                }
              }
            ) {
              workshop {
                id
              }
            }
          }
        `,variables:{id:e,name:t,id_category:{remove:i,add:r}}}).pipe((0,o.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n._M),c.LFG(u.P),c.LFG(h.R))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);