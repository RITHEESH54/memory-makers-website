
"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mm-intro-shown")) return;

    sessionStorage.setItem("mm-intro-shown", "true");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const timeline = gsap.timeline({
      onComplete: () => setVisible(false)
    });

    timeline
      .fromTo(
        ".intro-silk",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out"
        }
      )
      .fromTo(
        ".intro-ring",
        { scale: 0.7, opacity: 0, rotation: -30 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.45,
          ease: "power3.out"
        },
        "-=0.25"
      )
      .fromTo(
        ".intro-logo",
        { scale: 0.85, opacity: 0, filter: "blur(8px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.45,
          ease: "power3.out"
        },
        "-=0.25"
      )
      .fromTo(
        ".intro-caption",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25 },
        "-=0.15"
      )
      .to(
        ".intro-overlay",
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        },
        "+=0.05"
      );
      return () => {
  timeline.kill();
};
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-overlay">
      <div className="intro-silk intro-silk-one" />
      <div className="intro-silk intro-silk-two" />
      <div className="intro-silk intro-silk-three" />

      <div className="intro-ring">
        <div className="intro-logo-wrap">
          <img
            src="/logo.png"
            alt="Memory Makers"
            className="intro-logo"
          />
        </div>
      </div>

      <p className="intro-caption">CRAFTING EXPERIENCES</p>
    </div>
  );
}