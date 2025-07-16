const DataCard = ({ title, value, bgColor, icon }) => {
    return (
      <div
        className="p-6 rounded-2xl shadow-sm flex justify-between items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <h3 className="text-sm text-black font-medium mb-1">{title}</h3>
          <p className="text-xl font-bold text-black">{value}</p>
        </div>
        <img src={icon} alt={title} className=" h-6" />
      </div>
    );
  };
  
  export default DataCard;