import { CheckCircle2 } from "lucide-react";

export function StepProgress({ steps, current }) {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${index + 1 <= current
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
                }
              `}>
                {index + 1 < current ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span className={`
                text-sm
                ${ index + 1 <= current 
                  ? 'text-foreground' 
                  : 'text-muted-foreground'
                }
              `}>
                {step}
              </span>
              {index < steps.length - 1 && (
                <div className="h-px w-16 bg-border"></div>
              )}  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}