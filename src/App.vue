
<template>
  <div class="page">
    <h1>test</h1>
    <!-- <button @click="scanQRCode">扫描二维码</button> -->
  </div>
</template>

<script>
// const wx = require('weixin-js-sdk');

// import axios from 'axios';

// export default {
//   name: 'App',
//   data() {
//     return {
//       loadingShow: false,
//     }
//   },
//   methods: {
//     async scanQRCode () {
//       let res = await axios.get('http://wechat-test.humandetail.com/getSignature');

//       res = res.data;

//       if (res === 'error') {
//         alert('接口调用失败。');
//         return false;
//       }

//       const {
//         signature,
//         noncestr,
//         appid,
//         timestamp
//       } = res.data;

//       wx.config({
//         debug: true,
//         appId: appid,
//         timestamp,
//         noncestr,
//         signature,
//         jsApiList: ['scanQRCode']
//       });

//       wx.ready(() => {
//         wx.scanQRCode({
//           needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//           scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//           success: function (res) {
//             var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
//             alert(result);
//           }
//         });
//       });

//       wx.error((err) => {
//         console.log(err)
//       })
//     }
//   },
//   mounted () {
//   }
// }
</script>