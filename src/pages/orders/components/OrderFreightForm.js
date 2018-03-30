import { Component } from 'react';
import { Form, Input, Row, Col, Card, Select } from 'antd';
const { Option } = Select;

const FormItem = Form.Item;

class OrderFreightForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModelHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModelHandler();
            }
        });
    };

    render() {
        /* const { children } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { name, email, website } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        }; */

        let data = [];
        if (this.props.data.length === 0) {
            return <div>No Data ...</div>
        } else {
            data = this.props.data;
        }
        return (
            <Card title="Freight"  bordered={true}>
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={12}>
                        <Col lg={24} md={24} sm={24}>
                            <Form.Item label="Shippers Instruction">
                                
                                    <Input
                                        placeholder="" defaultValue={""}
                                    />
                                
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24}>
                            <Form.Item label="Tracking Number">
                                <label ><b>{data.EX_TRACKNO}</b></label>
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24}>
                            <Form.Item label="No. of Packages">
                                
                                <label ><b>{data.EX_NOPACK}</b></label>
                                
                            </Form.Item>
                        </Col>
                        

                    </Row>
                    <Row gutter={16}>
                        <Col lg={12} md={24} sm={24}>
                            <Form.Item label="Shipment Date">

                                <label ><b>{data.EX_SHDATE}</b></label>

                            </Form.Item>
                        </Col>
                        <Col lg={12} md={12} sm={24}>
                            <Form.Item label="Freight">

                                <Select placeholder="" value={data.EX_FREIGHT} >
                                    <Option value={data.EX_FREIGHT}><b>{data.EX_FREIGHT}</b></Option>

                                </Select>
                            </Form.Item>
                        </Col>
                        
                    </Row>
                    <Row gutter={16}>
                        <Col lg={12} md={12} sm={24}>
                            <Form.Item label="Freight Overrride">

                                <Select placeholder="" value={data.EX_FROVER} >
                                    <Option value={data.EX_FREIGHT}><b>{data.EX_FREIGHT}</b></Option>
                                </Select>

                            </Form.Item>
                        </Col>
                        <Col lg={12} md={12} sm={24}>
                            <Form.Item label="Freight Cost">

                                <label ><b>{data.EX_FREIGHTCOST}</b></label>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        );
    }
}

export default Form.create()(OrderFreightForm);