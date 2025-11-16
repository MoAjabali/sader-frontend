"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import { Checkbox } from "@components/ui/checkbox";
import { Separator } from "@components/ui/separator";
import { CreditCard, Truck, Lock, CheckCircle2 } from "lucide-react";

const cartItems = [
  {
    id: "1",
    name: "زيت زيتون عضوي",
    quantity: 2,
    price: 24.99,
  },
  {
    id: "2",
    name: "سيروم وجه طبيعي",
    quantity: 1,
    price: 45.00,
  },
  {
    id: "3",
    name: "شاي أعشاب صحي",
    quantity: 3,
    price: 18.50,
  },
];

export function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    saveAddress: false,
    shippingMethod: "free",
    paymentMethod: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: ""
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = formData.shippingMethod === "free" ? 0 : formData.shippingMethod === "express" ? 9.99 : 19.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال الطلب
    console.log("Order submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-accent">
        {/* خطوات التقدم */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-sm">العربة</span>
              </div>
              <div className="h-px w-16 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <span className="text-sm">الدفع</span>
              </div>
              <div className="h-px w-16 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center">
                  3
                </div>
                <span className="text-sm text-muted-foreground">الإكمال</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* نموذج الدفع */}
              <div className="lg:col-span-2 space-y-6">
                {/* معلومات الاتصال */}
                <div className="bg-white rounded-2xl p-6 border">
                  <h3 className="mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                    معلومات الاتصال
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">الاسم الأول</Label>
                        <Input 
                          id="firstName" 
                          placeholder="أحمد" 
                          className="mt-1"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">الاسم الأخير</Label>
                        <Input 
                          id="lastName" 
                          placeholder="محمد" 
                          className="mt-1"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ahmed@example.com" 
                        className="mt-1"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+966 55 123 4567" 
                        className="mt-1"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* عنوان الشحن */}
                <div className="bg-white rounded-2xl p-6 border">
                  <h3 className="mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                    عنوان الشحن
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">العنوان</Label>
                      <Input 
                        id="address" 
                        placeholder="شارع العضوي 123" 
                        className="mt-1"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">المدينة</Label>
                        <Input 
                          id="city" 
                          placeholder="الرياض" 
                          className="mt-1"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">المنطقة</Label>
                        <Input 
                          id="state" 
                          placeholder="الرياض" 
                          className="mt-1"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip">الرمز البريدي</Label>
                        <Input 
                          id="zip" 
                          placeholder="12345" 
                          className="mt-1"
                          value={formData.zip}
                          onChange={(e) => handleInputChange('zip', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">الدولة</Label>
                        <Input 
                          id="country" 
                          placeholder="المملكة العربية السعودية" 
                          className="mt-1"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="saveAddress" 
                        checked={formData.saveAddress}
                        onCheckedChange={(checked) => handleInputChange('saveAddress', checked)}
                      />
                      <Label htmlFor="saveAddress" className="text-sm cursor-pointer">
                        حفظ هذا العنوان للطلبات المستقبلية
                      </Label>
                    </div>
                  </div>
                </div>

                {/* طريقة الشحن */}
                <div className="bg-white rounded-2xl p-6 border">
                  <h3 className="mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                    طريقة الشحن
                  </h3>
                  
                  <RadioGroup 
                    value={formData.shippingMethod} 
                    onValueChange={(value) => handleInputChange('shippingMethod', value)}
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p>شحن مجاني</p>
                            <p className="text-sm text-muted-foreground">5-7 أيام عمل</p>
                          </div>
                          <span>$0.00</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer mt-3">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p>شحن سريع</p>
                            <p className="text-sm text-muted-foreground">2-3 أيام عمل</p>
                          </div>
                          <span>$9.99</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer mt-3">
                      <RadioGroupItem value="overnight" id="overnight" />
                      <Label htmlFor="overnight" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p>شحن ليلي</p>
                            <p className="text-sm text-muted-foreground">اليوم التالي</p>
                          </div>
                          <span>$19.99</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* طريقة الدفع */}
                <div className="bg-white rounded-2xl p-6 border">
                  <h3 className="mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">4</span>
                    طريقة الدفع
                  </h3>
                  
                  <RadioGroup 
                    value={formData.paymentMethod} 
                    onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        بطاقة ائتمان/مدينة
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">رقم البطاقة</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        className="mt-1"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY" 
                          className="mt-1"
                          value={formData.expiry}
                          onChange={(e) => handleInputChange('expiry', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          className="mt-1"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">اسم صاحب البطاقة</Label>
                      <Input 
                        id="cardName" 
                        placeholder="أحمد محمد" 
                        className="mt-1"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>معلومات الدفع الخاصة بك آمنة ومشفرة</span>
                  </div>
                </div>
              </div>

              {/* ملخص الطلب */}
              <div>
                <div className="bg-white rounded-2xl p-6 border sticky top-24">
                  <h3 className="mb-6">ملخص الطلب</h3>
                  
                  {/* العناصر */}
                  <div className="space-y-3 mb-6 pb-6 border-b">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* الإجماليات */}
                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">المجموع</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الشحن</span>
                      <span className="text-primary">
                        {shipping === 0 ? 'مجاني' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الضريبة (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span>الإجمالي</span>
                    <span className="text-2xl text-primary">${total.toFixed(2)}</span>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mb-4" size="lg">
                    تأكيد الطلب
                  </Button>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Lock className="h-4 w-4 shrink-0 mt-0.5" />
                    <p>
                      بمجرد تأكيد طلبك، فإنك توافق على الشروط والأحكام وسياسة الخصوصية الخاصة بنا.
                      جميع المعاملات آمنة ومشفرة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}