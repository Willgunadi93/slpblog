import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";

type HighlightPostType = {
  post: {
    title: string;
    author: string;
    tags: string[];
  };
};

const HighlightPost = ({ post }: HighlightPostType) => {
  return (
    <div className="my-2 first:my-0">
      <Card className="px-10 py-4">
        <div className="px-6 text-sm text-gray-400">
          <Link href={`/${post.author}`}>{post.author}</Link>
        </div>
        <CardHeader>
          <Link href={`/${post.author}/${post.title}`}>
            <CardTitle className="ital text-2xl">{post.title}</CardTitle>
          </Link>
        </CardHeader>
        <CardContent>
          {post.tags.map((tag, index) => {
            return (
              <Link key={index} href={`/tags/${tag.toLowerCase()}`}>
                <Badge className="mx-2" variant="secondary">
                  #{tag.toLowerCase()}
                </Badge>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default HighlightPost;
