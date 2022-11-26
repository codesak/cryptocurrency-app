import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import {Link} from 'react-router-dom'
import News from './News'
import Cryptocurrencies from "./Cryptocurrencies"

import { useGetCoinsQuery } from '../services/cryptoApi'



const {Title} = Typography

const Homepage = () => {
  
  
  const {data, isFetching}= useGetCoinsQuery(10)
  
  if(isFetching) return 'Loading...';

  const globalStats = data?.data?.stats;
  
  
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32,32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)
} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)
        } /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified/>

    </>
  )
}

export default Homepage