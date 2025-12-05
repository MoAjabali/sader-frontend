"use client"

import { useState } from "react"
import { Header } from "@components/layout/Header"
import { Footer } from "@components/layout/Footer"
import { Button } from "@components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@components/ui/field"
import { Input } from "@components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Badge } from "@components/ui/badge"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  ShoppingCart,
  Package,
  MapPinned,
  Lock,
  Edit,
  Plus,
  Trash2,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5" dir="rtl">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <User className="h-3 w-3 ml-2" />
              حسابك الشخصي
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              الملف الشخصي
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              إدارة معلوماتك الشخصية وإعداداتك بكل سهولة
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar - User Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <UserProfileCard />
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <PersonalInfoSection />
              <AddressesSection />
              <QuickLinksSection />
              <LogoutSection />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// User Profile Card in Sidebar
function UserProfileCard() {
  return (
    <Card className="border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 sticky top-24">
      <CardContent className="pt-8 pb-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <User className="h-14 w-14 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">محمد أحمد</h3>
          <p className="text-sm text-muted-foreground" dir="ltr">
            m.ahmed@example.com
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Personal Information Section
function PersonalInfoSection() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)

  return (
    <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">المعلومات الشخصية</CardTitle>
            <CardDescription className="mt-1">بياناتك الأساسية ومعلومات حسابك</CardDescription>
          </div>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                تعديل
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]" dir="rtl">
              <DialogHeader>
                <DialogTitle>تعديل المعلومات الشخصية</DialogTitle>
                <DialogDescription>
                  قم بتحديث بياناتك الشخصية
                </DialogDescription>
              </DialogHeader>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="edit-name">الاسم الكامل</FieldLabel>
                    <Input
                      id="edit-name"
                      defaultValue="محمد أحمد"
                      className="bg-white"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="edit-email">البريد الإلكتروني</FieldLabel>
                    <Input
                      id="edit-email"
                      type="email"
                      dir="ltr"
                      defaultValue="m.ahmed@example.com"
                      className="bg-white"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="edit-phone">رقم الهاتف</FieldLabel>
                    <InputGroup dir="ltr" className="text-left bg-white">
                      <InputGroupInput
                        type="tel"
                        size="9"
                        defaultValue="50 123 4567"
                        className="!pl-1"
                      />
                      <InputGroupAddon>
                        <InputGroupText>+966</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </FieldGroup>
                <DialogFooter className="gap-2 mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    إلغاء
                  </Button>
                  <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>
                    حفظ التغييرات
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <InfoItem icon={User} label="الاسم" value="محمد أحمد" />
        <InfoItem icon={Mail} label="البريد الإلكتروني" value="m.ahmed@example.com" isLtr />
        <InfoItem icon={Phone} label="رقم الهاتف" value="+966 50 123 4567" isLtr />
        
        <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full mt-4">
              <Lock className="h-4 w-4 ml-2" />
              تغيير كلمة المرور
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]" dir="rtl">
            <DialogHeader>
              <DialogTitle>تغيير كلمة المرور</DialogTitle>
              <DialogDescription>
                أدخل كلمة المرور الحالية والجديدة
              </DialogDescription>
            </DialogHeader>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel className="font-bold" htmlFor="current-password">
                    كلمة المرور الحالية
                  </FieldLabel>
                  <Input
                    id="current-password"
                    type="password"
                    dir="ltr"
                    className="bg-white"
                  />
                </Field>
                <Field>
                  <FieldLabel className="font-bold" htmlFor="new-password">
                    كلمة المرور الجديدة
                  </FieldLabel>
                  <Input
                    id="new-password"
                    type="password"
                    dir="ltr"
                    className="bg-white"
                  />
                </Field>
                <Field>
                  <FieldLabel className="font-bold" htmlFor="confirm-password">
                    تأكيد كلمة المرور
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    dir="ltr"
                    className="bg-white"
                  />
                  <FieldDescription>
                    يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل
                  </FieldDescription>
                </Field>
              </FieldGroup>
              <DialogFooter className="gap-2 mt-6">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsPasswordDialogOpen(false)}
                >
                  إلغاء
                </Button>
                <Button type="submit" onClick={() => setIsPasswordDialogOpen(false)}>
                  تحديث كلمة المرور
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

