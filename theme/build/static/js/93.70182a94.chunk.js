(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{592:function(e,t,a){},812:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(2),s=a.n(o),l=a(7),u=a(19),i=a(20),m=a(22),d=a(21),h=a(23),p=a(1),y=a.n(p),f=a(153),b=a(29),g=a(10),E=a.n(g),v=a(16),k=a(26),_=a(17),O=a(45),w=a(581),j=a(583),N=a.n(j),C=a(9),x=a(6),S=a.n(x),A=a(0),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={render:0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a,n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.isGeolocationEnabled){e.next=3;break}return e.next=3,this.setState({render:1});case 3:if(!this.props.coords){e.next=17;break}if(void 0!==(t=Object(C.r)("country_name"))&&""!=t){e.next=17;break}return a=N()([this.props.coords.longitude,this.props.coords.latitude]),e.prev=7,e.next=10,S.a.post("".concat(A.d,"/common/get_country_alpha3.php"),{security_token:"",plateform_type:"",sellerid:"",code3:a},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return Object(C.y)("country_code",e.data.result.code2,"365"),Object(C.y)("country_name",e.data.result.country,"365"),"in"==e.data.result.code2.toLowerCase()||""==e.data.result.code2?v.a.dispatch(Object(k.e)("INR")):v.a.dispatch(Object(k.e)("USD")),n.props.dataFromLocation(e.data.result.code2,e.data.result.country),e.data}).catch(function(e){});case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(7),console.log("\ud83d\ude31 Axios request failed: ".concat(e.t0));case 16:Object(C.y)("country_name",a,"365");case 17:case"end":return e.stop()}},e,this,[[7,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return y.a.createElement(y.a.Fragment,{key:this.state.render})}}]),t}(p.Component),D=Object(w.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(L),R=a(155),M=a(187),U=a(8),I=a.n(U),F=(a(592),1),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setState({ask_country:a.props.askCountry});case 3:a.props.askCountry&&a.get_country(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("could not get country");case 9:case"end":return e.stop()}},e,null,[[0,6]])})),a.UNSAFE_componentWillReceiveProps=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}if(a.props.askCountry==t.askCountry&&!t.forceAsk||!0!==t.askCountry){e.next=6;break}return e.next=5,a.setState({ask_country:t.askCountry,forceAsk:t.forceAsk});case 5:a.get_country();case 6:if(!0!==a.props.askCountry||!1!==t.forceAsk){e.next=10;break}if(!(Object(C.r)("countryid")&&""!=Object(C.r)("countryid")&&parseInt(Object(C.r)("countryid"))>0)){e.next=10;break}return e.next=10,a.setState({ask_country:!1,forceAsk:!1});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("could not get country");case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),a.get_country=function(){1==F&&(F=0,S.a.post("".concat(A.d,"/common/country.php"),{sellerid:E.a.get("sellerid"),security_token:"",plateform_type:""},{headers:{"Content-Type":"multipart/form-data"}}).then(function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({country:t.data.result});case 2:return n=[],a.state.country.forEach(function(e,t){n[t]={value:e.code,label:e.country,code:e.code2}}),e.next=6,a.setState({countrySelector:n});case 6:F=1;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){var t=e.response;return Promise.reject(t)}))},a.see_all_country=function(){I()(".all_country").toggleClass("d-none")},a.selectCountry=function(){var e=Object(l.a)(s.a.mark(function e(t,n,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("country changed",101,t,n,r),Object(C.y)("country_name",r,"1"),Object(C.y)("country_code",n,"1"),Object(C.y)("countryid",t,"1"),n&&("in"==n.toLowerCase()?Object(C.y)("currency","INR"):Object(C.y)("currency","USD")),e.next=7,a.setState({ask_country:!1});case 7:a.props.countrySelectorData(n);case 8:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.selectCountry(e.value,e.code,e.label)},a.state={ask_country:!1,country:[],countrySelector:[],forceAsk:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.translate,a=this.state;a.value,a.suggestions,"".concat(t("Search Your Country"),"..."),this.onChange;return y.a.createElement(R.a,{open:this.state.ask_country,onClose:function(){return""},center:!0,className:"cart-modal"},y.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},y.a.createElement("div",{className:"modal-content"},y.a.createElement("div",{className:"modal-header"},y.a.createElement("h3",{className:"modal-title pr-2"},"Select Your Country: "),this.state.forceAsk?y.a.createElement("button",{type:"button",className:"close",onClick:this.props.closeModal},"\xd7"):""),y.a.createElement("div",{className:"modal-body modal1"},y.a.createElement("div",{className:"container-fluid p-0"},y.a.createElement("div",{className:"row m-0 text-center"},y.a.createElement("div",{className:"col-12 my-1"},y.a.createElement(M.a,{placeholder:t("Search Your Country"),isOptionSelected:"true",options:this.state.countrySelector,name:"unit",onChange:this.handleChange})),y.a.createElement("div",{className:"col-4 p-0"},y.a.createElement("img",{className:"img-thumbnail mouse_pointer set_width",onClick:function(){return e.selectCountry(91,"in","india")},src:"https://img.beldara.com/country_flags/Flag_of_India.svg",alt:"india flag beldara.com"})),y.a.createElement("div",{className:"col-4 p-0"},y.a.createElement("img",{className:"img-thumbnail mouse_pointer set_width",onClick:function(){return e.selectCountry(1,"us","united states of america")},src:"https://img.beldara.com/country_flags/flag_of_us.png",alt:"us flag beldara.com"})),y.a.createElement("div",{className:"col-4 p-0"},y.a.createElement("img",{className:"img-thumbnail mouse_pointer set_width",onClick:function(){return e.selectCountry(44,"uk","united kingdom")},src:"https://img.beldara.com/country_flags/flag_of_uk.png",alt:"uk flag beldara.com"})),y.a.createElement("div",{className:"col-12 all_country_wrapper"},y.a.createElement("div",{className:"mouse_pointer text-center mt-4 mb-4 ",onClick:this.see_all_country},"View all countries"),y.a.createElement("div",{className:"d-none all_country row"},this.state.country.map(function(t,a){return y.a.createElement("div",{key:a,className:"mouse_pointer col-md-3 col-sm-4",onClick:function(){return e.selectCountry(t.code,t.code2,t.country)}}," ",t.country," ")})))))))))}}]),t}(p.Component),W=Object(_.withTranslate)(T),P=a(163),Y="English",B=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==Object(C.r)("currency")&&""!=Object(C.r)("currency")||Object(C.y)("currency","INR",365),void 0!==Object(C.r)("country_code")&&""!=Object(C.r)("country_code")){e.next=5;break}a.select_country(!0,!1),e.next=7;break;case 5:return e.next=7,a.setState({askCountry:!1,country_code:Object(C.r)("country_code")});case 7:case"end":return e.stop()}},e)})),a.select_country=function(){var e=Object(l.a)(s.a.mark(function e(t,n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({askCountry:t,forceAsk:n});case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.closeModal=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({askCountry:!1,forceAsk:!1});case 2:case"end":return e.stop()}},e)})),a.UNSAFE_componentWillReceiveProps=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.changeCountryCode(Object(C.r)("country_code")),"/business-listing.html"==a.state.sellonbeldara||E.a.get("sellerid")&&""!=E.a.get("sellerid")||a.setState({sellonbeldara:"/business-listing.html"}),void 0!==Object(C.r)("country_code")&&""!=Object(C.r)("country_code")||a.state.askCountry||a.select_country(!0,!1),a.state.country_code!=Object(C.r)("country_code")&&a.setState({country_code:Object(C.r)("country_code")}),void 0!==c&&""!=c&&c==Object(C.r)("country_name")||(c=Object(C.r)("country_name")),t.cartList?a.setState({cartCount:t.cartList}):a.setState({cartCount:0});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.countrySelectorData=function(e){a.setState({country_code:e,forceAsk:!1}),e&&("in"==e.toLowerCase()?(Object(C.y)("currency","INR",365),v.a.dispatch(Object(k.e)("INR"))):(Object(C.y)("currency","USD",365),v.a.dispatch(Object(k.e)("USD"))))},a.dataFromLocation=function(e,t){a.setState({country_code:e,country_name:t,forceAsk:!1}),e&&("in"==e.toLowerCase()?(Object(C.y)("currency","INR"),v.a.dispatch(Object(k.e)("INR"))):(Object(C.y)("currency","USD"),v.a.dispatch(Object(k.e)("USD"))))},a.state={lang:"en",changeLanguageOnReload:1,cartCount:0,askCountry:!1,country_code:"",forceAsk:!1,sellonbeldara:""},E.a.get("sellerid");var r=window.location.hostname;return n=(n=r.split("beldara.com")[0]).replace(".",""),v.a.dispatch(Object(k.p)()),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:1==this.state.changeLanguageOnReload&&(this.props.languageMaster.forEach(function(e){e.main_language.toLowerCase()==n.toLowerCase()&&(r=e.code)},this),""!==r&&void 0!==r?v.a.dispatch(_.IntlActions.setLocale(r)):v.a.dispatch(_.IntlActions.setLocale("en")),this.setState({changeLanguageOnReload:0}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"currencyChanger",value:function(e){Object(C.y)("currency",e,365);this.props.changeCurrency(e)}},{key:"truncateText",value:function(e){if(e.indexOf(" ")>=0){var t=e.split(" ")[0];return t.length>10?t.substring(0,10)+"..":t}return e.length>10?e.substring(0,10)+"..":e}},{key:"render",value:function(){var e=this,t=this.props.translate;return y.a.createElement("div",{className:"top-header top-header-dark3"},y.a.createElement(W,{countrySelectorData:this.countrySelectorData,askCountry:this.state.askCountry,forceAsk:this.state.forceAsk,closeModal:this.closeModal}),y.a.createElement("input",{type:"hidden",name:"mobileh",id:"mobileh",className:"d-none"}),y.a.createElement("div",{className:"container"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-lg-6"},y.a.createElement("div",{className:"header-contact"},y.a.createElement("ul",null,y.a.createElement("li",null,y.a.createElement(f.a,{to:"".concat("","/membership.html"),className:"text-white"},t("Membership "))),y.a.createElement("li",null,y.a.createElement("a",{href:"".concat(O.e+""+this.state.sellonbeldara),className:"text-white"},t("Sell On Beldara"))),y.a.createElement("li",{className:"text-white"},P.isMobile?"":y.a.createElement("a",{href:"/download-app.html",className:"h6 text-white"},"Get App"))))),y.a.createElement("div",{className:"col-lg-6 text-right d-flex m-0"},y.a.createElement("ul",{className:"header-dropdown"},y.a.createElement("li",{className:"mobile-wishlist cart"},y.a.createElement("a",{href:"/cart.html",className:"text-white"},y.a.createElement("i",{className:"text-white fa fa-shopping-cart"})," Cart",y.a.createElement("span",{className:"badge cart_badge badge-info"},this.props.cartList))),y.a.createElement("li",{className:"onhover-dropdown mobile-account text-white language"},y.a.createElement("i",{className:"text-white fa fa-language","aria-hidden":"true"}),this.props.languageMaster.forEach(function(t){""!=r&&void 0!==r?t.code==r&&(Y=t.language):t.code==e.props.user.user.language&&(Y=t.language)},this),Y,y.a.createElement("ul",{className:"onhover-show-div"},this.props.languageMaster.map(function(e){return y.a.createElement("li",{key:e.id},y.a.createElement("a",{href:e.url+window.location.pathname,"data-lng":e.code},y.a.createElement("small",null,e.language)))}))),this.state.country_code?y.a.createElement("li",{onClick:function(){return e.select_country(!0,!0)},className:"onhover-dropdown mobile-account country text-white"},y.a.createElement("i",{className:"d-sm-block d-md-none d-block text-uppercase"},this.state.country_code),y.a.createElement("span",{className:"text-uppercase"},this.state.country_code)):"",y.a.createElement("li",{className:"onhover-dropdown mobile-account currency  text-white"},y.a.createElement("i",{className:"text-white fa fa-money","aria-hidden":"true"}),y.a.createElement("span",{className:"currencyActive"},this.props.data.symbol),y.a.createElement("ul",{className:"onhover-show-div"},y.a.createElement("li",null,y.a.createElement("span",{onClick:function(){return e.currencyChanger("INR")},"data-currency":"INR"},y.a.createElement("small",null,"Rupee (INR)"))),y.a.createElement("li",null,y.a.createElement("span",{onClick:function(){return e.currencyChanger("USD")},"data-currency":"USD"},y.a.createElement("small",null," US Dollar (USD)"))))),c?"":y.a.createElement(D,{dataFromLocation:this.dataFromLocation}),y.a.createElement("li",{className:"onhover-dropdown mobile-account text-white myAccount"},y.a.createElement("i",{className:"fa fa-user text-white","aria-hidden":"true"}),this.props.user.user.name?y.a.createElement("span",{className:"text-truncate"},this.truncateText(this.props.user.user.name)):t("My Account"),this.props.user.user.name?y.a.createElement("ul",{className:"onhover-show-div"},y.a.createElement("li",null,y.a.createElement("a",{href:"https://seller.beldara.com","data-lng":"en"},y.a.createElement("small",null,t("My dashboard")))),y.a.createElement("li",null,y.a.createElement("a",{href:"/wishlist.html","data-lng":"en"},y.a.createElement("small",null,t("Wishlist")))),y.a.createElement("li",null,y.a.createElement("a",{href:"https://msg.beldara.com","data-lng":"es"},y.a.createElement("small",null,t("Message Center")))),y.a.createElement("li",null,y.a.createElement("a",{href:"/logout.html","data-lng":"es"},y.a.createElement("small",null,t("Logout"))))):y.a.createElement("ul",{className:"onhover-show-div"},y.a.createElement("li",null,y.a.createElement("a",{href:"https://seller.beldara.com/login.html","data-lng":"en",target:"_blank"},y.a.createElement("small",null,t("Login")))),y.a.createElement("li",null,y.a.createElement("a",{href:"https://seller.beldara.com/business-listing.html","data-lng":"es",target:"_blank"},y.a.createElement("small",null,t("Sell On Beldara")))),y.a.createElement("li",null,y.a.createElement("a",{href:"/wishlist.html","data-lng":"en"},y.a.createElement("small",null,t("Wishlist")))))))))))}}]),t}(p.Component);t.default=Object(_.withTranslate)(Object(b.connect)(function(e){return{user:e.user,data:e.data,cartList:e.cartLength.cartLength.count}},{getUpdateUser:k.K,changeCurrency:k.e})(B))}}]);
//# sourceMappingURL=93.70182a94.chunk.js.map