import React, { useEffect, useState }from 'react'
import { Carousel } from 'antd'
import { bannerData } from '../../../api/data'

function LandingPage() {
  const [banner,setBanner] = useState([]);

  useEffect(() => {
    setBanner(bannerData)
  }, [])
  return (
    <>
      <div>
        <Carousel autoplay>
        {banner.map((item, index) => {
          return (
            <React.Fragment key={index}>
            <div>
              <img src={item.imgPath} alt="배너이미지"
            style={{ width: '100%'}}/>
            </div>
            </React.Fragment>
          );
        })}
        </Carousel>
        <div style={{textAlign: 'center', padding: '120px 0 60px'}}>
          <h1 style={{fontSize: '36px'}}>오늘 뭐 먹을까 고민은 그만!</h1>
          <div style={{padding: '36px 0 24px'}}>
            <p style={{fontSize: '24px'}}>.</p>
            <p style={{fontSize: '24px'}}>.</p>
            <p style={{fontSize: '24px'}}>.</p>
            <p style={{fontSize: '24px'}}>.</p>
          </div>
          <h3 style={{fontSize: '24px', fontWeight: '700',
    lineHeight: '38px', letterSpacing: '-0.03em'}}>1일 1인분도 무료배송</h3>
          <div style={{paddingTop: '24px', fontSize: '16px', fontWeight: '400',
    lineHeight: '29px', letterSpacing: '-0.03em'}}>
            <p>Let eat에서 준비한 다양한 식단으로</p>
            <p>하루 한 끼라도 풍성한 식사를 즐기고 싶은 당신을 위해 준비했습니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
