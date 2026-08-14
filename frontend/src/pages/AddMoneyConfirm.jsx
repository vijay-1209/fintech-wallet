import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import AmountInput from "../components/payment/AmountInput";

import PaymentSummary from "../components/payment/PaymentSummary";

import { createPayment } from "../services/payment.service";

const AddMoneyConfirm = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const amount = location.state?.amount;

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  if (!amount) {
    return (
      <section className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900">Invalid payment</h2>

          <p className="mt-2 text-sm text-slate-500">
            Please start the add-money process again.
          </p>

          <button
            type="button"
            onClick={() => navigate("/wallet/add-money")}
            className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Back
          </button>
        </div>
      </section>
    );
  }

  const handleConfirm = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await createPayment({
        type: "TOPUP",
        amount,
      });

      const payment = response.data;

      navigate("/payments/result", {
        replace: true,
        state: {
          payment,
        },
      });
    } catch (error) {
      setError(error.response?.data?.message || "Unable to create payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Confirm add money</h1>

        <p className="mt-2 text-sm text-slate-500">
          Review the details before continuing.
        </p>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <PaymentSummary
          amount={amount}
          recipient="Your wallet"
          description="Wallet top-up"
        />

        <div className="flex gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => navigate("/wallet/add-money")}
            className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            Back
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleConfirm}
            className="flex-1 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddMoneyConfirm;