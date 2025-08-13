const WorkspaceFeatures = () => {
  const features = [
    "Drag-and-drop modules",
    "Real-time collaboration", 
    "Secure data vault"
  ];

  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-muted-foreground">
          <div className="w-1 h-1 bg-primary rounded-full"></div>
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default WorkspaceFeatures;