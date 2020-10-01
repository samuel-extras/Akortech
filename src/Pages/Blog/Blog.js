import React, { Fragment } from "react";
import BlogHeader from "./Component/BlogHeader";
import { BlogCardContainer } from "../../Containers";

const Blog = () => (
  <Fragment>
    <BlogHeader />
    <BlogCardContainer/>
  </Fragment>
);
export default Blog;
