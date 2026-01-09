import DashboardLayout from '../Layouts/DashboardLayout';
import StatsGrid from '../components/DashboardComponents/StatsGrid';
import TrackedItemTable from '../components/DashboardComponents/TrackedItemTable';

const demoProducts = [
  {
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    asin: "B09XS7GNLJ",
    image: "https://m.media-amazon.com/images/I/711g1waxWpL._SX522_.jpg",
    currentPrice: 24990,
    targetPrice: 22000,
  },
  {
    name: "Apple MacBook Pro Laptop M3 Chip",
    asin: "B0CM5L169H",
    image: "https://m.media-amazon.com/images/I/51nwwZkt6gL._SX300_SY300_QL70_FMwebp_.jpg",
    currentPrice: 154900,
    targetPrice: 154900,
  },
  {
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    asin: "B09XS7GNLJ",
    image: "https://m.media-amazon.com/images/I/711g1waxWpL._SX522_.jpg",
    currentPrice: 24990,
    targetPrice: 22000,
  },
  {
    name: "Apple MacBook Pro Laptop M3 Chip",
    asin: "B0CM5L169H",
    image: "https://m.media-amazon.com/images/I/51nwwZkt6gL._SX300_SY300_QL70_FMwebp_.jpg",
    currentPrice: 154900,
    targetPrice: 154900,
  },
  {
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    asin: "B09XS7GNLJ",
    image: "https://m.media-amazon.com/images/I/711g1waxWpL._SX522_.jpg",
    currentPrice: 24990,
    targetPrice: 22000,
  },
  {
    name: "Apple MacBook Pro Laptop M3 Chip",
    asin: "B0CM5L169H",
    image: "https://m.media-amazon.com/images/I/51nwwZkt6gL._SX300_SY300_QL70_FMwebp_.jpg",
    currentPrice: 154900,
    targetPrice: 154900,
  },

  

];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Everything inside here is the "children" prop */}
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* 1. Header Section */}
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 text-sm">
            Welcome back! Here's the current flow of your tracked items.
          </p>
        </div>

        {/* 2. The 4 Stats Cards (Total Tracks, Price Drops, etc.) */}
        <StatsGrid />

        {/* 3. The Main Table (Image, Name, ASIN, Prices, Actions) */}
        <TrackedItemTable products={demoProducts} />

      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 