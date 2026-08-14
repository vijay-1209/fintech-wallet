import { useState } from "react";

import Preferences from "../components/profile/Preferences";

const Settings = () => {
  const [theme, setTheme] = useState("system");

  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>

        <p className="mt-2 text-sm text-slate-500">
          Customize your wallet experience.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">Appearance</h3>

        <p className="mt-1 text-sm text-slate-500">
          Choose how the application should appear.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              value: "system",
              label: "System",
            },
            {
              value: "light",
              label: "Light",
            },
            {
              value: "dark",
              label: "Dark",
            },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              className={`rounded-xl border p-4 text-left ${
                theme === option.value
                  ? "border-slate-900 bg-slate-50"
                  : "border-slate-200"
              }`}
            >
              <p className="font-medium text-slate-900">{option.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Preferences />
      </div>
    </section>
  );
};

export default Settings;