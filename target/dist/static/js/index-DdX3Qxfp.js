import{i as F,d as q,m as G,b as D,c as Q,e as X}from"./index-BzwtatPw.js";import{u as N}from"./index-OBXFyj3D.js";import{R as Z,S as ee}from"./@element-plus.icons-vue-BCFYf-67.js";import"./store-BGvsPsWR.js";import{r as te,y as L}from"./lodash-es-I-EvhVFk.js";import{a as C}from"./element-plus-DaJS5H-O.js";import{d as v,Y as a,o as c,c as k,i as r,K as s,O as $,F as S,t as oe,e as ne,J as I,N as K,V as P,$ as le,L as re}from"./@vue.runtime-core-B2X3lOUZ.js";import{r as ae,u as E}from"./@vue.reactivity-V6IlnEmz.js";import{d as se}from"./dayjs-DOBku9Nj.js";import{u as pe,a as ie}from"./menu-CUE9Wx3g.js";import{O as j}from"./@vue.shared-D-bMerGS.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@vue.runtime-dom-DkKQpP1Z.js";import"./@vueuse.core-Bp0bPelK.js";import"./@vueuse.shared-CZpoHp70.js";import"./mitt-C1z4c41a.js";import"./axios-CvWkLj0m.js";import"./nprogress-B7fG2QpQ.js";import"./chardet-C_72lc3Z.js";import"./pinia-ByvooDwk.js";import"./vue-demi-Dq6ymT-8.js";import"./monaco-editor-CuOEaJz6.js";import"./vue-echarts-BbwyaQnR.js";import"./resize-detector-CZu9PX2v.js";import"./echarts-Bv2MlBtc.js";import"./tslib-BDyQ-Jie.js";import"./zrender-BSc91FC-.js";import"./vue-router-4IlAtr41.js";import"./mockjs-Bfc9hT_P.js";import"./vue-xN6KRtQP.js";import"./@popperjs.core-D9SI2xQl.js";import"./@ctrl.tinycolor-r5W6hzzQ.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui.dom-B8Qxuwjg.js";import"./@floating-ui.core-DTrSsA1T.js";import"./@floating-ui.utils-Bh-IyuRp.js";import"./socket.io-client-CFD4C2bo.js";import"./engine.io-client-BMFYY_Ci.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io.component-emitter-Dkula2eQ.js";import"./socket.io-parser-DjBqVKS_.js";const ce=v({name:"undefined"}),me=v({...ce,setup(A){const{service:b}=N(),w=F.useForm(),g=F.useCrud(),m=ae(!1);function y(f,h){m.value=!0;const d=new FileReader;d.onload=p=>{var l,e;m.value=!1;try{const t=JSON.parse((l=p.target)==null?void 0:l.result);(e=w.value)==null||e.open({title:"菜单导入",height:"400px",width:"600px",props:{labelWidth:"0px"},op:{saveButtonText:"添加"},items:[{component:{name:"slot-tips"}},{component:{name:"el-tree",props:{data:te(t,"orderNum","asc"),nodeKey:"name",props:{label:"name",children:"childMenus"},renderContent(o,{data:_}){return _.name}},style:{padding:"5px",borderRadius:"var(--el-border-radius-base)",border:"1px solid var(--el-border-color)"}}}],on:{submit(o,{close:_,done:i}){b.base.sys.menu.import({menus:t}).then(()=>{var u;C.success("导入成功"),(u=g.value)==null||u.refresh(),_()}).catch(u=>{C.error(u.message),i()})}}})}catch(t){C.error(`${h.name}文件格式错误：${t}`)}},d.readAsText(h)}return(f,h)=>{const d=a("el-button"),p=a("cl-upload"),l=a("el-alert"),e=a("cl-form");return c(),k(S,null,[r(p,{type:"file","show-file-list":!1,"auto-upload":!1,disabled:m.value,onUpload:y},{default:s(()=>[r(d,{type:"success",icon:E(Z),loading:m.value},{default:s(()=>[$("导入")]),_:1},8,["icon","loading"])]),_:1},8,["disabled"]),r(e,{ref_key:"Form",ref:w},{"slot-tips":s(()=>[r(l,{type:"warning"},{default:s(()=>[$("如遇到问题无法导入菜单，请检查文件并尝试重新导入。")]),_:1})]),_:1},512)],64)}}}),de=v({name:"undefined"}),_e=v({...de,props:{data:{type:Array,default:()=>[]}},setup(A){const b=A,{service:w,refs:g,setRefs:m}=N(),y=F.useForm();function f(){var h;(h=y.value)==null||h.open({title:"导出",width:"600px",props:{labelPosition:"top"},op:{saveButtonText:"导出"},items:[{label:"选择菜单",prop:"ids",component:{name:"el-tree-select",ref:m("ids"),props:{data:b.data,nodeKey:"id",multiple:!0,showCheckbox:!0,collapseTags:!0,collapseTagsTooltip:!0,props:{label:"name"}}}}],on:{submit(d,{done:p,close:l}){const e=[...g.ids.getCheckedKeys(),...g.ids.getHalfCheckedKeys()];L(e)?(C.warning("请先选择要导出的菜单"),p()):w.base.sys.menu.export({ids:e}).then(t=>{l();const o=new Blob([JSON.stringify(t)],{type:"application/json"}),_=URL.createObjectURL(o),i=document.createElement("a");i.href=_,i.download=`菜单数据 ${se().format("MM-DD HH_mm_ss")}.json`,i.click(),URL.revokeObjectURL(_)}).catch(t=>{C.error(t.message)})}}})}return(h,d)=>{const p=a("el-button"),l=a("cl-form");return c(),k(S,null,[r(p,{type:"info",icon:E(ee),onClick:f},{default:s(()=>[$("导出")]),_:1},8,["icon"]),r(l,{ref_key:"Form",ref:y},null,512)],64)}}}),fe=v({name:"menu-create"}),be=v({...fe,setup(A){const{service:b,mitt:w}=N(),g=ie(),m=F.useForm(),{matchType:y}=pe(),f=[],h=oe(()=>q(f.map(l=>l.value)));function d(){var l;(l=m.value)==null||l.open({title:"快速创建",width:"800px",items:[{prop:"module",label:"选择模块",span:10,component:{name:"cl-select",props:{filterable:!0,clearable:!0,placeholder:"请选择模块",allowCreate:!0,defaultFirstOption:!0,options:G.dirs}},required:!0},{prop:"entity",label:"数据结构",span:14,component:{name:"slot-entity"},required:!0},{prop:"name",label:"菜单名称",span:10,component:{name:"el-input",props:{placeholder:"请输入菜单名称"}},required:!0},{prop:"router",label:"菜单路由",span:14,component:{name:"el-input",props:{placeholder:"请输入菜单路由，如：/test"}},rules:{required:!0,validator(e,t,o){(t||"").startsWith("/")?o():o(new Error("必须以 / 开头"))}}},{prop:"parentId",label:"上级节点",component:{name:"cl-menu-select",props:{type:1}}},{prop:"keepAlive",value:!0,label:"路由缓存",component:{name:"el-radio-group",options:[{label:"开启",value:!0},{label:"关闭",value:!1}]}},{prop:"icon",label:"菜单图标",component:{name:"cl-menu-icon"}},{prop:"orderNum",label:"排序号",component:{name:"el-input-number",props:{placeholder:"请填写排序号",min:0,max:99,"controls-position":"right"}}},{prop:"isCreateFile",label:"是否创建文件",value:1,component:{name:"el-radio-group",options:[{label:"是",value:1},{label:"否",value:0}]}},{prop:"isAi",label:"是否AI分析",value:1,component:{name:"el-radio-group",options:[{label:"是",value:1},{label:"否",value:0}]},hidden({scope:e}){return e.isCreateFile==0}}],on:{async submit(e,{done:t,close:o}){const{api:_,prefix:i,columns:u}=f.find(U=>U.value==e.entity.join("/"));e.isAi&&await y({columns:u,name:e.name}),g.create({...e,router:e.router,module:e.module,prefix:i,api:_,columns:u}).then(U=>{e.isCreateFile&&U(),w.emit("helper.createMenu"),o()}).catch(U=>{t()})}}})}function p(l){var t;const e=f.find(o=>o.value==l.join("/"));e&&((t=m.value)==null||t.setForm("router",`/${e.value}`))}return ne(()=>{b.base.open.eps().then(l=>{for(const e in l)l[e].forEach(t=>{L(t.columns)||f.push({value:t.prefix.substring(7),...t})})})}),(l,e)=>{const t=a("el-button"),o=a("el-cascader"),_=a("cl-form");return c(),k(S,null,[r(t,{type:"success",onClick:d},{default:s(()=>[$("快速创建")]),_:1}),r(_,{ref_key:"Form",ref:m},{"slot-entity":s(({scope:i})=>[r(o,{modelValue:i.entity,"onUpdate:modelValue":u=>i.entity=u,filterable:"",separator:".",options:h.value,onChange:p},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1},512)],64)}}}),he=v({name:"auto-menu"}),ye=v({...he,setup(A){return(b,w)=>E(D)?(c(),I(be,{key:0})):K("",!0)}}),ve=v({name:"auto-perms"}),we=v({...ve,props:{menuId:[String,Number]},emits:["open","close"],setup(A,{emit:b}){const w=A,g=b,{service:m}=N(),y=F.useForm();async function f(){return m.base.open.eps().then(d=>{const p=[],l=[];for(const e in d)d[e].forEach(t=>{var o;t.prefix=(o=t.prefix)==null?void 0:o.replace("/admin/",""),t.prefix&&l.push(t.prefix),p.push(t)});return{prop:"entity",label:"实体数据",component:{name:"el-cascader",props:{options:q(l),separator:".",props:{multiple:!0},onChange(e){var o;const t=[];e.forEach(_=>{const i=p.find(u=>u.prefix==_.join("/"));i&&(i.api.forEach(u=>{u.perms=(i.prefix+u.path).replace(/\//g,":"),u.checked=!0}),t.push(i))}),(o=y.value)==null||o.setForm("list",t)}}}}})}async function h(){var d;g("open"),(d=y.value)==null||d.open({title:"自动添加权限",width:"800px",dialog:{draggable:!0,controls:["close"]},props:{labelPosition:"top"},op:{saveButtonText:"一键添加"},items:[await f(),{prop:"list",label:"权限列表",value:[],hidden({scope:p}){return!p.entity},component:{name:"slot-list"}}],on:{submit(p,{done:l,close:e}){if(!p.entity){C.error("请选择实体数据"),l();return}const t=p.list.map(o=>o.api).flat().filter(o=>o.checked);if(t.find(o=>!o.summary)){C.error("请填写权限名称"),l();return}if(t.length==0){C.error("请至少选择一个权限"),l();return}Promise.all(t.map(o=>m.base.sys.menu.add({type:2,parentId:w.menuId,name:o.summary,perms:o.perms}))).then(()=>{C.success("添加权限成功"),e(),g("close")}).catch(o=>{l(),C.error(o.message)})}}})}return(d,p)=>{const l=a("el-button"),e=a("el-divider"),t=a("el-switch"),o=a("el-input"),_=a("cl-menu-perms"),i=a("el-scrollbar"),u=a("cl-form");return c(),k(S,null,[E(D)?(c(),I(l,{key:0,onClick:h,style:{"margin-left":"10px"}},{default:s(()=>[$("自动添加")]),_:1})):K("",!0),r(u,{ref_key:"Form",ref:y},{"slot-list":s(({scope:U})=>[r(i,{class:"scrollbar"},{default:s(()=>[(c(!0),k(S,null,P(U.list,(R,M)=>(c(),k("div",{class:"list",key:M},[r(e,{"content-position":"left"},{default:s(()=>[$(j(R.prefix),1)]),_:2},1024),(c(!0),k(S,null,P(R.api,(x,O)=>(c(),k("div",{class:"item",key:O},[r(t,{modelValue:x.checked,"onUpdate:modelValue":T=>x.checked=T},null,8,["modelValue","onUpdate:modelValue"]),r(o,{modelValue:x.summary,"onUpdate:modelValue":T=>x.summary=T,clearable:"",placeholder:"权限名称",disabled:!x.checked},null,8,["modelValue","onUpdate:modelValue","disabled"]),r(_,{modelValue:x.perms,"onUpdate:modelValue":T=>x.perms=T,disabled:!x.checked},null,8,["modelValue","onUpdate:modelValue","disabled"])]))),128))]))),128))]),_:2},1024)]),_:1},512)],64)}}}),ge=ue(we,[["__scopeId","data-v-e83e2a0f"]]),ke={key:1},xe={key:1},Ve={key:1},Ce=v({name:"sys-menu"}),ft=v({...Ce,setup(A){const{service:b,mitt:w}=N(),{menu:g}=Q(),m=F.useTable({contextMenu:[e=>({label:"新增",hidden:!(e.type!=2&&b.base.sys.user._permission.add),callback(t){p(e),t()}}),"update","delete",e=>({label:"权限",hidden:!(e.type!=2&&b.base.sys.user._permission.add),callback(t){l(e),t()}})],columns:[{type:"selection"},{prop:"name",label:"名称",align:"left",width:200,fixed:"left"},{prop:"isShow",label:"是否显示",width:100},{prop:"icon",label:"图标",width:100},{prop:"type",label:"类型",width:100,dict:[{label:"目录",value:0,type:"warning"},{label:"菜单",value:1,type:"success"},{label:"权限",value:2,type:"danger"}]},{prop:"router",label:"节点路由",minWidth:160},{prop:"keepAlive",label:"路由缓存",width:100},{prop:"viewPath",label:"文件路径",minWidth:200,showOverflowTooltip:!0},{prop:"perms",label:"权限",headerAlign:"center",minWidth:300,dict:[]},{prop:"orderNum",label:"排序号",width:90,fixed:"right"},{prop:"updateTime",label:"更新时间",sortable:"custom",width:160},{label:"操作",type:"op",width:250,buttons:["slot-add","edit","delete"]}]}),y=F.useUpsert({dialog:{width:"800px"},items:[{prop:"type",value:0,label:"节点类型",required:!0,component:{name:"el-radio-group",options:[{label:"目录",value:0},{label:"菜单",value:1},{label:"权限",value:2}]}},{prop:"name",label:"节点名称",component:{name:"el-input"},required:!0},{prop:"parentId",label:"上级节点",hook:{submit(e){return e===""?null:e}},component:{name:"slot-parentId"}},{prop:"router",label:"节点路由",hidden:({scope:e})=>e.type!=1,component:{name:"el-input",props:{placeholder:"请输入节点路由，如：/test"}}},{prop:"keepAlive",value:!0,label:"路由缓存",hidden:({scope:e})=>e.type!=1,component:{name:"el-radio-group",options:[{label:"开启",value:!0},{label:"关闭",value:!1}]}},{prop:"isShow",label:"是否显示",value:!0,hidden:({scope:e})=>e.type==2,flex:!1,component:{name:"el-switch"}},{prop:"viewPath",label:"文件路径",hidden:({scope:e})=>e.type!=1,component:{name:"cl-menu-file"}},{prop:"icon",label:"节点图标",hidden:({scope:e})=>e.type==2,component:{name:"cl-menu-icon"}},{prop:"orderNum",label:"排序号",component:{name:"el-input-number",props:{placeholder:"请填写排序号",min:0,max:99,"controls-position":"right"}}},{prop:"perms",label:"权限",hidden:({scope:e})=>e.type!=2,component:{name:"slot-perms"}}],plugins:[F.setFocus("name")]}),f=F.useCrud({service:b.base.sys.menu,onRefresh(e,{render:t}){b.base.sys.menu.list().then(o=>{t(X(o)),g.get()})}},e=>{e.refresh()});function h(e){var t;(t=f.value)==null||t.refresh(e)}function d(e,t){var o;t!=null&&t.property&&e.children&&((o=m.value)==null||o.toggleRowExpansion(e))}function p({type:e,id:t}){var o;(o=f.value)==null||o.rowAppend({parentId:t,parentType:e,type:e+1,keepAlive:!0,isShow:!0})}function l({id:e}){var t;(t=f.value)==null||t.rowAppend({parentId:e,type:2})}return w.on("helper.createMenu",h),(e,t)=>{const o=a("cl-refresh-btn"),_=a("cl-add-btn"),i=a("cl-multi-delete-btn"),u=a("cl-flex1"),U=a("cl-row"),R=a("cl-svg"),M=a("cl-switch"),x=a("el-link"),O=a("el-button"),T=a("cl-table"),W=a("cl-menu-select"),H=a("cl-menu-perms"),J=a("cl-upsert"),z=a("cl-crud"),Y=le("permission");return c(),I(z,{ref_key:"Crud",ref:f},{default:s(()=>[r(U,null,{default:s(()=>{var n;return[r(o),r(_),r(i),r(ye),r(u),r(me),r(_e,{data:(n=E(m))==null?void 0:n.data},null,8,["data"])]}),_:1}),r(U,null,{default:s(()=>[r(T,{ref_key:"Table",ref:m,"row-key":"id",onRowClick:d},{"column-icon":s(({scope:n})=>[r(R,{name:n.row.icon,size:"16px",style:{"margin-top":"5px"}},null,8,["name"])]),"column-isShow":s(({scope:n})=>[n.row.type!=2?(c(),I(M,{key:0,modelValue:n.row.isShow,"onUpdate:modelValue":V=>n.row.isShow=V,scope:n.row,column:n.column},null,8,["modelValue","onUpdate:modelValue","scope","column"])):(c(),k("span",ke))]),"column-keepAlive":s(({scope:n})=>[n.row.type==1?(c(),I(M,{key:0,modelValue:n.row.keepAlive,"onUpdate:modelValue":V=>n.row.keepAlive=V,scope:n.row,column:n.column},null,8,["modelValue","onUpdate:modelValue","scope","column"])):(c(),k("span",xe))]),"column-router":s(({scope:n})=>[n.row.type==1?(c(),I(x,{key:0,type:"success",href:n.row.router},{default:s(()=>[$(j(n.row.router),1)]),_:2},1032,["href"])):(c(),k("span",Ve,j(n.row.router),1))]),"slot-add":s(({scope:n})=>[re((c(),I(O,{type:"success",text:"",bg:"",onClick:V=>p(n.row)},{default:s(()=>[$("新增")]),_:2},1032,["onClick"])),[[Y,{and:[E(b).base.sys.menu.permission.add,n.row.type!=2]}]])]),_:1},512)]),_:1}),r(J,{ref_key:"Upsert",ref:y},{"slot-parentId":s(({scope:n})=>[r(W,{modelValue:n.parentId,"onUpdate:modelValue":V=>n.parentId=V,type:n.type},null,8,["modelValue","onUpdate:modelValue","type"])]),"slot-perms":s(({scope:n})=>[r(H,{modelValue:n.perms,"onUpdate:modelValue":V=>n.perms=V},null,8,["modelValue","onUpdate:modelValue"]),r(ge,{"menu-id":n.parentId,onOpen:t[0]||(t[0]=V=>{var B;return(B=E(y))==null?void 0:B.close()}),onClose:t[1]||(t[1]=V=>h())},null,8,["menu-id"])]),_:1},512)]),_:1},512)}}});export{ft as default};