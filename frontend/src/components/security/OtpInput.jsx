import { useRef } from "react";

const OtpInput = ({ value, onChange, disabled = false }) => {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 6);

    onChange(value);
  };

  return (
    <div>
      <label
        htmlFor="otp"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Authentication code
      </label>

      <input
        ref={inputRef}
        id="otp"
        name="otp"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="000000"
        className="w-full rounded-xl border border-slate-300 px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] text-slate-900 outline-none focus:border-slate-900 disabled:bg-slate-100"
      />

      <p className="mt-2 text-xs text-slate-500">
        Enter the 6-digit code from your authenticator app.
      </p>
    </div>
  );
};

export default OtpInput;