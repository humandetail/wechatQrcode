(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["permit"],{e4c7:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-permit"},[r("page-header"),r("license-info",{attrs:{permit:e.permit,downloadDisabled:e.downloadDisabled},on:{download:e.handleDownload}}),r("pictures",{attrs:{loading:e.drawLoading,pictures:e.pictures,largePictures:e.largePictures}}),e.showChainInfo?r("chainInfo",{attrs:{txnId:e.permit.txnId},on:{close:function(t){return e.toggleChainInfo(!1)}}}):e._e(),e.showWechatDownloadTip?r("wechat-download-tip",{on:{close:e.closeWechatDownloadTip}}):e._e(),r("bottom-tip",{on:{showChainInfo:function(t){return e.toggleChainInfo(!0)}}}),r("footer-tips"),r("common-footer")],1)},n=[],i=(r("99af"),r("7db0"),r("b64b"),r("d3b7"),r("ac1f"),r("1276"),r("3835")),o=(r("96cf"),r("1da1")),c=r("5530"),s=r("2f62"),d=r("080a"),m=r("8baf"),u=(r("b893"),r("e4c6")),p=r("12f1"),l=r("2645"),h=r("88dc"),f=r("f43b"),g=r("50b3"),w=r("83c6"),x=r("740c"),v=r("c55c"),b=r("ec47"),W={name:"Permit",components:{PageHeader:l["a"],CommonFooter:v["a"],LicenseInfo:h["a"],Pictures:f["a"],ChainInfo:g["a"],FooterTips:w["a"],BottomTip:x["a"],WechatDownloadTip:b["a"]},data:function(){var e=window.location,t=e.hostname,r=e.protocol,a=e.port;a=a&&80!==a&&443!==a?":"+a:"";var n="".concat(r,"//").concat(t).concat(a,"/h5/qr/");return{certSeq:this.$route.params.id||"",showChainInfo:!1,pictures:[],largePictures:[],permit:{},responseCode:0,qrBaseUrl:n,drawLoading:!0,pdfDoc:null,downloadDisabled:!0,showWechatDownloadTip:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["browserInfo"])),{},{pictureOptions:function(){var e=this.permit,t=e.oprName,r=e.uniformSocialCreditCode,a=e.permitLegalRepName,n=e.permitResidence,i=e.permitBizPremises,o=e.permitMainFormat,c=e.permitOperatingItem,s=e.permitNumber,d=e.permitSupervisionAgency,m=e.permitSupervisionPerson,u=e.permitIssuingAgency,l=e.permitSigner,h=e.permitIssuedTime,f=e.permitEndDate,g=this.responseCode,w=p["a"].find((function(e){return 0!==e.code&&e.code===g})),x="";try{x=w.watermark()}catch(K){}var v=.295,b=.704,W=.4237,k=.4734,D=.5332,I=.5701,P=.618,C=.6671,R=.7058,O=.2385,S=.222,j=.257,T=.6814,y=.2617,q=.315,B=.3905,F=.4388,N=.4882,z=.5838,L=.6337,A=.4882,$=.525,E=.5628,_=.64,M=.715,U=.259,J=.2407,H={id:"pic",qrcode:{url:"".concat(this.qrBaseUrl,"c?seq=").concat(this.certSeq),x:.543,y:.76,width:100,margin:1,scale:4},watermark:x?{url:x,width:200,height:135600/909}:null,fields:[{name:"oprName",value:t,desc:"经营者名称，公司名称",coordinate:[v,W],maxWidth:O},{name:"uniformSocialCreditCode",value:r,desc:"统一社会信用代码",coordinate:[v,k],maxWidth:O},{name:"permitLegalRepName",value:a,desc:"法定代表人",coordinate:[v,D],maxWidth:O},{name:"permitResidence",value:n,desc:"住所",coordinate:[v,I],maxWidth:O},{name:"permitBizPremises",value:i,desc:"经营场所",coordinate:[v,P],maxWidth:O},{name:"permitMainFormat",value:o,desc:"经营主体业态",coordinate:[v,C],maxWidth:O},{name:"permitOperatingItem",value:c,desc:"经营项目",coordinate:[v,R],maxWidth:O},{name:"permitNumber",value:s,desc:"许可证编号",coordinate:[b,W],maxWidth:S},{name:"permitSupervisionAgency",value:d,desc:"\b日常监督管理机构",coordinate:[b,k],maxWidth:S},{name:"permitSupervisionPerson",value:m,desc:"日常监督管理人员",coordinate:[b,D],maxWidth:S},{name:"permitIssuingAgency",value:u,desc:"发证机关",coordinate:[b,P],maxWidth:S},{name:"permitSigner",value:l,desc:"签发人",coordinate:[b,R],maxWidth:S},{name:"permitIssuedTime",value:this.formatDate(h),desc:"颁发时间",coordinate:[[.6724,.7635],[.75,.7635],[.8,.7635]]},{name:"permitEndDate",value:this.formatDate(f),desc:"有效结束时间",coordinate:[[.223,.8784],[.3,.8784],[.3475,.8784]]}]},G={id:"picCopy",qrcode:{url:"".concat(this.qrBaseUrl,"c?seq=").concat(this.certSeq),x:.543,y:.76,width:100,margin:1,scale:4},watermark:x?{url:x,width:200,height:135600/909}:null,fields:[{name:"oprName",value:t,desc:"经营者名称，公司名称",coordinate:[j,y],maxWidth:U},{name:"uniformSocialCreditCode",value:r,desc:"统一社会信用代码",coordinate:[j,q],maxWidth:U},{name:"permitLegalRepName",value:a,desc:"法定代表人",coordinate:[j,B],maxWidth:U},{name:"permitResidence",value:n,desc:"住所",coordinate:[j,F],maxWidth:U},{name:"permitBizPremises",value:i,desc:"经营场所",coordinate:[j,N],maxWidth:U},{name:"permitMainFormat",value:o,desc:"经营主体业态",coordinate:[j,z],maxWidth:U},{name:"permitOperatingItem",value:c,desc:"经营项目",coordinate:[j,L],maxWidth:U},{name:"permitNumber",value:s,desc:"许可证编号",coordinate:[T,A],maxWidth:J},{name:"permitSupervisionAgency",value:d,desc:"\b日常监督管理机构",coordinate:[T,$],maxWidth:J},{name:"permitSupervisionPerson",value:m,desc:"日常监督管理人员",coordinate:[T,E],maxWidth:J},{name:"permitIssuingAgency",value:u,desc:"发证机关",coordinate:[T,_],maxWidth:J},{name:"permitSigner",value:l,desc:"签发人",coordinate:[T,M],maxWidth:J},{name:"permitIssuedTime",value:this.formatDate(h),desc:"颁发时间",coordinate:[[.6714,.7708],[.737,.7708],[.78,.7708]]},{name:"permitEndDate",value:this.formatDate(f),desc:"有效结束时间",coordinate:[[.193,.8846],[.26,.8846],[.3,.8846]]}]};return[H,G]}}),methods:{getPermit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.certSeq,!(e.permit&&Object.keys(e.permit).length>0)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Object(d["c"])(r);case 5:if(a=t.sent,n=a.code,a.message,i=a.data,o=p["a"].find((function(e){return e.code===n})),!o){t.next=18;break}if(e.permit=i,e.responseCode=n,0===n){t.next=16;break}return t.next=16,e.$confirm(o.message,o.title,{confirmButtonText:"重新查询",cancelButtonText:"继续查看",showClose:!1,center:!0,closeOnClickModal:!1}).then((function(){window.location.href=window.location.origin+e.$router.options.base})).catch((function(e){}));case 16:t.next=19;break;case 18:return t.abrupt("return",Promise.reject("No Data"));case 19:case"end":return t.stop()}}),t)})))()},createPictures:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,c,s,d,m,p,l,h,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=!(e.length>0&&void 0!==e[0])||e[0],n=t.pictureOptions,i=n.length,o=new u["a"]({pageSize:a?[1123,794]:[3508,2481],fontSize:18,fontColor:"#231F20",fontFamily:"permit-font,宋体,宋体-简,华文宋体",fontMargin:18,specialFields:[{name:"permitResidence",maxRow:2},{name:"permitBizPremises",maxRow:2},{name:"permitOperatingItem",maxRow:4}]}),p=a?["/permit/test1080.jpg","/permit/test_copy1080.jpg"]:["/permit/test.jpg","/permit/test_copy.jpg"],l=0;case 4:if(!(l<i)){r.next=16;break}return h=n[l],s=h.fields,d=h.watermark,m=h.qrcode,c=p[l],1===l&&o.setOptions({fontSize:16,specialFields:[{name:"permitResidence",maxRow:2},{name:"permitBizPremises",maxRow:4},{name:"permitOperatingItem",maxRow:4}]}),r.next=13,o.drawPicture({bgImgUrl:c,fields:s,watermark:d,qrcode:m},!0);case 13:l++,r.next=4;break;case 16:if(!a){r.next=20;break}f=o.pictures,r.next=23;break;case 20:return r.next=22,o.getPictures(3508,.9);case 22:f=r.sent;case 23:return t.drawLoading=!1,t.pictures=f,t.largePictures=f,r.abrupt("return",f);case 27:case"end":return r.stop()}}),r)})))()},toggleChainInfo:function(e){this.showChainInfo=e},createPDF:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,c,s,d,u,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:{},n=a.width,i=void 0===n?841.89:n,o=a.height,c=void 0===o?595.28:o,!t.pdfDoc){r.next=3;break}return r.abrupt("return",t.pdfDoc);case 3:return s=new m["a"]("landscape","pt","a4"),r.next=6,t.createPictures(!1);case 6:d=r.sent,u=d.length,p=0;case 9:if(!(p<u)){r.next=18;break}if(!(p>0)){r.next=13;break}return r.next=13,s.addPage();case 13:return r.next=15,s.addImage(d[p],"JPEG",0,0,i,c);case 15:p++,r.next=9;break;case 18:return t.pdfDoc=s,r.abrupt("return",s);case 20:case"end":return r.stop()}}),r)})))()},handleDownload:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:"",n=t.browserInfo.browser,i=void 0===n?"":n,"WECHAT"!==i.toUpperCase()){r.next=5;break}return t.showWechatDownloadTip=!0,r.abrupt("return");case 5:return o=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),r.next=8,t.createPDF();case 8:c=r.sent,o.close(),c.save(a?a+".pdf":t.permit.permitType+"-"+t.permit.oprName+".pdf");case 11:case"end":return r.stop()}}),r)})))()},closeWechatDownloadTip:function(){this.showWechatDownloadTip=!1},formatDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split(" "),r=Object(i["a"])(t,1),a=r[0],n=void 0===a?"":a;return n.split("-")}},created:function(){var e=this;this.getPermit().then(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.createPictures();case 2:return t.next=4,e.$nextTick();case 4:e.downloadDisabled=!1;case 5:case"end":return t.stop()}}),t)})))).catch((function(t){console.log(t),e.$router.push("/404")}))}},k=W,D=r("2877"),I=Object(D["a"])(k,a,n,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=permit.488702f1.js.map