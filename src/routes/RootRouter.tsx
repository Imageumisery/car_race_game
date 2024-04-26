import { RouteObject, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import WinnersPage from "../pages/WinnersPage/WinnersPage";
import GaragePage from "../pages/GaragePage/GaragePage";

const RootRouter = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "*",
                    element: <GaragePage />,
                },
                {
                    path: "/winners",
                    element: <WinnersPage />,
                },
            ],
        },
    ];
    return useRoutes(routes);
};
export default RootRouter;
