import "antd/dist/antd.css";
import React from "react";
import { Table, Modal, Input, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Cart.css";

function Test(){
    const [isEditing , setisEditing ] = useState(false);
    const [editingCart, setEditingCart] = useState(null);
    const [dataSource, setdataSource] = useState([
        {
            id:1,
            email:'john@gmail.com',
            movie:'KGF',
            theater:'Savoy',
            time: '10.30',
            ticketQuantity: 2,
            price: 1000,
        },
        {
            id:2,
            email:'john@gmail.com',
            movie:'KGF',
            theater:'Savoy',
            time: '10.30',
            ticketQuantity: 2,
            price: 1000,
        },
        {
            id:3,
            email:'john@gmail.com',
            movie:'KGF',
            theater:'Savoy',
            time: '10.30',
            ticketQuantity: 2,
            price: 1000,
        },
        {
            id:4,
            email:'john@gmail.com',
            movie:'KGF',
            theater:'Savoy',
            time: '10.30',
            ticketQuantity: 2,
            price: 1000,
        },
    ]);

    const columns=[
        {
            key: 1,
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: 2,
            title: 'Email',
            dataIndex: 'email',
        },
        {
            key: 3,
            title: 'Movie',
            dataIndex: 'movie',
        },
        {
            key: 4,
            title: 'Theater',
            dataIndex: 'theater',
        },
        {
            key: 5,
            title: 'Time',
            dataIndex: 'time',
        },
        {
            key: 6,
            title: 'Ticket Quantity',
            dataIndex: 'ticketQuantity',
        },
        {
            key: 7,
            title: 'Price',
            dataIndex: 'price',
        },
        {
            key: 8,
            title: 'Actions',
            render: (record) => {
                return <>
                    <EditOutlined
                        onClick={()=>{
                            onEditCart(record);
                        }}
                    />
                        
                    <DeleteOutlined 
                        onClick={()=>{
                            onDeleteCart(record);
                        }} 
                        style = {{ color: "red", marginLeft: 12  }} 
                    />
                </>
            }
        },
    ];

    const onEditCart = (record) => {
        setisEditing(true);
        setEditingCart({...record});
    };

    const onDeleteCart=(record)=>{
        Modal.confirm({
            title: 'Delete this cart item?',
            okText: 'Yes',
            okType: 'danger',
            onOk:()=>{
                setdataSource(pre=>{
                    return pre.filter(cart => cart.id !== record.id);
                });
            }
        });
    };

    const resetEditng=()=>{
        setisEditing(false);
        setEditingCart(null);
    };

    return(
        <div className="cart-main-component">
            <Card
                className="cartCard"
                title="Cart"
                headStyle={{ fontSize: 30, fontWeight: "bold", border: "none" }}
            >
                <Table
                    columns={columns}
                    dataSource={dataSource}
                >
                </Table>
                <Modal
                    title= "Edit cart items"
                    visible = {isEditing}
                    okText="Save"
                    onCancel={()=>{
                        setisEditing(false);
                        resetEditng();
                    }}
                    onOk={() => {
                        setdataSource(pre=>{
                            return pre.map(cart=>{
                                if(cart.id === editingCart.id){
                                    return editingCart;
                                } else {
                                    return cart;
                                }
                            });
                        });
                        resetEditng();
                    }}
                >
                    <Input value={editingCart?.movie} onChange={(e)=>{
                            setEditingCart(pre=>{
                                return {...pre, movie:e.target.value}
                            });
                        }} 
                    /> <br/>
                    <Input value={editingCart?.theater} onChange={(e)=>{
                            setEditingCart(pre=>{
                                return {...pre, theater:e.target.value}
                            });
                        }} 
                    /> <br/>
                    <Input value={editingCart?.time} onChange={(e)=>{
                            setEditingCart(pre=>{
                                return {...pre, time:e.target.value}
                            });
                        }} 
                    /> <br/>
                    <Input value={editingCart?.ticketQuantity} onChange={(e)=>{
                            setEditingCart(pre=>{
                                return {...pre, ticketQuantity:e.target.value}
                            });
                        }} 
                    />
                </Modal>
            </Card>
        </div>
    );
}
export default Test;