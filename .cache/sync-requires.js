// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/lachlan/Projects/tomcotter/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/lachlan/Projects/tomcotter/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/lachlan/Projects/tomcotter/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/lachlan/Projects/tomcotter/src/pages/index.js")),
  "component---src-pages-new-page-js": preferDefault(require("/home/lachlan/Projects/tomcotter/src/pages/new-page.js"))
}

exports.json = {
  "layout-index.json": require("/home/lachlan/Projects/tomcotter/.cache/json/layout-index.json"),
  "blog-test-blog.json": require("/home/lachlan/Projects/tomcotter/.cache/json/blog-test-blog.json"),
  "blog-i-love-cats.json": require("/home/lachlan/Projects/tomcotter/.cache/json/blog-i-love-cats.json"),
  "dev-404-page.json": require("/home/lachlan/Projects/tomcotter/.cache/json/dev-404-page.json"),
  "index.json": require("/home/lachlan/Projects/tomcotter/.cache/json/index.json"),
  "new-page.json": require("/home/lachlan/Projects/tomcotter/.cache/json/new-page.json")
}