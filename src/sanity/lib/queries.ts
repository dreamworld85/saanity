import { groq } from "next-sanity";

// GROQ queries for Sanity CMS
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;
