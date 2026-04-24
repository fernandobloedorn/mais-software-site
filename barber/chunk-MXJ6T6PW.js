import{a as ft,b as ht}from"./chunk-5KLGLRDY.js";import"./chunk-7IQXR4KO.js";import{a as _t,b as Ee}from"./chunk-BXMG2SJV.js";import{a as ct,c as S}from"./chunk-OBNBZ42B.js";import{c as _e,d as N,f as q,h as Z,i as Se,k as De}from"./chunk-4O3FVBGX.js";import{f as We,g as Ge,h as me,i as de,k as Te}from"./chunk-BUXUOBPV.js";import{a as Ue}from"./chunk-5JYI3VGC.js";import{a as nt,b as ae,c as ot,d as rt,e as at,f as st,h as lt,i as Le,m as pt,n as mt,o as dt,p as ut}from"./chunk-6DJVCRYB.js";import{$ as _,$a as Y,$b as ke,$c as re,Aa as l,Bc as H,Cb as A,Fa as M,Fb as E,Fc as pe,Gb as h,Gd as it,Hb as y,Ib as O,Jc as Ie,Jd as j,Kd as L,La as ye,Lb as $e,Lc as Ye,Mb as je,Nb as Ne,Ob as J,P as He,Pb as ee,Q as P,Qa as F,Qb as k,Qd as ue,R as se,Ra as le,Rb as Q,Rc as Xe,Ta as G,U as Pe,Ua as d,Uc as Je,V as D,Wc as et,Xb as $,Zc as oe,_ as u,_a as g,_c as Me,aa as Re,ab as X,cc as qe,db as we,eb as Ce,fb as s,gb as p,ha as U,hb as m,ib as f,kc as I,la as W,lc as te,m as Ae,mb as R,md as tt,nb as z,ob as T,pb as w,qd as Oe,rb as v,sb as a,tb as Be,ub as Qe,vb as C,vc as ce,wb as B,wc as Ze,xa as ve,xb as b,xc as ne,ya as ze,yb as x,yc as Ke,zc as ie}from"./chunk-5H6OL2TO.js";var gt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Mt=["header"],Ot=["footer"],Lt=["content"],St=["closeicon"],Dt=["headless"],Et=["container"],Vt=["closeButton"],Ft=["*"],At=(t,r)=>({transform:t,transition:r}),Ht=t=>({value:"visible",params:t});function Pt(t,r){t&1&&T(0)}function Rt(t,r){if(t&1&&d(0,Pt,1,0,"ng-container",4),t&2){let e=a(2);s("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function zt(t,r){t&1&&T(0)}function Bt(t,r){if(t&1&&(p(0,"div"),y(1),m()),t&2){let e=a(3);h(e.cx("title")),l(),O(e.header)}}function Qt(t,r){t&1&&(Re(),f(0,"svg",11)),t&2&&g("data-pc-section","closeicon")}function $t(t,r){}function jt(t,r){t&1&&d(0,$t,0,0,"ng-template")}function Nt(t,r){if(t&1&&d(0,Qt,1,1,"svg",10)(1,jt,1,0,null,4),t&2){let e=a(4);s("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),l(),s("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function qt(t,r){if(t&1){let e=w();p(0,"p-button",9),v("onClick",function(i){u(e);let o=a(3);return _(o.close(i))})("keydown.enter",function(i){u(e);let o=a(3);return _(o.close(i))}),d(1,Nt,2,2,"ng-template",null,1,$),m()}if(t&2){let e=a(3);s("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),g("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Zt(t,r){t&1&&T(0)}function Kt(t,r){t&1&&T(0)}function Ut(t,r){if(t&1&&(R(0),p(1,"div",5),d(2,Kt,1,0,"ng-container",4),m(),z()),t&2){let e=a(3);l(),s("ngClass",e.cx("footer")),g("data-pc-section","footer"),l(),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Wt(t,r){if(t&1&&(p(0,"div",5),d(1,zt,1,0,"ng-container",4)(2,Bt,2,3,"div",6)(3,qt,3,5,"p-button",7),m(),p(4,"div",5),Qe(5),d(6,Zt,1,0,"ng-container",4),m(),d(7,Ut,3,3,"ng-container",8)),t&2){let e=a(2);s("ngClass",e.cx("header")),g("data-pc-section","header"),l(),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),s("ngIf",e.header),l(),s("ngIf",e.showCloseIcon&&e.closable),l(),s("ngClass",e.cx("content")),g("data-pc-section","content"),l(2),s("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),l(),s("ngIf",e.footerTemplate||e._footerTemplate)}}function Gt(t,r){if(t&1){let e=w();p(0,"div",3,0),v("@panelState.start",function(i){u(e);let o=a();return _(o.onAnimationStart(i))})("@panelState.done",function(i){u(e);let o=a();return _(o.onAnimationEnd(i))})("keydown",function(i){u(e);let o=a();return _(o.onKeyDown(i))}),Y(2,Rt,1,1,"ng-container")(3,Wt,8,9),m()}if(t&2){let e=a();E(e.style),h(e.cn(e.cx("root"),e.styleClass)),s("@panelState",k(11,Ht,Q(8,At,e.transformOptions,e.transitionOptions))),g("data-pc-name","sidebar")("data-pc-section","root"),l(2),X(e.headlessTemplate||e._headlessTemplate?2:3)}}var Yt=`
    ${gt}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,Xt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},bt=(()=>{class t extends ue{name="drawer";theme=Yt;classes=Xt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=W(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Jt=Se([q({transform:"{{transform}}",opacity:0}),N("{{transition}}")]),en=Se([N("{{transition}}",q({transform:"{{transform}}",opacity:0}))]),Fe=(()=>{class t extends ae{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new M;onHide=new M;visibleChange=new M;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=D(bt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&S.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),Oe(this.mask,"style",this.getMaskStyle()),Oe(this.mask,"style",`z-index: ${i}`),Ie(this.mask,this.cx("mask")),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&rt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ye(this.mask,"p-overlay-mask-enter"),Ie(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&at(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),S.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):et(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===S.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&S.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=W(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&(C(o,Mt,4),C(o,Ot,4),C(o,Lt,4),C(o,St,4),C(o,Dt,4),C(o,j,4)),n&2){let c;b(c=x())&&(i.headerTemplate=c.first),b(c=x())&&(i.footerTemplate=c.first),b(c=x())&&(i.contentTemplate=c.first),b(c=x())&&(i.closeIconTemplate=c.first),b(c=x())&&(i.headlessTemplate=c.first),b(c=x())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(B(Et,5),B(Vt,5)),n&2){let o;b(o=x())&&(i.containerViewChild=o.first),b(o=x())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",I],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",te],modal:[2,"modal","modal",I],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",I],showCloseIcon:[2,"showCloseIcon","showCloseIcon",I],closeOnEscape:[2,"closeOnEscape","closeOnEscape",I],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",I]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[J([bt]),G],ngContentSelectors:Ft,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(Be(),d(0,Gt,4,13,"div",2)),n&2&&s("ngIf",i.visible)},dependencies:[H,ce,ne,ie,dt,ct,L],encapsulation:2,data:{animation:[_e("panelState",[Z("void => visible",[De(Jt)]),Z("visible => void",[De(en)])])]},changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Fe,L,L]})}return t})();var yt=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var on=["pMenuItemContent",""],he=t=>({$implicit:t}),rn=()=>({exact:!1}),an=t=>({item:t});function sn(t,r){t&1&&T(0)}function ln(t,r){if(t&1&&(p(0,"a",6),d(1,sn,1,0,"ng-container",7),m()),t&2){let e=a(2),n=A(4);h(e.cx("itemLink")),s("target",e.item.target),g("title",e.item.title)("href",e.item.url||null,ze)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),l(),s("ngTemplateOutlet",n)("ngTemplateOutletContext",k(10,he,e.item))}}function cn(t,r){t&1&&T(0)}function pn(t,r){if(t&1&&(p(0,"a",8),d(1,cn,1,0,"ng-container",7),m()),t&2){let e=a(2),n=A(4);h(e.cx("itemLink")),s("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||ee(18,rn))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),g("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),l(),s("ngTemplateOutlet",n)("ngTemplateOutletContext",k(19,he,e.item))}}function mn(t,r){if(t&1&&(R(0),d(1,ln,2,12,"a",4)(2,pn,2,21,"a",5),z()),t&2){let e=a();l(),s("ngIf",!(e.item!=null&&e.item.routerLink)),l(),s("ngIf",e.item==null?null:e.item.routerLink)}}function dn(t,r){}function un(t,r){t&1&&d(0,dn,0,0,"ng-template")}function _n(t,r){if(t&1&&(R(0),d(1,un,1,0,null,7),z()),t&2){let e=a();l(),s("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",k(2,he,e.item))}}function fn(t,r){if(t&1&&f(0,"span"),t&2){let e=a(2);E(e.item.iconStyle),h(e.cx("itemIcon",k(4,an,e.item)))}}function hn(t,r){if(t&1&&(p(0,"span"),y(1),m()),t&2){let e=a(2);h(e.cx("itemLabel")),l(),O(e.item.label)}}function gn(t,r){if(t&1&&f(0,"span",12),t&2){let e=a(2);s("innerHTML",e.sanitizeHtml(e.item.label),ve)}}function bn(t,r){if(t&1&&f(0,"p-badge",13),t&2){let e=a(2);s("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function xn(t,r){if(t&1&&d(0,fn,1,6,"span",9)(1,hn,2,3,"span",10)(2,gn,1,1,"ng-template",null,1,$)(4,bn,1,2,"p-badge",11),t&2){let e=A(3),n=a();s("ngIf",n.item.icon),l(),s("ngIf",n.item.escape!==!1)("ngIfElse",e),l(3),s("ngIf",n.item.badge)}}var vn=["start"],yn=["end"],wn=["header"],Cn=["item"],kn=["submenuheader"],Tn=["list"],In=["container"],Mn=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),On=t=>({value:"visible",params:t}),wt=(t,r)=>({item:t,id:r});function Ln(t,r){t&1&&T(0)}function Sn(t,r){if(t&1&&(p(0,"div"),d(1,Ln,1,0,"ng-container",8),m()),t&2){let e=a(2);h(e.cx("start")),g("data-pc-section","start"),l(),s("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Dn(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(4);h(e.cx("separator"))}}function En(t,r){if(t&1&&(p(0,"span"),y(1),m()),t&2){let e=a(3).$implicit;l(),O(e.label)}}function Vn(t,r){if(t&1&&f(0,"span",16),t&2){let e=a(3).$implicit,n=a(3);s("innerHTML",n.sanitizeHtml(e.label),ve)}}function Fn(t,r){if(t&1&&(R(0),d(1,En,2,1,"span",15)(2,Vn,1,1,"ng-template",null,2,$),z()),t&2){let e=A(3),n=a(2).$implicit;l(),s("ngIf",n.escape!==!1)("ngIfElse",e)}}function An(t,r){t&1&&T(0)}function Hn(t,r){if(t&1&&(p(0,"li",13),d(1,Fn,4,2,"ng-container",7)(2,An,1,0,"ng-container",14),m()),t&2){let e=a(),n=e.$implicit,i=e.index,o=a(3);h(o.cx("submenuLabel")),s("tooltipOptions",n.tooltipOptions),g("data-automationid",n.automationId)("id",o.menuitemId(n,o.id,i)),l(),s("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),l(),s("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",k(8,he,n))}}function Pn(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(5);h(e.cx("separator"))}}function Rn(t,r){if(t&1){let e=w();p(0,"li",18),v("onMenuItemClick",function(i){u(e);let o=a(),c=o.$implicit,V=o.index,K=a().index,xe=a(3);return _(xe.itemClick(i,xe.menuitemId(c,xe.id,K,V)))}),m()}if(t&2){let e=a(),n=e.$implicit,i=e.index,o=a().index,c=a(3);E(n.style),h(c.cn(c.cx("item",Q(13,wt,n,c.menuitemId(n,c.id,o,i))),n==null?null:n.styleClass)),s("pMenuItemContent",n)("itemTemplate",c.itemTemplate??c._itemTemplate)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",c.label(n.label))("data-p-focused",c.isItemFocused(c.menuitemId(n,c.id,o,i)))("data-p-disabled",c.disabled(n.disabled))("aria-disabled",c.disabled(n.disabled))("id",c.menuitemId(n,c.id,o,i))}}function zn(t,r){if(t&1&&d(0,Pn,1,2,"li",10)(1,Rn,1,16,"li",17),t&2){let e=r.$implicit,n=a().$implicit;s("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),l(),s("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Bn(t,r){if(t&1&&d(0,Dn,1,2,"li",10)(1,Hn,3,10,"li",11)(2,zn,2,2,"ng-template",9),t&2){let e=r.$implicit;s("ngIf",e.separator&&e.visible!==!1),l(),s("ngIf",!e.separator),l(),s("ngForOf",e.items)}}function Qn(t,r){if(t&1&&d(0,Bn,3,3,"ng-template",9),t&2){let e=a(2);s("ngForOf",e.model)}}function $n(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(4);h(e.cx("separator"))}}function jn(t,r){if(t&1){let e=w();p(0,"li",20),v("onMenuItemClick",function(i){u(e);let o=a(),c=o.$implicit,V=o.index,K=a(3);return _(K.itemClick(i,K.menuitemId(c,K.id,V)))}),m()}if(t&2){let e=a(),n=e.$implicit,i=e.index,o=a(3);h(o.cn(o.cx("item",Q(12,wt,n,o.menuitemId(n,o.id,i))),n==null?null:n.styleClass)),s("pMenuItemContent",n)("itemTemplate",o.itemTemplate??o._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",o.label(n.label))("data-p-focused",o.isItemFocused(o.menuitemId(n,o.id,i)))("data-p-disabled",o.disabled(n.disabled))("aria-disabled",o.disabled(n.disabled))("id",o.menuitemId(n,o.id,i))}}function Nn(t,r){if(t&1&&d(0,$n,1,2,"li",10)(1,jn,1,15,"li",19),t&2){let e=r.$implicit;s("ngIf",e.separator&&e.visible!==!1),l(),s("ngIf",!e.separator&&e.visible!==!1)}}function qn(t,r){if(t&1&&d(0,Nn,2,2,"ng-template",9),t&2){let e=a(2);s("ngForOf",e.model)}}function Zn(t,r){t&1&&T(0)}function Kn(t,r){if(t&1&&(p(0,"div"),d(1,Zn,1,0,"ng-container",8),m()),t&2){let e=a(2);h(e.cx("end")),g("data-pc-section","end"),l(),s("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function Un(t,r){if(t&1){let e=w();p(0,"div",4,0),v("click",function(i){u(e);let o=a();return _(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){u(e);let o=a();return _(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){u(e);let o=a();return _(o.onOverlayAnimationEnd(i))}),d(2,Sn,2,4,"div",5),p(3,"ul",6,1),v("focus",function(i){u(e);let o=a();return _(o.onListFocus(i))})("blur",function(i){u(e);let o=a();return _(o.onListBlur(i))})("keydown",function(i){u(e);let o=a();return _(o.onListKeyDown(i))}),d(5,Qn,1,1,null,7)(6,qn,1,1,null,7),m(),d(7,Kn,2,4,"div",5),m()}if(t&2){let e=a();E(e.sx("root")),h(e.cn(e.cx("root"),e.styleClass)),s("ngStyle",e.style)("@overlayAnimation",k(24,On,Q(21,Mn,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),g("data-pc-name","menu")("id",e.id),l(2),s("ngIf",e.startTemplate??e._startTemplate),l(),h(e.cx("list")),g("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),l(2),s("ngIf",e.hasSubMenu()),l(),s("ngIf",!e.hasSubMenu()),l(),s("ngIf",e.endTemplate??e._endTemplate)}}var Wn={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},Gn={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:r,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(r.disabled)},r.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},fe=(()=>{class t extends ue{name="menu";theme=yt;classes=Gn;inlineStyles=Wn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=W(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Yn=(()=>{class t extends ae{item;itemTemplate;onMenuItemClick=new M;menu;_componentStyle=D(fe);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(ye(He(()=>ge)))};static \u0275cmp=F({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[J([fe]),G],attrs:on,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let o=w();p(0,"div",2),v("click",function(V){return u(o),_(i.onItemClick(V,i.item))}),d(1,mn,3,2,"ng-container",3)(2,_n,2,4,"ng-container",3)(3,xn,5,4,"ng-template",null,0,$),m()}n&2&&(h(i.cx("itemContent")),g("data-pc-section","content"),l(),s("ngIf",!i.itemTemplate),l(),s("ngIf",i.itemTemplate))},dependencies:[H,ne,ie,Te,me,de,pt,Ee,Le,lt,L],encapsulation:2})}return t})(),ge=(()=>{class t extends ae{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=qe(void 0);onShow=new M;onHide=new M;onBlur=new M;onFocus=new M;listViewChild;containerViewChild;$appendTo=ke(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ke(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=U(-1);selectedOptionIndex=U(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=D(fe);constructor(e){super(),this.overlayService=e,this.id=this.id||nt("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),re(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&S.clear(e.element);break}}alignOverlay(){this.relativeAlign?Je(this.container,this.target):Xe(this.container,this.target)}appendOverlay(){ot.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&S.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!tt()&&this.hide()}menuitemId(e,n,i,o){return e?.id??`${n}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(re(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)re(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(oe(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=Me(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&Me(n,'a[data-pc-section="action"]');this.popup&&re(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...oe(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...oe(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=oe(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&pe(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),o=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&o&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&pe(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&pe(this.platformId)&&(this.scrollHandler=new st(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&S.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(ye(it))};static \u0275cmp=F({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,o){if(n&1&&(C(o,vn,4),C(o,yn,4),C(o,wn,4),C(o,Cn,4),C(o,kn,4),C(o,j,4)),n&2){let c;b(c=x())&&(i.startTemplate=c.first),b(c=x())&&(i.endTemplate=c.first),b(c=x())&&(i.headerTemplate=c.first),b(c=x())&&(i.itemTemplate=c.first),b(c=x())&&(i.submenuHeaderTemplate=c.first),b(c=x())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(B(Tn,5),B(In,5)),n&2){let o;b(o=x())&&(i.listViewChild=o.first),b(o=x())&&(i.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",I],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",te],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",te],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[J([fe]),G],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&d(0,Un,8,26,"div",3),n&2&&s("ngIf",!i.popup||i.visible)},dependencies:[H,Ze,ne,ie,Ke,Te,Yn,Ee,_t,Le,L],encapsulation:2,data:{animation:[_e("overlayAnimation",[Z(":enter",[q({opacity:0,transform:"scaleY(0.8)"}),N("{{showTransitionParams}}")]),Z(":leave",[N("{{hideTransitionParams}}",q({opacity:0}))])])]},changeDetection:0})}return t})(),Ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[ge,L,L]})}return t})();var be=class t{constructor(r){this.http=r}apiUrl="https://sua-api-php.com/api";login(r){return Ae({success:!0,token:"fake-token"})}logout(){}isAuthenticated(){return!1}static \u0275fac=function(e){return new(e||t)(Pe(Ue))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Jn=()=>({exact:!0}),ei=()=>({width:"90vw",maxWidth:"400px"}),Tt=t=>({exact:t}),It=(t,r)=>r.label;function ti(t,r){t&1&&(p(0,"div",5),f(1,"i",24),p(2,"span",25),y(3,"Menu"),m()())}function ni(t,r){if(t&1){let e=w();p(0,"div",33),v("click",function(){u(e);let i=a(4);return _(i.drawerVisible.set(!1))}),f(1,"i"),p(2,"span",34),y(3),m()()}if(t&2){let e=r.$implicit;s("routerLink",e.route)("routerLinkActiveOptions",k(5,Tt,e.route==="/")),l(),h(e.icon+" mr-3 text-md"),l(2),O(e.label)}}function ii(t,r){if(t&1&&(p(0,"div",32),we(1,ni,4,7,"div",26,It),m()),t&2){let e=a(2).$implicit;l(),Ce(e.items)}}function oi(t,r){if(t&1){let e=w();p(0,"div",28),v("click",function(){u(e);let i=a().$implicit;return _(i.expanded=!i.expanded)}),p(1,"div",29),f(2,"i"),p(3,"span",30),y(4),m()(),f(5,"i",31),m(),Y(6,ii,3,0,"div",32)}if(t&2){let e=a().$implicit;l(2),h(e.icon+" mr-3 text-xl"),l(2),O(e.label),l(),s("ngClass",e.expanded?"pi-chevron-down":"pi-chevron-right"),l(),X(e.expanded?6:-1)}}function ri(t,r){if(t&1){let e=w();p(0,"div",33),v("click",function(){u(e);let i=a(2);return _(i.drawerVisible.set(!1))}),f(1,"i"),p(2,"span",30),y(3),m()()}if(t&2){let e=a().$implicit;s("routerLink",e.route)("routerLinkActiveOptions",k(5,Tt,e.route==="/")),l(),h(e.icon+" mr-3 text-xl"),l(2),O(e.label)}}function ai(t,r){if(t&1){let e=w();p(0,"div",35),v("click",function(){u(e);let i=a().$implicit;return _(i.action())}),f(1,"i"),p(2,"span",30),y(3),m()()}if(t&2){let e=a().$implicit;l(),h(e.icon+" mr-3 text-xl"),l(2),O(e.label)}}function si(t,r){if(t&1&&Y(0,oi,7,5)(1,ri,4,7,"div",26)(2,ai,4,3,"div",27),t&2){let e=r.$implicit;X(e.items?0:e.route?1:2)}}var kt=class t{router=D(Ge);authService=D(be);drawerVisible=U(!1);avatarMenuItems=[];sideMenuItems=[];ngOnInit(){this.avatarMenuItems=[{label:"Meu Perfil",icon:"pi pi-user",command:()=>{}},{separator:!0},{label:"Deslogar",icon:"pi pi-sign-out",command:()=>this.logoff()}],this.sideMenuItems=[{label:"Dashboard",icon:"pi pi-home",route:"/dashboard"},{label:"Agenda",icon:"pi pi-calendar",route:"/schedule"},{label:"Agendamentos",icon:"pi pi-calendar-clock",route:"/appointments"},{label:"Clientes",icon:"pi pi-users",route:"/customers"},{label:"Servi\xE7os  ",icon:"pi pi-briefcase",route:"/services"},{label:"Cadastros",icon:"pi pi-folder",expanded:!1,items:[{label:"Categorias",icon:"pi pi-tags",route:"/categories"},{label:"Formas de pagamento",icon:"pi pi-credit-card",route:"/payment-methods"}]},{label:"Deslogar",icon:"pi pi-sign-out",action:()=>this.logoff()}]}toggleDrawer(){this.drawerVisible.set(!0)}logoff(){this.authService.logout(),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-layout"]],decls:36,vars:9,consts:[["menu",""],[1,"layout-wrapper","flex","flex-column","h-screen"],[1,"top-bar","py-3","px-4","shadow-2","flex","align-items-center","justify-content-between","relative","lg:static",2,"z-index","100"],[1,"flex","align-items-center","gap-3"],["pButton","","icon","pi pi-bars",1,"p-button-text","p-button-rounded","text-white",3,"click"],[1,"flex","align-items-center","gap-2"],[1,"font-medium","text-xl","text-white"],["pButton","","icon","pi pi-user",1,"p-button-text","p-button-rounded","p-button-icon-only","text-white",3,"click"],["appendTo","body",3,"model","popup"],[1,"main-content","flex-grow-1","overflow-y-auto","p-2","relative"],[1,"bottom-bar","flex","justify-content-around","align-items-center","p-2","shadow-up","z-1"],["routerLink","/dashboard","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150",3,"routerLinkActiveOptions"],[1,"pi","pi-home","text-xl","mb-1"],[1,"text-xs","font-medium"],["routerLink","/schedule","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-calendar","text-xl","mb-1"],["routerLink","/customers","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-users","text-xl","mb-1"],[1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-cog","text-xl","mb-1"],[3,"visibleChange","visible","modal"],["pTemplate","header"],[1,"flex","flex-column","gap-2","mt-4"],["acceptLabel","Sim","rejectLabel","N\xE3o","acceptButtonStyleClass","p-button-danger","rejectButtonStyleClass","p-button-text p-button-secondary"],[1,"pi","pi-briefcase","text-2xl",2,"color","#003366"],[1,"font-bold","text-xl","text-white"],["routerLinkActive","active-menu",1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"routerLink","routerLinkActiveOptions"],[1,"menu-item","action-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150"],[1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","justify-content-between","transition-colors","transition-duration-150",3,"click"],[1,"flex","align-items-center"],[1,"font-medium"],[1,"pi",3,"ngClass"],[1,"flex","flex-column","gap-1","pl-4","mt-2"],["routerLinkActive","active-menu",1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"click","routerLink","routerLinkActiveOptions"],[1,"font-medium","text-sm"],[1,"menu-item","action-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"click"]],template:function(e,n){if(e&1){let i=w();p(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4),v("click",function(){return u(i),_(n.toggleDrawer())}),m(),p(4,"div",5)(5,"span",6),y(6,"Admin"),m()()(),p(7,"div")(8,"button",7),v("click",function(c){u(i);let V=A(10);return _(V.toggle(c))}),m(),f(9,"p-menu",8,0),m()(),p(11,"div",9),f(12,"router-outlet"),m(),p(13,"div",10)(14,"a",11),f(15,"i",12),p(16,"span",13),y(17,"Home"),m()(),p(18,"a",14),f(19,"i",15),p(20,"span",13),y(21,"Agenda"),m()(),p(22,"a",16),f(23,"i",17),p(24,"span",13),y(25,"Clientes"),m()(),p(26,"a",18),f(27,"i",19),p(28,"span",13),y(29,"Configura\xE7\xF5es"),m()()(),p(30,"p-drawer",20),Ne("visibleChange",function(c){return u(i),je(n.drawerVisible,c)||(n.drawerVisible=c),_(c)}),d(31,ti,4,0,"ng-template",21),p(32,"div",22),we(33,si,3,1,null,null,It),m()(),f(35,"p-confirmDialog",23),m()}e&2&&(l(9),s("model",n.avatarMenuItems)("popup",!0),l(5),s("routerLinkActiveOptions",ee(7,Jn)),l(16),$e("visible",n.drawerVisible),s("modal",!0),l(3),Ce(n.sideMenuItems),l(2),E(ee(8,ei)))},dependencies:[H,ce,We,me,de,ut,mt,j,vt,Fe,Ct,ge,ht,ft],styles:['@charset "UTF-8";.layout-wrapper[_ngcontent-%COMP%]{background-color:#222;color:#fff}.top-bar[_ngcontent-%COMP%]{background-color:#222;border-bottom:1px solid #333333}.main-content[_ngcontent-%COMP%]{background-color:#fff;color:#1a1a1a}  .p-drawer{background-color:#1a1a1a!important;border-right:1px solid #333333}  .p-drawer .p-drawer-header{background-color:#1a1a1a;border-bottom:1px solid #333333;padding:1.25rem 1.5rem}  .p-drawer .p-drawer-content{background-color:#1a1a1a;padding:1.5rem}.menu-item[_ngcontent-%COMP%]{color:#ccc}.menu-item[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}.menu-item.active-menu[_ngcontent-%COMP%]{background-color:var(--primary-blue);color:#fff}.menu-item.action-item[_ngcontent-%COMP%]{color:var(--accent-red);margin-top:2rem}.menu-item.action-item[_ngcontent-%COMP%]:hover{background-color:#ff6b6b1a}.bottom-bar[_ngcontent-%COMP%]{background-color:#222;border-top:1px solid #333333}.shadow-up[_ngcontent-%COMP%]{box-shadow:0 -4px 10px #0000004d!important}.nav-icon[_ngcontent-%COMP%]{color:#888}.nav-icon[_ngcontent-%COMP%]:hover{color:#ccc}.active-bottom-nav[_ngcontent-%COMP%], .active-bottom-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff!important}']})};export{kt as LayoutComponent};
