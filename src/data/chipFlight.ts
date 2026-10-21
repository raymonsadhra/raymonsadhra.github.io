export type FlightDestination = { left: number; top: number; width: number; height: number };

export function getChipFlightFrame({
  progress,
  originX,
  originY,
  destination,
  baseWidth,
  startScale,
}: {
  progress: number;
  originX: number;
  originY: number;
  destination: FlightDestination;
  baseWidth: number;
  startScale: number;
}) {
  const clamped = Math.min(Math.max(progress, 0), 1);
  const eased = 1 - Math.pow(1 - clamped, 4);
  const arc = Math.sin(Math.PI * clamped);
  const destinationX = destination.left + destination.width / 2;
  const destinationY = destination.top + destination.height / 2;
  const centerX = originX + (destinationX - originX) * eased + arc * 18;
  const centerY = originY + (destinationY - originY) * eased - arc * 24;
  return {
    x: centerX - baseWidth / 2,
    y: centerY - destination.height / 2,
    scale: startScale + (1 - startScale) * eased,
    rotateX: (1 - eased) * 8 - arc * 5,
    rotateZ: (1 - eased) * -5 + arc * 7,
  };
}
