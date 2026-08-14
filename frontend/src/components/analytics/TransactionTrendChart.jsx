import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const formatCurrency = (value) => {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
};

const TransactionTrendChart = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Transaction trends
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Track your payment activity over time.
        </p>
      </div>

      {!data.length ? (
        <div className="flex h-80 items-center justify-center text-sm text-slate-500">
          No transaction data available.
        </div>
      ) : (
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 12,
                }}
              />

              <YAxis
                tick={{
                  fontSize: 12,
                }}
              />

              <Tooltip formatter={(value) => formatCurrency(value)} />

              <Line
                type="monotone"
                dataKey="sent"
                stroke="currentColor"
                className="text-red-500"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="received"
                stroke="currentColor"
                className="text-green-500"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="mt-5 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="text-slate-500">Sent</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="text-slate-500">Received</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionTrendChart;