import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import moxios from "moxios";
import UserGists from "..";

beforeEach(() => {
  moxios.install();
});
afterEach(() => {
  moxios.uninstall();
});

const renderGists = () => {
  return render(
    <MemoryRouter initialEntries={["/users/nairabhijit"]}>
      <Routes>
        <Route path="/users/:username" element={<UserGists />} />
      </Routes>
    </MemoryRouter>
  );
};

const gistsAPI = async (callback: Function, response: any) => {
  await waitFor(() => {
    const request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 200,
        response,
      })
      .then(() => callback());
  });
};

describe("Gists", () => {
  test("If No Gists component is displayed when a user has no gist", (done) => {
    renderGists();
    gistsAPI(() => {
      const el = screen.getByTestId("no-gists-found");
      expect(el).toBeInTheDocument();
      done();
    }, []);
  });
  test("If Gists are displayed when available for a given user", (done) => {
    renderGists();
    gistsAPI(() => {
      const el = screen.getByTestId("user-gists");
      expect(el).toBeInTheDocument();
      done();
    }, [
      {
        id: "6ecfb513315f0090d0fd48e9d749476c",
        html_url: "https://gist.github.com/6ecfb513315f0090d0fd48e9d749476c",
        created_at: "2022-03-12T12:05:59Z",
        files: {
          "untrusted-lvl1-solution.js": {
            language: "JavaScript",
          },
        },
      },
    ]);
  });
});
