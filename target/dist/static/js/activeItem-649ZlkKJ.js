import{g as k,i as c}from"./index-BzwtatPw.js";import"./store-BGvsPsWR.js";import{u as w}from"./index-OBXFyj3D.js";import{a as T,b as j}from"./element-plus-DaJS5H-O.js";import{d as u,Y as o,o as q,J as B,K as m,i as r}from"./@vue.runtime-core-B2X3lOUZ.js";import{w as D}from"./@vue.reactivity-V6IlnEmz.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@vue.runtime-dom-DkKQpP1Z.js";import"./@vue.shared-D-bMerGS.js";import"./@vueuse.core-Bp0bPelK.js";import"./@vueuse.shared-CZpoHp70.js";import"./lodash-es-I-EvhVFk.js";import"./mitt-C1z4c41a.js";import"./axios-CvWkLj0m.js";import"./nprogress-B7fG2QpQ.js";import"./chardet-C_72lc3Z.js";import"./pinia-ByvooDwk.js";import"./vue-demi-Dq6ymT-8.js";import"./monaco-editor-CuOEaJz6.js";import"./vue-echarts-BbwyaQnR.js";import"./resize-detector-CZu9PX2v.js";import"./echarts-Bv2MlBtc.js";import"./tslib-BDyQ-Jie.js";import"./zrender-BSc91FC-.js";import"./vue-router-4IlAtr41.js";import"./mockjs-Bfc9hT_P.js";import"./dayjs-DOBku9Nj.js";import"./vue-xN6KRtQP.js";import"./@element-plus.icons-vue-BCFYf-67.js";import"./@popperjs.core-D9SI2xQl.js";import"./@ctrl.tinycolor-r5W6hzzQ.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui.dom-B8Qxuwjg.js";import"./@floating-ui.core-DTrSsA1T.js";import"./@floating-ui.utils-Bh-IyuRp.js";const N=u({name:"菜单名称"}),U=u({...N,props:{activeId:{type:String,default:""}},setup(d){const{dict:s}=k(),f=d,{activeId:a}=D(f),{service:p}=w(),v=c.useUpsert({items:[{label:"活动项",prop:"activeItemName",required:!0,component:{name:"el-input"}},{label:"活动项描述",prop:"activeItemDesc",required:!0,component:{name:"el-input"}},{label:"活动项类型",prop:"activeItemType",required:!0,component:{name:"cl-select",props:{options:s.get("activeItemType")}}}],onSubmit(e,{next:t}){e.activeId=a.value,t({...e})}}),n=c.useTable({columns:[{type:"selection"},{label:"活动项",prop:"activeItemName",align:"left",minWidth:200},{label:"活动项描述",prop:"activeItemDesc",align:"left",minWidth:200},{label:"活动项类型",prop:"activeItemType",align:"left",dict:s.get("activeItemType"),minWidth:200},{type:"op",buttons:["edit",{label:"删除",type:"danger",onClick({scope:e}){var t,i;if(((i=(t=n==null?void 0:n.value)==null?void 0:t.data)==null?void 0:i.length)===1){T.error("活动项数量不能为0");return}j.confirm("是否要删除该活动项","提示",{type:"warning"}).then(()=>p.base.onmyoji.activeItem.delete({ids:[e.row]})).then(()=>{b()})}}]}]}),l=c.useCrud({service:p.base.onmyoji.activeItem,onRefresh(e,{render:t}){p.base.onmyoji.activeItem.list({activeId:a.value}).then(i=>{t(i)})}},e=>{e.refresh()});function b(e){var t;(t=l.value)==null||t.refresh(e)}return(e,t)=>{const i=o("cl-refresh-btn"),y=o("cl-add-btn"),I=o("cl-flex1"),h=o("cl-search-key"),_=o("cl-row"),g=o("cl-table"),x=o("cl-upsert"),C=o("cl-crud");return q(),B(C,{class:"activeItemCrud",ref_key:"Crud",ref:l},{default:m(()=>[r(_,null,{default:m(()=>[r(i),r(y),r(I),r(h)]),_:1}),r(_,null,{default:m(()=>[r(g,{ref_key:"Table",ref:n},null,512)]),_:1}),r(x,{ref_key:"Upsert",ref:v},null,512)]),_:1},512)}}}),be=E(U,[["__scopeId","data-v-9da870f6"]]);export{be as default};