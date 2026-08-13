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
];

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:block">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <h1 className="text-xl font-bold text-slate-900">FinWallet</h1>
      </div>

      <nav className="space-y-1 p-4">
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
      </nav>
    </aside>
  );
};

export default Sidebar;