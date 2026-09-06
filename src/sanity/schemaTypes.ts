import { defineArrayMember, defineField, defineType } from "sanity";

const author = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required().max(100) }),
  ],
});
const category = defineType({
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required().max(60) }),
  ],
});
const post = defineType({
  name: "post",
  title: "Blog posts",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required().max(160) }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) =>
        rule
          .required()
          .custom((value) =>
            !value?.current ||
            (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) && value.current.length <= 96)
              ? true
              : "Use lowercase letters, numbers and single hyphens (maximum 96 characters).",
          ),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      validation: (rule) => rule.required().assetRequired(),
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required().max(200),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      description: "Posts appear on the website only after this date and after you click Publish.",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
      validation: (rule) => rule.unique().max(5),
    }),
    defineField({
      name: "body",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (rule) =>
                      rule
                        .required()
                        .uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "author.name", media: "coverImage" } },
});
export const schemaTypes = [post, author, category];
