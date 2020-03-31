

export interface ResponseData<T> {
    code: number,
    data: T,
    message: string,
    success: boolean
  }
