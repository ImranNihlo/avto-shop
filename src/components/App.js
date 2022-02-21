import Find from '../pages/Auth/Find'
import Login from '../pages/Auth/Login'
import ResetPassword from '../pages/Auth/ResetPassword'
import SignUp from '../pages/Auth/SignUp'
import Home from '../pages/HomePage/Index'
import MyPage from '../pages/MyPage/MyPage'
import Payment from '../pages/MyPage/Payment/Payment'
import "./app.css"
import Subscription from '../pages/MyPage/Subscription/Subscription'
import FreePeriod from '../pages/MyPage/FreePeriod/FreePeriod'

function App() {
  return (
    <div className="container-fluid">
      <MyPage />
    </div>
  );
}

export default App;
