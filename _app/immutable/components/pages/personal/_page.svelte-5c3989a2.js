import{S as M,i as R,s as W,k as u,q as C,a as S,l as m,m as g,r as q,h as d,c as T,n as f,I as J,b as Q,C as i,J as K,u as L,B,K as X,w as Y,x as Z,y as x,f as $,t as ee,z as te}from"../../../chunks/index-4ea82ed6.js";import{b as E}from"../../../chunks/paths-b4419565.js";function se(o){let e,n,h,r,t,l,s,c,_,a,P,j,w,b,y,N,I,D,V,U;return{c(){e=u("div"),n=u("h2"),h=C(o[0]),r=S(),t=u("div"),l=u("div"),s=u("button"),c=u("i"),_=S(),a=u("img"),j=S(),w=u("div"),b=u("button"),y=u("i"),N=S(),I=u("p"),D=C(o[1]),this.h()},l(v){e=m(v,"DIV",{class:!0});var p=g(e);n=m(p,"H2",{});var z=g(n);h=q(z,o[0]),z.forEach(d),r=T(p),t=m(p,"DIV",{class:!0});var k=g(t);l=m(k,"DIV",{class:!0});var H=g(l);s=m(H,"BUTTON",{class:!0});var O=g(s);c=m(O,"I",{class:!0}),g(c).forEach(d),O.forEach(d),H.forEach(d),_=T(k),a=m(k,"IMG",{class:!0,src:!0,alt:!0}),j=T(k),w=m(k,"DIV",{class:!0});var A=g(w);b=m(A,"BUTTON",{class:!0});var F=g(b);y=m(F,"I",{class:!0}),g(y).forEach(d),F.forEach(d),A.forEach(d),k.forEach(d),N=T(p),I=m(p,"P",{});var G=g(I);D=q(G,o[1]),G.forEach(d),p.forEach(d),this.h()},h(){f(c,"class","arrow left svelte-sk5du9"),f(s,"class","svelte-sk5du9"),f(l,"class","btn svelte-sk5du9"),f(a,"class","image svelte-sk5du9"),J(a.src,P=o[2])||f(a,"src",P),f(a,"alt","image preview"),f(y,"class","arrow right svelte-sk5du9"),f(b,"class","svelte-sk5du9"),f(w,"class","btn svelte-sk5du9"),f(t,"class","image-container svelte-sk5du9"),f(e,"class","container svelte-sk5du9")},m(v,p){Q(v,e,p),i(e,n),i(n,h),i(e,r),i(e,t),i(t,l),i(l,s),i(s,c),i(t,_),i(t,a),i(t,j),i(t,w),i(w,b),i(b,y),i(e,N),i(e,I),i(I,D),V||(U=[K(s,"click",o[4]),K(b,"click",o[3])],V=!0)},p(v,[p]){p&1&&L(h,v[0]),p&4&&!J(a.src,P=v[2])&&f(a,"src",P),p&2&&L(D,v[1])},i:B,o:B,d(v){v&&d(e),V=!1,X(U)}}}function ae(o,e,n){let{title:h}=e,{imgSet:r}=e,{description:t}=e,l=0,s=r[l];function c(){let a=l+1;a>=r.length?(l=0,n(2,s=r[0])):(l++,n(2,s=r[a]))}function _(){let a=l-1;a<0?(l=r.length-1,n(2,s=r[l])):(l--,n(2,s=r[a]))}return o.$$set=a=>{"title"in a&&n(0,h=a.title),"imgSet"in a&&n(5,r=a.imgSet),"description"in a&&n(1,t=a.description)},[h,t,s,c,_,r]}class ne extends M{constructor(e){super(),R(this,e,ae,se,W,{title:0,imgSet:5,description:1})}}function le(o){let e,n,h,r,t,l;return t=new ne({props:{title:"Space Fighter",imgSet:[o[0],o[1],o[2],o[3],o[4]],description:"A 2D pixel space fighter built by Unity. The player needs to avoid damage by enemies and protect the deck. Whenever the player or deck takes damage, the entire health will drop, and when the health goes down to 0, the game is over. The player can purchase and gear up powerful items in the store. The coin can be dropped by the enemy. The stronger the enemy is, the more coin will be dropped. The boss will show up when the timer on the left goes down to zero. It will be more challenging, but it is a chance to gain more coins."}}),{c(){e=u("div"),n=u("h1"),h=C("Personal Projects"),r=S(),Y(t.$$.fragment)},l(s){e=m(s,"DIV",{});var c=g(e);n=m(c,"H1",{});var _=g(n);h=q(_,"Personal Projects"),_.forEach(d),r=T(c),Z(t.$$.fragment,c),c.forEach(d)},m(s,c){Q(s,e,c),i(e,n),i(n,h),i(e,r),x(t,e,null),l=!0},p:B,i(s){l||($(t.$$.fragment,s),l=!0)},o(s){ee(t.$$.fragment,s),l=!1},d(s){s&&d(e),te(t)}}}function re(o){let e=E+"/imgs/personal/space.png",n=E+"/imgs/personal/space-1.png",h=E+"/imgs/personal/space-2.png",r=E+"/imgs/personal/space-3.png",t=E+"/imgs/personal/space-4.png";return[e,n,h,r,t]}class ce extends M{constructor(e){super(),R(this,e,re,le,W,{})}}export{ce as default};
