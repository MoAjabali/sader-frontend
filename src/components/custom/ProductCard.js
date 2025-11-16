"use client"

import { ImageWithFallback } from "@components/custom/ImageWithFallback";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function ProductCard({ 
  id,
  name, 
  nameAr,
  price, 
  image, 
  category, 
  isOrganic = true,
  isFeatured,
  discount,
  showQuickAdd = true
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement add to cart logic
    console.log('تمت الإضافة إلى السلة:', id);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // TODO: Implement wishlist logic
    console.log('تم تبديل المفضلة:', id);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
      dir="rtl"
    >
      <Link href={`/product/${id}`} className="block">
        {/* حاوية الصورة */}
        <div className="relative aspect-square overflow-hidden bg-accent">
          <ImageWithFallback
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* الشارات */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isOrganic && (
              <Badge className="bg-primary text-primary-foreground border-0 text-xs">
                عضوي
              </Badge>
            )}
            {discount && (
              <Badge className="bg-secondary text-secondary-foreground border-0 text-xs">
                خصم {discount}%
              </Badge>
            )}
            {isFeatured && (
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
                مميز
              </Badge>
            )}
          </div>

          {/* زر المفضلة */}
          <Button
            size="icon"
            variant="ghost"
            onClick={handleWishlist}
            className={`absolute top-3 left-3 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${
              isWishlisted ? 'text-destructive' : 'text-muted-foreground'
            }`}
          >
            <Heart 
              className={`h-5 w-5 transition-all ${
                isWishlisted ? 'fill-current' : ''
              }`} 
            />
          </Button>

          {/* إضافة سريعة إلى السلة - تظهر عند التمرير */}
          {showQuickAdd && (
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/10 to-transparent">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 ml-2" />
                أضف إلى السلة
              </Button>
            </div>
          )}
        </div>

        {/* معلومات المنتج */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="mb-1 line-clamp-2 min-h-[3rem] font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
            {nameAr && (
              <span className="block text-sm text-muted-foreground mt-1" dir="rtl">
                {nameAr}
              </span>
            )}
          </h3>
          
          <div className="flex items-center gap-2 mt-2">
            {discount ? (
              <>
                <span className="text-lg font-bold text-primary">${discountedPrice.toFixed(2)}</span>
                <span className="text-muted-foreground line-through text-sm">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            )}
          </div>

          {/* التقييم (يمكن إضافته لاحقاً) */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-amber-400">
              {"★".repeat(4)}
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-xs text-muted-foreground">(4.0)</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// مكون مساعد لمجموعة Product Cards
export function ProductGrid({ children, cols = 4 }) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  return (
    <div className={`grid ${gridCols[cols]} gap-6`}>
      {children}
    </div>
  );
}

// مكون للهيكل العريض (مثال للمنتجات المميزة)
export function ProductCardWide({ 
  id,
  name, 
  nameAr,
  price, 
  image, 
  category, 
  isOrganic = true,
  discount
}) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
      dir="rtl"
    >
      <Link href={`/product/${id}`} className="flex flex-col md:flex-row">
        {/* حاوية الصورة */}
        <div className="relative md:w-1/3 aspect-square md:aspect-auto overflow-hidden bg-accent">
          <ImageWithFallback
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* الشارات */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isOrganic && (
              <Badge className="bg-primary text-primary-foreground border-0 text-xs">
                عضوي
              </Badge>
            )}
            {discount && (
              <Badge className="bg-secondary text-secondary-foreground border-0 text-xs">
                خصم {discount}%
              </Badge>
            )}
          </div>
        </div>

        {/* معلومات المنتج */}
        <div className="p-6 md:w-2/3">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
            {category}
          </p>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          {nameAr && (
            <p className="text-muted-foreground mb-4" dir="rtl">
              {nameAr}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              {discount ? (
                <>
                  <span className="text-2xl font-bold text-primary">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground line-through">
                    ${price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  ${price.toFixed(2)}
                </span>
              )}
            </div>
            
            <Button className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 ml-2" />
              أضف إلى السلة
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}