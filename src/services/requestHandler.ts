// type BaseRequest = (endpoint: string | URL | Request, params?: RequestInit | undefined) => Promise<Response>

export const $ResponseStatus = {
  OK: 'success',
  ERROR: 'error',
} as const

export type ResponseStatus = (typeof $ResponseStatus)[keyof typeof $ResponseStatus]

type SuccessResponse<V> = {
  code: typeof $ResponseStatus.OK
  data: V
}

type ErrorResponse<E> = {
  code: typeof $ResponseStatus.ERROR
  error: E
}

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>

export const RequestHandler = async <R, E>(
  endpoint: string | URL | Request,
  params?: RequestInit | undefined
): BaseResponse<R, E> => {
  try {
    const response = await fetch(endpoint, params)
    if (response.status !== 200) {
      return {
        code: $ResponseStatus.ERROR,
        error: response.statusText as E,
      }
    }
    const data: R = await response.json()
    return {
      code: $ResponseStatus.OK,
      data,
    }
  } catch (err) {
    return {
      code: $ResponseStatus.ERROR,
      error: err as E,
    }
  }
}
