import express from "express";
import client from "./elasticsearch/client.js";
import cors from "cors";
import { Client } from "@elastic/elasticsearch";

import router from "./data_management/retrieve_and_ingest_data.js";

const app = express();
app.use("/ingest_data", router);
app.use(cors());

app.get("/results", (req, res) => {
  const passedType = req.query.type;
  const passedMag = req.query.mag;
  const passedLocation = req.query.location;
  const passedDateRange = req.query.dateRange;
  const passedSortOption = req.query.sortOption;

  async function sendESRequest() {
    const body = await client.search({
      index: "earthquakes",
      body: {
        sort: [
          {
            mag: {
              order: passedSortOption,
            },
          },
        ],
        size: 300,
        query: {
          bool: {
            filter: [
              {
                term: { type: passedType },
              },
              {
                range: {
                  mag: {
                    gte: passedMag,
                  },
                },
              },
              {
                match: { place: passedLocation },
              },
              // for those who use prettier, make sure there is no whitespace.
              {
                range: {
                  "@timestamp": {
                    gte: `now-${passedDateRange}d/d`,
                    lt: "now/d",
                  },
                },
              },
            ],
          },
        },
      },
    });
    res.json(body.hits.hits);
  }
  sendESRequest();
});

const port = 3001;

app.listen(port, () => console.log(`App listening to port ${port}`));
