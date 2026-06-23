
const imgFallback = 'assets/product-fallback.svg';
const bannerFallback = 'assets/banner-fallback.svg';
const banners = [
  {title:'夏日焕新节', sub:'精选好物低至 5 折，移动端商城首页展示', img:'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1000&q=80'},
  {title:'潮流穿搭季', sub:'服饰鞋包新品上架，学生党精选', img:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80'},
  {title:'数码生活馆', sub:'耳机手表小家电，爆款限时优惠', img:'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1000&q=80'}
];
const products = [
  {id:1, name:'夏季宽松纯棉短袖 T 恤', cat:'服饰鞋包', price:59.9, old:99, sales:2381, tag:'新人价', desc:'亲肤棉质面料，基础百搭版型，适合日常通勤和校园穿搭。', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'},
  {id:2, name:'轻薄防晒休闲外套', cat:'服饰鞋包', price:129, old:199, sales:1190, tag:'热卖', desc:'轻薄透气，简约版型，户外出行和日常防晒都适合。', img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80'},
  {id:3, name:'缓震透气运动跑鞋', cat:'服饰鞋包', price:239, old:399, sales:4216, tag:'秒杀', desc:'轻量鞋身与柔软鞋底，适合跑步、健身和日常运动。', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'},
  {id:4, name:'通勤大容量单肩包', cat:'服饰鞋包', price:159, old:229, sales:876, tag:'精选', desc:'简洁外观，大容量分区，满足上课、通勤和短途出行。', img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'},
  {id:5, name:'无线蓝牙头戴式耳机', cat:'数码电器', price:188, old:299, sales:5322, tag:'爆款', desc:'沉浸式音效，长续航设计，适合学习、运动和通勤。', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'},
  {id:6, name:'智能运动手表', cat:'数码电器', price:299, old:499, sales:2145, tag:'新品', desc:'支持运动记录、消息提醒和健康监测，外观简洁时尚。', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'},
  {id:7, name:'便携保温水杯', cat:'家居生活', price:49.9, old:89, sales:3508, tag:'好评', desc:'简约杯身，便携防漏，适合宿舍、教室和办公室使用。', img:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'},
  {id:8, name:'北欧风护眼台灯', cat:'家居生活', price:99, old:169, sales:1462, tag:'实用', desc:'柔和灯光，多角度调节，适合学习桌、床头和书房。', img:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80'},
  {id:9, name:'清爽补水护肤套装', cat:'美妆个护', price:139, old:219, sales:2630, tag:'套装', desc:'基础护肤组合，适合日常清洁、保湿和简单护理。', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'},
  {id:10, name:'办公室休闲零食礼包', cat:'食品生鲜', price:39.9, old:59, sales:7102, tag:'满减', desc:'多口味组合包装，适合宿舍、办公室和聚会分享。', img:'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80'},
  {id:11, name:'简约文具笔记本套装', cat:'图书文具', price:29.9, old:49, sales:1902, tag:'学生', desc:'学习记录、课程笔记、日程计划都适用。', img:'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'},
  {id:12, name:'家居收纳置物架', cat:'家居生活', price:79, old:129, sales:1088, tag:'收纳', desc:'提升桌面和卧室空间利用率，安装简单，外观清爽。', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'}
];
const categories = [
  {
    name:'服饰鞋包', icon:'👟', img:'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'短袖T恤', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80'},
      {name:'休闲外套', img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=300&q=80'},
      {name:'运动跑鞋', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80'},
      {name:'单肩包', img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80'},
      {name:'双肩包', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80'},
      {name:'帽子配饰', img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=300&q=80'}
    ]
  },
  {
    name:'数码电器', icon:'🎧', img:'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'蓝牙耳机', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80'},
      {name:'智能手表', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80'},
      {name:'手机配件', img:'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=300&q=80'},
      {name:'电脑周边', img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80'},
      {name:'小家电', img:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&q=80'},
      {name:'充电设备', img:'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&q=80'}
    ]
  },
  {
    name:'家居生活', icon:'🛏️', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'收纳整理', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80'},
      {name:'水杯餐具', img:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80'},
      {name:'护眼台灯', img:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=300&q=80'},
      {name:'床上用品', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80'},
      {name:'清洁用品', img:'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80'},
      {name:'生活日用', img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80'}
    ]
  },
  {
    name:'美妆个护', icon:'🧴', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'护肤套装', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80'},
      {name:'洗护清洁', img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80'},
      {name:'口红彩妆', img:'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80'},
      {name:'面膜护理', img:'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=300&q=80'},
      {name:'香氛香水', img:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80'},
      {name:'个人护理', img:'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=300&q=80'}
    ]
  },
  {
    name:'食品生鲜', icon:'🍪', img:'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'休闲零食', img:'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=300&q=80'},
      {name:'饮料冲调', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80'},
      {name:'水果生鲜', img:'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80'},
      {name:'粮油速食', img:'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80'},
      {name:'坚果礼包', img:'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=300&q=80'},
      {name:'地方特产', img:'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=300&q=80'}
    ]
  },
  {
    name:'图书文具', icon:'📚', img:'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    items:[
      {name:'笔记本', img:'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?auto=format&fit=crop&w=300&q=80'},
      {name:'学习文具', img:'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=300&q=80'},
      {name:'考试资料', img:'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80'},
      {name:'办公用品', img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&q=80'},
      {name:'书包笔袋', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80'},
      {name:'创意礼品', img:'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=300&q=80'}
    ]
  }
];
function money(n){return '¥' + Number(n).toFixed(n % 1 ? 1 : 0)}
