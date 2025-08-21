
import { Outlet } from 'react-router';
import React, { useState } from 'react';

import { Layout} from 'antd';


const {Sider, Header, Content} = Layout;
const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider 
        theme='light'
        trigger={null} 
        collapsible 
        collapsed={collapsed}>
      </Sider>
      <Layout>
        {/* <Header className='bg-white'>
        </Header> */}
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}


export default MainLayout;