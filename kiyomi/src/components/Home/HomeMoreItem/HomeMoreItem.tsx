import classes from "./HomeMoreItem.module.css";

export function HomeMoreItem() {
  return (
    <>
      <h2 className="text-center text-[24px] pt-3 mt-14 leading-7">
        더 많은 아이템 살펴보기
      </h2>
      <div className="flex justify-center mt-4">
        <button className={classes.moreBtn}>여성 모두 보기</button>
        <button className={classes.moreBtn}>남성 모두 보기</button>
      </div>
    </>
  );
}
