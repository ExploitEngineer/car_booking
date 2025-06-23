"use client";

import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Fleet", href: "#fleet" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Executive Chauffeur", href: "#" },
  { name: "Airport Transfers", href: "#" },
  { name: "Corporate Events", href: "#" },
  { name: "Special Occasions", href: "#" },
];

const legal = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Footer content fade-in animation
      gsap.fromTo(
        ".footer-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger animation for links
      gsap.fromTo(
        ".footer-content a",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animation for links
      const links = document.querySelectorAll(".footer-content a");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Fade-in animation for social media icons
      gsap.fromTo(
        ".footer-content .flex a",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <footer className="footer-section bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="footer-content">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2 relative">
              <Image
                src="/assets/images/1.png"
                className="absolute -top-20"
                width={180}
                height={180}
                alt="company logo"
              />
              <div className="mt-30">
                <p className="text-neutral-400 font-light leading-relaxed max-w-md mb-8">
                  Redefining luxury transportation with unparalleled service,
                  premium vehicles, and meticulous attention to detail since
                  1995.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light uppercase tracking-wider"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light uppercase tracking-wider"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light uppercase tracking-wider"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-light mb-8">Navigation</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-300 font-light group flex items-center"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-light mb-8">Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-300 font-light group flex items-center"
                    >
                      {service.name}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-500 font-light text-sm">
                © {new Date().getFullYear()} Elite Transportation. All rights
                reserved.
              </p>
              <div className="flex space-x-8">
                {legal.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors duration-300 text-sm font-light"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
