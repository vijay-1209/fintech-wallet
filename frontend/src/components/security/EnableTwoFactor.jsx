import { useState } from "react";

import {
  setupTwoFactor,
  verifyTwoFactorSetup,
} from "../../services/security.service";

import OtpInput from "./OtpInput";

const EnableTwoFactor = ({ onEnabled }) => {
  const [setup, setSetup] = useState(null);

  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [backupCodes, setBackupCodes] = useState([]);

  const handleSetup = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await setupTwoFactor();

      setSetup(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to start 2FA setup.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setError("Enter a valid 6-digit code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await verifyTwoFactorSetup(otp);

      setBackupCodes(response.data?.backupCodes || []);

      onEnabled?.();
    } catch (error) {
      setError(error.response?.data?.message || "Invalid authentication code.");
    } finally {
      setLoading(false);
    }
  };

  if (backupCodes.length) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-900">
          2FA enabled successfully
        </h3>

        <p className="mt-2 text-sm text-green-700">
          Save these backup codes somewhere secure. They can be used if you lose
          access to your authenticator.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-white p-4 sm:grid-cols-3">
          {backupCodes.map((code) => (
            <code
              key={code}
              className="rounded-lg bg-slate-100 p-2 text-center text-sm font-semibold"
            >
              {code}
            </code>
          ))}
        </div>
      </div>
    );
  }

  if (!setup) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Enable two-factor authentication
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Use an authenticator application such as Google Authenticator,
          Microsoft Authenticator, or Authy.
        </p>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleSetup}
          disabled={loading}
          className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {loading ? "Preparing..." : "Enable 2FA"}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">Scan QR code</h3>

      <p className="mt-2 text-sm text-slate-500">
        Scan this QR code with your authenticator application.
      </p>

      {setup.qrCode && (
        <div className="mt-6 flex justify-center">
          <img
            src={setup.qrCode}
            alt="2FA setup QR code"
            className="h-48 w-48 rounded-xl border border-slate-200 p-2"
          />
        </div>
      )}

      {setup.secret && (
        <div className="mt-5">
          <p className="text-xs text-slate-500">Manual setup key</p>

          <code className="mt-2 block break-all rounded-xl bg-slate-100 p-4 text-center text-sm font-semibold">
            {setup.secret}
          </code>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleVerify} className="mt-6 space-y-5">
        <OtpInput value={otp} onChange={setOtp} disabled={loading} />

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify and enable"}
        </button>
      </form>
    </div>
  );
};

export default EnableTwoFactor;