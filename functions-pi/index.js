const { setGlobalOptions } = require("firebase-functions/v2/options");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

setGlobalOptions({ maxInstances: 10 });

// دالة بسيطة ترجع نص
exports.helloWorld = onRequest((req, res) => {
  logger.info("Hello logs!", { structuredData: true });
  res.send("Hello from Firebase!");
});

