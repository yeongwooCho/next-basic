import { notFound } from "next/navigation";
import style from "./page.module.css";
import { BookData } from "@/types";
import ReviewItem from "@/components/review.item";
import { getReviewsAction } from "@/actions/get-reviews.action";
import ReviewEditor from "@/components/review-editor";

// generateStaticParams에 등록되지 않은 페이지의 경우 notFound page로 redirect 되는 dynamicParams 추가
// page router의 fallback: false
// export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  // params: Promise<{ id: string | string[] }>;
  params: Promise<{ id: string }>;
}) {
  const paramsObj = await params;
  const bookId = paramsObj.id as string;

  return (
    <div className={style.container}>
      <BookDetail bookId={bookId} />
      <ReviewEditor bookId={bookId} />
      <ReviewList bookId={bookId} />
    </div>
  );
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }

  const {
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  }: BookData = await response.json();

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ bookId }: { bookId: string }) {
  const reviews = await getReviewsAction(bookId);

  return (
    <section>
      <h2>리뷰 목록</h2>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} review={review} />
      ))}
    </section>
  );
}
