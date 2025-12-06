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
import { Badge } from "@components/ui/badge"
import { Input } from "@components/ui/input"
import {
  Field,
  FieldLabel,
} from "@components/ui/field"
import {
  MapPin,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Search,
  Home,
  CheckCircle2
} from "lucide-react"
import { motion } from "framer-motion"

export function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [trackingData, setTrackingData] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setIsSearching(true)
    
    // محاكاة البحث
    setTimeout(() => {
      setTrackingData({
        orderNumber: orderNumber || "ORD-2024-002",
        status: "shipping",
        estimatedDelivery: "2024-12-08",
        currentLocation: "مركز التوزيع - جدة",
        status: 2
      })
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5" dir="rtl">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <MapPin className="h-3 w-3 ml-2" />
              تتبع شحنتك
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              تتبع الطلب
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              تابع حالة طلبك وموقعه الحالي
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle>أدخل رقم الطلب</CardTitle>
                <CardDescription>
                  يمكنك العثور على رقم الطلب في البريد الإلكتروني التأكيدي
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <Field>
                    <FieldLabel htmlFor="order-number" className="font-bold">
                      رقم الطلب
                    </FieldLabel>
                    <div className="flex gap-2">
                      <Input
                        id="order-number"
                        placeholder="ORD-2024-XXXX"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="bg-white"
                        dir="ltr"
                      />
                      <Button type="submit" disabled={isSearching} className="gap-2">
                        <Search className="h-4 w-4" />
                        {isSearching ? "جاري البحث..." : "تتبع"}
                      </Button>
                    </div>
                  </Field>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tracking Results */}
          {trackingData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Status Summary */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        طلب #{trackingData.orderNumber}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        الموقع الحالي: {trackingData.currentLocation}
                      </CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 gap-1">
                      <Truck className="h-3 w-3" />
                      قيد الشحن
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      التسليم المتوقع
                    </div>
                    <p className="text-lg font-semibold text-foreground">
                      {new Date(trackingData.estimatedDelivery).toLocaleDateString('ar-SA', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">تتبع الشحنة</CardTitle>
                  <CardDescription>تاريخ حركة الطلب من البداية حتى الآن</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* {trackingData.timeline.map((event, index) => (
                      <TimelineEvent
                        key={index}
                        event={event}
                        isLast={index === trackingData.timeline.length - 1}
                      />
                    ))} */}
                    <Timeline status={4} />
                  </div>
                </CardContent>
              </Card>

              {/* Help Section */}
              <Card className="border-2 bg-accent/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      هل تحتاج مساعدة؟
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      إذا كان لديك أي استفسار حول طلبك، لا تتردد في التواصل معنا
                    </p>
                    <Button variant="outline">تواصل مع الدعم</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Timeline({status}){
  const timeline = [{
      status: "ordered",
      title: "تم تأكيد الطلب",
      date: "2024-12-03 10:30 ص",
      description: "تم استلام طلبك وجاري المعالجة",
      icon: <CheckCircle className="h-5 w-5"/>
    },
    {
      status: "processing",
      title: "جاري التجهيز",
      date: "2024-12-03 02:15 م",
      description: "يتم تجهيز منتجاتك للشحن",
      icon: <Package className="h-5 w-5"/>
    },
    {
      status: "out-for-delivery",
      title: "خارج للتوصيل",
      date: "متوقع: 2024-12-08",
      description: "سيتم توصيل طلبك قريباً",
      icon: <MapPin className="h-5 w-5"/>
    },{
      status: "delivered",
      title: "تم التوصيل",
      date: "-----",
      description: "تم توصيل الطلب بنجاح",
      icon: <Home className="h-5 w-5"/>
    }];

  return(
    <div className="">
      {timeline.map((e, index)=>(
        <div className="flex gap-4" key={index}>
          {/* Icon */ console.log(status)}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                (index<status)
                  ? "bg-primary text-white"
                  : "bg-accent border-2 border-border text-muted-foreground"}
                  ${index==status && "border-2 border-white box-shadow-selected text-primary"}`}
            >
              {index<status ? <CheckCircle2 className="h-5 w-5"/>  : e.icon}
            </div>
            {(index!=3) && (
              <div
                className={`m-2 w-0.5 h-16 ${
                  index < status ? "bg-primary"
                    : "bg-border"
                }`}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-start justify-between mb-1">
              <h4
                className={`font-semibold ${
                  index < status ? "text-foreground" : "text-muted-foreground"}
                  ${index==status && "text-primary"}
                `}
              >
                {e.title}
              </h4>
              {/* <span className="text-sm text-muted-foreground" dir="ltr">
                {e.date}
              </span> */}
            </div>
            <p className="text-sm text-muted-foreground">{e.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}