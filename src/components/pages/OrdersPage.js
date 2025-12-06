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
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  ChevronDown,
  ChevronUp,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol"

export function OrdersPage() {
  // بيانات تجريبية للطلبات
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-12-01",
      status: "delivered",
      total: 245.50,
      items: [
        {
          name: "عسل سدر جبلي",
          quantity: 2,
          price: 89.99,
          image: "https://images.unsplash.com/photo-1530565337452-355c4deada80?w=200",
        },
        {
          name: "زيت زيتون عضوي",
          quantity: 1,
          price: 65.52,
          image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?w=200",
        },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-12-03",
      status: "shipping",
      total: 189.00,
      items: [
        {
          name: "كريم جسم طبيعي",
          quantity: 3,
          price: 28.50,
          image: "https://images.unsplash.com/photo-1694703233878-ec0a22f8c70d?w=200",
        },
        {
          name: "كينوا عضوية",
          quantity: 4,
          price: 15.99,
          image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?w=200",
        },
      ],
    },
    {
      id: "ORD-2024-003",
      date: "2024-12-05",
      status: "processing",
      total: 320.00,
      items: [
        {
          name: "عسل عضوي",
          quantity: 5,
          price: 32.00,
          image: "https://images.unsplash.com/photo-1530565337452-355c4deada80?w=200",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5" dir="rtl">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Package className="h-3 w-3 ml-2" />
              طلباتك
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              طلباتي
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              تتبع جميع طلباتك السابقة والحالية
            </p>
          </motion.div>

          {/* Orders List */}
          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <OrderCard key={order.id} order={order} index={index} />
              ))}
            </div>
          ) : (
            <EmptyOrdersState />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function OrderCard({ order, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CardTitle className="text-xl">طلب #{order.id}</CardTitle>
                <OrderStatusBadge status={order.status} />
              </div>
              <CardDescription>
                تاريخ الطلب: {new Date(order.date).toLocaleDateString('ar-SA')}
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-left">
                <p className="text-sm text-muted-foreground">الإجمالي</p>
                <p className="text-2xl font-bold text-primary">
                  {order.total.toFixed(2)}
                  <SaudiRiyalIcon size={18} color="#006539" />
                </p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Order Items Preview */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-2">
              {order.items.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-lg border-2 border-white overflow-hidden bg-accent"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {order.items.length} منتج
            </p>
          </div>

          {/* Expanded Items */}
          {isExpanded && (
            <div className="space-y-3 mb-4 pt-4 border-t">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent/50"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-accent">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      الكمية: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-primary">
                    {(item.price * item.quantity).toFixed(2)}
                    <SaudiRiyalIcon size={14} color="#006539" />
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gap-2"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  إخفاء التفاصيل
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  عرض التفاصيل
                </>
              )}
            </Button>
            <Button variant="secondary" asChild className="gap-2">
              <Link href={`/track-order?id=${order.id}`}>
                <Truck className="h-4 w-4" />
                تتبع الطلب
              </Link>
            </Button>
            {order.status === "delivered" && (
              <>
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  عرض الفاتورة
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <Link href="/returns">
                    <RefreshCw className="h-4 w-4" />
                    طلب استرجاع
                  </Link>
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function OrderStatusBadge({ status }) {
  const statusConfig = {
    processing: {
      label: "قيد المعالجة",
      icon: Clock,
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    shipping: {
      label: "قيد الشحن",
      icon: Truck,
      className: "bg-blue-100 text-blue-800 border-blue-200",
    },
    delivered: {
      label: "تم التوصيل",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200",
    },
    cancelled: {
      label: "ملغي",
      icon: XCircle,
      className: "bg-red-100 text-red-800 border-red-200",
    },
  }

  const config = statusConfig[status] || statusConfig.processing
  const Icon = config.icon

  return (
    <Badge variant="outline" className={`gap-1 ${config.className}`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  )
}

function EmptyOrdersState() {
  return (
    <div className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-accent rounded-full">
            <Package className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">
          لا توجد طلبات بعد
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          لم تقم بأي طلب حتى الآن. تصفح منتجاتنا وابدأ التسوق!
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            <Package className="h-5 w-5 ml-2" />
            تصفح المنتجات
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
