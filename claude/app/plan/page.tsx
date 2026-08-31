import { Suspense } from "react";
import NavMenu from "@/components/NavMenu";
import CategoryAccordion from "@/components/CategoryAccordion";
import { PLAN_ITEMS } from "@/lib/data";

export default function PlanPage() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={null}>
        <CategoryAccordion
          title="계획정보"
          subtitle="월별 계획 / 주별 계획 / 개발 계획을 확인하세요."
          items={PLAN_ITEMS}
        />
      </Suspense>
    </>
  );
}
