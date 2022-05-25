import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://dry-sea-91165.herokuapp.com/review')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

    return [reviews];
}
export default useReview;