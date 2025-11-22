"use client";

import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { ProductCard } from "@components/custom/ProductCard";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { ArrowLeft, Leaf, Shield, Truck, Heart } from "lucide-react";
import { FaBowlFood } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { TbRibbonHealth } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1">
        {/* قسم البطل */}
        <HeroSection/>

        {/* قسم الميزات */}
        <FeaturesSection />

        {/* قسم الفئات */}
        <CategoriesSection/>

        {/* المنتجات المميزة */}
        <ProductSections/>

        {/* قسم الاشتراك */}
        <SubscribeSection/>

      </main>

      <Footer />
    </div>
  );
}

function HeroSection(){
  return(
    <section className="relative bg-gradient-to-br from-accent to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary text-primary-foreground">
وصل حديثًا
            </Badge>
            <h1 className="text-5xl font-bold lg:text-6xl mb-4 text-primary">
جمالك نبتة,
              <br />
تحتاج الى مواد طبيعة للنمو.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
اكتشف مجموعتنا المختارة من المنتجات العضوية والطبيعية لرحلتك نحو الصحة والجمال والعافية.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
تسوق الآن                    
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Button>
              <Button size="lg" variant="outline">
                اعرف المزيد
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1658112905843-4769d0aca37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZm9vZCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2Mjc3Njc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="منتجات عضوية"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection(){
  const features = [
    {
      icon: Leaf,
      title: "عضوي 100%",
      // titleAr: "عضوي 100%",
      description: "منتجات عضوية معتمدة من مزارع موثوقة"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      // titleAr: "جودة مضمونة",
      description: "فحوصات صارمة ومراقبة جودة لكل منتج"
    },
{
      icon: Truck,
      title: "توصيل سريع",
      // titleAr: "توصيل سريع",
      description: "شحن مجاني للطلبات فوق 50$"
    },
    {
      icon: Heart,
      title: "رعاية العملاء",
      // titleAr: "رعاية العملاء",
      description: "فريق دعم مخصص جاهز للمساعدة"
    },
  ];
  return(
    <section className="py-16 border-y bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold">{feature.title}</h3>
              {/* <p className="text-sm text-muted-foreground mb-1">{feature.titleAr}</p> */}
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection(){
  const categories = [
    { 
      name: "المواد الغذائية",
      description: `
منتجات طبيعية 100% من مزارع معتمدة, خالية من المبيدات والمواد الكيميائية, تدعم الزراعة المستدامة وتحافظ على البيئة.
      `, 
      icon: <FaBowlFood />, 
      image: "/assets/imgs/family.png",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    { 
      name: "العناية الشخصية", 
      description: `
        تمتعي بمنتجات طبيعية لبشرتك وشعرك وجسمك, خالية من المواد الضارة, تعزز جمالك الطبيعي وصحتك, معززة بالمكونات العضوية.
      `, 
      image: "/assets/imgs/women.png",
      icon: <TbRibbonHealth/>, 
      color: "text-myPink",
      bgColor: "bg-myPink/10" 
    },
    { 
      name: "الأمومة والطفولة", 
      description: `
        اكتشفي منتجات آمنة للامهات والاطفال, طبيعية وعضوية, تعزز صحة ونمو طفلك, معززة بالحب والرعاية.
      `,
      image: "/assets/imgs/baby.png",
      icon: <MdChildFriendly/>, 
      color: "text-secondary",
      bgColor: "bg-secondary/10" 
    },
    { 
      name: "المكملات الغذائية", 
      description: `
        عززي صحتك وعافيتك بمكملات غذائية طبيعية, عضوية, تدعم نمط حياة صحي, معززة بالطاقة والحيوية.
      `,
      image: "/assets/imgs/runner.png",
      icon: <IoIosFitness />, 
      color: "text-mySky",
      bgColor: "bg-mySky/10"
    },
  ];

  return(
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-primary font-bold">تسوق حسب الفئة</h2>
          <p className="text-muted-foreground">Shop by Category</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              href="google.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className={`${category.bgColor} rounded-2xl overflow-hidden transition-all hover:shadow-lg grid sm:grid-cols-2 grid-cols-1 items-center justify-center`}
            >
              <div className={`text-4xl text-right mb-4 ${category.color} p-8`}>
                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h3 className="mb-1 font-bold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className=" flex justify-center items-end h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={150}
                  height={150}
                  className="min-w-64"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSections(){
  const featuredProducts = [
    {
      id: "1",
      name: "زيت زيتون عضوي",
      description: `
زيت زيتون بكر ممتاز معصور على البارد, غني بمضادات الأكسدة والدهون الصحية, مثالي للطهي والتتبيل.
      `,
      price: 24.99,
      image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "طعام عضوي",
      isOrganic: true,
      isFeatured: true,
    },
    {
      id: "2",
      name: "سيروم وجه طبيعي",
      description:`
سيروم وجه غني بالمكونات الطبيعية والعضوية, يرطب ويغذي البشرة بعمق, يعزز إشراقتها ويقلل من علامات الشيخوخة.
      `,
      price: 45.00,
      image: "https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI3NjE4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "العناية بالبشرة",
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
      category: "طعام عضوي",
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
      category: "طعام عضوي",
      isOrganic: true,
      isFeatured: true,
    },
  ];

  return(
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="mb-2 text-primary font-bold">المنتجات المميزة</h2>
            <p className="text-muted-foreground">Featured Products</p>
          </div>
          <Button variant="outline">
            <Link href="/products">
            عرض الكل
            </Link>
            <ArrowLeft className="h-4 w-4 mr-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SubscribeSection(){
  return(
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="mb-4 font-bold">انضم إلى مجتمعنا العضوي</h2>
          <p className="mb-8 opacity-90">
            اشترك في نشرتنا الإخبارية للحصول على عروض حصرية ونصائح للعافية وإطلاق منتجات جديدة
          </p>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-6 py-3 rounded-xl text-foreground bg-accent"
            />
            <Button size="lg" className="cursor-pointer bg-secondary hover:bg-secondary/90">
              اشتراك
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}