import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = ({ t }) => {
  const { id } = useParams(); // የአገልግሎቱን መለያ ቁጥር ያነባል
  const service = t.serviceItems[id]; // ትክክለኛውን አገልግሎት ይመርጣል

  // ገጹ ሲከፈት ሁልጊዜ ወደ ገጹ አናት (Top) እንዲወጣ ያደርጋል
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // አገልግሎቱ ካልተገኘ የሚታይ መልዕክት
  if (!service) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '80vh' }}>
        <h2>{t.navHome === "መነሻ" ? "አገልግሎቱ አልተገኘም!" : "Service not found!"}</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
          {t.navHome === "መነሻ" ? "ወደ መነሻ ተመለስ" : "Back to Home"}
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* ወደ ኋላ መመለሻ ሊንክ */}
        <Link to="/" style={styles.backBtn}>
          ← {t.navHome === "መነሻ" ? "ወደ መነሻ ተመለስ" : "Back to Home"}
        </Link>
        
        <div style={styles.card}>
          {/* የአገልግሎቱ ርዕስ */}
          <h1 style={styles.title}>{service.title}</h1>
          <div style={styles.divider}></div>
          
          {/* የአገልግሎቱ አጭር መግለጫ */}
          <p style={styles.shortDesc}><i>{service.desc}</i></p>

          {/* ዝርዝር መረጃ ክፍል */}
          <h3 style={styles.subTitle}>
            {t.navHome === "መነሻ" ? "ስለ አገልግሎቱ ዝርዝር መረጃ" : "Detailed Overview"}
          </h3>
          
          <div style={styles.description}>
            {service.details ? (
              service.details
            ) : (
              // ገና ዝርዝር መረጃ ያልተጻፈላቸው አገልግሎቶች የሚታይ ጊዜያዊ ጽሁፍ
              t.navHome === "መነሻ" 
                ? `ስለ ${service.title} ዝርዝር መረጃ በቅርቡ ይቀርባል። መልካሙ አለኸኝ ጥራት ያለው ስራ ያቀርብልዎታል።`
                : `Detailed information about ${service.title} will be presented here soon. Melkamu Alehegn provides quality work for you.`
            )}
          </div>

          {/* የታችኛው የመገናኛ ሳጥን */}
          <div style={styles.contactInfo}>
            <h4 style={{ color: '#1a1a1a', marginBottom: '10px' }}>
              {t.navHome === "መነሻ" ? "ይህንን አገልግሎት ይፈልጋሉ?" : "Interested in this service?"}
            </h4>
            <p style={{ color: '#666' }}>
              {t.navHome === "መነሻ" 
                ? "አሁኑኑ ያግኙን እና ስራዎን በባለሙያ ያስጀምሩ።" 
                : "Contact us now and start your project with a professional."}
            </p>
            <a href="/#contact" style={styles.contactBtn}>
              {t.navContact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    padding: '120px 20px 60px 20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  backBtn: {
    display: 'inline-block',
    marginBottom: '25px',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: '0.3s'
  },
  card: {
    backgroundColor: '#fff',
    padding: '50px 40px',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.07)',
    border: '1px solid #eee'
  },
  title: {
    fontSize: '2.8rem',
    color: '#1a1a1a',
    marginBottom: '15px',
    fontWeight: '800'
  },
  divider: {
    height: '6px',
    width: '70px',
    backgroundColor: '#007bff',
    marginBottom: '25px',
    borderRadius: '10px'
  },
  shortDesc: {
    fontSize: '1.2rem',
    color: '#007bff',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  subTitle: {
    fontSize: '1.6rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: '700'
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: '1.9',
    color: '#444',
    whiteSpace: 'pre-line', // በ translations.js ላይ የተደረጉ የEnter ንክኪዎችን (መስመሮችን) ይጠብቃል
    textAlign: 'left'
  },
  contactInfo: {
    marginTop: '60px',
    padding: '35px',
    backgroundColor: '#f0f7ff',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px dashed #007bff'
  },
  contactBtn: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '14px 35px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
    transition: '0.3s'
  }
};

export default ServiceDetail;