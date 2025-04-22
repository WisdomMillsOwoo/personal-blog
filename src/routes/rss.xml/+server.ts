import { envVariables } from "$lib/envVariables";
import { getPosts } from '$lib/getPosts';
import { blogMetaData } from "$lib/blogMetaData";
import type { RequestHandler } from '@sveltejs/kit';

// Define the Post type if it's not imported elsewhere
interface Post {
    title: string;
    description: string;
    slug: string;
    date: string | Date;
    // Add any other properties your posts have
}

export const GET: RequestHandler = async () => {
    const response = getPosts();
    const posts = response.body?.posts || [];

    console.log(`Generating RSS feed with ${posts.length} posts`);

    const body = xml(posts);

    return new Response(body, {
        headers: {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
        }
    });
};

const xml = (posts: Post[]) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${blogMetaData.blogTitle}</title>
    <link>${envVariables.basePath}</link>
    <description>A blob by ${blogMetaData.owner}!</description>
    ${posts
    .map(
        post =>
            `
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${envVariables.basePath}/blog/${post.slug}/</link>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <content:encoded>
              <div style="margin-top: 50px; font-style: italic;">
                <strong>
                  <a href="${envVariables.basePath}/blog/${post.slug}">
                    ${post.title}
                  </a>
                </strong>  
              </div>
          </content:encoded>
        </item>
      `
    )
    .join('')}
  </channel>
</rss>`;