import { WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { translations } from '../data';

const FloatingWhatsApp = ({ locale }) => {
  const t = translations[locale];

  return (
    <div className="floating-whatsapp">
      <a
        href="https://wa.me/919632620473?text=Hello%20Sirantara%20Smart%20Solutions%2C%20I%20need%20a%20smart%20home%20solution."
        target="_blank"
        rel="noreferrer"
        title={t.footer.whatsapp}
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
          className="whatsapp-button"
          icon={<WhatsAppOutlined style={{ fontSize: 22 }} />}
        />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
