
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Homepage hero entrance
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out"
        }
      });

      heroTimeline
        .from(".hero-content > *", {
          y: 45,
          opacity: 0,
          duration: 1,
          stagger: 0.18
        })
        .from(
          ".hero-index",
          {
            opacity: 0,
            x: 25,
            duration: 0.8
          },
          "-=0.5"
        );

      // About section reveal
      gsap.from(".intro-section > *", {
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 80%"
        },
        y: 55,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Category cards reveal
      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 80%"
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out"
      });

      // Featured section reveal
      gsap.from(".featured-box", {
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
