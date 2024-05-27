import React from "react";
import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <h1>The Blog</h1>
      <ul>
        <li>
          <Link href="/blog/post-1">Post 1</Link>
        </li>
        <li>
          <Link href="/blog/post-2">Post 2</Link>
        </li>
      </ul>
    </main>
  );
};

export default BlogPage;
