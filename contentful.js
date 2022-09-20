// import * as contentful from "contentful";

// const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });

// export default client;

import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export default client;

// CONTENTFUL_SPACE_ID='0wc63ilnxlu2'
// CONTENTFUL_ACCESS_KEY='Mjeg_YqfBwTd_R4CQi4-ENAptKY-6VLqGzpymAEL6as'
