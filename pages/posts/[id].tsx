import React from "react";

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostDetail({post}: {post: Post}) {
  return (
    <div>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com${context.resolvedUrl}`
  );
  const post = await res.json();
  return {props: {post,},};
}