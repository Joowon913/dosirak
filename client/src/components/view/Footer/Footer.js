function Footer() {
  return (
    <div style={{ 
      marginTop: '20px',
      display: 'grid',
      alignContent: 'center',
      backgroundColor: '#fff',
      color: '#000',      
    }}>
    <div style={{margin: '20px 20px'}}>
      <p style={{ margin: '10px auto', fontSize:'15px', fontWeight: 600}}>(주) Let eat </p>
      <p>주소 : 서울특별시 서대문구 연세로 8-1</p>
      <p>대표 : 김주원</p>
      <p>사업자등록번호 : 111-11-11111</p>
      <p>이메일 : hello@leteat.com</p>
    </div>
    </div>
  );
}

export default Footer;