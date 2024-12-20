import { useCallback } from "react";
import { useParams, useNavigate, useSearchParams, createSearchParams } from "react-router-dom";


const ReadPage = () => {
    
    const {tno} = useParams()
    const navigate =useNavigate()

    const[queryParams] =useSearchParams()

    const page=queryParams.get("page") ?parseInt(queryParams.get("page")) : 1
    const size=queryParams.get("size") ?parseInt(queryParams.get("size")) : 10
    const queryStr= createSearchParams({page,size}).toString()

    const moveToModify = useCallback((tno) => {
        navigate({pathname: `/todo/modify/${tno}`, search : queryStr})
    },[tno, page, size])


    return ( 
   <div className="text-3xl font-extrabold">
    Todo Read Page Component {tno}
    <div><button onClick={() => moveToModify(tno)}>Test Modify</button></div>
    </div>
    );
}
export default ReadPage;