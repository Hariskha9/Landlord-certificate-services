export const PHONE = "+44 7498 043736"
export const PHONE_LINK = "tel:+447498043736"
export const WHATSAPP = "https://wa.me/447498043736"

export type PriceRow = [string, string]
export type Service = {
  path: string
  short: string
  title: string
  eyebrow: string
  description: string
  icon: string
  from: string
  intro: string[]
  sections: {
    title: string
    subtitle?: string
    rows?: PriceRow[]
    bullets?: string[]
    note?: string
  }[]
  seo: string
}

export const servicesdata: Service[] = [
  {
    path: "/electrical-certificates",
    short: "Electrical",
    title: "Electrical Certificates London",
    eyebrow: "Electrical safety",
    description:
      "EICR • PAT Testing • Emergency Lighting • Electrical Services",
    icon: "EL",
    from: "From £75",
    intro: [
      "Residential & commercial EICRs",
      "PAT testing",
      "Emergency lighting testing",
      "Consumer unit installation",
    ],
    sections: [
      {
        title: "Residential EICR",
        rows: [
          ["Studio / Bedroom", "£75.00"],
          ["1–3 Bedrooms", "£99.99"],
          ["4 Bedrooms", "£109.99"],
          ["5 Bedrooms", "£119.99"],
        ],
      },
      {
        title: "Commercial EICR",
        subtitle: "Up to 10 circuit breakers",
        rows: [["Commercial property", "£149.99"]],
      },
      {
        title: "Residential PAT Testing",
        rows: [
          ["Up to 10 appliances", "£59.99"],
          ["10–20 appliances", "£79.99"],
          ["20–40 appliances", "£99.99"],
        ],
      },
      {
        title: "Commercial PAT Testing",
        rows: [
          ["Up to 10 appliances", "£69.99"],
          ["10–20 appliances", "£89.99"],
          ["20–40 appliances", "£109.99"],
        ],
      },
      {
        title: "Emergency Lighting Testing",
        rows: [
          ["Up to 3 lights", "£55"],
          ["3–5 lights", "£79"],
          ["5–8 lights", "£115"],
          ["8–12 lights", "£160"],
          ["More than 12 lights", "Get a quote"],
        ],
      },
      {
        title: "Fuse Box / Consumer Unit Installation",
        rows: [
          ["6 Way Consumer Unit", "£720"],
          ["10 Way Consumer Unit", "£780"],
          ["15 Way Consumer Unit", "£860"],
          ["Skeleton Board", "£980"],
        ],
      },
    ],
    seo: "Electrical Certificates London | EICR, PAT & Emergency Lighting",
  },
  {
    path: "/gas-safety-certificates",
    short: "Gas Safety",
    title: "Gas Safety Certificates London",
    eyebrow: "Gas compliance",
    description: "CP12 Residential • CP42 Commercial",
    icon: "GS",
    from: "From £50",
    intro: [
      "Residential CP12 Gas Safety Certificate",
      "Commercial CP42 Gas Safety Certificate",
    ],
    sections: [
      {
        title: "Residential CP12",
        rows: [
          ["1 Gas Appliance", "£50"],
          ["2 Gas Appliances", "£60"],
          ["3 Gas Appliances", "£70"],
          ["4 Gas Appliances", "£85"],
        ],
        note: "A clear residential gas safety inspection with certification following completion.",
      },
      {
        title: "Commercial CP42",
        rows: [
          ["1 Gas Appliance", "£159.99"],
          ["2 Gas Appliances", "£199.99"],
          ["3 Gas Appliances", "£239.99"],
          ["4 Gas Appliances", "£299.99"],
          ["5 Gas Appliances", "£339.99"],
          ["6 Gas Appliances", "£399.99"],
          ["7 Gas Appliances", "£439.99"],
          ["8 Gas Appliances", "£499.99"],
        ],
      },
    ],
    seo: "Gas Safety Certificates London | CP12 & CP42",
  },
  {
    path: "/fire-safety-certificates",
    short: "Fire Safety",
    title: "Fire Safety Certificates London",
    eyebrow: "Fire safety",
    description: "Fire Safety • Fire Alarms • Smoke & Heat Alarms",
    icon: "FS",
    from: "From £55",
    intro: [
      "Fire safety inspection",
      "Smoke and heat alarms",
      "Fire alarm systems and panels",
      "Fire safety documentation",
    ],
    sections: [
      {
        title: "Fire Safety Prices",
        rows: [
          ["Up to 3 smoke/heat alarms", "£55"],
          ["Fire alarm panel + up to 3 alarms", "£75"],
          ["3–6 smoke/heat alarms", "£90"],
          ["Fire alarm panel + 3–6 alarms", "£110"],
          ["6–9 smoke/heat alarms", "£125"],
          ["Fire alarm panel + 6–9 alarms", "£145"],
          ["9–12 smoke/heat alarms", "£160"],
          ["Fire alarm panel + 9–12 alarms", "£180"],
          ["12–15 smoke/heat alarms", "£195"],
          ["Fire alarm panel + 12–15 alarms", "£215"],
          ["15–18 smoke/heat alarms", "£230"],
        ],
      },
    ],
    seo: "Fire Safety Certificates London | Fire Safety Services",
  },
  {
    path: "/fire-risk-assessment",
    short: "Fire Risk",
    title: "Fire Risk Assessment London",
    eyebrow: "Risk assessment",
    description: "Residential & Commercial Fire Risk Assessments",
    icon: "FR",
    from: "From £74",
    intro: [
      "Residential fire risk assessment",
      "Commercial fire risk assessment",
      "Clear assessment documentation",
    ],
    sections: [
      {
        title: "Residential FRA Prices",
        rows: [
          ["Studio Apartment", "£74"],
          ["Communal Area 1–3 floors", "£129.99"],
          ["Communal Area 3–6 floors", "£149.99"],
          ["1–3 Bedrooms", "£139.99"],
          ["4 Bedrooms", "£179.99"],
          ["5 Bedrooms", "£189.99"],
          ["6+ Bedrooms", "Get a quote"],
        ],
      },
      {
        title: "Commercial FRA Prices",
        rows: [
          ["Communal Area up to 3 floors", "£149.99"],
          ["Communal Area 3–5 floors", "£189.99"],
          ["Communal Area 5–10 floors", "£279.99"],
          ["Building 1–3 floors", "£249.99"],
          ["Building 3–5 floors", "£369.99"],
          ["Building 5–8 floors", "£459.99"],
          ["Building 8–12 floors", "£539.99"],
          ["More than 12 floors", "Get a quote"],
        ],
      },
    ],
    seo: "Fire Risk Assessment London | Residential & Commercial",
  },
  {
    path: "/epc",
    short: "EPC",
    title: "Residential EPC London",
    eyebrow: "Energy performance",
    description: "Residential Energy Performance Certificates",
    icon: "EP",
    from: "From £89.99",
    intro: [
      "Residential EPC assessments",
      "All London Boroughs + M25",
      "All-inclusive survey pricing",
    ],
    sections: [
      {
        title: "EPC Prices",
        rows: [
          ["Studio", "£89.99"],
          ["1–3 Bedrooms", "£109.99"],
          ["4 Bedrooms", "£129.99"],
          ["5 Bedrooms", "£149.99"],
          ["6 Bedrooms", "£169.99"],
        ],
        note: "All-inclusive — no hidden survey cost.",
      },
    ],
    seo: "EPC London | Residential Energy Performance Certificates",
  },
  {
    path: "/asbestos-survey",
    short: "Asbestos",
    title: "Asbestos Survey London",
    eyebrow: "Asbestos surveying",
    description: "Surveys • Sampling • Laboratory Analysis • Reports",
    icon: "AS",
    from: "From £239.99",
    intro: [
      "Residential asbestos surveys",
      "Commercial asbestos surveys",
      "Asbestos sampling",
      "Asbestos survey reports",
    ],
    sections: [
      {
        title: "Asbestos Prices",
        rows: [
          ["1 sample", "£239.99"],
          ["2 samples", "£269.99"],
          ["3 samples", "£299.99"],
          ["4 samples", "£329.99"],
          ["5 samples", "£359.99"],
        ],
      },
      {
        title: "The Survey Process",
        bullets: [
          "01 — Survey: property inspection",
          "02 — Sampling: samples collected where required",
          "03 — Laboratory: appropriate analysis",
          "04 — Report: relevant survey information provided",
        ],
      },
    ],
    seo: "Asbestos Survey London | Asbestos Surveys & Sampling",
  },
  {
    path: "/legionella-risk-assessment",
    short: "Legionella",
    title: "Legionella Risk Assessment London",
    eyebrow: "Water safety",
    description: "Residential & Commercial Risk Assessments",
    icon: "LR",
    from: "Get a quote",
    intro: [
      "Landlords and rental properties",
      "Residential buildings",
      "Offices and businesses",
      "Commercial properties and property managers",
    ],
    sections: [
      {
        title: "Residential",
        bullets: [
          "Landlords",
          "Rental properties",
          "Property managers",
          "Residential buildings",
        ],
        note: "Tell us about the property for a tailored quotation.",
      },
      {
        title: "Commercial",
        bullets: [
          "Offices",
          "Businesses",
          "Commercial properties",
          "Property managers",
        ],
        note: "Pricing is based on the property and assessment requirements.",
      },
    ],
    seo: "Legionella Risk Assessment London | Residential & Commercial",
  },
  {
    path: "/fire-doors-protection",
    short: "Fire Doors",
    title: "Fire Doors & Fire Protection London",
    eyebrow: "Fire protection",
    description: "Fire Door Certificates • Installation • Fire Alarms",
    icon: "FD",
    from: "From £120",
    intro: [
      "Fire door certificates and inspections",
      "Timber fire door installation",
      "Fire alarm installation",
      "Fire protection services",
    ],
    sections: [
      {
        title: "Fire Door Certificate",
        rows: [["Inspection and certificate", "From £120"]],
        note: "Book a fire door inspection and certification service for your property.",
      },
      {
        title: "Fire Alarm Installation",
        rows: [["Per alarm", "£209.99*"]],
        note: "Final inclusions and property-specific requirements are confirmed in writing before booking.",
      },
      {
        title: "Timber Fire Doors",
        bullets: [
          "Timber fire door installation",
          "Fire door fitting",
          "Relevant hardware where applicable",
          "Fire door documentation where applicable",
        ],
        note: "Get a quote for your property.",
      },
    ],
    seo: "Fire Door Certificate & Installation London | Fire Protection",
  },
]

export const boroughs = [
  "Barking & Dagenham",
  "Barnet",
  "Bexley",
  "Brent",
  "Bromley",
  "Camden",
  "Croydon",
  "Ealing",
  "Enfield",
  "Greenwich",
  "Hackney",
  "Hammersmith & Fulham",
  "Haringey",
  "Harrow",
  "Havering",
  "Hillingdon",
  "Hounslow",
  "Islington",
  "Kensington & Chelsea",
  "Kingston upon Thames",
  "Lambeth",
  "Lewisham",
  "Merton",
  "Newham",
  "Redbridge",
  "Richmond upon Thames",
  "Southwark",
  "Sutton",
  "Tower Hamlets",
  "Waltham Forest",
  "Wandsworth",
  "Westminster",
  "City of London",
]

