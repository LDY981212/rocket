import Table from "./Table";
import TabltTittle from "./TableTittle";

export default function TableWrapper() {
  return (
    <div className="z-3 relative top-310 min-w-351 max-w-448 w-full h-621 bg-[#F5F3EC] border-3 border-[#1B2F49] text-nowrap">
      <div className="absolute top-8 w-full border-1 border-[#2B557E] pointer-events-none"></div>
      <div className="absolute left-8 h-full border-1 border-[#2B557E] pointer-events-none"></div>
      <div className="absolute bottom-8 w-full border-1 border-[#2B557E] pointer-events-none"></div>
      <div className="absolute right-8 h-full border-1 border-[#2B557E] pointer-events-none"></div>

      <div>
        <TabltTittle
          name="김코드"
          year="1980"
          month="8"
          day="27"
          time="08:10"
        />
        <div className="px-20 pt-26">
          <Table />
        </div>
      </div>
    </div>
  );
}
