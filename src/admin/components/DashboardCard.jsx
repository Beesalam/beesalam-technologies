const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        <div
          className="h-14 w-14 rounded-2xl flex items-center justify-center text-white"
          style={{ backgroundColor: color }}
        >
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;