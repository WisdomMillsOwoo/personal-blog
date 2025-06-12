<script lang="ts">
  export let data;
  import { envVariables } from "$lib/envVariables";
  import { blogMetaData } from "$lib/blogMetaData";
  import { MetaTags } from "svelte-meta-tags";
  import PostList from "$lib/components/PostList.svelte";
  import PostItem from "$lib/components/Post.svelte";
  import { format } from "fecha";

  const meta = {
    title: `Blog | ${blogMetaData.blogTitle}`,
    description: "Read my thoughts on software development, music, tech, and life in general.",
    url: `${envVariables.basePath}/blog`,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "image",
    },
  };

  // Get the latest post (first in the sorted array)
  const latestPost = data.body.posts[0];
  const otherPosts = data.body.posts.slice(1);
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: "website",
    url: meta.url,
  }}
  twitter={{
    cardType: "summary_large_image",
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>

<div class="blog-page">
  <div class="blog-header">
    <h1>Blog Posts</h1>
    <p>Thoughts on software development, music, tech, and life in general.</p>
  </div>

  {#if latestPost}
    <div class="featured-post">
      <div class="featured-badge">Latest Post</div>
      <div class="featured-content">
        <p class="featured-date">{format(new Date(latestPost.date), "MMMM DD, YYYY")}</p>
        <h2 class="featured-title">
          <a class="featured-title-link" href={`/blog/${latestPost.slug}`}>
            {latestPost.title}
          </a>
        </h2>
        <p class="featured-description">{latestPost.description}</p>
        <a href={`/blog/${latestPost.slug}`} class="read-more-btn">
          Read More →
        </a>
      </div>
    </div>
  {/if}

  <div class="all-posts-section">
    <h2 class="section-title">All Posts</h2>
    <PostList>
      {#each data.body.posts as post}
        <PostItem {post} />
      {/each}
    </PostList>
  </div>
</div>

<style>
  .blog-page {
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--border-color);
  }

  .blog-header h1 {
    color: var(--main-color);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .blog-header p {
    color: var(--secondary-color);
    font-size: 1.1rem;
    margin: 0;
  }

  .featured-post {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 2px solid var(--main-color);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 3rem;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .featured-badge {
    position: absolute;
    top: -12px;
    left: 2rem;
    background: var(--main-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .featured-content {
    margin-top: 1rem;
  }

  .featured-date {
    color: var(--secondary-color);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .featured-title {
    margin: 0.5rem 0 1rem 0;
  }

  .featured-title-link {
    color: var(--main-color);
    font-size: 1.75rem;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.3;
  }

  .featured-title-link:hover {
    text-decoration: underline;
  }

  .featured-description {
    color: var(--secondary-color);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .read-more-btn {
    display: inline-block;
    background: var(--main-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .read-more-btn:hover {
    background: #d67c47;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(239, 131, 84, 0.3);
  }

  .all-posts-section {
    margin-top: 3rem;
  }

  .section-title {
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2rem;
    }

    .featured-post {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .featured-title-link {
      font-size: 1.5rem;
    }

    .featured-description {
      font-size: 1rem;
    }
  }
</style>