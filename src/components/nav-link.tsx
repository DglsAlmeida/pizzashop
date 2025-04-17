import { Link, LinkProps, useLocation } from "react-router";

export type NavLinkProps = LinkProps;

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();

  const activePath = pathname === props.to;

  return (
    <Link
      data-current={activePath}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  );
};
