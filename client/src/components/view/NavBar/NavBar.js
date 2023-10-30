import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();
  const menu_list = [{
    title: '전체상품',
    link: '/products'
  },{
    title: '정기배송',
    link: '/delivery'
  },{
    title: '인기상품',
    link: '/hot'
  },{
    title: '상품후기',
    link: '/review'
  }]

  const onClick = (e) => {
    navigate(e.key)
  };
  
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
    <a href='/' style={{
                  marginTop: '25px',
                  marginRight: '30px'
                }}>
      <img src="/logo.png" alt='logo' /> 
    </a>
    <Menu
      style={{
        width: '100%'
      }}
      theme="light"
      mode="horizontal"
      onClick={onClick}
      items={menu_list.map((_, index) => {
        const key = menu_list[index].link;
        return {
          key,
          label: menu_list[index].title,
        };
      })}
    />
    <Button href="/login">로그인/회원가입</Button>
    </Header>
  );
};

export default NavBar;