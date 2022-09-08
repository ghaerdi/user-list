import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  loading: boolean;
}

export default function LoadingPage({ children, loading }: Props) {
  return loading ? <span>Loading...</span> : <>{children}</>;
}
