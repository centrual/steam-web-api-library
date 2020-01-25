import { ExtendableError } from "ts-error";

export class UnexceptedSteamServerError extends ExtendableError {
  constructor(message?: string) {
    super();
    let errorMessage = 'Steam service returned 500 error.';

    if( typeof message !== 'undefined' ) {
      errorMessage = message;
    }

    this.message = errorMessage;
  }
}
