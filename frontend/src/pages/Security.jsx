import { useEffect, useState } from "react";

import SecurityStatus from "../components/security/SecurityStatus";
import EnableTwoFactor from "../components/security/EnableTwoFactor";
import DisableTwoFactor from "../components/security/DisableTwoFactor";
import SecurityActivity from "../components/security/SecurityActivity";

import {
  getSecurityStatus,
  getSecurityActivity,
} from "../services/security.service";

const Security = () => {
  const [enabled, setEnabled] = useState(false);

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadSecurity = async () => {
    setLoading(true);
    setError("");

    try {
      const [statusResponse, activityResponse] = await Promise.all([
        getSecurityStatus(),
        getSecurityActivity(),
      ]);

      setEnabled(Boolean(statusResponse.data?.enabled));

      setActivities(activityResponse.data?.activities || []);
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to load security settings.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSecurity();
  }, []);

  const handleEnabled = () => {
    setEnabled(true);
    loadSecurity();
  };

  const handleDisabled = () => {
    setEnabled(false);
    loadSecurity();
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 w-48 rounded bg-slate-100" />

          <div className="mt-3 h-4 w-72 rounded bg-slate-100" />

          <div className="mt-8 h-32 rounded-2xl bg-slate-100" />

          <div className="mt-6 h-64 rounded-2xl bg-slate-100" />
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Security</h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your account security and authentication settings.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <SecurityStatus enabled={enabled} />

      <div className="mt-6">
        {!enabled ? (
          <EnableTwoFactor onEnabled={handleEnabled} />
        ) : (
          <DisableTwoFactor onDisabled={handleDisabled} />
        )}
      </div>

      <div className="mt-6">
        <SecurityActivity activities={activities} />
      </div>
    </section>
  );
};

export default Security;