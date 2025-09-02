import Image from "next/image";
import table_left from "../../public/images/table_left.svg";
import table_right from "../../public/images/table_right.svg";

interface TableTittleProps {
  name: string;
  year: string;
  month: string;
  day: string;
  time: string;
}

export default function TabltTittle({
  name,
  year,
  month,
  day,
  time,
}: TableTittleProps) {
  return (
    <div className="flex items-center justify-center mt-40">
      <div className="w-56 h-38 relative top-6">
        <Image src={table_left} alt="제목 왼쪽 이미지" fill />
      </div>
      <div className="flex flex-col items-center gap-12">
        <span className="text-normal-16 font-normal">{name}님의 사주</span>
        <span className="text-bold-20 font-bold">
          {year}년 {month}월 {day}일 {time}
        </span>
      </div>
      <div className="w-56 h-38 relative bottom-12">
        <Image src={table_right} alt="제목 오른쪽 이미지" fill />
      </div>
    </div>
  );
}
