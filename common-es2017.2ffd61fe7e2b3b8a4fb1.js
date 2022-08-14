"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{14187:function(e,t,r){r.d(t,{x:function(){return h}});var i=r(93342),o=r(50752),a=r(94402),s=r(40205),n=r(59193),l=r(15257),p=r(5304),d=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}get(e=[],t=0,r=100,o=!1){return o||e.push({field:"opportunity_type",value:!1,type:"eq",subfield:null}),(0,a.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",e)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}getFunctionView(e,t,r="opportunity_type",o="false",d="searchinview",u=this.view){return(0,a.D)(this.supaBaseService.onSelectFuntionView(d,u,e,t,r,o)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}insert(e){return(0,a.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}insertMtM(e){return(0,a.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}update(e,t){return(0,a.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}delete(e){return(0,a.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}deleteMtM(e,t){return(0,a.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,l.q)(1),(0,i.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}getAreaPositions(e=[],t=0,r=100){return(0,a.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,r,"*",e)).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}buildQuery(e){let t,r=[];for(let i=0;i<e.length;i+=3)if("relation"==e[i+2])r.push(`${e[i]}:{have:{name:{matchesRegex:"${e[i+1]}"}}}`);else if("bool"==e[i+2])t="Si"==e[i+1]||"Concluido"==e[i+1],r.push(`${e[i]}:{equalTo:${t}}`);else if("number"==e[i+2])t="Si"==e[i+1],r.push(`${e[i]}:{equalTo:${e[i+1]}}`);else if("date"==e[i+2]){let t=new Date((e[i+1]+"T00:00:00").toString()),o=new Date((e[i+1]+"T23:59:59").toString());r.push(`${e[i]}:{greaterThanOrEqualTo:"${t.toISOString()}", lessThanOrEqualTo:"${o.toISOString()}" }`)}else r.push(`${e[i]}:{matchesRegex:"${e[i+1]}"}`);return`${r.toString()}`}getOpportunities(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}oncreateOpportunity(e,t,r,i,a,s,d,u,c,h,_,g,m){let y=[];return _.map(e=>{y.push(`add: "${e}" `)}),y.toString(),this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{name:e,position:t,available_spaces:Number(r),type:i,start_date:a,end_date:s,end_process:d,student_selected:u,opportunity_type:c,years:h.toLocaleString(),id_degree:{add:_},id_company:{add:g},id_area_position:{add:m}}}).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}onEditOpportunity(e,t,r,a,s,d,u,c,h,_,g,m,y,w,$,f,v){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{id:e,name:t,position:r,available_spaces:Number(a),type:s,start_date:d,end_date:u,end_process:c,student_selected:h,opportunity_type:_,years:g.toLocaleString(),id_company:{remove:$,add:y},id_degree:{remove:f,add:m},id_area_position:{remove:v,add:w}}}).pipe((0,l.q)(1),(0,i.b)(e=>{window.location.reload()}),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}onDeleteOpportunity(e){return this.apollo.mutate({mutation:o.Ps`
          mutation deleteOpportunity($id: ID!) {
            deleteOpportunity(input: { id: $id }) {
              opportunity {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,l.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),n.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(o._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},22166:function(e,t,r){r.d(t,{U:function(){return h}});var i=r(50752),o=r(94402),a=r(59193),s=r(40205),n=r(15257),l=r(5304),p=r(93342),d=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="professional_practice"}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)t.push("relation"==e[r+2]?`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`:`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${t.toString()}})`}getView(e=[],t=0,r=100){return(0,o.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",t,r,"*",e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}getFunctionView(e,t,r="",i="",d="searchinview",u="ProfessionalPracticeDegrees"){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,t,r,i)).pipe((0,n.q)(1),(0,p.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}getProfessionalPractices(e){return this.apollo.watchQuery({query:i.Ps`
          query listProfessionalPractices {
            professional_practices${e} {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  project_name
                  subject
                  duration
                  evaluation                
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
              count
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onCreateProfessionalPractice(e,t,r,i){return(0,o.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:t,duration:r,evaluation:i})).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onInsertDegree(e,t){return(0,o.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:t})).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onEditProfessionalPractice(e,t,r,i,s){return(0,o.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:t,subject:r,duration:i,evaluation:s},e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteProfessionalPractice(e){return(0,o.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteDegrees(e){return(0,o.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(i._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},37027:function(e,t,r){r.d(t,{F:function(){return h}});var i=r(50752),o=r(94402),a=r(40205),s=r(59193),n=r(15257),l=r(93342),p=r(5304),d=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}get(e=[],t=0,r=100){return(0,o.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getO(e=[],t=0,r=100){return(0,o.D)(this.supaBaseService.onSelectRequest(this.viewO,t,r,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getFunctionView(e,t,r="",i="",d="searchinview",u=this.view){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,t,r,i)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getFunctionViewO(e,t,r="",i="",d="searchinview",u=this.viewO){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,t,r,i)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}insert(e){return(0,o.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}insertMtM(e){return(0,o.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}update(e,t){return(0,o.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}delete(e){return(0,o.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}deleteMtM(e,t){return(0,o.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)if("relation"==e[r+2])t.push(`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`);else if("student"==e[r+2])t.push(`${e[r]}:{have:{carnet:{matchesRegex:"${e[r+1]}"}}}`);else if("date"==e[r+2]){let i=new Date((e[r+1]+"T00:00:00").toString()),o=new Date((e[r+1]+"T23:59:59").toString());t.push(`${e[r]}:{greaterThanOrEqualTo:"${i.toISOString()}", lessThanOrEqualTo:"${o.toISOString()}" }`)}else t.push(`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`${t.toString()}`}getWorkShopRealization(e){return this.apollo.watchQuery({query:i.Ps`
        query workshop_realizations {
          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}, ${e.includes("id_workshop")?e.substring(19,e.length-2):""}}}, ${e.includes("id_workshop")?"":e}}) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                date
                semester
                id_workshop {
                  edges {
                    node {
                      id
                      name
                      id_category{
                        edges{
                          node{
                            id
                            name
                          }
                        }
                      }
                    }
                  }
                }
                ids_student {
                  edges {
                    node {
                      id
                      carnet
                      first_name
                      last_name
                    }
                  }
                }
              }
            }
          }
        }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkshops(){return this.apollo.watchQuery({query:i.Ps`
        query {
          workshops(where:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}}) {
              pageInfo {
              hasPreviousPage
              hasNextPage
              }
              edges {
              node {
                  id
                  name
                  id_category{
                  edges{
                      node{
                      id
                      name
                      }
                  }
                  }
              }
              }
          }
        }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkShopRealizationO(e){return this.apollo.watchQuery({query:i.Ps`
        query workshop_realizations {
          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}, ${e.includes("id_workshop")?e.substring(19,e.length-2):""}}}, ${e.includes("id_workshop")?"":e}}) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                date
                semester
                id_workshop {
                  edges {
                    node {
                      id
                      name
                      id_category{
                        edges{
                          node{
                            id
                            name
                          }
                        }
                      }
                    }
                  }
                }
                ids_student {
                  edges {
                    node {
                      id
                      carnet
                      first_name
                      last_name
                    }
                  }
                }
              }
            }
          }
        }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkshopsO(){return this.apollo.watchQuery({query:i.Ps`
        query {
          workshops(where:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}}) {
              pageInfo {
              hasPreviousPage
              hasNextPage
              }
              edges {
              node {
                  id
                  name
                  id_category{
                  edges{
                      node{
                      id
                      name
                      }
                  }
                  }
              }
              }
          }
        }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onCreateWorkShopRealization(e,t,r,o){return this.apollo.mutate({mutation:i.Ps`
          mutation insertWorkshop_realization(
            $date: Date!
            $semester: String!
            $id_workshop: WorkshopRelationInput!
            $id_student: StudentRelationInput!
          ) {
            createWorkshop_realization(
              input: {
                fields: {
                  date: $date
                  semester: $semester
                  id_workshop: $id_workshop
                  ids_student: $id_student
                }
              }
            ) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{date:e,semester:t,id_workshop:{add:r},id_student:{add:o}}}).pipe((0,n.q)(1),(0,l.b)(e=>{window.location.reload()}),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onDeleteWorkShopRealization(e){return this.apollo.mutate({mutation:i.Ps`
          mutation deleteWorkshop_realization($id: ID!) {
            deleteWorkshop_realization(input: { id: $id }) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onEditWorkShopRealization(e,t,r,o,a,l,d){return this.apollo.mutate({mutation:i.Ps`
          mutation updateWorkshop_realization(
            $id: ID!
            $date: Date!
            $semester: String!
            $id_workshop: WorkshopRelationInput!
            $id_student: StudentRelationInput!
          ) {
            updateWorkshop_realization(
              input: {
                id: $id
                fields: {
                  date: $date
                  semester: $semester
                  id_workshop: $id_workshop
                  ids_student: $id_student
                }
              }
            ) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{id:e,date:t,semester:o,id_workshop:{remove:l,add:r},id_student:{remove:d,add:a}}}).pipe((0,n.q)(1),(0,p.K)((e,t)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(i._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);