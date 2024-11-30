import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../../utils/tailwind';

interface SidebarItemProps {
  item: {
    icon: string | ((props: {
      isActive: boolean;
    }) => JSX.Element);
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
    <li
      key={item.name}
      className={cn(
        'relative px-8',
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-0 w-[5px] h-full rounded-r-2xl',
          isActive ? 'bg-app-black' : 'bg-transparent',
        )}
      />
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-4 py-2 rounded-md text-lg ${isActive ? 'text-app-black' : 'text-app-gray-100'
          }`
        }
      >
        {
          item.icon && typeof item.icon === 'function' ? (
            item.icon({
              isActive,
            })
          ) : (
            <img
              alt={item.name}
              className={`w-6 h-6 fill-current ${isActive ? 'text-app-dark' : 'text-app-gray-100'}`}
              src={item.icon}
            />
          )
        }
        <span className="ml-2">{item.name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
