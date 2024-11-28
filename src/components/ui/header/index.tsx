import { useLocation } from 'react-router-dom';
import SearchInput from '../search-input';
import { Bell, Search, Settings } from 'lucide-react';
import { formatUrlToText } from '../../../utils/text';
import IconButton from '../icon-button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  className = "",
}) => {
  const location = useLocation();
  const pageTitle = location.pathname === '/' ? 'Overview' : location.pathname.split('/')[1];

  return (
    <header className={`w-full px-10 py-6 flex items-center justify-between ${className} border-b border-accent-300`}>
      <h1 className="text-3xl font-semibold text-app-dark">
        {formatUrlToText(pageTitle)}
      </h1>

      <div className="flex items-center space-x-6">
        <SearchInput
          icon={
            <Search className="w-5 h-5 text-accent-200" />
          }
          placeholder="Search for something"
          aria-label="Search"
        />

        <IconButton
          aria-label="Settings"
        >
          <Settings className="w-6 h-6" />
        </IconButton>

        <IconButton
          variant='secondary'
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
    </header>
  );
};

export default Header;
