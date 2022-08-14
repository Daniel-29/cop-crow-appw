!function(){"use strict";var e,n,t,r,o,i,a,s,u,l,c,d;function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{14187:function(o,i,a){a.d(i,{x:function(){return b}});var s,u=a(93342),l=a(50752),c=a(94402),d=a(40205),f=a(59193),_=a(15257),g=a(5304),y=a(37716),m=a(94270),w=a(1400),b=((s=function(){function o(e,n,t){h(this,o),this.apollo=e,this.supaBaseService=n,this._fuseConfirmationService=t,this.table="opportunity",this.tableMtM="opportunity_degree",this.tableOtM="area_position",this.view="OpportunityDegreesStudentE"}return v(o,[{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o||n.push({field:"opportunity_type",value:!1,type:"eq",subfield:null}),(0,c.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",n)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(n,t){return e.errorHandle(n),f.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"opportunity_type",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"false",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.view;return(0,c.D)(this.supaBaseService.onSelectFuntionView(i,a,e,n,r,o)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"insert",value:function(e){var n=this;return(0,c.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"insertMtM",value:function(e){var n=this;return(0,c.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"update",value:function(e,n){var t=this;return(0,c.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"delete",value:function(e){var n=this;return(0,c.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"deleteMtM",value:function(e,n){var t=this;return(0,c.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,n)).pipe((0,_.q)(1),(0,u.b)(function(e){if(null!=e.error)throw(0,d._)(e.error)}),(0,g.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"getAreaPositions",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,c.D)(this.supaBaseService.onSelectRequest(this.tableOtM,t,r,"*",n)).pipe((0,_.q)(1),(0,g.K)(function(n,t){return e.errorHandle(n),f.E}))}},{key:"buildQuery",value:function(e){for(var n,t=[],r=0;r<e.length;r+=3)if("relation"==e[r+2])t.push("".concat(e[r],':{have:{name:{matchesRegex:"').concat(e[r+1],'"}}}'));else if("bool"==e[r+2])n="Si"==e[r+1]||"Concluido"==e[r+1],t.push("".concat(e[r],":{equalTo:").concat(n,"}"));else if("number"==e[r+2])n="Si"==e[r+1],t.push("".concat(e[r],":{equalTo:").concat(e[r+1],"}"));else if("date"==e[r+2]){var o=new Date((e[r+1]+"T00:00:00").toString()),i=new Date((e[r+1]+"T23:59:59").toString());t.push("".concat(e[r],':{greaterThanOrEqualTo:"').concat(o.toISOString(),'", lessThanOrEqualTo:"').concat(i.toISOString(),'" }'))}else t.push("".concat(e[r],':{matchesRegex:"').concat(e[r+1],'"}'));return"".concat(t.toString())}},{key:"getOpportunities",value:function(n){var t=this;return this.apollo.watchQuery({query:l.Ps(e||(e=p(["\n          query opportunities {\n            opportunities(where:{opportunity_type:{equalTo:false},","}) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  name\n                  position\n                  available_spaces\n                  type\n                  createdAt\n                  start_date\n                  end_date\n                  end_process\n                  student_selected\n                  opportunity_type\n                  years\n                  id_company {\n                    edges {\n                      node {\n                        id\n                        code\n                        name\n                        contact\n                      }\n                    }\n                    count\n                  }\n\n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                    count\n                  }\n                  id_area_position {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                    count\n                  }\n                }\n              }\n              count\n            }\n          }\n        "])),n),fetchPolicy:"network-only"}).valueChanges.pipe((0,_.q)(1),(0,g.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"oncreateOpportunity",value:function(e,t,r,o,i,a,s,u,c,d,h,v,y){var m=this,w=[];return h.map(function(e){w.push('add: "'.concat(e,'" '))}),w.toString(),this.apollo.mutate({mutation:l.Ps(n||(n=p(["\n          mutation createOpportunity(\n            $name: String!\n            $position: String!\n            $available_spaces: Float!\n            $type: String!\n            $start_date: Date!\n            $end_date: Date!\n            $end_process: Boolean!\n            $student_selected: Boolean!\n            $opportunity_type: Boolean!\n            $years: String!\n            $id_degree: DegreeRelationInput!\n            $id_company: CompanyRelationInput!\n            $id_area_position: Area_positionRelationInput!\n          ) {\n            createOpportunity(\n              input: {\n                fields: {\n                  name: $name\n                  position: $position\n                  available_spaces: $available_spaces\n                  type: $type\n                  start_date: $start_date\n                  end_date: $end_date\n                  end_process: $end_process\n                  student_selected: $student_selected\n                  opportunity_type: $opportunity_type\n                  years: $years\n                  id_degree: $id_degree\n                  id_company: $id_company\n                  id_area_position: $id_area_position\n                }\n              }\n            ) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{name:e,position:t,available_spaces:Number(r),type:o,start_date:i,end_date:a,end_process:s,student_selected:u,opportunity_type:c,years:d.toLocaleString(),id_degree:{add:h},id_company:{add:v},id_area_position:{add:y}}}).pipe((0,_.q)(1),(0,g.K)(function(e,n){return m.errorHandle(e),f.E}))}},{key:"onEditOpportunity",value:function(e,n,r,o,i,a,s,c,d,h,v,y,m,w,b,k,S){var $=this;return this.apollo.mutate({mutation:l.Ps(t||(t=p(["\n          mutation updateOpportunity(\n            $id: ID!\n            $name: String!\n            $position: String!\n            $available_spaces: Float!\n            $type: String!\n            $start_date: Date!\n            $end_date: Date!\n            $end_process: Boolean!\n            $student_selected: Boolean!\n            $opportunity_type: Boolean!\n            $years: String!\n            $id_degree: DegreeRelationInput!\n            $id_company: CompanyRelationInput!\n            $id_area_position: Area_positionRelationInput!\n          ) {\n            updateOpportunity(\n              input: {\n                id: $id\n                fields: {\n                  name: $name\n                  position: $position\n                  available_spaces: $available_spaces\n                  type: $type\n                  start_date: $start_date\n                  end_date: $end_date\n                  end_process: $end_process\n                  student_selected: $student_selected\n                  opportunity_type: $opportunity_type\n                  years: $years\n                  id_degree: $id_degree\n                  id_company: $id_company\n                  id_area_position: $id_area_position\n                }\n              }\n            ) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,name:n,position:r,available_spaces:Number(o),type:i,start_date:a,end_date:s,end_process:c,student_selected:d,opportunity_type:h,years:v.toLocaleString(),id_company:{remove:b,add:m},id_degree:{remove:k,add:y},id_area_position:{remove:S,add:w}}}).pipe((0,_.q)(1),(0,u.b)(function(e){window.location.reload()}),(0,g.K)(function(e,n){return $.errorHandle(e),f.E}))}},{key:"onDeleteOpportunity",value:function(e){var n=this;return this.apollo.mutate({mutation:l.Ps(r||(r=p(["\n          mutation deleteOpportunity($id: ID!) {\n            deleteOpportunity(input: { id: $id }) {\n              opportunity {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,_.q)(1),(0,g.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,d._)("error")}}]),o}()).\u0275fac=function(e){return new(e||s)(y.LFG(l._M),y.LFG(m.P),y.LFG(w.R))},s.\u0275prov=y.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},22166:function(e,n,t){t.d(n,{U:function(){return y}});var r,i=t(50752),a=t(94402),s=t(59193),u=t(40205),l=t(15257),c=t(5304),d=t(93342),f=t(37716),_=t(94270),g=t(1400),y=((r=function(){function e(n,t,r){h(this,e),this.apollo=n,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="professional_practice"}return v(e,[{key:"buildQuery",value:function(e){for(var n=[],t=0;t<e.length;t+=3)n.push("relation"==e[t+2]?"".concat(e[t],':{have:{name:{matchesRegex:"').concat(e[t+1],'"}}}'):"".concat(e[t],':{matchesRegex:"').concat(e[t+1],'"}'));return"(where:{".concat(n.toString(),"})")}},{key:"getView",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,a.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",t,r,"*",n)).pipe((0,l.q)(1),(0,c.K)(function(n,t){return e.errorHandle(n),s.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"ProfessionalPracticeDegrees";return(0,a.D)(this.supaBaseService.onSelectFuntionView(i,p,e,n,r,o)).pipe((0,l.q)(1),(0,d.b)(function(e){if(null!=e.error)throw(0,u._)(e.error)}),(0,c.K)(function(e,n){return t.errorHandle(e),s.E}))}},{key:"getProfessionalPractices",value:function(e){var n=this;return this.apollo.watchQuery({query:i.Ps(o||(o=p(["\n          query listProfessionalPractices {\n            professional_practices"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  project_name\n                  subject\n                  duration\n                  evaluation                \n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              count\n            }\n          }\n        "])),e),fetchPolicy:"network-only"}).valueChanges.pipe((0,l.q)(1),(0,c.K)(function(e,t){return n.errorHandle(e),s.E}))}},{key:"onCreateProfessionalPractice",value:function(e,n,t,r){var o=this;return(0,a.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:n,duration:t,evaluation:r})).pipe((0,l.q)(1),(0,c.K)(function(e,n){return o.errorHandle(e),s.E}))}},{key:"onInsertDegree",value:function(e,n){var t=this;return(0,a.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:n})).pipe((0,l.q)(1),(0,c.K)(function(e,n){return t.errorHandle(e),s.E}))}},{key:"onEditProfessionalPractice",value:function(e,n,t,r,o){var i=this;return(0,a.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:n,subject:t,duration:r,evaluation:o},e)).pipe((0,l.q)(1),(0,c.K)(function(e,n){return i.errorHandle(e),s.E}))}},{key:"onDeleteProfessionalPractice",value:function(e){var n=this;return(0,a.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,l.q)(1),(0,c.K)(function(e,t){return n.errorHandle(e),s.E}))}},{key:"onDeleteDegrees",value:function(e){var n=this;return(0,a.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,l.q)(1),(0,c.K)(function(e,t){return n.errorHandle(e),s.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,u._)("error")}}]),e}()).\u0275fac=function(e){return new(e||r)(f.LFG(i._M),f.LFG(_.P),f.LFG(g.R))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)},37027:function(e,n,t){t.d(n,{F:function(){return $}});var r,o=t(50752),f=t(94402),_=t(40205),g=t(59193),y=t(15257),m=t(93342),w=t(5304),b=t(37716),k=t(94270),S=t(1400),$=((r=function(){function e(n,t,r){h(this,e),this.apollo=n,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}return v(e,[{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,f.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",n)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(n,t){return e.errorHandle(n),g.E}))}},{key:"getO",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,f.D)(this.supaBaseService.onSelectRequest(this.viewO,t,r,"*",n)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(n,t){return e.errorHandle(n),g.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.view;return(0,f.D)(this.supaBaseService.onSelectFuntionView(i,a,e,n,r,o)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,n){return t.errorHandle(e),g.E}))}},{key:"getFunctionViewO",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.viewO;return(0,f.D)(this.supaBaseService.onSelectFuntionView(i,a,e,n,r,o)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,n){return t.errorHandle(e),g.E}))}},{key:"insert",value:function(e){var n=this;return(0,f.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"insertMtM",value:function(e){var n=this;return(0,f.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"update",value:function(e,n){var t=this;return(0,f.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,n){return t.errorHandle(e),g.E}))}},{key:"delete",value:function(e){var n=this;return(0,f.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"deleteMtM",value:function(e,n){var t=this;return(0,f.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,n)).pipe((0,y.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,_._)(e.error)}),(0,w.K)(function(e,n){return t.errorHandle(e),g.E}))}},{key:"buildQuery",value:function(e){for(var n=[],t=0;t<e.length;t+=3)if("relation"==e[t+2])n.push("".concat(e[t],':{have:{name:{matchesRegex:"').concat(e[t+1],'"}}}'));else if("student"==e[t+2])n.push("".concat(e[t],':{have:{carnet:{matchesRegex:"').concat(e[t+1],'"}}}'));else if("date"==e[t+2]){var r=new Date((e[t+1]+"T00:00:00").toString()),o=new Date((e[t+1]+"T23:59:59").toString());n.push("".concat(e[t],':{greaterThanOrEqualTo:"').concat(r.toISOString(),'", lessThanOrEqualTo:"').concat(o.toISOString(),'" }'))}else n.push("".concat(e[t],':{matchesRegex:"').concat(e[t+1],'"}'));return"".concat(n.toString())}},{key:"getWorkShopRealization",value:function(e){var n=this;return this.apollo.watchQuery({query:o.Ps(i||(i=p(['\n        query workshop_realizations {\n          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}, ',"}}, ","}) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                date\n                semester\n                id_workshop {\n                  edges {\n                    node {\n                      id\n                      name\n                      id_category{\n                        edges{\n                          node{\n                            id\n                            name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                ids_student {\n                  edges {\n                    node {\n                      id\n                      carnet\n                      first_name\n                      last_name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "])),e.includes("id_workshop")?e.substring(19,e.length-2):"",e.includes("id_workshop")?"":e),fetchPolicy:"network-only"}).valueChanges.pipe((0,y.q)(1),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"getWorkshops",value:function(){var e=this;return this.apollo.watchQuery({query:o.Ps(a||(a=p(['\n        query {\n          workshops(where:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}}) {\n              pageInfo {\n              hasPreviousPage\n              hasNextPage\n              }\n              edges {\n              node {\n                  id\n                  name\n                  id_category{\n                  edges{\n                      node{\n                      id\n                      name\n                      }\n                  }\n                  }\n              }\n              }\n          }\n        }\n        ']))),fetchPolicy:"network-only"}).valueChanges.pipe((0,y.q)(1),(0,w.K)(function(n,t){return e.errorHandle(n),g.E}))}},{key:"getWorkShopRealizationO",value:function(e){var n=this;return this.apollo.watchQuery({query:o.Ps(s||(s=p(['\n        query workshop_realizations {\n          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}, ',"}}, ","}) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                date\n                semester\n                id_workshop {\n                  edges {\n                    node {\n                      id\n                      name\n                      id_category{\n                        edges{\n                          node{\n                            id\n                            name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                ids_student {\n                  edges {\n                    node {\n                      id\n                      carnet\n                      first_name\n                      last_name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "])),e.includes("id_workshop")?e.substring(19,e.length-2):"",e.includes("id_workshop")?"":e),fetchPolicy:"network-only"}).valueChanges.pipe((0,y.q)(1),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"getWorkshopsO",value:function(){var e=this;return this.apollo.watchQuery({query:o.Ps(u||(u=p(['\n        query {\n          workshops(where:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}}) {\n              pageInfo {\n              hasPreviousPage\n              hasNextPage\n              }\n              edges {\n              node {\n                  id\n                  name\n                  id_category{\n                  edges{\n                      node{\n                      id\n                      name\n                      }\n                  }\n                  }\n              }\n              }\n          }\n        }\n        ']))),fetchPolicy:"network-only"}).valueChanges.pipe((0,y.q)(1),(0,w.K)(function(n,t){return e.errorHandle(n),g.E}))}},{key:"onCreateWorkShopRealization",value:function(e,n,t,r){var i=this;return this.apollo.mutate({mutation:o.Ps(l||(l=p(["\n          mutation insertWorkshop_realization(\n            $date: Date!\n            $semester: String!\n            $id_workshop: WorkshopRelationInput!\n            $id_student: StudentRelationInput!\n          ) {\n            createWorkshop_realization(\n              input: {\n                fields: {\n                  date: $date\n                  semester: $semester\n                  id_workshop: $id_workshop\n                  ids_student: $id_student\n                }\n              }\n            ) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{date:e,semester:n,id_workshop:{add:t},id_student:{add:r}}}).pipe((0,y.q)(1),(0,m.b)(function(e){window.location.reload()}),(0,w.K)(function(e,n){return i.errorHandle(e),g.E}))}},{key:"onDeleteWorkShopRealization",value:function(e){var n=this;return this.apollo.mutate({mutation:o.Ps(c||(c=p(["\n          mutation deleteWorkshop_realization($id: ID!) {\n            deleteWorkshop_realization(input: { id: $id }) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,y.q)(1),(0,w.K)(function(e,t){return n.errorHandle(e),g.E}))}},{key:"onEditWorkShopRealization",value:function(e,n,t,r,i,a,s){var u=this;return this.apollo.mutate({mutation:o.Ps(d||(d=p(["\n          mutation updateWorkshop_realization(\n            $id: ID!\n            $date: Date!\n            $semester: String!\n            $id_workshop: WorkshopRelationInput!\n            $id_student: StudentRelationInput!\n          ) {\n            updateWorkshop_realization(\n              input: {\n                id: $id\n                fields: {\n                  date: $date\n                  semester: $semester\n                  id_workshop: $id_workshop\n                  ids_student: $id_student\n                }\n              }\n            ) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,date:n,semester:r,id_workshop:{remove:a,add:t},id_student:{remove:s,add:i}}}).pipe((0,y.q)(1),(0,w.K)(function(e,n){return u.errorHandle(e),g.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,_._)("error")}}]),e}()).\u0275fac=function(e){return new(e||r)(b.LFG(o._M),b.LFG(k.P),b.LFG(S.R))},r.\u0275prov=b.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}])}();