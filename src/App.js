import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParalleQueries.page";
import { DynamicParallelQueries } from "./components/DynamicParallelQueries.page";
import { DependantQueries } from "./components/DependantQueries.page";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/parallel-queries">Parallel Queries</Link>
              </li>
              <li>
                <Link to="/dynamic-parallel">Dynamic Parallel Queries</Link>
              </li>
              <li>
                <Link to="/dependant-queries">Dependant</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/dependant-queries"
              element={<DependantQueries emailId="pmrjayawardena@gmail.com" />}
            />
            <Route
              path="/dynamic-parallel"
              element={<DynamicParallelQueries heroIds={[1, 3]} />}
            />
            <Route path="/parallel-queries" element={<ParallelQueriesPage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
