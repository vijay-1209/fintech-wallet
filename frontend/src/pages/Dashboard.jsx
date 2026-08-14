import BalanceCard from "../components/dashboard/BalanceCard";
import StatisticCard from "../components/dashboard/StatisticCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import DashboardError from "../components/dashboard/DashboardError";

import useWallet from "../hooks/useWallet";
import useTransactions from "../hooks/useTransactions";
import useTransactionSummary from "../hooks/useTransactionSummary";

const Dashboard = () => {
  const {
    wallet,
    loading: walletLoading,
    error: walletError,
    refreshWallet,
  } = useWallet();

  const {
    transactions,
    loading: transactionsLoading,
    error: transactionsError,
  } = useTransactions({
    page: 1,
    limit: 5,
  });

  const {
    summary,
    loading: summaryLoading,
    error: summaryError,
    refreshSummary,
  } = useTransactionSummary();

  const handleRefresh = async () => {
    await Promise.all([refreshWallet(), refreshSummary()]);
  };

  const balance = wallet?.balance ?? wallet?.availableBalance ?? 0;

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your wallet and track your payments.
        </p>
      </div>

      {walletError && (
        <DashboardError message={walletError} onRetry={handleRefresh} />
      )}

      {summaryError && (
        <DashboardError message={summaryError} onRetry={handleRefresh} />
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BalanceCard
            balance={balance}
            loading={walletLoading}
            onRefresh={handleRefresh}
          />
        </div>

        <QuickActions />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatisticCard
          title="Money sent"
          value={`₹${Number(summary.totalDebit).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}`}
          description="Total completed debits"
          loading={summaryLoading}
        />

        <StatisticCard
          title="Money received"
          value={`₹${Number(summary.totalCredit).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}`}
          description="Total completed credits"
          loading={summaryLoading}
        />

        <StatisticCard
          title="Transactions"
          value={summary.totalTransactions}
          description="Completed transactions"
          loading={summaryLoading}
        />

        <StatisticCard
          title="Net flow"
          value={`₹${Number(summary.netFlow).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}`}
          description="Credits minus debits"
          loading={summaryLoading}
        />
      </div>

      <div className="mt-6">
        <RecentTransactions
          transactions={transactions}
          loading={transactionsLoading}
          error={transactionsError}
        />
      </div>
    </section>
  );
};

export default Dashboard;