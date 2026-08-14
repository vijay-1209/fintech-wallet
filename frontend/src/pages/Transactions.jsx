import { useCallback, useEffect, useState } from "react";

import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionPagination from "../components/transactions/TransactionPagination";

import { getTransactions } from "../services/transaction.service";

const initialFilters = {
  search: "",
  type: "",
  status: "",
  fromDate: "",
  toDate: "",
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const [pagination, setPagination] = useState(null);

  const [filters, setFilters] = useState(initialFilters);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const limit = 10;

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = {
        page,
        limit,
      };

      if (filters.search) {
        params.search = filters.search;
      }

      if (filters.type) {
        params.type = filters.type;
      }

      if (filters.status) {
        params.status = filters.status;
      }

      if (filters.fromDate) {
        params.fromDate = filters.fromDate;
      }

      if (filters.toDate) {
        params.toDate = filters.toDate;
      }

      const response = await getTransactions(params);

      setTransactions(response.data?.transactions || []);

      setPagination(response.data?.pagination || null);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to load transactions.");
    } finally {
      setLoading(false);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleFilterChange = (name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters(initialFilters);

    setPage(1);
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Transactions
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View and manage your wallet transaction history.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchTransactions}
          disabled={loading}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <TransactionFilters
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      {error && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <TransactionTable transactions={transactions} loading={loading} />

        {!loading && !error && (
          <TransactionPagination
            pagination={pagination}
            onPageChange={setPage}
          />
        )}
      </div>
    </section>
  );
};

export default Transactions;