import type { LinkProps } from "next/link";
import type { ReactNode } from "react";
import Link from "next/link";

interface Props extends LinkProps {
  children: ReactNode;
}

export default function A(props: Props) {
  return (
    <p className="text-sm font-light text-gray-500">
      <Link {...props}>
        { props.children }
      </Link>
    </p>
  );
}
