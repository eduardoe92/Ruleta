import { Controller, Post, HttpException, HttpStatus } from "@nestjs/common";

@Controller()
export class AppController {
  @Post("random")
  getRandomNumber(): { value: number } {
    try {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      return { value: randomNumber };
    } catch (error) {
      console.error("Error: ", error);
      throw new HttpException(
        `Error generando el número aleatorio: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
