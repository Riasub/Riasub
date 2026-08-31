export type TableColumn = {
  key: string;
  label: string;
};

export type CategoryItem = {
  id: string;
  label: string;
  description: string;
  columns: TableColumn[];
  rows: Record<string, string | number>[];
};

export type NavSubItem = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  items: NavSubItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "plan",
    label: "계획정보",
    href: "/plan",
    items: [
      { label: "월별 계획", href: "/plan?tab=monthly", description: "월 단위 생산 계획과 Capa 대비 목표" },
      { label: "주별 계획", href: "/plan?tab=weekly", description: "주 단위 세부 생산 계획" },
      { label: "개발 계획", href: "/plan?tab=dev", description: "신규 개발 아이템 일정 및 진행률" },
    ],
  },
  {
    id: "equipment",
    label: "설비정보",
    href: "/equipment",
    items: [
      { label: "A 공정", href: "/equipment?tab=a", description: "A 공정 설비 가동 현황" },
      { label: "B 공정", href: "/equipment?tab=b", description: "B 공정 설비 가동 현황" },
      { label: "개발 공정", href: "/equipment?tab=dev", description: "개발 공정 설비 현황" },
    ],
  },
  {
    id: "efficiency",
    label: "효율정보",
    href: "/efficiency",
    items: [
      { label: "A 공정", href: "/efficiency?tab=a", description: "A 공정 효율 지표" },
      { label: "B 공정", href: "/efficiency?tab=b", description: "B 공정 효율 지표" },
      { label: "개발 공정", href: "/efficiency?tab=dev", description: "개발 공정 효율 지표" },
    ],
  },
];

const monthlyColumns: TableColumn[] = [
  { key: "month", label: "월" },
  { key: "planQty", label: "계획 수량" },
  { key: "capa", label: "Capa" },
  { key: "utilization", label: "가동률" },
  { key: "note", label: "비고" },
];

const monthlyRows: Record<string, string | number>[] = [
  { month: "1월", planQty: "128,000", capa: "150,000", utilization: "85.3%", note: "정상" },
  { month: "2월", planQty: "121,500", capa: "150,000", utilization: "81.0%", note: "설 연휴" },
  { month: "3월", planQty: "135,200", capa: "150,000", utilization: "90.1%", note: "정상" },
  { month: "4월", planQty: "140,800", capa: "150,000", utilization: "93.9%", note: "증산" },
  { month: "5월", planQty: "132,000", capa: "150,000", utilization: "88.0%", note: "정상" },
  { month: "6월", planQty: "138,400", capa: "150,000", utilization: "92.3%", note: "정상" },
];

const weeklyColumns: TableColumn[] = [
  { key: "week", label: "주차" },
  { key: "planQty", label: "계획 수량" },
  { key: "capa", label: "주간 Capa" },
  { key: "progress", label: "진행률" },
  { key: "note", label: "비고" },
];

const weeklyRows: Record<string, string | number>[] = [
  { week: "1주차", planQty: "31,200", capa: "35,000", progress: "89.1%", note: "정상" },
  { week: "2주차", planQty: "33,500", capa: "35,000", progress: "95.7%", note: "정상" },
  { week: "3주차", planQty: "29,800", capa: "35,000", progress: "85.1%", note: "설비 점검" },
  { week: "4주차", planQty: "34,100", capa: "35,000", progress: "97.4%", note: "정상" },
];

const devColumns: TableColumn[] = [
  { key: "item", label: "개발 항목" },
  { key: "stage", label: "단계" },
  { key: "startDate", label: "시작일" },
  { key: "endDate", label: "종료일" },
  { key: "progress", label: "진행률" },
];

const devRows: Record<string, string | number>[] = [
  { item: "신규 패키지 A", stage: "설계", startDate: "2026-01-05", endDate: "2026-03-31", progress: "60%" },
  { item: "신규 패키지 B", stage: "시험 생산", startDate: "2026-02-10", endDate: "2026-05-20", progress: "35%" },
  { item: "공정 개선 C", stage: "양산 이관", startDate: "2025-11-01", endDate: "2026-02-28", progress: "90%" },
];

export const PLAN_ITEMS: CategoryItem[] = [
  { id: "monthly", label: "월별 계획", description: "월 단위 생산 계획 대비 Capa 현황", columns: monthlyColumns, rows: monthlyRows },
  { id: "weekly", label: "주별 계획", description: "주 단위 세부 생산 계획 진행 현황", columns: weeklyColumns, rows: weeklyRows },
  { id: "dev", label: "개발 계획", description: "신규 개발 아이템 일정 및 진행 상황", columns: devColumns, rows: devRows },
];

const equipmentColumns: TableColumn[] = [
  { key: "name", label: "설비명" },
  { key: "status", label: "상태" },
  { key: "utilization", label: "가동률" },
  { key: "lastCheck", label: "최근 점검일" },
];

function equipmentRows(prefix: string): Record<string, string | number>[] {
  return [
    { name: `${prefix}-01호기`, status: "가동중", utilization: "92.4%", lastCheck: "2026-08-20" },
    { name: `${prefix}-02호기`, status: "가동중", utilization: "88.7%", lastCheck: "2026-08-18" },
    { name: `${prefix}-03호기`, status: "점검중", utilization: "0.0%", lastCheck: "2026-08-29" },
    { name: `${prefix}-04호기`, status: "가동중", utilization: "95.1%", lastCheck: "2026-08-22" },
  ];
}

export const EQUIPMENT_ITEMS: CategoryItem[] = [
  { id: "a", label: "A 공정", description: "A 공정 설비 가동 현황", columns: equipmentColumns, rows: equipmentRows("A") },
  { id: "b", label: "B 공정", description: "B 공정 설비 가동 현황", columns: equipmentColumns, rows: equipmentRows("B") },
  { id: "dev", label: "개발 공정", description: "개발 공정 설비 현황", columns: equipmentColumns, rows: equipmentRows("DEV") },
];

const efficiencyColumns: TableColumn[] = [
  { key: "process", label: "공정" },
  { key: "target", label: "목표 효율" },
  { key: "actual", label: "실제 효율" },
  { key: "gap", label: "편차" },
];

function efficiencyRows(prefix: string): Record<string, string | number>[] {
  return [
    { process: `${prefix} 라인 1`, target: "90.0%", actual: "88.2%", gap: "-1.8%p" },
    { process: `${prefix} 라인 2`, target: "90.0%", actual: "91.5%", gap: "+1.5%p" },
    { process: `${prefix} 라인 3`, target: "88.0%", actual: "85.9%", gap: "-2.1%p" },
  ];
}

export const EFFICIENCY_ITEMS: CategoryItem[] = [
  { id: "a", label: "A 공정", description: "A 공정 효율 지표", columns: efficiencyColumns, rows: efficiencyRows("A") },
  { id: "b", label: "B 공정", description: "B 공정 효율 지표", columns: efficiencyColumns, rows: efficiencyRows("B") },
  { id: "dev", label: "개발 공정", description: "개발 공정 효율 지표", columns: efficiencyColumns, rows: efficiencyRows("DEV") },
];
