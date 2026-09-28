import { HomePage } from "./pages/homepage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router"
import { Layout } from "./pages/layout-page/Layout"
import { JobListing } from "./pages/job-listing-page/JobListing"
import { EntriesForm } from "./pages/formpage/EntryForm"
import { Login } from "./pages/authpage/Login/Login"
import { Signup } from "./pages/authpage/Signup/Signup"
import { Provider } from "react-redux"
import { store } from "./redux_store/store"

export function App() {
    console.log(1)

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/layout" element={<Layout />}>
                        <Route index element={<JobListing />}></Route>
                        <Route path="listings" element={<JobListing />}></Route>
                        <Route path="entries" element={<EntriesForm />}></Route>
                    </Route>
                </Routes>

            </BrowserRouter>
        </Provider>
    )
}