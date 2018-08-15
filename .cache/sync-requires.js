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
  "hi-folks.json": require("/home/lachlan/Projects/tomcotter/.cache/json/hi-folks.json"),
  "hello-world.json": require("/home/lachlan/Projects/tomcotter/.cache/json/hello-world.json"),
  "my-second-post.json": require("/home/lachlan/Projects/tomcotter/.cache/json/my-second-post.json"),
  "dev-404-page.json": require("/home/lachlan/Projects/tomcotter/.cache/json/dev-404-page.json"),
  "index.json": require("/home/lachlan/Projects/tomcotter/.cache/json/index.json"),
  "new-page.json": require("/home/lachlan/Projects/tomcotter/.cache/json/new-page.json")
}