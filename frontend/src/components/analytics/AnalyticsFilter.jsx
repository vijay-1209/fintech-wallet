const AnalyticsFilter = ({ period, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        {
          value: "7d",
          label: "7 days",
        },
        {
          value: "30d",
          label: "30 days",
        },
        {
          value: "90d",
          label: "90 days",
        },
        {
          value: "1y",
          label: "1 year",
        },
      ].map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            period === item.value
              ? "bg-slate-900 text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default AnalyticsFilter;