import {
  DraftingCompass,
  HardHat,
  Layers3,
  Wrench,
  MapPinned,
} from "lucide-react"
import type { FAQItem, InsightItem, NavigationItem, ProcessStep, Service } from "@/types"

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Turnkey", href: "/turnkey-construction" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
]

export const services: Service[] = [
  {
    number: "01",
    title: "Design & engineering",
    description: "Architectural planning and structural thinking shaped around the site, brief, and way a home needs to work.",
    details: ["Architectural planning", "Structural design coordination", "Buildable, coordinated drawings"],
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Construction",
    description: "Residential construction with experienced oversight across the structure, trades, and on-site sequence.",
    details: ["Residential construction", "Structural and masonry work", "Site coordination"],
    icon: HardHat,
  },
  {
    number: "03",
    title: "Turnkey execution",
    description: "A joined-up route from groundwork through finishing, with the agreed scope shaped to each project.",
    details: ["Foundation and structure", "MEP coordination", "Finishes and interiors where agreed"],
    icon: Layers3,
  },
  {
    number: "04",
    title: "Renovation & retrofitting",
    description: "Thoughtful improvements to existing homes, from repair priorities to room-by-room upgrades.",
    details: ["Renovation planning", "Retrofitting coordination", "Interior updates"],
    icon: Wrench,
  },
  {
    number: "05",
    title: "Consultancy & development",
    description: "Practical guidance for people evaluating a site, a building, or the next step in a property project.",
    details: ["Project and site consultation", "Valuation support", "Land development guidance"],
    icon: MapPinned,
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Start with the brief",
    description: "We learn what you want to build, where the site is, and what matters most to your household.",
  },
  {
    number: "02",
    title: "Review the site and scope",
    description: "The site context, existing conditions, and project scope are discussed before a suitable approach is outlined.",
  },
  {
    number: "03",
    title: "Coordinate the design",
    description: "Planning and structural considerations are brought together so the design can move toward execution.",
  },
  {
    number: "04",
    title: "Build with clear stages",
    description: "Work is coordinated on site through the agreed construction sequence, with decisions surfaced as they arise.",
  },
  {
    number: "05",
    title: "Review and hand over",
    description: "Finishing and close-out are reviewed against the agreed scope before the next steps are discussed.",
  },
]

export const faqs: FAQItem[] = [
  {
    question: "Which areas do you serve?",
    answer: "HITECH is based in Amritsar and works across Amritsar district, with projects elsewhere in Punjab considered by scope.",
  },
  {
    question: "Can I ask about only one part of my project?",
    answer: "Yes. Start with the service you need, whether that is engineering, construction, renovation, or project advice.",
  },
  {
    question: "What does turnkey construction include?",
    answer: "Turnkey scope is agreed for each project. It may bring together foundation, structure, MEP coordination, finishing, and interiors where those items are included in the brief.",
  },
  {
    question: "How do I get started?",
    answer: "Share a few details about the site, location, and work you have in mind. The team can then discuss the right next conversation.",
  },
]

export const insights: InsightItem[] = [
  {
    id: "start-with-the-site",
    category: "Planning",
    title: "Start a home project with the site",
    summary: "The site and your brief set the context for decisions that follow.",
    points: [
      "Collect the information you already have about the plot and existing conditions.",
      "Write down the household needs that should guide the plan.",
      "Discuss structural and service constraints before the design is fixed.",
    ],
  },
  {
    id: "structure-and-layout",
    category: "Engineering",
    title: "Keep structure and layout in conversation",
    summary: "Coordinating structural intent with the plan helps keep the project buildable.",
    points: [
      "Bring engineering review into the planning stage.",
      "Resolve openings, circulation, and service routes with the structure in mind.",
      "Confirm drawing revisions with the people coordinating the work.",
    ],
  },
  {
    id: "understand-the-stages",
    category: "Construction",
    title: "Know what changes from one stage to the next",
    summary: "A clear sequence helps everyone understand what is happening on site.",
    points: [
      "Ask what work is planned for the current stage.",
      "Clarify which decisions need to be made before the next trade begins.",
      "Keep agreed changes visible to the people carrying them out.",
    ],
  },
  {
    id: "renovation-first-conversation",
    category: "Renovation",
    title: "Prepare for a renovation conversation",
    summary: "Existing conditions are an important part of deciding what to change.",
    points: [
      "List the problems you want to solve and the spaces involved.",
      "Gather photos or drawings that explain the current condition.",
      "Discuss how the renovation should fit around the existing structure.",
    ],
  },
]
