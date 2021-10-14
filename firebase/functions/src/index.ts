import * as functions from "firebase-functions";

export const helloWorld = functions.region("asia-northeast1")
    .https
    .onCall((data) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      const name = data.name ?? "world";
      return {
        message: `hello ${name}!!!!`,
      };
    });

export const image = functions.storage
    .object()
    .onFinalize(async (object) => {
      // ここで失敗した場合は再実施とかエラーログを残すとか色々したほうがいい
      const fileBucket = object.bucket;
      const filePath = object.name;
      const contentType = object.contentType;

      if (contentType == null || !contentType.startsWith("image/")) {
        return functions.logger.log("This is not an image.");
      }
      if (!filePath) {
        return functions.logger.log("file path is not found.");
      }
      functions.logger.info(`${fileBucket}. ${filePath}`);
      return;
    });
