(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{151:function(e,t,a){"use strict";var r=a(19),n=a(20),c=a(22),o=a(21),s=a(23),i=a(1),l=a.n(i),u=a(153),p=a(17),m=a(152),d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.parent,r=e.translate,n=e.metaTitle,c=e.metaDesc,o=e.metaKeyword;return l.a.createElement("div",{className:"breadcrumb-section py-1"},l.a.createElement(m.Helmet,null,l.a.createElement("title",null,n),l.a.createElement("meta",{name:"description",content:c}),l.a.createElement("meta",{name:"keyword",content:o})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"page-title"},l.a.createElement("h2",null,r(t)))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.a,{to:"".concat("")},r("Home"))),a?l.a.createElement("li",{className:"breadcrumb-item","aria-current":"page"},r(a)):"",l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r(t))))))))}}]),t}(i.Component);t.a=Object(p.withTranslate)(d)},153:function(e,t,a){"use strict";var r=a(1),n=a.n(r),c=a(4),o=a.n(c),s=a(14),i=a.n(s),l=a(46),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,c=Array(n),o=0;o<n;o++)c[o]=arguments[o];return a=r=p(this,e.call.apply(e,[this].concat(c))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,c=a.to;n?t.replace(c):t.push(c)}},p(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(l.createLocation)(t,null,null,c.location):t,s=c.createHref(o);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:s,ref:a}))},t}(n.a.Component);d.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=d},522:function(e,t,a){},767:function(e,t,a){"use strict";a.r(t);var r,n,c,o=a(2),s=a.n(o),i=a(7),l=a(19),u=a(20),p=a(22),m=a(21),d=a(23),f=a(1),h=a.n(f),b=a(151),y=a(6),v=a.n(y),E=a(29),g=(a(522),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={data:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=window.location.hostname,r=(r=c.split("beldara.com")[0]).replace(".",""),this.props.languageMaster.forEach(function(e){e.main_language.toLowerCase()==r.toLowerCase()&&(n=e.code)},this),""===n||void 0===n){e.next=9;break}return e.next=7,v.a.post("https://api.beldara.com/common/static_page.php",{security_token:"",plateform_type:"",langCode:n,pageid:"9"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.setState({data:e.data.result})}).catch(function(e){var t=e.response;return Promise.reject(t)});case 7:e.next=11;break;case 9:return e.next=11,v.a.post("https://api.beldara.com/common/static_page.php",{security_token:"",plateform_type:"",langCode:"en",pageid:"9"},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.setState({data:e.data.result})}).catch(function(e){var t=e.response;return Promise.reject(t)});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,t=e.head,a=e.content;return h.a.createElement("div",null,h.a.createElement(b.a,{title:"Promote your business",metaDesc:this.state.data.desc1,metaKeyword:this.state.data.keyword,metaTitle:this.state.data.title}),h.a.createElement("section",{className:"faq-section section-b-space"},h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-12  mb--sm"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"card-header"},h.a.createElement("h2",null,t)),h.a.createElement("div",{className:"input-layout1 card-body post-ad-page",dangerouslySetInnerHTML:{__html:a}})))))))}}]),t}(f.Component));t.default=Object(E.connect)(function(e){return{languageMaster:e.languageMaster.languageMaster}})(g)}}]);
//# sourceMappingURL=66.b7fe7799.chunk.js.map