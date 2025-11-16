"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { ProductCard } from "@components/custom/ProductCard";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { Slider } from "@components/ui/slider";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: "1",
    name: "زيت زيتون عضوي",
    nameAr: "زيت الزيتون العضوي",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "طعام",
    isOrganic: true,
  },
  {
    id: "2",
    name: "سيروم وجه طبيعي",
    nameAr: "سيروم الوجه الطبيعي",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI3NjE4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "العناية بالبشرة",
    discount: 15,
    isOrganic: true,
  },
  {
    id: "3",
    name: "شاي أعشاب صحي",
    nameAr: "شاي الأعشاب الصحي",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1757802412806-433e4e60eec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwd2VsbG5lc3MlMjB0ZWF8ZW58MXx8fHwxNzYyNzk3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "العافية",
    isOrganic: true,
  },
  {
    id: "4",
    name: "عسل عضوي",
    nameAr: "عسل عضوي",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1530565337452-355c4deada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY29zbWV0aWNzJTIwaGVyYnN8ZW58MXx8fHwxNzYyNjg5NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "طعام",
    isOrganic: true,
  },
  {
    id: "5",
    name: "كريم جسم طبيعي",
    nameAr: "كريم الجسم الطبيعي",
    price: 28.50,
    image: "https://images.unsplash.com/photo-1694703233878-ec0a22f8c70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcGxhbnR8ZW58MXx8fHwxNzYyNzk3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "العناية بالبشرة",
    isOrganic: true,
    discount: 10,
  },
  {
    id: "6",
    name: "كينوا عضوية",
    nameAr: "كينوا عضوية",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "طعام",
    isOrganic: true,
  },
];

const categories = ["الكل", "طعام", "العناية بالبشرة", "العافية"];

export function ProductListingPage() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* مسار التنقل */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-primary">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">المتجر</span>
            </div>
          </div>
        </div>

        {/* عنوان الصفحة */}
        <div className="bg-accent py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-primary mb-2">المنتجات العضوية</h1>
            <p className="text-muted-foreground">Organic Products</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* الشريط الجانبي للفلاتر */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
              <div className="bg-white rounded-2xl border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3>الفلاتر</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    إغلاق
                  </Button>
                </div>

                {/* الفئات */}
                <div className="mb-6">
                  <h4 className="mb-4 text-sm">الفئات</h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label
                          htmlFor={category}
                          className="text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* نطاق السعر */}
                <div className="mb-6">
                  <h4 className="mb-4 text-sm">نطاق السعر</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={1}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">${priceRange[0]}</span>
                    <span className="text-muted-foreground">${priceRange[1]}</span>
                  </div>
                </div>

                {/* فلتر العضوية */}
                <div className="mb-6">
                  <h4 className="mb-4 text-sm">الشهادات</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="organic" defaultChecked />
                      <Label htmlFor="organic" className="text-sm cursor-pointer">
                        معتمد عضوي
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="vegan" />
                      <Label htmlFor="vegan" className="text-sm cursor-pointer">
                        نباتي
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cruelty-free" />
                      <Label htmlFor="cruelty-free" className="text-sm cursor-pointer">
                        خالي من القسوة
                      </Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  تطبيق الفلاتر
                </Button>
              </div>
            </aside>

            {/* شبكة المنتجات */}
            <div className="flex-1">
              {/* شريط الأدوات */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  عرض {products.length} منتج
                </p>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4 ml-2" />
                    الفلاتر
                  </Button>
                  
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="ترتيب حسب" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">المميز</SelectItem>
                      <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                      <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                      <SelectItem value="newest">الأحدث</SelectItem>
                      <SelectItem value="popular">الأكثر شيوعاً</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* شبكة المنتجات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* الترقيم */}
              <div className="flex justify-center gap-2 mt-12">
                <Button variant="outline" disabled>
                  <ChevronRight className="h-4 w-4 ml-2" />
                  السابق
                </Button>
                <Button className="bg-primary hover:bg-primary/90">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  التالي
                  <ChevronLeft className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}