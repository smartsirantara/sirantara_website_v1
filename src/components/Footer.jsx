import { Link } from 'react-router-dom';
import logo from '../images/logo_v1.PNG';
import { navItems, contactDetails, translations } from '../data';

const Footer = ({ locale }) => {
  const t = translations[locale];

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Sirantara Smart Solutions logo" className="footer-logo" />
          <p className="footer-kicker">{t.footer.heading}</p>
          <p>{t.footer.desc}</p>
        </div>
        <div>
          <p className="footer-title">{t.footer.explore}</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.key} to={item.path}>
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">{t.footer.contact}</p>
          <div className="footer-contact">
            <p><strong>{t.footer.phone}</strong> {contactDetails.phone}</p>
            <p><strong>{t.footer.email}</strong> {contactDetails.email}</p>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
            >
              {t.footer.whatsapp}
            </a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        &copy; {new Date().getFullYear()} Sirantara Smart Solutions. {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
