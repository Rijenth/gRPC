import { DeleteUserResponse, GetAllUsersResponse } from "../generated/user";
import { UserServiceClient } from "../generated/user.client";
import Api from "./api";

export default class UserApi extends Api {
  private readonly userServiceClient: UserServiceClient;

  constructor() {
    super();
    this.userServiceClient = new UserServiceClient(
      this.getGrpcWebFetchTransport(),
    );
  }

  public async index(): Promise<GetAllUsersResponse | null> {
    try {
      const request = await this.userServiceClient.index({});

      const users = request.response?.users || [];

      return { users };
    } catch (error) {
      this.handleRequestError(
        error,
        "[user.api.ts] Erreur lors de la récupération des utilisateurs:",
      );

      return null;
    }
  }

  public async delete(id: number): Promise<DeleteUserResponse | null> {
    try {
      const request = await this.userServiceClient.delete({ id });

      return request.response;
    } catch (error) {
      this.handleRequestError(
        error,
        "[user.api.ts] Erreur lors de la suppression de l'utilisateur:",
      );

      return null;
    }
  }
}
