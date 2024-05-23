import { Alert, Button, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";

const Signup = ({ auth , toggleForm }) => {
  const [apistatus, setApistatus] = useState("init");
  const [form] = useForm();

  const submitform = async (data) => {
    setApistatus("pending");
    const { success } = await auth.signupUser(data);
    setApistatus(success ? "success" : "error");
  };

  useEffect(() => {
    if (apistatus === "success") {
      form.resetFields();
    }
  }, [apistatus]);

  return (
    <div className="form">
      {apistatus === "success" && (
        <Alert type="success" showIcon message="signup success" closable />
      )}
      {
        apistatus === "error" && (
            <Alert type="error" showIcon message="something went wrong..." closable/>
        )
      }
      <Form form={form} onFinish={submitform} layout="vertical">
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
          label="Name"
          name="name"
          rules={[{ required: true, message: "please enter name" }]}
        >
          <Input placeholder="Enter Fullname" />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "please enter city" }]}
        >
          <Input placeholder="Enter City" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item
          label="Enter your Gender"
          name="gender"
          rules={[{ required: true, message: "please enter gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          loading={apistatus === "pending"}
          htmlType="submit"
          block
          type="primary"
        >
          Submit
        </Button>
      </Form>
      <p>Already Have An Account ?<Button onClick={toggleForm} type="link">Sign In Here</Button></p>
    </div>
  );
};

export default Signup;
