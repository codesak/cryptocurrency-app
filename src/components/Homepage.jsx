import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import {Link} from 'react-router-dom'
import News from './News'


const {Title} = Typography

const Homepage = () => {

 
  
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32,32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col><Col span={12}><Statistic title="Total Cryptocurrencies" value={6} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2}>Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified/>

    </>
  )
}

export default Homepage