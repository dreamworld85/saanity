import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlFor = (source: Parameters<(typeof imageBuilder)["image"]>[0]) => {
  return imageBuilder.image(source);
};
