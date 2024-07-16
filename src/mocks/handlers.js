import { http, HttpResponse } from "msw";

export const handlers = [
    http.get('/api/data', () => {
            return HttpResponse.json({
                data: ['Item 1', 'Item 2', 'Item 3']
            })
    })
];