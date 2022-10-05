"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[1981],{37027:function(e,r,t){t.d(r,{F:function(){return c}});var o=t(50752),i=t(94402),a=t(40205),s=t(59193),n=t(15257),l=t(93342),h=t(5304),d=t(37716),u=t(94270),p=t(1400);let c=(()=>{class e{constructor(e,r,t){this.apollo=e,this.supaBaseService=r,this._fuseConfirmationService=t,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}get(e=[],r=0,t=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.view,r,t,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getO(e=[],r=0,t=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.viewO,r,t,"*",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getFunctionView(e,r,t="",o="",d="searchinview",u=this.view){return(0,i.D)(this.supaBaseService.onSelectFuntionView(d,u,e,r,t,o)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getFunctionViewO(e,r,t="",o="",d="searchinview",u=this.viewO){return(0,i.D)(this.supaBaseService.onSelectFuntionView(d,u,e,r,t,o)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}insertMtM(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}update(e,r){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,r,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}deleteMtM(e,r){return(0,i.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,r)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}buildQuery(e){let r=[];for(let t=0;t<e.length;t+=3)if("relation"==e[t+2])r.push(`${e[t]}:{have:{name:{matchesRegex:"${e[t+1]}"}}}`);else if("student"==e[t+2])r.push(`${e[t]}:{have:{carnet:{matchesRegex:"${e[t+1]}"}}}`);else if("date"==e[t+2]){let o=new Date((e[t+1]+"T00:00:00").toString()),i=new Date((e[t+1]+"T23:59:59").toString());r.push(`${e[t]}:{greaterThanOrEqualTo:"${o.toISOString()}", lessThanOrEqualTo:"${i.toISOString()}" }`)}else r.push(`${e[t]}:{matchesRegex:"${e[t+1]}"}`);return`${r.toString()}`}getWorkShopRealization(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getWorkshops(){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getWorkShopRealizationO(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getWorkshopsO(){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onCreateWorkShopRealization(e,r,t,i){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{date:e,semester:r,id_workshop:{add:t},id_student:{add:i}}}).pipe((0,n.q)(1),(0,l.b)(e=>{window.location.reload()}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onDeleteWorkShopRealization(e){return this.apollo.mutate({mutation:o.Ps`
          mutation deleteWorkshop_realization($id: ID!) {
            deleteWorkshop_realization(input: { id: $id }) {
              workshop_realization {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onEditWorkShopRealization(e,r,t,i,a,l,d){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{id:e,date:r,semester:i,id_workshop:{remove:l,add:t},id_student:{remove:d,add:a}}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(r){return new(r||e)(d.LFG(o._M),d.LFG(u.P),d.LFG(p.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},16141:function(e,r,t){t.d(r,{n:function(){return c}});var o=t(50752),i=t(94402),a=t(40205),s=t(59193),n=t(15257),l=t(93342),h=t(5304),d=t(37716),u=t(94270),p=t(1400);let c=(()=>{class e{constructor(e,r,t){this.apollo=e,this.supaBaseService=r,this._fuseConfirmationService=t,this.table="workshop",this.tableOtM="category"}get(e=[],r=0,t=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.table,r,t,"id,name,updated_at,created_at,id_category!inner(*)",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}insert(e){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}update(e,r){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,r,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}delete(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}getCategoriesWorkshop(e=[],r=0,t=100){return(0,i.D)(this.supaBaseService.onSelectRequest(this.tableOtM,r,t,"id,name,updated_at,created_at",e)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}buildQuery(e){let r=[];for(let t=0;t<e.length;t+=3)r.push("relation"==e[t+2]?`${e[t]}:{have:{name:{matchesRegex:"${e[t+1]}"}}}`:`${e[t]}:{matchesRegex:"${e[t+1]}"}`);return`(where:{${r.toString()}})`}getWorkshops(e){return this.apollo.watchQuery({query:o.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onCreateWorkshop(e,r){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{name:e,id_category:{add:r}}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onDeleteWorkshop(e){return this.apollo.mutate({mutation:o.Ps`
          mutation deleteWorkshop($id: ID!) {
            deleteWorkshop(input: { id: $id }) {
              workshop {
                name
              }
            }
          }
        `,variables:{id:e}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onEditWorkshop(e,r,t,i){return this.apollo.mutate({mutation:o.Ps`
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
        `,variables:{id:e,name:r,id_category:{remove:i,add:t}}}).pipe((0,n.q)(1),(0,h.K)((e,r)=>(this.errorHandle(e),s.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(r){return new(r||e)(d.LFG(o._M),d.LFG(u.P),d.LFG(p.R))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);