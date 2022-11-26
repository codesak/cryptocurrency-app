import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import {useGetCoinsQuery} from '../services/cryptoApi'


const { Text, Title } = Typography;
const { Option } = Select;

const News = (simplified) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return 'Loader...';

  return (
    <div>News</div>
  )
}

export default News