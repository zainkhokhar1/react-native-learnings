export function GET(request: Request) {
  return Response.json({ hello: 'world' });
}

export function POST(request: Request) {
  return Response.json({ message: 'This is a POST request' });
}

export function PUT(request: Request) {
  return Response.json({ message: 'This is a PUT request' });
}

export function DELETE(request: Request) {
  return Response.json({ message: 'This is a DELETE request' });
}

export function PATCH(request: Request) {
  return Response.json({ message: 'This is a PATCH request' });
}
