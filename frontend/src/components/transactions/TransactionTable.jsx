import { Link } from "react-router-dom";

import TransactionStatus from "./TransactionStatus";
import TransactionType from "./TransactionType";

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

  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TransactionTable = ({ transactions, loading }) => {
  if (loading) {
    return (
      <div className="divide-y divide-slate-100">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex animate-pulse items-center justify-between p-5"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-100" />

              <div>
                <div className="h-4 w-32 rounded bg-slate-100" />

                <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
              </div>
            </div>

            <div className="h-4 w-20 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="p-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-xl">
          ₹
        </div>

        <h3 className="mt-4 font-semibold text-slate-900">
          No transactions found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your filters or make your first payment.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-800">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Transaction
            </th>

            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Date
            </th>

            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>

            <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
              Amount
            </th>

            <th className="px-5 py-4" />
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {transactions.map((transaction) => {
            const isDebit = transaction.direction === "DEBIT";

            return (
              <tr key={transaction.id} className="transition hover:bg-slate-50">
                <td className="px-5 py-5">
                  <TransactionType
                    type={transaction.type}
                    direction={transaction.direction}
                  />
                </td>

                <td className="px-5 py-5 text-sm text-slate-500">
                  {formatDate(transaction.createdAt)}
                </td>

                <td className="px-5 py-5">
                  <TransactionStatus status={transaction.status} />
                </td>

                <td
                  className={`px-5 py-5 text-right text-sm font-semibold ${
                    isDebit ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {isDebit ? "-" : "+"}₹{formatAmount(transaction.amount)}
                </td>

                <td className="px-5 py-5 text-right">
                  <Link
                    to={`/transactions/${transaction.id}`}
                    className="text-sm font-medium text-slate-900 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;