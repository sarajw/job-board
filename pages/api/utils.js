export default async function handler(req, res) {
  if (req.method !== 'POST') return res.end()

  res.end()
}