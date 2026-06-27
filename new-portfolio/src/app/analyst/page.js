import Link from "next/link";
import {
  FaChartLine,
  FaDatabase,
  FaFileAlt,
  FaPython,
  FaSearchDollar,
  FaSearch,
} from "react-icons/fa";

export const metadata = {
  title: "Analyst | Rohan Sharma Portfolio",
  description:
    "Explore Rohan Sharma's analyst profile across business intelligence, data storytelling, dashboards, automation, and decision-focused analytics.",
  keywords: [
    "Rohan Sharma",
    "Analyst",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "Python",
    "SQL",
    "Portfolio",
  ],
  openGraph: {
    title: "Analyst | Rohan Sharma Portfolio",
    description:
      "Decision-focused analytics, business intelligence, dashboards, and data storytelling by Rohan Sharma.",
    url: "https://rohansharma.me/analyst",
    siteName: "Rohan Sharma Portfolio",
    images: [
      {
        url: "/cityscape.jpg",
        width: 1200,
        height: 630,
        alt: "Rohan Sharma Analyst Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyst | Rohan Sharma Portfolio",
    description:
      "Business intelligence, dashboards, automation, and data storytelling by Rohan Sharma.",
    images: ["/cityscape.jpg"],
  },
};

const focusAreas = [
  {
    title: "Business Intelligence",
    description:
      "Turning raw data into executive-ready dashboards, reports, and decision views.",
    icon: FaChartLine,
  },
  {
    title: "Data Engineering",
    description:
      "Cleaning, shaping, and preparing data pipelines for reliable analysis.",
    icon: FaDatabase,
  },
  {
    title: "Insight Storytelling",
    description:
      "Explaining trends, risks, and opportunities with clear narratives and visuals.",
    icon: FaFileAlt,
  },
  {
    title: "Automation",
    description:
      "Building repeatable Python workflows that reduce manual reporting effort.",
    icon: FaPython,
  },
];

const analystCases = [
  {
    title: "EV Charging Network Expansion",
    domain: "STRATEGY & MARKET ANALYTICS",
    result:
      "Developed a market expansion strategy using location analysis, stakeholder evaluation, and financial prioritization to identify high-potential charging opportunities.",
    stack: ["Market Analysis", "Strategic Planning", "ROI Evaluation", "Stakeholder Analysis", "Business Strategy"],
    reportUrl: "https://app.notion.com/p/Electric-Vehicle-Charging-Network-Expansion-38934683adae8089abb7c7aac4aea3d0?source=copy_link",
  },
  {
    title: "Peak-Hour Delivery Optimization",
    domain: "OPERATIONS ANALYTICS",
    result:
      "Identified operational bottlenecks across the food delivery lifecycle and proposed data-driven dispatch strategies to improve delivery efficiency and customer experience.",
    stack: ["Process Optimization", "KPI Framework", "Gap Analysis", "Critical Thinking", "Problem Solving"],
    reportUrl: "https://app.notion.com/p/Reducing-Food-Delivery-Delays-During-Peak-Hours-38834683adae8025bad1fb973319fc1b?source=copy_link",
  },
  {
    title: "UPI Reliability Monitoring Platform",
    domain: "BUSINESS ANALYTICS",
    result:
      "Analyzed payment failure scenarios and designed an operational intelligence framework to improve transaction visibility, incident response, and service reliability.",
    stack: ["Process Analysis", "Root Cause Analysis", "Stakeholder Mapping", "Requirements Gathering", "Decision Making"],
    reportUrl: "https://app.notion.com/p/UPI-Reliability-Monitoring-Failure-Intelligence-Platform-38234683adae8061aad8d5b988edb042?source=copy_link",
  },
];

const toolGroups = [
  {
    title: "Analysis",
    items: ["Python", "SQL", "Excel", "Statistics"],
  },
  {
    title: "Visualization",
    items: ["Power BI", "Plotly", "Matplotlib", "Seaborn"],
  },
  {
    title: "Delivery",
    items: ["Dashboards", "Reports", "Automation", "Data Stories"],
  },
];

export default function AnalystPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/cityscape.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>

            <h1 className="font-orbitron text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Every Data tells a story.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              I connect data engineering, visualization, and storytelling to
              help teams understand what changed, why it happened, and what to
              do next.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#case-study-lens"
                className="inline-flex items-center justify-center rounded-full border border-[#5eead4]/55 bg-[linear-gradient(135deg,rgba(94,234,212,0.2),rgba(130,108,99,0.18))] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#5eead4] hover:bg-[linear-gradient(135deg,rgba(94,234,212,0.3),rgba(130,108,99,0.24))] hover:shadow-[0_0_28px_rgba(94,234,212,0.24)]"
              >
                View Project Evidence
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-orbitron text-3xl font-bold text-white sm:text-4xl">
              Analyst Strengths
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Powers given more by curiosity and less by academics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-lg border border-[#826c63]/25 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#5eead4]/45 hover:bg-[#151515]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#826c63]/20 text-[#5eead4]">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="case-study-lens" className="border-y border-white/10 bg-[#080808] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-orbitron text-3xl font-bold text-white sm:text-4xl">
                Case Study Lens
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                A focused view of how my project work translates into analyst
                outcomes across impact, operations, and financial decisioning.
              </p>
            </div>
            <FaSearch className="hidden text-5xl text-[#826c63] lg:block" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {analystCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-black p-6 transition hover:border-[#826c63]/60 hover:bg-[#101010]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5eead4]">
                  {item.domain}
                </div>
                <h3 className="mt-4 font-orbitron text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 min-h-28 text-base leading-7 text-gray-300">
                  {item.result}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#826c63]/35 bg-[#826c63]/10 px-3 py-1 text-xs font-semibold text-[#e2d5d1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <Link
                    href={item.reportUrl}
                    className="inline-flex items-center justify-center rounded-full border border-[#5eead4]/50 bg-[#5eead4]/15 px-4 py-2 text-sm font-semibold text-[#dffcf8] transition hover:border-[#5eead4] hover:bg-[#5eead4]/25 hover:text-white"
                  >
                    Read Full Report
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="font-orbitron text-3xl font-bold text-white sm:text-4xl">
              Toolkit
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              A compact stack for moving from messy data to clear business
              context quickly.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {toolGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-orbitron text-lg font-bold text-[#e2d5d1]">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-black px-3 py-2 text-sm text-gray-300 ring-1 ring-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
