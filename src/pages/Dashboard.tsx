import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const data = [
  { name: 'Янв', value: 4000 },
  { name: 'Фев', value: 3000 },
  { name: 'Мар', value: 2000 },
  { name: 'Апр', value: 2780 },
  { name: 'Май', value: 1890 },
  { name: 'Июн', value: 2390 },
];

const MetricCard = ({ title, value, change, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="p-3 bg-indigo-100 rounded-full">
        <Icon className="text-indigo-600" size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      {change > 0 ? (
        <TrendingUp className="text-green-500 mr-1" size={20} />
      ) : (
        <TrendingDown className="text-red-500 mr-1" size={20} />
      )}
      <span className={change > 0 ? 'text-green-500' : 'text-red-500'}>
        {Math.abs(change)}%
      </span>
      <span className="text-gray-500 ml-1">vs прошлый месяц</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Основные показатели</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Выручка"
          value="₽12.4M"
          change={8.2}
          icon={DollarSign}
        />
        <MetricCard
          title="Чистая прибыль"
          value="₽2.8M"
          change={-3.1}
          icon={DollarSign}
        />
        <MetricCard
          title="EBITDA"
          value="₽4.2M"
          change={12.5}
          icon={DollarSign}
        />
        <MetricCard
          title="Маржинальность"
          value="22.5%"
          change={5.2}
          icon={Percent}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Динамика выручки
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            AI Рекомендации
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800">Возможности роста</h3>
              <p className="mt-1 text-green-600">
                Анализ показывает потенциал увеличения выручки на 15% при
                оптимизации маркетинговых каналов.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-medium text-yellow-800">Области для улучшения</h3>
              <p className="mt-1 text-yellow-600">
                Рекомендуется обратить внимание на снижение операционных расходов
                в сегменте логистики.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Ключевые метрики
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Конверсия продаж</span>
              <span className="font-semibold">8.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Средний чек</span>
              <span className="font-semibold">₽15,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LTV</span>
              <span className="font-semibold">₽120,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CAC</span>
              <span className="font-semibold">₽2,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;