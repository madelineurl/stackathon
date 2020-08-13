import React, {useState} from 'react'

export default function useBPM(initialBpm) {
  const [bpm, set] = useState(initialBpm)
  const setBpm = event => set(event.target.value)
  return [bpm, <BPM type="number" key={bpm} value={bpm} onChange={setBpm} />]
}
