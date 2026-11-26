
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { categories, services } from "../../../data/services";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/°/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = categories.find((item) => item.id === slug);

  if (!category) {
    notFound();
  }

  const categoryServices = services.filter(
    (service) => service.category === slug
  );

  return (
    <main className="collection-page">
      <header className="collection-header">
        <Link href="/" className="brand">
          <span className="brand-name">MEMORY MAKERS</span>
          <span className="brand-caption">Crafting Experiences</span>
        </Link>

        <Link href="/" className="back-link">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </header>

      <section className="collection-hero">
        <p className="eyebrow">OUR EXPERIENCE COLLECTIONS</p>

        <p className="collection-number">
          COLLECTION — {category.number}
        </p>

        <h1>{category.title}</h1>

        <p className="collection-subtitle">
          {category.subtitle}
        </p>

        <p className="collection-description">
          {category.description}
        </p>

        <span className="collection-count">
          {String(categoryServices.length).padStart(2, "0")} EXPERIENCES
        </span>
      </section>

      <section className="collection-services">
        <div className="collection-section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE COLLECTION</p>
            <h2>Find your experience.</h2>
          </div>

          <p>
            Discover experiences designed to make
            your celebration unforgettable.
          </p>
        </div>

        <div className="service-grid">
          {categoryServices.map((service, index) => (
  <Link
    href={`/services/${createSlug(service.name)}`}
    className="service-card"
    key={service.name}
  >
    <div className="service-image">
      <span>
        {String(index + 1).padStart(2, "0")}
      </span>
      <ArrowUpRight size={20} />
    </div>

    <div className="service-card-info">
      <h3>{service.name}</h3>
      <p>Discover this experience with Memory Makers.</p>
    </div>
  </Link>
))}
        </div>
      </section>

      <section className="collection-cta">
        <p className="eyebrow">MAKE YOUR CELEBRATION SPECIAL</p>
        <h2>Let's create memories together.</h2>
        <Link href="/enquiry" className="primary-button">
          Enquire Now <ArrowUpRight size={15} />
        </Link>
      </section>

      <footer className="collection-footer">
        © {new Date().getFullYear()} MEMORY MAKERS.
        ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
