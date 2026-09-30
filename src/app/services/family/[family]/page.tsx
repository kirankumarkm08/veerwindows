import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { ProductFamily } from "@/components/site/ProductFamily";
import { getProductsByFamily, PRODUCT_FAMILIES } from "@/lib/products";

type FamilyPageProps = { params: Promise<{ family: string }> };

export function generateStaticParams() {
  return [{ family: "upvc" }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: FamilyPageProps): Promise<Metadata> {
  const { family } = await params;
  if (family !== "upvc") return { title: "Product family not found | Veer Windows" };
  const config = PRODUCT_FAMILIES[family as keyof typeof PRODUCT_FAMILIES];
  if (!config) return { title: "Product family not found | Veer Windows" };
  return { title: `${config.title} | Veer Windows`, description: config.description };
}

export default async function FamilyPage({ params }: FamilyPageProps) {
  const { family } = await params;
  if (family !== "upvc") notFound();
  const config = PRODUCT_FAMILIES[family as keyof typeof PRODUCT_FAMILIES];
  if (!config) notFound();

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
