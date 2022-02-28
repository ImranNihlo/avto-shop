import "./app.css"
import SellPatternEarnings from '../pages/Upload/SellPattern/SellPatternEarnings'
import SellPatternCredits from '../pages/Upload/SellPattern/SellPatternCredits'

function App() {
  return (
    <div className="container-fluid">
      <SellPatternEarnings />
      <SellPatternCredits />
    </div>
  );
}

export default App;
