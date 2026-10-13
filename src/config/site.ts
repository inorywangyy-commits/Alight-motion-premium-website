export const siteConfig = {
  siteUrl: "https://noriwangyyamprem.netlify.app",
  siteName: "Alight Motion Premium Creator",
  title: "Alight Motion Premium Creator",
  description:
    "Layanan gratis unofficial oleh Noriwangyy. Aktivasi Alight Motion Premium dengan panduan langkah demi langkah untuk pemula.",
  keywords:
    "alight motion premium, alight motion creator, aktivasi alight motion, magic link, noriwangyy, gratis, unofficial",
  author: "Noriwangyy",
  ogImage: "/images/og-image.jpg",
  logo: "/images/logo.png",
  thumbnail: "/images/thumbnail.png",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.siteUrl}${path}`;
}
