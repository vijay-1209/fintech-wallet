const TransactionFilters = ({ filters, onChange, onReset }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <label
            htmlFor="search"
            className="mb-2 block text-xs font-medium text-slate-500"
          >
            Search
          </label>

          <input
            id="search"
            type="search"
            value={filters.search}
            onChange={(event) => onChange("search", event.target.value)}
            placeholder="Search transaction..."
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-xs font-medium text-slate-500"
          >
            Type
          </label>

          <select
            id="type"
            value={filters.type}
            onChange={(event) => onChange("type", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
          >
            <option value="">All types</option>

            <option value="PAYMENT">Payment</option>

            <option value="TOPUP">Top up</option>

            <option value="WITHDRAWAL">Withdrawal</option>

            <option value="REFUND">Refund</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-xs font-medium text-slate-500"
          >
            Status
          </label>

          <select
            id="status"
            value={filters.status}
            onChange={(event) => onChange("status", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
          >
            <option value="">All statuses</option>

            <option value="COMPLETED">Completed</option>

            <option value="PENDING">Pending</option>

            <option value="PROCESSING">Processing</option>

            <option value="FAILED">Failed</option>

            <option value="CANCELLED">Cancelled</option>

            <option value="REFUNDED">Refunded</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reset filters
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fromDate"
            className="mb-2 block text-xs font-medium text-slate-500"
          >
            From date
          </label>

          <input
            id="fromDate"
            type="date"
            value={filters.fromDate}
            onChange={(event) => onChange("fromDate", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="toDate"
            className="mb-2 block text-xs font-medium text-slate-500"
          >
            To date
          </label>

          <input
            id="toDate"
            type="date"
            value={filters.toDate}
            onChange={(event) => onChange("toDate", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-900"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;