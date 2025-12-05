"use client"

import { Header } from "@components/layout/Header"
import { Footer } from "@components/layout/Footer"
import { ProductGrid } from "@components/custom/ProductCard"
import { Button } from "@components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function FavoritesPage() {
  // بيانات تجريبية للمنتجات المفضلة - في الإنتاج ستأتي من API أو state management
  const favoriteProducts = [
    {
    id: "4",
    name: "عسل عضوي",
    description: `
        عسل طبيعي 100% من خلايا نحل برية, غني بالفيتامينات والمعادن, مثالي للتحلية الصحية والعناية بالبشرة.
    `,
    price: 32.00,
    image: "https://images.unsplash.com/photo-1530565337452-355c4deada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY29zbWV0aWNzJTIwaGVyYnN8ZW58MXx8fHwxNzYyNjg5NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "المواد الغذائية",
    isOrganic: true,
  },
  {
    id: "5",
    name: "كريم جسم طبيعي",
    description:`
    كريم جسم غني بالمكونات الطبيعية والعضوية, يرطب البشرة بعمق ويتركها ناعمة ومغذية طوال اليوم.
    `,
    price: 28.50,
    image: "https://images.unsplash.com/photo-1694703233878-ec0a22f8c70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcGxhbnR8ZW58MXx8fHwxNzYyNzk3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "العناية الشخصية",
    isOrganic: true,
    discount: 10,
  },
  {
    id: "6",
    name: "كينوا عضوية",
    description: `
      كينوا عضوية عالية الجودة, مصدر ممتاز للبروتين والألياف, مثالية للسلطات والأطباق الصحية.
    `,
    price: 15.99,
    image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "المكملات الغذائية",
    isOrganic: true,
  },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="mb-8 text-center" dir="rtl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Heart className="h-8 w-8 text-primary fill-current" />
              <h1 className="text-4xl font-bold text-primary">المفضلة</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              المنتجات التي قمت بإضافتها إلى قائمة المفضلة
            </p>
          </div>

          {/* Products Grid or Empty State */}
          {favoriteProducts.length > 0 ? (
            <>
              {/* Products Count */}
              <div className="mb-6 flex items-center justify-between" dir="rtl">
                <p className="text-muted-foreground">
                  لديك <span className="text-foreground"> {favoriteProducts.length} </span> منتج في المفضلة
                </p>
                <Button variant="outline" asChild>
                  <Link href="/products">
                    <ShoppingBag className="h-4 w-4 ml-2" />
                    تصفح المزيد من المنتجات
                  </Link>
                </Button>
              </div>

              {/* Products Grid */}
              <ProductGrid products={favoriteProducts} />
            </>
          ) : (
            <EmptyFavoritesState />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

function EmptyFavoritesState() {
  return (
    <div className="text-center py-16" dir="rtl">
      <div className="flex justify-center mb-6">
        <div className="p-6 bg-accent rounded-full">
          <Heart className="h-16 w-16 text-muted-foreground" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-3">
        قائمة المفضلة فارغة
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        لم تقم بإضافة أي منتج إلى المفضلة بعد. تصفح منتجاتنا واضف ما يعجبك!
      </p>
      <Button asChild size="lg">
        <Link href="/products">
          <ShoppingBag className="h-5 w-5 ml-2" />
          تصفح المنتجات
        </Link>
      </Button>
    </div>
  )
}
