import { CarouselImageResponse } from "../../src/types/carousel_image";

export const CAROUSEL_IMAGES_FIELD = `
  imagen{
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
  slug
  activo
`;

export const fetchGraphQL = async (
  query: string,
  preview: boolean = false
): Promise<CarouselImageResponse> => {
  return await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      body: JSON.stringify({ query }),
      headers: {
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  ).then((response) => response.json());
};

export const getCarouselImages = async (
  preview: boolean
): Promise<CarouselImageResponse> => {
  const collection = "imagenesCarruselCollection";
  const entries = await fetchGraphQL(
    `query {
      ${collection}(preview: ${
      preview ? "true" : "false"
    }) {
        total
        items {
          ${CAROUSEL_IMAGES_FIELD}
        }
      }
    }`,
    preview
  );

  return entries;
};
