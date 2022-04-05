import Mock from "mockjs";

import midImg1 from '@/assets/small-1.jpg';
import bigImg1 from '@/assets/big-1.jpg';
import midImg2 from '@/assets/small-2.jpg';
import bigImg2 from '@/assets/big-2.jpg';
import midImg3 from '@/assets/small-3.jpg';
import bigImg3 from '@/assets/big-3.jpg';

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: midImg1,
      bigImg: bigImg1,
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg:  midImg2,
      bigImg: bigImg2,
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    
    {
      id: "3",
      midImg: midImg3,
      bigImg: bigImg3,
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
