import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Button
        size="lg"
        className="rounded-xl bg-sky-500 hover:bg-sky-600"
      >
        Start Building
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="rounded-xl"
      >
        <PlayCircle className="mr-2 h-4 w-4" />
        Explore Workspace
      </Button>
    </div>
  );
}