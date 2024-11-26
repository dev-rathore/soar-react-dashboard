import { NavLink, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  item: {
    icon?: string | React.ReactNode;
    name: string;
    path: string;
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
}) => {
  const pathname = useLocation().pathname;
  const isActive = pathname === item.path;

  return (
    <li key={item.name}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-4 py-2 rounded-md text-lg ${isActive ? 'text-app-dark' : 'text-app-gray-100'
          }`
        }
      >
        {
          item.icon && typeof item.icon === 'string' ? (
            <img
              alt={item.name}
              className={`w-6 h-6 fill-current ${isActive ? 'text-app-dark' : 'text-app-gray-100'}`}
              src={item.icon}
            />
          ) : item.icon
        }
        <span className="ml-2">{item.name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
