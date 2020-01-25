import { ExtendableError } from "ts-error";

export class SteamApiKeyIsNotValidError extends ExtendableError {
  constructor(message?: string) {
    super();
    let errorMessage = 'Steam api key is not valid!';

    if( typeof message !== 'undefined' ) {
      errorMessage = message;
    }

    this.message = errorMessage;
  }
}
