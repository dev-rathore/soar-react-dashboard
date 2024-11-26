import { Cog } from 'lucide-react';
import SidebarItem from './sidebar-item';

import LogoIcon from '../../../assets/icons/logo.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import UserIcon from '../../../assets/icons/user.svg';
import TransactionIcon from '../../../assets/icons/transfer.svg';
import InvestmentIcon from '../../../assets/icons/economic-investment.svg';
import LoanIcon from '../../../assets/icons/loan.svg';
import ServiceIcon from '../../../assets/icons/service.svg';
import PrivilegeIcon from '../../../assets/icons/econometrics.svg';
import { CreditCardIcon } from '../../icons';

const Sidebar = () => {
  const menuItems = [
    {
      icon: HomeIcon,
      name: 'Dashboard',
      path: '/'
    },
    {
      icon: TransactionIcon,
      name: 'Transactions',
      path: '/transactions'
    },
    {
      icon: UserIcon,
      name: 'Accounts',
      path: '/accounts'
    },
    {
      icon: InvestmentIcon,
      name: 'Investments',
      path: '/investments'
    },
    {
      icon: <CreditCardIcon />,
      name: 'Credit Cards',
      path: '/credit-cards'
    },
    {
      icon: LoanIcon,
      name: 'Loans',
      path: '/loans'
    },
    {
      icon: ServiceIcon,
      name: 'Services',
      path: '/services'
    },
    {
      icon: PrivilegeIcon,
      name: 'My Privileges',
      path: '/privileges'
    },
    {
      icon: <Cog size={25} />,
      name: 'Setting',
      path: '/setting'
    },
  ];

  return (
    <div className="h-screen text-app-dark w-60 flex flex-col border-r border-accent-300">
      <div className="flex items-end gap-3 text-2xl font-extrabold py-6 px-8">
        <img
          alt="soar-task-icon"
          className="w-9 h-9 text-app-dark"
          src={LogoIcon}
        />
        <span>Soar Task</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3 py-4 px-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.name} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
