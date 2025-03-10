import { ReviewData } from "@/types";
import style from "./review.item.module.css";

export default function ReviewItem({ review }: { review: ReviewData }) {
  return (
    <div className={style.container}>
      <div className={style.author}>{review.author}</div>
      <div className={style.content}>{review.content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>
          {new Date(review.createdAt).toLocaleDateString()}
        </div>
        <div className={style.delete_btn}>삭제하기</div>
      </div>
    </div>
  );
}
