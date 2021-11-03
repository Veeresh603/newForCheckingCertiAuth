const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
       
 
        landing: allStrapiBootcampPages {
          nodes {
            strapiId
            slug
          }
        }
        summer: allStrapiSummerSchools {
          nodes {
            slug
          }
        }
        comingSoon: allStrapiComingSoonPages {
          nodes {
            coming_soon_slug
          }
        }
        bootcamp: allStrapiBootcampLandingPages {
          nodes {
            slug
          }
        }
        blogs: allStrapiBlogs {
          nodes {
            blog_slug
          }
        }
      }
    `
  )
  // result.data.courses.nodes.forEach((course) => {
  //   createPage({
  //     path: `/training/${course.slug}`,
  //     component: path.resolve(`src/templates/course.js`),
  //     context: {
  //       slug: course.slug,
  //     },
  //   })
  // })
  result.data.landing.nodes.forEach((demo) => {
    createPage({
      path: `${demo.slug}`,
      component: path.resolve(`src/templates/landingPages.js`),
      context: {
        slug: demo.slug,
      },
    })
  })

  result.data.summer.nodes.forEach((s) => {
    createPage({
      path: `${s.slug}`,
      component: path.resolve(`src/templates/summer.js`),
      context: {
        slug: s.slug,
      },
    })
  })
  result.data.comingSoon.nodes.forEach((a) => {
    createPage({
      path: `${a.coming_soon_slug}`,
      component: path.resolve(`src/templates/comingSoon.js`),
      context: {
        coming_soon_slug: a.coming_soon_slug,
      },
    })
  })
  result.data.bootcamp.nodes.forEach((b) => {
    createPage({
      path: `${b.slug}`,
      component: path.resolve(`src/templates/bootcampPages.js`),
      context: {
        slug: b.slug,
      },
    })
  })
  result.data.blogs.nodes.forEach((b) => {
    createPage({
      path: `/blogs/${b.blog_slug}`,
      component: path.resolve(`src/templates/singleBlogPage.js`),
      context: {
        blog_slug: b.blog_slug,
      },
    })
  })
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /wavesurfer.js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}