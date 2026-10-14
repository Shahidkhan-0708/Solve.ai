'use client';

import { useId, useState } from 'react';

export default function RecursionExercise() {
  const id = useId();
  const [input, setInput] = useState(4);
  const [prediction, setPrediction] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [step, setStep] = useState(0);
  const calls = [input];
  while (calls[calls.length - 1] > 1) calls.push(calls[calls.length - 1] - 1);
  const trace = calls.map((n, i) => i === calls.length - 1
    ? `factorial(${n}) reaches the base case and returns 1 without another call.`
    : `factorial(${n}) waits for factorial(${n - 1}); the input gets smaller.`);
  let result = 1;
  for (let i = calls.length - 2; i >= 0; i--) {
    const previous = result;
    result *= calls[i];
    trace.push(`factorial(${calls[i]}) resumes: ${calls[i]} × ${previous} = ${result}.`);
  }

  function reset(n = input) {
    setInput(n); setPrediction(''); setRevealed(false); setStep(0);
  }

  return <section className="recursion-exercise" aria-label="Interactive recursion exercise">
    <div className="section-heading"><h4>Try a changed input</h4><span>Practice sandbox</span></div>
    <p className="form-help">Predict the result, then follow the calls and returns. This exploration does not change your progress.</p>
    <label htmlFor={id + '-input'}>Starting input</label>
    <select id={id + '-input'} value={input} onChange={e => reset(Number(e.target.value))}>
      {Array.from({ length: 8 }, (_, n) => <option key={n} value={n}>{n}</option>)}
    </select>
    {!revealed ? <form onSubmit={e => { e.preventDefault(); setRevealed(true); }}>
      <label htmlFor={id + '-prediction'}>What will factorial({input}) return?</label>
      <input id={id + '-prediction'} type="number" min={0} max={100000} step={1} required value={prediction} onChange={e => setPrediction(e.target.value)} />
      <div className="button-row"><button className="secondary" disabled={!prediction.trim()}>Check prediction and reveal trace</button>
        <button type="button" className="text-button" onClick={() => setRevealed(true)}>Explore without a prediction</button></div>
    </form> : <>
      <div role="status" className="trace-result">{prediction ? Number(prediction) === result ? 'Your prediction matches.' : 'Compare your prediction with the return steps.' : 'Follow the trace to work out the result.'}</div>
      <ol className="trace-calls" aria-label="Call sequence">{calls.map((n, i) => <li key={i}>factorial({n}){i === calls.length - 1 && <small>Base case</small>}</li>)}</ol>
      <div className="trace-step" aria-live="polite" aria-atomic="true"><small>Step {step + 1} of {trace.length}</small><p>{trace[step]}</p></div>
      <div className="animation-navigation"><button className="secondary" onClick={() => setStep(step - 1)} disabled={step === 0}>Previous trace step</button>
        <button className="secondary" onClick={() => setStep(step + 1)} disabled={step === trace.length - 1}>Next trace step</button></div>
      {step === trace.length - 1 && <p className="trace-result">factorial({input}) = {result} · {calls.length - 1} recursive calls after the initial call.</p>}
      <button className="text-button" onClick={() => reset()}>Reset prediction</button>
    </>}
  </section>;
}