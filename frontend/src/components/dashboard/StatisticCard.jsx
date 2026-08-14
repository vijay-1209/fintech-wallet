const StatisticCard = ({ title, value, description, loading }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{title}</p>

      {loading ? (
        <div className="mt-3 h-8 w-28 animate-pulse rounded bg-slate-100" />
      ) : (
        <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
      )}

      {description && (
        <p className="mt-2 text-xs text-slate-400">{description}</p>
      )}
    </div>
  );
};

export default StatisticCard;