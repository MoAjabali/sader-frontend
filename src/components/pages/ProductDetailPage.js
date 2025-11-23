"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { ProductCard } from "@components/custom/ProductCard";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Shield, Leaf, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { BreadcrumbSection } from "@components/layout/BreadcrumbSection";
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol";

const relatedProducts = [
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
  }
];

export function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1658112905843-4769d0aca37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZm9vZCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2Mjc3Njc3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1694703233878-ec0a22f8c70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcGxhbnR8ZW58MXx8fHwxNzYyNzk3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-white">
        <BreadcrumbSection 
          breadcrumbLinks={[
            {title: "الرئيسية", link: "/"}, 
            {title:"المتجر", link:"/products"},
            {title: "المواد عذائية", link: "/categories/food"},
            {title: "زيت زيتون عضوي فاخر"}
          ]} 
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ProductImagesSection 
              images={productImages}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
            />
            <ProductInfoSection 
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>

          <ProductTabsSection />
          <RelatedProductsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductImagesSection({ images, selectedImage, onImageSelect }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-square bg-accent rounded-2xl overflow-hidden mb-4"
      >
        <Image
          src={images[selectedImage]}
          alt="المنتج"
          width={600}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
      
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              selectedImage === index ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Image 
              src={image} 
              alt={`عرض ${index + 1}`} 
              width={200}
              height={200}
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductInfoSection({ quantity, onQuantityChange }) {
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Badge className="bg-primary text-primary-foreground">معتمد عضوي</Badge>
        <Badge variant="outline">متوفر</Badge>
      </div>

      <h1 className="mb-2 font-bold">زيت زيتون عضوي فاخر</h1>
      {/* <h2 className="text-muted-foreground mb-4">Premium Organic Olive Oil</h2> */}

      <div className="flex items-center gap-2 mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">(124 تقييم)</span>
      </div>

      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-4xl text-primary font-bold">24.99<SaudiRiyalIcon color="#006539" size={32}/></span>
        <span className="text-lg text-muted-foreground line-through">29.99<SaudiRiyalIcon color="#717182" size={16}/></span>
        <Badge className="bg-secondary text-secondary-foreground">-17%</Badge>
      </div>

      <p className="text-muted-foreground mb-6">
        زيت زيتون عضوي فاخر معصور على البارد من أفضل الزيتون العضوي. غني بمضادات الأكسدة 
        ومثالي للطهي أو كإضافة للسلطات. 100% طبيعي، بدون إضافات أو مواد حافظة.
      </p>

      <ProductFeatures />
      <QuantitySelector quantity={quantity} onQuantityChange={onQuantityChange} />
      <ProductActions />
      <AdditionalInfo />
    </div>
  );
}

function ProductFeatures() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-accent rounded-xl">
      <div className="text-center">
        <Leaf className="h-6 w-6 text-primary mx-auto mb-2" />
        <p className="text-xs">عضوي 100%</p>
      </div>
      <div className="text-center">
        <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
        <p className="text-xs">جودة مضمونة</p>
      </div>
      <div className="text-center">
        <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
        <p className="text-xs">شحن مجاني</p>
      </div>
    </div>
  );
}

function QuantitySelector({ quantity, onQuantityChange }) {
  return (
    <div className="mb-6">
      <label className="block mb-2">الكمية</label>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-xl">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          الإجمالي: 
          {(24.99 * quantity).toFixed(2)}<SaudiRiyalIcon color="#717182" size={12}/>
        </span>
      </div>
    </div>
  );
}

function ProductActions() {
  return (
    <>
      <div className="flex gap-3 mb-6">
        <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
          <ShoppingCart className="h-5 w-5 ml-2" />
          أضف إلى السلة
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <Button size="lg" variant="outline" className="w-full">
        شراء الآن
      </Button>
    </>
  );
}

function AdditionalInfo() {
  return (
    <div className="mt-8 space-y-3 text-sm">
      <div className="flex justify-between py-3 border-b">
        <span className="text-muted-foreground">الرقم:</span>
        <span>OOO-2024-001</span>
      </div>
      <div className="flex justify-between py-3 border-b">
        <span className="text-muted-foreground">الفئة:</span>
        <span>طعام عضوي</span>
      </div>
      <div className="flex justify-between py-3 border-b">
        <span className="text-muted-foreground">الشهادات:</span>
        <span>USDA عضوي، EU عضوي</span>
      </div>
    </div>
  );
}

function ProductTabsSection() {
  return (
    <Tabs defaultValue="description" className="mb-16 text-right" dir="rtl">
      <TabsList className="w-full h-auto bg-accent">
        <TabsTrigger value="description">
          الوصف
        </TabsTrigger>
        <TabsTrigger value="ingredients" >
          المكونات
        </TabsTrigger>
        <TabsTrigger value="nutrition" >
          المعلومات الغذائية
        </TabsTrigger>
        <TabsTrigger value="reviews" >
          التقييمات (124)
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="mt-6">
        <div className="prose max-w-none">
          <p>
            زيت الزيتون العضوي الفاخر لدينا معصور على البارد من أفضل أنواع الزيتون العضوي،
            يتم حصاده في ذروة النضج لضمان أقصى نكهة وقيمة غذائية. هذا الزيت البكر الممتاز
            معتمد عضويًا ويأتي من مزارع مستدامة تعطي أولوية للصحة البيئية والممارسات الأخلاقية.
          </p>
          <p className="mt-4">
            مثالي لتتبيلات السلطات، والتتبيلات، والطهي الخفيف. النكهة الغنية والفاكهية
            مع لمسات من العشب والأعشاب تجعله إضافة متعددة الاستخدامات لأي مطبخ.
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="ingredients" className="mt-6">
        <p className="mb-4">
           زيت زيتون بكر ممتاز عضوي
            100%
           </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>بدون إضافات أو مواد حافظة</li>
          <li>خالي من الجلوتين</li>
          <li>نباتي</li>
          <li>غير معدل وراثيًا</li>
        </ul>
      </TabsContent>
      
      <TabsContent value="nutrition" className="mt-6">
        <div className="bg-accent rounded-xl p-6">
          <h3 className="mb-4">المعلومات الغذائية</h3>
          <p className="text-sm text-muted-foreground mb-4">حصة واحدة: 1 ملعقة طعام (15مل)</p>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b">
              <span>السعرات الحرارية</span>
              <span>120</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>إجمالي الدهون</span>
              <span>14غ</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>الدهون المشبعة</span>
              <span>2غ</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>الدهون الأحادية غير المشبعة</span>
              <span>10غ</span>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">JD</span>
                </div>
                <div>
                  <p>جون دو</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                جودة ممتازة لزيت الزيتون! النكهة رائعة ويمكنك حقًا تذوق الفرق. سأشتري بالتأكيد مرة أخرى.
              </p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function RelatedProductsSection() {
  return (
    <div>
      <h2 className="mb-6 text-primary">منتجات ذات صلة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}