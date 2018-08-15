// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/lachlan/Projects/tomcotter/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/lachlan/Projects/tomcotter/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/lachlan/Projects/tomcotter/src/pages/index.js"),
  "component---src-pages-new-page-js": require("gatsby-module-loader?name=component---src-pages-new-page-js!/home/lachlan/Projects/tomcotter/src/pages/new-page.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/lachlan/Projects/tomcotter/.cache/json/layout-index.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/home/lachlan/Projects/tomcotter/.cache/json/hi-folks.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/home/lachlan/Projects/tomcotter/.cache/json/hello-world.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/home/lachlan/Projects/tomcotter/.cache/json/my-second-post.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/lachlan/Projects/tomcotter/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/lachlan/Projects/tomcotter/.cache/json/index.json"),
  "new-page.json": require("gatsby-module-loader?name=path---new-page!/home/lachlan/Projects/tomcotter/.cache/json/new-page.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/lachlan/Projects/tomcotter/.cache/layouts/index.js")
}