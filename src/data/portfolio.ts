import type { IconType } from "react-icons";
import { FaDatabase, FaServer } from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPinia,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type JourneyStop = {
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type CaseStudy = {
  title: string;
  text: string;
};

export type Technology = {
  name: string;
  icon: IconType;
};

export const journeyStops: JourneyStop[] = [
  {
    title: "Higher Degree in Web Application Development",
    label: "Education",
    description:
      "Built the technical foundation for software development, web applications, databases, backend programming and frontend fundamentals.",
    image: "/images/web_development.png",
    imageAlt: "Web development illustration",
  },
  {
    title: "Internship at Aircury",
    label: "First professional experience",
    description:
      "Applied development practices in a real professional environment, collaborating with a team and gaining practical experience beyond academic projects.",
    image: "/images/aircury_logo.png",
    imageAlt: "Aircury logo",
  },
  {
    title: "Full Stack Developer at Palisis · TourCMS",
    label: "Travel-tech SaaS",
    description:
      "Building production systems for bookings, availability, pricing, distribution, channel integrations and operational workflows in travel-tech.",
    image: "/images/tourcms_logo_2.png",
    imageAlt: "TourCMS logo",
  },
  {
    title: "Specialization Course in AI & Big Data",
    label: "Current learning path",
    description:
      "Expanding my technical perspective with machine learning, data analysis, dashboards, AI concepts and data-driven systems.",
    image: "/images/ai-big-data.png",
    imageAlt: "AI and Big Data illustration",
  },
];

export const strengths: string[] = [
  "Backend APIs & integrations",
  "Asynchronous workflows & queues",
  "Reliability & observability",
  "Clean architecture & testing",
  "Travel-tech domain knowledge",
  "Databases, caching & performance",
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Booking & distribution integrations",
    text: "Experience building and maintaining backend flows around bookings, availability, pricing and third-party integrations, where consistency, reliability and operational stability are critical.",
  },
  {
    title: "Asynchronous batch operations",
    text: "Designed backend-oriented flows for long-running operations using queued processing, persisted status, progress feedback and resilient state handling.",
  },
  {
    title: "OTA integrations in travel-tech",
    text: "Worked on backend flows for integrating with online travel agencies and distribution partners, involving availability, pricing, bookings, API communication, data consistency, error handling and operational reliability.",
  },
  {
    title: "Observability & API logging",
    text: "Improved debugging and production visibility through structured logs, correlation IDs, error tracking and more consistent operational diagnostics.",
  },
];

export const technologies: Technology[] = [
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "REST APIs", icon: FaServer },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Valkey", icon: FaDatabase },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Pinia", icon: SiPinia },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git", icon: SiGit },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Bootstrap", icon: SiBootstrap },
];
