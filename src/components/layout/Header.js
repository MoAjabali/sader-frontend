import { Search, ShoppingCart, User, Heart, Menu, X, Facebook, Twitter, Instagram, Home, CircleCheckIcon, CircleHelpIcon, CircleIcon, ChevronDown } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Badge } from "@components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SaudiRiyalIcon from "../custom/SaudiRiyalSymbol";

const isAuth = true;


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80" dir="rtl">
      {/* الشريط العلوي */}
      <TopHeader/>

      {/* الهيدر الرئيسي */}
      <MainHeader/>
    </header>
  );
}

function TopHeader(){
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm"> 
           توصيل مجاني للطلبات التي تزيد عن 
          <span className="font-bold"> 300</span><SaudiRiyalIcon color="white" size={18}/>
        </p>
        <div className="flex gap-4 text-sm">
          <button className="hover:opacity-80 cursor-pointer">English</button>
          <span>|</span>
          <button className="hover:opacity-80 cursor-pointer">العربية</button>
        </div>
      </div>
    </div>
  );
}
function MainHeader(){
  return (
    <div className="container mx-auto px-4">
        <div className="flex flex-row-reverse sm:flex-row items-center justify-between h-16 gap-4">
          <DropDownMenu/>

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

          {/* التنقل */}
          <NavBar className="hidden lg:flex font-bold items-center gap-8" linkClassName=" text-sm flex-1 font-medium hover:text-primary transition-colors"/>

          {/* شريط البحث */}
          <SearchBar className="hidden lg:flex flex-1 max-w-md relative"/>

          {/* الإجراءات */}
          <ActionsBar className="hidden sm:flex items-center gap-3"/>

        </div>
        
      </div>
  );
}

