const users = [
  {
    caption: "zhiking",
    image: "/img/undraw_open_source.svg",
    infoLink: "https://wee.codeffe.com",
    pinned: true
  }
];

const siteConfig = {
  title: "WEE", // Title for your website.
  tagline: "A UI Toolkit for Web",
  url: "https://wee.codeffe.com", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "WEE",
  defaultVersionShown: '1.0.0',
  organizationName: "WEE",
  docsSideNavCollapsible: false,
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "index", label: "首页" },
    { doc: "quick-start", label: "起步" },
    { doc: "global-css", label: "全局样式" },
    { doc: "components/about", label: "组件库" },
    // {page: 'help', label: '帮助'},
    // { blog: true, label: "博客" },
    { search: true },
    { languages: false }
  ],

  // If you have users set above, you add it here:
  users: [
    // {
    //   pinned: true,
    //   image: 'img/undraw_12.svg',
    //   infoLink: '',
    //   caption: 'caption',
    // }
  ],

  /* path to images for header/footer */
  headerIcon: "img/favicon.ico",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#604CFF",
    secondaryColor: "#363545"
  },

  /* Custom fonts for website */

  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} WEE·ZHIKING`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  stylesheets: ["/css/wee/style.css"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,
  usePrism: ['jsx'],
  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  }
};

module.exports = siteConfig;
