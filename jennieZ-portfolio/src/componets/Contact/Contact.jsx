import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail size={30} />
          <a href="mailto:jz951@georgetown.edu">jz951@georgetown.edu</a>
        </li>
        <li className={styles.link}>
          <BsLinkedin size={30} />
          <a href="https://www.linkedin.com/in/jennie-zhao-380645306/">
            linkedin.com/jennie-zhao
          </a>
        </li>
        <li className={styles.link}>
          <BsGithub size={30} />
          <a href="https://github.com/JianiZhao0321?tab=projects">
            github.com/JianiZhao0321
          </a>
        </li>
      </ul>
    </footer>
  );
};
