// Architectural pattern: MVC, Dependency Injection, MVP    == backend odamni hamma suyagi

// MVC = Model view controller = asosan backend da ishlatiladi.

// Design pattern: Middleware, Decotar    == malum bir suyak (qo'l masalan)


import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
   console.log('MongoDB connection succeed');
   const PORT = process.env.PORT ?? 3003;
})
.catch((err) => console.log("ERROR on connection MongoDB", err));
