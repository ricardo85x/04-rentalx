import request from "supertest";

import { app } from "../index";
import { CategoryRepository } from "../modules/cars/repositories/implementations/CategoryRepository";

describe("[POST] /categories", () => {
  it("should create a category", async () => {
    await request(app)
      .post("/categories")
      .send({
        name: "Sedan",
        description: "Sedan",
      })
      .expect(201);
  });

  it("should not create a duplicate category", async () => {
    await request(app)
      .post("/categories")
      .send({
        name: "Big Car",
        description: "Big car",
      })
      .expect(201);

    await request(app)
      .post("/categories")
      .send({
        name: "Big Car",
        description: "Big car",
      })
      .expect(500);
  });
});

describe("[GET /categories", () => {
  it("Should list categories", async () => {
    const categoryRepository = CategoryRepository.getInstance();

    categoryRepository.create({
      name: "Hatch",
      description: "Hatch Description",
    });

    const response = await request(app).get("/categories");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Hatch",
          description: "Hatch Description",
        }),
      ])
    );
  });
});
