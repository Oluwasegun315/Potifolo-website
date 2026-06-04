"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const projectTypes = [
  "Website",
  "E-commerce Store",
  "Mobile App UI",
  "Funnel / Landing Pages",
  "Automation Setup",
  "Full-Stack Product",
  "Other",
];

const budgets = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Let's discuss"];
const timelines = ["ASAP", "2–4 weeks", "1–2 months", "3+ months", "Flexible"];

export function ProjectRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Request — ${form.projectType || "New Project"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nProject Type: ${form.projectType}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nDescription:\n${form.description}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="glow-border mx-auto max-w-2xl">
        <CardContent className="p-10 text-center">
          <p className="font-display text-xl font-semibold text-white">Request ready to send</p>
          <p className="mt-2 text-white/55">
            Your email app should open with your project details. I&apos;ll reply within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glow-border mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
        <CardDescription>Tell me about your project and requirements</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/60">
                Full Name *
              </label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/60">
                Email *
              </label>
              <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm text-white/60">
                Company
              </label>
              <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Optional" />
            </div>
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm text-white/60">
                Project Type *
              </label>
              <select
                id="projectType"
                required
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white"
              >
                <option value="" className="bg-[#12101c]">
                  Select type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#12101c]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm text-white/60">
                Budget *
              </label>
              <select
                id="budget"
                required
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white"
              >
                <option value="" className="bg-[#12101c]">
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b} className="bg-[#12101c]">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm text-white/60">
                Timeline *
              </label>
              <select
                id="timeline"
                required
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white"
              >
                <option value="" className="bg-[#12101c]">
                  Select timeline
                </option>
                {timelines.map((t) => (
                  <option key={t} value={t} className="bg-[#12101c]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm text-white/60">
              Project Description *
            </label>
            <Textarea
              id="description"
              required
              rows={5}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Goals, features, references, and anything else I should know..."
            />
          </div>
          <Button type="submit" className="btn-premium w-full">
            Submit Project Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
