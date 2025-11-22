import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

// هوك للكشف عن اللغة
function useLanguage() {
  const [language, setLanguage] = React.useState('ar');
  
  React.useEffect(() => {
    // الكشف عن اللغة من الـ HTML أو localStorage
    // const htmlLang = document.documentElement.lang;
    // const savedLang = localStorage.getItem('language');
    // const detectedLang = savedLang || htmlLang || 'ar';
    const detectedLang = 'ar';
    setLanguage(detectedLang);
  }, []);

  return language;
}

// نصوص متعددة اللغات
const translations = {
  ar: {
    pagination: "ترقيم الصفحات",
    previous: "السابق",
    next: "التالي",
    morePages: "صفحات إضافية",
    goToPrevious: "الانتقال إلى الصفحة السابقة",
    goToNext: "الانتقال إلى الصفحة التالية",
  },
  en: {
    pagination: "pagination",
    previous: "Previous",
    next: "Next",
    morePages: "More pages",
    goToPrevious: "Go to previous page",
    goToNext: "Go to next page",
  }
};

function Pagination({
  className,
  lang,
  ...props
}) {
  const detectedLang = useLanguage();
  const currentLang = lang || detectedLang;
  const isRTL = currentLang === 'ar';

  return (
    <nav
      role="navigation"
      aria-label={translations[currentLang].pagination}
      data-slot="pagination"
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props} />
  );
}

function PaginationContent({
  className,
  ...props
}) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props} />
  );
}

function PaginationItem({
  ...props
}) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  lang,
  ...props
}) {
  const detectedLang = useLanguage();
  const currentLang = lang || detectedLang;

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      data-lang={currentLang}
      className={cn(buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }), className)}
      {...props} />
  );
}

function PaginationPrevious({
  className,
  lang,
  ...props
}) {
  const detectedLang = useLanguage();
  const currentLang = lang || detectedLang;
  const isRTL = currentLang === 'ar';

  return (
    <PaginationLink
      aria-label={translations[currentLang].goToPrevious}
      size="default"
      lang={currentLang}
      className={cn(
        "gap-1 px-2.5",
        isRTL ? "sm:pr-2.5" : "sm:pl-2.5",
        className
      )}
      {...props}
    >
      {isRTL ? (
        <>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="hidden sm:block">{translations[currentLang].previous}</span>
        </>
      ) : (
        <>
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="hidden sm:block">{translations[currentLang].previous}</span>
        </>
      )}
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  lang,
  ...props
}) {
  const detectedLang = useLanguage();
  const currentLang = lang || detectedLang;
  const isRTL = currentLang === 'ar';

  return (
    <PaginationLink
      aria-label={translations[currentLang].goToNext}
      size="default"
      lang={currentLang}
      className={cn(
        "gap-1 px-2.5",
        isRTL ? "sm:pl-2.5" : "sm:pr-2.5",
        className
      )}
      {...props}
    >
      {isRTL ? (
        <>
          <span className="hidden sm:block">{translations[currentLang].next}</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </>
      ) : (
        <>
          <span className="hidden sm:block">{translations[currentLang].next}</span>
          <ChevronRightIcon className="h-4 w-4" />
        </>
      )}
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  lang,
  ...props
}) {
  const detectedLang = useLanguage();
  const currentLang = lang || detectedLang;

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{translations[currentLang].morePages}</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}