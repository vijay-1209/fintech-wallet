const AmountInput = ({ value, onChange, error, disabled = false }) => {
  return (
    <div>
      <label
        htmlFor="amount"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Amount
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-slate-500">
          ₹
        </span>

        <input
          id="amount"
          name="amount"
          type="number"
          min="1"
          max="100000"
          step="0.01"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder="0.00"
          className={`w-full rounded-xl border py-4 pl-10 pr-4 text-xl font-semibold outline-none transition ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-slate-300 focus:border-slate-900"
          } disabled:bg-slate-100`}
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default AmountInput;