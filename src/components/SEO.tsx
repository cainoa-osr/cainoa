import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  path?: string
  type?: string
  image?: string
}

const SITE_NAME = "Cainoa"
const SITE_URL = "https://cainoa.com"
const DEFAULT_IMAGE = "/favicon.png"

export default function SEO({ title, description, path = "", type = "website", image = DEFAULT_IMAGE }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
