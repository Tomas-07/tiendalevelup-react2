import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        <h1>🎮 Level-Up Gamer</h1>
      </Link>
    </div>
  );
};

export default Logo;