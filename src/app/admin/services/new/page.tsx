
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ImagePlus,
  Video,
  Save,
  Eye,
  Plus,
  Trash2
} from "lucide-react";

export default function NewServicePage() {
  const [features, setFeatures] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [pricingType, setPricingType] = useState("starting");

  const addItem = (
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((previous) => [...previous, ""]);
  };

  const updateItem = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => {
    setter((previous) =>
      previous.map((item, i) => i === index ? value : item)
    );
  };

  const removeItem = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number
  ) => {
    setter((previous) => previous.filter((_, i) => i !== index));
  };

  return (
    <main className="service-editor">

      <header className="editor-header">
        <Link href="/admin" className="editor-back">
          <ArrowLeft size={17} />
          Back to Dashboard
        </Link>

        <div className="editor-header-actions">
          <button type="button" className="editor-preview">
            <Eye size={16} />
            Preview
          </button>

          <button type="button" className="editor-save">
            <Save size={16} />
            Save Service
          </button>
        </div>
      </header>

      <section className="editor-title">
        <p className="admin-eyebrow">SERVICE MANAGEMENT / NEW ENTRY</p>
        <h1>Add a new experience.</h1>
        <p>
          Create and organise a service for your Memory Makers website.
        </p>
      </section>

      <form className="service-editor-form">

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>01</span>
            <div>
              <h2>Basic information</h2>
              <p>Introduce your experience to customers.</p>
            </div>
          </div>

          <div className="editor-fields">
            <label>
              Service name *
              <input
                type="text"
                placeholder="e.g. VR Gaming Experience"
                required
              />
            </label>

            <label>
              Category *
              <select required defaultValue="">
                <option value="" disabled>Select category</option>
                <option value="games">Games</option>
                <option value="photos">Photos</option>
                <option value="gifts">Gifts</option>
              </select>
            </label>

            <label className="editor-full">
              Short subtitle
              <input
                type="text"
                placeholder="A short introduction to this experience"
              />
            </label>

            <label className="editor-full">
              Full description *
              <textarea
                rows={5}
                placeholder="Describe the experience, how it works and what makes it special..."
                required
              />
            </label>
          </div>
        </section>

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>02</span>
            <div>
              <h2>Pricing and duration</h2>
              <p>Set how customers see your pricing.</p>
            </div>
          </div>

          <div className="editor-fields">
            <label>
              Pricing type
              <select
                value={pricingType}
                onChange={(event) => setPricingType(event.target.value)}
              >
                <option value="fixed">Fixed price</option>
                <option value="starting">Starting from</option>
                <option value="custom">Custom quotation</option>
              </select>
            </label>

            {pricingType !== "custom" && (
              <label>
                Price (₹)
                <input
                  type="number"
                  min="0"
                  placeholder="Enter amount"
                />
              </label>
            )}

            <label>
              Duration
              <input
                type="text"
                placeholder="e.g. 3 hours"
              />
            </label>

            <label>
              Additional hour price (₹)
              <input
                type="number"
                min="0"
                placeholder="Optional"
              />
            </label>
          </div>
        </section>

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>03</span>
            <div>
              <h2>Features and specifications</h2>
              <p>Explain what the service includes.</p>
            </div>
          </div>

          <div className="editor-dynamic-list">
            <h3>Service features</h3>

            {features.map((feature, index) => (
              <div className="editor-list-row" key={index}>
                <input
                  value={feature}
                  onChange={(event) =>
                    updateItem(setFeatures, index, event.target.value)
                  }
                  placeholder="Enter a service feature"
                />

                <button
                  type="button"
                  onClick={() => removeItem(setFeatures, index)}
                  disabled={features.length === 1}
                  aria-label="Remove feature"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}

            <button
              type="button"
              className="editor-add-row"
              onClick={() => addItem(setFeatures)}
            >
              <Plus size={15} /> Add feature
            </button>
          </div>

          <div className="editor-dynamic-list">
            <h3>Venue requirements</h3>

            {requirements.map((item, index) => (
              <div className="editor-list-row" key={index}>
                <input
                  value={item}
                  onChange={(event) =>
                    updateItem(setRequirements, index, event.target.value)
                  }
                  placeholder="e.g. Requires a 10 × 10 ft space"
                />

                <button
                  type="button"
                  onClick={() => removeItem(setRequirements, index)}
                  disabled={requirements.length === 1}
                  aria-label="Remove requirement"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}

            <button
              type="button"
              className="editor-add-row"
              onClick={() => addItem(setRequirements)}
            >
              <Plus size={15} /> Add requirement
            </button>
          </div>
        </section>

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>04</span>
            <div>
              <h2>Photos and videos</h2>
              <p>Add the media customers will see on your website.</p>
            </div>
          </div>

          <div className="editor-upload-grid">
            <label className="editor-upload">
              <ImagePlus size={27} />
              <strong>Upload photographs</strong>
              <span>Choose multiple images</span>
              <input type="file" accept="image/*" multiple />
            </label>

            <label className="editor-upload">
              <Video size={27} />
              <strong>Upload demonstration video</strong>
              <span>Choose a video file</span>
              <input type="file" accept="video/*" />
            </label>
          </div>
        </section>

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>05</span>
            <div>
              <h2>Publishing settings</h2>
              <p>Control how the service appears on your website.</p>
            </div>
          </div>

          <div className="editor-fields">
            <label>
              Publication status
              <select defaultValue="draft">
                <option value="draft">Save as draft</option>
                <option value="published">Published</option>
                <option value="hidden">Hidden</option>
              </select>
            </label>

            <label>
              Display order
              <input type="number" min="1" placeholder="e.g. 1" />
            </label>
          </div>
        </section>

        <div className="editor-bottom-actions">
          <Link href="/admin" className="editor-cancel">
            Cancel
          </Link>

          <button type="button" className="editor-save">
            <Save size={16} />
            Save Service
          </button>
        </div>

      </form>
    </main>
  );
}
