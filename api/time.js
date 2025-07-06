export default function handler(req, res) {
  const now = new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ time: now });
}
