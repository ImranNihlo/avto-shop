import "./app.css"
import TransactionHistory from '../pages/Upload/TransactionHistory'
import ProfitDetails from '../pages/Upload/ProfitDetails'

function App() {
  return (
    <div className="container-fluid">
      <TransactionHistory />
      <ProfitDetails />
    </div>
  );
}

export default App;
