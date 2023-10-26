import React, {
  useId,
} from "react";
import Link from "next/link";

import styles from "./Card.module.css";

const { root, link, title, content } = styles
 
export type CardRootProps = JSX.IntrinsicElements["article"];

export const Root = React.forwardRef<HTMLElement, CardRootProps>(
  ({ className = "", children, ...props }) => {
    const labelId = `card-title${useId()}`;
    return (
      <article
        className={`${root} ${className}`}
        aria-labelledby={labelId}
        {...props}
      >
       {children}
      </article>
    );
  }
);

Root.displayName = "Card.Root";

export type CardTitleProps = {
  href?: string;
} & JSX.IntrinsicElements["h3"];

export const Title = ({
  className = "",
  children,
  href,
  ...props
}: CardTitleProps) => {
  const content = href ? 
    <Link href={href} className={link}>
      {children}
    </Link> : children
  return (
    <h3 className={`${title} ${className}`} {...props}>
      {content}
    </h3>
  );
};

Title.displayName = "Card.Title";

export type CardContentProps = JSX.IntrinsicElements["div"];

export const Content = ({ className = "", ...props }: CardContentProps) => {
  return <div className={`${content} ${className}`} {...props} />;
};

Content.displayName = "Card.Content";