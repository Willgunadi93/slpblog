import React from "react";
import HighlightPost from "./HighlightPost";

// type Props = {};

const samplePost = {
  title: "Sample Post One",
  author: "Natalie Jones",
  tags: ["Articulation", "Language", "Prevention"],
};
const Posts = () => {
  // map through post from db
  return (
    <>
      <HighlightPost post={samplePost} />
      <HighlightPost post={samplePost} />
      <HighlightPost post={samplePost} />
      <HighlightPost post={samplePost} />
      <HighlightPost post={samplePost} />
      <HighlightPost post={samplePost} />
    </>
  );
};

export default Posts;
