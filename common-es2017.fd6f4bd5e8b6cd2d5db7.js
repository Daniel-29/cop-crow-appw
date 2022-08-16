"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{22166:function(e,r,t){t.d(r,{U:function(){return p}});var i=t(50752),o=t(94402),s=t(59193),a=t(40205),n=t(15257),l=t(5304),h=t(93342),d=t(37716),u=t(94270),c=t(1400);let p=(()=>{class e{constructor(e,r,t){this.apollo=e,this.supaBaseService=r,this._fuseConfirmationService=t,this.table="professional_practice"}buildQuery(e){let r=[];for(let t=0;t<e.length;t+=3)r.push("relation"==e[t+2]?`${e[t]}:{have:{name:{matchesRegex:"${e[t+1]}"}}}`:`${e[t]}:{matchesRegex:"${e[t+1]}"}`);return`(where:{${r.toString()}})`}getView(e=[],r=0,t=100){return(0,o.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",r,t,"*",e)).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}getFunctionView(e,r,t="",i="",d="searchinview",u="ProfessionalPracticeDegrees"){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,r,t,i)).pipe((0,n.q)(1),(0,h.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}getProfessionalPractices(e){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onCreateProfessionalPractice(e,r,t,i){return(0,o.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:r,duration:t,evaluation:i})).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onInsertDegree(e,r){return(0,o.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:r})).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onEditProfessionalPractice(e,r,t,i,a){return(0,o.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:r,subject:t,duration:i,evaluation:a},e)).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onDeleteProfessionalPractice(e){return(0,o.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onDeleteDegrees(e){return(0,o.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,n.q)(1),(0,l.K)((e,r)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(r){return new(r||e)(d.LFG(i._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},37027:function(e,r,t){t.d(r,{F:function(){return p}});var i=t(50752),o=t(94402),s=t(40205),a=t(59193),n=t(15257),l=t(93342),h=t(5304),d=t(37716),u=t(94270),c=t(1400);let p=(()=>{class e{constructor(e,r,t){this.apollo=e,this.supaBaseService=r,this._fuseConfirmationService=t,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}get(e=[],r=0,t=100){return(0,o.D)(this.supaBaseService.onSelectRequest(this.view,r,t,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getO(e=[],r=0,t=100){return(0,o.D)(this.supaBaseService.onSelectRequest(this.viewO,r,t,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getFunctionView(e,r,t="",i="",d="searchinview",u=this.view){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,r,t,i)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getFunctionViewO(e,r,t="",i="",d="searchinview",u=this.viewO){return(0,o.D)(this.supaBaseService.onSelectFuntionView(d,u,e,r,t,i)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}insert(e){return(0,o.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}insertMtM(e){return(0,o.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}update(e,r){return(0,o.D)(this.supaBaseService.onUpdateRequest(this.table,r,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}delete(e){return(0,o.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}deleteMtM(e,r){return(0,o.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,r)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,s._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}buildQuery(e){let r=[];for(let t=0;t<e.length;t+=3)if("relation"==e[t+2])r.push(`${e[t]}:{have:{name:{matchesRegex:"${e[t+1]}"}}}`);else if("student"==e[t+2])r.push(`${e[t]}:{have:{carnet:{matchesRegex:"${e[t+1]}"}}}`);else if("date"==e[t+2]){let i=new Date((e[t+1]+"T00:00:00").toString()),o=new Date((e[t+1]+"T23:59:59").toString());r.push(`${e[t]}:{greaterThanOrEqualTo:"${i.toISOString()}", lessThanOrEqualTo:"${o.toISOString()}" }`)}else r.push(`${e[t]}:{matchesRegex:"${e[t+1]}"}`);return`${r.toString()}`}getWorkShopRealization(e){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getWorkshops(){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getWorkShopRealizationO(e){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}getWorkshopsO(){return this.apollo.watchQuery({query:i.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}onCreateWorkShopRealization(e,r,t,o){return this.apollo.mutate({mutation:i.Ps`
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
        `,variables:{date:e,semester:r,id_workshop:{add:t},id_student:{add:o}}}).pipe((0,n.q)(1),(0,l.b)(e=>{window.location.reload()}),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}onDeleteWorkShopRealization(e){return this.apollo.mutate({mutation:i.Ps`
          mutation deleteWorkshop_realization($id: ID!) {
            deleteWorkshop_realization(input: { id: $id }) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}onEditWorkShopRealization(e,r,t,o,s,l,d){return this.apollo.mutate({mutation:i.Ps`
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
        `,variables:{id:e,date:r,semester:o,id_workshop:{remove:l,add:t},id_student:{remove:d,add:s}}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),a.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,s._)("error")}}return e.\u0275fac=function(r){return new(r||e)(d.LFG(i._M),d.LFG(u.P),d.LFG(c.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);