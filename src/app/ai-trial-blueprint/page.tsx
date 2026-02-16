"use client"

import { useEffect, useMemo, useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle,
  ClipboardList,
  Compass,
  Copy,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  Sparkles,
  Target,
  ArrowUp,
  ListChecks,
} from "lucide-react"

type PlatformTier = "Tier 1" | "Tier 2"

type Platform = {
  name: string
  tier: PlatformTier
  freeOffering: string
  limitations: string
  monetizationAngle: string
}

type Blueprint = {
  title: string
  objective: string
  tools: string
  monetization: string
  workflow: string[]
  prompt: string
}

type PromptLibraryItem = {
  title: string
  purpose: string
  prompt: string
}

const platforms: Platform[] = [
  {
    name: "ChatGPT Free",
    tier: "Tier 1",
    freeOffering: "GPT-5.2 Instant, limited daily messages",
    limitations: "Bandwidth restricted, no advanced reasoning",
    monetizationAngle: "Content creation, client communication",
  },
  {
    name: "Claude Free",
    tier: "Tier 1",
    freeOffering: "Sonnet 4.5, 15-45 msgs/5hrs",
    limitations: "No web search, limited context",
    monetizationAngle: "Long-form writing, coding assistance",
  },
  {
    name: "Gemini Free",
    tier: "Tier 1",
    freeOffering: "Gemini 3 Flash, 30+ messages/day",
    limitations: "Throttles to weaker model after limit",
    monetizationAngle: "Research, Google ecosystem integration",
  },
  {
    name: "Hugging Face",
    tier: "Tier 1",
    freeOffering: "Free Spaces (CPU Basic), ZeroGPU",
    limitations: "Limited compute, queue times",
    monetizationAngle: "Model deployment, demo creation",
  },
  {
    name: "Replicate",
    tier: "Tier 1",
    freeOffering: "Public models only",
    limitations: "Queue-based, no custom deployment",
    monetizationAngle: "AI art generation, quick prototypes",
  },
  {
    name: "Zapier Free",
    tier: "Tier 1",
    freeOffering: "100 tasks/month, 2 active Zaps",
    limitations: "Limited to basic apps",
    monetizationAngle: "Workflow automation for small clients",
  },
  {
    name: "Make Free",
    tier: "Tier 1",
    freeOffering: "1,000 ops/month, 2 active scenarios",
    limitations: "15-min minimum interval",
    monetizationAngle: "Complex multi-step automations",
  },
  {
    name: "n8n Self-Hosted",
    tier: "Tier 1",
    freeOffering: "Unlimited (self-hosted on free VPS)",
    limitations: "Requires technical setup",
    monetizationAngle: "Full automation infrastructure",
  },
  {
    name: "ChatGPT Plus",
    tier: "Tier 2",
    freeOffering: "No trial, cancel anytime",
    limitations: "Paid plan, use one month intensively",
    monetizationAngle: "High-throughput client work",
  },
  {
    name: "Claude Pro",
    tier: "Tier 2",
    freeOffering: "No trial",
    limitations: "Paid plan, focus on high-value tasks",
    monetizationAngle: "Long-form writing reliability",
  },
  {
    name: "Midjourney",
    tier: "Tier 2",
    freeOffering: "25 free generations",
    limitations: "One-time usage",
    monetizationAngle: "Batch visual assets for portfolio",
  },
  {
    name: "Canva Pro",
    tier: "Tier 2",
    freeOffering: "30 days",
    limitations: "Trial access only",
    monetizationAngle: "Mass-produce templates for sale",
  },
  {
    name: "Notion AI",
    tier: "Tier 2",
    freeOffering: "Limited trial",
    limitations: "Varies by account",
    monetizationAngle: "Build knowledge products",
  },
]

const relaySchedule = [
  {
    time: "9-11 AM",
    focus: "ChatGPT Free",
    output: "Content drafting",
  },
  {
    time: "11 AM-1 PM",
    focus: "Claude Free",
    output: "Editing & refinement",
  },
  {
    time: "1-3 PM",
    focus: "Gemini Free",
    output: "Research & data gathering",
  },
  {
    time: "3-5 PM",
    focus: "Grok Free",
    output: "Trend analysis, X integration",
  },
  {
    time: "Evening",
    focus: "ChatGPT resets",
    output: "Final reviews",
  },
]

