!function(){"use strict";var e,n,t,r,o,i,a,s;function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,n,t){return n&&c(e.prototype,n),t&&c(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{22166:function(n,t,r){r.d(t,{U:function(){return w}});var o,i=r(50752),a=r(94402),s=r(59193),c=r(40205),d=r(15257),p=r(5304),f=r(93342),v=r(37716),g=r(94270),_=r(1400),w=((o=function(){function n(e,t,r){l(this,n),this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="professional_practice"}return h(n,[{key:"buildQuery",value:function(e){for(var n=[],t=0;t<e.length;t+=3)n.push("relation"==e[t+2]?"".concat(e[t],':{have:{name:{matchesRegex:"').concat(e[t+1],'"}}}'):"".concat(e[t],':{matchesRegex:"').concat(e[t+1],'"}'));return"(where:{".concat(n.toString(),"})")}},{key:"getView",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,a.D)(this.supaBaseService.onSelectRequest("ProfessionalPracticeDegrees",t,r,"*",n)).pipe((0,d.q)(1),(0,p.K)(function(n,t){return e.errorHandle(n),s.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"ProfessionalPracticeDegrees";return(0,a.D)(this.supaBaseService.onSelectFuntionView(i,u,e,n,r,o)).pipe((0,d.q)(1),(0,f.b)(function(e){if(null!=e.error)throw(0,c._)(e.error)}),(0,p.K)(function(e,n){return t.errorHandle(e),s.E}))}},{key:"getProfessionalPractices",value:function(n){var t=this;return this.apollo.watchQuery({query:i.Ps(e||(e=u(["\n          query listProfessionalPractices {\n            professional_practices"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  project_name\n                  subject\n                  duration\n                  evaluation                \n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n              count\n            }\n          }\n        "])),n),fetchPolicy:"network-only"}).valueChanges.pipe((0,d.q)(1),(0,p.K)(function(e,n){return t.errorHandle(e),s.E}))}},{key:"onCreateProfessionalPractice",value:function(e,n,t,r){var o=this;return(0,a.D)(this.supaBaseService.onInsertRequest(this.table,{project_name:e,subject:n,duration:t,evaluation:r})).pipe((0,d.q)(1),(0,p.K)(function(e,n){return o.errorHandle(e),s.E}))}},{key:"onInsertDegree",value:function(e,n){var t=this;return(0,a.D)(this.supaBaseService.onInsertRequest("professional_practice_degree",{id_professional_practice:e,id_degree:n})).pipe((0,d.q)(1),(0,p.K)(function(e,n){return t.errorHandle(e),s.E}))}},{key:"onEditProfessionalPractice",value:function(e,n,t,r,o){var i=this;return(0,a.D)(this.supaBaseService.onUpdateRequest(this.table,{project_name:n,subject:t,duration:r,evaluation:o},e)).pipe((0,d.q)(1),(0,p.K)(function(e,n){return i.errorHandle(e),s.E}))}},{key:"onDeleteProfessionalPractice",value:function(e){var n=this;return(0,a.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,d.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),s.E}))}},{key:"onDeleteDegrees",value:function(e){var n=this;return(0,a.D)(this.supaBaseService.onDeleteMiddleTable("professional_practice_degree",e,"id_professional_practice")).pipe((0,d.q)(1),(0,p.K)(function(e,t){return n.errorHandle(e),s.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,c._)("error")}}]),n}()).\u0275fac=function(e){return new(e||o)(v.LFG(i._M),v.LFG(g.P),v.LFG(_.R))},o.\u0275prov=v.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},37027:function(e,c,d){d.d(c,{F:function(){return q}});var p,f=d(50752),v=d(94402),g=d(40205),_=d(59193),w=d(15257),k=d(93342),m=d(5304),y=d(37716),b=d(94270),S=d(1400),q=((p=function(){function e(n,t,r){l(this,e),this.apollo=n,this.supaBaseService=t,this._fuseConfirmationService=r,this.table="workshop_realization",this.tableMtM="workshop_realization_student",this.tableOtM="area_position",this.viewO="WorkshopRealizationStudentO",this.view="WorkshopRealizationStudentE"}return h(e,[{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,v.D)(this.supaBaseService.onSelectRequest(this.view,t,r,"*",n)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(n,t){return e.errorHandle(n),_.E}))}},{key:"getO",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,v.D)(this.supaBaseService.onSelectRequest(this.viewO,t,r,"*",n)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(n,t){return e.errorHandle(n),_.E}))}},{key:"getFunctionView",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.view;return(0,v.D)(this.supaBaseService.onSelectFuntionView(i,a,e,n,r,o)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),_.E}))}},{key:"getFunctionViewO",value:function(e,n){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.viewO;return(0,v.D)(this.supaBaseService.onSelectFuntionView(i,a,e,n,r,o)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),_.E}))}},{key:"insert",value:function(e){var n=this;return(0,v.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),_.E}))}},{key:"insertMtM",value:function(e){var n=this;return(0,v.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),_.E}))}},{key:"update",value:function(e,n){var t=this;return(0,v.D)(this.supaBaseService.onUpdateRequest(this.table,n,e)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),_.E}))}},{key:"delete",value:function(e){var n=this;return(0,v.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,t){return n.errorHandle(e),_.E}))}},{key:"deleteMtM",value:function(e,n){var t=this;return(0,v.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,n)).pipe((0,w.q)(1),(0,k.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,m.K)(function(e,n){return t.errorHandle(e),_.E}))}},{key:"buildQuery",value:function(e){for(var n=[],t=0;t<e.length;t+=3)if("relation"==e[t+2])n.push("".concat(e[t],':{have:{name:{matchesRegex:"').concat(e[t+1],'"}}}'));else if("student"==e[t+2])n.push("".concat(e[t],':{have:{carnet:{matchesRegex:"').concat(e[t+1],'"}}}'));else if("date"==e[t+2]){var r=new Date((e[t+1]+"T00:00:00").toString()),o=new Date((e[t+1]+"T23:59:59").toString());n.push("".concat(e[t],':{greaterThanOrEqualTo:"').concat(r.toISOString(),'", lessThanOrEqualTo:"').concat(o.toISOString(),'" }'))}else n.push("".concat(e[t],':{matchesRegex:"').concat(e[t+1],'"}'));return"".concat(n.toString())}},{key:"getWorkShopRealization",value:function(e){var t=this;return this.apollo.watchQuery({query:f.Ps(n||(n=u(['\n        query workshop_realizations {\n          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}, ',"}}, ","}) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                date\n                semester\n                id_workshop {\n                  edges {\n                    node {\n                      id\n                      name\n                      id_category{\n                        edges{\n                          node{\n                            id\n                            name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                ids_student {\n                  edges {\n                    node {\n                      id\n                      carnet\n                      first_name\n                      last_name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "])),e.includes("id_workshop")?e.substring(19,e.length-2):"",e.includes("id_workshop")?"":e),fetchPolicy:"network-only"}).valueChanges.pipe((0,w.q)(1),(0,m.K)(function(e,n){return t.errorHandle(e),_.E}))}},{key:"getWorkshops",value:function(){var e=this;return this.apollo.watchQuery({query:f.Ps(t||(t=u(['\n        query {\n          workshops(where:{id_category:{have:{name:{matchesRegex:"Empleabilidad"}}}}) {\n              pageInfo {\n              hasPreviousPage\n              hasNextPage\n              }\n              edges {\n              node {\n                  id\n                  name\n                  id_category{\n                  edges{\n                      node{\n                      id\n                      name\n                      }\n                  }\n                  }\n              }\n              }\n          }\n        }\n        ']))),fetchPolicy:"network-only"}).valueChanges.pipe((0,w.q)(1),(0,m.K)(function(n,t){return e.errorHandle(n),_.E}))}},{key:"getWorkShopRealizationO",value:function(e){var n=this;return this.apollo.watchQuery({query:f.Ps(r||(r=u(['\n        query workshop_realizations {\n          workshop_realizations(where:{id_workshop:{have:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}, ',"}}, ","}) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                date\n                semester\n                id_workshop {\n                  edges {\n                    node {\n                      id\n                      name\n                      id_category{\n                        edges{\n                          node{\n                            id\n                            name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                ids_student {\n                  edges {\n                    node {\n                      id\n                      carnet\n                      first_name\n                      last_name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "])),e.includes("id_workshop")?e.substring(19,e.length-2):"",e.includes("id_workshop")?"":e),fetchPolicy:"network-only"}).valueChanges.pipe((0,w.q)(1),(0,m.K)(function(e,t){return n.errorHandle(e),_.E}))}},{key:"getWorkshopsO",value:function(){var e=this;return this.apollo.watchQuery({query:f.Ps(o||(o=u(['\n        query {\n          workshops(where:{id_category:{have:{name:{matchesRegex:"Orientacion Estudiantil"}}}}) {\n              pageInfo {\n              hasPreviousPage\n              hasNextPage\n              }\n              edges {\n              node {\n                  id\n                  name\n                  id_category{\n                  edges{\n                      node{\n                      id\n                      name\n                      }\n                  }\n                  }\n              }\n              }\n          }\n        }\n        ']))),fetchPolicy:"network-only"}).valueChanges.pipe((0,w.q)(1),(0,m.K)(function(n,t){return e.errorHandle(n),_.E}))}},{key:"onCreateWorkShopRealization",value:function(e,n,t,r){var o=this;return this.apollo.mutate({mutation:f.Ps(i||(i=u(["\n          mutation insertWorkshop_realization(\n            $date: Date!\n            $semester: String!\n            $id_workshop: WorkshopRelationInput!\n            $id_student: StudentRelationInput!\n          ) {\n            createWorkshop_realization(\n              input: {\n                fields: {\n                  date: $date\n                  semester: $semester\n                  id_workshop: $id_workshop\n                  ids_student: $id_student\n                }\n              }\n            ) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{date:e,semester:n,id_workshop:{add:t},id_student:{add:r}}}).pipe((0,w.q)(1),(0,k.b)(function(e){window.location.reload()}),(0,m.K)(function(e,n){return o.errorHandle(e),_.E}))}},{key:"onDeleteWorkShopRealization",value:function(e){var n=this;return this.apollo.mutate({mutation:f.Ps(a||(a=u(["\n          mutation deleteWorkshop_realization($id: ID!) {\n            deleteWorkshop_realization(input: { id: $id }) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,w.q)(1),(0,m.K)(function(e,t){return n.errorHandle(e),_.E}))}},{key:"onEditWorkShopRealization",value:function(e,n,t,r,o,i,a){var l=this;return this.apollo.mutate({mutation:f.Ps(s||(s=u(["\n          mutation updateWorkshop_realization(\n            $id: ID!\n            $date: Date!\n            $semester: String!\n            $id_workshop: WorkshopRelationInput!\n            $id_student: StudentRelationInput!\n          ) {\n            updateWorkshop_realization(\n              input: {\n                id: $id\n                fields: {\n                  date: $date\n                  semester: $semester\n                  id_workshop: $id_workshop\n                  ids_student: $id_student\n                }\n              }\n            ) {\n              workshop_realization {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,date:n,semester:r,id_workshop:{remove:i,add:t},id_student:{remove:a,add:o}}}).pipe((0,w.q)(1),(0,m.K)(function(e,n){return l.errorHandle(e),_.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,g._)("error")}}]),e}()).\u0275fac=function(e){return new(e||p)(y.LFG(f._M),y.LFG(b.P),y.LFG(S.R))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p)}}])}();