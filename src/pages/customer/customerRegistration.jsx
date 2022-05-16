import React from "react";
import "./Styles.css";
import "antd/dist/antd.css"; 
import { Form, Input, Button, Typography, Card, Space, Checkbox, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

function Registration() {
    const { Text, Link } = Typography;
    const navigate = useNavigate();
    return(
        <div className="login-main-component">
            <Card
                className="loginCard"
                title="Register"
                headStyle={{ fontSize: 30, fontWeight: "bold", border: "none" }}
            >
                <Form
                style={{ width: 400 }}
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                //onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        className="lableText"
                        label="Name"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                        { whitespace:true },
                        { min:3 },
                        ]}
                        hasFeedback
                    >
                        <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Name"
                        />
                    </Form.Item>

                    <Form.Item
                        className="lableText"
                        label="NIC"
                        name="nic"
                        rules={[
                        {
                            required: true,
                            message: "Please input your NIC number!",
                        },
                        { len:9 },
                        ]}
                        hasFeedback
                    >
                        <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="NIC Number"
                        suffix="V"
                        />
                    </Form.Item>

                    <Form.Item
                        className="lableText"
                        label="Mobile Number"
                        name="mobile"
                        rules={[
                        {
                            required: true,
                            message: "Please input your mobile number!",
                        },
                        { min:10 },
                        ]}
                        hasFeedback
                    >
                        <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Mobile Number"
                        />
                    </Form.Item>

                    <Form.Item
                        className="lableText"
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                        { type:"email"},
                        ]}
                        hasFeedback
                    >
                        <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        className="lableText"
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        { 
                            min:8,
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        className="lableText"
                        label="Confirm Password"
                        name="confirmpassword"
                        dependencies={["password"]}
                        rules={[
                        {
                            required: true,
                            message: "Please re-enter password!",
                        },
                        ({getFieldValue})=>({
                            validator(_,value){
                            if(!value || getFieldValue("password") === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("Passwords don't match!")
                            }
                        })
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Re-enter Password"
                        />
                    </Form.Item>

                    <Form.Item 
                        name="agreement"
                        style={{ alignItems: "center" }}
                        valuePropName="checked"
                        rules={[
                        {
                            validator:(_,value) =>
                            value
                            ? Promise.resolve()
                            : Promise.reject(
                                "Please agree terms & conditons to proceed!"
                            ),
                        },
                        ]}
                    >
                        <Checkbox> Agree to our terms and conditions </Checkbox>
                    </Form.Item>

                    <Form.Item style={{ alignItems: "center" }}>
                        <Button
                        type="primary"
                        htmlType="submit"
                        className="loginBtn"
                        onClick={() => {
                            navigate("/home");
                        }}
                        >
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Registration;