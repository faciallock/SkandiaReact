import { Menu, Icon, Layout } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
import logo from '../assets/logo.png';
const { Header } = Layout;


function CustomHeader({ location }) {
    return (
        <Header className="header">
            <Menu
                selectedKeys={[location.pathname]}
                mode="horizontal"
                theme="dark"
            >
                <Menu.Item key="/">
                    <Link to="/"><Icon type="home" />Home</Link>
                </Menu.Item>
                <Menu.Item key="/users">
                    <Link to="/users"><Icon type="bars" />Users</Link>
                </Menu.Item>
                <Menu.Item key="/ordes">
                    <Link to="/orders"><Icon type="file-text" />Orders</Link>
                </Menu.Item>
                {/* 
                <Menu.Item key="/404">
                    <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
                </Menu.Item> */}
            </Menu>
        </Header>
    );
}

export default CustomHeader;