import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import api from './api'
/**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blackjack',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:13
 * @route '/blackjack'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
export const result = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(options),
    method: 'get',
})

result.definition = {
    methods: ["get","head"],
    url: '/blackjack/result',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
result.url = (options?: RouteQueryOptions) => {
    return result.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
result.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
result.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: result.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
    const resultForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: result.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
        resultForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: result.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '/blackjack/result'
 */
        resultForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: result.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    result.form = resultForm
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
const blackjack = {
    index: Object.assign(index, index),
start: Object.assign(start, start),
hit: Object.assign(hit, hit),
result: Object.assign(result, result),
api: Object.assign(api, api),
extra: Object.assign(extra, extra),
}

export default blackjack