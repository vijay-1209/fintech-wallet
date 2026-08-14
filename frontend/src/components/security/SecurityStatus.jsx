const SecurityStatus = ({ enabled }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Two-factor authentication
        </p>

        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          {enabled ? "Enabled" : "Not enabled"}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {enabled
            ? "Your account has an additional security layer."
            : "Protect your account with an authenticator app."}
        </p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          enabled
            ? "bg-green-50 text-green-700"
            : "bg-yellow-50 text-yellow-700"
        }`}
      >
        {enabled ? "Protected" : "Setup required"}
      </span>
    </div>
  );
};

export default SecurityStatus;