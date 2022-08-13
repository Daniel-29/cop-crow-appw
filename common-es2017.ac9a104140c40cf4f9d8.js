"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{14187:function(e,t,r){r.d(t,{x:function(){return h}});var o=r(93342),i=r(50752),a=r(94402),s=r(40205),n=r(59193),l=r(15257),d=r(5304),p=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}get(e=[],t=0,r=100,i=!1){return i||e.push({field:"opportunity_type",value:!1,type:"eq",subfield:null}),(0,a.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",e)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}getFunctionView(e,t,r="opportunity_type",i="false",p="searchinview",u=this.view){return(0,a.D)(this.supaBaseService.onSelectFuntionView(p,u,e,t,r,i)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}insert(e){return(0,a.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}insertMtM(e){return(0,a.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}update(e,t){return(0,a.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}delete(e){return(0,a.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}deleteMtM(e,t){return(0,a.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,l.q)(1),(0,o.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}getAreaPositions(e=[],t=0,r=100){return(0,a.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,r,"*",e)).pipe((0,l.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}buildQuery(e){let t,r=[];for(let o=0;o<e.length;o+=3)if("relation"==e[o+2])r.push(`${e[o]}:{have:{name:{matchesRegex:"${e[o+1]}"}}}`);else if("bool"==e[o+2])t="Si"==e[o+1]||"Concluido"==e[o+1],r.push(`${e[o]}:{equalTo:${t}}`);else if("number"==e[o+2])t="Si"==e[o+1],r.push(`${e[o]}:{equalTo:${e[o+1]}}`);else if("date"==e[o+2]){let t=new Date((e[o+1]+"T00:00:00").toString()),i=new Date((e[o+1]+"T23:59:59").toString());r.push(`${e[o]}:{greaterThanOrEqualTo:"${t.toISOString()}", lessThanOrEqualTo:"${i.toISOString()}" }`)}else r.push(`${e[o]}:{matchesRegex:"${e[o+1]}"}`);return`${r.toString()}`}getOpportunities(e){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,l.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}oncreateOpportunity(e,t,r,o,a,s,p,u,c,h,_,g,m){let y=[];return _.map(e=>{y.push(`add: "${e}" `)}),y.toString(),this.apollo.mutate({mutation:i.Ps`
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
        `,variables:{name:e,position:t,available_spaces:Number(r),type:o,start_date:a,end_date:s,end_process:p,student_selected:u,opportunity_type:c,years:h.toLocaleString(),id_degree:{add:_},id_company:{add:g},id_area_position:{add:m}}}).pipe((0,l.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}onEditOpportunity(e,t,r,a,s,p,u,c,h,_,g,m,y,$,f,w,v){return this.apollo.mutate({mutation:i.Ps`
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
        `,variables:{id:e,name:t,position:r,available_spaces:Number(a),type:s,start_date:p,end_date:u,end_process:c,student_selected:h,opportunity_type:_,years:g.toLocaleString(),id_company:{remove:f,add:y},id_degree:{remove:w,add:m},id_area_position:{remove:v,add:$}}}).pipe((0,l.q)(1),(0,o.b)(e=>{window.location.reload()}),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}onDeleteOpportunity(e){return this.apollo.mutate({mutation:i.Ps`
          mutation deleteOpportunity($id: ID!) {
            deleteOpportunity(input: { id: $id }) {
              opportunity {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,l.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),n.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(p.LFG(i._M),p.LFG(u.P),p.LFG(c.R))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},22166:function(e,t,r){r.d(t,{U:function(){return c}});var o=r(50752),i=r(94402),a=r(59193),s=r(40205),n=r(15257),l=r(5304),d=r(37716),p=r(94270),u=r(1400);let c=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="professional_practice"}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)t.push("relation"==e[r+2]?`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`:`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`(where:{${t.toString()}})`}getView(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",t,r,"*",e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}getProfessionalPractices(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onCreateProfessionalPractice(e,t,r,o){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:t,duration:r,evaluation:o})).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onInsertDegree(e,t){return(0,i.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:t})).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onEditProfessionalPractice(e,t,r,o,s){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:t,subject:r,duration:o,evaluation:s},e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteProfessionalPractice(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onDeleteDegrees(e){return(0,i.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,n.q)(1),(0,l.K)((e,t)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(o._M),d.LFG(p.P),d.LFG(u.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},37027:function(e,t,r){r.d(t,{F:function(){return h}});var o=r(50752),i=r(94402),a=r(40205),s=r(59193),n=r(15257),l=r(93342),d=r(5304),p=r(37716),u=r(94270),c=r(1400);let h=(()=>{class e{constructor(e,t,r){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}get(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}getO(e=[],t=0,r=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.viewO,t,r,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}insertMtM(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}update(e,t){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}deleteMtM(e,t){return(0,i.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}buildQuery(e){let t=[];for(let r=0;r<e.length;r+=3)if("relation"==e[r+2])t.push(`${e[r]}:{have:{name:{matchesRegex:"${e[r+1]}"}}}`);else if("student"==e[r+2])t.push(`${e[r]}:{have:{carnet:{matchesRegex:"${e[r+1]}"}}}`);else if("date"==e[r+2]){let o=new Date((e[r+1]+"T00:00:00").toString()),i=new Date((e[r+1]+"T23:59:59").toString());t.push(`${e[r]}:{greaterThanOrEqualTo:"${o.toISOString()}", lessThanOrEqualTo:"${i.toISOString()}" }`)}else t.push(`${e[r]}:{matchesRegex:"${e[r+1]}"}`);return`${t.toString()}`}getWorkShopRealization(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkshops(){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkShopRealizationO(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}getWorkshopsO(){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}onCreateWorkShopRealization(e,t,r,i){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{date:e,semester:t,id_workshop:{add:r},id_student:{add:i}}}).pipe((0,n.q)(1),(0,l.b)(e=>{window.location.reload()}),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}onDeleteWorkShopRealization(e){return this.apollo.mutate({mutation:o.Ps`
          mutation deleteWorkshop_realization($id: ID!) {
            deleteWorkshop_realization(input: { id: $id }) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}onEditWorkShopRealization(e,t,r,i,a,l,p){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{id:e,date:t,semester:i,id_workshop:{remove:l,add:r},id_student:{remove:p,add:a}}}).pipe((0,n.q)(1),(0,d.K)((e,t)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(t){return new(t||e)(p.LFG(o._M),p.LFG(u.P),p.LFG(c.R))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);