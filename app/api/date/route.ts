export async function GET() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const todayDay = today.getDate()
  const todayDate = `${year}-${month}-${todayDay}`

  return Response.json({ todayDate })
}
