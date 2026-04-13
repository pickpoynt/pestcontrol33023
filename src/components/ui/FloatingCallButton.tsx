import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100] lg:hidden animate-bounce-subtle">
      <Button
        size="lg"
        className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_0_50px_rgba(220,38,38,0.5)] border-4 border-white/20 p-0"
        asChild
      >
        <a href="tel:3238801224" aria-label="CALL 33023 PEST FORCE DISPATCH NOW">
          <Phone className="w-10 h-10 animate-pulse fill-white/10" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCallButton;
