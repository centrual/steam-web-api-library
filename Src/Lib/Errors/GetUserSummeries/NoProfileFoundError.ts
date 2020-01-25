import { ExtendableError } from "ts-error";

export class NoProfileFoundError extends ExtendableError {
  constructor(message?: string) {
    super();
    let errorMessage = 'There is no profiles linked with steam ids.';

    if( typeof message !== 'undefined' ) {
      errorMessage = message;
    }

    this.message = errorMessage;
  }
}
