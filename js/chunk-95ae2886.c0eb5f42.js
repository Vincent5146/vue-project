(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95ae2886"],{1406:function(t,e,a){},"2fa9":function(t,e,a){"use strict";a("1406")},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("da84"),l=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),i=a("07fa"),b=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),m=a("2d00"),h=f("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",v=n.TypeError,p=m>=51||!l((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=u("concat"),x=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},k=!p||!g;c({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,c,n,l,s=o(this),r=d(s,0),u=0;for(e=-1,c=arguments.length;e<c;e++)if(l=-1===e?s:arguments[e],x(l)){if(n=i(l),u+n>j)throw v(O);for(a=0;a<n;a++,u++)a in l&&b(r,u,l[a])}else{if(u>=j)throw v(O);b(r,u++,l)}return r.length=u,r}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("5e77").EXISTS,l=a("e330"),s=a("9bf2").f,r=Function.prototype,o=l(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=l(i.exec),d="name";c&&!n&&s(r,d,{configurable:!0,get:function(){try{return b(i,o(this))[1]}catch(t){return""}}})},ba2f:function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),n=function(t){return Object(c["C"])("data-v-5c9e94b6"),t=t(),Object(c["A"])(),t},l={class:"checkout"},s={class:"container"},r=Object(c["i"])('<div class="d-flex justify-content-center align-items-center mb-5" data-v-5c9e94b6><h5 class="fw-bold mb-0 active" data-v-5c9e94b6>填寫資料</h5><i class="fas fa-arrow-right fs-5 mx-2" data-v-5c9e94b6></i><h5 class="text-black-50 fw-bold mb-0" data-v-5c9e94b6>確認付款</h5><i class="fas fa-arrow-right fs-5 mx-2" data-v-5c9e94b6></i><h5 class="text-black-50 fw-bold mb-0" data-v-5c9e94b6>訂單完成</h5></div>',1),o={class:"row"},i={class:"col-md-7"},b=n((function(){return Object(c["h"])("h1",{class:"fs-3 text-center fw-bold"},"寄送資訊",-1)})),d={class:"d-flex justify-content-center"},u={class:"mb-3"},f=n((function(){return Object(c["h"])("label",{for:"email",class:"form-label"},[Object(c["j"])("Email "),Object(c["h"])("small",null,"(必填)")],-1)})),m={class:"mb-3"},h=n((function(){return Object(c["h"])("label",{for:"name",class:"form-label"},[Object(c["j"])("收件人姓名 "),Object(c["h"])("small",null,"(必填)")],-1)})),j={class:"mb-3"},O=n((function(){return Object(c["h"])("label",{for:"tel",class:"form-label"},[Object(c["j"])("收件人電話 "),Object(c["h"])("small",null,"(必填)")],-1)})),v={class:"mb-3"},p=n((function(){return Object(c["h"])("label",{for:"address",class:"form-label"},[Object(c["j"])("收件人地址 "),Object(c["h"])("small",null,"(必填)")],-1)})),g={class:"mb-3"},x=n((function(){return Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1)})),k={class:"d-flex justify-content-between"},w=n((function(){return Object(c["h"])("button",{type:"submit",class:"btn btn-dark btn-hover rounded-0"}," 下一步 付款去 ",-1)})),y={class:"col-md-5 mt-5 mt-md-0"},V=n((function(){return Object(c["h"])("h2",{class:"fs-3 text-center fw-bold"},"商品明細",-1)})),$={class:"table-responsive-md mt-4"},_={class:"table lh-lg"},C=n((function(){return Object(c["h"])("thead",{class:"table-dark text-center"},[Object(c["h"])("tr",{class:"table-nowrap"},[Object(c["h"])("th",null,"商品名稱"),Object(c["h"])("th",null,"數量"),Object(c["h"])("th",{class:"text-end"},"價格")])],-1)})),E={class:"text-center"},L={class:"text-end"},M=n((function(){return Object(c["h"])("br",null,null,-1)})),S={key:0,class:"text-strong"},z={class:"text-center"},J={key:0},T=n((function(){return Object(c["h"])("td",{colspan:"2",class:"text-end"},"總價 :",-1)})),q={class:"text-end"},U={key:1},N=n((function(){return Object(c["h"])("td",{colspan:"2",class:"text-end text-strong"},"折扣價 :",-1)})),F={class:"text-end text-strong"};function I(t,e,a,n,I,A){var X=Object(c["J"])("Loading"),H=Object(c["J"])("Field"),Y=Object(c["J"])("ErrorMessage"),Z=Object(c["J"])("Form");return Object(c["z"])(),Object(c["g"])("div",l,[Object(c["k"])(X,{active:I.isLoading},null,8,["active"]),Object(c["h"])("div",s,[r,Object(c["h"])("div",o,[Object(c["h"])("div",i,[b,Object(c["h"])("div",d,[Object(c["k"])(Z,{class:"col-11",onSubmit:A.createOrder},{default:Object(c["X"])((function(t){var a=t.errors;return[Object(c["h"])("div",u,[f,Object(c["k"])(H,{id:"email",name:"Email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":a["Email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:I.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=function(t){return I.form.user.email=t})},null,8,["class","modelValue"]),Object(c["k"])(Y,{name:"Email",class:"invalid-feedback"})]),Object(c["h"])("div",m,[h,Object(c["k"])(H,{id:"name",name:"姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:I.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=function(t){return I.form.user.name=t})},null,8,["class","modelValue"]),Object(c["k"])(Y,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",j,[O,Object(c["k"])(H,{id:"tel",name:"電話",type:"tel",class:Object(c["s"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:I.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=function(t){return I.form.user.tel=t})},null,8,["class","modelValue"]),Object(c["k"])(Y,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",v,[p,Object(c["k"])(H,{id:"address",name:"地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:I.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=function(t){return I.form.user.address=t})},null,8,["class","modelValue"]),Object(c["k"])(Y,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",g,[x,Object(c["Y"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=function(t){return I.form.message=t})},null,512),[[c["S"],I.form.message]])]),Object(c["h"])("div",k,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0",onClick:e[5]||(e[5]=Object(c["Z"])((function(){return A.goCart&&A.goCart.apply(A,arguments)}),["prevent"]))}," 回購物清單 "),w])]})),_:1},8,["onSubmit"])])]),Object(c["h"])("div",y,[V,Object(c["h"])("div",$,[Object(c["h"])("table",_,[C,Object(c["h"])("tbody",E,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])(I.carts,(function(e){return Object(c["z"])(),Object(c["g"])("tr",{class:"table-nowrap",key:e.id},[Object(c["h"])("td",null,Object(c["M"])(e.product.title),1),Object(c["h"])("td",null,Object(c["M"])(e.qty),1),Object(c["h"])("td",L,[Object(c["h"])("span",{class:Object(c["s"])({"text-decoration-line-through":e.final_total!==e.total})}," NT$ "+Object(c["M"])(t.$filters.currency(e.total))+" 元 ",3),M,e.final_total!==e.total?(Object(c["z"])(),Object(c["g"])("span",S," NT$ "+Object(c["M"])(t.$filters.currency(e.final_total))+" 元 ",1)):Object(c["f"])("",!0)])])})),128))]),Object(c["h"])("tfoot",z,[0!==I.carts.length?(Object(c["z"])(),Object(c["g"])("tr",J,[T,Object(c["h"])("td",q,"NT$ "+Object(c["M"])(t.$filters.currency(I.total))+" 元",1)])):Object(c["f"])("",!0),I.final_total!==I.total?(Object(c["z"])(),Object(c["g"])("tr",U,[N,Object(c["h"])("td",F,"NT$ "+Object(c["M"])(t.$filters.currency(I.final_total))+" 元",1)])):Object(c["f"])("",!0)])])])])])])])}a("99af");var A={name:"Checkout",data:function(){return{isLoading:!1,carts:[],total:0,final_total:0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.carts=e.data.data.carts,t.total=e.data.data.total,t.final_total=e.data.data.final_total,t.isLoading=!1)}))},createOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("wwin5146","/order");this.isLoading=!0;var a=this.form;this.$http.post(e,{data:a}).then((function(e){e.data.success&&(t.isLoading=!1,t.emitter.emit("message:push",{message:e.data.message,status:"success"}),t.$router.push("/checkpayment/".concat(e.data.orderId)),console.log(e.data.order))})).catch((function(e){console.warn(e,"error"),t.isLoading=!1}))},goCart:function(){this.$router.push("/cart")}},created:function(){this.getCart()}},X=(a("2fa9"),a("6b0d")),H=a.n(X);const Y=H()(A,[["render",I],["__scopeId","data-v-5c9e94b6"]]);e["default"]=Y}}]);
//# sourceMappingURL=chunk-95ae2886.c0eb5f42.js.map