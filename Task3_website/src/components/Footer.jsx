import React from 'react';

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  // Telegram SVG Icon Component
  const TelegramIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#007bff" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ marginRight: '8px', verticalAlign: 'middle' }}
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );

  // LinkedIn SVG Icon Component
  const LinkedInIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#007bff" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ marginRight: '8px', verticalAlign: 'middle' }}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h3 style={styles.title}>{t.navHome === "መነሻ" ? "መልካሙ ቴክ-ሶሉሽን" : " Melkamu Tech-Solution"}</h3>
          <p style={styles.text}>{t.footerAbout}</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.subTitle}>{t.footerLinks}</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#home" style={styles.anchor}>{t.navHome}</a></li>
            <li style={styles.listItem}><a href="#about" style={styles.anchor}>{t.navAbout}</a></li>
            <li style={styles.listItem}><a href="#services" style={styles.anchor}>{t.navServices}</a></li>
            <li style={styles.listItem}><a href="#contact" style={styles.anchor}>{t.navContact}</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.section}>
          <h4 style={styles.subTitle}>{t.footerAddr}</h4>
          <p style={styles.text}>{t.addressLocation}</p> 
          
          {/* Clickable Telegram with SVG */}
          <div style={styles.contactItem}>
            <a href="https://t.me/melkamu1130" target="_blank" rel="noreferrer" style={styles.anchor}>
              <TelegramIcon />
              <span>@MelkamuTech</span>
            </a>
          </div>

          {/* Clickable LinkedIn with SVG */}
          <div style={styles.contactItem}>
            <a href="https://www.linkedin.com/in/melkamu-alehegn-166695405" target="_blank" rel="noreferrer" style={styles.anchor}>
              <LinkedInIcon />
              <span>LinkedIn: Melkamu Alehegn</span>
            </a>
          </div>

          {/* Phone & Email */}
          <p style={styles.text}>
            <a href="tel:+251910651460" style={styles.anchor}>📞 +251 910 65 14 60</a>
          </p>
          <p style={styles.text}>
            <a href="tel:+251918255510" style={styles.anchor}>📞 +251 918 25 55 10</a>
          </p>
          <p style={styles.text}>
            <a href="mailto:melkamucom1130@gmail.com" style={styles.anchor}>📧 melkamucom1130@gmail.com</a>
          </p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyText}>
          &copy; {currentYear} {t.footerCopy}
        </p>
        
        <p style={styles.developerText}>
          {t.navHome === "መነሻ" 
            ? "ይህ ዌብሳይት በ መልካሙ አለኸኝ የበለፀገ ነው።" 
            : "This website is developed by Melkamu Alehegn."}
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '60px 20px 20px 20px',
    marginTop: '50px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  section: {
    flex: '1',
    minWidth: '250px'
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#007bff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    display: 'inline-block',
    paddingBottom: '5px'
  },
  text: {
    lineHeight: '1.8',
    color: '#bbb',
    fontSize: '0.95rem',
    marginBottom: '10px'
  },
  contactItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    marginBottom: '10px'
  },
  anchor: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center'
  },
  bottomBar: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #333',
  },
  copyText: {
    color: '#777',
    fontSize: '0.85rem',
    marginBottom: '5px'
  },
  developerText: {
    color: '#007bff', 
    fontSize: '0.9rem',
    fontWeight: '600',
    marginTop: '5px',
    letterSpacing: '0.5px'
  }
};

// CSS for hover animations
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    footer a:hover {
      color: #007bff !important;
      transform: translateX(5px);
    }
    footer a:hover svg {
      stroke: #ffffff !important;
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Footer;