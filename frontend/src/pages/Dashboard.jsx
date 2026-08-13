const Dashboard = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your wallet and recent activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Wallet Balance</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">₹0.00</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Money Sent</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">₹0.00</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Money Received</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">₹0.00</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Transactions</p>

          <p className="mt-2 text-2xl font-bold text-slate-900">0</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;