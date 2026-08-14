import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Wallet",
    path: "/wallet",
  },
  {
    name: "Payments",
    path: "/payments",
  },
  {
    name: "Transactions",
    path: "/transactions",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Security",
    path: "/security",
  }
];

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:block">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          FinWallet
        </h1>
      </div>

      <nav className="p-4">
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main menu
        </p>

        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Quick actions
          </p>

          <div className="space-y-1">
            <NavLink
              to="/payments/send"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              Send money
            </NavLink>

            <NavLink
              to="/wallet/add-money"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              Add money
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;