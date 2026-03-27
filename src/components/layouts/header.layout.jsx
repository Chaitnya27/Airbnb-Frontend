import React from 'react'
import { Button } from '../ui/button'
import Icon from '../ui/icons'
import { SERVICE_LIST } from '@/app/config/app.config'
import { Link, useNavigate } from 'react-router'
import { useAuthContext } from '@/lib/provider/auth-context-provider'
import AccountMenu from '../account-menu'
import { cn } from '@/lib/utils'

const Header = ({ showServiceList = true }) => {
    const navigate = useNavigate();
    const { authenticatedUser } = useAuthContext();
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='bg-white py-2 shadow-sm'>
            <div className="container px-3 sm:px-4 md:px-6 flex justify-between items-center pb-1 gap-2 sm:gap-4">
                {/* Logo */}
                <div id="logo-wrapper" className="shrink-0">
                    <Link to="/" aria-label='go to Airbnb clone'>
                        <img
                            height={isMobile ? 40 : 50}
                            width={isMobile ? 100 : 150}
                            src='/assets/Airbnb_Logo_Bélo.svg.png'
                            alt='Airbnb logo'
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Auth Section */}
                <div id='auth' className='flex gap-1 sm:gap-2 md:gap-3 justify-center items-center'>

                    {/* If logged in: Show Explore Hotels (desktop only) + Account Menu */}
                    {authenticatedUser?.user ? (
                        <>
                            {/* Explore Hotels - Hidden on Mobile */}
                            <Button
                                onClick={() => navigate('/')}
                                className="hidden sm:inline-flex bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#FF5A5F] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
                            >
                                Explore Hotels
                            </Button>

                            {/* Account Menu */}
                            <AccountMenu user={authenticatedUser.user} />
                        </>
                    ) : (
                        <>



                            <Button
                                onClick={() => navigate('/')}
                                className="bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#FF5A5F] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10 whitespace-nowrap"
                            >
                                Explore Hotels
                            </Button>

                            {/* Register Button - Hidden on Mobile */}
                            <Button
                                className="hidden sm:inline-flex bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#FF5A5F] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
                                asChild
                            >
                                <Link to="/signup">Register</Link>
                            </Button>

                            {/* Login Button - Text version hidden on mobile */}
                            <Button
                                className="hidden sm:inline-flex bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#f93f45] hover:text-white cursor-pointer font-bold text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
                                asChild
                            >
                                <Link to="/signin">Login</Link>
                            </Button>

                            {/* Mobile: Show Login Icon only */}
                            <Button
                                className="sm:hidden bg-white text-gray-700 border border-gray-300 rounded-sm hover:bg-[#f93f45] hover:text-white cursor-pointer p-1.5 h-8 w-8 flex items-center justify-center shrink-0"
                                asChild
                            >
                                <Link to="/signin" aria-label="Login">
                                    <Icon icon="user" size="18" />
                                </Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* Service List Navigation */}
{showServiceList && (
    <div className='container px-3 sm:px-4 md:px-6 flex gap-1 overflow-x-auto scrollbar border-t mt-2 py-2'>
        {SERVICE_LIST.map(items => (
            <Button
                key={items.id}
                className={cn(
                    'bg-transparent shadow-none font-normal text-gray-600 rounded-full hover:bg-gray-100',
                    'cursor-pointer flex items-center gap-1 sm:gap-2 px-3 sm:px-6 h-9 sm:h-11',
                    'text-xs sm:text-sm whitespace-nowrap shrink-0',
                    items.active && "border border-gray-800 text-gray-800"
                )}
                title={items.title}
            >
                <Icon icon={items.icons} size="16" className="sm:size-[18px]" />
                {/* Show text on tablet and above */}
                <span className="hidden sm:inline">{items.title}</span>
            </Button>
        ))}
    </div>
)}
            
        </header>
    )
}

export default Header