import { createContext, useContext, useState } from "react";
import { scrape } from "../services/api.service";

const ScraperContext = createContext();

export const ScraperProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const startScrape = async (url) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const res = await scrape(url);
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Scraping failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScraperContext.Provider
      value={{
        loading,
        result,
        error,
        startScrape,
        clearResult: () => setResult(null),
      }}
    >
      {children}
    </ScraperContext.Provider>
  );
};

export const useScraper = () => useContext(ScraperContext);
