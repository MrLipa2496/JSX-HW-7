import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiMessageRounded } from "react-icons/bi";
import styles from "./Header.module.sass";

function Header() {
  const location = useLocation();
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsSignup(false);
    } else {
      setIsSignup(true);
    }
  }, [location.pathname]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        squadhelp
        <BiMessageRounded className={styles.message} />
      </div>
      <NavLink className={styles.btnWrapper} to={isSignup ? "/signup" : "/"}>
        <button className={styles.btn}>{isSignup ? "Signup" : "Login"}</button>
      </NavLink>
    </div>
  );
}

export default Header;
