(self.webpackChunkreact_antd_cssvars=self.webpackChunkreact_antd_cssvars||[]).push([[179],{3946:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),l=n(7725),o=n(8413),c=n(6581),i=n.n(c),s=n(7621),m=n.n(s),u=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,c=l.length;o<c;o++,a++)r[a]=l[o];return r},d=["primary-color","secondary-color","danger-color","primary-color-hover","secondary-color-hover","danger-color-hover","success-color","warning-color","disable-color","text-color","text-color-inv","background-hover","background-selected","table-head-text-color","table-head-background","table-head-background-hover","table-head-background-selected","table-head-background-selected-hover","menu-background","submenu-background","menu-text-color"],p=function(){function e(t,n,r){this.theme={},this.default={},this.themeColorKeys=r||u(e.ThemeColorKeys);for(var a=0;a<this.themeColorKeys.length;a++){var l=this.themeColorKeys[a],o=this.keyToProperty(l);if(t&&t[l]){var c=t[l];this.set(l,c,!1),this.default[l]=c}else{c=getComputedStyle(document.body).getPropertyValue(o).trim();this.theme[l]=c,this.default[l]=c}}n&&(this.computed=n)}return e.prototype.keyToProperty=function(e){return"--"+e},e.prototype.set=function(e,t,n,r){void 0===n&&(n=!1),this.theme[e]=t;var a=m()(t);void 0!==r&&a.setAlpha(r);var l=this.keyToProperty(e);document.body.style.setProperty(l,void 0!==r?a.toRgbString():t),n&&this.computed&&this.computed(e,t,a.getLuminance(),a.getAlpha())},e.prototype.has=function(e){return Boolean(this.theme[e])},e.prototype.get=function(e){return this.theme[e]},e.prototype.reset=function(){for(var e in this.default){var t=this.default[e];this.set(e,t)}},e.prototype.reverse=function(e,t){var n=this.theme[e],r=this.theme[t];this.set(e,r),this.set(t,n)},e.tint=function(e,t){return"#"+new(i())(e).tint(t).hex},e.shade=function(e,t){return"#"+new(i())(e).shade(t).hex},e.isdark=function(e){return m()(e).isDark()},e.ThemeColorKeys=d,e}(),h=r.createContext(null),y=h.Provider;h.Consumer;const E=h;var g=n(7183),f=n(9210),v=n(2223),b=n(2164),k=n(3375),C=n(4302),x=n(5405),Z=f.Z.SubMenu;const w=function(e){return r.createElement(f.Z,{defaultSelectedKeys:["1"],defaultOpenKeys:[],theme:"dark",mode:"inline",inlineCollapsed:e.collapse,collapsedWidth:50,style:{height:"100%"}},r.createElement(f.Z.Item,{key:"1",icon:r.createElement(v.Z,null)},"Option 1"),r.createElement(f.Z.Item,{key:"2",icon:r.createElement(b.Z,null)},"Option 2"),r.createElement(f.Z.Item,{key:"3",icon:r.createElement(k.Z,null)},"Option 3"),r.createElement(Z,{key:"sub1",icon:r.createElement(C.Z,null),title:"Navigation One"},r.createElement(f.Z.Item,{key:"5"},"Option 5"),r.createElement(f.Z.Item,{key:"6"},"Option 6"),r.createElement(f.Z.Item,{key:"7"},"Option 7"),r.createElement(f.Z.Item,{key:"8"},"Option 8")),r.createElement(Z,{key:"sub2",icon:r.createElement(x.Z,null),title:"Navigation Two"},r.createElement(f.Z.Item,{key:"9"},"Option 9"),r.createElement(f.Z.Item,{key:"10"},"Option 10")))};var P=n(5779),O=n(7531),S=n(7428),I=n(7279),N=n(7880),T=n(9676),j=n(2028),B=n(7933),z=n(56),K=n(7636),A=n(5454),M=n(2074),_=n(2272),D=n(404),J=n(4184),R=n.n(J),V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const F=function(e){var t=V(V(V({},e),{uppercase:void 0}),function(){var t=e.type||void 0;return"secondary"===e.type&&(t=void 0),{type:t,className:R()(e.className,{"btn-secondary":"secondary"===e.type,"btn-success":"success"===e.type,"btn-warning":"warning"===e.type,"btn-menu":"menu"===e.type,"btn-uppercase":e.uppercase})}}());return r.createElement(D.Z,V({},t),e.children)};var L=n(331),W=function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const G=function(e){var t=W(W({},e),function(){var t=e.color||void 0;return"primary"===e.color&&(t=void 0),"primary-bg"===e.color&&(t=void 0),"secondary"===e.color&&(t=void 0),{color:t,className:R()(e.className,{"tag-primary":"primary"===e.color,"tag-secondary":"secondary"===e.color,"tag-primary-bg":"primary-bg"===e.color})}}());return r.createElement(L.Z,W({},t),e.children)};var Q=n(3144),Y=n(4549),q=n(1097);const H=function(e){for(var t=function(t){var n=t.currentTarget.dataset.hex;e.onPick(n)},n=new(i())(e.color).all(),a=Math.floor(n.length/2),l=[],o=[],c=0;c<a;c++){var s=n[c];l.push(r.createElement(q.Z,{key:"tint-"+c,title:"T["+s.weight+"] #"+s.hex},r.createElement("div",{"data-weight":s.weight,"data-hex":"#"+s.hex,style:{background:"#"+s.hex},onClick:t})))}for(c=a+1;c<n.length;c++){s=n[c];o.push(r.createElement(q.Z,{key:"shade-"+c,title:"S["+s.weight+"] #"+s.hex},r.createElement("div",{"data-weight":s.weight,"data-hex":"#"+s.hex,style:{background:"#"+s.hex},onClick:t})))}return r.createElement("div",{className:"tints-shades"},r.createElement("div",{className:"tints"},l),r.createElement("div",{className:"shades"},o))};var U=function(){return(U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const $=function(e){var t=(0,r.useState)({open:!1,color:e.defaultColor}),n=t[0],a=t[1],l=(e.defaultColor,e.onChangeColor,e.onPick),o=X(e,["defaultColor","onChangeColor","onPick"]);return r.createElement("div",{"data-testid":"colorpicker-component",className:"color-picker-chooser"},r.createElement("div",{onClick:function(){a(U(U({},n),{open:!n.open}))}},r.createElement(F,U({},o,{className:"color-picker-button"}),e.children)),n.open&&n.color&&r.createElement("div",{className:"color-picker-container"},r.createElement(Q.xS,{color:n.color,onChangeComplete:function(t){n.color!==t.hex&&(a(U(U({},n),{color:t.hex,open:!n.open})),e.onChangeColor&&e.onChangeColor(t.hex))}}),r.createElement(F,{className:"color-picker-btn-close",shape:"circle",size:"small",type:"text",onClick:function(){a(U(U({},n),{open:!n.open}))}},r.createElement(Y.Z,null))),l&&r.createElement(H,{color:n.color,onPick:l}))};var ee=function(){return(ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},te=K.Z.Item;const ne=function(e){var t=ee(ee({},e),function(){var t=e.color||void 0;return("primary"===e.color||"secondary"===e.color||"success"===e.color||"error"===e.color||"warning"===e.color)&&(t="none"),{color:t,className:R()(e.className,{"item-head-primary":"primary"===e.color,"item-head-secondary":"secondary"===e.color,"item-head-success":"success"===e.color,"item-head-warning":"warning"===e.color,"item-head-danger":"danger"===e.color})}}());return r.createElement(te,ee({},t),e.children)};var re=n(3013),ae=n(1953),le=n(4545),oe=n(4072),ce=n(8628),ie=n(6504);const se=function(e){var t=r.createElement(f.Z,null,r.createElement(f.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"1st menu item")),r.createElement(f.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"2nd menu item")),r.createElement(f.Z.Item,null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"3rd menu item"))),n=function(e){var t=e.icon,n=e.text;return r.createElement("div",{className:"example-icon"},t,n)};return r.createElement(ae.Z,{title:"Choose a color",className:"site-page-header",subTitle:"click on the button below ( this example use some customization )",ghost:!1,tags:[r.createElement(G,{key:"tag-1",color:"primary"},"Primary"),r.createElement(G,{key:"tag-2",color:"primary-bg"},"Primary bg"),r.createElement(G,{key:"tag-3",color:"secondary"},"Secondary")],extra:[r.createElement((function(){return r.createElement(re.Z,{key:"more",overlay:t},r.createElement(D.Z,{style:{border:"none",padding:0}},r.createElement(le.Z,{style:{fontSize:20,verticalAlign:"top"}})))}),{key:"more"})],avatar:{src:"https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"},breadcrumb:{routes:[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}]}},r.createElement("br",null),r.createElement("br",null),e.children,r.createElement("div",{className:"example-icon-container"},r.createElement(n,{icon:r.createElement(oe.Z,null),text:"Quick Start"}),r.createElement(n,{icon:r.createElement(ce.Z,null),text:"Product Info"}),r.createElement(n,{icon:r.createElement(ie.Z,null),text:"Product Doc"})))};var me=P.Z.Search,ue=O.Z.Option,de=S.Z.TabPane,pe=I.Z.Panel,he=N.Z.Step;const ye=function(){var e=(0,r.useContext)(E),t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(e){a(e.target.checked)}),[]),c=r.createElement(_.Z,{style:{fontSize:16,color:"var(--primary-color)"}}),i=[{key:"1",name:"John Brown",chinese:98,math:60,english:70},{key:"2",name:"Jim Green",chinese:98,math:66,english:89},{key:"3",name:"Joe Black",chinese:98,math:90,english:70},{key:"4",name:"Jim Red",chinese:88,math:99,english:89}],s="\n\tA dog is a type of domesticated animal.\n\tKnown for its loyalty and faithfulness,\n\tit can be found as a welcome guest in many households across the world.\n\t",m={total:i.length,pageSize:2},u=function(t){e.set("menu-background",t,!0)};return r.createElement(r.Fragment,null,r.createElement(se,null,r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"15px"}},r.createElement($,{type:"primary",defaultColor:e.get("primary-color"),onChangeColor:function(t){e.set("primary-color",t,!0)},onPick:function(e){navigator.clipboard.writeText(e).then((function(){l.ZP.info({style:{left:"100px"},content:"Copy to clipboard: "+e})}))}},"Primary Color"),r.createElement($,{type:"secondary",defaultColor:e.get("secondary-color"),onChangeColor:function(t){e.set("secondary-color",t,!0)}},"Secondary Color"),r.createElement($,{type:"menu",defaultColor:e.get("menu-background"),onChangeColor:u},"Menu Color")),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement($,{type:"success",defaultColor:e.get("success-color"),onChangeColor:function(t){e.set("success-color",t,!1)}},"Success Color"),r.createElement($,{type:"warning",defaultColor:e.get("warning-color"),onChangeColor:function(t){e.set("warning-color",t,!1)}},"Warning Color"),r.createElement($,{type:"primary",danger:!0,defaultColor:e.get("danger-color"),onChangeColor:u},"Danger Color")),r.createElement("br",null),r.createElement("br",null)),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement(F,{uppercase:n},"Default Button"),r.createElement(F,{uppercase:n,type:"dashed"},"Dashed Button"),r.createElement(F,{uppercase:n,type:"text"},"Text Button"),r.createElement(F,{uppercase:n,type:"link"},"Link Button")),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement("div",null,r.createElement(T.Z,{checked:n,onChange:o},"Button uppercase")),r.createElement("div",null,r.createElement(j.Z,{checked:n})),r.createElement("div",null,r.createElement(B.ZP.Group,{defaultValue:4},r.createElement(B.ZP,{value:1},"A"),r.createElement(B.ZP,{value:2},"B"),r.createElement(B.ZP,{value:3},"C"),r.createElement(B.ZP,{value:4},"D")))),r.createElement("br",null),r.createElement("br",null),r.createElement(z.Z,{columns:[{title:"Name",dataIndex:"name"},{title:"Chinese Score",dataIndex:"chinese",sorter:{compare:function(e,t){return e.chinese-t.chinese}}},{title:"Math Score",dataIndex:"math",sorter:{compare:function(e,t){return e.math-t.math}}},{title:"English Score",dataIndex:"english",sorter:{compare:function(e,t){return e.english-t.english}}}],dataSource:i,pagination:m}),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(K.Z,{pending:"Recording...",style:{background:"#fff",padding:"15px",marginRight:"15px"}},r.createElement(ne,null,"example default"),r.createElement(ne,{color:"secondary"},"example secondary"),r.createElement(ne,{color:"success"},"example success"),r.createElement(ne,{color:"warning"},"example warning")),r.createElement(N.Z,{style:{padding:"15px"},size:"small",current:1},r.createElement(he,{title:"Finished"}),r.createElement(he,{title:"In Progress"}),r.createElement(he,{title:"Waiting"}))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(P.Z,{placeholder:"Basic usage",style:{marginBottom:"15px"}}),r.createElement(me,{placeholder:"input search text",enterButton:"Search",size:"large",suffix:c})),r.createElement("div",null,r.createElement("br",null),r.createElement("br",null),r.createElement(O.Z,{defaultValue:"lucy",style:{width:120}},r.createElement(ue,{value:"jack"},"Jack"),r.createElement(ue,{value:"Yiminghe"},"yiminghe"))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(S.Z,{defaultActiveKey:"1"},r.createElement(de,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),r.createElement(de,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),r.createElement(de,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3"))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(I.Z,{defaultActiveKey:["1"]},r.createElement(pe,{header:"This is panel header 1",key:"1"},r.createElement("p",null,s)),r.createElement(pe,{header:"This is panel header 2",key:"2"},r.createElement("p",null,s)),r.createElement(pe,{header:"This is panel header 3",key:"3"},r.createElement("p",null,s))),","),r.createElement("br",null),r.createElement("br",null),r.createElement("div",null,r.createElement(A.Z,{defaultValue:30})),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.createElement("div",null,r.createElement(M.Z,{percent:30,size:"small"}),r.createElement(M.Z,{percent:50,size:"small",status:"active"}),r.createElement(M.Z,{percent:70,size:"small",status:"exception"}),r.createElement(M.Z,{percent:100,size:"small"})),r.createElement("div",null,r.createElement(M.Z,{type:"circle",percent:70,status:"exception"}),r.createElement(M.Z,{type:"circle",percent:100}),r.createElement(M.Z,{type:"circle",percent:75}))))};const Ee=function(){var e=(0,r.useState)({collapse:!0}),t=e[0],n=e[1];(0,r.useEffect)((function(){localStorage.getItem("open")&&n({collapse:!1})}),[]);return r.createElement("div",{id:"layout"},r.createElement(g.Z,{id:"layout-menu",onMouseLeave:function(){localStorage.getItem("open")||n({collapse:!0})},onMouseOver:function(){localStorage.getItem("open")||n({collapse:!1})}},r.createElement(w,{collapse:t.collapse})),r.createElement(g.Z,{id:"layout-content"},r.createElement(ye,null)))};var ge=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,c=l.length;o<c;o++,a++)r[a]=l[o];return r}(d);ge.push("debug");l.ZP.config({duration:.9,top:10});var fe=new p({"menu-background":"#000000","submenu-background":"#333333","menu-text-color":"#fff",debug:"#333333"},(function(e,t,n){if("primary-color"===e){fe.set("table-head-text-color",t);var r=p.tint(t,90);fe.set("table-head-background",r),fe.set("background-selected",r),fe.set("table-head-background-hover",p.tint(t,75)),fe.set("table-head-background-selected",p.tint(t,15)),fe.set("table-head-background-selected-hover",t)}fe.has(e+"-hover")&&fe.set(e+"-hover",p.tint(t,17.5)),"menu-background"===e&&(n<.015?fe.set("submenu-background",p.tint(t,20)):fe.set("submenu-background",p.shade(t,20)),p.isdark(t)?fe.set("menu-text-color",fe.get("text-color-inv")):fe.set("menu-text-color",fe.get("text-color")))}),ge);window.theme=fe,a.render(r.createElement(o.ZP,null,r.createElement(y,{value:fe},r.createElement(Ee,null))),document.getElementById("root"))}},0,[[3946,303,76]]]);