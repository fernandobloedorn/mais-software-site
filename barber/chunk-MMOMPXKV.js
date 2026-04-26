import{a as Ee}from"./chunk-Z26UBRCR.js";import{a as Be}from"./chunk-Q3ZJEJE3.js";import{a as Ve}from"./chunk-OBNBZ42B.js";import{a as Ce,d as we,o as De}from"./chunk-LJ55XIKX.js";import{b as ve,g as Te,k as ee}from"./chunk-6DJVCRYB.js";import{$ as p,Aa as m,Bc as J,Cb as he,Db as _e,Fa as S,Gb as x,Hb as fe,Ib as ge,Jd as X,Kd as O,La as ce,Ld as Ie,Ob as Q,P as se,Q as $,Qa as A,Qd as Y,R as te,Ra as ne,Ta as U,Ua as g,V as G,Xb as be,_ as c,_a as f,a as oe,aa as v,b as ae,ba as ue,fb as u,gb as y,hb as I,hd as ye,ib as V,ka as K,kc as E,la as k,lb as j,lc as q,mb as N,nb as M,pb as T,rb as C,sb as s,tb as pe,ub as me,vb as z,vc as H,wb as de,xb as F,xc as W,ya as le,yb as R,yc as xe,zc as Z}from"./chunk-5H6OL2TO.js";var Ae=["data-p-icon","angle-down"],ke=(()=>{class i extends ee{static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=A({type:i,selectors:[["","data-p-icon","angle-down"]],features:[U],attrs:Ae,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,t){n&1&&(v(),j(0,"path",0))},encapsulation:2})}return i})();var Ue=["data-p-icon","angle-up"],Se=(()=>{class i extends ee{static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=A({type:i,selectors:[["","data-p-icon","angle-up"]],features:[U],attrs:Ue,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(v(),j(0,"path",0))},encapsulation:2})}return i})();var Ne=`
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
`;var Oe=["clearicon"],Pe=["incrementbuttonicon"],$e=["decrementbuttonicon"],Ge=["input"];function Ke(i,l){if(i&1){let e=T();v(),y(0,"svg",7),C("click",function(){c(e);let t=s(2);return p(t.clear())}),I()}if(i&2){let e=s(2);x(e.cx("clearIcon")),f("data-pc-section","clearIcon")}}function je(i,l){}function Qe(i,l){i&1&&g(0,je,0,0,"ng-template")}function qe(i,l){if(i&1){let e=T();y(0,"span",8),C("click",function(){c(e);let t=s(2);return p(t.clear())}),g(1,Qe,1,0,null,9),I()}if(i&2){let e=s(2);x(e.cx("clearIcon")),f("data-pc-section","clearIcon"),m(),u("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function He(i,l){if(i&1&&(N(0),g(1,Ke,1,3,"svg",5)(2,qe,2,4,"span",6),M()),i&2){let e=s();m(),u("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),m(),u("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function We(i,l){if(i&1&&V(0,"span",12),i&2){let e=s(2);u("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function Ze(i,l){i&1&&(v(),V(0,"svg",14)),i&2&&f("data-pc-section","incrementbuttonicon")}function Je(i,l){}function Xe(i,l){i&1&&g(0,Je,0,0,"ng-template")}function Ye(i,l){if(i&1&&(N(0),g(1,Ze,1,1,"svg",13)(2,Xe,1,0,null,9),M()),i&2){let e=s(2);m(),u("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function et(i,l){if(i&1&&V(0,"span",12),i&2){let e=s(2);u("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function tt(i,l){i&1&&(v(),V(0,"svg",16)),i&2&&f("data-pc-section","decrementbuttonicon")}function nt(i,l){}function it(i,l){i&1&&g(0,nt,0,0,"ng-template")}function rt(i,l){if(i&1&&(N(0),g(1,tt,1,1,"svg",15)(2,it,1,0,null,9),M()),i&2){let e=s(2);m(),u("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function ot(i,l){if(i&1){let e=T();y(0,"span")(1,"button",10),C("mousedown",function(t){c(e);let r=s();return p(r.onUpButtonMouseDown(t))})("mouseup",function(){c(e);let t=s();return p(t.onUpButtonMouseUp())})("mouseleave",function(){c(e);let t=s();return p(t.onUpButtonMouseLeave())})("keydown",function(t){c(e);let r=s();return p(r.onUpButtonKeyDown(t))})("keyup",function(){c(e);let t=s();return p(t.onUpButtonKeyUp())}),g(2,We,1,2,"span",11)(3,Ye,3,2,"ng-container",2),I(),y(4,"button",10),C("mousedown",function(t){c(e);let r=s();return p(r.onDownButtonMouseDown(t))})("mouseup",function(){c(e);let t=s();return p(t.onDownButtonMouseUp())})("mouseleave",function(){c(e);let t=s();return p(t.onDownButtonMouseLeave())})("keydown",function(t){c(e);let r=s();return p(r.onDownButtonKeyDown(t))})("keyup",function(){c(e);let t=s();return p(t.onDownButtonKeyUp())}),g(5,et,1,2,"span",11)(6,rt,3,2,"ng-container",2),I()()}if(i&2){let e=s();x(e.cx("buttonGroup")),f("data-pc-section","buttonGroup"),m(),x(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),m(),u("ngIf",e.incrementButtonIcon),m(),u("ngIf",!e.incrementButtonIcon),m(),x(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),m(),u("ngIf",e.decrementButtonIcon),m(),u("ngIf",!e.decrementButtonIcon)}}function at(i,l){if(i&1&&V(0,"span",12),i&2){let e=s(2);u("ngClass",e.incrementButtonIcon),f("data-pc-section","incrementbuttonicon")}}function st(i,l){i&1&&(v(),V(0,"svg",14)),i&2&&f("data-pc-section","incrementbuttonicon")}function ut(i,l){}function lt(i,l){i&1&&g(0,ut,0,0,"ng-template")}function ct(i,l){if(i&1&&(N(0),g(1,st,1,1,"svg",13)(2,lt,1,0,null,9),M()),i&2){let e=s(2);m(),u("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function pt(i,l){if(i&1){let e=T();y(0,"button",10),C("mousedown",function(t){c(e);let r=s();return p(r.onUpButtonMouseDown(t))})("mouseup",function(){c(e);let t=s();return p(t.onUpButtonMouseUp())})("mouseleave",function(){c(e);let t=s();return p(t.onUpButtonMouseLeave())})("keydown",function(t){c(e);let r=s();return p(r.onUpButtonKeyDown(t))})("keyup",function(){c(e);let t=s();return p(t.onUpButtonKeyUp())}),g(1,at,1,2,"span",11)(2,ct,3,2,"ng-container",2),I()}if(i&2){let e=s();x(e.cx("incrementButton")),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),m(),u("ngIf",e.incrementButtonIcon),m(),u("ngIf",!e.incrementButtonIcon)}}function mt(i,l){if(i&1&&V(0,"span",12),i&2){let e=s(2);u("ngClass",e.decrementButtonIcon),f("data-pc-section","decrementbuttonicon")}}function dt(i,l){i&1&&(v(),V(0,"svg",16)),i&2&&f("data-pc-section","decrementbuttonicon")}function ht(i,l){}function _t(i,l){i&1&&g(0,ht,0,0,"ng-template")}function ft(i,l){if(i&1&&(N(0),g(1,dt,1,1,"svg",15)(2,_t,1,0,null,9),M()),i&2){let e=s(2);m(),u("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function gt(i,l){if(i&1){let e=T();y(0,"button",10),C("mousedown",function(t){c(e);let r=s();return p(r.onDownButtonMouseDown(t))})("mouseup",function(){c(e);let t=s();return p(t.onDownButtonMouseUp())})("mouseleave",function(){c(e);let t=s();return p(t.onDownButtonMouseLeave())})("keydown",function(t){c(e);let r=s();return p(r.onDownButtonKeyDown(t))})("keyup",function(){c(e);let t=s();return p(t.onDownButtonKeyUp())}),g(1,mt,1,2,"span",11)(2,ft,3,2,"ng-container",2),I()}if(i&2){let e=s();x(e.cx("decrementButton")),f("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),m(),u("ngIf",e.decrementButtonIcon),m(),u("ngIf",!e.decrementButtonIcon)}}var bt=`
    ${Ne}

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
`,xt={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Me=(()=>{class i extends Y{name="inputnumber";theme=bt;classes=xt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac})}return i})();var yt={provide:Ce,useExisting:se(()=>Fe),multi:!0},Fe=(()=>{class i extends Be{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new S;onFocus=new S;onBlur=new S;onKeyDown=new S;onClear=new S;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=G(Me);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(we,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((t,r)=>[t,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=t=>n.get(t)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ae(oe({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),t=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let a=+o;return isNaN(a)?null:a}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t);this.maxlength()&&this.maxlength()<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let a=n;a<=r.length;a++){let h=a===0?0:a-1;if(this.isNumeralChar(r.charAt(h))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case"ArrowRight":for(let a=t;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:h,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let d=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(h>0&&n>h){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";o=r.slice(0,n-1)+w+r.slice(n)}else _===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&a.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:h,decimalCharIndexWithoutPrefix:_}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let d=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(h>0&&n>h){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";o=r.slice(0,n)+w+r.slice(n+1)}else _===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:a,selectionStart:h,selectionEnd:_}=this.input.nativeElement,d=this.parseValue(a+t),w=d!=null?d.toString():"",D=a.substring(h,_),b=this.parseValue(D),L=b!=null?b.toString():"";if(h!==_&&L.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}this.maxlength()&&w.length>this.maxlength()||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){return this.min()==null||this.min()<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,h=this.input?.nativeElement.value.trim(),{decimalCharIndex:_,minusCharIndex:d,suffixCharIndex:w,currencyCharIndex:D}=this.getCharIndexes(h),b;if(t.isMinusSign)o===0&&(b=h,(d===-1||a!==0)&&(b=this.insertText(h,n,0,a)),this.updateValue(e,b,n,"insert"));else if(t.isDecimalSign)_>0&&o===_?this.updateValue(e,h,n,"insert"):_>o&&_<a?(b=this.insertText(h,n,o,a),this.updateValue(e,b,n,"insert")):_===-1&&this.maxFractionDigits&&(b=this.insertText(h,n,o,a),this.updateValue(e,b,n,"insert"));else{let L=this.numberFormat.resolvedOptions().maximumFractionDigits,B=o!==a?"range-insert":"insert";if(_>0&&o>_){if(o+n.length-(_+1)<=L){let P=D>=o?D-1:w>=o?w:h.length;b=h.slice(0,o)+n+h.slice(o+n.length,P)+h.slice(P),this.updateValue(e,b,n,B)}}else b=this.insertText(h,n,o,a),this.updateValue(e,b,n,B)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,a=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let h=t.charAt(e);if(this.isNumeralChar(h))return e+a;let _=e-1;for(;_>=0;)if(h=t.charAt(_),this.isNumeralChar(h)){o=_+a;break}else _--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(_=e;_<r;)if(h=t.charAt(_),this.isNumeralChar(h)){o=_+a;break}else _++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==ye()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,t,r,n),this.handleOnInput(e,o,a))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){return e==="-"||e==null?null:this.min()!=null&&e<this.min()?this.min():this.max()!=null&&e>this.max()?this.max():e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,a=this.formatValue(e),h=o.length;if(a!==r&&(a=this.concatValues(a,r)),h===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let d=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(d,d)}else{let _=this.input.nativeElement.selectionStart,d=this.input.nativeElement.selectionEnd;if(this.maxlength()&&a.length>this.maxlength()&&(a=a.slice(0,this.maxlength()),_=Math.min(_,this.maxlength()),d=Math.min(d,this.maxlength())),this.maxlength()&&this.maxlength()<a.length)return;this.input.nativeElement.value=a;let w=a.length;if(t==="range-insert"){let D=this.parseValue((o||"").slice(0,_)),L=(D!==null?D.toString():"").split("").join(`(${this.groupChar})?`),B=new RegExp(L,"g");B.test(a);let P=n.split("").join(`(${this.groupChar})?`),re=new RegExp(P,"g");re.test(a.slice(B.lastIndex)),d=B.lastIndex+re.lastIndex,this.input.nativeElement.setSelectionRange(d,d)}else if(w===h)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(d+1,d+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(d-1,d-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(d,d);else if(t==="delete-back-single"){let D=o.charAt(d-1),b=o.charAt(d),L=h-w,B=this._group.test(b);B&&L===1?d+=1:!B&&this.isNumeralChar(D)&&(d+=-1*L+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(d,d)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let b=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(b,b)}else d=d+(w-h),this.input.nativeElement.setSelectionRange(d,d)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(ce(ue))};static \u0275cmp=A({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(z(r,Oe,4),z(r,Pe,4),z(r,$e,4),z(r,X,4)),n&2){let o;F(o=R())&&(t.clearIconTemplate=o.first),F(o=R())&&(t.incrementButtonIconTemplate=o.first),F(o=R())&&(t.decrementButtonIconTemplate=o.first),F(o=R())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&de(Ge,5),n&2){let r;F(r=R())&&(t.input=r.first)}},hostVars:4,hostBindings:function(n,t){n&2&&(f("data-pc-name","inputnumber")("data-pc-section","root"),x(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",E],format:[2,"format","format",E],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",q],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",E],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",E],allowEmpty:[2,"allowEmpty","allowEmpty",E],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",E],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>q(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>q(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",E],autofocus:[2,"autofocus","autofocus",E]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[Q([yt,Me]),U,K],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,t){if(n&1){let r=T();y(0,"input",1,0),C("input",function(a){return c(r),p(t.onUserInput(a))})("keydown",function(a){return c(r),p(t.onInputKeyDown(a))})("keypress",function(a){return c(r),p(t.onInputKeyPress(a))})("paste",function(a){return c(r),p(t.onPaste(a))})("click",function(){return c(r),p(t.onInputClick())})("focus",function(a){return c(r),p(t.onInputFocus(a))})("blur",function(a){return c(r),p(t.onInputBlur(a))}),I(),g(2,He,3,2,"ng-container",2)(3,ot,7,17,"span",3)(4,pt,3,7,"button",4)(5,gt,3,7,"button",4)}n&2&&(x(t.cn(t.cx("pcInputText"),t.inputStyleClass)),u("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),f("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-pc-section","input"),m(2),u("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),m(),u("ngIf",t.showButtons&&t.buttonLayout==="stacked"),m(),u("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),m(),u("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[J,H,W,Z,xe,De,Te,Ve,Se,ke,O],encapsulation:2,changeDetection:0})}return i})(),un=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ne({type:i});static \u0275inj=te({imports:[Fe,O,O]})}return i})();var Re=`
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
`;var It=["removeicon"],Ct=["*"];function wt(i,l){if(i&1){let e=T();y(0,"img",4),C("error",function(t){c(e);let r=s();return p(r.imageError(t))}),I()}if(i&2){let e=s();x(e.cx("image")),u("src",e.image,le)("alt",e.alt)}}function vt(i,l){if(i&1&&V(0,"span",6),i&2){let e=s(2);x(e.icon),u("ngClass",e.cx("icon")),f("data-pc-section","icon")}}function Tt(i,l){if(i&1&&g(0,vt,1,4,"span",5),i&2){let e=s();u("ngIf",e.icon)}}function Vt(i,l){if(i&1&&(y(0,"div"),fe(1),I()),i&2){let e=s();x(e.cx("label")),f("data-pc-section","label"),m(),ge(e.label)}}function Et(i,l){if(i&1){let e=T();y(0,"span",10),C("click",function(t){c(e);let r=s(3);return p(r.close(t))})("keydown",function(t){c(e);let r=s(3);return p(r.onKeydown(t))}),I()}if(i&2){let e=s(3);x(e.removeIcon),u("ngClass",e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Dt(i,l){if(i&1){let e=T();v(),y(0,"svg",11),C("click",function(t){c(e);let r=s(3);return p(r.close(t))})("keydown",function(t){c(e);let r=s(3);return p(r.onKeydown(t))}),I()}if(i&2){let e=s(3);x(e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Bt(i,l){if(i&1&&(N(0),g(1,Et,1,5,"span",8)(2,Dt,1,4,"svg",9),M()),i&2){let e=s(2);m(),u("ngIf",e.removeIcon),m(),u("ngIf",!e.removeIcon)}}function kt(i,l){}function St(i,l){i&1&&g(0,kt,0,0,"ng-template")}function Nt(i,l){if(i&1){let e=T();y(0,"span",12),C("click",function(t){c(e);let r=s(2);return p(r.close(t))})("keydown",function(t){c(e);let r=s(2);return p(r.onKeydown(t))}),g(1,St,1,0,null,13),I()}if(i&2){let e=s(2);x(e.cx("removeIcon")),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),m(),u("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Mt(i,l){if(i&1&&(N(0),g(1,Bt,3,2,"ng-container",3)(2,Nt,2,5,"span",7),M()),i&2){let e=s();m(),u("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),m(),u("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ft={root:()=>["p-chip p-component"],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Le=(()=>{class i extends Y{name="chip";theme=Re;classes=Ft;static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac})}return i})();var Dn=(()=>{class i extends ve{label;icon;image;alt;styleClass;removable=!1;removeIcon;onRemove=new S;onImageError=new S;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Ie.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,t])=>this[`_${n}`]!==t&&(this[`_${n}`]=t))}_chipProps;_componentStyle=G(Le);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=A({type:i,selectors:[["p-chip"]],contentQueries:function(n,t,r){if(n&1&&(z(r,It,4),z(r,X,4)),n&2){let o;F(o=R())&&(t.removeIconTemplate=o.first),F(o=R())&&(t.templates=o)}},hostVars:7,hostBindings:function(n,t){n&2&&(f("data-pc-name","chip")("aria-label",t.label)("data-pc-section","root"),x(t.cn(t.cx("root"),t.styleClass)),_e("display",!t.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",removable:[2,"removable","removable",E],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Q([Le]),U,K],ngContentSelectors:Ct,decls:6,vars:4,consts:[["iconTemplate",""],[3,"class","src","alt","error",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["data-p-icon","times-circle","tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,t){if(n&1&&(pe(),me(0),g(1,wt,1,4,"img",1)(2,Tt,1,1,"ng-template",null,0,be)(4,Vt,2,4,"div",2)(5,Mt,3,2,"ng-container",3)),n&2){let r=he(3);m(),u("ngIf",t.image)("ngIfElse",r),m(3),u("ngIf",t.label),m(),u("ngIf",t.removable)}},dependencies:[J,H,W,Z,Ee,O],encapsulation:2,changeDetection:0})}return i})();export{Dn as a,Fe as b,un as c};
