import{b as Ee}from"./chunk-3ILZWEUZ.js";import{a as Ne}from"./chunk-QKGWYPLA.js";import{a as ke}from"./chunk-GYCEITP3.js";import{a as Te,d as De,o as Se}from"./chunk-UVCIZBQN.js";import{b as Ve,g as Be,k as oe}from"./chunk-75ZN5KSJ.js";import{$ as p,Aa as m,Ac as ne,Bb as be,Cb as ge,D as O,Fa as S,Fb as x,Gb as xe,Hb as Ie,Id as ie,Jd as j,Kd as we,La as de,Nb as Z,P as ce,Pd as re,Q as K,Qa as z,R as se,Ra as ue,Ta as P,Ua as b,V as H,Wb as ye,_ as c,_a as f,a as G,aa as w,b as q,ba as pe,eb as l,fb as I,gb as y,gd as ve,ha as $,hb as D,jc as V,ka as W,kb as J,kc as X,la as E,lb as N,m as L,mb as M,ob as T,qb as C,rb as u,sb as he,tb as _e,ub as U,uc as Y,vb as fe,wb as A,wc as ee,xb as F,xc as Ce,ya as me,yc as te}from"./chunk-HII2X2KQ.js";var Ue=["data-p-icon","angle-down"],Me=(()=>{class i extends oe{static \u0275fac=(()=>{let e;return function(t){return(e||(e=E(i)))(t||i)}})();static \u0275cmp=z({type:i,selectors:[["","data-p-icon","angle-down"]],features:[P],attrs:Ue,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,t){n&1&&(w(),J(0,"path",0))},encapsulation:2})}return i})();var $e=["data-p-icon","angle-up"],Ae=(()=>{class i extends oe{static \u0275fac=(()=>{let e;return function(t){return(e||(e=E(i)))(t||i)}})();static \u0275cmp=z({type:i,selectors:[["","data-p-icon","angle-up"]],features:[P],attrs:$e,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(w(),J(0,"path",0))},encapsulation:2})}return i})();var Fe=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Ke=["clearicon"],je=["incrementbuttonicon"],Qe=["decrementbuttonicon"],qe=["input"];function He(i,a){if(i&1){let e=T();w(),I(0,"svg",7),C("click",function(){c(e);let t=u(2);return p(t.clear())}),y()}if(i&2){let e=u(2);x(e.cx("clearIcon")),f("data-pc-section","clearIcon")}}function We(i,a){}function Je(i,a){i&1&&b(0,We,0,0,"ng-template")}function Ze(i,a){if(i&1){let e=T();I(0,"span",8),C("click",function(){c(e);let t=u(2);return p(t.clear())}),b(1,Je,1,0,null,9),y()}if(i&2){let e=u(2);x(e.cx("clearIcon")),f("data-pc-section","clearIcon"),m(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Xe(i,a){if(i&1&&(N(0),b(1,He,1,3,"svg",5)(2,Ze,2,4,"span",6),M()),i&2){let e=u();m(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),m(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Ye(i,a){if(i&1&&D(0,"span",12),i&2){let e=u(2);l("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function et(i,a){i&1&&(w(),D(0,"svg",14)),i&2&&f("data-pc-section","incrementbuttonicon")}function tt(i,a){}function nt(i,a){i&1&&b(0,tt,0,0,"ng-template")}function it(i,a){if(i&1&&(N(0),b(1,et,1,1,"svg",13)(2,nt,1,0,null,9),M()),i&2){let e=u(2);m(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function rt(i,a){if(i&1&&D(0,"span",12),i&2){let e=u(2);l("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function ot(i,a){i&1&&(w(),D(0,"svg",16)),i&2&&f("data-pc-section","decrementbuttonicon")}function at(i,a){}function st(i,a){i&1&&b(0,at,0,0,"ng-template")}function ut(i,a){if(i&1&&(N(0),b(1,ot,1,1,"svg",15)(2,st,1,0,null,9),M()),i&2){let e=u(2);m(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function lt(i,a){if(i&1){let e=T();I(0,"span")(1,"button",10),C("mousedown",function(t){c(e);let r=u();return p(r.onUpButtonMouseDown(t))})("mouseup",function(){c(e);let t=u();return p(t.onUpButtonMouseUp())})("mouseleave",function(){c(e);let t=u();return p(t.onUpButtonMouseLeave())})("keydown",function(t){c(e);let r=u();return p(r.onUpButtonKeyDown(t))})("keyup",function(){c(e);let t=u();return p(t.onUpButtonKeyUp())}),b(2,Ye,1,2,"span",11)(3,it,3,2,"ng-container",2),y(),I(4,"button",10),C("mousedown",function(t){c(e);let r=u();return p(r.onDownButtonMouseDown(t))})("mouseup",function(){c(e);let t=u();return p(t.onDownButtonMouseUp())})("mouseleave",function(){c(e);let t=u();return p(t.onDownButtonMouseLeave())})("keydown",function(t){c(e);let r=u();return p(r.onDownButtonKeyDown(t))})("keyup",function(){c(e);let t=u();return p(t.onDownButtonKeyUp())}),b(5,rt,1,2,"span",11)(6,ut,3,2,"ng-container",2),y()()}if(i&2){let e=u();x(e.cx("buttonGroup")),f("data-pc-section","buttonGroup"),m(),x(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),m(),l("ngIf",e.incrementButtonIcon),m(),l("ngIf",!e.incrementButtonIcon),m(),x(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),m(),l("ngIf",e.decrementButtonIcon),m(),l("ngIf",!e.decrementButtonIcon)}}function ct(i,a){if(i&1&&D(0,"span",12),i&2){let e=u(2);l("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function pt(i,a){i&1&&(w(),D(0,"svg",14)),i&2&&f("data-pc-section","incrementbuttonicon")}function mt(i,a){}function dt(i,a){i&1&&b(0,mt,0,0,"ng-template")}function ht(i,a){if(i&1&&(N(0),b(1,pt,1,1,"svg",13)(2,dt,1,0,null,9),M()),i&2){let e=u(2);m(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function _t(i,a){if(i&1){let e=T();I(0,"button",10),C("mousedown",function(t){c(e);let r=u();return p(r.onUpButtonMouseDown(t))})("mouseup",function(){c(e);let t=u();return p(t.onUpButtonMouseUp())})("mouseleave",function(){c(e);let t=u();return p(t.onUpButtonMouseLeave())})("keydown",function(t){c(e);let r=u();return p(r.onUpButtonKeyDown(t))})("keyup",function(){c(e);let t=u();return p(t.onUpButtonKeyUp())}),b(1,ct,1,2,"span",11)(2,ht,3,2,"ng-container",2),y()}if(i&2){let e=u();x(e.cx("incrementButton")),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),m(),l("ngIf",e.incrementButtonIcon),m(),l("ngIf",!e.incrementButtonIcon)}}function ft(i,a){if(i&1&&D(0,"span",12),i&2){let e=u(2);l("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function bt(i,a){i&1&&(w(),D(0,"svg",16)),i&2&&f("data-pc-section","decrementbuttonicon")}function gt(i,a){}function xt(i,a){i&1&&b(0,gt,0,0,"ng-template")}function It(i,a){if(i&1&&(N(0),b(1,bt,1,1,"svg",15)(2,xt,1,0,null,9),M()),i&2){let e=u(2);m(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function yt(i,a){if(i&1){let e=T();I(0,"button",10),C("mousedown",function(t){c(e);let r=u();return p(r.onDownButtonMouseDown(t))})("mouseup",function(){c(e);let t=u();return p(t.onDownButtonMouseUp())})("mouseleave",function(){c(e);let t=u();return p(t.onDownButtonMouseLeave())})("keydown",function(t){c(e);let r=u();return p(r.onDownButtonKeyDown(t))})("keyup",function(){c(e);let t=u();return p(t.onDownButtonKeyUp())}),b(1,ft,1,2,"span",11)(2,It,3,2,"ng-container",2),y()}if(i&2){let e=u();x(e.cx("decrementButton")),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),m(),l("ngIf",e.decrementButtonIcon),m(),l("ngIf",!e.decrementButtonIcon)}}var Ct=`
    ${Fe}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,vt={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Re=(()=>{class i extends re{name="inputnumber";theme=Ct;classes=vt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=E(i)))(t||i)}})();static \u0275prov=K({token:i,factory:i.\u0275fac})}return i})();var wt={provide:Te,useExisting:ce(()=>Le),multi:!0},Le=(()=>{class i extends Ne{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new S;onFocus=new S;onBlur=new S;onKeyDown=new S;onClear=new S;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=H(Re);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(De,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((t,r)=>[t,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=t=>n.get(t)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,q(G({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),t=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let s=+o;return isNaN(s)?null:s}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t);this.maxlength()&&this.maxlength()<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=n;s<=r.length;s++){let h=s===0?0:s-1;if(this.isNumeralChar(r.charAt(h))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=t;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let s=r.charAt(n-1),{decimalCharIndex:h,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let d=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(h>0&&n>h){let v=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";o=r.slice(0,n-1)+v+r.slice(n)}else _===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&s.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let s=r.charAt(n),{decimalCharIndex:h,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let d=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(h>0&&n>h){let v=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";o=r.slice(0,n)+v+r.slice(n+1)}else _===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:s,selectionStart:h,selectionEnd:_}=this.input.nativeElement,d=this.parseValue(s+t),v=d!=null?d.toString():"",B=s.substring(h,_),g=this.parseValue(B),R=g!=null?g.toString():"";if(h!==_&&R.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}this.maxlength()&&v.length>this.maxlength()||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){return this.min()==null||this.min()<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,h=this.input?.nativeElement.value.trim(),{decimalCharIndex:_,minusCharIndex:d,suffixCharIndex:v,currencyCharIndex:B}=this.getCharIndexes(h),g;if(t.isMinusSign)o===0&&(g=h,(d===-1||s!==0)&&(g=this.insertText(h,n,0,s)),this.updateValue(e,g,n,"insert"));else if(t.isDecimalSign)_>0&&o===_?this.updateValue(e,h,n,"insert"):_>o&&_<s?(g=this.insertText(h,n,o,s),this.updateValue(e,g,n,"insert")):_===-1&&this.maxFractionDigits&&(g=this.insertText(h,n,o,s),this.updateValue(e,g,n,"insert"));else{let R=this.numberFormat.resolvedOptions().maximumFractionDigits,k=o!==s?"range-insert":"insert";if(_>0&&o>_){if(o+n.length-(_+1)<=R){let Q=B>=o?B-1:v>=o?v:h.length;g=h.slice(0,o)+n+h.slice(o+n.length,Q)+h.slice(Q),this.updateValue(e,g,n,k)}}else g=this.insertText(h,n,o,s),this.updateValue(e,g,n,k)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let s=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<s)&&(e-=s);let h=t.charAt(e);if(this.isNumeralChar(h))return e+s;let _=e-1;for(;_>=0;)if(h=t.charAt(_),this.isNumeralChar(h)){o=_+s;break}else _--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(_=e;_<r;)if(h=t.charAt(_),this.isNumeralChar(h)){o=_+s;break}else _++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==ve()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,t,r,n),this.handleOnInput(e,o,s))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){return e==="-"||e==null?null:this.min()!=null&&e<this.min()?this.min():this.max()!=null&&e>this.max()?this.max():e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,s=this.formatValue(e),h=o.length;if(s!==r&&(s=this.concatValues(s,r)),h===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let d=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(d,d)}else{let _=this.input.nativeElement.selectionStart,d=this.input.nativeElement.selectionEnd;if(this.maxlength()&&s.length>this.maxlength()&&(s=s.slice(0,this.maxlength()),_=Math.min(_,this.maxlength()),d=Math.min(d,this.maxlength())),this.maxlength()&&this.maxlength()<s.length)return;this.input.nativeElement.value=s;let v=s.length;if(t==="range-insert"){let B=this.parseValue((o||"").slice(0,_)),R=(B!==null?B.toString():"").split("").join(`(${this.groupChar})?`),k=new RegExp(R,"g");k.test(s);let Q=n.split("").join(`(${this.groupChar})?`),le=new RegExp(Q,"g");le.test(s.slice(k.lastIndex)),d=k.lastIndex+le.lastIndex,this.input.nativeElement.setSelectionRange(d,d)}else if(v===h)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(d+1,d+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(d-1,d-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(d,d);else if(t==="delete-back-single"){let B=o.charAt(d-1),g=o.charAt(d),R=h-v,k=this._group.test(g);k&&R===1?d+=1:!k&&this.isNumeralChar(B)&&(d+=-1*R+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(d,d)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let g=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(g,g)}else d=d+(v-h),this.input.nativeElement.setSelectionRange(d,d)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(de(pe))};static \u0275cmp=z({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(U(r,Ke,4),U(r,je,4),U(r,Qe,4),U(r,ie,4)),n&2){let o;A(o=F())&&(t.clearIconTemplate=o.first),A(o=F())&&(t.incrementButtonIconTemplate=o.first),A(o=F())&&(t.decrementButtonIconTemplate=o.first),A(o=F())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&fe(qe,5),n&2){let r;A(r=F())&&(t.input=r.first)}},hostVars:4,hostBindings:function(n,t){n&2&&(f("data-pc-name","inputnumber")("data-pc-section","root"),x(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",V],format:[2,"format","format",V],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",X],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",V],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",V],allowEmpty:[2,"allowEmpty","allowEmpty",V],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",V],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>X(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>X(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",V],autofocus:[2,"autofocus","autofocus",V]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[Z([wt,Re]),P,W],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,t){if(n&1){let r=T();I(0,"input",1,0),C("input",function(s){return c(r),p(t.onUserInput(s))})("keydown",function(s){return c(r),p(t.onInputKeyDown(s))})("keypress",function(s){return c(r),p(t.onInputKeyPress(s))})("paste",function(s){return c(r),p(t.onPaste(s))})("click",function(){return c(r),p(t.onInputClick())})("focus",function(s){return c(r),p(t.onInputFocus(s))})("blur",function(s){return c(r),p(t.onInputBlur(s))}),y(),b(2,Xe,3,2,"ng-container",2)(3,lt,7,17,"span",3)(4,_t,3,7,"button",4)(5,yt,3,7,"button",4)}n&2&&(x(t.cn(t.cx("pcInputText"),t.inputStyleClass)),l("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),f("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-pc-section","input"),m(2),l("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),m(),l("ngIf",t.showButtons&&t.buttonLayout==="stacked"),m(),l("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),m(),l("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[ne,Y,ee,te,Ce,Se,Be,ke,Ae,Me,j],encapsulation:2,changeDetection:0})}return i})(),mn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ue({type:i});static \u0275inj=se({imports:[Le,j,j]})}return i})();var Oe=class i{mockBarbers=[{id:"1",name:"Fernando",color:"#3b82f6"},{id:"2",name:"Alejandro",color:"#10b981"},{id:"3",name:"Rafael",color:"#f59e0b"}];mockServices=[{id:"s1",name:"Corte",durationMinutes:30,price:35},{id:"s2",name:"Barba",durationMinutes:20,price:25},{id:"s3",name:"Corte + Barba",durationMinutes:50,price:55},{id:"s4",name:"Hidrata\xE7\xE3o",durationMinutes:60,price:80},{id:"s5",name:"Pigmenta\xE7\xE3o",durationMinutes:45,price:70}];mockClients=[{id:"c1",name:"Carlos Oliveira",phone:"51 99999-0001"},{id:"c2",name:"Pedro Santos",phone:"51 99999-0002"},{id:"c3",name:"Lucas Ferreira",phone:"51 99999-0003"},{id:"c4",name:"Marcos Lima",phone:"51 99999-0004"},{id:"c5",name:"Andr\xE9 Costa",phone:"51 99999-0005"},{id:"c6",name:"Jo\xE3o Pereira",phone:"51 99999-0006"},{id:"c7",name:"Bruno Souza",phone:"51 99999-0007"},{id:"c8",name:"Rafael Alves",phone:"51 99999-0008"},{id:"c9",name:"Diego Martins",phone:"51 99999-0009"},{id:"c10",name:"Thiago Rocha",phone:"51 99999-0010"}];mockAppointments=[{id:"a1",barberId:"1",clientId:"c1",clientName:"Carlos Oliveira",serviceId:"s1",serviceName:"Corte",startTime:this.todayAt(9,0),durationMinutes:30,status:"completed"},{id:"a2",barberId:"1",clientId:"c2",clientName:"Pedro Santos",serviceId:"s3",serviceName:"Corte + Barba",startTime:this.todayAt(10,0),durationMinutes:50,status:"scheduled"},{id:"a3",barberId:"1",clientId:"c3",clientName:"Lucas Ferreira",serviceId:"s2",serviceName:"Barba",startTime:this.todayAt(14,0),durationMinutes:20,status:"scheduled"},{id:"a4",barberId:"2",clientId:"c4",clientName:"Marcos Lima",serviceId:"s1",serviceName:"Corte",startTime:this.todayAt(9,30),durationMinutes:30,status:"scheduled"},{id:"a5",barberId:"2",clientId:"c5",clientName:"Andr\xE9 Costa",serviceId:"s4",serviceName:"Hidrata\xE7\xE3o",startTime:this.todayAt(11,0),durationMinutes:60,status:"scheduled"},{id:"a6",barberId:"3",clientId:"c6",clientName:"Jo\xE3o Pereira",serviceId:"s5",serviceName:"Pigmenta\xE7\xE3o",startTime:this.todayAt(10,30),durationMinutes:45,status:"completed"},{id:"a7",barberId:"3",clientId:"c7",clientName:"Bruno Souza",serviceId:"s3",serviceName:"Corte + Barba",startTime:this.todayAt(13,0),durationMinutes:50,status:"scheduled"}];nextId=100;selectedDate=$(new Date);config=$({slotIntervalMinutes:15,startHour:8,endHour:20});loading=$(!1);appointments=$([]);barbers=$(this.mockBarbers);services=$(this.mockServices);constructor(){this.loadAppointments(this.selectedDate())}getBarbers(){return L(this.mockBarbers).pipe(O(200))}getServices(){return L(this.mockServices).pipe(O(200))}searchClients(a){let e=a.toLowerCase();return L(this.mockClients.filter(n=>n.name.toLowerCase().includes(e)||n.phone.includes(a))).pipe(O(150))}getAppointments(a){let e=new Date(a);e.setHours(0,0,0,0);let n=new Date(a);return n.setHours(23,59,59,999),L(this.mockAppointments.filter(t=>t.startTime>=e&&t.startTime<=n)).pipe(O(200))}createAppointment(a){let e={id:`a${++this.nextId}`,barberId:a.barberId,clientId:a.clientId,clientName:a.clientName,serviceId:a.serviceId,serviceName:a.serviceName,startTime:this.parseDateTime(a.date,a.startTimeStr),durationMinutes:a.durationMinutes,notes:a.notes||void 0,status:"scheduled"};return this.mockAppointments.push(e),L(e).pipe(O(300))}updateAppointment(a){let e=this.mockAppointments.findIndex(t=>t.id===a.id);if(e<0)throw new Error(`Appointment ${a.id} not found`);let n=q(G({},this.mockAppointments[e]),{barberId:a.barberId,clientId:a.clientId,clientName:a.clientName,serviceId:a.serviceId,serviceName:a.serviceName,startTime:this.parseDateTime(a.date,a.startTimeStr),durationMinutes:a.durationMinutes,notes:a.notes||void 0,status:a.status});return this.mockAppointments[e]=n,L(n).pipe(O(300))}deleteAppointment(a){let e=this.mockAppointments.findIndex(n=>n.id===a);return e>=0&&this.mockAppointments.splice(e,1),L(void 0).pipe(O(300))}setDate(a){this.selectedDate.set(a),this.loadAppointments(a)}loadAppointments(a){this.loading.set(!0),this.getAppointments(a).subscribe(e=>{this.appointments.set(e),this.loading.set(!1)})}updateConfig(a){this.config.set(G(G({},this.config()),a))}todayAt(a,e){let n=new Date;return n.setHours(a,e,0,0),n}parseDateTime(a,e){let[n,t]=e.split(":").map(Number),r=new Date(a);return r.setHours(n,t,0,0),r}static \u0275fac=function(e){return new(e||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})};var ze=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var Tt=["removeicon"],Dt=["*"];function Vt(i,a){if(i&1){let e=T();I(0,"img",4),C("error",function(t){c(e);let r=u();return p(r.imageError(t))}),y()}if(i&2){let e=u();x(e.cx("image")),l("src",e.image,me)("alt",e.alt)}}function Bt(i,a){if(i&1&&D(0,"span",6),i&2){let e=u(2);x(e.icon),l("ngClass",e.cx("icon")),f("data-pc-section","icon")}}function kt(i,a){if(i&1&&b(0,Bt,1,4,"span",5),i&2){let e=u();l("ngIf",e.icon)}}function Et(i,a){if(i&1&&(I(0,"div"),xe(1),y()),i&2){let e=u();x(e.cx("label")),f("data-pc-section","label"),m(),Ie(e.label)}}function St(i,a){if(i&1){let e=T();I(0,"span",10),C("click",function(t){c(e);let r=u(3);return p(r.close(t))})("keydown",function(t){c(e);let r=u(3);return p(r.onKeydown(t))}),y()}if(i&2){let e=u(3);x(e.removeIcon),l("ngClass",e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Nt(i,a){if(i&1){let e=T();w(),I(0,"svg",11),C("click",function(t){c(e);let r=u(3);return p(r.close(t))})("keydown",function(t){c(e);let r=u(3);return p(r.onKeydown(t))}),y()}if(i&2){let e=u(3);x(e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Mt(i,a){if(i&1&&(N(0),b(1,St,1,5,"span",8)(2,Nt,1,4,"svg",9),M()),i&2){let e=u(2);m(),l("ngIf",e.removeIcon),m(),l("ngIf",!e.removeIcon)}}function At(i,a){}function Ft(i,a){i&1&&b(0,At,0,0,"ng-template")}function Rt(i,a){if(i&1){let e=T();I(0,"span",12),C("click",function(t){c(e);let r=u(2);return p(r.close(t))})("keydown",function(t){c(e);let r=u(2);return p(r.onKeydown(t))}),b(1,Ft,1,0,null,13),y()}if(i&2){let e=u(2);x(e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),m(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Lt(i,a){if(i&1&&(N(0),b(1,Mt,3,2,"ng-container",3)(2,Rt,2,5,"span",7),M()),i&2){let e=u();m(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),m(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ot={root:()=>["p-chip p-component"],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Pe=(()=>{class i extends re{name="chip";theme=ze;classes=Ot;static \u0275fac=(()=>{let e;return function(t){return(e||(e=E(i)))(t||i)}})();static \u0275prov=K({token:i,factory:i.\u0275fac})}return i})();var zn=(()=>{class i extends Ve{label;icon;image;alt;styleClass;removable=!1;removeIcon;onRemove=new S;onImageError=new S;visible=!0;get removeAriaLabel(){return this.config.getTranslation(we.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,t])=>this[`_${n}`]!==t&&(this[`_${n}`]=t))}_chipProps;_componentStyle=H(Pe);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=E(i)))(t||i)}})();static \u0275cmp=z({type:i,selectors:[["p-chip"]],contentQueries:function(n,t,r){if(n&1&&(U(r,Tt,4),U(r,ie,4)),n&2){let o;A(o=F())&&(t.removeIconTemplate=o.first),A(o=F())&&(t.templates=o)}},hostVars:7,hostBindings:function(n,t){n&2&&(f("data-pc-name","chip")("aria-label",t.label)("data-pc-section","root"),x(t.cn(t.cx("root"),t.styleClass)),ge("display",!t.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",removable:[2,"removable","removable",V],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Z([Pe]),P,W],ngContentSelectors:Dt,decls:6,vars:4,consts:[["iconTemplate",""],[3,"class","src","alt","error",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["data-p-icon","times-circle","tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,t){if(n&1&&(he(),_e(0),b(1,Vt,1,4,"img",1)(2,kt,1,1,"ng-template",null,0,ye)(4,Et,2,4,"div",2)(5,Lt,3,2,"ng-container",3)),n&2){let r=be(3);m(),l("ngIf",t.image)("ngIfElse",r),m(3),l("ngIf",t.label),m(),l("ngIf",t.removable)}},dependencies:[ne,Y,ee,te,Ee,j],encapsulation:2,changeDetection:0})}return i})();export{zn as a,Le as b,mn as c,Oe as d};
