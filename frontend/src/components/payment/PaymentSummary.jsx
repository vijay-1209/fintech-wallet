const PaymentSummary = ({ amount, recipient, description }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-semibold text-slate-900">Payment summary</h3>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between gap-4">
          <span className="text-sm text-slate-500">Recipient</span>

          <span className="text-right text-sm font-medium text-slate-900">
            {recipient || "-"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-sm text-slate-500">Amount</span>

          <span className="text-sm font-semibold text-slate-900">
            ₹
            {Number(amount || 0).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {description && (
          <div className="flex justify-between gap-4">
            <span className="text-sm text-slate-500">Note</span>

            <span className="max-w-[60%] text-right text-sm text-slate-700">
              {description}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSummary;