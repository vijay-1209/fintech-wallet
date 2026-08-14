import { useCallback, useEffect, useState } from "react";

import { getTransactionSummary } from "../services/transaction.service";

const useTransactionSummary = () => {
  const [summary, setSummary] = useState({
    totalTransactions: 0,
    totalDebit: "0.00",
    totalCredit: "0.00",
    netFlow: "0.00",
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getTransactionSummary();

      setSummary(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to load transaction summary.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  return {
    summary,
    loading,
    error,
    refreshSummary: fetchSummary,
  };
};

export default useTransactionSummary;