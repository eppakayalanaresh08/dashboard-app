import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import DataCard from '../components/Dashboard/DataCard';
import ActivitySection from '../components/Dashboard/ActivitySection';
import TopProducts from '../components/Dashboard/TopProducts';
import Schedule from '../components/Dashboard/Schedule';

import Revenues from '../assets/revenues.png'
import Transactions from '../assets/totaltransactions.png'
import Likes from '../assets/likes.png'
import Users from '../assets/users.png'




const Dashboard = () => {
  const dataCards = [
    { title: 'Total Revenues', value: '$2,129,430',bgColor:'#DDEFE0' , icon :Revenues},
    { title: 'Total Transactions', value: '1,520' ,bgColor:'#F4ECDD' , icon :Transactions},
    { title: 'Total Likes', value: '9,721' ,bgColor:'#EFDADA' , icon :Likes},
    { title: 'Total Users', value: '892',bgColor:'#DEE0EF'  , icon :Users},
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
      <Header/>
      
      <main className="flex-1 p-8">
              
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {dataCards.map((card, index) => (
            <DataCard key={index} title={card.title} value={card.value} bgColor={card.bgColor}  icon={card.icon}/>
          ))}
        </div>
        
           <div >
           <ActivitySection />

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* <ActivitySection /> */}
          <TopProducts />
          <Schedule />
        </div>
        
    
      </main>
    </div>
    </div>
  );
};

export default Dashboard;