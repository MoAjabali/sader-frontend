"use client";

import { useState } from "react";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { StepProgress } from "@components/custom/step-progress";
import { OrderSummarySection } from "@pages/checkout/components/OrderSummarySection";
import { PaymentMethodSection } from "@pages/checkout/components/PaymentMethodSection";

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

export function CheckoutPageStepTow() {
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
    console.log("Order submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 bg-accent">
        <StepProgress 
          steps={[ 'العربة', 'المعلومات الشخصية', 'الدفع', 'الإكمال']} 
          current={3}
        />
        
        <div className="container mx-auto px-4 py-12">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <PaymentMethodSection 
                  formData={formData}
                  onInputChange={handleInputChange}
                />
              </div>

              <OrderSummarySection 
                cartItems={cartItems}
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

