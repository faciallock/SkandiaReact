import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';

export default class ViewOrderTable extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: props.value,
            loading: false,
        };
    }
    render() {
        console.log(this.props.data);
        const columns = [{
            title: 'Item No',
            width: 120,
            dataIndex: 'ITEMNO',
            key: 'ITEMNO',
            fixed: 'left'
        },
        {
            title: 'Price',
            width: 120,
            dataIndex: 'ITEMPRICE',
            key:'ITEMPRICE',
            color: 'green',

        },
        {
            title: 'Category',
            dataIndex: 'CATEGORY',
            key: 'CATEGORY'
        },
        {
            title: 'Quantity',
            dataIndex: 'QUANTITY',
            key: 'QUANTITY'
        },
        {
            title: 'Material',
            dataIndex: 'MATERIAL',
            key: 'MATERIAL'
        },
        {
            title: 'Description',
            dataIndex: 'SHORT_TEXT',
            key: 'SHORT_TEXT'
        },
        {
            title: 'Plant',
            dataIndex: 'PLANT',
            key: 'PLANT'
        },
        {
            title: 'Class',
            dataIndex: 'CLASS',
            key: 'CLASS'
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
            render: () => <a href="#" > view </a>,
        },
        ];

        /* const data = [{
            key: '1',
            name: 'Shades',
            age: 'Confirmed',
            address: 'AMURUGESAN',
            lastModifiedBy: 'AMURUGESAN',
            netValue: '$570.23',
            rushChargesCat: "Regular",
            shCharges: "29.73",
            codCharges: "0.0",
            taxes: "0.0"

        }]; */
        let data = [];
        if (this.props.data=== undefined) {
            return <div>No Data ...</div>
        } else {
            data = this.props.data;
        }
        return (


            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        )


    }
}
