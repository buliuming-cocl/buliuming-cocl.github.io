// 站点数据 —— 以 GitHub 最新信息为准
// 项目数据来自 https://github.com/buliuming-cocl

export const site = {
  name: '不刘名科创',
  slogan: '为全能而生',
  tagline: '技术与代码的搏击',
  description: '我们是一群天天敲代码的程序员，专注开源与全栈开发。',
  email: 'buliuming1011@163.com',
  github: 'https://github.com/buliuming-cocl',
}

// 发展史（时间线，从旧站搬来）
export const history = [
  {
    date: '现在',
    text: '不刘名科创工作室持续发展，未来将开发更多开源项目',
  },
  {
    date: '2025.12.15',
    text: '不刘名科技改名为不刘名科创，将重新定位工作室，后以 GitHub 开源项目为主',
  },
  {
    date: '2024',
    text: '不刘名编程改名为不刘名科技，开启长期休团状态',
  },
  {
    date: '2023.5.9',
    text: '不刘名编程主运营确立为编程猫',
  },
  {
    date: '2022.4.23',
    text: '不刘名编程工作室在编程猫确立，主要开发编程猫作品',
  },
  {
    date: '2022.2.22',
    text: 'GT工作室改名为不刘名工作室',
  },
  {
    date: '2020',
    text: 'GT工作室成立，以 Scratch 作品为主',
  },
]

// 团队（从旧站搬来）
export const team = [
  {
    name: 'Keyoweb',
    role: '创始人 / 全栈开发者',
    desc: '热爱开源，全能开发者',
    avatar: 'K',
  },
  {
    name: 'sliperman',
    role: '副室长 / C++&Qt 工程师',
    desc: '专门开发 C++ 和 Qt 项目',
    avatar: 'S',
  },
  {
    name: '期待你的加入',
    role: '开放职位',
    desc: '如果你对技术充满热情，欢迎加入我们',
    avatar: '?',
  },
]

// 项目 —— 来自 buliuming-cocl 组织（GitHub 最新信息）
export const projects = [
  {
    name: 'very-easy-wm',
    desc: '一个平铺 WM 的可视化设置面板',
    lang: 'C++',
    url: 'https://github.com/buliuming-cocl/very-easy-wm',
  },
  {
    name: 'fucker_io',
    desc: '轻量级 C++ 输入辅助库',
    lang: 'C++',
    url: 'https://github.com/buliuming-cocl/fucker_io',
  },
]

// 附属团队
export const affiliates = [
  {
    name: 'OpenWe Labs',
    tagline: '开源围棋项目',
    desc: '现代、简洁的开源桌面围棋应用，本地规则引擎 + AI 集成，支持人机对战与多语言。',
    github: 'https://github.com/openwelabs',
    site: '',
    projects: [
      { name: 'weqi', desc: 'AI 围棋（C++）', url: 'https://github.com/openwelabs/weqi' },
      { name: 'weqi-web', desc: '围棋 Web 版', url: 'https://github.com/openwelabs/weqi-web' },
      { name: 'weqi-android', desc: '围棋 Android 版', url: 'https://github.com/openwelabs/weqi-android' },
    ],
  },
  {
    name: '豆芽人联盟 Yay Alliance',
    tagline: '漫画向 ACG IP',
    desc: '以漫画为核心的二次元 IP 与活力团队，Wiki 记录联盟世界观与设定。',
    github: 'https://github.com/kenaut/yaywiki',
    site: 'https://kenaut.github.io/yaywiki/',
    projects: [
      { name: 'yaywiki', desc: '豆芽人联盟 Wiki', url: 'https://github.com/kenaut/yaywiki' },
    ],
  },
]
