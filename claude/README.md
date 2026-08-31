# S.PKG Capa Fit

Toss Impact(toss.im/impact) 스타일 UI를 참고한 Next.js(App Router) + TypeScript + Tailwind CSS 프로젝트입니다.

## 실행 방법

Node.js 18 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 구조

- `app/page.tsx` — 메인 페이지 (좌상단 "S.PKG 제조팀", 중앙 "S.PKG Capa Fit", 우상단 3개 메뉴 호버 드롭다운)
- `components/NavMenu.tsx` — 상단 네비게이션. 데스크톱에서는 메뉴에 마우스를 올리면 하위 항목 패널이 아래로 펼쳐지고, 모바일에서는 아코디언으로 동작합니다.
- `app/plan/page.tsx`, `app/equipment/page.tsx`, `app/efficiency/page.tsx` — 각각 계획정보 / 설비정보 / 효율정보 페이지. 가운데 큰 타이틀 아래 항목들이 세로로 나열되고, 클릭하면 아코디언으로 계획값 표가 펼쳐집니다. 상단 메뉴의 하위 항목(예: 월별 계획)을 클릭하면 `?tab=` 쿼리로 해당 표가 자동으로 열립니다.
- `lib/data.ts` — 네비게이션 구조와 표에 들어가는 데이터(현재는 예시 데이터). 실제 데이터로 교체하거나 API 연동으로 바꿔서 사용하세요.

## 커스터마이징

- 예시 데이터는 `lib/data.ts`의 `PLAN_ITEMS`, `EQUIPMENT_ITEMS`, `EFFICIENCY_ITEMS`에 있습니다. 컬럼(`columns`)과 행(`rows`)을 실제 값으로 교체하면 됩니다.
- 색상/타이포그래피는 `tailwind.config.ts`의 `toss` 컬러 팔레트와 `app/globals.css`에서 조정할 수 있습니다.
