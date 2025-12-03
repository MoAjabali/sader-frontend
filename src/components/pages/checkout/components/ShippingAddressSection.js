import { useState, useEffect } from "react";
import { Label } from "@components/ui/label";
import { SectionHeader } from "@pages/checkout/components/SectionHeader";
import { FormField } from "@pages/checkout/components/FormField";
import { Checkbox } from "@components/ui/checkbox";
import { Button } from "@components/ui/button";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function ShippingAddressSection({ formData, onInputChange }) {
  const [savedAddresses, setSavedAddresses] = useState([
    // {address: "شار الاربعين", city: "الرياض", state:"الحجاز", zip:"0000", country:"المملكبة العربية السعودية"}
    {value: "home", title: "المنزل", loc: "شارع الاربعين, المطار"},
    {value: "work", title: "العمل", loc: "شارع الامير, جدة"}
  ]);
  console.log(savedAddresses);
  return (
    <div className="bg-white rounded-2xl p-6 border">
      <SectionHeader step={2} title="عنوان الشحن" />
        <div className="space-y-4">
          <RadioGroup >
            {savedAddresses.map((e, index) => (
              <LocationOption key={index} address={e} />
            ))}
          </RadioGroup>
          <div className="flex gap-3 pt-2">
            <AddLocDialog />
          </div>
        </div>
    </div>
  );
}

function LocationOption({address}){
  return(
    <div className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-accent cursor-pointer mt-3 first:mt-0">
      <RadioGroupItem value={address.value} id={address.value} dir="rtl" className="text-right"/>
      <Label htmlFor={address.value} className="flex-1 cursor-pointer">
        <div className="flex justify-between w-full items-center">
          <div>
            <p>{address.title}</p>
            <p className="text-sm text-muted-foreground">{address.loc}</p>
          </div>
        </div>
      </Label>
      {/* hello world */}
    </div>
  );
}

function AddLocDialog(){
  return(
    <Dialog dir="rtl">
      <DialogTrigger className="w-full cursor-pointer" asChild>
        <Button variant="outline" className="w-full">أضف موقع جديد</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle>موقع جديد</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">اسم الموقع</Label>
            <Input id="name-1" name="name" placeholder="المنزل, العمل" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">العنوان</Label>
            <Input id="username-1" name="username" placeholder="شارع الامير, جدة " />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">الغاء</Button>
          </DialogClose>
          <Button type="submit">إضافة</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}