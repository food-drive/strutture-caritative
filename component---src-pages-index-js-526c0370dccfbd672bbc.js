(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return me}));var o=r("8OQS"),a=r.n(o),n=r("q1tI"),i=r.n(n),p=r("17x9"),c=r("Ff2n"),l=r("wx14"),s=r("iuhU"),d=r("ucgz"),u=r("viY9"),m=Object(u.a)();var f=function(e,t){return Object(d.a)(e,Object(l.a)({defaultTheme:m},t))};var b=n.createContext(),h=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"table":a,p=e.padding,d=void 0===p?"default":p,u=e.size,m=void 0===u?"medium":u,f=e.stickyHeader,h=void 0!==f&&f,g=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:d,size:m,stickyHeader:h}}),[d,m,h]);return n.createElement(b.Provider,{value:v},n.createElement(i,Object(l.a)({ref:t,className:Object(s.a)(r.root,o,h&&r.stickyHeader)},g)))})),g=f((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(h);var v=n.createContext(),y={variant:"body"},x=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"tbody":a,p=Object(c.a)(e,["classes","className","component"]);return n.createElement(v.Provider,{value:y},n.createElement(i,Object(l.a)({className:Object(s.a)(r.root,o),ref:t},p)))})),O=f({root:{display:"table-row-group"}},{name:"MuiTableBody"})(x);function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}var w=r("ye/S"),k=n.forwardRef((function(e,t){var r,o=e.align,a=void 0===o?"inherit":o,i=e.classes,p=e.className,d=e.component,u=e.padding,m=e.scope,f=e.size,h=e.sortDirection,g=e.variant,y=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=n.useContext(b),O=n.useContext(v);r=d||(O&&"head"===O.variant?"th":"td");var w=m;!w&&O&&"head"===O.variant&&(w="col");var k=u||(x&&x.padding?x.padding:"default"),R=f||(x&&x.size?x.size:"medium"),C=g||O&&O.variant,N=null;return h&&(N="asc"===h?"ascending":"descending"),n.createElement(r,Object(l.a)({ref:t,className:Object(s.a)(i.root,i[C],p,"inherit"!==a&&i["align".concat(j(a))],"default"!==k&&i["padding".concat(j(k))],"medium"!==R&&i["size".concat(j(R))],"head"===C&&x&&x.stickyHeader&&i.stickyHeader),"aria-sort":N,scope:w},y))})),R=f((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(w.d)(Object(w.b)(e.palette.divider,1),.88):Object(w.a)(Object(w.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(k),C=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"div":a,p=Object(c.a)(e,["classes","className","component"]);return n.createElement(i,Object(l.a)({ref:t,className:Object(s.a)(r.root,o)},p))})),N=f({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(C),E={variant:"head"},K=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"thead":a,p=Object(c.a)(e,["classes","className","component"]);return n.createElement(v.Provider,{value:E},n.createElement(i,Object(l.a)({className:Object(s.a)(r.root,o),ref:t},p)))})),z=f({root:{display:"table-header-group"}},{name:"MuiTableHead"})(K),A=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"tr":a,p=e.hover,d=void 0!==p&&p,u=e.selected,m=void 0!==u&&u,f=Object(c.a)(e,["classes","className","component","hover","selected"]),b=n.useContext(v);return n.createElement(i,Object(l.a)({ref:t,className:Object(s.a)(r.root,o,b&&{head:r.head,footer:r.footer}[b.variant],d&&r.hover,m&&r.selected)},f))})),P=f((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(w.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(A),S=(r("8+KV"),n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,i=void 0===a?"div":a,p=e.square,d=void 0!==p&&p,u=e.elevation,m=void 0===u?1:u,f=e.variant,b=void 0===f?"elevation":f,h=Object(c.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(i,Object(l.a)({className:Object(s.a)(r.root,o,"outlined"===b?r.outlined:r["elevation".concat(m)],!d&&r.rounded),ref:t},h))}))),T=f((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),Object(l.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(S),H=(r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("KQm4")),M=r("bv9d");var W=function(e){var t=function(t){var r=e(t);return t.css?Object(l.a)({},Object(M.a)(r,e(Object(l.a)({theme:t.theme},t.css))),{},function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(H.a)(e.filterProps)),t};r("DNiP");var q=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(M.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},B=(r("LK8F"),r("KKXr"),r("rePB")),G=r("LybE");function D(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var I=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,a=e.themeKey,n=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=D(e.theme,a)||{};return Object(G.a)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=D(i,e)||e,n&&(t=n(t))),!1===o?t:Object(B.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function L(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var F=q(I({prop:"border",themeKey:"borders",transform:L}),I({prop:"borderTop",themeKey:"borders",transform:L}),I({prop:"borderRight",themeKey:"borders",transform:L}),I({prop:"borderBottom",themeKey:"borders",transform:L}),I({prop:"borderLeft",themeKey:"borders",transform:L}),I({prop:"borderColor",themeKey:"palette"}),I({prop:"borderRadius",themeKey:"shape"})),J=q(I({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),I({prop:"display"}),I({prop:"overflow"}),I({prop:"textOverflow"}),I({prop:"visibility"}),I({prop:"whiteSpace"})),$=q(I({prop:"flexBasis"}),I({prop:"flexDirection"}),I({prop:"flexWrap"}),I({prop:"justifyContent"}),I({prop:"alignItems"}),I({prop:"alignContent"}),I({prop:"order"}),I({prop:"flex"}),I({prop:"flexGrow"}),I({prop:"flexShrink"}),I({prop:"alignSelf"}),I({prop:"justifyItems"}),I({prop:"justifySelf"})),V=q(I({prop:"gridGap"}),I({prop:"gridColumnGap"}),I({prop:"gridRowGap"}),I({prop:"gridColumn"}),I({prop:"gridRow"}),I({prop:"gridAutoFlow"}),I({prop:"gridAutoColumns"}),I({prop:"gridAutoRows"}),I({prop:"gridTemplateColumns"}),I({prop:"gridTemplateRows"}),I({prop:"gridTemplateAreas"}),I({prop:"gridArea"})),X=q(I({prop:"position"}),I({prop:"zIndex",themeKey:"zIndex"}),I({prop:"top"}),I({prop:"right"}),I({prop:"bottom"}),I({prop:"left"})),Q=q(I({prop:"color",themeKey:"palette"}),I({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),U=I({prop:"boxShadow",themeKey:"shadows"});function Y(e){return e<=1?"".concat(100*e,"%"):e}var Z=I({prop:"width",transform:Y}),_=I({prop:"maxWidth",transform:Y}),ee=I({prop:"minWidth",transform:Y}),te=I({prop:"height",transform:Y}),re=I({prop:"maxHeight",transform:Y}),oe=I({prop:"minHeight",transform:Y}),ae=(I({prop:"size",cssProperty:"width",transform:Y}),I({prop:"size",cssProperty:"height",transform:Y}),q(Z,_,ee,te,re,oe,I({prop:"boxSizing"}))),ne=r("+Hmc"),ie=q(I({prop:"fontFamily",themeKey:"typography"}),I({prop:"fontSize",themeKey:"typography"}),I({prop:"fontStyle",themeKey:"typography"}),I({prop:"fontWeight",themeKey:"typography"}),I({prop:"letterSpacing"}),I({prop:"lineHeight"}),I({prop:"textAlign"})),pe=r("/P46"),ce=function(e){var t=Object(pe.a)(e);return function(e,r){return t(e,Object(l.a)({defaultTheme:m},r))}},le=W(q(F,J,$,V,X,Q,U,ae,ne.b,ie)),se=ce("div")(le,{name:"MuiBox"}),de=[{key:"denominazioneopt",value:"Denominazione Opt"},{key:"comune",value:"Comune"},{key:"provincia",value:"Provincia"},{key:"sedeoperativa",value:"Sede Operativa"},{key:"telefonosedeoperativa",value:"Telefono Sede Operativa"}],ue=function(e){var t=e.data.allGoogleSheetAnagraficaRow.edges;return i.a.createElement(se,{maxWidth:1200,minWidth:650,mx:"auto",my:10},i.a.createElement(N,{component:T},i.a.createElement(g,{"aria-label":"simple table"},i.a.createElement(z,null,i.a.createElement(P,null,de.map((function(e){var t=e.key,r=e.value;return i.a.createElement(R,{key:t},r)})))),i.a.createElement(O,null,t.map((function(e){var t=e.node,r=t.id,o=a()(t,["id"]);return i.a.createElement(P,{key:r},de.map((function(e){var t=e.key;return i.a.createElement(R,{key:t+"-"+r},o[t])})))}))))))};ue.propTypes={data:Object(p.shape)({allGoogleSheetAnagraficaRow:Object(p.shape)({edges:Object(p.arrayOf)(p.object).isRequired}).isRequired}).isRequired};t.default=ue;var me="2038471093"}}]);
//# sourceMappingURL=component---src-pages-index-js-526c0370dccfbd672bbc.js.map