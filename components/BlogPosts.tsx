import React from "react";
import styles from "../style/modules/blogposts/BlogPosts.module.scss";

import H1 from "./assets/H1";
import GridItem from "./assets/GridItem";

const BlogPosts = () => {
  return (
    <div className={styles.blogPosts}>
      <H1 title="BLOG POSTS" />
      <div className="flex">
        <GridItem
          title="Hello"
          desc="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
      </div>
    </div>
  );
};

export default BlogPosts;
