import React, { Component } from "react";
import NewBlogpage from "./NewBlogPage";
import { Helmet } from "react-helmet";

function NewBlog() {
  return (
    <>
      <div id="newblog" className="page-container ">
        <Helmet>
          <title>New Blog</title>
          <meta
            name="description"
            content="We address different topics in Ayurveda that may be of interest for those who are curious and interested in exploring Ayurvedic principles, philosophy and treatment practice"
          />
        </Helmet>
        <div className="content-wrap">
          
          <NewBlogpage />
        </div>
      </div>
    </>
  );
}

export default NewBlog;
