import React from "react";
import styles from "../../style/modules/blogposts/BlogPosts.module.scss";
import data from "../../blog/data.json";

import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const BlogPosts = () => {
  var latestPosts = data.posts.slice(0, 3);

  return (
    <div className={styles.blogPosts}>
      <H1 title="BLOG POSTS" />
      <div className="flexCol">
        <GridItem
          title={latestPosts[0].title}
          desc={latestPosts[0].desc}
          date={latestPosts[0].date}
          auth={latestPosts[0].auth}
          btn="Read more"
        />

        <GridItem
          title={latestPosts[1].title}
          desc={latestPosts[1].desc}
          date={latestPosts[1].date}
          auth={latestPosts[1].auth}
          btn="Read more"
        />

        <GridItem
          title={latestPosts[2].title}
          desc={latestPosts[2].desc}
          date={latestPosts[2].date}
          auth={latestPosts[2].auth}
          btn="Read more"
        />
      </div>
    </div>
  );
};

export default BlogPosts;
