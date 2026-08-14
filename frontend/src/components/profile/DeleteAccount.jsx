import { useState } from "react";

import { deleteAccount } from "../../services/profile.service";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account?",
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      await deleteAccount(password);

      window.location.href = "/login";
    } catch (error) {
      setError(error.response?.data?.message || "Unable to delete account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-red-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-red-700">Delete account</h3>

      <p className="mt-2 text-sm text-slate-500">
        Permanently delete your account and associated data. This action cannot
        be undone.
      </p>

      {error && (
        <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
          autoComplete="current-password"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500"
        />

        <button
          type="submit"
          disabled={loading || !password}
          className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Deleting..." : "Delete account"}
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;