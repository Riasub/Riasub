import { Suspense } from "react";
import NavMenu from "@/components/NavMenu";
import CategoryAccordion from "@/components/CategoryAccordion";
import { EQUIPMENT_ITEMS } from "@/lib/data";

export default function EquipmentPage() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={null}>
        <CategoryAccordion
          title="설비정보"
          subtitle="A 공정 / B 공정 / 개발 공정 설비 현황을 확인하세요."
          items={EQUIPMENT_ITEMS}
        />
      </Suspense>
    </>
  );
}
