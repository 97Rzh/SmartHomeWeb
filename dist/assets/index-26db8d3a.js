import{I as P,d as ee,r as m,Q as de,e as o,o as g,v as C,w as t,g as e,h as u,f as D,F as E,q as F,C as R,m as Q,j as K,t as ie,J as L,c as pe,N as ce,M as me,y as _e,H as fe,A as Y,B as Z}from"./index-ea9679ea.js";const ge=(S,U,b)=>P.get(`/admin/product/${S}/${U}?category3Id=${b}`),le=()=>P.get("/admin/product/baseTrademark/getTrademarkList"),ae=S=>P.get("/admin/product/spuImageList/"+S),ue=S=>P.get("/admin/product/spuSaleAttrList/"+S),te=()=>P.get("/admin/product/baseSaleAttrList"),Se=S=>S.id?P.post("/admin/product/updateSpuInfo",S):P.post("/admin/product/saveSpuInfo",S),ye=S=>P.post("/admin/product/saveSkuInfo",S),ve=S=>P.get("/admin/product/findBySpuId/"+S),be=S=>P.delete("/admin/product/deleteSpu/"+S),Ve=["src"],ke=ee({__name:"spuForm",emits:["changeScene"],setup(S,{expose:U,emit:b}){const k=()=>{b("changeScene",{flag:0,params:"update"})};let h=m([]),V=m([]),A=m([]),r=m([]),w=m(!1),q=m(""),d=m({category3Id:"",spuName:"",description:"",tmId:"",spuImageList:[],spuSaleAttrList:[]}),v=m("");const N=async l=>{d.value=l;let a=await le(),s=await ae(l.id),I=await ue(l.id),H=await te();h.value=a.data,V.value=s.data.map(z=>({name:z.imgName,url:z.imgUrl})),A.value=I.data,r.value=H.data},i=l=>{q.value=l.url,w.value=!0},p=()=>{console.log(123)},c=l=>l.type=="image/png"||l.type=="image/jpeg"||l.type=="image/gif"?l.size/1024/1024<3?!0:(L({type:"error",message:"上传文件务必小于3M"}),!1):(L({type:"error",message:"上传文件务必PNG|JPG|GIF"}),!1);let x=de(()=>r.value.filter(a=>A.value.every(s=>a.name!=s.saleAttrName)));const $=()=>{const[l,a]=v.value.split(":");let s={baseSaleAttrId:l,saleAttrName:a,spuSaleAttrValueList:[]};A.value.push(s),v.value=""},B=l=>{l.flag=!0,l.saleAttrValue=""},_=l=>{const{baseSaleAttrId:a,saleAttrValue:s}=l;let I={baseSaleAttrId:a,saleAttrValueName:s};if(s.trim()==""){L({type:"error",message:"属性值不能为空的"});return}if(l.spuSaleAttrValueList.find(z=>z.saleAttrValueName==s)){L({type:"error",message:"属性值重复"});return}l.spuSaleAttrValueList.push(I),l.flag=!1},f=async()=>{d.value.spuImageList=V.value.map(a=>({imgName:a.name,imgUrl:a.response&&a.response.data||a.url})),d.value.spuSaleAttrList=A.value,(await Se(d.value)).code==200?(L({type:"success",message:d.value.id?"更新成功":"添加成功"}),b("changeScene",{flag:0,params:d.value.id?"update":"add"})):L({type:"success",message:d.value.id?"更新成功":"添加成功"})};return U({initHasSpuData:N,initAddSpu:async l=>{Object.assign(d.value,{category3Id:"",spuName:"",description:"",tmId:"",spuImageList:[],spuSaleAttrList:[]}),V.value=[],A.value=[],v.value="",d.value.category3Id=l;let a=await le(),s=await te();h.value=a.data,r.value=s.data}}),(l,a)=>{const s=o("el-input"),I=o("el-form-item"),H=o("el-option"),z=o("el-select"),W=o("Plus"),y=o("el-icon"),X=o("el-upload"),T=o("el-dialog"),j=o("el-button"),J=o("el-table-column"),ne=o("el-tag"),se=o("el-table"),oe=o("el-form");return g(),C(oe,{"label-width":"100px"},{default:t(()=>[e(I,{label:"SPU名称"},{default:t(()=>[e(s,{placeholder:"请你输入SPU名称",modelValue:u(d).spuName,"onUpdate:modelValue":a[0]||(a[0]=n=>u(d).spuName=n)},null,8,["modelValue"])]),_:1}),e(I,{label:"SPU品牌"},{default:t(()=>[e(z,{modelValue:u(d).tmId,"onUpdate:modelValue":a[1]||(a[1]=n=>u(d).tmId=n)},{default:t(()=>[(g(!0),D(E,null,F(u(h),(n,O)=>(g(),C(H,{key:n.id,label:n.tmName,value:n.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(I,{label:"SPU描述"},{default:t(()=>[e(s,{type:"textarea",placeholder:"请你输入SPU描述",modelValue:u(d).description,"onUpdate:modelValue":a[2]||(a[2]=n=>u(d).description=n)},null,8,["modelValue"])]),_:1}),e(I,{label:"SPU图片"},{default:t(()=>[e(X,{"file-list":u(V),"onUpdate:fileList":a[3]||(a[3]=n=>R(V)?V.value=n:V=n),action:"/api/admin/product/fileUpload","list-type":"picture-card","on-preview":i,"on-remove":p,"before-upload":c},{default:t(()=>[e(y,null,{default:t(()=>[e(W)]),_:1})]),_:1},8,["file-list"]),e(T,{modelValue:u(w),"onUpdate:modelValue":a[4]||(a[4]=n=>R(w)?w.value=n:w=n)},{default:t(()=>[Q("img",{"w-full":"",src:u(q),alt:"Preview Image",style:{width:"100%",height:"100%"}},null,8,Ve)]),_:1},8,["modelValue"])]),_:1}),e(I,{label:"SPU销售属性"},{default:t(()=>[e(z,{modelValue:u(v),"onUpdate:modelValue":a[5]||(a[5]=n=>R(v)?v.value=n:v=n),placeholder:u(x).length?`还未选择${u(x).length}个`:"无"},{default:t(()=>[(g(!0),D(E,null,F(u(x),(n,O)=>(g(),C(H,{value:`${n.id}:${n.name}`,key:n.id,label:n.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"]),e(j,{onClick:$,disabled:!u(v),style:{"margin-left":"10px"},type:"primary",size:"default",icon:"Plus"},{default:t(()=>[K("添加属性")]),_:1},8,["disabled"]),e(se,{border:"",style:{margin:"10px 0px"},data:u(A)},{default:t(()=>[e(J,{label:"序号",type:"index",align:"center",width:"80px"}),e(J,{label:"销售属性名字",width:"120px",prop:"saleAttrName"}),e(J,{label:"销售属性值"},{default:t(({row:n,$index:O})=>[(g(!0),D(E,null,F(n.spuSaleAttrValueList,(M,re)=>(g(),C(ne,{style:{margin:"0px 5px"},onClose:xe=>n.spuSaleAttrValueList.splice(re,1),key:n.id,class:"mx-1",closable:""},{default:t(()=>[K(ie(M.saleAttrValueName),1)]),_:2},1032,["onClose"]))),128)),n.flag==!0?(g(),C(s,{key:0,onBlur:M=>_(n),modelValue:n.saleAttrValue,"onUpdate:modelValue":M=>n.saleAttrValue=M,placeholder:"请你输入属性值",size:"small",style:{width:"100px"}},null,8,["onBlur","modelValue","onUpdate:modelValue"])):(g(),C(j,{key:1,onClick:M=>B(n),type:"primary",size:"small",icon:"Plus"},null,8,["onClick"]))]),_:1}),e(J,{label:"操作",width:"120px"},{default:t(({row:n,$index:O})=>[e(j,{type:"primary",size:"small",icon:"Delete",onClick:M=>u(A).splice(O,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(I,null,{default:t(()=>[e(j,{disabled:!(u(A).length>0),type:"primary",size:"default",onClick:f},{default:t(()=>[K("保存")]),_:1},8,["disabled"]),e(j,{type:"primary",size:"default",onClick:k},{default:t(()=>[K("取消")]),_:1})]),_:1})]),_:1})}}}),Ae=["src"],Ie=ee({__name:"skuForm",emits:["changeScene"],setup(S,{expose:U,emit:b}){let k=m([]),h=m([]),V=m([]),A=m(),r=pe({category3Id:"",spuId:"",tmId:"",skuName:"",price:"",weight:"",skuDesc:"",skuAttrValueList:[],skuSaleAttrValueList:[],skuDefaultImg:""});const w=async(N,i,p)=>{r.category3Id=p.category3Id,r.spuId=p.id,r.tmId=p.tmId;let c=await ce(N,i,p.category3Id),x=await ue(p.id),$=await ae(p.id);k.value=c.data,h.value=x.data,V.value=$.data},q=()=>{b("changeScene",{flag:0,params:""})},d=N=>{V.value.forEach(i=>{A.value.toggleRowSelection(i,!1)}),A.value.toggleRowSelection(N,!0),r.skuDefaultImg=N.imgUrl};U({initSkuData:w});const v=async()=>{r.skuAttrValueList=k.value.reduce((i,p)=>{if(p.attrIdAndValueId){let[c,x]=p.attrIdAndValueId.split(":");i.push({attrId:c,valueId:x})}return i},[]),r.skuSaleAttrValueList=h.value.reduce((i,p)=>{if(p.saleIdAndValueId){let[c,x]=p.saleIdAndValueId.split(":");i.push({saleAttrId:c,saleAttrValueId:x})}return i},[]),(await ye(r)).code==200?(L({type:"success",message:"添加SKU成功"}),b("changeScene",{flag:0,params:""})):L({type:"error",message:"添加SKU失败"})};return(N,i)=>{const p=o("el-input"),c=o("el-form-item"),x=o("el-option"),$=o("el-select"),B=o("el-form"),_=o("el-table-column"),f=o("el-button"),G=o("el-table");return g(),C(B,{"label-width":"100px"},{default:t(()=>[e(c,{label:"SKU名称"},{default:t(()=>[e(p,{placeholder:"SKU名称",modelValue:u(r).skuName,"onUpdate:modelValue":i[0]||(i[0]=l=>u(r).skuName=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"价格(元)"},{default:t(()=>[e(p,{placeholder:"价格(元)",type:"number",modelValue:u(r).price,"onUpdate:modelValue":i[1]||(i[1]=l=>u(r).price=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"重量(g)"},{default:t(()=>[e(p,{placeholder:"重量(g)",type:"number",modelValue:u(r).weight,"onUpdate:modelValue":i[2]||(i[2]=l=>u(r).weight=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"SKU描述"},{default:t(()=>[e(p,{placeholder:"SKU描述",type:"textarea",modelValue:u(r).skuDesc,"onUpdate:modelValue":i[3]||(i[3]=l=>u(r).skuDesc=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"平台属性"},{default:t(()=>[e(B,{inline:!0},{default:t(()=>[(g(!0),D(E,null,F(u(k),(l,a)=>(g(),C(c,{key:l.id,label:l.attrName},{default:t(()=>[e($,{modelValue:l.attrIdAndValueId,"onUpdate:modelValue":s=>l.attrIdAndValueId=s},{default:t(()=>[(g(!0),D(E,null,F(l.attrValueList,(s,I)=>(g(),C(x,{value:`${l.id}:${s.id}`,key:s.id,label:s.valueName},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(c,{label:"销售属性"},{default:t(()=>[e(B,{inline:!0},{default:t(()=>[(g(!0),D(E,null,F(u(h),(l,a)=>(g(),C(c,{label:l.saleAttrName,key:l.id},{default:t(()=>[e($,{modelValue:l.saleIdAndValueId,"onUpdate:modelValue":s=>l.saleIdAndValueId=s},{default:t(()=>[(g(!0),D(E,null,F(l.spuSaleAttrValueList,(s,I)=>(g(),C(x,{value:`${l.id}:${s.id}`,key:s.id,label:s.saleAttrValueName},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(c,{label:"图片名称"},{default:t(()=>[e(G,{border:"",data:u(V),ref_key:"table",ref:A},{default:t(()=>[e(_,{type:"selection",width:"80px",align:"center"}),e(_,{label:"图片"},{default:t(({row:l,$index:a})=>[Q("img",{src:l.imgUrl,alt:"",style:{width:"100px",height:"100px"}},null,8,Ae)]),_:1}),e(_,{label:"名称",prop:"imgName"}),e(_,{label:"操作"},{default:t(({row:l,$index:a})=>[e(f,{type:"primary",size:"small",onClick:s=>d(l)},{default:t(()=>[K("设置默认")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(c,null,{default:t(()=>[e(f,{type:"primary",size:"default",onClick:v},{default:t(()=>[K("保存")]),_:1}),e(f,{type:"primary",size:"default",onClick:q},{default:t(()=>[K("取消")]),_:1})]),_:1})]),_:1})}}}),Ue=["src"],Ce=ee({__name:"index",setup(S){let U=me(),b=m(0),k=m(1),h=m(3),V=m([]),A=m(0),r=m(),w=m(),q=m([]),d=m(!1);_e(()=>U.c3Id,()=>{V.value=[],U.c3Id&&v()});const v=async(_=1)=>{k.value=_;let f=await ge(k.value,h.value,U.c3Id);f.code==200&&(V.value=f.data.records,A.value=f.data.total)},N=()=>{v()},i=()=>{b.value=1,r.value.initAddSpu(U.c3Id)},p=_=>{b.value=1,r.value.initHasSpuData(_)},c=_=>{b.value=_.flag,_.params=="update"?v(k.value):v()},x=_=>{b.value=2,w.value.initSkuData(U.c1Id,U.c2Id,_)},$=async _=>{let f=await ve(_.id);f.code==200&&(q.value=f.data,d.value=!0)},B=async _=>{(await be(_.id)).code==200?(L({type:"success",message:"删除成功"}),v(V.value.length>1?k.value:k.value-1)):L({type:"error",message:"删除失败"})};return fe(()=>{U.$reset()}),(_,f)=>{const G=o("Category"),l=o("el-button"),a=o("el-table-column"),s=o("el-popconfirm"),I=o("el-table"),H=o("el-pagination"),z=o("el-dialog"),W=o("el-card");return g(),D("div",null,[e(G,{scene:u(b)},null,8,["scene"]),e(W,{style:{margin:"10px 0px"}},{default:t(()=>[Y(Q("div",null,[e(l,{onClick:i,type:"primary",size:"default",icon:"Plus",disabled:!u(U).c3Id},{default:t(()=>[K("添加SPU")]),_:1},8,["disabled"]),e(I,{style:{margin:"10px 0px"},border:"",data:u(V)},{default:t(()=>[e(a,{label:"序号",type:"index",align:"center",width:"80px"}),e(a,{label:"SPU名称",prop:"spuName"}),e(a,{label:"SPU描述",prop:"description","show-overflow-tooltip":""}),e(a,{label:"SPU操作"},{default:t(({row:y,$index:X})=>[e(l,{type:"primary",size:"small",icon:"Plus",title:"添加SKU",onClick:T=>x(y)},null,8,["onClick"]),e(l,{type:"primary",size:"small",icon:"Edit",title:"修改SPU",onClick:T=>p(y)},null,8,["onClick"]),e(l,{type:"primary",size:"small",icon:"View",title:"查看SKU列表",onClick:T=>$(y)},null,8,["onClick"]),e(s,{title:`你确定删除${y.spuName}?`,width:"200px",onConfirm:T=>B(y)},{reference:t(()=>[e(l,{type:"primary",size:"small",icon:"Delete",title:"删除SPU"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(H,{"current-page":u(k),"onUpdate:currentPage":f[0]||(f[0]=y=>R(k)?k.value=y:k=y),"page-size":u(h),"onUpdate:pageSize":f[1]||(f[1]=y=>R(h)?h.value=y:h=y),"page-sizes":[3,5,7,9],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:u(A),onCurrentChange:v,onSizeChange:N},null,8,["current-page","page-size","total"])],512),[[Z,u(b)==0]]),Y(e(ke,{ref_key:"spu",ref:r,onChangeScene:c},null,512),[[Z,u(b)==1]]),Y(e(Ie,{ref_key:"sku",ref:w,onChangeScene:c},null,512),[[Z,u(b)==2]]),e(z,{modelValue:u(d),"onUpdate:modelValue":f[2]||(f[2]=y=>R(d)?d.value=y:d=y),title:"SKU列表"},{default:t(()=>[e(I,{border:"",data:u(q)},{default:t(()=>[e(a,{label:"SKU名字",prop:"skuName"}),e(a,{label:"SKU价格",prop:"price"}),e(a,{label:"SKU重量",prop:"weight"}),e(a,{label:"SKU图片"},{default:t(({row:y,$index:X})=>[Q("img",{src:y.skuDefaultImg,style:{width:"100px",height:"100px"}},null,8,Ue)]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])]),_:1})])}}});export{Ce as default};
