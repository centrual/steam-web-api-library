import { ExtendableError } from "ts-error";

export class LengthOfSteamIdListCanNotBeZeroError extends ExtendableError {
  constructor(message?: string) {
    super();
    let errorMessage = 'The length of steam id list can no be zero.';

    if( typeof message !== 'undefined' ) {
      errorMessage = message;
    }

    this.message = errorMessage;
  }
}
