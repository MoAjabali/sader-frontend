"use client"

import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";

export function PrivacyPage(){
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
        <h1 className="text-4xl font-bold text-primary mb-8">سياسة الخصوصية</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
            <p>
              نحن في سِدر نولي اهتماماً كبيراً لخصوصية زوارنا وعملائنا. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لموقعنا وتطبيقاتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. المعلومات التي نجمعها</h2>
            <p>
              قد نجمع المعلومات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>المعلومات الشخصية مثل الاسم، العنوان، البريد الإلكتروني، ورقم الهاتف عند التسجيل أو الشراء.</li>
              <li>معلومات الدفع لإتمام عمليات الشراء (نحن لا نخزن تفاصيل بطاقتك الائتمانية).</li>
              {/* <li>معلومات التصفح وسلوك الاستخدام لتحسين تجربتك على الموقع.</li> */}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. كيفية استخدام المعلومات</h2>
            <p>
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>معالجة طلباتك وتوصيل المنتجات إليك.</li>
              <li>التواصل معك بخصوص طلباتك أو استفساراتك.</li>
              <li>إرسال العروض الترويجية والنشرات البريدية (يمكنك إلغاء الاشتراك في أي وقت).</li>
              <li>تحسين خدماتنا وتطوير الموقع.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. حماية المعلومات</h2>
            <p>
              نحن نتخذ إجراءات أمنية صارمة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. نستخدم تقنيات تشفير متقدمة لضمان أمان بياناتك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. مشاركة المعلومات</h2>
            <p>
              نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط مع شركاء موثوقين (مثل شركات الشحن) لغرض تقديم الخدمة لك، وهم ملزمون بالحفاظ على سرية هذه المعلومات.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
            <p>
              يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتخصيص المحتوى. يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على بعض وظائف الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. التغييرات على سياسة الخصوصية</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ونشجعك على مراجعتها بانتظام.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة اتصل بنا أو البريد الإلكتروني.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}