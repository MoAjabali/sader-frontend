"use client"

import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";

export function TermsPage(){
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
        <h1 className="text-4xl font-bold text-primary mb-8">شروط وسياسة الاستخدام</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
            <p>
              مرحباً بك في متجر سِدر. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط وسياسة الاستخدام التالية. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. استخدام الموقع</h2>
            <p>
              عند استخدامك لموقعنا، فإنك توافق على:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>استخدام الموقع للأغراض القانونية فقط.</li>
              <li>عدم محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو قواعد البيانات.</li>
              <li>عدم نشر أو إرسال أي محتوى ضار أو مسيء أو غير قانوني.</li>
              <li>توفير معلومات دقيقة وحديثة عند التسجيل أو إجراء عمليات الشراء.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. الطلبات والأسعار</h2>
            <p>
              جميع الطلبات تخضع للتوفر والتأكيد من قبلنا. نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب. الأسعار المعروضة على الموقع قابلة للتغيير دون إشعار مسبق، ولكن سيتم تأكيد السعر النهائي في وقت الشراء.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. سياسة الإرجاع والاستبدال</h2>
            <p>
              نحن نسعى لرضاك التام عن منتجاتنا. إذا لم تكن راضياً عن مشترياتك، يمكنك إرجاعها أو استبدالها وفقاً للشروط التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>المدة الزمنية:</strong> يجب تقديم طلب الإرجاع أو الاستبدال خلال 14 يوماً من تاريخ استلام المنتج.</li>
              <li><strong>حالة المنتج:</strong> يجب أن يكون المنتج في حالته الأصلية، غير مستخدم، مع جميع الملحقات والعبوة الأصلية.</li>
              <li><strong>المنتجات القابلة للإرجاع:</strong> معظم المنتجات قابلة للإرجاع باستثناء المنتجات القابلة للتلف أو المخصصة أو المنتجات الشخصية.</li>
              <li><strong>رسوم الإرجاع:</strong> قد يتحمل العميل تكاليف الشحن للإرجاع، إلا في حالة وجود عيب في المنتج أو خطأ في الطلب من قبلنا.</li>
              <li><strong>استرداد المبلغ:</strong> سيتم استرداد المبلغ المدفوع خلال 7-10 أيام عمل بعد استلام المنتج المرتجع والتحقق من حالته.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. سياسة إلغاء الطلب</h2>
            <p>
              يمكنك إلغاء طلبك وفقاً للشروط التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>قبل الشحن:</strong> يمكنك إلغاء الطلب مجاناً قبل شحنه من خلال التواصل معنا مباشرة أو من خلال حسابك على الموقع.</li>
              <li><strong>بعد الشحن:</strong> في حالة شحن الطلب، يجب اتباع سياسة الإرجاع المذكورة أعلاه عند استلام المنتج.</li>
              <li><strong>استرداد المبلغ:</strong> في حالة الإلغاء قبل الشحن، سيتم استرداد كامل المبلغ خلال 5-7 أيام عمل.</li>
              <li><strong>الطلبات الخاصة:</strong> الطلبات المخصصة أو المصنوعة حسب الطلب لا يمكن إلغاؤها بعد بدء الإنتاج.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. كيفية طلب الإرجاع أو الاستبدال</h2>
            <p>
              لطلب إرجاع أو استبدال منتج:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>تواصل معنا عبر البريد الإلكتروني أو رقم الهاتف المتاح في صفحة اتصل بنا.</li>
              <li>قدم رقم الطلب وسبب الإرجاع أو الاستبدال.</li>
              <li>انتظر تأكيد الطلب وتعليمات الإرجاع من فريق الدعم.</li>
              <li>أعد المنتج وفقاً للتعليمات المقدمة.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. حقوق الملكية الفكرية</h2>
            <p>
              جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، الصور، الشعارات، والتصاميم، هي ملكية خاصة لمتجر سِدر ومحمية بموجب قوانين الملكية الفكرية. لا يجوز استخدام أو نسخ أي محتوى دون إذن كتابي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. المسؤولية</h2>
            <p>
              نحن نبذل قصارى جهدنا لضمان دقة المعلومات على الموقع، لكننا لا نضمن خلو الموقع من الأخطاء أو الانقطاعات. لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو عدم القدرة على استخدامه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. التعديلات على الشروط</h2>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، وسيعتبر استمرارك في استخدام الموقع بعد نشر التغييرات بمثابة موافقة على الشروط الجديدة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. القانون الواجب التطبيق</h2>
            <p>
              تخضع هذه الشروط وأي نزاع ينشأ عن استخدام الموقع لقوانين المملكة العربية السعودية، وستكون المحاكم السعودية هي المختصة بالفصل في أي نزاع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات حول شروط الاستخدام أو سياسة الإرجاع والاستبدال، يرجى التواصل معنا عبر صفحة اتصل بنا.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
