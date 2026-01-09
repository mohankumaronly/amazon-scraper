// src/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import DashboardSideBar from "../components/DashboardComponents/DashboardSideBar";
import DashboardAppBar from "../components/DashboardComponents/AppBarDashboard";
import ActivitySidebar from "../components/DashboardComponents/DashboardActivitySideBar";

import { useScraper } from "../hooks/useScraper";
import ScraperResultCard from "../components/DashboardComponents/ScraperResultCard";
import ScrapingLoadingScreen from "../components/ScrapingLoadingScreen";
import ModalPortal from "../components/ModalPortal";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // 🔥 SCRAPER STATE
  const { loading, data, clearResult } = useScraper();

  return (
    <>
      {/* ================= MAIN DASHBOARD ================= */}
      <div className="flex h-screen bg-[#FBFCFE]">
        <DashboardSideBar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <DashboardAppBar
            user={{ name: "Alex" }}
            onMenuClick={() => setSidebarOpen(true)}
          />

          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
              <div className="max-w-5xl mx-auto">{children}</div>
            </main>

            <ActivitySidebar />
          </div>
        </div>
      </div>

      {/* ================= SCRAPER UI (PORTAL) ================= */}

      {loading && (
        <ModalPortal>
          <ScrapingLoadingScreen />
        </ModalPortal>
      )}

      {data && (
        <ModalPortal>
          <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40">
            <ScraperResultCard
              data={data}
              onConfirm={(finalData) => {
                console.log("Confirmed scrape:", finalData);
                clearResult();
              }}
            />
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default DashboardLayout;
