(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),i=r("825a"),s=r("1d80"),o=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),h=[].push,p=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(s(this)),i=void 0===r?v:r>>>0;if(0===i)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,i);var o,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,f+"g");while(o=d.call(g,n)){if(c=g.lastIndex,c>p&&(u.push(n.slice(p,o.index)),o.length>1&&o.index<n.length&&h.apply(u,o.slice(1)),l=o[0].length,p=c,u.length>=i))break;g.lastIndex===o.index&&g.lastIndex++}return p===n.length?!l&&g.test("")||u.push(""):u.push(n.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a,r):n.call(String(a),t,r)},function(e,a){var s=r(n,e,this,a,n!==t);if(s.done)return s.value;var d=i(e),f=String(this),h=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new h(g?d:"^(?:"+d.source+")",b),w=void 0===a?v:a>>>0;if(0===w)return[];if(0===f.length)return null===u(y,f)?[f]:[];var _=0,C=0,x=[];while(C<f.length){y.lastIndex=g?C:0;var S,k=u(y,g?f:f.slice(C));if(null===k||(S=p(l(y.lastIndex+(g?0:C)),f.length))===_)C=c(f,C,m);else{if(x.push(f.slice(_,C)),x.length===w)return x;for(var E=1;E<=k.length-1;E++)if(x.push(k[E]),x.length===w)return x;C=_=S}}return x.push(f.slice(_)),x}]}),!g)},"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,i=r("a640"),s=r("ae40"),o=i("reduce"),c=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!o||!c},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2490:function(e,t,r){},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),s=r("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},3455:function(e,t,r){"use strict";var n=r("e9f1"),a=r.n(n);a.a},"3b25":function(e,t,r){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5f29":function(e,t,r){"use strict";var n=r("b983"),a=r.n(n);a.a},"66dc":function(e,t,r){"use strict";var n=r("3b25"),a=r.n(n);a.a},"7db0":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").find,i=r("44d2"),s=r("ae40"),o="find",c=!0,l=s(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(o)},"857a":function(e,t,r){var n=r("1d80"),a=/"/g;e.exports=function(e,t,r,i){var s=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+s+"</"+t+">"}},"89d6":function(e,t,r){"use strict";var n=r("91a2"),a=r.n(n);a.a},"91a2":function(e,t,r){},9911:function(e,t,r){"use strict";var n=r("23e7"),a=r("857a"),i=r("af03");n({target:"String",proto:!0,forced:i("link")},{link:function(e){return a(this,"a","href",e)}})},a0e2:function(e,t,r){},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),s=r("6eeb"),o=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),h=r("241c").f,p=r("06cf").f,v=r("9bf2").f,g=r("58a8").trim,m="Number",b=a[m],y=b.prototype,w=c(f(y))==m,_=function(e){var t,r,n,a,i,s,o,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,n)}return+l};if(i(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var C,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(w?d((function(){y.valueOf.call(r)})):c(r)!=m)?l(new b(_(t)),r,x):_(t)},S=n?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;S.length>k;k++)o(b,C=S[k])&&!o(x,C)&&v(x,C,p(b,C));x.prototype=y,y.constructor=x,s(a,m,x)}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},af03:function(e,t,r){var n=r("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b983:function(e,t,r){},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-home"},[r("common-header"),r("div",{staticClass:"page-container"},[r("search-form",{attrs:{keyword:e.keyword},on:{changeKeyword:e.changeKeyword,onSearch:e.onSearch}}),e.isSearch?e._e():r("declaration"),e.isSearch&&e.keyword?r("search-result",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{results:e.results,total:e.total,busy:e.busy,loading:e.hasMoreLoading,hasMore:e.hasMore},on:{loadMore:e.loadMore,changeBusy:e.changeBusy}}):e._e()],1),r("common-footer")],1)},a=[],i=(r("7db0"),r("caad"),r("d3b7"),r("2532"),r("96cf"),r("1da1")),s=r("080a"),o=r("b893"),c=r("2645"),l=r("c55c"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"search-form-wrapper"},[r("el-form",{staticClass:"search-form clearfix",nativeOn:{submit:function(t){return t.preventDefault(),e.onSearch(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.innerKeyword,expression:"innerKeyword",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.innerKeyword},on:{input:function(t){t.target.composing||(e.innerKeyword=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("button",{directives:[{name:"stat",rawName:"v-stat",value:e.statInfo,expression:"statInfo"}],staticClass:"btn-search",attrs:{type:"submit"}},[r("span",{staticClass:"icon"}),r("span",{staticClass:"text"},[e._v("搜索")])])])],1)},d=[],f=r("dacf"),h={name:"SearchForm",props:{keyword:{type:String,default:""}},data:function(){return{placeholder:"输入主体名称、相关编码等"}},computed:{innerKeyword:{get:function(){return this.keyword},set:function(e){e!==this.keyword&&e.length<=100&&this.$emit("changeKeyword",e)}},statInfo:function(){var e=this.keyword;return e?{action:f["a"].SEARCH,movementInfo:e}:null}},methods:{onSearch:function(){this.$emit("onSearch")}}},p=h,v=(r("66dc"),r("2877")),g=Object(v["a"])(p,u,d,!1,null,"47ef25b8",null),m=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"declaration"},[r("h2",{staticClass:"title"},[e._v("功能说明")]),r("ul",{staticClass:"list"},e._l(e.declarations,(function(t,n){return r("li",{key:n,staticClass:"item"},[e._v(e._s(t))])})),0)])},y=[],w={name:"Declaration",data:function(){return{declarations:["a、支持输入市场主体名称、市场主体统一社会信用代码或法人身份证或机构编码、证照编号等信息，可查询证照所载相关信息；","b、可对查询结果的证照查看详情，查看证照所载明的可公开的全部信息；","c、支持下载及打印证照（打印功能需使用电脑登录该网站）使用，并对下载或打印的证照赋予防伪的二维码标识，可通过手机扫码对证照进行查验。"]}}},_=w,C=(r("efc8"),Object(v["a"])(_,b,y,!1,null,"ebd15d32",null)),x=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{ref:"wrapper",staticClass:"search-result"},[r("header",{staticClass:"header"},[r("h2",{staticClass:"title"},[e._v(" 查询结果（共"),r("span",{staticClass:"total"},[e._v(e._s(e.total))]),e._v("条） ")])]),e.total>0?r("ul",{staticClass:"result-list"},e._l(e.currentData,(function(t){return r("ResultItem",{key:t.id,tag:"li",staticClass:"item",attrs:{item:t,keyword:e.currentKeyword}})})),1):r("div",{staticClass:"result-empty"},[e._v(" 抱歉，找不到与您查询相符的记录 ")]),e.loading?[e.hasMore?r("loading"):e._e(),e.hasMore?e._e():r("no-more")]:e._e()],2)},k=[],E=(r("99af"),r("13d5"),r("a9e3"),r("6b75"));function I(e){if(Array.isArray(e))return Object(E["a"])(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("3ca3"),r("ddb0");function M(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var N=r("06c5");function O(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e){return I(e)||M(e)||Object(N["a"])(e)||O()}var j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"item",on:{click:e.handleClick}},[r("header",{staticClass:"item-header"},[e._m(0),r("a",{staticClass:"btn-more",attrs:{to:e.link}},[e._v(" 查看证照"),r("span",{staticClass:"icon el-icon-arrow-right"})])]),r("div",{staticClass:"info"},[r("div",{staticClass:"row"},[r("span",{staticClass:"label"},[e._v("证照类型：")]),r("span",{staticClass:"value"},[e._v(e._s(e.item.permitType))])]),r("div",{staticClass:"row"},[r("span",{staticClass:"label"},[e._v("统一社会信用代码：")]),r("span",{staticClass:"value"},[e._v(e._s(e.item.uniformSocialCreditCode))])]),r("div",{staticClass:"row"},[r("span",{staticClass:"label"},[e._v("证照编号：")]),r("span",{staticClass:"value"},[e._v(e._s(e.item.permitNumber))])]),r("div",{staticClass:"row"},[r("span",{staticClass:"label"},[e._v("颁发日期：")]),r("span",{staticClass:"value"},[e._v(e._s(e._f("formatDate")(e.item.permitIssuedTime)))])])])])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{staticClass:"company-name",domProps:{innerHTML:e._s(e.companyName)}})}],A=(r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("1276"),r("9911"),{name:"ResultItem",props:{item:{type:Object,default:function(){return{}}},keyword:{type:String,default:""}},computed:{companyName:function(){var e=this.keyword,t=this.item.oprName,r=void 0===t?"":t,n=new RegExp(this.keyword,"i");return r.replace(n,'<span class="keyword">'+e+"</span>")},link:function(){var e=this.item;return e&&e.certSeq?"/permit/".concat(e.certSeq):"/"}},filters:{formatDate:function(e){return e.split(" ")[0]}},methods:{handleClick:function(){this.$router.push(this.link)}}}),T=A,L=(r("bf1e"),Object(v["a"])(T,j,R,!1,null,"2fb07a8e",null)),K=L.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-loading"},[r("span",{staticClass:"icon el-icon-loading"}),e._v(" 加载中... ")])}],P={name:"Loading"},F=P,D=(r("5f29"),Object(v["a"])(F,H,B,!1,null,"db2b6ac0",null)),V=D.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"no-more"},[e._v("暂无更多数据")])},G=[],U={name:"NoMore"},z=U,J=(r("89d6"),Object(v["a"])(z,q,G,!1,null,"f1f7f9d2",null)),X=J.exports,Y={name:"SearchResult",components:{ResultItem:K,Loading:V,NoMore:X},data:function(){return{wrapperPageTop:0,wrapperHeight:0,viewportHeight:0,$_handleScroll:null}},props:{results:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:Boolean,busy:Boolean,hasMore:Boolean},computed:{currentData:function(){var e=this.results;return e.reduce((function(e,t){var r=t.data||[];return e=[].concat($(e),$(r)),e}),[])},currentKeyword:function(){var e=this.results;return e[0]["keyword"]}},methods:{initScroll:function(){var e=this.$refs.wrapper;if(this.wrapperPageTop<=0){var t=Object(o["a"])(e),r=t.top;this.wrapperPageTop=r||0}if(this.viewportHeight<=0){var n=Object(o["d"])(),a=n.height;this.viewportHeight=a||0}var i=parseInt(Object(o["c"])(e,"height"));this.wrapperHeight=i||0,this.$_handleScroll||(this.$_handleScroll=this.handleScroll.bind(this),document.addEventListener("scroll",this.$_handleScroll,!1))},handleScroll:function(e){var t=e||window.event,r=Object(o["b"])(t),n=r.top,a=this.viewportHeight,i=this.wrapperPageTop,s=this.wrapperHeight,c=this.hasMore;c?n+a>i+s-100&&this.loadMore():n+a>i+s+20&&this.loadMore()},loadMore:function(){var e=this.hasMore,t=this.busy,r=(this.loading,this.currentKeyword);if(!e&&t)return!1;this.$emit("loadMore",{keyword:r,bounce:{x:0,y:this.wrapperPageTop+this.wrapperHeight-this.viewportHeight}})}},watch:{results:function(){var e=this;this.$nextTick((function(){e.$emit("changeBusy",!1),e.initScroll()}))}},beforeDestroy:function(){this.$_handleScroll&&(document.removeEventListener("scroll",this.$_handleScroll,!1),this.$_handleScroll=null)}},Q=Y,W=(r("dfdb"),Object(v["a"])(Q,S,k,!1,null,"c5dad576",null)),Z=W.exports,ee={name:"Home",components:{CommonHeader:c["a"],CommonFooter:l["a"],SearchForm:m,Declaration:x,SearchResult:Z},data:function(){return{title:"东莞市电子证照公示查验系统",keyword:"",loading:!1,results:[],total:0,page:1,isSearch:!1,keywordRules:{minLength:2,words:["中国","广东","广东省","东莞","东莞市","公司","有限公司"]},hasMore:!0,busy:!0,hasMoreLoading:!1}},methods:{changeKeyword:function(e){this.keyword=e},checkKeyword:function(e){var t=this;return new Promise((function(r,n){var a=t.keywordRules,i=a.minLength,s=a.words;e.length<i&&r(!1),s.includes(e)&&r(!1),r(!0)}))},changeBusy:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.busy=e},loadMore:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.keyword,a=e.bounce,!t.busy){r.next=3;break}return r.abrupt("return");case 3:return t.changeBusy(!0),t.hasMoreLoading=!0,t.page++,r.next=8,t.changeKeyword(n);case 8:if(t.hasMore){r.next=16;break}return r.next=11,Object(o["f"])(1e3);case 11:return i=Object(o["b"])().top,i>a.y&&window.scrollTo(a.x,a.y),t.changeBusy(!1),t.hasMoreLoading=!1,r.abrupt("return",!1);case 16:return r.next=18,Object(s["d"])({current:t.page,size:10,word:n}).catch((function(e){console.log(e),t.page--,t.changeBusy(!1)}));case 18:c=r.sent,c.current,l=c.records,c.total,l.length>0?t.results.push({keyword:n,data:l,page:t.page}):t.hasMore=!1,t.hasMoreLoading=!1,t.changeBusy(!1);case 25:case"end":return r.stop()}}),r)})))()},onSearch:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.keyword,n=e.page,r){t.next=8;break}return e.results=[],e.total=0,e.page=1,e.isSearch=!1,t.abrupt("return");case 8:return t.next=10,e.checkKeyword(r);case 10:if(a=t.sent,a){t.next=14;break}return e.$alert("请输入更为详细的查询条件","请重新查询",{confirmButtonText:"确定",center:!0}),t.abrupt("return");case 14:if(!e.results.find((function(e){return e.page===n&&e.keyword===r}))){t.next=16;break}return t.abrupt("return");case 16:return e.results.find((function(e){return e.keyword!==r}))&&(e.page=1,n=1,e.results=[]),e.loading=!0,e.isSearch=!0,t.next=21,Object(s["d"])({current:n,size:10,word:r}).catch((function(t){console.log(t),e.results=[],e.total=0,e.page=1,e.loading=!1}));case 21:i=t.sent,i.current,o=i.records,c=i.total,e.total=c,o.length<=0||c<=0?e.results=[]:e.results.push({page:n,keyword:r,data:o}),e.loading=!1,e.busy=!1;case 29:case"end":return t.stop()}}),t)})))()}}},te=ee,re=(r("3455"),Object(v["a"])(te,n,a,!1,null,"7f512bca",null));t["default"]=re.exports},bf1e:function(e,t,r){"use strict";var n=r("d2b8"),a=r.n(n);a.a},c55c:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"page-footer"},[r("div",{staticClass:"sponsor"},[e._v(" 主办单位：东莞市政务服务数据管理局 ")]),r("div",{staticClass:"tel"},[e._v(" 咨询热线：12345 ")])])}],i={name:"PageFooter"},s=i,o=(r("e598"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,"67b11668",null);t["a"]=c.exports},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,i=r("44d2"),s=r("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d2b8:function(e,t,r){},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),i=r("44ad"),s=r("50c4"),o=function(e){return function(t,r,o,c){n(r);var l=a(t),u=i(l),d=s(l.length),f=e?d-1:0,h=e?-1:1;if(o<2)while(1){if(f in u){c=u[f],f+=h;break}if(f+=h,e?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:d>f;f+=h)f in u&&(c=r(c,u[f],f,l));return c}};e.exports={left:o(!1),right:o(!0)}},d59f:function(e,t,r){},dfdb:function(e,t,r){"use strict";var n=r("2490"),a=r.n(n);a.a},e598:function(e,t,r){"use strict";var n=r("a0e2"),a=r.n(n);a.a},e9f1:function(e,t,r){},efc8:function(e,t,r){"use strict";var n=r("d59f"),a=r.n(n);a.a}}]);
//# sourceMappingURL=home.4394d543.js.map