import React from 'react';

const Hero = ({ t }) => {
  return (
    // id="home" መኖሩ በ Navbar ላይ ያለውን 'Home' አዝራር ስትጫን እዚህ እንዲመጣ ያደርገዋል
    <section id="home" style={styles.hero}>
      {/* Overlay - ምስሉ ላይ ያለው ጥቁር ጥላ ጽሁፉ በደንብ እንዲታይ ያደርጋል */}
      <div style={styles.overlay}>
        <div style={styles.content}>
          {/* t.heroTitle ከ translations.js የሚመጣው ዳታ ነው */}
          <h1 style={styles.title}>{t.heroTitle}</h1>
          
          {/* t.heroSub ከ translations.js የሚመጣው ዳታ ነው */}
          <p style={styles.subtitle}>{t.heroSub}</p>
          
          <div style={styles.btnGroup}>
            <button style={styles.primaryBtn}>
              {t.navHome === "መነሻ" ? "አሁኑኑ ይጀምሩ" : "Get Started"}
            </button>
            <button style={styles.secondaryBtn}>
              {t.navAbout}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '90vh',
    // ዘመናዊ የቴክኖሎጂ ምስል በዳራነት ተጠቅመናል
    backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px'
  },
  content: {
    maxWidth: '800px',
    zIndex: 2,
    animation: 'fadeInUp 1s ease-out'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.2',
    fontFamily: 'inherit'
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '40px',
    opacity: '0.9',
    lineHeight: '1.6'
  },
  btnGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    padding: '12px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s'
  },
  secondaryBtn: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s'
  }
};

// ለአኒሜሽን የሚረዳ CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    button:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Hero;