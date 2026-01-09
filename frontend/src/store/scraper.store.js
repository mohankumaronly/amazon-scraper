import { scrape } from "../services/api.service";


let state = {
  loading: false,
  data: null,
  error: null,
};

const listeners = new Set();
const notify = () => listeners.forEach((l) => l(state));

export const scraperStore = {
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  getState() {
    return state;
  },

  async start(url) {
    state = { loading: true, data: null, error: null };
    notify();

    try {
      const res = await scrape(url);

      // ✅ FIX: unwrap backend response
      const product = res.data.data ?? res.data;

      state = {
        loading: false,
        data: product, // 👈 EXACT object UI expects
        error: null,
      };
    } catch (err) {
      state = {
        loading: false,
        data: null,
        error: err.message || "Scraping failed",
      };
    }

    notify();
  },

  clear() {
    state = { loading: false, data: null, error: null };
    notify();
  },
};
