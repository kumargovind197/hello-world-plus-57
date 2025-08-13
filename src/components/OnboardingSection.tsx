import { Calculator, Grid3X3, Users, CheckCircle } from "lucide-react";

const OnboardingSection = () => {
  const steps = [
    {
      icon: Calculator,
      title: "Sign in securely",
      description: "Access via OTP or Google"
    },
    {
      icon: Grid3X3,
      title: "Choose your workspace", 
      description: "Customize your dashboard"
    },
    {
      icon: Grid3X3,
      title: "Customize your dashboard",
      description: "Start tune your tantle."
    },
    {
      icon: Users,
      title: "Invite collaborators",
      description: "Invite you collaborators"
    }
  ];

  return (
    <div className="py-16 px-6">
      {/* Onboard in Minutes Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Onboard in Minutes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-workspace-dashboard-item rounded-lg flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by Builders Worldwide Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Trusted by<br />
              Builders Worldwide
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Verification Badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-workspace-dashboard-item px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Verified User</span>
              </div>
              <div className="flex items-center gap-2 bg-workspace-dashboard-item px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Verified</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-workspace-dashboard-item p-6 rounded-lg">
              <p className="text-lg italic mb-4">
                "TrustNEC has transformed how we work, it's reliable and efficient for our team collaboration."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;