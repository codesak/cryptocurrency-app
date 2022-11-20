
import './App.css';
import {
   Route, 
   Routes,
  Link
} from "react-router-dom";

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import { Layout, Typography } from 'antd';



function App() {
  
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
          
            <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
            <Route exact path="/exchanges" element={<Exchanges/>}></Route>
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}></Route>
            <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}></Route>
            <Route exact path="/news" element={<News/>}></Route>
            
              
            
            </Routes>
          
          </div>
        </Layout>
      </div>
     

     <div className='footer'>
      <Typography.Title level={5} style={{color:"white", textAlign:"center"}} >Copyright © 2022
      <Link to="/">Cryptoverse Inc.</Link><br/>
      All Rights Reserved.
      </Typography.Title>
      
     </div>
    </div>
  );
}

export default App
