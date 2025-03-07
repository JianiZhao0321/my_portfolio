import React from "react";
import { getImageUrl } from "../../utils";
import { MdPolicy, MdDataUsage, MdBusiness } from "react-icons/md";
import styles from "./About.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

export const About = () => {
  const reactIconStyle = {
    fill: "var(--color-text)",
    stroke: "var(--color-text)",
  };
  const reactIconSize = 200;

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="sitting with a laptop"
          className={styles.image}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <MdPolicy
              size={reactIconSize}
              style={reactIconStyle}
              color="blue"
            />
            <div className={styles.aboutItemText}>
              <h3>Policy Analysis & Research</h3>
              <p>
                Experienced in applying statistical methods and qualitative
                research techniques to evaluate policies.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <MdDataUsage size={reactIconSize} style={reactIconStyle} />
            <div className={styles.aboutItemText}>
              <h3>Data Science & Programming</h3>
              <p>
                Proficient in R, Python, Stata to leverage machine learning,
                data vis and predictive analytics to derive actionable insights.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <MdBusiness size={reactIconSize} style={reactIconStyle} />
            <div className={styles.aboutItemText}>
              <h3>Business & Market Strategy</h3>
              <p>
                Skilled in market research and strategic consulting, using
                frameworks to support data-driven decision-making.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
