"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const navItems = [
  { name: "Home", navigate: "#home" },
  {
    name: "Fleet",
    navigate: "#fleet",
    children: [
      {
        name: "Cadillac Escalade Houston",
        navigate: "/rent-a-cadillac-houston",
      },
      { name: "Mercedes Benz S Class", navigate: "/mercedes-benz-s-class-3" },
      {
        name: "Mercedes Benz CEO/JET Sprinter",
        navigate: "/mercedes-benz-ceo-jet-spriner-2",
      },
      {
        name: "Chevrolet Suburban in Houston",
        navigate: "/chevrolet-suburban-in-houston",
      },
    ],
  },
  {
    name: "Services",
    navigate: "#services",
    children: [
      {
        name: "Airport Transportation Services",
        navigate: "/airport-transportation-services",
      },
      {
        name: "Corporate Transportation Services",
        navigate: "/corporate-transportation-services",
      },
      {
        name: "Event Transportation Services",
        navigate: "/event-transportation-services",
      },
      {
        name: "Wedding Transportation Services",
        navigate: "/wedding-transportation-services",
      },
      {
        name: "Curise Transportation Services",
        navigate: "/cruise-transportation-services",
      },
      { name: "Car Chauffeur Services", navigate: "/car-chauffeur-services" },
      {
        name: "Hourly Drop Off Transportation Services",
        navigate: "/hourly-drop-off-transportation-services",
      },
      {
        name: "Limousine Tranportation Services",
        navigate: "/limousine-transportation-services",
      },
      {
        name: "Private FBO Transportation Services",
        navigate: "/private-fbo-transportation-services",
      },
      {
        name: "Private Jet Transportation Services",
        navigate: "/private-jet-transportation-services",
      },
    ],
  },
  { name: "About", navigate: "/about-us" },
  { name: "Contact", navigate: "#contact" },
];

export function Navigation({ animate = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (!animate) return;
      gsap.fromTo(
        ".nav-item",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          delay: 3.8,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".logo-icon",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 3.8,
          ease: "back.out(1.7)",
        }
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/98 backdrop-blur-2xl border-b border-neutral-200/60 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/#home">
            <div className="logo-icon nav-item flex items-end space-x-2">
              <Image
                src="/assets/images/logo.png"
                width={80}
                height={80}
                alt="logo"
              />
              <div>
                <h1 className="text-2xl font-light tracking-[0.2em] text-neutral-900">
                  TEXAS LIMO
                </h1>
                <p className="text-xs font-light text-neutral-500 tracking-widest uppercase">
                  Luxury Transport
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-9">
            {navItems.map((item, index) => {
              const hasChildren = !!item.children;
              return (
                <div
                  key={index}
                  className="relative nav-item"
                  onMouseEnter={() => hasChildren && setOpenDesktop(item.name)}
                  onMouseLeave={() => hasChildren && setOpenDesktop(null)}
                >
                  <Link href={item.navigate}>
                    <div
                      className="text-sm cursor-pointer font-light text-neutral-700 hover:text-neutral-900 transition-all duration-300 tracking-wide py-2 relative group"
                      style={{ animationDelay: `${3.9 + index * 0.1}s` }}
                    >
                      {item.name}
                      {hasChildren && (
                        <ChevronDown className="inline-block ml-1 h-4 w-4" />
                      )}
                    </div>
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasChildren && openDesktop === item.name && (
                    <div className="absolute top-7 w-58 mt-2 bg-white shadow-md rounded-md z-50">
                      {item.children!.map((c, i) => (
                        <Link key={i} href={c.navigate}>
                          <div className="px-4 py-2 pt-4 text-neutral-700 text-sm hover:bg-gray-100 cursor-pointer">
                            {c.name}
                          </div>
                          <hr />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6 nav-item">
            <a
              href="tel:+14094431748"
              className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light">+1 (409) 443-1748</span>
            </a>
            <div className="w-px h-6 bg-neutral-300"></div>
            <a
              href="https://web.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-light px-8 py-3 tracking-wide">
                Reserve Now
              </Button>
            </a>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="nav-item">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white border-neutral-200 rounded-none">
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <Link href="/#home" onClick={() => setIsOpen(false)}>
                      <div className="text-xl font-light tracking-[0.2em]">
                        TEXAS LIMO
                      </div>
                    </Link>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </div>

                  {navItems.map((item, idx) => {
                    const hasChildren = !!item.children;
                    return (
                      <div key={idx}>
                        <div
                          className="flex justify-between items-center py-3 text-lg font-light text-neutral-700 border-b border-neutral-100 cursor-pointer"
                          onClick={() =>
                            hasChildren
                              ? setOpenMobile(
                                  openMobile === item.name ? null : item.name
                                )
                              : setIsOpen(false)
                          }
                        >
                          <span>{item.name}</span>
                          {hasChildren && (
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                openMobile === item.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>
                        {hasChildren && openMobile === item.name && (
                          <div className="pl-4 space-y-2">
                            {item.children!.map((c, i) => (
                              <Link
                                key={i}
                                href={c.navigate}
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="py-2 text-neutral-600 hover:text-neutral-800">
                                  {c.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="pt-6 space-y-4">
                    <a
                      href="tel:+14094431748"
                      className="flex items-center space-x-3 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-light">+1 (409) 443-1748</span>
                    </a>
                    <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-light py-4">
                      Reserve Now
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
