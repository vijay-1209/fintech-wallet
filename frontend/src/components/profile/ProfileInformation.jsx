const ProfileInformation = ({ profile, onEdit }) => {
  const fields = [
    {
      label: "Full name",
      value: profile?.name || profile?.fullName || "-",
    },
    {
      label: "Email",
      value: profile?.email || "-",
    },
    {
      label: "Phone",
      value: profile?.phone || "-",
    },
    {
      label: "Country",
      value: profile?.country || "India",
    },
    {
      label: "Member since",
      value: profile?.createdAt
        ? new Date(profile.createdAt).toLocaleDateString("en-IN")
        : "-",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Personal information
        </h3>

        <button
          type="button"
          onClick={onEdit}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Edit
        </button>
      </div>

      <div className="mt-5 divide-y divide-slate-100">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm text-slate-500">{field.label}</span>

            <span className="text-sm font-medium text-slate-900">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInformation;