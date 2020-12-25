(this["webpackJsonphubble-console"]=this["webpackJsonphubble-console"]||[]).push([[14],{1346:function(e,t,i){"use strict";var a=i(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i(0)),l=(0,a(i(40)).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=l},1361:function(e,t,i){"use strict";function a(e){return e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}i.d(t,"a",(function(){return a}))},1731:function(e,t,i){"use strict";i.r(t);var a=i(53),n=i(0),l=i.n(n),r=i(162),s=i(1303),c=i(26),u=i(17),o=i(1356),d=i(1332),f=i(1343),b=i(21),m=i(1361),p=i(1346),v=i.n(p),h=i(118),_=i.n(h),O=i(1362),g=i.n(O),w=i(1373),j=i.n(w),S=i(1363),D=i.n(S),y=i(1372),E=i.n(y),P=Object(s.a)((function(e){return{container:{padding:16}}})),C=[{identifier:"name",numeric:!1,disablePadding:!1,label:"Name"},{identifier:"plan",numeric:!1,disablePadding:!1,label:"Plan"},{identifier:"name",numeric:!1,disablePadding:!1,label:"Name"},{identifier:"status",numeric:!1,disablePadding:!1,label:"Status"},{identifier:"created",numeric:!1,disablePadding:!1,label:"Created"},{identifier:"nextInvoice",numeric:!1,disablePadding:!1,label:"Next Invoice"}],N=[{identifier:"date_range",type:"time_range",title:"Time Range",startTitle:"Start Date",startIdentifier:"start_date",endTitle:"End Date",endIdentifier:"end_date",options:[{value:"all_time",title:"All Time"},{value:"last_3_months",title:"Last 3 Months"},{value:"last_6_months",title:"Last 6 Months"},{value:"last_9_months",title:"Last 9 Months"},{value:"last_12_months",title:"Last 12 Months"},{value:"last_15_months",title:"Last 15 Months"},{value:"last_18_months",title:"Last 18 Months"},{value:"custom",title:"Custom"}],defaultValue:{option:"all_time",startDate:new Date,endDate:new Date}},{identifier:"trial_status",type:"select",title:"Trial Status",options:[{value:"all",title:"All"},{value:"in_trial",title:"In Trial"},{value:"not_in_trial",title:"Not In Trial"}],defaultValue:"all"},{identifier:"subscription_status",type:"select",title:"Subscription Status",options:[{value:"all",title:"All"},{value:"active",title:"Active"},{value:"renewing",title:"Renewing"},{value:"non_renewing",title:"Non-renewing"},{value:"future_start_date",title:"Future Start Date"},{value:"in_trial",title:"In Trial"},{value:"paused",title:"Paused"},{value:"cancelled",title:"Cancelled"},{value:"expired",title:"Expired"},{value:"past_due",title:"Past Due"}],defaultValue:"all"}],T=[{identifier:"new",title:"New",icon:_.a,primary:!0},{identifier:"filter",title:"Filter",icon:j.a,primary:!0},{identifier:"default",title:"Default",icon:g.a,primary:!0},{identifier:"delete",title:"Delete",icon:v.a,primary:!1}],M=[{identifier:"new",title:"New",icon:_.a,primary:!0},{identifier:"filter",title:"Filter",icon:j.a,primary:!0},{identifier:"compact",title:"Compact",icon:D.a,primary:!0},{identifier:"delete",title:"Delete",icon:v.a,primary:!1}];var I={fetchSubscriptions:b.x,newSubscription:b.D};t.default=Object(c.b)((function(e){return{subscriptions:e.subscriptions}}),I)(Object(u.h)((function(e){var t=e.subscriptions,i=e.fetchSubscriptions,s=e.newSubscription,c=e.history,u=e.location,b=E.a.parse(u.search);"start_date"in b&&(b.start_date=new Date(Number(b.start_date))),"end_date"in b&&(b.end_date=new Date(Number(b.end_date)));var p=P(),v=Object(n.useState)([]),h=Object(a.a)(v,2),_=h[0],O=h[1],g=Object(n.useState)(Object.keys(b).length>0),w=Object(a.a)(g,2),j=w[0],S=w[1],D=Object(n.useState)(!1),y=Object(a.a)(D,2),I=y[0],L=y[1],V=Object(f.b)(N,b),x=Object(n.useState)(V),k=Object(a.a)(x,2),A=k[0],F=k[1],R=function(e){if(e){var t=Object(f.c)(N,e),i=new URLSearchParams(t);c.push("/subscriptions?"+i.toString())}else c.push("/subscriptions")};return Object(n.useEffect)((function(){var e=Object(f.c)(N,A);i(e)}),[i,A]),l.a.createElement("div",null,l.a.createElement(d.a,{title:"Subscriptions",selectionCount:_.length,actions:I?T:M,onAction:function(e){"new"===e?s():"filter"===e?S(!j):"compact"!==e&&"default"!==e||L(!I)}}),l.a.createElement(r.a,{container:!0,className:p.container},l.a.createElement(r.a,{item:!0,lg:j?10:12},l.a.createElement(o.a,{headers:C,onSelected:O,rows:t,selected:_,compact:I,onClick:function(e){c.push("/subscriptions/"+e.identifier)},renderCellValue:function(e,t,i,a){switch(i.identifier){case"plan":return e.plan.name;case"name":case"status":return"TODO";case"created":return Object(m.a)(e.createdOn);case"nextInvoice":return"TODO";default:return"Unknown Column"}}})),j&&l.a.createElement(r.a,{item:!0,lg:2},l.a.createElement(f.a,{fields:N,values:A,onValueChange:function(e,t){var i=Object.assign({},A);i[e]=t,F(i),R(i)},onClear:function(){var e=Object(f.b)(N,{});F(e),R(null)}}))))})))}}]);
//# sourceMappingURL=14.bd7c0714.chunk.js.map