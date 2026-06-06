import { Card, Typography } from 'antd';
import ContactForm from '../components/ContactForm';
import { contactDetails, translations } from '../data';

const { Title, Paragraph } = Typography;

const Contact = ({ locale }) => {
  const t = translations[locale];

  return (
    <main className="page-stack">
      <section className="subhero-section contact-hero">
        <div className="subhero-media">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
            alt="Smart home controls"
            decoding="async"
          />
        </div>
        <div className="subhero-overlay" />
        <div className="subhero-content">
          <div>
            <span className="hero-badge">Contact</span>
            <Title>{t.contact.title}</Title>
            <Paragraph>{t.contact.desc}</Paragraph>
            <div className="contact-quick-grid">
              <div>
                <span>{t.contact.phoneTitle}</span>
                <strong>{contactDetails.phone}</strong>
              </div>
              <div>
                <span>{t.contact.whatsappTitle}</span>
                <strong>{t.sections.whatsappTag}</strong>
              </div>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>

      <section className="split-section compact">
        <Card className="content-card">
          <span className="eyebrow">{t.contact.visitTitle}</span>
          <Title level={3}>{t.contact.visitTitle}</Title>
          <Paragraph>{t.contact.visitDesc}</Paragraph>
          <div className="contact-meta">
            <p><strong>{t.contact.phoneTitle}:</strong> {contactDetails.phone}</p>
            <p><strong>Email:</strong> {contactDetails.email}</p>
            <p><strong>Service Area:</strong> {t.contact.serviceArea}</p>
          </div>
        </Card>
        <Card className="map-card">
          <div className="map-card-copy">
            <span className="eyebrow">{t.contact.mapTitle}</span>
            <Title level={4}>Locate Us Easily</Title>
            <Paragraph>{t.contact.mapDesc}</Paragraph>
          </div>
          <div className="map-image" />
        </Card>
      </section>
    </main>
  );
};

export default Contact;
