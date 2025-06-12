<script>
  import { blogMetaData } from "$lib/blogMetaData";
</script>

<nav class="header">
  <a href="/" class="header__title">
    <img src="/header_logo.png" alt="logo" class="header__logo" />
    {blogMetaData.blogTitle}
  </a>
  <ul class="header__links">
    <li class="header__links_item">
      <a href="/" class="header__links__item__link">Home</a>
    </li>
    <li class="header__links_item">
      <a href="/blog" class="header__links__item__link">Blog</a>
    </li>
    <li class="header__links_item">
      <a href="/about" class="header__links__item__link">About</a>
    </li>
  </ul>
</nav>

<style>
  .header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .header__title {
    margin-left: 1rem;
    color: var(--main-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    line-height: 6.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header__logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .header__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  .header__links_item {
    margin-left: 1rem;
  }

  .header__links_item:last-child {
    margin-right: 1rem;
  }

  .header__links__item__link {
    padding-bottom: 0.2rem;
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .header__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary-color);
    color: var(--main-color);
  }

  @media (max-width: 768px) {
    .header__title {
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }

    .header__logo {
      width: 32px;
      height: 32px;
    }

    .header__links_item {
      margin-left: 0.5rem;
    }

    .header__links_item:last-child {
      margin-right: 0.5rem;
    }
  }
</style>