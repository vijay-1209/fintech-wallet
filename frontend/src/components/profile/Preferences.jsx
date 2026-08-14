import { useEffect, useState } from "react";

import { updatePreferences } from "../../services/profile.service";

const Preferences = ({ profile, onUpdated }) => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    paymentNotifications: true,
    securityNotifications: true,
    marketingNotifications: false,
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (profile?.preferences) {
      setPreferences((previous) => ({
        ...previous,
        ...profile.preferences,
      }));
    }
  }, [profile]);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setPreferences((previous) => ({
      ...previous,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await updatePreferences(preferences);

      setMessage(response.message || "Preferences updated successfully.");

      onUpdated?.(response.data);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Unable to update preferences.",
      );
    } finally {
      setLoading(false);
    }
  };

  const options = [
    {
      name: "emailNotifications",
      title: "Email notifications",
      description: "Receive important account updates by email.",
    },
    {
      name: "paymentNotifications",
      title: "Payment notifications",
      description: "Receive notifications when payments are completed.",
    },
    {
      name: "securityNotifications",
      title: "Security notifications",
      description: "Receive alerts about important security events.",
    },
    {
      name: "marketingNotifications",
      title: "Marketing notifications",
      description: "Receive product updates and promotional messages.",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        Notification preferences
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Choose which notifications you want to receive.
      </p>

      {message && (
        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="divide-y divide-slate-100">
          {options.map((option) => (
            <label
              key={option.name}
              className="flex cursor-pointer items-center justify-between gap-5 py-5"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {option.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {option.description}
                </p>
              </div>

              <input
                type="checkbox"
                name={option.name}
                checked={Boolean(preferences[option.name])}
                onChange={handleChange}
                className="h-5 w-5 rounded border-slate-300"
              />
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save preferences"}
        </button>
      </form>
    </div>
  );
};

export default Preferences;