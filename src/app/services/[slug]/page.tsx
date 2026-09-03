import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { ProductDetail } from "@/components/site/ProductDetail";
import { getProduct, PRODUCTS } from "@/lib/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found | Veer Windows" };
  return {
    title: `${product.title} | Veer Windows`,
    description: `${product.description} Explore Veer Windows ${product.title.toLowerCase()} for refined, made-to-measure spaces.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="bg-background">
      <Header />
      <PageHero eyebrow={product.eyebrow} title={product.title} description={product.description} />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
}
