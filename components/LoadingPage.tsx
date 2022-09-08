import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  loading: boolean;
}

export default function LoadingPage({ children, loading }: Props) {
  const [ render, setRender ] = useState(false);

  useEffect(() => {
    if (!loading) setTimeout(() => setRender(true), 50);
  }, [loading]);

  return !render ? <span>Loading...</span> : <>{children}</>;
}
