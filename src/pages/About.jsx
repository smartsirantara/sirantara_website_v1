import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { translations } from '../data';

const { Title, Paragraph } = Typography;

const About = ({ locale }) => {
  const t = translations[locale];

  return (
    <main className="page-stack">
      <section className="subhero-section">
        <div className="subhero-media">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80"
            alt="Modern automated home"
            decoding="async"
          />
        </div>
        <div className="subhero-overlay" />
        <div className="subhero-content">
          <div>
            <span className="hero-badge">About Sirantara Smart Solutions</span>
            <Title>{t.about.title}</Title>
            <Paragraph>{t.about.p1}</Paragraph>
            <Paragraph>{t.about.p2}</Paragraph>
            <Paragraph>{t.about.p3}</Paragraph>
            <Link to="/contact" className="primary-link">{t.about.quote}</Link>
          </div>
          <div className="proof-stack">
            {[
              ['Local Trust', 'Sirsi-based support with regional expertise.'],
              ['Quality Service', 'Certified installations, clean wiring and long-term care.'],
            ].map(([title, text]) => (
              <div key={title} className="proof-card">
                <span>{title}</span>
                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="two-card-grid">
        {[
          [t.about.valuesTitle, t.about.values],
          [t.about.differentTitle, t.about.different],
        ].map(([title, items]) => (
          <Card key={title} className="content-card">
            <Title level={3}>{title}</Title>
            <ul className="check-list">
              {items.map((item) => (
                <li key={item}>
                  <CheckCircleOutlined />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="section-band">
        <div className="section-heading">
          <span className="eyebrow">Ready for real sites</span>
          <Title level={3}>{t.about.readyTitle}</Title>
          <Paragraph>{t.about.readyDesc}</Paragraph>
        </div>
        <div className="two-card-grid">
          <div className="resource-card">
            <strong>{t.about.localNetworkTitle}</strong>
            <p>{t.about.localNetworkDesc}</p>
          </div>
          <div className="resource-card">
            <strong>{t.about.commercialTitle}</strong>
            <p>{t.about.commercialDesc}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
