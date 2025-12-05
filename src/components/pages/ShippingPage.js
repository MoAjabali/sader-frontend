"use client"

import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";

export function ShippingPage(){
  return(
    <>
      <Header />
      <TheArticle />
      <Footer />
    </>
  );
}

function TheArticle(){
  return(
    <div className="min-h-screen bg-background py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">معلومات الشحن والتوصيل</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. مناطق الشحن</h2>
            <p>
              نقدم خدمة التوصيل إلى جميع أنحاء المملكة العربية السعودية. نسعى لتوسيع خدماتنا لتشمل دول الخليج العربي قريباً.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>الشحن داخل المدن الرئيسية:</strong> الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة.</li>
              <li><strong>الشحن إلى المناطق الأخرى:</strong> جميع المدن والمحافظات في المملكة.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. أوقات التوصيل</h2>
            <p>
              نعمل جاهدين على توصيل طلبك في أسرع وقت ممكن. فيما يلي الأوقات التقديرية للتوصيل:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>داخل المدن الرئيسية:</strong> من 2 إلى 4 أيام عمل من تاريخ تأكيد الطلب.</li>
              <li><strong>المناطق الأخرى:</strong> من 4 إلى 7 أيام عمل من تاريخ تأكيد الطلب.</li>
              <li><strong>المناطق النائية:</strong> قد يستغرق التوصيل من 7 إلى 10 أيام عمل.</li>
            </ul>
            <p className="mt-4">
              <strong>ملاحظة:</strong> قد تختلف أوقات التوصيل خلال المواسم والأعياد أو الظروف الاستثنائية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. تكاليف الشحن</h2>
            <p>
              تعتمد تكلفة الشحن على موقع التوصيل ووزن المنتجات:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>الشحن المجاني:</strong> متاح للطلبات التي تزيد قيمتها عن 300 ريال سعودي.</li>
              <li><strong>الشحن العادي:</strong> من 20 إلى 40 ريال سعودي حسب الموقع والوزن.</li>
              <li><strong>الشحن السريع:</strong> من 50 إلى 80 ريال سعودي (التوصيل خلال 1-2 يوم عمل في المدن الرئيسية).</li>
            </ul>
            <p className="mt-4">
              سيتم عرض تكلفة الشحن الدقيقة عند إتمام عملية الشراء وقبل تأكيد الطلب.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. تتبع الشحنة</h2>
            <p>
              بمجرد شحن طلبك، سنرسل لك بريداً إلكترونياً أو رسالة نصية تحتوي على:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>رقم تتبع الشحنة.</li>
              <li>رابط لتتبع حالة الشحنة في الوقت الفعلي.</li>
              <li>الوقت المتوقع للتوصيل.</li>
            </ul>
            <p className="mt-4">
              يمكنك أيضاً تتبع طلبك من خلال حسابك على الموقع في قسم تتبع الشحنة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. عملية التسليم</h2>
            <p>
              عند وصول الطلب إلى عنوانك:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>سيقوم مندوب التوصيل بالاتصال بك لتحديد الوقت المناسب للتسليم.</li>
              <li>يجب التحقق من حالة المنتج عند التسليم وفي حضور المندوب.</li>
              <li>في حالة وجود أي تلف أو خطأ في الشحنة، يجب إبلاغ المندوب فوراً ورفض استلام الشحنة.</li>
              <li>يرجى الاحتفاظ بالعبوة الأصلية في حال الحاجة للإرجاع أو الاستبدال.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. عدم تمكن التوصيل</h2>
            <p>
              في حالة عدم تمكن مندوب التوصيل من الوصول إليك:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>سيقوم بإجراء محاولة ثانية للتوصيل في اليوم التالي.</li>
              <li>سيتم التواصل معك لإعادة جدولة موعد التوصيل.</li>
              <li>بعد 3 محاولات فاشلة، سيتم إلغاء الطلب وإعادة الشحنة إلى المستودع.</li>
              <li>قد تطبق رسوم إضافية في حالة إعادة الشحن مرة أخرى.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. الشحن الدولي</h2>
            <p>
              حالياً، نقدم خدمة الشحن داخل المملكة العربية السعودية فقط. نعمل على توفير خدمة الشحن الدولي قريباً. للاستفسارات عن الشحن الدولي، يرجى التواصل معنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. التعامل مع الشحنات المتأخرة</h2>
            <p>
              نحن ملتزمون بتوصيل طلبك في الوقت المحدد. في حالة تأخر الشحنة:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>سيتم إخطارك بأسباب التأخير والموعد الجديد للتوصيل.</li>
              <li>يمكنك التواصل مع خدمة العملاء لمتابعة حالة الشحنة.</li>
              <li>في حالة التأخير الكبير (أكثر من 7 أيام عن الموعد المتوقع)، يمكنك إلغاء الطلب واسترداد المبلغ كاملاً.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. الشحنات التالفة أو المفقودة</h2>
            <p>
              نادراً ما تحدث مشاكل في الشحن، لكن في حال حدوثها:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>الشحنات التالفة:</strong> يجب إبلاغنا خلال 48 ساعة من استلام الشحنة مع إرفاق صور للتلف. سنقوم باستبدال المنتج أو استرداد المبلغ.</li>
              <li><strong>الشحنات المفقودة:</strong> إذا لم تصل الشحنة خلال الوقت المتوقع ولم يتمكن مندوب التوصيل من تحديد موقعها، سنقوم بإرسال بديل أو استرداد المبلغ كاملاً.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. نصائح لضمان توصيل ناجح</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>تأكد من تقديم عنوان دقيق وكامل مع رقم هاتف نشط.</li>
              <li>كن متاحاً لاستقبال المكالمات من مندوب التوصيل.</li>
              <li>في حالة عدم توافرك، يمكنك تحديد شخص آخر لاستلام الطلب نيابة عنك.</li>
              <li>راجع سياسة الإرجاع والاستبدال قبل قبول الشحنة.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات حول الشحن والتوصيل، لا تتردد في التواصل معنا عبر:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>صفحة اتصل بنا على الموقع.</li>
              <li>البريد الإلكتروني أو رقم الهاتف المتاح في الموقع.</li>
              {/* <li>خدمة الدردشة المباشرة (إن وجدت).</li> */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
