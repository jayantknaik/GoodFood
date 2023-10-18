import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <>
            <h1>Error!!!</h1>
            <h2>{err.data}</h2>
        </>
    )
}

export default Error;