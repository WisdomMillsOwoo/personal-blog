<script lang="ts">
  import { envVariables } from "$lib/envVariables";
  import { blogMetaData } from "$lib/blogMetaData";
  import { MetaTags } from "svelte-meta-tags";

  const meta = {
    title: `Home | ${blogMetaData.blogTitle}`,
    description: blogMetaData.description,
    url: envVariables.basePath,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "image",
    },
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

<div class="home-container">
  <div class="hero-section">
    <h1 class="hero-title">Welcome to JustWisdomThings</h1>
    <p class="hero-subtitle">Software Engineering - Music - Video - Tech</p>
  </div>

  <div class="navigation-grid">
    <a href="https://www.youtube.com/@justwisdomthings" target="_blank" rel="noopener noreferrer" class="nav-card youtube-card">
      <div class="nav-card-icon">📺</div>
      <h2 class="nav-card-title">YouTube Videos</h2>
      <p class="nav-card-description">Watch my latest tech tutorials, coding tips, and developer insights</p>
      <div class="nav-card-arrow">→</div>
    </a>

    <a href="https://github.com/WisdomMillsOwoo" target="_blank" rel="noopener noreferrer" class="nav-card github-card">
      <div class="nav-card-icon">💻</div>
      <h2 class="nav-card-title">GitHub Projects</h2>
      <p class="nav-card-description">Explore my open source projects and code repositories</p>
      <div class="nav-card-arrow">→</div>
    </a>

    <a href="/blog" class="nav-card blog-card">
      <div class="nav-card-icon">✍️</div>
      <h2 class="nav-card-title">Blog Posts</h2>
      <p class="nav-card-description">Read my thoughts on software development, music, and life</p>
      <div class="nav-card-arrow">→</div>
    </a>
  </div>
</div>

<style>
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--main-color);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--secondary-color);
    margin: 0;
  }

  .navigation-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .nav-card {
    display: block;
    padding: 2.5rem;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-height: 200px;
  }

  .nav-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--main-color);
  }

  .nav-card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .nav-card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--main-color);
  }

  .nav-card-description {
    color: var(--secondary-color);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .nav-card-arrow {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 1.5rem;
    color: var(--main-color);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .nav-card:hover .nav-card-arrow {
    opacity: 1;
    transform: translateX(4px);
  }

  .youtube-card:hover {
    border-color: #ff0000;
  }

  .youtube-card:hover .nav-card-title,
  .youtube-card:hover .nav-card-arrow {
    color: #ff0000;
  }

  .github-card:hover {
    border-color: #333;
  }

  .github-card:hover .nav-card-title,
  .github-card:hover .nav-card-arrow {
    color: #333;
  }

  .blog-card:hover {
    border-color: var(--main-color);
  }

  /* Responsive adjustments while keeping cards in line */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .navigation-grid {
      gap: 1rem;
    }

    .nav-card {
      padding: 1.5rem;
      min-height: 160px;
    }

    .nav-card-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .nav-card-title {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .nav-card-description {
      font-size: 0.85rem;
      line-height: 1.4;
    }

    .nav-card-arrow {
      top: 1rem;
      right: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .home-container {
      padding: 1rem 0.5rem;
    }

    .navigation-grid {
      gap: 0.5rem;
    }

    .nav-card {
      padding: 1rem;
      min-height: 140px;
    }

    .nav-card-icon {
      font-size: 1.5rem;
    }

    .nav-card-title {
      font-size: 1rem;
    }

    .nav-card-description {
      font-size: 0.8rem;
    }

    .nav-card-arrow {
      font-size: 1rem;
    }
  }
</style>