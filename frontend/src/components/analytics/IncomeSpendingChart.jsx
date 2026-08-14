import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const IncomeSpendingChart = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Income vs spending
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Compare incoming and outgoing payments.
        </p>
      </div>

      {!data.length ? (
        <div className="flex h-80 items-center justify-center text-sm text-slate-500">
          No income or spending data available.
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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

              <Tooltip />

              <Legend />

              <Bar
                dataKey="income"
                name="Income"
                fill="currentColor"
                className="text-green-500"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="spending"
                name="Spending"
                fill="currentColor"
                className="text-red-500"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default IncomeSpendingChart;