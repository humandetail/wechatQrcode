(function(e){function n(n){for(var t,i,S=n[0],c=n[1],u=n[2],d=0,G=[];d<S.length;d++)i=S[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&G.push(o[i][0]),o[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);f&&f(n);while(G.length)G.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,i=1;i<r.length;i++){var S=r[i];0!==o[S]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},i={app:0},o={app:0},a=[];function S(e){return c.p+"js/"+({404:"404","home~license~permit~qrpermit":"home~license~permit~qrpermit",home:"home",license:"license","permit~qrpermit":"permit~qrpermit",permit:"permit",qrpermit:"qrpermit",qrscan:"qrscan",wechatGuide:"wechatGuide"}[e]||e)+"."+{404:"d063b0f1","home~license~permit~qrpermit":"3fff14ce",home:"4394d543",license:"d89e8dc5","permit~qrpermit":"6b4e6258",permit:"488702f1",qrpermit:"01434f8e",qrscan:"cfd96319",wechatGuide:"c773ffbf","chunk-2d216214":"e238e43d","chunk-2d216257":"256ee085","chunk-88dc197a":"cc851561"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var n=[],r={404:1,"home~license~permit~qrpermit":1,home:1,license:1,"permit~qrpermit":1,wechatGuide:1};i[e]?n.push(i[e]):0!==i[e]&&r[e]&&n.push(i[e]=new Promise((function(n,r){for(var t="css/"+({404:"404","home~license~permit~qrpermit":"home~license~permit~qrpermit",home:"home",license:"license","permit~qrpermit":"permit~qrpermit",permit:"permit",qrpermit:"qrpermit",qrscan:"qrscan",wechatGuide:"wechatGuide"}[e]||e)+"."+{404:"bf67d920","home~license~permit~qrpermit":"e66f592f",home:"75f9a5e0",license:"d91ab522","permit~qrpermit":"a9b4f95e",permit:"31d6cfe0",qrpermit:"31d6cfe0",qrscan:"31d6cfe0",wechatGuide:"f06f1203","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-88dc197a":"31d6cfe0"}[e]+".css",o=c.p+t,a=document.getElementsByTagName("link"),S=0;S<a.length;S++){var u=a[S],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===o))return n()}var G=document.getElementsByTagName("style");for(S=0;S<G.length;S++){u=G[S],d=u.getAttribute("data-href");if(d===t||d===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var t=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete i[e],f.parentNode.removeChild(f),r(a)},f.href=o;var T=document.getElementsByTagName("head")[0];T.appendChild(f)})).then((function(){i[e]=0})));var t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=S(e);var G=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;G.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",G.name="ChunkLoadError",G.type=t,G.request=i,r[1](G)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/h5/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var G=0;G<u.length;G++)n(u[G]);var f=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"3dfd":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{staticStyle:{"font-family":"'permit-font'",position:"fixed",left:"-100px",top:"-100px"}},[e._v(".")]),r("keep-alive",[r("router-view",{key:this.$route.fullPath})],1)],1)},i=[],o={components:{},data:function(){return{routeKey:this.$route.fullPath}}},a=o,S=r("2877"),c=Object(S["a"])(a,t,i,!1,null,null,null);n["default"]=c.exports},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),i=r("3dfd"),o=(r("d3b7"),r("8c4f"));t["default"].use(o["a"]);var a=[{path:"/",name:"Home",meta:{pageName:"查验主页"},component:function(){return Promise.all([r.e("home~license~permit~qrpermit"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/license/:id",name:"License",meta:{pageName:""},component:function(){return Promise.all([r.e("home~license~permit~qrpermit"),r.e("license")]).then(r.bind(null,"e70f"))}},{path:"/permit/:id",name:"Permit",meta:{pageName:"证照详情"},component:function(){return Promise.all([r.e("home~license~permit~qrpermit"),r.e("permit~qrpermit"),r.e("permit")]).then(r.bind(null,"e4c7"))}},{path:"/wechatGuide",name:"WechatGuide",meta:{pageName:"微信指引"},component:function(){return r.e("wechatGuide").then(r.bind(null,"df18"))}},{path:"/qr",component:function(){return Promise.resolve().then(r.bind(null,"3dfd"))},children:[{path:"",component:function(){return r.e("404").then(r.bind(null,"8cdb"))}},{path:"c",name:"QrPermit",meta:{pageName:"证照详情（扫码页面）"},component:function(){return Promise.all([r.e("home~license~permit~qrpermit"),r.e("permit~qrpermit"),r.e("qrpermit")]).then(r.bind(null,"5a43c"))}},{path:"scan",name:"QrScan",meta:{pageName:"公众号扫码"},component:function(){return r.e("qrscan").then(r.bind(null,"c36a"))}}]},{path:"*",name:"404",component:function(){return r.e("404").then(r.bind(null,"8cdb"))}}],S=new o["a"]({mode:"history",base:"/h5",routes:a,scrollBehavior:function(e,n,r){return r||{x:0,y:0}}}),c=S,u=r("2f62"),d="GSCY_H5_",G=d+"UUID",f="CHANGE_UUID",T="CHANGE_DEVICE",l="";try{l=localStorage.getItem(G)||""}catch(R){}var s,H=function(){return{uuid:l,deviceInfo:null}},p=H,m=r("ade3"),I=(s={},Object(m["a"])(s,f,(function(e,n){e.uuid=n})),Object(m["a"])(s,T,(function(e,n){e.deviceInfo=n})),s),h={changeUuid:function(e,n){var r=e.commit;r(f,n);try{localStorage.setItem(G,n)}catch(R){}},changeDevice:function(e,n){var r=e.commit;r(T,n)}},A={state:p,mutations:I,actions:h},M={uuid:function(e){return e.stat.uuid},deviceInfo:function(e){try{return e.stat.deviceInfo}catch(R){return{}}},browserInfo:function(e){try{return e.stat.deviceInfo.browserInfo}catch(n){return{}}}};t["default"].use(u["a"]);var C=new u["a"].Store({state:{},mutations:{},actions:{},modules:{stat:A},getters:M}),b=r("5c96"),P=r.n(b),E=r("dacf"),O=r("ec26"),v=(r("99af"),r("c975"),r("4fad"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("4d90"),r("5319"),r("3835")),g=r("d4ec"),x=r("bee2"),w=function(){function e(){Object(g["a"])(this,e);var n="undefined"!==typeof self?self:{};this.navigator="undefined"===typeof n.navigator?{}:n.navigator,this.userAgent=this.navigator.userAgent||{},this.basicInfoMap={engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","360","360SE","360EE","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat",,"WechatWork","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet","iPad","PC"]},this.matchMap=this.getMatchMap(this.userAgent);var r=this.getBasicInfo("device"),t=this.getBasicInfo("os"),i=this.getBasicInfo("browser"),o=this.getOSVersion(this.userAgent,t),a=this.getDate(),S=this.getOrientationStatus(),c=this.getNetwork(),u=this.getLanguage(),d=this.getBrowserInfo(i),G=this.getBrand();return{device:r,os:t,osVersion:o,date:a,orientationStatus:S,netWork:c,language:u,browserInfo:d,brand:G}}return Object(x["a"])(e,[{key:"getMatchMap",value:function(e){return{Trident:e.indexOf("Trident")>-1||e.indexOf("NET CLR")>-1,Presto:e.indexOf("Presto")>-1,WebKit:e.indexOf("AppleWebKit")>-1,Gecko:e.indexOf("Gecko/")>-1,Safari:e.indexOf("Safari")>-1,Chrome:e.indexOf("Chrome")>-1||e.indexOf("CriOS")>-1,IE:e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1,Edge:e.indexOf("Edge")>-1,Firefox:e.indexOf("Firefox")>-1||e.indexOf("FxiOS")>-1,"Firefox Focus":e.indexOf("Focus")>-1,Chromium:e.indexOf("Chromium")>-1,Opera:e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,Vivaldi:e.indexOf("Vivaldi")>-1,Yandex:e.indexOf("YaBrowser")>-1,Arora:e.indexOf("Arora")>-1,Lunascape:e.indexOf("Lunascape")>-1,QupZilla:e.indexOf("QupZilla")>-1,"Coc Coc":e.indexOf("coc_coc_browser")>-1,Kindle:e.indexOf("Kindle")>-1||e.indexOf("Silk/")>-1,Iceweasel:e.indexOf("Iceweasel")>-1,Konqueror:e.indexOf("Konqueror")>-1,Iceape:e.indexOf("Iceape")>-1,SeaMonkey:e.indexOf("SeaMonkey")>-1,Epiphany:e.indexOf("Epiphany")>-1,360:e.indexOf("QihooBrowser")>-1||e.indexOf("QHBrowser")>-1,"360EE":e.indexOf("360EE")>-1,"360SE":e.indexOf("360SE")>-1,UC:e.indexOf("UC")>-1||e.indexOf(" UBrowser")>-1,QQBrowser:e.indexOf("QQBrowser")>-1,QQ:e.indexOf("QQ/")>-1,Baidu:e.indexOf("Baidu")>-1||e.indexOf("BIDUBrowser")>-1,Maxthon:e.indexOf("Maxthon")>-1,Sogou:e.indexOf("MetaSr")>-1||e.indexOf("Sogou")>-1,LBBROWSER:e.indexOf("LBBROWSER")>-1||e.indexOf("LieBaoFast")>-1,"2345Explorer":e.indexOf("2345Explorer")>-1,TheWorld:e.indexOf("TheWorld")>-1,XiaoMi:e.indexOf("MiuiBrowser")>-1,Quark:e.indexOf("Quark")>-1,Qiyu:e.indexOf("Qiyu")>-1,Wechat:e.indexOf("MicroMessenger")>-1,WechatWork:e.indexOf("wxwork/")>-1,Taobao:e.indexOf("AliApp(TB")>-1,Alipay:e.indexOf("AliApp(AP")>-1,Weibo:e.indexOf("Weibo")>-1,Douban:e.indexOf("com.douban.frodo")>-1,Suning:e.indexOf("SNEBUY-APP")>-1,iQiYi:e.indexOf("IqiyiApp")>-1,Windows:e.indexOf("Windows")>-1,Linux:e.indexOf("Linux")>-1||e.indexOf("X11")>-1,"Mac OS":e.indexOf("Macintosh")>-1,Android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,Ubuntu:e.indexOf("Ubuntu")>-1,FreeBSD:e.indexOf("FreeBSD")>-1,Debian:e.indexOf("Debian")>-1,"Windows Phone":e.indexOf("IEMobile")>-1||e.indexOf("Windows Phone")>-1,BlackBerry:e.indexOf("BlackBerry")>-1||e.indexOf("RIM")>-1,MeeGo:e.indexOf("MeeGo")>-1,Symbian:e.indexOf("Symbian")>-1,iOS:e.indexOf("like Mac OS X")>-1,"Chrome OS":e.indexOf("CrOS")>-1,WebOS:e.indexOf("hpwOS")>-1,Mobile:e.indexOf("Mobi")>-1||e.indexOf("iPh")>-1||e.indexOf("480")>-1,Tablet:e.indexOf("Tablet")>-1||e.indexOf("Nexus 7")>-1,iPad:e.indexOf("iPad")>-1,PC:!(e.indexOf("Mobi")>-1||e.indexOf("iPh")>-1||e.indexOf("480")>-1)&&!(e.indexOf("iPad")>-1)&&!(e.indexOf("Tablet")>-1||e.indexOf("Nexus 7")>-1)}}},{key:"getBasicInfo",value:function(e){for(var n=this.basicInfoMap[e]||[],r=n.length,t=this.matchMap,i="unknow",o=0;o<r;o++)t[n[o]]&&(i=n[o]);return i}},{key:"getBrand",value:function(){for(var e,n={iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",OnePlus:"ONEPLUS",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},r=0,t=Object.entries(n);r<t.length;r++){var i=Object(v["a"])(t[r],2),o=i[0],a=i[1];if(e=new RegExp(a,"i"),e.test(this.userAgent))return o}return"unknow"}},{key:"getDate",value:function(){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,t=e.getDate(),i=e.getHours(),o=e.getMinutes(),a=e.getSeconds();function S(e){return e=""+e,e.padStart(2,"0")}return"".concat(n,"-").concat(S(r),"-").concat(S(t)," ").concat(S(i),":").concat(S(o),":").concat(S(a))}},{key:"getOSVersion",value:function(e,n){var r={Windows:function(){var n=e.replace(/^.*Windows NT ([\d.]+);.*$/,"$1"),r={6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"};return r[n]||n},Android:function(){return e.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return e.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return e.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return e.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return e.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}};return r[n]?r[n]():"unknow"}},{key:"getOrientationStatus",value:function(){var e=window.matchMedia("(orientation: portrait)");return e.matches?"portrait":"landscape"}},{key:"getNetwork",value:function(){var e="unknow";try{e=this.navigator.connection.effectiveType}catch(R){}return e}},{key:"getLanguage",value:function(){var e=this.navigator;return e.language?e.language:e.browserLanguage}},{key:"getBrowserInfo",value:function(e){try{var n=this.userAgent,r=this.navigator,t=this.matchMap,i=!1,o=function(e,n){var t=r.mimeTypes;for(var i in t)if(t[i][e]==n)return!0;return!1};if(window.chrome){var a=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");a>36&&window.showModalDialog?i=!0:a>45&&(i=o("type","application/vnd.chromium.remoting-viewer"))}if(t["Baidu"]&&t["Opera"]&&(t["Baidu"]=!1),t["Mobile"]&&(t["Mobile"]=!(n.indexOf("iPad")>-1)),i&&(o("type","application/gameplugin")||"undefined"==typeof this.navigator["connection"]["saveData"]?t["360SE"]=!0:t["360EE"]=!0),t["IE"]||t["Edge"]){var S=window.screenTop-window.screenY;switch(S){case 71:break;case 74:break;case 99:break;case 102:t["360EE"]=!0;break;case 75:break;case 74:break;case 105:break;case 104:t["360SE"]=!0;break;default:break}}var c={Safari:function(){return n.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return n.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return n.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return n.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return n.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return n.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return n.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return n.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return n.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return n.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return n.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return n.replace(/^.*Lunascape[\/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return n.replace(/^.*QupZilla[\/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return n.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return n.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return n.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return n.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return n.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return n.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return n.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},360:function(){return n.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){var e={63:"10.0",55:"9.1",45:"8.1",42:"8.0",31:"7.0",21:"6.3"},r=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[r]||""},"360EE":function(){var e={69:"11.0",63:"9.5",55:"9.0",50:"8.7",30:"7.5"},r=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[r]||""},Maxthon:function(){return n.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return n.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return n.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return n.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1")},UC:function(){return n.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return n.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},LBBROWSER:function(){var e="";n.indexOf("LieBaoFast")>-1&&(e=n.replace(/^.*LieBaoFast\/([\d.]+).*$/,"$1"));var r={57:"6.5",49:"6.0",46:"5.9",42:"5.3",39:"5.2",34:"5.0",29:"4.5",21:"4.0"},t=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e||r[t]||""},"2345Explorer":function(){return n.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return n.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return n.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return n.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return n.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return n.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},WechatWork:function(){return n.replace(/^.*wxwork\/([\d.]+).*$/,"$1")},Taobao:function(){return n.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return n.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return n.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return n.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return n.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return n.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}},u="",d="";return c[e]&&(u=c[e](),u===n&&(u="")),"Chrome"==e&&n.match(/\S+Browser/)&&(e=n.match(/\S+Browser/)[0],u=n.replace(/^.*Browser\/([\d.]+).*$/,"$1")),"Edge"==e&&(d=u>"75"?"Blink":"EdgeHTML"),("Chrome"==e&&parseInt(u)>27||t["Chrome"]&&"WebKit"==d&&parseInt(u["Chrome"]())>27||"Opera"==e&&parseInt(u)>12||"Yandex"==e)&&(d="Blink"),{browser:e,engine:d,version:u}}catch(G){return{browser:e,version:"unknow",engine:"unknow"}}}}]),e}(),B=r("bc3a"),$=r.n(B),N=r("6736");function y(e){return e&&"string"===typeof e?"UNKNOW"===e.toUpperCase()?null:e:null}function L(){return Object(O["a"])()}function X(){var e=new w;return e}function k(e,n,r,t){var i=e.movement,o=e.pageName,a=e.location,S=e.sysName,c=void 0===S?"东莞市电子证照公示查验系统":S,u=e.movementInfo,d=void 0===u?null:u;return{browser:y(r.browser),browserVersion:y(r.version),cookieUuid:y(t),currentUrl:y(window.location.href),equipBrand:y(n.brand),equipType:"Mobile"===y(n.device)?"MB":y(n.device),language:y(n.language),location:y(a),movement:y(i),movementInfo:y(d),os:y(n.os),osVersion:y(n.osVersion),pageName:y(o),referrerUrl:y(document.referrer),sysName:c}}function D(e){return $.a.post(N["a"].STATS,e)}function U(e,n){var r=n.value;if(!r)return!1;var t=r.action,i=E["a"][t]&&E["b"][E["a"][t]]||null;if(!i)return!1;var o=C.getters,a=o.deviceInfo,S=o.browserInfo,c=o.uuid;i.movementInfo=r.movementInfo;var u=k(i,a,S,c);D(u)}var Q={bind:function(e,n){e._bindEvent=U.bind(this,e,n),e.addEventListener("click",e._bindEvent)},update:function(e,n){e._bindEvent&&e.removeEventListener("click",e._bindEvent),e._bindEvent=U.bind(this,e,n),e.addEventListener("click",e._bindEvent)}},W=Q,V=r("fe3c"),F=r.n(V);(function(e,n){var r=e.documentElement,t="orientationchange"in window?"orientationchange":"resize";function i(){var e=r.clientWidth;e&&(r.style.fontSize=e/3.75+"px")}i(),e.addEventListener&&(n.addEventListener(t,i,!1),e.addEventListener("DOMContentLoaded",(function(){F.a.attach(e.body)})))})(document,window);var K=r("323e"),q=r.n(K);r("a5d8");q.a.configure({showSpinner:!1}),c.beforeEach((function(e,n,r){q.a.start();var t=C.getters,i=t.uuid,o=t.deviceInfo;if(i||(i=L(),C.dispatch("changeUuid",i)),o||(o=X(),C.dispatch("changeDevice",o)),"MOBILE"!==o.device.toUpperCase()&&"MB"!==o.device.toUpperCase()){var a=window.location,S=a.protocol,c=a.host,u=a.origin;return window.location.href="".concat(S,"//").concat(c||u),!1}var d=o,G=d.browserInfo,f=void 0===G?{}:G,T=e.meta&&e.meta.pageName?e.meta.pageName:null,l=navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1;if(T){var s=l?E["b"].SCAN:E["b"].VISIT;s.pageName=T,s.sysName="东莞市电子证照公示查验系统";var H=k(s,o,f,i);D(H)}r()})),c.afterEach((function(){q.a.done()}));r("0fae"),r("6861");t["default"].use(P.a),t["default"].directive("stat",W),t["default"].config.productionTip=!1,new t["default"]({router:c,store:C,render:function(e){return e(i["default"])}}).$mount("#app")},6736:function(e,n,r){"use strict";var t={GET_LICENSE:"/api/v1/license",GET_PERMIT:"/api/v1/permit",GET_BLOCK_CHAIN:"/api/v1/blockChain",GET_PERMIT_LIST:"/api/v1/permitList",STATS:"/api/v1/data/stats"};n["a"]=t},6861:function(e,n,r){},b893:function(e,n,r){"use strict";r.d(n,"f",(function(){return i})),r.d(n,"e",(function(){return o})),r.d(n,"b",(function(){return a})),r.d(n,"d",(function(){return S})),r.d(n,"a",(function(){return c})),r.d(n,"c",(function(){return u}));r("4fad"),r("dca8"),r("d3b7");var t=r("3835");function i(e){return new Promise((function(n,r){setTimeout((function(){n()}),e)}))}function o(e){var n=Object.entries(e);if(n.length<=0)return null;for(var r={},i=0,o=n;i<o.length;i++){var a=Object(t["a"])(o[i],2),S=a[0],c=a[1];r[S]=c,r[c]=S}return Object.freeze(r)}function a(){return window.pageXOffset?{left:window.pageXOffset,top:window.pageYOffset}:{left:document.documentElement.scrollLeft+document.body.scrollLeft,top:document.documentElement.scrollTop+document.body.scrollTop}}function S(){return window.innerWidth?{width:window.innerWidth,height:window.innerHeight}:"BackCompat"===document.compatMode?{width:document.body.clientWidth,height:document.body.clientHeight}:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}function c(e){var n=e.offsetParent,r=e.offsetLeft,t=e.offsetTop;while(n)r+=n.offsetLeft+n.clientLeft,t+=n.offsetTop+n.clientTop,n=n.offsetParent;return{left:r,top:t}}function u(e,n){var r;return r=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle,n?r[n]:r}},dacf:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return o}));r("dca8");var t=r("b893"),i=Object(t["e"])({VISIT:0,SEARCH:1,DOWNLOAD:2,CHAININFO:3,SCAN:4}),o=Object.freeze({VISIT:{movement:"visit",pageName:"",location:"页面"},SEARCH:{movement:"click",pageName:"查询主页",location:"查询"},DOWNLOAD:{movement:"click",pageName:"证照详情",location:"下载"},CHAININFO:{movement:"click",pageName:"证照详情",location:"查看上链信息"},SCAN:{movement:"scan",pageName:"证照详情",location:"扫描二维码"}})}});
//# sourceMappingURL=app.7f603494.js.map