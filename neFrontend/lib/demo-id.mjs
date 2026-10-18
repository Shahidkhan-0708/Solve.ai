let sequence=0;
// Local UI identifiers only. These are never authentication tokens.
export function demoId(source=globalThis.crypto) {
 return typeof source?.randomUUID==='function'?source.randomUUID():`demo-${Date.now()}-${++sequence}`;
}