const blueprints: Blueprint[] = [
  {
    title: "Content Agency Starter Kit",
    objective: "Offer social media management to 5 local businesses within 30 days.",
    tools: "ChatGPT Free + Canva Free + Google Sheets + Make Free",
    monetization: "Charge $300-$500/month per client for 20 posts.",
    workflow: [
      "Generate onboarding questionnaire in ChatGPT.",
      "Automate a content calendar with Sheets + Make.",
      "Collect approvals with Forms and email triggers.",
      "Publish manually or via native schedulers.",
    ],
    prompt: `ROLE: You are a social media strategist for [NICHE] businesses.\nTASK: Create 20 Instagram posts for a [BUSINESS TYPE] targeting [AUDIENCE].\nOUTPUT FORMAT:\n- Post 1: [Hook] + [Body] + [CTA] + [Hashtags]\n- Image description for Canva: [Detailed visual brief]\nTONE: [Professional/Casual/Witty]\nCONSTRAINTS: Avoid [TOPICS], emphasize [SELLING POINTS]`,
  },
  {
    title: "AI Automation Agency (AAA)",
    objective: "Set up AI workflows for small businesses.",
    tools: "n8n Self-Hosted + ChatGPT API (free credits)",
    monetization: "$500-$2,000 setup + $200-$500/month maintenance.",
    workflow: [
      "Lead capture via Typeform → n8n → GPT scoring.",
      "Email autoresponders via Gmail + GPT.",
      "Meeting summaries into Notion or Slack.",
    ],
    prompt: `ROLE: AI automation consultant\nTASK: Write a proposal for automating [CLIENT PROCESS]\nSTRUCTURE:\n1. Current pain points (2-3 specific issues)\n2. Proposed AI solution (describe workflow)\n3. Time savings calculation (hours/week)\n4. Investment: $[PRICE] one-time setup + $[MONTHLY]/month maintenance\n5. ROI projection (break-even in X weeks)\nTONE: Professional, confident, jargon-free`,
  },
  {
    title: "Digital Product Factory",
    objective: "Create and sell 10 digital products in 30 days.",
    tools: "ChatGPT + Canva Free + Gumroad + Google Docs",
    monetization: "Price $7-$27; target 100 sales/month.",
    workflow: [
      "Research niche pain points in Gemini.",
      "Generate content frameworks in ChatGPT.",
      "Design layouts in Canva.",
      "Write sales pages in Claude.",
    ],
    prompt: `Create a [PRODUCT TYPE] about [TOPIC] for [TARGET AUDIENCE].\nSPECIFICATIONS:\n- Length: [X pages/items]\n- Sections: [List required sections]\n- Include: [Checklists/templates/scripts]\n- Tone: [Educational/Action-oriented/Inspirational]\nFORMAT: Markdown with clear headers`,
  },
  {
    title: "Freelance Writing Accelerator",
    objective: "Land 10 freelance writing clients in 14 days.",
    tools: "ChatGPT Free + Claude Free + Grammarly + Google Docs",
    monetization: "$50-$500 per deliverable package.",
    workflow: [
      "Find prospects and weak content via Gemini.",
      "Craft outreach with ChatGPT.",
      "Build samples with Claude.",
      "Deliver with rotation for research/editing.",
    ],
    prompt: `Write a cold email to [PROSPECT NAME], [TITLE] at [COMPANY].\nCONTEXT: I noticed their [SPECIFIC OBSERVATION about their content/marketing].\nOFFER: I'll write a [CONTENT TYPE] about [TOPIC] for free to demonstrate value.\nNEXT STEP: 15-minute call to discuss their content strategy.\nTONE: Helpful, not salesy. Maximum 150 words.`,
  },
  {
    title: "AI Chatbot Deployment Service",
    objective: "Build and sell custom chatbots to local businesses.",
    tools: "Tidio Free + ChatGPT Free + n8n",
    monetization: "$300-$1,000 setup + $50-$150/month maintenance.",
    workflow: [
      "Write conversation flows in ChatGPT.",
      "Deploy bots in Tidio Free tier.",
      "Integrate to CRM/Calendar via n8n.",
      "Create knowledge base in Claude.",
    ],
    prompt: `Create a chatbot conversation flow for a [BUSINESS TYPE].\nSCENARIOS TO COVER:\n1. Pricing inquiries\n2. Hours/location questions\n3. Booking requests\n4. Complaint handling\nPERSONALITY: [Friendly/Professional/Efficient]\nESCALATION: When to transfer to human\nFORMAT: Decision tree with user inputs and bot responses`,
  },
]

