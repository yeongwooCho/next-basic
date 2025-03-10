import { ReviewData } from "@/types";
import style from "./review.item.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";

export default function ReviewItem({ review }: { review: ReviewData }) {
  return (
    <div className={style.container}>
      <div className={style.author}>{review.author}</div>
      <div className={style.content}>{review.content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>
          {new Date(review.createdAt).toLocaleDateString()}
        </div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteButton reviewId={review.id} bookId={review.bookId} />
        </div>
      </div>
    </div>
  );
}
