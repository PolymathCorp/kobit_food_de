import Link from "next/link"
import Image from "next/image"
import { Star, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RestaurantsList() {
  // Sample restaurant data - in a real app, this would come from an API
  const restaurants = [
    // {
    // id: 1,
    //   name: "Winnyz",
    //   slug: "pizza-palace",
    //   image: "/Winnyz.png?height=200&width=400",
    //   rating: 4.8,
    //   reviewCount: 243,
    //   cuisineType: "",
    //   deliveryTime: "20-35 min",
    //   deliveryFee: "N1500",
    //   minOrder: "N4000",
    //   featured: true,
    //   tags: ["Popular", "Free Delivery"],
    //   address: "Magbon Badagry",
    //  },
    {
      id: 2,
      name: "Iya-Oge Buka",
      slug: "Swallow-joint",
      image: "/Iya-Oge.png?height=200&width=400",
      rating: 4.7,
      reviewCount: 187,
      cuisineType: "local-food",
      deliveryTime: "15-25 min",
      deliveryFee: "N1200",
      minOrder: "N3500",
      featured: true,
      tags: ["Bestseller"],
      address: "Ijanikin Lagos",
    },
    // {
    //   id: 3,
    //   name: "ROLLY-Pasteries",
    //   slug: "pasteries",
    //   image: "/rolly.png?height=200&width=400",
    //   rating: 4.5,
    //   reviewCount: 156,
    //   cuisineType: "Pasteries",
    //   deliveryTime: "20-30 min",
    //   deliveryFee: "N1500",
    //   minOrder: "N3000",
    //   featured: false,
    //   tags: ["Healthy", "pastries-lover Options"],
    //   address: "Oko-Afo Badagry",
    // },
    {
      id: 4,
      name: "Iya Blessing",
      slug: "staple food",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.9,
      reviewCount: 312,
      cuisineType: "Exclusive",
      deliveryTime: "25-30 min",
      deliveryFee: "N1000",
      minOrder: "N2500",
      featured: true,
      tags: ["Premium"],
      address: "Ijanikin Lagos",
    },
    // {
    //   id: 5,
    //   name: "Beach Town",
    //   slug: "Beach-town",
    //   image: "/beachtown.png?height=200&width=400",
    //   rating: 4.6,
    //   reviewCount: 178,
    //   cuisineType: "minimart",
    //   deliveryTime: "15-30 min",
    //   deliveryFee: "N800",
    //   minOrder: "N2500",
    //   featured: false,
    //   tags: ["groceries"],
    //   address: "Agbara, Ogun.",
    // },
    {
      id: 6,
      name: "Dele Foods",
      slug: "sweet-treats and fries",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.7,
      reviewCount: 203,
      cuisineType: "Stir-fry",
      deliveryTime: "20-35 min",
      deliveryFee: "N800",
      minOrder: "N3000",
      featured: false,
      tags: ["Stir-fry"],
      address: "Ijanikin Lagos",
    },
    // {
    //   id: 7,
    //   name: "Noodle House",
    //   slug: "noodle-house",
    //   image: "/Noodle-house.png?height=200&width=400",
    //   rating: 4.6,
    //   reviewCount: 167,
    //   cuisineType: "Exclusive",
    //   deliveryTime: "20-30 min",
    //   deliveryFee: "N1000",
    //   minOrder: "N2000",
    //   featured: false,
    //   tags: ["Noodles"],
    //   address: "Ijanikin Lagos",
    // },
  ]

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Popular Restaurants</h2>
        <Button asChild variant="ghost">
          <Link href="/restaurants">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden">
            <Link href={`/restaurants/${restaurant.slug}`}>
              <div className="relative h-48">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
                {restaurant.tags.length > 0 && (
                  <div className="absolute top-2 left-2">
                    {restaurant.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="mr-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisineType}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div>
                    <span>Min: {restaurant.minOrder}</span>
                  </div>
                  <div>
                    <span>{restaurant.deliveryFee}</span>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
