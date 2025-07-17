import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Basic Tees', value: 55 },
  { name: 'Custom Short Pants', value: 31 },
  { name: 'Super Hoodies', value: 14 },
];

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black">Top products</h2>
        <span className="text-sm text-gray-400">May - June 2021</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="w-[180px] h-[180px]">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="sm:ml-8 mt-6 sm:mt-0 space-y-4 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span
                className="w-3 h-3 rounded-full mt-1"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <div>
                <p className="text-sm font-bold text-black">{item.name}</p>
                <p className="text-xs text-gray-400">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
