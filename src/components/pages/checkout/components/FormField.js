import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

export function FormField({ label, id, type = "text", placeholder, value, onChange, required = false }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input 
        id={id} 
        type={type}
        placeholder={placeholder} 
        className="mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}