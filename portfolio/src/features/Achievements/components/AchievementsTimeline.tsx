import Timeline from '@mui/lab/Timeline';

import AchievementContents from "./AchievementsContent";
import { Achievement } from '../types/achievement';

const AchievementsTimeline = () => {
    const achievements: Array<Achievement> = [
        {
            title      : "2019年8月 学会発表",
            description: "電子情報通信学会 2019年 ソサイエティ大会 LSTMを用いた降雨量データの欠損補間",
            url       : "https://www.ieice.org/publications/conferences/summary.php?id=CONF0000123837&expandable=1&ConfCd=2019S&session_num=A-19&lecture_number=A-19-15&year=2019&conf_type=S"
        },
        {
            title      : "2020年3月 学会発表",
            description: "情報処理学会 第82回 全国大会 Convolutional LSTMを用いた降雨量データの欠損補間",
            url       : "https://ci.nii.ac.jp/naid/170000183037/"
        },
        {
            title      : "2020年3月 コンテスト",
            description: "第2回地域防災力向上チャレンジ 最優秀賞",
            url       : "https://www.bosai.go.jp/ihub/news/2019/contest_2019_lst_kekka.html"
        },
        {
            title      : "2022年3月 学会発表",
            description: "DEIM2022 LSTM Blockを用いたサッカー動画における動作分類",
            url       : "https://cms.dbsj.org/deim2022/participant/?channel=paper&id=C23-2"
        },
        {
            title      : "2023年3月 学会発表",
            description: "DEIM2023 模範演技の点数に対してスケーリングと差分を用いた演技スポーツ映像自動採点モデルの評価",
            url       : "https://proceedings-of-deim.github.io/DEIM2023/4b-1-1.pdf"
        },
        {
            title      : "2023年9月 論文投稿",
            description: "CLEF2023 KDE Lab at ImageCLEFmedical Caption 2023",
            url       : "https://www.dei.unipd.it/~faggioli/temp/CLEF2023-proceedings/paper-140.pdf"
        },
        {
            title      : "To be Continue...",
            description: "To be Continue...",
            url       : ""
        }

    ];

    return (
        <Timeline>
            {achievements.map( (item) => {
                return <AchievementContents key={item.title} 
                                            title={item.title}  
                                            description={item.description} 
                                            url={item.url}/>
            })}
        </Timeline>
    );
};

export default AchievementsTimeline;