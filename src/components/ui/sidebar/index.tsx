import SidebarItem from './sidebar-item';

import LogoIcon from '../../../assets/icons/logo.svg';
import { cn } from '../../../utils/tailwind';
import { MENU_ITEMS } from '../../../constants/menu';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  className = "",
}) => {
  const onSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div
      onClick={onSidebarClick}
      className={cn(
        "h-screen text-app-dark min-w-60 flex flex-col border-r border-accent-300",
        className,
      )}
    >
      <div className="flex items-end gap-3 text-2xl font-extrabold py-6 px-8">
        <img
          alt="soar-task-icon"
          className="w-9 h-9 text-app-dark"
          src={LogoIcon}
        />
        <span>Soar Task</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3 py-4">
          {MENU_ITEMS.map((item) => (
            <SidebarItem key={item.name} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
