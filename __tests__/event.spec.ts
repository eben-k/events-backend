import connection from "../src/utils/connection";
import app from "../src/application";
import request from "supertest";

describe("Events Test Suite", () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should get all events", async (done) => {
    const res = await request(app).get("/events");

    expect(res.body).toHaveProperty("events");

    done();
  });

  it("should get all events meta data", async (done) => {
    const res = await request(app).get("/events");

    expect(res.body).toHaveProperty("meta");
    expect(res.body.meta).toHaveProperty("total");
    expect(res.body.meta).toHaveProperty("page");
    expect(res.body.meta).toHaveProperty("limit");

    done();
  });

  it("should get all event types", async (done) => {
    const res = await request(app).get("/events/types");

    expect(res.body).toHaveProperty("event_types");
    expect(res.body.event_types).toContainEqual(
      expect.objectContaining({
        event_type: expect.any(String),
        total_events: expect.any(String),
      })
    );

    done();
  });

  it("should get all care recipients", async (done) => {
    const res = await request(app).get("/events/care-recipients");

    expect(res.body).toHaveProperty("recipients");
    expect(res.body.recipients).toContainEqual(
      expect.objectContaining({
        recipient_id: expect.any(String),
        total_events: expect.any(String),
      })
    );

    done();
  });
});
