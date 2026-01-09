import React, { useState, useEffect } from "react";
import { CheckCircle2, Star, ArrowRight, Target, Loader2 } from "lucide-react";

const ScraperResultCard = ({ data, onConfirm }) => {
  // Target price state
  const [targetPrice, setTargetPrice] = useState(0);

  // 🔍 Debug: inspect incoming scraper data
  useEffect(() => {
    console.log("SCRAPER CARD DATA:", data);
  }, [data]);

  // Sync target price when data arrives
  useEffect(() => {
    if (data?.price) {
      setTargetPrice(data.price - 500);
    }
  }, [data]);

  // Skeleton state (safety fallback)
  if (!data) {
    return (
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 max-w-2xl mx-auto shadow-xl flex flex-col items-center justify-center space-y-4 min-h-100">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
        <p className="text-slate-400 font-bold animate-pulse uppercase text-xs tracking-widest">
          Fetching Product Intelligence...
        </p>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(data.price || 0);

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-orange-100/50 overflow-hidden animate-in zoom-in-95 duration-500 max-w-2xl mx-auto">
      {/* Success Bar */}
      <div className="bg-green-500 px-6 py-2.5 flex items-center justify-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-white" />
        <span className="text-[11px] font-black text-white uppercase tracking-widest">
          Analysis Complete
        </span>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="aspect-square bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-center relative group">
              <img
                src={data.mainImage}
                alt={data.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-100 shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                <span className="text-[10px] font-bold text-slate-700">
                  {data.rating?.split(" ")[0] || "N/A"}
                </span>
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              {data.images?.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-xl border border-slate-100 bg-slate-50 p-1"
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-5">
            <div>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md uppercase">
                {data.source} India
              </span>
              <h3 className="text-xl font-black text-slate-900 leading-tight mt-1">
                {data.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase">
                ASIN: {data.asin}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-900">
                {formattedPrice}
              </span>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg border border-green-100">
                {data.stock}
              </span>
            </div>

            {/* Target Price */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  Set Alert Target
                </label>
                <span className="text-[10px] font-black text-orange-500">
                  ₹{targetPrice}
                </span>
              </div>

              <input
                type="range"
                min={(data.price || 0) * 0.5}
                max={data.price || 0}
                step="100"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg accent-orange-500"
              />
            </div>

            <button
              onClick={() => onConfirm({ ...data, userTarget: targetPrice })}
              className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
            >
              Confirm & Track This Item
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-4 gap-4">
          {[
            { label: "RAM", val: data.specifications?.["RAM Size"] },
            { label: "Storage", val: data.specifications?.["Hard Drive Size"] },
            { label: "CPU", val: data.specifications?.["Processor Type"] },
            { label: "Case", val: data.specifications?.["Form Factor"] },
          ].map((spec, i) => (
            <div key={i}>
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                {spec.label}
              </span>
              <div className="text-[11px] font-black text-slate-800 truncate">
                {spec.val || "N/A"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScraperResultCard;
