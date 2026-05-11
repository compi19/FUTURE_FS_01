import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ t }) => {
  // ለእያንዳንዱ አገልግሎት የሚሆኑ ምስሎች ዝርዝር
  const images = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166", // Web Design
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Web Development
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8", // Portfolio Dev
    "https://images.unsplash.com/photo-1626785774573-4b799315345d", // Graphic Design
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d", // Video Editing
    "https://images.unsplash.com/photo-1597733336794-12d05021d510", // Hardware Maint.
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3", // Software Maint.
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f"  // Digital Marketing
  ];

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.heading}>{t.servicesTitle}</h2>
      <p style={styles.subheading}>{t.servicesSub}</p>
      
      <div style={styles.container}>
        {t.serviceItems.map((item, index) => (
          /* Link ተጠቅመን ካርዱን ስንነካ ወደ /service/ID እንዲሄድ አደረግነው */
          <Link to={`/service/${index}`} key={index} style={{ textDecoration: 'none' }}>
            <div style={styles.card} className="service-card">
              <div style={styles.imgWrapper}>
                <img 
                  src={`${images[index]}?q=80&w=500&auto=format&fit=crop`} 
                  alt={item.title} 
                  style={styles.cardImage} 
                />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
                <div style={styles.learnMoreBtn}>
                  {t.btnReadMore || "ተጨማሪ ያንብቡ →"}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ለአኒሜሽን የሚረዳ CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    .service-card {
      transition: all 0.4s ease;
      cursor: pointer;
    }
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
      border-color: #007bff !important;
    }
    .service-card:hover img {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(styleSheet);
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '15px',
    color: '#1a1a1a',
    fontWeight: '800'
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '60px',
    maxWidth: '700px',
    margin: '0 auto 60px auto'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '35px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  card: {
    width: '320px',
    height: '450px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #f0f0f0',
    textAlign: 'left'
  },
  imgWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  cardContent: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '12px',
    color: '#007bff',
    fontWeight: '700'
  },
  cardDesc: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '0.95rem',
    overflow: 'hidden'
  },
  learnMoreBtn: {
    alignSelf: 'flex-start',
    padding: '8px 16px',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: '0.3s'
  }
};

export default Services;