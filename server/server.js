import express from "express";
import client from "./elasticsearch/client.js";

import router from "./data_management/retrieve_and_ingest_data.js";

const app = express();
app.use("/ingest_data", router);

const port = 3001;

app.listen(port, () => console.log(`App listening to port ${port}`));
