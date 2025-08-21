import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router';
import Header from 'shared/components/layouts/partials/Header';
import Sidebar from 'shared/components/layouts/partials/Sidebar';



const MainLayout: React.FC<{children?: React.ReactNode}> = () =>{
  return(
    <Layout hasSider>
      <Sidebar/>
      <Layout>
        <Header/>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Outlet/>
        </Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};
 
export default MainLayout;