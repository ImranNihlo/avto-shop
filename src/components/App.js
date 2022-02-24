import MyPage from '../pages/MyPage/MyPage'
import "./app.css"
import MyProject from '../pages/MyPage/MyProject/MyProject'
import Index from '../pages/HomePage/Index'
import MyProjectCompact from '../pages/MyPage/MyProjectCompact/MyProjectCompact'
import MyHistory from '../pages/MyPage/MyHistory/MyHistory'
import CardVertical from '../pages/MyPage/MyProjectCompact/components/CardVertical'
import Upload from '../pages/Upload'
import SellPattern from '../pages/Upload/SellPattern'

function App() {
  return (
    <div className="container-fluid">
      <SellPattern />
    </div>
  );
}

export default App;
