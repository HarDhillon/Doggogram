import clsx from 'clsx';
import { FaRegThumbsUp } from "react-icons/fa";


export default function Button({ liked, handleLike }) {

    const classes = clsx('text-xl', {
        'text-red-500': liked,
    })

    return (
        <button onClick={handleLike} className="hover:cursor-pointer">
            <FaRegThumbsUp className={classes} />
        </button>
    )
}
