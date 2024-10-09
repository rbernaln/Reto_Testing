import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../Like";

test("Muestra el valor por defecto 'Likes: 0'", () => {
  render(<Like />);
  const likesParagraph = screen.getByText("Likes: 0");
  expect(likesParagraph).toBeInTheDocument();
});

test("Incrementa el número de likes cuando se hace clic en 'Like'", () => {
  render(<Like />);
  
  const likeButton = screen.getByText("Like");
  fireEvent.click(likeButton);
  
  const updatedLikesParagraph = screen.getByText("Likes: 1");
  expect(updatedLikesParagraph).toBeInTheDocument();
});

test("Decrementa el número de likes cuando se hace clic en 'Dislike'", () => {
  render(<Like />);
  
  const dislikeButton = screen.getByText("Dislike");
  fireEvent.click(dislikeButton);
  
  const updatedLikesParagraph = screen.getByText("Likes: -1");
  expect(updatedLikesParagraph).toBeInTheDocument();
});
