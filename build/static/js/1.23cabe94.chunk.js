(this["webpackJsonphubble-console"]=this["webpackJsonphubble-console"]||[]).push([[1],{1332:function(e,t,n){"use strict";var r=n(34),a=n(0),i=n.n(a),o=n(2),c=n(1303),l=n(12),u=n(1308),s=n(1310),f=n(1309),d=n(76),m=Object(c.a)((function(e){return{appBar:{color:e.palette.primary,background:"white"},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},buttons:{marginLeft:"auto"},action:{textTransform:"none",paddingLeft:16,paddingRight:16},title:{color:e.palette.text.primary,fontWeight:500},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(l.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},actionIcon:{marginRight:4}}}));t.a=function(e){var t=m(),n=e.title,a=e.selectionCount,c=e.actions,l=e.onAction,p=function(e){return function(){return l(e)}},g=i.a.createElement(d.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},n),y=i.a.createElement(d.a,{className:t.title,variant:"subtitle1",component:"div"},a," selected"),v=a>0;return i.a.createElement(u.a,{position:"static",elevation:1,className:t.appBar},i.a.createElement(f.a,{className:Object(o.a)(t.toolbar,Object(r.a)({},t.highlight,v))},v?y:g,i.a.createElement("div",{className:t.buttons},v?c?c.map((function(e){return!e.primary&&i.a.createElement(s.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)})):null:c?i.a.createElement(i.a.Fragment,null,c.map((function(e){return e.primary&&i.a.createElement(s.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)}))):null)))}},1343:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return E}));var r=n(0),a=n.n(r),i=n(109),o=n(114),c=n(112),l=n(110),u=n(76),s=n(108),f=n(162),d=n(1310),m=n(1303),p=n(139),g=n(111),y=n(25),v=Object(m.a)((function(e){return{root:{padding:16,marginLeft:16},title:{fontSize:16,marginBottom:24},clear:{display:"block",marginLeft:"auto",marginTop:16},datePicker:{marginTop:e.spacing(3),marginBottom:0}}}));function h(e,t){console.log(t);var n={};return e.forEach((function(e){"time_range"===e.type?(n[e.identifier]=t[e.identifier].option,"custom"===t[e.identifier].option&&(n[e.startIdentifier]=t[e.identifier].startDate.getTime(),n[e.endIdentifier]=t[e.identifier].endDate.getTime())):n[e.identifier]=t[e.identifier]})),console.log(n),n}function b(e,t){var n={};return e.forEach((function(e){"time_range"===e.type?(n[e.identifier]={},e.identifier in t?n[e.identifier].option=t[e.identifier]:n[e.identifier].option=e.defaultValue.option,e.startIdentifier in t?n[e.identifier].startDate=t[e.startIdentifier]:n[e.identifier].startDate=e.defaultValue.startDate,e.endIdentifier in t?n[e.identifier].endDate=t[e.endIdentifier]:n[e.identifier].endDate=e.defaultValue.endDate):e.identifier in t?n[e.identifier]=t[e.identifier]:n[e.identifier]=e.defaultValue})),n}function E(e){var t=e.fields,n=e.values,r=e.onValueChange,m=e.onClear,h=v(),b=function(e){return function(t){r(e,t.target.value)}},E=function(e){return function(t){var a=Object.assign({},n[e]);a.option=t.target.value,r(e,a)}},j=function(e,t){return function(a){var i=Object.assign({},n[e.identifier]);i[t]=a,r(e.identifier,i)}};return a.a.createElement(y.a,{utils:p.a},a.a.createElement(s.a,{className:h.root},a.a.createElement(u.a,{className:h.title,variant:"h6"},"Filters"),a.a.createElement(f.a,{container:!0,spacing:3},t.map((function(e){return a.a.createElement(f.a,{item:!0,lg:12},"select"===e.type&&function(e,t){return a.a.createElement(i.a,{variant:"outlined",className:h.control,fullWidth:!0},a.a.createElement(o.a,{id:e.identifier},e.title),a.a.createElement(c.a,{labelId:e.identifier,value:t,onChange:b(e.identifier),label:e.title},e.options.map((function(e){return a.a.createElement(l.a,{value:e.value},e.title)}))))}(e,n[e.identifier]),"time_range"===e.type&&function(e,t){return a.a.createElement("div",null,a.a.createElement(i.a,{variant:"outlined",className:h.control,fullWidth:!0},a.a.createElement(o.a,{id:e.identifier},e.title),a.a.createElement(c.a,{labelId:e.identifier,value:t.option,onChange:E(e.identifier),label:e.title},e.options.map((function(e){return a.a.createElement(l.a,{value:e.value},e.title)})))),"custom"===t.option&&a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{margin:"normal",id:e.identifier+"Start",label:e.startTitle,format:"MM/dd/yyyy",inputVariant:"outlined",fullWidth:!0,value:null===t.startDate?new Date:new Date(t.startDate),onChange:j(e,"startDate"),className:h.datePicker}),a.a.createElement(g.a,{margin:"normal",id:e.identifier+"End",label:e.endTitle,format:"MM/dd/yyyy",inputVariant:"outlined",fullWidth:!0,value:null===t.endDate?new Date:new Date(t.endDate),onChange:j(e,"endDate"),className:h.datePicker})))}(e,n[e.identifier]))}))),a.a.createElement(d.a,{size:"small",color:"secondary",variant:"text",className:h.clear,onClick:m},"Clear")))}},1356:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(53),a=n(0),i=n.n(a),o=n(1303),c=n(1517),l=n(1518),u=n(1515),s=n(1516),f=n(1740),d=n(1514),m=n(108),p=n(1739),g=n(1513),y=n(1742);function v(e){var t=e.classes,n=e.onSelectAll,r=e.order,a=e.orderBy,o=e.selectionCount,c=e.rowCount,l=e.onRequestSort,s=e.headers;return i.a.createElement(g.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,{padding:"checkbox"},i.a.createElement(p.a,{indeterminate:o>0&&o<c,checked:c>0&&o===c,onChange:n})),s.map((function(e){return i.a.createElement(u.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&r},i.a.createElement(y.a,{active:a===e.id,direction:a===e.id?r:"asc",onClick:(n=e.id,function(e){l(e,n)})},e.label,a===e.id?i.a.createElement("span",{className:t.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null));var n}))))}function h(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var b=Object(o.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function E(e){var t=b(),n=e.onSelected,a=e.rows,o=e.headers,g=e.selected,y=e.compact,E=e.onClick,j=e.renderCellValue,x=i.a.useState("asc"),w=Object(r.a)(x,2),k=w[0],O=w[1],C=i.a.useState("calories"),S=Object(r.a)(C,2),N=S[0],I=S[1],F=i.a.useState(0),A=Object(r.a)(F,2),D=A[0],P=A[1],R=i.a.useState(e.rowsPerPage),T=Object(r.a)(R,2),U=T[0],B=T[1],L=function(e){return function(t){var r=g.indexOf(e),a=[];-1===r?a=a.concat(g,e):0===r?a=a.concat(g.slice(1)):r===g.length-1?a=a.concat(g.slice(0,-1)):r>0&&(a=a.concat(g.slice(0,r),g.slice(r+1))),n(a)}},M=function(e,t){return function(){E(e)}},V=U-Math.min(U,a.length-D*U);return i.a.createElement("div",{className:t.root},i.a.createElement(m.a,{className:t.paper},i.a.createElement(s.a,null,i.a.createElement(c.a,{className:t.table,size:y?"small":"medium"},i.a.createElement(v,{classes:t,selectionCount:g.length,order:k,orderBy:N,onSelectAll:function(e){if(e.target.checked){var t=a.map((function(e){return e.identifier}));n(t)}else n([])},onRequestSort:function(e,t){O(N===t&&"asc"===k?"desc":"asc"),I(t)},rowCount:a.length,headers:o}),i.a.createElement(l.a,null,function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}(a,function(e,t){return"desc"===e?function(e,n){return h(e,n,t)}:function(e,n){return-h(e,n,t)}}(k,N)).slice(D*U,D*U+U).map((function(e,t){var n,r=(n=e.identifier,-1!==g.indexOf(n));return i.a.createElement(d.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.identifier,selected:r},i.a.createElement(u.a,{padding:"checkbox"},i.a.createElement(p.a,{checked:r,onChange:L(e.identifier)})),function(e,t){return i.a.createElement(i.a.Fragment,null,o.map((function(n,r){return i.a.createElement(u.a,{onClick:M(e)},j(e,t,n,r))})))}(e,t))})),V>0&&i.a.createElement(d.a,{style:{height:(y?33:53)*V}},i.a.createElement(u.a,{colSpan:6}))))),i.a.createElement(f.a,{rowsPerPageOptions:[10,20,30,40,50],component:"div",count:a.length,rowsPerPage:U,page:D,onChangePage:function(e,t){P(t)},onChangeRowsPerPage:function(e){B(parseInt(e.target.value,10)),P(0)}})))}E.defaultProps={rowsPerPage:15}},1372:function(e,t,n){"use strict";var r=n(1519),a=n(1523),i=n(1524),o=n(1528),c=n(1529),l=n(1530);function u(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function f(e,t){return t.decode?c(e):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var a="string"===typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),i=Object.create(null);if("string"!==typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;var o,c=a(e.split("&"));try{for(c.s();!(o=c.n()).done;){var s=o.value,d=l(t.decode?s.replace(/\+/g," "):s,"="),m=r(d,2),g=m[0],y=m[1];y=void 0===y?null:["comma","separator"].includes(t.arrayFormat)?y:f(y,t),n(f(g,t),y,i)}}catch(k){c.e(k)}finally{c.f()}for(var v=0,h=Object.keys(i);v<h.length;v++){var b=h[v],E=i[b];if("object"===typeof E&&null!==E)for(var j=0,x=Object.keys(E);j<x.length;j++){var w=x[j];E[w]=p(E[w],t)}else i[b]=p(E,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((function(e,t){var n=i[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=m,t.parse=g,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[s(t,e),"[",a,"]"].join("")]:[[s(t,e),"[",s(a,e),"]=",s(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[s(t,e),"[]"].join("")]:[[s(t,e),"[]=",s(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[s(t,e)]:[[s(t,e),"=",s(r,e)].join("")])}}}}(t),a={},o=0,c=Object.keys(e);o<c.length;o++){var l=c[o];n(l)||(a[l]=e[l])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(n){var a=e[n];return void 0===a?"":null===a?s(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):s(n,t)+"="+s(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=l(e,"#"),a=r(n,2),i=a[0],o=a[1];return Object.assign({url:i.split("?")[0]||"",query:g(m(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:f(o,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=d(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),o=Object.assign(i,e.query),c=t.stringify(o,n);c&&(c="?".concat(c));var l=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l="#".concat(s(e.fragmentIdentifier,n))),"".concat(r).concat(c).concat(l)}},1373:function(e,t,n){"use strict";var r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,r(n(40)).default)(a.default.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.default=i},1395:function(e,t,n){var r=n(1431);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},1431:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},1519:function(e,t,n){var r=n(1520),a=n(1521),i=n(1395),o=n(1522);e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||o()}},1520:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},1521:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}},1522:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1523:function(e,t,n){var r=n(1395);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}},1524:function(e,t,n){var r=n(1525),a=n(1526),i=n(1395),o=n(1527);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},1525:function(e,t,n){var r=n(1431);e.exports=function(e){if(Array.isArray(e))return r(e)}},1526:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},1527:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1528:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},1529:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function o(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var i=o(r[0]);i!==r[0]&&(n[r[0]]=i)}r=a.exec(e)}n["%C2"]="\ufffd";for(var c=Object.keys(n),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},1530:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}}}]);
//# sourceMappingURL=1.23cabe94.chunk.js.map