import style from "./page.module.css";
import {BookData} from "@/types";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const paramsObj = await params;
  const response= await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${paramsObj.id}`);
  if (!response.ok) {
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
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{backgroundImage: `url('${coverImgUrl}')`}}
      >
        <img src={coverImgUrl}/>
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
