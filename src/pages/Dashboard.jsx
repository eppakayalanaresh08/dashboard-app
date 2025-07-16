import Sidebar from '../components/Layout/Sidebar';
// import DataCard from '../components/Dashboard/DataCard';
// import ActivitySection from '../components/Dashboard/ActivitySection';
// import TopProducts from '../components/Dashboard/TopProducts';
// import Schedule from '../components/Dashboard/Schedule';

const Dashboard = () => {
//   const dataCards = [
//     { title: 'Total Revenues', value: '$2,129,430' },
//     { title: 'Total Transactions', value: '1,520' },
//     { title: 'Total Likes', value: '9,721' },
//     { title: 'Total Users', value: '892' },
//   ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {dataCards.map((card, index) => (
            <DataCard key={index} title={card.title} value={card.value} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivitySection />
          <TopProducts />
        </div>
        
        <div className="mt-6">
          <Schedule />
        </div>
      </main> */}
    </div>
  );
};

export default Dashboard;