import { Button } from "@components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

export function Toolbar({ productsCount, showFilters, setShowFilters }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <ProductsCount count={productsCount} />
      
      <div className="flex items-center gap-4">
        <FilterToggleButton 
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
        <SortSelect />
      </div>
    </div>
  );
}

function ProductsCount({ count }) {
  return (
    <p className="text-sm text-muted-foreground">
      عرض {count} منتج
    </p>
  );
}

function FilterToggleButton({ showFilters, setShowFilters }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setShowFilters(!showFilters)}
      className="lg:hidden"
    >
      <SlidersHorizontal className="h-4 w-4 ml-2" />
      الفلاتر
    </Button>
  );
}

export function SortSelect() {
  return (
    <Select defaultValue="featured">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="ترتيب حسب" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="featured">المميز</SelectItem>
        <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
        <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
        <SelectItem value="newest">الأحدث</SelectItem>
        <SelectItem value="popular">الأكثر شيوعاً</SelectItem>
      </SelectContent>
    </Select>
  );
}