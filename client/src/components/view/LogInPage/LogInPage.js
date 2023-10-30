import React from 'react'
import { Button } from 'antd';

const LogInPage = () => {
  return (
    <div>
      <h1 style={{fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '24px',
                  letterSpacing: '-0.03em',
                  textAlign: 'center'}}>회원가입·간편로그인</h1>
      <div style={{padding: '20px 50px'}}>              
      <p style={{fontWeight: '600', fontSize: '24px'}}>Let eat에</p>
      <p style={{fontWeight: '600', fontSize: '24px'}}>오신걸 환영합니다.</p>
      <div style={{margin:'80px 0 10px 0'}}>
        <Button size='large' style={{width:'100%', height:'50px', fontWeight: '600',backgroundColor:'rgb(3, 199, 90)', color:'#fff'}}>네이버로 시작하기</Button>
      </div> 
        <Button size='large' style={{width:'100%', height:'50px', fontWeight: '600', backgroundColor:'rgb(254, 229, 0)'}}>카카오로 시작하기</Button>
    </div>
    </div>
  )
}

export default LogInPage
