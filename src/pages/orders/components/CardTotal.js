import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';

export default class CardTotal extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: props.value,
            loading: false,
        };
    }
    render() {
        const columnsCardTotal = [{
            title: 'Line',
            dataIndex: 'key',
            width: 65,
            fixed: 'left',
            key: 'line',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Product',
            width: 90,
            dataIndex: 'product',
            key: 'product',
        }, {
            title: 'Color',
            dataIndex: 'color',
            width: 90,
            key: 'color',
        }, {
            title: 'Quantity',
            width: 95,
            dataIndex: 'qty',
            key: 'qty',
        }, {
            title: 'Witdh',
            width: 80,
            dataIndex: 'width',
            key: 'width',
        }, {
            title: 'Length',
            width: 85,
            dataIndex: 'length',
            key: 'length',
        }, {
            title: 'Bracket Mount',
            dataIndex: 'bracketMount',
            width: 140,
            key: 'bracketMount',
        }, {
            title: 'Lift Cord',
            width: 120,
            dataIndex: 'liftCord',
            key: 'liftCord',
        }, {
            title: 'Draw / Liner',
            dataIndex: 'drawLiner',
            width: 120,
            key: 'drawLiner',
        }, {
            title: 'No. Of Panels',
            dataIndex: 'noPanels',
            width: 110,
            key: 'noPanels',
        }, {
            title: 'Extensions Brackets',
            dataIndex: 'extBrackets',
            width: 110,
            key: 'extBrackets',
        }, {
            title: 'Specials / Speciality code',
            dataIndex: 'specials',
            width: 160,
            key: 'specials',
        }, {
            title: 'Specials 2 / Speciality code 2',
            dataIndex: 'specials2',
            width: 170,
            key: 'specials2',
        }, {
            title: 'Gross Price',
            dataIndex: 'grossPrice',
            width: 120,
            key: 'grossPrice',
        }, {
            title: 'Best Discount',
            dataIndex: 'bestDiscount',
            width: 120,
            key: 'bestDiscount',
        }, {
            title: 'Price Per line item',
            dataIndex: 'priceLine',
            width: 150,
            key: 'priceLine',
        }, {
            title: 'Surchages',
            key: 'action',
            fixed: 'right',
            render: (text, record) => (
                <span>
                    <a href="#">View</a>
                </span>
            ),
        }, {
            title: 'BOM',
            key: 'bom',
            fixed: 'right',
            render: (text, record) => (
                <span>
                    <a href="#">View</a>
                </span>
            ),
        }, {
            title: 'Inventory',
            key: 'inventory',
            fixed: 'right',
            render: (text, record) => (
                <span>
                    <a href="#">View</a>
                </span>
            ),
        }];

        const dataCardTotal = [{
            key: '1',
            line: '1',
            product: 'ZEA',
            color: '3000R',
            qty: 1,
            width: '36.000',
            length: '60.000',
            bracketMount: 'Inside Mount',
            liftCord: 'Right Metal Bead chain',
            drawLiner: '-',
            noPanels: '-',
            extBrackets: 'None',
            specials: 'none',
            specials2: 'none',
            grossPrice: '$357.00',
            bestDiscount: '50.00',
            priceLine: '$178.50'
        }];
        let data = [];
        if (this.props.data.length === 0) {
            return <div>No Data ...</div>
        } else {
            data = this.props.data;
        }
        return (
            <Table columns={columnsCardTotal} dataSource={data} scroll={{ x: 2090 }} />
        )


    }
}
