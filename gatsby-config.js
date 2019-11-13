// @title: <<gatsby-004-source-filesystem>> program written in Gatsby-JS.
// @desc: Creates asimple web app fetching system files with graphql.
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0

module.exports = {
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    }
  ]
};
