import { z } from 'astro:content';

const authorSchema = z.object({
    name: z.string(),
    avatar: z.string().optional(),
});

export default authorSchema;