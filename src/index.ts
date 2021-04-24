import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./application";

createConnection()
  .then(() => {
    console.log("hereeeddd");
    const port = process.env.PORT || 8000;
    const baseURL = process.env.BASE_URL;

    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at ${baseURL}:${port}`);
    });
  })
  .catch((error) => console.log(error));
