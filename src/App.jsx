import { useCallback, useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import bakesIntroImage from '../images/bakes/bake-01.webp'
import breadsmithHeroImage from '../images/breadsmith-hero-02.webp'
import founderPhoto from '../images/sam/sam-home.webp'
import breadsmithLogo from '../images/breadsmith-logo.png'
import './App.css'
import { siteData } from './siteData'

const pageTitles = {
  '/': 'Home',
  '/story': 'Story',
  '/menu': 'Menu',
  '/orders': 'Orders',
  '/contact': 'Contact',
}

const navigationItems = [
  { to: '/story', label: 'Story' },
  { to: '/menu', label: 'Menu' },
  { to: '/orders', label: 'Orders' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((open) => !open)
  }, [])
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <div className="site-shell">
      <PageMeta />
      <SiteHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
        onMobileMenuClose={handleMobileMenuClose}
      />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

function PageMeta() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${siteData.businessName} | ${
      pageTitles[location.pathname] ?? 'Bakery'
    }`
  }, [location.pathname])

  return null
}

function SiteHeader({
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
}) {
  const location = useLocation()

  useEffect(() => {
    onMobileMenuClose()
  }, [location.pathname, onMobileMenuClose])

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          type="button"
          className="menu-toggle"
          onClick={onMobileMenuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-nav"
          className={isMobileMenuOpen ? 'site-nav site-nav-open' : 'site-nav'}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              onClick={onMobileMenuClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/" className="logo-link" aria-label="The Breadsmith home">
          <img src={breadsmithLogo} alt="The Breadsmith logo" className="brand-logo" />
        </NavLink>
        <div className="header-spacer" aria-hidden="true" />
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-block">
        <div className="hero-media">
          <img
            src={breadsmithHeroImage}
            alt=""
            className="hero-image"
          />
          <div className="media-overlay">
            <h1>{siteData.hero.title}</h1>
            <div className="hero-actions">
              <NavLink to="/menu" className="button button-primary button-hero">
                {siteData.hero.primaryCta}
              </NavLink>
              <NavLink to="/orders" className="button button-secondary">
                {siteData.hero.secondaryCta}
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bakes-intro">
          <h2 className="bakes-intro-title">
            <span>{siteData.bakesIntro.titleLineOne}</span>
            <span>{siteData.bakesIntro.titleLineTwo}</span>
          </h2>
          <p className="bakes-intro-copy">{siteData.bakesIntro.description}</p>
          <p className="bakes-intro-label">{siteData.bakesIntro.hoursLabel}</p>
          <p className="bakes-intro-hours">{siteData.bakesIntro.hours}</p>
          <p className="bakes-intro-hours">{siteData.bakesIntro.closedNote}</p>
          <a className="bakes-intro-button" href="#featured-products">
            {siteData.bakesIntro.cta}
          </a>
        </div>
        <div className="bakes-intro-image-breakout">
          <img
            src={bakesIntroImage}
            alt=""
            className="bakes-intro-image"
          />
        </div>
      </section>

      {/* <section className="content-section">
        <div className="stat-strip">
          {siteData.hero.stats.map((item) => (
            <article key={item.label} className="stat-card">
              <p className="panel-number">{item.label}</p>
              <h2>{item.value}</h2>
            </article>
          ))}
        </div>
      </section> */}

      <section className="content-section">
        <SectionHeading
          eyebrow="Direction"
          title="A stronger first impression, then clear paths into the useful pages"
          intro="The homepage is now designed to mirror the references: more impact up front, less generic boxy layout, and a calmer palette keyed to the logo green."
        />
        <div className="grid grid-three">
          {siteData.homeHighlights.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-products" className="content-section accent-section">
        <SectionHeading
          eyebrow="Featured Products"
          title="Cut-out product styling, ready for real transparent PNGs later"
          intro="These cards use sculpted placeholder artwork now, but the layout is built so real cut-out product photos can replace them without changing the page structure."
        />
        <div className="product-grid product-grid-featured">
          {siteData.featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="split-layout">
          <div className="story-teaser panel panel-soft">
            <p className="eyebrow">Story</p>
            <h2>A proper founder-led page rather than a generic about section</h2>
            <p>
              The story route now expects a strong image, a short origin story, and awards
              or mentions that build trust.
            </p>
            <NavLink to="/story" className="text-link">
              Read the story
            </NavLink>
          </div>
          <InstagramPreview />
        </div>
      </section>
    </>
  )
}

function StoryPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Story</p>
        <h1>{siteData.story.title}</h1>
        <p className="page-intro">{siteData.story.intro}</p>
      </section>

      <section className="content-section">
        <div className="story-layout">
          <div className="founder-photo">
            <div className="founder-photo-frame">
              <img
                src={founderPhoto}
                alt="Founder of The Breadsmith"
                className="founder-photo-image"
              />
            </div>
            <p>{siteData.story.founderNote}</p>
          </div>
          <div className="story-copy">
            {siteData.story.values.map((value) => (
              <article key={value.title} className="panel">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section accent-section">
        <SectionHeading
          eyebrow="Awards & Mentions"
          title="Space for credibility signals once the real assets arrive"
          intro="This section is shaped by the references you shared, so award stamps, magazine features, and press mentions can slot in cleanly."
        />
        <div className="awards-grid">
          {siteData.awards.map((award) => (
            <article key={award} className="panel panel-soft">
              <p>{award}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Menu</p>
        <h1>Product-led cards with cleaner detail on demand</h1>
        <p className="page-intro">{siteData.menuIntro}</p>
      </section>

      <section className="content-section">
        <div className="menu-note">
          <p>{siteData.menuCollections.length} menu groups ready for real photography.</p>
          <a href={siteData.contact.instagramUrl} target="_blank" rel="noreferrer">
            View the live weekly drop
          </a>
        </div>
      </section>

      {siteData.menuCollections.map((collection) => (
        <section className="content-section" key={collection.title}>
          <SectionHeading
            eyebrow="Collection"
            title={collection.title}
            intro={collection.summary}
          />
          <div className="product-grid">
            {collection.items.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

function OrdersPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Orders</p>
        <h1>Make ordering feel simple even before there is a full checkout flow</h1>
        <p className="page-intro">{siteData.orders.intro}</p>
      </section>

      <section className="content-section">
        <div className="steps-grid">
          {siteData.orders.steps.map((step) => (
            <article key={step.step} className="panel">
              <p className="panel-number">{step.step}</p>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section accent-section">
        <SectionHeading
          eyebrow="Expectations"
          title="Set the rhythm clearly and reduce admin"
          intro="These are placeholder rules for now, but they give the page the right shape until the final ordering details are confirmed."
        />
        <div className="policy-list">
          {siteData.orders.policies.map((policy) => (
            <article key={policy} className="policy-row">
              <span />
              <p>{policy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers where customers actually need them"
          intro="A short FAQ helps stop simple logistics questions from turning into repeated DMs."
        />
        <div className="faq-grid">
          {siteData.faqs.map((faq) => (
            <article key={faq.question} className="panel panel-soft">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Keep the contact page direct and useful</h1>
        <p className="page-intro">{siteData.contact.intro}</p>
      </section>

      <section className="content-section">
        <div className="grid grid-three">
          <article className="panel">
            <p className="panel-number">Email</p>
            <h2>{siteData.contact.email}</h2>
            <p>Best for enquiries, larger orders, and collaborations.</p>
            <a className="text-link" href={`mailto:${siteData.contact.email}`}>
              Send an email
            </a>
          </article>
          <article className="panel">
            <p className="panel-number">Instagram</p>
            <h2>{siteData.contact.instagramHandle}</h2>
            <p>Use this for weekly drops, fresh bakes, and quick updates.</p>
            <a
              className="text-link"
              href={siteData.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open Instagram
            </a>
          </article>
          <article className="panel">
            <p className="panel-number">Collections</p>
            <h2>Weekend pickup</h2>
            <p>{siteData.contact.collectionDetails}</p>
            <p className="contact-note">{siteData.contact.collectionNote}</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <InstagramPreview />
      </section>
    </>
  )
}

function ProductCard({ product }) {
  return (
    <details className="product-card">
      <summary>
        <div className={`product-cutout art-${product.art}`} aria-hidden="true">
          <div className="art-piece art-main" />
          <div className="art-piece art-accent" />
        </div>
        <div className="product-heading">
          <p className="panel-number">{product.note ?? product.notice ?? 'Signature bake'}</p>
          <h3>{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <p>{product.description}</p>
        </div>
        <span className="expand-label">View contents & allergens</span>
      </summary>
      <div className="product-meta">
        <p>
          <strong>Contents:</strong> {product.contents}
        </p>
        <p>
          <strong>Allergens:</strong> {product.allergens}
        </p>
      </div>
    </details>
  )
}

function InstagramPreview() {
  return (
    <section className="instagram-panel">
      <SectionHeading
        eyebrow="Instagram"
        title="A feed-style section can live here without taking over the site"
        intro={siteData.instagram.intro}
      />
      <div className="instagram-grid">
        {siteData.instagram.tiles.map((tile) => (
          <article key={tile} className="instagram-tile">
            <span>{tile}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <img src={breadsmithLogo} alt="" className="footer-logo" />
        <p>{siteData.tagline}</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
        <a href={siteData.contact.instagramUrl} target="_blank" rel="noreferrer">
          {siteData.contact.instagramHandle}
        </a>
      </div>
    </footer>
  )
}

export default App
