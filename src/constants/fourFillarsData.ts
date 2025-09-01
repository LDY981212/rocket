interface fourFillarsDataProps {
  title: {
    main: string;
    sub: string;
  };
  time: {
    main: string;
    sub?: string;
    stemps?: string;
  };
  date: {
    main: string;
    sub?: string;
    stemps?: string;
  };
  month: {
    main: string;
    sub: string;
    stemps?: string;
  };
  year: {
    main: string;
    sub: string;
    stemps?: string;
  }[];
}

export const fourFillarsData: fourFillarsDataProps[] = [
  {
    title: {
      main: "十星",
      sub: "십성",
    },
    time: {
      main: "像官",
      sub: "상관",
    },
    date: {
      main: "比肩",
      sub: "비견",
    },
    month: {
      main: "像官",
      sub: "상관",
    },
    year: [
      {
        main: "像官",
        sub: "상관",
      },
    ],
  },
  {
    title: {
      main: "天干",
      sub: "천간",
    },
    time: {
      main: "壬",
      sub: "임",
      stemps: "陽木",
    },
    date: {
      main: "丁",
      sub: "정",
      stemps: "陰火",
    },
    month: {
      main: "癸",
      sub: "계",
      stemps: "陰水",
    },
    year: [
      {
        main: "癸",
        sub: "계",
        stemps: "陰水",
      },
    ],
  },
  {
    title: {
      main: "地支",
      sub: "지지",
    },
    time: {
      main: "寅",
      sub: "인",
      stemps: "陽木",
    },
    date: {
      main: "巳",
      sub: "사",
      stemps: "陰火",
    },
    month: {
      main: "亥",
      sub: "해",
      stemps: "陰水",
    },
    year: [
      {
        main: "酉",
        sub: "유",
        stemps: "陰金",
      },
    ],
  },
  {
    title: {
      main: "十星",
      sub: "십성",
    },
    time: {
      main: "比肩",
      sub: "비견",
    },
    date: {
      main: "劫財",
      sub: "겁재",
    },
    month: {
      main: "食神",
      sub: "식신",
    },
    year: [
      {
        main: "編財",
        sub: "편재",
      },
    ],
  },
  {
    title: {
      main: "十二運星",
      sub: "십이운성",
    },
    time: {
      main: "死",
      sub: "사",
    },
    date: {
      main: "帝旺",
      sub: "제왕",
    },
    month: {
      main: "胎",
      sub: "태",
    },
    year: [
      {
        main: "長生",
        sub: "장생",
      },
    ],
  },
  {
    title: {
      main: "十二神殺",
      sub: "십이신살",
    },
    time: {
      main: "劫殺",
      sub: "겁살",
    },
    date: {
      main: "地殺",
      sub: "지살",
    },
    month: {
      main: "驛馬殺",
      sub: "역마살",
    },
    year: [
      {
        main: "將星殺",
        sub: "장성살",
      },
    ],
  },
  {
    title: {
      main: "貴人",
      sub: "귀인",
    },
    time: {
      main: "(없음)",
    },
    date: {
      main: "(없음)",
    },
    month: {
      main: "天乙",
      sub: "천을귀인",
    },
    year: [
      {
        main: "天乙",
        sub: "천을귀인",
      },
      {
        main: "太極",
        sub: "태극귀인",
      },
      {
        main: "文昌",
        sub: "문창귀인",
      },
    ],
  },
];
