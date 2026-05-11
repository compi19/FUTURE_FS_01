import React from 'react';

const About = ({ t }) => {
  return (
    // id="about" መኖሩ በ Navbar ላይ ያለውን አዝራር እንዲሰራ ያደርገዋል
    <section id="about" style={styles.section}>
      <div style={styles.container} className="about-container">
        <h2 style={styles.heading}>{t.navAbout}</h2>
        
        <div style={styles.contentWrapper}>
          <p style={styles.text}>
            {t.footerAbout}
          </p>
          
          {/* ተጨማሪ ዝርዝር መረጃ ካለህ እዚህ መጨመር ትችላለህ */}
          <p style={styles.subText}>
            {t.navHome === "መነሻ" 
              ? "ከ5 ዓመታት በላይ ልምድ ባላቸው ባለሙያዎች የታገዘ ጥራት ያለው አገልግሎት እንሰጣለን።" 
              : "With over 5 years of experience, we provide quality services supported by experts."}
          </p>
        </div>
      </div>
    </section>
  );
};

// ለአኒሜሽን የሚረዳ CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    .about-container {
      animation: fadeIn 1.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);
}

const styles = {
  section: { 
    padding: '100px 20px', 
    backgroundColor: '#f9f9f9', // ትንሽ ጠቆር ያለ ነጭ ለየት እንዲል ያደርገዋል
    textAlign: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  container: { 
    maxWidth: '900px', 
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  heading: { 
    fontSize: '2.8rem', 
    marginBottom: '30px', 
    color: '#007bff', 
    fontWeight: '800' 
  },
  contentWrapper: {
    textAlign: 'center'
  },
  text: { 
    fontSize: '1.2rem', 
    color: '#333', 
    lineHeight: '1.8',
    marginBottom: '20px'
  },
  subText: {
    fontSize: '1.05rem',
    color: '#666',
    lineHeight: '1.6',
    fontStyle: 'italic'
  }
};

export default About;