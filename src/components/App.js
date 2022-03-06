import "./app.css"
import OrderHistory from '../pages/UltraFitShop/OrderHistory'
import OrderDetailsModal from '../pages/UltraFitShop/OrderHistory/OrderDetailsModal'

function App() {
  return (
    <div className="container-fluid">
      <OrderHistory />
      <OrderDetailsModal />
    </div>
  );
}

export default App;
