"use client"

import Link from "next/link";
import { Award, CheckCircle, ChevronDown, Leaf, Target, Eye, Sprout, Truck, RefreshCw, Shield, Package, ArrowLeft } from "lucide-react";
import { Button } from "@components/ui/button";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { Badge } from "@components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Separator } from "@components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Progress } from "@components/ui/progress";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5" dir="rtl">
      <Header />

      {/* Hero Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 -z-10" />
        <MissionVisionSection />
      </motion.section>

      {/* Values with Enhanced Cards */}
      <ValuesSection />
      
      {/* Certifications with Interactive Cards */}
      <CertificationSection/>

      {/* Enhanced FAQ with Shadcn Accordion */}
      <FAQSection />

      {/* Stats Section */}
      <StatsSection />

      <Footer />
    </div>
  );
}

function ValueCard({ title, description, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
        <CardHeader >
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function MissionVisionSection(){
  return(
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* title */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-semibold">
                <Leaf className="h-3 w-3 ml-2" />
                منذ 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                رؤيتنا ورسالتنا
              </h1>
            </div>
            
            {/* Cards */}
            <div className="space-y-6">
              <Card className=" bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    رؤيتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    أن نكون الوجهة الأولى في المنطقة للمنتجات العضوية والطبيعية، وأن نساهم في بناء مجتمع أكثر صحة واستدامة.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-primary" />
                    رسالتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    توفير منتجات عضوية وطبيعية عالية الجودة مع تعزيز نمط الحياة الصحي من خلال بدائل آمنة وشفافية كاملة في مصادرنا.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
تسوق الآن                    
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8">
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  {/* <Leaf className="h-16 w-16 text-primary" /> */}
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="/theLogo.svg"
                        alt="سِدر - منتجات عضوية"
                        width={80}
                        height={40}
                        className="w-40 h-auto object-cover"
                        priority
                      />
                    </div>
                </Link>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">طبيعة صافية</h3>
                <p className="text-muted-foreground">
                  منتجات طبيعية 100% تحافظ على صحتك وصحة البيئة
                </p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-background border rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">٩٨٪</div>
                <div className="text-sm text-muted-foreground">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection(){
  const values = [
    {
      title: "الجودة العالية",
      description: "نختار أفضل المنتجات العضوية بعناية فائقة ونتابع معايير الجودة العالمية.",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "الشفافية الكاملة",
      description: "نؤمن بوضوح المصدر والمكونات مع توفير معلومات مفصلة عن كل منتج.",
      icon: Eye,
      color: "text-blue-500"
    },
    {
      title: "الاستدامة البيئية",
      description: "ندعم الممارسات الزراعية والإنتاجية الصديقة للبيئة والمجتمع.",
      icon: Sprout,
      color: "text-green-500"
    },
    {
      title: "التسليم الموثوق",
      description: "نضمن وصول منتجاتك طازجة وفي الوقت المحدد مع تتبع مباشر.",
      icon: Truck,
      color: "text-orange-500"
    },
    {
      title: "تجديد المنتجات",
      description: "نواصل البحث عن منتجات جديدة تلبي احتياجات عملائنا المتغيرة.",
      icon: RefreshCw,
      color: "text-purple-500"
    },
    {
      title: "الضمان والصحة",
      description: "جميع منتجاتنا مضمونة الجودة وآمنة للاستهلاك مع شهادات صحية.",
      icon: Shield,
      color: "text-red-500"
    }
  ];

  return(
    <section className="py-20 bg-gradient-to-b from-accent/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1">قيمنا الأساسية</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ما يميز سِدر
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نلتزم بمجموعة من القيم الأساسية التي توجه كل قرار نتخذه وكل منتج نقدمه
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      category: "المنتجات",
      questions: [
        {
          question: "ما هي المنتجات العضوية؟",
          answer: "المنتجات العضوية هي منتجات زراعية تم إنتاجها دون استخدام مبيدات حشرية صناعية، أو أسمدة كيماوية، أو كائنات معدلة وراثياً. هي منتجات طبيعية 100% تحافظ على صحتك وصحة البيئة."
        },
        {
          question: "هل جميع منتجات سِدر معتمدة عضوياً؟",
          answer: "نعم، نحن نلتزم بتوفير منتجات حاصلة على شهادات عضوية معتمدة من جهات رقابية محلية وعالمية. يمكنك الاطلاع على صفحة الشهادات لمزيد من التفاصيل."
        }
      ]
    },
    {
      category: "التسليم",
      questions: [
        {
          question: "كم تستغرق عملية التوصيل؟",
          answer: "تستغرق عملية التوصيل داخل المدن الرئيسية من 1-3 أيام عمل، وفي باقي المناطق من 3-5 أيام عمل. نوفر أيضاً خدمة التوصيل السريع في نفس اليوم لبعض المناطق."
        },
        {
          question: "كيف يمكنني تتبع طلبي؟",
          answer: "بعد إتمام الطلب، ستصلك رسالة نصية وبريد إلكتروني يحتوي على رابط تتبع الشحنة. يمكنك أيضاً متابعة حالة الطلب من خلال حسابك في الموقع."
        }
      ]
    },
    {
      category: "الدفع والاسترجاع",
      questions: [
        {
          question: "ما هي سياسة الاسترجاع والاستبدال؟",
          answer: "يمكنك استرجاع أو استبدال المنتجات خلال 7 أيام من تاريخ الاستلام، بشرط أن تكون بحالتها الأصلية ولم يتم فتحها. المنتجات الطازجة والمبردة قد تخضع لسياسات مختلفة لضمان سلامتها."
        },
        {
          question: "هل توفرون خدمة الدفع عند الاستلام؟",
          answer: "نعم، نوفر خدمة الدفع عند الاستلام بالإضافة إلى خيارات الدفع الإلكتروني المتعددة مثل البطاقات الائتمانية، مدى، وApple Pay."
        }
      ]
    }
  ];

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">الدعم والمساعدة</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">الأسئلة الشائعة</h2>
          <p className="text-muted-foreground">
            إجابات على أكثر الأسئلة تكراراً حول منتجاتنا وخدماتنا
          </p>
        </div>

        <Tabs defaultValue="المنتجات" dir="rtl" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {faqs.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {faqs.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <Card>
                      <AccordionTrigger className="px-4 py-1 no-underline hover:no-underline">
                        <CardTitle className="text-lg font-semibold">
                          {faq.question}
                        </CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function CertificationSection() {
  const certifications = [
    {
      title: "عضوي معتمد - السعودية",
      description: "شهادة تثبت أن المنتجات مطابقة لمعايير الزراعة العضوية السعودية.",
      issuer: "وزارة البيئة والمياه والزراعة",
      level: "مستوى ذهبي",
      icon: Award
    },
    {
      title: "USDA Organic",
      description: "شهادة العضوية الأمريكية تضمن خلو المنتج من المبيدات والأسمدة الكيماوية.",
      issuer: "وزارة الزراعة الأمريكية",
      level: "معتمد عالمياً",
      icon: Award
    },
    {
      title: "EU Organic",
      description: "شعار الاتحاد الأوروبي للمنتجات العضوية، يضمن الامتثال للمعايير الأوروبية.",
      issuer: "الاتحاد الأوروبي",
      level: "معيار أوروبي",
      icon: Award
    },
    {
      title: "ISO 22000",
      description: "نظام إدارة سلامة الغذاء في جميع مراحل السلسلة الغذائية.",
      issuer: "المنظمة الدولية للمعايير",
      level: "جودة عالمية",
      icon: Shield
    },
    {
      title: "Non-GMO Project",
      description: "شهادة تثبت أن المنتج خالٍ من الكائنات المعدلة وراثياً.",
      issuer: "Non-GMO Project",
      level: "خالٍ من المعدل",
      icon: Sprout
    },
    {
      title: "Fair Trade",
      description: "شهادة تضمن حقوق المزارعين والعمال وظروف عمل عادلة.",
      issuer: "Fairtrade International",
      level: "تجارة عادلة",
      icon: Package
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-white" id="certification">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-primary/20">
            <Shield className="h-3 w-3 ml-2" />
            الاعتمادات
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            شهادات الجودة والاعتماد
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفتخر بحصولنا على اعتمادات محلية وعالمية تضمن لكم أعلى معايير الجودة والسلامة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="mt-2">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
                <CardFooter className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>شهادة معتمدة</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);
  const [deliveryRate, setDeliveryRate] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClients(10000);
      setProducts(500);
      setDeliveryRate(98);
      setSatisfaction(96);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "عميل راضٍ", value: clients, suffix: "+", description: "من العملاء" },
    { label: "منتج عضوي", value: products, suffix: "+", description: "منتجات معتمدة" },
    { label: "توصيل ناجح", value: deliveryRate, suffix: "%", description: "نسبة التسليم" },
    { label: "رضا العملاء", value: satisfaction, suffix: "%", description: "تقييم العملاء" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            أرقام تعبر عن تميزنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            إنجازاتنا تتحدث عن التزامنا بالجودة والخدمة المتميزة
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="border-2 hover:border-primary/20 transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}