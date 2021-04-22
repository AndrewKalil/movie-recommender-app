import React from "react";
import { useGlobalContext } from "../../context";
import { MoviesContainer, MoviesWrapper, Card } from "./MoviesComponents";

const Movies = () => {
  const { loading, movies } = useGlobalContext();
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  } else {
    return (
      <MoviesContainer>
        <MoviesWrapper>
          {movies.length > 1 &&
            movies.slice(1).map((item, index) => {
              const { name, description, genres, duration, rating } = item;
              return (
                <Card key={index}>
                  <h3
                    style={{
                      color: "white",
                      margin: "5px",
                      textAlign: "center",
                    }}
                  >{`${index + 1}. ${name}`}</h3>
                  <p style={{ color: "white", margin: "5px" }}>
                    <span
                      style={{
                        background: "goldenrod",
                        padding: "2px",
                        marginRight: "5px",
                        fontWeight: "700",
                        color: "black",
                        borderRadius: "3px",
                      }}
                    >
                      Description:{" "}
                    </span>
                    {description.substring(0, 120)}...
                  </p>
                  <p style={{ color: "white", margin: "5px" }}>
                    <span
                      style={{
                        background: "goldenrod",
                        padding: "2px",
                        marginRight: "5px",
                        fontWeight: "700",
                        color: "black",
                        borderRadius: "3px",
                      }}
                    >
                      Genres:{" "}
                    </span>{" "}
                    {genres}
                  </p>
                  <p style={{ color: "white", margin: "5px" }}>
                    <span
                      style={{
                        background: "goldenrod",
                        padding: "2px",
                        marginRight: "5px",
                        fontWeight: "700",
                        color: "black",
                        borderRadius: "3px",
                      }}
                    >
                      Duration:{" "}
                    </span>{" "}
                    {duration}
                  </p>
                  <p style={{ color: "white", margin: "5px" }}>
                    <span
                      style={{
                        background: "goldenrod",
                        padding: "2px",
                        marginRight: "5px",
                        fontWeight: "700",
                        color: "black",
                        borderRadius: "3px",
                      }}
                    >
                      Rating:{" "}
                    </span>{" "}
                    {rating}
                  </p>
                </Card>
              );
            })}
          {movies.length === undefined &&
          movies["message"] === "No data found" ? (
            <h1>Search for a movie to find similar movies</h1>
          ) : (
            <h1>{movies["message"]}</h1>
          )}
        </MoviesWrapper>
      </MoviesContainer>
    );
  }
};

export default Movies;
