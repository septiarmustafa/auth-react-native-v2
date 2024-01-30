// import { request, gql } from "graphql-request";

// const MASTER_URL =
//   "https://api-ap-southeast-2.hygraph.com/v2/clryesehn1glp01tenb6qcuqp/master";

// export const getSlider = async () => {
//   const query = gql`
//     query getSlider {
//       sliders {
//         id
//         name
//         image {
//           url
//         }
//       }
//     }
//   `;
//   try {
//     const result = await request(MASTER_URL, query);
//     return result;
//   } catch (error) {
//     console.error("Error fetching slider:", error);
//     throw error; // Re-throw the error to handle it in the Slider component
//   }
// };

// export default { getSlider };
