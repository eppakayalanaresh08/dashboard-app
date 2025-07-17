// import { FiSearch, FiBell } from 'react-icons/fi';

import Notification from '../../assets/notification.png';
import Search from '../../assets/search.png';
import Profile from '../../assets/profile.png';


const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-50 px-8 py-4 w-full">
      <h1 className="text-xl font-bold text-black">Dashboard</h1>

      <div className="flex items-center space-x-2">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-1 rounded-full bg-white shadow-sm text-sm text-gray-700 focus:outline-none"
          />
          
          <img
            src={Search}
            alt="Search"
            className="absolute right-3 top-1.5 w-4 h-4 opacity-60"
          />
        </div>

        
        <img
          src={Notification}
          alt="Notifications"
          className=" h-4 cursor-pointer"
        />

        <img
          src={Profile}
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
