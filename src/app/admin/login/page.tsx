
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="admin-login-page">

      <div className="login-decoration">
        <div className="login-decoration-ring" />
        <div className="login-decoration-ring second" />

        <div className="login-brand-content">
          <p>THE ART OF CELEBRATION</p>
          <h1>Every detail<br />creates a memory.</h1>
          <span>MEMORY MAKERS</span>
        </div>
      </div>

      <section className="login-form-section">

        <Link href="/" className="login-brand">
          <span>MM</span>
          <div>
            <strong>MEMORY MAKERS</strong>
            <small>ADMINISTRATION</small>
          </div>
        </Link>

        <div className="login-form-content">
          <p className="admin-eyebrow">
            PRIVATE ADMINISTRATION
          </p>

          <h2>Welcome back.</h2>

          <p className="login-description">
            Sign in to manage your experiences,
            enquiries and website content.
          </p>

          <form className="login-form">

            <label>
              Email address

              <div className="login-input-wrap">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="username"
                  required
                />
              </div>
            </label>

            <label>
              Password

              <div className="login-input-wrap">
                <LockKeyhole size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </label>

            <button
              type="button"
              className="login-submit"
              disabled
            >
              Sign In
              <ArrowRight size={17} />
            </button>

          </form>

          <p className="login-security-note">
            <LockKeyhole size={14} />
            Authorised administration access only
          </p>
        </div>

        <footer className="login-footer">
          © {new Date().getFullYear()} MEMORY MAKERS
          <span>CRAFTING EXPERIENCES.</span>
        </footer>

      </section>
    </main>
  );
}
