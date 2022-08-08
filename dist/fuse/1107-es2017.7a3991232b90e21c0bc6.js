"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[1107],{21107:function(e,t,r){r.r(t),r.d(t,{AuthForgotPasswordModule:function(){return U}});var o=r(63423),s=r(51095),i=r(98295),a=r(76627),n=r(49983),l=r(4885),d=r(25553),g=r(10588),m=r(44466),u=r(3679),c=r(68939),f=r(28288),p=r(37716),h=r(88951),Z=r(38583),w=r(13994);const x=["forgotPasswordNgForm"];function v(e,t){if(1&e&&(p.TgZ(0,"fuse-alert",36),p._uU(1),p.qZA()),2&e){const e=p.oxw();p.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),p.xp6(1),p.hij(" ",e.alert.message," ")}}function y(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Email address is required "),p.qZA())}function A(e,t){1&e&&(p.TgZ(0,"mat-error"),p._uU(1," Please enter a valid email address "),p.qZA())}function b(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1," Send reset link "),p.qZA())}function q(e,t){1&e&&p._UZ(0,"mat-progress-spinner",37),2&e&&p.Q6J("diameter",24)("mode","indeterminate")}const _=function(){return["/sign-in"]},T=[{path:"",component:(()=>{class e{constructor(e,t){this._authService=e,this._formBuilder=t,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[u.kI.required,u.kI.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,c.x)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(e=>{this.alert={type:"success",message:"Se ha enviado el reestablecimiento de contrase\xf1a! Usted recibir\xe1 un correo si se encuentra registrado en nuestro sistema."}},e=>{this.alert={type:"error",message:"No se ha encontrado una cuenta vincualada a este correo"}}))}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(h.e),p.Y36(u.qu))},e.\u0275cmp=p.Xpm({type:e,selectors:[["auth-forgot-password"]],viewQuery:function(e,t){if(1&e&&p.Gf(x,5),2&e){let e;p.iGM(e=p.CRH())&&(t.forgotPasswordNgForm=e.first)}},decls:52,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p._UZ(4,"img",4),p.qZA(),p.TgZ(5,"div",5),p._uU(6,"Forgot password?"),p.qZA(),p.TgZ(7,"div",6),p._uU(8,"Fill the form to reset your password"),p.qZA(),p.YNc(9,v,2,5,"fuse-alert",7),p.TgZ(10,"form",8,9),p.TgZ(12,"mat-form-field",10),p.TgZ(13,"mat-label"),p._uU(14,"Email address"),p.qZA(),p._UZ(15,"input",11),p.YNc(16,y,2,0,"mat-error",12),p.YNc(17,A,2,0,"mat-error",12),p.qZA(),p.TgZ(18,"button",13),p.NdJ("click",function(){return t.sendResetLink()}),p.YNc(19,b,2,0,"span",12),p.YNc(20,q,1,2,"mat-progress-spinner",14),p.qZA(),p.TgZ(21,"div",15),p.TgZ(22,"span"),p._uU(23,"Return to"),p.qZA(),p.TgZ(24,"a",16),p._uU(25,"sign in "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(26,"div",17),p.O4$(),p.TgZ(27,"svg",18),p.TgZ(28,"g",19),p._UZ(29,"circle",20),p._UZ(30,"circle",21),p.qZA(),p.qZA(),p.TgZ(31,"svg",22),p.TgZ(32,"defs"),p.TgZ(33,"pattern",23),p._UZ(34,"rect",24),p.qZA(),p.qZA(),p._UZ(35,"rect",25),p.qZA(),p.kcU(),p.TgZ(36,"div",26),p.TgZ(37,"div",27),p.TgZ(38,"div"),p._uU(39,"Welcome to"),p.qZA(),p.TgZ(40,"div"),p._uU(41,"our community"),p.qZA(),p.qZA(),p.TgZ(42,"div",28),p._uU(43," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),p.qZA(),p.TgZ(44,"div",29),p.TgZ(45,"div",30),p._UZ(46,"img",31),p._UZ(47,"img",32),p._UZ(48,"img",33),p._UZ(49,"img",34),p.qZA(),p.TgZ(50,"div",35),p._uU(51,"More than 17k people joined us, it's your turn"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.xp6(9),p.Q6J("ngIf",t.showAlert),p.xp6(1),p.Q6J("formGroup",t.forgotPasswordForm),p.xp6(5),p.Q6J("formControlName","email"),p.xp6(1),p.Q6J("ngIf",t.forgotPasswordForm.get("email").hasError("required")),p.xp6(1),p.Q6J("ngIf",t.forgotPasswordForm.get("email").hasError("email")),p.xp6(1),p.Q6J("color","primary")("disabled",t.forgotPasswordForm.disabled),p.xp6(1),p.Q6J("ngIf",!t.forgotPasswordForm.disabled),p.xp6(1),p.Q6J("ngIf",t.forgotPasswordForm.disabled),p.xp6(4),p.Q6J("routerLink",p.DdM(10,_)))},directives:[Z.O5,u._Y,u.JL,u.sg,i.KE,i.hX,n.Nt,u.Fj,u.JJ,u.u,s.lW,o.yS,w.W,i.TO,l.Ou],encapsulation:2,data:{animation:f.L}}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[o.Bz.forChild(T),s.ot,i.lN,a.Ps,n.c,l.Cq,d.J,g.fC,m.m]]}),e})()}}]);