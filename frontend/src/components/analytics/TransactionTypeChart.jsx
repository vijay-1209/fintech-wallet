import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TransactionTypeChart = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Transaction types
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          See which payment types you use most.
        </p>
      </div>

      {!data.length ? (
        <div className="flex h-72 items-center justify-center text-sm text-slate-500">
          No transaction type data available.
        </div>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis type="number" allowDecimals={false} />

              <YAxis type="category" dataKey="name" width={100} />

              <Tooltip />

              <Bar
                dataKey="value"
                name="Transactions"
                fill="currentColor"
                className="text-slate-900"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TransactionTypeChart;