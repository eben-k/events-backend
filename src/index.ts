import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './application';

createConnection()
  .then(() => {
    console.log('hereeeddd');
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
