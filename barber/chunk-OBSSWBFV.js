import{b as M}from"./chunk-75ZN5KSJ.js";import{Ac as I,D as c,Eb as y,Fb as S,Jd as l,Nb as k,Pd as C,Q as d,Qa as v,R as u,Ra as h,Ta as b,V as f,_a as g,a as o,b as a,j as p,la as m,m as s}from"./chunk-HII2X2KQ.js";var w=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var D={root:{position:"relative"}},F={root:({instance:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},B=(()=>{class t extends C{name="skeleton";theme=w;classes=F;inlineStyles=D;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var z=(()=>{class t extends M{styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=f(B);get containerStyle(){let e=this._componentStyle?.inlineStyles.root,n;return this.size?n=a(o({},e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=a(o({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),n}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=v({type:t,selectors:[["p-skeleton"]],hostVars:7,hostBindings:function(n,i){n&2&&(g("aria-hidden",!0)("data-pc-name","skeleton")("data-pc-section","root"),y(i.containerStyle),S(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[k([B]),b],decls:0,vars:0,template:function(n,i){},dependencies:[I,l],encapsulation:2,changeDetection:0})}return t})(),J=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t});static \u0275inj=u({imports:[z,l,l]})}return t})();var j=class t{mockServices=[{id:1,name:"Corte Masculino",categoryId:1,categoryName:"Corte de Cabelo",durationMinutes:30,price:35,active:!0,barberIds:["1","2"]},{id:2,name:"Barba Completa",categoryId:2,categoryName:"Barba",durationMinutes:20,price:25,active:!0,barberIds:["1"]},{id:3,name:"Corte + Barba",categoryId:1,categoryName:"Corte de Cabelo",durationMinutes:50,price:55,active:!0,barberIds:["1","2","3"]},{id:4,name:"Hidrata\xE7\xE3o Capilar",categoryId:3,categoryName:"Tratamentos",durationMinutes:60,price:80,active:!0,barberIds:["3"]},{id:5,name:"Pigmenta\xE7\xE3o de Barba",categoryId:2,categoryName:"Barba",durationMinutes:45,price:70,active:!1,barberIds:["2"]}];servicesSubject=new p(this.mockServices);getServices(r){let e=[...this.mockServices];if(r){let n=r.toLowerCase();e=e.filter(i=>i.name.toLowerCase().includes(n))}return s(e).pipe(c(300))}getServiceById(r){return s(this.mockServices.find(e=>e.id==r)).pipe(c(300))}createService(r){let e=a(o({},r),{id:Date.now()});return this.mockServices=[e,...this.mockServices],this.servicesSubject.next([...this.mockServices]),s(e).pipe(c(400))}updateService(r,e){let n=this.mockServices.findIndex(i=>i.id==r);return n!==-1&&(this.mockServices[n]=a(o({},e),{id:r}),this.servicesSubject.next([...this.mockServices])),s(this.mockServices[n]).pipe(c(400))}deleteService(r){return this.mockServices=this.mockServices.filter(e=>e.id!=r),this.servicesSubject.next([...this.mockServices]),s(void 0).pipe(c(400))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})};export{z as a,J as b,j as c};
