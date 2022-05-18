import React from "react";
import "antd/dist/antd.css";
import "./Cart.css";
import { Tag, Table, Space, Card } from "antd";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

function Cart() {
    const dataSource = [
        {
            key: '1',
            id: 1,
            email: 'vihanga@gmail.com',
            mobileNumber: '0711234567',
            theater: 'OGF',
            time: '10.30',
            price: '2000',
            action: 'action'
        },
        {
            key: '2',
            id: 2,
            email: 'nimal@gmail.com',
            mobileNumber: '0712771079',
            theater: 'Savoy',
            time: '10.30',
            price: '2000',
            action: 'action'
        },
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
        },
        {
            title: 'Theater',
            dataIndex: 'theater',
            key: 'theater',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Actions',
            key: 'action',
            render:(record)=>{
                return (
                    <>
                        <EditOutlined />
                        <DeleteOutlined style={{ color:"red", marginLeft: 12}} />
                    </>
                );
            }
        },
    ];
    return (
        <div className="cart-main-component">
            <Card 
                className="cartCard"
                title="Cart"
                headStyle={{ fontSize: 30, fontWeight: "bold", border: "none" }}
            >
                <Table dataSource={dataSource} columns={columns} />
            </Card>
        </div>
    );
}
export default Cart;