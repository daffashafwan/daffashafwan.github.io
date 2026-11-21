import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      link: `/posts/${p.id}/`,
    })),
  });
}
