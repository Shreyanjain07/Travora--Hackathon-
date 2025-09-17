function AlertCard({ type, message }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-2">
      <p className="font-bold">{type}</p>
      <p>{message}</p>
    </div>
  );
}

export default AlertCard;
