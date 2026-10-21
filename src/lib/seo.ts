export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "商米科技",
  alternateName: "SUNMI",
  url: "/",
  telephone: "+86-400-6666-509",
};
