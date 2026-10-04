import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { ProductFamily } from "@/components/site/ProductFamily";
import { getProductsByFamily, PRODUCT_FAMILIES } from "@/lib/products";

type FamilyPageProps = { params: Promise<{ family: string }> };

const PRODUCT_FAMILY_SLUGS = ["upvc", "system-aluminium"] as const;
type ProductFamilySlug = (typeof PRODUCT_FAMILY_SLUGS)[number];

function isProductFamilySlug(family: string): family is ProductFamilySlug {
  return PRODUCT_FAMILY_SLUGS.some((slug) => slug === family);
}

export function generateStaticParams() {
  return PRODUCT_FAMILY_SLUGS.map((family) => ({ family }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: FamilyPageProps): Promise<Metadata> {
  const { family } = await params;
  if (!isProductFamilySlug(family)) {
    return { title: "Product family not found | Veer Windows" };
  }
  const config = PRODUCT_FAMILIES[family];
  return { title: `${config.title} | Veer Windows`, description: config.description };
}

export default async function FamilyPage({ params }: FamilyPageProps) {
  const { family } = await params;
  if (!isProductFamilySlug(family)) notFound();
  const config = PRODUCT_FAMILIES[family];

  return (
    <div className="bg-background">
      <Header />
      <PageHero eyebrow={config.eyebrow} title={config.title} description={config.description} />
      <ProductFamily
        title={config.title}
        intro={config.intro}
        products={getProductsByFamily(config.slug)}
      />
      <Footer />
    </div>
  );
}
