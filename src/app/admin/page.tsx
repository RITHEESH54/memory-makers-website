
"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  Gamepad2,
  Camera,
  Gift,
  Package,
  IndianRupee,
  CalendarDays,
  MessageSquare,
  Image,
  Settings,
  LogOut,
  ArrowUpRight,
  Plus,
  Search,
  Bell
} from "lucide-react";

const menuItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Categories", icon: Package },
  { label: "Games", icon: Gamepad2 },
  { label: "Photos", icon: Camera },
  { label: "Gifts", icon: Gift },
  { label: "Pricing", icon: IndianRupee },
  { label: "Availability", icon: CalendarDays },
  { label: "Enquiries", icon: MessageSquare },
  { label: "Media Library", icon: Image },
  { label: "Settings", icon: Settings }
];

const stats = [
  { label: "Total Services", value: "17", note: "Across 3 categories" },
  { label: "New Enquiries", value: "00", note: "Awaiting review" },
  { label: "Published Services", value: "17", note: "Currently listed" },
  { label: "Pending Enquiries", value: "00", note: "Require attention" }
];

export default function AdminPage() {
  return (
    <main className="admin-layout">

      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>MM</span>
          <div>
            <strong>MEMORY MAKERS</strong>
            <small>ADMINISTRATION</small>
          </div>
        </div>

        <p className="admin-menu-label">WORKSPACE</p>

        <nav className="admin-menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`admin-menu-item ${index === 0 ? "active" : ""}`}
                type="button"
              >
                <Icon size={18} />
                <span>{item.label}</span>
                <ArrowUpRight size={13} />
              </button>
            );
          })}
        </nav>

        <button className="admin-logout" type="button">
          <LogOut size={17} />
          Sign Out
        </button>
      </aside>

      <section className="admin-main">

        <header className="admin-topbar">
          <div>
            <p>MEMORY MAKERS / ADMIN</p>
            <h1>Dashboard</h1>
          </div>

          <div className="admin-top-actions">
            <button type="button" aria-label="Notifications">
              <Bell size={19} />
            </button>
            <div className="admin-avatar">MM</div>
          </div>
        </header>

        <section className="admin-welcome">
          <div>
            <p className="admin-eyebrow">YOUR BUSINESS AT A GLANCE</p>
            <h2>Welcome back.</h2>
            <p>
              Manage your experiences and keep every
              celebration running smoothly.
            </p>
          </div>
          <Link
  href="/admin/services/new"
  className="admin-add-button"
>
  <Plus size={17} />
  Add New Service
</Link>
        </section>

        <section className="admin-stats">
          {stats.map((stat) => (
            <article className="admin-stat-card" key={stat.label}>
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span>{stat.note}</span>
            </article>
          ))}
        </section>

        <section className="admin-content-grid">

          <div className="admin-panel">
            <div className="admin-panel-heading">
              <div>
                <p className="admin-eyebrow">YOUR COLLECTIONS</p>
                <h2>Service categories</h2>
              </div>
              <button type="button" aria-label="Add category">
                <Plus size={18} />
              </button>
            </div>

            <div className="admin-category-list">
              <div>
                <Gamepad2 size={22} />
                <span>
                  <strong>Games</strong>
                  <small>11 experiences</small>
                </span>
                <ArrowUpRight size={16} />
              </div>

              <div>
                <Camera size={22} />
                <span>
                  <strong>Photos</strong>
                  <small>3 experiences</small>
                </span>
                <ArrowUpRight size={16} />
              </div>

              <div>
                <Gift size={22} />
                <span>
                  <strong>Gifts</strong>
                  <small>3 experiences</small>
                </span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          <div className="admin-panel">
            <div className="admin-panel-heading">
              <div>
                <p className="admin-eyebrow">QUICK ACCESS</p>
                <h2>Management tools</h2>
              </div>
            </div>

            <div className="admin-quick-links">
              <Link
  href="/admin/services/new"
  className="admin-quick-link"
>
  <Plus size={17} />
  Create a service
</Link>
              <button type="button">
                <IndianRupee size={17} />
                Update pricing
              </button>
              <button type="button">
                <Image size={17} />
                Manage photographs
              </button>
              <button type="button">
                <MessageSquare size={17} />
                View enquiries
              </button>
            </div>
          </div>

        </section>

        <section className="admin-panel admin-enquiries">
          <div className="admin-panel-heading">
            <div>
              <p className="admin-eyebrow">CUSTOMER ACTIVITY</p>
              <h2>Recent enquiries</h2>
            </div>

            <button type="button" aria-label="Search enquiries">
              <Search size={18} />
            </button>
          </div>

          <div className="admin-empty-state">
            <MessageSquare size={28} />
            <h3>No enquiries yet</h3>
            <p>
              Customer enquiries will appear here when
              your website starts receiving submissions.
            </p>
          </div>
        </section>

        <footer className="admin-footer">
          MEMORY MAKERS ADMINISTRATION
          <span>CRAFTING EXPERIENCES.</span>
        </footer>

      </section>
    </main>
  );
}
