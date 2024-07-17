import { http, HttpResponse } from "msw";

const BASE_URL = '/api';
export const handlers = [
  http.get(BASE_URL + "/data", () => {
    return HttpResponse.json({
      data: ["Item 1", "Item 2", "Item 3"],
    });
  }),
  http.post(BASE_URL + "/messages", async ({ request }) => {
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
  http.get(BASE_URL + '/allusers', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return HttpResponse.json([
      { id: 1, name: "mani", loc: "Hyb" },
      { id: 2, name: "vamsi", loc: "Hyb" },
      { id: 3, name: "Naresh", loc: "Hyb" },
      { id: 4, name: "Aneesh", loc: "Hyb" },
    ], { status: 200 });
    // return HttpResponse.json({error:'Not matched'}, { status: 400 });
  })
];
