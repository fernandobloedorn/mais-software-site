import{a as mt,b as dt}from"./chunk-C2BNJHNG.js";import{a as Ze}from"./chunk-7CAESAMJ.js";import"./chunk-6L6CUOXV.js";import{a as pt,b as De}from"./chunk-JNXKJPXI.js";import{a as rt,d as _e,e as j,g as N,i as q,j as Le,l as Se,r as S}from"./chunk-4XYG2MZK.js";import{f as Ne,g as qe,h as me,i as de,k as ke}from"./chunk-OPWTYHXC.js";import"./chunk-CDEWLH4Q.js";import"./chunk-OIZCPEA5.js";import{$ as _,$a as G,Aa as s,Bb as A,Bd as $,Cd as L,Dc as pe,Eb as E,Ed as ue,Fa as M,Fb as h,Gb as v,Gc as Te,Hb as O,Hc as Ke,Hd as re,Id as et,Jd as tt,Kb as Re,Kd as nt,La as ve,Lb as ze,Lc as Ue,Ld as it,Mb as Be,Nb as X,Nd as ot,Ob as J,Oc as We,Od as Oe,P as Ve,Pb as k,Q as ae,Qa as F,Qb as B,Qc as Ge,R as le,Ra as se,Sd as at,Ta as W,Tc as ie,Td as lt,Ua as d,Uc as Ie,Ud as st,V as D,Vc as oe,Vd as ct,Wb as Q,_ as u,_a as g,_b as Ce,aa as Fe,ab as Y,bc as Qe,db as ye,eb as we,fb as l,fd as Ye,gb as p,ha as K,hb as m,ib as f,ic as I,id as Me,jc as ee,la as U,mb as H,nb as R,ob as T,pb as w,rb as y,sb as a,tb as Pe,tc as ce,td as Xe,ub as He,uc as $e,vb as C,vc as te,wb as z,wc as je,xa as xe,xb as b,xc as ne,ya as Ae,yb as x,yd as Je,zc as P}from"./chunk-7CNXPDOO.js";var ut=`
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
`;var kt=["header"],Tt=["footer"],It=["content"],Mt=["closeicon"],Ot=["headless"],Lt=["container"],St=["closeButton"],Dt=["*"],Et=(t,r)=>({transform:t,transition:r}),Vt=t=>({value:"visible",params:t});function Ft(t,r){t&1&&T(0)}function At(t,r){if(t&1&&d(0,Ft,1,0,"ng-container",4),t&2){let e=a(2);l("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Pt(t,r){t&1&&T(0)}function Ht(t,r){if(t&1&&(p(0,"div"),v(1),m()),t&2){let e=a(3);h(e.cx("title")),s(),O(e.header)}}function Rt(t,r){t&1&&(Fe(),f(0,"svg",11)),t&2&&g("data-pc-section","closeicon")}function zt(t,r){}function Bt(t,r){t&1&&d(0,zt,0,0,"ng-template")}function Qt(t,r){if(t&1&&d(0,Rt,1,1,"svg",10)(1,Bt,1,0,null,4),t&2){let e=a(4);l("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function $t(t,r){if(t&1){let e=w();p(0,"p-button",9),y("onClick",function(i){u(e);let o=a(3);return _(o.close(i))})("keydown.enter",function(i){u(e);let o=a(3);return _(o.close(i))}),d(1,Qt,2,2,"ng-template",null,1,Q),m()}if(t&2){let e=a(3);l("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),g("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function jt(t,r){t&1&&T(0)}function Nt(t,r){t&1&&T(0)}function qt(t,r){if(t&1&&(H(0),p(1,"div",5),d(2,Nt,1,0,"ng-container",4),m(),R()),t&2){let e=a(3);s(),l("ngClass",e.cx("footer")),g("data-pc-section","footer"),s(),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Zt(t,r){if(t&1&&(p(0,"div",5),d(1,Pt,1,0,"ng-container",4)(2,Ht,2,3,"div",6)(3,$t,3,5,"p-button",7),m(),p(4,"div",5),He(5),d(6,jt,1,0,"ng-container",4),m(),d(7,qt,3,3,"ng-container",8)),t&2){let e=a(2);l("ngClass",e.cx("header")),g("data-pc-section","header"),s(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),l("ngIf",e.header),s(),l("ngIf",e.showCloseIcon&&e.closable),s(),l("ngClass",e.cx("content")),g("data-pc-section","content"),s(2),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),s(),l("ngIf",e.footerTemplate||e._footerTemplate)}}function Kt(t,r){if(t&1){let e=w();p(0,"div",3,0),y("@panelState.start",function(i){u(e);let o=a();return _(o.onAnimationStart(i))})("@panelState.done",function(i){u(e);let o=a();return _(o.onAnimationEnd(i))})("keydown",function(i){u(e);let o=a();return _(o.onKeyDown(i))}),G(2,At,1,1,"ng-container")(3,Zt,8,9),m()}if(t&2){let e=a();E(e.style),h(e.cn(e.cx("root"),e.styleClass)),l("@panelState",k(11,Vt,B(8,Et,e.transformOptions,e.transitionOptions))),g("data-pc-name","sidebar")("data-pc-section","root"),s(2),Y(e.headlessTemplate||e._headlessTemplate?2:3)}}var Ut=`
    ${ut}

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
`,Wt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},_t=(()=>{class t extends ue{name="drawer";theme=Ut;classes=Wt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var Gt=Le([N({transform:"{{transform}}",opacity:0}),j("{{transition}}")]),Yt=Le([j("{{transition}}",N({transform:"{{transform}}",opacity:0}))]),Ee=(()=>{class t extends re{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new M;onHide=new M;visibleChange=new M;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=D(_t);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&S.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),Me(this.mask,"style",this.getMaskStyle()),Me(this.mask,"style",`z-index: ${i}`),Te(this.mask,this.cx("mask")),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&tt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ke(this.mask,"p-overlay-mask-enter"),Te(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&nt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),S.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Ge(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===S.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&S.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&(C(o,kt,4),C(o,Tt,4),C(o,It,4),C(o,Mt,4),C(o,Ot,4),C(o,$,4)),n&2){let c;b(c=x())&&(i.headerTemplate=c.first),b(c=x())&&(i.footerTemplate=c.first),b(c=x())&&(i.contentTemplate=c.first),b(c=x())&&(i.closeIconTemplate=c.first),b(c=x())&&(i.headlessTemplate=c.first),b(c=x())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(z(Lt,5),z(St,5)),n&2){let o;b(o=x())&&(i.containerViewChild=o.first),b(o=x())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",I],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",ee],modal:[2,"modal","modal",I],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",I],showCloseIcon:[2,"showCloseIcon","showCloseIcon",I],closeOnEscape:[2,"closeOnEscape","closeOnEscape",I],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",I]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[X([_t]),W],ngContentSelectors:Dt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(Pe(),d(0,Kt,4,13,"div",2)),n&2&&l("ngIf",i.visible)},dependencies:[P,ce,te,ne,st,rt,L],encapsulation:2,data:{animation:[_e("panelState",[q("void => visible",[Se(Gt)]),q("visible => void",[Se(Yt)])])]},changeDetection:0})}return t})(),gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=le({imports:[Ee,L,L]})}return t})();var bt=`
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
`;var en=["pMenuItemContent",""],he=t=>({$implicit:t}),tn=()=>({exact:!1}),nn=t=>({item:t});function on(t,r){t&1&&T(0)}function rn(t,r){if(t&1&&(p(0,"a",6),d(1,on,1,0,"ng-container",7),m()),t&2){let e=a(2),n=A(4);h(e.cx("itemLink")),l("target",e.item.target),g("title",e.item.title)("href",e.item.url||null,Ae)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),s(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",k(10,he,e.item))}}function an(t,r){t&1&&T(0)}function ln(t,r){if(t&1&&(p(0,"a",8),d(1,an,1,0,"ng-container",7),m()),t&2){let e=a(2),n=A(4);h(e.cx("itemLink")),l("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||J(18,tn))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),g("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),s(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",k(19,he,e.item))}}function sn(t,r){if(t&1&&(H(0),d(1,rn,2,12,"a",4)(2,ln,2,21,"a",5),R()),t&2){let e=a();s(),l("ngIf",!(e.item!=null&&e.item.routerLink)),s(),l("ngIf",e.item==null?null:e.item.routerLink)}}function cn(t,r){}function pn(t,r){t&1&&d(0,cn,0,0,"ng-template")}function mn(t,r){if(t&1&&(H(0),d(1,pn,1,0,null,7),R()),t&2){let e=a();s(),l("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",k(2,he,e.item))}}function dn(t,r){if(t&1&&f(0,"span"),t&2){let e=a(2);E(e.item.iconStyle),h(e.cx("itemIcon",k(4,nn,e.item)))}}function un(t,r){if(t&1&&(p(0,"span"),v(1),m()),t&2){let e=a(2);h(e.cx("itemLabel")),s(),O(e.item.label)}}function _n(t,r){if(t&1&&f(0,"span",12),t&2){let e=a(2);l("innerHTML",e.sanitizeHtml(e.item.label),xe)}}function fn(t,r){if(t&1&&f(0,"p-badge",13),t&2){let e=a(2);l("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function hn(t,r){if(t&1&&d(0,dn,1,6,"span",9)(1,un,2,3,"span",10)(2,_n,1,1,"ng-template",null,1,Q)(4,fn,1,2,"p-badge",11),t&2){let e=A(3),n=a();l("ngIf",n.item.icon),s(),l("ngIf",n.item.escape!==!1)("ngIfElse",e),s(3),l("ngIf",n.item.badge)}}var gn=["start"],bn=["end"],xn=["header"],vn=["item"],yn=["submenuheader"],wn=["list"],Cn=["container"],kn=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),Tn=t=>({value:"visible",params:t}),xt=(t,r)=>({item:t,id:r});function In(t,r){t&1&&T(0)}function Mn(t,r){if(t&1&&(p(0,"div"),d(1,In,1,0,"ng-container",8),m()),t&2){let e=a(2);h(e.cx("start")),g("data-pc-section","start"),s(),l("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function On(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(4);h(e.cx("separator"))}}function Ln(t,r){if(t&1&&(p(0,"span"),v(1),m()),t&2){let e=a(3).$implicit;s(),O(e.label)}}function Sn(t,r){if(t&1&&f(0,"span",16),t&2){let e=a(3).$implicit,n=a(3);l("innerHTML",n.sanitizeHtml(e.label),xe)}}function Dn(t,r){if(t&1&&(H(0),d(1,Ln,2,1,"span",15)(2,Sn,1,1,"ng-template",null,2,Q),R()),t&2){let e=A(3),n=a(2).$implicit;s(),l("ngIf",n.escape!==!1)("ngIfElse",e)}}function En(t,r){t&1&&T(0)}function Vn(t,r){if(t&1&&(p(0,"li",13),d(1,Dn,4,2,"ng-container",7)(2,En,1,0,"ng-container",14),m()),t&2){let e=a(),n=e.$implicit,i=e.index,o=a(3);h(o.cx("submenuLabel")),l("tooltipOptions",n.tooltipOptions),g("data-automationid",n.automationId)("id",o.menuitemId(n,o.id,i)),s(),l("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),s(),l("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",k(8,he,n))}}function Fn(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(5);h(e.cx("separator"))}}function An(t,r){if(t&1){let e=w();p(0,"li",18),y("onMenuItemClick",function(i){u(e);let o=a(),c=o.$implicit,V=o.index,Z=a().index,be=a(3);return _(be.itemClick(i,be.menuitemId(c,be.id,Z,V)))}),m()}if(t&2){let e=a(),n=e.$implicit,i=e.index,o=a().index,c=a(3);E(n.style),h(c.cn(c.cx("item",B(13,xt,n,c.menuitemId(n,c.id,o,i))),n==null?null:n.styleClass)),l("pMenuItemContent",n)("itemTemplate",c.itemTemplate??c._itemTemplate)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",c.label(n.label))("data-p-focused",c.isItemFocused(c.menuitemId(n,c.id,o,i)))("data-p-disabled",c.disabled(n.disabled))("aria-disabled",c.disabled(n.disabled))("id",c.menuitemId(n,c.id,o,i))}}function Pn(t,r){if(t&1&&d(0,Fn,1,2,"li",10)(1,An,1,16,"li",17),t&2){let e=r.$implicit,n=a().$implicit;l("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),s(),l("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Hn(t,r){if(t&1&&d(0,On,1,2,"li",10)(1,Vn,3,10,"li",11)(2,Pn,2,2,"ng-template",9),t&2){let e=r.$implicit;l("ngIf",e.separator&&e.visible!==!1),s(),l("ngIf",!e.separator),s(),l("ngForOf",e.items)}}function Rn(t,r){if(t&1&&d(0,Hn,3,3,"ng-template",9),t&2){let e=a(2);l("ngForOf",e.model)}}function zn(t,r){if(t&1&&f(0,"li",12),t&2){let e=a(4);h(e.cx("separator"))}}function Bn(t,r){if(t&1){let e=w();p(0,"li",20),y("onMenuItemClick",function(i){u(e);let o=a(),c=o.$implicit,V=o.index,Z=a(3);return _(Z.itemClick(i,Z.menuitemId(c,Z.id,V)))}),m()}if(t&2){let e=a(),n=e.$implicit,i=e.index,o=a(3);h(o.cn(o.cx("item",B(12,xt,n,o.menuitemId(n,o.id,i))),n==null?null:n.styleClass)),l("pMenuItemContent",n)("itemTemplate",o.itemTemplate??o._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",o.label(n.label))("data-p-focused",o.isItemFocused(o.menuitemId(n,o.id,i)))("data-p-disabled",o.disabled(n.disabled))("aria-disabled",o.disabled(n.disabled))("id",o.menuitemId(n,o.id,i))}}function Qn(t,r){if(t&1&&d(0,zn,1,2,"li",10)(1,Bn,1,15,"li",19),t&2){let e=r.$implicit;l("ngIf",e.separator&&e.visible!==!1),s(),l("ngIf",!e.separator&&e.visible!==!1)}}function $n(t,r){if(t&1&&d(0,Qn,2,2,"ng-template",9),t&2){let e=a(2);l("ngForOf",e.model)}}function jn(t,r){t&1&&T(0)}function Nn(t,r){if(t&1&&(p(0,"div"),d(1,jn,1,0,"ng-container",8),m()),t&2){let e=a(2);h(e.cx("end")),g("data-pc-section","end"),s(),l("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function qn(t,r){if(t&1){let e=w();p(0,"div",4,0),y("click",function(i){u(e);let o=a();return _(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){u(e);let o=a();return _(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){u(e);let o=a();return _(o.onOverlayAnimationEnd(i))}),d(2,Mn,2,4,"div",5),p(3,"ul",6,1),y("focus",function(i){u(e);let o=a();return _(o.onListFocus(i))})("blur",function(i){u(e);let o=a();return _(o.onListBlur(i))})("keydown",function(i){u(e);let o=a();return _(o.onListKeyDown(i))}),d(5,Rn,1,1,null,7)(6,$n,1,1,null,7),m(),d(7,Nn,2,4,"div",5),m()}if(t&2){let e=a();E(e.sx("root")),h(e.cn(e.cx("root"),e.styleClass)),l("ngStyle",e.style)("@overlayAnimation",k(24,Tn,B(21,kn,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),g("data-pc-name","menu")("id",e.id),s(2),l("ngIf",e.startTemplate??e._startTemplate),s(),h(e.cx("list")),g("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),s(2),l("ngIf",e.hasSubMenu()),s(),l("ngIf",!e.hasSubMenu()),s(),l("ngIf",e.endTemplate??e._endTemplate)}}var Zn={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},Kn={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:r,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(r.disabled)},r.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},fe=(()=>{class t extends ue{name="menu";theme=bt;classes=Kn;inlineStyles=Zn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var Un=(()=>{class t extends re{item;itemTemplate;onMenuItemClick=new M;menu;_componentStyle=D(fe);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(ve(Ve(()=>ge)))};static \u0275cmp=F({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[X([fe]),W],attrs:en,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let o=w();p(0,"div",2),y("click",function(V){return u(o),_(i.onItemClick(V,i.item))}),d(1,sn,3,2,"ng-container",3)(2,mn,2,4,"ng-container",3)(3,hn,5,4,"ng-template",null,0,Q),m()}n&2&&(h(i.cx("itemContent")),g("data-pc-section","content"),s(),l("ngIf",!i.itemTemplate),s(),l("ngIf",i.itemTemplate))},dependencies:[P,te,ne,ke,me,de,at,De,Oe,ot,L],encapsulation:2})}return t})(),ge=(()=>{class t extends re{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=Qe(void 0);onShow=new M;onHide=new M;onBlur=new M;onFocus=new M;listViewChild;containerViewChild;$appendTo=Ce(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=Ce(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=K(-1);selectedOptionIndex=K(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=D(fe);constructor(e){super(),this.overlayService=e,this.id=this.id||Xe("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),oe(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&S.clear(e.element);break}}alignOverlay(){this.relativeAlign?We(this.container,this.target):Ue(this.container,this.target)}appendOverlay(){et.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&S.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Ye()&&this.hide()}menuitemId(e,n,i,o){return e?.id??`${n}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(oe(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)oe(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ie(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=Ie(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&Ie(n,'a[data-pc-section="action"]');this.popup&&oe(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...ie(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...ie(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=ie(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&pe(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),o=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&o&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&pe(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&pe(this.platformId)&&(this.scrollHandler=new it(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&S.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(ve(Je))};static \u0275cmp=F({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,o){if(n&1&&(C(o,gn,4),C(o,bn,4),C(o,xn,4),C(o,vn,4),C(o,yn,4),C(o,$,4)),n&2){let c;b(c=x())&&(i.startTemplate=c.first),b(c=x())&&(i.endTemplate=c.first),b(c=x())&&(i.headerTemplate=c.first),b(c=x())&&(i.itemTemplate=c.first),b(c=x())&&(i.submenuHeaderTemplate=c.first),b(c=x())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(z(wn,5),z(Cn,5)),n&2){let o;b(o=x())&&(i.listViewChild=o.first),b(o=x())&&(i.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",I],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",ee],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",ee],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[X([fe]),W],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,i){n&1&&d(0,qn,8,26,"div",3),n&2&&l("ngIf",!i.popup||i.visible)},dependencies:[P,$e,te,ne,je,ke,Un,De,pt,Oe,L],encapsulation:2,data:{animation:[_e("overlayAnimation",[q(":enter",[N({opacity:0,transform:"scaleY(0.8)"}),j("{{showTransitionParams}}")]),q(":leave",[j("{{hideTransitionParams}}",N({opacity:0}))])])]},changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=le({imports:[ge,L,L]})}return t})();var Gn=()=>({exact:!0}),Yn=()=>({width:"90vw",maxWidth:"400px"}),wt=t=>({exact:t}),Ct=(t,r)=>r.label;function Xn(t,r){t&1&&(p(0,"div",5),f(1,"i",25),p(2,"span",26),v(3,"Menu"),m()())}function Jn(t,r){if(t&1){let e=w();p(0,"div",34),y("click",function(){u(e);let i=a(4);return _(i.drawerVisible.set(!1))}),f(1,"i"),p(2,"span",35),v(3),m()()}if(t&2){let e=r.$implicit;l("routerLink",e.route)("routerLinkActiveOptions",k(5,wt,e.route==="/")),s(),h(e.icon+" mr-3 text-md"),s(2),O(e.label)}}function ei(t,r){if(t&1&&(p(0,"div",33),ye(1,Jn,4,7,"div",27,Ct),m()),t&2){let e=a(2).$implicit;s(),we(e.items)}}function ti(t,r){if(t&1){let e=w();p(0,"div",29),y("click",function(){u(e);let i=a().$implicit;return _(i.expanded=!i.expanded)}),p(1,"div",30),f(2,"i"),p(3,"span",31),v(4),m()(),f(5,"i",32),m(),G(6,ei,3,0,"div",33)}if(t&2){let e=a().$implicit;s(2),h(e.icon+" mr-3 text-xl"),s(2),O(e.label),s(),l("ngClass",e.expanded?"pi-chevron-down":"pi-chevron-right"),s(),Y(e.expanded?6:-1)}}function ni(t,r){if(t&1){let e=w();p(0,"div",34),y("click",function(){u(e);let i=a(2);return _(i.drawerVisible.set(!1))}),f(1,"i"),p(2,"span",31),v(3),m()()}if(t&2){let e=a().$implicit;l("routerLink",e.route)("routerLinkActiveOptions",k(5,wt,e.route==="/")),s(),h(e.icon+" mr-3 text-xl"),s(2),O(e.label)}}function ii(t,r){if(t&1){let e=w();p(0,"div",36),y("click",function(){u(e);let i=a().$implicit;return _(i.action())}),f(1,"i"),p(2,"span",31),v(3),m()()}if(t&2){let e=a().$implicit;s(),h(e.icon+" mr-3 text-xl"),s(2),O(e.label)}}function oi(t,r){if(t&1&&G(0,ti,7,5)(1,ni,4,7,"div",27)(2,ii,4,3,"div",28),t&2){let e=r.$implicit;Y(e.items?0:e.route?1:2)}}var yt=class t{router=D(qe);authService=D(Ze);drawerVisible=K(!1);avatarMenuItems=[];sideMenuItems=[];ngOnInit(){this.avatarMenuItems=[{label:"Meu Perfil",icon:"pi pi-user",command:()=>{}},{separator:!0},{label:"Deslogar",icon:"pi pi-sign-out",command:()=>this.logoff()}],this.sideMenuItems=[{label:"Dashboard",icon:"pi pi-home",route:"/dashboard"},{label:"Agenda",icon:"pi pi-calendar",route:"/schedule"},{label:"Atendimentos",icon:"pi pi-calendar-clock",route:"/appointments"},{label:"Clientes",icon:"pi pi-users",route:"/customers"},{label:"Servi\xE7os  ",icon:"pi pi-briefcase",route:"/services"},{label:"Cadastros",icon:"pi pi-folder",expanded:!1,items:[{label:"Categorias",icon:"pi pi-tags",route:"/categories"},{label:"Formas de pagamento",icon:"pi pi-credit-card",route:"/payment-methods"},{label:"Profissionais",icon:"pi pi-id-card",route:"/professionals"}]},{label:"Relat\xF3rios",icon:"pi pi-chart-bar",expanded:!1,items:[{label:"Financeiro",icon:"pi pi-dollar"},{label:"Agendamentos",icon:"pi pi-calendar-clock"},{label:"Clientes",icon:"pi pi-users"}]},{label:"Configura\xE7\xF5es",icon:"pi pi-cog",route:"/company-settings"},{label:"Deslogar",icon:"pi pi-sign-out",action:()=>this.logoff()}]}toggleDrawer(){this.drawerVisible.set(!0)}logoff(){this.authService.logout(),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-layout"]],decls:38,vars:9,consts:[["menu",""],[1,"layout-wrapper","flex","flex-column","h-screen"],[1,"top-bar","py-3","px-4","shadow-2","flex","align-items-center","justify-content-between","relative","lg:static",2,"z-index","100"],[1,"flex","align-items-center","gap-3"],["pButton","","icon","pi pi-bars",1,"p-button-text","p-button-rounded","text-white",3,"click"],[1,"flex","align-items-center","gap-2"],[1,"font-medium","text-xl","text-white"],[1,"text-white",2,"font-size","0.5rem"],["pButton","","icon","pi pi-user",1,"p-button-text","p-button-rounded","p-button-icon-only","text-white",3,"click"],["appendTo","body",3,"model","popup"],[1,"main-content","flex-grow-1","overflow-y-auto","p-2","relative"],[1,"bottom-bar","flex","justify-content-around","align-items-center","p-2","shadow-up","z-1"],["routerLink","/dashboard","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150",3,"routerLinkActiveOptions"],[1,"pi","pi-home","text-xl","mb-1"],[1,"text-xs","font-medium"],["routerLink","/schedule","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-calendar","text-xl","mb-1"],["routerLink","/appointments","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-calendar-clock","text-xl","mb-1"],["routerLink","/customers","routerLinkActive","active-bottom-nav",1,"nav-icon","flex","flex-column","align-items-center","p-2","cursor-pointer","no-underline","transition-colors","transition-duration-150"],[1,"pi","pi-users","text-xl","mb-1"],[3,"visibleChange","visible","modal"],["pTemplate","header"],[1,"flex","flex-column","gap-2","mt-4"],["acceptLabel","Sim","rejectLabel","N\xE3o","acceptButtonStyleClass","p-button-danger","rejectButtonStyleClass","p-button-text p-button-secondary"],[1,"pi","pi-briefcase","text-2xl",2,"color","#003366"],[1,"font-bold","text-xl","text-white"],["routerLinkActive","active-menu",1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"routerLink","routerLinkActiveOptions"],[1,"menu-item","action-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150"],[1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","justify-content-between","transition-colors","transition-duration-150",3,"click"],[1,"flex","align-items-center"],[1,"font-medium"],[1,"pi",3,"ngClass"],[1,"flex","flex-column","gap-1","pl-4","mt-2"],["routerLinkActive","active-menu",1,"menu-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"click","routerLink","routerLinkActiveOptions"],[1,"font-medium","text-sm"],[1,"menu-item","action-item","p-3","border-round","cursor-pointer","flex","align-items-center","transition-colors","transition-duration-150",3,"click"]],template:function(e,n){if(e&1){let i=w();p(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4),y("click",function(){return u(i),_(n.toggleDrawer())}),m(),p(4,"div",5)(5,"span",6),v(6,"Admin"),m(),p(7,"span",7),v(8,"v.1"),m()()(),p(9,"div")(10,"button",8),y("click",function(c){u(i);let V=A(12);return _(V.toggle(c))}),m(),f(11,"p-menu",9,0),m()(),p(13,"div",10),f(14,"router-outlet"),m(),p(15,"div",11)(16,"a",12),f(17,"i",13),p(18,"span",14),v(19,"Home"),m()(),p(20,"a",15),f(21,"i",16),p(22,"span",14),v(23,"Agenda"),m()(),p(24,"a",17),f(25,"i",18),p(26,"span",14),v(27,"Atendimentos"),m()(),p(28,"a",19),f(29,"i",20),p(30,"span",14),v(31,"Clientes"),m()()(),p(32,"p-drawer",21),Be("visibleChange",function(c){return u(i),ze(n.drawerVisible,c)||(n.drawerVisible=c),_(c)}),d(33,Xn,4,0,"ng-template",22),p(34,"div",23),ye(35,oi,3,1,null,null,Ct),m()(),f(37,"p-confirmDialog",24),m()}e&2&&(s(11),l("model",n.avatarMenuItems)("popup",!0),s(5),l("routerLinkActiveOptions",J(7,Gn)),s(16),Re("visible",n.drawerVisible),l("modal",!0),s(3),we(n.sideMenuItems),s(2),E(J(8,Yn)))},dependencies:[P,ce,Ne,me,de,ct,lt,$,gt,Ee,vt,ge,dt,mt],styles:['@charset "UTF-8";.layout-wrapper[_ngcontent-%COMP%]{background-color:#222;color:#fff}.top-bar[_ngcontent-%COMP%]{background-color:#222;border-bottom:1px solid #333333}.main-content[_ngcontent-%COMP%]{background-color:#fff;color:#1a1a1a}  .p-drawer{background-color:#1a1a1a!important;border-right:1px solid #333333}  .p-drawer .p-drawer-header{background-color:#1a1a1a;border-bottom:1px solid #333333;padding:1.25rem 1.5rem}  .p-drawer .p-drawer-content{background-color:#1a1a1a;padding:1.5rem}.menu-item[_ngcontent-%COMP%]{color:#ccc}.menu-item[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}.menu-item.active-menu[_ngcontent-%COMP%]{background-color:var(--primary-blue);color:#fff}.menu-item.action-item[_ngcontent-%COMP%]{margin-top:2rem}.menu-item.action-item[_ngcontent-%COMP%]:hover{background-color:#ff6b6b1a}.bottom-bar[_ngcontent-%COMP%]{background-color:#222;border-top:1px solid #333333}.shadow-up[_ngcontent-%COMP%]{box-shadow:0 -4px 10px #0000004d!important}.nav-icon[_ngcontent-%COMP%]{color:#888}.nav-icon[_ngcontent-%COMP%]:hover{color:#ccc}.active-bottom-nav[_ngcontent-%COMP%], .active-bottom-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff!important}']})};export{yt as LayoutComponent};
