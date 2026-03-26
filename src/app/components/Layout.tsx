import { Outlet, NavLink, useLocation } from "react-router";
import { Home, Image, Layers, Smartphone, User, Settings, Bell } from "lucide-react";

const navItems = [
  { to: "/", label: "홈", icon: Home, emoji: "🏠" },
  { to: "/gallery", label: "갤러리", icon: Image, emoji: "🖼️" },
  { to: "/curation", label: "맞춤 레퍼런스", icon: Layers, emoji: "📎" },
  { to: "/demo", label: "데모 체험", icon: Smartphone, emoji: "✨" },
  { to: "/my", label: "MY", icon: User, emoji: "👤" },
  { to: "/admin", label: "관리자", icon: Settings, emoji: "⚙️" },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <header
        className="sticky top-0 z-50 bg-background border-b border-border"
        style={{ boxShadow: "0 1px 0 var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground rounded-full"
              style={{ borderRadius: "var(--radius-button)" }}
            >
              <span style={{ fontSize: "var(--text-label)" }}>🏠</span>
              <span
                className="text-background font-semibold"
                style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
              >
                Labsfolio
              </span>
            </div>
          </NavLink>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-3 py-1.5 transition-all ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: isActive ? 600 : 400,
                    borderRadius: "var(--radius)",
                  }}
                >
                  {item.label}
                  {item.to === "/admin" && (
                    <span
                      className="px-1 py-0.5 bg-chart-5 text-white rounded"
                      style={{ fontSize: "10px", lineHeight: 1 }}
                    >
                      Admin
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors text-accent">
              <Bell size={16} />
            </button>
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
              style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}
            >
              김
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}