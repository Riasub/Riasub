import { Suspense } from "react";
import NavMenu from "@/components/NavMenu";
import CategoryAccordion from "@/components/CategoryAccordion";
import { EFFICIENCY_ITEMS } from "@/lib/data";

export default function EfficiencyPage() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={null}>
        <CategoryAccordion
          title="효율정보"
          subtitle="A 공정 / B 공정 / 개발 공정 효율 지표를 확인하세요."
          items={EFFICIENCY_ITEMS}
        />
      </Suspense>
    </>
  );
}
