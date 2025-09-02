import Image from "next/image";
import TableWrapper from "@/components/TableWrapper";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center">
      <section className="relative flex flex-col items-center">
        <div className="relative max-w-448 min-w-375 w-full h-752">
          <Image
            src="/images/first_cover.svg"
            alt="첫 번째화 표지"
            fill
            unoptimized
            priority
          />
          <div className="absolute bottom-44 left-60 flex flex-col items-center font-normal text-normal-16 text-nowrap">
            <span>이제 본격적으로</span>
            <span>OO님의 사주팔자를</span>
            <span>분석해볼 차례네요.</span>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center">
        <div className="relative max-w-448 min-w-351 w-full h-285">
          <Image
            src="/images/second_screen.svg"
            alt="두 번째 화면"
            fill
            unoptimized
          />
        </div>

        <div className="absolute max-w-448 min-w-375 w-full">
          <div className="relative top-210 max-w-448 min-w-375 w-full h-410">
            <Image
              src="/images/third_screen.svg"
              alt="세 번째 화면"
              fill
              unoptimized
            />
          </div>
        </div>

        <div className="flex flex-col items-center font-normal text-normal-16 absolute top-260 left-40 text-nowrap">
          <span>제가 oo님의 사주를</span>
          <span>보기 쉽게 표로 정리했어요</span>
        </div>

        <TableWrapper />
      </section>
    </div>
  );
}
