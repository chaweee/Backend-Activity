import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './router/BookRoutes.js';
import studentRoutes from './router/StudentRouter.js';
import UserRoutes from './router/UserRoutes.js;

const app = express();

app.use(express.json());


try {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`listening to port ${process.env.PORT || 5000}`);
    });
}catch (e) {
    console.log(e);
}

app.use('/book',bookRoutes);
app.use('/students',studentRoutes);
app.use('/user' , userRoutes);
