'use client';

import { useEffect, useRef } from 'react';
import { Mic, Square } from 'lucide-react';
import { VoiceBeam, useMicrophone } from 'voice-glow';
import { BorderBeam } from 'border-beam';

export default function ChatInput({ value, onChange, disabled, demo }: {
  value: string; onChange: (value: string) => void; disabled: boolean; demo: boolean;
}) {
  const mic = useMicrophone();
  const active = useRef(true);
  const blocked = useRef(disabled);
  blocked.current = disabled;
  useEffect(() => { active.current = true; return () => { active.current = false; }; }, []);
  useEffect(() => { if (disabled) mic.stop(); }, [disabled, mic.stop]);

  async function listen() {
    const stream = await mic.start();
    // Permission can resolve after navigation or submission.
    if (!active.current || blocked.current) stream?.getTracks().forEach(track => track.stop());
  }

  return <div className="chat-input">
    <BorderBeam size="md" colorVariant="ocean" borderRadius={12}>
      <VoiceBeam stream={mic.stream} active={mic.state === 'live'} theme="light">
        <textarea id="answer" value={value} onChange={e => onChange(e.target.value)} required maxLength={5000} rows={4}
          placeholder={demo ? 'Enter the number you computed…' : 'Explain your reasoning in your own words…'} disabled={disabled} />
      </VoiceBeam>
    </BorderBeam>
    <div className="microphone-controls">
      <button type="button" className="secondary" onClick={mic.state === 'live' ? mic.stop : listen}
        disabled={disabled || !mic.supported || mic.state === 'requesting'} aria-pressed={mic.state === 'live'}>
        {mic.state === 'live' ? <Square size={16} /> : <Mic size={16} />}
        {mic.state === 'live' ? 'Stop listening' : mic.state === 'requesting' ? 'Connecting microphone…' : 'Listen'}
      </button>
      <p className="form-help" role={mic.state === 'idle' ? undefined : 'status'}>{!mic.supported ? 'Microphone unavailable in this browser.' : mic.state === 'denied' ? 'Microphone access denied. You can still type your answer.' : mic.error ? 'Could not connect the microphone. Try again or type your answer.' : mic.state === 'live' ? 'Listening for visual feedback. Audio is not saved or transcribed.' : 'Voice visualization only; type your answer to submit it.'}</p>
    </div>
  </div>;
}
