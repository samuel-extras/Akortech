import React from "react";
import { BlogCard } from "../../Components";
import blogdata from "../../Pages/Blog/BlogData"


const BlogCon = () => (
  <section data-tm-bg-img="images/bg/1c9.png">
    <div className="container">
      <div className="section-content">
        <div className="row">
        {
          blogdata.map((blog,i)=><BlogCard
          key={i}
           image={blog.image}
            heading={blog.heading}
            description={blog.details}
            />)
        }
        
        </div>
      </div>
    </div>
  </section>
);

export default BlogCon;
