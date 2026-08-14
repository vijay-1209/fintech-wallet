import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#16a34a", "#eab308", "#ef4444", "#64748b"];

const PaymentStatusChart = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Payment status</h3>

        <p className="mt-1 text-sm text-slate-500">
          Breakdown of your payment outcomes.
        </p>
      </div>

      {!data.length ? (
        <div className="flex h-72 items-center justify-center text-sm text-slate-500">
          No payment status data available.
        </div>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default PaymentStatusChart;