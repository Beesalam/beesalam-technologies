import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/DashboardCard";

import {
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to Beesalam Technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <DashboardCard
            title="Products"
            value="0"
            icon={FiBox}
            color="#FF7A00"
          />

          <DashboardCard
            title="Orders"
            value="0"
            icon={FiShoppingCart}
            color="#2563EB"
          />

          <DashboardCard
            title="Customers"
            value="0"
            icon={FiUsers}
            color="#10B981"
          />

          <DashboardCard
            title="Revenue"
            value="₦0"
            icon={FiDollarSign}
            color="#9333EA"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;