!function(){"use strict";var e,t,n,r,i,o,a,s;function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}}).apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9269],{36063:function(e,t,n){n.d(t,{$o:function(){return y},t7:function(){return f}});var r=n(37716),i=n(72458),o=n(16738),a=n.n(o)()||o,s=new r.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function u(e,t){for(var n=Array(e),r=0;r<e;r++)n[r]=t(r);return n}var l,f=((l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(n,e);var t=g(n);function n(e,r){var i;return c(this,n),(i=t.call(this))._options=r,i.setLocale(e||a.locale()),i}return d(n,[{key:"setLocale",value:function(e){var t=this;h(v(n.prototype),"setLocale",this).call(this,e);var r=a.localeData(e);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:u(31,function(e){return t.createDate(2017,0,e+1).format("D")}),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}},{key:"getYear",value:function(e){return this.clone(e).year()}},{key:"getMonth",value:function(e){return this.clone(e).month()}},{key:"getDate",value:function(e){return this.clone(e).date()}},{key:"getDayOfWeek",value:function(e){return this.clone(e).day()}},{key:"getMonthNames",value:function(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}},{key:"getDateNames",value:function(){return this._localeData.dates}},{key:"getDayOfWeekNames",value:function(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}},{key:"getYearName",value:function(e){return this.clone(e).format("YYYY")}},{key:"getFirstDayOfWeek",value:function(){return this._localeData.firstDayOfWeek}},{key:"getNumDaysInMonth",value:function(e){return this.clone(e).daysInMonth()}},{key:"clone",value:function(e){return e.clone().locale(this.locale)}},{key:"createDate",value:function(e,t,n){var r=this._createMoment({year:e,month:t,date:n}).locale(this.locale);return r.isValid(),r}},{key:"today",value:function(){return this._createMoment().locale(this.locale)}},{key:"parse",value:function(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}},{key:"format",value:function(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}},{key:"addCalendarYears",value:function(e,t){return this.clone(e).add({years:t})}},{key:"addCalendarMonths",value:function(e,t){return this.clone(e).add({months:t})}},{key:"addCalendarDays",value:function(e,t){return this.clone(e).add({days:t})}},{key:"toIso8601",value:function(e){return this.clone(e).format()}},{key:"deserialize",value:function(e){var t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,a.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):h(v(n.prototype),"deserialize",this).call(this,e)}},{key:"isDateInstance",value:function(e){return a.isMoment(e)}},{key:"isValid",value:function(e){return this.clone(e).isValid()}},{key:"invalid",value:function(){return a.invalid()}},{key:"_createMoment",value:function(e,t,n){var r=this._options||{},i=r.strict;return r.useUtc?a.utc(e,t,n,i):a(e,t,n,i)}}]),n}(i._A)).\u0275fac=function(e){return new(e||l)(r.LFG(i.Ad,8),r.LFG(s,8))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac}),l),y={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},55563:function(e,t,n){n.d(t,{s:function(){return p}});var r=n(3679),i=n(22238),o=n(37716),a=n(60758),s=n(38583),u=n(51095);function l(e,t){if(1&e&&(o.ynx(0),o.TgZ(1,"th",5),o._uU(2),o.qZA(),o.BQk()),2&e){var n=t.$implicit;o.xp6(2),o.hij(" ",n.label," ")}}function h(e,t){if(1&e){var n=o.EpF();o.ynx(0),o.TgZ(1,"tr"),o.TgZ(2,"td",9),o._uU(3),o.qZA(),o.TgZ(4,"td",10),o._uU(5),o.qZA(),o.TgZ(6,"td",10),o._uU(7),o.qZA(),o.TgZ(8,"td",10),o._uU(9),o.qZA(),o.TgZ(10,"td",10),o._uU(11),o.qZA(),o.TgZ(12,"td",10),o._uU(13),o.qZA(),o.TgZ(14,"td",10),o.TgZ(15,"div",11),o.TgZ(16,"input",12),o.NdJ("change",function(e){var t=o.CHM(n).$implicit;return o.oxw().onSelectChange(t,e)}),o.qZA(),o.TgZ(17,"label",13),o._uU(18," Seleccionar "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk()}if(2&e){var r=t.$implicit,i=o.oxw();o.xp6(3),o.hij(" ",r.carnet," "),o.xp6(2),o.hij(" ",r.first_name," "),o.xp6(2),o.hij(" ",r.last_name," "),o.xp6(2),o.hij(" ",r.gender?"Masculino":"Femenino"," "),o.xp6(2),o.hij(" ",r.year," "),o.xp6(2),o.hij(" ",r.id_degree.name," "),o.xp6(3),o.Q6J("checked",i.onCheck(r.id,r))}}var f,p=((f=function(){function e(t,n,i){var o;c(this,e),this.dialogRef=t,this.data=n,this.studentsService=i,this.listRegistry=[],this.fields=[{label:"carnet",field:"carnet"},{label:"first_name",field:"first_name"},{label:"last_name",field:"last_name"},{label:"gender",field:"gender"},{label:"year",field:"year"},{label:"id_degree",field:"id_degree"}],this.studentId=null,this.student=[],this.studentsId=[],this.isSelected=!1,this.listCheck=[],this.check=!1,this.searchForm=new r.cw({field:new r.NI(null===(o=this.fields[0])||void 0===o?void 0:o.field,[r.kI.minLength(1),r.kI.required]),value:new r.NI("",[r.kI.minLength(1),r.kI.required])}),null!=n.studentVal&&(this.listCheck=n.studentVal,this.studentsId=n.studentVal),null!=n.studentObj&&(this.student=n.studentObj),this.onLoadMainData()}return d(e,[{key:"onLoadMainData",value:function(){var e=this;this.studentsService.get().subscribe(function(t){e.listRegistry=t.data})}},{key:"onSearchMainData",value:function(){var e=this;if(this.searchForm.valid){var t=this.studentsService.buildQuery([this.searchForm.controls.field.value,this.searchForm.controls.value.value]);this.studentsService.getStudents(t).subscribe(function(t){e.listRegistry=t.data.students.edges})}}},{key:"onSelectChange",value:function(e,t){var n=this;t.target.checked?(this.isSelected=!0,this.student.push(e),this.studentsId.push(e.id)):(this.isSelected=!0,this.studentId=e.id,this.student=this.student.filter(function(e){return e.id!==n.studentId}),this.studentsId=this.studentsId.filter(function(e){return e!==n.studentId}))}},{key:"onSaveSelection",value:function(){this.dialogRef.close({code:"onSaveSelection",student:this.student,studentsId:this.studentsId})}},{key:"onCancelSelection",value:function(){this.dialogRef.close({code:"onSelectionCancel",student:this.student,studentsId:this.studentsId})}},{key:"onCheck",value:function(e,t){this.check=!1;for(var n=0;n<this.listCheck.length;n++)e==this.listCheck[n]&&(this.check=!0);return this.check}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||f)(o.Y36(i.so),o.Y36(i.WI),o.Y36(a.q))},f.\u0275cmp=o.Xpm({type:f,selectors:[["app-select-students"]],decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"min-w-full","text-center","max-h-90"],[1,"border-b","bg-gray-800"],[4,"ngFor","ngForOf"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],[1,"my-1"],["mat-raised-button","","color","primary",3,"disabled","click"],["type","button","mat-button","",3,"click"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"form-check"],["type","checkbox","value","","id","flexCheckChecked","ng-model","students.selected",1,"form-check-input","appearance-none","h-4","w-4","border","border-gray-300","rounded-sm","bg-white","checked:bg-blue-600","checked:border-blue-600","focus:outline-none","transition","duration-200","mt-1","align-top","bg-no-repeat","bg-center","bg-contain","float-left","mr-2","cursor-pointer",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"]],template:function(e,t){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h2",0),o._uU(2,"Patient Select:"),o.qZA(),o.TgZ(3,"div",1),o.ynx(4),o.TgZ(5,"table",2),o.TgZ(6,"thead",3),o.TgZ(7,"tr"),o.YNc(8,l,3,1,"ng-container",4),o.TgZ(9,"th",5),o._uU(10," actions "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"tbody"),o.YNc(12,h,19,7,"ng-container",4),o.qZA(),o.qZA(),o.BQk(),o.TgZ(13,"div",6),o.TgZ(14,"button",7),o.NdJ("click",function(){return t.onSaveSelection()}),o._uU(15," Save "),o.qZA(),o.TgZ(16,"button",8),o.NdJ("click",function(){return t.onCancelSelection()}),o._uU(17," Cancel "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Q6J("ngForOf",t.fields),o.xp6(4),o.Q6J("ngForOf",t.listRegistry),o.xp6(2),o.Q6J("disabled",!t.isSelected))},directives:[i.uh,i.xY,s.sg,u.lW],styles:[""]}),f)},80496:function(e,t,n){n.d(t,{j:function(){return p}});var r,i=n(38583),o=n(3679),a=n(51095),s=n(22238),u=n(98295),l=n(76627),h=n(67441),f=n(37716),p=((r=d(function e(){c(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[[i.ez,s.Is,o.u5,o.UX,u.lN,h.LD,l.Ps,a.ot]]}),r)},60758:function(i,o,a){a.d(o,{q:function(){return _}});var s,l=a(50752),h=a(94402),f=a(59193),p=a(40205),g=a(15257),y=a(5304),v=a(37716),m=a(94270),k=a(1400),_=((s=function(){function i(e,t,n){c(this,i),this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=n,this.table="student"}return d(i,[{key:"get",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,h.D)(this.supaBaseService.onSelectRequest(this.table,n,r,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",t)).pipe((0,g.q)(1),(0,y.K)(function(t,n){return e.errorHandle(t),f.E}))}},{key:"insert",value:function(e){var t=this;return(0,h.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,g.q)(1),(0,y.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"update",value:function(e,t){var n=this;return(0,h.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"delete",value:function(e){var t=this;return(0,h.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,y.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"buildQuery",value:function(e){for(var t,n=[],r=0;r<e.length;r+=3)"relation"==e[r+2]?n.push("".concat(e[r],':{have:{name:{matchesRegex:"').concat(e[r+1],'"}}}')):"gender"==e[r+2]?(t=!!e[r+1].includes("M"),n.push("".concat(e[r],":{equalTo:").concat(t,"}"))):n.push("".concat(e[r],':{matchesRegex:"').concat(e[r+1],'"}'));return"(where:{".concat(n.toString(),"})")}},{key:"getStudents",value:function(t){var n=this;return this.apollo.watchQuery({query:l.Ps(e||(e=u(["\n          query students {\n            students"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  carnet\n                  first_name\n                  last_name\n                  gender\n                  year\n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        "])),t),fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,y.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"onCreateStudent",value:function(e,n,r,i,o,a){var s=this;return this.apollo.mutate({mutation:l.Ps(t||(t=u(["\n          mutation createStudent(\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            createStudent(\n              input: {\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id_degree:{add:e},gender:n,carnet:r,last_name:i,first_name:o,year:a}}).pipe((0,g.q)(1),(0,y.K)(function(e,t){return s.errorHandle(e),f.E}))}},{key:"onEditStudent",value:function(e,t,r,i,o,a,s,c){var d=this;return this.apollo.mutate({mutation:l.Ps(n||(n=u(["\n          mutation updateStudent(\n            $id: ID!\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            updateStudent(\n              input: {\n                id: $id\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,id_degree:{remove:t,add:r},gender:i,carnet:o,last_name:a,first_name:s,year:c}}).pipe((0,g.q)(1),(0,y.K)(function(e,t){return d.errorHandle(e),f.E}))}},{key:"onDeleteStudent",value:function(e){var t=this;return this.apollo.mutate({mutation:l.Ps(r||(r=u(["\n          mutation deleteStudent($id: ID!) {\n            deleteStudent(input: { id: $id }) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,g.q)(1),(0,y.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,p._)("error")}}]),i}()).\u0275fac=function(e){return new(e||s)(v.LFG(l._M),v.LFG(m.P),v.LFG(k.R))},s.\u0275prov=v.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},16141:function(e,t,n){n.d(t,{n:function(){return b}});var r,l=n(50752),h=n(94402),f=n(40205),p=n(59193),g=n(15257),y=n(93342),v=n(5304),m=n(37716),k=n(94270),_=n(1400),b=((r=function(){function e(t,n,r){c(this,e),this.apollo=t,this.supaBaseService=n,this._fuseConfirmationService=r,this.table="workshop",this.tableOtM="category"}return d(e,[{key:"get",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,h.D)(this.supaBaseService.onSelectRequest(this.table,n,r,"id,name,updated_at,created_at,id_category!inner(*)",t)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,v.K)(function(t,n){return e.errorHandle(t),p.E}))}},{key:"insert",value:function(e){var t=this;return(0,h.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,v.K)(function(e,n){return t.errorHandle(e),p.E}))}},{key:"update",value:function(e,t){var n=this;return(0,h.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,v.K)(function(e,t){return n.errorHandle(e),p.E}))}},{key:"delete",value:function(e){var t=this;return(0,h.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,v.K)(function(e,n){return t.errorHandle(e),p.E}))}},{key:"getCategoriesWorkshop",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,h.D)(this.supaBaseService.onSelectRequest(this.tableOtM,n,r,"id,name,updated_at,created_at",t)).pipe((0,g.q)(1),(0,y.b)(function(e){if(null!=e.error)throw(0,f._)(e.error)}),(0,v.K)(function(t,n){return e.errorHandle(t),p.E}))}},{key:"buildQuery",value:function(e){for(var t=[],n=0;n<e.length;n+=3)t.push("relation"==e[n+2]?"".concat(e[n],':{have:{name:{matchesRegex:"').concat(e[n+1],'"}}}'):"".concat(e[n],':{matchesRegex:"').concat(e[n+1],'"}'));return"(where:{".concat(t.toString(),"})")}},{key:"getWorkshops",value:function(e){var t=this;return this.apollo.watchQuery({query:l.Ps(i||(i=u(["\n        query listWorkshops {\n          workshops"," {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                name\n                id_category{\n                  edges{node{\n                    id\n                    name\n                  }}\n                }\n              }\n            }\n            count\n          }\n        }\n        "])),e),fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,v.K)(function(e,n){return t.errorHandle(e),p.E}))}},{key:"onCreateWorkshop",value:function(e,t){var n=this;return this.apollo.mutate({mutation:l.Ps(o||(o=u(["\n          mutation insertWorkshop(\n            $name: String!\n            $id_category: CategoryRelationInput!\n          ) {\n            createWorkshop(\n              input: {\n                fields: {\n                  name: $name\n                  id_category: $id_category\n                }\n              }\n            ) {\n              workshop {\n                id\n              }\n            }\n          }\n        "]))),variables:{name:e,id_category:{add:t}}}).pipe((0,g.q)(1),(0,v.K)(function(e,t){return n.errorHandle(e),p.E}))}},{key:"onDeleteWorkshop",value:function(e){var t=this;return this.apollo.mutate({mutation:l.Ps(a||(a=u(["\n          mutation deleteWorkshop($id: ID!) {\n            deleteWorkshop(input: { id: $id }) {\n              workshop {\n                name\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,g.q)(1),(0,v.K)(function(e,n){return t.errorHandle(e),p.E}))}},{key:"onEditWorkshop",value:function(e,t,n,r){var i=this;return this.apollo.mutate({mutation:l.Ps(s||(s=u(["\n          mutation updateWorkshop(\n            $id: ID!\n            $name: String!\n            $id_category: CategoryRelationInput!\n          ) {\n            updateWorkshop(\n              input: {\n                id: $id\n                fields: {\n                  name: $name\n                  id_category: $id_category\n                }\n              }\n            ) {\n              workshop {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,name:t,id_category:{remove:r,add:n}}}).pipe((0,g.q)(1),(0,v.K)(function(e,t){return i.errorHandle(e),p.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,f._)("error")}}]),e}()).\u0275fac=function(e){return new(e||r)(m.LFG(l._M),m.LFG(k.P),m.LFG(_.R))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}])}();