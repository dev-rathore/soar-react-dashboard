import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  DashboardLayout,
} from '../layouts';
import {
  Accounts,
  CreditCards,
  Investments,
  Loans,
  Overview,
  Privileges,
  Services,
  Setting,
  Transactions,
} from '../pages';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="investments" element={<Investments />} />
        <Route path="credit-cards" element={<CreditCards />} />
        <Route path="loans" element={<Loans />} />
        <Route path="services" element={<Services />} />
        <Route path="privileges" element={<Privileges />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
