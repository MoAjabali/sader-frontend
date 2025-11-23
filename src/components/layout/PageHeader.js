export function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-primary mb-2 font-bold">{title}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}