import { Button } from "@/components/ui/button";
import ShieldIcon from "@/components/ShieldIcon";
import Dashboard from "@/components/Dashboard";
import WorkspaceFeatures from "@/components/WorkspaceFeatures";
import OnboardingSection from "@/components/OnboardingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-workspace-gradient text-foreground overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="flex items-center justify-between mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Your Workspace,<br />
                Your Way
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Your secure gateway to growth,<br />
                collaboration, and creation.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-foreground hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200"
                >
                  Explore Dashboard
                </Button>
              </div>
            </div>
          </div>

          {/* Right Shield Icon */}
          <div className="flex-shrink-0 ml-12">
            <ShieldIcon size={200} className="animate-fade-in-up delay-300" />
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="animate-fade-in-up delay-500">
          <Dashboard />
        </div>

        {/* Features */}
        <div className="animate-fade-in-up delay-700">
          <WorkspaceFeatures />
        </div>

        {/* Onboarding Section */}
        <div className="animate-fade-in-up delay-900">
          <OnboardingSection />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-workspace-chart-blue/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Index;
