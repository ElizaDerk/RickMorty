import router from "./router/router";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
                {router.map(({name, path, element }) => {
                    return <Route key={name} path={path} element={element} />
                })}
        </Routes>
    </div>
  );
}

export default App;
