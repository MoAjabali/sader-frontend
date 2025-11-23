import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { Slider } from "@components/ui/slider";
import { Label } from "@components/ui/label";
import SaudiRiyalIcon from "@components/custom/SaudiRiyalSymbol";
import { useState } from "react";

export function FilterSidebar({ 
  showFilters, 
  setShowFilters,
  className
}) {
  return (
    <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0 ${className} `}>
      <div className="bg-white rounded-2xl border p-6 sticky top-24">
        <FilterHeader setShowFilters={setShowFilters} />
        
        <CategoryFilter/>
        <PriceFilter />
        <CertificationFilter />

        <Button className="w-full bg-primary hover:bg-primary/90">
          تطبيق الفلاتر
        </Button>
      </div>
    </aside>
  );
}

function CategoryFilter() {
  const categories = ["الكل", "مواد غذائية", "العناية بالشخصية", "الأمومة والطفولة", "المكملات الغذائية"];
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const handleCategoryChange = (category) => {
    if (category === "الكل") {
      if (allSelected) {
        setSelectedCategories([]);
        setAllSelected(false);
      } else {
        setSelectedCategories(categories.filter(cat => cat !== "الكل"));
        setAllSelected(true);
      }
    } else {
      let newSelected;
      
      if (selectedCategories.includes(category)) {
        newSelected = selectedCategories.filter(cat => cat !== category);
      } else {
        newSelected = [...selectedCategories, category];
      }
      
      setSelectedCategories(newSelected);
      
      const allOtherCategories = categories.filter(cat => cat !== "الكل");
      const allOtherSelected = allOtherCategories.every(cat => newSelected.includes(cat));
      setAllSelected(allOtherSelected);
    }
  };

  const isCategorySelected = (category) => {
    if (category === "الكل") {
      return allSelected;
    }
    return selectedCategories.includes(category);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium">الفئات</h4>
        <span className="text-xs text-muted-foreground">
          {allSelected ? "الكل" : `${selectedCategories.length} مختار`}
        </span>
      </div>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox 
              id={category}
              checked={isCategorySelected(category)}
              onCheckedChange={() => handleCategoryChange(category)}
              className="bg-accent border-primary/50"
            />
            <Label 
              htmlFor={category} 
              className="text-sm cursor-pointer font-normal flex-1"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}


function PriceFilter() {
  const [priceRange, setPriceRange] = useState([250, 750]);

  return (
    <div className="mb-6 space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none">نطاق السعر</h4>
        <p className="text-sm text-muted-foreground">
          اختر نطاق السعر المناسب لك
        </p>
      </div>

      {/* <div className="scale-[-1]"> إضافة هذه الطبقة لعكس السلايدر */}
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          min={0}
          step={10}
          className="mb-4  direction-rtl"
        />
      {/* </div> */}

      <div className="flex items-center justify-between pt-2">
        <div className="text-lg font-bold">{priceRange[0]}<SaudiRiyalIcon color="black" size={18}/></div>
        <div className="text-muted-foreground">-</div>
        <div className="text-lg font-bold">{priceRange[1]}<SaudiRiyalIcon color="black" size={18}/></div>
      </div>
    </div>
  );
}

function CertificationFilter() {
  const [selectedCertifications, setSelectedCertifications] = useState(["organic"]);

  const certifications = [
    { id: "organic", label: "معتمد عضوي" },
    { id: "vegan", label: "نباتي" },
    { id: "cruelty-free", label: "خالي من القسوة" }
  ];

  const handleCertificationChange = (id, checked) => {
    if (checked) {
      setSelectedCertifications(prev => [...prev, id]);
    } else {
      setSelectedCertifications(prev => prev.filter(certId => certId !== id));
    }
  };

  const isCertificationSelected = (id) => {
    return selectedCertifications.includes(id);
  };

  function CheckboxItem({ id, label }) {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox 
          id={id} 
          checked={isCertificationSelected(id)}
          onCheckedChange={(checked) => handleCertificationChange(id, checked)}
          className="bg-accent border-primary/50"
        />
        <Label htmlFor={id} className="text-sm cursor-pointer flex-1">
          {label}
        </Label>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium">الشهادات</h4>
        <span className="text-xs text-muted-foreground">
          {selectedCertifications.length} مختار
        </span>
      </div>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <CheckboxItem 
            key={cert.id}
            id={cert.id} 
            label={cert.label} 
                      
          />
        ))}
      </div>
    </div>
  );
}


function FilterHeader({ setShowFilters }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h3>الفلاتر</h3>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowFilters(false)}
        className="lg:hidden"
      >
        إغلاق
      </Button>
    </div>
  );
}
