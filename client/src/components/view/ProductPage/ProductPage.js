import React, { useEffect, useState }  from 'react'
import { Divider, Col, Card, Row } from 'antd';
import { productsData, hotData, deliveryData } from '../../../api/data'

const { Meta } = Card;
function ProductPage(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(props.gubun === 'products') {
      setItems(productsData)
    } else if (props.gubun === 'hot') {
      setItems(hotData)
    } else {
      setItems(deliveryData);
    }
  }, [props.gubun]);
  
  return (
    <>
      <div style={{padding: '0 10px'}}>
        <h1 style={{textAlign: 'center'}}>{props.title}</h1>
        <Divider style={{margin: '10px 0'}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '15px', alignItems: 'center'}}>
          <div>등록제품: {items.length}개</div>
          <ul style={{display: 'flex', justifyContent: 'space-between'}}>
            <li>신상품 | &nbsp;</li>
            <li>상품명 | &nbsp;</li>
            <li>낮은가격 | &nbsp;</li>
            <li>높은가격 | &nbsp;</li>
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