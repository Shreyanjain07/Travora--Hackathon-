function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
      <h2 className="text-gray-500 font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default Card;
