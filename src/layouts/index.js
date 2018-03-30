/* import React from 'react';
import styles from './index.css';
import Header from './Header';
import withRouter from 'umi/withRouter';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content} = Layout;

function LayoutTest({ children, location }) {
    return (
        <div className={styles.normal}>
            <Header location={location} />
            
                <Content style={{ padding: '0 50px' }}>
                    <div className={styles.main}>
                        {children}
                    </div>
                </Content>
           
        </div>
    );
} */

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import withRouter from 'umi/withRouter';
import CustomHeader from './Header';
import styles from './index.css';
const { SubMenu } = Menu;
const { Content, Header, Footer, Sider } = Layout;


let collapsed =true;
function toggle() {

    if(collapsed){
        collapsed=false;
    }
    else{
        collapsed=true;
    }

    /* collapsed
    this.setState({
        collapsed: !this.state.collapsed,
    }); */
}
function LayoutTest({ children, location }) {
    return (
        <Layout>
            <CustomHeader location={location} />
            <Content style={{ padding: '25px 25px' }}>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {children}
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©2018
            </Footer>
        </Layout> 
        );
} 



export default withRouter(LayoutTest);