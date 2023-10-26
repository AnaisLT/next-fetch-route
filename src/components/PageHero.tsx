import React from "react";
import Image from "next/image";
import * as banner from "../assets/Banner-test.png";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  className: string;
  title?: string;
};

const { pageHero, pageHeroTitle, pageHeroContent, pageHeroImage } = styles;

const PageHero = ({ className, title }: PageHeroProps) => {
  return (
    <div className={pageHero}>
      <div className={pageHeroContent}>
        <h1 className={pageHeroTitle}>{title}</h1>
      </div>
      <Image
        className={pageHeroImage}
        src={banner}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Page hero"
      />
    </div>
  );
};

export default PageHero;
