"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{22166:function(e,r,s){s.d(r,{U:function(){return d}});var t=s(50752),i=s(94402),o=s(59193),a=s(40205),n=s(15257),c=s(5304),l=s(93342),u=s(37716),p=s(94270),h=s(1400);let d=(()=>{class e{constructor(e,r,s){this.apollo=e,this.supaBaseService=r,this._fuseConfirmationService=s,this.table="professional_practice"}buildQuery(e){let r=[];for(let s=0;s<e.length;s+=3)r.push("relation"==e[s+2]?`${e[s]}:{have:{name:{matchesRegex:"${e[s+1]}"}}}`:`${e[s]}:{matchesRegex:"${e[s+1]}"}`);return`(where:{${r.toString()}})`}getView(e=[],r=0,s=100){return(0,i.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",r,s,"*",e)).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}getFunctionView(e,r,s="",t="",u="searchinview",p="ProfessionalPracticeDegrees"){return(0,i.D)(this.supaBaseService.onSelectFuntionView(u,p,e,r,s,t)).pipe((0,n.q)(1),(0,l.b)(e=>{if(null!=e.error)throw(0,a._)(e.error)}),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}getProfessionalPractices(e){return this.apollo.watchQuery({query:t.Ps`
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
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onCreateProfessionalPractice(e,r,s,t){return(0,i.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:r,duration:s,evaluation:t})).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onInsertDegree(e,r){return(0,i.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:r})).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onEditProfessionalPractice(e,r,s,t,a){return(0,i.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:r,subject:s,duration:t,evaluation:a},e)).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onDeleteProfessionalPractice(e){return(0,i.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onDeleteDegrees(e){return(0,i.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,n.q)(1),(0,c.K)((e,r)=>(this.errorHandle(e),o.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,a._)("error")}}return e.\u0275fac=function(r){return new(r||e)(u.LFG(t._M),u.LFG(p.P),u.LFG(h.R))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);