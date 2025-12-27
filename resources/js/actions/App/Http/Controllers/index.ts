import BlackjackController from './BlackjackController'
import LeaderboardController from './LeaderboardController'
import UserController from './UserController'
import StatController from './StatController'
import AchievementController from './AchievementController'
const Controllers = {
    BlackjackController: Object.assign(BlackjackController, BlackjackController),
LeaderboardController: Object.assign(LeaderboardController, LeaderboardController),
UserController: Object.assign(UserController, UserController),
StatController: Object.assign(StatController, StatController),
AchievementController: Object.assign(AchievementController, AchievementController),
}

export default Controllers