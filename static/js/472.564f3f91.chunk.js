"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{6472:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(9439),a=t(1413),c=t(5987),o=t(9007),i=t(2791);var s=function(e,n){var t=(0,i.useRef)(!0);(0,i.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},l=t(7904),u=t(5746),d=t(1683),v=Math.pow(2,31)-1;function f(e,n,t){var r=t-Date.now();e.current=r<=v?setTimeout(n,r):setTimeout((function(){return f(e,n,t)}),v)}var h=t(1691),m=t(1694),p=t.n(m),x=t(8580),b=(0,t(6543).Z)("carousel-caption"),j=t(162),N=t(184),C=["as","bsPrefix","className"],Z=i.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,o=e.bsPrefix,i=e.className,s=(0,c.Z)(e,C),l=p()(i,(0,j.vE)(o,"carousel-item"));return(0,N.jsx)(r,(0,a.Z)((0,a.Z)({ref:n},s),{},{className:l}))}));Z.displayName="CarouselItem";var k=Z;function g(e,n){var t=0;return i.Children.map(e,(function(e){return i.isValidElement(e)?n(e,t++):e}))}var w=t(933),y=t(7202),S=t(4083),I=["defaultActiveIndex"],E=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];var T=i.forwardRef((function(e,n){var t=e.defaultActiveIndex,m=void 0===t?0:t,b=(0,c.Z)(e,I),C=(0,x.Ch)((0,a.Z)({defaultActiveIndex:m},b),{activeIndex:"onSelect"}),Z=C.as,k=void 0===Z?"div":Z,T=C.bsPrefix,M=C.slide,R=void 0===M||M,_=C.fade,L=void 0!==_&&_,D=C.controls,O=void 0===D||D,A=C.indicators,P=void 0===A||A,B=C.indicatorLabels,F=void 0===B?[]:B,K=C.activeIndex,V=C.onSelect,X=C.onSlide,H=C.onSlid,q=C.interval,z=void 0===q?5e3:q,G=C.keyboard,J=void 0===G||G,Q=C.onKeyDown,U=C.pause,W=void 0===U?"hover":U,Y=C.onMouseOver,$=C.onMouseOut,ee=C.wrap,ne=void 0===ee||ee,te=C.touch,re=void 0===te||te,ae=C.onTouchStart,ce=C.onTouchMove,oe=C.onTouchEnd,ie=C.prevIcon,se=void 0===ie?(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}):ie,le=C.prevLabel,ue=void 0===le?"Previous":le,de=C.nextIcon,ve=void 0===de?(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}):de,fe=C.nextLabel,he=void 0===fe?"Next":fe,me=C.variant,pe=C.className,xe=C.children,be=(0,c.Z)(C,E),je=(0,j.vE)(T,"carousel"),Ne=(0,j.SC)(),Ce=(0,i.useRef)(null),Ze=(0,i.useState)("next"),ke=(0,r.Z)(Ze,2),ge=ke[0],we=ke[1],ye=(0,i.useState)(!1),Se=(0,r.Z)(ye,2),Ie=Se[0],Ee=Se[1],Te=(0,i.useState)(!1),Me=(0,r.Z)(Te,2),Re=Me[0],_e=Me[1],Le=(0,i.useState)(K||0),De=(0,r.Z)(Le,2),Oe=De[0],Ae=De[1];(0,i.useEffect)((function(){Re||K===Oe||(Ce.current?we(Ce.current):we((K||0)>Oe?"next":"prev"),R&&_e(!0),Ae(K||0))}),[K,Re,Oe,R]),(0,i.useEffect)((function(){Ce.current&&(Ce.current=null)}));var Pe,Be=0;!function(e,n){var t=0;i.Children.forEach(e,(function(e){i.isValidElement(e)&&n(e,t++)}))}(xe,(function(e,n){++Be,n===K&&(Pe=e.props.interval)}));var Fe=(0,l.Z)(Pe),Ke=(0,i.useCallback)((function(e){if(!Re){var n=Oe-1;if(n<0){if(!ne)return;n=Be-1}Ce.current="prev",null==V||V(n,e)}}),[Re,Oe,V,ne,Be]),Ve=(0,o.Z)((function(e){if(!Re){var n=Oe+1;if(n>=Be){if(!ne)return;n=0}Ce.current="next",null==V||V(n,e)}})),Xe=(0,i.useRef)();(0,i.useImperativeHandle)(n,(function(){return{element:Xe.current,prev:Ke,next:Ve}}));var He=(0,o.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Xe.current)&&(Ne?Ke():Ve())})),qe="next"===ge?"start":"end";s((function(){R||(null==X||X(Oe,qe),null==H||H(Oe,qe))}),[Oe]);var ze="".concat(je,"-item-").concat(ge),Ge="".concat(je,"-item-").concat(qe),Je=(0,i.useCallback)((function(e){(0,y.Z)(e),null==X||X(Oe,qe)}),[X,Oe,qe]),Qe=(0,i.useCallback)((function(){_e(!1),null==H||H(Oe,qe)}),[H,Oe,qe]),Ue=(0,i.useCallback)((function(e){if(J&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Ne?Ve(e):Ke(e));case"ArrowRight":return e.preventDefault(),void(Ne?Ke(e):Ve(e))}null==Q||Q(e)}),[J,Q,Ke,Ve,Ne]),We=(0,i.useCallback)((function(e){"hover"===W&&Ee(!0),null==Y||Y(e)}),[W,Y]),Ye=(0,i.useCallback)((function(e){Ee(!1),null==$||$(e)}),[$]),$e=(0,i.useRef)(0),en=(0,i.useRef)(0),nn=function(){var e=(0,u.Z)(),n=(0,i.useRef)();return(0,d.Z)((function(){return clearTimeout(n.current)})),(0,i.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(t(),a<=v?n.current=setTimeout(r,a):f(n,r,Date.now()+a))},clear:t}}),[])}(),tn=(0,i.useCallback)((function(e){$e.current=e.touches[0].clientX,en.current=0,"hover"===W&&Ee(!0),null==ae||ae(e)}),[W,ae]),rn=(0,i.useCallback)((function(e){e.touches&&e.touches.length>1?en.current=0:en.current=e.touches[0].clientX-$e.current,null==ce||ce(e)}),[ce]),an=(0,i.useCallback)((function(e){if(re){var n=en.current;Math.abs(n)>40&&(n>0?Ke(e):Ve(e))}"hover"===W&&nn.set((function(){Ee(!1)}),z||void 0),null==oe||oe(e)}),[re,W,Ke,Ve,nn,z,oe]),cn=null!=z&&!Ie&&!Re,on=(0,i.useRef)();(0,i.useEffect)((function(){var e,n;if(cn){var t=Ne?Ke:Ve;return on.current=window.setInterval(document.visibilityState?He:t,null!=(e=null!=(n=Fe.current)?n:z)?e:void 0),function(){null!==on.current&&clearInterval(on.current)}}}),[cn,Ke,Ve,Fe,z,He,Ne]);var sn=(0,i.useMemo)((function(){return P&&Array.from({length:Be},(function(e,n){return function(e){null==V||V(n,e)}}))}),[P,Be,V]);return(0,N.jsxs)(k,(0,a.Z)((0,a.Z)({ref:Xe},be),{},{onKeyDown:Ue,onMouseOver:We,onMouseOut:Ye,onTouchStart:tn,onTouchMove:rn,onTouchEnd:an,className:p()(pe,je,R&&"slide",L&&"".concat(je,"-fade"),me&&"".concat(je,"-").concat(me)),children:[P&&(0,N.jsx)("div",{className:"".concat(je,"-indicators"),children:g(xe,(function(e,n){return(0,N.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=F&&F.length?F[n]:"Slide ".concat(n+1),className:n===Oe?"active":void 0,onClick:sn?sn[n]:void 0,"aria-current":n===Oe},n)}))}),(0,N.jsx)("div",{className:"".concat(je,"-inner"),children:g(xe,(function(e,n){var t=n===Oe;return R?(0,N.jsx)(S.Z,{in:t,onEnter:t?Je:void 0,onEntered:t?Qe:void 0,addEndListener:w.Z,children:function(n,r){return i.cloneElement(e,(0,a.Z)((0,a.Z)({},r),{},{className:p()(e.props.className,t&&"entered"!==n&&ze,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&Ge)}))}}):i.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))}),O&&(0,N.jsxs)(N.Fragment,{children:[(ne||0!==K)&&(0,N.jsxs)(h.Z,{className:"".concat(je,"-control-prev"),onClick:Ke,children:[se,ue&&(0,N.jsx)("span",{className:"visually-hidden",children:ue})]}),(ne||K!==Be-1)&&(0,N.jsxs)(h.Z,{className:"".concat(je,"-control-next"),onClick:Ve,children:[ve,he&&(0,N.jsx)("span",{className:"visually-hidden",children:he})]})]})]}))}));T.displayName="Carousel";var M=Object.assign(T,{Caption:b,Item:k}),R=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(M,{children:[(0,N.jsxs)(M.Item,{className:"slider",children:[(0,N.jsx)("img",{className:"b-block w-100",src:"/test-amida/media/slider/slider_picture_3.jpg",alt:"shoes"}),(0,N.jsx)(M.Caption,{children:(0,N.jsx)("h2",{children:" Best brands of sport shoes"})})]}),(0,N.jsxs)(M.Item,{className:"slider",children:[(0,N.jsx)("img",{className:"b-block w-100",src:"/test-amida/media/slider/slider_picture_1.jpg",alt:"shoes"}),(0,N.jsx)(M.Caption,{children:(0,N.jsx)("h2",{children:" Best brands of sport shoes"})})]}),(0,N.jsxs)(M.Item,{className:"slider",children:[(0,N.jsx)("img",{className:"b-block w-100",src:"/test-amida/media/slider/slider_picture_2.jpg",alt:"shoes"}),(0,N.jsx)(M.Caption,{children:(0,N.jsx)("h2",{children:" Best brands of sport shoes"})})]})]})})},_=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(R,{})})}}}]);
//# sourceMappingURL=472.564f3f91.chunk.js.map