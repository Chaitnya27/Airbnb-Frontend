import { SidebarTrigger } from '@/components/ui/sidebar';
import AccountMenu from '../account-menu';
import { useAuthContext } from '@/lib/provider/auth-context-provider';


const AdminHeader = () => {
  const { authenticatedUser } = useAuthContext();

  return (
    <header className="sticky top-0 z-10 flex items-center border-b h-12 sm:h-13 md:h-14 bg-background">
      <div className="w-full px-3 sm:px-4 md:px-6 flex items-center justify-between">
        <SidebarTrigger className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        <AccountMenu user={authenticatedUser?.user} />
      </div>
    </header>
  );
};

export { AdminHeader };