function InfoItem({ icon: Icon, label, value, isLtr = false }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-0.5">{label}</p>
        <p className="font-medium" dir={isLtr ? "ltr" : "rtl"}>{value}</p>
      </div>
    </div>
  )
}

// Addresses Section
function AddressesSection() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [addresses] = useState([
    {
      id: 1,
      title: "المنزل",
      address: "شارع الأمير محمد بن عبدالعزيز، الرياض 12345",
      isDefault: true,
    },
    {
      id: 2,
      title: "العمل",
      address: "طريق الملك فهد، جدة 21512",
      isDefault: false,
    },
  ])

  return (
    <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">العناوين المحفوظة</CardTitle>
            <CardDescription className="mt-1">إدارة عناوين التوصيل الخاصة بك</CardDescription>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                إضافة عنوان
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]" dir="rtl">
              <DialogHeader>
                <DialogTitle>إضافة عنوان جديد</DialogTitle>
                <DialogDescription>
                  أضف عنوان توصيل جديد
                </DialogDescription>
              </DialogHeader>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="address-title">عنوان العنوان</FieldLabel>
                    <Input
                      id="address-title"
                      placeholder="المنزل، العمل، إلخ"
                      className="bg-white"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="city">المدينة</FieldLabel>
                    <Input
                      id="city"
                      placeholder="الرياض، جدة، إلخ"
                      className="bg-white"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="street">الشارع</FieldLabel>
                    <Input
                      id="street"
                      placeholder="اسم الشارع"
                      className="bg-white"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="font-bold" htmlFor="postal">الرمز البريدي</FieldLabel>
                    <Input
                      id="postal"
                      placeholder="12345"
                      className="bg-white"
                    />
                  </Field>
                </FieldGroup>
                <DialogFooter className="gap-2 mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    إلغاء
                  </Button>
                  <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                    حفظ العنوان
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-start gap-4 p-4 rounded-xl border-2 hover:border-primary/20 bg-accent/30 hover:bg-accent/50 transition-all group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-foreground">{address.title}</p>
                {address.isDefault && (
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30">
                    افتراضي
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{address.address}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Quick Links Section
function QuickLinksSection() {
  const links = [
    {
      title: "المفضلة",
      description: "المنتجات المحفوظة",
      icon: Heart,
      href: "/favorites",
      badge: "5",
    },
    {
      title: "سلة التسوق",
      description: "عرض السلة",
      icon: ShoppingCart,
      href: "/cart",
      badge: "3",
    },
    {
      title: "طلباتي",
      description: "تاريخ الطلبات",
      icon: Package,
      href: "/orders",
      badge: null,
    },
    {
      title: "تتبع الطلبات",
      description: "تتبع الشحنات",
      icon: MapPinned,
      href: "/track-order",
      badge: null,
    },
  ]

  return (
    <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl">الوصول السريع</CardTitle>
        <CardDescription className="mt-1">روابط مفيدة للأقسام المهمة</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <div className="flex items-center gap-4 p-4 rounded-xl border-2 bg-accent/80 hover:bg-accent/50 border-accent/50 transition-all cursor-pointer group hover:shadow-md hover:-translate-y-0.5">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  {link.badge && (
                    <Badge className="bg-primary">{link.badge}</Badge>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


// Logout Section
function LogoutSection() {
  return (
    <Button variant="destructive" className="w-full py-6 text-lg shadow-lg hover:shadow-xl transition-all">
      <LogOut className="h-5 w-5 ml-2" />
      تسجيل الخروج
    </Button>
  )
}
