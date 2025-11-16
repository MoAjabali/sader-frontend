"use client";

import { AdminSidebar } from "@components/layout/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  ArrowUpLeft,
  MoreVertical
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const salesData = [
  { month: "يناير", sales: 4200, orders: 120 },
  { month: "فبراير", sales: 3800, orders: 98 },
  { month: "مارس", sales: 5100, orders: 145 },
  { month: "أبريل", sales: 4600, orders: 132 },
  { month: "مايو", sales: 6200, orders: 178 },
  { month: "يونيو", sales: 7100, orders: 201 },
];

const categoryData = [
  { name: "طعام", value: 45, color: "#006539" },
  { name: "العناية بالبشرة", value: 30, color: "#f29000" },
  { name: "العافية", value: 15, color: "#84d0ab" },
  { name: "أخرى", value: 10, color: "#ffc670" },
];

const recentOrders = [
  { id: "#ORD-2401", customer: "سارة جونسون", product: "زيت زيتون عضوي", amount: 24.99, status: "مكتمل" },
  { id: "#ORD-2402", customer: "مايكل تشين", product: "سيروم وجه طبيعي", amount: 45.00, status: "قيد المعالجة" },
  { id: "#ORD-2403", customer: "إيما ويلسون", product: "مجموعة شاي أعشاب", amount: 55.50, status: "معلق" },
  { id: "#ORD-2404", customer: "جيمس براون", product: "عسل عضوي", amount: 32.00, status: "مكتمل" },
];

const topProducts = [
  { name: "زيت زيتون عضوي", sales: 342, revenue: 8545.58, trend: "up" },
  { name: "سيروم وجه طبيعي", sales: 278, revenue: 12510.00, trend: "up" },
  { name: "شاي أعشاب صحي", sales: 215, revenue: 3977.50, trend: "down" },
  { name: "عسل عضوي", sales: 189, revenue: 6048.00, trend: "up" },
];

export function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-accent" dir="rtl">
      <AdminSidebar activeItem="dashboard" />
      
      <main className="flex-1 overflow-auto">
        {/* الهيدر */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="p-6">
            <h1 className="text-primary">لوحة التحكم</h1>
            <p className="text-muted-foreground">مرحباً بعودتك! إليك ما يحدث اليوم.</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* بطاقات المؤشرات الرئيسية */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">إجمالي الإيرادات</CardTitle>
                <DollarSign className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-1">$31,000</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-primary">+12.5%</span> من الشهر الماضي
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">إجمالي الطلبات</CardTitle>
                <ShoppingCart className="h-5 w-5 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-1">874</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-primary">+8.2%</span> من الشهر الماضي
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">إجمالي العملاء</CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-1">2,453</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-primary">+18.9%</span> من الشهر الماضي
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">المنتجات المباعة</CardTitle>
                <Package className="h-5 w-5 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-1">1,024</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="h-3 w-3 text-destructive" />
                  <span className="text-destructive">-3.1%</span> من الشهر الماضي
                </p>
              </CardContent>
            </Card>
          </div>

          {/* صف المخططات */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* مخطط المبيعات */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>نظرة عامة على المبيعات</CardTitle>
                <p className="text-sm text-muted-foreground">أداء المبيعات والطلبات الشهرية</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#006539" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#006539" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#006539" 
                      fillOpacity={1} 
                      fill="url(#salesGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* توزيع الفئات */}
            <Card>
              <CardHeader>
                <CardTitle>المبيعات حسب الفئة</CardTitle>
                <p className="text-sm text-muted-foreground">توزيع فئات المنتجات</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {categoryData.map((category) => (
                    <div key={category.name} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-muted-foreground">{category.name}</span>
                      <span>{category.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* صف الجداول */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* الطلبات الحديثة */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>الطلبات الحديثة</CardTitle>
                  <p className="text-sm text-muted-foreground">أحدث طلبات العملاء</p>
                </div>
                <Button variant="outline" size="sm">
                  عرض الكل
                  <ArrowUpLeft className="h-4 w-4 mr-2" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent transition-colors">
                      <div className="flex-1 text-right">
                        <p className="text-sm mb-1">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="text-left ml-4">
                        <p className="text-sm mb-1">${order.amount}</p>
                        <p className="text-xs text-muted-foreground">{order.product}</p>
                      </div>
                      <Badge 
                        variant={order.status === "مكتمل" ? "default" : "outline"}
                        className={order.status === "مكتمل" ? "bg-primary" : ""}
                      >
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* أفضل المنتجات */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>أفضل المنتجات</CardTitle>
                  <p className="text-sm text-muted-foreground">المنتجات الأكثر مبيعاً</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                          #{index + 1}
                        </div>
                        <div className="text-right">
                          <p className="text-sm mb-1">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.sales} عملية بيع</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm mb-1">${product.revenue.toFixed(2)}</p>
                        {product.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-primary mr-auto" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-destructive mr-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}