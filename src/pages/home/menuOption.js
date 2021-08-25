  export const topCardOption = [
    {
      name: 'ArticleHelper',
      title: '今日约访',
      path: '/ArticleHelper',
      imgUrl: require('@/assets/img/home-icon-wait.png'),
    },
    {
      name: 'activity',
      title: '客户维护',
      path: '/activity',
      imgUrl: require('@/assets/img/home-icon-customer.png'),
    },
  ]

  export const menuOption = [
  {
    name: 'ArticleHelper',
    title: '获客文章助手',
    path: '/ArticleHelper',
    imgUrl: require('@/assets/img/article-helper.png'),
  },
  {
    name: 'activity',
    title: '营销活动',
    path: '/activity',
    imgUrl: require('@/assets/img/marketing.png'),
  },
  {
    name: 'Product',
    title: '产品管理',
    path: '/product',
    imgUrl: require('@/assets/img/product.png'),
  },
  {
    name: 'Contact',
    title: '约访计划',
    path: '/appointment',
    imgUrl: require('@/assets/img/contact.png'),
  },
  {
    name: 'Interview',
    title: '面访打卡',
    path: '/interview',
    imgUrl: require('@/assets/img/interview.png'),
  },
  {
    name: 'Item',
    title: '客户认证',
    path: '/client/item',
    imgUrl: require('@/assets/img/auth.png'),
  },
  {
    name: 'Phone',
    title: '电话优选',
    path: '/phone',
    imgUrl: require('@/assets/img/phone.png'),
  },
  {
    name: 'GroupWork',
    title: '群任务',
    path: '/client/work',
    imgUrl: require('@/assets/img/sixteengrid.png'),
  },
  {
    name: 'SixteenGrid',
    title: '十六宫格',
    path: '/sixteenGrid',
    imgUrl: require('@/assets/img/sixteengrid.png'),
  },
  {
    name: 'Today',
    title: '今日必做',
    path: '/mission/today',
    imgUrl: require('@/assets/img/article.png'),
  },
  {
    name: 'Sales',
    title: '产品销售',
    path: '/mission/sales',
    imgUrl: require('@/assets/img/marketing.png'),
  },
  {
    name: 'Wechat',
    title: '朋友圈',
    path: '/wechat/index',
    imgUrl: require('@/assets/img/sms.png'),
  },
];

export const homeTabBar = [
  {
    title: '首页',
    to: {
      name: 'Home',
    },
    selected:true,
    icon: require('@/assets/img/tabbar-home.png'),
    selectedIcon: require('@/assets/img/tabbar-home-selected.png'),
  },
  {
    title: '客户管理',
    to: {
      name: 'ClientManage',
    },
    icon: require('@/assets/img/tabbar-customer.png'),
    selectedIcon: require('@/assets/img/tabbar-customer-selected.png'),
  },
  {
    title: '数据看板',
    to: {
      name: 'Data',
    },
    icon: require('@/assets/img/tabbar-data.png'),
    selectedIcon: require('@/assets/img/tabbar-data-selected.png'),

  },
];
