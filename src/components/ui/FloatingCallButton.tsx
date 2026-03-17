import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] lg:hidden animate-bounce-subtle">
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-[0_0_30px_rgba(217,119,6,0.5)] border-2 border-white/20 p-0 mb-20"
        asChild
      >
        <a href="tel:8777921410" aria-label="Call Erie PA Heating Specialists Now">
          <Phone className="w-8 h-8 animate-pulse" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCallButton;
