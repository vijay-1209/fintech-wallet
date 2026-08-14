import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import PaymentSummary from "../components/payment/PaymentSummary";

import { createPayment } from "../services/payment.service";

const SendMoneyConfirm = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const payment = location.state;

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  if (!payment) {
    return (
      <section className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Payment information missing
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Please start the payment process again.
          </p>

          <button
            type="button"
            onClick={() => navigate("/payments/send")}
            className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Back to send money
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
        type: "PAYMENT",

        recipient: payment.recipient,

        amount: payment.amount,

        description: payment.description,
      });

      navigate("/payments/result", {
        replace: true,
        state: {
          payment: response.data,
        },
      });
    } catch (error) {
      setError(error.response?.data?.message || "Unable to process payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Confirm payment</h1>

        <p className="mt-2 text-sm text-slate-500">
          Check the details carefully before sending.
        </p>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <PaymentSummary
          amount={payment.amount}
          recipient={payment.recipient}
          description={payment.description}
        />

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-800">
            Please verify the recipient before confirming.
          </p>

          <p className="mt-1 text-xs text-amber-700">
            Payments may not be reversible after successful processing.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => navigate("/payments/send")}
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
            {loading ? "Processing..." : "Send money"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SendMoneyConfirm;