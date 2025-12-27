import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
 * @see routes/web.php:9
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:9
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:9
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:9
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:9
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:32
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:32
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:32
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:32
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:32
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:32
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:32
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
 * @see routes/web.php:37
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:37
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:37
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:37
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:37
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:37
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:37
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:73
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
 * @see routes/web.php:73
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:73
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
 * @see routes/web.php:73
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
 * @see routes/web.php:73
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
export const leaderboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaderboard.url(options),
    method: 'get',
})

leaderboard.definition = {
    methods: ["get","head"],
    url: '/leaderboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
leaderboard.url = (options?: RouteQueryOptions) => {
    return leaderboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
leaderboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaderboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
leaderboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: leaderboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
    const leaderboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: leaderboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
        leaderboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: leaderboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LeaderboardController::leaderboard
 * @see app/Http/Controllers/LeaderboardController.php:10
 * @route '/leaderboard'
 */
        leaderboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: leaderboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    leaderboard.form = leaderboardForm
/**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::profile
 * @see app/Http/Controllers/Usercontroller.php:10
 * @route '/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
    const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stats.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
        statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StatController::stats
 * @see app/Http/Controllers/StatController.php:10
 * @route '/stats'
 */
        statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stats.form = statsForm
/**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
export const achievements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: achievements.url(options),
    method: 'get',
})

achievements.definition = {
    methods: ["get","head"],
    url: '/achievements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
achievements.url = (options?: RouteQueryOptions) => {
    return achievements.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
achievements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: achievements.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
achievements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: achievements.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
    const achievementsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: achievements.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
        achievementsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: achievements.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AchievementController::achievements
 * @see app/Http/Controllers/AchievementController.php:11
 * @route '/achievements'
 */
        achievementsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: achievements.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    achievements.form = achievementsForm