import Skeleton from "react-loading-skeleton";

export function ListingSkeleton(){
    return(
        <div id="card" >
                <div id="insideCard">
                   <Skeleton className="insideCard-h1" height={20} width={200} />
                   <br/>
                   <Skeleton height={15} width={150}/>
                   <Skeleton height={15} width={170}/>
                   <Skeleton height={20} width={150}/>
                </div>

            </div>
    )
}