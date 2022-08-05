const supertest = require("supertest");

const app = require("../src/app");

let favorite;

describe("/search", () => {
  it("GET should return itunes results", async () => {
    const res = await supertest(app)
      .get("/api/search?term=rock")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body).toHaveProperty("result");
  });
});

describe("/favorites", () => {
  it("GET should return favorites", async () => {
    const res = await supertest(app)
      .get("/api/favorites")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body).toEqual([]);
    expect(res.body).toMatchSnapshot();
  });

  it("POST should create a new favorite", async () => {
    const res = await supertest(app)
      .post("/api/favorites/")
      .send({ artistName: "john", songName: "beans" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    favorite = res.body;

    expect(res.body).toHaveProperty("id");
  });

  it("DELETE should delete single favorite", async () => {
    const res = await supertest(app)
      .delete(`/api/favorites/delete/${favorite.id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body).toHaveProperty("deletedItem");
  });
});
