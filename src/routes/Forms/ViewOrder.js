import React, { PureComponent } from 'react';
import { Card, Button, Form, Icon,  Tooltip, Col,Dropdown, Divider, Row, Table, DatePicker, TimePicker, Input, Select, Popover } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import FooterToolbar from '../../components/FooterToolbar';
import TableForm from './TableForm';
import styles from './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
  name: 'Warehouse name',
  url: 'Warehouse Manager',
  owner: 'Owner',
  approver: 'Aprrover',
  dateRange: 'effective date',
  type: 'Warehouse type',
  name2: 'Task name',
  url2: 'mission details',
  owner2: 'Executive',
  approver2: 'Responsible',
  dateRange2: 'Effective date',
  type2: 'Task type',
};

const tableData = [{
  key: '1',
  workId: '00001',
  name: 'John Brown',
  department: 'New York No. 1 Lake Park',
}, {
  key: '2',
  workId: '00002',
  name: 'Jim Green',
  department: 'London No. 1 Lake Park',
}, {
  key: '3',
  workId: '00003',
  name: 'Joe Black',
  department: 'Sidney No. 1 Lake Park',
}];

class ViewOrder extends PureComponent {
  state = {
    width: '100%',
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  resizeFooterToolbar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0];
    const width = `calc(100% - ${sider.style.width})`;
    if (this.state.width !== width) {
      this.setState({ width });
    }
  }
  render() {
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 8
        },
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        },
      },
    };


    const validate = () => {
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          // submit the values
          dispatch({
            type: 'form/submitAdvancedForm',
            payload: values,
          });
        }
      });
    };
    const columnsCardTotal = [{
        title: 'Line',
        dataIndex: 'key',
        width:65,
        fixed:'left',
        key: 'line',
        render: text => <a href="#">{text}</a>,
      }, {
        title: 'Product',
        width:90,
        dataIndex: 'product',
        key: 'product',
      }, {
        title: 'Color',
        dataIndex: 'color',
        width:90,
        key: 'color',
      }, {
        title: 'Quantity',
        width:95,
        dataIndex: 'qty',
        key: 'qty',
      }, {
        title: 'Witdh',
        width:80,
        dataIndex: 'width',
        key: 'width',
      } , {
        title: 'Length',
        width:85,
        dataIndex: 'length',
        key: 'length',
      }, {
        title: 'Bracket Mount',
        dataIndex: 'bracketMount',
        width:140,
        key: 'bracketMount',
      }, {
        title: 'Lift Cord',
        width:120,
        dataIndex: 'liftCord',
        key: 'liftCord',
      }, {
        title: 'Draw / Liner',
        dataIndex: 'drawLiner',
        width:120,
        key: 'drawLiner',
      },  {
        title: 'No. Of Panels',
        dataIndex: 'noPanels',
        width:110,
        key: 'noPanels',
      },  {
        title: 'Extensions Brackets',
        dataIndex: 'extBrackets',
        width:110,
        key: 'extBrackets',
      },  {
        title: 'Specials / Speciality code',
        dataIndex: 'specials',
        width:160,
        key: 'specials',
      }, {
        title: 'Specials 2 / Speciality code 2',
        dataIndex: 'specials2',
        width:170,
        key: 'specials2',
      }, {
        title: 'Gross Price',
        dataIndex: 'grossPrice',
        width:120,
        key: 'grossPrice',
      }, {
        title: 'Best Discount',
        dataIndex: 'bestDiscount',
        width:120,
        key: 'bestDiscount',
      },{
        title: 'Price Per line item',
        dataIndex: 'priceLine',
        width:150,
        key: 'priceLine',
      },{
        title: 'Surchages',
        key: 'action',
        fixed:'right',
        render: (text, record) => (
          <span>
            <a href="#">View</a>
          </span>
        ),
      },{
        title: 'BOM',
        key: 'bom',
        fixed:'right',
        render: (text, record) => (
          <span>
            <a href="#">View</a>
          </span>
        ),
      },{
        title: 'Inventory',
        key: 'inventory',
        fixed:'right',
        render: (text, record) => (
          <span>
            <a href="#">View</a>
          </span>
        ),
      }];

    const dataCardTotal = [{
      key: '1',
      line:'1',
      product: 'ZEA',
      color: '3000R',
      qty:1,
      width:'36.000',
      length:'60.000',
      bracketMount:'Inside Mount',
      liftCord: 'Right Metal Bead chain',
      drawLiner:'-',
      noPanels:'-',
      extBrackets:'None',
      specials:'none',
      specials2:'none',
      grossPrice:'$357.00',
      bestDiscount:'50.00',
      priceLine:'$178.50'
    }];

    const columns = [{
        title: 'Orders Type',
        width: 120,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
      },
      {
        title: 'Order Status',
        width: 120,
        dataIndex: 'age',
        color:'green',
        key: 'age',
        fixed: 'left'
        
      },
      {
        title: 'Created By',
        dataIndex: 'address',
        key: '1'
      },
      {
        title: 'Last Modified By',
        dataIndex: 'lastModifiedBy',
        key: '2'
      },
      {
        title: 'Net Value',
        dataIndex: 'netValue',
        key: '3'
      },
      {
        title: 'Rush Charges Cat.',
        dataIndex: 'rushChargesCat',
        key: '4'
      },
      {
        title: 'S/H Charges',
        dataIndex: 'shCharges',
        key: '5'
      },
      {
        title: 'COD Charges',
        dataIndex: 'codCharges',
        key: '6'
      },
      {
        title: 'Taxes',
        dataIndex: 'taxes',
        key: '7'
      },
      {
        title: 'Comments',
        key: 'operation',
        fixed: 'right',
        width: 120,
        render: () => <a href = "#" > view </a>,
      },
    ];

    const data = [{
      key: '1',
      name: 'Shades',
      age: 'Confirmed',
      address: 'AMURUGESAN',
      lastModifiedBy: 'AMURUGESAN',
      netValue:'$570.23',
      rushChargesCat:"Regular",
      shCharges:"29.73",
      codCharges:"0.0",
      taxes: "0.0"

    }];

    const errors = getFieldsError();

    const action = (
      <div>
        <Input.Search
          placeholder="Number Order here"
          onSearch={value => console.log(value)}
          style={{ width: 300 }}
          enterButton
        />
      </div>
    );
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="Form verification information"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };
    return (
      <PageHeaderLayout
        title="View Order Details"
        content="Company: Interior Motives Two / Account: 00000508880 / Sales Org. 1000"
        action={action}
        wrapperClassName={styles.advancedForm}
      >
        <Row gutter={24}>
              <Col lg={14} md={12} sm={24}>
        <Card title="Shipping Information" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={12}>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item label="House No."
                      >
                        {getFieldDecorator('email', {
                          rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }, {
                            required: true, message: 'Please input your E-mail!',
                          }],
                        })(
                           <label for=""></label>
                        )}
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="Address 1"
                      >
                        {getFieldDecorator('email', {
                          rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }, {
                            required: true, message: 'Please input your E-mail!',
                          }],
                        })(
                           <label for=""></label>
                        )}
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                        label="Address 2"
                      >
                        {
                           <label >1800 Indian Creek Circle</label>
                        }
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="City"
                      >
                        {
                           <label>Birmingham</label>
                        }
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="State"
                      >
                        {
                           <label >Alabama</label>
                        }
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="Zip"
                      >
                        {
                           <label >03243</label>
                        }
                      </Form.Item>
              </Col>

              <Col lg={8} md={24} sm={24}>
                     <Form.Item label="Sidemark/PO">
                      {
                      <label >test</label>
                      }
                    </Form.Item>
              </Col>
              
              <Col lg={8} md={12} sm={24}>
                <Form.Item  label="Sales Org.">
                
                  {getFieldDecorator('owner', {
                    rules: [{ required: true, message: '' }],
                  })(
                    <Select placeholder="">
                      <Option value="one">One option</Option>
                      <Option value="second">Second option</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="Production Rush"
                      >
                        {
                           <label >Regular</label>
                        }
                      </Form.Item>
              </Col>
              <Row gutter={10}>
              <Col lg={8} md={24} sm={24}>
                     <Form.Item
                     
                        label="Delivery"
                      >
                        {
                           <label >Fedex Ground</label>
                        }
                      </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Reference">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <Input
                      placeholder=""
                    />
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Repair/Remake Code">
                
                  {getFieldDecorator('owner', {
                    rules: [{ required: true, message: '' }],
                  })(
                    <Select placeholder="">
                      <Option value="one">One option</Option>
                      <Option value="second">Second option</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Packed Date">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >00/00/0000</label>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Batch Date">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >00/00/0000</label>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Invoice Date">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >00/00/0000</label>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Invoice Number">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >00/00/0000</label>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Order Weight">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >0.000</label>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <Form.Item  label="Order Date">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Error' }],
                  })(
                    <label >00/00/0000</label>
                  )}
                </Form.Item>
              </Col>
              
              </Row>
            </Row>
            
          </Form>
        </Card>
        </Col>
          <Col lg={10} md={12} sm={24}>
            <Card title="Freight" className={styles.card} bordered={false}>
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={12}>
                  <Col lg={24} md={24} sm={24}>
                    <Form.Item  label="Shippers Instruction">
                    {getFieldDecorator('url', {
                      rules: [{ required: true, message: 'Error' }],
                    })(
                      <Input
                        placeholder=""
                      />
                    )}
                  </Form.Item>
                  </Col>
                  <Col lg={8} md={24} sm={24}>
                    <Form.Item  label="Tracking Number">
                      {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Error' }],
                      })(
                        <label ></label>
                      )}
                    </Form.Item>
                  </Col>
                  <Col lg={8} md={24} sm={24}>
                    <Form.Item  label="No. of Packages">
                      {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Error' }],
                      })(
                        <label >0</label>
                      )}
                    </Form.Item>
                  </Col>
                  <Col lg={8} md={24} sm={24}>
                    <Form.Item  label="Shipment Date">
                      {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Error' }],
                      })(
                        <label >00/00/0000</label>
                      )}
                    </Form.Item>
                  </Col>
                  
                </Row>
                <Row gutter={16}>
                  <Col lg={6} md={12} sm={24}>
                      <Form.Item  label="Freight">
                        {getFieldDecorator('owner', {
                          rules: [{ required: true, message: '' }],
                        })(
                          <Select placeholder="">
                            <Option value="one">No</Option>
                            <Option value="second">Yes</Option>
                          </Select>
                        )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                    <Form.Item  label="Freight Overrride">
                        {getFieldDecorator('owner', {
                          rules: [{ required: true, message: '' }],
                        })(
                          <Select placeholder="">
                            <Option value="one">No</Option>
                            <Option value="second">Yes</Option>
                          </Select>
                        )}
                    </Form.Item>
                  </Col>
                  <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                    <Form.Item  label="Freight Cost">
                      {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Error' }],
                      })(
                        <label >00/00/0000</label>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
            
            
          </Col>
        </Row>
        <Row>
          <Table columns={columns} dataSource={data} scroll={{ x: 1300 }}/>
        </Row>
        <Row>
        
        </Row>
        
        

        <Row gutter={24}>
          <Col lg={24} md={24} sm={24}>
            <Card title="Card Total (Includes Surcharges, but not Shipping/Handling)" bordered={false}>
              {getFieldDecorator('members', {
                initialValue: tableData,
              })(<Table columns = {columnsCardTotal} dataSource = {dataCardTotal} scroll={{ x: 2090 }}/>)}
            </Card>
          </Col>
        </Row>
        <FooterToolbar style={{ width: this.state.width }}>
          {getErrorInfo()}
          <Button type="primary" onClick={validate} loading={submitting}>
            Submit
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(({ global, loading }) => ({
  collapsed: global.collapsed,
  submitting: loading.effects['form/submitAdvancedForm'],
}))(Form.create()(ViewOrder));
