import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy: {
    '/api': {
      changeOrigin: true,
      target: 'http://wx.szjintaifu.com',
    },
  },
  antd: {
    dark: false,
  },
  theme: {
    "brand-primary": "#ea3d4c",
    "fill-body": "#ffffff"
  },
});
