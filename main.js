// main.js
// 🚀 Flash USDT – SEO & UX Enhanced Script

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Flash USDT loaded with SEO optimization");

  /**
   * ✅ Dynamic SEO Metadata Injection
   * Helps search engines get consistent, keyword-rich metadata
   */
  const setMeta = (name, content) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  // Set important SEO meta tags dynamically
  setMeta("description", "Flash USDT – Seamless USDT, USDC, BTC, DAI transfers across TRC20, BEP20, ERC20, and Fantom. Secure, fast, and low-cost crypto transactions.");
  setMeta("keywords", "Flash USDT, TRC20 USDT, ERC20, BEP20, Fantom, crypto transfer, instant USDT, low fee crypto");
  setMeta("author", "Flash USDT");

  /**
   * ✅ JSON-LD Schema for Rich Snippets (Organization + Product)
   */
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Flash USDT",
    image: "https://www.flashusdt1.shop/logo.png",
    description: "Flash USDT provides blazing-fast USDT, USDC, BTC, and DAI transfers across TRC20, BEP20, ERC20, and Fantom networks with ultra-low fees.",
    brand: {
      "@type": "Organization",
      name: "Flash USDT",
      url: "https://www.flashusdt1.shop/",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-581-242-4981",
        url: "https://t.me/flashanthony"
      }
    }
  };

  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";
  scriptTag.textContent = JSON.stringify(schemaData);
  document.head.appendChild(scriptTag);

  /**
   * ✅ Smooth Scrolling for Better UX (lower bounce rate)
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /**
   * ✅ Fade-in Animation for Engagement
   */
  const fadeEls = document.querySelectorAll(".fade-in");
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /**
   * ✅ Outbound Link Tracking (to analyze click behavior)
   */
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      console.log(`🔗 Outbound link clicked: ${link.href}`);
    });
  });
});
