import{i as k,w as B}from"./index-BzwtatPw.js";import{d as N}from"./dayjs-DOBku9Nj.js";import{F as W}from"./file-saver-CpvZPGwl.js";import{u as y,w as Y}from"./xlsx-DrgVwiaB.js";import{r as j,y as D}from"./lodash-es-I-EvhVFk.js";import{a as w}from"./element-plus-DaJS5H-O.js";import{d as L,i as E,Y as A}from"./@vue.runtime-core-B2X3lOUZ.js";import{r as M}from"./@vue.reactivity-V6IlnEmz.js";import"./@vue.runtime-dom-DkKQpP1Z.js";import"./@vue.shared-D-bMerGS.js";import"./@vueuse.core-Bp0bPelK.js";import"./@vueuse.shared-CZpoHp70.js";import"./store-BGvsPsWR.js";import"./chardet-C_72lc3Z.js";import"./mitt-C1z4c41a.js";import"./axios-CvWkLj0m.js";import"./nprogress-B7fG2QpQ.js";import"./pinia-ByvooDwk.js";import"./vue-demi-Dq6ymT-8.js";import"./monaco-editor-CuOEaJz6.js";import"./vue-echarts-BbwyaQnR.js";import"./resize-detector-CZu9PX2v.js";import"./echarts-Bv2MlBtc.js";import"./tslib-BDyQ-Jie.js";import"./zrender-BSc91FC-.js";import"./vue-router-4IlAtr41.js";import"./mockjs-Bfc9hT_P.js";import"./vue-xN6KRtQP.js";import"./@element-plus.icons-vue-BCFYf-67.js";import"./@popperjs.core-D9SI2xQl.js";import"./@ctrl.tinycolor-r5W6hzzQ.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui.dom-B8Qxuwjg.js";import"./@floating-ui.core-DTrSsA1T.js";import"./@floating-ui.utils-Bh-IyuRp.js";function T(e,u){for(var n={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!=e.length;++a)for(var c=0;c!=e[a].length;++c){r.s.r>a&&(r.s.r=a),r.s.c>c&&(r.s.c=c),r.e.r<a&&(r.e.r=a),r.e.c<c&&(r.e.c=c);var f={v:e[a][c]};if(f.v!=null){var d=y.encode_cell({c,r:a});f.t="s",n[d]=f}}return r.s.c<1e7&&(n["!ref"]=y.encode_range(r)),n}function b(){if(!(this instanceof b))return new b;this.SheetNames=[],this.Sheets={}}function $(e){for(var u=new ArrayBuffer(e.length),n=new Uint8Array(u),r=0;r!=e.length;++r)n[r]=e.charCodeAt(r)&255;return u}function H({multiHeader:e=[],header:u,data:n,filename:r,merges:a=[],autoWidth:c=!0,bookType:f="xlsx"}={}){r=r||"excel-list",n=[...n],n.unshift(u);for(let o=e.length-1;o>-1;o--)n.unshift(e[o]);var d="SheetJS",v=new b,p=T(n);if(a.length>0&&(p["!merges"]||(p["!merges"]=[]),a.forEach(o=>{p["!merges"].push(y.decode_range(o))})),c){const o=n.map(l=>l.map(i=>i==null?{wch:10}:i.toString().charCodeAt(0)>255?{wch:i.toString().length*2}:{wch:i.toString().length}));let t=o[0];for(let l=1;l<o.length;l++)for(let i=0;i<o[l].length;i++)t[i].wch<o[l][i].wch&&(t[i].wch=o[l][i].wch);p["!cols"]=t}v.SheetNames.push(d),v.Sheets[d]=p;var m=Y(v,{bookType:f,bookSST:!1,type:"binary"});W.saveAs(new Blob([$(m)],{type:"application/octet-stream"}),`${r}.${f}`)}const Se=L({name:"cl-export-btn",props:{filename:[Function,String],autoWidth:{type:Boolean,default:!0},bookType:{type:String,default:"xlsx"},header:Array,columns:{type:Array},data:[Function,Array],maxExportLimit:Number},setup(e,{slots:u}){const n=k.useCrud(),r=k.useForm(),a=M(!1);async function c(m,o){return m.filter(t=>!t.hidden&&o.includes(t.prop)).map(t=>t.label)}async function f(){var o,t,l;const m={...(o=n.value)==null?void 0:o.paramsReplace(n.value.params),maxExportLimit:e.maxExportLimit,isExport:!0};return typeof e.data=="function"?e.data(m):e.data?e.data:(t=n.value)!=null&&t.service?(l=n.value)==null?void 0:l.service.page(m).then(i=>i.list.map((s,x)=>{var S,_;for(const h in s){const g=(S=e.columns)==null?void 0:S.find(F=>F.prop==h);g&&(g.formatter&&(s[h]=g.formatter(s,g,s[h],x)),g.dict&&(s[h]=((_=B(s[h],g.dict))==null?void 0:_.label)||s[h]))}return s})).catch(i=>(w.error(i.message),[])):[]}async function d(){return typeof e.filename=="function"?await(e==null?void 0:e.filename()):e.filename||`报表（${N().format("YYYY-MM-DD HH_mm_ss")}）`}async function v(m){a.value=!0;const o=m.map(s=>s.prop).filter(Boolean),t=await c(m,o);let l=await f();if(!l)return a.value=!1,w.error("导出数据异常");const i=await d();l=l.map(s=>o.map(x=>s[x])),H({header:t,data:l,filename:i,autoWidth:e.autoWidth,bookType:e.bookType}),a.value=!1}function p(){var o;if(!e.columns)return;const m=j(e.columns,"orderNum","asc").filter(t=>!(t.hidden===!0||["selection","expand","index","op"].includes(t.type)||t.filterExport||t["filter-export"]));(o=r.value)==null||o.open({title:"导出",width:"600px",props:{labelPosition:"top"},form:{checked:m.map(t=>t.prop)},items:[{label:"选择列",prop:"checked",component:{name:"el-checkbox-group",options:m.map(t=>({label:String(t.label),value:t.prop}))}}],on:{submit(t,{close:l,done:i}){D(t.checked)?(w.warning("请先选择要导出的列"),i()):(v(m.filter(s=>t.checked.includes(s.prop))),l())}}})}return()=>E(A("el-button"),{loading:a.value,onClick:p},{default:()=>[u.default?u.default():"导出",E(A("cl-form"),{ref:r},null)]})}});export{Se as default};