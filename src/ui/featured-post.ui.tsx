"use client";
import React, { useEffect, useState, useTransition } from "react";
import { ContentCard } from "./content-card.ui";
import { getDate } from "@/utils/get-date.util";
import { getPosts } from "@/actions/posts.action";
import { IPost } from "@/interfaces";
import { getRandomArrayElement } from "@/utils/get-rand-arr-element.util";
export const FeaturedPost = () => {
  const [pendingPost, fetchPost] = useTransition();
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    fetchPost(async () => {
      const postsData = await getPosts();
      setPosts(postsData.posts as IPost[]);
    });
  }, []);

  return (
    <div className="h-fit text-mist-dark flex flex-col items-center justify-center py-10 px-20">
      <h4 className="text-sm text-sky">Practice Advice</h4>
      <h1 className="text-misty text-xl">Featured Posts</h1>
      <div className="grid grid-cols-3 gap-3">
        {pendingPost ? (
          <></>
        ) : (
          posts.map(({ body, id, reactions, tags, title, userId }) => (
            <ContentCard
              tags={tags}
              body={body}
              key={id}
              comment={reactions}
              date={getDate()}
              flag="New"
              postImg={getRandomArrayElement([
                "/_images/post_1.png",
                "/_images/post_0.png",
                "/_images/post_2.png",
              ])}
              title={title}
            />
          ))
        )}
      </div>
    </div>
  );
};
