const ProfileHeader = ({ profile }) => {
  const name = profile?.name || profile?.fullName || "User";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white">
          {initials}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">{name}</h2>

          <p className="mt-1 text-sm text-slate-500">{profile?.email || "-"}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {profile?.status || "ACTIVE"}
            </span>

            {profile?.role && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {profile.role}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;