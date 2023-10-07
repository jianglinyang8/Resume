var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "蒋保付",
    sex: "男",
    age: "50",
    phone: "19826236728",
    email: "769844286@qq.com",
    address: "现居江苏省宿迁市",
    qq: "769844286",
    log: "jiangbaofu",
    excpect_work: "染色主管",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是蒋保付，高中毕业，从事染布行业很多年，经验丰富<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫蒋保付，性别男，高中毕业，从事染布行业很多年，经验丰富。我期望的工作岗位是染色主管。</p>" +
        "<p>我有着较多的染布经验，从事行业多年，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["管理能力", 90, "red"],
        ["对样", 85, "blue"],
        ["机缸", 80, "#1abc9c"]
        // ["HTML5", 67, "rgba(0,0,0)"],
        // ["CSS3", 60, "yellow"],
        // ["JavaScript", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>从事染布行业多年，经验丰富。</li>" +
        "     <li>多年染色主管经验，管理能力突出</li>" +
        "     <li>熟悉各种布料的生产制作。</li>" +
        "     <li>熟悉对样工作，有着自己独特的见解</li>" +
        "     <li>机缸操作经验丰富。</li>" +
        // "     <li>熟悉SQL语句编写以及调优。</li>" +
        // "     <li>熟悉基本Linux命令操作。</li>" +
        // "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        // "     <li>熟悉缓存、消息等机制。</li>" +
        // "     <li>了解分布式系统的设计与应用。</li>" +
        // "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        // ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        // ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "智能人机对战五子棋", "采用C++编写的智能五子棋人机对战<br>2021/7/23"],
        // ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2023 — 至今", "<br>宿迁三鑫纺织",
            "<p><strong>技术厂长</strong></p>" +
            "<p>在我的的带领下，工厂的运行效率得到大幅提升，技术能力得到身边同事的一致认可。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2017 — 2022", "<br>扬州广顺",
            "<p><strong>染色主管</strong></p>" +
            "<p>主要做超柔，pv绒，玩具绒，家访面料，与同事协同作战，生产力大幅提升，生产规模得到壮大。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2014 — 2017", "<br>浙江鸿钰",
            "<p><strong>对样</strong></p>" +
            "<p>主要做超柔，pv绒，无色差，技术硬。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2011 — 2013", "<br>苏州鑫凯盛",
            "<p><strong>对样</strong></p>" +
            "<p>主要做超柔，pv绒，几乎0出错，得到老板高度认可。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],   

        ["2007 — 2010", "<br>苏州宏宇",
            "<p><strong>机缸领班</strong></p>" +
            "<p>主要做家访面料，天鹅绒，在我带领下，同事间合作愉快，生产力大幅提高。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ], 

        ["2001 — 2006", "<br>苏州耀雄",
            "<p><strong>机缸操作工</strong></p>" +
            "<p>主要做全棉纺织，天鹅绒，抗压能力强。</p>" +
            // "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        // ["1988-09", "高中毕业", "高中毕业生，学习能力强。"],
        // ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        // ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["1988-09", "高中毕业", "高中毕业生，学习能力强。"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        // ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        // ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        // ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        // ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        // ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
