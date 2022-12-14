import Head from "next/head";

interface Props {
  children: JSX.Element;
}

export default function HeadComponent({ children }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {children}
    </>
  );
}
