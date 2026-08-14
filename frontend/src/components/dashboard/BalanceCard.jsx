const BalanceCard = ({ balance, loading, onRefresh }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-300">Available balance</p>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="rounded-lg px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div className="mt-5">
          {loading ? (
            <div className="h-10 w-48 animate-pulse rounded-lg bg-white/10" />
          ) : (
            <p className="text-4xl font-bold tracking-tight">
              ₹
              {Number(balance || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-400">Your wallet balance</p>
      </div>

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-white/5" />
    </div>
  );
};

export default BalanceCard;