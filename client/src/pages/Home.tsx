import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to Your React TypeScript App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            This is a minimal starter template using React with TypeScript, 
            featuring modern tooling and a robust component library.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default">
              Get Started
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
