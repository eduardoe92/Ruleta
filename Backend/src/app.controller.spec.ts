import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  describe("random", () => {
    it("Debe devolver un número aleatorio entre 1 y 100", () => {
      const result = appController.getRandomNumber();
      expect(result).toHaveProperty("value");
      expect(result.value).toBeGreaterThanOrEqual(1);
      expect(result.value).toBeLessThanOrEqual(100);
    });
  });
});
