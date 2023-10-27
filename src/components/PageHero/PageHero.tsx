import React from "react";
import Image from "next/image";
import banner from "../../assets/Banner-test.png";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title?: string;
  subtitle?: string;
};

const { pageHero, pageHeroTitle, pageHeroSubtitle, pageHeroContent, pageHeroImage } = styles;

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div className={pageHero}>
      <div className={pageHeroContent}>
        <h1 className={pageHeroTitle}>{title}</h1>
        <p className={pageHeroSubtitle}>{subtitle}</p>
      </div>
      <Image
        className={pageHeroImage}
        src={banner}
        layout="fill"
        alt="Page hero"
      />
    </div>
  );
};

export default PageHero;
