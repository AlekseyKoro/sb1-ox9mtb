import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const monthlyData = [
  { month: 'Янв', revenue: 15000000, opex: 8000000, ebitda: 7000000, netProfit: 5000000 },
  { month: 'Фев', revenue: 16500000, opex: 8500000, ebitda: 8000000, netProfit: 5500000 },
  { month: 'Мар', revenue: 14800000, opex: 7800000, ebitda: 7000000, netProfit: 4800000 },
  { month: 'Апр', revenue: 17200000, opex: 9000000, ebitda: 8200000, netProfit: 5800000 },
  { month: 'Май', revenue: 18500000, opex: 9500000, ebitda: 9000000, netProfit: 6500000 },
  { month: 'Июн', revenue: 19800000, opex: 10000000, ebitda: 9800000, netProfit: 7000000 },
];

const MetricCard = ({ title, value, change, subtitle }: { title: string; value: string; change: number; subtitle?: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
        <span className="ml-1">{Math.abs(change)}%</span>
      </div>
    </div>
  </div>
);

const Finance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Финансовые показатели</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Экспорт отчета
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Выручка"
          value="₽19.8M"
          change={8.2}
          subtitle="vs прошлый месяц"
        />
        <MetricCard
          title="Операционные расходы"
          value="₽10.0M"
          change={-3.1}
          subtitle="vs прошлый месяц"
        />
        <MetricCard
          title="Рентабельность"
          value="35.4%"
          change={5.2}
          subtitle="vs прошлый месяц"
        />
        <MetricCard
          title="EBITDA"
          value="₽9.8M"
          change={12.5}
          subtitle="vs прошлый месяц"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Динамика основных показателей</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" name="Выручка" stroke="#4F46E5" strokeWidth={2} />
                <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="netProfit" name="Чистая прибыль" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Структура расходов</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="opex" name="Операционные расходы" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Денежный поток</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-600">Операционный денежный поток</span>
              <span className="font-semibold text-green-600">+₽8.5M</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-600">Инвестиционный денежный поток</span>
              <span className="font-semibold text-red-600">-₽2.3M</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-600">Финансовый денежный поток</span>
              <span className="font-semibold text-red-600">-₽1.8M</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded font-semibold">
              <span>Чистый денежный поток</span>
              <span className="text-green-600">+₽4.4M</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Задолженность</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Дебиторская задолженность</h3>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-600">Текущая</span>
                <span className="font-semibold">₽12.5M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded mt-2">
                <span className="text-gray-600">Просроченная</span>
                <span className="font-semibold text-red-600">₽2.8M</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Кредиторская задолженность</h3>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-600">Текущая</span>
                <span className="font-semibold">₽8.3M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded mt-2">
                <span className="text-gray-600">Просроченная</span>
                <span className="font-semibold text-red-600">₽1.2M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;