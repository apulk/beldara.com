(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{151:function(e,a,t){"use strict";var n=t(19),r=t(20),l=t(22),o=t(21),i=t(23),c=t(1),s=t.n(c),d=t(153),u=t(17),m=t(152),h=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.parent,n=e.translate,r=e.metaTitle,l=e.metaDesc,o=e.metaKeyword;return s.a.createElement("div",{className:"breadcrumb-section py-1"},s.a.createElement(m.Helmet,null,s.a.createElement("title",null,r),s.a.createElement("meta",{name:"description",content:l}),s.a.createElement("meta",{name:"keyword",content:o})),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"page-title"},s.a.createElement("h2",null,n(a)))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.a,{to:"".concat("")},n("Home"))),t?s.a.createElement("li",{className:"breadcrumb-item","aria-current":"page"},n(t)):"",s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},n(a))))))))}}]),a}(c.Component);a.a=Object(u.withTranslate)(h)},153:function(e,a,t){"use strict";var n=t(1),r=t.n(n),l=t(4),o=t.n(l),i=t(14),c=t.n(i),s=t(46),d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function u(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function a(){var t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return t=n=u(this,e.call.apply(e,[this].concat(l))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!m(e)){e.preventDefault();var a=n.context.router.history,t=n.props,r=t.replace,l=t.to;r?a.replace(l):a.push(l)}},u(n,t)}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),a.prototype.render=function(){var e=this.props,a=(e.replace,e.to),t=e.innerRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==a,'You must specify the "to" property');var l=this.context.router.history,o="string"===typeof a?Object(s.createLocation)(a,null,null,l.location):a,i=l.createHref(o);return r.a.createElement("a",d({},n,{onClick:this.handleClick,href:i,ref:t}))},a}(r.a.Component);h.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},a.a=h},760:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(7),o=t(19),i=t(20),c=t(22),s=t(21),d=t(23),u=t(1),m=t.n(u),h=t(153),p=t(151),y=(t(8),t(6)),b=t.n(y),g=t(29),f=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).state={data:""},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=Object(l.a)(r.a.mark(function e(){var a,t,n,l=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.location.hostname,t=a.split("beldara.com")[0],n="",t=t.replace(".",""),this.props.languageMaster.forEach(function(e){e.main_language.toLowerCase()==t.toLowerCase()&&(n=e.code)},this),""===n||void 0===n){e.next=10;break}return e.next=8,b.a.post("https://api.beldara.com/common/static_page.php",{security_token:"",plateform_type:"",langCode:n,pageid:"11"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){l.setState({data:e.data.result})}).catch(function(e){var a=e.response;return Promise.reject(a)});case 8:e.next=12;break;case 10:return e.next=12,b.a.post("https://api.beldara.com/common/static_page.php",{security_token:"",plateform_type:"",langCode:"en",pageid:"11"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){l.setState({data:e.data.result})}).catch(function(e){var a=e.response;return Promise.reject(a)});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"submit",value:function(e){}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(p.a,{title:"FAQ",metaDesc:this.state.data.desc1,metaKeyword:this.state.data.keyword,metaTitle:this.state.data.title}),m.a.createElement("section",{className:"faq-section section-b-space"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 mb-5"},m.a.createElement(h.a,{className:"btn btn-primary",to:"/faq.html"},"Seller FAQ"),m.a.createElement(h.a,{className:"btn btn-outline-primary",to:"/faq_buyer.html"},"Buyer FAQ")),m.a.createElement("div",{className:"col-sm-12"},m.a.createElement("div",{className:"accordion theme-accordion",id:"accordionFaq"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingOne"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#One","aria-expanded":"true","aria-controls":"One"},"Q: How to sell my product if I'm new on Beldara.com?"))),m.a.createElement("div",{id:"One",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"Beldara.com is a global b2b marketplace that connects buyers with sellers. The benefits of joining Beldara.com range from connecting with a wide variety of buyers and sellers to getting volume discounts. You can also trust Beldara.com to help you get recognition in front of an international audience as we are expanding our global reach every day by entering new markets. If you join us as a seller, you can lure the audience in these markets to buy from you and earn well."),m.a.createElement("p",null,"The process of creating a seller account on Beldara.com is easy. You just need to visit the website and click on the join free option available in the top right corner of the website. You can also set up an account by visiting seller.beldara.com. To sign up, you just need to provide some basic details like your name, contact information and the category you want to sell products in. It\u2019s as simple as 1-2-3. Your registration would be completed within a few minutes when you get a call from one of our executives at Beldara.com.")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingTwo"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Two","aria-expanded":"false","aria-controls":"Two"},"Q: How to get more buyer inquiries?"))),m.a.createElement("div",{id:"Two",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"Though there are many ways to increase the number of ",m.a.createElement("b",null,"buyer inquiries")," you get every day, some of them are mentioned over here:"),m.a.createElement("p",null,"\u2022  Make sure that you pick the ",m.a.createElement("b",null,"right product category")),m.a.createElement("p",null,"\u2022  The Product Title needs to be a ",m.a.createElement("b",null,"minimum of 60 characters")," and should cover the key points like ",m.a.createElement("b",null,"size, color, quantity, material type, etc.")),m.a.createElement("p",null,"\u2022     The main ",m.a.createElement("b",null,"image")," should have a ",m.a.createElement("b",null,"clear white background"),". You need to provide ",m.a.createElement("b",null,"6 other images")," that cover a product from ",m.a.createElement("b",null,"different angles"),". It is also essential that the images must not contain any contact details, website name or a copyright mark by another entity."),m.a.createElement("p",null,"\u2022     Insert ",m.a.createElement("b",null,"proper keywords")," in the content to make it SEO and search engine friendly."),m.a.createElement("p",null,"\u2022     Make sure you sell the product at ",m.a.createElement("b",null,"competitive prices")," and keep the shipping charges reasonable."),m.a.createElement("p",null,"\u2022     Add a ",m.a.createElement("b",null,"product description")," and specification wherever required."),m.a.createElement("p",null,"\u2022     The ",m.a.createElement("b",null,"features")," should be restricted to 3-4 main bullet points"),m.a.createElement("p",null,"\u2022     Offer a wide variety of products"),m.a.createElement("p",null,"\u2022     Do not send too many attachments to the consumers"),m.a.createElement("p",null,"\u2022     Avoid sending too many promotional emails or messages"),m.a.createElement("p",null,"\u2022     Be prompt in replying to buyer inquiries"),m.a.createElement("p",null,"\u2022     Do not lie to the customer regarding the availability of goods, it\u2019s delivery or anything else as it may tarnish your reputation"),m.a.createElement("p",null,"\u2022     Use Beldara.com regularly and check your account multiple times a day."),m.a.createElement("p",null,"\u2022     Consider buying our ",m.a.createElement("a",{href:"https://beldara.com/membership.html"},"membership packages")," to boost your visibility on Beldara.com")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingThree"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Three","aria-expanded":"false","aria-controls":"Three"},"Q: How to advertise my product on Beldara.com?"))),m.a.createElement("div",{id:"Three",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"There are multiple ways of promoting your product or specific products on Beldara.com. You can promote the products as sponsored products that appear at the top when a user searches for a relevant product on Beldara.com. You can also ensure that your product is displayed on the right-hand side of the page to get customer attention. We can also highlight you as a star seller or trusted seller as a part of our add-on services. All these advertising methods would cost you and are usually valued for money as they help in generating genuine leads and help you to increase sales and get maximum ROI.")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingFour"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Four","aria-expanded":"false","aria-controls":"Four"},"Q: How to manage buyers\u2019 inquiries on Beldara.com?"))),m.a.createElement("div",{id:"Four",className:"collapse","aria-labelledby":"headingFour","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"The process of managing buyer\u2019s inquiries on Beldara.com is easy. You just need to follow the steps mentioned here:"),m.a.createElement("p",null,"\u2022  Read the request carefully and make sure you are competent enough to fulfill the requirement. If not, it\u2019s better to decline at this stage rather than giving false hope. "),m.a.createElement("p",null,"\u2022     Make sure that you respond to every inquiry within 24 hours. "),m.a.createElement("p",null,"\u2022     Make sure you concisely provide all the requested details. No one has the time to read long replies these days. "),m.a.createElement("p",null,"\u2022    Add a personal signature on the replies including business address and contact details to gain the trust of a buyer and prove your authenticity."),m.a.createElement("p",null,"\u2022    Make sure you maintain records of every communication with a buyer to avoid miscommunication later on.")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingFive"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Five","aria-expanded":"false","aria-controls":"Five"},"Q: What is a hot lead on Beldara.com?"))),m.a.createElement("div",{id:"Five",className:"collapse","aria-labelledby":"headingFive","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"A hot lead is a lead offered to sellers by Beldara.com. When a prospective buyer sends a purchase requirement, a team of Beldara.com reviews it and offers it in the form of hot leads to relevant suppliers. To access these hot leads the seller needs to pay a nominal amount and get the contact details of the buyer in exchange. You don\u2019t have to respond to every hot lead, you can choose the ones you like best. Hot leads save the time of a seller that is spent on going through the Beldara.com website to find relevant inquiries. They also give a seller an opportunity to increase sales and expand the bus. ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingSix"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Six","aria-expanded":"false","aria-controls":"Six"},"Q: How do I pay with Beldara.com?"))),m.a.createElement("div",{id:"Six",className:"collapse","aria-labelledby":"headingSix","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"You have the option of accessing BDP- Beldara Pay when you join Beldara.com. To avail this option, you just need to get your KYC done. We urge all buyers and sellers to make use of BDP because it's secure and ensures you get the payment or send it successfully. To do the KYC, we need your PAN, IFSC code, bank account, and other relevant details. All the sensitive data will be highly protected by Beldara.com. You need to know that you have to pay a nominal fee to maintain the account and on every transaction. We do incentives to connect to BDP to new sellers and buyers.")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingSeven"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Seven","aria-expanded":"false","aria-controls":"Seven"},"Q: What are PPR\u2019s (Product Performance Reports)?"))),m.a.createElement("div",{id:"Seven",className:"collapse","aria-labelledby":"headingSeven","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"Beldara.com is a reputed and global b2b marketplace that allows you to connect with multiple suppliers and filter them according to your criterion or judgment. We strive to ensure that every seller on Beldara.com is legit and verified, but we also request you to do some due diligence before making a decision. If you find any seller is fake or is not meeting the expected standards, you can report him or her and Beldara.com will initiate appropriate action. We also make payments secure for buyers via Beldara Pay and urge you to use it if you want to keep the transactions secure. ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingNine"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Nine","aria-expanded":"false","aria-controls":"Nine"},"Q: Support \u2013What to Do If I Have Received an Irrelevant Lead?"))),m.a.createElement("div",{id:"Nine",className:"collapse","aria-labelledby":"headingNine","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null," Make sure that the quality of your ",m.a.createElement("a",{href:"https://uat.beldara.com/product_listing_guideline.html"},"product listing")," is high and you are making the use of the right keywords, content, and images. "),m.a.createElement("p",null,"The process of managing buyer\u2019s inquiries on Beldara.com is easy. You just need to follow the steps mentioned here:"),m.a.createElement("p",null,"\u2022   Check whether you have all the products sorted by relevance. "),m.a.createElement("p",null,"\u2022      In case you don\u2019t want to deal with certain products, it is recommended that you remove them from your store, even a slight mention of such products can harm the quality of the leads. "),m.a.createElement("p",null,"\u2022     Focus on the product name and make sure that they are relevant and worthy of appearing in relevant searched made by the buyers. "),m.a.createElement("p",null,"\u2022    Crosscheck whether the product description and images are as per the ",m.a.createElement("a",{href:"https://uat.beldara.com/product_listing_guideline.html"},"guideline")," prescribed by Beldara.com."),m.a.createElement("p",null,"\u2022    See to it that you are providing exact pricing details of most of the products (possibly all) because products with pricing details get a higher rank on Beldara.com than the products whose pricing details are not mentioned. "),m.a.createElement("p",null,"\u2022        In case you are willing to make some investment to get better quality leads, consider the ",m.a.createElement("a",{href:"https://uat.beldara.com/membership.html"},"paid services")," offered by Beldara.com that will increase your listing and visibility on Beldara.com.")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingTen"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Ten","aria-expanded":"false","aria-controls":"Ten"},"Q: What Can be Done If a Buyer Hasn\u2019t Responded to the Quotation I Sent?"))),m.a.createElement("div",{id:"Ten",className:"collapse","aria-labelledby":"headingTen","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"\u2022   As a supplier, it is highly recommended that you follow up with the buyer to make sure that the buyer remembers you. In case the buyer is considering you and many other options, it might motivate the buyer to move a bit forward in your direction. You can also use the follow up to offer value-added services or negotiate further to attract the buyer in your direction. All these strategies might help in the conversion of the lead and close on the deal.  ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingEleven"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Eleven","aria-expanded":"false","aria-controls":"Eleven"},"Q: I Don\u2019t Like Getting Retail Enquiries, Why Is It Happening?"))),m.a.createElement("div",{id:"Eleven",className:"collapse","aria-labelledby":"headingEleven","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"\u2022   Some sellers get retail inquiries if they had not mentioned minimum order quantity against each of the products in the catalog. Once you set a higher limit there, you will stop receiving low-quality buyer requirements and only get bulk requirements from the buyers. ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingTweleve"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Tweleve","aria-expanded":"false","aria-controls":"Tweleve"},"Q: I Have Not Received a Quick Response from the Buyer. What are My Options Now?"))),m.a.createElement("div",{id:"Tweleve",className:"collapse","aria-labelledby":"headingTweleve","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"\u2022   Whenever you want the buyer to respond quickly, you must follow these suggestions: "),m.a.createElement("p",null,"\u2022    Make sure that you are offering complete details of your business, including certifications.  "),m.a.createElement("p",null,"\u2022    See to it that you have shared the right images, content, prices and contact details. "),m.a.createElement("p",null,"\u2022    Ensure that you answer to all buyer inquiries promptly.  "),m.a.createElement("p",null,"\u2022    Make use of Beldara.com\u2019s Seller Panel, to send personalized messages and quotations to the buyers.  ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingThirteen"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Thirteen","aria-expanded":"false","aria-controls":"Thirteen"},"Q: What is the Process of Creating a Quotation for a Buyer\u2019s Benefit?"))),m.a.createElement("div",{id:"Thirteen",className:"collapse","aria-labelledby":"headingThirteen","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"\u2022  The process is very simple and is divided into steps over here.  "),m.a.createElement("p",null,"\u2022       Start by clicking on the quotation icon after signing into your seller account.  "),m.a.createElement("p",null,"\u2022         Once you click, the details of the inquiry will be taken from the catalog. "),m.a.createElement("p",null,"\u2022    You are free to add more products by using the \u201cAdd Product\u201d button. "),m.a.createElement("p",null,"\u2022    Once done, you should click on the Next icon.  "),m.a.createElement("p",null,"\u2022    Then you should share the terms & conditions associated with the deal.  "),m.a.createElement("p",null,"\u2022      After that, you should recheck everything and click on generate a quotation "),m.a.createElement("p",null,"\u2022    When you do that, you will get a preview of the quotation where you can again cross check everything. "),m.a.createElement("p",null,"\u2022    If you want to change anything, click on the Modify Your Quotation icon.  "),m.a.createElement("p",null,"\u2022       If everything seems nice, just click on Send Quotation.  "),m.a.createElement("p",null,"\u2022       As soon as you do that, the quotation will be sent to the buyer via email, SMS and even app notification. ")))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header",id:"headingFourteen"},m.a.createElement("h5",{className:"mb-0"},m.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#Fourteen","aria-expanded":"false","aria-controls":"Fourteen"},"Q: Will a Buyer Contact Me (The Seller) Once I Have Sent the Quotation?"))),m.a.createElement("div",{id:"Fourteen",className:"collapse","aria-labelledby":"headingFourteen","data-parent":"#accordionFaq"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",null,"\u2022  As buyers receive notifications from multiple sellers via multiple channels, the buyer might not contact you. It is strongly recommended that you follow up with the buyer and mention how you are better than other sellers to motivate the buyer to close the deal.  "))))))))))}}]),a}(u.Component);a.default=Object(g.connect)(function(e){return{languageMaster:e.languageMaster.languageMaster}})(f)}}]);
//# sourceMappingURL=85.c1e49a11.chunk.js.map