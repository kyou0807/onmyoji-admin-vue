import{v as N}from"./@vue.runtime-dom-DkKQpP1Z.js";import{$ as H}from"./@element-plus.icons-vue-BCFYf-67.js";import"./index-BzwtatPw.js";import"./store-BGvsPsWR.js";import{u as Q}from"./index-OBXFyj3D.js";import{u as W}from"./group-BfmV4XTx.js";import{U as X}from"./index-B9NYsrmA.js";import{a as y,b as Z}from"./element-plus-DaJS5H-O.js";import{d as S,q as ee,Y as d,$ as ae,o as p,c as m,i as s,K as u,a as i,O as E,J as z,N as te,L as V,F as le,V as ne,E as oe}from"./@vue.runtime-core-B2X3lOUZ.js";import{r as D,k as se,u as _}from"./@vue.reactivity-V6IlnEmz.js";import{o as ie,O as M}from"./@vue.shared-D-bMerGS.js";const ce={class:"cl-upload-space-inner__right"},re={class:"cl-upload-space-inner__header"},pe={style:{margin:"0px 10px"}},ue=["onClick"],de={class:"cl-upload-space-inner__file-index"},fe={key:1,class:"cl-upload-space-inner__file-empty"},me=i("p",null,"将文件拖到此处，或点击按钮上传",-1),_e={class:"cl-upload-space-inner__footer"},ve=S({name:"cl-upload-space-inner"}),$e=S({...ve,props:{limit:{type:Number,default:99},accept:String,selectable:Boolean},emits:["selection-change","confirm"],setup(b,{expose:O,emit:T}){const v=b,U=T,{service:g,browser:x,refs:q,setRefs:G}=Q(),{ViewGroup:I}=W({label:"分类",title:"文件列表",service:g.space.type,onEdit(){return{width:"400px",props:{labelPosition:"top"},dialog:{controls:["close"]},items:[{label:"名称",prop:"name",value:"",required:!0,component:{name:"el-input",props:{maxlength:20,clearable:!0}}}]}},onSelect(e){f({classifyId:e.id,page:1})}}),h=D(!1),l=D([]),c=D([]),r=se({page:1,size:20,total:0});function P(){l.value=[]}function j(e){var a,t;g.space.info.add({classifyId:(t=(a=I.value)==null?void 0:a.selected)==null?void 0:t.id,...e}).then(o=>{e.id=o.id}).catch(o=>{y.error(o.message)})}function F(e){c.value.unshift(e)}const w={page:1};async function f(e){var a;Object.assign(w,{type:((a=v.accept)==null?void 0:a.split("/")[0].replace("*",""))||void 0,...r,...e}),w.page==1&&(h.value=!0),await g.space.info.page(w).then(t=>{Object.assign(r,t.pagination),c.value=t.list}),h.value=!1}function L(e){const a=l.value.findIndex(t=>t.id===e.id);a>=0?l.value.splice(a,1):v.limit==1?l.value=[e]:l.value.length<v.limit?l.value.push(e):y.warning(`最多只能选择${v.limit}个文件`)}function $(e){return l.value.findIndex(a=>a.id===e)+1}function B(e){const a=e?[e.id]:l.value.map(t=>t.id);Z.confirm("此操作将删除文件, 是否继续?","提示",{type:"warning"}).then(()=>{y.success("删除成功"),a.forEach(t=>{[c.value,l.value].forEach(o=>{const k=o.findIndex(C=>C.id===t);o.splice(k,1)})}),g.space.info.delete({ids:a}).catch(t=>{y.error(t.message)})}).catch(()=>null)}function R(e){e.preventDefault()}function J(e){e.preventDefault(),e.dataTransfer&&e.dataTransfer.files.forEach((a,t)=>{setTimeout(()=>{q.upload.upload(a)},t*10)})}return ee(l,e=>{U("selection-change",e)},{deep:!0}),oe("space",{selection:l,refresh:f,loading:h,list:c}),O({selection:l,open,close,clear:P,refresh:f}),(e,a)=>{const t=d("el-button"),o=d("cl-upload"),k=d("el-icon"),C=d("el-scrollbar"),K=d("el-pagination"),Y=d("cl-view-group"),A=ae("loading");return p(),m("div",{class:"cl-upload-space-inner",onDragover:R,onDrop:J},[s(Y,{ref_key:"ViewGroup",ref:I},{right:u(()=>[i("div",ce,[i("div",re,[s(t,{onClick:a[0]||(a[0]=n=>f({page:1}))},{default:u(()=>[E("刷新")]),_:1}),i("div",pe,[s(o,{ref:_(G)("upload"),menu:"space",type:"file",multiple:"","show-file-list":!1,limit:9999,accept:b.accept,onSuccess:j,onUpload:F},{default:u(()=>[s(t,{type:"primary"},{default:u(()=>[E("点击上传")]),_:1})]),_:1},8,["accept"])]),b.selectable?te("",!0):(p(),z(t,{key:0,type:"danger",disabled:l.value.length==0,onClick:a[1]||(a[1]=n=>B())},{default:u(()=>[E("删除选中文件")]),_:1},8,["disabled"]))]),V((p(),z(C,{class:"cl-upload-space-inner__file"},{default:u(()=>[c.value.length>0?(p(),m("div",{key:0,class:ie(["cl-upload-space-inner__file-list",{"is-mini":_(x).isMini}])},[(p(!0),m(le,null,ne(c.value,n=>(p(),m("div",{class:"cl-upload-space-inner__file-item",key:n.preload||n.url,onClick:ge=>L(n)},[s(X,{item:n,list:c.value,onRemove:B},null,8,["item","list"]),V(i("div",de,[i("span",null,M($(n.id)),1)],512),[[N,$(n.id)]])],8,ue))),128))],2)):(p(),m("div",fe,[s(k,{class:"el-icon--upload"},{default:u(()=>[s(_(H))]),_:1}),me]))]),_:1})),[[A,h.value]]),i("div",_e,[s(K,{small:!!_(x).isMini,total:r.total,"default-page-size":r.size,"current-page":r.page,"onUpdate:currentPage":a[2]||(a[2]=n=>r.page=n),background:"",layout:"prev, pager, next",onCurrentChange:a[3]||(a[3]=n=>f())},null,8,["small","total","default-page-size","current-page"]),V(i("span",{class:"total"},"共 "+M(r.total)+" 条",513),[[N,!_(x).isMini]])])])]),_:1},512)],32)}}});export{$e as _};