const promptLibrary: PromptLibraryItem[] = [
  {
    title: "The Value Extractor",
    purpose: "Identify gaps + upsell opportunities",
    prompt: `Analyze [COMPANY WEBSITE/CONTENT].\nIdentify:\n1. 3 content/marketing gaps\n2. 2 quick wins using AI automation\n3. 1 high-impact project worth $[X]\nOUTPUT: Bullet points with specific examples from their site.`,
  },
  {
    title: "The Service Architect",
    purpose: "Package and price offers",
    prompt: `Design a service package for [SKILL] targeting [AUDIENCE].\nInclude:\n- Service name & description\n- 3-tier pricing (Basic/Pro/Enterprise)\n- Deliverables for each tier\n- Timeline\n- 3 objections + responses\nFORMAT: Professional service proposal`,
  },
  {
    title: "The Content Multiplier",
    purpose: "Repurpose across platforms",
    prompt: `Take this [CONTENT PIECE] and create:\n1. 5 Twitter threads\n2. 3 LinkedIn posts\n3. 1 email newsletter\n4. 2 Instagram carousels\nMaintain core message but adapt tone for each platform.\nORIGINAL CONTENT: [Paste here]`,
  },
  {
    title: "The Automation Mapper",
    purpose: "Design workflows",
    prompt: `Map a workflow for [BUSINESS PROCESS].\nSpecify:\n- Trigger events\n- Decision points\n- AI integration opportunities\n- Human handoff points\n- Tools needed (prefer free tiers)\nOUTPUT: Flowchart description + tool recommendations`,
  },
  {
    title: "The Monetization Calculator",
    purpose: "Model pricing",
    prompt: `Calculate pricing for [SERVICE] based on:\n- Time required: [X] hours\n- AI tools cost: $[Y]/month\n- Desired hourly rate: $[Z]\n- Market rate range: $[A]-[B]\nProvide 3 pricing options with justification for each.`,
  },
]

const actionPlan = [
  {
    title: "Week 1: Foundation & Portfolio",
    items: [
      "Set up free accounts on Tier 1 platforms.",
      "Create 5 sample works using the Rotation Strategy.",
      "Build a simple portfolio site (Google Sites).",
    ],
  },
  {
    title: "Week 2: Client Acquisition",
    items: [
      "Identify 50 prospects using Gemini research.",
      "Craft personalized outreach using master prompts.",
      "Send 50 cold emails/DMs and aim for 5 responses.",
    ],
  },
  {
    title: "Week 3: First Revenue",
    items: [
      "Offer free pilot projects to 3 prospects.",
      "Deliver work using the AI Relay method.",
      "Convert pilots to paid clients (aim for 2).",
    ],
  },
  {
    title: "Week 4: Scale & Systemize",
    items: [
      "Document workflows in Notion Free.",
      "Create templates for repeatable services.",
      "Set up simple automation with Make/Zapier Free.",
      "Plan the first $100 reinvestment.",
    ],
  },
]

const successGuidelines = {
  dos: [
    "Track usage meticulously with a spreadsheet.",
    "Batch tasks to maximize daily quotas.",
    "Save outputs immediately after each session.",
    "Prioritize revenue-generating activities.",
    "Reinvest the first $100 into paid tools.",
  ],
  donts: [
    "Do not violate ToS or automate abuse.",
    "Avoid over-promising — be transparent about AI use.",
    "Always quality-check outputs before delivery.",
    "Respect rate limits to avoid lockouts.",
    "Do not spread too thin before mastering workflows.",
  ],
}

const transitionPlan = [
  {
    title: "First Investment ($20)",
    detail: "ChatGPT Plus for reliability and throughput.",
  },
  {
    title: "Second Investment ($20)",
    detail: "Claude Pro for long-form writing.",
  },
  {
    title: "Third Investment ($9-$20)",
    detail: "Make Core or Zapier Pro for automation scale.",
  },
  {
    title: "Fourth Investment ($30)",
    detail: "n8n Cloud or domain/hosting upgrade.",
  },
]

export const metadata = {
  title: "AI Free Trial Monetization Blueprint",
  description:
    "Interactive deep dive into free AI trial platforms and monetization workflows for zero-budget founders.",
}

