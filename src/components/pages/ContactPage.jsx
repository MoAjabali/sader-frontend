"use client"

import { cn } from "@/lib/utils"
import { Button } from "@components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
import { Footer } from "@components/layout/Footer"
import { Header } from "@components/layout/Header"
import { Mail, Phone, MapPin } from "lucide-react"


export function ContactPage({ className, ...props }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className={cn("flex flex-col gap-6", className)} {...props}>
            {/* Page Header */}
            <div className="text-center space-y-2" dir="rtl">
              <h1 className="text-4xl font-bold text-primary">تواصل معنا</h1>
              <p className="text-muted-foreground text-lg">
                نحن هنا للإجابة على استفساراتك ومساعدتك
              </p>
            </div>

            {/* Contact Form Card */}
            <Card className="bg-accent">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">أرسل لنا رسالة</CardTitle>
                <CardDescription dir="rtl">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <FieldGroup>
                    <Field dir="rtl">
                      <FieldLabel className="font-bold" htmlFor="name">الاسم الكامل </FieldLabel>
                      <Input
                        id="name"
                        type="text"
                        className="bg-white"
                        placeholder="محمد أحمد"
                        required
                      />
                    </Field>

                    <Field dir="rtl">
                      <FieldLabel className="font-bold" htmlFor="email">البريد الإلكتروني </FieldLabel>
                      <Input
                        id="email"
                        dir="ltr"
                        type="email"
                        placeholder="m@example.com"
                        className="bg-white"
                        required
                      />
                    </Field>

                    <Field dir="rtl">
                      <FieldLabel className="font-bold" htmlFor="phoneNumber">
                        رقم الهاتف <span className="text-muted-foreground text-sm">(اختياري)</span>
                      </FieldLabel>
                      <InputGroup dir="ltr" className="text-left bg-white">
                        <InputGroupInput
                          type="tel"
                          size="9"
                          placeholder="50 123 4567"
                          className="!pl-1"
                        />
                        <InputGroupAddon>
                          <InputGroupText>+966</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>

                    <Field dir="rtl">
                      <FieldLabel className="font-bold" htmlFor="subject">الموضوع </FieldLabel>
                      <Input
                        id="subject"
                        type="text"
                        className="bg-white"
                        placeholder="استفسار عن المنتجات"
                        required
                      />
                    </Field>

                    <Field dir="rtl">
                      <FieldLabel className="font-bold" htmlFor="message">الرسالة </FieldLabel>
                      <Textarea
                        id="message"
                        className="bg-white min-h-[150px] resize-y"
                        placeholder="اكتب رسالتك هنا..."
                        required
                      />
                      <FieldDescription>
                        يرجى توضيح استفسارك بالتفصيل لنتمكن من مساعدتك بشكل أفضل
                      </FieldDescription>
                    </Field>

                    <Field>
                      <Button type="submit" className="w-full">
                        إرسال الرسالة
                      </Button>
                    </Field>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-4 mt-6" dir="rtl">
              <Card className="bg-accent">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold">البريد الإلكتروني</h3>
                  <p className="text-sm text-muted-foreground" dir="ltr">
                    info@sader.sa
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold">الهاتف</h3>
                  <p className="text-sm text-muted-foreground" dir="ltr">
                    +966 50 123 4567
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold">العنوان</h3>
                  <p className="text-sm text-muted-foreground">
                    الرياض، المملكة العربية السعودية
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
