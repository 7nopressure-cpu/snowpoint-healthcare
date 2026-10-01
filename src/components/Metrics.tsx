import { SITE_DATA } from "@/data/content";

export default function Metrics() {
  return (
    <section className="bg-brand-navy text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
          {SITE_DATA.metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 ${
                index !== 0 ? "pt-6 sm:pt-0" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                {metric.value}
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-100">
                {metric.label}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