export default function AiTrialBlueprintPage() {
  const [search, setSearch] = useState("")
  const [tierFilter, setTierFilter] = useState<PlatformTier | "All">("All")
  const [expandedBlueprint, setExpandedBlueprint] = useState<string | null>(null)
  const [expandedPrompt, setExpandedPrompt] = useState<string | null>(null)
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("blueprints")

  const sections = useMemo(
    () => [
      { id: "blueprints", label: "Blueprints" },
      { id: "prompts", label: "Prompts" },
      { id: "action-plan", label: "Action plan" },
    ] as const,
    []
  )

  const handleCopy = async (text: string, id: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      setToastMessage("Clipboard unavailable. Copy manually.")
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedPrompt(id)
      setToastMessage("Prompt copied to clipboard")
      window.setTimeout(() => setCopiedPrompt(null), 1800)
    } catch (error) {
      setToastMessage("Copy failed. Try again.")
      console.error("Failed to copy prompt", error)
    }
  }

  useEffect(() => {
    if (!toastMessage) {
      return
    }

    const timeout = window.setTimeout(() => setToastMessage(null), 2200)
    return () => window.clearTimeout(timeout)
  }, [toastMessage])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 520)

      const sectionOffsets = sections
        .map((section) => {
          const element = document.getElementById(section.id)
          if (!element) {
            return null
          }

          return {
            id: section.id,
            top: element.getBoundingClientRect().top,
          }
        })
        .filter((value): value is { id: string; top: number } => Boolean(value))

      const current = sectionOffsets
        .filter((section) => section.top <= 140)
        .sort((a, b) => b.top - a.top)[0]

      if (current && current.id !== activeSection) {
        setActiveSection(current.id)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, sections])

  const filteredPlatforms = useMemo(() => {
    const term = search.trim().toLowerCase()

    return platforms.filter((platform) => {
      const matchesTier = tierFilter === "All" || platform.tier === tierFilter
      const matchesSearch =
        term.length === 0 ||
        platform.name.toLowerCase().includes(term) ||
        platform.freeOffering.toLowerCase().includes(term) ||
        platform.monetizationAngle.toLowerCase().includes(term)

      return matchesTier && matchesSearch
    })
  }, [search, tierFilter])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />

      <main className="flex-grow pt-24">
        {toastMessage && (
          <div
            className="fixed right-6 top-24 z-50 animate-in fade-in slide-in-from-top-2 rounded-full border border-white/20 bg-slate-950/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur"
            role="status"
            aria-live="polite"
          >
            {toastMessage}
          </div>
        )}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" aria-hidden />
                Zero-Budget Monetization Blueprint
              </div>
              <h1 className="mt-6 text-4xl font-bold md:text-5xl">
                Maximum Utility from Free AI Trials
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                An interactive deep dive into free AI platforms, trial offerings, and the workflows that
                turn them into revenue. Search the landscape, filter by tier, and copy proven prompts
                instantly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-emerald-500/20 text-emerald-200" variant="secondary">
                  80-100 daily interactions
                </Badge>
                <Badge className="bg-sky-500/20 text-sky-200" variant="secondary">
                  5 monetization blueprints
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-200" variant="secondary">
                  30-day action plan
                </Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="bg-white text-slate-900 hover:bg-slate-100"
                  onClick={() => document.getElementById("blueprints")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Jump to workflow blueprints"
                >
                  Jump to blueprints
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                  onClick={() => document.getElementById("prompts")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Jump to master prompts"
                >
                  View master prompts
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={() => document.getElementById("action-plan")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Jump to the 30-day action plan"
                >
                  See the 30-day plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" aria-hidden />
                  Free Trial Landscape
                </CardTitle>
                <CardDescription>
                  Filter and search across the most generous free tiers and limited trials.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
                    <Input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search platforms, perks, or monetization angles"
                      className="pl-9"
                    />
                  </div>
                  <div className="flex gap-2">
                    {(["All", "Tier 1", "Tier 2"] as const).map((tier) => (
                      <Button
                        key={tier}
                        variant={tierFilter === tier ? "default" : "outline"}
                        onClick={() => setTierFilter(tier)}
                      >
                        {tier}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {filteredPlatforms.map((platform) => (
                    <Card key={platform.name} className="border-muted">
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <CardTitle className="text-lg">{platform.name}</CardTitle>
                          <Badge variant={platform.tier === "Tier 1" ? "secondary" : "outline"}>
                            {platform.tier}
                          </Badge>
                        </div>
                        <CardDescription>{platform.freeOffering}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <ClipboardList className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden />
                          <span className="text-muted-foreground">Limitations:</span>
                          <span>{platform.limitations}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden />
                          <span className="text-muted-foreground">Monetization:</span>
                          <span>{platform.monetizationAngle}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {filteredPlatforms.length === 0 && (
                    <div className="rounded-lg border border-dashed p-6 text-center text-muted-foreground">
                      No platforms match that filter. Try clearing the search.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" aria-hidden />
                  The AI Relay Method
                </CardTitle>
                <CardDescription>
                  Rotate between free tiers to unlock 80-100 high-quality interactions daily.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {relaySchedule.map((slot) => (
                  <div key={slot.time} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{slot.time}</span>
                      <Badge variant="outline">{slot.focus}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{slot.output}</p>
                  </div>
                ))}
                <div className="rounded-lg bg-muted/40 p-4 text-sm">
                  Total daily capacity: <strong>80-100</strong> high-quality AI interactions without paying.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="blueprints" className="bg-muted/30 scroll-mt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" aria-hidden />
              <div>
                <h2 className="text-3xl font-bold">Workflow Automation Blueprints</h2>
                <p className="text-muted-foreground">
                  Copy a blueprint, deliver a pilot, then package it into a paid offer.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {blueprints.map((blueprint) => {
                const isExpanded = expandedBlueprint === blueprint.title
                return (
                  <Card key={blueprint.title}>
                    <CardHeader>
                      <CardTitle>{blueprint.title}</CardTitle>
                      <CardDescription>{blueprint.objective}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-semibold">Tools:</span> {blueprint.tools}
                        </p>
                        <p>
                          <span className="font-semibold">Monetization:</span> {blueprint.monetization}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-semibold">Workflow</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {blueprint.workflow.map((step) => (
                            <li key={step} className="flex items-start gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            setExpandedBlueprint(isExpanded ? null : blueprint.title)
                          }
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "Hide master prompt" : "Show master prompt"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Copy ${blueprint.title} prompt`}
                          onClick={() => handleCopy(blueprint.prompt, `blueprint-${blueprint.title}`)}
                        >
                          {copiedPrompt === `blueprint-${blueprint.title}` ? (
                            <Check className="h-4 w-4 text-emerald-500" aria-hidden />
                          ) : (
                            <Copy className="h-4 w-4" aria-hidden />
                          )}
                        </Button>
                      </div>
                      {isExpanded && (
                        <div className="rounded-lg bg-slate-950 p-4 text-sm text-slate-100 whitespace-pre-wrap">
                          {blueprint.prompt}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <div className="sticky top-20 z-40 border-b border-white/10 bg-white/80 backdrop-blur dark:bg-slate-950/80">
          <nav className="container mx-auto px-4 py-3" aria-label="Section navigation">
            <div className="flex flex-wrap items-center gap-2">
              <div className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground sm:flex">
                <ListChecks className="h-4 w-4" aria-hidden />
                Quick jumps
              </div>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    className="px-3 text-xs sm:text-sm"
                    onClick={() =>
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    aria-current={activeSection === section.id ? "page" : undefined}
                  >
                    {section.label}
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card id="prompts" className="scroll-mt-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden />
                  Master Prompts Library
                </CardTitle>
                <CardDescription>
                  Use these templates to scope client work and accelerate delivery.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {promptLibrary.map((item) => {
                  const isExpanded = expandedPrompt === item.title
                  const copyId = `prompt-${item.title}`
                  const isCopied = copiedPrompt === copyId
                  return (
                    <div key={item.title} className="rounded-lg border p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.purpose}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setExpandedPrompt(isExpanded ? null : item.title)}
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? "Hide" : "View"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Copy ${item.title} prompt`}
                            onClick={() => handleCopy(item.prompt, copyId)}
                          >
                            {isCopied ? (
                              <Check className="h-4 w-4 text-emerald-500" aria-hidden />
                            ) : (
                              <Copy className="h-4 w-4" aria-hidden />
                            )}
                          </Button>
                        </div>
                      </div>
                      {isExpanded && (
                        <div className="mt-3 rounded-lg bg-muted/40 p-4 text-sm whitespace-pre-wrap">
                          {item.prompt}
                        </div>
                      )}
                    </div>
                  )}
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card id="action-plan" className="scroll-mt-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" aria-hidden />
                    30-Day Action Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {actionPlan.map((week) => (
                    <div key={week.title} className="rounded-lg border p-4">
                      <p className="font-semibold">{week.title}</p>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {week.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" aria-hidden />
                    Critical Success Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-2 font-semibold">Do</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {successGuidelines.dos.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold">Don’t</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {successGuidelines.donts.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold">Transition to Paid Tools</h2>
                <p className="mt-2 text-slate-300">
                  Once you hit $500/month, reinvest in tools that unlock consistent delivery.
                </p>
              </div>
              <Button
                className="bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => document.getElementById("action-plan")?.scrollIntoView({ behavior: "smooth" })}
              >
                Build your first $500
              </Button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {transitionPlan.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 p-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {showBackToTop && (
        <Button
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </Button>
      )}
    </div>
  )
}
