# Learning integration review

Active frontend: neFrontend, port 3002.

Gstack investigation confirmed the exported controller bypassed existing learning functionality: replies were text nodes, recent links were samples, and ordinary questions never requested Manim. Context7's Markdown-it index was accessible; Context7 MCP was not exposed and its Manim page was unavailable. Installed Next.js guides, official Manim configuration and KaTeX security documentation were checked.

| Feature | Integration decision |
| --- | --- |
| Manim | Reuse the existing validated storyboard, review, bounded queue, private media, cache and step player for completed conversation answers. |
| Guided learning | Preserve uploaded-source review, citations, grading, practice, teach-back, evidence and spaced review. Expose existing practice in navigation. |
| Reply formatting | Share Markdown and math rendering across streamed and restored answers. Disable HTML and trusted KaTeX commands. |
| Follow-ups and audio | Keep Listen, feedback and regeneration on every complete answer, addressed by message ID. |
| Recent conversations | Replace examples with owned IDs. Fetch the selected messages and associated context explicitly. |
| Progress | Show ... solving with actual answer, planning, checking and Manim-rendering stages. Animation rendering does not block follow-up questions. |
| Resources | Separate files, links, notes and extracted text from the composer. Keep removal and review actions. |
| Navigation | Share stable sidebar, utility buttons, responsive drawer and mode controls. Remove version labels, fake metrics, mentorship label and placeholder avatar. |
| PWA | Preserve existing installation/offline and private-cache boundaries. |

Conversation visuals are labeled as based on the AI explanation; source-backed lessons retain separate citation checks. Rendering adds latency and provider usage, shown through actual progress and bounded by existing quotas.

Verified: 33 backend checks; frontend regression checks; production build; live isolated conversation-to-Manim run produced three MP4/PNG pairs, enforced owner-only access, reused cached output and removed output on deletion. Live browser regression covers formatted saved messages, follow-up actions, recent threads, resources and mobile navigation. See tmp/response-animation-check/report.json and tmp/workspace-verification.

Navigation verification passed on all 15 workspace routes, with one mounted page tree, delayed desktop/mobile initialization, and connection-failure retry. Nested main landmarks were corrected in six screen components. The production build and PWA worker were regenerated and served on port 3002.
