import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:51
 * @route '/blackjack/api/start'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/blackjack/api/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:51
 * @route '/blackjack/api/start'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:51
 * @route '/blackjack/api/start'
 */
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:51
 * @route '/blackjack/api/start'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::start
 * @see app/Http/Controllers/BlackJackController.php:51
 * @route '/blackjack/api/start'
 */
        startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:60
 * @route '/blackjack/api/hit'
 */
export const hit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: hit.url(options),
    method: 'post',
})

hit.definition = {
    methods: ["post"],
    url: '/blackjack/api/hit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:60
 * @route '/blackjack/api/hit'
 */
hit.url = (options?: RouteQueryOptions) => {
    return hit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:60
 * @route '/blackjack/api/hit'
 */
hit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: hit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:60
 * @route '/blackjack/api/hit'
 */
    const hitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: hit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::hit
 * @see app/Http/Controllers/BlackJackController.php:60
 * @route '/blackjack/api/hit'
 */
        hitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: hit.url(options),
            method: 'post',
        })
    
    hit.form = hitForm
/**
* @see \App\Http\Controllers\BlackjackController::stand
 * @see app/Http/Controllers/BlackJackController.php:73
 * @route '/blackjack/api/stand'
 */
export const stand = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stand.url(options),
    method: 'post',
})

stand.definition = {
    methods: ["post"],
    url: '/blackjack/api/stand',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlackjackController::stand
 * @see app/Http/Controllers/BlackJackController.php:73
 * @route '/blackjack/api/stand'
 */
stand.url = (options?: RouteQueryOptions) => {
    return stand.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlackjackController::stand
 * @see app/Http/Controllers/BlackJackController.php:73
 * @route '/blackjack/api/stand'
 */
stand.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stand.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BlackjackController::stand
 * @see app/Http/Controllers/BlackJackController.php:73
 * @route '/blackjack/api/stand'
 */
    const standForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stand.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BlackjackController::stand
 * @see app/Http/Controllers/BlackJackController.php:73
 * @route '/blackjack/api/stand'
 */
        standForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stand.url(options),
            method: 'post',
        })
    
    stand.form = standForm
const api = {
    start: Object.assign(start, start),
hit: Object.assign(hit, hit),
stand: Object.assign(stand, stand),
}

export default api