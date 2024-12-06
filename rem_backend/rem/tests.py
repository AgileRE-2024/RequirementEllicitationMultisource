import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import json
import requests


class TestSearchQueryPlatform(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.query = "e-commerce"
        cls._id = "6a0d14b1-f8a4-44e3-ae3d-6325810a89fc"
        cls.driver = webdriver.Chrome(
            service=Service(
                "C:\\Users\\aryap\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe"
            )
        )
        cls.driver.implicitly_wait(10)

    def test_add_query(self):
        """Test adding a query to the API."""
        driver = self.driver
        driver.get(f"http://127.0.0.1:8000/api/add_query/?q={self.query}")
        r = requests.get(f"http://127.0.0.1:8000/api/add_query/?q={self.query}")
        if r.status_code == 200:
            print("Query added successfully.")

    def test_get_data_newsapi(self):
        """Test fetching data from NewsAPI."""
        driver = self.driver
        driver.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=news&id={self._id}"
        )
        r = requests.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=news&id={self._id}"
        )
        if r.status_code == 200:
            print("Data fetched successfully.")

    def test_get_data_playstore(self):
        """Test fetching data from Play Store."""
        driver = self.driver
        driver.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=playstore&id={self._id}"
        )
        r = requests.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=playstore&id={self._id}"
        )
        if r.status_code == 200:
            print("Data fetched successfully.")

    def test_get_data_appstore(self):
        """Test fetching data from App Store."""
        driver = self.driver
        driver.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=appstore&id={self._id}"
        )
        r = requests.get(
            f"http://127.0.0.1:8000/api/get_data/?q={self.query}&type=appstore&id={self._id}"
        )
        if r.status_code == 200:
            print("Data fetched successfully.")

    def test_preprocessing_data(self):
        """Test preprocessing data."""
        driver = self.driver
        driver.get(f"http://127.0.0.1:8000/api/preprocessing/?id={self._id}")
        r = requests.get(f"http://127.0.0.1:8000/api/preprocessing/?id={self._id}")
        if r.status_code == 200:
            print("Data preprocessed successfully.")

    def test_generate_user_story(self):
        """Test generating user stories."""
        driver = self.driver
        driver.get(f"http://127.0.0.1:8000/api/user_story/?id={self._id}")
        r = requests.get(f"http://127.0.0.1:8000/api/user_story/?id={self._id}")
        if r.status_code == 200:
            print("User stories generated successfully.")

    def test_show_user_story(self):
        """Test editing user stories."""
        driver = self.driver
        driver.get(f"http://127.0.0.1:8000/api/getstories/?id={self._id}")
        r = requests.get(f"http://127.0.0.1:8000/api/getstories/?id={self._id}")
        if r.status_code == 200:
            print("User stories showed successfully.")

    def test_generate_use_case(self):
        """Test generating use case diagrams."""
        driver = self.driver
        driver.get(f"http://127.0.0.1:8000/api/usecase/?id={self._id}")
        r = requests.get(f"http://127.0.0.1:8000/api/usecase/?id={self._id}")
        if r.status_code == 200:
            print("Use case diagrams generated successfully.")
