import { data } from "$data/posts.json";

export function load() {
  // Sort posts by date (newest first)
  const sortedPosts = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return { 
    body: { 
      posts: sortedPosts 
    } 
  };
}