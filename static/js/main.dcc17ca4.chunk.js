(this["webpackJsonplearn-react-project"]=this["webpackJsonplearn-react-project"]||[]).push([[0],{10:function(t,e,a){},11:function(t,e,a){},26:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),r=a(20),n=a.n(r),i=(a(26),a(4)),o=a(5),l=a(3),d=a(7),u=a(6),p=(a(9),a(10),a(11),a(0)),h=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"loading-screen",children:Object(p.jsxs)("div",{className:"loader-section",children:[Object(p.jsx)("div",{className:"loader-image",children:Object(p.jsx)("i",{className:"fas fa-sync-alt fa-spin"})}),Object(p.jsx)("div",{className:"loader-text",children:"Loading..."})]})})}}]),a}(c.a.Component),j=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t,e=1,a=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("dot");for(1>a.length&&(e=1),t=0;t<a.length;t++)a[t].style.display="none";for(t=0;t<s.length;t++)s[t].className=s[t].className.replace(" active","");a[e-1].style.display="block",s[e-1].className+=" active"}},{key:"plusSlides",value:function(t,e){console.log(e,t);var a,s=t+1,c=document.getElementsByClassName("mySlides"),r=document.getElementsByClassName("dot");for(t>c.length&&(s=1),t<1&&(s=c.length),a=0;a<c.length;a++)c[a].style.display="none";for(a=0;a<r.length;a++)r[a].className=r[a].className.replace(" active","");c[s-1].style.display="block",r[s-1].className+=" active"}},{key:"currentSlide",value:function(t,e){var a,s=t,c=document.getElementsByClassName("mySlides"),r=document.getElementsByClassName("dot");for(t>c.length&&(s=1),t<1&&(s=c.length),a=0;a<c.length;a++)c[a].style.display="none";for(a=0;a<r.length;a++)r[a].className=r[a].className.replace(" active","");c[s-1].style.display="block",r[s-1].className+=" active"}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"popup-page",children:[Object(p.jsx)("div",{className:"popup-background",onClick:this.props.closePopup}),Object(p.jsxs)("div",{className:"popup-section",children:[Object(p.jsxs)("div",{className:"row float-parent popup-product-header",children:[Object(p.jsx)("h3",{className:"float",children:"Product Details"}),Object(p.jsx)("i",{className:"fas fa-times popup-close ",onClick:this.props.closePopup})]}),Object(p.jsxs)("div",{className:"row popup-images",children:[Object(p.jsxs)("div",{className:"slideshow-container",children:[this.props.data.productImage.map((function(t){return Object(p.jsx)("div",{className:"mySlides fade",style:{display:"block"},children:Object(p.jsx)("img",{src:t.imageUrl,alt:t.id,style:{width:"100%"}})})})),Object(p.jsx)("span",{className:"prev",onClick:this.plusSlides.bind(this,-1),children:"\u276e"}),Object(p.jsx)("span",{className:"next",onClick:this.plusSlides.bind(this,1),children:"\u276f"})]}),Object(p.jsxs)("div",{style:{display:"none"},children:[Object(p.jsx)("span",{className:"dot",onClick:this.currentSlide.bind(1)}),Object(p.jsx)("span",{className:"dot",onClick:this.currentSlide.bind(2)}),Object(p.jsx)("span",{className:"dot",onClick:this.currentSlide.bind(3)})]})]}),Object(p.jsxs)("div",{className:"popup-product-details",children:[Object(p.jsxs)("div",{className:"row float-parent popup-product-name-section",children:[Object(p.jsx)("div",{className:"column-25 float",children:"Name:"}),Object(p.jsx)("div",{className:"column-75 float",children:Object(p.jsx)("b",{children:this.props.data.title})})]}),Object(p.jsxs)("div",{className:"row float-parent popup-product-name-section",children:[Object(p.jsx)("div",{className:"column-25 float",children:"Decription:"}),Object(p.jsx)("div",{className:"column-75 float",children:Object(p.jsx)("b",{children:this.props.data.description})})]}),Object(p.jsxs)("div",{className:"row float-parent popup-product-name-section",children:[Object(p.jsx)("div",{className:"column-25 float",children:"Price:"}),Object(p.jsxs)("div",{className:"column-75 float",children:[Object(p.jsxs)("b",{style:{fontSize:"16px"},children:["\u20b9",this.props.data.price]}),Object(p.jsxs)("span",{style:{textDecoration:"line-through",marginLeft:"5px",fontSize:"12px"},children:["(\u20b9",this.props.data.originalPrice,")"]})]})]}),Object(p.jsxs)("div",{className:"row float-parent popup-product-name-section",children:[Object(p.jsx)("div",{className:"column-25 float",children:"Ratings:"}),Object(p.jsx)("div",{className:"column-75 float",children:Object(p.jsxs)("b",{children:[this.props.data.rating,"/10"]})})]}),Object(p.jsxs)("div",{className:"row float-parent popup-product-name-section",children:[Object(p.jsx)("div",{className:"column-25 float",children:"Express Delivery:"}),Object(p.jsx)("div",{className:"column-75 float",children:Object(p.jsx)("b",{children:this.props.data.expressDelivery?"True":"false"})})]})]})]})]})}}]),a}(c.a.Component),m=a(21),b=a.n(m),x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={isLoading:!0,cartData:[],searchValue:"",sortPriceText:!0,sortdateValue:!0,sortProductID:!0,sortProductName:!0,showPopup:!1,popupData:[],addCartArray:[],cartAdded:!1},s.searchFunction=s.searchFunction.bind(Object(l.a)(s)),s.sortPrice=s.sortPrice.bind(Object(l.a)(s)),s.sortDate=s.sortDate.bind(Object(l.a)(s)),s.sortID=s.sortID.bind(Object(l.a)(s)),s.sortName=s.sortName.bind(Object(l.a)(s)),s.closePopup=s.closePopup.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;b.a.get("https://cors-anywhere.herokuapp.comhttp://mocsyamtestapi-env.eba-dvawv2zg.ap-south-1.elasticbeanstalk.com/products/?pageNumber=0").then((function(e){t.setState({isLoading:!1,cartData:e.data})}))}},{key:"searchFunction",value:function(t){this.setState({searchValue:t.target.value});for(var e=this.state.searchValue.toLowerCase(),a=document.getElementsByClassName("cart-product-individual-section"),s=0;s<a.length;s++){var c=a[s].getElementsByClassName("cart-product-title")[0];(c.textContent.toLowerCase()||c.innerText.toLowerCase()).indexOf(e)>-1?a[s].style.display="":a[s].style.display="none"}}},{key:"sortID",value:function(){if(this.setState((function(t){return{sortProductID:!t.sortProductID}})),this.state.sortProductID){var t;t=this.state.cartData.sort((function(t,e){return t.id-e.id})),this.setState({cartData:t})}else{var e;e=this.state.cartData.sort((function(t,e){return e.id-t.id})),this.setState({cartData:e})}}},{key:"sortName",value:function(){var t=this.state.cartData;this.setState((function(t){return{sortProductName:!t.sortProductName}}));var e=[];this.state.sortProductName?(e=t.sort((function(t,e){return t.title.toLowerCase()-e.title.toLowerCase()>-1})),this.setState({cartData:e})):(e=t.sort((function(t,e){return e.title.toLowerCase()-t.title.toLowerCase()>-1})),this.setState({cartData:e}))}},{key:"sortPrice",value:function(){if(this.setState((function(t){return{sortPriceText:!t.sortPriceText}})),this.state.sortPriceText){var t;t=this.state.cartData.sort((function(t,e){return t.price-e.price})),this.setState({cartData:t})}else{var e;e=this.state.cartData.sort((function(t,e){return e.price-t.price})),this.setState({cartData:e})}}},{key:"sortDate",value:function(){if(this.setState((function(t){return{sortdateValue:!t.sortdateValue}})),this.state.sortdateValue){var t;t=this.state.cartData.sort((function(t,e){return new Date(t.createdDate)-new Date(e.createdDate)})),this.setState({cartData:t})}else{var e;e=this.state.cartData.sort((function(t,e){return new Date(e.createdDate)-new Date(t.createdDate)})),this.setState({cartData:e})}}},{key:"openPopup",value:function(t,e){console.log(t),this.setState({popupData:t}),this.setState({showPopup:!0})}},{key:"closePopup",value:function(){this.setState({showPopup:!1})}},{key:"addCart",value:function(t,e){this.state.addCartArray.push(t),this.setState({cartAdded:!0})}},{key:"clickTotalCart",value:function(t){document.getElementsByClassName("dropdown-content")[0].classList.contains("show")?document.getElementsByClassName("dropdown-content")[0].classList.remove("show"):document.getElementsByClassName("dropdown-content")[0].classList.add("show")}},{key:"render",value:function(){var t=this,e=this.state,a=e.isLoading,s=e.cartData,c=e.addCartArray;return a?Object(p.jsx)(h,{}):Object(p.jsxs)("div",{className:"cart-page",children:[Object(p.jsx)("div",{className:"cart-page-header-section",children:Object(p.jsx)("h1",{className:"cart-page-header-section-name",children:"Welcome to Cart Page"})}),Object(p.jsxs)("div",{className:"cart-page-body-section",children:[Object(p.jsxs)("div",{className:"row float-parent cart-page-manipulations-section",children:[Object(p.jsx)("div",{className:"float column-3 text-center",children:Object(p.jsx)("input",{className:"cart-product-search-section",placeholder:"Enter Product Name",type:"text",value:this.state.searchValue,onChange:this.searchFunction})}),Object(p.jsx)("div",{className:"float column-3  text-center borderRight",children:Object(p.jsxs)("button",{className:"cart-product-filter-section white-CTA",children:["Filter ",Object(p.jsx)("i",{className:"fa fa-solid fa-filter icon-theme-color"})]})}),Object(p.jsxs)("div",{className:"float column-3  text-center borderRight",children:[Object(p.jsxs)("button",{className:"cart-product-total-cart-section theme-CTA",onClick:this.clickTotalCart.bind(this),children:["Total Cart ",Object(p.jsx)("i",{className:"fa fa-solid fa-cart-plus icon-theme-background",children:Object(p.jsx)("sup",{className:"cart-product-total-cart-section-superscript",children:c.length})})]}),Object(p.jsx)("div",{className:"dropdown-content",children:this.state.cartAdded?Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)("p",{className:"dropdown-individual total-cart-products",onClick:t.openPopup.bind(t,e),children:e.title})}))}):Object(p.jsx)("p",{className:"dropdown-individual",children:Object(p.jsx)("b",{children:"Your Shopping Cart is Empty"})})})]})]}),Object(p.jsxs)("table",{className:"row text-center",children:[Object(p.jsx)("thead",{className:"cart-product-section-head",children:Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{className:"cart-product-id-head",onClick:this.sortID,children:[" Product ID",this.state.sortProductID?Object(p.jsx)("i",{className:"fas fa-sort-numeric-down-alt icon-theme-background"}):Object(p.jsx)("i",{className:"fas fa-sort-numeric-up icon-theme-background"})," "]}),Object(p.jsxs)("th",{className:"cart-product-title-head",onClick:this.sortName,children:[" Product ID",this.state.sortProductName?Object(p.jsx)("i",{className:"fas fa-sort-alpha-down-alt icon-theme-background"}):Object(p.jsx)("i",{className:"fas fa-sort-alpha-up icon-theme-background"})]}),Object(p.jsxs)("th",{className:"cart-product-original-price-head cart-product-price-sort-section",onClick:this.sortPrice,children:[" Price",this.state.sortPriceText?Object(p.jsx)("i",{className:"fas fa-sort-numeric-down-alt icon-theme-background"}):Object(p.jsx)("i",{className:"fas fa-sort-numeric-up icon-theme-background"})," "]}),Object(p.jsxs)("th",{className:"col-sm-none cart-product-date-created-head",onClick:this.sortDate,children:["Date ",this.state.sortdateValue?Object(p.jsx)("i",{className:"fas fa-sort-numeric-down-alt icon-theme-background"}):Object(p.jsx)("i",{className:"fas fa-sort-numeric-up icon-theme-background"})," "]}),Object(p.jsx)("th",{className:"col-sm-none cart-product-cta-head",children:"Add Cart"})]})}),Object(p.jsx)("tbody",{className:"cart-product-section-body cart-product-section",children:s.map((function(e){return Object(p.jsxs)("tr",{className:"cart-product-individual-section",children:[Object(p.jsx)("td",{className:"cart-product-id-body",children:e.id}),Object(p.jsx)("td",{className:"cart-product-title-body cart-product-title",onClick:t.openPopup.bind(t,e),children:e.title}),Object(p.jsxs)("td",{className:"cart-product-original-price-body cart-product-original-price",children:[Object(p.jsxs)("b",{style:{fontSize:"16px"},children:["\u20b9",e.price]}),Object(p.jsxs)("span",{style:{textDecoration:"line-through",marginLeft:"5px",fontSize:"12px"},children:["(\u20b9",e.originalPrice,")"]})]}),Object(p.jsx)("td",{className:"col-sm-none cart-product-date-created-body cart-product-date-created",children:e.createdDate}),Object(p.jsx)("td",{className:"col-sm-none cart-product-cta-body",children:Object(p.jsx)("button",{className:"theme-CTA",onClick:t.addCart.bind(t,e),children:"Add Cart"})})]},e.id)}))})]})]}),this.state.showPopup&&Object(p.jsx)(j,{data:this.state.popupData,closePopup:this.closePopup})]})}}]),a}(c.a.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),s(t),c(t),r(t),n(t)}))};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),f()},9:function(t,e,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.dcc17ca4.chunk.js.map