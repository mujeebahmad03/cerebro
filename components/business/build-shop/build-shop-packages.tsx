"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  text: string;
  highlight?: boolean;
}

interface Package {
  name: string;
  description: string;
  features: Feature[];
  badge?: string;
  buttonText: string;
  popular?: boolean;
}

interface BuildShopPackagesProps {
  packages: Package[];
}

const MotionCard = motion(Card);

export default function BuildShopPackages({
  packages,
}: BuildShopPackagesProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-gray-50/50 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Build Shop <span className="text-primary">Packages</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-2xl/relaxed">
              Choose a package and embark on a pathway of Success
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, idx) => (
            <MotionCard
              key={pkg.name}
              className={`flex flex-col h-full relative ${
                pkg.popular ? "border-primary shadow-lg" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 -right-3">
                  <Badge className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-md">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="space-y-4 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">
                      {pkg.name}
                    </CardTitle>
                    {pkg.badge && (
                      <Badge
                        variant={
                          pkg.badge === "Premium" ? "default" : "secondary"
                        }
                        className="px-3 py-1"
                      >
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-5">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Check
                          className={`h-5 w-5 ${
                            feature.highlight
                              ? "text-primary"
                              : "text-primary/60"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          feature.highlight
                            ? "text-primary font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button
                  className="w-full text-base h-12 rounded-xl transition-all duration-200"
                  variant={pkg.badge === "Premium" ? "default" : "outline"}
                  onClick={() => console.log(`${pkg.name} requested`)}
                >
                  {pkg.buttonText}
                  {pkg.badge === "Premium" && (
                    <Sparkles className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
