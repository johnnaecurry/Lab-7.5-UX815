
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
<<<<<<< HEAD
  eleventyConfig.addPassthroughCopy("js");
=======
  eleventyConfig.addPassthroughCopy("**/*");
<<<<<<< HEAD
>>>>>>> 7ef96b1 (5th commit)
=======
  eleventyConfig.addPassthroughCopy("js");
>>>>>>> d0c61a1 (final commit)
};