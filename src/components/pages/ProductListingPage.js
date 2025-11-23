"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PageHeader } from "@components/layout/PageHeader";
import { FilterSidebar } from "@components/custom/Filter";
import { ProductGrid } from "@components/custom/ProductCard";
import { Toolbar } from "@components/custom/Toolbar";

const products = [
  {
    id: "1",
    name: "زيت زيتون عضوي",
    description: `
زيت زيتون بكر ممتاز معصور على البارد, غني بمضادات الأكسدة والدهون الصحية, مثالي للطهي والتتبيل.
    `,
    price: 24.99,
    image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "مواد غذائية",
    isOrganic: true,
  },
  {
    id: "2",
    name: "سيروم وجه طبيعي",
    description:`
سيروم وجه غني بالمكونات الطبيعية والعضوية, يرطب ويغذي البشرة بعمق, يعزز إشراقتها ويقلل من علامات الشيخوخة.
    `,
    price: 45.00,
    image: "https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI3NjE4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "العناية الشخصية",
    discount: 15,
    isOrganic: true,
  },
  {
    id: "3",
    name: "شاي أعشاب صحي",
    description: `
شاي أعشاب عضوي مهدئ, مزيج من الأعشاب الطبيعية التي تعزز الاسترخاء والهضم, خالٍ من الكافيين.
    `,
    price: 18.50,
    image: "https://images.unsplash.com/photo-1757802412806-433e4e60eec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwd2VsbG5lc3MlMjB0ZWF8ZW58MXx8fHwxNzYyNzk3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "المواد الغذائية",
    isOrganic: true,
  },
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
];


export function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Header */}
        <Breadcrumb className="container mx-auto px-4 py-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>المتجر</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <PageHeader 
          title="المنتجات العضوية"
          subtitle="اكتشف مجموعتنا المختارة من المنتجات العضوية والصحية"
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <FilterSidebar 
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              className="hidden lg:block"
            />

            <div className="flex-1">
              <Toolbar 
                productsCount={products.length}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              />
              <FilterSidebar 
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                className=" lg:hidden block mb-4"
              />

              <ProductGrid products={products} />

              <Pagination dir="rtl" lang="ar" className="justify-center mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}