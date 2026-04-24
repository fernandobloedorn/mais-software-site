import{a as Tt,b as Mt,c as Vt,d as Dt}from"./chunk-WOVKVS2X.js";import{a as vt,b as xt}from"./chunk-G4JGVX4Q.js";import{a as yt,b as Ct}from"./chunk-QZJZHKUK.js";import{a as st,e as wt,f as St,g as It,h as Ot}from"./chunk-LW4TNOVT.js";import{b as dt,c as Et,d as At}from"./chunk-3ILZWEUZ.js";import{a as bt}from"./chunk-QKGWYPLA.js";import"./chunk-YMHV24SO.js";import"./chunk-MJAK7TEE.js";import{a as ct}from"./chunk-GYCEITP3.js";import"./chunk-4O3FVBGX.js";import{b as kt}from"./chunk-T53VRRF7.js";import{a as Xe,b as et,d as tt,e as nt,g as it,l as ot,n as ht,o as _t,p as ft}from"./chunk-UVCIZBQN.js";import{a as Ue,g as lt,j as rt,l as pt,m as ut,n as mt,p as gt}from"./chunk-75ZN5KSJ.js";import{$ as m,$a as B,Aa as s,Ab as Ee,Ac as qe,Bb as be,Cb as L,Cd as Ze,Db as se,Eb as U,Ec as Ge,Ed as We,Fa as I,Fb as f,Fd as Ye,Ga as Te,Gb as _,Ha as Me,Hb as k,Ib as R,Id as ue,Jb as Ae,Jd as Ce,Kb as De,Kd as Je,La as fe,Lb as Fe,Mb as Le,Nb as pe,Ob as Z,P as Ie,Pb as P,Pd as me,Q as ie,Qa as ae,Qb as ce,Qd as at,R as oe,Ra as le,Rb as ve,Sa as Ve,Ta as re,Ua as h,Ub as Pe,V as T,Vb as ze,Wb as W,Zc as de,_ as u,_a as w,_b as S,_c as z,a as q,aa as J,ab as N,b as ne,bc as Y,cb as G,cc as Be,db as j,eb as c,fb as p,gb as d,ha as M,hb as V,jc as b,kc as K,la as X,lb as D,mb as F,nb as A,ob as v,qb as g,qd as je,ra as Oe,rb as r,sd as ee,td as Q,ub as O,uc as Ne,ud as xe,vb as H,vc as He,wb as x,wc as $e,wd as ye,xb as y,xc as Re,yc as Ke,zb as ke,zc as Qe}from"./chunk-HII2X2KQ.js";var Ft=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Gt=`
    ${Ft}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,jt={root:({instance:n})=>["p-textarea p-component",{"p-filled":n.$filled(),"p-textarea-resizable ":n.autoResize,"p-variant-filled":n.$variant()==="filled","p-textarea-fluid":n.hasFluid,"p-inputfield-sm p-textarea-sm":n.pSize==="small","p-textarea-lg p-inputfield-lg":n.pSize==="large","p-invalid":n.invalid()}]},Lt=(()=>{class n extends me{name="textarea";theme=Gt;classes=jt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=X(n)))(i||n)}})();static \u0275prov=ie({token:n,factory:n.\u0275fac})}return n})();var zt=(()=>{class n extends ht{autoResize;pSize;variant=Y();fluid=Y(void 0,{transform:b});invalid=Y(void 0,{transform:b});$variant=S(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new I;ngModelSubscription;ngControlSubscription;_componentStyle=T(Lt);ngControl=T(tt,{optional:!0,self:!0});pcFluid=T(rt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}ngOnInit(){super.ngOnInit(),this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.writeModelValue(e.target.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=X(n)))(i||n)}})();static \u0275dir=Ve({type:n,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(t,i){t&1&&g("input",function(l){return i.onInput(l)}),t&2&&f(i.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",b],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[pe([Lt]),re]})}return n})(),Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=oe({})}return n})();var Nt=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var Wt=["item"],Yt=["empty"],Jt=["header"],Xt=["footer"],en=["selecteditem"],tn=["group"],nn=["loader"],on=["removeicon"],an=["loadingicon"],ln=["clearicon"],rn=["dropdownicon"],sn=["focusInput"],pn=["multiIn"],cn=["multiContainer"],dn=["ddBtn"],un=["items"],mn=["scroller"],gn=["overlay"],hn=n=>({i:n}),$t=n=>({$implicit:n}),_n=(n,o,e)=>({removeCallback:n,index:o,class:e}),ge=n=>({height:n}),Rt=(n,o)=>({$implicit:n,options:o}),fn=n=>({options:n}),bn=()=>({}),vn=(n,o,e)=>({option:n,i:o,scrollerOptions:e}),xn=(n,o)=>({$implicit:n,index:o});function yn(n,o){if(n&1){let e=v();p(0,"input",17,2),g("input",function(i){u(e);let a=r();return m(a.onInput(i))})("keydown",function(i){u(e);let a=r();return m(a.onKeyDown(i))})("change",function(i){u(e);let a=r();return m(a.onInputChange(i))})("focus",function(i){u(e);let a=r();return m(a.onInputFocus(i))})("blur",function(i){u(e);let a=r();return m(a.onInputBlur(i))})("paste",function(i){u(e);let a=r();return m(a.onInputPaste(i))})("keyup",function(i){u(e);let a=r();return m(a.onInputKeyUp(i))}),d()}if(n&2){let e=r();f(e.cn(e.cx("pcInputText"),e.inputStyleClass)),c("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),w("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Cn(n,o){if(n&1){let e=v();J(),p(0,"svg",20),g("click",function(){u(e);let i=r(2);return m(i.clear())}),d()}if(n&2){let e=r(2);f(e.cx("clearIcon")),w("aria-hidden",!0)}}function wn(n,o){}function Sn(n,o){n&1&&h(0,wn,0,0,"ng-template")}function In(n,o){if(n&1){let e=v();p(0,"span",21),g("click",function(){u(e);let i=r(2);return m(i.clear())}),h(1,Sn,1,0,null,22),d()}if(n&2){let e=r(2);f(e.cx("clearIcon")),w("aria-hidden",!0),s(),c("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function On(n,o){if(n&1&&(D(0),h(1,Cn,1,3,"svg",18)(2,In,2,4,"span",19),F()),n&2){let e=r();s(),c("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),c("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Tn(n,o){n&1&&A(0)}function Mn(n,o){if(n&1){let e=v();p(0,"span",21),g("click",function(i){u(e);let a=r(2).index,l=r(2);return m(l.readonly?"":l.removeOption(i,a))}),J(),V(1,"svg",29),d()}if(n&2){let e=r(4);f(e.cx("chipIcon")),s(),f(e.cx("chipIcon")),w("aria-hidden",!0)}}function Vn(n,o){}function kn(n,o){n&1&&h(0,Vn,0,0,"ng-template")}function En(n,o){if(n&1&&(p(0,"span"),h(1,kn,1,0,null,28),d()),n&2){let e=r(2).index,t=r(2);w("aria-hidden",!0),s(),c("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)("ngTemplateOutletContext",ve(3,_n,t.removeOption.bind(t),e,t.cx("chipIcon")))}}function An(n,o){if(n&1&&h(0,Mn,2,5,"span",19)(1,En,2,7,"span",13),n&2){let e=r(3);c("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),c("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Dn(n,o){if(n&1){let e=v();p(0,"li",25,4)(2,"p-chip",27),g("onRemove",function(i){let a=u(e).index,l=r(2);return m(l.readonly?"":l.removeOption(i,a))}),h(3,Tn,1,0,"ng-container",28)(4,An,2,2,"ng-template",null,5,W),d()()}if(n&2){let e=o.$implicit,t=o.index,i=r(2);f(i.cx("chipItem",P(13,hn,t))),w("id",i.id+"_multiple_option_"+t)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",t+1)("aria-selected",!0),s(2),f(i.cx("pcChip")),c("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("removable",!0),s(),c("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",P(15,$t,e))}}function Fn(n,o){if(n&1){let e=v();p(0,"ul",23,3),g("focus",function(i){u(e);let a=r();return m(a.onMultipleContainerFocus(i))})("blur",function(i){u(e);let a=r();return m(a.onMultipleContainerBlur(i))})("keydown",function(i){u(e);let a=r();return m(a.onMultipleContainerKeyDown(i))}),h(2,Dn,6,17,"li",24),p(3,"li",25)(4,"input",26,2),g("input",function(i){u(e);let a=r();return m(a.onInput(i))})("keydown",function(i){u(e);let a=r();return m(a.onKeyDown(i))})("change",function(i){u(e);let a=r();return m(a.onInputChange(i))})("focus",function(i){u(e);let a=r();return m(a.onInputFocus(i))})("blur",function(i){u(e);let a=r();return m(a.onInputBlur(i))})("paste",function(i){u(e);let a=r();return m(a.onInputPaste(i))})("keyup",function(i){u(e);let a=r();return m(a.onInputKeyUp(i))}),d()()()}if(n&2){let e=r();f(e.cx("inputMultiple")),c("tabindex",-1),w("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),c("ngForOf",e.modelValue()),s(),f(e.cx("inputChip")),s(),f(e.cx("pcInputText")),c("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle),w("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Ln(n,o){if(n&1&&(J(),V(0,"svg",32)),n&2){let e=r(2);f(e.cx("loader")),c("spin",!0),w("aria-hidden",!0)}}function Pn(n,o){}function zn(n,o){n&1&&h(0,Pn,0,0,"ng-template")}function Bn(n,o){if(n&1&&(p(0,"span"),h(1,zn,1,0,null,22),d()),n&2){let e=r(2);f(e.cx("loader")),w("aria-hidden",!0),s(),c("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Nn(n,o){if(n&1&&(D(0),h(1,Ln,1,4,"svg",30)(2,Bn,2,4,"span",31),F()),n&2){let e=r();s(),c("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),c("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Hn(n,o){if(n&1&&V(0,"span",35),n&2){let e=r(2);c("ngClass",e.dropdownIcon),w("aria-hidden",!0)}}function $n(n,o){n&1&&(J(),V(0,"svg",37))}function Rn(n,o){}function Kn(n,o){n&1&&h(0,Rn,0,0,"ng-template")}function Qn(n,o){if(n&1&&(D(0),h(1,$n,1,0,"svg",36)(2,Kn,1,0,null,22),F()),n&2){let e=r(2);s(),c("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),c("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function qn(n,o){if(n&1){let e=v();p(0,"button",33,6),g("click",function(i){u(e);let a=r();return m(a.handleDropdownClick(i))}),h(2,Hn,1,2,"span",34)(3,Qn,3,2,"ng-container",13),d()}if(n&2){let e=r();f(e.cx("dropdown")),c("disabled",e.$disabled()),w("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),c("ngIf",e.dropdownIcon),s(),c("ngIf",!e.dropdownIcon)}}function Gn(n,o){n&1&&A(0)}function jn(n,o){n&1&&A(0)}function Un(n,o){if(n&1&&h(0,jn,1,0,"ng-container",28),n&2){let e=o.$implicit,t=o.options;r(2);let i=be(6);c("ngTemplateOutlet",i)("ngTemplateOutletContext",ce(2,Rt,e,t))}}function Zn(n,o){n&1&&A(0)}function Wn(n,o){if(n&1&&h(0,Zn,1,0,"ng-container",28),n&2){let e=o.options,t=r(4);c("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",P(2,fn,e))}}function Yn(n,o){n&1&&(D(0),h(1,Wn,1,4,"ng-template",null,9,W),F())}function Jn(n,o){if(n&1){let e=v();p(0,"p-scroller",41,8),g("onLazyLoad",function(i){u(e);let a=r(2);return m(a.onLazyLoad.emit(i))}),h(2,Un,1,5,"ng-template",null,1,W)(4,Yn,3,0,"ng-container",13),d()}if(n&2){let e=r(2);U(P(8,ge,e.scrollHeight)),c("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),c("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Xn(n,o){n&1&&A(0)}function ei(n,o){if(n&1&&(D(0),h(1,Xn,1,0,"ng-container",28),F()),n&2){r();let e=be(6),t=r();s(),c("ngTemplateOutlet",e)("ngTemplateOutletContext",ce(3,Rt,t.visibleOptions(),Z(2,bn)))}}function ti(n,o){if(n&1&&(p(0,"span"),_(1),d()),n&2){let e=r(2).$implicit,t=r(3);s(),k(t.getOptionGroupLabel(e.optionGroup))}}function ni(n,o){n&1&&A(0)}function ii(n,o){if(n&1&&(D(0),p(1,"li",45),h(2,ti,2,1,"span",13)(3,ni,1,0,"ng-container",28),d(),F()),n&2){let e=r(),t=e.$implicit,i=e.index,a=r().options,l=r(2);s(),f(l.cx("optionGroup")),c("ngStyle",P(7,ge,a.itemSize+"px")),w("id",l.id+"_"+l.getOptionIndex(i,a)),s(),c("ngIf",!l.groupTemplate),s(),c("ngTemplateOutlet",l.groupTemplate)("ngTemplateOutletContext",P(9,$t,t.optionGroup))}}function oi(n,o){if(n&1&&(p(0,"span"),_(1),d()),n&2){let e=r(2).$implicit,t=r(3);s(),k(t.getOptionLabel(e))}}function ai(n,o){n&1&&A(0)}function li(n,o){if(n&1){let e=v();D(0),p(1,"li",46),g("click",function(i){u(e);let a=r().$implicit,l=r(3);return m(l.onOptionSelect(i,a))})("mouseenter",function(i){u(e);let a=r().index,l=r().options,C=r(2);return m(C.onOptionMouseEnter(i,C.getOptionIndex(a,l)))}),h(2,oi,2,1,"span",13)(3,ai,1,0,"ng-container",28),d(),F()}if(n&2){let e=r(),t=e.$implicit,i=e.index,a=r().options,l=r(2);s(),f(l.cx("option",ve(13,vn,t,i,a))),c("ngStyle",P(17,ge,a.itemSize+"px")),w("id",l.id+"_"+l.getOptionIndex(i,a))("aria-label",l.getOptionLabel(t))("aria-selected",l.isSelected(t))("aria-disabled",l.isOptionDisabled(t))("data-p-focused",l.focusedOptionIndex()===l.getOptionIndex(i,a))("aria-setsize",l.ariaSetSize)("aria-posinset",l.getAriaPosInset(l.getOptionIndex(i,a))),s(),c("ngIf",!l.itemTemplate&&!l._itemTemplate),s(),c("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",ce(19,xn,t,a.getOptions?a.getOptions(i):i))}}function ri(n,o){if(n&1&&h(0,ii,4,11,"ng-container",13)(1,li,4,22,"ng-container",13),n&2){let e=o.$implicit,t=r(3);c("ngIf",t.isOptionGroup(e)),s(),c("ngIf",!t.isOptionGroup(e))}}function si(n,o){if(n&1&&(D(0),_(1),F()),n&2){let e=r(4);s(),R(" ",e.searchResultMessageText," ")}}function pi(n,o){n&1&&A(0,null,11)}function ci(n,o){if(n&1&&(p(0,"li",45),h(1,si,2,1,"ng-container",47)(2,pi,2,0,"ng-container",22),d()),n&2){let e=r().options,t=r(2);f(t.cx("emptyMessage")),c("ngStyle",P(6,ge,e.itemSize+"px")),s(),c("ngIf",!t.emptyTemplate&&!t._emptyTemplate)("ngIfElse",t.empty),s(),c("ngTemplateOutlet",t.emptyTemplate||t._emptyTemplate)}}function di(n,o){if(n&1&&(p(0,"ul",42,10),h(2,ri,2,2,"ng-template",43)(3,ci,3,8,"li",44),d()),n&2){let e=o.$implicit,t=o.options,i=r(2);U(t.contentStyle),f(i.cn(i.cx("list"),t.contentStyleClass)),w("id",i.id+"_list")("aria-label",i.listLabel),s(2),c("ngForOf",e),s(),c("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function ui(n,o){n&1&&A(0)}function mi(n,o){if(n&1&&(p(0,"div",38),h(1,Gn,1,0,"ng-container",22),p(2,"div"),h(3,Jn,5,10,"p-scroller",39)(4,ei,2,6,"ng-container",13),d(),h(5,di,4,8,"ng-template",null,7,W)(7,ui,1,0,"ng-container",22),d(),p(8,"span",40),_(9),d()),n&2){let e=r();f(e.cn(e.cx("overlay"),e.panelStyleClass)),c("ngStyle",e.panelStyle),s(),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),f(e.cx("listContainer")),L("max-height",e.virtualScroll?"auto":e.scrollHeight),s(),c("ngIf",e.virtualScroll),s(),c("ngIf",!e.virtualScroll),s(3),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),R(" ",e.selectedMessageText," ")}}var gi=`
    ${Nt}

    /* For PrimeNG */
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }
`,hi={root:{position:"relative"}},_i={root:({instance:n})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":n.invalid(),"p-focus":n.focused,"p-inputwrapper-filled":n.$filled(),"p-inputwrapper-focus":n.focused&&!n.$disabled()||n.autofocus||n.overlayVisible,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-clearable":n.showClear&&!n.$disabled(),"p-autocomplete-fluid":n.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:n})=>["p-autocomplete-input-multiple",{"p-disabled":n.$disabled(),"p-variant-filled":n.$variant()==="filled"}],chipItem:({instance:n,i:o})=>["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex()===o}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:n})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":n.$variant()==="filled","p-ripple-disabled":n.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:n,option:o,i:e,scrollerOptions:t})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex()===n.getOptionIndex(e,t),"p-disabled":n.isOptionDisabled(o)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},Ht=(()=>{class n extends me{name="autocomplete";theme=gi;classes=_i;inlineStyles=hi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=X(n)))(i||n)}})();static \u0275prov=ie({token:n,factory:n.\u0275fac})}return n})();var fi={provide:Xe,useExisting:Ie(()=>he),multi:!0},he=(()=>{class n extends bt{overlayService;zone;minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;appendTo=Y(void 0);completeMethod=new I;onSelect=new I;onUnselect=new I;onFocus=new I;onBlur=new I;onDropdownClick=new I;onClear=new I;onKeyUp=new I;onShow=new I;onHide=new I;onLazyLoad=new I;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}primeng=T(at);value;_suggestions=M(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=M(-1);focusedOptionIndex=M(-1);_componentStyle=T(Ht);$appendTo=S(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=S(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=S(()=>{let e=this.modelValue(),t=this.optionValueSelected?(this.suggestions||[]).find(i=>Q(i,this.optionValue)===e):e;if(ee(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(t);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return ee(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(Je.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,t){super(),this.overlayService=e,this.zone=t}ngOnInit(){super.ngOnInit(),this.id=this.id||Ue("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((t,i,a)=>{t.push({optionGroup:i,group:!0,index:a});let l=this.getOptionGroupChildren(i);return l&&l.forEach(C=>t.push(C)),t},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return ye(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e}findPrevOptionIndex(e){let t=e>0?ye(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Q(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(t=>xe(t,this.getOptionValue(e),this.equalityKey())):!1:xe(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,t){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&z(this.inputEL.nativeElement)}handleDropdownClick(e){let t;this.overlayVisible?this.hide(!0):(z(this.inputEL.nativeElement),t=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,t,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:t})}onInput(e){if(this.typeahead){let t=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=t?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let t=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(a=>this.isOptionMatched(a,this.inputEL.nativeElement.value||""));i!==void 0&&(t=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}t||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let t=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(je(t.value)&&this.hasSelectedOption()?(z(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(ee(this.modelValue())&&!this.inputEL.nativeElement.value){let t=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:t})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(t)}onArrowRightKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex();t++,this.focusedMultipleOptionIndex.set(t),t>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),z(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,t,i=!0){let a=this.getOptionValue(t);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(t)||this.updateModel([...this.modelValue()||[],a])):this.updateModel(a),this.onSelect.emit({originalEvent:e,value:t}),i&&this.hide(!0)}onOptionMouseEnter(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)}search(e,t,i){t!=null&&(i==="input"&&t.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:t})))}removeOption(e,t){e.stopPropagation();let i=this.modelValue()[t],a=this.modelValue().filter((l,C)=>C!==t);this.updateModel(a),this.onUnselect.emit({originalEvent:e,value:i}),z(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.writeModelValue(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=de(this.itemsViewChild.nativeElement,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[t],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),e&&z(this.inputEL.nativeElement),e&&z(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let t=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&z(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{t()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}hasSelectedOption(){return ee(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}getOptionLabel(e){return this.optionLabel?Q(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Q(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Q(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Q(e,this.optionGroupChildren):e.items}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=de(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let t=this.modelValue()?this.focusedOptionIndex():-1;t!==-1&&this.scroller?.scrollToIndex(t)}else{let t=de(this.itemsWrapper,".p-autocomplete-item.p-highlight");t&&t.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,t){this.value=e,t(e),this.updateInputValue(),this.cd.markForCheck()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)(fe(Ye),fe(Te))};static \u0275cmp=ae({type:n,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(t,i,a){if(t&1&&(O(a,Wt,5),O(a,Yt,5),O(a,Jt,5),O(a,Xt,5),O(a,en,5),O(a,tn,5),O(a,nn,5),O(a,on,5),O(a,an,5),O(a,ln,5),O(a,rn,5),O(a,ue,4)),t&2){let l;x(l=y())&&(i.itemTemplate=l.first),x(l=y())&&(i.emptyTemplate=l.first),x(l=y())&&(i.headerTemplate=l.first),x(l=y())&&(i.footerTemplate=l.first),x(l=y())&&(i.selectedItemTemplate=l.first),x(l=y())&&(i.groupTemplate=l.first),x(l=y())&&(i.loaderTemplate=l.first),x(l=y())&&(i.removeIconTemplate=l.first),x(l=y())&&(i.loadingIconTemplate=l.first),x(l=y())&&(i.clearIconTemplate=l.first),x(l=y())&&(i.dropdownIconTemplate=l.first),x(l=y())&&(i.templates=l)}},viewQuery:function(t,i){if(t&1&&(H(sn,5),H(pn,5),H(cn,5),H(dn,5),H(un,5),H(mn,5),H(gn,5)),t&2){let a;x(a=y())&&(i.inputEL=a.first),x(a=y())&&(i.multiInputEl=a.first),x(a=y())&&(i.multiContainerEL=a.first),x(a=y())&&(i.dropdownButton=a.first),x(a=y())&&(i.itemsViewChild=a.first),x(a=y())&&(i.scroller=a.first),x(a=y())&&(i.overlayViewChild=a.first)}},hostVars:4,hostBindings:function(t,i){t&1&&g("click",function(l){return i.onHostClick(l)}),t&2&&(U(i.sx("root")),f(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",K],minQueryLength:[2,"minQueryLength","minQueryLength",K],delay:[2,"delay","delay",K],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",b],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",b],virtualScroll:[2,"virtualScroll","virtualScroll",b],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",K],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",b],forceSelection:[2,"forceSelection","forceSelection",b],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",K],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",b],group:[2,"group","group",b],completeOnFocus:[2,"completeOnFocus","completeOnFocus",b],showClear:[2,"showClear","showClear",b],dropdown:[2,"dropdown","dropdown",b],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",b],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",b],tabindex:[2,"tabindex","tabindex",K],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",b],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",b],selectOnFocus:[2,"selectOnFocus","selectOnFocus",b],searchLocale:[2,"searchLocale","searchLocale",b],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",b],typeahead:[2,"typeahead","typeahead",b],appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[pe([fi,Ht]),re],decls:9,vars:12,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","tabindex"],["role","option",3,"class",4,"ngFor","ngForOf"],["role","option"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle"],[3,"onRemove","label","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","times-circle"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],[3,"class",4,"ngIf"],["data-p-icon","spinner",3,"spin"],["type","button","pRipple","",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(t,i){if(t&1){let a=v();h(0,yn,2,30,"input",12)(1,On,3,2,"ng-container",13)(2,Fn,6,33,"ul",14)(3,Nn,3,2,"ng-container",13)(4,qn,4,7,"button",15),p(5,"p-overlay",16,0),Le("visibleChange",function(C){return u(a),Fe(i.overlayVisible,C)||(i.overlayVisible=C),m(C)}),g("onAnimationStart",function(C){return u(a),m(i.onOverlayAnimationStart(C))})("onHide",function(){return u(a),m(i.hide())}),h(7,mi,10,12,"ng-template",null,1,W),d()}t&2&&(c("ngIf",!i.multiple),s(),c("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),s(),c("ngIf",i.multiple),s(),c("ngIf",i.loading),s(),c("ngIf",i.dropdown),s(),c("hostAttrSelector",i.attrSelector),De("visible",i.overlayVisible),c("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions))},dependencies:[qe,Ne,He,$e,Ke,Re,wt,_t,ut,St,lt,dt,pt,st,Tt,Ce,ct],encapsulation:2,changeDetection:0})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=oe({imports:[he,Ce]})}return n})();var vi=["gridScroll"],xi=()=>({width:"100%",maxWidth:"640px",margin:"0 auto"}),yi=()=>({width:"100%"}),Ci=()=>[],_e=(n,o)=>o.id,wi=(n,o)=>o.topPx;function Si(n,o){if(n&1){let e=v();p(0,"button",36),g("click",function(){u(e);let i=r();return m(i.goToToday())}),d()}}function Ii(n,o){if(n&1){let e=v();p(0,"div",37),g("click",function(){let i=u(e).$implicit,a=r();return m(a.toggleBarber(i.id))}),V(1,"span",38),p(2,"span"),_(3),d()()}if(n&2){let e=o.$implicit,t=r();L("--chip-color",e.color),se("active",t.isBarberActive(e.id)),s(3),k(e.name)}}function Oi(n,o){if(n&1&&(p(0,"div",39),_(1),d()),n&2){let e=o.$implicit;L("border-top-color",e.color),s(),R(" ",e.name," ")}}function Ti(n,o){n&1&&(p(0,"div",16),V(1,"i",40),d())}function Mi(n,o){if(n&1&&(p(0,"div",41),_(1),d()),n&2){let e=o.$implicit;L("top",e.topPx,"px"),se("major",e.major),s(),R(" ",e.label," ")}}function Vi(n,o){}function ki(n,o){if(n&1&&(p(0,"div",46),_(1),d()),n&2){let e=r().$implicit;s(),k(e.serviceName)}}function Ei(n,o){if(n&1&&(p(0,"div",47),_(1),Pe(2,"date"),d()),n&2){let e=r().$implicit;s(),k(ze(2,1,e.startTime,"HH:mm"))}}function Ai(n,o){if(n&1){let e=v();p(0,"div",44),g("click",function(i){let a=u(e).$implicit,l=r(2);return m(l.openEdit(a,i))}),p(1,"div",45),_(2),d(),B(3,ki,2,1,"div",46),B(4,Ei,3,4,"div",47),d()}if(n&2){let e=o.$implicit,t=r().$implicit,i=r();f("appt-card status-"+e.status),L("top",i.getTopPx(e.startTime),"px")("height",i.getHeightPx(e.durationMinutes),"px")("--appt-color",t.color),s(2),k(e.clientName),s(),N(i.getHeightPx(e.durationMinutes)>38?3:-1),s(),N(i.getHeightPx(e.durationMinutes)>54?4:-1)}}function Di(n,o){if(n&1){let e=v();p(0,"div",42),g("click",function(i){let a=u(e).$implicit,l=r();return m(l.onColumnClick(i,a.id))}),B(1,Vi,0,0),G(2,Ai,5,11,"div",43,_e),d()}if(n&2){let e=o.$implicit,t=r();L("background-size",t.slotBgSize()),s(),N(t.isToday()?1:-1),s(),j(t.appointmentsByBarber().get(e.id)??Z(3,Ci))}}function Fi(n,o){if(n&1&&(p(0,"div")(1,"div",48),_(2),d(),p(3,"div",49),_(4),d()()),n&2){let e=o.$implicit;s(2),k(e.name),s(2),k(e.phone)}}function Li(n,o){if(n&1&&(p(0,"div",50)(1,"span"),_(2),d(),p(3,"span",51),_(4),d()()),n&2){let e=o.$implicit;s(2),k(e.name),s(2),Ae("",e.durationMinutes,"min \xA0\xB7\xA0 R$ ",e.price)}}function Pi(n,o){if(n&1){let e=v();p(0,"div",25)(1,"label"),_(2,"Status"),d(),p(3,"p-select",52),g("ngModelChange",function(i){u(e);let a=r();return m(a.patchForm({status:i}))}),d()()}if(n&2){let e=r();s(3),c("options",e.statusOptions)("ngModel",e.form().status)}}function zi(n,o){if(n&1){let e=v();p(0,"button",58),g("click",function(){u(e);let i=r(2);return m(i.confirmDelete())}),d()}if(n&2){let e=r(2);c("loading",e.saving())}}function Bi(n,o){n&1&&V(0,"span")}function Ni(n,o){if(n&1){let e=v();p(0,"div",53),B(1,zi,1,1,"button",54)(2,Bi,1,0,"span"),p(3,"div",55)(4,"button",56),g("click",function(){u(e);let i=r();return m(i.dialogVisible.set(!1))}),d(),p(5,"button",57),g("click",function(){u(e);let i=r();return m(i.saveForm())}),d()()()}if(n&2){let e=r();s(),N(e.dialogMode()==="edit"?1:2),s(4),c("label",e.dialogMode()==="create"?"Agendar":"Salvar")("loading",e.saving())}}var E=80,Qt=class n{svc=T(Dt);msgSvc=T(We);confirmSvc=T(Ze);platformId=T(Oe);HOUR_HEIGHT=E;gridScrollRef=Be("gridScroll");selectedDate=this.svc.selectedDate;config=this.svc.config;loading=this.svc.loading;appointments=this.svc.appointments;allBarbers=this.svc.barbers;allServices=this.svc.services;activeBarberIds=M(new Set(["1","2"]));now=M(new Date);tickInterval=null;dialogVisible=M(!1);dialogMode=M("create");saving=M(!1);clientSuggestions=M([]);form=M({barberId:"",selectedClient:null,clientId:"",clientName:"",selectedService:null,serviceId:"",serviceName:"",durationMinutes:30,date:new Date,startTimeStr:"09:00",notes:"",status:"scheduled"});intervalOptions=[{label:"5 min",value:5},{label:"10 min",value:10},{label:"15 min",value:15},{label:"30 min",value:30}];statusOptions=[{label:"Agendado",value:"scheduled"},{label:"Em atendimento",value:"in-progress"},{label:"Conclu\xEDdo",value:"completed"},{label:"Cancelado",value:"cancelled"},{label:"N\xE3o compareceu",value:"no-show"}];visibleBarbers=S(()=>this.allBarbers().filter(o=>this.activeBarberIds().has(o.id)));appointmentsByBarber=S(()=>{let o=new Map;for(let e of this.visibleBarbers())o.set(e.id,[]);for(let e of this.appointments())o.has(e.barberId)&&o.get(e.barberId).push(e);return o});hourSlots=S(()=>{let{startHour:o,endHour:e}=this.config();return Array.from({length:e-o+1},(t,i)=>o+i)});gridHeight=S(()=>{let{startHour:o,endHour:e}=this.config();return(e-o)*E});slotLineHeight=S(()=>E*this.config().slotIntervalMinutes/60);currentTimeTop=S(()=>{let o=this.now(),{startHour:e}=this.config();return((o.getHours()-e)*60+o.getMinutes())*E/60});isToday=S(()=>{let o=this.selectedDate(),e=new Date;return o.getDate()===e.getDate()&&o.getMonth()===e.getMonth()&&o.getFullYear()===e.getFullYear()});timeSlotLabels=S(()=>{let{startHour:o,endHour:e,slotIntervalMinutes:t}=this.config(),i=E*t/60,a=Math.max(1,Math.ceil(14/i)),l=[],C=(e-o)*60,te=0;for(let $=0;$<=C;$+=t,te++){let we=$%60,Se=we===0;if(Se||te%a===0){let qt=o+Math.floor($/60);l.push({topPx:$*E/60,label:`${qt.toString().padStart(2,"0")}:${we.toString().padStart(2,"0")}`,major:Se})}}return l});timeOptions=S(()=>{let o=this.config().slotIntervalMinutes,e=[];for(let t=0;t<24;t++)for(let i=0;i<60;i+=o)e.push(`${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`);return e});constructor(){Ge(this.platformId)&&(this.tickInterval=setInterval(()=>this.now.set(new Date),6e4),Me(()=>this.scrollToNow()))}scrollToNow(){let o=this.gridScrollRef()?.nativeElement;if(!o)return;let e=this.isToday()?Math.max(0,this.currentTimeTop()-120):this.config().startHour*E;o.scrollTop=e}getTopPx(o){let{startHour:e}=this.config();return Math.max(0,((o.getHours()-e)*60+o.getMinutes())*E/60)}getHeightPx(o){return Math.max(o*E/60,22)}formatHour(o){return`${o.toString().padStart(2,"0")}:00`}formatDate(o){let e=["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"],t=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];return`${e[o.getDay()]}, ${o.getDate()} ${t[o.getMonth()]}`}slotBgSize(){return`100% ${E}px, 100% ${this.slotLineHeight()}px`}prevDay(){let o=new Date(this.selectedDate());o.setDate(o.getDate()-1),this.svc.setDate(o)}nextDay(){let o=new Date(this.selectedDate());o.setDate(o.getDate()+1),this.svc.setDate(o)}goToToday(){this.svc.setDate(new Date),setTimeout(()=>this.scrollToNow(),250)}toggleBarber(o){let e=new Set(this.activeBarberIds());e.has(o)?e.size>1&&e.delete(o):e.add(o),this.activeBarberIds.set(e)}isBarberActive(o){return this.activeBarberIds().has(o)}setSlotInterval(o){this.svc.updateConfig({slotIntervalMinutes:o})}onColumnClick(o,e){if(o.target.closest(".appt-card"))return;let{startHour:t,slotIntervalMinutes:i}=this.config(),l=o.offsetY*60/E,C=Math.floor(l/i)*i,te=Math.min(Math.floor(C/60)+t,23),$=C%60;this.openCreate(e,`${te.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}`)}openCreate(o="",e="09:00"){this.form.set({barberId:o||this.visibleBarbers()[0]?.id||"",selectedClient:null,clientId:"",clientName:"",selectedService:null,serviceId:"",serviceName:"",durationMinutes:30,date:new Date(this.selectedDate()),startTimeStr:e,notes:"",status:"scheduled"}),this.dialogMode.set("create"),this.dialogVisible.set(!0)}openEdit(o,e){e?.stopPropagation();let t=this.allServices().find(l=>l.id===o.serviceId)??null,i=o.startTime.getHours().toString().padStart(2,"0"),a=o.startTime.getMinutes().toString().padStart(2,"0");this.form.set({id:o.id,barberId:o.barberId,selectedClient:{id:o.clientId,name:o.clientName,phone:o.clientPhone??""},clientId:o.clientId,clientName:o.clientName,selectedService:t,serviceId:o.serviceId,serviceName:o.serviceName,durationMinutes:o.durationMinutes,date:new Date(o.startTime),startTimeStr:`${i}:${a}`,notes:o.notes??"",status:o.status}),this.dialogMode.set("edit"),this.dialogVisible.set(!0)}searchClients(o){this.svc.searchClients(o.query).subscribe(e=>this.clientSuggestions.set(e))}patchForm(o){this.form.update(e=>q(q({},e),o))}onClientChange(o){o&&typeof o=="object"?this.form.update(e=>ne(q({},e),{selectedClient:o,clientId:o.id,clientName:o.name})):o||this.form.update(e=>ne(q({},e),{selectedClient:null,clientId:"",clientName:""}))}onServiceChange(o){o&&this.form.update(e=>ne(q({},e),{selectedService:o,serviceId:o.id,serviceName:o.name,durationMinutes:o.durationMinutes}))}saveForm(){let o=this.form();if(!o.clientId||!o.serviceId||!o.barberId||!o.startTimeStr){this.msgSvc.add({severity:"warn",summary:"Aten\xE7\xE3o",detail:"Preencha cliente, servi\xE7o, profissional e hor\xE1rio."});return}this.saving.set(!0);let e={id:o.id,barberId:o.barberId,clientId:o.clientId,clientName:o.clientName,serviceId:o.serviceId,serviceName:o.serviceName,durationMinutes:o.durationMinutes,date:o.date,startTimeStr:o.startTimeStr,notes:o.notes,status:o.status},t=this.dialogMode();(t==="create"?this.svc.createAppointment(e):this.svc.updateAppointment(e)).subscribe({next:()=>{this.svc.loadAppointments(this.selectedDate()),this.dialogVisible.set(!1),this.saving.set(!1),this.msgSvc.add({severity:"success",summary:"Sucesso",detail:t==="create"?"Agendamento criado!":"Agendamento atualizado!"})},error:()=>{this.saving.set(!1),this.msgSvc.add({severity:"error",summary:"Erro",detail:"N\xE3o foi poss\xEDvel salvar."})}})}confirmDelete(){this.confirmSvc.confirm({message:`Excluir o agendamento de <b>${this.form().clientName}</b>?`,header:"Confirmar exclus\xE3o",icon:"pi pi-exclamation-triangle",acceptLabel:"Excluir",rejectLabel:"Cancelar",acceptButtonStyleClass:"p-button-danger",accept:()=>this.doDelete()})}doDelete(){let o=this.form().id;o&&(this.saving.set(!0),this.svc.deleteAppointment(o).subscribe({next:()=>{this.svc.loadAppointments(this.selectedDate()),this.dialogVisible.set(!1),this.saving.set(!1),this.msgSvc.add({severity:"success",summary:"Exclu\xEDdo",detail:"Agendamento removido."})}}))}ngOnDestroy(){this.tickInterval&&clearInterval(this.tickInterval)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=ae({type:n,selectors:[["app-schedule"]],viewQuery:function(e,t){e&1&&ke(t.gridScrollRef,vi,5),e&2&&Ee()},hostAttrs:[1,"schedule-host"],decls:66,vars:36,consts:[["gridScroll",""],["position","top-center",3,"life"],[1,"schedule-page"],[1,"schedule-header"],[1,"date-nav"],["pButton","","icon","pi pi-chevron-left",1,"p-button-text","p-button-rounded","p-button-sm",3,"click"],["pButton","","icon","pi pi-chevron-right",1,"p-button-text","p-button-rounded","p-button-sm",3,"click"],["pButton","","label","Hoje",1,"p-button-text","p-button-sm","today-btn"],["optionLabel","label","optionValue","value","styleClass","interval-select","appendTo","body",3,"ngModelChange","options","ngModel"],[1,"barber-chips-bar"],[1,"barber-chip",3,"active","--chip-color"],[1,"grid-wrapper"],[1,"col-headers"],[1,"time-gutter"],[1,"col-header",3,"border-top-color"],[1,"grid-scroll"],[1,"loading-overlay"],[1,"grid-body"],[1,"time-col"],[1,"time-label",3,"major","top"],[1,"barber-col",3,"background-size"],["aria-label","Novo agendamento",1,"fab",3,"click"],[1,"pi","pi-plus"],["position","bottom","appendTo","body","styleClass","appt-dialog",3,"visibleChange","visible","modal","draggable","resizable","header"],[1,"dialog-form"],[1,"form-field"],["optionLabel","name","placeholder","Buscar cliente...","styleClass","w-full","appendTo","body",3,"ngModelChange","completeMethod","ngModel","suggestions","inputStyle"],["pTemplate","item"],["optionLabel","name","placeholder","Selecionar servi\xE7o","styleClass","w-full","appendTo","body",3,"ngModelChange","options","ngModel"],[1,"form-row"],["optionLabel","name","optionValue","id","placeholder","Selecionar","styleClass","w-full","appendTo","body",3,"ngModelChange","options","ngModel"],["dateFormat","dd/mm/yy","styleClass","w-full","appendTo","body",3,"ngModelChange","ngModel"],["placeholder","HH:mm","filterPlaceholder","Buscar...","styleClass","w-full","appendTo","body",3,"ngModelChange","options","ngModel","filter"],["styleClass","w-full",3,"ngModelChange","ngModel","min","max","step"],["pTextarea","","rows","2","placeholder","Opcional...",2,"width","100%","resize","vertical",3,"ngModelChange","ngModel"],["pTemplate","footer"],["pButton","","label","Hoje",1,"p-button-text","p-button-sm","today-btn",3,"click"],[1,"barber-chip",3,"click"],[1,"chip-dot"],[1,"col-header"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem","color","var(--primary-color)"],[1,"time-label"],[1,"barber-col",3,"click"],[1,"appt-card",3,"class","top","height","--appt-color"],[1,"appt-card",3,"click"],[1,"appt-name"],[1,"appt-service"],[1,"appt-time"],[1,"font-semibold"],[1,"text-sm","text-color-secondary"],[1,"svc-option"],[1,"svc-meta"],["optionLabel","label","optionValue","value","styleClass","w-full","appendTo","body",3,"ngModelChange","options","ngModel"],[1,"dialog-footer"],["pButton","","icon","pi pi-trash","label","Excluir","severity","danger",1,"p-button-text",3,"loading"],[1,"flex","gap-2"],["pButton","","label","Cancelar","severity","secondary",1,"p-button-text",3,"click"],["pButton","",3,"click","label","loading"],["pButton","","icon","pi pi-trash","label","Excluir","severity","danger",1,"p-button-text",3,"click","loading"]],template:function(e,t){if(e&1){let i=v();V(0,"p-toast",1),p(1,"div",2)(2,"div",3)(3,"div",4)(4,"button",5),g("click",function(){return u(i),m(t.prevDay())}),d(),p(5,"span"),_(6),d(),p(7,"button",6),g("click",function(){return u(i),m(t.nextDay())}),d(),B(8,Si,1,0,"button",7),d(),p(9,"p-select",8),g("ngModelChange",function(l){return u(i),m(t.setSlotInterval(l))}),d()(),p(10,"div",9),G(11,Ii,4,5,"div",10,_e),d(),p(13,"div",11)(14,"div",12),V(15,"div",13),G(16,Oi,2,3,"div",14,_e),d(),p(18,"div",15,0),B(20,Ti,2,0,"div",16),p(21,"div",17)(22,"div",18),G(23,Mi,2,5,"div",19,wi),d(),G(25,Di,4,4,"div",20,_e),d()()(),p(27,"button",21),g("click",function(){return u(i),m(t.openCreate())}),V(28,"i",22),d()(),p(29,"p-dialog",23),g("visibleChange",function(l){return u(i),m(t.dialogVisible.set(l))}),p(30,"div",24)(31,"div",25)(32,"label"),_(33,"Cliente *"),d(),p(34,"p-autocomplete",26),g("ngModelChange",function(l){return u(i),m(t.onClientChange(l))})("completeMethod",function(l){return u(i),m(t.searchClients(l))}),h(35,Fi,5,2,"ng-template",27),d()(),p(36,"div",25)(37,"label"),_(38,"Servi\xE7o *"),d(),p(39,"p-select",28),g("ngModelChange",function(l){return u(i),m(t.onServiceChange(l))}),h(40,Li,5,3,"ng-template",27),d()(),p(41,"div",29)(42,"div",25)(43,"label"),_(44,"Profissional *"),d(),p(45,"p-select",30),g("ngModelChange",function(l){return u(i),m(t.patchForm({barberId:l}))}),d()(),p(46,"div",25)(47,"label"),_(48,"Data *"),d(),p(49,"p-datepicker",31),g("ngModelChange",function(l){return u(i),m(t.patchForm({date:l??t.form().date}))}),d()()(),p(50,"div",29)(51,"div",25)(52,"label"),_(53,"Hor\xE1rio *"),d(),p(54,"p-select",32),g("ngModelChange",function(l){return u(i),m(t.patchForm({startTimeStr:l}))}),d()(),p(55,"div",25)(56,"label"),_(57,"Dura\xE7\xE3o (min)"),d(),p(58,"p-inputnumber",33),g("ngModelChange",function(l){return u(i),m(t.patchForm({durationMinutes:l??t.form().durationMinutes}))}),d()()(),B(59,Pi,4,2,"div",25),p(60,"div",25)(61,"label"),_(62,"Observa\xE7\xF5es"),d(),p(63,"textarea",34),g("ngModelChange",function(l){return u(i),m(t.patchForm({notes:l??""}))}),_(64,"            "),d()()(),h(65,Ni,6,3,"ng-template",35),d()}e&2&&(c("life",3e3),s(5),se("is-today",t.isToday()),s(),R(" ",t.formatDate(t.selectedDate())," "),s(2),N(t.isToday()?-1:8),s(),c("options",t.intervalOptions)("ngModel",t.config().slotIntervalMinutes),s(2),j(t.allBarbers()),s(5),j(t.visibleBarbers()),s(4),N(t.loading()?20:-1),s(),L("height",t.gridHeight(),"px"),s(2),j(t.timeSlotLabels()),s(2),j(t.visibleBarbers()),s(4),U(Z(34,xi)),c("visible",t.dialogVisible())("modal",!0)("draggable",!1)("resizable",!1)("header",t.dialogMode()==="create"?"Novo Agendamento":"Editar Agendamento"),s(5),c("ngModel",t.form().selectedClient)("suggestions",t.clientSuggestions())("inputStyle",Z(35,yi)),s(5),c("options",t.allServices())("ngModel",t.form().selectedService),s(6),c("options",t.allBarbers())("ngModel",t.form().barberId),s(4),c("ngModel",t.form().date),s(5),c("options",t.timeOptions())("ngModel",t.form().startTimeStr)("filter",!0),s(4),c("ngModel",t.form().durationMinutes)("min",5)("max",480)("step",5),s(),N(t.dialogMode()==="edit"?59:-1),s(4),c("ngModel",t.form().notes))},dependencies:[ot,et,nt,it,gt,mt,ue,xt,vt,Ct,yt,Ot,It,ft,Bt,zt,Kt,he,Vt,Mt,kt,At,Et,Qe],styles:[".schedule-host[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.schedule-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative;background:var(--surface-ground);color:#1a1a1a}.schedule-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.4rem .75rem;background:#fff;border-bottom:1px solid #e5e7eb;flex-shrink:0;gap:.5rem;min-height:48px}.date-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.2rem}.date-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;min-width:118px;text-align:center;cursor:default;color:#1a1a1a}.date-label.is-today[_ngcontent-%COMP%]{color:var(--primary-blue, #003366)}.today-btn[_ngcontent-%COMP%]{font-size:.8rem;padding:.25rem .5rem}[_nghost-%COMP%]     .interval-select .p-select{height:2rem;font-size:.8rem;min-width:84px}.barber-chips-bar[_ngcontent-%COMP%]{display:flex;gap:.5rem;padding:.4rem .75rem;overflow-x:auto;flex-shrink:0;background:#f9fafb;border-bottom:1px solid #e5e7eb;scrollbar-width:none}.barber-chips-bar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.barber-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.35rem;padding:.25rem .7rem;border-radius:2rem;border:2px solid #d1d5db;background:#f9fafb;color:#6b7280;font-size:.82rem;font-weight:500;white-space:nowrap;cursor:pointer;transition:all .15s ease;-webkit-user-select:none;user-select:none}.barber-chip[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--chip-color, #94a3b8);flex-shrink:0;transition:background .15s}.barber-chip.active[_ngcontent-%COMP%]{border-color:var(--chip-color, #94a3b8);background:color-mix(in srgb,var(--chip-color, #94a3b8) 12%,#ffffff);color:#1a1a1a}.grid-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow:hidden}.col-headers[_ngcontent-%COMP%]{display:flex;flex-shrink:0;background:#fff;border-bottom:2px solid #e5e7eb}.col-headers[_ngcontent-%COMP%]   .time-gutter[_ngcontent-%COMP%]{width:52px;flex-shrink:0}.col-headers[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]{flex:1;min-width:88px;padding:.3rem .5rem;font-size:.78rem;font-weight:700;text-align:center;border-top:3px solid transparent;color:#6b7280;letter-spacing:.02em;text-transform:uppercase}.grid-scroll[_ngcontent-%COMP%]{flex:1;overflow-y:auto;overflow-x:auto;position:relative;background:#f3f4f6}.loading-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--surface-card) 80%,transparent);z-index:10}.grid-body[_ngcontent-%COMP%]{display:flex;position:relative}.time-col[_ngcontent-%COMP%]{width:52px;flex-shrink:0;position:relative;border-right:1px solid #e5e7eb;background:#fff}.time-label[_ngcontent-%COMP%]{position:absolute;right:4px;font-size:.6rem;color:#9ca3af;transform:translateY(-50%);-webkit-user-select:none;user-select:none;white-space:nowrap;font-weight:400;line-height:1}.time-label.major[_ngcontent-%COMP%]{font-size:.68rem;font-weight:600;color:#6b7280}.barber-col[_ngcontent-%COMP%]{flex:1;min-width:88px;position:relative;cursor:crosshair;border-right:1px solid var(--surface-border);background-color:#fff;background-image:linear-gradient(to bottom,transparent calc(100% - 1px),#d1d5db 1px),linear-gradient(to bottom,transparent calc(100% - 1px),#e9ecef 1px);background-size:100% 80px,100% 20px;background-repeat:repeat-y}.barber-col[_ngcontent-%COMP%]:last-child{border-right:none}.barber-col[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #e5e7eb}.now-line[_ngcontent-%COMP%]{position:absolute;left:0;right:0;z-index:5;pointer-events:none;display:flex;align-items:center}.now-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-left:-5px}.now-bar[_ngcontent-%COMP%]{flex:1;height:2px}.appt-card[_ngcontent-%COMP%]{position:absolute;left:2px;right:2px;border-radius:4px;padding:3px 5px;overflow:hidden;font-size:.73rem;cursor:pointer;z-index:2;transition:filter .1s,transform .1s;background:#3b82f6;border-left:3px solid #3b82f6;color:#fff}.appt-card[_ngcontent-%COMP%]:hover{filter:brightness(.93);transform:scaleX(1.015);z-index:8}.appt-card[_ngcontent-%COMP%]:active{transform:scaleX(.98)}.appt-card.status-completed[_ngcontent-%COMP%]{opacity:.55}.appt-card.status-completed[_ngcontent-%COMP%]   .appt-name[_ngcontent-%COMP%]{text-decoration:line-through}.appt-card.status-cancelled[_ngcontent-%COMP%], .appt-card.status-no-show[_ngcontent-%COMP%]{opacity:.35;filter:grayscale(.9)}.appt-card[_ngcontent-%COMP%]   .appt-name[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.2}.appt-card[_ngcontent-%COMP%]   .appt-service[_ngcontent-%COMP%], .appt-card[_ngcontent-%COMP%]   .appt-time[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.75;font-size:.68rem;line-height:1.2}.fab[_ngcontent-%COMP%]{position:absolute;bottom:1rem;right:1rem;width:52px;height:52px;border-radius:50%;background:var(--accent-red);color:#fff;border:none;font-size:1.4rem;cursor:pointer;box-shadow:0 4px 14px #00000038;display:flex;align-items:center;justify-content:center;z-index:20;transition:transform .15s,box-shadow .15s}.fab[_ngcontent-%COMP%]:hover{transform:scale(1.08);box-shadow:0 6px 18px #00000047}.fab[_ngcontent-%COMP%]:active{transform:scale(.94)}.dialog-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.9rem;padding:.125rem 0}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.82rem;font-weight:600;color:#6b7280}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.svc-option[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;gap:.5rem}.svc-option[_ngcontent-%COMP%]   .svc-meta[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-color-secondary);white-space:nowrap}.dialog-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:.5rem}[_nghost-%COMP%]     .appt-dialog .p-dialog-header{padding:1rem 1.25rem .6rem}[_nghost-%COMP%]     .appt-dialog .p-dialog-content{padding:.4rem 1.25rem;max-height:72dvh;overflow-y:auto}[_nghost-%COMP%]     .appt-dialog .p-dialog-footer{padding:.6rem 1.25rem .8rem}"]})};export{E as HOUR_HEIGHT,Qt as ScheduleComponent};
