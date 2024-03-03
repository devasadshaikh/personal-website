
// 'use client'
// import { RuleBuilder } from "@sanity/types";
export const skillSection = {
  name: "skillSection",
  title: "skill section",
  type: "document",
  //   // of:[{
  //   //   name:"progressBar",
  //   //   title: "Progress Bar",
  //   //   type: "object",
  fields: [
    // {
    //   name: "title",
    //   title: "Section Title",
    //   type: "string",
    // },
    // {
    //   name: "skills",
    //   title: "Skills",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       name: "skill",
          // fields: [

            {
              name: "skillName",
              title: "Skill Name",
              type: "string"
            },
            {
              name: "iconImage",
              title: "Icon Image",
              type: "image"
            },
            {
              name: "percentage",
              title: "Percentage",
              type: "number",
              validation: (Rule: any) => Rule.required().min(0).max(100),
            },
          ]
        }





        //             // {
        //             //   title:"Names",
        //             //   name:"names",
        //             //   type:"array",
        //             //   of:[]
        //             // }
  //     ]
//     }

//   ]

// };





// export const skillSection = {
//   name: "skillSection",
//   title: "Skill Section",
//   type: "document",
//   fields: [
//     // {
//     //   name: "title",
//     //   title: "Section Title",
//     //   type: "string",
//     // },
//     {
//       name: "skills",
//       title: "Skills",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           name: "skill",
//           fields: [
//             // {
//             //   name: "skillName",
//             //   title: "Skill Name",
//             //   type: "string",
//             // },
//             {
//               name: "iconImage",
//               title: "Icon Image",
//               type: "image",
//               // options: {
//               //   hotspot: true // <-- Defaults to false
//               // },
//             },
//             // {
//             //   name: "percentage",
//             //   title: "Percentage",
//             //   type: "number",
//             //   validation: (Rule:any) => Rule.required().min(0).max(100),
//             // },
//           ],
//         },
//       ],
//     },
//   ],
// };