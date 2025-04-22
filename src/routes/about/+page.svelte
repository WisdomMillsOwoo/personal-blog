<script>
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";
  import { blogMetaData } from "$lib/blogMetaData";

  const meta = {
    title: `About | ${blogMetaData.blogTitle}`,
    description: blogMetaData.description,
    url: envVariables.basePath,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "image",
    },
    platforms: {
      bluesky: blogMetaData.platforms.bluesky,
      youtube: blogMetaData.platforms.youtube
    }
  };
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
<div class="about-container">
  <h1>About</h1>
  <p>My name is Wisdom Mills-Owoo, I'm a so-so software engineer living in the US</p>
  <p>
    I have many interests and I never know which of them to focus on. I used to spend
    quite a bit of energy trying force myself to focus on one thing, but I find that I'm
    much happier when I just let my self spiral from one thing to the other. :)
  </p>
  <p>
    This is my personal blog, where I may be writing about random topics that cross my mind.
    Or, I may abandon this immediately after I publish it. In fact, I may not even end
    up deploying this code, and you might just be reading this on github. (If I even en up
    committing it.)
  </p>
  <p>
    I would like to give credit to <a href="https://github.com/K-Sato1995">K-Sato1995</a> for the svelte template I used
    to build the initial version of this blog.
  </p>
  <p>
    As always, I also give thanks to God. 🙏🏿
  </p>
</div>
