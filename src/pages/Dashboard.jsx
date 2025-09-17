import Card from "../components/Card";
import AlertCard from "../components/AlertCard";
import Navbar from "../components/Navbar"

function Dashboard() {
  // Example data, replace with API or state later
  const stats = [
    { title: "Active Tourists", value: 128 },
    { title: "High-Risk Alerts", value: 5 },
    { title: "Missing Alerts", value: 2 },
    { title: "Completed Trips", value: 340 },
  ];

  const alerts = [
    { type: "Geo-Fence Breach", message: "Tourist #102 entered a restricted zone" },
    { type: "Panic Button", message: "Tourist #87 triggered SOS" },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold p-3">Dashboard</h1>


      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} title={stat.title} value={stat.value} />
        ))}
      </div>

      {/* Alerts */}
      <h2 className="text-2xl font-semibold mb-4">Recent Alerts</h2>
      <div>
        {alerts.map((alert, index) => (
          <AlertCard key={index} type={alert.type} message={alert.message} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
