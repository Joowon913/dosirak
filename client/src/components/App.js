import NavBar from "./view/NavBar/NavBar";
import { Layout, FloatButton } from 'antd';
import Footer from './view/Footer/Footer'
import LandingPage from "./view/LandingPage/LandingPage";
import ProductPage from "./view/ProductPage/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewPage from "./view/ReviewPage/ReviewPage";
import LogInPage from "./view/LogInPage/LogInPage";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
      <Router>
        <NavBar />
        <Content>
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage title='전체상품' gubun='products'/>} />
            <Route path="/delivery" element={<ProductPage title='정기배송' gubun='delivery'/>} />
            <Route path="/hot" element={<ProductPage title='인기상품' gubun='hot'/>} />
            <Route path="/review" element={<ReviewPage/>} />
            <Route path="/login" element={<LogInPage/>} />
          </Routes>
        </div>
        </Content>
        <FloatButton.BackTop src="" visibilityHeight={100} />
        <Footer />
      </Router>
      </Layout>
    </div>
  );
}

export default App;
