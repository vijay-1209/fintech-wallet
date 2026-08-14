import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { getTransactionById } from "../services/transaction.service";

import TransactionStatus from "../components/transactions/TransactionStatus";

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
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const TransactionDetails = () => {
  const { transactionId } = useParams();

  const [transaction, setTransaction] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadTransaction = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getTransactionById(transactionId);

        setTransaction(response.data);
      } catch (error) {
        setError(
          error.response?.data?.message || "Unable to load transaction.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadTransaction();
  }, [transactionId]);

  if (loading) {
    return (
      <section className="mx-auto max-w-2xl">
        <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-8">
          <div className="mx-auto h-16 w-16 rounded-full bg-slate-100" />

          <div className="mx-auto mt-5 h-7 w-40 rounded bg-slate-100" />

          <div className="mx-auto mt-3 h-4 w-56 rounded bg-slate-100" />

          <div className="mt-8 space-y-4">
            <div className="h-12 rounded bg-slate-100" />
            <div className="h-12 rounded bg-slate-100" />
            <div className="h-12 rounded bg-slate-100" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <h2 className="text-xl font-bold text-red-800">
            Transaction unavailable
          </h2>

          <p className="mt-2 text-sm text-red-600">{error}</p>

          <Link
            to="/transactions"
            className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Back to transactions
          </Link>
        </div>
      </section>
    );
  }

  if (!transaction) {
    return null;
  }

  const isDebit = transaction.direction === "DEBIT";

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-6">
        <Link
          to="/transactions"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back to transactions
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-8 text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${
              isDebit ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
            }`}
          >
            {isDebit ? "↑" : "↓"}
          </div>

          <p
            className={`mt-5 text-3xl font-bold ${
              isDebit ? "text-red-600" : "text-green-600"
            }`}
          >
            {isDebit ? "-" : "+"}₹{formatAmount(transaction.amount)}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {transaction.type || "Payment"}
          </p>

          <div className="mt-4">
            <TransactionStatus status={transaction.status} />
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          <div className="flex justify-between gap-5 px-6 py-4">
            <span className="text-sm text-slate-500">Transaction ID</span>

            <span className="max-w-[60%] break-all text-right text-sm font-medium text-slate-900">
              {transaction.id}
            </span>
          </div>

          <div className="flex justify-between gap-5 px-6 py-4">
            <span className="text-sm text-slate-500">Date</span>

            <span className="text-right text-sm font-medium text-slate-900">
              {formatDate(transaction.createdAt)}
            </span>
          </div>

          <div className="flex justify-between gap-5 px-6 py-4">
            <span className="text-sm text-slate-500">Type</span>

            <span className="text-sm font-medium text-slate-900">
              {transaction.type || "-"}
            </span>
          </div>

          {transaction.description && (
            <div className="flex justify-between gap-5 px-6 py-4">
              <span className="text-sm text-slate-500">Description</span>

              <span className="max-w-[60%] text-right text-sm text-slate-900">
                {transaction.description}
              </span>
            </div>
          )}

          {transaction.reference && (
            <div className="flex justify-between gap-5 px-6 py-4">
              <span className="text-sm text-slate-500">Reference</span>

              <span className="max-w-[60%] break-all text-right text-sm font-medium text-slate-900">
                {transaction.reference}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransactionDetails;