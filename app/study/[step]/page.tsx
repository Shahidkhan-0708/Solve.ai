const steps = ['goal', 'time', 'target', 'material', 'plan', 'learn', 'replan', 'sessions', 'settings', 'demo'];

export const dynamicParams = false;
export function generateStaticParams() { return steps.map(step => ({ step })); }

export default function StudyStep() { return null; }
