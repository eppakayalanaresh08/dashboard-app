const Schedule = () => {
    const schedules = [
      {
        title: 'Meeting with suppliers from Kuta Bali',
        time: '14.00-15.00',
        location: 'at Sunset Road, Kuta, Bali',
        borderColor:'#9BDD7C'
      },
      {
        title: 'Check operation at Giga Factory 1',
        time: '18.00-20.00',
        location: 'at Central Jakarta',
        borderColor:'#6972C3'
      }
    ];
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's schedule</h3>
        
        <div className="space-y-4">
          {schedules.map((schedule, index) => (
            <div key={index} className="border-l-4 pl-4 py-1" style={{borderColor:schedule.borderColor}}>
              <h4 className="font-medium text-gray-800">{schedule.title}</h4>
              <p className="text-gray-500 text-sm">{schedule.time}</p>
              <p className="text-gray-500 text-sm">{schedule.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Schedule;