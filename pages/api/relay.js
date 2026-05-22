export default function handler(req, res) {
  return res.status(200).json({
    ok: true,
    message: "Relay is running",
    method: req.method,
    path: req.url,
    time: new Date().toISOString()
  });
}
