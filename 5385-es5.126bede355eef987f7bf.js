!function(){"use strict";var e,t,n,r;function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}}).apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[5385],{36063:function(e,t,n){n.d(t,{$o:function(){return v},t7:function(){return m}});var r=n(37716),i=n(72458),o=n(16738),s=n.n(o)()||o,f=new r.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function g(e,t){for(var n=Array(e),r=0;r<e;r++)n[r]=t(r);return n}var h,m=((h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(n,e);var t=d(n);function n(e,r){var i;return a(this,n),(i=t.call(this))._options=r,i.setLocale(e||s.locale()),i}return l(n,[{key:"setLocale",value:function(e){var t=this;c(p(n.prototype),"setLocale",this).call(this,e);var r=s.localeData(e);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:g(31,function(e){return t.createDate(2017,0,e+1).format("D")}),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}},{key:"getYear",value:function(e){return this.clone(e).year()}},{key:"getMonth",value:function(e){return this.clone(e).month()}},{key:"getDate",value:function(e){return this.clone(e).date()}},{key:"getDayOfWeek",value:function(e){return this.clone(e).day()}},{key:"getMonthNames",value:function(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}},{key:"getDateNames",value:function(){return this._localeData.dates}},{key:"getDayOfWeekNames",value:function(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}},{key:"getYearName",value:function(e){return this.clone(e).format("YYYY")}},{key:"getFirstDayOfWeek",value:function(){return this._localeData.firstDayOfWeek}},{key:"getNumDaysInMonth",value:function(e){return this.clone(e).daysInMonth()}},{key:"clone",value:function(e){return e.clone().locale(this.locale)}},{key:"createDate",value:function(e,t,n){var r=this._createMoment({year:e,month:t,date:n}).locale(this.locale);return r.isValid(),r}},{key:"today",value:function(){return this._createMoment().locale(this.locale)}},{key:"parse",value:function(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}},{key:"format",value:function(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}},{key:"addCalendarYears",value:function(e,t){return this.clone(e).add({years:t})}},{key:"addCalendarMonths",value:function(e,t){return this.clone(e).add({months:t})}},{key:"addCalendarDays",value:function(e,t){return this.clone(e).add({days:t})}},{key:"toIso8601",value:function(e){return this.clone(e).format()}},{key:"deserialize",value:function(e){var t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,s.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):c(p(n.prototype),"deserialize",this).call(this,e)}},{key:"isDateInstance",value:function(e){return s.isMoment(e)}},{key:"isValid",value:function(e){return this.clone(e).isValid()}},{key:"invalid",value:function(){return s.invalid()}},{key:"_createMoment",value:function(e,t,n){var r=this._options||{},i=r.strict;return r.useUtc?s.utc(e,t,n,i):s(e,t,n,i)}}]),n}(i._A)).\u0275fac=function(e){return new(e||h)(r.LFG(i.Ad,8),r.LFG(f,8))},h.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac}),h),v={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},85385:function(e,t,n){n.r(t),n.d(t,{PracticeRealizationModule:function(){return fe}});var r,i=n(38583),o=n(3679),c=n(35758),s=n(37716),u=n(32489),d=n(1400),f=n(22166),p=n(94402),g=n(40205),h=n(59193),m=n(15257),v=n(93342),_=n(5304),Z=n(50752),b=n(94270),y=((r=function(){function e(t,n,r){a(this,e),this.apollo=t,this.supaBaseService=n,this._fuseConfirmationService=r,this.table="practice_realization",this.tableMtM="practice_realization_student",this.view="PracticeRealizationStudent"}return l(e,[{key:"buildQuery",value:function(e){for(var t=[],n=0;n<e.length;n+=3)t.push("relation"==e[n+2]?"".concat(e[n],':{have:{name:{matchesRegex:"').concat(e[n+1],'"}}}'):"".concat(e[n],':{matchesRegex:"').concat(e[n+1],'"}'));return"(where:{".concat(t.toString(),"})")}},{key:"get",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest(this.view,n,r,"*",t)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(t,n){return e.errorHandle(t),h.E}))}},{key:"getFunctionView",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"searchinview",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.view;return(0,p.D)(this.supaBaseService.onSelectFuntionView(a,o,e,t,r,i)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"getPracticeRealization",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest(this.table,n,r,"\n    *, id_professional_practice!inner(*), id_student!inner(*)\n    ",t)).pipe((0,m.q)(1),(0,_.K)(function(t,n){return e.errorHandle(t),h.E}))}},{key:"getPractice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest("professional_practice",n,r,"\n    *\n    ",t)).pipe((0,m.q)(1),(0,_.K)(function(t,n){return e.errorHandle(t),h.E}))}},{key:"onCreatePracticeRealization",value:function(e){var t=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,m.q)(1),(0,_.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"update",value:function(e,t){var n=this;return(0,p.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"deleteMtM",value:function(e,t){var n=this;return(0,p.D)(this.supaBaseService.onDeleteMiddleTable(this.tableMtM,e,t)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,t){return n.errorHandle(e),h.E}))}},{key:"insertMtM",value:function(e){var t=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.tableMtM,e)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"insert",value:function(e){var t=this;return(0,p.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"delete",value:function(e){var t=this;return(0,p.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,m.q)(1),(0,v.b)(function(e){if(null!=e.error)throw(0,g._)(e.error)}),(0,_.K)(function(e,n){return t.errorHandle(e),h.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,g._)("error")}}]),e}()).\u0275fac=function(e){return new(e||r)(s.LFG(Z._M),s.LFG(b.P),s.LFG(d.R))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r),q=n(22238),k=n(60758),w=n(26927),A=n(1769),x=n(98295),T=n(67441),S=n(76627),D=n(49983),I=n(43220),U=n(86640),F=n(51095),M=n(65939),O=n(99692),N=n(72458);function R(e,t){if(1&e&&(s.TgZ(0,"mat-option",63),s._uU(1),s.qZA()),2&e){var n=t.$implicit;s.Q6J("value",n.id),s.xp6(1),s.Oqu(n.project_name)}}function J(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe seleccionar una opcion!!"),s.qZA())}function E(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function z(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function Q(e,t){if(1&e&&(s.TgZ(0,"div",64),s.TgZ(1,"div",65),s.TgZ(2,"div",66),s.TgZ(3,"h5",67),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){var n=t.item,r=t.searchTerm;s.xp6(3),s.Q6J("ngOptionHighlight",r),s.xp6(1),s.lnq(" ",n.carnet," - ",n.first_name," -",n.last_name," ")}}function L(e,t){1&e&&s._UZ(0,"div")}function P(e,t){if(1&e&&s._uU(0),2&e){var n=s.oxw().$implicit;s.Oqu(n.label)}}function Y(e,t){1&e&&s._uU(0,"Carnet")}function $(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"mat-option",63),s.YNc(2,L,1,0,"div",45),s.YNc(3,P,1,1,"ng-template",null,47,s.W1O),s.YNc(5,Y,1,0,"ng-template",null,46,s.W1O),s.qZA(),s.BQk()),2&e){var n=t.$implicit,r=s.MAs(4),i=s.MAs(6);s.xp6(1),s.Q6J("value",n),s.xp6(1),s.Q6J("ngIf","Estudiante"==n.label)("ngIfThen",i)("ngIfElse",r)}}function B(e,t){1&e&&s._UZ(0,"div")}function j(e,t){1&e&&(s.TgZ(0,"span"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function C(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",68),s._UZ(1,"mat-icon",20),s._UZ(2,"input",69),s._UZ(3,"mat-datepicker-toggle",23),s._UZ(4,"mat-datepicker",null,59),s.TgZ(6,"mat-error"),s.YNc(7,j,2,0,"span",21),s.qZA(),s.qZA()),2&e){var n=s.MAs(5),r=s.oxw();s.Q6J("floatLabel","always"),s.xp6(1),s.Q6J("svgIcon","heroicons_solid:search"),s.xp6(1),s.Q6J("matDatepicker",n)("placeholder",r.Desde),s.xp6(1),s.Q6J("for",n),s.xp6(4),s.Q6J("ngIf",r.searchForm.get("value").hasError("required")&&r.searchForm.get("value").touched)}}function H(e,t){1&e&&(s.TgZ(0,"span"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function V(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",68),s._UZ(1,"mat-icon",20),s._UZ(2,"input",70),s.TgZ(3,"mat-error"),s.YNc(4,H,2,0,"span",21),s.qZA(),s.qZA()),2&e){var n=s.oxw();s.Q6J("floatLabel","always"),s.xp6(1),s.Q6J("svgIcon","heroicons_solid:search"),s.xp6(3),s.Q6J("ngIf",n.searchForm.get("value").hasError("required")&&n.searchForm.get("value").touched)}}function K(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"th",51),s._uU(2),s.qZA(),s.BQk()),2&e){var n=t.$implicit;s.xp6(2),s.hij(" ",n.label," ")}}function W(e,t){if(1&e&&(s.ynx(0),s._uU(1),s._UZ(2,"br"),s.BQk()),2&e){var n=s.oxw().$implicit;s.xp6(1),s.hij(" ",n.carnet+" "+n.first_name+" "+n.last_name," ")}}function G(e,t){if(1&e&&(s.ynx(0),s.YNc(1,W,3,1,"ng-container",21),s.BQk()),2&e){var n=t.$implicit;s.xp6(1),s.Q6J("ngIf",null!=n)}}function X(e,t){if(1&e){var n=s.EpF();s.TgZ(0,"tr",71),s.TgZ(1,"td",72),s._uU(2),s._UZ(3,"br"),s.qZA(),s.TgZ(4,"td",73),s.YNc(5,G,2,1,"ng-container",44),s.qZA(),s.TgZ(6,"td",73),s._uU(7),s.ALo(8,"date"),s.qZA(),s.TgZ(9,"td",73),s._uU(10),s.ALo(11,"date"),s.qZA(),s.TgZ(12,"td",73),s.TgZ(13,"div",74),s.TgZ(14,"button",75),s.NdJ("click",function(){var e=s.CHM(n).$implicit;return s.oxw().toggleDrawerOpen("leftDrawer",e)}),s.TgZ(15,"mat-icon",76),s.O4$(),s.TgZ(16,"svg",77),s._UZ(17,"path",78),s.qZA(),s.qZA(),s.kcU(),s.TgZ(18,"span",79),s._uU(19,"Editar"),s.qZA(),s.qZA(),s.TgZ(20,"button",80),s.NdJ("click",function(){var e=s.CHM(n).$implicit;return s.oxw().onDeleteRegistry(e.id)}),s.TgZ(21,"mat-icon",81),s.O4$(),s.TgZ(22,"svg",77),s._UZ(23,"path",82),s.qZA(),s.qZA(),s.kcU(),s.TgZ(24,"span",79),s._uU(25,"Eliminar"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=t.$implicit;s.xp6(2),s.hij(" ",null!=r.id_professional_practice?r.id_professional_practice[0].project_name:""," "),s.xp6(3),s.Q6J("ngForOf",r.id_student),s.xp6(2),s.hij(" ",s.xi3(8,4,r.start_date,"yyyy-MM-dd")," "),s.xp6(3),s.hij(" ",s.xi3(11,7,r.end_date,"yyyy-MM-dd")," ")}}function ee(e,t){if(1&e&&(s.TgZ(0,"mat-option",63),s._uU(1),s.qZA()),2&e){var n=t.$implicit;s.Q6J("value",n.id),s.xp6(1),s.Oqu(n.project_name)}}function te(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe seleccionar una opcion!!"),s.qZA())}function ne(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function re(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Debe ingresar este campo!!"),s.qZA())}function ie(e,t){if(1&e&&(s.TgZ(0,"div",64),s.TgZ(1,"div",65),s.TgZ(2,"div",66),s.TgZ(3,"h5",67),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){var n=t.item,r=t.searchTerm;s.xp6(3),s.Q6J("ngOptionHighlight",r),s.xp6(1),s.lnq(" ",n.carnet," - ",n.first_name," -",n.last_name," ")}}var ae=function(){var e=function(){function e(t,n,r,i,l,c){a(this,e),this._fuseDrawerService=t,this._fuseConfirmationService=n,this.professionalPracticeService=r,this.practiceRealizationService=i,this.dialog=l,this.studentsService=c,this.fields=[{label:"Nombre Pr\xe1ctica",field:"id_professional_practice",type:"json",subfield:"project_name",searchable:!0,placeholder:"Practica"},{label:"Estudiante",field:"id_student",type:"json",subfield:"carnet",searchable:!0,placeholder:"Carnet"},{label:"Fecha de inicio",field:"start_date",type:"date",subfield:null,searchable:!0,placeholder:"fecha inicio"},{label:"Fecha final",field:"end_date",type:"date",subfield:null,searchable:!0,placeholder:"fecha final"}],this.listRegistry=[],this.listProfessionalPractice=[],this.student="",this.studentE="",this.listStudent=[],this.newForm=new o.cw({id_professional_practice:new o.NI(null,[o.kI.required]),id_student:new o.NI(null,[o.kI.required]),start_date:new o.NI(new Date,[o.kI.minLength(3),o.kI.required]),end_date:new o.NI(new Date,[o.kI.minLength(3),o.kI.required])}),this.searchForm=new o.cw({field:new o.NI(this.fields[0],[o.kI.minLength(1),o.kI.required]),value:new o.NI("",[o.kI.minLength(1),o.kI.required])}),this.editForm=new o.cw({id:new o.NI("",[o.kI.minLength(3),o.kI.required]),id_professional_practice:new o.NI(null,[o.kI.required]),id_student:new o.NI(null,[o.kI.required]),start_date:new o.NI("",[o.kI.minLength(3),o.kI.required]),end_date:new o.NI("",[o.kI.minLength(3),o.kI.required])}),this.pagination={length:100,pageSize:10,pageIndex:0,pageSizeOptions:[5,10,25,50,100],showFirstLastButtons:!1},this.onLoadStudent(null),this.onLoadMainData(),this.onLoadPractices()}return l(e,[{key:"handlePageEvent",value:function(e){this.pagination.length=e.length,this.pagination.pageSize=e.pageSize,this.pagination.pageIndex=e.pageIndex,this.onLoadMainData()}},{key:"onLoadMainData",value:function(){var e=this;this.practiceRealizationService.get([],this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize).subscribe(function(t){e.listRegistry=t.data})}},{key:"onLoadStudent",value:function(e){var t=this,n=[];if(null!=e){var r=e.term.split(" "),i={field:"first_name",value:null!=r[1]?r[1]:"",type:"ilike",subfield:null},a={field:"last_name",value:null!=r[1]?r[1]:"",type:"ilike",subfield:null};n.push({field:"carnet",value:null!=r[0]?r[0]:"",type:"ilike",subfield:null}),n.push(i),n.push(a)}this.studentsService.get(n).subscribe(function(e){t.listStudent=e.data})}},{key:"findInvalidControls",value:function(){var e=[],t=this.newForm.controls;for(var n in t)t[n].invalid&&e.push(n);return e}},{key:"onSearchMainData",value:function(){var e=this;if(this.searchForm.valid){var t={field:this.searchForm.controls.field.value.field,value:this.searchForm.controls.value.value,type:this.searchForm.controls.field.value.type,subfield:this.searchForm.controls.field.value.subfield};"json"==t.type?(this.pagination.pageIndex=0,this.practiceRealizationService.getFunctionView(t.field,t.value).subscribe(function(t){e.listRegistry=t.data[0].value.value,e.pagination.length=e.listRegistry.length})):this.practiceRealizationService.get([t],this.pagination.pageSize*this.pagination.pageIndex,this.pagination.pageSize).subscribe(function(t){e.listRegistry=t.data})}}},{key:"onLoadPractices",value:function(){var e=this;this.practiceRealizationService.getPractice().subscribe(function(t){e.listProfessionalPractice=t.data})}},{key:"ngOnInit",value:function(){}},{key:"onEditRegistry",value:function(e){var t=this;if(this.editForm.valid){var n=this.editForm.getRawValue(),r=n.id,i=n.id_student;delete n.id_student,this.practiceRealizationService.update(r,n).subscribe(function(e){t.practiceRealizationService.deleteMtM(r,"id_practice_realization").subscribe(function(n){var r=[];i.forEach(function(n){r.push(t.practiceRealizationService.insertMtM({id_practice_realization:e.data[0].id,id_student:n}))}),(0,c.D)(r).subscribe(function(e){t.practiceRealizationService.onSuccessDialog("creo"),t.onLoadMainData(),t.editForm.reset()})})})}}},{key:"onNewRegistry",value:function(){var e=this;if(this.newForm.valid){var t=this.newForm.getRawValue(),n=t.id_student;delete t.id_student,this.practiceRealizationService.insert(t).subscribe(function(t){var r=[];n.forEach(function(n){r.push(e.practiceRealizationService.insertMtM({id_practice_realization:t.data[0].id,id_student:n}))}),(0,c.D)(r).subscribe(function(t){e.practiceRealizationService.onSuccessDialog("creo"),e.onLoadMainData(),e.newForm.reset()})})}}},{key:"onDeleteRegistry",value:function(e){var t=this;this._fuseConfirmationService.open({title:"Alerta",message:"Desea eliminar este registro?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"warning"},actions:{confirm:{show:!0,label:"Si",color:"primary"},cancel:{show:!0,label:"No"}},dismissible:!1}).afterClosed().subscribe(function(n){"confirmed"==n&&t.practiceRealizationService.deleteMtM(e,"id_practice_realization").subscribe(function(n){t.practiceRealizationService.delete(e).subscribe(function(e){t.onLoadMainData()})})})}},{key:"toggleDrawerOpen",value:function(e,t){if(t){this.editForm.controls.id.setValue(t.id),this.editForm.controls.id_professional_practice.setValue(t.id_professional_practice.length>0?t.id_professional_practice[0].id:"");var n=null==t.id_student[0]?[]:t.id_student.map(function(e){return e.id});this.editForm.controls.id_student.setValue(n),this.editForm.controls.start_date.setValue(t.start_date),this.editForm.controls.end_date.setValue(t.end_date)}this._fuseDrawerService.getComponent(e).toggle()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(u._),s.Y36(d.R),s.Y36(f.U),s.Y36(y),s.Y36(q.uw),s.Y36(k.q))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-practice-realization"]],decls:142,vars:50,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","pt-6","sm:px-4","sm:pb-4","relative","flex","overflow-hidden"],[1,"w-3/5","make-drawer-content-scrollable",3,"name","opened","mode"],[1,"flex","justify-center","h-400","min-h-400","max-h-400","border-2","border-dashed","border-gray-300","p-6"],[1,"ng-untouched","ng-pristine","ng-valid",3,"formGroup"],[1,"flex","flex-col","mt-2","bg-card","shadow","rounded"],[1,"p-8","bg-gray-50","dark:bg-gray-700"],[1,"text-lg","font-medium"],[1,"text-secondary"],["role","separator","aria-orientation","horizontal",1,"mat-divider","mat-divider-horizontal"],[1,"mt-4","p-2","pb-2"],[1,"fuse-mat-no-subscript","w-full"],["formControlName","id_professional_practice"],[3,"value",4,"ngFor","ngForOf"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[4,"ngIf"],["matInput","","formControlName","start_date",3,"matDatepicker","placeholder"],["matSuffix","",3,"for"],["newDate",""],["matInput","","formControlName","end_date",3,"matDatepicker","placeholder"],["newDate2",""],["appearance","outline","bindLabel","carnet","bindValue","id","formControlName","id_student",1,"mt-2",3,"items","multiple","closeOnSelect","hideSelected","placeholder","search"],["ng-option-tmp",""],[1,"flex","items-center","justify-end","mt-10"],["mat-button","",1,"mat-focus-indicator","mat-button","mat-button-base",3,"click"],[1,"mat-button-wrapper"],["matripple","","ng-reflect-disabled","false","ng-reflect-centered","false","ng-reflect-trigger","[object HTMLButtonElement]",1,"mat-ripple","mat-button-ripple"],[1,"mat-button-focus-overlay"],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary"],["type","submit",1,"mat-button-wrapper",3,"click"],[1,"w-full","h-full",3,"animationDuration"],["label","Ver registros"],[1,"h-full","w-full","min-w-0","ng-star-inserted"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"min-w-full","text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","px-6","py-4"],["class","bg-white border-b hover:bg-gray-300",4,"ngFor","ngForOf"],[1,"mt-14"],["aria-label","Select page",1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex","page"],["label","Agregar"],[1,"px-4","w-full","border-2","border-dashed","border-gray-300","rounded-2xl"],[1,"flex","flex-col","mt-8","bg-card","shadow","rounded","overflow-hidden"],[1,"mt-8","p-8","pb-4"],["editDate",""],["editDate2",""],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary",3,"click"],["type","none",1,"mat-button-wrapper"],[3,"value"],[1,"my-2","py-4","px-5","rounded-lg","bg-gray-200","dark:bg-gray-800"],[1,"card"],[1,"card-body"],[1,"card-title","text-2xl","font-semibold","leading-tight",3,"ngOptionHighlight"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matInput","","formControlName","value",3,"matDatepicker","placeholder"],["placeholder","Search by title or description","matInput","","formControlName","value"],[1,"bg-white","border-b","hover:bg-gray-300"],[1,"text-sm","text-gray-900","font-light"],[1,"text-sm","text-gray-900","font-light","whitespace-nowrap"],[1,"flex","items-center","w-full"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-amber-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","mail","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","text-hint","mat-icon-no-color"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"],[1,"ml-2"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-red-500",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","phone","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","text-hint","mat-icon-no-color"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]],template:function(e,t){if(1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div"),s.TgZ(5,"a",4),s._uU(6,"Orientaci\xf3n Estudiantil"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"div",5),s.TgZ(8,"h2",6),s._uU(9," Administracion de realizaci\xf3n de pr\xe1cticas profesionales "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"div",7),s.TgZ(11,"fuse-drawer",8),s.TgZ(12,"div",9),s.TgZ(13,"form",10),s.TgZ(14,"div",11),s.TgZ(15,"div",12),s.TgZ(16,"p",13),s._uU(17," Formulario de modificaci\xf3n de realizaci\xf3n de pr\xe1cticas profesionales "),s.qZA(),s.TgZ(18,"p",14),s._uU(19,"Rellene los campos a continuacion."),s.qZA(),s.qZA(),s._UZ(20,"mat-divider",15),s.TgZ(21,"div",16),s.ynx(22),s.TgZ(23,"mat-form-field",17),s.TgZ(24,"mat-label"),s._uU(25,"Pr\xe1ctica profesional:"),s.qZA(),s.TgZ(26,"mat-select",18),s.YNc(27,R,2,2,"mat-option",19),s.qZA(),s._UZ(28,"mat-icon",20),s.qZA(),s.YNc(29,J,2,0,"mat-error",21),s.TgZ(30,"mat-form-field",17),s.TgZ(31,"mat-label"),s._uU(32,"Fecha inicio:"),s.qZA(),s._UZ(33,"input",22),s._UZ(34,"mat-datepicker-toggle",23),s._UZ(35,"mat-datepicker",null,24),s.qZA(),s.YNc(37,E,2,0,"mat-error",21),s.TgZ(38,"mat-form-field",17),s.TgZ(39,"mat-label"),s._uU(40,"Fecha finalizaci\xf3n:"),s.qZA(),s._UZ(41,"input",25),s._UZ(42,"mat-datepicker-toggle",23),s._UZ(43,"mat-datepicker",null,26),s.qZA(),s.YNc(45,z,2,0,"mat-error",21),s.TgZ(46,"mat-label"),s._uU(47,"Estudiantes:"),s.qZA(),s.TgZ(48,"ng-select",27),s.NdJ("search",function(e){return t.onLoadStudent(e)}),s.YNc(49,Q,5,4,"ng-template",28),s.qZA(),s.BQk(),s.qZA(),s.qZA(),s.TgZ(50,"div",29),s.TgZ(51,"button",30),s.NdJ("click",function(){return t.toggleDrawerOpen("leftDrawer")}),s.TgZ(52,"span",31),s._uU(53," Cancelar "),s.qZA(),s._UZ(54,"span",32),s._UZ(55,"span",33),s.qZA(),s.TgZ(56,"button",34),s.TgZ(57,"button",35),s.NdJ("click",function(){return t.onEditRegistry("leftDrawer")}),s._uU(58," Guardar"),s.qZA(),s._UZ(59,"span",32),s._UZ(60,"span",33),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(61,"mat-tab-group",36),s.TgZ(62,"mat-tab",37),s.TgZ(63,"div",38),s.TgZ(64,"form",39),s.TgZ(65,"button",40),s.NdJ("click",function(){return t.onLoadMainData()}),s.TgZ(66,"span",41),s.TgZ(67,"span"),s._uU(68,"Reset"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(69,"mat-form-field",42),s.TgZ(70,"mat-select",43),s.YNc(71,$,7,4,"ng-container",44),s.qZA(),s.qZA(),s.YNc(72,B,1,0,"div",45),s.YNc(73,C,8,6,"ng-template",null,46,s.W1O),s.YNc(75,V,5,3,"ng-template",null,47,s.W1O),s.TgZ(77,"button",48),s.NdJ("click",function(){return t.onSearchMainData()}),s.TgZ(78,"span",41),s.TgZ(79,"span"),s._uU(80,"Buscar"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.ynx(81),s.TgZ(82,"table",49),s.TgZ(83,"thead",50),s.TgZ(84,"tr"),s.YNc(85,K,3,1,"ng-container",44),s.TgZ(86,"th",51),s._uU(87," Acciones "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(88,"tbody"),s.YNc(89,X,26,10,"tr",52),s.qZA(),s.qZA(),s.TgZ(90,"div",53),s.TgZ(91,"mat-paginator",54),s.NdJ("page",function(e){return t.handlePageEvent(e)}),s.qZA(),s.qZA(),s.BQk(),s.qZA(),s.qZA(),s.TgZ(92,"mat-tab",55),s.TgZ(93,"div",56),s.TgZ(94,"form",10),s.TgZ(95,"div",57),s.TgZ(96,"div",12),s.TgZ(97,"p",13),s._uU(98," Formulario de registro de realizaci\xf3n de pr\xe1cticas "),s.qZA(),s.TgZ(99,"p",14),s._uU(100,"Rellene los campos a continuacion."),s.qZA(),s.qZA(),s._UZ(101,"mat-divider",15),s.TgZ(102,"div",58),s.ynx(103),s.TgZ(104,"mat-form-field",17),s.TgZ(105,"mat-label"),s._uU(106,"Pr\xe1ctica profesional"),s.qZA(),s.TgZ(107,"mat-select",18),s.YNc(108,ee,2,2,"mat-option",19),s.qZA(),s._UZ(109,"mat-icon",20),s.qZA(),s.YNc(110,te,2,0,"mat-error",21),s.TgZ(111,"mat-form-field",17),s.TgZ(112,"mat-label"),s._uU(113,"Fecha de inicio:"),s.qZA(),s._UZ(114,"input",22),s._UZ(115,"mat-datepicker-toggle",23),s._UZ(116,"mat-datepicker",null,59),s.qZA(),s.YNc(118,ne,2,0,"mat-error",21),s.TgZ(119,"mat-form-field",17),s.TgZ(120,"mat-label"),s._uU(121,"Fecha Final:"),s.qZA(),s._UZ(122,"input",25),s._UZ(123,"mat-datepicker-toggle",23),s._UZ(124,"mat-datepicker",null,60),s.qZA(),s.YNc(126,re,2,0,"mat-error",21),s.TgZ(127,"mat-label"),s._uU(128,"Estudiantes:"),s.qZA(),s.TgZ(129,"ng-select",27),s.NdJ("search",function(e){return t.onLoadStudent(e)}),s.YNc(130,ie,5,4,"ng-template",28),s.qZA(),s.BQk(),s.qZA(),s.qZA(),s.TgZ(131,"div",29),s.TgZ(132,"button",30),s.NdJ("click",function(){return t.newForm.reset()}),s.TgZ(133,"span",31),s._uU(134," Cancelar "),s.qZA(),s._UZ(135,"span",32),s._UZ(136,"span",33),s.qZA(),s.TgZ(137,"button",61),s.NdJ("click",function(){return t.onNewRegistry()}),s.TgZ(138,"span",62),s._uU(139,"Agregar"),s.qZA(),s._UZ(140,"span",32),s._UZ(141,"span",33),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){var n=s.MAs(36),r=s.MAs(44),i=s.MAs(74),a=s.MAs(76),o=s.MAs(117),l=s.MAs(125);s.xp6(11),s.Q6J("name","leftDrawer")("opened",!1)("mode","side"),s.xp6(2),s.Q6J("formGroup",t.editForm),s.xp6(14),s.Q6J("ngForOf",t.listProfessionalPractice),s.xp6(1),s.Q6J("svgIcon","heroicons_solid:location-marker"),s.xp6(1),s.Q6J("ngIf",t.editForm.get("id_professional_practice").hasError("required")&&t.editForm.get("id_professional_practice").touched),s.xp6(4),s.Q6J("matDatepicker",n)("placeholder","Fecha de inicio"),s.xp6(1),s.Q6J("for",n),s.xp6(3),s.Q6J("ngIf",t.editForm.get("start_date").hasError("required")&&t.editForm.get("start_date").touched),s.xp6(4),s.Q6J("matDatepicker",r)("placeholder","Fecha final"),s.xp6(1),s.Q6J("for",r),s.xp6(3),s.Q6J("ngIf",t.editForm.get("end_date").hasError("required")&&t.editForm.get("end_date").touched),s.xp6(3),s.Q6J("items",t.listStudent)("multiple",!0)("closeOnSelect",!1)("hideSelected",!1)("placeholder","Estudiantes"),s.xp6(13),s.Q6J("animationDuration","0"),s.xp6(3),s.Q6J("formGroup",t.searchForm),s.xp6(7),s.Q6J("ngForOf",t.fields),s.xp6(1),s.Q6J("ngIf","date"==t.searchForm.controls.field.value.type)("ngIfThen",i)("ngIfElse",a),s.xp6(13),s.Q6J("ngForOf",t.fields),s.xp6(4),s.Q6J("ngForOf",t.listRegistry),s.xp6(2),s.Q6J("length",t.pagination.length)("pageSize",t.pagination.pageSize)("showFirstLastButtons",t.pagination.showFirstLastButtons)("pageSizeOptions",t.pagination.pageSizeOptions)("pageIndex",t.pagination.pageIndex),s.xp6(3),s.Q6J("formGroup",t.newForm),s.xp6(14),s.Q6J("ngForOf",t.listProfessionalPractice),s.xp6(1),s.Q6J("svgIcon","heroicons_solid:location-marker"),s.xp6(1),s.Q6J("ngIf",t.newForm.get("id_professional_practice").hasError("required")&&t.newForm.get("id_professional_practice").touched),s.xp6(4),s.Q6J("matDatepicker",o)("placeholder","Fecha de inicio"),s.xp6(1),s.Q6J("for",o),s.xp6(3),s.Q6J("ngIf",t.newForm.get("start_date").hasError("required")&&t.newForm.get("start_date").touched),s.xp6(4),s.Q6J("matDatepicker",l)("placeholder","Fecha final"),s.xp6(1),s.Q6J("for",l),s.xp6(3),s.Q6J("ngIf",t.newForm.get("end_date").hasError("required")&&t.newForm.get("end_date").touched),s.xp6(3),s.Q6J("items",t.listStudent)("multiple",!0)("closeOnSelect",!1)("hideSelected",!1)("placeholder","Estudiantes")}},directives:[w.F,o._Y,o.JL,o.sg,A.d,x.KE,x.hX,T.gD,o.JJ,o.u,i.sg,S.Hw,x.qo,i.O5,D.Nt,o.Fj,I.hl,I.nW,x.R9,I.Mq,U.w9,U.Z2,F.lW,M.SP,M.uX,O.NW,N.ey,x.TO],pipes:[i.uU],styles:[""]}),e}(),oe=n(36063),le=n(11494),ce=n(63423),se=n(25553),ue=n(82120),de=[{path:"",component:ae}],fe=function(){var e=l(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[{provide:N._A,useClass:oe.t7,deps:[N.Ad]},{provide:N.sG,useValue:oe.$o}],imports:[[i.ez,ce.Bz.forChild(de),se.J,S.Ps,M.Nh,A.t,x.lN,D.c,ue.k,T.LD,o.UX,o.u5,le.JX,F.ot,I.FA,U.A0,O.TU,U.A0,O.TU]]}),e}()},60758:function(o,c,s){s.d(c,{q:function(){return b}});var u=s(50752),d=s(94402),f=s(59193),p=s(40205),g=s(15257),h=s(5304),m=s(93342),v=s(37716),_=s(94270),Z=s(1400),b=function(){var o=function(){function o(e,t,n){a(this,o),this.apollo=e,this.supaBaseService=t,this._fuseConfirmationService=n,this.table="student"}return l(o,[{key:"get",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,d.D)(this.supaBaseService.onSelectRequest(this.table,n,r,"\n    id,\n    first_name,\n    last_name,\n    carnet,\n    gender,\n    year,\n    id_degree!inner(*)\n    ",t)).pipe((0,g.q)(1),(0,h.K)(function(t,n){return e.errorHandle(t),f.E}))}},{key:"getFunctionView",value:function(e){var t=this;return(0,d.D)(this.supaBaseService.onStudentInfoView(e)).pipe((0,g.q)(1),(0,m.b)(function(e){if(null!=e.error)throw(0,p._)(e.error)}),(0,h.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"insert",value:function(e){var t=this;return(0,d.D)(this.supaBaseService.onInsertRequest(this.table,e)).pipe((0,g.q)(1),(0,h.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"update",value:function(e,t){var n=this;return(0,d.D)(this.supaBaseService.onUpdateRequest(this.table,t,e)).pipe((0,g.q)(1),(0,h.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"delete",value:function(e){var t=this;return(0,d.D)(this.supaBaseService.onDeleteRequest(this.table,e)).pipe((0,g.q)(1),(0,h.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"buildQuery",value:function(e){for(var t,n=[],r=0;r<e.length;r+=3)"relation"==e[r+2]?n.push("".concat(e[r],':{have:{name:{matchesRegex:"').concat(e[r+1],'"}}}')):"gender"==e[r+2]?(t=!!e[r+1].includes("M"),n.push("".concat(e[r],":{equalTo:").concat(t,"}"))):n.push("".concat(e[r],':{matchesRegex:"').concat(e[r+1],'"}'));return"(where:{".concat(n.toString(),"})")}},{key:"getStudents",value:function(t){var n=this;return this.apollo.watchQuery({query:u.Ps(e||(e=i(["\n          query students {\n            students"," {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  carnet\n                  first_name\n                  last_name\n                  gender\n                  year\n                  id_degree {\n                    edges {\n                      node {\n                        id\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        "])),t),fetchPolicy:"network-only"}).valueChanges.pipe((0,g.q)(1),(0,h.K)(function(e,t){return n.errorHandle(e),f.E}))}},{key:"onCreateStudent",value:function(e,n,r,a,o,l){var c=this;return this.apollo.mutate({mutation:u.Ps(t||(t=i(["\n          mutation createStudent(\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            createStudent(\n              input: {\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id_degree:{add:e},gender:n,carnet:r,last_name:a,first_name:o,year:l}}).pipe((0,g.q)(1),(0,h.K)(function(e,t){return c.errorHandle(e),f.E}))}},{key:"onEditStudent",value:function(e,t,r,a,o,l,c,s){var d=this;return this.apollo.mutate({mutation:u.Ps(n||(n=i(["\n          mutation updateStudent(\n            $id: ID!\n            $id_degree: DegreeRelationInput!\n            $gender: Boolean!\n            $carnet: String!\n            $last_name: String!\n            $first_name: String!\n            $year: String!\n          ) {\n            updateStudent(\n              input: {\n                id: $id\n                fields: {\n                  id_degree: $id_degree\n                  gender: $gender\n                  carnet: $carnet\n                  last_name: $last_name\n                  first_name: $first_name\n                  year: $year\n                }\n              }\n            ) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e,id_degree:{remove:t,add:r},gender:a,carnet:o,last_name:l,first_name:c,year:s}}).pipe((0,g.q)(1),(0,h.K)(function(e,t){return d.errorHandle(e),f.E}))}},{key:"onDeleteStudent",value:function(e){var t=this;return this.apollo.mutate({mutation:u.Ps(r||(r=i(["\n          mutation deleteStudent($id: ID!) {\n            deleteStudent(input: { id: $id }) {\n              student {\n                id\n              }\n            }\n          }\n        "]))),variables:{id:e}}).pipe((0,g.q)(1),(0,h.K)(function(e,n){return t.errorHandle(e),f.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,p._)("error")}}]),o}();return o.\u0275fac=function(e){return new(e||o)(v.LFG(u._M),v.LFG(_.P),v.LFG(Z.R))},o.\u0275prov=v.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o}()}}])}();