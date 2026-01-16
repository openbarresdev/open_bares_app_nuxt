import { createGenericDataStore } from "./genericDataStore";

// 1. Typ definieren mit expliziten Properties
interface YearOneData {
  productionVolume: number;
  unitPrice: number;
  totalRevenue: number;
  netProfit: number;
}

interface ProductionAndSales {
  yearOne?: YearOneData;
}

interface MarketData {
  productionAndSales?: ProductionAndSales;
  targetMarket?: Record<string, any>;
  marketEnvironment?: Record<string, any>;
}

// 2. Default-Werte
const defaultMarketData: MarketData = {
  productionAndSales: {
    yearOne: {
      productionVolume: 0,
      unitPrice: 0,
      totalRevenue: 0,
      netProfit: 0,
    },
  },
  targetMarket: {},
  marketEnvironment: {},
};

// 3. Store erstellen
export const useMarketStore = createGenericDataStore<MarketData>({
  resourceName: "market",
  apiEndpoint: "/api/market",
  defaultData: defaultMarketData,
});