import{g as O,i as a}from"./index-BzwtatPw.js";import"./store-BGvsPsWR.js";import{u as W}from"./index-OBXFyj3D.js";import{d as u,Y as o,o as x,J as w,K as s,i as e}from"./@vue.runtime-core-B2X3lOUZ.js";import"./@vue.runtime-dom-DkKQpP1Z.js";import"./@vue.shared-D-bMerGS.js";import"./@vue.reactivity-V6IlnEmz.js";import"./element-plus-DaJS5H-O.js";import"./lodash-es-I-EvhVFk.js";import"./@element-plus.icons-vue-BCFYf-67.js";import"./@popperjs.core-D9SI2xQl.js";import"./@ctrl.tinycolor-r5W6hzzQ.js";import"./dayjs-DOBku9Nj.js";import"./chardet-C_72lc3Z.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui.dom-B8Qxuwjg.js";import"./@floating-ui.core-DTrSsA1T.js";import"./@floating-ui.utils-Bh-IyuRp.js";import"./@vueuse.core-Bp0bPelK.js";import"./@vueuse.shared-CZpoHp70.js";import"./mitt-C1z4c41a.js";import"./axios-CvWkLj0m.js";import"./nprogress-B7fG2QpQ.js";import"./pinia-ByvooDwk.js";import"./vue-demi-Dq6ymT-8.js";import"./monaco-editor-CuOEaJz6.js";import"./vue-echarts-BbwyaQnR.js";import"./resize-detector-CZu9PX2v.js";import"./echarts-Bv2MlBtc.js";import"./tslib-BDyQ-Jie.js";import"./zrender-BSc91FC-.js";import"./vue-router-4IlAtr41.js";import"./mockjs-Bfc9hT_P.js";import"./vue-xN6KRtQP.js";var d=(t=>(t.ONGOING="ongoing",t.END="end",t.EXPIRED="expired",t))(d||{}),f=(t=>(t.COUNTDOWN="countdown",t))(f||{});function _(t){const n=Math.floor(t/1e3%60),i=Math.floor(t/(1e3*60)%60),r=Math.floor(t/(1e3*60*60)%24);let l="";return r>0&&(l+=r+"小时"),i>0&&(l+=i+"分钟"),n>0&&(l+=n+"秒"),l}const D=u({name:"菜单名称"}),ut=u({...D,setup(t){const{dict:n}=O(),{service:i}=W(),r=a.useUpsert({items:[{prop:"taskName",label:"任务名称",span:12,required:!0,component:{name:"el-input"}},{prop:"taskDesc",label:"任务描述",span:12,component:{name:"el-input"}},{prop:"taskType",label:"任务类型",value:f.COUNTDOWN,span:12,component:{name:"cl-select",props:{options:n.get("taskType")}}},{prop:"taskStatus",label:"任务状态",value:d.ONGOING,span:12,component:{name:"cl-select",props:{options:n.get("taskStatus")}}},{prop:"delayTime",label:"延迟时间",value:5e3,span:24,required:!0,append:()=>{var p;return _((p=r==null?void 0:r.value)==null?void 0:p.form.delayTime)},component:{name:"el-input-number",props:{controlsPosition:"right",min:0,step:1e3}}}]}),l=a.useTable({columns:[{type:"selection",width:60},{prop:"taskName",label:"任务名称",minWidth:150},{prop:"taskDesc",label:"任务描述",showOverflowTooltip:!0,minWidth:150},{prop:"taskType",label:"任务类型",dict:n.get("taskType"),minWidth:150},{prop:"taskStatus",label:"任务状态",dict:n.get("taskStatus"),minWidth:150},{prop:"taskStartTime",label:"开始时间",minWidth:150},{prop:"taskEndTime",label:"结束时间",minWidth:150},{prop:"delayTime",label:"延迟时间(毫秒)",formatter:p=>_(p.delayTime),minWidth:150}]}),b=a.useCrud({service:i.base.onmyoji.task},p=>{p.refresh()});return(p,E)=>{const h=o("cl-refresh-btn"),k=o("cl-add-btn"),T=o("cl-multi-delete-btn"),c=o("cl-flex1"),y=o("cl-search-key"),m=o("cl-row"),N=o("cl-table"),g=o("cl-pagination"),v=o("cl-upsert"),C=o("cl-crud");return x(),w(C,{ref_key:"Crud",ref:b},{default:s(()=>[e(m,null,{default:s(()=>[e(h),e(k),e(T),e(c),e(y)]),_:1}),e(m,null,{default:s(()=>[e(N,{ref_key:"Table",ref:l},null,512)]),_:1}),e(m,null,{default:s(()=>[e(c),e(g)]),_:1}),e(v,{ref_key:"Upsert",ref:r},null,512)]),_:1},512)}}});export{ut as default};