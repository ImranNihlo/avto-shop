import MyPage from '../pages/MyPage/MyPage'
import "./app.css"
import MyProject from '../pages/MyPage/MyProjekt/MyProject'
import Index from '../pages/HomePage/Index'
import MyProjectCompact from '../pages/MyPage/MyProjectorCompact/MyProjectCompact'
import MyHistory from '../pages/MyPage/MyHistory/MyHistory'
import CardVertical from '../pages/MyPage/MyProjectorCompact/components/CardVertical'

function App() {
  return (
    <div className="container-fluid">
      <MyProject />
      <MyProjectCompact />
      <MyHistory />
    </div>
  );
}

export default App;
