import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div style={{ flex: 1, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                    <h2>Summary</h2>
                    <ul>
                        <li>Total Sales: $10,000</li>
                        <li>Active Listings: 25</li>
                        <li>Pending Orders: 5</li>
                    </ul>
                </div>
                <div style={{ flex: 2, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                    <h2>Recent Activity</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Date</th>
                                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Activity</th>
                                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-06-01</td>
                                <td>Order #1234</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>2024-05-30</td>
                                <td>Added new listing</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>2024-05-28</td>
                                <td>Order #1233</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;