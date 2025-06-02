"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const navItems = ["Home", "Fleet", "Services", "About", "Contact"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
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

      // Logo animation
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
          {/* Enhanced Logo */}
          <div className="nav-item flex items-center space-x-3">
            <div className="logo-icon w-10 h-10 bg-neutral-900 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-2xl font-light tracking-[0.2em] text-neutral-900">
                ELITE
              </h1>
              <p className="text-xs font-light text-neutral-500 tracking-widest uppercase">
                Luxury Transport
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="nav-item text-sm cursor-pointer font-light text-neutral-700 hover:text-neutral-900 transition-all duration-300 relative group tracking-wide py-2"
                style={{ animationDelay: `${3.9 + index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6 nav-item">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light">+1 (555) 123-4567</span>
            </a>
            <div className="w-px h-6 bg-neutral-300"></div>
            <Button className="bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-white text-sm font-light px-8 py-3 h-auto rounded-none border-0 transition-all duration-300 tracking-wide">
              Reserve Now
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="nav-item text-neutral-900 hover:bg-neutral-100 rounded-none"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-white border-neutral-200 rounded-none">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
                      </div>
                      <div>
                        <h2 className="text-xl font-light tracking-[0.2em] text-neutral-900">
                          ELITE
                        </h2>
                        <p className="text-xs font-light text-neutral-500 tracking-widest uppercase">
                          Luxury Transport
                        </p>
                      </div>
                    </div>
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-neutral-900 rounded-none"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <div className="space-y-8">
                    {navItems.map((item, _i) => (
                      <a
                        key={_i}
                        className="block text-neutral-700 hover:text-neutral-900 transition-colors duration-300 py-3 text-lg font-light tracking-wide border-b border-neutral-100 last:border-b-0"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                    <div className="pt-6 space-y-4">
                      <a
                        href="tel:+15551234567"
                        className="flex items-center space-x-3 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="font-light">+1 (555) 123-4567</span>
                      </a>
                      <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-light rounded-none py-4">
                        Reserve Now
                      </Button>
                    </div>
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
