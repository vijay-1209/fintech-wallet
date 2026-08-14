import { useCallback, useEffect, useState } from "react";

import AnalyticsFilter from "../components/analytics/AnalyticsFilter";
import AnalyticsSummary from "../components/analytics/AnalyticsSummary";
import TransactionTrendChart from "../components/analytics/TransactionTrendChart";
import IncomeSpendingChart from "../components/analytics/IncomeSpendingChart";
import PaymentStatusChart from "../components/analytics/PaymentStatusChart";
import TransactionTypeChart from "../components/analytics/TransactionTypeChart";

import { getPaymentAnalytics } from "../services/analytics.service";

const Analytics = () => {
  const [period, setPeriod] = useState("30d");

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadAnalytics = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getPaymentAnalytics({
        period,
      });

      setAnalytics(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to load payment analytics.",
      );
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Payment Analytics
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Understand your payment activity and spending patterns.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <AnalyticsFilter period={period} onChange={setPeriod} />

          <button
            type="button"
            onClick={loadAnalytics}
            disabled={loading}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-32 animate-pulse rounded-2xl bg-slate-100"
              />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />

            <div className="h-96 animate-pulse rounded-2xl bg-slate-100" />
          </div>
        </div>
      ) : (
        <>
          <AnalyticsSummary summary={analytics?.summary} />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <TransactionTrendChart
              data={analytics?.trends?.transactions || []}
            />

            <IncomeSpendingChart
              data={analytics?.trends?.incomeSpending || []}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <PaymentStatusChart data={analytics?.statusBreakdown || []} />

            <TransactionTypeChart data={analytics?.typeBreakdown || []} />
          </div>
        </>
      )}
    </section>
  );
};

export default Analytics;
