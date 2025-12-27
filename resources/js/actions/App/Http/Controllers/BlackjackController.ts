import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})

start.definition = {
    methods: ["get","head"],
    url: '/blackjack/start',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
start.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
start.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: start.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
        startForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:19
 * @route '/blackjack/start'
 */
        startForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
export const hit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hit.url(options),
    method: 'get',
})

hit.definition = {
    methods: ["get","head"],
    url: '/blackjack/hit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
hit.url = (options?: RouteQueryOptions) => {
    return hit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
hit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
hit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
    const hitForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
        hitForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:29
 * @route '/blackjack/hit'
 */
        hitForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hit.form = hitForm
/**
* @see \App\Http\Controllers\BlackjackController::apiStart
 * @see app/Http/Controllers/BlackJackController.php:53
 * @route '/blackjack/api/start'
 */
export const apiStart = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiStart.url(options),
    method: 'post',
})

apiStart.definition = {
    methods: ["post"],
    url: '/blackjack/api/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::apiStart
 * @see app/Http/Controllers/BlackJackController.php:53
 * @route '/blackjack/api/start'
 */
apiStart.url = (options?: RouteQueryOptions) => {
    return apiStart.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::apiStart
 * @see app/Http/Controllers/BlackJackController.php:53
 * @route '/blackjack/api/start'
 */
apiStart.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiStart.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::apiStart
 * @see app/Http/Controllers/BlackJackController.php:53
 * @route '/blackjack/api/start'
 */
    const apiStartForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: apiStart.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::apiStart
 * @see app/Http/Controllers/BlackJackController.php:53
 * @route '/blackjack/api/start'
 */
        apiStartForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: apiStart.url(options),
            method: 'post',
        })
    
    apiStart.form = apiStartForm
/**
* @see \App\Http\Controllers\BlackjackController::apiHit
 * @see app/Http/Controllers/BlackJackController.php:62
 * @route '/blackjack/api/hit'
 */
export const apiHit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiHit.url(options),
    method: 'post',
})

apiHit.definition = {
    methods: ["post"],
    url: '/blackjack/api/hit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::apiHit
 * @see app/Http/Controllers/BlackJackController.php:62
 * @route '/blackjack/api/hit'
 */
apiHit.url = (options?: RouteQueryOptions) => {
    return apiHit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::apiHit
 * @see app/Http/Controllers/BlackJackController.php:62
 * @route '/blackjack/api/hit'
 */
apiHit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiHit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::apiHit
 * @see app/Http/Controllers/BlackJackController.php:62
 * @route '/blackjack/api/hit'
 */
    const apiHitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: apiHit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::apiHit
 * @see app/Http/Controllers/BlackJackController.php:62
 * @route '/blackjack/api/hit'
 */
        apiHitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: apiHit.url(options),
            method: 'post',
        })
    
    apiHit.form = apiHitForm
/**
* @see \App\Http\Controllers\BlackjackController::apiStand
 * @see app/Http/Controllers/BlackJackController.php:75
 * @route '/blackjack/api/stand'
 */
export const apiStand = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiStand.url(options),
    method: 'post',
})

apiStand.definition = {
    methods: ["post"],
    url: '/blackjack/api/stand',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::apiStand
 * @see app/Http/Controllers/BlackJackController.php:75
 * @route '/blackjack/api/stand'
 */
apiStand.url = (options?: RouteQueryOptions) => {
    return apiStand.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::apiStand
 * @see app/Http/Controllers/BlackJackController.php:75
 * @route '/blackjack/api/stand'
 */
apiStand.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apiStand.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::apiStand
 * @see app/Http/Controllers/BlackJackController.php:75
 * @route '/blackjack/api/stand'
 */
    const apiStandForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: apiStand.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::apiStand
 * @see app/Http/Controllers/BlackJackController.php:75
 * @route '/blackjack/api/stand'
 */
        apiStandForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: apiStand.url(options),
            method: 'post',
        })
    
    apiStand.form = apiStandForm
/**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
export const extra = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extra.url(options),
    method: 'get',
})

extra.definition = {
    methods: ["get","head"],
    url: '/blackjack/extra',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
extra.url = (options?: RouteQueryOptions) => {
    return extra.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
extra.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extra.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
extra.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: extra.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
    const extraForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: extra.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
        extraForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extra.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BlackjackController::extra
 * @see app/Http/Controllers/BlackJackController.php:0
 * @route '/blackjack/extra'
 */
        extraForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extra.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    extra.form = extraForm
const BlackjackController = { start, hit, apiStart, apiHit, apiStand, extra }

export default BlackjackController