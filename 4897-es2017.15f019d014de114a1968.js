"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4897],{44897:function(e,t,i){i.r(t),i.d(t,{ApplicationEmploymentModule:function(){return se}});var a=i(38583),n=i(63423),r=i(3679),o=i(36063),l=i(51095),s=i(72458),d=i(43220),u=i(1769),p=i(98295),c=i(76627),m=i(49983),g=i(67441),h=i(11494),f=i(65939),_=i(25553),Z=i(82120),b=i(40334),y=i(17068),v=i(16738),q=i.n(v),w=i(611),A=i(15257),x=i(37716),T=i(32489),k=i(1400),I=i(50752),S=i(94402),U=i(40205),D=i(59193),F=i(93342),N=i(5304),$=i(94270);let J=(()=>{class e{constructor(e,t,i){this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=i,this.table="intenship_application"}get(e=[],t=0,i=100){return e.push({field:"application_type",value:!0,type:"eq",subfield:null}),(0,S.D)(this.supaBaseService.onSelectRequest(this.table,t,i,"id,updated_at,created_at,feedback,start_date,survey_received1,survey_received2,end_date,status,survey_sent1,survey_sent2,application_type,id_student!inner(*),id_opportunity!inner(*)",e)).pipe((0,A.q)(1),(0,F.b)(e=>{if(null!=e.error)throw(0,U._)(e.error)}),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}insert(e){return(0,S.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,A.q)(1),(0,F.b)(e=>{if(null!=e.error)throw(0,U._)(e.error)}),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}update(e,t){return(0,S.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,A.q)(1),(0,F.b)(e=>{if(null!=e.error)throw(0,U._)(e.error)}),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}delete(e){return(0,S.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,A.q)(1),(0,F.b)(e=>{if(null!=e.error)throw(0,U._)(e.error)}),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}buildQuery(e){let t,i=[];for(let a=0;a<e.length;a+=3)if("relation"==e[a+2])i.push(`${e[a]}:{have:{name:{matchesRegex:"${e[a+1]}"}}}`);else if("student"==e[a+2])i.push(`${e[a]}:{have:{carnet:{matchesRegex:"${e[a+1]}"}}}`);else if("bool"==e[a+2])t="Si"==e[a+1],i.push(`${e[a]}:{equalTo:${t}}`);else if("date"==e[a+2]){let t=new Date((e[a+1]+"T00:00:00").toString()),n=new Date((e[a+1]+"T23:59:59").toString());i.push(`${e[a]}:{greaterThanOrEqualTo:"${t.toISOString()}", lessThanOrEqualTo:"${n.toISOString()}" }`)}else i.push(`${e[a]}:{matchesRegex:"${e[a+1]}"}`);return`${i.toString()}`}getIntenshipApplications(e){return this.apollo.watchQuery({query:I.Ps`
          query intenship_applications {
            intenship_applications(where:{application_type:{equalTo:false},${e}}) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                    id
                    id_opportunity {
                      edges {
                        node {
                          id
                          name
                          position
                          available_spaces
                        }
                      }
                    }
                    id_student {
                      edges {
                        node {
                          id
                          carnet
                          first_name
                          last_name
                        }
                      }
                    }

                    feedback
                    start_date
                    end_date
                    status
                    survey_sent1
                    survey_sent2
                    survey_received1
                    survey_received2
                  }
              }
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,A.q)(1),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}getProgramType(){return this.apollo.watchQuery({query:I.Ps`
          query listProgramType {
            program_types {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        `,fetchPolicy:"network-only"}).valueChanges.pipe((0,A.q)(1),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}onCreateIntenshipApplications(e,t,i,a,n,r,o,l,s,d){return this.apollo.mutate({mutation:I.Ps`
          mutation createIntenship_application(
            $feedback: String!
            $start_date: Date!
            $end_date: Date!
            $status: Boolean!
            $survey_sent1: Boolean!
            $survey_sent2: Boolean!
            $survey_received1: Boolean!
            $survey_received2: Boolean!
            $id_student: StudentRelationInput!
            $id_opportunity: OpportunityRelationInput!
          ) {
            createIntenship_application(
              input: {
                fields: {
                  feedback: $feedback
                  start_date: $start_date
                  end_date: $end_date
                  status: $status
                  survey_sent1: $survey_sent1
                  survey_sent2: $survey_sent2
                  survey_received1: $survey_received1
                  survey_received2: $survey_received2
                  id_student: $id_student
                  id_opportunity: $id_opportunity
                  application_type: false
                }
              }
            ) {
              intenship_application {
                id
              }
            }
          }
        `,variables:{feedback:e,start_date:t,end_date:i,status:a,survey_sent1:n,survey_sent2:r,survey_received1:o,survey_received2:l,id_student:{add:s},id_opportunity:{add:d}}}).pipe((0,A.q)(1),(0,F.b)(e=>{window.location.reload()}),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}onEditIntenshipApplications(e,t,i,a,n,r,o,l,s,d,u,p,c){return this.apollo.mutate({mutation:I.Ps`
          mutation updateIntenship_application(
            $id: ID!
            $feedback: String!
            $start_date: Date!
            $end_date: Date!
            $status: Boolean!
            $survey_sent1: Boolean!
            $survey_sent2: Boolean!
            $survey_received1: Boolean!
            $survey_received2: Boolean!
            $id_student: StudentRelationInput!
            $id_opportunity: OpportunityRelationInput!
          ) {
            updateIntenship_application(
              input: {
                id: $id
                fields: {
                  feedback: $feedback
                  start_date: $start_date
                  end_date: $end_date
                  status: $status
                  survey_sent1: $survey_sent1
                  survey_sent2: $survey_sent2
                  survey_received1: $survey_received1
                  survey_received2: $survey_received2
                  id_student: $id_student
                  id_opportunity: $id_opportunity
                  application_type: false
                }
              }
            ) {
              intenship_application {
                id
              }
            }
          }
        `,variables:{id:e,feedback:t,start_date:i,end_date:a,status:n,survey_sent1:r,survey_sent2:o,survey_received1:l,survey_received2:s,id_opportunity:{remove:p,add:u},id_student:{remove:c,add:d}}}).pipe((0,A.q)(1),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}onDeleteIntenshipApplications(e){return this.apollo.mutate({mutation:I.Ps`
          mutation deleteIntenship_application($id: ID!) {
            deleteIntenship_application(input: { id: $id }) {
              intenship_application {
                id
              }
            }
          }
        `,variables:{id:e}}).pipe((0,A.q)(1),(0,N.K)((e,t)=>(this.errorHandle(e),D.E)))}onSuccessDialog(e){this._fuseConfirmationService.open({title:"Alerta",message:`Se ${e} el registro correctamente.`,icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}errorHandle(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,U._)("error")}}return e.\u0275fac=function(t){return new(t||e)(x.LFG(I._M),x.LFG($.P),x.LFG(k.R))},e.\u0275prov=x.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=i(60758),E=i(9685),O=i(22238),Y=i(26927),C=i(86640),L=i(45396),M=i(99692);function R(e,t){if(1&e&&(x.TgZ(0,"div",68),x.TgZ(1,"div",69),x.TgZ(2,"div",70),x.TgZ(3,"h5",71),x._uU(4),x.qZA(),x.qZA(),x.qZA(),x.qZA()),2&e){const e=t.item,i=t.searchTerm;x.xp6(3),x.Q6J("ngOptionHighlight",i),x.xp6(1),x.AsE(" ",e.name," - ",e.position," ")}}function j(e,t){if(1&e&&(x.TgZ(0,"div",68),x.TgZ(1,"div",69),x.TgZ(2,"div",70),x.TgZ(3,"h5",71),x._uU(4),x.qZA(),x.qZA(),x.qZA(),x.qZA()),2&e){const e=t.item,i=t.searchTerm;x.xp6(3),x.Q6J("ngOptionHighlight",i),x.xp6(1),x.lnq(" ",e.carnet," - ",e.first_name," -",e.last_name," ")}}function z(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function B(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function H(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function P(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function V(e,t){if(1&e&&(x.ynx(0),x.TgZ(1,"mat-option",72),x._uU(2),x.qZA(),x.BQk()),2&e){const e=t.$implicit;x.xp6(1),x.Q6J("value",e),x.xp6(1),x.Oqu(e.label)}}function G(e,t){1&e&&(x.TgZ(0,"span"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function K(e,t){if(1&e&&(x.ynx(0),x.TgZ(1,"th",55),x._uU(2),x.qZA(),x.BQk()),2&e){const e=t.$implicit;x.xp6(2),x.hij(" ",e.label," ")}}function X(e,t){if(1&e){const e=x.EpF();x.TgZ(0,"tr",73),x.TgZ(1,"td",74),x._uU(2),x.qZA(),x.TgZ(3,"td",74),x._uU(4),x.qZA(),x.TgZ(5,"td",75),x._uU(6),x.qZA(),x.TgZ(7,"td",74),x._uU(8),x.ALo(9,"date"),x.qZA(),x.TgZ(10,"td",74),x._uU(11),x.ALo(12,"date"),x.qZA(),x.TgZ(13,"td",74),x._uU(14),x.qZA(),x.TgZ(15,"td",74),x.TgZ(16,"div",76),x.TgZ(17,"button",77),x.NdJ("click",function(){const t=x.CHM(e).$implicit;return x.oxw().toggleDrawerOpen("leftDrawer",t)}),x.TgZ(18,"mat-icon",78),x.O4$(),x.TgZ(19,"svg",79),x._UZ(20,"path",80),x.qZA(),x.qZA(),x.kcU(),x._UZ(21,"span",81),x.qZA(),x.TgZ(22,"button",82),x.NdJ("click",function(){const t=x.CHM(e).$implicit;return x.oxw().onDeleteRegistry(t.id)}),x.TgZ(23,"mat-icon",83),x.O4$(),x.TgZ(24,"svg",79),x._UZ(25,"path",84),x.qZA(),x.qZA(),x.kcU(),x._UZ(26,"span",81),x.qZA(),x.TgZ(27,"button",77),x.NdJ("click",function(){const t=x.CHM(e).$implicit;return x.oxw().onShowRowDialog(t)}),x.TgZ(28,"mat-icon"),x._uU(29,"info"),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA()}if(2&e){const e=t.$implicit;x.xp6(2),x.hij(" ",null!=e.id_opportunity?e.id_opportunity.name+" "+e.id_opportunity.position+" "+e.id_opportunity.available_spaces:""," "),x.xp6(2),x.hij(" ",null!=e.id_student?e.id_student.carnet+" "+e.id_student.first_name+" "+e.id_student.last_name:""," "),x.xp6(2),x.hij(" ",e.feedback," "),x.xp6(2),x.hij(" ",x.xi3(9,6,e.start_date,"yyyy-MM-dd")," "),x.xp6(3),x.hij(" ",x.xi3(12,9,e.end_date,"yyyy-MM-dd")," "),x.xp6(3),x.hij(" ",e.status?"Si":"No"," ")}}function W(e,t){if(1&e&&(x.TgZ(0,"div",68),x.TgZ(1,"div",69),x.TgZ(2,"div",70),x.TgZ(3,"h5",71),x._uU(4),x.qZA(),x.qZA(),x.qZA(),x.qZA()),2&e){const e=t.item,i=t.searchTerm;x.xp6(3),x.Q6J("ngOptionHighlight",i),x.xp6(1),x.AsE(" ",e.name," - ",e.position," ")}}function ee(e,t){if(1&e&&(x.TgZ(0,"div",68),x.TgZ(1,"div",69),x.TgZ(2,"div",70),x.TgZ(3,"h5",71),x._uU(4),x.qZA(),x.qZA(),x.qZA(),x.qZA()),2&e){const e=t.item,i=t.searchTerm;x.xp6(3),x.Q6J("ngOptionHighlight",i),x.xp6(1),x.lnq(" ",e.carnet," - ",e.first_name," -",e.last_name," ")}}function te(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function ie(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function ae(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}function ne(e,t){1&e&&(x.TgZ(0,"mat-error"),x._uU(1,"Debe ingresar este campo!!"),x.qZA())}let re=(()=>{class e{constructor(e,t,i,a,n,o,l){this._fuseDrawerService=e,this._fuseConfirmationService=t,this.employmentApplicationService=i,this.studentService=a,this.opportunityService=n,this.dialog=o,this.aRoute=l,this.years=[{name:"Primer a\xf1o",tableDisplay:"1ro",value:"1"},{name:"Segundo a\xf1o",tableDisplay:"2do",value:"2"},{name:"Tercero a\xf1o",tableDisplay:"3ro",value:"3"},{name:"Cuarto a\xf1o",tableDisplay:"4to",value:"4"},{name:"Quinto a\xf1o",tableDisplay:"5to",value:"5"},{name:"Graduado",tableDisplay:"Grad",value:"6"},{name:"Egresados",tableDisplay:"Egr",value:"7"}],this.fields=[{label:"Oportunidad empleo",field:"id_opportunity",type:"relation",searchable:!0,placeholder:"Selecione la oportunidad empleo"},{label:"Aplicacion estudiante",field:"id_student",type:"student",searchable:!0,placeholder:"Selecione al estudiante"},{label:"Retroalimentacion",field:"feedback",type:"field",searchable:!0,placeholder:"Ingrese el nombre de la opportunidad"},{label:"Fecha inicio",field:"start_date",type:"date",searchable:!0,placeholder:"Ingrese el nombre de la opportunidad"},{label:"Fecha fin",field:"end_date",type:"date",searchable:!0,placeholder:"Ingrese el nombre de la opportunidad"},{label:"Estado (Quedo o no)",field:"status",type:"bool",searchable:!0,placeholder:"Ingrese el nombre de la opportunidad"}],this.listRegistry=[],this.listStudent=[],this.listOpportunity=[],this.opportunity="",this.opportunityE="",this.student="",this.studentE="",this.newForm=new r.cw({feedback:new r.NI("",[]),start_date:new r.NI(new Date,[r.kI.minLength(3),r.kI.required]),end_date:new r.NI(new Date,[r.kI.minLength(3),r.kI.required]),status:new r.NI(!1,[r.kI.required]),survey_sent1:new r.NI(!1,[r.kI.required]),survey_sent2:new r.NI(!1,[r.kI.required]),survey_received1:new r.NI(!1,[r.kI.required]),survey_received2:new r.NI(!1,[r.kI.required]),id_opportunity:new r.NI(null,[r.kI.required]),id_student:new r.NI(null,[r.kI.required])}),this.searchForm=new r.cw({field:new r.NI(this.fields[0],[r.kI.minLength(1),r.kI.required]),value:new r.NI("",[r.kI.minLength(1),r.kI.required])}),this.editForm=new r.cw({id:new r.NI("",[r.kI.minLength(3),r.kI.required]),feedback:new r.NI("",[]),start_date:new r.NI(new Date,[r.kI.minLength(3),r.kI.required]),end_date:new r.NI(new Date,[r.kI.minLength(3),r.kI.required]),status:new r.NI(!1,[r.kI.required]),survey_sent1:new r.NI(!1,[r.kI.required]),survey_sent2:new r.NI(!1,[r.kI.required]),survey_received1:new r.NI(!1,[r.kI.required]),survey_received2:new r.NI(!1,[r.kI.required]),id_opportunity:new r.NI(null,[r.kI.required]),id_student:new r.NI(null,[r.kI.required])}),this.pagination={length:100,pageSize:10,pageIndex:0,pageSizeOptions:[5,10,25,50,100],showFirstLastButtons:!1};let s=[];this.aRoute.queryParams.pipe((0,A.q)(1)).subscribe(e=>{if(e&&e.opportunity){const t={field:"id_opportunity",value:Number(e.opportunity),type:"eq",subfield:"id"};s.push(t)}}),this.onLoadMainData(s),this.onLoadStudent(null),this.onLoadOpportunity(null)}handlePageEvent(e){this.pagination.length=e.length,this.pagination.pageSize=e.pageSize,this.pagination.pageIndex=e.pageIndex,this.onLoadMainData()}onLoadMainData(e=[]){this.employmentApplicationService.get(e,this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize).subscribe(e=>{this.listRegistry=e.data})}onSearchMainData(){this.searchForm.valid&&this.opportunityService.get([{field:this.searchForm.controls.field.value.field,value:this.searchForm.controls.value.value,type:this.searchForm.controls.field.value.type,subfield:this.searchForm.controls.field.value.subfield}],this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize+1).subscribe(e=>{this.listRegistry=e.data})}onLoadStudent(e){if(null!=e){const t=e.term.split(" "),i={field:"first_name",value:null!=t[1]?t[1]:"",type:"",subfield:null},a={field:"last_name",value:null!=t[1]?t[1]:"",type:"",subfield:null};t.push({field:"carnet",value:null!=t[0]?t[0]:"",type:"",subfield:null}),t.push(i),t.push(a)}this.studentService.get([]).subscribe(e=>{this.listStudent=e.data})}onLoadOpportunity(e){if(null!=e){const t=e.term.split(" "),i={field:"position",value:null!=t[1]?t[1]:"",type:"",subfield:null};t.push({field:"name",value:null!=t[0]?t[0]:"",type:"",subfield:null}),t.push(i)}this.opportunityService.get([]).subscribe(e=>{this.listOpportunity=e.data})}ngOnInit(){}onShowRowDialog(e){this.dialog.open(w.A,{width:"610px",data:{row:e,fields:[["codigo","number",!1],["Ultima actualizacion","date",!0],["Creado","date",!0],["Retroalimentacion","string",!0],["Fecha inicio","date",!0],["Recibio encuesta 1","bool",!0],["Recibio encuesta 2","bool",!0],["Fecha fin","date",!0],["Estado (Quedo o no)","bool",!0],["Envio encuesta 1","bool",!0],["Envio encuesta 2","bool",!0],["Tipo de aplicacion","string",!1],["Estudiante","object",!0,"carnet","first_name","last_name"],["Oportunidad","object",!0,"name","position","type"]]}}).afterClosed().subscribe(e=>{})}onEditRegistry(e){if(this.editForm.valid){let t=this.editForm.getRawValue();t.start_date=q()(t.start_date).format("YYYY-MM-DD"),t.end_date=q()(t.start_date).format("YYYY-MM-DD");const i=t.id;delete t.id,this.employmentApplicationService.update(i,t).subscribe(t=>{this._fuseDrawerService.getComponent(e).toggle(),this.employmentApplicationService.onSuccessDialog("actualizo"),this.onLoadMainData()})}}onNewRegistry(){if(this.newForm.valid){let e=this.newForm.getRawValue();e.start_date=q()(e.start_date).format("YYYY-MM-DD"),e.end_date=q()(e.start_date).format("YYYY-MM-DD"),e.application_type=!0,this.employmentApplicationService.insert(e).subscribe(e=>{this.employmentApplicationService.onSuccessDialog("creo"),this.newForm.reset(),this.newForm.controls.status.setValue(!1),this.newForm.controls.survey_sent1.setValue(!1),this.newForm.controls.survey_sent2.setValue(!1),this.newForm.controls.survey_received1.setValue(!1),this.newForm.controls.survey_received2.setValue(!1),this.onLoadMainData()})}}onDeleteRegistry(e){this._fuseConfirmationService.open({title:"Alerta",message:"Desea eliminar este registro?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"warning"},actions:{confirm:{show:!0,label:"Si",color:"primary"},cancel:{show:!0,label:"No"}},dismissible:!1}).afterClosed().subscribe(t=>{"confirmed"==t&&this.employmentApplicationService.delete(e).subscribe(e=>{this.onLoadMainData()})})}onStudenDialogOppotunity(e){this.dialog.open(b.e,{width:"1200px",disableClose:!0,data:{action:"select",type:e,opportunity:"new"==e?this.newForm.controls.id_opportunity.value:this.editForm.controls.id_opportunity.value}}).afterClosed().subscribe(t=>{switch(t.code){case"onSaveSelection":"new"==e?(this.opportunity=t.opportunity.name+", "+t.opportunity.position+", "+t.opportunity.type,this.newForm.controls.id_opportunity.setValue(t.opportunity.id)):(this.opportunityE=t.opportunity.name+", "+t.opportunity.position+", "+t.opportunity.type,this.editForm.controls.id_opportunity.setValue(t.opportunity.id));break;case"onSelectionCancel":"new"==e&&(this.opportunity="",this.newForm.controls.id_opportunity.setValue(null))}})}onStudenDialogStudent(e){this.dialog.open(y.o,{width:"1200px",disableClose:!0,data:{action:"select",type:e,student:"new"==e?this.newForm.controls.id_student.value:this.editForm.controls.id_student.value}}).afterClosed().subscribe(t=>{switch(t.code){case"onSaveSelection":"new"==e?(this.student=t.student.carnet+", "+t.student.first_name+", "+t.student.last_name,this.newForm.controls.id_student.setValue(t.student.id)):(this.studentE=t.student.carnet+", "+t.student.first_name+", "+t.student.last_name,this.editForm.controls.id_student.setValue(t.student.id));break;case"onSelectionCancel":"new"==e&&(this.student="",this.newForm.controls.id_student.setValue(null))}})}toggleDrawerOpen(e,t){t&&(this.editForm.controls.id.setValue(t.id),this.editForm.controls.feedback.setValue(t.feedback),this.editForm.controls.start_date.setValue(t.start_date),this.editForm.controls.end_date.setValue(t.end_date),this.editForm.controls.status.setValue(t.status),this.editForm.controls.id_opportunity.setValue(t.id_opportunity.id),this.editForm.controls.id_student.setValue(t.id_student.id)),this._fuseDrawerService.getComponent(e).toggle()}}return e.\u0275fac=function(t){return new(t||e)(x.Y36(T._),x.Y36(k.R),x.Y36(J),x.Y36(Q.q),x.Y36(E.E),x.Y36(O.uw),x.Y36(n.gz))},e.\u0275cmp=x.Xpm({type:e,selectors:[["app-application-employment"]],decls:160,vars:76,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","pt-6","sm:px-4","sm:pb-4","relative","flex","overflow-hidden"],[1,"w-3/5","make-drawer-content-scrollable",3,"name","opened","mode"],[1,"flex","justify-center","h-400","min-h-400","max-h-400","border-2","border-dashed","border-gray-300","p-6"],[1,"ng-untouched","ng-pristine","ng-valid",3,"formGroup"],[1,"flex","flex-col","mt-2","bg-card","shadow","rounded"],[1,"p-8","bg-gray-50","dark:bg-gray-700"],[1,"text-lg","font-medium"],[1,"text-secondary"],["role","separator","aria-orientation","horizontal",1,"mat-divider","mat-divider-horizontal"],[1,"mt-4","p-2","pb-2"],["appearance","outline","bindLabel","name","bindValue","id","formControlName","id_opportunity",1,"mt-2",3,"items","multiple","closeOnSelect","hideSelected","placeholder","search"],["ng-option-tmp",""],["appearance","outline","bindLabel","carnet","bindValue","id","formControlName","id_student",1,"mt-2",3,"items","multiple","closeOnSelect","hideSelected","placeholder","search"],[1,"fuse-mat-no-subscript","w-full"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","formControlName","feedback",3,"placeholder"],[4,"ngIf"],["matInput","","formControlName","start_date",3,"matDatepicker","placeholder"],["matSuffix","",3,"for"],["start_dateE",""],["matInput","","formControlName","end_date",3,"matDatepicker","placeholder"],["end_dateE",""],[1,"flex","items-center","justify-between"],[1,"flex-auto","leading-6","cursor-pointer",3,"click"],["formControlName","status",1,"ml-2",3,"color"],["status",""],[1,"flex","items-center","justify-end","mt-10"],["mat-button","",1,"mat-focus-indicator","mat-button","mat-button-base",3,"click"],[1,"mat-button-wrapper"],["matripple","","ng-reflect-disabled","false","ng-reflect-centered","false","ng-reflect-trigger","[object HTMLButtonElement]",1,"mat-ripple","mat-button-ripple"],[1,"mat-button-focus-overlay"],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary"],["type","submit",1,"mat-button-wrapper",3,"click"],[1,"w-full","h-full",3,"animationDuration"],["label","Ver registros"],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","","formControlName","value"],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"min-w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],["class","bg-white border-b hover:bg-gray-300",4,"ngFor","ngForOf"],[1,"mt-14"],["aria-label","Select page",1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex","page"],["label","Agregar"],[1,"px-4","w-full","border-2","border-dashed","border-gray-300","rounded-2xl"],[1,"flex","flex-col","mt-8","bg-card","shadow","rounded","overflow-hidden"],[1,"mt-8","p-8","pb-4"],["start_dateN",""],["end_dateN",""],["submit","none","mat-button","",1,"mat-focus-indicator","mat-button","mat-button-base"],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary",3,"click"],["type","none",1,"mat-button-wrapper"],[1,"my-2","py-4","px-5","rounded-lg","bg-gray-200","dark:bg-gray-800"],[1,"card"],[1,"card-body"],[1,"card-title","text-2xl","font-semibold","leading-tight",3,"ngOptionHighlight"],[3,"value"],[1,"bg-white","border-b","hover:bg-gray-300"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-amber-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","mail","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","mat-icon-no-color"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"],[1,"ml-2"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-red-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","phone","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","mat-icon-no-color"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]],template:function(e,t){if(1&e){const e=x.EpF();x.TgZ(0,"div",0),x.TgZ(1,"div",1),x.TgZ(2,"div",2),x.TgZ(3,"div",3),x.TgZ(4,"div"),x.TgZ(5,"a",4),x._uU(6,"Empleabilidad"),x.qZA(),x.qZA(),x.qZA(),x.TgZ(7,"div",5),x.TgZ(8,"h2",6),x._uU(9," Administracion de aplicaciones empleos "),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.TgZ(10,"div",7),x.TgZ(11,"fuse-drawer",8),x.TgZ(12,"div",9),x.TgZ(13,"form",10),x.TgZ(14,"div",11),x.TgZ(15,"div",12),x.TgZ(16,"p",13),x._uU(17," Formulario de modificaci\xf3n de una aplicacion a empleo "),x.qZA(),x.TgZ(18,"p",14),x._uU(19,"Rellene los campos a continuacion."),x.qZA(),x.qZA(),x._UZ(20,"mat-divider",15),x.TgZ(21,"div",16),x.ynx(22),x.TgZ(23,"mat-label"),x._uU(24),x.qZA(),x.TgZ(25,"ng-select",17),x.NdJ("search",function(e){return t.onLoadOpportunity(e)}),x.YNc(26,R,5,3,"ng-template",18),x.qZA(),x.TgZ(27,"mat-label"),x._uU(28),x.qZA(),x.TgZ(29,"ng-select",19),x.NdJ("search",function(e){return t.onLoadStudent(e)}),x.YNc(30,j,5,4,"ng-template",18),x.qZA(),x.TgZ(31,"mat-form-field",20),x.TgZ(32,"mat-label"),x._uU(33),x.qZA(),x._UZ(34,"mat-icon",21),x._UZ(35,"input",22),x.qZA(),x.YNc(36,z,2,0,"mat-error",23),x.TgZ(37,"mat-form-field",20),x.TgZ(38,"mat-label"),x._uU(39),x.qZA(),x._UZ(40,"input",24),x._UZ(41,"mat-datepicker-toggle",25),x._UZ(42,"mat-datepicker",null,26),x.qZA(),x.YNc(44,B,2,0,"mat-error",23),x.TgZ(45,"mat-form-field",20),x.TgZ(46,"mat-label"),x._uU(47),x.qZA(),x._UZ(48,"input",27),x._UZ(49,"mat-datepicker-toggle",25),x._UZ(50,"mat-datepicker",null,28),x.qZA(),x.YNc(52,H,2,0,"mat-error",23),x.TgZ(53,"div",29),x.TgZ(54,"div",30),x.NdJ("click",function(){return x.CHM(e),x.MAs(57).toggle()}),x._uU(55),x.qZA(),x._UZ(56,"mat-slide-toggle",31,32),x.YNc(58,P,2,0,"mat-error",23),x.qZA(),x.BQk(),x.qZA(),x.qZA(),x.TgZ(59,"div",33),x.TgZ(60,"button",34),x.NdJ("click",function(){return t.toggleDrawerOpen("leftDrawer")}),x.TgZ(61,"span",35),x._uU(62," Cancelar "),x.qZA(),x._UZ(63,"span",36),x._UZ(64,"span",37),x.qZA(),x.TgZ(65,"button",38),x.TgZ(66,"button",39),x.NdJ("click",function(){return t.onEditRegistry("leftDrawer")}),x._uU(67," Guardar"),x.qZA(),x._UZ(68,"span",36),x._UZ(69,"span",37),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.TgZ(70,"mat-tab-group",40),x.TgZ(71,"mat-tab",41),x.TgZ(72,"div",42),x.TgZ(73,"form",43),x.TgZ(74,"button",44),x.NdJ("click",function(){return t.onLoadMainData()}),x.TgZ(75,"span",45),x.TgZ(76,"span"),x._uU(77,"Reset"),x.qZA(),x.qZA(),x.qZA(),x.TgZ(78,"mat-form-field",46),x.TgZ(79,"mat-select",47),x.YNc(80,V,3,2,"ng-container",48),x.qZA(),x.qZA(),x.TgZ(81,"mat-form-field",49),x._UZ(82,"mat-icon",50),x._UZ(83,"input",51),x.TgZ(84,"mat-error"),x.YNc(85,G,2,0,"span",23),x.qZA(),x.qZA(),x.TgZ(86,"button",52),x.NdJ("click",function(){return t.onSearchMainData()}),x.TgZ(87,"span",45),x.TgZ(88,"span"),x._uU(89,"Buscar"),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.ynx(90),x.TgZ(91,"table",53),x.TgZ(92,"thead",54),x.TgZ(93,"tr"),x.YNc(94,K,3,1,"ng-container",48),x.TgZ(95,"th",55),x._uU(96," Acciones "),x.qZA(),x.qZA(),x.qZA(),x.TgZ(97,"tbody"),x.YNc(98,X,30,12,"tr",56),x.qZA(),x.qZA(),x.TgZ(99,"div",57),x.TgZ(100,"mat-paginator",58),x.NdJ("page",function(e){return t.handlePageEvent(e)}),x.qZA(),x.qZA(),x.BQk(),x.qZA(),x.qZA(),x.TgZ(101,"mat-tab",59),x.TgZ(102,"div",60),x.TgZ(103,"form",10),x.TgZ(104,"div",61),x.TgZ(105,"div",12),x.TgZ(106,"p",13),x._uU(107," Formulario de registro de una aplicacion a empleo "),x.qZA(),x.TgZ(108,"p",14),x._uU(109,"Rellene los campos a continuacion."),x.qZA(),x.qZA(),x._UZ(110,"mat-divider",15),x.TgZ(111,"div",62),x.ynx(112),x.TgZ(113,"mat-label"),x._uU(114),x.qZA(),x.TgZ(115,"ng-select",17),x.NdJ("search",function(e){return t.onLoadOpportunity(e)}),x.YNc(116,W,5,3,"ng-template",18),x.qZA(),x.TgZ(117,"mat-label"),x._uU(118),x.qZA(),x.TgZ(119,"ng-select",19),x.NdJ("search",function(e){return t.onLoadStudent(e)}),x.YNc(120,ee,5,4,"ng-template",18),x.qZA(),x.TgZ(121,"mat-form-field",20),x.TgZ(122,"mat-label"),x._uU(123),x.qZA(),x._UZ(124,"mat-icon",21),x._UZ(125,"input",22),x.qZA(),x.YNc(126,te,2,0,"mat-error",23),x.TgZ(127,"mat-form-field",20),x.TgZ(128,"mat-label"),x._uU(129),x.qZA(),x._UZ(130,"input",24),x._UZ(131,"mat-datepicker-toggle",25),x._UZ(132,"mat-datepicker",null,63),x.qZA(),x.YNc(134,ie,2,0,"mat-error",23),x.TgZ(135,"mat-form-field",20),x.TgZ(136,"mat-label"),x._uU(137),x.qZA(),x._UZ(138,"input",27),x._UZ(139,"mat-datepicker-toggle",25),x._UZ(140,"mat-datepicker",null,64),x.qZA(),x.YNc(142,ae,2,0,"mat-error",23),x.TgZ(143,"div",29),x.TgZ(144,"div",30),x.NdJ("click",function(){return x.CHM(e),x.MAs(57).toggle()}),x._uU(145),x.qZA(),x._UZ(146,"mat-slide-toggle",31,32),x.YNc(148,ne,2,0,"mat-error",23),x.qZA(),x.BQk(),x.qZA(),x.qZA(),x.TgZ(149,"div",33),x.TgZ(150,"a",65),x.TgZ(151,"span",35),x._uU(152," Cancelar "),x.qZA(),x._UZ(153,"span",36),x._UZ(154,"span",37),x.qZA(),x.TgZ(155,"button",66),x.NdJ("click",function(){return t.onNewRegistry()}),x.TgZ(156,"span",67),x._uU(157,"Agregar"),x.qZA(),x._UZ(158,"span",36),x._UZ(159,"span",37),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA(),x.qZA()}if(2&e){const e=x.MAs(43),i=x.MAs(51),a=x.MAs(133),n=x.MAs(141);x.xp6(11),x.Q6J("name","leftDrawer")("opened",!1)("mode","side"),x.xp6(2),x.Q6J("formGroup",t.editForm),x.xp6(11),x.hij("",null==t.fields[0]?null:t.fields[0].label,":"),x.xp6(1),x.Q6J("items",t.listOpportunity)("multiple",!1)("closeOnSelect",!0)("hideSelected",!1)("placeholder",null==t.fields[0]?null:t.fields[0].placeholder),x.xp6(3),x.hij("",null==t.fields[1]?null:t.fields[1].label,":"),x.xp6(1),x.Q6J("items",t.listStudent)("multiple",!1)("closeOnSelect",!0)("hideSelected",!1)("placeholder",null==t.fields[1]?null:t.fields[1].placeholder),x.xp6(4),x.hij("",null==t.fields[2]?null:t.fields[2].label,":"),x.xp6(1),x.Q6J("svgIcon","heroicons_solid:briefcase"),x.xp6(1),x.Q6J("placeholder",null==t.fields[1]?null:t.fields[1].placeholder),x.xp6(1),x.Q6J("ngIf",t.editForm.get("feedback").hasError("required")&&t.editForm.get("feedback").touched),x.xp6(3),x.hij("",null==t.fields[3]?null:t.fields[3].label,":"),x.xp6(1),x.Q6J("matDatepicker",e)("placeholder",null==t.fields[3]?null:t.fields[3].placeholder),x.xp6(1),x.Q6J("for",e),x.xp6(3),x.Q6J("ngIf",t.editForm.get("start_date").hasError("required")&&t.editForm.get("start_date").touched),x.xp6(3),x.hij("",null==t.fields[4]?null:t.fields[4].label,":"),x.xp6(1),x.Q6J("matDatepicker",i)("placeholder",null==t.fields[4]?null:t.fields[4].placeholder),x.xp6(1),x.Q6J("for",i),x.xp6(3),x.Q6J("ngIf",t.editForm.get("end_date").hasError("required")&&t.editForm.get("end_date").touched),x.xp6(3),x.hij(" ",null==t.fields[5]?null:t.fields[5].label," "),x.xp6(1),x.Q6J("color","primary"),x.xp6(2),x.Q6J("ngIf",t.editForm.get("status").hasError("required")&&t.editForm.get("status").touched),x.xp6(12),x.Q6J("animationDuration","0"),x.xp6(3),x.Q6J("formGroup",t.searchForm),x.xp6(7),x.Q6J("ngForOf",t.fields),x.xp6(1),x.Q6J("floatLabel","always"),x.xp6(1),x.Q6J("svgIcon","heroicons_solid:search"),x.xp6(3),x.Q6J("ngIf",t.searchForm.get("value").hasError("required")&&t.searchForm.get("value").touched),x.xp6(9),x.Q6J("ngForOf",t.fields),x.xp6(4),x.Q6J("ngForOf",t.listRegistry),x.xp6(2),x.Q6J("length",t.pagination.length)("pageSize",t.pagination.pageSize)("showFirstLastButtons",t.pagination.showFirstLastButtons)("pageSizeOptions",t.pagination.pageSizeOptions)("pageIndex",t.pagination.pageIndex),x.xp6(3),x.Q6J("formGroup",t.newForm),x.xp6(11),x.hij("",null==t.fields[0]?null:t.fields[0].label,":"),x.xp6(1),x.Q6J("items",t.listOpportunity)("multiple",!1)("closeOnSelect",!0)("hideSelected",!1)("placeholder",null==t.fields[0]?null:t.fields[0].placeholder),x.xp6(3),x.hij("",null==t.fields[1]?null:t.fields[1].label,":"),x.xp6(1),x.Q6J("items",t.listStudent)("multiple",!1)("closeOnSelect",!0)("hideSelected",!1)("placeholder",null==t.fields[1]?null:t.fields[1].placeholder),x.xp6(4),x.hij("",null==t.fields[2]?null:t.fields[2].label,":"),x.xp6(1),x.Q6J("svgIcon","heroicons_solid:briefcase"),x.xp6(1),x.Q6J("placeholder",null==t.fields[1]?null:t.fields[1].placeholder),x.xp6(1),x.Q6J("ngIf",t.newForm.get("feedback").hasError("required")&&t.newForm.get("feedback").touched),x.xp6(3),x.hij("",null==t.fields[3]?null:t.fields[3].label,":"),x.xp6(1),x.Q6J("matDatepicker",a)("placeholder",null==t.fields[3]?null:t.fields[3].placeholder),x.xp6(1),x.Q6J("for",a),x.xp6(3),x.Q6J("ngIf",t.newForm.get("start_date").hasError("required")&&t.newForm.get("start_date").touched),x.xp6(3),x.hij("",null==t.fields[4]?null:t.fields[4].label,":"),x.xp6(1),x.Q6J("matDatepicker",n)("placeholder",null==t.fields[4]?null:t.fields[4].placeholder),x.xp6(1),x.Q6J("for",n),x.xp6(3),x.Q6J("ngIf",t.newForm.get("end_date").hasError("required")&&t.newForm.get("end_date").touched),x.xp6(3),x.hij(" ",null==t.fields[5]?null:t.fields[5].label," "),x.xp6(1),x.Q6J("color","primary"),x.xp6(2),x.Q6J("ngIf",t.newForm.get("status").hasError("required")&&t.newForm.get("status").touched)}},directives:[Y.F,r._Y,r.JL,r.sg,u.d,p.hX,C.w9,r.JJ,r.u,C.Z2,p.KE,c.Hw,p.qo,m.Nt,r.Fj,a.O5,d.hl,d.nW,p.R9,d.Mq,L.Rr,l.lW,f.SP,f.uX,g.gD,a.sg,p.TO,M.NW,l.zs,s.ey],pipes:[a.uU],styles:[""]}),e})();var oe=i(3937);const le=[{path:"",component:re}];let se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x.oAB({type:e}),e.\u0275inj=x.cJS({providers:[{provide:s._A,useClass:o.t7,deps:[s.Ad]},{provide:s.sG,useValue:o.$o}],imports:[[a.ez,n.Bz.forChild(le),_.J,c.Ps,f.Nh,u.t,p.lN,m.c,Z.k,g.LD,r.UX,r.u5,h.JX,l.ot,d.FA,L.rP,oe.c,C.A0,M.TU]]}),e})()}}]);