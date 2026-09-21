import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://artisticroofingllc.com';
const DEFAULT_IMAGE = `${BASE_URL}/img/homepage/Home%20Hero.png`;
const SITE_NAME = 'Artistic Roofing Systems';

export default function SEO({ title, description, canonical, image, schema }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `Roofing Company Sierra Vista, AZ | ${SITE_NAME}`;
  const img = image || DEFAULT_IMAGE;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Per-page JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