// Components
function DropDownMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };
  const closeMobileMenu = () => { setIsMobileMenuOpen(false); };

  return(
    <>
      {/* قائمة الجوال */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="lg:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button> 

      {/* قائمة الجوال المنزلقة */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg z-40 max-h-[calc(100vh-64px)] overflow-auto">
          <div className="container mx-auto px-4 py-6">
            {/* شريط البحث للجوال */}
            <SearchBar className="relative mb-6" />

            {/* روابط التنقل للجوال - هنا نمرر isMobile=true لتجنب استخدام NavigationMenu الأفقي */}
            <NavBar
              className="space-y-4 mb-6 flex flex-col flex-1 w-full"
              linkClassName="block py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
              onClick={closeMobileMenu}
              isMobile={true}
            />

            {/* إجراءات المستخدم للجوال */}
            <ActionsBar className="flex flex-col space-y-3 pt-4 border-t border-border" isDropDownMenu={true}/>

            {/* معلومات إضافية للجوال */}
            <div className="pt-6 border-t border-border text-center">
              <div className="flex justify-center gap-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// Bars
function SearchBar({className}){
 return(
    <div className={className}>
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="ابحث عن منتجات عضوية..."
        className="pr-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
        />
    </div>
 )
}
function NavBar({className, linkClassName, onClick = () => {}, isMobile = false}) {
  // ensure hooks are called unconditionally
  const [catsOpen, setCatsOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  // نسخة موبايل بسيطة (عمودية) - لا تستخدم NavigationMenu
  if (isMobile) {

    return (
      <nav className={className} dir="rtl" aria-label="الرئيسي">
        <Link href="/" className={linkClassName} onClick={onClick}>الرئيسية</Link>
        <Link href="/products" className={linkClassName} onClick={onClick}>المتجر</Link>
        <Link href="/about" className={linkClassName} onClick={onClick}>من نحن</Link>

        {/* فئات - اكوردين عمودي للجوال */}
        <div className="w-full">
          <button
            type="button"
            onClick={() => setCatsOpen(v => !v)}
            className={`${linkClassName} w-full flex items-center justify-between`}
            aria-expanded={catsOpen}
          >
            <span>الفئات</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${catsOpen ? "rotate-180" : ""}`} />
          </button>

          <div className={`overflow-hidden transition-[max-height,opacity] duration-200 ${catsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="flex flex-col mt-2 pr-8">
              <li>
                <Link href="/categories/food" className={linkClassName} onClick={onClick}>المنتجات الغذائية</Link>
                {/* <ul className="text-sm text-muted-foreground pl-4">
                  <li><Link href="/categories/food/canned" className={linkClassName} onClick={onClick}>معلبات</Link></li>
                  <li><Link href="/categories/food/grains" className={linkClassName} onClick={onClick}>حبوب وبقول</Link></li>
                </ul> */}
              </li>
              <li>
                <Link href="/categories/care" className={linkClassName} onClick={onClick}>منتجات العناية الشخصية</Link>
                {/* <ul className="text-sm text-muted-foreground pl-4">
                  <li><Link href="/categories/care/skin" className={linkClassName} onClick={onClick}>العناية بالبشرة</Link></li>
                  <li><Link href="/categories/care/hair" className={linkClassName} onClick={onClick}>العناية بالشعر</Link></li>
                </ul> */}
              </li>
              <li><Link href="/categories/babies" className={linkClassName} onClick={onClick}>منتجات الاطفال</Link></li>
              <li><Link href="/categories/food-support" className={linkClassName} onClick={onClick}>المكملات الغذائية</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full">
          <button
            type="button"
            onClick={() => setContactsOpen(v => !v)}
            className={`${linkClassName} w-full flex items-center justify-between`}
            aria-expanded={contactsOpen}
          >
            <span>خدمة العملاء</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${contactsOpen ? "rotate-180" : ""}`} />
          </button>

          <div className={`overflow-hidden transition-[max-height,opacity] duration-200 ${contactsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="flex flex-col mt-2 pr-8">
              <li><Link href="/contact" className={linkClassName} onClick={onClick}>تواصل بنا</Link></li>
              <li><Link href="/returns" className={linkClassName} onClick={onClick}>خدمة الاسترجاع و الاستبدال</Link></li>
              <li><Link href="/orders" className={linkClassName} onClick={onClick}>تتبع الطلبات</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // نسخة سطح المكتب (تبقى كما هي - تستخدم NavigationMenu)
  return (
    <NavigationMenu className={className} dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem className={linkClassName}>
          <NavigationMenuLink onClick={onClick} >
              <Link href="/">الرئيسية</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={linkClassName}>
          <NavigationMenuLink  onClick={onClick} >
              <Link href="/products">المتجر</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={linkClassName}>
          <NavigationMenuLink  onClick={onClick} className="break-keep" >
              <Link href="/about">من نحن</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={linkClassName} dir="rtl" >
          <NavigationMenuTrigger className={" bg-[inherit]"} >
            <span className="ml-1">الفئات</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className={``}>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="المنتجات الغذائية" href="/categories/food" >
                  منتحات غذائية عضوية طبيعية صحية.
                </ListItem>
                <ListItem title="منتجات العناية الشخصية" href="/categories/care" >
                  منتجات عضوية للعناية بالبشرة والشعر.
                </ListItem>
                <ListItem title="منتجات الاطفال" href="/categories/babies" >
                  منتجات عضوية آمنة للأطفال.
                </ListItem>
                <ListItem title="المكملات الغذائية" href="/categories/food-support" >
                  مكملات غذائية طبيعية لتعزيز الصحة.
                </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={linkClassName} >
          <NavigationMenuTrigger className={" bg-[inherit]"} >
            <span className="ml-1">خدمة العملاء</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/contact"
                  >
                    <div className="mb-2 text-lg font-bold sm:mt-4">
                      تواصل بنا
                    </div>
                    <p className="text-muted-foreground font-medium text-sm leading-tight">
                      هل تحتاج إلى مساعدة؟ فريق دعم العملاء لدينا هنا لمساعدتك في أي استفسارات أو مشكلات قد تواجهها.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/returns" title="خدمة الاسترجاع و الاستبدال">
                تعرف على سياسة الاسترجاع والاستبدال الخاصة بنا.
              </ListItem>

              <ListItem href="/orders" title="تتبع الطلبات">
                تحقق من حالة طلباتك الحالية وسجل الطلبات السابقة.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
function ActionsBar({className, isDropDownMenu = false}){
  return(
    <div className={className}>
      {isAuth ? (
        <>
          {/* المستخدم المسجل */}
          <Button variant="ghost" size={!isDropDownMenu ? "icon" : "default"} className={!isDropDownMenu ? "relative hover:bg-accent" :"w-full justify-start text-lg relative"}>
            <Link href="">
              <Heart className={`h-5 w-5 ${isDropDownMenu && "ml-3"}`} />
              {isDropDownMenu && "المفضلة"}
            </Link>
          </Button>

          <Button variant="ghost" size={!isDropDownMenu ? "icon" : "default"} className={!isDropDownMenu ? "relative hover:bg-accent" :"w-full justify-start text-lg relative"}>
            <Link href="/cart">
              <ShoppingCart className={`h-5 w-5 ${isDropDownMenu && "ml-3"}`} />
              {isDropDownMenu && "سلة التسوق"}
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-white text-xs border-2 border-white">
                3
              </Badge>
            </Link>
          </Button>

          <Button variant="ghost" size={!isDropDownMenu ? "icon" : "default"} className={!isDropDownMenu ? "relative hover:bg-accent" :"w-full justify-start text-lg relative"}>
            <Link href="">
              <User className={`h-5 w-5 ${isDropDownMenu && "ml-3"}`} />
             {isDropDownMenu && "حسابي"}
            </Link>
          </Button>
        </>
      ) : (
        <>
          {/* المستخدم غير المسجل */}
          <Button variant="outline" size="sm" className={`hover:bg-accent ${!isDropDownMenu && "hidden sm:flex"}`}>
            <Link href="/auth/login" className="flex items-center">
              تسجيل دخول
            </Link>
          </Button>
          <Button size="sm" className={`bg-primary hover:bg-primary/90 text-white ${!isDropDownMenu && "hidden sm:flex"}`}>
            <Link href="/auth/register" className="flex items-center">
              مستخدم جديد
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}

function ListItem({ title, children, href, ...props }){
  return (
    <li {...props}>
      <NavigationMenuLink>
        <Link href={href}>
          <div className="text-sm leading-none">{title}</div>
          <p className="text-muted-foreground font-medium line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}