import React, { useEffect, useState } from 'react'
import { Divider } from 'antd';
import { reviewData } from '../../../api/data';


function ReviewPage() {
  const [review, setReview] = useState([]);
  
  useEffect(() => {
    setReview(reviewData);
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>상품 후기</h1>
      <Divider style={{margin: '10px 0'}}/>
      {review.map((item, index) => {
        return (
          <React.Fragment key={index}>
          <div style={{display:'flex'}}>
          <div style={{width:'20%', marginBottom: '30px'}}><img src={item.imgPath} alt='제품이미지' style={{width:'100%'}}/></div>
            <ul style={{width:'80%'}}>
              <li style={{fontSize: '25px', fontWeight: 600, marginBottom: '10px'}}>{item.productName}</li>
              <li style={{fontSize: '20px', fontWeight: 600, marginBottom: '5px'}}>{item.title}</li>
              <li style={{ fontSize: '16px' }}>{item.desc}</li>
            </ul>
          </div>
          </React.Fragment>
        );
      })}
    </div>
  )
}

export default ReviewPage
