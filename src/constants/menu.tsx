import HomeIcon from '../assets/icons/home.svg';
import UserIcon from '../assets/icons/user.svg';
import TransactionIcon from '../assets/icons/transfer.svg';
import InvestmentIcon from '../assets/icons/economic-investment.svg';
import LoanIcon from '../assets/icons/loan.svg';
import ServiceIcon from '../assets/icons/service.svg';
import PrivilegeIcon from '../assets/icons/econometrics.svg';
import { CreditCardIcon } from '../components/icons';
import { Cog } from 'lucide-react';

export const MENU_ITEMS = [
  {
    icon: HomeIcon,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: TransactionIcon,
    name: "Transactions",
    path: "/transactions",
  },
  {
    icon: UserIcon,
    name: "Accounts",
    path: "/accounts",
  },
  {
    icon: InvestmentIcon,
    name: "Investments",
    path: "/investments",
  },
  {
    icon: <CreditCardIcon />,
    name: "Credit Cards",
    path: "/credit-cards",
  },
  {
    icon: LoanIcon,
    name: "Loans",
    path: "/loans",
  },
  {
    icon: ServiceIcon,
    name: "Services",
    path: "/services",
  },
  {
    icon: PrivilegeIcon,
    name: "My Privileges",
    path: "/privileges",
  },
  {
    icon: <Cog size={25} />,
    name: "Setting",
    path: "/setting",
  },
];
