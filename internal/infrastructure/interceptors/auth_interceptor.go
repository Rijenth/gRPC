package interceptors

import (
	"context"
	"log"

	"google.golang.org/grpc"
)

func UnaryServerInterceptor(
	ctx context.Context,
	req any,
	info *grpc.UnaryServerInfo,
	handler grpc.UnaryHandler,
) (any, error) {
	log.Printf("Received request on method: %s", info.FullMethod)

	resp, err := handler(ctx, req)

	log.Printf("Sending response from method: %s", info.FullMethod)

	return resp, err
}
