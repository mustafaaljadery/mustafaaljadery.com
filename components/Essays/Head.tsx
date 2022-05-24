import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../../types/layout';

export const WEBSITE_HOST_URL = 'https://www.mustafaaljadery.com';

const Head = ({
  customMeta,
}: {
  customMeta?: MetaProps;
}): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Mustafa Aljadery - Website',
    abstract: 'Personal Website of Mustafa Aljadery.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.abstract} name="abstract" />
      <meta
        property="og:url"
        content={`${WEBSITE_HOST_URL}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`${WEBSITE_HOST_URL}${router.asPath}`}
      />
      <meta property="og:type" content={meta.type} />
      <meta
        property="og:site_name"
        content="Mustafa Aljadery - Website"
      />
      <meta property="og:description" content={meta.abstract} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mustafaaljadery" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.abstract} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
