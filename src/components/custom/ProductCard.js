"use client"

import { ImageWithFallback } from "@components/custom/ImageWithFallback";
import { ShoppingCart, Heart} from "lucide-react";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export function ProductCard({ 
  id,
  name, 
  description,
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
    console.log('تمت الإضافة إلى السلة:', id);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    console.log('تم تبديل المفضلة:', id);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
      dir="rtl"
    >
      <Link href={`/products/${id}`} className="block">
        {/* حاوية الصورة مع جميع العناصر */}
        <ProductImageContainer 
          image={image}
          name={name}
          isOrganic={isOrganic}
          discount={discount}
          isFeatured={isFeatured}
          isWishlisted={isWishlisted}
          showQuickAdd={showQuickAdd}
          onWishlist={handleWishlist}
          onAddToCart={handleAddToCart}
        />
        
        {/* معلومات المنتج */}
        <ProductInfo 
          category={category}
          name={name}
          description={description}
          price={price}
          discountedPrice={discountedPrice}
          discount={discount}
        />
      </Link>
    </motion.div>
  );
}

function ProductImageContainer({
  image,
  name,
  isOrganic,
  discount,
  isFeatured,
  isWishlisted,
  showQuickAdd,
  onWishlist,
  onAddToCart
}) {
  return (
    <div className="relative aspect-square overflow-hidden bg-accent">
      <ImageWithFallback
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* الشارات في الأعلى */}
      <ProductBadges 
        isOrganic={isOrganic}
        discount={discount}
        isFeatured={isFeatured}
      />

      {/* زر المفضلة */}
      <WishlistButton 
        isWishlisted={isWishlisted}
        onWishlist={onWishlist}
      />

      {/* زر الإضافة السريعة */}
      {showQuickAdd && (
        <QuickAddButton onAddToCart={onAddToCart} />
      )}
    </div>
  );
}

function ProductBadges({ isOrganic, discount, isFeatured }) {
  return (
    <div className="absolute top-3 right-3 flex flex-col gap-2">
      {isOrganic && (
        <Badge className="bg-primary text-primary-foreground border-0 text-xs">
          معتمد عضويا
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
  );
}
function WishlistButton({ isWishlisted, onWishlist }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={onWishlist}
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
  );
}
function QuickAddButton({ onAddToCart }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3 lg:translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/10 to-transparent">
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg"
        onClick={onAddToCart}
      >
        <ShoppingCart className="h-4 w-4 ml-2" />
        أضف إلى السلة
      </Button>
    </div>
  );
}

function ProductInfo({ 
  category, 
  name, 
  description, 
  price, 
  discountedPrice, 
  discount 
}) {
  return (
    <div className="p-4">
      <ProductCategory category={category} />
      <ProductName name={name} description={description} />
      <ProductPricing 
        price={price}
        discountedPrice={discountedPrice}
        discount={discount}
      />
      <ProductRating />
    </div>
  );
}

function ProductCategory({ category }) {
  return (
    <p className="text-xs text-muted-foreground mb-1">{category}</p>
  );
}
function ProductName({ name, description }) {
  return (
    <h3 className="mb-1 line-clamp-2 min-h-[3rem] font-medium text-foreground group-hover:text-primary transition-colors">
      {name}
      {description && (
        <span className="block text-sm text-muted-foreground mt-1" dir="rtl">
          {description}
        </span>
      )}
    </h3>
  );
}
function ProductPricing({ price, discountedPrice, discount }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      {discount ? (
        <>
          <span className="text-lg font-bold text-primary">
            {discountedPrice.toFixed(2)}<SaudiRiyalIcon color="#006539" size={18}/>
          </span>
          <span className="text-muted-foreground line-through text-sm">
            {price.toFixed(2)}<SaudiRiyalIcon color="#717182" size={12}/>
          </span>
        </>
      ) : (
        <span className="text-lg font-bold text-primary">
          {price.toFixed(2)}<SaudiRiyalIcon color="#006539" size={18}/>
        </span>
      )}
    </div>
  );
}
function ProductRating() {
  return (
    <div className="flex items-center gap-1 mt-2">
      <div className="flex text-amber-400">
        {"★".repeat(4)}
        <span className="text-gray-300">★</span>
      </div>
      <span className="text-xs text-muted-foreground">(4.0)</span>
    </div>
  );
}