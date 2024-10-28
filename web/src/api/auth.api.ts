import { LoginResponse } from "../generated/auth";
import { AuthServiceClient } from "../generated/auth.client";
import Api from "./api";

export default class AuthApi extends Api {
  private readonly authServiceClient: AuthServiceClient;

  constructor() {
    super();
    this.authServiceClient = new AuthServiceClient(
      this.getGrpcWebFetchTransport(),
    );
  }

  public async login(
    username: string,
    password: string,
  ): Promise<LoginResponse | string> {
    try {
      const request = await this.authServiceClient.login({
        username,
        password,
      });

      return request.response;
    } catch (error) {
      return this.getMessageFromRequestError(
        error,
        "[auth.api.ts] Erreur lors de la tentative de connexion",
      );
    }
  }
}