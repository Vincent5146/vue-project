(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-611cdbc2"],{1799:function(t,e,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},n={class:"pagination"},l={class:"page-item"},i=Object(a["h"])("span",{"aria-hidden":"true"},"«",-1),r=[i],s=["onClick"],d={class:"page-item"},u=Object(a["h"])("span",{"aria-hidden":"true"},"»",-1),b=[u];function p(t,e,c,i,u,p){return Object(a["z"])(),Object(a["g"])("nav",o,[Object(a["h"])("ul",n,[Object(a["h"])("li",l,[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["Z"])((function(t){return p.updatePage(c.pages.current_page-1)}),["prevent"]))},r)]),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(c.pages.total_pages,(function(t){return Object(a["z"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["Z"])((function(e){return p.updatePage(t)}),["prevent"])},Object(a["M"])(t),9,s)],2)})),128)),Object(a["h"])("li",d,[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["Z"])((function(t){return p.updatePage(c.pages.current_page+1)}),["prevent"]))},b)])])])}var h={props:{pages:{type:Object,default:function(){return{category:null,current_page:1,has_next:!1,has_pre:!1,total_pages:1}}}},methods:{updatePage:function(t){this.$emit("emit-pages",t)}}},m=c("6b0d"),j=c.n(m);const O=j()(h,[["render",p]]);e["a"]=O},d416:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"text-end mt-4"},n={class:"table mt-4"},l=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"150"},"分類"),Object(a["h"])("th",null,"產品名稱"),Object(a["h"])("th",{width:"120"},"產品圖片"),Object(a["h"])("th",{width:"120"},"原價"),Object(a["h"])("th",{width:"120"},"售價"),Object(a["h"])("th",{width:"100"},"是否啟用"),Object(a["h"])("th",{width:"200"},"編輯")])],-1),i=["src"],r={class:"text-right"},s={class:"text-right"},d={key:0,class:"text-success"},u={key:1,class:"text-muted"},b={class:"btn-group"},p=["onClick"],h=["onClick"],m={class:"d-flex justify-content-center"};function j(t,e,c,j,O,f){var g=Object(a["J"])("Loading"),v=Object(a["J"])("Pagination"),P=Object(a["J"])("ProductModal"),y=Object(a["J"])("DelModal");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(g,{active:O.isLoading},null,8,["active"]),Object(a["h"])("div",o,[Object(a["h"])("button",{type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[0]||(e[0]=function(t){return f.openModal(!0)})}," 增加一個產品 ")]),Object(a["h"])("table",n,[l,Object(a["h"])("tbody",null,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(O.products,(function(e){return Object(a["z"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,Object(a["M"])(e.category),1),Object(a["h"])("td",null,Object(a["M"])(e.title),1),Object(a["h"])("td",null,[Object(a["h"])("img",{class:"img-fluid",src:e.imageUrl,alt:"產品圖"},null,8,i)]),Object(a["h"])("td",r,Object(a["M"])(t.$filters.currency(e.origin_price)),1),Object(a["h"])("td",s,Object(a["M"])(t.$filters.currency(e.price)),1),Object(a["h"])("td",null,[e.is_enabled?(Object(a["z"])(),Object(a["g"])("span",d,"啟用")):(Object(a["z"])(),Object(a["g"])("span",u,"未啟用"))]),Object(a["h"])("td",null,[Object(a["h"])("div",b,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return f.openModal(!1,e)}}," 編輯 ",8,p),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return f.openDelProductModal(e)}}," 刪除 ",8,h)])])])})),128))])]),Object(a["h"])("div",m,[Object(a["k"])(v,{pages:O.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"])]),Object(a["k"])(P,{ref:"productModal",product:O.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),Object(a["k"])(y,{item:O.tempProduct,ref:"delModal",onDelItem:f.delProduct},null,8,["item","onDelItem"])],64)}var O=c("5530"),f=(c("99af"),c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),g={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},P=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"新增產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},k={class:"row"},x={class:"col-sm-4"},w={class:"mb-3"},M=Object(a["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),U={class:"mb-3"},_=Object(a["h"])("label",{for:"customFile",class:"form-label"},[Object(a["j"])(" 或 上傳圖片 "),Object(a["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),S=["src"],C={key:0,class:"mt-5"},$=["onUpdate:modelValue"],z=["onClick"],V={key:0},Y={class:"col-sm-8"},L={class:"mb-3"},D=Object(a["h"])("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row gx-2"},J={class:"mb-3 col-md-6"},I=Object(a["h"])("label",{for:"category",class:"form-label"},"分類",-1),N={class:"mb-3 col-md-6"},H=Object(a["h"])("label",{for:"price",class:"form-label"},"單位",-1),Z={class:"row gx-2"},E={class:"mb-3 col-md-6"},q=Object(a["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},B=Object(a["h"])("label",{for:"price",class:"form-label"},"售價",-1),G=Object(a["h"])("hr",null,null,-1),K={class:"mb-3"},Q=Object(a["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},T=Object(a["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),W={class:"mb-3"},X={class:"form-check"},tt=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),et={class:"modal-footer"},ct=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function at(t,e,c,o,n,l){return Object(a["z"])(),Object(a["g"])("div",f,[Object(a["h"])("div",g,[Object(a["h"])("div",v,[P,Object(a["h"])("div",y,[Object(a["h"])("div",k,[Object(a["h"])("div",x,[Object(a["h"])("div",w,[M,Object(a["Y"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=function(t){return n.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[a["S"],n.tempProduct.imageUrl]])]),Object(a["h"])("div",U,[_,Object(a["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:n.tempProduct.imageUrl,alt:""},null,8,S),n.tempProduct.images?(Object(a["z"])(),Object(a["g"])("div",C,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(n.tempProduct.images,(function(t,e){return Object(a["z"])(),Object(a["g"])("div",{class:"mb-3 input-group",key:e},[Object(a["Y"])(Object(a["h"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return n.tempProduct.images[e]=t},placeholder:"請輸入連結"},null,8,$),[[a["S"],n.tempProduct.images[e]]]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return n.tempProduct.images.splice(e,1)}}," 移除 ",8,z)])})),128)),n.tempProduct.images[n.tempProduct.images.length-1]||!n.tempProduct.images.length?(Object(a["z"])(),Object(a["g"])("div",V,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return n.tempProduct.images.push("")})}," 新增圖片 ")])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)]),Object(a["h"])("div",Y,[Object(a["h"])("div",L,[D,Object(a["Y"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[a["S"],n.tempProduct.title]])]),Object(a["h"])("div",F,[Object(a["h"])("div",J,[I,Object(a["Y"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.category=t}),placeholder:"請輸入分類"},null,512),[[a["S"],n.tempProduct.category]])]),Object(a["h"])("div",N,[H,Object(a["Y"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[a["S"],n.tempProduct.unit]])])]),Object(a["h"])("div",Z,[Object(a["h"])("div",E,[q,Object(a["Y"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[a["S"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(a["h"])("div",A,[B,Object(a["Y"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.price=t}),placeholder:"請輸入售價"},null,512),[[a["S"],n.tempProduct.price,void 0,{number:!0}]])])]),G,Object(a["h"])("div",K,[Q,Object(a["Y"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[a["S"],n.tempProduct.description]]),Object(a["Y"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.description2=t}),placeholder:"請輸入產品描述"},null,512),[[a["S"],n.tempProduct.description2]]),Object(a["Y"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.description3=t}),placeholder:"請輸入產品描述"},null,512),[[a["S"],n.tempProduct.description3]])]),Object(a["h"])("div",R,[T,Object(a["Y"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[11]||(e[11]=function(t){return n.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[a["S"],n.tempProduct.content]])]),Object(a["h"])("div",W,[Object(a["h"])("div",X,[Object(a["Y"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[12]||(e[12]=function(t){return n.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[a["P"],n.tempProduct.is_enabled]]),tt])])])])]),Object(a["h"])("div",et,[ct,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=function(e){return t.$emit("update-product",n.tempProduct)})}," 確認 ")])])])],512)}var ot=c("e0ae"),nt={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/admin/upload");this.$http.post(a,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}},mixins:[ot["a"]]},lt=c("6b0d"),it=c.n(lt);const rt=it()(nt,[["render",at]]);var st=rt,dt=c("6ff1"),ut=c("1799"),bt={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:st,DelModal:dt["a"],Pagination:ut["a"]},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/admin/products/?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.isLoading=!1,e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination)}))},openModal:function(t,e){this.tempProduct=t?{}:Object(O["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},updateProduct:function(t){var e=this;this.tempProduct=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/admin/product");this.isLoading=!0;var a="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/admin/product/").concat(t.id),a="put");var o=this.$refs.productModal;this.$http[a](c,{data:this.tempProduct}).then((function(t){e.isLoading=!1,o.hideModal(),t.data.success?(e.getProducts(),e.emitter.emit("message:push",{message:t.data.message,status:"success"})):e.emitter.emit("message:push",{message:t.data.message,status:"danger"})}))},openDelProductModal:function(t){this.tempProduct=Object(O["a"])({},t);var e=this.$refs.delModal;e.showModal()},delProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(e).then((function(e){t.isLoading=!1,t.emitter.emit("message:push",{message:e.data.message,status:"danger"});var c=t.$refs.delModal;c.hideModal(),t.getProducts()}))}},created:function(){this.getProducts()}};const pt=it()(bt,[["render",j]]);e["default"]=pt},e01a:function(t,e,c){"use strict";var a=c("23e7"),o=c("83ab"),n=c("da84"),l=c("e330"),i=c("1a2d"),r=c("1626"),s=c("3a9b"),d=c("577e"),u=c("9bf2").f,b=c("e893"),p=n.Symbol,h=p&&p.prototype;if(o&&r(p)&&(!("description"in h)||void 0!==p().description)){var m={},j=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=s(h,this)?new p(t):void 0===t?p():p(t);return""===t&&(m[e]=!0),e};b(j,p),j.prototype=h,h.constructor=j;var O="Symbol(test)"==String(p("test")),f=l(h.toString),g=l(h.valueOf),v=/^Symbol\((.*)\)[^)]+$/,P=l("".replace),y=l("".slice);u(h,"description",{configurable:!0,get:function(){var t=g(this),e=f(t);if(i(m,t))return"";var c=O?y(e,7,-1):P(e,v,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:j})}}}]);
//# sourceMappingURL=chunk-611cdbc2.b2b0f0a7.js.map