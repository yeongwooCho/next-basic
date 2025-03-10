"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(_: unknown, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!content || !author || !bookId) {
    return { status: false, error: "리뷰 내용과 작성자 이름을 입력해주세요." };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );

    if (!response.ok) {
      throw new Error(`리뷰 저장 실패: ${response.statusText}`);
    }

    revalidatePath(`/book/${bookId}`);

    return { status: true, error: "" };
  } catch (error) {
    console.error(error);
    return { status: false, error: `리뷰 저장 실패: ${error}` };
  }
}
