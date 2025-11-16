"use client"

import { useState } from 'react'
import Image from 'next/image'

// صورة SVG مشفرة base64 تظهر عندما تفشل الصورة الأصلية
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props) {
  // حالة لتتبع إذا حدث خطأ في تحميل الصورة
  const [didError, setDidError] = useState(false)

  // دالة تُستدعى عندما تفشل الصورة في التحميل
  const handleError = () => {
    setDidError(true)
  }

  // استخراج الخصائص من props
  const { src, alt, style, className, ...rest } = props

  // إذا حدث خطأ، اعرض الصورة البديلة
  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className || ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image 
            src={ERROR_IMG_SRC} 
            alt="Error loading image" 
            {...rest} 
            data-original-url={src} 
          />
        </div>
      </div>
    )
  }

  // إذا لم يحدث خطأ، اعرض الصورة الأصلية
  return (
    <Image 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError} 
    />
  )
}