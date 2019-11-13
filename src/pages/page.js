// @title: <<gatsby-004-source-filesystem>> program written in Gatsby-JS.
// @desc: Creates asimple web app fetching system files with graphql.
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const PagePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "page" } }) {
        edges {
          node {
            name
            extension
            dir
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Source File System</h1>
      <h2>by Mustapha Benmbarek</h2>
      <p>This page lists down all the files located in the folder src/pages.</p>

      <p>
        <table>
          <tr>
            <td width="15%">File name</td>
            <td>File Path</td>
          </tr>
          {data.allFile.edges.map(edge => {
            return (
              <tr>
                <td className="file">
                  {edge.node.name}.{edge.node.extension}
                </td>
                <td className="path">{edge.node.dir}</td>
              </tr>
            );
          })}
        </table>
      </p>
    </div>
  );
};

export default PagePage;
