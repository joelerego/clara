(this["webpackJsonphubble-console"]=this["webpackJsonphubble-console"]||[]).push([[10],{1332:function(e,t,a){"use strict";var n=a(34),r=a(0),i=a.n(r),c=a(2),o=a(1303),l=a(12),s=a(1308),d=a(1310),m=a(1309),u=a(76),f=Object(o.a)((function(e){return{appBar:{color:e.palette.primary,background:"white"},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},buttons:{marginLeft:"auto"},action:{textTransform:"none",paddingLeft:16,paddingRight:16},title:{color:e.palette.text.primary,fontWeight:500},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(l.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},actionIcon:{marginRight:4}}}));t.a=function(e){var t=f(),a=e.title,r=e.selectionCount,o=e.actions,l=e.onAction,p=function(e){return function(){return l(e)}},b=i.a.createElement(u.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},a),g=i.a.createElement(u.a,{className:t.title,variant:"subtitle1",component:"div"},r," selected"),h=r>0;return i.a.createElement(s.a,{position:"static",elevation:1,className:t.appBar},i.a.createElement(m.a,{className:Object(c.a)(t.toolbar,Object(n.a)({},t.highlight,h))},h?g:b,i.a.createElement("div",{className:t.buttons},h?o?o.map((function(e){return!e.primary&&i.a.createElement(d.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)})):null:o?i.a.createElement(i.a.Fragment,null,o.map((function(e){return e.primary&&i.a.createElement(d.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)}))):null)))}},1336:function(e,t,a){"use strict";var n=a(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(40)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},1349:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),c=(a(8),a(2)),o=a(108),l=a(7),s=i.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,m=Object(r.a)(e,["classes","className","raised"]);return i.createElement(o.a,Object(n.a)({className:Object(c.a)(a.root,l),elevation:d?8:1,ref:t},m))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1350:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),c=(a(8),a(2)),o=a(7),l=i.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(s,Object(n.a)({className:Object(c.a)(a.root,o),ref:t},d))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1371:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),c=(a(8),a(2)),o=a(7),l=i.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,l=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(n.a)({className:Object(c.a)(l.root,s,!o&&l.spacing),ref:t},d))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(l)},1389:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),c=(a(8),a(2)),o=a(7),l=a(76),s=i.forwardRef((function(e,t){var a=e.action,o=e.avatar,s=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,f=e.disableTypography,p=void 0!==f&&f,b=e.subheader,g=e.subheaderTypographyProps,h=e.title,v=e.titleTypographyProps,y=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=h;null==E||E.type===l.a||p||(E=i.createElement(l.a,Object(n.a)({variant:o?"body2":"h5",className:s.title,component:"span",display:"block"},v),E));var N=b;return null==N||N.type===l.a||p||(N=i.createElement(l.a,Object(n.a)({variant:o?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},g),N)),i.createElement(u,Object(n.a)({className:Object(c.a)(s.root,d),ref:t},y),o&&i.createElement("div",{className:s.avatar},o),i.createElement("div",{className:s.content},E,N),a&&i.createElement("div",{className:s.action},a))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1423:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),c=(a(8),a(2)),o=a(7),l=a(77),s=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=i.forwardRef((function(e,t){var a=e.alt,o=e.children,l=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,f=e.imgProps,p=e.sizes,b=e.src,g=e.srcSet,h=e.variant,v=void 0===h?"circle":h,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,N=function(e){var t=e.src,a=e.srcSet,n=i.useState(!1),r=n[0],c=n[1];return i.useEffect((function(){if(t||a){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),r}({src:b,srcSet:g}),O=b||g,j=O&&"error"!==N;return E=j?i.createElement("img",Object(n.a)({alt:a,src:b,srcSet:g,sizes:p,className:l.img},f)):null!=o?o:O&&a?a[0]:i.createElement(s,{className:l.fallback}),i.createElement(u,Object(n.a)({className:Object(c.a)(l.root,l.system,l[v],d,!j&&l.colorDefault),ref:t},y),E)}));t.a=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},1744:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1318),c=a(76),o=a(1303),l=a(26),s=a(17),d=a(1332),m=a(2),u=a(1349),f=a(1371),p=a(1389),b=a(1350),g=a(1423),h=a(1310),v=a(162),y=a(99),E=a(1336),N=a.n(E),O=Object(o.a)((function(e){return{root:{},avatar:{backgroundColor:y.a[500]},title:{fontWeight:600,fontSize:14},value:{fontSize:15},icon:{display:"inline-block",marginRight:4},button:{color:e.palette.primary.main,marginLeft:"auto"}}})),j={purchase:"Purchase",verify:"Verification",refund:"Refund"},x={cash:"Cash",credit_card:"Credit Card",debit_card:"Debit Card",online:"Online / Netbanking"},T=[{identifier:"action",title:"Action",size:6,render:function(e){return j[e.action]}},{identifier:"paymentMethod",title:"Payment Method",size:6,render:function(e){return x[e.paymentMethod]}},{identifier:"createdOn",title:"Transaction Date",size:6,render:function(e){return e.createdOn}},{identifier:"refundable",title:"Refundable",size:6,render:function(e){return e.refundable?"Yes":"No"}},{identifier:"amount",title:"Amount",size:6,render:function(e){return e.amount+" INR"}},{identifier:"tax",title:"Tax",size:6,render:function(e){return e.tax+" INR"}},{identifier:"total",title:"Total Amount",size:12,render:function(e){return e.amount+e.tax+" INR"}}];var z=function(e){var t=O(),a=e.className,n=e.onEdit;return r.a.createElement(u.a,{className:Object(m.a)(t.root,a)},r.a.createElement(p.a,{avatar:r.a.createElement(g.a,{className:t.avatar},"\u20b9"),title:"Transaction"}),r.a.createElement(b.a,null,r.a.createElement(v.a,{container:!0,spacing:2},T.map((function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{item:!0,lg:a.size},r.a.createElement(c.a,{variant:"subtitle1",color:"textSecondary",className:t.title},a.title),r.a.createElement(c.a,{className:t.value},a.render(e))))})))),r.a.createElement(f.a,null,r.a.createElement(h.a,{className:t.button,onClick:n},r.a.createElement(N.a,{className:t.icon}),"Edit")))},R=a(21),C=Object(o.a)((function(e){return{container:{padding:16},transactionCard:{maxWidth:600},section:{marginBottom:32},sectionTitle:{fontSize:20,marginBottom:16,fontWeight:500},transactions:{},progress:{position:"fixed",top:"50%",left:"50%",marginTop:-24,marginLeft:-24}}}));var k={fetchTransaction:R.y,clearTransaction:R.e,editTransaction:R.o};t.default=Object(l.b)((function(e){return{transaction:e.transaction}}),k)(Object(s.h)((function(e){var t=C(),a=e.fetchTransaction,o=e.clearTransaction,l=e.transaction,m=e.editTransaction,u=Object(s.g)().identifier;return Object(n.useEffect)((function(){return a(u),o}),[u,a,o]),r.a.createElement("div",null,r.a.createElement(d.a,{title:"Transaction"}),!l&&r.a.createElement(i.a,{size:"48px",className:t.progress}),l&&r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.section},r.a.createElement(c.a,{variant:"h2",className:t.sectionTitle},"General"),r.a.createElement(z,{className:t.transactionCard,amount:l.amount,tax:l.tax,action:l.action,paymentMethod:l.paymentMethod,createdOn:l.createdOn,refundable:l.refundable,onEdit:function(){m(l)}}))))})))}}]);
//# sourceMappingURL=10.5876758f.chunk.js.map