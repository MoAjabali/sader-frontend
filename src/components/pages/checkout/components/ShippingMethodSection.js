import { SectionHeader } from "@pages/checkout/components/SectionHeader";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import { Label } from "@components/ui/label";
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol";



export function ShippingMethodSection({ formData, onInputChange }) {
  const shippingOptions = [
    { value: "free", label: "شحن مجاني", description: "5-7 أيام عمل", price: 0 },
    { value: "express", label: "شحن سريع", description: "2-3 أيام عمل", price: 9.99 },
    { value: "overnight", label: "شحن ليلي", description: "اليوم التالي", price: 19.99 }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border">
      <SectionHeader step={3} title="طريقة الشحن" />
      
      <RadioGroup 
        value={formData.shippingMethod} 
        onValueChange={(value) => onInputChange('shippingMethod', value)}
      >
        {shippingOptions.map((option) => (
          <ShippingOption 
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            price={option.price}
            selected={formData.shippingMethod === option.value}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

function ShippingOption({ value, label, description, price, selected }) {
  return (
    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer mt-3 first:mt-0">
      <RadioGroupItem value={value} id={value} dir="rtl" className="text-right"/>
      <Label htmlFor={value} className="flex-1 cursor-pointer">
        <div className="flex justify-between w-full items-center">
          <div>
            <p>{label}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="font-bold">{price.toFixed(2)}<SaudiRiyalIcon size={14} color="black" /></span>
        </div>
      </Label>
    </div>
  );
}