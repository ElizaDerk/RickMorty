import Main from "../pages/Main";
import Character from "../pages/Character";

const routes = [
    {
        name: 'Main',
        path: "/",
        element: <Main />,
    },
    {
        name: 'Character',
        path: `/character/:id`,
        element: <Character />,
    }
];

export default routes;
