"use client";

import gsap from "gsap";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Contact form animation
      gsap.fromTo(
        ".contact-form",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact info animation
      gsap.fromTo(
        ".contact-info",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger animation for contact details
      gsap.fromTo(
        ".contact-info .flex",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animation for buttons
      const buttons = document.querySelectorAll(".contact-form button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Fade-in animation for labels and inputs
      gsap.fromTo(
        ".contact-form .space-y-2",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="py-32 bg-neutral-50 contact-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight">
                Get in Touch
              </h2>
              <div className="w-16 h-px bg-neutral-900 mb-8"></div>
              <p className="text-xl font-light text-neutral-600 leading-relaxed">
                Experience personalized service from our dedicated concierge
                team
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none h-12 font-light"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-light text-neutral-700 uppercase tracking-wider"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white border-neutral-300 hover:border-neutral-400 text-neutral-900 rounded-none font-light resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-base font-light rounded-none border-0 transition-all duration-300 cursor-pointer group"
              >
                Send Message
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info lg:pl-12">
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-light text-neutral-900 mb-8">
                  Contact Information
                </h3>
                <p className="text-lg font-light text-neutral-600 leading-relaxed mb-12">
                  Our concierge team is available around the clock to assist
                  with your luxury transportation needs.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-neutral-900 mb-2">
                      Phone
                    </h4>
                    <p className="text-neutral-600 font-light">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-neutral-500 font-light">
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-neutral-900 mb-2">
                      Email
                    </h4>
                    <p className="text-neutral-600 font-light">
                      concierge@elite.com
                    </p>
                    <p className="text-sm text-neutral-500 font-light">
                      Response within 1 hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-neutral-900 mb-2">
                      Address
                    </h4>
                    <p className="text-neutral-600 font-light">
                      123 Luxury Avenue
                    </p>
                    <p className="text-neutral-600 font-light">
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-12">
                <h4 className="text-lg font-light text-neutral-900 mb-6">
                  Business Hours
                </h4>
                <div className="space-y-3 text-neutral-600 font-light">
                  <div className="flex justify-between">
                    <span>Concierge Service</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Office Hours</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Showroom</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
