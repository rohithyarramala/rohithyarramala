"use client";
import React, { useRef } from "react";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const COLORS = {
  accent: "#FFEFE3",
  gold: "#FFD54A",
  project: "#FFF7D6",
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Timeline() {
  return (
    <>
      <TimelineSection
        title="Education"
        color={COLORS.gold}
      >
        <TimelineItem
          side="right"
          icon="🎓"
          title="Diviseema Polytechnic College"
          subtitle="Diploma in Computer Science"
          period="2020 — 2023"
        />
        <TimelineItem
          side="left"
          icon="🎓"
          title="Bapatla Engineering College"
          subtitle="B.Tech in Computer Science"
          period="2023 — 2026"
        />
      </TimelineSection>

      <TimelineSection title="Professional" color={COLORS.accent} 
        gradient="from-primary via-accent to-primary">
        <TimelineItem
          side="right"
          icon="💼"
          title="Freelancing & AI Projects"
          subtitle="Full Stack Developer | AI Engineer"
          period="2022 — Present"
          skills={["React", "Node.js", "LLMs", "Automation"]}
        />
        <TimelineItem
          side="left"
          icon="💻"
          title="Full Stack Developer Intern"
          subtitle="Aone / Mindstein Software"
          period="2022"
          skills={["Laravel", "JavaScript", "APIs"]}
        />
        <TimelineItem
          side="right"
          icon="🎯"
          title="Teaching Intern"
          subtitle="No Help Too Big | Community Instructor"
          period="2022"
          skills={["Mentorship", "Education", "Communication"]}
        />
      </TimelineSection>

      <TimelineSection title="Projects" color={COLORS.project}>
        <TimelineItem
          side="right"
          icon="⚙️"
          title="Krupa Market & Krupa Track"
          subtitle="AI-powered e-commerce and logistics platform leveraging ML for predictive insights and optimization."
          skills={["Next.js", "NestJS", "AI", "ML", "PostgreSQL"]}
        />
        <TimelineItem
          side="left"
          icon="🧠"
          title="AI Evaluator & Question Generator (GeniusCampus)"
          subtitle="AI-driven tool for automated evaluation and intelligent question generation."
          skills={["Python", "AI", "LLMs", "NLP"]}
        />
        <TimelineItem
          side="right"
          icon="🌐"
          title="AsyncAPI Open Source Contribution"
          subtitle="Enhanced open-source API tooling for developer ecosystems."
          skills={["TypeScript", "AsyncAPI", "API Design"]}
        />
        <TimelineItem
          side="left"
          icon="⚡"
          title="ContentFlow AI Automation"
          subtitle="Automated content pipeline using n8n, Together AI, and OpenRouter."
          skills={["n8n", "Automation", "LLMs", "Integration"]}
        />
      </TimelineSection>
    </>
  );
}

/* ============================ SECTION ============================ */
function TimelineSection({
  title,
  color,
  children,
  gradient,

}: {
  title: string;
  color: string;
  children: React.ReactNode;
  gradient?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 10%", "end 90%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${
        gradient ? `bg-gradient-to-b ${gradient}` : "bg-transparent"
      } text-white py-20 px-6 overflow-hidden`}
    >
      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-white/10 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full origin-top shadow-[0_0_20px]"
          style={{
            scaleY: lineScale,
            background: `linear-gradient(to bottom, ${color}, transparent)`,
            boxShadow: `0 0 20px ${color}`,
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 tracking-wide uppercase text-left">
          <span style={{ color }}>{title}</span>
        </h2>
        <ol className="relative space-y-24">{children}</ol>
      </div>
    </section>
  );
}

/* ============================ TIMELINE ITEM ============================ */
function TimelineItem({
  side,
  icon,
  title,
  subtitle,
  period,
  skills,
}: {
  side: "left" | "right";
  icon: string;
  title: string;
  subtitle: string;
  period?: string;
  skills?: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50, 0], [10, -10, 0]), {
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50, 0], [-10, 10, 0]), {
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.li
      className={`relative flex flex-col md:flex-row ${
        side === "left" ? "md:justify-start" : "md:justify-end"
      }`}
      variants={itemVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Marker */}
      <div
        className={`hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-[4px] items-center justify-center`}
        style={{
          borderColor: COLORS.accent,
          boxShadow: `0 0 18px ${COLORS.accent}`,
        }}
      >
        <span className="text-lg">{icon}</span>
      </div>

      {/* 3D Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`md:w-[48%] ${
          side === "left" ? "md:mr-auto text-left" : "md:ml-auto text-right"
        } bg-[#FFEFE3]/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#FFEFE3]/20 hover:scale-[1.03] transition-transform`}
      >
        <h3 className="text-xl font-semibold text-[#FFEFE3] font-heading">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">{subtitle}</p>
        {period && (
          <time className="text-xs text-gray-400 mt-1 block">{period}</time>
        )}
        {skills && (
          <div
            className={`mt-3 flex flex-wrap gap-2 ${
              side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        )}
      </motion.div>
    </motion.li>
  );
}

/* ============================ BADGE ============================ */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-[#FFEFE3]/10 text-[#FFEFE3] px-2 py-1 rounded-md border border-[#FFEFE3]/20">
      {children}
    </span>
  );
}

export default Timeline;
