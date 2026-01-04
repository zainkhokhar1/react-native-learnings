
export async function GET(request: Request, {id} : Record<string, string>) {
    return Response.json({ userId: parseInt(id), name: 'John Doe' });
}