import { useEffect, useState } from "react";
import { scraperStore } from "../store/scraper.store";

export const useScraper = () => {
  const [state, setState] = useState(scraperStore.getState());

  useEffect(() => {
    return scraperStore.subscribe(setState);
  }, []);

  return {
    ...state,
    startScrape: scraperStore.start,
    clearResult: scraperStore.clear,
  };
};
