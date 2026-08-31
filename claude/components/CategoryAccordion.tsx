"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { CategoryItem } from "@/lib/data";

export default function CategoryAccordion({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: CategoryItem[];
}) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (tabParam && items.some((i) => i.id === tabParam)) {
      setOpenId(tabParam);
    }
  }, [tabParam, items]);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 md:pt-40">
      <div className="text-center">
        <h1 className="animate-fade-up text-3xl font-bold tracking-tight text-toss-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 animate-fade-up text-toss-gray-500 [animation-delay:0.1s]">{subtitle}</p>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        {items.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="animate-fade-up overflow-hidden rounded-3xl border border-toss-gray-200 bg-white"
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-6 text-left sm:px-8 sm:py-7"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>
                  <span className="block text-lg font-semibold text-toss-navy sm:text-xl">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-toss-gray-500">{item.description}</span>
                </span>
                <span
                  className={`ml-4 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-toss-gray-100 text-toss-gray-600 transition-all duration-300 ease-toss ${
                    isOpen ? "rotate-180 bg-toss-blue text-white" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-toss ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div className="border-t border-toss-gray-100 px-4 pb-6 pt-4 sm:px-6">
                    <div className="overflow-x-auto rounded-2xl border border-toss-gray-100">
                      <table className="w-full min-w-[480px] border-collapse text-sm">
                        <thead>
                          <tr className="bg-toss-gray-50">
                            {item.columns.map((col) => (
                              <th
                                key={col.key}
                                className="whitespace-nowrap px-4 py-3 text-left font-semibold text-toss-gray-700"
                              >
                                {col.label}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-t border-toss-gray-100 hover:bg-toss-gray-50">
                              {item.columns.map((col) => (
                                <td key={col.key} className="whitespace-nowrap px-4 py-3 text-toss-gray-800">
                                  {row[col.key]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-sm font-medium text-toss-gray-500 hover:text-toss-blue">
          ← 메인으로
        </Link>
      </div>
    </div>
  );
}
