import { reference, z } from 'astro:content';

const blogSchema = z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    date: z.date(),
    author: reference("authors"),
    preview_image: z.string().optional(),
    layout: z.string(),
    relatedPosts: z.array(reference('blog')).optional(),
});

export default blogSchema;