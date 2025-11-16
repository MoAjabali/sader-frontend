"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Badge } from "@components/ui/badge";
import { X, Plus, Minus, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import Image from 'next/image';

const cartItems = [
  {
    id: "1",
    name: "زيت زيتون عضوي",
    nameAr: "زيت الزيتون العضوي",
    price: 24.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc2Mjc1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    name: "سيروم وجه طبيعي",
    nameAr: "سيروم الوجه الطبيعي",
    price: 45.00,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI3NjE4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    name: "شاي أعشاب صحي",
    nameAr: "شاي الأعشاب الصحي",
    price: 18.50,
    quantity: 3,
    image: "https://images.unsplash.com/photo-1757802412806-433e4e60eec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwd2VsbG5lc3MlMjB0ZWF8ZW58MXx8fHwxNzYyNzk3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CartPage() {
  const [items, setItems] = useState(cartItems);
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* مسار التنقل */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-primary">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">عربة التسوق</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-2 text-primary">عربة التسوق</h1>
          <p className="text-muted-foreground mb-8">Shopping Cart</p>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="mb-4">عربتك فارغة</h2>
              <p className="text-muted-foreground mb-6">Your cart is empty</p>
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="h-5 w-5 ml-2" />
                ابدأ التسوق
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* عناصر العربة */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white border rounded-2xl p-4 hover:shadow-md transition-shadow">
                      <div className="w-24 h-24 bg-accent rounded-xl overflow-hidden shrink-0">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={96}
                          height={96}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3>{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.nameAr}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="shrink-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-lg">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-10 text-center text-sm">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <span className="text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* متابعة التسوق */}
                <Button variant="outline" className="mt-6">
                  <ArrowLeft className="h-4 w-4 ml-2" />
                  متابعة التسوق
                </Button>
              </div>

              {/* ملخص الطلب */}
              <div>
                <div className="bg-accent rounded-2xl p-6 sticky top-24">
                  <h3 className="mb-6">ملخص الطلب</h3>
                  
                  {/* كود الخصم */}
                  <div className="mb-6">
                    <label className="block mb-2 text-sm">كود الخصم</label>
                    <div className="flex gap-2">
                      <Input placeholder="أدخل الكود" className="bg-white" />
                      <Button variant="outline">
                        <Tag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">المجموع</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الشحن</span>
                      <span>{shipping === 0 ? 'مجاني' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                      <Badge variant="outline" className="text-xs">
                        تم تطبيق الشحن المجاني!
                      </Badge>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الضريبة (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span>الإجمالي</span>
                    <span className="text-2xl text-primary">${total.toFixed(2)}</span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 mb-3" size="lg">
                    اتمام الشراء
                    <ArrowLeft className="h-5 w-5 mr-2" />
                  </Button>

                  <Button variant="outline" className="w-full" size="lg">
                    متابعة التسوق
                  </Button>

                  {/* المزايا */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">دفع آمن مع تشفير SSL</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">ضمان استرداد الأموال لمدة 30 يوم</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">إرجاع مجاني لجميع الطلبات</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}