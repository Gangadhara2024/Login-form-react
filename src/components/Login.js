import { Button, Form, Input, Alert } from "antd";
import React, { useState } from "react";

const Login = ({auth, toggleForm}) => {
    const [apistatus, setApistatus] = useState("init");

    
  const submitform = async (loginInfo) => {
    setApistatus("pending");
    const { success } = await auth.loginUser(loginInfo);
    setApistatus(success ? "success" : "error");
  };

  return (
    <div className="form">
      {apistatus === "success" && (
        <Alert type="success" showIcon message="Login succesfull" closable />
      )}
      {apistatus === "error" && (
        <Alert
          type="error"
          showIcon
          message="Invalid credentials..."
          closable
        />
      )}
      <Form onFinish={submitform} >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "please enter valid email" },
            { required: true, message: "please enter mail" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Button
          loading={apistatus === "pending"}
          htmlType="submit"
          block
          type="primary"
        >
          Login
        </Button>
      </Form>
      <p>Don't Have An Account ?<Button onClick={toggleForm} type="link">Sign Up Here</Button></p>
    </div>
  );
};

export default Login;
