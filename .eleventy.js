module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter('objectKeys', function (obj) {
    return Object.keys(obj)
  })
  
  eleventyConfig.addPassthroughCopy('assets')
  return {}
}