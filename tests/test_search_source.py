import os
import tempfile
import unittest
from unittest.mock import patch

DATA = tempfile.TemporaryDirectory()
os.environ["DATA_DIR"] = DATA.name
os.environ.pop("GEMINI_API_KEY", None)
os.environ.pop("DATABASE_URL", None)
os.environ.pop("SUPABASE_DB_URL", None)
os.environ.pop("POSTGRES_URL", None)

from fastapi.testclient import TestClient
from backend import main

ORIGIN = {"origin": "http://127.0.0.1:3000"}


class SearchSourceTests(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(main.app)
        res = self.client.post("/api/sessions", json={"goal": "Master Eigenvalues and Eigenvectors"}, headers=ORIGIN)
        self.session = res.json()
        self.sid = self.session["id"]

    def tearDown(self):
        pass

    def test_search_and_scrape_sources_adds_material_with_beautifulsoup(self):
        path = f"/api/sessions/{self.sid}/sources/search"

        mock_search_results = [
            {"title": "MIT Linear Algebra Lecture 21", "url": "https://example.edu/eigenvalues", "snippet": "Study of eigenvalues and eigenvectors."},
            {"title": "Khan Academy Eigenvectors", "url": "https://example.edu/khan-eigen", "snippet": "Linear transformations and eigenvectors."}
        ]

        def mock_fetch(url):
            if "eigenvalues" in url:
                return ("MIT Linear Algebra Lecture 21", [(1, "An eigenvector is a vector whose direction does not change under linear transformation. " * 5)], url)
            return ("Khan Academy Eigenvectors", [(1, "Eigenvalues scale the eigenvectors by constant lambda factors. " * 5)], url)

        with patch("backend.main.search_web_for_sources", return_value=mock_search_results), \
             patch("backend.main.fetch_public", side_effect=mock_fetch):
            response = self.client.post(path, json={"query": "eigenvalues", "limit": 2}, headers=ORIGIN)
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(len(data["sources"]), 2)
            self.assertEqual(data["sources"][0]["kind"], "web")
            self.assertEqual(data["sources"][0]["title"], "MIT Linear Algebra Lecture 21")
            self.assertIn("scraped_sources", data)
            self.assertEqual(len(data["scraped_sources"]), 2)

    def test_search_uses_session_goal_when_query_empty(self):
        path = f"/api/sessions/{self.sid}/sources/search"

        captured_queries = []
        def mock_search(query, limit=3):
            captured_queries.append(query)
            return [{"title": "Goal Source", "url": "https://example.edu/goal", "snippet": "Test"}]

        with patch("backend.main.search_web_for_sources", side_effect=mock_search), \
             patch("backend.main.fetch_public", return_value=("Goal Source", [(1, "Readable educational content for eigenvalues and eigenvectors. " * 4)], "https://example.edu/goal")):
            response = self.client.post(path, json={}, headers=ORIGIN)
            self.assertEqual(response.status_code, 200)
            self.assertEqual(captured_queries[0], "Master Eigenvalues and Eigenvectors")
            data = response.json()
            self.assertEqual(len(data["sources"]), 1)

    def test_search_handles_no_results_found(self):
        with patch("backend.main.search_web_for_sources", return_value=[]):
            response = self.client.post(f"/api/sessions/{self.sid}/sources/search", json={"query": "obscure unknown topic"}, headers=ORIGIN)
            self.assertEqual(response.status_code, 422)


if __name__ == "__main__":
    unittest.main()
