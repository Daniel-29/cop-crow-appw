!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=i(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}}).apply(this,arguments)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[5178],{36063:function(e,i,a){a.d(i,{$o:function(){return v},t7:function(){return m}});var c=a(37716),d=a(72458),l=a(16738),h=a.n(l)()||l,f=new c.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function _(t,e){for(var n=Array(t),r=0;r<t;r++)n[r]=e(r);return n}var p,m=((p=function(e){o(a,e);var i=s(a);function a(e,n){var r;return t(this,a),(r=i.call(this))._options=n,r.setLocale(e||h.locale()),r}return n(a,[{key:"setLocale",value:function(t){var e=this;r(u(a.prototype),"setLocale",this).call(this,t);var n=h.localeData(t);this._localeData={firstDayOfWeek:n.firstDayOfWeek(),longMonths:n.months(),shortMonths:n.monthsShort(),dates:_(31,function(t){return e.createDate(2017,0,t+1).format("D")}),longDaysOfWeek:n.weekdays(),shortDaysOfWeek:n.weekdaysShort(),narrowDaysOfWeek:n.weekdaysMin()}}},{key:"getYear",value:function(t){return this.clone(t).year()}},{key:"getMonth",value:function(t){return this.clone(t).month()}},{key:"getDate",value:function(t){return this.clone(t).date()}},{key:"getDayOfWeek",value:function(t){return this.clone(t).day()}},{key:"getMonthNames",value:function(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}},{key:"getDateNames",value:function(){return this._localeData.dates}},{key:"getDayOfWeekNames",value:function(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}},{key:"getYearName",value:function(t){return this.clone(t).format("YYYY")}},{key:"getFirstDayOfWeek",value:function(){return this._localeData.firstDayOfWeek}},{key:"getNumDaysInMonth",value:function(t){return this.clone(t).daysInMonth()}},{key:"clone",value:function(t){return t.clone().locale(this.locale)}},{key:"createDate",value:function(t,e,n){var r=this._createMoment({year:t,month:e,date:n}).locale(this.locale);return r.isValid(),r}},{key:"today",value:function(){return this._createMoment().locale(this.locale)}},{key:"parse",value:function(t,e){return t&&"string"==typeof t?this._createMoment(t,e,this.locale):t?this._createMoment(t).locale(this.locale):null}},{key:"format",value:function(t,e){return t=this.clone(t),this.isValid(t),t.format(e)}},{key:"addCalendarYears",value:function(t,e){return this.clone(t).add({years:e})}},{key:"addCalendarMonths",value:function(t,e){return this.clone(t).add({months:e})}},{key:"addCalendarDays",value:function(t,e){return this.clone(t).add({days:e})}},{key:"toIso8601",value:function(t){return this.clone(t).format()}},{key:"deserialize",value:function(t){var e;if(t instanceof Date)e=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;e=this._createMoment(t,h.ISO_8601).locale(this.locale)}return e&&this.isValid(e)?this._createMoment(e).locale(this.locale):r(u(a.prototype),"deserialize",this).call(this,t)}},{key:"isDateInstance",value:function(t){return h.isMoment(t)}},{key:"isValid",value:function(t){return this.clone(t).isValid()}},{key:"invalid",value:function(){return h.invalid()}},{key:"_createMoment",value:function(t,e,n){var r=this._options||{},i=r.strict;return r.useUtc?h.utc(t,e,n,i):h(t,e,n,i)}}]),a}(d._A)).\u0275fac=function(t){return new(t||p)(c.LFG(d.Ad,8),c.LFG(f,8))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac}),p),v={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},23017:function(e,r,i){i.d(r,{jA:function(){return V},kh:function(){return Z},LW:function(){return L},SJ:function(){return Q}});var a=i(80521),c=i(74937),u=i(38583),d=i(37716),l=i(72458),h=i(39490),f=i(36461),_=i(79765),p=i(22759),m=i(66682),v=i(77393);function g(t){return function(e){return e.lift(new w(t))}}var w=function(){function e(n){t(this,e),this.value=n}return n(e,[{key:"call",value:function(t,e){return e.subscribe(new y(t,this.value))}}]),e}(),y=function(e){o(i,e);var r=s(i);function i(e,n){var o;return t(this,i),(o=r.call(this,e)).value=n,o}return n(i,[{key:"_next",value:function(t){this.destination.next(this.value)}}]),i}(v.L),k=i(45435),b=i(88002),D=i(46782),C=i(87519),O=i(15257),S=i(39761),M=i(54395),x=i(17238),R=i(46237),B=i(34564),E=i(70946),F=["*"];function Y(t,e){if(1&t){var n=d.EpF();d.TgZ(0,"div",2),d.NdJ("click",function(){return d.CHM(n),d.oxw()._onBackdropClicked()}),d.qZA()}if(2&t){var r=d.oxw();d.ekj("mat-drawer-shown",r._isShowingBackdrop())}}function A(t,e){1&t&&(d.TgZ(0,"mat-drawer-content"),d.Hsn(1,2),d.qZA())}var T,W=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],I=["mat-drawer","mat-drawer-content","*"],P={transformDrawer:(0,x.X$)("transform",[(0,x.SB)("open, open-instant",(0,x.oB)({transform:"none",visibility:"visible"})),(0,x.SB)("void",(0,x.oB)({"box-shadow":"none",visibility:"hidden"})),(0,x.eR)("void => open-instant",(0,x.jt)("0ms")),(0,x.eR)("void <=> open, open-instant => void",(0,x.jt)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},j=new d.OlP("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function(){return!1}}),z=new d.OlP("MAT_DRAWER_CONTAINER"),L=((T=function(e){o(i,e);var r=s(i);function i(e,n,o,a,s){var c;return t(this,i),(c=r.call(this,o,a,s))._changeDetectorRef=e,c._container=n,c}return n(i,[{key:"ngAfterContentInit",value:function(){var t=this;this._container._contentMarginChanges.subscribe(function(){t._changeDetectorRef.markForCheck()})}}]),i}(c.PQ)).\u0275fac=function(t){return new(t||T)(d.Y36(d.sBO),d.Y36((0,d.Gpc)(function(){return Z})),d.Y36(d.SBq),d.Y36(c.mF),d.Y36(d.R0b))},T.\u0275cmp=d.Xpm({type:T,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,e){2&t&&d.Udp("margin-left",e._container._contentMargins.left,"px")("margin-right",e._container._contentMargins.right,"px")},features:[d.qOj],ngContentSelectors:F,decls:1,vars:0,template:function(t,e){1&t&&(d.F$t(),d.Hsn(0))},encapsulation:2,changeDetection:0}),T),V=function(){var e=function(){function e(n,r,i,o,a,s,c){var u=this;t(this,e),this._elementRef=n,this._focusTrapFactory=r,this._focusMonitor=i,this._platform=o,this._ngZone=a,this._doc=s,this._container=c,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new _.xQ,this._animationEnd=new _.xQ,this._animationState="void",this.openedChange=new d.vpe(!0),this._openedStream=this.openedChange.pipe((0,k.h)(function(t){return t}),(0,b.U)(function(){})),this.openedStart=this._animationStarted.pipe((0,k.h)(function(t){return t.fromState!==t.toState&&0===t.toState.indexOf("open")}),g(void 0)),this._closedStream=this.openedChange.pipe((0,k.h)(function(t){return!t}),(0,b.U)(function(){})),this.closedStart=this._animationStarted.pipe((0,k.h)(function(t){return t.fromState!==t.toState&&"void"===t.toState}),g(void 0)),this._destroyed=new _.xQ,this.onPositionChanged=new d.vpe,this._modeChanged=new _.xQ,this.openedChange.subscribe(function(t){t?(u._doc&&(u._elementFocusedBeforeDrawerWasOpened=u._doc.activeElement),u._takeFocus()):u._isFocusWithinDrawer()&&u._restoreFocus()}),this._ngZone.runOutsideAngular(function(){(0,p.R)(u._elementRef.nativeElement,"keydown").pipe((0,k.h)(function(t){return t.keyCode===f.hY&&!u.disableClose&&!(0,f.Vb)(t)}),(0,D.R)(u._destroyed)).subscribe(function(t){return u._ngZone.run(function(){u.close(),t.stopPropagation(),t.preventDefault()})})}),this._animationEnd.pipe((0,C.x)(function(t,e){return t.fromState===e.fromState&&t.toState===e.toState})).subscribe(function(t){var e=t.fromState,n=t.toState;(0===n.indexOf("open")&&"void"===e||"void"===n&&0===e.indexOf("open"))&&u.openedChange.emit(u._opened)})}return n(e,[{key:"position",get:function(){return this._position},set:function(t){(t="end"===t?"end":"start")!=this._position&&(this._position=t,this.onPositionChanged.emit())}},{key:"mode",get:function(){return this._mode},set:function(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}},{key:"disableClose",get:function(){return this._disableClose},set:function(t){this._disableClose=(0,h.Ig)(t)}},{key:"autoFocus",get:function(){var t=this._autoFocus;return null==t?"side"!==this.mode:t},set:function(t){this._autoFocus=(0,h.Ig)(t)}},{key:"opened",get:function(){return this._opened},set:function(t){this.toggle((0,h.Ig)(t))}},{key:"_takeFocus",value:function(){var t=this;!this.autoFocus||!this._focusTrap||this._focusTrap.focusInitialElementWhenReady().then(function(e){!e&&"function"==typeof t._elementRef.nativeElement.focus&&t._elementRef.nativeElement.focus()})}},{key:"_restoreFocus",value:function(){!this.autoFocus||(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,this._openedVia):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null,this._openedVia=null)}},{key:"_isFocusWithinDrawer",value:function(){var t,e=null===(t=this._doc)||void 0===t?void 0:t.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}},{key:"ngAfterContentInit",value:function(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState()}},{key:"ngAfterContentChecked",value:function(){this._platform.isBrowser&&(this._enableAnimations=!0)}},{key:"ngOnDestroy",value:function(){this._focusTrap&&this._focusTrap.destroy(),this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"open",value:function(t){return this.toggle(!0,t)}},{key:"close",value:function(){return this.toggle(!1)}},{key:"_closeViaBackdropClick",value:function(){return this._setOpen(!1,!0)}},{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.opened,e=arguments.length>1?arguments[1]:void 0;return this._setOpen(t,!t&&this._isFocusWithinDrawer(),e)}},{key:"_setOpen",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"program";return this._opened=t,t?(this._animationState=this._enableAnimations?"open":"open-instant",this._openedVia=r):(this._animationState="void",e&&this._restoreFocus()),this._updateFocusTrapState(),new Promise(function(t){n.openedChange.pipe((0,O.q)(1)).subscribe(function(e){return t(e?"open":"close")})})}},{key:"_getWidth",value:function(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}},{key:"_updateFocusTrapState",value:function(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}},{key:"_animationStartListener",value:function(t){this._animationStarted.next(t)}},{key:"_animationDoneListener",value:function(t){this._animationEnd.next(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.Y36(d.SBq),d.Y36(B.qV),d.Y36(B.tE),d.Y36(a.t4),d.Y36(d.R0b),d.Y36(u.K0,8),d.Y36(z,8))},e.\u0275cmp=d.Xpm({type:e,selectors:[["mat-drawer"]],hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,e){1&t&&d.WFA("@transform.start",function(t){return e._animationStartListener(t)})("@transform.done",function(t){return e._animationDoneListener(t)}),2&t&&(d.uIk("align",null),d.d8E("@transform",e._animationState),d.ekj("mat-drawer-end","end"===e.position)("mat-drawer-over","over"===e.mode)("mat-drawer-push","push"===e.mode)("mat-drawer-side","side"===e.mode)("mat-drawer-opened",e.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:F,decls:2,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,e){1&t&&(d.F$t(),d.TgZ(0,"div",0),d.Hsn(1),d.qZA())},directives:[c.PQ],encapsulation:2,data:{animation:[P.transformDrawer]},changeDetection:0}),e}(),Z=function(){var e=function(){function e(n,r,i,o,a){var s=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=arguments.length>6?arguments[6]:void 0;t(this,e),this._dir=n,this._element=r,this._ngZone=i,this._changeDetectorRef=o,this._animationMode=u,this._drawers=new d.n_E,this.backdropClick=new d.vpe,this._destroyed=new _.xQ,this._doCheckSubject=new _.xQ,this._contentMargins={left:null,right:null},this._contentMarginChanges=new _.xQ,n&&n.change.pipe((0,D.R)(this._destroyed)).subscribe(function(){s._validateDrawers(),s.updateContentMargins()}),a.change().pipe((0,D.R)(this._destroyed)).subscribe(function(){return s.updateContentMargins()}),this._autosize=c}return n(e,[{key:"start",get:function(){return this._start}},{key:"end",get:function(){return this._end}},{key:"autosize",get:function(){return this._autosize},set:function(t){this._autosize=(0,h.Ig)(t)}},{key:"hasBackdrop",get:function(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride},set:function(t){this._backdropOverride=null==t?null:(0,h.Ig)(t)}},{key:"scrollable",get:function(){return this._userContent||this._content}},{key:"ngAfterContentInit",value:function(){var t=this;this._allDrawers.changes.pipe((0,S.O)(this._allDrawers),(0,D.R)(this._destroyed)).subscribe(function(e){t._drawers.reset(e.filter(function(e){return!e._container||e._container===t})),t._drawers.notifyOnChanges()}),this._drawers.changes.pipe((0,S.O)(null)).subscribe(function(){t._validateDrawers(),t._drawers.forEach(function(e){t._watchDrawerToggle(e),t._watchDrawerPosition(e),t._watchDrawerMode(e)}),(!t._drawers.length||t._isDrawerOpen(t._start)||t._isDrawerOpen(t._end))&&t.updateContentMargins(),t._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(function(){t._doCheckSubject.pipe((0,M.b)(10),(0,D.R)(t._destroyed)).subscribe(function(){return t.updateContentMargins()})})}},{key:"ngOnDestroy",value:function(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}},{key:"open",value:function(){this._drawers.forEach(function(t){return t.open()})}},{key:"close",value:function(){this._drawers.forEach(function(t){return t.close()})}},{key:"updateContentMargins",value:function(){var t=this,e=0,n=0;if(this._left&&this._left.opened)if("side"==this._left.mode)e+=this._left._getWidth();else if("push"==this._left.mode){var r=this._left._getWidth();e+=r,n-=r}if(this._right&&this._right.opened)if("side"==this._right.mode)n+=this._right._getWidth();else if("push"==this._right.mode){var i=this._right._getWidth();n+=i,e-=i}n=n||null,((e=e||null)!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(function(){return t._contentMarginChanges.next(t._contentMargins)}))}},{key:"ngDoCheck",value:function(){var t=this;this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(function(){return t._doCheckSubject.next()})}},{key:"_watchDrawerToggle",value:function(t){var e=this;t._animationStarted.pipe((0,k.h)(function(t){return t.fromState!==t.toState}),(0,D.R)(this._drawers.changes)).subscribe(function(t){"open-instant"!==t.toState&&"NoopAnimations"!==e._animationMode&&e._element.nativeElement.classList.add("mat-drawer-transition"),e.updateContentMargins(),e._changeDetectorRef.markForCheck()}),"side"!==t.mode&&t.openedChange.pipe((0,D.R)(this._drawers.changes)).subscribe(function(){return e._setContainerClass(t.opened)})}},{key:"_watchDrawerPosition",value:function(t){var e=this;!t||t.onPositionChanged.pipe((0,D.R)(this._drawers.changes)).subscribe(function(){e._ngZone.onMicrotaskEmpty.pipe((0,O.q)(1)).subscribe(function(){e._validateDrawers()})})}},{key:"_watchDrawerMode",value:function(t){var e=this;t&&t._modeChanged.pipe((0,D.R)((0,m.T)(this._drawers.changes,this._destroyed))).subscribe(function(){e.updateContentMargins(),e._changeDetectorRef.markForCheck()})}},{key:"_setContainerClass",value:function(t){var e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}},{key:"_validateDrawers",value:function(){var t=this;this._start=this._end=null,this._drawers.forEach(function(e){"end"==e.position?t._end=e:t._start=e}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}},{key:"_isPushed",value:function(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}},{key:"_onBackdropClicked",value:function(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}},{key:"_closeModalDrawersViaBackdrop",value:function(){var t=this;[this._start,this._end].filter(function(e){return e&&!e.disableClose&&t._canHaveBackdrop(e)}).forEach(function(t){return t._closeViaBackdropClick()})}},{key:"_isShowingBackdrop",value:function(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}},{key:"_canHaveBackdrop",value:function(t){return"side"!==t.mode||!!this._backdropOverride}},{key:"_isDrawerOpen",value:function(t){return null!=t&&t.opened}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.Y36(E.Is,8),d.Y36(d.SBq),d.Y36(d.R0b),d.Y36(d.sBO),d.Y36(c.rL),d.Y36(j),d.Y36(R.Qb,8))},e.\u0275cmp=d.Xpm({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(t,e,n){var r;(1&t&&(d.Suo(n,L,5),d.Suo(n,V,5)),2&t)&&(d.iGM(r=d.CRH())&&(e._content=r.first),d.iGM(r=d.CRH())&&(e._allDrawers=r))},viewQuery:function(t,e){var n;(1&t&&d.Gf(L,5),2&t)&&(d.iGM(n=d.CRH())&&(e._userContent=n.first))},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,e){2&t&&d.ekj("mat-drawer-container-explicit-backdrop",e._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[d._Bn([{provide:z,useExisting:e}])],ngContentSelectors:I,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,e){1&t&&(d.F$t(W),d.YNc(0,Y,1,2,"div",0),d.Hsn(1),d.Hsn(2,1),d.YNc(3,A,2,0,"mat-drawer-content",1)),2&t&&(d.Q6J("ngIf",e.hasBackdrop),d.xp6(3),d.Q6J("ngIf",!e._content))},directives:[u.O5,L],styles:[".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"],encapsulation:2,changeDetection:0}),e}(),Q=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[u.ez,l.BQ,a.ud,c.ZD],c.ZD,l.BQ]}),e}()}}])}();