export const SITE = {
  website: "https://arzlabserver.my.id/", // replace this with your deployed domain
  author: "Arizmuajianisan",
  profile: "https://arzlabserver.my.id/",
  desc: "Tech Blog | Think, Code, and Create",
  title: "Arizmuajianisan",
  ogImage: "arizmuajianisan-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/arizmuajianisan/blog-of-arizmuajianisan/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
