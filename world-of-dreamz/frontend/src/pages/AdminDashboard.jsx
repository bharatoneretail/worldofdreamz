import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState(''); // Added to show errors instead of just logging out
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('wod_admin_token');
    if (!token) { 
      navigate('/admin/login'); 
      return; 
    }

    // CHANGE 1: Use relative URL '/api/leads'
    // This automatically adapts to localhost OR your ngrok URL!
    axios.get('/api/leads', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setLeads(res.data.data))
    .catch((err) => {
      console.error("Dashboard Fetch Error:", err);
      
      // CHANGE 2: ONLY log out if the backend explicitly says "Unauthorized" (401)
      // This stops the dashboard from kicking you out on minor network blips
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('wod_admin_token');
        navigate('/admin/login');
      } else {
        setError('Failed to load leads. Please ensure the backend is running.');
      }
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('wod_admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
        </div>
        
        {/* Show error message if fetch fails (without kicking you out) */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No leads found. Wait for customers to submit the contact form!
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{lead.email}</div>
                      <div>{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        {lead.interestedFormat}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={lead.message}>
                      {lead.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;