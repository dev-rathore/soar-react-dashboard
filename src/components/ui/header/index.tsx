import { Link, useLocation } from 'react-router-dom';
import { Bell, Search, Settings } from 'lucide-react';
import { formatUrlToText } from '../../../utils/text';
import IconButton from '../icon-button';
import PrimaryInput from '../primary-input';
import Button from '../button';
import { cn } from '../../../utils/tailwind';
import hamBurgerSrc from '../../../assets/icons/hamburger.svg';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  className = "",
  onToggleSidebar,
}) => {
  const location = useLocation();
  const pageTitle = location.pathname === '/' ? 'Overview' : location.pathname.split('/')[1];

  return (
    <header
      className={cn(
        'w-full px-6 py-4 sm:px-10 sm:py-6 border-b border-accent-300',
        className,
      )}
    >
      <div className="hidden lg:flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold text-app-dark">
          {formatUrlToText(pageTitle)}
        </h1>

        <div className="flex items-center space-x-6">
          <PrimaryInput
            icon={
              <Search className="w-5 h-5 text-accent-200" />
            }
            placeholder="Search for something"
            aria-label="Search"
          />

          <Link to="/setting">
            <IconButton
              aria-label="Settings"
            >
              <Settings className="w-6 h-6" />
            </IconButton>
          </Link>

          <IconButton
            iconColor='text-app-blue'
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6" />
          </IconButton>

          <button
            aria-label="User profile"
          >
            <img
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="User profile"
              className="w-14 h-14 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      <div className="flex lg:hidden flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <Button
            className="text-sm"
            onClick={onToggleSidebar}
          >
            <img
              src={hamBurgerSrc}
              alt="Hamburger"
              className="w-6 h-6"
            />
          </Button>
          <h1 className="text-2xl sm:text-3xl font-semibold text-app-dark">
            {formatUrlToText(pageTitle)}
          </h1>
          <button
            aria-label="User profile"
          >
            <img
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="User profile"
              className="w-14 h-14 rounded-full object-cover"
            />
          </button>
        </div>
        <div>
          <PrimaryInput
            icon={
              <Search className="w-5 h-5 text-accent-200" />
            }
            placeholder="Search for something"
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
