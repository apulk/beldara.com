(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{178:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(33);var n=a(2),o=a.n(n),r=a(7),i=function(){var e=Object(r.a)(o.a.mark(function e(t,a,n,r,i){var s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=0,s="USD"==i&&"INR"==a?parseFloat(t)/parseFloat(n):"INR"==i&&"USD"==a?Math.round(parseFloat(t)*parseFloat(n)):parseFloat(t),console.log(t,a,n,r,i,s,177),e.abrupt("return",s.toFixed(2));case 4:case"end":return e.stop()}},e)}));return function(t,a,n,o,r){return e.apply(this,arguments)}}()},367:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=c(a(4)),i=a(1),s=c(i),l=c(a(368));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={imageSource:null},a.setDisplayImage=a.setDisplayImage.bind(a),a.handleInitialTimeout=a.handleInitialTimeout.bind(a),a.isLoaded=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"handleInitialTimeout",value:function(){var e=this;this.props.initialTimeout&&this.props.initialTimeout>0?setTimeout(function(){e.isLoaded||e.setState({imageSource:e.props.initialImage})},this.props.initialTimeout):this.setState({imageSource:this.props.initialImage})}},{key:"componentDidMount",value:function(){this.handleInitialTimeout(),this.displayImage=new window.Image,this.setDisplayImage({image:this.props.src,fallbacks:this.props.fallbackImage})}},{key:"componentWillReceiveProps",value:function(e){e.src!==this.props.src&&(this.isLoaded=!1,e.initialImage&&this.handleInitialTimeout(),this.setDisplayImage({image:e.src,fallbacks:e.fallbackImage}))}},{key:"componentWillUnmount",value:function(){this.displayImage&&(this.displayImage.onerror=null,this.displayImage.onload=null,this.displayImage=null)}},{key:"setDisplayImage",value:function(e){var t=this,a=e.image,n=e.fallbacks,o=[a].concat(n).filter(function(e){return!!e});this.displayImage.onerror=function(){if(o.length>2&&"string"===typeof o[1]){var e=o.slice(2);t.setDisplayImage({image:o[1],fallbacks:e})}else t.isLoaded=!0,t.setState({imageSource:o[1]||null},function(){t.props.onError&&t.props.onError(t.props.src)})},this.displayImage.onload=function(){t.isLoaded=!0,t.setState({imageSource:o[0]},function(){t.props.onLoad&&t.props.onLoad(o[0])})},"string"===typeof o[0]?this.displayImage.src=o[0]:this.setState({imageSource:o[0]},function(){t.props.onLoad&&t.props.onLoad(o[0])})}},{key:"render",value:function(){return"string"===typeof this.state.imageSource?s.default.createElement("img",n({},(0,l.default)(this.props),{src:this.state.imageSource})):this.state.imageSource}}]),t}();t.default=u,u.displayName="ReactImageFallback",u.propTypes={src:r.default.string,fallbackImage:r.default.oneOfType([r.default.string,r.default.element,r.default.array]).isRequired,initialImage:r.default.oneOfType([r.default.string,r.default.element]),onLoad:r.default.func,onError:r.default.func,initialTimeout:r.default.number},u.defaultProps={initialImage:null}},368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&s(a)&&(t[a]=e[a]);return t};var n,o=a(369),r=(n=o)&&n.__esModule?n:{default:n};var i={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return i[e]||r.default[e]}},369:function(e,t,a){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},451:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(7),i=a(19),s=a(20),l=a(22),c=a(21),u=a(23),p=a(1),d=a.n(p),m=a(153),f=a(29),h=a(17),g=a(45),y=a(367),b=a.n(y),v=Object(p.lazy)(function(){return a.e(9).then(a.bind(null,188))}),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.onOpenCartModal=function(){a.setState({cartModalopen:!0}),a.props.onAddToCartClicked()},a.onCloseCartModal=function(){a.setState({cartModalopen:!1})},a.minusQty=function(){a.state.quantity>1&&(a.setState({stock:"InStock"}),a.setState({quantity:a.state.quantity-1}))},a.plusQty=function(){a.props.product.stock>=a.state.quantity?a.setState({quantity:a.state.quantity+1}):a.setState({stock:"Out of Stock !"})},a.changeQty=function(e){a.setState({quantity:parseInt(e.target.value)})},a.finalCost=function(){var e=Object(r.a)(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,r=(r=t*n).toFixed(2),e.next=5,a.setState({price:r});case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.deadEnd=function(){},a.state={open:!1,cartModalopen:!1,stock:"InStock",quantity:1,image:"",price:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onClickHandle",value:function(e){this.setState({image:e})}},{key:"render",value:function(){for(var e=this,t=this.props,a=t.product,n=(t.symbol,t.onAddToCartClicked,t.onAddToWishlistClicked),o=(t.onAddToCompareClicked,t.relatedItems,t.translate),r=[],i=0;i<a.rating;i++)r.push(d.a.createElement("i",{className:"fa fa-star",key:i}));return d.a.createElement("div",null,d.a.createElement("div",{className:"product-box"},d.a.createElement("div",{className:"img-wrapper"},d.a.createElement("div",{className:"lable-block"},1==a.new?d.a.createElement("span",{className:"lable3"},"new"):"",1==a.sale?d.a.createElement("span",{className:"lable4"},"on sale"):""),d.a.createElement("div",{className:"front"},d.a.createElement(m.a,{target:"_blank",to:"".concat("","/product/").concat(encodeURIComponent(a.url).toLowerCase(),".html"),state:"searchProducts"},d.a.createElement(b.a,{src:a.variants?this.state.image?this.state.image:a.variants[0].images:"".concat(g.c,"/product_images_thumb/")+a.img,fallbackImage:"".concat(g.c+"/images/default.jpg"),initialImage:"".concat(g.c+"/images/ajax-loader.gif"),alt:"".concat(a.name," beldara.com"),className:"img-fluid lazyload bg-img prd_img"}))),d.a.createElement("div",{className:"cart-info cart-wrap d-none"},d.a.createElement("button",{title:"Add to cart",onClick:function(){return e.onOpenCartModal()}},d.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})),d.a.createElement("a",{title:"Add to Wishlist",onClick:n},d.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})))),d.a.createElement("div",{className:"product-detail"},d.a.createElement("div",null,d.a.createElement("div",{className:"rating"},r),d.a.createElement(m.a,{to:"".concat("","/product/").concat(encodeURIComponent(a.url).toLowerCase(),".html")},d.a.createElement("h6",{className:"text-truncate text-capitalize"},a.name)),a.company?d.a.createElement("h6",{className:"text-truncate"},d.a.createElement("small",null,d.a.createElement("i",{className:"fa fa-user"})," ",a.company)):"",d.a.createElement("h4",null,d.a.createElement(p.Suspense,{fallback:""},void 0===a.qty||null===a.qty||isNaN(a.qty)?"":d.a.createElement("div",{className:"small"},o("MOQ")," : ",a.qty),d.a.createElement(v,{productCost:this.deadEnd,finalCost:this.finalCost,start_price:a.start_price,symbol:a.currency,end_price:a.end_price})))))))}}]),t}(p.Component);t.a=Object(h.withTranslate)(Object(f.connect)(function(e,t){return{symbol:e.data.symbol}})(k))}}]);
//# sourceMappingURL=16.b09983bd.chunk.js.map