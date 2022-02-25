import MyPage from '../pages/MyPage/MyPage'
import "./app.css"
import MyProject from '../pages/MyPage/MyProject/MyProject'
import Index from '../pages/HomePage/Index'
import MyProjectCompact from '../pages/MyPage/MyProjectCompact/MyProjectCompact'
import MyHistory from '../pages/MyPage/MyHistory/MyHistory'
import CardVertical from '../pages/MyPage/MyProjectCompact/components/CardVertical'
import Upload from '../pages/Upload'
import SellPattern from '../pages/Upload/SellPattern'
import UploadPattern from '../pages/Upload/UploadPattern'
import SignUp from '../pages/Auth/SignUp'
import Find from '../pages/Auth/Find'
import RegisterNewCar from '../pages/Upload/RegisterNewCar'

function App() {
  return (
    <div className="container-fluid">
      <UploadPattern />
      <RegisterNewCar />
    </div>
  );
}

export default App;
