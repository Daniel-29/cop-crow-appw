"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[7362],{36063:function(e,t,n){n.d(t,{$o:function(){return u},t7:function(){return c}});var r=n(37716),a=n(72458),s=n(16738);const i=n.n(s)()||s,o=new r.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function l(e,t){const n=Array(e);for(let r=0;r<e;r++)n[r]=t(r);return n}let c=(()=>{class e extends a._A{constructor(e,t){super(),this._options=t,this.setLocale(e||i.locale())}setLocale(e){super.setLocale(e);let t=i.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:l(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,n){const r=this._createMoment({year:e,month:t,date:n}).locale(this.locale);return r.isValid(),r}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,i.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return i.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return i.invalid()}_createMoment(e,t,n){const{strict:r,useUtc:a}=this._options||{};return a?i.utc(e,t,n,r):i(e,t,n,r)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.Ad,8),r.LFG(o,8))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();const u={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},70822:function(e,t,n){n.d(t,{B:function(){return h}});var r=n(94402),a=n(59193),s=n(40205),i=n(15257),o=n(5304),l=n(37716),c=n(50752),u=n(94270),d=n(1400);let h=(()=>{class e{constructor(e,t,n){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=n,this.table="personal_consultancy"}buildQuery(e){let t=[];for(let n=0;n<e.length;n+=3)if("relation"==e[n+2])t.push(`${e[n]}:{have:{name:{matchesRegex:"${e[n+1]}"}}}`);else if("student"==e[n+2])t.push(`${e[n]}:{have:{carnet:{matchesRegex:"${e[n+1]}"}}}`);else if("date"==e[n+2]){let r=new Date((e[n+1]+"T00:00:00").toString()),a=new Date((e[n+1]+"T23:59:59").toString());t.push(`${e[n]}:{greaterThanOrEqualTo:"${r.toISOString()}", lessThanOrEqualTo:"${a.toISOString()}" }`)}else t.push(`${e[n]}:{matchesRegex:"${e[n+1]}"}`);return`${t.toString()}`}getPersonalConsultancy(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq(this.table,t,n,"\n    *, id_consultancy!inner(*, id_category!inner(*)), id_student!inner(*)\n    ",e,"id_consultancy.id_category.name","Emprendimiento")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}getConsultancies(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq("consultancy",t,n,"\n    *, id_category!inner(*)\n    ",e,"id_category.name","Emprendimiento")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}getPersonalConsultancyO(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq(this.table,t,n,"\n    *, id_consultancy!inner(*, id_category!inner(*)), id_student!inner(*)\n    ",e,"id_consultancy.id_category.name","Orientaci\xf3n Estudiantil")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}getConsultanciesO(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq("consultancy",t,n,"\n    *, id_category!inner(*)\n    ",e,"id_category.name","Orientaci\xf3n Estudiantil")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}getPersonalConsultancyEl(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq(this.table,t,n,"\n    *, id_consultancy!inner(*, id_category!inner(*)), id_student!inner(*)\n    ",e,"id_consultancy.id_category.name","Empleabilidad")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}getConsultanciesEl(e=[],t=0,n=100){return(0,r.D)(this.supaBaseService.onSelectRequestEq("consultancy",t,n,"\n    *, id_category!inner(*)\n    ",e,"id_category.name","Empleabilidad")).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}onCreatePersonalConsultancy(e){return(0,r.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}onEditPersonalConsultancy(e,t){return(0,r.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeletePersonalConsultancy(e){return(0,r.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,i.q)(1),(0,o.K)((e,t)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(c._M),l.LFG(u.P),l.LFG(d.R))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},60758:function(e,t,n){n.d(t,{q:function(){return p}});var r=n(50752),a=n(94402),s=n(59193),i=n(40205),o=n(15257),l=n(5304),c=n(93342),u=n(37716),d=n(94270),h=n(1400);let p=(()=>{class e{constructor(e,t,n){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=n,this.table="student"}get(e=[],t=0,n=100){return(0,a.D)(this.supaBaseService.onSelectRequest(this.table,t,n,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}getFunctionView(e){return(0,a.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,o.q)(1),(0,c.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}insert(e){return(0,a.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}update(e,t){return(0,a.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}delete(e){return(0,a.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}buildQuery(e){let t,n=[];for(let r=0;r<e.length;r+=3)"relation"==e[r+2]?n.push(`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`):"gender"==e[r+2]?(t=!!e[r+1].includes("M"),n.push(`${e[r]}:{equalTo:${t}}`)):n.push(`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${n.toString()}})`}getStudents(e){return this.apollo.watchQuery({query:r.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onCreateStudent(e,t,n,a,i,c){return this.apollo.mutate({mutation:r.Ps`
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
        `,variables:{id_degree:{add:e},gender:t,carnet:n,last_name:a,first_name:i,year:c}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onEditStudent(e,t,n,a,i,c,u,d){return this.apollo.mutate({mutation:r.Ps`
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
        `,variables:{id:e,id_degree:{remove:t,add:n},gender:a,carnet:i,last_name:c,first_name:u,year:d}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onDeleteStudent(e){return this.apollo.mutate({mutation:r.Ps`
          mutation deleteStudent($id: ID!) {
            deleteStudent(input: { id: $id }) {
              student {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,o.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,i._)("error")}}return e.\u0275fac=function(t){return new(t||e)(u.LFG(r._M),u.LFG(d.P),u.LFG(h.R))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);