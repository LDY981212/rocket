interface FourFillarsIconProps {
  main: string;
  sub: string;
  stemps: string;
  bg: string;
  text: string;
  border?: string;
}

export default function FourFillarsIcon({
  main,
  sub,
  stemps,
  bg,
  text,
  border,
}: FourFillarsIconProps) {
  return (
    <div
      className="flex flex-col items-center justify-center w-55 h-55 rounded-[12px] gap-3 text-nowrap"
      style={{
        backgroundColor: bg,
        color: text,
        border: `2px solid ${border}`,
      }}
    >
      <span className="font-normal text-[7.6px] leading-none">{sub}</span>
      <span className="font-normal text-[25px] leading-none">{main}</span>
      <span className="font-normal text-[8.4px] leading-none">{stemps}</span>
    </div>
  );
}
