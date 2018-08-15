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
  "blog-test-blog.json": require("gatsby-module-loader?name=path---blog-test-blog!/home/lachlan/Projects/tomcotter/.cache/json/blog-test-blog.json"),
  "blog-i-love-cats.json": require("gatsby-module-loader?name=path---blog-i-love-cats!/home/lachlan/Projects/tomcotter/.cache/json/blog-i-love-cats.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/lachlan/Projects/tomcotter/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/lachlan/Projects/tomcotter/.cache/json/index.json"),
  "new-page.json": require("gatsby-module-loader?name=path---new-page!/home/lachlan/Projects/tomcotter/.cache/json/new-page.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/lachlan/Projects/tomcotter/.cache/layouts/index.js")
}