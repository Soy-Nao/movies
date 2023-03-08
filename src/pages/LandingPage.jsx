import { ContextMovieCard } from "../components/ContextMovieCard";
import "./LandingPage.css"
export function LandingPage() {
  return (
    <div>
        <div className="landing">
      <p className="textPrin">
        Welcome to our new release movies website. Discover the latest movies on
        the big screen with the help of the TMDb API. Find trailers, synopsis
        and ratings in one place - browse now!
      </p>
      </div>
      <ContextMovieCard />
    </div>
  );
}
