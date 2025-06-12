<footer class="footer">
  <ul class="footer__links">
    <li class="footer__links_item">
      <a href="/" class="footer__links__item__link">Home</a>
    </li>
    <li class="footer__links_item">
      <a href="/blog" class="footer__links__item__link">Blog</a>
    </li>
    <li class="footer__links_item">
      <a href="/about" class="footer__links__item__link">About</a>
    </li>
    <li class="footer__links_item">
      <a href="/rss.xml" class="footer__links__item__link">RSS Feed</a>
    </li>
    <li class="footer__links_item">
      <span class="footer__copy-right">© 2025 JustWisdomThings</span>
    </li>
  </ul>
</footer>

<style>
  .footer {
    height: 6rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 4rem;
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
  }

  .footer__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .footer__links_item {
    margin: 0;
  }

  .footer__links__item__link {
    padding-bottom: 0.2rem;
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .footer__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary-color);
  }

  .footer__copy-right {
    color: var(--secondary-color);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .footer__links {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>