import { Suspense } from "react";
import BuildShopPackages from "./build-shop-packages";
import BuildShopPackagesSkeleton from "./loading";

async function getPackagesData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      name: "Pro Bono",
      description: "Perfect for businesses looking to get started",
      badge: "Free",
      features: [
        { text: "Zero cost for businesses, fully free service" },
        { text: "Handled by aspiring talents still in training" },
        { text: "Minimal management; client oversees project simplicity" },
        { text: "Rapid delivery in 1-2 days, micro-tasks only" },
      ],
      buttonText: "Request Pro Bono package",
    },
    {
      name: "Talent Selection",
      description: "For businesses seeking experienced professionals",
      popular: true,
      features: [
        {
          text: "Affordable rates with flexible pricing per service",
          highlight: true,
        },
        { text: "Experienced professionals compete or are pre-selected" },
        { text: "Client-driven communication and project oversight" },
        { text: "Custom timelines based on talent and task scope" },
      ],
      buttonText: "Request Talent Selection package",
    },
    {
      name: "Managed Service",
      description: "Full-service solution with premium support",
      badge: "Premium",
      features: [
        { text: "Premium service with additional project management fees" },
        {
          text: "Expert professionals selected and managed by Cerebro",
          highlight: true,
        },
        { text: "Full-service support for seamless project execution" },
        { text: "Tailored timelines with efficient delivery guarantees" },
      ],
      buttonText: "Request Managed Service package",
    },
  ];
}

export default async function BuildShopPage() {
  const packagesData = await getPackagesData();

  return (
    <Suspense fallback={<BuildShopPackagesSkeleton />}>
      <BuildShopPackages packages={packagesData} />
    </Suspense>
  );
}
