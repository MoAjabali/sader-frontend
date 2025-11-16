import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-accent border-t mt-auto" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* معلومات العلامة التجارية */}
          <BrandDetailsSection/>

          {/* روابط سريعة */}
          <QuickLinksSection/>

          {/* خدمة العملاء */}
          <CustomerServicesSection/>

          {/* النشرة البريدية */}
          <ContactSection/>
        </div>

        {/* الشريط السفلي */}
        <BottomFooter/>
      </div>
    </footer>
  );
}

function BrandDetailsSection(){
  return(
    <div>
      <div className="flex items-center gap-2 mb-4">
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image 
              src="/theLogo.svg"
              alt="سِدر - منتجات عضوية"
              width={80}
              height={40}
              className="w-20 h-auto object-cover"
              priority
            />
          </div>
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mb-4" dir="rtl">
        مصدرك الموثوق للمنتجات العضوية والطبيعية. جودة يمكنك الوثوق بها، طبيعة يمكنك تذوقها.
      </p>
      <p className="text-sm text-muted-foreground">
        لنرجع الى طعام صحي لحياة أفضل وعمر أطول.
      </p>
    </div>
  );
}

function QuickLinksSection(){
  return (
    <div>
      <h4 className="mb-4 text-primary">روابط سريعة</h4>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            من نحن
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            جميع المنتجات
          </Link>
        </li>
        <li>
          <Link href="/certification" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            الشهادات العضوية
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            المدونة والنصائح
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            الأسئلة الشائعة
          </Link>
        </li>
      </ul>
    </div>
  );
}

function CustomerServicesSection(){
  return(
    <div>
      <h4 className="mb-4 text-primary">خدمة العملاء</h4>
      <ul className="space-y-2">
        <li>
          <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            معلومات الشحن
          </Link>
        </li>
        <li>
          <Link href="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            الإرجاع والاسترداد
          </Link>
        </li>
        <li>
          <Link href="/track-order" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            تتبع الطلب
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            اتصل بنا
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            سياسة الخصوصية
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ContactSection(){
  return (
    <div>
      <h4 className="mb-4 text-primary">ابق على اتصال</h4>
      <p className="text-sm text-muted-foreground mb-4" dir="rtl">
        اشترك للحصول على عروض خاصة والتحديثات
      </p>
      <div className="flex gap-2 mb-4">
        <Input 
          placeholder="بريدك الإلكتروني" 
          className="bg-white text-right"
          dir="rtl"
        />
        <Button className="bg-primary hover:bg-primary/90 shrink-0">
          اشتراك
        </Button>
      </div>
      
      {/* معلومات الاتصال */}
      <div className="space-y-2 mb-4" dir="rtl">
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
          <Phone className="h-4 w-4" />
          <span>+966 55 123 4567</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
          <Mail className="h-4 w-4" />
          <span>hello@seeder.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="text-left">شارع العضوي 123، الرياض</span>
        </div>
      </div>

      {/* روابط التواصل الاجتماعي */}
      <div className="flex gap-2 justify-center">
        <Link href="https://facebook.com/">
          <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
            <Facebook className="h-4 w-4 " />
          </Button>
        </Link>
        <Link href="https://facebook.com/">
          <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://facebook.com/">
          <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
            <Twitter className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function BottomFooter(){
  return(
    <div className="pt-8 border-t border-border text-center">
      <p className="text-sm text-muted-foreground" dir="rtl">
        منصة المنتجات العضوية والطبيعية.
        جميع الحقوق محفوظة, 
        سِدر
        {new Date().getFullYear()} 
        © 
      </p>
    </div>
  );
}