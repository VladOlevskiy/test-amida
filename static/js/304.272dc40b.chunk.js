"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{304:function(a,e,r){r.r(e),r.d(e,{default:function(){return A}});var c=r(3360),n=r(1413),s=r(5987),t=r(1694),o=r.n(t),i=r(2791),l=r(162),d=r(6543),m=r(7472),f=r(184),u=["bsPrefix","className","variant","as"],v=i.forwardRef((function(a,e){var r=a.bsPrefix,c=a.className,t=a.variant,i=a.as,d=void 0===i?"img":i,m=(0,s.Z)(a,u),v=(0,l.vE)(r,"card-img");return(0,f.jsx)(d,(0,n.Z)({ref:e,className:o()(t?"".concat(v,"-").concat(t):v,c)},m))}));v.displayName="CardImg";var h=v,x=r(6040),p=["bsPrefix","className","as"],g=i.forwardRef((function(a,e){var r=a.bsPrefix,c=a.className,t=a.as,d=void 0===t?"div":t,m=(0,s.Z)(a,p),u=(0,l.vE)(r,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,f.jsx)(x.Z.Provider,{value:v,children:(0,f.jsx)(d,(0,n.Z)((0,n.Z)({ref:e},m),{},{className:o()(c,u)}))})}));g.displayName="CardHeader";var b=g,Z=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,m.Z)("h5"),j=(0,m.Z)("h6"),y=(0,d.Z)("card-body"),C=(0,d.Z)("card-title",{Component:N}),w=(0,d.Z)("card-subtitle",{Component:j}),P=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),_=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),R=i.forwardRef((function(a,e){var r=a.bsPrefix,c=a.className,t=a.bg,i=a.text,d=a.border,m=a.body,u=void 0!==m&&m,v=a.children,h=a.as,x=void 0===h?"div":h,p=(0,s.Z)(a,Z),g=(0,l.vE)(r,"card");return(0,f.jsx)(x,(0,n.Z)((0,n.Z)({ref:e},p),{},{className:o()(c,g,t&&"bg-".concat(t),i&&"text-".concat(i),d&&"border-".concat(d)),children:u?(0,f.jsx)(y,{children:v}):v}))}));R.displayName="Card";var B=Object.assign(R,{Img:h,Title:C,Subtitle:w,Body:y,Link:P,Text:k,Header:b,Footer:_,ImgOverlay:E}),T=(r(7632),function(a){var e=a.item,r=a.onChange;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(B,{className:"card_item",children:[(0,f.jsx)("div",{className:"card_wrapper_img",children:(0,f.jsx)(B.Img,{className:"img",variant:"top",src:e.image})}),(0,f.jsxs)(B.Body,{className:"card_content",style:{backgroundColor:"rgb(33, 37, 41)"},children:[(0,f.jsxs)(B.Title,{style:{color:"white"},children:["\u0411\u0440\u0435\u043d\u0434 : ",e.name]}),(0,f.jsxs)(B.Title,{style:{color:"white"},children:["\u0426\u0456\u043d\u0430 : ",e.price," \u0433\u0440\u043d"]}),(0,f.jsx)(c.Z,{variant:"outline-light",onClick:function(){return r(e)},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0443"})]})]})})}),I=r(9439),H=["as","bsPrefix","className"],z=["className"];var F=i.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,c=a.className,t=(0,s.Z)(a,H);r=(0,l.vE)(r,"col");var i=(0,l.pi)(),d=(0,l.zG)(),m=[],f=[];return i.forEach((function(a){var e,c,n,s=t[a];delete t[a],"object"===typeof s&&null!=s?(e=s.span,c=s.offset,n=s.order):e=s;var o=a!==d?"-".concat(a):"";e&&m.push(!0===e?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(e)),null!=n&&f.push("order".concat(o,"-").concat(n)),null!=c&&f.push("offset".concat(o,"-").concat(c))})),[(0,n.Z)((0,n.Z)({},t),{},{className:o().apply(void 0,[c].concat(m,f))}),{as:e,bsPrefix:r,spans:m}]}(a),c=(0,I.Z)(r,2),t=c[0],i=t.className,d=(0,s.Z)(t,z),m=c[1],u=m.as,v=void 0===u?"div":u,h=m.bsPrefix,x=m.spans;return(0,f.jsx)(v,(0,n.Z)((0,n.Z)({},d),{},{ref:e,className:o()(i,!x.length&&h)}))}));F.displayName="Col";var G=F,L=["bsPrefix","className","as"],O=i.forwardRef((function(a,e){var r=a.bsPrefix,c=a.className,t=a.as,i=void 0===t?"div":t,d=(0,s.Z)(a,L),m=(0,l.vE)(r,"row"),u=(0,l.pi)(),v=(0,l.zG)(),h="".concat(m,"-cols"),x=[];return u.forEach((function(a){var e,r=d[a];delete d[a],e=null!=r&&"object"===typeof r?r.cols:r;var c=a!==v?"-".concat(a):"";null!=e&&x.push("".concat(h).concat(c,"-").concat(e))})),(0,f.jsx)(i,(0,n.Z)((0,n.Z)({ref:e},d),{},{className:o().apply(void 0,[c,m].concat(x))}))}));O.displayName="Row";var M=O,S=r(7022),q=function(a){var e=a.array,r=a.onChange;return(0,f.jsx)("section",{children:(0,f.jsx)(S.Z,{style:{paddingTop:"2rem",paddingBottom:"2rem",marginRight:"auto",marginLeft:"auto"},children:(0,f.jsx)(M,{children:e.length>0&&e.map((function(a){return(0,f.jsx)(G,{xs:"12",md:"5",lg:"4",style:{marginBottom:"15px"},children:(0,f.jsx)(T,{item:a,onChange:r})},a.id)}))})})})},A=function(a){var e=a.array,r=a.onChange;return(0,f.jsx)("section",{className:"section-shoes",children:(0,f.jsx)(q,{array:e,onChange:r})})}}}]);
//# sourceMappingURL=304.272dc40b.chunk.js.map