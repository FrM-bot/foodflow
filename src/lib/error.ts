import { $ResponseStatus } from '@/enums'
import type { AxiosResponse } from 'axios'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function captureServerError(response: AxiosResponse<any>) {
  if (response?.data?.result?.status === $ResponseStatus.error) {
    return [response.data.result.status as string, response.data.result.errorDetails.message as string]
  }
  return [null, null]
}
