import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { RpcError } from "@protobuf-ts/runtime-rpc";

export default class Api {
  private readonly transport: GrpcWebFetchTransport;
  private readonly url: string = "http://localhost:8000";

  constructor() {
    this.transport = new GrpcWebFetchTransport({
      baseUrl: this.url,
    });
  }

  public getGrpcWebFetchTransport(): GrpcWebFetchTransport {
    return this.transport;
  }

  public getMessageFromRequestError(error: unknown, message: string): string {
    if (error instanceof RpcError) {
      return "[" + error.code + "] " + error.message;
    }

    console.error(error);

    return message;
  }
}
