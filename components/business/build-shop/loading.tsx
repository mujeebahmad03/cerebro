import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function BuildShopPackagesSkeleton() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-gray-50/50 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Skeleton className="h-12 w-[300px] mx-auto" />
            <Skeleton className="h-6 w-[250px] mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[...Array(3)].map((_, idx) => (
            <Card key={idx} className="flex flex-col h-full">
              <CardHeader className="space-y-4 pb-6">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-5">
                  {[...Array(4)].map((_, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Skeleton className="h-6 w-6 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Skeleton className="h-12 w-full rounded-xl" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

