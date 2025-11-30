import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function OTPForm({
  ...props
}) {
  return (
    <Card {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">ادخل كود التحقق</CardTitle>
        <CardDescription>قمنا بإرسال كود التحقق الى رقمك</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp" className="sr-only">
                كود التحقق
              </FieldLabel>
              <InputOTP maxLength={6} id="otp" required>
                <InputOTPGroup
                  className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                  <InputOTPSlot index={0} className="bg-accent"/>
                  <InputOTPSlot index={1} className="bg-accent"/>
                  <InputOTPSlot index={2} className="bg-accent"/>
                  <InputOTPSlot index={3} className="bg-accent"/>
                  <InputOTPSlot index={4} className="bg-accent"/>
                  <InputOTPSlot index={5} className="bg-accent"/>
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription className="text-center">
                ادخل رمز التحقق التي تم إرساله الى رقمك الشخصي
              </FieldDescription>
            </Field>
            <Button type="submit">تحقق</Button>
            <FieldDescription className="text-center">
              لم تستلم الكود؟ <a href="#">اعد الإرسال</a>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
