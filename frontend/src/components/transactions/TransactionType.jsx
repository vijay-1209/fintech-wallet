const TransactionType = ({ type, direction }) => {
  const isDebit = direction === "DEBIT";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
          isDebit ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
        }`}
      >
        {isDebit ? "↑" : "↓"}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">
          {type || "Payment"}
        </p>

        <p className="text-xs text-slate-400">
          {isDebit ? "Money sent" : "Money received"}
        </p>
      </div>
    </div>
  );
};

export default TransactionType;