import React from 'react';

const Navbar = ({ t, toggleLang }) => {
  return (
    <nav style={styles.nav}>
      {/* Logo - Dynamically changes based on language */}
      <div style={styles.logo}>
        {t.navHome === "መነሻ" ? "መልካሙ ቴክ-ሶሉሽን" : " Melkamu Tech-Solution"}
      </div>
      
      <ul style={styles.navLinks}>
        <li style={styles.link}><a href="#home" className="nav-item" style={styles.anchor}>{t.navHome}</a></li>
        <li style={styles.link}><a href="#about" className="nav-item" style={styles.anchor}>{t.navAbout}</a></li>
        <li style={styles.link}><a href="#services" className="nav-item" style={styles.anchor}>{t.navServices}</a></li>
        <li style={styles.link}><a href="#contact" className="nav-item" style={styles.anchor}>{t.navContact}</a></li>
      </ul>

      <div style={styles.btnContainer}>
        {/* Language Toggle Button */}
        <button 
          onClick={toggleLang} 
          style={styles.langBtn}
          className="lang-toggle-btn"
        >
          {t.btnLang}
        </button>
      </div>
    </nav>
  );
};

// CSS for Hover Effects
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    .nav-item:hover { 
      color: #007bff !important; 
    }
    .lang-toggle-btn:hover {
      background-color: #007bff !important;
      color: white !important;
      transform: scale(1.05);
    }
    .lang-toggle-btn {
      transition: all 0.3s ease !important;
    }
    .nav-item {
      transition: color 0.3s ease;
    }
  `;
  document.head.appendChild(styleSheet);
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: '#1a1a1a',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  logo: { 
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: '#007bff',
    letterSpacing: '1px'
  },
  navLinks: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '25px', 
    margin: 0, 
    padding: 0 
  },
  link: { fontSize: '1rem' },
  anchor: { 
    color: 'inherit', 
    textDecoration: 'none', 
    fontWeight: '500'
  },
  btnContainer: { 
    display: 'flex', 
    alignItems: 'center'
  },
  langBtn: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Navbar;