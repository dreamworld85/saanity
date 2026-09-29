"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionCardProps {
  title: string;
  category: string;
  description: string;
  badgeVariant?: "primary" | "secondary" | "accent" | "success";
  icon?: React.ReactNode;
  delay?: number;
}

export function MotionCard({
  title,
  category,
  description,
  icon,
  delay = 0,
}: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl hover:border-slate-700 hover:shadow-cyan-500/5 transition-all group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            {category}
          </span>
          {icon && <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">{icon}</div>}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
        <span>Verified Architecture</span>
        <span className="text-emerald-400 font-medium">Ready</span>
      </div>
    </motion.div>
  );
}
