import { useCallback, useEffect, useState } from "react";

import { getTransactions } from "../services/transaction.service";

const useTransactions = ({ page = 1, limit = 5 } = {}) => {
  const [transactions, setTransactions] = useState([]);

  const [pagination, setPagination] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getTransactions({
        page,
        limit,
      });

      setTransactions(response.data?.transactions || []);

      setPagination(response.data?.pagination || null);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to load transactions.");
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return {
    transactions,
    pagination,
    loading,
    error,
    refreshTransactions: fetchTransactions,
  };
};

export default useTransactions;