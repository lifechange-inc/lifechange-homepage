import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId || gaId === "確認待ち") {
    return null;
  }

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="ga4-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
