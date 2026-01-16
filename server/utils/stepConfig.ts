export const STEP_CONFIG = {
  sponsorship: {
    model: "sponsorship",
    sections: [
      "sponsorInfo",
      "sponsorBusinessHist",
      "managementStructure",
      "technicalAssistance",
    ],
  },

  market: {
    model: "marketAnalysis",
    sections: ["productionAndSales", "targetMarket", "marketEnvironment"],
  },

  technical: {
    model: "technicalFeasibility",
    sections: [
      "technicalComplexity",
      "humanResources",
      "infrastructure",
      "operatingCosts",
      "rawMaterials",
      "plantLocationSize",
      "environmentalImpact",
    ],
  },

  investment: {
    model: "investmentRequirement",
    sections: [
      "totalInvestment",
      "financingStructure",
      "financingType",
      "financialProjections",
      "successFactors",
    ],
  },

  government: {
    model: "governmentSupport",
    sections: ["incentives", "economicImpact", "regulatoryEnvironment"],
  },

  timeline: {
    model: "projectTimeline",
    sections: ["implementationSchedule"],
  },

  documents: {
    model: "supportingDocuments",
    sections: ["documentLinks", "notes"],
  },
} as const;
