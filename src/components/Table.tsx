import { fourFillarsData } from "@/constants/fourFillarsData";
import FourFillarsIcon from "./FourFillarsIcon";

export default function Table() {
  const firstData = fourFillarsData[0];
  const secondData = fourFillarsData[1];
  const thirdData = fourFillarsData[2];
  const fourthData = fourFillarsData[3];
  const fifthData = fourFillarsData[4];
  const sixthData = fourFillarsData[5];
  const seventhData = fourFillarsData[6];

  return (
    <table className="w-full text-center text-nowrap">
      <thead>
        <tr className="text-bold-20">
          <th className="w-47 h-45 border-r-2 border-b-2 border-black"></th>
          <th className="w-65 h-45 border-r border-b-2 border-b-black border-r-gray-400">
            時
          </th>
          <th className="w-65 h-45 border-r border-b-2 border-b-black border-r-gray-400">
            日
          </th>
          <th className="w-65 h-45 border-r border-b-2 border-b-black border-r-gray-400">
            月
          </th>
          <th className="w-65 h-45 border-r-2 border-b-2 border-black">年</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[12px] font-bold">{firstData.title.main}</div>
            <div className="text-[8px] font-bold">({firstData.title.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{firstData.time.main}</div>
            <div className="text-[8px] font-bold">({firstData.time.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{firstData.date.main}</div>
            <div className="text-[8px] font-bold">({firstData.date.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{firstData.month.main}</div>
            <div className="text-[8px] font-bold">({firstData.month.sub})</div>
          </td>
          <td className="bg-white w-47 border-r-2 border-b-2 border-black py-4">
            {firstData.year.map((y, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[12px] font-bold">{y.main}</span>
                <span className="text-[8px] font-bold">({y.sub})</span>
              </div>
            ))}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b border-r-black border-b-gray-400 py-4">
            <div className="text-[12px] font-bold">{secondData.title.main}</div>
            <div className="text-[8px] font-bold">({secondData.title.sub})</div>
          </td>
          <td className="pl-4 w-65 border-r border-b border-gray-400 py-4">
            {secondData.time.sub && secondData.time.stemps && (
              <FourFillarsIcon
                main={secondData.time.main}
                sub={secondData.time.sub}
                stemps={secondData.time.stemps}
                bg="#2F2F2F"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r border-b border-gray-400 py-4">
            {secondData.date.sub && secondData.date.stemps && (
              <FourFillarsIcon
                main={secondData.date.main}
                sub={secondData.date.sub}
                stemps={secondData.date.stemps}
                bg="#C23030"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r border-b border-gray-400 py-4">
            {secondData.month.sub && secondData.month.stemps && (
              <FourFillarsIcon
                main={secondData.month.main}
                sub={secondData.month.sub}
                stemps={secondData.month.stemps}
                bg="#2F2F2F"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r-2 border-b border-r-black border-b-gray-400 py-4">
            {secondData.year[0].sub && secondData.year[0].stemps && (
              <FourFillarsIcon
                main={secondData.year[0].main}
                sub={secondData.year[0].sub}
                stemps={secondData.year[0].stemps}
                bg="#2F2F2F"
                text="#FFFFFF"
              />
            )}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[12px] font-bold">{thirdData.title.main}</div>
            <div className="text-[8px] font-bold">({thirdData.title.sub})</div>
          </td>
          <td className="pl-4 w-65 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            {thirdData.time.sub && thirdData.time.stemps && (
              <FourFillarsIcon
                main={thirdData.time.main}
                sub={thirdData.time.sub}
                stemps={thirdData.time.stemps}
                bg="#18868C"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            {thirdData.date.sub && thirdData.date.stemps && (
              <FourFillarsIcon
                main={thirdData.date.main}
                sub={thirdData.date.sub}
                stemps={thirdData.date.stemps}
                bg="#C23030"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            {thirdData.month.sub && thirdData.month.stemps && (
              <FourFillarsIcon
                main={thirdData.month.main}
                sub={thirdData.month.sub}
                stemps={thirdData.month.stemps}
                bg="#292929"
                text="#FFFFFF"
              />
            )}
          </td>
          <td className="pl-4 w-65 border-r-2 border-b-2 border-black py-4">
            {thirdData.year[0].sub && thirdData.year[0].stemps && (
              <FourFillarsIcon
                main={thirdData.year[0].main}
                sub={thirdData.year[0].sub}
                stemps={thirdData.year[0].stemps}
                bg="#F9F9F9"
                text="#000000"
                border="#000000"
              />
            )}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[12px] font-bold">{fourthData.title.main}</div>
            <div className="text-[8px] font-bold">({fourthData.title.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fourthData.time.main}</div>
            <div className="text-[8px] font-bold">({fourthData.time.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fourthData.date.main}</div>
            <div className="text-[8px] font-bold">({fourthData.date.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fourthData.month.main}</div>
            <div className="text-[8px] font-bold">({fourthData.month.sub})</div>
          </td>
          <td className="bg-white w-47 border-r-2 border-b-2 border-black py-4">
            {fourthData.year.map((y, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[12px] font-bold">{y.main}</span>
                <span className="text-[8px] font-bold">({y.sub})</span>
              </div>
            ))}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[10px] font-bold">{fifthData.title.main}</div>
            <div className="text-[8px] font-bold">({fifthData.title.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fifthData.time.main}</div>
            <div className="text-[8px] font-bold">({fifthData.time.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fifthData.date.main}</div>
            <div className="text-[8px] font-bold">({fifthData.date.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{fifthData.month.main}</div>
            <div className="text-[8px] font-bold">({fifthData.month.sub})</div>
          </td>
          <td className="bg-white w-47 border-r-2 border-b-2 border-black py-4">
            {fifthData.year.map((y, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[12px] font-bold">{y.main}</span>
                <span className="text-[8px] font-bold">({y.sub})</span>
              </div>
            ))}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[10px] font-bold">{sixthData.title.main}</div>
            <div className="text-[8px] font-bold">({sixthData.title.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{sixthData.time.main}</div>
            <div className="text-[8px] font-bold">({sixthData.time.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{sixthData.date.main}</div>
            <div className="text-[8px] font-bold">({sixthData.date.sub})</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">{sixthData.month.main}</div>
            <div className="text-[8px] font-bold">({sixthData.month.sub})</div>
          </td>
          <td className="bg-white w-47 border-r-2 border-b-2 border-black py-4">
            {sixthData.year.map((y, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[12px] font-bold">{y.main}</span>
                <span className="text-[8px] font-bold">({y.sub})</span>
              </div>
            ))}
          </td>
        </tr>

        <tr>
          <td className="w-47 border-r-2 border-b-2 border-black py-4">
            <div className="text-[10px] font-bold">
              {seventhData.title.main}
            </div>
            <div className="text-[8px] font-bold">
              ({seventhData.title.sub})
            </div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[9px] font-bold">{seventhData.time.main}</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[9px] font-bold">{seventhData.date.main}</div>
          </td>
          <td className="bg-white w-47 border-r border-b-2 border-b-black border-r-gray-400 py-4">
            <div className="text-[12px] font-bold">
              {seventhData.month.main}
            </div>
            <div className="text-[8px] font-bold">
              ({seventhData.month.sub})
            </div>
          </td>
          <td className="bg-white w-47 border-r-2 border-b-2 border-black py-4">
            {seventhData.year.map((y, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[12px] font-bold">{y.main}</span>
                <span className="text-[8px] font-bold">({y.sub})</span>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
