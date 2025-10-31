import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectManagement from './ProjectManagement';
import ContactManagement from './ContactManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [adminUsername, setAdminUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const username = localStorage.getItem('adminUsername');
    
    if (!token || !username) {
      navigate('/admin/login');
      return;
    }
    
    setAdminUsername(username);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'contacts', label: 'Contacts', icon: '📧' },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-violet-500">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-zinc-300">Welcome, {adminUsername}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition duration-200 ${
                  activeTab === tab.id
                    ? 'border-violet-500 text-violet-400'
                    : 'border-transparent text-zinc-400 hover:text-zinc-300 hover:border-zinc-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'projects' && <ProjectManagement />}
        {activeTab === 'contacts' && <ContactManagement />}
      </main>
    </div>
  );
};

export default AdminDashboard;
