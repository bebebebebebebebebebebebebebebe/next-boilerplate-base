import { healthCheck } from "../health-check";

describe("Health Check", () => {
  it("should return health check", () => {
    const response = healthCheck();
    expect(response).toEqual({
      status: "ok",
      timestamp: expect.any(String),
    });
  });
});
