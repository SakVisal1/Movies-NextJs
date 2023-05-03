import { useRouter } from "next/router"


function Review(){
    const routers = useRouter()
    const{reviewId , productId} = routers.query
    return(
        <h2> Reviews {reviewId} for product : {productId}</h2>
    )
}
export default Review