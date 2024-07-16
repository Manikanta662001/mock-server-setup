import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/data", () => {
    return HttpResponse.json({
      data: ["Item 1", "Item 2", "Item 3"],
    });
  }),
  http.post("/api/messages", async ({ request }) => {
    const authToken = request.headers.get("Authorization");
    if (!authToken)
      return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    const requestBody = await request.json();
    console.log(requestBody, authToken);
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 }
    );
  }),
];
