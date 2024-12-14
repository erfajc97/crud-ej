import { Button, Input } from "@nextui-org/react";
import { Form } from "antd";

const FormUser = ({ handleAddUser, handleUpdateUser, selectedUser }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    handleAddUser(values);
    form.resetFields();
  };

  const handleUpdate = (values) => {
    handleUpdateUser(selectedUser, values);
    form.resetFields();
  };

  const handleFinish = (values) => {
    if (selectedUser) {
      handleUpdate(values);
    } else {
      handleSubmit(values);
    }
  };

  return (
    <div className="mt-8 p-5 border-2 border-white rounded-md ">
      <Form
        name="userForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        className="mt-8"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: "Por favor ingresa el nombre" }]}
        >
          <Input placeholder="Ingresa el nombre" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Por favor ingresa el email" },
            { type: "email", message: "Ingresa un email válido" },
          ]}
        >
          <Input placeholder="Ingresa el email" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button color="primary" type="submit">
            {selectedUser ? "Actualizar Usuario" : "Guardar Usuario"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormUser;
