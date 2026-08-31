"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export default function NavMenu() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveId(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveId(null), 150);
  };

  const activeItem = NAV_ITEMS.find((n) => n.id === activeId) ?? null;

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-white/90 backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="text-base font-bold tracking-tight text-toss-navy md:text-lg">
          S.PKG 제조팀
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} onMouseEnter={() => openMenu(item.id)}>
              <Link
                href={item.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                  activeId === item.id
                    ? "bg-toss-gray-100 text-toss-blue"
                    : "text-toss-gray-700 hover:text-toss-navy"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-toss-navy transition-transform duration-200 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-toss-navy transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-toss-navy transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* desktop hover mega panel */}
      <div
        className={`hidden overflow-hidden border-t border-toss-gray-200 bg-white shadow-xl transition-[grid-template-rows] duration-300 ease-toss md:grid ${
          activeId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        onMouseEnter={() => activeItem && openMenu(activeItem.id)}
      >
        <div className="min-h-0">
          {activeItem && (
            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-10 py-8">
              {activeItem.items.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="group rounded-2xl p-5 transition-colors duration-200 hover:bg-toss-gray-50"
                >
                  <p className="text-[17px] font-semibold text-toss-navy transition-colors duration-200 group-hover:text-toss-blue">
                    {sub.label}
                  </p>
                  <p className="mt-1.5 text-sm text-toss-gray-500">{sub.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* mobile accordion menu */}
      <div
        className={`grid overflow-hidden border-t border-toss-gray-200 bg-white transition-[grid-template-rows] duration-300 ease-toss md:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col px-6 py-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="border-b border-toss-gray-100 last:border-none">
                <button
                  className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-toss-navy"
                  onClick={() => setMobileExpanded((v) => (v === item.id ? null : item.id))}
                >
                  {item.label}
                  <span
                    className={`text-toss-gray-400 transition-transform duration-200 ${
                      mobileExpanded === item.id ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-toss ${
                    mobileExpanded === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="flex flex-col gap-1 pb-4 pl-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="rounded-xl px-3 py-2.5 text-[15px] text-toss-gray-600 hover:bg-toss-gray-50 hover:text-toss-blue"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileExpanded(null);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
