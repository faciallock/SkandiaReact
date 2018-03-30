import { connect } from 'dva';
import { Table, Pagination, message, Popconfirm, Button, Input, Card, Modal, List, Row, Col, Form, Select, Spin, Layout, Menu, Icon, Timeline, Divider  } from 'antd';


import { routerRedux } from 'dva/router';
import OrderShippingForm from './OrderShippingForm';
import OrderFreightForm from './OrderFreightForm';
import ViewOrderTable from './ViewOrderTable';
import styles from './css/Orders.css';
import CardTotal from './CardTotal';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

/* import styles from './Orders.css'; */
/* import { PAGE_SIZE } from '../constants'; */
/* import UserModal from './UserModal'; */

function Orders({ dispatch, list: dataSource, loading, total, page: current }) {
    function deleteHandler(id) {
        dispatch({
            type: 'users/remove',
            payload: id,
        });
    }

   /*  setInterval(() => {
        //notification
        message.success('New comment!');
         notification['success']({
            message: 'New comment',
            description: 'Description...',
        }); 
    }, 18000); */

    function info() {
        Modal.info({
            title: 'Comments for this order',
            content: (
                <div>
                    <List
                        size="small"
                        style={{ margin: '30px 0px',left:'-25px' }}
                        bordered
                        dataSource={dataSource.EX_USERLOG}
                        renderItem={item => (<List.Item>{item.ZCOMMENT}</List.Item>)}
                    />
                </div>
            ),
            onOk() { },
        });
    }
    function handleClick(e){
        console.log(e);
        dispatch(routerRedux.push({
            pathname: '/orders',
            query: { orderId: e },
        }));

    }
    function createHandler(values) {
        dispatch({
            type: 'users/create',
            payload: values,
        });
    }

    function pageChangeHandler(page) {
        dispatch(routerRedux.push({
            pathname: '/orders',
            query: { page },
        }));
    }

    function editHandler(id, values) {
        dispatch({
            type: 'users/patch',
            payload: { id, values },
        });
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'IM_SALESDOCU',
            key: 'IM_SALESDOCU',
            render: text => <a href="">{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Operation',
            key: 'operation',
            render: (text, record) => (
                <span >
                    {/* <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
                        <a>Edit</a>
                    </UserModal> */}
                    <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                        <a href="">Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        
        <div >
            <Row gutter={12}>
                <Col lg={16} md={24} sm={24}>
                    <h3>View Order Details</h3>
                    <div>Company: <b>{dataSource.EX_CUST}</b> / Sales Org. <b>{dataSource.EX_ORG}</b></div>
                </Col>
                <Col style={{ position:'relative',float:'right' }} lg={8} md={24} sm={24}>
                    <Spin className={styles.loading} spinning={loading}></Spin>
                    <Input.Search
                        placeholder="Number Order here"
                        onSearch={handleClick}
                        style={{ width: 200, float: 'right' }}
                        enterButton
                    />
                </Col>
            </Row>
            <Row gutter={12}>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    
                    
                        <Row gutter={13}>
                            <Col lg={12} md={24} sm={24}>

                                <OrderShippingForm data={dataSource} />
                            </Col>
                            <Col lg={9} md={24} sm={24}>
                                <OrderFreightForm data={dataSource} />
                            </Col>
                            <Col lg={3} md={24} sm={24}>
                                <br />
                                <br />
                                <br />
                                <Timeline pending="In progress...">
                                    <Timeline.Item color="green">Order received</Timeline.Item>
                                    
                                    <Timeline.Item style={{ cursor: "pointer" }} onClick={info} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">In production</Timeline.Item>
                                    <Timeline.Item color="#ccc">Packed</Timeline.Item>
                                    <Timeline.Item color="#ccc">Invoiced</Timeline.Item>
                                </Timeline>
                                
                            </Col>
                        </Row>
                    
                </Layout>
            </Row>
            <Row gutter={12}>
                <ViewOrderTable data={dataSource.EX_ITEMS} />
            </Row>
            <Row>
                <Card title="Card Total (Includes Surcharges, but not Shipping/Handling)" bordered={true}>
                    {/* <CardTotal data={dataSource} /> */}
                </Card>
            </Row>
        </div>
        
    );
}

function mapStateToProps(state) {
    const { list, total, page } = state.orders;
    return {
        list,
        total,
        page,
        loading: state.loading.models.orders,
    };
}

export default connect(mapStateToProps)(Orders);