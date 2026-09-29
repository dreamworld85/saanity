"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Send,
  Sparkles,
  Database,
  Mail,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Code2,
} from "lucide-react";
import { StyledBadge } from "@/components/StyledBadge";
import { MotionCard } from "@/components/MotionCard";

export default function Home() {
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleTestEmail = async () => {
    setIsSending(true);
    setEmailStatus(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Next.js 16 Developer",
          to: "tester@example.com",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEmailStatus(data.simulated ? "Simulated dispatch via React Email!" : "Email sent successfully!");
      } else {
        setEmailStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      setEmailStatus("Failed to trigger email API");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
              N
            </div>
            <span className="font-bold tracking-tight text-white">Next.js 16 App</span>
          </div>

          <div className="flex items-center gap-3">
            <StyledBadge $variant="primary">React 19</StyledBadge>
            <StyledBadge $variant="accent">styled-components</StyledBadge>
            <StyledBadge $variant="success">Sanity 5.26</StyledBadge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Next.js 16 (App Router) + Full Stack Scaffold
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Full-Stack Modern Architecture
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Pre-configured with React 19, Tailwind CSS 4, Framer Motion animations,
            styled-components SSR, Sanity CMS 5.26, and transactional React Email dispatch.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <MotionCard
            category="Framework"
            title="Next.js 16 + React 19"
            description="App Router architecture with server components, React 19 actions, compiler optimizations, and Node 22+ engine validation."
            icon={<Cpu className="w-5 h-5" />}
            delay={0.1}
          />
          <MotionCard
            category="Styling System"
            title="Tailwind CSS 4 + styled-components"
            description="Tailwind v4 CSS-first design combined with styled-components SSR registry to eliminate hydration style jumps."
            icon={<Palette className="w-5 h-5" />}
            delay={0.2}
          />
          <MotionCard
            category="Content Management"
            title="Sanity 5.26 Studio"
            description="Embedded Sanity Studio mounted at /studio with next-sanity client queries, typed schemas, and image builder."
            icon={<Database className="w-5 h-5" />}
            delay={0.3}
          />
          <MotionCard
            category="Interactive UI"
            title="Framer Motion"
            description="Fluid layout transitions, gesture controls, and responsive micro-interactions natively in React 19."
            icon={<Layers className="w-5 h-5" />}
            delay={0.4}
          />
          <MotionCard
            category="Communication"
            title="Nodemailer + React Email"
            description="Type-safe HTML email templates built with React Email components, rendered and dispatched via Nodemailer API route."
            icon={<Mail className="w-5 h-5" />}
            delay={0.5}
          />
          <MotionCard
            category="Developer Tooling"
            title="TypeScript 5 & npm"
            description="Strict TypeScript 5 type-checking, path aliases (@/*), and clean npm workflow configured out of the box."
            icon={<Code2 className="w-5 h-5" />}
            delay={0.6}
          />
        </div>

        {/* Interactive Action Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sanity Studio Access Card */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  CMS Integration
                </span>
                <StyledBadge $variant="success">Embedded Studio</StyledBadge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sanity Studio 5.26</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                The CMS Studio is embedded directly into your Next.js application at{" "}
                <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded">/studio</code>.
                Launch the studio to manage posts and content models.
              </p>
            </div>
            <Link
              href="/studio"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-cyan-600/20"
            >
              Open Sanity Studio <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Email Dispatch Tester */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                  Email Service
                </span>
                <StyledBadge $variant="accent">React Email + Nodemailer</StyledBadge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transactional Email Route</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Test the <code className="text-pink-300 bg-slate-800 px-1.5 py-0.5 rounded">/api/send-email</code>{" "}
                endpoint which compiles a JSX email template with React Email and dispatches via Nodemailer.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTestEmail}
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSending ? "Dispatching..." : "Send Test Email"}
                </button>
                <Link
                  href="/api/send-email"
                  target="_blank"
                  className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  Preview HTML in browser <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              {emailStatus && (
                <div className="text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 p-3 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{emailStatus}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion, styled-components & Sanity 5.26</p>
      </footer>
    </main>
  );
}
