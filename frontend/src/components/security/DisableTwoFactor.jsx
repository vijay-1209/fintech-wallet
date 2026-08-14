import { useState } from "react";

import { disableTwoFactor } from "../../services/security.service";

import OtpInput from "./OtpInput";

const DisableTwoFactor = ({ onDisabled }) => {
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setError("Enter a valid 6-digit code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await disableTwoFactor(otp);

      setOtp("");

      onDisabled?.();
    } catch (error) {
      setError(error.response?.data?.message || "Unable to disable 2FA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-red-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        Disable two-factor authentication
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        This will reduce the security of your account. Confirm using your
        current authenticator code.
      </p>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <OtpInput value={otp} onChange={setOtp} disabled={loading} />

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="w-full rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Disabling..." : "Disable 2FA"}
        </button>
      </form>
    </div>
  );
};

export default DisableTwoFactor;