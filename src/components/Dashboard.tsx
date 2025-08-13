import { Search, ShieldCheck, BarChart3, User, Clipboard, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-workspace-dashboard-bg rounded-xl p-6 max-w-3xl mx-auto shadow-2xl border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground">TrustNet</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-workspace-dashboard-item border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="w-8 h-8 bg-workspace-dashboard-item rounded-full border border-white/10"></div>
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-2 min-w-[180px]">
          <div className="flex items-center gap-3 p-3 bg-workspace-dashboard-item rounded-lg">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Inventory</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-workspace-dashboard-item rounded-lg transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm">Profile</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-workspace-dashboard-item rounded-lg transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm">Copy City</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-workspace-dashboard-item rounded-lg transition-colors">
            <Clipboard className="w-4 h-4" />
            <span className="text-sm">Tasks</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Secure Login */}
          <div className="bg-workspace-dashboard-item rounded-lg p-4 border border-white/5">
            <h3 className="text-sm font-medium text-foreground mb-3">Secure Login</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Capitar</span>
                <div className="w-2 h-2 bg-workspace-success-green rounded-full"></div>
              </div>
              <div className="text-xs text-muted-foreground">Secure Document</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Tasks</span>
                <div className="w-2 h-2 bg-workspace-success-green rounded-full"></div>
              </div>
              <div className="text-xs text-muted-foreground">Organized</div>
              <div className="text-xs text-muted-foreground">Task synced</div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-workspace-dashboard-item rounded-lg p-4 border border-white/5">
            <h3 className="text-sm font-medium text-foreground mb-3">Analytics</h3>
            <div className="text-2xl font-bold text-workspace-success-green mb-1">+15.2%</div>
            <div className="text-xs text-muted-foreground mb-3">to Return</div>
            <div className="h-16 bg-gradient-to-r from-workspace-chart-blue/20 to-workspace-success-green/20 rounded-md flex items-end justify-end p-2">
              <div className="flex items-end gap-1">
                <div className="w-1 h-4 bg-workspace-chart-blue rounded-full"></div>
                <div className="w-1 h-6 bg-workspace-chart-blue rounded-full"></div>
                <div className="w-1 h-8 bg-workspace-chart-blue rounded-full"></div>
                <div className="w-1 h-5 bg-workspace-chart-blue rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Date Vault */}
          <div className="bg-workspace-dashboard-item rounded-lg p-4 border border-white/5">
            <h3 className="text-sm font-medium text-foreground mb-3">Date Vault</h3>
            <div className="text-xs text-muted-foreground mb-2">Result of most</div>
            <div className="text-xs text-muted-foreground">Recent BLOC</div>
          </div>

          {/* Tasks */}
          <div className="bg-workspace-dashboard-item rounded-lg p-4 border border-white/5">
            <h3 className="text-sm font-medium text-foreground mb-3">Tasks</h3>
            <div className="text-xs text-muted-foreground mb-2">Setup processes</div>
            <div className="text-xs text-muted-foreground">Submitted</div>
            <div className="mt-4">
              <div className="text-sm font-medium text-foreground">Ahmad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;