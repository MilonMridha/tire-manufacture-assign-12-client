import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        fetch('https://dry-sea-91165.herokuapp.com/review')
        .then(res=> res.json())
        .then(data => setReviews(data))
        setIsloading(false)
    },[])

    return [reviews, isLoading];
}
export default useReview;