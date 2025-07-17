import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import dashboardIcon from '../../assets/dashboard.png';
import transactionsIcon from '../../assets/transaction.png';
import schedulesIcon from '../../assets/schedule.png';
import usersIcon from '../../assets/user.png';
import settingsIcon from '../../assets/setting.png';


const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon, path: '/dashboard' },
    { name: 'Transactions', icon: transactionsIcon, path: '/transactions' },
    { name: 'Schedules', icon: schedulesIcon, path: '/schedules' },
    { name: 'Users', icon: usersIcon, path: '/users' },
    { name: 'Settings', icon: settingsIcon, path: '/settings' },
  ];

  const bottomItems = [
    { name: 'Help',  },
    { name: 'Contact Us',  },
  ];

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col transition-all  duration-300
      ${open ? 'w-48' : 'w-20'} md:w-64`}>
      
      {/* Top - Logo and Toggle Button */}
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-2xl font-bold ${open ? 'block' : 'hidden'} md:block`}>
          Board.
        </h1>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-2 space-y-3">
        {menuItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-2 rounded hover:text-cyan-400 transition 
              ${isActive ? 'text-white-500 font-semibold' : 'text-white'}`
            }
          >
            <img src={item.icon} alt={item.name} className="" />
            <span className={`transition-all duration-300 ${open ? 'block' : 'hidden'} md:block`}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 space-y-3">
        {bottomItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-4 text-sm text-white hover:text-cyan-400"
          >
            {/* <img src={item.icon} alt={item.name} className="w-5 h-5" /> */}
            <span className={`transition-all duration-300 ${open ? 'block' : 'hidden'} md:block`}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
