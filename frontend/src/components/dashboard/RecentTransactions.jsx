import { Link } from "react-router-dom";

const formatAmount = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const RecentTransactions = ({ transactions, loading, error }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 p-5">
        <div>
          <h3 className="font-semibold text-slate-900">Recent transactions</h3>

          <p className="mt-1 text-xs text-slate-500">
            Your latest wallet activity
          </p>
        </div>

        <Link
          to="/transactions"
          className="text-sm font-medium text-slate-900 hover:underline"
        >
          View all
        </Link>
      </div>

      {loading && (
        <div className="space-y-4 p-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex animate-pulse items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100" />

                <div>
                  <div className="h-4 w-28 rounded bg-slate-100" />

                  <div className="mt-2 h-3 w-20 rounded bg-slate-100" />
                </div>
              </div>

              <div className="h-4 w-20 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="p-5 text-sm text-red-600">{error}</div>
      )}

      {!loading && !error && transactions.length === 0 && (
        <div className="p-8 text-center">
          <p className="font-medium text-slate-700">No transactions yet</p>

          <p className="mt-1 text-sm text-slate-400">
            Your recent activity will appear here.
          </p>
        </div>
      )}

      {!loading && !error && transactions.length > 0 && (
        <div className="divide-y divide-slate-100">
          {transactions.map((transaction) => {
            const isDebit =
              transaction.direction === "DEBIT" ||
              transaction.senderWallet?.userId;

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      isDebit
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {isDebit ? "↑" : "↓"}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {transaction.type || "Transaction"}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {formatDate(transaction.createdAt)}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    isDebit ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {isDebit ? "-" : "+"}₹{formatAmount(transaction.amount)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;