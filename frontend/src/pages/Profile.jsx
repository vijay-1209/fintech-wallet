import { useCallback, useEffect, useState } from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInformation from "../components/profile/ProfileInformation";
import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePassword from "../components/profile/ChangePassword";
import Preferences from "../components/profile/Preferences";
import DeleteAccount from "../components/profile/DeleteAccount";

import { getProfile } from "../services/profile.service";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getProfile();

      setProfile(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to load profile.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleProfileUpdated = (updatedProfile) => {
    if (updatedProfile) {
      setProfile((previous) => ({
        ...previous,
        ...updatedProfile,
      }));
    }

    setEditing(false);
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="h-32 rounded-2xl bg-slate-100" />

          <div className="h-80 rounded-2xl bg-slate-100" />

          <div className="h-72 rounded-2xl bg-slate-100" />
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Profile</h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your personal information and account settings.
          </p>
        </div>

        <button
          type="button"
          onClick={loadProfile}
          disabled={loading}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <ProfileHeader profile={profile} />

      <div className="mt-6">
        {editing ? (
          <EditProfileForm
            profile={profile}
            onSuccess={handleProfileUpdated}
            onCancel={() => setEditing(false)}
          />
        ) : (
          <ProfileInformation
            profile={profile}
            onEdit={() => setEditing(true)}
          />
        )}
      </div>

      <div className="mt-6">
        <ChangePassword />
      </div>

      <div className="mt-6">
        <Preferences
          profile={profile}
          onUpdated={(preferences) => {
            if (preferences) {
              setProfile((previous) => ({
                ...previous,
                preferences,
              }));
            }
          }}
        />
      </div>

      <div className="mt-6">
        <DeleteAccount />
      </div>
    </section>
  );
};

export default Profile;