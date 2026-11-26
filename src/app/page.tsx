import HomeAnimations from "@/components/HomeAnimations";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { categories } from "@/data/services";

export default function HomePage() {
  return (
    <main>
        <HomeAnimations />
      {/* Navigation */}
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-name">MEMORY MAKERS</span>
          <span className="brand-caption">Crafting Experiences</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#experience">Our Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <Link href="/enquiry" className="nav-cta">
          Let's Talk
        </Link>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            WHERE EVERY MOMENT BECOMES A MEMORY
          </p>

          <h1>
            Moments
            <br />
            worth <span>remembering.</span>
          </h1>

          <p className="hero-description">
            We create extraordinary experiences through interactive
            games, unforgettable photo moments and thoughtfully
            curated gifts. Because every celebration deserves
            something special.
          </p>

          <div className="hero-actions">
            <Link href="#services" className="primary-button">
              Explore Our Experiences
            </Link>

            <Link href="/enquiry" className="text-link">
              Plan Your Event <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="hero-index">
          MM — EST. FOR MEMORIES
        </div>
      </section>

      {/* About Section */}
      <section className="section intro-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">THE MEMORY MAKERS EXPERIENCE</p>

          <h2>
            More than an event.
            <br />
            It's a <span>feeling.</span>
          </h2>

          <p>
            At Memory Makers, we believe the best celebrations
            are the ones people talk about long after they end.
            We bring together creativity, entertainment and
            personal touches to make every occasion special.
          </p>
        </div>

        <div className="intro-quote">
          "We don't just create experiences.
          We create memories that stay."
        </div>
      </section>

      {/* Categories Section */}
      <section
        className="section categories-section"
        id="services"
      >
        <div className="section-heading">
          <p className="eyebrow">DISCOVER WHAT WE CREATE</p>

          <h2>
            Experiences made
            <br />
            to <span>bring people together.</span>
          </h2>

          <p>
            Explore our three experience collections,
            each designed to add something unforgettable
            to your celebration.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              className="category-card"
              key={category.id}
            >
              <span className="category-number">
                {category.number}
              </span>

              <div className="category-art" />

              <div className="category-card-content">
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="category-arrow">
                  Explore Collection
                  <ArrowDownRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Enquiry Section */}
      <section
        className="section featured-section"
        id="experience"
      >
        <div className="featured-box">
          <div>
            <p className="eyebrow">
              YOUR CELEBRATION, OUR CREATION
            </p>

            <h3>Let's make something unforgettable.</h3>

            <p>
              Tell us about your event. Our team will help
              you discover the right experiences and create
              a personalised quotation.
            </p>
          </div>

          <Link href="/enquiry" className="primary-button">
            Start Your Enquiry <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div>
            <Link href="/" className="brand">
              <span className="brand-name">MEMORY MAKERS</span>
              <span className="brand-caption">
                Crafting Experiences
              </span>
            </Link>

            <p className="footer-description">
              Creating extraordinary moments through
              experiences that bring people together
              and memories that last forever.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <Link href="/enquiry">Enquiry</Link>
          </div>

          <div className="footer-links">
            <h4>Collections</h4>
            <Link href="/categories/games">Games</Link>
            <Link href="/categories/photos">Photos</Link>
            <Link href="/categories/gifts">Gifts</Link>
          </div>

          <div className="footer-links">
            <h4>Get in Touch</h4>
            <Link href="/enquiry">Plan Your Event</Link>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MEMORY MAKERS.
            ALL RIGHTS RESERVED.
          </span>

          <span>
            CRAFTING UNFORGETTABLE EXPERIENCES.
          </span>
        </div>
      </footer>
    </main>
  );
}
