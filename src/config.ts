// src/config.ts

// نوع البيانات للحفاظ على الحالة في السيرفر
export type APIConfig = {
  fileserverHits: number;
};

// هذا هو الكائن الذي يخزن البيانات في الذاكرة
export const config: APIConfig = {
  fileserverHits: 0,
};
