"use client";

import { useState } from "react";
import {
  FiMail,
  FiMessageCircle,
  FiCalendar,
  FiLinkedin,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { siteConfig } from "@/data/site";

function FloatingInput({
  id,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <Input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer pt-6"
        {...props}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          focused || value
            ? "top-2 text-[10px] text-accent"
            : "top-1/2 -translate-y-1/2 text-sm text-white/40"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [available] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact"
            title="Let's Build Something Extraordinary"
            description="Have a project in mind? I'd love to hear about it. Let's create something that drives real impact."
          />

          <div className="mb-12 flex flex-col items-center gap-4">
            <ProfilePhoto size="md" />
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${available ? "bg-emerald-400" : "bg-red-500"}`}
              />
              <span className="text-sm text-white/60">
                {available ? "Available for new projects" : "Currently at capacity"}
              </span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <form
              onSubmit={handleSubmit}
              className="glass glow-border space-y-6 rounded-2xl p-8"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="font-display text-2xl font-bold text-accent">
                    Message Received!
                  </p>
                  <p className="mt-2 text-white/60">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <FloatingInput id="name" label="Your Name" required />
                  <FloatingInput id="email" label="Email Address" type="email" required />
                  <FloatingInput id="subject" label="Project Type" />
                  <div className="relative">
                    <Textarea id="message" placeholder="Tell me about your vision..." required rows={5} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </>
              )}
            </form>

            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FiMail size={22} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="font-medium text-white">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FiMessageCircle size={22} />
                </div>
                <div>
                  <p className="text-xs text-white/40">WhatsApp</p>
                  <p className="font-medium text-white">Chat on WhatsApp</p>
                </div>
              </a>

              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FiCalendar size={22} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Calendly</p>
                  <p className="font-medium text-white">Book a Discovery Call</p>
                </div>
              </a>

              <div className="flex gap-3 pt-4">
                {[
                  { icon: FiLinkedin, href: siteConfig.social.linkedin },
                  { icon: FiGithub, href: siteConfig.social.github },
                  { icon: FiTwitter, href: siteConfig.social.twitter },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/50 hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
