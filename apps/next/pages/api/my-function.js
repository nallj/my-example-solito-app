export default function handler(req, res) {
  console.log('>> req', req);
  res.status(200).json({ message: 'Hello from my serverless function!' });
}
