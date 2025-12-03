import { SectionHeader } from "@pages/checkout/components/SectionHeader";
import { Label } from "@components/ui/label";
import { FormField } from "@pages/checkout/components/FormField";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import { CreditCard, Lock } from "lucide-react";


export function PaymentMethodSection({ formData, onInputChange }) {
  return (
    <div className="bg-white rounded-2xl p-6 border">
      <SectionHeader step={4} title="طريقة الدفع" />
      
      <RadioGroup 
        value={formData.paymentMethod} 
        onValueChange={(value) => onInputChange('paymentMethod', value)}
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
        <FormField
          label="رقم البطاقة"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={(value) => onInputChange('cardNumber', value)}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="تاريخ الانتهاء"
            id="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={(value) => onInputChange('expiry', value)}
            required
          />
          <FormField
            label="CVV"
            id="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={(value) => onInputChange('cvv', value)}
            required
          />
        </div>
        <FormField
          label="اسم صاحب البطاقة"
          id="cardName"
          placeholder="أحمد محمد"
          value={formData.cardName}
          onChange={(value) => onInputChange('cardName', value)}
          required
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span>معلومات الدفع الخاصة بك آمنة ومشفرة</span>
      </div>
    </div>
  );
}

