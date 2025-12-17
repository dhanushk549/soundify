import { SpinningText } from "../ui/spinning-text"

export function SpinningTextBasicdemo() {
  return (
    <SpinningText reverse className="text-2xl  font-bold text-white uppercase"  duration={4} radius={6}>
    play more • vibe more • music more
    </SpinningText>
  )
}
