import React, { useEffect, useState }  from 'react'
import { Divider, Col, Card, Row } from 'antd';
import { productsData, hotData, deliveryData } from '../../../api/data'

const { Meta } = Card;
function ProductPage(props) {
  const [items, setItems] = useState([]);
  // TODO 이후 API 통신을 통해 데이터를 가져올때 정렬기준으로 사용하기 위해 상태관리
  const [sort, setSort] = useState();

  useEffect(() => {
    // TODO 이후 API 통신을 통해 데이터 조회
    if(props.gubun === 'products') {
      setItems(productsData)
    } else if (props.gubun === 'hot') {
      setItems(hotData)
    } else {
      setItems(deliveryData);
    }
  }, [props.gubun]);

  
  const handlePrice = (type) => {
    setSort(type);
    const PriceItems = [...items].sort((a, b) =>  {
      if(type === 'lowPrice') {
        return a.price - b.price;
      } else if(type === 'highPrice') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setItems(PriceItems);
  };

  const handleTitle = (type) => {
    setSort(type);
    const TitleItems = [...items].sort((a, b) => {
      var titleA = a.title.toUpperCase();
      var titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    setItems(TitleItems);
  };
  
  return (
    <>
      <div style={{padding: '0 10px'}}>
        <h1 style={{textAlign: 'center'}}>{props.title}</h1>
        <Divider style={{margin: '10px 0'}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '15px', alignItems: 'center'}}>
          <div>등록제품: {items.length}개</div>
          <ul style={{display: 'flex', justifyContent: 'space-between'}}>
            <li>신상품 | &nbsp;</li>
            <a href="#" onClick={() => handleTitle('string')} style={{ color: 'black' }}><li>상품명 | &nbsp;</li></a>
            <a href="#" onClick={() => handlePrice('lowPrice')} style={{ color: 'black' }}><li>낮은가격 | &nbsp;</li></a>
            <a href="#" onClick={() => handlePrice('highPrice')} style={{ color: 'black' }}><li>높은가격 | &nbsp;</li></a>
            <a href="/review" style={{ color: 'black' }}><li>상품후기</li></a>
          </ul>
        </div>
        <Divider style={{margin: '10px 0'}}/>
        <Row gutter = {[10, 10]} justify="start">
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
            <Col xs={12} md={8} lg={6}>
            <div>
            <Card
              hoverable
              cover={<img src={item.imgPath} alt={item.title}/>}
              >
              <Meta title={item.title} description={`${item.price}원`}  />
            </Card>
          </div>
        </Col>
        </React.Fragment>
        );
        })}
      </Row>      
      </div>
    </>
  )
}

export default ProductPage