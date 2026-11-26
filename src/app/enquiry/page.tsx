
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

const serviceOptions = {
  Games: [
    "Catch the Stick Challenge",
    "Car Race",
    "Car Football",
    "Ball Balancing",
    "Snow Bowling",
    "Balloon Shooting",
    "Archery",
    "Dart",
    "Foosball",
    "Air Hockey",
    "VR Gaming",
  ],
  Photos: [
    "Instant Photo Booth",
    "360° Selfie Video Booth",
    "Magic Mirror",
  ],
  Gifts: [
    "On-site Photo Gift Printing",
    "Return Gifts",
    "Custom Products",
  ],
};

export default function EnquiryPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Enquiry form is ready. Database connection will be added later.");
  }

  return (
    <main className="enquiry-page">
      <header className="enquiry-header">
        <Link href="/" className="brand">
          <span className="brand-name">MEMORY MAKERS</span>
          <span className="brand-caption">Crafting Experiences</span>
        </Link>

        <Link href="/" className="back-link">
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </header>

      <section className="enquiry-hero">
        <p className="eyebrow">LET'S MAKE IT MEMORABLE</p>
        <h1>
          Tell us about
          <br />
          your celebration.
        </h1>
        <p>
          Share a few details about your event.
          Our team will help you create an unforgettable experience.
        </p>
      </section>

      <section className="enquiry-content">
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-section">
            <p className="form-step">01 — YOUR DETAILS</p>
            <h2>Let's get to know you.</h2>

            <div className="form-grid">
              <label>
                Full Name *
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Mobile Number *
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </label>

              <label className="full-width">
                Email Address
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <p className="form-step">02 — EVENT INFORMATION</p>
            <h2>What's the occasion?</h2>

            <div className="form-grid">
              <label>
                Event Type *
                <select name="eventType" required defaultValue="">
                  <option value="" disabled>Select event type</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>College Event</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Event Date *
                <input name="eventDate" type="date" required />
              </label>

              <label>
                Event Location *
                <input
                  name="location"
                  type="text"
                  placeholder="City / Area"
                  required
                />
              </label>

              <label>
                Venue Name
                <input
                  name="venue"
                  type="text"
                  placeholder="Name of the venue"
                />
              </label>

              <label className="full-width">
                Venue Address
                <textarea
                  name="address"
                  rows={3}
                  placeholder="Enter the complete venue address"
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <p className="form-step">03 — CHOOSE YOUR EXPERIENCES</p>
            <h2>What would you like?</h2>
            <p className="form-description">
              Select as many services as you need.
            </p>

            {Object.entries(serviceOptions).map(([category, options]) => (
              <div className="service-selection" key={category}>
                <h3>{category}</h3>

                <div className="selection-grid">
                  {options.map((service) => {
                    const selected = selectedServices.includes(service);

                    return (
                      <button
                        type="button"
                        key={service}
                        className={`selection-option ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() => toggleService(service)}
                      >
                        <span className="selection-check">
                          {selected ? <Check size={13} /> : null}
                        </span>
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <p className="selected-count">
              {selectedServices.length} service(s) selected
            </p>
          </div>

          <div className="form-section">
            <p className="form-step">04 — ADDITIONAL INFORMATION</p>
            <h2>Anything else we should know?</h2>

            <label>
              Additional Requests
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirements or special requests..."
              />
            </label>
          </div>

          <input
            type="hidden"
            name="selectedServices"
            value={selectedServices.join(", ")}
          />

          <button type="submit" className="enquiry-submit">
            Submit Enquiry
            <ArrowUpRight size={18} />
          </button>

          <p className="form-disclaimer">
            Submitting an enquiry does not confirm a booking.
            Our team will contact you to discuss availability and pricing.
          </p>
        </form>
      </section>

      <footer className="collection-footer">
        © {new Date().getFullYear()} MEMORY MAKERS. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
