const SecurityActivity = ({ activities = [] }) => {
  if (!activities.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Security activity
        </h3>

        <p className="mt-4 text-sm text-slate-500">
          No recent security activity.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        Security activity
      </h3>

      <div className="mt-5 divide-y divide-slate-100">
        {activities.map((activity, index) => (
          <div key={activity.id || index} className="flex gap-4 py-4">
            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-900" />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-900">
                {activity.action || "Security event"}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {activity.createdAt
                  ? new Date(activity.createdAt).toLocaleString("en-IN")
                  : "-"}
              </p>

              {activity.ipAddress && (
                <p className="mt-1 text-xs text-slate-400">
                  IP: {activity.ipAddress}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityActivity;