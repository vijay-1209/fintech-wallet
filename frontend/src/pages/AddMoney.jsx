import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AmountInput from "../components/payment/AmountInput";

import { validateAmount } from "../utils/paymentValidation";

const AddMoney = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateAmount(amount);

    if (validationError) {
      setError(validationError);
      return;
    }

    navigate("/wallet/add-money/confirm", {
      state: {
        amount: Number(amount),
      },
    });
  };

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Add money</h1>

        <p className="mt-2 text-sm text-slate-500">
          Add funds to your digital wallet.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <AmountInput
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);

              setError("");
            }}
            error={error}
          />

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Transaction limits</p>

            <p className="mt-1 text-sm text-slate-700">
              Minimum ₹1 · Maximum ₹1,00,000
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddMoney;