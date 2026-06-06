import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import {
  ApiOutlined,
  CheckCircleOutlined,
  ControlOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import ContactForm from '../components/ContactForm';
import {
  contactDetails,
  demoHighlights,
  industries,
  portfolioProjects,
  processSteps,
  serviceCategories,
  testimonials,
  blogSamples,
  heroActions,
  translations,
  whyChooseUs,
} from '../data';

const { Title, Paragraph } = Typography;

const Home = ({ locale }) => {
  const t = translations[locale];
  const heroFeatures = t.hero.features.slice(0, 4);
  const serviceIcons = [HomeOutlined, SafetyCertificateOutlined, ApiOutlined, ControlOutlined, CustomerServiceOutlined, CheckCircleOutlined];
  const statItems = [
    ['24/7', 'Local response'],
    ['8+', 'Integrated systems'],
    ['100%', 'Designed for your space'],
  ];

  return (
    <main className="page-stack">
      <section className="hero-section">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1800&q=80"
            alt="Smart lock controlled by phone"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-badge">{t.hero.flash}</span>
            <Title className="hero-title">{t.hero.title}</Title>
            <Paragraph className="hero-subtitle">{t.hero.subtitle}</Paragraph>
            <div className="button-row">
              <a href={heroActions.consult} className="primary-link">{t.hero.consult}</a>
              <a href={heroActions.whatsapp} target="_blank" rel="noreferrer" className="ghost-link">{t.hero.whatsapp}</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="control-panel"
          >
            <div className="panel-status">
              <div>
                <p>{t.hero.statusTitle}</p>
                <strong>{t.hero.statusSubtitle}</strong>
              </div>
              <span className="panel-icon"><HomeOutlined /></span>
            </div>
            <div className="panel-feature-grid">
              {heroFeatures.map((item) => (
                <div key={item} className="panel-feature">
                  <CheckCircleOutlined />
                  <strong>{item}</strong>
                  <span>Comfort, security, and control working together.</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Highlights">
        {statItems.map(([value, label]) => (
          <div key={label} className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Why choose us</span>
          <Title level={2}>{t.sections.whyChooseTitle}</Title>
          <Paragraph>{t.sections.whyChooseDesc}</Paragraph>
        </div>
        <div className="trust-grid">
          {whyChooseUs.map((item) => (
            <div key={item} className="trust-card">
              <CheckCircleOutlined />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading centered">
          <span className="eyebrow">Solutions</span>
          <Title level={2}>{t.sections.servicesTitle}</Title>
          <Paragraph>{t.sections.servicesDesc}</Paragraph>
        </div>
        <div className="solution-grid">
          {serviceCategories.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <Card key={service.title} className="solution-card">
                <span className="card-icon"><Icon /></span>
                <Title level={4}>{service.title}</Title>
                <div className="list-stack">
                  {service.items.map((item) => (
                    <p key={item}><span>+</span>{item}</p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="split-section">
        <div>
          <span className="eyebrow">Experience center</span>
          <Title level={2}>{t.sections.demoTitle}</Title>
          <Paragraph>{t.sections.demoDesc}</Paragraph>
          <div className="mini-card-grid">
            {demoHighlights.map((item) => (
              <div key={item.title} className="mini-card">
                <div className="mini-card-title">
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="media-card">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
            alt="Smart home living room"
            loading="lazy"
            decoding="async"
          />
          <div className="media-caption-grid">
            <div>
              <strong>Smart Security Dashboard</strong>
              <p>CCTV, alarms, locks, and access control in one place.</p>
            </div>
            <div>
              <strong>Energy Saving Insights</strong>
              <p>Track usage and optimize daily automation routines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading centered">
          <span className="eyebrow">Built for</span>
          <Title level={2}>{t.sections.industriesTitle}</Title>
          <Paragraph>{t.sections.industriesDesc}</Paragraph>
        </div>
        <div className="industry-grid">
          {industries.map((item) => (
            <div key={item} className="industry-pill">{item}</div>
          ))}
        </div>
      </section>

      <section className="split-section reverse-on-mobile">
        <div className="image-frame">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
            alt="Smart installation"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <span className="eyebrow">Process</span>
          <Title level={2}>{t.sections.processTitle}</Title>
          <Paragraph>{t.sections.processDesc}</Paragraph>
          <div className="process-grid">
            {processSteps.map((item, index) => (
              <div key={item} className="process-card">
                <span>Step {index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading centered">
          <span className="eyebrow">Clients</span>
          <Title level={2}>{t.sections.testimonialTitle}</Title>
          <Paragraph>{t.sections.testimonialDesc}</Paragraph>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <Card key={item.name} className="testimonial-card">
              <p>&quot;{item.quote}&quot;</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="split-section compact">
        <div>
          <span className="eyebrow">Portfolio</span>
          <Title level={2}>{t.sections.ctaTitle}</Title>
          <Paragraph>{t.sections.ctaDesc}</Paragraph>
          <div className="button-row">
            <a href={`tel:${contactDetails.phone}`} className="primary-link">{t.form.callNow}</a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" className="secondary-link">{t.form.whatsappButton}</a>
          </div>
        </div>
        <Card className="portfolio-card">
          <div className="portfolio-grid">
            {portfolioProjects.map((project) => (
              <div key={project.title}>
                <strong>{project.title}</strong>
                <p>{project.subtitle}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="section-band">
        <div className="section-heading centered">
          <span className="eyebrow">Resources</span>
          <Title level={2}>{t.sections.resourcesTitle}</Title>
          <Paragraph>{t.sections.resourcesDesc}</Paragraph>
        </div>
        <div className="resource-grid">
          {blogSamples.map((item) => (
            <div key={item.title} className="resource-card">
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span className="eyebrow">Talk to us</span>
          <Title level={2}>{t.sections.contactTitle}</Title>
          <Paragraph>{t.sections.contactDesc}</Paragraph>
          <div className="contact-detail-card">
            <div>
              <span>{t.sections.callUs}</span>
              <strong>{contactDetails.phone}</strong>
            </div>
            <div>
              <span>{t.sections.whatsappLabel}</span>
              <strong>{t.sections.whatsappTag}</strong>
            </div>
          </div>
        </div>
        <ContactForm locale={locale} />
      </section>
    </main>
  );
};

export default Home;
