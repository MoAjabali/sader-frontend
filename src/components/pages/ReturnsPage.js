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
import { Textarea } from "@components/ui/textarea"
import { Badge } from "@components/ui/badge"
import {
  RefreshCw,
  Package,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Upload,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol"

export function ReturnsPage() {
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)

  // بيانات تجريبية لطلبات الاسترجاع
  const returns = [
    {
      id: "RET-2024-001",
      orderNumber: "ORD-2024-001",
      date: "2024-11-28",
      status: "approved",
      refundAmount: 89.99,
      reason: "المنتج تالف",
      productName: "عسل سدر جبلي",
      productImage: "https://images.unsplash.com/photo-1530565337452-355c4deada80?w=200",
    },
    {
      id: "RET-2024-002",
      orderNumber: "ORD-2024-003",
      date: "2024-12-02",
      status: "pending",
      refundAmount: 32.00,
      reason: "المنتج لا يطابق الوصف",
      productName: "عسل عضوي",
      productImage: "https://images.unsplash.com/photo-1530565337452-355c4deada80?w=200",
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
              <RefreshCw className="h-3 w-3 ml-2" />
              الاسترجاع والاسترداد
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              طلبات الاسترجاع
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              إدارة طلبات الاسترجاع والاسترداد الخاصة بك
            </p>
          </motion.div>

          {/* New Return Request Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full md:w-auto gap-2">
                  <RefreshCw className="h-5 w-5" />
                  طلب استرجاع جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]" dir="rtl">
                <DialogHeader>
                  <DialogTitle>طلب استرجاع منتج</DialogTitle>
                  <DialogDescription>
                    املأ النموذج أدناه لطلب استرجاع المنتج
                  </DialogDescription>
                </DialogHeader>
                <form>
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="font-bold" htmlFor="order-number">
                        رقم الطلب
                      </FieldLabel>
                      <Input
                        id="order-number"
                        placeholder="ORD-2024-XXXX"
                        className="bg-white"
                        dir="ltr"
                      />
                      <FieldDescription>
                        يمكنك العثور على رقم الطلب في صفحة طلباتي
                      </FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel className="font-bold" htmlFor="reason">
                        سبب الاسترجاع
                      </FieldLabel>
                      <select
                        id="reason"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">اختر السبب</option>
                        <option value="defective">المنتج تالف</option>
                        <option value="wrong">منتج خاطئ</option>
                        <option value="not-as-described">لا يطابق الوصف</option>
                        <option value="quality">جودة غير مرضية</option>
                        <option value="other">سبب آخر</option>
                      </select>
                    </Field>
                    <Field>
                      <FieldLabel className="font-bold" htmlFor="description">
                        وصف المشكلة
                      </FieldLabel>
                      <Textarea
                        id="description"
                        placeholder="اشرح المشكلة بالتفصيل..."
                        className="bg-white min-h-[120px]"
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="font-bold">صور المنتج (اختياري)</FieldLabel>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-accent/50 hover:bg-accent transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              اضغط لرفع الصور
                            </p>
                          </div>
                          <input type="file" className="hidden" multiple accept="image/*" />
                        </label>
                      </div>
                      <FieldDescription>
                        يُفضل إرفاق صور للمنتج لتسريع عملية المراجعة
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                  <DialogFooter className="gap-2 mt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setIsRequestDialogOpen(false)}
                    >
                      إلغاء
                    </Button>
                    <Button type="submit" onClick={() => setIsRequestDialogOpen(false)}>
                      إرسال الطلب
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Returns List */}
          {returns.length > 0 ? (
            <div className="space-y-6">
              {returns.map((returnItem, index) => (
                <ReturnCard key={returnItem.id} returnItem={returnItem} index={index} />
              ))}
            </div>
          ) : (
            <EmptyReturnsState />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ReturnCard({ returnItem, index }) {
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
                <CardTitle className="text-xl">طلب استرجاع #{returnItem.id}</CardTitle>
                <ReturnStatusBadge status={returnItem.status} />
              </div>
              <CardDescription>
                رقم الطلب الأصلي: {returnItem.orderNumber} • {new Date(returnItem.date).toLocaleDateString('ar-SA')}
              </CardDescription>
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">مبلغ الاسترداد</p>
              <p className="text-2xl font-bold text-primary">
                {returnItem.refundAmount.toFixed(2)}
                <SaudiRiyalIcon size={18} color="#006539" />
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 mb-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-accent flex-shrink-0">
              <Image
                src={returnItem.productImage}
                alt={returnItem.productName}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{returnItem.productName}</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                السبب: {returnItem.reason}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Package className="h-4 w-4" />
              تفاصيل الطلب
            </Button>
            {returnItem.status === "pending" && (
              <Button variant="secondary" className="gap-2">
                إلغاء الطلب
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ReturnStatusBadge({ status }) {
  const statusConfig = {
    pending: {
      label: "قيد المراجعة",
      icon: Clock,
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    approved: {
      label: "تم القبول",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200",
    },
    rejected: {
      label: "مرفوض",
      icon: XCircle,
      className: "bg-red-100 text-red-800 border-red-200",
    },
    refunded: {
      label: "تم الاسترداد",
      icon: CheckCircle,
      className: "bg-blue-100 text-blue-800 border-blue-200",
    },
  }

  const config = statusConfig[status] || statusConfig.pending
  const Icon = config.icon

  return (
    <Badge variant="outline" className={`gap-1 ${config.className}`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  )
}

function EmptyReturnsState() {
  return (
    <div className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-accent rounded-full">
            <RefreshCw className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">
          لا توجد طلبات استرجاع
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          لم تقم بأي طلب استرجاع حتى الآن
        </p>
      </motion.div>
    </div>
  )
}
