import React from 'react';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  return (
      <div style={styles.content}>
		  <h2>Navigate</h2>

		  <a key={0} href="/" style={styles.sidebarLink}>Home</a>
		  <a key={1} href="/start" style={styles.sidebarLink}>Start</a>

		  <div style={styles.divider} />

		  <a key={2} href="/" style={styles.sidebarLink}>Websites</a>
		  <a key={3} href="/" style={styles.sidebarLink}>Software</a>
		  <a key={4} href="/" style={styles.sidebarLink}>Video Games</a>
		  <a key={5} href="/" style={styles.sidebarLink}>Music</a>
		  <a key={6} href="/" style={styles.sidebarLink}>Photography</a>

		  <div style={styles.divider} />

		  <a key={7} href="/contact" style={styles.sidebarLink}>Contact</a>
      </div>
  );
};


export default SidebarContent;
