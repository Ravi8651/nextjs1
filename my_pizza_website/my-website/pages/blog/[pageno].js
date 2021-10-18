import { useRouter } from "next/router";
const pageno = () => {
    const router = useRouter();
    const pageNumber = router.query.pageno;
    
    return (

        <h1>my {pageNumber} content</h1>  
    );
};
export default pageno;