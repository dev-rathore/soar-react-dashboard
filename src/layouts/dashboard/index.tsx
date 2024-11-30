import { useState } from 'react';
import { Sidebar, Header } from '../../components/ui';
import { cn } from '../../utils/tailwind';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex">
      <div
        className={cn(
          'flex lg:hidden absolute top-0 left-0 bottom-0 right-0 h-full z-10 bg-gray-800 opacity-10',
          isSidebarOpen ? 'flex' : 'hidden',
        )}
        onClick={toggleSidebar}
      />
      <Sidebar
        className={cn(
          'flex lg:hidden absolute top-0 left-0 h-full transition-all bg-white shadow-lg z-50',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        className='hidden lg:flex'
      />
      <div className="w-full flex flex-1 flex-col">
        <Header
          onToggleSidebar={toggleSidebar}
        />
        <div
          className="px-6 sm:px-10 py-8 bg-white md:bg-accent flex flex-1 flex-grow max-h-[880px] overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
