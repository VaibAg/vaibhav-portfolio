// app/page.tsx
"use client";

import React from "react";
import {
  Terminal,
  Cpu,
  Layers,
  TrendingDown,
  Zap,
  Server,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapPin,
  Download,
  Users,
  CheckCircle2,
  GitBranch,
} from "lucide-react";

const clean = (text: string) =>
  text.replace(/\s*\[(cite\vert{}source):\s*[\d,\s]+\]/gi, "");

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/25 via-transparent to-transparent" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090A0F]/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold tracking-tight text-white">
              {clean("Vaibhav Agarwal")}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
              ~8 YoE
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#impact" className="hover:text-white transition">
              Architecture
            </a>
            <a href="#case-study" className="hover:text-white transition">
              System Deep-Dive
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#education" className="hover:text-white transition">
              Research
            </a>
          </nav>
          <div className="flex items-center gap-3">
                <a
                  href="/Vaibhav_Agarwal_Resume.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  Resume (PDF)
                </a>
            <a
              href="mailto:vaibh.agarwal06@gmail.com"
              className="text-xs font-medium px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24 relative">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {clean(
              "Lead / Principal Software Engineer • Streaming Data, CDC & Distributed Systems"
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Architecting high-throughput{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
              streaming, CDC & analytical platforms
            </span>{" "}
            at enterprise scale.
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            {clean(
              "Lead Software Engineer and Distributed Systems Architect with nearly 8 years of experience across LeadSquared and Hewlett Packard Enterprise (HPE). Core architect and major code contributor (3,680+ commits across a 29,000+ commit Go monorepo) for a multi-tenant cloud platform serving ~2,000 enterprise customers and processing ~2M+ daily Kafka and Debezium CDC streaming events."
            )}
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-indigo-400" />
              {clean("Bangalore, India")}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-indigo-400" />
              {clean("vaibh.agarwal06@gmail.com")}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-indigo-400" />
              {clean("+91 8447552014")}
            </span>
          </div>
        </section>

        {/* Key Impact Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              metric: clean("~100×"),
              label: clean("Ingestion Lag Reduction"),
              detail: clean(
                "Windowed batch accumulation & in-memory deduplication for ClickHouse writes"
              ),
              icon: Zap,
              color: "text-amber-400",
            },
            {
              metric: clean("40%"),
              label: clean("Cloud Compute Savings"),
              detail: clean(
                "Event-driven Kubernetes & KEDA consumer autoscaling with scale-to-zero"
              ),
              icon: TrendingDown,
              color: "text-emerald-400",
            },
            {
              metric: clean("65% / 70%"),
              label: clean("Memory & Storage Saved"),
              detail: clean(
                "Production memory leak elimination (65%) & storage schema optimization (70%)"
              ),
              icon: Server,
              color: "text-sky-400",
            },
            {
              metric: clean("~2,000"),
              label: clean("Enterprise Tenants Served"),
              detail: clean(
                "~2M daily Kafka & CDC events processed across ~1,000 active streaming tenants"
              ),
              icon: Users,
              color: "text-indigo-400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white tracking-tight">
                  {item.metric}
                </span>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-sm font-medium text-slate-200">
                {item.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </section>

        {/* Core Architectural Pillars */}
        <section id="impact" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Cpu className="w-6 h-6 text-indigo-400" />
              Core Architectural Transformations
            </h2>
            <p className="text-sm text-slate-400">
              {clean(
                "Platform-wide engineering initiatives built for high availability, strict data consistency, and cloud cost efficiency."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    High-Throughput Streaming & CDC
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {clean("~100× Lag Reduction")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {clean(
                    "Windowed Kafka-to-ClickHouse Batching Engine"
                  )}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {clean(
                    "Eliminated synchronous single-record database round-trip bottlenecks across ~2M daily Kafka events by designing a windowed batch-accumulation and in-memory entity deduplication layer. Enforced correctness invariants and flush-barrier synchronization across interleaved schema and data streams."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {[
                  "Go",
                  "Debezium CDC",
                  "Apache Kafka",
                  "ClickHouse",
                  "Prometheus",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Cloud FinOps & Infrastructure
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {clean("40% Infra Cost Savings")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {clean(
                    "Event-Driven Kubernetes & KEDA Autoscaling"
                  )}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {clean(
                    "Re-architected Kubernetes consumer orchestration using KEDA and AWS MSK, simplifying cluster topology by replacing a fragile custom master-worker pod model with automated scale-to-zero policies, level-triggered self-healing reconciliation, and per-workload resource tuning."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {["Kubernetes", "KEDA", "AWS MSK", "Secrets Manager"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    Query Compiler Internals
                  </span>
                  <span className="text-xs font-mono text-sky-400">
                    {clean("AST & CTE Engine")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {clean(
                    "Distributed SQL Query Engine & Dynamic Pivot Compiler"
                  )}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {clean(
                    "Scaled and stabilized the analytical query compiler powering cross-dataset Common Table Expression (CTE) joins, multi-dimensional pivot tables, and runtime-parametric filter evaluation across Abstract Syntax Trees (ASTs) with full backward compatibility."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {["ClickHouse SQL", "AST Compilation", "CTEs", "MongoDB"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Resilience & Governance
                  </span>
                  <span className="text-xs font-mono text-purple-400">
                    {clean("5 Partner Squads")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {clean(
                    "Pipeline Fault Isolation & Multi-Team Integration"
                  )}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {clean(
                    "Deprecated fragile delay-queue retries in favor of deterministic infrastructure-vs-payload error classification, Dead-Letter Queue (DLQ) routing, and strict schema safety guardrails. Acted as central technical authority across 5 external data-producing engineering teams."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {[
                  "Fault Isolation",
                  "DLQ Routing",
                  "Canary Rollouts",
                  "System Governance",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture Deep Dive */}
        <section
          id="case-study"
          className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/30 border border-slate-800 space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono uppercase tracking-wider">
              <GitBranch className="w-4 h-4" /> End-to-End Architecture Case Study
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Streaming Write-Path, CDC & Autoscaling Topology
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            {clean(
              "Re-Architecting Multi-Tenant Streaming Ingestion & KEDA Consumer Orchestration"
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                1. Architectural Decisions & Trade-Offs
              </h3>
              <p className="text-slate-400">
                {clean(
                  "Replaced synchronous per-message ClickHouse writes (~80% single-record payloads) with a windowed batch-accumulation and within-window deduplication engine. Because partitions interleave schema mutations and entity data, per-partition worker pool parallelism was explicitly ruled out to prevent stale metadata reads—enforcing 8 formal correctness invariants and flush-barrier semantics instead."
                )}
              </p>
              <p className="text-slate-400">
                {clean(
                  "On the Kubernetes consumer controller, eliminated our custom master/child pod hybrid entirely by leveraging KEDA's native minReplicaCount: 1 baseline alongside partition-lag scaling, reducing cloud compute costs by 40%."
                )}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                2. Retrospective & Next-Gen Evolution
              </h3>
              <p className="text-slate-400">
                {clean(
                  "Challenging Legacy Topologies Early: Rather than initially building KEDA around our legacy master/child pod model before deleting the master layer later, challenging that legacy invariant during the initial design phase would have saved significant iteration cycles."
                )}
              </p>
              <p className="text-slate-400">
                {clean(
                  "Randomized Jitter on Back-Pressure Retries: While segregating transient infrastructure faults from payload errors enabled clean back-pressure retries, deterministic backoff intervals can cause concurrent consumers to retry in lockstep during database recovery. Adding randomized jitter (noise) to infrastructure retry backoffs de-correlates concurrent query spikes and prevents thundering-herd load."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Career Progression Timeline */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-400" />
            Professional Experience
          </h2>

          <div className="space-y-8 border-l-2 border-slate-800 pl-6 ml-2">
            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-[#090A0F]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {clean("Lead Software Engineer — LeadSquared")}
                </h3>
                <span className="text-xs font-mono text-indigo-400">
                  {clean("Apr 2025 – Present")}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {clean(
                  "Core architect for a multi-tenant analytics platform (~2,000 enterprise tenants, ~2M daily Kafka events), delivering a ~100× reduction in ingestion lag, building real-time Debezium binlog CDC pipelines into Kafka, and cutting cloud compute spend by 40%. Central technical lead across 5 partner engineering teams, driving architecture specifications, production readiness, code review governance, and engineering mentorship."
                )}
              </p>
            </div>

            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-[#090A0F]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {clean("Senior Software Engineer — LeadSquared")}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {clean("Apr 2024 – Mar 2025")}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {clean(
                  "Owned the dynamic pivot-table engine and stabilized multi-dataset CTE joins across the ClickHouse SQL compiler. Eliminated critical memory leaks to reduce memory footprint by 65%, optimized configuration storage to cut storage costs by 70%, and resolved complex UTC timezone scheduling defects."
                )}
              </p>
            </div>

            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-[#090A0F]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {clean("Software Engineer — LeadSquared")}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {clean("Dec 2021 – Mar 2024")}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {clean(
                  "Engineered customer-facing analytical REST APIs, incremental user-sync ETL pipelines, audit trails, and automated migration CLI utilities that transitioned production customers from legacy reporting models to a modern multi-tenant architecture."
                )}
              </p>
            </div>

            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-[#090A0F]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {clean(
                    "Software Engineer & Intern — Hewlett Packard Enterprise (HPE)"
                  )}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {clean("Jan 2019 – Dec 2021")}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {clean(
                  "Built Go, Java, Python, GraphQL, Kafka, and Apache Druid microservices for HPE Storage Cloud Data Services, shipping the core REST API framework that migrated the platform from on-premise hardware to the cloud. Won 1st Prize in the HPE Storage Hackathon for an automated L1/L2 support chatbot projected to save $100 per query, and developed ML fault-prediction models and OS provisioning automation for HPE Synergy servers."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Education & Research */}
        <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
              <Award className="w-4 h-4" /> Education & Honors
            </div>
            <h3 className="text-lg font-semibold text-white">
              {clean("PES University, Bangalore (2015 – 2019)")}
            </h3>
            <p className="text-sm text-slate-300">
              {clean(
                "B.Tech in Computer Science & Engineering (Data Science Specialization) — GPA: 9.55 / 10.0"
              )}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {clean(
                "Multi-semester recipient of the CNR Rao Merit Scholarship. Designed and delivered a hands-on Big Data with Python course to undergraduate students as Subject Matter Expert (SME) for PESU I/O."
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-sky-400 text-sm font-medium">
              <BookOpen className="w-4 h-4" /> Published Research — ISRO & IIT Mandi
            </div>
            <h3 className="text-lg font-semibold text-white">
              {clean("ISPRS-GEOGLAM-ISRS Conference Publication")}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {clean(
                "Co-authored and presented 'Deep Learning and Statistical Models for Detection of White Stem Borer Disease in Arabica Coffee' (Feb 2019) in joint research with the Indian Space Research Organisation (RRSC-ISRO) and Coffee Board of India. Previously served as Research Intern at IIT Mandi (2017 & 2018) modeling network failure prediction using LSTM, NARX, and ARIMA architectures."
              )}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}