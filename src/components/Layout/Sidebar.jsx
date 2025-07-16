import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Board.</h1>
      
      <nav>
        <h2 className="text-gray-500 text-sm uppercase mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({isActive}) => 
                `block p-2 rounded ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/transactions" 
              className={({isActive}) => 
                `block p-2 rounded ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`
              }
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/schedules" 
              className={({isActive}) => 
                `block p-2 rounded ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`
              }
            >
              Schedules
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/users" 
              className={({isActive}) => 
                `block p-2 rounded ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              className={({isActive}) => 
                `block p-2 rounded ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;