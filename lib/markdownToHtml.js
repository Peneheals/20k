import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export const wrapTableToHorizontalScroll = html => html.replace(/<table>/g, '<div style="max-width: 100vw;box-sizing:border-box;overflow-y:scroll;"><table>').replace(/<\/table>/g, '</table></div>')

export default async function markdownToHtml(markdown) {
  const result = await remark()
  .use(html)
  .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
  .process(markdown)
  return result.toString()
}
