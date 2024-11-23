import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home, PieChart, TrendingUp, Users, BarChart2, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const menuItems = [
  { icon: Home, label: 'Основные', path: '/' },
  { icon: PieChart, label: 'Финансы', path: '/finance' },
  { icon: TrendingUp, label: 'Маркетинг', path: '/marketing' },
  { icon: BarChart2, label: 'Продажи', path: '/sales' },
  { icon: Users, label: 'HR', path: '/hr' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-indigo-900 text-white transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <h1 className="text-xl font-bold">AI Analytics</h1>}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-indigo-800 rounded-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center p-4 hover:bg-indigo-800 transition-colors"
            >
              <item.icon size={24} />
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </button>
          ))}
          <button
            onClick={logout}
            className="w-full flex items-center p-4 hover:bg-indigo-800 transition-colors mt-auto"
          >
            <LogOut size={24} />
            {isSidebarOpen && <span className="ml-4">Выход</span>}
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;