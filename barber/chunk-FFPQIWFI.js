import{a as Be}from"./chunk-MMOMPXKV.js";import{a as ze}from"./chunk-Z26UBRCR.js";import{a as Ae,e as $e,f as He}from"./chunk-W5CZMESO.js";import{a as Qe}from"./chunk-Q3ZJEJE3.js";import{a as Fe}from"./chunk-OBNBZ42B.js";import{a as Se,d as Ve,n as Re,o as Ke}from"./chunk-LJ55XIKX.js";import{a as Ie,g as Me,j as Ee,l as Le,m as De}from"./chunk-6DJVCRYB.js";import{$ as d,$b as z,$c as k,Aa as s,Bc as ve,Cb as ee,Db as ue,Fa as v,Fb as U,Ga as pe,Gb as h,Gd as Ce,Hb as $,Ib as te,Jb as ne,Jd as Oe,Kd as ae,La as X,Lb as de,Ld as Te,Mb as me,Nb as he,Ob as j,P as re,Pb as _e,Q as B,Qa as se,Qb as V,Qd as Y,R as q,Ra as N,Rb as Z,Rd as ke,Sa as ce,Sb as ie,Ta as P,Ua as c,V as E,Xb as F,_ as u,_a as x,_c as W,aa as R,cc as D,fb as p,gb as _,ha as G,hb as g,ib as Q,kc as m,la as K,lc as A,mb as T,nb as S,ob as O,pb as C,rb as b,rd as we,sb as r,td as H,ud as L,vb as w,vc as ge,vd as oe,wb as M,wc as fe,xb as f,xc as ye,xd as le,yb as y,yc as xe,zc as be}from"./chunk-5H6OL2TO.js";var qe=`
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
`;var Ye=`
    ${qe}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Je={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},Ge=(()=>{class t extends Y{name="textarea";theme=Ye;classes=Je;static \u0275fac=(()=>{let e;return function(i){return(e||(e=K(t)))(i||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Fn=(()=>{class t extends Re{autoResize;pSize;variant=D();fluid=D(void 0,{transform:m});invalid=D(void 0,{transform:m});$variant=z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new v;ngModelSubscription;ngControlSubscription;_componentStyle=E(Ge);ngControl=E(Ve,{optional:!0,self:!0});pcFluid=E(Ee,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}ngOnInit(){super.ngOnInit(),this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.writeModelValue(e.target.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=K(t)))(i||t)}})();static \u0275dir=ce({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,i){n&1&&b("input",function(a){return i.onInput(a)}),n&2&&h(i.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",m],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[j([Ge]),P]})}return t})(),zn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=q({})}return t})();var Ne=`
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
`;var Xe=["item"],et=["empty"],tt=["header"],nt=["footer"],it=["selecteditem"],ot=["group"],lt=["loader"],at=["removeicon"],rt=["loadingicon"],pt=["clearicon"],st=["dropdownicon"],ct=["focusInput"],ut=["multiIn"],dt=["multiContainer"],mt=["ddBtn"],ht=["items"],_t=["scroller"],gt=["overlay"],ft=t=>({i:t}),Ue=t=>({$implicit:t}),yt=(t,l,e)=>({removeCallback:t,index:l,class:e}),J=t=>({height:t}),je=(t,l)=>({$implicit:t,options:l}),xt=t=>({options:t}),bt=()=>({}),vt=(t,l,e)=>({option:t,i:l,scrollerOptions:e}),wt=(t,l)=>({$implicit:t,index:l});function It(t,l){if(t&1){let e=C();_(0,"input",17,2),b("input",function(i){u(e);let o=r();return d(o.onInput(i))})("keydown",function(i){u(e);let o=r();return d(o.onKeyDown(i))})("change",function(i){u(e);let o=r();return d(o.onInputChange(i))})("focus",function(i){u(e);let o=r();return d(o.onInputFocus(i))})("blur",function(i){u(e);let o=r();return d(o.onInputBlur(i))})("paste",function(i){u(e);let o=r();return d(o.onInputPaste(i))})("keyup",function(i){u(e);let o=r();return d(o.onInputKeyUp(i))}),g()}if(t&2){let e=r();h(e.cn(e.cx("pcInputText"),e.inputStyleClass)),p("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),x("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Ct(t,l){if(t&1){let e=C();R(),_(0,"svg",20),b("click",function(){u(e);let i=r(2);return d(i.clear())}),g()}if(t&2){let e=r(2);h(e.cx("clearIcon")),x("aria-hidden",!0)}}function Ot(t,l){}function Tt(t,l){t&1&&c(0,Ot,0,0,"ng-template")}function St(t,l){if(t&1){let e=C();_(0,"span",21),b("click",function(){u(e);let i=r(2);return d(i.clear())}),c(1,Tt,1,0,null,22),g()}if(t&2){let e=r(2);h(e.cx("clearIcon")),x("aria-hidden",!0),s(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Vt(t,l){if(t&1&&(T(0),c(1,Ct,1,3,"svg",18)(2,St,2,4,"span",19),S()),t&2){let e=r();s(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function kt(t,l){t&1&&O(0)}function Mt(t,l){if(t&1){let e=C();_(0,"span",21),b("click",function(i){u(e);let o=r(2).index,a=r(2);return d(a.readonly?"":a.removeOption(i,o))}),R(),Q(1,"svg",29),g()}if(t&2){let e=r(4);h(e.cx("chipIcon")),s(),h(e.cx("chipIcon")),x("aria-hidden",!0)}}function Et(t,l){}function At(t,l){t&1&&c(0,Et,0,0,"ng-template")}function Lt(t,l){if(t&1&&(_(0,"span"),c(1,At,1,0,null,28),g()),t&2){let e=r(2).index,n=r(2);x("aria-hidden",!0),s(),p("ngTemplateOutlet",n.removeIconTemplate||n._removeIconTemplate)("ngTemplateOutletContext",ie(3,yt,n.removeOption.bind(n),e,n.cx("chipIcon")))}}function Ft(t,l){if(t&1&&c(0,Mt,2,5,"span",19)(1,Lt,2,7,"span",13),t&2){let e=r(3);p("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),p("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function zt(t,l){if(t&1){let e=C();_(0,"li",25,4)(2,"p-chip",27),b("onRemove",function(i){let o=u(e).index,a=r(2);return d(a.readonly?"":a.removeOption(i,o))}),c(3,kt,1,0,"ng-container",28)(4,Ft,2,2,"ng-template",null,5,F),g()()}if(t&2){let e=l.$implicit,n=l.index,i=r(2);h(i.cx("chipItem",V(13,ft,n))),x("id",i.id+"_multiple_option_"+n)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",n+1)("aria-selected",!0),s(2),h(i.cx("pcChip")),p("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("removable",!0),s(),p("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",V(15,Ue,e))}}function Dt(t,l){if(t&1){let e=C();_(0,"ul",23,3),b("focus",function(i){u(e);let o=r();return d(o.onMultipleContainerFocus(i))})("blur",function(i){u(e);let o=r();return d(o.onMultipleContainerBlur(i))})("keydown",function(i){u(e);let o=r();return d(o.onMultipleContainerKeyDown(i))}),c(2,zt,6,17,"li",24),_(3,"li",25)(4,"input",26,2),b("input",function(i){u(e);let o=r();return d(o.onInput(i))})("keydown",function(i){u(e);let o=r();return d(o.onKeyDown(i))})("change",function(i){u(e);let o=r();return d(o.onInputChange(i))})("focus",function(i){u(e);let o=r();return d(o.onInputFocus(i))})("blur",function(i){u(e);let o=r();return d(o.onInputBlur(i))})("paste",function(i){u(e);let o=r();return d(o.onInputPaste(i))})("keyup",function(i){u(e);let o=r();return d(o.onInputKeyUp(i))}),g()()()}if(t&2){let e=r();h(e.cx("inputMultiple")),p("tabindex",-1),x("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),p("ngForOf",e.modelValue()),s(),h(e.cx("inputChip")),s(),h(e.cx("pcInputText")),p("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle),x("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Rt(t,l){if(t&1&&(R(),Q(0,"svg",32)),t&2){let e=r(2);h(e.cx("loader")),p("spin",!0),x("aria-hidden",!0)}}function Kt(t,l){}function Qt(t,l){t&1&&c(0,Kt,0,0,"ng-template")}function $t(t,l){if(t&1&&(_(0,"span"),c(1,Qt,1,0,null,22),g()),t&2){let e=r(2);h(e.cx("loader")),x("aria-hidden",!0),s(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ht(t,l){if(t&1&&(T(0),c(1,Rt,1,4,"svg",30)(2,$t,2,4,"span",31),S()),t&2){let e=r();s(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Bt(t,l){if(t&1&&Q(0,"span",35),t&2){let e=r(2);p("ngClass",e.dropdownIcon),x("aria-hidden",!0)}}function qt(t,l){t&1&&(R(),Q(0,"svg",37))}function Gt(t,l){}function Nt(t,l){t&1&&c(0,Gt,0,0,"ng-template")}function Pt(t,l){if(t&1&&(T(0),c(1,qt,1,0,"svg",36)(2,Nt,1,0,null,22),S()),t&2){let e=r(2);s(),p("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ut(t,l){if(t&1){let e=C();_(0,"button",33,6),b("click",function(i){u(e);let o=r();return d(o.handleDropdownClick(i))}),c(2,Bt,1,2,"span",34)(3,Pt,3,2,"ng-container",13),g()}if(t&2){let e=r();h(e.cx("dropdown")),p("disabled",e.$disabled()),x("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),p("ngIf",e.dropdownIcon),s(),p("ngIf",!e.dropdownIcon)}}function jt(t,l){t&1&&O(0)}function Zt(t,l){t&1&&O(0)}function Wt(t,l){if(t&1&&c(0,Zt,1,0,"ng-container",28),t&2){let e=l.$implicit,n=l.options;r(2);let i=ee(6);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Z(2,je,e,n))}}function Yt(t,l){t&1&&O(0)}function Jt(t,l){if(t&1&&c(0,Yt,1,0,"ng-container",28),t&2){let e=l.options,n=r(4);p("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",V(2,xt,e))}}function Xt(t,l){t&1&&(T(0),c(1,Jt,1,4,"ng-template",null,9,F),S())}function en(t,l){if(t&1){let e=C();_(0,"p-scroller",41,8),b("onLazyLoad",function(i){u(e);let o=r(2);return d(o.onLazyLoad.emit(i))}),c(2,Wt,1,5,"ng-template",null,1,F)(4,Xt,3,0,"ng-container",13),g()}if(t&2){let e=r(2);U(V(8,J,e.scrollHeight)),p("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),p("ngIf",e.loaderTemplate||e._loaderTemplate)}}function tn(t,l){t&1&&O(0)}function nn(t,l){if(t&1&&(T(0),c(1,tn,1,0,"ng-container",28),S()),t&2){r();let e=ee(6),n=r();s(),p("ngTemplateOutlet",e)("ngTemplateOutletContext",Z(3,je,n.visibleOptions(),_e(2,bt)))}}function on(t,l){if(t&1&&(_(0,"span"),$(1),g()),t&2){let e=r(2).$implicit,n=r(3);s(),te(n.getOptionGroupLabel(e.optionGroup))}}function ln(t,l){t&1&&O(0)}function an(t,l){if(t&1&&(T(0),_(1,"li",45),c(2,on,2,1,"span",13)(3,ln,1,0,"ng-container",28),g(),S()),t&2){let e=r(),n=e.$implicit,i=e.index,o=r().options,a=r(2);s(),h(a.cx("optionGroup")),p("ngStyle",V(7,J,o.itemSize+"px")),x("id",a.id+"_"+a.getOptionIndex(i,o)),s(),p("ngIf",!a.groupTemplate),s(),p("ngTemplateOutlet",a.groupTemplate)("ngTemplateOutletContext",V(9,Ue,n.optionGroup))}}function rn(t,l){if(t&1&&(_(0,"span"),$(1),g()),t&2){let e=r(2).$implicit,n=r(3);s(),te(n.getOptionLabel(e))}}function pn(t,l){t&1&&O(0)}function sn(t,l){if(t&1){let e=C();T(0),_(1,"li",46),b("click",function(i){u(e);let o=r().$implicit,a=r(3);return d(a.onOptionSelect(i,o))})("mouseenter",function(i){u(e);let o=r().index,a=r().options,I=r(2);return d(I.onOptionMouseEnter(i,I.getOptionIndex(o,a)))}),c(2,rn,2,1,"span",13)(3,pn,1,0,"ng-container",28),g(),S()}if(t&2){let e=r(),n=e.$implicit,i=e.index,o=r().options,a=r(2);s(),h(a.cx("option",ie(13,vt,n,i,o))),p("ngStyle",V(17,J,o.itemSize+"px")),x("id",a.id+"_"+a.getOptionIndex(i,o))("aria-label",a.getOptionLabel(n))("aria-selected",a.isSelected(n))("aria-disabled",a.isOptionDisabled(n))("data-p-focused",a.focusedOptionIndex()===a.getOptionIndex(i,o))("aria-setsize",a.ariaSetSize)("aria-posinset",a.getAriaPosInset(a.getOptionIndex(i,o))),s(),p("ngIf",!a.itemTemplate&&!a._itemTemplate),s(),p("ngTemplateOutlet",a.itemTemplate||a._itemTemplate)("ngTemplateOutletContext",Z(19,wt,n,o.getOptions?o.getOptions(i):i))}}function cn(t,l){if(t&1&&c(0,an,4,11,"ng-container",13)(1,sn,4,22,"ng-container",13),t&2){let e=l.$implicit,n=r(3);p("ngIf",n.isOptionGroup(e)),s(),p("ngIf",!n.isOptionGroup(e))}}function un(t,l){if(t&1&&(T(0),$(1),S()),t&2){let e=r(4);s(),ne(" ",e.searchResultMessageText," ")}}function dn(t,l){t&1&&O(0,null,11)}function mn(t,l){if(t&1&&(_(0,"li",45),c(1,un,2,1,"ng-container",47)(2,dn,2,0,"ng-container",22),g()),t&2){let e=r().options,n=r(2);h(n.cx("emptyMessage")),p("ngStyle",V(6,J,e.itemSize+"px")),s(),p("ngIf",!n.emptyTemplate&&!n._emptyTemplate)("ngIfElse",n.empty),s(),p("ngTemplateOutlet",n.emptyTemplate||n._emptyTemplate)}}function hn(t,l){if(t&1&&(_(0,"ul",42,10),c(2,cn,2,2,"ng-template",43)(3,mn,3,8,"li",44),g()),t&2){let e=l.$implicit,n=l.options,i=r(2);U(n.contentStyle),h(i.cn(i.cx("list"),n.contentStyleClass)),x("id",i.id+"_list")("aria-label",i.listLabel),s(2),p("ngForOf",e),s(),p("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function _n(t,l){t&1&&O(0)}function gn(t,l){if(t&1&&(_(0,"div",38),c(1,jt,1,0,"ng-container",22),_(2,"div"),c(3,en,5,10,"p-scroller",39)(4,nn,2,6,"ng-container",13),g(),c(5,hn,4,8,"ng-template",null,7,F)(7,_n,1,0,"ng-container",22),g(),_(8,"span",40),$(9),g()),t&2){let e=r();h(e.cn(e.cx("overlay"),e.panelStyleClass)),p("ngStyle",e.panelStyle),s(),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),h(e.cx("listContainer")),ue("max-height",e.virtualScroll?"auto":e.scrollHeight),s(),p("ngIf",e.virtualScroll),s(),p("ngIf",!e.virtualScroll),s(3),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),ne(" ",e.selectedMessageText," ")}}var fn=`
    ${Ne}

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
`,yn={root:{position:"relative"}},xn={root:({instance:t})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused&&!t.$disabled()||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.$disabled(),"p-autocomplete-fluid":t.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:t})=>["p-autocomplete-input-multiple",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled"}],chipItem:({instance:t,i:l})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex()===l}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:t})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":t.$variant()==="filled","p-ripple-disabled":t.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:l,i:e,scrollerOptions:n})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(l),"p-focus":t.focusedOptionIndex()===t.getOptionIndex(e,n),"p-disabled":t.isOptionDisabled(l)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},Pe=(()=>{class t extends Y{name="autocomplete";theme=fn;classes=xn;inlineStyles=yn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=K(t)))(i||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var bn={provide:Se,useExisting:re(()=>Ze),multi:!0},Ze=(()=>{class t extends Qe{overlayService;zone;minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;appendTo=D(void 0);completeMethod=new v;onSelect=new v;onUnselect=new v;onFocus=new v;onBlur=new v;onDropdownClick=new v;onClear=new v;onKeyUp=new v;onShow=new v;onHide=new v;onLazyLoad=new v;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}primeng=E(ke);value;_suggestions=G(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=G(-1);focusedOptionIndex=G(-1);_componentStyle=E(Pe);$appendTo=z(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=z(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=z(()=>{let e=this.modelValue(),n=this.optionValueSelected?(this.suggestions||[]).find(i=>L(i,this.optionValue)===e):e;if(H(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(n);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return H(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(Te.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,n){super(),this.overlayService=e,this.zone=n}ngOnInit(){super.ngOnInit(),this.id=this.id||Ie("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let a=this.getOptionGroupChildren(i);return a&&a.forEach(I=>n.push(I)),n},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return le(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?le(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?L(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(n=>oe(n,this.getOptionValue(e),this.equalityKey())):!1:oe(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,n){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===n.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&k(this.inputEL.nativeElement)}handleDropdownClick(e){let n;this.overlayVisible?this.hide(!0):(k(this.inputEL.nativeElement),n=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:n})}onInput(e){if(this.typeahead){let n=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=n?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let n=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL.nativeElement.value||""));i!==void 0&&(n=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}n||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let n=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(we(n.value)&&this.hasSelectedOption()?(k(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:n}=e,i=n.value.length;n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(H(this.modelValue())&&!this.inputEL.nativeElement.value){let n=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:n})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(n)}onArrowRightKeyOnMultiple(e){let n=this.focusedMultipleOptionIndex();n++,this.focusedMultipleOptionIndex.set(n),n>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),k(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,n,i=!0){let o=this.getOptionValue(n);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(n)||this.updateModel([...this.modelValue()||[],o])):this.updateModel(o),this.onSelect.emit({originalEvent:e,value:n}),i&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}search(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:n})))}removeOption(e,n){e.stopPropagation();let i=this.modelValue()[n],o=this.modelValue().filter((a,I)=>I!==n);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i}),k(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.writeModelValue(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=W(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[n],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),e&&k(this.inputEL.nativeElement),e&&k(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let n=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&k(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{n()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}hasSelectedOption(){return H(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}getOptionLabel(e){return this.optionLabel?L(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?L(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?L(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?L(e,this.optionGroupChildren):e.items}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=W(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=W(this.itemsWrapper,".p-autocomplete-item.p-highlight");n&&n.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,n){this.value=e,n(e),this.updateInputValue(),this.cd.markForCheck()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(X(Ce),X(pe))};static \u0275cmp=se({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(n,i,o){if(n&1&&(w(o,Xe,5),w(o,et,5),w(o,tt,5),w(o,nt,5),w(o,it,5),w(o,ot,5),w(o,lt,5),w(o,at,5),w(o,rt,5),w(o,pt,5),w(o,st,5),w(o,Oe,4)),n&2){let a;f(a=y())&&(i.itemTemplate=a.first),f(a=y())&&(i.emptyTemplate=a.first),f(a=y())&&(i.headerTemplate=a.first),f(a=y())&&(i.footerTemplate=a.first),f(a=y())&&(i.selectedItemTemplate=a.first),f(a=y())&&(i.groupTemplate=a.first),f(a=y())&&(i.loaderTemplate=a.first),f(a=y())&&(i.removeIconTemplate=a.first),f(a=y())&&(i.loadingIconTemplate=a.first),f(a=y())&&(i.clearIconTemplate=a.first),f(a=y())&&(i.dropdownIconTemplate=a.first),f(a=y())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(M(ct,5),M(ut,5),M(dt,5),M(mt,5),M(ht,5),M(_t,5),M(gt,5)),n&2){let o;f(o=y())&&(i.inputEL=o.first),f(o=y())&&(i.multiInputEl=o.first),f(o=y())&&(i.multiContainerEL=o.first),f(o=y())&&(i.dropdownButton=o.first),f(o=y())&&(i.itemsViewChild=o.first),f(o=y())&&(i.scroller=o.first),f(o=y())&&(i.overlayViewChild=o.first)}},hostVars:4,hostBindings:function(n,i){n&1&&b("click",function(a){return i.onHostClick(a)}),n&2&&(U(i.sx("root")),h(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",A],minQueryLength:[2,"minQueryLength","minQueryLength",A],delay:[2,"delay","delay",A],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",m],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",m],virtualScroll:[2,"virtualScroll","virtualScroll",m],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",A],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",m],forceSelection:[2,"forceSelection","forceSelection",m],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",m],baseZIndex:[2,"baseZIndex","baseZIndex",A],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",m],group:[2,"group","group",m],completeOnFocus:[2,"completeOnFocus","completeOnFocus",m],showClear:[2,"showClear","showClear",m],dropdown:[2,"dropdown","dropdown",m],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",m],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",m],tabindex:[2,"tabindex","tabindex",A],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",m],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",m],selectOnFocus:[2,"selectOnFocus","selectOnFocus",m],searchLocale:[2,"searchLocale","searchLocale",m],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",m],typeahead:[2,"typeahead","typeahead",m],appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[j([bn,Pe]),P],decls:9,vars:12,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","tabindex"],["role","option",3,"class",4,"ngFor","ngForOf"],["role","option"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle"],[3,"onRemove","label","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","times-circle"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],[3,"class",4,"ngIf"],["data-p-icon","spinner",3,"spin"],["type","button","pRipple","",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(n,i){if(n&1){let o=C();c(0,It,2,30,"input",12)(1,Vt,3,2,"ng-container",13)(2,Dt,6,33,"ul",14)(3,Ht,3,2,"ng-container",13)(4,Ut,4,7,"button",15),_(5,"p-overlay",16,0),he("visibleChange",function(I){return u(o),me(i.overlayVisible,I)||(i.overlayVisible=I),d(I)}),b("onAnimationStart",function(I){return u(o),d(i.onOverlayAnimationStart(I))})("onHide",function(){return u(o),d(i.hide())}),c(7,gn,10,12,"ng-template",null,1,F),g()}n&2&&(p("ngIf",!i.multiple),s(),p("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),s(),p("ngIf",i.multiple),s(),p("ngIf",i.loading),s(),p("ngIf",i.dropdown),s(),p("hostAttrSelector",i.attrSelector),de("visible",i.overlayVisible),p("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions))},dependencies:[ve,ge,fe,ye,be,xe,$e,Ke,De,He,Me,ze,Le,Ae,Be,ae,Fe],encapsulation:2,changeDetection:0})}return t})(),mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=q({imports:[Ze,ae]})}return t})();export{Fn as a,zn as b,Ze as c,mi as d};
