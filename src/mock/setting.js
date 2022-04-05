import Mock from "mockjs";

import logo from '@/assets/logo.jpg';
import qqQrCode from '@/assets/qqQrCode.jpg';
import weixinQrCode from '@/assets/weixinQrCode.jpg';

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: logo,
    siteTitle: "个人博客",
    github: "https://github.com/wuyao-fee",
    qq: "3263023350",
    qqQrCode: qqQrCode,
    weixin: "yskdfjks",
    weixinQrCode: weixinQrCode,
    mail: "sdfjwie@gmail.com",
    icp: "备案号",
    githubName: "wuyao-fee",
    favicon: logo,
  },
});
