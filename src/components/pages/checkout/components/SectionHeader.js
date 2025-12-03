export function SectionHeader({ step, title }) {
  return (
    <h3 className="mb-4 flex items-center gap-2">
      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
        {step}
      </span>
      {title}
    </h3>
  );
}