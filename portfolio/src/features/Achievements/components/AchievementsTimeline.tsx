import Timeline from '@mui/lab/Timeline';

import AchievementContents from "./AchievementContent";
import { Achievement } from '../types/achievement';
import AchievementsData from "assets/data/achievements.json";

const AchievementsTimeline = () => {
    const achievements: Array<Achievement> = AchievementsData.achievements;

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