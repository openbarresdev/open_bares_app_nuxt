export const titles = [
  { id: 1, value: "Mr." },
  { id: 2, value: "Msr." },
  { id: 3, value: "Doctor." },
  { id: 4, value: "Phf." },
];

export const countries = [
  { id: 1, value: "Cameroon" },
  { id: 2, value: "Ghana" },
  { id: 3, value: "Nigeria" },
  { id: 4, value: "South Africa" },
  { id: 5, value: "Zambia" },
];

export const industries = [
  { id: 1, value: "Agriculture" },
  { id: 2, value: "Technology" },
  { id: 3, value: "Commerce" },
  { id: 4, value: "Engineering" },
  { id: 5, value: "Biological" },
];

export const sections = [
  {
    id: "sponsorship",
    title: "2. Sponsorship, Management and Technical Assistance",
    iconName: "smart-home",
    items: [
      "2.1 Sponsor Information",
      "2.2 Sponsor Business History",
      "2.3 Management Structure",
      "2.4 Technical Assistance",
    ],
  },
  {
    id: "market",
    title: "3. Market and Sales Analysis",
    iconName: "tabler--trash",
    items: [
      "3.1 Production and Sales Projections",
      "3.2 Target Market",
      "3.3 Market Environment",
    ],
  },
  {
    id: "technical",
    title: "4. Technical Feasibility and Resources",
    iconName: "",
    items: [
      "4.1 Technical Complexity",
      "4.2 Human Resources",
      "4.3 Infrastructure Requirements",
      "4.4 Operating Costs (Annual)",
      "4.5 Raw Materials and Supply Chain",
      "4.6 Plant Location and Size",
      "4.7 Environmental and Social Impact",
    ],
  },
  {
    id: "investment",
    title: "5. Investment Requirements and Financing",
    iconName: "",
    items: [
      "5.1 Total Investment Requirements",
      "5.2 Financing Structure",
      "5.3 Type of Financing Requested",
      "5.4 Financial Projections",
      "5.5 Critical Success Factors",
    ],
  },
  {
    id: "government",
    title: "6. Government Support and Regulations",
    iconName: "",
    items: [
      "6.1 Government Incentives",
      "6.2 Economic Development Impact",
      "6.3 Regulatory Environment",
    ],
  },
  {
    id: "timeline",
    title: "7. Project Timeline",
    iconName: "",
    items: ["7.1 Implementation Schedule"],
  },
  {
    id: "supporting",
    title: "8. Supporting Documents",
    items: [],
  },
];

export const adminMenu = [
  {
    id: 1,
    title: "Admin Profile",
    link: "/",
    fullTitle: "Admin profiles infos",
    iconName: "icon-[tabler--lock]",
    items: [],
  },
  {
    id: 2,
    title: "Applicants",
    link: "/applicants",
    fullTitle: "Applicants list",
    iconName: "icon-[tabler--users]",
    items: [],
  },
  {
    id: 3,
    title: "Users",
    link: "/users",
    fullTitle: "Users Management",
    iconName: "icon-[tabler--user-search]",
    items: [],
  },
  {
    id: 4,
    title: "Settings",
    link: "/settings",
    fullTitle: "App parameters",
    iconName: "icon-[tabler--settings]",
    items: [],
  },
];

export const userMenu = [
  {
    id: 1,
    title: "Profil",
    link: "/",
    fullTitle: "Setting upp your profile",
    iconName: "icon-[tabler--user]",
    items: [],
  },
  {
    id: 2,
    title: "Sponsorship",
    link: "/sponsorship",
    fullTitle: "Sponsorship, Management and Technical Assistance",
    iconName: "icon-[tabler--users-group]",
    items: [
      "Sponsor Information",
      "Sponsor Business History",
      "Management Structure",
      "Technical Assistance",
    ],
  },
  {
    id: 3,
    title: "Market",
    link: "/market",
    fullTitle: "Market and Sales Analysis",
    iconName: "icon-[tabler--chart-bar]",
    items: [
      "Production and Sales Projections",
      "Target Market",
      "Market Environment",
    ],
  },
  {
    id: 4,
    title: "Technical",
    link: "/technical",
    fullTitle: "Technical Feasibility and Resources",
    iconName: "icon-[tabler--tools]",
    items: [
      "Technical Complexity",
      "Human Resources",
      "Infrastructure Requirements",
      "Operating Costs (Annual)",
      "Raw Materials and Supply Chain",
      "Plant Location and Size",
      "Environmental and Social Impact",
    ],
  },
  {
    id: 5,
    title: "Investment and Financing",
    link: "/investment-and-financing",
    fullTitle: "Investment Requirements and Financing",
    iconName: "",
    items: [
      "Total Investment Requirements",
      "Financing Structure",
      "Type of Financing Requested",
      "Financial Projections",
      "Critical Success Factors",
    ],
  },
  {
    id: 6,
    title: "Government Support",
    link: "/government-support",
    fullTitle: "Government Support and Regulations",
    iconName: "",
    items: [
      "Government Incentives",
      "Economic Development Impact",
      "Regulatory Environment",
    ],
  },
  {
    id: 7,
    title: "Project Timeline",
    link: "/project-timeline",
    fullTitle: "Project Timeline",
    iconName: "",
    items: ["Implementation Schedule"],
  },
  {
    id: 8,
    title: "Supporting Documents",
    link: "/supporting-documents",
    fullTitle: "Supporting Documents",
    iconName: "",
    items: [],
  },
];

export const sectors = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "services", label: "Services" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "financial", label: "Financial Services" },
  { value: "agriculture", label: "Agriculture/Agribusiness" },
  { value: "technology", label: "Technology/Digital" },
  { value: "healthcare", label: "Healthcare" },
  { value: "energy", label: "Energy" },
  { value: "other", label: "Other", hasTextField: true },
];

export const options = [
  { "value": "new_venture", "label": "New venture establishment" },
  { "value": "expansion", "label": "Expansion of existing enterprise" },
  { "value": "modernization", "label": "Modernization/upgrade of existing facilities" },
  { "value": "other", "label": "Other", "hasTextField": true }
];

export const legalStructure = [
  {
    id: 1,
    value: "Corporation",
    description: "",
  },
  {
    id: 2,
    value: "Partnership",
    description: "",
  },
  {
    id: 3,
    value: "LLC",
    description: "",
  },
  {
    id: 4,
    value: "Others",
    description: "",
  },
];

export const currencies = [
  { id: 1, value: "$" },
  { id: 2, value: "€" },
  { id: 3, value: "XOF" },
  { id: 4, value: "XAF" },
];

export const years = [
  { id: 1, value: "1 Year" },
  { id: 2, value: "2 Years" },
  { id: 3, value: "3-5 Years" },
  { id: 4, value: "5-10 Years" },
];

export const education = [
  { id: 1, value: "Bachelor" },
  { id: 2, value: "Master" },
  { id: 3, value: "Doctorat" },
  { id: 4, value: "Others" },
]; ;

export const channels = [
  { id: 1, value: "Direct sales" },
  { id: 2, value: "Retail distribution" },
  { id: 3, value: "Wholesale" },
  { id: 4, value: "Online/E-commerce" },
  { id: 5, value: "Export markets  " },
  { id: 6, value: "Others" },
];

export const levels = [
  { id: 1, value: "Excellent" },
  { id: 2, value: "Good" },
  { id: 3, value: "Adequate" },
  { id: 4, value: "Poor " },
];
