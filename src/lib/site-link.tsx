import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/** In-app path, optional hash: `/`, `/products`, `/products#desktop`, `/t3-family`. */
export function SiteLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const [path, hash] = href.split("#");
  const to = path === "/t3-family" ? "/t3-family" : path === "/products" ? "/products" : "/";
  return (
    <Link to={to} hash={hash || undefined} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
