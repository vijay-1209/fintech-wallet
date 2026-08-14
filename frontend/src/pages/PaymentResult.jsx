import { Link, useLocation, useNavigate } from "react-router-dom";

import PaymentStatus from "../components/payment/PaymentStatus";

const PaymentResult = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const payment = location.state?.payment;

  if (!payment) {
    return (
      <section className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Payment not found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            We couldn't find the payment information.
          </p>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Go to dashboard
          </button>
        </div>
      </section>
    );
  }

  const status =
    payment.status === "COMPLETED"
      ? "SUCCESS"
      : payment.status === "FAILED" || payment.status === "CANCELLED"
        ? "FAILED"
        : "PROCESSING";

  return (
    <section className="mx-auto max-w-2xl">
      <PaymentStatus status={status} message={payment.message} />

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Amount</span>

            <span className="font-semibold text-slate-900">
              ₹
              {Number(payment.amount || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Status</span>

            <span className="text-sm font-medium text-slate-900">
              {payment.status || "PENDING"}
            </span>
          </div>

          {payment.reference && (
            <div className="flex justify-between gap-4">
              <span className="text-sm text-slate-500">Reference</span>

              <span className="break-all text-right text-sm font-medium text-slate-900">
                {payment.reference}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to="/dashboard"
          className="flex-1 rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Transactions
        </Link>
      </div>
    </section>
  );
};

export default PaymentResult;