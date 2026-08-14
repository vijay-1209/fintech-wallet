import { useCallback, useEffect, useState } from "react";

import { getWalletBalance } from "../services/wallet.service";

const useWallet = () => {
  const [wallet, setWallet] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchWallet = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getWalletBalance();

      setWallet(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to load wallet balance.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  return {
    wallet,
    loading,
    error,
    refreshWallet: fetchWallet,
  };
};

export default useWallet;