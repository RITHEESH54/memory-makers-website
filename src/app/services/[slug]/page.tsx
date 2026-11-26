
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories, services } from "../../../data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/°/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => createSlug(item.name) === slug
  );

  if (!service) {
    notFound();
  }

  const category = categories.find(
    (item) => item.id === service.category
  );

  return (
    <main className="service-detail-page">
      <header className="collection-header">
        <Link href="/" className="brand">
          <span className="brand-name">MEMORY MAKERS</span>
          <span className="brand-caption">
            Crafting Experiences
          </span>
        </Link>

        <Link
          href={`/categories/${service.category}`}
          className="back-link"
        >
          <ArrowLeft size={15} />
          Back to {category?.title}
        </Link>
      </header>

      <section className="service-detail-hero">
        <p className="eyebrow">
          {category?.title} COLLECTION
        </p>

        <h1>{service.name}</h1>

        <p>
          Discover an unforgettable experience with
          Memory Makers. Make your celebration special
          with our {service.name} experience.
        </p>

        <Link href="/enquiry" className="primary-button">
          Enquire About This Service
          <ArrowRight size={16} />
        </Link>

        <div className="service-detail-art" />
      </section>

      <section className="service-detail-content">
        <div className="service-detail-heading">
          <p className="eyebrow">THE EXPERIENCE</p>
          <h2>Made for moments that matter.</h2>
          <p>
            More information, photographs, videos,
            pricing and specifications for this service
            will be available here.
          </p>
        </div>

        <div className="service-gallery">
          <div className="gallery-placeholder">
            <span>IMAGE 01</span>
          </div>
          <div className="gallery-placeholder">
            <span>IMAGE 02</span>
          </div>
          <div className="gallery-placeholder">
            <span>IMAGE 03</span>
          </div>
        </div>

        <div className="service-video">
          <p className="eyebrow">SEE IT IN ACTION</p>
          <h2>Experience the moment.</h2>
          <div className="video-placeholder">
            DEMO VIDEO WILL APPEAR HERE
          </div>
        </div>

        <div className="service-enquiry">
          <p className="eyebrow">READY TO MAKE MEMORIES?</p>
          <h2>Bring this experience to your event.</h2>
          <Link href="/enquiry" className="primary-button">
            Make An Enquiry
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="collection-footer">
        © {new Date().getFullYear()} MEMORY MAKERS.
        ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
