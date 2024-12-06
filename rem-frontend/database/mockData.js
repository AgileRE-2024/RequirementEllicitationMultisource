export const mockdata = {
    "playstore": {
        "app_id": "com.example.app",
        "description": "This app helps users manage their tasks efficiently using advanced AI features.",
        "reviews": [
            {
                "review_id": "review_001",
                "user": "user123",
                "rating": 4,
                "text": "The app is really helpful for daily task management, but I wish it had more customization options."
            },
            {
                "review_id": "review_002",
                "user": "user456",
                "rating": 5,
                "text": "Amazing AI features! It would be great if it synced with my calendar."
            },
            {
                "review_id": "review_003",
                "user": "user789",
                "rating": 2,
                "text": "Too many bugs. The app crashes when I try to add tasks."
            }
        ]
    },
    "appstore": {
        "app_id": "id.example.app",
        "description": "An AI-powered task management app designed to boost productivity.",
        "reviews": [
            {
                "review_id": "review_101",
                "user": "user789",
                "rating": 3,
                "text": "Good app, but lacks integration with other productivity tools like Google Calendar."
            },
            {
                "review_id": "review_102",
                "user": "user101",
                "rating": 5,
                "text": "I love the task prioritization feature, but I'd like better UI design for quicker navigation."
            },
            {
                "review_id": "review_103",
                "user": "user202",
                "rating": 1,
                "text": "Frequent crashes make the app unusable. Please fix the stability issues."
            }
        ]
    },
    "x": {
        "tweets": [
            {
                "tweet_id": "tweet_001",
                "user": "user_alpha",
                "text": "The task management app is awesome, but needs more calendar integrations!"
            },
            {
                "tweet_id": "tweet_002",
                "user": "user_beta",
                "text": "I hope they fix the crashing issue soon. Can't add tasks after the new update!"
            },
            {
                "tweet_id": "tweet_003",
                "user": "user_gamma",
                "text": "Love the app, but it needs a feature to remind me of tasks automatically."
            }
        ]
    },
    "news": {
        "articles": [
            {
                "article_id": "article_001",
                "title": "Top AI Task Management Apps of 2024",
                "content": "Example app is among the top apps, but users have reported missing integrations with other productivity tools."
            },
            {
                "article_id": "article_002",
                "title": "Example App's New Update Faces Backlash Due to Bugs",
                "content": "Users are unhappy with the latest update, complaining about frequent crashes and missing features."
            },
            {
                "article_id": "article_003",
                "title": "Why AI Task Managers Are the Future of Productivity",
                "content": "AI-powered apps like Example App are transforming productivity, but they need to integrate with more tools and improve stability."
            }
        ]
    }
}


export const userStoriesFromData = [
    {
        userstory: "As a user, I want more customization options so I can tailor the app to my personal needs.",
        who: "user123 (Play Store)",
        what: "More customization options"
    },
    {
        userstory: "As a user, I want the app to sync with my calendar so I can manage tasks and events together.",
        who: "user456 (Play Store)",
        what: "Calendar synchronization"
    },
    {
        userstory: "As a user, I want the app to be bug-free and not crash when adding tasks so I can use it without interruptions.",
        who: "user789 (Play Store)",
        what: "Fix app crashes when adding tasks"
    },
    {
        userstory: "As a user, I want integration with Google Calendar so I can manage all my tasks and events in one place.",
        who: "user789 (App Store)",
        what: "Integration with Google Calendar"
    },
    {
        userstory: "As a user, I want a better UI design for quicker navigation so I can manage tasks more efficiently.",
        who: "user101 (App Store)",
        what: "Improved UI design"
    },
    {
        userstory: "As a user, I want the app to be stable and not crash so I can rely on it for task management.",
        who: "user202 (App Store)",
        what: "Fix app stability and crashes"
    },
    {
        userstory: "As a user, I want calendar integrations so I can better organize my tasks alongside my schedule.",
        who: "user_alpha (Twitter/X)",
        what: "Calendar integrations"
    },
    {
        userstory: "As a user, I want the crashing issue fixed so I can add tasks without issues.",
        who: "user_beta (Twitter/X)",
        what: "Fix crashing issue after update"
    },
    {
        userstory: "As a user, I want an automatic reminder feature so I don't forget important tasks.",
        who: "user_gamma (Twitter/X)",
        what: "Automatic task reminders"
    },
    {
        userstory: "As a user, I want the app to integrate with other productivity tools so I can manage all my work in one place.",
        who: "article_001 (News)",
        what: "Integration with other productivity tools"
    }
];
