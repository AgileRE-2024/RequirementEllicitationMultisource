from rem_backend.settings import NEWS_CATCHER_API_KEY
import requests
from app_store_scraper import AppStore
from google_play_scraper import Sort, reviews, search
import re
from newscatcherapi import NewsCatcherApiClient

newscatcherapi = NewsCatcherApiClient(x_api_key=NEWS_CATCHER_API_KEY)




def googleplay_scraper(query, limit=10):

    # remove spaces from query
    query = re.sub(r"\s+", " ", query)

    apps = search(query, n_hits=10)

    # Initializing a list to store the output in JSON format
    output_data = []

    # Fetching search results and reviews
    for i, app_info in enumerate(apps):
        # Creating a dictionary for app details
        app_details = {
            "App Name": app_info["title"],
            "App ID": app_info["appId"],
            "Developer": app_info["developer"],
            "Rating Score": app_info["score"],
        }

        # Scraping reviews based on appId
        app_id = app_info["appId"]

        try:
            result, _ = reviews(app_id, lang="en", sort=Sort.NEWEST, count=10)

            # Collecting reviews data
            reviews_data = []
            if result:
                for review in result:
                    reviews_data.append(
                        {
                            "Reviewer": review["userName"],
                            "Rating": review["score"],
                            "Review": review["content"],
                        }
                    )

            # Adding app details and reviews to output data
            output_data.append({"App Details": app_details, "Reviews": reviews_data})

        except Exception as e:
            print(
                f"Failed to retrieve reviews for app '{app_info['title']}' with ID {app_id}. Error: {str(e)}"
            )

    if len(output_data) == 0:
        return {
            "error": "Failed to retrieve data. No reviews found for the given query."
        }
    return output_data


def appstore_scraper(query, country="us", limit=10):
    url = "https://itunes.apple.com/search"
    params = {"term": query, "country": country, "entity": "software", "limit": limit}

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        apps = []
        reviews = []
        for app in data.get("results", []):
            apps.append(
                {
                    "app_name": app.get("trackName"),
                    "app_id": app.get("trackId"),
                }
            )

        for app in apps:
            review = AppStore(
                country=country, app_name=app["app_name"], app_id=app["app_id"]
            )
            review.review(how_many=limit)
            reviews.append(
                {
                    "app_name": app["app_name"],
                    "app_id": app["app_id"],
                    "reviews": review.reviews,
                }
            )

        return reviews

    else:
        return {
            "error": "Failed to retrive data. Status code: " + str(response.status_code)
        }


def x_twitter_scraper(query, limit=10):
    tweets = "Not implemented yet"
    return tweets

def news_scraper(query, limit=3):
    q = f"{query} + 'apps'"
    lang = "en"
    all_articles = newscatcherapi.get_search(
        q=q,
        lang=lang,
        sort_by="relevancy",
        page=1,
        page_size=limit,
    )

    return all_articles
