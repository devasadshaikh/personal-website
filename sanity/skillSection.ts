export const skillSection = {
  name: "skillSection",
  title: "skill section",
  type: "document",
  fields: [
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
