"use server";

import { ReviewData } from "@/types";

export async function getReviewsAction(bookId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
      { next: { tags: [`review-${bookId}`] } }
    );

    if (!response.ok) {
      throw new Error(`Review fetch failed: ${response.statusText}`);
    }

    const reviews: ReviewData[] = await response.json();
    return reviews;
  } catch (error) {
    console.error(error);
    return [];
  }
}
