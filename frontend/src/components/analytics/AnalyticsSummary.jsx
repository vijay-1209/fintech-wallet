const formatAmount = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const SummaryCard = ({ title, value, description, icon }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>

          {description && (
            <p className="mt-2 text-xs text-slate-400">{description}</p>
          )}
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};

const AnalyticsSummary = ({ summary }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        title="Total sent"
        value={`₹${formatAmount(summary?.totalSent)}`}
        description="Money sent"
        icon="↑"
      />

      <SummaryCard
        title="Total received"
        value={`₹${formatAmount(summary?.totalReceived)}`}
        description="Money received"
        icon="↓"
      />

      <SummaryCard
        title="Total top-ups"
        value={`₹${formatAmount(summary?.totalTopups)}`}
        description="Wallet funding"
        icon="+"
      />

      <SummaryCard
        title="Transactions"
        value={(summary?.transactionCount || 0).toLocaleString("en-IN")}
        description="Total transactions"
        icon="#"
      />
    </div>
  );
};

export default AnalyticsSummary;