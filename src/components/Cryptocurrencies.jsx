import React, { useState, useEffect } from 'react'

import { useGetCoinsQuery } from '../services/cryptoApi'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';


const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 100;

  const { data, isFetching } = useGetCoinsQuery(count)


  const [cryptos, setCryptos] = useState()
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filterCoins = data?.data?.coins.filter((items) => items.name.toLowerCase().includes(search));
    setCryptos(filterCoins);
  }, [data, search])


  if (isFetching) return 'Loading...';

  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder='Search Cryptocurrency'
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt="" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies