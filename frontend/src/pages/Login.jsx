import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { login, authLoading } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const registered = location.state?.registered;

  {
    registered && (
      <div
        role="status"
        className="mb-5 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700"
      >
        Account created successfully. You can now sign in.
      </div>
    );
  }

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!form.email.trim()) {
      setError("Email is required.");

      return;
    }

    if (!form.password) {
      setError("Password is required.");

      return;
    }

    try {
      await login({
        email: form.email.trim(),
        password: form.password,
      });

      const redirectPath = location.state?.from?.pathname || "/dashboard";

      navigate(redirectPath, {
        replace: true,
      });
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid email or password.";

      setError(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
            F
          </div>

          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to your FinWallet account.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            />
          </div>

          <button
            type="submit"
            disabled={authLoading}
            className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {authLoading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-slate-900 hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;