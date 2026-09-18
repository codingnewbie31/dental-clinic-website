"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminNavItem {
  href: string;
  label: string;
  icon: string;
}

const adminNav: AdminNavItem[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/admin/appointments", label: "Appointments", icon: "📅" },
  { href: "/admin/doctors", label: "Doctors", icon: "👨‍⚕️" },
  { href: "/admin/services", label: "Services", icon: "🦷" },
  { href: "/admin/patients", label: "Patients", icon: "👥" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "⭐" },
  { href: "/admin/gallery", label: "Gallery", icon: "🖼️" },
  { href: "/admin/content", label: "Content", icon: "📝" },
  { href: "/admin/reports", label: "Reports", icon: "📈" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close on Escape + lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (!isSidebarOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  // Login page gets no sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const closeSidebar = () => setIsSidebarOpen(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="min-h-screen bg-clinic-ivory">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-clinic-sage/30 bg-white px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-clinic-teal text-sm text-white">
            🦷
          </div>
          <span className="font-display font-semibold text-clinic-charcoal">
            Admin Panel
          </span>
        </div>
        <button
          onClick={() => setIsSidebarOpen((open) => !open)}
          className="text-2xl text-clinic-charcoal"
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
          aria-controls="admin-sidebar"
        >
          ☰
        </button>
      </div>

      <div className="flex">
        {/* Sidebar: off-canvas drawer on mobile, sticky column on desktop */}
        <aside
          id="admin-sidebar"
          className={`fixed left-0 top-0 z-50 flex h-screen w-64 shrink-0 flex-col border-r border-clinic-sage/30 bg-white transition-transform duration-300 ease-out lg:sticky lg:z-auto lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-clinic-sage/30 p-6">
            <Link
              href="/admin/dashboard"
              onClick={closeSidebar}
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clinic-teal text-white">
                🦷
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-clinic-charcoal">
                  Dental Clinic
                </p>
                <p className="text-xs text-clinic-charcoal/50">Admin Panel</p>
              </div>
            </Link>
            <button
              onClick={closeSidebar}
              className="text-xl text-clinic-charcoal/60 lg:hidden"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>

          {/* Scrolls independently so it never collides with the footer link */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {adminNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-clinic-teal text-white"
                      : "text-clinic-charcoal/70 hover:bg-clinic-teal/5 hover:text-clinic-teal"
                  }`}
                >
                  <span className="text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-clinic-sage/30 p-4">
            <Link
              href="/"
              onClick={closeSidebar}
              className="flex items-center gap-2 px-4 py-2 text-sm text-clinic-charcoal/60 transition-colors hover:text-clinic-teal"
            >
              <span aria-hidden="true">←</span> Back to Website
            </Link>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            onClick={closeSidebar}
            className="fixed inset-0 z-40 bg-clinic-charcoal/30 lg:hidden"
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <main className="min-w-0 flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}