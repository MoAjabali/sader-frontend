"use client";

import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Bell,
  LogOut
} from "lucide-react";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", badge: null },
  { icon: Package, label: "المنتجات", badge: null },
  { icon: ShoppingCart, label: "الطلبات", badge: "12" },
  { icon: Users, label: "العملاء", badge: null },
  { icon: BarChart3, label: "التقارير", badge: null },
  { icon: Bell, label: "الإشعارات", badge: "3" },
  { icon: Settings, label: "الإعدادات", badge: null },
];

export function AdminSidebar({ activeItem = "لوحة التحكم", onItemClick }) {
  return (
    <aside className="w-64 bg-white border-r min-h-screen sticky top-0 flex flex-col" dir="rtl">
      {/* الشعار */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white">🌿</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-primary">سِدر</span>
            <span className="text-xs text-muted-foreground">لوحة الإدارة</span>
          </div>
        </div>
      </div>

      {/* التنقل */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => onItemClick?.(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeItem === item.label
                    ? 'bg-primary text-white'
                    : 'hover:bg-accent text-foreground'
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="flex-1 text-right">{item.label}</span>
                {item.badge && (
                  <Badge 
                    className={
                      activeItem === item.label
                        ? 'bg-white text-primary'
                        : 'bg-secondary text-secondary-foreground'
                    }
                  >
                    {item.badge}
                  </Badge>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* الملف الشخصي */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-accent mb-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white">مد</span>
          </div>
          <div className="flex-1 min-w-0 text-right">
            <p className="text-sm truncate">مدير النظام</p>
            <p className="text-xs text-muted-foreground truncate">admin@seeder.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full" size="sm">
          <LogOut className="h-4 w-4 ml-2" />
          تسجيل الخروج
        </Button>
      </div>
    </aside>
  );
}