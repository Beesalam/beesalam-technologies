import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import RecentProducts from "../components/RecentProducts";

import {
  FiAlertTriangle,
  FiBox,
  FiDollarSign,
  FiXCircle,
} from "react-icons/fi";

import { getProductStats } from "../services/productService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    outOfStock: 0,
    inventoryValue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getProductStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatCurrency = (amount) =>
    `₦${amount.toLocaleString()}`;

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
            value={loading ? "..." : stats.totalProducts}
            icon={FiBox}
            color="#FF7A00"
          />

          <DashboardCard
            title="Low Stock"
            value={loading ? "..." : stats.lowStock}
            icon={FiAlertTriangle}
            color="#F59E0B"
          />

          <DashboardCard
            title="Out of Stock"
            value={loading ? "..." : stats.outOfStock}
            icon={FiXCircle}
            color="#EF4444"
          />

          <DashboardCard
            title="Inventory Value"
            value={
              loading
                ? "..."
                : formatCurrency(stats.inventoryValue)
            }
            icon={FiDollarSign}
            color="#10B981"
          />
        </div>
        <RecentProducts />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;