import UsersController from "../src/users-controller";

const ASYNC_TIMEOUT_MS = 10000;

describe("UsersController Test Cases", () => {
  /**
   * Basic test without async calls
   */
  it("should return false for invalid user id", () => {
    const controller = new UsersController();
    const checkResult = controller.isValidId(-1);
    expect(checkResult).toBeFalsy(); // OR expect(checkResult).toBe(false)
  });

  /**
   * Using expect.assertions() to ensure assertion calls
   * Number of assertions must match number of expect() calls
   */
  it("should throw error for invalid user id", () => {
    expect.assertions(2);
    const controller = new UsersController();
    expect(controller).toBeDefined();
    try {
      const checkResult = controller.getUserById(-1);
    } catch (error) {
      expect(error.message).toBe("Invalid userId");
    }
  });

  it(
    "should return user data",
    async () => {
      expect.assertions(1);
      const controller = new UsersController();
      const user: any = await controller.getUserById(1);
      expect(user.id).toBe(1);
    },
    ASYNC_TIMEOUT_MS
  );

  it(
    "should return user with id 1",
    async () => {
      expect.assertions(1);
      const controller = new UsersController();
      // must return otherwise assertion will not be captured
      return controller
        .getUserById(1)
        .then((user: any) => expect(user.id).toBe(1));
    },
    ASYNC_TIMEOUT_MS
  );
});
