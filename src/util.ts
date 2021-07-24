export function serialize(obj: any): string {
  return JSON.stringify(obj, null, 2);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(() => r(), ms));
}

export async function failure(factory: () => never) {
  factory();
}

export async function success<T>(value: T) {
  return value;
}

export class MyResponse {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  get isOk(): boolean {
    return this.status / 100 === 2;
  }
}

export function isResponse(arg: unknown): arg is MyResponse {
  return arg instanceof MyResponse;
}
