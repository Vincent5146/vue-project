(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc328938"],{1799:function(t,e,c){"use strict";var n=c("7a23"),a={"aria-label":"Page navigation example"},i={class:"pagination"},r={class:"page-item"},o=Object(n["h"])("span",{"aria-hidden":"true"},"«",-1),s=[o],u=["onClick"],l={class:"page-item"},d=Object(n["h"])("span",{"aria-hidden":"true"},"»",-1),p=[d];function g(t,e,c,o,d,g){return Object(n["z"])(),Object(n["g"])("nav",a,[Object(n["h"])("ul",i,[Object(n["h"])("li",r,[Object(n["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(n["Z"])((function(t){return g.updatePage(c.pages.current_page-1)}),["prevent"]))},s)]),(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(c.pages.total_pages,(function(t){return Object(n["z"])(),Object(n["g"])("li",{class:Object(n["s"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(n["h"])("a",{class:"page-link",href:"#",onClick:Object(n["Z"])((function(e){return g.updatePage(t)}),["prevent"])},Object(n["M"])(t),9,u)],2)})),128)),Object(n["h"])("li",l,[Object(n["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(n["Z"])((function(t){return g.updatePage(c.pages.current_page+1)}),["prevent"]))},p)])])])}var b={props:{pages:{type:Object,default:function(){return{category:null,current_page:1,has_next:!1,has_pre:!1,total_pages:1}}}},methods:{updatePage:function(t){this.$emit("emit-pages",t)}}},h=c("6b0d"),f=c.n(h);const j=f()(b,[["render",g]]);e["a"]=j},"466d":function(t,e,c){"use strict";var n=c("c65b"),a=c("d784"),i=c("825a"),r=c("50c4"),o=c("577e"),s=c("1d80"),u=c("dc4a"),l=c("8aa5"),d=c("14c3");a("match",(function(t,e,c){return[function(e){var c=s(this),a=void 0==e?void 0:u(e,t);return a?n(a,e,c):new RegExp(e)[t](o(c))},function(t){var n=i(this),a=o(t),s=c(e,n,a);if(s.done)return s.value;if(!n.global)return d(n,a);var u=n.unicode;n.lastIndex=0;var p,g=[],b=0;while(null!==(p=d(n,a))){var h=o(p[0]);g[b]=h,""===h&&(n.lastIndex=l(a,r(n.lastIndex),u)),b++}return 0===b?null:g}]}))},"4de4":function(t,e,c){"use strict";var n=c("23e7"),a=c("b727").filter,i=c("1dde"),r=i("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("da84"),i=c("d039"),r=c("e8b5"),o=c("861d"),s=c("7b0b"),u=c("07fa"),l=c("8418"),d=c("65f0"),p=c("1dde"),g=c("b622"),b=c("2d00"),h=g("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=a.TypeError,v=b>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=p("concat"),k=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},y=!v||!m;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,n,a,i,r=s(this),o=d(r,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?r:arguments[e],k(i)){if(a=u(i),p+a>f)throw O(j);for(c=0;c<a;c++,p++)c in i&&l(o,p,i[c])}else{if(p>=f)throw O(j);l(o,p++,i)}return o.length=p,o}})},"9f45":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=Object(n["i"])('<div class="container-fluid"><div class="row"><div class="col-12"><div class="introduce"><div class="introduce-text"><h1>12/31前輸入優惠碼 <span class="text-strong">綿綿</span></h1><p>可享全館產品、服務9 折優惠!</p></div></div></div></div></div>',1),i={class:"container"},r={class:"row mt-4"},o=Object(n["h"])("p",{class:"nav-tar"},[Object(n["j"])(" 產品種類 "),Object(n["h"])("span",{class:"material-icons"},[Object(n["h"])("i",{class:"fas fa-chevron-down"})])],-1),s={class:"col-12 col-lg-9 col-xl-10 ms-md-auto ps-md-4"},u={class:"products row p-0"},l={class:"product"},d={class:"product_img"},p=["onClick"],g={class:"product-title"},b={class:"product_price"},h={key:0,class:"product-price-1"},f={key:1,class:"product-price-2"},j={key:2,class:"product-price-2"},O={class:"productsFooter"},v=["onClick"],m=["onClick"],k=Object(n["h"])("i",{class:"fas fa-plus"},null,-1),y=[k],w={class:"d-flex justify-content-center mt-4"};function C(t,e,c,k,C,x){var P=Object(n["J"])("Loading"),L=Object(n["J"])("Pagination");return Object(n["z"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(P,{active:C.isLoading},null,8,["active"]),a,Object(n["h"])("div",i,[Object(n["h"])("div",r,[Object(n["h"])("div",{class:"col-12 col-lg-3 col-xl-2 nav-left",ref:"navLeft",onClick:e[5]||(e[5]=function(){return x.controlSideUl&&x.controlSideUl.apply(x,arguments)})},[o,Object(n["h"])("ul",{class:Object(n["s"])({open:C.sideUl})},[Object(n["h"])("li",{onClick:e[0]||(e[0]=function(){return x.getProducts&&x.getProducts.apply(x,arguments)}),class:Object(n["s"])({active:"全部"===C.productValue})}," 全部產品 ",2),Object(n["h"])("li",{type:"button",onClick:e[1]||(e[1]=function(t){return x.filterCategory("綿綿服務")}),class:Object(n["s"])({active:"綿綿服務"===C.productValue})}," 綿綿服務 ",2),Object(n["h"])("li",{type:"button",onClick:e[2]||(e[2]=function(t){return x.filterCategory("寵物玩具")}),class:Object(n["s"])({active:"寵物玩具"===C.productValue})}," 寵物玩具 ",2),Object(n["h"])("li",{type:"button",onClick:e[3]||(e[3]=function(t){return x.filterCategory("寵物食品")}),class:Object(n["s"])({active:"寵物食品"===C.productValue})}," 寵物食品 ",2),Object(n["h"])("li",{type:"button",onClick:e[4]||(e[4]=function(t){return x.filterCategory("寵物衣服")}),class:Object(n["s"])({active:"寵物衣服"===C.productValue})}," 寵物衣服 ",2)],2)],512),Object(n["h"])("div",s,[Object(n["h"])("ul",u,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(x.getProductsList,(function(e){return Object(n["z"])(),Object(n["g"])("li",{class:"col-6 col-sm-4 col-xl-3 mb-5 text-start list-none",key:e.id},[Object(n["h"])("div",l,[Object(n["h"])("div",d,[Object(n["h"])("div",{style:Object(n["t"])([{height:"250px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(e.imageUrl,")")}]),class:"image text-end",onClick:function(t){return x.getProduct(e.id)}},null,12,p)]),Object(n["h"])("div",g,Object(n["M"])(e.title),1),Object(n["h"])("div",b,[e.price?Object(n["f"])("",!0):(Object(n["z"])(),Object(n["g"])("div",h,Object(n["M"])(t.$filters.currency(e.origin_price))+" 元 ",1)),e.price?(Object(n["z"])(),Object(n["g"])("del",f," 原價 "+Object(n["M"])(t.$filters.currency(e.origin_price))+" 元 ",1)):Object(n["f"])("",!0),e.price?(Object(n["z"])(),Object(n["g"])("div",j," 特價 "+Object(n["M"])(t.$filters.currency(e.price))+" 元 ",1)):Object(n["f"])("",!0)]),Object(n["h"])("div",O,[Object(n["h"])("button",{type:"button",class:"btn-products",onClick:function(t){return x.getProduct(e.id)}}," 商品資訊 ",8,v),Object(n["h"])("span",{class:"btn-products2 btn-hover",onClick:function(t){return x.addtoCart(e.id,1)}},y,8,m)])])])})),128))]),Object(n["h"])("div",w,[C.pageIsShown?(Object(n["z"])(),Object(n["e"])(L,{key:0,pages:C.pagination,onEmitPages:x.getProducts},null,8,["pages","onEmitPages"])):Object(n["f"])("",!0)])])])])],64)}c("4de4"),c("d3b7"),c("ac1f"),c("466d"),c("99af");var x=c("1799"),P={components:{Pagination:x["a"]},data:function(){return{products:[],product:{},isLoading:!1,pagination:{},productValue:"全部",sideUl:!1,pageIsShown:!1}},computed:{getProductsList:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.productValue)}))}},methods:{getAllProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){t.products=e.data.products,t.pageIsShown=!1,t.isLoading=!1})).catch((function(e){console.warn(e,"error"),t.isLoading=!1}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/products/?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.products=e.data.products,t.pagination=e.data.pagination,t.pageIsShown=!0,t.productValue="",t.isLoading=!1})).catch((function(e){console.warn(e,"error"),t.isLoading=!1}))},getProduct:function(t){this.$router.push("/product/".concat(t)),document.documentElement.scrollTop=0},filterCategory:function(t){this.getAllProducts(),this.productValue=t},addtoCart:function(t,e){var c=this,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/cart"),a={product_id:t,qty:e};this.isLoading=!0,this.$http.post(n,{data:a}).then((function(t){t.data.success?(c.emitter.emit("message:push",{message:t.data.message,status:"success"}),c.emitter.emit("resetCart"),c.isLoading=!1):(c.emitter.emit("message:push",{message:t.data.message,status:"danger"}),c.isLoading=!1)})).catch((function(t){console.warn(t,"error"),c.isLoading=!1}))},controlSideUl:function(){this.sideUl?this.sideUl=!1:this.sideUl=!0}},created:function(){this.getProducts()}},L=c("6b0d"),_=c.n(L);const z=_()(P,[["render",C]]);e["default"]=z}}]);
//# sourceMappingURL=chunk-dc328938.a7709de5.js.map