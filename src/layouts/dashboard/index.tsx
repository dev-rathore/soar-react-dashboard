import { Sidebar, Header } from '../../components/ui';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="px-10 py-8 bg-accent flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
