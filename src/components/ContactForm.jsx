import { Button, Form, Input, message, Select } from 'antd';
import { contactDetails, translations } from '../data';

const { TextArea } = Input;

const locations = ['Sirsi', 'Siddapur', 'Kumta', 'Honnavar', 'Karwar', 'Yellapur', 'Hubli'];

const ContactForm = ({ locale }) => {
  const [form] = Form.useForm();
  const t = translations[locale];

  const onFinish = () => {
    message.success('Thank you! Your enquiry has been received. We will contact you shortly.');
    form.resetFields();
  };

  return (
    <div className="contact-form-card">
      <div className="form-heading">
        <p className="form-title">{t.form.title}</p>
        <p className="form-description">{t.form.desc}</p>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="enquiry-form"
        requiredMark={false}
      >
        <Form.Item name="name" label={t.form.name} rules={[{ required: true, message: t.form.validation.name }]}>
          <Input size="large" placeholder={t.form.placeholderName} />
        </Form.Item>
        <Form.Item name="phone" label={t.form.phone} rules={[{ required: true, message: t.form.validation.phone }]}>
          <Input size="large" placeholder={t.form.placeholderPhone} />
        </Form.Item>
        <Form.Item name="email" label={t.form.email} rules={[{ type: 'email', message: t.form.validation.email }]}>
          <Input size="large" placeholder={t.form.placeholderEmail} />
        </Form.Item>
        <Form.Item name="location" label={t.form.location} rules={[{ required: true, message: t.form.validation.location }]}>
          <Select size="large" placeholder={t.form.placeholderLocation}>
            {locations.map((item) => (
              <Select.Option value={item} key={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="requirement" label={t.form.requirement} rules={[{ required: true, message: t.form.validation.requirement }]}>
          <TextArea rows={4} placeholder={t.form.placeholderRequirement} />
        </Form.Item>
        <div className="form-actions">
          <Button type="primary" htmlType="submit" size="large" className="pill-button">
            {t.form.submit}
          </Button>
          <div className="quick-contact">
            <a href={`tel:${contactDetails.phone}`}>{t.form.callNow}</a>
            <span aria-hidden="true">/</span>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">{t.form.whatsappButton}</a>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
