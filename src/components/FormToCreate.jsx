import { Button, Form, Input } from "antd";

export default function FormToCreate({ addObject }) {
  const getDatta = (x) => {
    addObject(x);
  };

  return (
    <div className=" border-2 border-white p-8 rounded-md ">
      <h2>Formulario para crear usuario</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={getDatta}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="Ingresa el nombre" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="Ingresa el mail" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Guardar Usuario
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
