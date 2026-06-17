import { useEffect, useState } from 'react';
import { Layout, Switch, Button } from 'antd';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { CloseOutlined, MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import logo from './images/logo_v1.PNG';
import { navItems, translations } from './data';

const { Header, Content } = Layout;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[locale];

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const storedLocale = window.localStorage.getItem('locale');

    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }

    if (storedLocale === 'en' || storedLocale === 'kn') {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = locale === 'kn' ? 'kn' : 'en';
    window.localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => {
    setMenuOpen(false);
    const currentTitle =
      location.pathname === '/about'
        ? t.nav.about
        : location.pathname === '/contact'
        ? t.nav.contact
        : t.nav.home;
    document.title = `${currentTitle} | Sirantara Smart Solutions`;
  }, [location.pathname, t]);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  const toggleLocale = () => {
    setLocale((current) => (current === 'en' ? 'kn' : 'en'));
  };

  return (
    <Layout className="app-shell">
      <Header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" className="brand-lockup" aria-label="Sirantara Smart Solutions home">
            <img src={logo} alt="Sirantara Smart Solutions logo" className="brand-logo" />
            <span className="brand-copy">
              <span>Sirantara</span>
              <small>Smart Solutions</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Switch
              checked={darkMode}
              onChange={(checked) => setDarkMode(checked)}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              aria-label="Toggle dark mode"
            />
            <Button className="utility-button" onClick={toggleLocale}>
              {t.languageToggle}
            </Button>
            <Button type="primary" className="header-cta">
              <Link to="/contact">{t.nav.contact}</Link>
            </Button>
            <Button
              className="mobile-menu-button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setMenuOpen((open) => !open)}
            />
          </div>
        </div>

        {menuOpen && (
          <nav className="site-container mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' is-active' : ''}`}
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>
        )}
      </Header>

      <Content className="site-main">
        <div className="page-glow" />
        <div className="site-container page-container">
          <Routes>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/about" element={<About locale={locale} />} />
            <Route path="/contact" element={<Contact locale={locale} />} />
          </Routes>
        </div>
      </Content>

      <Footer locale={locale} />
      <FloatingWhatsApp locale={locale} />
    </Layout>
  );
};

export default App;
