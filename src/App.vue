<template>
  <div class="page">
    <h1>test</h1>
    <button @click="scanQRCode">扫描二维码</button>
    <div class="result">
      {{ result }}
    </div>
    <br />
    <a :href="redirectUrl" v-if="redirectUrl" target="_blank">跳转回结果页面{{ redirectUrl }}</a>
  </div>
</template>

<script>
const wx = require('weixin-js-sdk');
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      loadingShow: false,
      result: '',
      signData: null,
      redirectUrl: ''
    }
  },
  methods: {
    async scanQRCode () {
      // const url = encodeURIComponent(location.href.split('#')[0]);
      const _this = this,
            url = location.href.split('#')[0];

      let signData = this.signData;

      if (!signData || !signData.signature) {
        // let res = await axios.get('/api/v1/wx/jsConfig?url=' + url);
        let res = await axios.post('http://wechat-test.humandetail.com/getSignature', {
          url
        });
        res = res.data;
        // alert(JSON.stringify(res));
        // if (res.code !== 0) {
        //   alert('接口调用失败。');
        //   return false;
        // }

        signData = res.data;
      }

      const {
        signature,
        noncestr,
        appid,
        timestamp
      } = signData;
      const config = {
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appid, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名
        jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
      }
      // alert(JSON.stringify(config));
      wx.config(config);
      wx.ready(() => {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: _this.onScanSuccess
        });
      });
      wx.error((err) => {
        console.log(err)
      })
    },

    onScanSuccess (res) {
      let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      this.result = result;

      const redirectUrl = `${result}${result.indexOf('?') > -1 ? '?' : '&'}from=${window.location.href}&action=publicScan&r=${Math.random()}`;

      this.redirectUrl = redirectUrl;

      // setTimeout(() => {
      //   this.redirect(redirectUrl);
      // }, 2000)
      // alert(result);
    },

    redirect (url) {
      const oA = document.createElement('a');
      oA.href = url;

      document.body.appendChild(oA);
      oA.click();
      oA.remove();
    }
  },
  mounted () {
  }
}
</script>