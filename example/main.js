(self.webpackChunkreact_antd_cssvars=self.webpackChunkreact_antd_cssvars||[]).push([[179],{3946:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),l=n(8923),o=n(8374),c=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,c=l.length;o<c;o++,a++)r[a]=l[o];return r},s=["primary-color","secondary-color","danger-color","primary-color-hover","secondary-color-hover","danger-color-hover","success-color","warning-color","disable-color","text-color","text-color-inv","background-hover","background-selected","table-head-text-color","table-head-background","table-head-background-hover","table-head-background-selected","table-head-background-selected-hover","menu-background","submenu-background","menu-text-color","box-shadow-color"],i=function(){function e(t,n,r){this.theme={},this.default={},n&&(this.computed=n),this.themeColorKeys=r||c(e.ThemeColorKeys);for(var a=0;a<this.themeColorKeys.length;a++){var l=this.themeColorKeys[a],o=this.keyToProperty(l);if(t&&t[l]){var s=t[l];this.set(l,s,!1),this.default[l]=s}else{s=getComputedStyle(document.body).getPropertyValue(o).trim();this.theme[l]=s,this.default[l]=s}}}return e.prototype.keyToProperty=function(e){return"--"+e},e.prototype.set=function(e,t,n,r){void 0===n&&(n=!1);var a=(0,o.ZP)(t);void 0!==r&&a.setAlpha(r),r=a.getAlpha(),this.theme[e]=1!==r?a.toHex8String():a.toHexString();var l=this.keyToProperty(e);document.body.style.setProperty(l,this.theme[e]),n&&this.computed&&this.computed(e,this.theme[e],a.getLuminance(),a.getAlpha())},e.prototype.has=function(e){return Boolean(this.theme[e])},e.prototype.get=function(e){return this.theme[e]},e.prototype.reset=function(){for(var e in this.default){var t=this.default[e];this.set(e,t)}},e.prototype.reverse=function(e,t){var n=this.theme[e],r=this.theme[t];this.set(e,r),this.set(t,n)},e.getLuminance=function(e){return(0,o.ZP)(e).getLuminance()},e.getAlpha=function(e){return(0,o.ZP)(e).getAlpha()},e.tint=function(e,t){return(0,o.ZP)(e).tint(t).toHexString()},e.shade=function(e,t){return(0,o.ZP)(e).shade(t).toHexString()},e.isdark=function(e){return(0,o.ZP)(e).isDark()},e.mix=function(e,t,n){return void 0===n&&(n=50),(0,o.ZP)(e).mix(t,n).toHex()},e.ThemeColorKeys=s,e}(),u=r.createContext(null),m=u.Provider;u.Consumer;const p=u;var d=n(8086),h=n(7183),y=n(9210),g=n(2223),E=n(2164),f=n(3375),v=n(4302),b=n(5405),k=y.Z.SubMenu;const Z=function(e){return r.createElement(y.Z,{defaultSelectedKeys:["1"],defaultOpenKeys:[],theme:e.menuTheme,mode:"inline",inlineCollapsed:e.collapse,collapsedWidth:50,style:{height:"100%"}},r.createElement(y.Z.Item,{key:"1",icon:r.createElement(g.Z,null)},"Option 1"),r.createElement(y.Z.Item,{key:"2",icon:r.createElement(E.Z,null)},"Option 2"),r.createElement(y.Z.Item,{key:"3",icon:r.createElement(f.Z,null)},"Option 3"),r.createElement(k,{key:"sub1",icon:r.createElement(v.Z,null),title:"Navigation One"},r.createElement(y.Z.Item,{key:"5"},"Option 5"),r.createElement(y.Z.Item,{key:"6"},"Option 6"),r.createElement(y.Z.Item,{key:"7"},"Option 7"),r.createElement(y.Z.Item,{key:"8"},"Option 8")),r.createElement(k,{key:"sub2",icon:r.createElement(b.Z,null),title:"Navigation Two"},r.createElement(y.Z.Item,{key:"9"},"Option 9"),r.createElement(y.Z.Item,{key:"10"},"Option 10")))};var x=n(5779),C=n(7531),w=n(7428),P=n(7279),O=n(7880),S=n(1382),T=n(9676),I=n(2028),N=n(7933),j=n(6444),z=n(7636),B=n(3013),K=n(5454),A=n(2074),M=n(1474),_=n(9683),J=n(2272),L=n(7254),D=n(404),R=n(4184),H=n.n(R),W=function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const G=function(e){var t=W(W(W({},e),{uppercase:void 0}),function(){var t=e.type||void 0;return"secondary"===e.type&&(t=void 0),{type:t,className:H()(e.className,{"btn-secondary":"secondary"===e.type,"btn-success":"success"===e.type,"btn-warning":"warning"===e.type,"btn-menu":"menu"===e.type,"btn-uppercase":e.uppercase})}}());return r.createElement(D.Z,W({},t),e.children)};var V=n(331),F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const Y=function(e){var t=F(F({},e),function(){var t=e.color||void 0;return"primary"===e.color&&(t=void 0),"primary-bg"===e.color&&(t=void 0),"secondary"===e.color&&(t=void 0),{color:t,className:H()(e.className,{"tag-primary":"primary"===e.color,"tag-secondary":"secondary"===e.color,"tag-primary-bg":"primary-bg"===e.color})}}());return r.createElement(V.Z,F({},t),e.children)};var Q=n(9166);const q=function(e){var t="primary"===e.color||"secondary"===e.color||"off"===e.color?"default":e.color,n=H()(function(){var t=[];return"primary"!==e.color&&"secondary"!==e.color&&"off"!==e.color||t.push("status-color-"+e.color),!e.size||"large"!==e.size&&"middle"!==e.size||t.push("status-size-"+e.size),t}());return r.createElement(Q.Z,{className:n,status:t,text:e.children})};var U=n(3144),X=n(4549),$=n(1097),ee=n(6581),te=n.n(ee);const ne=function(e){for(var t=function(t){var n=t.currentTarget.dataset.hex;e.onPick(n)},n=new(te())(e.color).all(),a=Math.floor(n.length/2),l=[],o=[],c=0;c<a;c++){var s=n[c];l.push(r.createElement($.Z,{key:"tint-"+c,title:"T["+s.weight+"] #"+s.hex},r.createElement("div",{"data-weight":s.weight,"data-hex":"#"+s.hex,style:{background:"#"+s.hex},onClick:t})))}for(c=a+1;c<n.length;c++){s=n[c];o.push(r.createElement($.Z,{key:"shade-"+c,title:"S["+s.weight+"] #"+s.hex},r.createElement("div",{"data-weight":s.weight,"data-hex":"#"+s.hex,style:{background:"#"+s.hex},onClick:t})))}return r.createElement("div",{className:"tints-shades"},r.createElement("div",{className:"tints"},l),r.createElement("div",{className:"shades"},o))};var re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const le=function(e){var t=(0,r.useState)({open:!1,color:e.defaultColor}),n=t[0],a=t[1],l=(e.defaultColor,e.onChangeColor,e.onPick),o=ae(e,["defaultColor","onChangeColor","onPick"]),c=H()(e.className,{"color-picker-container":!0,right:"right"===e.side});return r.createElement("div",{"data-testid":"colorpicker-component",className:"color-picker-chooser"},r.createElement("div",{onClick:function(){a(re(re({},n),{open:!n.open}))}},r.createElement(G,re({},o,{className:"color-picker-button"}),e.children)),n.open&&n.color&&r.createElement("div",{className:c},r.createElement(U.xS,{color:n.color,onChangeComplete:function(t){n.color!==t.hex&&(a(re(re({},n),{color:t.hex,open:!n.open})),e.onChangeColor&&e.onChangeColor(t.hex))}}),r.createElement(G,{className:"color-picker-btn-close",shape:"circle",size:"small",type:"text",onClick:function(){a(re(re({},n),{open:!n.open}))}},r.createElement(X.Z,null))),l&&r.createElement(ne,{color:n.color,onPick:l}))};var oe=function(){return(oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ce=z.Z.Item;const se=function(e){var t=oe(oe({},e),function(){var t=e.color||void 0;return("primary"===e.color||"secondary"===e.color||"success"===e.color||"error"===e.color||"warning"===e.color)&&(t="none"),{color:t,className:H()(e.className,{"item-head-primary":"primary"===e.color,"item-head-secondary":"secondary"===e.color,"item-head-success":"success"===e.color,"item-head-warning":"warning"===e.color,"item-head-danger":"danger"===e.color})}}());return r.createElement(ce,oe({},t),e.children)};var ie=n(1953),ue=n(4545),me=n(4072),pe=n(8628),de=n(6504);const he=function(e){var t=r.createElement(y.Z,null,r.createElement(y.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"1st menu item")),r.createElement(y.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"2nd menu item")),r.createElement(y.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"3rd menu item"))),n=function(e){var t=e.icon,n=e.text;return r.createElement("div",{className:"example-icon"},t,n)};return r.createElement(ie.Z,{title:"Choose a color",className:"site-page-header",subTitle:r.createElement("a",{href:"https://github.com/Tenjin0/react-antd-cssvars/tree/develop/lib/customize/1"},"click on the button below ( this example use some customization )"),ghost:!1,tags:[r.createElement(Y,{key:"tag-1",color:"primary"},"Primary"),r.createElement(Y,{key:"tag-2",color:"primary-bg"},"Primary bg"),r.createElement(Y,{key:"tag-3",color:"secondary"},"Secondary")],extra:[r.createElement((function(){return r.createElement(B.Z,{key:"more",overlay:t},r.createElement(D.Z,{style:{border:"none",padding:0}},r.createElement(ue.Z,{style:{fontSize:20,verticalAlign:"top"}})))}),{key:"more"})],avatar:{src:"https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"},breadcrumb:{routes:[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}]}},r.createElement("br",null),r.createElement("br",null),e.children,r.createElement("div",{className:"example-icon-container"},r.createElement(n,{icon:r.createElement(me.Z,null),text:"Quick Start"}),r.createElement(n,{icon:r.createElement(pe.Z,null),text:"Product Info"}),r.createElement(n,{icon:r.createElement(de.Z,null),text:"Product Doc"})))};var ye=function(){return(ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ge=x.Z.Search,Ee=C.Z.Option,fe=w.Z.TabPane,ve=P.Z.Panel,be=O.Z.Step;const ke=function(e){var t=(0,r.useContext)(p),n=(0,r.useState)({uppercase:!0,selectedRowKeys:[]}),a=n[0],l=n[1],o=(0,r.useCallback)((function(e){l(ye(ye({},a),{uppercase:e.target.checked}))}),[]),c=r.createElement(J.Z,{style:{fontSize:16,color:"var(--primary-color)"}}),s=[{key:"1",name:"John Brown",chinese:98,math:60,english:70},{key:"2",name:"Jim Green",chinese:98,math:66,english:89},{key:"3",name:"Joe Black",chinese:98,math:90,english:70},{key:"4",name:"Jim Red",chinese:88,math:99,english:89}],i="\n\tA dog is a type of domesticated animal.\n\tKnown for its loyalty and faithfulness,\n\tit can be found as a welcome guest in many households across the world.\n\t",u={total:s.length,pageSize:2},m=(0,r.useCallback)((function(e){t.set("primary-color",e,!0)}),[]),h=(0,r.useCallback)((function(e){t.set("secondary-color",e,!0)}),[]),g=(0,r.useCallback)((function(e){t.set("success-color",e,!1)}),[]),E=(0,r.useCallback)((function(e){t.set("warning-color",e,!1)}),[]),f=(0,r.useCallback)((function(e){t.set("menu-background",e,!0)}),[]),v=(0,r.useCallback)((function(e){navigator.clipboard.writeText(e).then((function(){d.ZP.info({style:{left:"100px"},content:"Copy to clipboard: "+e})}))}),[]),b=(0,r.useCallback)((function(e){l(ye(ye({},a),{selectedRowKeys:e}))}),[]),k=r.createElement(y.Z,null,r.createElement(y.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")),r.createElement(y.Z.Item,{icon:r.createElement(L.Z,null),disabled:!0},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")),r.createElement(y.Z.Item,{disabled:!0},r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")),r.createElement(y.Z.Item,{danger:!0},"a danger item"));return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1em"}},r.createElement(S.Z,null)),r.createElement(he,null,r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"15px"}},r.createElement(le,{type:"primary",defaultColor:t.get("primary-color"),onChangeColor:m,onPick:v},"Primary Color"),r.createElement(le,{type:"secondary",defaultColor:t.get("secondary-color"),onChangeColor:h},"Secondary Color"),r.createElement(le,{type:"menu",side:"right",defaultColor:t.get("menu-background"),onChangeColor:f},"Menu Color")),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement(le,{type:"success",defaultColor:t.get("success-color"),onChangeColor:g},"Success Color"),r.createElement(le,{type:"warning",defaultColor:t.get("warning-color"),onChangeColor:E},"Warning Color"),r.createElement(le,{type:"primary",danger:!0,side:"right",defaultColor:t.get("danger-color"),onChangeColor:f},"Danger Color")),r.createElement("br",null),r.createElement("br",null)),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement(G,{uppercase:a.uppercase},"Default Button"),r.createElement(G,{uppercase:a.uppercase,type:"dashed"},"Dashed Button"),r.createElement(G,{uppercase:a.uppercase,type:"text"},"Text Button"),r.createElement(G,{uppercase:a.uppercase,type:"link"},"Link Button")),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement("div",null,r.createElement(T.Z,{checked:a.uppercase,onChange:o},"Button uppercase")),r.createElement("div",null,r.createElement(I.Z,{checked:!e.collapse,onChange:function(t){e.dispatch({collapse:!t})}}),"\xa0 Menu Open"),r.createElement("div",null,r.createElement(N.ZP.Group,{defaultValue:e.menuTheme,onChange:function(t){e.dispatch({menuTheme:t.target.value})},value:e.menuTheme},r.createElement(N.ZP,{value:"dark"},"Dark"),r.createElement(N.ZP,{value:"light"},"Light")))),r.createElement("br",null),r.createElement("br",null),r.createElement(j.Z,{rowSelection:{selectedRowKeys:a.selectedRowKeys,onChange:b},columns:[{title:"Name",dataIndex:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Submenu",value:"Submenu",children:[{text:"Green",value:"Green"},{text:"Black",value:"Black"}]}]},{title:"Chinese Score",dataIndex:"chinese",sorter:{compare:function(e,t){return e.chinese-t.chinese}}},{title:"Math Score",dataIndex:"math",sorter:{compare:function(e,t){return e.math-t.math}}},{title:"English Score",dataIndex:"english",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filterMultiple:!1,sorter:{compare:function(e,t){return e.english-t.english}}}],dataSource:s,pagination:u}),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(z.Z,{pending:"Recording...",style:{background:"#fff",padding:"15px",marginRight:"15px"}},r.createElement(se,{color:"primary"},"example primary"),r.createElement(se,{color:"secondary"},"example secondary"),r.createElement(se,{color:"success"},"example success"),r.createElement(se,{color:"warning"},"example warning")),r.createElement(O.Z,{style:{padding:"15px"},size:"small",current:1},r.createElement(be,{title:"Finished"}),r.createElement(be,{title:"In Progress"}),r.createElement(be,{title:"Waiting"}))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(x.Z,{size:"large",placeholder:"Basic usage",style:{marginBottom:"15px"}}),r.createElement(ge,{placeholder:"input search text",enterButton:"Search",size:"large",suffix:c})),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement(C.Z,{defaultValue:"lucy",style:{width:120}},r.createElement(Ee,{value:"jack"},"Jack"),r.createElement(Ee,{value:"Yiminghe"},"yiminghe")),r.createElement(B.Z,{overlay:k},r.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"Hover me ",r.createElement(L.Z,null))),r.createElement(q,{size:"large",color:"primary"},"status")),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(w.Z,{defaultActiveKey:"1"},r.createElement(fe,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),r.createElement(fe,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),r.createElement(fe,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3"))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(P.Z,{defaultActiveKey:["1"]},r.createElement(ve,{header:"This is panel header 1",key:"1"},r.createElement("p",null,i)),r.createElement(ve,{header:"This is panel header 2",key:"2"},r.createElement("p",null,i)),r.createElement(ve,{header:"This is panel header 3",key:"3"},r.createElement("p",null,i))),","),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(K.Z,{defaultValue:30})),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement("div",null,r.createElement(A.Z,{percent:30,size:"small"}),r.createElement(A.Z,{percent:50,size:"small",status:"active"}),r.createElement(A.Z,{percent:70,size:"small",status:"exception"}),r.createElement(A.Z,{percent:100,size:"small"})),r.createElement("div",null,r.createElement(A.Z,{type:"circle",percent:70,status:"exception"}),r.createElement(A.Z,{type:"circle",percent:100}),r.createElement(A.Z,{type:"circle",percent:75})),r.createElement("div",null,r.createElement(M.Z,{message:"Success Text",type:"success"}),r.createElement(M.Z,{message:"Info Text",type:"info"}),r.createElement(M.Z,{message:"Warning Text",type:"warning"}),r.createElement(M.Z,{message:"Error Text",type:"error"}))),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement(_.ZP,{status:"success",title:"Success"}),r.createElement(_.ZP,{status:"info",title:"Info"}),r.createElement(_.ZP,{status:"error",title:"Error"}),r.createElement(_.ZP,{status:"warning",title:"Warning"})))};var Ze=function(){return(Ze=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};d.ZP.config({duration:.9,top:10});const xe=function(){var e=(0,r.useState)({collapse:!0,menuTheme:"dark"}),t=e[0],n=e[1];(0,r.useEffect)((function(){localStorage.getItem("open")&&n(Ze(Ze({},t),{collapse:!1}))}),[]);return r.createElement("div",{id:"layout"},r.createElement(h.Z,{id:"layout-menu",onMouseLeave:function(){localStorage.getItem("open")||n(Ze(Ze({},t),{collapse:!0}))},onMouseOver:function(){localStorage.getItem("open")||n(Ze(Ze({},t),{collapse:!1}))}},r.createElement(Z,{collapse:t.collapse,menuTheme:t.menuTheme})),r.createElement(h.Z,{id:"layout-content"},r.createElement(ke,{menuTheme:t.menuTheme,collapse:t.collapse,dispatch:function(e){n(Ze(Ze({},t),e))}})))};var Ce=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,c=l.length;o<c;o++,a++)r[a]=l[o];return r}(s);Ce.push("debug");var we=new i({"menu-background":"#000000","submenu-background":"#333333",debug:"#333333"},(function(e,t,n){if("primary-color"===e){we.set("table-head-text-color",t);var r=i.tint(t,90);we.set("table-head-background",r),we.set("background-selected",r),we.set("table-head-background-hover",i.tint(t,75)),we.set("table-head-background-selected",i.tint(t,15)),we.set("table-head-background-selected-hover",t)}we.has(e+"-hover")&&we.set(e+"-hover",i.tint(t,17.5)),"menu-background"===e&&(n<.015?we.set("submenu-background",i.tint(t,20),!1):we.set("submenu-background",i.shade(t,20),!1),i.isdark(t)?we.set("menu-text-color",we.get("text-color-inv"),!1,.65):we.set("menu-text-color",we.get("text-color"),!1,.65))}),Ce);window.theme=we,a.render(r.createElement(l.ZP,null,r.createElement(m,{value:we},r.createElement(xe,null))),document.getElementById("root"))}},0,[[3946,303,749]]]);