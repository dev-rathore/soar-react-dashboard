import {
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  PrivilegeIcon,
  ServiceIcon,
  TransactionIcon,
  UserIcon,
} from '../components/icons';

type Icon = {
  isActive: boolean;
}

const active = (isActive: boolean) => isActive ? '#232323' : '#B1B1B1';

export const MENU_ITEMS = [
  {
    icon: ({
      isActive,
    }: Icon) => <HomeIcon fill={active(isActive)} />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <TransactionIcon fill={active(isActive)} />,
    name: "Transactions",
    path: "/transactions",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <UserIcon fill={active(isActive)} />,
    name: "Accounts",
    path: "/accounts",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <InvestmentIcon fill={active(isActive)} />,
    name: "Investments",
    path: "/investments",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <CreditCardIcon fill={active(isActive)} />,
    name: "Credit Cards",
    path: "/credit-cards",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <LoanIcon fill={active(isActive)} />,
    name: "Loans",
    path: "/loans",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <ServiceIcon fill={active(isActive)} />,
    name: "Services",
    path: "/services",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <PrivilegeIcon fill={active(isActive)} />,
    name: "My Privileges",
    path: "/privileges",
  },
  {
    icon: ({
      isActive,
    }: Icon) => <CogIcon fill={active(isActive)} />,
    name: "Setting",
    path: "/setting",
  },
];
