import { Link } from "react-router-dom";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  color,
  to,
}) => {
  const Card = (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2 break-words">
            {value}
          </h2>
        </div>

        <div
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <Icon size={24} className="sm:w-7 sm:h-7" />
        </div>
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="block">
        {Card}
      </Link>
    );
  }

  return Card;
};

export default DashboardCard;