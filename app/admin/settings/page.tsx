'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [adminUsers, setAdminUsers] = useState([
    { id: '1', email: 'info@germanesynergy.com', role: 'superadmin' },
  ]);
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Synergy',
    contactEmail: 'info@synergy.com',
    maintenanceMode: false
  });

  const handleRemoveUser = (userId: string) => {
    const user = adminUsers.find(u => u.id === userId);
    if (user?.role === 'superadmin') {
      alert('Cannot remove superadmin user!');
      return;
    }
    try {
      // TODO: Remove user from db
      setAdminUsers(adminUsers.filter(user => user.id !== userId));
      console.log('Remove user:', userId);
      alert('User removed successfully!');
    } catch (error) {
      console.error('Remove user error:', error);
    }
  };

  const handleAddUser = () => {
    // TODO: Open modal/form to add new user
    const newEmail = prompt('Enter email for new admin user:');
    if (newEmail) {
      const newUser = {
        id: Date.now().toString(),
        email: newEmail,
        role: 'admin'
      };
      setAdminUsers([...adminUsers, newUser]);
      console.log('Add user:', newEmail);
      alert('User added successfully!');
    }
  };

  const handleSaveSettings = async () => {
    try {
      // TODO: Save settings
      console.log('Save settings:', siteSettings);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Save settings error:', error);
    }
  };

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Admin Users</h2>
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-left">Email</th>
                  <th className="text-left">Role</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button 
                        onClick={() => handleRemoveUser(user.id)} 
                        disabled={user.role === 'superadmin'}
                        className={user.role === 'superadmin' ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:text-red-900 hover:underline'}
                      >
                        {user.role === 'superadmin' ? 'Protected' : 'Remove'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleAddUser}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Site Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                <input
                  type="text"
                  value={siteSettings.siteName}
                  onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                <input
                  type="email"
                  value={siteSettings.contactEmail}
                  onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={siteSettings.maintenanceMode}
                    onChange={(e) => setSiteSettings({ ...siteSettings, maintenanceMode: e.target.checked })}
                    className="mr-2"
                  />
                  Maintenance Mode
                </label>
              </div>
            </div>
            <button
              onClick={handleSaveSettings}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
  );
}