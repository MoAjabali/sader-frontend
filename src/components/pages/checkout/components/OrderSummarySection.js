import Link from "next/link";
import { Button } from "@components/ui/button";
import { Lock } from "lucide-react";
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol";

export function OrderSummarySection({ cartItems, subtotal, shipping, tax, total, isFirst=false}) {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border sticky top-24">
        <h3 className="mb-6">ملخص الطلب</h3>
        
        <OrderItems cartItems={cartItems} />
        <OrderBreakdown 
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
        />
        <TotalAmount total={total} />
        <SubmitOrderButton isFirst={isFirst}/>
        <SecurityNotice />
      </div>
    </div>
  );
}

function OrderItems({ cartItems }) {
  return (
    <div className="space-y-3 mb-6 pb-6 border-b">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {item.name} × {item.quantity}
          </span>
          <span>{(item.price * item.quantity).toFixed(2)}<SaudiRiyalIcon size={14} color="black" /></span>
        </div>
      ))}
    </div>
  );
}

function OrderBreakdown({ subtotal, shipping, tax }) {
  return (
    <div className="space-y-3 mb-6 pb-6 border-b">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">المجموع</span>
        <span>{subtotal.toFixed(2)}<SaudiRiyalIcon size={14} color="black" /></span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">الشحن</span>
        <span className="text-primary">
          {shipping === 0 ? 'مجاني' : (
              <>
                {shipping.toFixed(2)}
                <SaudiRiyalIcon size={14} color="black" />
              </>
            )}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">الضريبة (10%)</span>
        <span>{tax.toFixed(2)}<SaudiRiyalIcon size={14} color="black" /></span>
      </div>
    </div>
  );
}

function TotalAmount({ total }) {
  return (
    <div className="flex justify-between mb-6">
      <span>الإجمالي</span>
      <span className="text-2xl text-primary">{total.toFixed(2)}<SaudiRiyalIcon size={22} color="#006539" /> </span>
    </div>
  );
}

function SubmitOrderButton({isFirst}) {
  return (
    <>
    {
      isFirst ?
      <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
        <Link href="/checkout/second-step" className="w-full  ">
          التالي
        </Link>
      </Button>
    : <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mb-4" size="lg">
      تأكيد الطلب
    </Button>
    }
    </>
  );
}

function SecurityNotice() {
  return (
    <div className="flex items-start gap-2 text-xs text-muted-foreground">
      <Lock className="h-4 w-4 shrink-0 mt-0.5" />
      <p>
        بمجرد تأكيد طلبك، فإنك توافق على الشروط والأحكام وسياسة الخصوصية الخاصة بنا.
        جميع المعاملات آمنة ومشفرة.
      </p>
    </div>
  );
}