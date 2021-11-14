import s from "./Paginator.module.css";
import {useState} from "react";

const Paginator = ({totalItemsCount, usersCount, onPageChange, currentPage, portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount / usersCount);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={s.button}>Back</button>}
            {pages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                .map(p => {
                    return <span onClick={() => {
                        onPageChange(p)
                    }}
                                 className={s.pages + ' ' + (currentPage === p && s.activePage)}
                                 key={p.id}>{p} </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} className={s.button}>Next</button>}
        </div>
    )
}

export default Paginator;