import React from 'react';
import TransactionList from '../features/transactions/TransactionList';

const DashboardPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <TransactionList />
        </div>
    );
};

export default DashboardPage;
