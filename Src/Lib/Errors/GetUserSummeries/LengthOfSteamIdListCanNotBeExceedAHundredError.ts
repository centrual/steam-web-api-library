import { ExtendableError } from "ts-error";

export class LengthOfSteamIdListCanNotBeExceedAHundredError extends ExtendableError {
  constructor(message?: string) {
    super();
    let errorMessage = 'Length of steam id list can not be exceed a hundred.';

    if( typeof message !== 'undefined' ) {
      errorMessage = message;
    }

    this.message = errorMessage;
  }
}
