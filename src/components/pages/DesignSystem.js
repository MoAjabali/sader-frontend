"use client"

import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { AlertCircle, CheckCircle, Info, XCircle, Leaf, ShoppingBag, LayoutDashboard, Home } from "lucide-react";
import Link from "next/link";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌿</span>
                </div>
                <div>
                  <h1 className="text-xl">Seeder Design System</h1>
                  <p className="text-sm text-muted-foreground">سِدر | UI/UX Design System</p>
                </div>
              </Link>
            </div>
            <Badge className="bg-primary text-primary-foreground">v1.0.0</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-primary">Complete E-commerce Design System</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A modern, organic, and minimalist design system for Seeder - an e-commerce platform 
              specializing in organic and natural products. This system includes comprehensive UI 
              components, color palettes, typography, and complete page templates for both public 
              storefront and admin dashboard.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/home" className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2" />
                  View Storefront
                </Link>
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90" asChild>
                <Link href="/dashboard" className="flex items-center">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Tabs defaultValue="colors" className="mb-16">
          <TabsList className="mb-8">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors">
            <h2 className="mb-6 text-primary">Brand Colors</h2>
            
            {/* Primary Colors */}
            <div className="mb-8">
              <h3 className="mb-4">Primary Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-32 bg-[#006539] rounded-xl shadow-sm flex items-end p-4">
                    <span className="text-white text-sm">Primary</span>
                  </div>
                  <p className="text-sm">#006539</p>
                  <p className="text-xs text-muted-foreground">Nature, Growth, Freshness</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-32 bg-[#f29000] rounded-xl shadow-sm flex items-end p-4">
                    <span className="text-white text-sm">Secondary</span>
                  </div>
                  <p className="text-sm">#f29000</p>
                  <p className="text-xs text-muted-foreground">Vitality, Energy, Health</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-32 bg-accent rounded-xl shadow-sm border flex items-end p-4">
                    <span className="text-foreground text-sm">Accent</span>
                  </div>
                  <p className="text-sm">#e9f5ef</p>
                  <p className="text-xs text-muted-foreground">Light Backgrounds</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-32 bg-white rounded-xl shadow-sm border flex items-end p-4">
                    <span className="text-foreground text-sm">Background</span>
                  </div>
                  <p className="text-sm">#ffffff</p>
                  <p className="text-xs text-muted-foreground">Clean, Minimal</p>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-destructive rounded-xl shadow-sm flex items-center justify-center">
                    <XCircle className="h-6 w-6 text-destructive-foreground" />
                  </div>
                  <p className="text-sm">Destructive</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-20 bg-primary rounded-xl shadow-sm flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm">Success</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-20 bg-secondary rounded-xl shadow-sm flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <p className="text-sm">Warning</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-20 bg-accent rounded-xl shadow-sm border flex items-center justify-center">
                    <Info className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <p className="text-sm">Info</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography">
            <h2 className="mb-6 text-primary">Typography System</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="mb-4">Font Family</h3>
                <p className="text-lg mb-2">GE SS Unique (Arabic & English)</p>
                <p className="text-muted-foreground">
                  A clean, modern typeface supporting both Arabic and English languages, 
                  perfect for bilingual content.
                </p>
              </div>

              <div>
                <h3 className="mb-4">Heading Styles</h3>
                <div className="space-y-4 bg-accent p-6 rounded-xl">
                  <div>
                    <h1>Heading 1 - Large Display</h1>
                    <p className="text-sm text-muted-foreground">Used for hero sections and main page titles</p>
                  </div>
                  <div>
                    <h2>Heading 2 - Section Title</h2>
                    <p className="text-sm text-muted-foreground">Used for major section headings</p>
                  </div>
                  <div>
                    <h3>Heading 3 - Subsection</h3>
                    <p className="text-sm text-muted-foreground">Used for subsections and card titles</p>
                  </div>
                  <div>
                    <h4>Heading 4 - Component Title</h4>
                    <p className="text-sm text-muted-foreground">Used for smaller component headings</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Body Text</h3>
                <div className="space-y-3 bg-accent p-6 rounded-xl">
                  <p className="text-lg">Large body text for emphasis and introductions</p>
                  <p>Regular body text for standard content and descriptions</p>
                  <p className="text-sm">Small text for captions, labels, and secondary information</p>
                  <p className="text-xs">Extra small text for metadata and fine print</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Bilingual Example</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-accent p-6 rounded-xl">
                    <h3 className="mb-2">English Content</h3>
                    <p className="text-muted-foreground">
                      Organic products for a healthier lifestyle
                    </p>
                  </div>
                  <div className="bg-accent p-6 rounded-xl" dir="rtl">
                    <h3 className="mb-2">المحتوى العربي</h3>
                    <p className="text-muted-foreground">
                      منتجات عضوية لحياة أكثر صحة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components">
            <h2 className="mb-6 text-primary">UI Components</h2>
            
            <div className="space-y-8">
              {/* Buttons */}
              <div>
                <h3 className="mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-3 bg-accent p-6 rounded-xl">
                  <Button className="bg-primary hover:bg-primary/90">Primary Button</Button>
                  <Button className="bg-secondary hover:bg-secondary/90">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="mb-4">Badges</h3>
                <div className="flex flex-wrap gap-3 bg-accent p-6 rounded-xl">
                  <Badge className="bg-primary text-primary-foreground">Organic</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                  <Badge variant="outline">Featured</Badge>
                  <Badge variant="destructive">Sold Out</Badge>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <h3 className="mb-4">Input Fields</h3>
                <div className="space-y-4 bg-accent p-6 rounded-xl max-w-md">
                  <Input placeholder="Default input" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Disabled input" disabled />
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="mb-4">Cards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Card content with rounded corners and soft shadows for a natural, 
                        elevated look.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary border-2">
                    <CardHeader>
                      <CardTitle className="text-primary">Featured Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Highlighted card with primary border for emphasis.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Pages Tab */}
          <TabsContent value="pages">
            <h2 className="mb-6 text-primary">Complete Pages</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-4">Public Storefront</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/home" className="hover:text-primary transition-colors">
                          Home Page
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Hero section, featured products, categories, and CTA
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/products" className="hover:text-primary transition-colors">
                          Product Listing
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Grid layout with filters, sorting, and pagination
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <Info className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/product/1" className="hover:text-primary transition-colors">
                          Product Detail
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Image gallery, specs, reviews, and related products
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                        <ShoppingBag className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/cart" className="hover:text-primary transition-colors">
                          Shopping Cart
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cart items, quantity adjustment, and summary
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/checkout" className="hover:text-primary transition-colors">
                          Checkout
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Multi-step checkout with shipping and payment
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Admin Dashboard</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2">
                        <Link href="/dashboard" className="hover:text-primary transition-colors">
                          Dashboard Home
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        KPIs, charts, recent orders, and analytics overview
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 opacity-60">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                        <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h4 className="mb-2">Products Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Add, edit, and manage product inventory
                      </p>
                      <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 opacity-60">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                        <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h4 className="mb-2">Orders Management</h4>
                      <p className="text-sm text-muted-foreground">
                        View and process customer orders
                      </p>
                      <Badge variant="outline" className="mt-2">Coming Soon</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="mb-6 text-primary">Design Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">🌿 Natural & Organic</h3>
                <p className="text-sm text-muted-foreground">
                  Rounded shapes, soft shadows, and nature-inspired colors create a warm, 
                  welcoming feel that reflects our organic products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">✨ Clean & Minimal</h3>
                <p className="text-sm text-muted-foreground">
                  Generous whitespace, clear typography, and uncluttered layouts ensure 
                  products and content remain the focus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">🌍 Bilingual Support</h3>
                <p className="text-sm text-muted-foreground">
                  Full RTL and LTR support with GE SS Unique font ensures seamless 
                  Arabic and English experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}