import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, children, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="section-heading font-heading text-white">{title}</h2>
      {children ? <p className="section-subheading">{children}</p> : null}
    </div>
  );
}
