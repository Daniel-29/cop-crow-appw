!function(){"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9237],{19602:function(r,i,a){a.d(i,{y:function(){return g}});var o=a(39490),n=a(28288),s=a(37716),l=a(38583);function c(e,r){1&e&&(s.ynx(0),s.TgZ(1,"div",1),s.Hsn(2),s.qZA(),s.TgZ(3,"div",2),s.Hsn(4,1),s.qZA(),s.BQk())}function f(e,r){1&e&&(s.TgZ(0,"div",4),s.Hsn(1,3),s.qZA()),2&e&&s.Q6J("@expandCollapse",void 0)}function u(e,r){if(1&e&&(s.ynx(0),s.Hsn(1,2),s.YNc(2,f,2,1,"div",3),s.BQk()),2&e){var t=s.oxw();s.xp6(2),s.Q6J("ngIf",t.expanded)}}var d,p=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],m=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"],g=((d=function(){function r(){e(this,r),this.expanded=!1,this.face="front",this.flippable=!1}return t(r,[{key:"classList",get:function(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}},{key:"ngOnChanges",value:function(e){"expanded"in e&&(this.expanded=(0,o.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,o.Ig)(e.flippable.currentValue))}}]),r}()).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=s.Xpm({type:d,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(e,r){2&e&&s.Tol(r.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[s.TTD],ngContentSelectors:m,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(e,r){1&e&&(s.F$t(p),s.YNc(0,c,5,0,"ng-container",0),s.YNc(1,u,3,1,"ng-container",0)),2&e&&(s.Q6J("ngIf",r.flippable),s.xp6(1),s.Q6J("ngIf",!r.flippable))},directives:[l.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:n.L}}),d)},33564:function(r,i,a){a.d(i,{J:function(){return l}});var o,n=a(38583),s=a(37716),l=((o=t(function r(){e(this,r)})).\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[n.ez]]}),o)},25553:function(e,r,t){t.d(r,{J:function(){return i.J}});var i=t(18421)},18421:function(e,r,t){t.d(r,{J:function(){return i.J}}),t(19602);var i=t(33564)},9237:function(r,i,a){a.r(i),a.d(i,{UserModule:function(){return j}});var o,n=a(38583),s=a(92340),l=a(3679),c=a(79765),f=a(37716),u=a(32489),d=a(1400),p=a(94402),m=a(40205),g=a(59193),h=a(15257),b=a(93342),v=a(5304),Z=a(50752),w=a(94270),x=((o=function(){function r(t,i,a){e(this,r),this.apollo=t,this.supaBaseService=i,this._fuseConfirmationService=a,this.table="profile"}return t(r,[{key:"get",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,p.D)(this.supaBaseService.onSelectRequest(this.table,t,i,"*",r)).pipe((0,h.q)(1),(0,b.b)(function(e){if(null!=e.error)throw(0,m._)(e.error)}),(0,v.K)(function(r,t){return e.errorHandle(r),g.E}))}},{key:"update",value:function(e,r){var t=this;return(0,p.D)(this.supaBaseService.onUpdateRequest(this.table,{permission:r},e)).pipe((0,h.q)(1),(0,b.b)(function(e){if(null!=e.error)throw(0,m._)(e.error)}),(0,v.K)(function(e,r){return t.errorHandle(e),g.E}))}},{key:"onSuccessDialog",value:function(e){this._fuseConfirmationService.open({title:"Alerta",message:"Se ".concat(e," el registro correctamente."),icon:{show:!0,name:"heroicons_outline:badge-check",color:"success"},actions:{confirm:{show:!1,label:"Si",color:"primary"},cancel:{show:!1,label:"No"}},dismissible:!0})}},{key:"errorHandle",value:function(e){return this._fuseConfirmationService.open({title:"Error",message:"Error insperado!!!",icon:{show:!0,name:"heroicons_outline:exclamation",color:"error"},actions:{confirm:{show:!1,label:"string",color:"primary"},cancel:{show:!1,label:"string"}},dismissible:!0}),(0,m._)("error")}}]),r}()).\u0275fac=function(e){return new(e||o)(f.LFG(Z._M),f.LFG(w.P),f.LFG(d.R))},o.\u0275prov=f.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),q=a(26927),y=a(1769),A=a(98295),k=a(76627),T=a(49983),_=a(67441),U=a(65939),J=a(72458);function I(e,r){1&e&&(f.TgZ(0,"mat-error"),f._uU(1,"Debe ingresar un correo electronico valido"),f.qZA())}function N(e,r){if(1&e&&(f.TgZ(0,"mat-option",43),f._uU(1),f.qZA()),2&e){var t=r.$implicit;f.Q6J("value",t.value),f.xp6(1),f.hij("",t.name," ")}}function C(e,r){1&e&&(f.TgZ(0,"mat-error"),f._uU(1,"Debe seleccionar una opcion!!"),f.qZA())}function Q(e,r){if(1&e&&(f.ynx(0),f.TgZ(1,"mat-option",43),f._uU(2),f.qZA(),f.BQk()),2&e){var t=r.$implicit;f.xp6(1),f.Q6J("value",t),f.xp6(1),f.Oqu(t.label)}}function S(e,r){1&e&&(f.TgZ(0,"span"),f._uU(1,"Debe ingresar este campo!!"),f.qZA())}function D(e,r){if(1&e&&f._UZ(0,"img",58),2&e){var t=f.oxw().$implicit;f.Q6J("src",t.data.avatar_url,f.LSH)}}function F(e,r){if(1&e){var t=f.EpF();f.ynx(0),f.TgZ(1,"div",44),f.TgZ(2,"div",45),f.TgZ(3,"div",46),f.YNc(4,D,1,1,"img",47),f.qZA(),f.TgZ(5,"div",14),f._uU(6),f.qZA(),f.TgZ(7,"div",48),f._uU(8),f.qZA(),f.TgZ(9,"div",49),f._UZ(10,"mat-icon",50),f.TgZ(11,"p"),f._uU(12),f.qZA(),f.qZA(),f.TgZ(13,"div",51),f._uU(14),f.qZA(),f.qZA(),f.TgZ(15,"div",52),f.TgZ(16,"button",53),f.NdJ("click",function(){var e=f.CHM(t).$implicit;return f.oxw().toggleDrawerOpen("leftDrawer",e)}),f.TgZ(17,"mat-icon",54),f.O4$(),f.TgZ(18,"svg",55),f._UZ(19,"path",56),f.qZA(),f.qZA(),f.kcU(),f.TgZ(20,"span",57),f._uU(21,"Editar"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.BQk()}if(2&e){var i=r.$implicit,a=r.index;f.xp6(4),f.Q6J("ngIf",i.data.avatar_url),f.xp6(2),f.Oqu(a+1),f.xp6(2),f.Oqu(i.permission),f.xp6(4),f.Oqu(i.data.full_name),f.xp6(2),f.Oqu(i.email)}}var O=function(){var r=function(){function r(t,i,a,o){e(this,r),this._fuseDrawerService=t,this._fuseConfirmationService=i,this._userService=a,this._changeDetectorRef=o,this._unsubscribeAll=new c.xQ,this.permission=s.N.applicationRole,this.fields=[{label:"Correo",field:"email",type:"ilike",subfield:null,searchable:!0,placeholder:"Correo ",icon:"at-symbol"},{label:"Permiso",field:"permission",type:"ilike",subfield:null,searchable:!0,placeholder:"Numero",icon:"phone"}],this.listRolesAndUsers=[],this.editformUsers=new l.cw({id:new l.NI("",[l.kI.required]),email:new l.NI("",[l.kI.minLength(3),l.kI.required,l.kI.email]),permission:new l.NI("",[l.kI.required])}),this.searchForm=new l.cw({field:new l.NI(this.fields[0],[l.kI.minLength(1),l.kI.required]),value:new l.NI("",[l.kI.minLength(1),l.kI.required])}),this.onLoadUserss()}return t(r,[{key:"onLoadUserss",value:function(){var e=this;this._userService.get().subscribe(function(r){e.listRolesAndUsers=r.data})}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}},{key:"onSearchMainData",value:function(){var e=this;this.searchForm.valid&&this._userService.get([{field:this.searchForm.controls.field.value.field,value:this.searchForm.controls.value.value,type:this.searchForm.controls.field.value.type,subfield:this.searchForm.controls.field.value.subfield}]).subscribe(function(r){e.listRolesAndUsers=r.data})}},{key:"onEditUsers",value:function(){var e=this;this.editformUsers.valid&&this._userService.update(this.editformUsers.controls.id.value,this.editformUsers.controls.permission.value).subscribe(function(r){e._userService.onSuccessDialog("actualizo"),e.editformUsers.reset(),e.onLoadUserss()})}},{key:"toggleDrawerOpen",value:function(e,r,t){r&&(this.editformUsers.controls.id.setValue(r.id),this.editformUsers.controls.email.disable(),this.editformUsers.controls.email.setValue(r.email),this.editformUsers.controls.permission.setValue(r.permission)),this._fuseDrawerService.getComponent(e).toggle()}}]),r}();return r.\u0275fac=function(e){return new(e||r)(f.Y36(u._),f.Y36(d.R),f.Y36(x),f.Y36(f.sBO))},r.\u0275cmp=f.Xpm({type:r,selectors:[["app-user"]],decls:68,vars:18,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","pt-6","sm:px-4","sm:pb-4","relative","flex","overflow-hidden"],[1,"w-3/5",3,"name","opened","mode"],[1,"flex","justify-center","h-400","min-h-400","max-h-400","border-2","border-dashed","border-gray-300","p-6"],[1,"ng-untouched","ng-pristine","ng-valid",3,"formGroup"],[1,"flex","flex-col","mt-8","bg-card","shadow","rounded","overflow-hidden"],[1,"p-8","bg-gray-50","dark:bg-gray-700"],[1,"text-lg","font-medium"],[1,"text-secondary"],["role","separator","aria-orientation","horizontal",1,"mat-divider","mat-divider-horizontal"],[1,"px-8","pb-4"],[1,"fuse-mat-no-subscript","w-full"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["type","email","matInput","","formControlName","email",3,"placeholder"],[4,"ngIf"],["formControlName","permission",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[1,"flex","items-center","justify-end","mt-10"],["mat-button","",1,"mat-focus-indicator","mat-button","mat-button-base",3,"click"],[1,"mat-button-wrapper"],["matripple","","ng-reflect-disabled","false","ng-reflect-centered","false","ng-reflect-trigger","[object HTMLButtonElement]",1,"mat-ripple","mat-button-ripple"],[1,"mat-button-focus-overlay"],["mat-flat-button","","ng-reflect-color","primary",1,"mat-focus-indicator","px-6","ml-3","mat-flat-button","mat-button-base","mat-primary"],["type","submit",1,"mat-button-wrapper",3,"click"],[1,"w-full",3,"animationDuration"],["label","Ver registros"],[1,"flex","flex-col","sm:flex-row","w-full","sm:max-w-none","mb-4",3,"formGroup"],["mat-stroked-button","",1,"h-full","mt-1","sm:mr-4",3,"click"],[1,"items-center","h-full"],[1,"fuse-mat-no-subscript","w-full","sm:w-1/5"],["formControlName","field"],[4,"ngFor","ngForOf"],[1,"fuse-mat-no-subscript","w-full","sm:w-3/6","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["placeholder","Search by title or description","matInput","","formControlName","value"],["mat-stroked-button","",1,"h-full","mt-1","sm:ml-4",3,"click"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-6","w-full","min-w-0","ng-star-inserted"],[3,"value"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden","ng-star-inserted"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[1,"w-32","h-32","mx-auto","rounded-full","overflow-hidden"],["class","w-full h-full object-cover",3,"src",4,"ngIf"],[1,"mt-1","font-smaill"],[1,"font-medium"],["svgIcon","heroicons_solid:identification"],[1,"mt-1","font-medium"],[1,"flex","items-center","w-full","border-t","divide-x"],[1,"flex","flex-auto","items-center","justify-center","py-4","hover:bg-hover",3,"click"],["role","img","aria-hidden","true","data-mat-icon-type","svg","data-mat-icon-name","mail","data-mat-icon-namespace","heroicons_solid",1,"mat-icon","notranslate","icon-size-5","text-hint","mat-icon-no-color"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"],[1,"ml-2"],[1,"w-full","h-full","object-cover",3,"src"]],template:function(e,r){1&e&&(f.TgZ(0,"div",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div"),f.TgZ(5,"a",4),f._uU(6," Administracion"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(7,"div",5),f.TgZ(8,"h2",6),f._uU(9," Administracion de Usuarios "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(10,"div",7),f.TgZ(11,"fuse-drawer",8),f.TgZ(12,"div",9),f.TgZ(13,"form",10),f.TgZ(14,"div",11),f.TgZ(15,"div",12),f.TgZ(16,"p",13),f._uU(17,"Basic information"),f.qZA(),f.TgZ(18,"p",14),f._uU(19,"Set the name and state of the city"),f.qZA(),f.qZA(),f._UZ(20,"mat-divider",15),f.TgZ(21,"div",16),f.TgZ(22,"mat-form-field",17),f.TgZ(23,"mat-label"),f._uU(24,"Email:"),f.qZA(),f._UZ(25,"mat-icon",18),f._UZ(26,"input",19),f.qZA(),f.YNc(27,I,2,0,"mat-error",20),f.qZA(),f.TgZ(28,"div",16),f.TgZ(29,"mat-form-field",17),f.TgZ(30,"mat-label"),f._uU(31," Permiso "),f.qZA(),f.TgZ(32,"mat-select",21),f.YNc(33,N,2,2,"mat-option",22),f.qZA(),f._UZ(34,"mat-icon",23),f.qZA(),f.YNc(35,C,2,0,"mat-error",20),f.qZA(),f.qZA(),f.TgZ(36,"div",24),f.TgZ(37,"button",25),f.NdJ("click",function(){return r.toggleDrawerOpen("leftDrawer")}),f.TgZ(38,"span",26),f._uU(39," Cancelar "),f.qZA(),f._UZ(40,"span",27),f._UZ(41,"span",28),f.qZA(),f.TgZ(42,"button",29),f.TgZ(43,"button",30),f.NdJ("click",function(){return r.onEditUsers(),r.toggleDrawerOpen("leftDrawer")}),f._uU(44," Guardar"),f.qZA(),f._UZ(45,"span",27),f._UZ(46,"span",28),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(47,"mat-tab-group",31),f.TgZ(48,"mat-tab",32),f.TgZ(49,"form",33),f.TgZ(50,"button",34),f.NdJ("click",function(){return r.onLoadUserss()}),f.TgZ(51,"span",35),f.TgZ(52,"span"),f._uU(53,"Reset"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(54,"mat-form-field",36),f.TgZ(55,"mat-select",37),f.YNc(56,Q,3,2,"ng-container",38),f.qZA(),f.qZA(),f.TgZ(57,"mat-form-field",39),f._UZ(58,"mat-icon",23),f._UZ(59,"input",40),f.TgZ(60,"mat-error"),f.YNc(61,S,2,0,"span",20),f.qZA(),f.qZA(),f.TgZ(62,"button",41),f.NdJ("click",function(){return r.onSearchMainData()}),f.TgZ(63,"span",35),f.TgZ(64,"span"),f._uU(65,"Buscar"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(66,"div",42),f.YNc(67,F,22,5,"ng-container",38),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&e&&(f.xp6(11),f.Q6J("name","leftDrawer")("opened",!1)("mode","side"),f.xp6(2),f.Q6J("formGroup",r.editformUsers),f.xp6(12),f.Q6J("svgIcon","heroicons_solid:briefcase"),f.xp6(1),f.Q6J("placeholder","Correo electronico"),f.xp6(1),f.Q6J("ngIf",r.editformUsers.get("email").errors&&r.editformUsers.get("email").touched),f.xp6(5),f.Q6J("placeholder","Permiso"),f.xp6(1),f.Q6J("ngForOf",r.permission),f.xp6(1),f.Q6J("svgIcon","heroicons_solid:location-marker"),f.xp6(1),f.Q6J("ngIf",r.editformUsers.get("permission").hasError("required")&&r.editformUsers.get("permission").touched),f.xp6(12),f.Q6J("animationDuration","0"),f.xp6(2),f.Q6J("formGroup",r.searchForm),f.xp6(7),f.Q6J("ngForOf",r.fields),f.xp6(1),f.Q6J("floatLabel","always"),f.xp6(1),f.Q6J("svgIcon","heroicons_solid:search"),f.xp6(3),f.Q6J("ngIf",r.searchForm.get("value").hasError("required")&&r.searchForm.get("value").touched),f.xp6(6),f.Q6J("ngForOf",r.listRolesAndUsers))},directives:[q.F,l._Y,l.JL,l.sg,y.d,A.KE,A.hX,k.Hw,A.qo,T.Nt,l.Fj,l.JJ,l.u,n.O5,_.gD,n.sg,U.SP,U.uX,A.TO,J.ey],styles:[""]}),r}(),L=a(63423),Y=a(25553),B=a(82120),E=[{path:"",component:O}],j=function(){var r=t(function r(){e(this,r)});return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[[n.ez,L.Bz.forChild(E),Y.J,k.Ps,U.Nh,y.t,A.lN,T.c,B.k,_.LD,l.UX,l.u5]]}),r}()}}])}();