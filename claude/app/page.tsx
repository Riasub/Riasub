import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="animate-fade-up text-sm font-semibold tracking-wide text-toss-blue">
          S.PKG 제조팀
        </p>
        <h1 className="mt-4 animate-fade-up text-[40px] font-bold leading-tight tracking-tight text-toss-navy [animation-delay:0.1s] sm:text-6xl md:text-7xl">
          S.PKG Capa Fit
        </h1>
        <p className="mt-6 max-w-md animate-fade-up text-base text-toss-gray-500 [animation-delay:0.2s] sm:text-lg">
          계획정보, 설비정보, 효율정보를 한 곳에서 확인하세요.
        </p>
      </main>
    </>
  );
}
