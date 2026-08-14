import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AmountInput from "../components/payment/AmountInput";

import {
  validateAmount,
  validateRecipient,
  validateDescription,
} from "../utils/paymentValidation";

const SendMoney = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    recipient: "",
    amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    const recipientError = validateRecipient(form.recipient);

    const amountError = validateAmount(form.amount);

    const descriptionError = validateDescription(form.description);

    if (recipientError) {
      validationErrors.recipient = recipientError;
    }

    if (amountError) {
      validationErrors.amount = amountError;
    }

    if (descriptionError) {
      validationErrors.description = descriptionError;
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);

      return;
    }

    navigate("/payments/send/confirm", {
      state: {
        recipient: form.recipient.trim(),

        amount: Number(form.amount),

        description: form.description.trim(),
      },
    });
  };

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Send money</h1>

        <p className="mt-2 text-sm text-slate-500">
          Send money securely to another wallet user.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="recipient"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Recipient
            </label>

            <input
              id="recipient"
              name="recipient"
              type="text"
              value={form.recipient}
              onChange={handleChange}
              placeholder="Email or wallet ID"
              className={`w-full rounded-xl border px-4 py-3 outline-none ${
                errors.recipient
                  ? "border-red-400"
                  : "border-slate-300 focus:border-slate-900"
              }`}
            />

            {errors.recipient && (
              <p className="mt-2 text-sm text-red-600">{errors.recipient}</p>
            )}
          </div>

          <AmountInput
            value={form.amount}
            onChange={handleChange}
            error={errors.amount}
          />

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Note
              <span className="ml-1 font-normal text-slate-400">
                (optional)
              </span>
            </label>

            <textarea
              id="description"
              name="description"
              rows="3"
              maxLength="200"
              value={form.description}
              onChange={handleChange}
              placeholder="What's this payment for?"
              className={`w-full resize-none rounded-xl border px-4 py-3 outline-none ${
                errors.description
                  ? "border-red-400"
                  : "border-slate-300 focus:border-slate-900"
              }`}
            />

            {errors.description && (
              <p className="mt-2 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendMoney;