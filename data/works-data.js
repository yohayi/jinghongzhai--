// 作品数据 - 包含所有11个作品，图片已全部更新为Unsplash稳定链接
const worksData = [
    {
        id: 1,
        title: "墨染江南系列旗袍",
        category: "clothing",
        description: "灵感来源于江南水墨画，采用传统真丝面料与手工刺绣工艺，结合现代剪裁，展现东方女性优雅气质。",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        link: "case-1.html"
    },
    {
        id: 2,
        title: "禅意手作茶席套装",
        category: "handmade",
        description: "采用天然亚麻与手工植物染技艺，每一件茶具配件都是独一无二的艺术品，体现宁静致远的禅意美学。",
        image: "https://images.unsplash.com/photo-1594736797933-dafaa7324b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        link: "case-2.html"
    },
    {
        id: 3,
        title: "草木染渐变围巾",
        category: "textile",
        description: "使用传统草木染技术，从植物中提取天然色素，创造出柔和渐变色彩，每一件作品都承载着自然的气息。",
        image: "https://images.unsplash.com/photo-1586363104864-071cddc086ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        link: "case-3.html"
    },
    {
        id: 4,
        title: "竹编工艺手提包",
        category: "accessory",
        description: "结合传统竹编工艺与现代皮革配件，打造既环保又时尚的日常配饰，展现自然材质之美。",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
        link: "case-4.html"
    },
    {
        id: 5,
        title: "云锦改良式礼服",
        category: "clothing",
        description: "将传统云锦工艺应用于现代礼服设计，保留云锦华丽质感的同时，融入西方剪裁技巧，打造中西合璧的高级定制。",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
        link: "case-5.html"
    },
    {
        id: 6,
        title: "蓝染手工笔记本",
        category: "handmade",
        description: "采用古法蓝染工艺处理封面，内页为手工宣纸，适合书写与绘画，是文艺爱好者的理想选择。",
        image: "https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        link: "case-6.html"
    },
    {
        id: 7,
        title: "谭宫-望月系列",
        category: "clothing",
        description: "融合谭派戏曲元素与现代服装设计，以月亮为灵感主题的高级定制系列。",
        image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        link: "case-7.html"
    },
    {
        id: 8,
        title: "R1-101 解构主义实验",
        category: "clothing",
        description: "解构主义在服装设计中的实验性尝试，突破传统剪裁与结构限制。",
        image: "https://images.unsplash.com/photo-1558769132-cb1c458e4222?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
        link: "case-8.html"
    },
    {
        id: 9,
        title: "R-1-102 面料编织研究",
        category: "textile",
        description: "探索不同材质编织技巧，创造出独特纹理与视觉效果的面料实验。",
        image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        link: "case-9.html"
    },
    {
        id: 10,
        title: "R-1-103 可持续设计",
        category: "sustainable",
        description: "使用回收材料和环保工艺，探索时尚产业的可持续发展可能性。",
        image: "https://images.unsplash.com/photo-1542327777-6ce406ea3ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        link: "case-10.html"
    },
    {
        id: 11,
        title: "R-1-104 数字印花探索",
        category: "textile",
        description: "结合数字技术与传统印花工艺，创造出复杂而精细的图案设计。",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        link: "case-11.html"
    }
];

// 8个相关网站的数据
const externalSites = [
    {
        name: "信技化生-技术交流网站",
        url: "https://yohayi.github.io/-history/",
        description: "专注于信息技术与跨学科技术交流的平台。",
        icon: "fas fa-laptop-code"
    },
    {
        name: "“惊鸿斋”官方网站",
        url: "https://yohayi.github.io/jinghongzhai--/",
        description: "惊鸿斋品牌官网，展示最新设计作品与品牌故事。",
        icon: "fas fa-home"
    },
    {
        name: "杭州市教育总结",
        url: "https://yohayi.github.io/my-personal-edu-website/",
        description: "关于杭州市教育发展的个人总结与经验分享。",
        icon: "fas fa-graduation-cap"
    },
    {
        name: "教育数据与交流网站",
        url: "https://yohayi.github.io/2026--/index.html",
        description: "教育数据分析、资源分享与行业交流平台。",
        icon: "fas fa-chart-line"
    },
    {
        name: "几何弦理论课后交流网站",
        url: "https://yohayi.github.io/geometry-string-map/",
        description: "几何弦理论课程的学习资料与课后讨论平台。",
        icon: "fas fa-shapes"
    },
    {
        name: "BDCG游戏技术与美术素材网站",
        url: "https://yohayi.github.io/BDCG---/",
        description: "分享游戏开发技术、美术素材与设计资源的站点。",
        icon: "fas fa-gamepad"
    },
    {
        name: "游海洋个人网站",
        url: "https://yohayi.github.io/yohayi-/",
        description: "个人作品集、项目展示与经验分享的个人主页。",
        icon: "fas fa-user"
    },
    {
        name: "流式AI监控",
        url: "https://yohayi.github.io/-AI-/",
        description: "关于流式AI监控技术介绍与应用的网站。",
        icon: "fas fa-eye"
    }
];

// 类别映射
const categoryMap = {
    "clothing": "服装设计",
    "handmade": "手作设计",
    "textile": "面料艺术",
    "accessory": "配饰设计",
    "sustainable": "可持续设计"
};
