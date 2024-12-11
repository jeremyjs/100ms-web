import { Switch, Route } from "wouter";
import { Home } from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
            <p className="text-muted-foreground">Page Not Found</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
