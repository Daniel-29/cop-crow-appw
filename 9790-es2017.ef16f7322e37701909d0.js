"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9790],{36063:function(e,t,r){r.d(t,{$o:function(){return d},t7:function(){return p}});var a=r(37716),o=r(72458),n=r(16738);const i=r.n(n)()||n,s=new a.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function l(e,t){const r=Array(e);for(let a=0;a<e;a++)r[a]=t(a);return r}let p=(()=>{class e extends o._A{constructor(e,t){super(),this._options=t,this.setLocale(e||i.locale())}setLocale(e){super.setLocale(e);let t=i.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:l(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,r){const a=this._createMoment({year:e,month:t,date:r}).locale(this.locale);return a.isValid(),a}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,i.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return i.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return i.invalid()}_createMoment(e,t,r){const{strict:a,useUtc:o}=this._options||{};return o?i.utc(e,t,r,a):i(e,t,r,a)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(o.Ad,8),a.LFG(s,8))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();const d={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},3937:function(e,t,r){r.d(t,{c:function(){return _}});var a=r(51095),o=r(76627),n=r(67441),i=r(98295),s=r(38583),l=r(22238),p=r(3679),d=r(49983),u=r(25553),c=r(44466),h=r(37716);let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[s.ez,l.Is,p.u5,p.UX,i.lN,d.c,n.LD,o.Ps,a.ot,o.Ps,u.J,c.m]]}),e})()},14187:function(e,t,r){r.d(t,{x:function(){return h}});var a=r(93342),o=r(50752),n=r(94402),i=r(40205),s=r(59193),l=r(15257),p=r(5304),d=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}get(e=[],t=0,r=100,o=!1){return o||e.push({field:"opportunity_type",value:!1,type:"eq",subfield:null}),(0,n.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",e)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getFunctionView(e,t,r="opportunity_type",o="false",d="searchinview",u=this.view){return(0,n.D)(this.supaBaseService.onSelectFuntionView(d,u,e,t,r,o)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}insert(e){return(0,n.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}insertMtM(e){return(0,n.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}update(e,t){return(0,n.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}delete(e){return(0,n.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}deleteMtM(e,t){return(0,n.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,l.q)(1),(0,a.b)(e=>{if(null!=e.error)throw(0,i._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getAreaPositions(e=[],t=0,r=100){return(0,n.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,r,"*",e)).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}buildQuery(e){let t,r=[];for(let a=0;a<e.length;a+=3)if("relation"==e[a+2])r.push(`${e[a]}:{have:{name:{matchesRegex:"${e[a+1]}"}}}`);else if("bool"==e[a+2])t="Si"==e[a+1]||"Concluido"==e[a+1],r.push(`${e[a]}:{equalTo:${t}}`);else if("number"==e[a+2])t="Si"==e[a+1],r.push(`${e[a]}:{equalTo:${e[a+1]}}`);else if("date"==e[a+2]){let t=new Date((e[a+1]+"T00:00:00").toString()),o=new Date((e[a+1]+"T23:59:59").toString());r.push(`${e[a]}:{greaterThanOrEqualTo:"${t.toISOString()}", lessThanOrEqualTo:"${o.toISOString()}" }`)}else r.push(`${e[a]}:{matchesRegex:"${e[a+1]}"}`);return`${r.toString()}`}getOpportunities(e){return this.apollo.watchQuery({query:o.Ps`
          query opportunities {
            opportunities(where:{opportunity_type:{equalTo:false},${e}}) {
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}oncreateOpportunity(e,t,r,a,n,i,d,u,c,h,_,y,m){let f=[];return _.map(e=>{f.push(`add: "${e}" `)}),f.toString(),this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{name:e,position:t,available_spaces:Number(r),type:a,start_date:n,end_date:i,end_process:d,student_selected:u,opportunity_type:c,years:h.toLocaleString(),id_degree:{add:_},id_company:{add:y},id_area_position:{add:m}}}).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onEditOpportunity(e,t,r,n,i,d,u,c,h,_,y,m,f,$,g,D,b){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{id:e,name:t,position:r,available_spaces:Number(n),type:i,start_date:d,end_date:u,end_process:c,student_selected:h,opportunity_type:_,years:y.toLocaleString(),id_company:{remove:g,add:f},id_degree:{remove:D,add:m},id_area_position:{remove:b,add:$}}}).pipe((0,l.q)(1),(0,a.b)(e=>{window.location.reload()}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onDeleteOpportunity(e){return this.apollo.mutate({mutation:o.Ps`
          mutation deleteOpportunity($id: ID!) {
            deleteOpportunity(input: { id: $id }) {
              opportunity {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,i._)("error")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(o._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);