import { Outlet } from "react-router-dom"
import { MemoFooter } from "./Footer"
import { MemoHeader } from "./Header"


export const Layout = () =>{

    return(
    <>
    <MemoHeader/>
    {/* <FirstContext.Provider value={valueForContext1}> */}
        <Outlet />
    {/* </FirstContext.Provider> */}
    <MemoFooter />
    </>
    )
}