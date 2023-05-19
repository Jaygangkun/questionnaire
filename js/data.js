const questionnareData = [
    {
        'title': 'Basic Information',
        'sections': [
            {
                'title': 'Name',
                'parts': [
                    {
                        'question': "What is your first name?",
                        'options': '',
                        'type': 'text'
                    },
                    {
                        'question': "What is your last name?",
                        'options': '',
                        'type': 'text'
                    },
                    {
                        'question': "What is your middle name, if any?",
                        'options': '',
                        'type': 'text'
                    },
                    {
                        'question': "What is your nickname, if any?",
                        'options': '',
                        'type': 'text'
                    }
                ]
            },
            {
                'title': 'Age',
                'parts': [
                    {
                        'question': "What is your date of birth?",
                        'options': '',
                        'type': 'text'
                    }
                ]
            },
            {
                'title': 'Physical Characteristics',
                'parts': [
                    {
                        'question': "What is your sex? (Minimum 1; Maximum 1)",
                        'options': ["Male", "Female", "Intersex"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_sex'
                    },
                    {
                        'question': "What is your eye color? (Minimum 1; Maximum 1)",
                        'options': ["Blue", "Green", "Hazel", "Light brown", "Dark brown", "Gray", "Amber", "Black", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your current hair color? (Minimum 1; Maximum 1)",
                        'options': ["Light blonde", "Medium blonde", "Platinum blonde", "Dirty blonde", "Strawberry blonde", "Light brown", "Medium brown", "Dark brown", "Chestnut brown", "Auburn", "Mahogany", "Burgundy", "Red", "Ginger", "Copper", "Black", "Gray", "Silver", "White", "Blue", "Green", "Purple", "Pink", "Rainbow", "Multicolored", "Bald", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your natural hair color? (Minimum 1; Maximum 1)",
                        'options': ["Blonde", "Brown", "Red", "Black", "Gray", "Silver", "White", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your body type? (Minimum 1; Maximum 1)",
                        'optionGroups': [
                            {
                                'type': '0', // Male,
                                'valuePrefix': 'M',
                                'options': ["img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png"]
                            },
                            {
                                'type': '1', // Female
                                'valuePrefix': 'F',
                                'options': ["img/body3.png", "img/body4.png", "img/body3.png", "img/body4.png", "img/body3.png", "img/body4.png", "img/body3.png", "img/body4.png", "img/body3.png", "img/body4.png"]
                            },
                            {
                                'type': '2', // Intersex
                                'valuePrefix': 'I',
                                'options': ["img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png", "img/body5.png"]
                            }
                        ],
                        'type': 'image-select',
                        'width': 140,
                        'height': 290,
                        'id': 'q_body_type'
                    },
                    {
                        'question': "What is your height? (Minimum 1; Maximum 1)",
                        'options': ["Less than 5&#x2032; ft (Less than 152 cm)", "5&#x2032; ft (152-154 cm)", "5&#x2032;1&#x2033; ft (155-156 cm)", "5&#x2032;2&#x2033; ft (157-159 cm)", "5&#x2032;3&#x2033; ft (160-162 cm)", "5&#x2032;4&#x2033; ft (163-165 cm)", "5&#x2032;5&#x2033; ft (166-167 cm)", "5&#x2032;6&#x2033; ft (168-170 cm)", "5&#x2032;7&#x2033; ft (171-172 cm)", "5&#x2032;8&#x2033; ft (173-175 cm)", "5&#x2032;9&#x2033; ft (176-177 cm)", "5&#x2032;10&#x2033; ft (178-180 cm)", "5&#x2032;11&#x2033; ft (181-182 cm)", "6&#x2032; ft (183-185 cm)", "6&#x2032;1&#x2033; ft (186-187 cm)", "6&#x2032;2&#x2033; ft (188-190 cm)", "6&#x2032;3&#x2033; ft (191-193 cm)", "6&#x2032;4&#x2033; ft (194-195 cm)", "6&#x2032;5&#x2033; ft (196-198 cm)", "6&#x2032;6&#x2033; ft (199-201 cm)", "6&#x2032;7&#x2033; ft (202-203 cm)", "6&#x2032;8&#x2033; ft (204-206 cm)", "6&#x2032;9&#x2033; ft (207-208 cm)", "6&#x2032;10&#x2033; ft (209-211 cm)", "6&#x2032;11&#x2033; ft (212-213 cm)", "More than 7&#x2032; ft (More than 213 cm)"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your weight? (Minimum 1; Maximum 1)",
                        'options': ["Less than 90 lb (Less than 41 kg)", "90-96 lb (41-43 kg)", "97-102 lb (44-46 kg)", "103-108 lb (47-49 kg)", "109-114 lb (50-52 kg)", "115-121 lb (53-55 kg)", "122-128 lb (56-58 kg)", "129-134 lb (59-61 kg)", "135-141 lb (62-64 kg)", "142-147 lb (65-67 kg)", "148-154 lb (68-70 kg)", "155-161 lb (71-73 kg)", "162-167 lb (74-76 kg)", "168-174 lb (77-79 kg)", "175-180 lb (80-82 kg)", "181-187 lb (83-85 kg)", "188-194 lb (86-88 kg)", "195-200 lb (89-91 kg)", "201-207 lb (92-94 kg)", "208-214 lb (95-97 kg)", "215-220 lb (98-100 kg)", "221-227 lb (101-103 kg)", "228-233 lb (104-106 kg)", "234-240 lb (107-109 kg)", "241-247 lb (110-112 kg)", "248-253 lb (113-115 kg)", "254-260 lb (116-118 kg)", "More than 261 lb (More than 118 kg)"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personal Identity & Self-Perception',
        'sections': [
            {
                'title': 'Personal Identity & Self-Perception',
                'parts': [
                    {
                        'question': "How would you describe your level of masculinity or femininity? (Minimum 1; Maximum 1)",
                        'options': ["Very masculine", "Mostly masculine", "Moderately masculine", "Slightly masculine", "Equally masculine and feminine", "Slightly feminine", "Moderately feminine", "Mostly feminine", "Very feminine", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have an internal monologue? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your general happiness level? (Minimum 1; Maximum 1)",
                        'options': ["Extremely happy", "Very happy", "Moderately happy", "Neither happy nor unhappy", "Moderately unhappy", "Very unhappy", "Extremely unhappy"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about your life overall? (Minimum 1; Maximum 1)",
                        'options': ["Absolutely love it", "Really enjoy it", "Mostly satisfied", "Have ups and downs", "Somewhat dissatisfied", "Quite unhappy", "Completely hate it"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you approach personal growth and self-improvement? (Minimum 1; Maximum 1)",
                        'options': ["Proactively, I am always working on myself", "Reactively, I work on myself when I face challenges", "Passively, I let life guide my growth", "I don&#x2032;t prioritize personal growth"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your self-esteem? (Minimum 1; Maximum 1)",
                        'options': ["High, I feel good about myself", "Moderate, I have a balanced view of myself", "Low, I struggle with self-worth"],
                        'type': 'multi-select',
                        'maxOptions': 1
                    }
                ]
            }
        ]
    },
    {
        'title': 'Mindset & Attitude',
        'sections': [
            {
                'title': 'Mindset & Attitude',
                'parts': [
                    {
                        'question': "How do you approach personal and professional growth? (Minimum 1; Maximum 2)",
                        'options': ["Actively seeking opportunities to improve", "Setting goals and working towards them", "Taking things one day at a time and learning from experiences", "Relying on others for guidance and support", "Continuously educating yourself", "Embracing challenges and stepping out of your comfort zone"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    },
                    {
                        'question': "How would you describe your overall outlook on life? (Minimum 1; Maximum 1)",
                        'options': ["Optimistic, always looking for the silver lining", "Realistic, keeping things in perspective", "Cautiously optimistic, preparing for the worst", "Pessimistic, expecting the worst to happen", "Idealistic, believing in the best of people and situations", "Pragmatic, focusing on practical solutions"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How resilient are you when faced with setbacks? (Minimum 1; Maximum 1)",
                        'options': ["Extremely resilient, I bounce back quickly", "Very resilient, I recover fairly quickly", "Moderately resilient, it takes me some time to recover", "Somewhat resilient, I struggle to recover", "Not resilient, I have a hard time bouncing back"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you cope with challenges and setbacks? (Minimum 1; Maximum 1)",
                        'options': ["Positive thinking and optimism", "Seeking support from friends and family", "Taking time for self-care", "Problem-solving and finding solutions", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you practice positive thinking? (Minimum 1; Maximum 1)",
                        'options': ["Almost always", "Often", "Sometimes", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "In difficult situations, how do you maintain a positive attitude? (Minimum 1; Maximum 1)",
                        'options': ["Focusing on the good aspects", "Staying optimistic about the future", "Relying on my support network", "Practicing gratitude", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Emotional Intelligence & Communication',
        'sections': [
            {
                'title': 'Emotional Intelligence & Communication',
                'parts': [
                    {
                        'question': "How would you rate your level of empathy and emotional intelligence? (Minimum 1; Maximum 1)",
                        'options': ["Extremely high", "Very high", "Moderately high", "Somewhat high", "Not high at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you usually handle conflicts? (Minimum 1; Maximum 1)",
                        'options': ["Avoid them at all costs", "Give in to keep the peace", "Calmly discuss and compromise", "Assertively express my needs and feelings", "Confront them head-on and aggressively"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How comfortable are you with vulnerability and emotional sharing in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Extremely comfortable", "Very comfortable", "Moderately comfortable", "Somewhat comfortable", "Not comfortable at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personality Traits',
        'sections': [
            {
                'title': 'Personality Traits',
                'parts': [
                    {
                        'question': "Which of these traits best describe your personality? (Minimum 1; Maximum 5)",
                        'options': ["Adaptable", "Adventurous", "Ambitious", "Analytical", "Artistic", "Assertive", "Calm", "Caring", "Charismatic", "Charming", "Cheerful", "Confident", "Conscientious", "Conservative", "Creative", "Curious", "Decisive", "Dedicated", "Detail-oriented", "Diligent", "Direct", "Disciplined", "Easygoing", "Empathetic", "Energetic", "Enthusiastic", "Extroverted", "Focused", "Friendly", "Fun-loving", "Generous", "Genuine", "Goal-oriented", "Good listener", "Hardworking", "Humble", "Humorous", "Independent", "Innovative", "Inquisitive", "Introverted", "Kind", "Laid-back", "Leader", "Logical", "Loyal", "Meticulous", "Modest", "Motivated", "Open-minded", "Optimistic", "Organized", "Outgoing", "Passionate", "Patient", "Perceptive", "Persevering", "Persistent", "Playful", "Pragmatic", "Proactive", "Quick-witted", "Realistic", "Reflective", "Reliable", "Resilient", "Resourceful", "Respectful", "Responsible", "Romantic", "Self-disciplined", "Self-starter", "Sensitive", "Serious", "Shy", "Sincere", "Sociable", "Spontaneous", "Steadfast", "Strategic", "Supportive", "Sympathetic", "Tenacious", "Thoughtful", "Trustworthy", "Understanding", "Visionary", "Warm", "Witty", "Zestful"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "What type of guy are you? (Minimum 1; Maximum 3)",
                        'options': ["Athletic", "Skater", "Surfer", "Snowboarder", "Equestrian", "Country", "Rocker", "Hip-hop", "Punk", "Emo", "Preppy", "Nerd", "Geek", "Gamer", "Tech", "Outdoorsy", "Nature", "Artist", "Musician", "Dancer", "Actor", "Intellectual", "Bookworm", "Poet", "Philosopher", "Entrepreneur", "Business", "Social activist", "Environmentalist", "Spiritual", "Religious", "Traditional", "Modern", "Trendy", "Fashion", "Culinary", "Vintage", "Minimalist", "Globetrotter", "Cosplay fan", "DIY enthusiast", "Pet lover", "Beach lover", "Urban explorer", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'id': 'q_guy_type'
                    },
                    {
                        'question': "What type of girl are you? (Minimum 1; Maximum 3)",
                        'options': ["Athletic", "Skater", "Surfer", "Snowboarder", "Equestrian", "Country", "Rocker", "Hip-hop", "Punk", "Emo", "Preppy", "Nerd", "Geek", "Gamer", "Tech", "Outdoorsy", "Nature", "Artist", "Musician", "Dancer", "Actor", "Intellectual", "Bookworm", "Poet", "Philosopher", "Entrepreneur", "Business", "Social activist", "Environmentalist", "Spiritual", "Religious", "Traditional", "Modern", "Trendy", "Fashion", "Culinary", "Vintage", "Minimalist", "Globetrotter", "Cosplay fan", "DIY enthusiast", "Pet lover", "Beach lover", "Urban explorer", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'id': 'q_girl_type'
                    },
                    {
                        'question': "Are you more of an introvert or an extrovert? (Minimum 1; Maximum 1)",
                        'options': ["Highly introverted", "Moderately introverted", "Neither introverted nor extroverted", "Moderately extroverted", "Highly extroverted"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you more of an optimist or a pessimist? (Minimum 1; Maximum 1)",
                        'options': ["Highly optimistic", "Moderately optimistic", "Neither optimistic nor pessimistic", "Moderately pessimistic", "Highly pessimistic"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How open-minded and curious are you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely open-minded and curious", "Very open-minded and curious", "Moderately open-minded and curious", "Somewhat open-minded and curious", "Not open-minded or curious at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is it for you to challenge your own beliefs and learn from others? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Humor & Laughter',
        'sections': [
            {
                'title': 'Humor & Laughter',
                'parts': [
                    {
                        'question': "How would you describe your sense of humor? (Minimum 1; Maximum 1)",
                        'options': ["Dark", "Sarcastic", "Slapstick", "Witty", "Self-deprecating", "Punny", "Observational", "Deadpan", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is laughter in your life? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you use humor in your daily life? (Minimum 1; Maximum 1)",
                        'options': ["Constantly", "Frequently", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "I enjoy: (Minimum 1; Maximum 2) (Cannot select both \"None\" and other options)",
                        'options': ["Watching comedy shows or movies", "Going to comedy clubs", "Reading humorous books", "Sharing jokes or memes", "Telling jokes or funny stories", "Laughing with friends and family", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'None'
                    },
                    {
                        'question': "In difficult situations, I tend to: (Minimum 1; Maximum 1)",
                        'options': ["Use humor to lighten the mood", "Stay serious and focused", "A mix of humor and seriousness", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Who are your top 3 favorite comedians? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Aisling Bea", "Ali Wong", "Amy Schumer", "Aziz Ansari", "Bert Kreischer", "Bill Burr", "Bill Hicks", "Billy Connolly", "Bo Burnham", "Cedric the Entertainer", "Chris Rock", "Daniel Tosh", "Dave Chappelle", "David O&#x2032;Doherty", "Demetri Martin", "Don Rickles", "Doug Stanhope", "Eddie Griffin", "Eddie Izzard", "Eddie Murphy", "Ellen DeGeneres", "Eric Andre", "Frank Caliendo", "Frankie Boyle", "Gabriel Iglesias", "Garry Shandling", "George Carlin", "Greg Davies", "Hannah Gadsby", "Hasan Minhaj", "Iliza Shlesinger", "Jack Whitehall", "James Acaster", "Janeane Garofalo", "J.B. Smoove", "Jeff Dunham", "Jeff Foxworthy", "Jerry Seinfeld", "Jim Gaffigan", "Jim Jefferies", "Jo Koy", "Joe Rogan", "John Mulaney", "Jon Stewart", "Josie Long", "Katherine Ryan", "Kathy Griffin", "Kevin Hart", "Larry the Cable Guy", "Lewis Black", "Lisa Lampanelli", "Louis C.K.", "Margaret Cho", "Marc Maron", "Maria Bamford", "Martin Lawrence", "Mike Birbiglia", "Mitch Hedberg", "Natasha Leggero", "Nick Kroll", "Nish Kumar", "Nikki Glaser", "Patton Oswalt", "Paul F. Tompkins", "Ray Romano", "Reggie Watts", "Richard Lewis", "Richard Pryor", "Ricky Gervais", "Rob Delaney", "Robin Williams", "Ronny Chieng", "Roseanne Barr", "Roy Wood Jr.", "Russell Brand", "Russell Peters", "Ryan Hamilton", "Sam Kinison", "Sandra Bernhard", "Sarah Millican", "Sarah Silverman", "Seth Meyers", "Simon Amstell", "Sinbad", "Stephen Colbert", "Steve Martin", "Stewart Lee", "Tim Allen", "Tim Minchin", "Tig Notaro", "Tom Segura", "Tommy Tiernan", "Tracy Morgan", "Trevor Noah", "Victoria Wood", "Wanda Sykes", "Weird Al Yankovic", "Whitney Cummings", "Zach Galifianakis", "Whoopi Goldberg", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personal Growth & Self-Care',
        'sections': [
            {
                'title': 'Personal Growth & Self-Care',
                'parts': [
                    {
                        'question': "How often do you engage in self-reflection? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Weekly", "Monthly", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is personal growth to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you rate your commitment to self-improvement? (Minimum 1; Maximum 1)",
                        'options': ["Highly committed", "Moderately committed", "Somewhat committed", "Slightly committed", "Not committed at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What self-care practices do you regularly engage in? (Minimum 1; Maximum 3)",
                        'options': ["Exercise", "Healthy eating", "Meditation", "Therapy", "Journaling", "Hobbies", "Relaxation techniques", "Spending time with loved ones", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                    },
                    {
                        'question': "How often do you practice mindfulness or meditation? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Weekly", "Monthly", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Health & Wellness',
        'sections': [
            {
                'title': 'Health & Wellness',
                'parts': [
                    {
                        'question': "How would you rate your overall physical health? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Very good", "Good", "Fair", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What hormonal birth control do you currently use, if any? (Minimum 1; Maximum 1) (e.g., \"Alesse\") (Question disappears if Sex &#x2260; Female)",
                        'optionGroups': [
                            {
                                "title": 'Combined oral contraceptives (COCs)',
                                'options': ["Alesse", "Apri", "Aviane", "Beyaz", "Brevicon", "Demulen", "Desogen", "Diane-35", "Enpresse", "Estrostep Fe", "Femcon Fe", "Gianvi", "Gildess", "Jolessa", "Kariva", "Kelnor", "Lessina", "Levora", "Loestrin Fe", "Lo Loestrin Fe", "Loryna", "Low-Ogestrel", "Mircette", "Mononessa", "Natazia", "Necon", "Nordette", "Norgestimate/Ethinyl Estradiol", "Nortrel", "Ortho-Cept", "Ortho Cyclen", "Ortho Tri-Cyclen", "Ortho Tri-Cyclen Lo", "Ovcon", "Safyral", "Seasonale", "Seasonique", "Sronyx", "Tri-Lo Sprintec", "TriNessa", "Trivora", "Yasmin", "Yaz", "Zenchent", "Zovia"]
                            },
                            {
                                "title": 'Progestin-only pills (POPs, also known as &#x2033;mini-pills&#x2033;)',
                                'options': ["Camila", "Errin", "Heather", "Jolivette", "Micronor", "Nora-Be", "Norlyda", "Nor-QD", "Ortho Micronor", "Sharobel", "Slynd"]
                            },
                            {
                                "title": 'Transdermal patch:',
                                'options': ["Ortho Evra", "Xulane"]
                            },
                            {
                                "title": 'Vaginal ring:',
                                'options': ["Annovera", "NuvaRing"]
                            },
                            {
                                "title": 'Injectable:',
                                'options': ["Depo-Provera", "Sayana Press"]
                            },
                            {
                                "title": 'Intrauterine devices (IUDs) with hormones:',
                                'options': ["Kyleena", "Liletta", "Mirena", "Skyla"]
                            },
                            {
                                "title": 'Implant:',
                                'options': ["Nexplanon"]
                            },
                            {
                                "title": '',
                                'options': ["Other", "None"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_hormonal_birth'
                    },
                    {
                        'question': "What types of medications, if any, are you currently taking? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Allergy medications (e.g., antihistamines, decongestants)", "Antidepressants", "Antidiabetic medications", "Anti-anxiety medications", "Antibiotics", "Antihypertensive medications (blood pressure control)", "Antipsychotic medications", "Asthma medications (e.g., inhalers, corticosteroids)", "Birth control or hormonal contraceptives", "Blood thinners (anticoagulants)", "Cholesterol-lowering medications (e.g., statins)", "Epilepsy medications (anticonvulsants)", "Gastrointestinal medications (e.g., antacids, proton pump inhibitors)", "Heartburn or acid reflux medications", "Hormone replacement therapy", "Insulin or other diabetes medications", "Mood stabilizers (for bipolar disorder)", "Opioid or non-opioid pain relievers", "Prescription acne medications", "Prescription sleep aids", "Stimulant medications (for ADHD)", "Thyroid medications", "Vitamins or dietary supplements", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How COVID-19 vaccine doses have you received? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your blood type? (Minimum 1; Maximum 1)",
                        'options': ["A negative", "A positive", "AB negative", "AB positive", "B negative", "B positive", "O negative", "O positive", "Unknown"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "To what extent, if any, are you affected by blindness? (Minimum 1; Maximum 1)",
                        'options': ["Completely blind", "Legally blind", "Partially blind", "Not blind"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "To what extent, if any, are you affected by deafness or hearing loss? (Minimum 1; Maximum 1)",
                        'options': ["Completely deaf", "Hard of hearing", "Mild hearing loss", "Not deaf or hard of hearing"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have any physical health issues or conditions? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Allergies", "Anemia", "Asthma", "Arthritis", "Cancer", "Celiac disease", "Chronic fatigue syndrome", "Chronic pain", "Crohn&#x2032;s disease", "Diabetes (Type 1)", "Diabetes (Type 2)", "Endometriosis", "Epilepsy", "Fibromyalgia", "Gastroesophageal reflux disease (GERD)", "Heart disease", "High blood pressure", "High cholesterol", "Hypothyroidism", "Irritable bowel syndrome (IBS)", "Kidney disease", "Liver disease", "Lupus", "Migraines", "Multiple sclerosis", "Osteoporosis", "Parkinson&#x2032;s disease", "Polycystic ovary syndrome (PCOS)", "Psoriasis", "Rheumatoid arthritis", "Sleep apnea", "Ulcerative colitis", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "Do you have any disorders or disabilities? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Autism spectrum disorder", "Blindness or visual impairment", "Cerebral palsy", "Chronic pain or fibromyalgia", "Cognitive or intellectual disability", "Deafness or hearing impairment", "Developmental coordination disorder (e.g., dyspraxia)", "Diabetes (Type 1 or Type 2)", "Down syndrome", "Dyslexia or other learning disabilities", "Ehlers-Danlos syndrome", "Epilepsy or seizure disorder", "Multiple sclerosis", "Muscular dystrophy", "Parkinson&#x2032;s disease", "Physical disability (e.g., amputation, limited mobility)", "Rheumatoid arthritis or other autoimmune disorders", "Spina bifida", "Spinal cord injury or paralysis", "Traumatic brain injury", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "Are you neurodiverse? (Minimum 1; Maximum &#8734) (Cannot select both \"No\" and other options)",
                        'options': ["Attention deficit hyperactivity disorder (ADHD)", "Autism spectrum disorder (ASD)", "Dyscalculia", "Dysgraphia", "Dyslexia", "Nonverbal learning disorder (NVLD)", "Sensory processing disorder (SPD)", "Social communication disorder", "Tourette syndrome", "Other neurodiverse condition", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'No'
                    },
                    {
                        'question': "Are you missing any limbs or extremities, if so, which ones? (Minimum 1; Maximum &#8734) (Cannot select both \"Finger\" and \"Multiple fingers,\" etc.) (Cannot select both \"No\" and other options)",
                        'options': ["Finger", "Multiple fingers", "Hand", "Both hands", "Arm", "Both arms", "Toe", "Multiple toes", "Foot", "Both feet", "Leg", "Both legs", "No"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'No',
                        'optionExclusives': [
                            {
                                'main': 'Finger',
                                'others': ["Multiple fingers", "Both hands", "Both arms"]
                            },
                            {
                                'main': 'Multiple fingers',
                                'others': ["Finger", "Both hands", "Both arms"]
                            },
                            {
                                'main': 'Hand',
                                'others': ["Both hands", "Both arms"]
                            },
                            {
                                'main': 'Both hands',
                                'others': ["Hand", "Both arms", "Finger", "Multiple fingers"]
                            },
                            {
                                'main': 'Arm',
                                'others': ["Both arms"]
                            },
                            {
                                'main': 'Both arms',
                                'others': ["Arm", "Hand", "Both hands", "Finger", "Multiple fingers"]
                            },
                            {
                                'main': 'Toe',
                                'others': ["Multiple toes"]
                            },
                            {
                                'main': 'Multiple toes',
                                'others': ["Toe"]
                            },
                            {
                                'main': 'Foot',
                                'others': ["Both feet"]
                            },
                            {
                                'main': 'Both feet',
                                'others': ["Foot", "Toe", "Multiple toes"]
                            },
                            {
                                'main': 'Leg',
                                'others': ["Both legs"]
                            },
                            {
                                'main': 'Both legs',
                                'others': ["Leg", "Foot", "Both feet", "Toe", "Multiple toes"]
                            }
                        ]
                    },
                    {
                        'question': "Do you have any STDs? (Minimum 1; Maximum &#8734) (Cannot select both \"No, I don&#x2032;t have any STDs\" and other options)",
                        'options': ["Chlamydia", "Genital herpes (HSV-2)", "Genital warts (HPV)", "Gonorrhea", "Hepatitis B", "Hepatitis C", "HIV/AIDS", "Syphilis", "Trichomoniasis", "Other STD", "No, I don&#x2032;t have any STDs"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'No, I don&#x2032;t have any STDs'
                    },
                    {
                        'question': "Have you ever undergone surgery? If so, what type? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options) ",
                        'options': ["Appendectomy (removal of appendix)", "Bariatric surgery (e.g., gastric bypass, gastric sleeve)", "Cataract surgery", "Cesarean section", "Dental surgery (e.g., wisdom tooth extraction)", "Gallbladder removal (cholecystectomy)", "Heart surgery (e.g., coronary artery bypass, valve replacement)", "Hysterectomy (removal of uterus)", "Joint replacement (e.g., knee, hip)", "Mastectomy (removal of breast tissue)", "Organ transplant (e.g., kidney, liver, heart)", "Plastic or reconstructive surgery (e.g., rhinoplasty, breast augmentation)", "Prostatectomy (removal of prostate)", "Spinal surgery (e.g., discectomy, fusion)", "Tonsillectomy (removal of tonsils)", "Tubal ligation or vasectomy (sterilization)", "Other surgery", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "Have you ever had an abortion, and if so, how many? (Minimum 1; Maximum 1) (Question disappears if Sex &#x2260; Female)",
                        'options': ["None", "1", "2", "3", "4", "5 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_have_abortion'
                    },
                    {
                        'question': "Have you ever used Plan B, and if so, how many times? (Minimum 1; Maximum 1) (Question disappears if Sex &#x2260; Female)",
                        'options': ["Never", "1 time", "2 times", "3 times", "4 times", "5 or more times"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_have_plan_b'
                    },
                    {
                        'question': "How would you rate your overall mental health? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Very good", "Good", "Fair", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have any mental health issues or conditions? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["ADHD (Attention deficit hyperactivity disorder)", "Anxiety disorder", "Bipolar disorder", "Borderline personality disorder", "Depression", "Eating disorders (Anorexia, Bulimia, Binge eating disorder)", "Generalized anxiety disorder (GAD)", "Obsessive-compulsive disorder (OCD)", "Panic disorder", "Post-traumatic stress disorder (PTSD)", "Schizophrenia", "Seasonal affective disorder (SAD)", "Social anxiety disorder", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "How many times do you cry each year, on average? (Minimum 1; Maximum 1)",
                        'options': ["0-5 times", "6-10 times", "11-20 times", "21-30 times", "31-50 times", "50+ times"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever been a victim of a serious crime? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever been a victim of terrorism? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever experienced a serious instance of sexual assault? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever sought therapy or counseling for mental health reasons? (Minimum 1; Maximum 1)",
                        'options': ["Yes, and it was helpful", "Yes, but it wasn&#x2032;t helpful", "No, but I&#x2032;m open to it", "No, and I&#x2032;m not interested"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever had a near death experience? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever attempted suicide? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever considered suicide? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many people do you personally know that have committed suicide? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of these phobias, if any, do you experience? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Acrophobia (fear of heights)", "Agoraphobia (fear of open spaces or crowds)", "Arachnophobia (fear of spiders)", "Astraphobia (fear of thunder and lightning)", "Claustrophobia (fear of enclosed spaces)", "Cynophobia (fear of dogs)", "Glossophobia (fear of public speaking)", "Mysophobia (fear of germs or dirt)", "Nyctophobia (fear of darkness)", "Ophidiophobia (fear of snakes)", "Pteromerhanophobia (fear of flying)", "Social phobia (fear of social situations)", "Trypanophobia (fear of needles or injections)", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you manage stress in your life? (Minimum 1; Maximum 2)",
                        'options': ["Exercise", "Meditation", "Talking to friends or family", "Therapy", "Hobbies or creative outlets", "Ignoring it", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    },
                    {
                        'question': "Which of these substances, if any, have you used previously? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Alcohol (including beer, wine, liquor)", "Tobacco (including cigarettes, cigars, pipe, hookah)", "E-cigarettes", "Cannabis", "Heroin", "Cocaine", "Anabolic steroids", "Performance enhancing substances", "Prescription drugs", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which of these substances, if any, do you use regularly? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Alcohol (including beer, wine, liquor)", "Tobacco (including cigarettes, cigars, pipe, hookah)", "E-cigarettes", "Cannabis", "Heroin", "Cocaine", "Anabolic steroids", "Performance enhancing substances", "Prescription drugs", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    }
                ]
            },
        ]
    },
    {
        'title': 'Intuition & Decision-Making',
        'sections': [
            {
                'title': 'Intuition & Decision-Making',
                'parts': [
                    {
                        'question': "How much do you rely on your intuition when making decisions? (Minimum 1; Maximum 1)",
                        'options': ["Almost always", "Often", "Sometimes", "Rarely", "Almost never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "When faced with a difficult decision, which approach do you prefer? (Minimum 1; Maximum 1)",
                        'options': ["Trusting my gut feeling", "Analyzing pros and cons", "Seeking advice from others", "Considering the impact on others", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you make decisions based on your gut feeling? (Minimum 1; Maximum 1)",
                        'options': ["Almost always", "Often", "Sometimes", "Rarely", "Almost never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How confident are you in your decision-making abilities? (Minimum 1; Maximum 1)",
                        'options': ["Extremely confident", "Very confident", "Moderately confident", "Somewhat confident", "Not confident at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Ambitions & Drive',
        'sections': [
            {
                'title': 'Ambitions & Drive',
                'parts': [
                    {
                        'question': "How ambitious would you consider yourself to be? (Minimum 1; Maximum 1)",
                        'options': ["Extremely ambitious", "Very ambitious", "Moderately ambitious", "Somewhat ambitious", "Not ambitious at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How driven and motivated are you when it comes to achieving your goals? (Minimum 1; Maximum 1)",
                        'options': ["Extremely driven", "Very driven", "Moderately driven", "Somewhat driven", "Not driven at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Hopes, Fears/Failures & Life Milestones',
        'sections': [
            {
                'title': 'Hopes, Fears/Failures & Life Milestones',
                'parts': [
                    {
                        'question': "What are your top two hopes and dreams? (Minimum 1; Maximum 2) (Cannot select both \"None\" and other options)",
                        'options': ["Personal growth and self-discovery", "A successful career", "Building a loving family", "Traveling and experiencing new cultures", "Owning a dream home", "Achieving financial freedom", "Pursuing a passion project", "Making a difference in the world", "Developing strong, lasting friendships", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which of these fears resonate with you the most? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Fear of failure", "Fear of rejection", "Fear of loneliness", "Fear of missing out on life experiences", "Fear of financial instability", "Fear of not finding true love", "Fear of losing a loved one", "Fear of not living up to your potential", "Fear of change", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is your biggest regret? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Not pursuing my dream career", "Not traveling more", "Not maintaining important relationships", "Not taking enough risks", "Not focusing on my health", "Not finishing my education", "Not taking more time for self-care", "Not standing up for myself", "Not investing earlier", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What has been your biggest failure? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Failed relationship", "Failed business venture", "Academic failure", "Missed career opportunity", "Poor financial decision", "Not achieving a personal goal", "Not maintaining a healthy lifestyle", "Broken friendship", "Failed creative project", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your proudest life accomplishments so far? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Achieving a career milestone", "Building strong relationships with loved ones", "Completing a personal goal or challenge", "Overcoming a significant obstacle or adversity", "Pursuing higher education", "Contributing to a meaningful cause", "Developing a talent or skill", "Establishing a healthy lifestyle", "Owning a home or property", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of the following life milestones are you most looking forward to? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Starting a family", "Achieving financial independence", "Exploring the world and traveling to new places", "Making a meaningful impact on the world", "Advancing in your career", "Pursuing further education or certifications", "Retiring and enjoying your golden years", "Developing a new hobby or interest", "Strengthening your spiritual or emotional well-being", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    }
                ]
            },
        ]
    },
    {
        'title': 'Religion & Faith',
        'sections': [
            {
                'title': 'Religion & Faith',
                'parts': [
                    {
                        'question': "What is your religious affiliation? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Agnosticism", "Atheism", "Baha&#x2032;i", "Buddhism", "Christianity - Anglican", "Christianity - Baptist", "Christianity - Catholic", "Christianity - Christian Science", "Christianity - Coptic", "Christianity - Evangelical", "Christianity - Lutheran", "Christianity - Methodist", "Christianity - Mormon", "Christianity - Orthodox", "Christianity - Pentecostal", "Christianity - Presbyterian", "Christianity - Protestant", "Christianity - Seventh-Day Adventist", "Christianity - other denomination", "Christianity - no denomination", "Hinduism", "Islam - Sunni", "Islam - Shia", "Islam - Sufism, Islam - Ahmadiyya, Islam - other denomination", "Islam - no denomination", "Jainism", "Judaism - Haredi or Ultra Orthodox", "Judaism - Hasidic", "Judaism - Modern Orthodox", "Judaism - Conservative", "Judaism - Reform", "Judaism - Reconstructionist", "Judaism - Renewal", "Judaism - Humanistic", "Judaism - other denomination", "Judaism - no denomination", "Paganism", "Rastafarianism", "Satanism", "Scientology", "Shintoism", "Sikhism", "Taoism", "Wiccan", "Zoroastrianism", "Native/Indigenous beliefs", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe in a higher power? (Minimum 1; Maximum 1)",
                        'options': ["Yes, God as described in the Bible/Torah/Quran", "Yes, I believe in a higher power but not specifically the God as described in the Bible/Torah/Quran", "Yes, I believe in multiple higher powers or deities", "I am spiritual but not religious, and I believe in a higher power or universal energy", "I am agnostic; I am unsure about the existence of a higher power", "No, I am an atheist and do not believe in a higher power", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on circumcision? (Minimum 1; Maximum 1)",
                        'options': ["Strongly support", "Support", "Neutral", "Oppose", "Strongly oppose", "It depends on the context", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your beliefs about death and the afterlife? (Minimum 1; Maximum 1)",
                        'options': ["Heaven and/or hell (eternal reward and/or punishment)", "Spiritual realm (existence in a non-physical form)", "Reincarnation (returning to life in a new form)", "Nothingness (cessation of consciousness)", "Ancestral realm (joining ancestors in a different realm)", "Unsure or agnostic", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you pray? (Minimum 1; Maximum 1)",
                        'options': ["Frequently", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is religion in your daily life? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you attend religious services or gatherings? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Weekly", "Monthly", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you open to dating someone with a different religious background? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "Preferably not", "No", "It depends on the religion"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Spirituality & Belief Systems',
        'sections': [
            {
                'title': 'Spirituality & Belief Systems',
                'parts': [
                    {
                        'question': "What are your views on astrology or numerology? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe in it", "Somewhat believe in it", "Neutral", "Somewhat skeptical", "Strongly skeptical", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your Western zodiac sign? (Minimum 1; Maximum 1)",
                        'options': ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your Chinese zodiac sign? (Minimum 1; Maximum 1)",
                        'options': ["Rat (2008, 1996, 1984)", "Ox (2009, 1997, 1985)", "Tiger (2010, 1998, 1986)", "Rabbit (2011, 1999, 1987)", "Dragon (2012, 2000, 1988)", "Snake (2013, 2001, 1989)", "Horse (2014, 2002, 1990)", "Goat (2015, 2003, 1991)", "Monkey (2016, 2004, 1992)", "Rooster (2017, 2005, 1993)", "Dog (2006, 1994)", "Pig (2007, 1995)"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe in fate? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe", "Somewhat believe", "Somewhat disbelieve", "Strongly disbelieve", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe in karma? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe", "Somewhat believe", "Somewhat disbelieve", "Strongly disbelieve", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe ghosts are real? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe", "Somewhat believe", "Somewhat disbelieve", "Strongly disbelieve", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe spirits are real? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe", "Somewhat believe", "Somewhat disbelieve", "Strongly disbelieve", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you believe in the power of positive thinking? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe", "Somewhat believe", "Somewhat disbelieve", "Strongly disbelieve", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Cultural Background & Heritage',
        'sections': [
            {
                'title': 'Cultural Background & Heritage',
                'parts': [
                    {
                        'question': "How important is it for you to maintain the traditions of your cultural heritage? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Would you prefer a partner with a similar cultural background as yours? (Minimum 1; Maximum 1)",
                        'options': ["Definitely", "It would be nice, but not necessary", "It doesn&#x2032;t matter to me", "I prefer someone from a different cultural background"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What citizenships do you have? (Minimum 1; Maximum &#8734)",
                        'options': ["Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan and Barbudan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Basotho", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian and Herzegovinian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cabo Verdean", "Cambodian", "Cameroonian", "Canadian", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese (Congo-Brazzaville)", "Congolese (Democratic Republic of the Congo)", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican (Dominica)", "Dominican (Dominican Republic)", "Dutch", "Ecuadorian", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Holy See (Vatican City State)", "Honduran", "Hungarian", "I-Kiribati", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan", "Kittitian and Nevisian", "Kosovar", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian", "Montenegrin", "Moroccan", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepali", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "North Macedonian", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Sammarinese", "Samoan", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swazi", "Swedish", "Swiss", "Syrian", "Tajik", "Tanzanian", "Thai", "Timorese", "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Venezuelan", "Vietnamese", "Vincentian", "Yemeni", "Zambian", "Zimbabwean", "Other/unknown"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "What is the country of origin for your dad&#x2032;s ancestry? (Minimum 1; Maximum 3)",
                        'options': ["Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan and Barbudan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Basotho", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian and Herzegovinian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cabo Verdean", "Cambodian", "Cameroonian", "Canadian", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese (Congo-Brazzaville)", "Congolese (Democratic Republic of the Congo)", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican (Dominica)", "Dominican (Dominican Republic)", "Dutch", "Ecuadorian", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Holy See (Vatican City State)", "Honduran", "Hungarian", "I-Kiribati", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan", "Kittitian and Nevisian", "Kosovar", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian", "Montenegrin", "Moroccan", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepali", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "North Macedonian", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Sammarinese", "Samoan", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swazi", "Swedish", "Swiss", "Syrian", "Tajik", "Tanzanian", "Thai", "Timorese", "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Venezuelan", "Vietnamese", "Vincentian", "Yemeni", "Zambian", "Zimbabwean", "Other/unknown"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What is the country of origin for your mom&#x2032;s ancestry? (Minimum 1; Maximum 3)",
                        'options': ["Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan and Barbudan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Basotho", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian and Herzegovinian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cabo Verdean", "Cambodian", "Cameroonian", "Canadian", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese (Congo-Brazzaville)", "Congolese (Democratic Republic of the Congo)", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican (Dominica)", "Dominican (Dominican Republic)", "Dutch", "Ecuadorian", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Holy See (Vatican City State)", "Honduran", "Hungarian", "I-Kiribati", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakh", "Kenyan", "Kittitian and Nevisian", "Kosovar", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian", "Montenegrin", "Moroccan", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepali", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "North Macedonian", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Sammarinese", "Samoan", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swazi", "Swedish", "Swiss", "Syrian", "Tajik", "Tanzanian", "Thai", "Timorese", "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Venezuelan", "Vietnamese", "Vincentian", "Yemeni", "Zambian", "Zimbabwean", "Other/unknown"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What percent of each ethnicity are you approximately?",
                        'inputGroups': [
                            {
                                "title": 'White or Caucasian'
                            },
                            {
                                "title": 'Black or African American'
                            },
                            {
                                "title": 'Hispanic or Latino'
                            },
                            {
                                "title": 'Asian'
                            },
                            {
                                "title": 'Arab or Middle Eastern'
                            },
                            {
                                "title": 'Native Hawaiian or Pacific Islander'
                            },
                            {
                                "title": 'American Indian or Alaska Native'
                            }
                        ],
                        'type': 'multi-text',
                        'inputType': 'number',
                        'id': 'q_percent_ethnicity'
                    },
                    {
                        'question': "Do you belong to any of the following ethnicities or subgroups? (Minimum 1; Maximum &#8734) (e.g., \"Abkhaz\") (Cannot select both \"None\" and other options)",
                        'optionGroups': [
                            {
                                "title": 'Europe',
                                'options': ["Abkhaz (e.g., Georgian)", "Albanian", "Armenian", "Aromanian (e.g., Balkans)", "Ashkenazi Jewish", "Azerbaijani", "Baltic (e.g., Latvian, Lithuanian, Estonian)", "Bashkir (e.g., Russian)", "Belarusian", "Bosniak", "British or Irish", "Chukchi (e.g., Russian)", "Chuvash (e.g., Russian)", "Circassian (e.g., Russian, Turkish)", "Croatian", "Cypriot (Greek Cypriot, Turkish Cypriot)", "Czech", "Danish", "Dutch", "Estonian", "Evenki (e.g., Russian)", "Finnish", "Gagauz (e.g., Moldovan)", "Galician", "Gaelic (e.g., Scottish, Irish)", "Georgian", "German", "Greek", "Hungarian", "Icelandic", "Iberian (e.g., Spanish, Portuguese, Catalan, Basque)", "Italian", "Kalderash (e.g., Romani)", "Kale (e.g., Spanish, Portuguese Roma)", "Karelian (e.g., Russian, Finnish)", "Khanty (e.g., Russian)", "Komi (e.g., Russian)", "Laz (e.g., Georgian, Turkish)", "Lithuanian", "Latvian", "Lovari (e.g., Romani)", "Macedonian", "Maltese", "Manouche (e.g., French Roma)", "Mansi (e.g., Russian)", "Mari (e.g., Russian)", "Montenegrin", "Mordvin (e.g., Russian)", "Nenets (e.g., Russian)", "Norwegian", "Occitan", "Ossetian (e.g., Georgian, Russian)", "Polish", "Portuguese", "Romani or Gypsy", "Romaniote Jewish", "Romanichal (e.g., British Roma)", "Russian", "Saami (e.g., Finland, Sweden, Norway, Russia)", "Sephardic Jewish", "Serbian", "Sinti (e.g., European Roma)", "Slovak", "Slovenian", "Sorbian (e.g., Germany)", "Spanish", "Swedish", "Tatar (e.g., Russian, Turkish)", "Turkish", "Udmurt (e.g., Russian)", "Ukrainian", "Walloons", "Yakut (e.g., Russian)"]
                            },
                            {
                                "title": 'Africa',
                                'options': ["Afar (e.g., Eritrean, Djiboutian, Ethiopian)", "Akan (e.g., Ghanaian, Ivorian)", "Amhara (e.g., Ethiopian)", "Bambara (e.g., Malian)", "Bamileke (e.g., Cameroon)", "Bantu (e.g., Congolese, Angolan, Zambian, Mozambican, Zimbabwean)", "Bemba (e.g., Zambian)", "Berber (e.g., North African)", "Bubi (e.g., Equatorial Guinea)", "Chewa (e.g., Malawian, Zambian)", "Dogon (e.g., Malian)", "Dinka (e.g., South Sudanese)", "Ethiopian or Eritrean", "Ewe (e.g., Ghanaian, Togolese)", "Fang (e.g., Equatorial Guinea, Gabon)", "Fon (e.g., Beninese)", "Fulani (e.g., West African, Central African)", "Ga (e.g., Ghanaian)", "Ga-Adangbe (e.g., Ghanaian)", "Gikuyu (e.g., Kenyan)", "Himba (e.g., Namibia)", "Hutu (e.g., Rwandan, Burundian)", "Igbo (e.g., Nigerian)", "Kabyle (e.g., Algerian)", "Kamba (e.g., Kenyan)", "Kalenjin (e.g., Kenyan)", "Karamojong (e.g., Ugandan)", "Kikuyu (e.g., Kenyan)", "Khoisan (e.g., Southern Africa)", "Kimbundu (e.g., Angolan)", "Luhya (e.g., Kenyan)", "Lunda (e.g., Congolese, Angolan, Zambian)", "Luo (e.g., Kenyan, Tanzanian)", "Maasai (e.g., Kenyan, Tanzanian)", "Malagasy (e.g., Madagascar)", "Mandinka (e.g., West African)", "Mende (e.g., Sierra Leone, Liberia)", "Mossi (e.g., Burkinabe)", "Ndebele (e.g., Zimbabwean, South African)", "Nubian (e.g., Sudanese, Egyptian)", "Nuer (e.g., South Sudanese)", "Oromo (e.g., Ethiopian)", "Ovambo (e.g., Namibia, Angola)", "Ovimbundu (e.g., Angolan)", "Rundi (e.g., Burundian)", "San (e.g., Southern Africa)", "Samburu (e.g., Kenyan)", "Senufo (e.g., Ivorian, Malian, Burkinabe)", "Serer (e.g., Senegalese)", "Shona (e.g., Zimbabwean)", "Sidama (e.g., Ethiopian)", "Somali", "Soninke (e.g., West African)", "Swahili (e.g., Tanzanian, Kenyan)", "Teda (e.g., Chad, Libya, Niger)", "Tigrayan (e.g., Ethiopian)", "Tonga (e.g., Zambian)", "Tswana (e.g., South African, Botswanan)", "Tuareg (e.g., North African, Saharan)", "Tumbuka (e.g., Malawian)", "Tutsi (e.g., Rwandan, Burundian)", "Wolof (e.g., Senegalese, Gambian)", "Xhosa (e.g., South African)", "Yao (e.g., Malawian, Mozambican)", "Yoruba (e.g., Nigerian, Beninese)", "Zulu (e.g., South African)"]
                            },
                            {
                                "title": 'Afro-Caribbean',
                                'options': ["Afro-Caribbean"]
                            },
                            {
                                "title": 'Middle East',
                                'options': ["Alawite (e.g., Syrian)", "Arab (e.g., Saudi Arabian, Omani, Qatari, Kuwaiti, Emirati, Bahraini, Jordanian, Lebanese)", "Armenian", "Assyrian (e.g., Iraqi, Iranian, Syrian, Turkish)", "Azeri (e.g., Iranian, Azerbaijani)", "Baloch (e.g., Pakistani, Iranian)", "Chaldean (e.g., Iraqi)", "Coptic (e.g., Egyptian)", "Domari (e.g., Middle Eastern Roma)", "Druze (e.g., Lebanese, Syrian, Israeli)", "Gilaki (e.g., Iranian)", "Hazara (e.g., Afghan)", "Kurdish", "Lur (e.g., Iranian)", "Maronite (e.g., Lebanese)", "Mizrahi Jewish", "Pashtun (e.g., Afghan, Pakistani)", "Persian (e.g., Iranian)", "Sephardic Jewish", "Tajik (e.g., Afghan)", "Turkmen (e.g., Iranian)", "Turkish", "Zaza (e.g., Turkish, Iranian)"]
                            },
                            {
                                "title": 'South Asia',
                                'options': ["Assamese (e.g., Indian)", "Bengali (e.g., Indian, Bangladeshi)", "Bhutanese (e.g., Bhutan)", "Bihari (e.g., Indian)", "Goan (e.g., Indian)", "Gujarati (e.g., Indian)", "Khasi (e.g., Indian)", "Kashmiri (e.g., Indian, Pakistani)", "Konkani (e.g., Indian)", "Maldivian", "Mizo (e.g., Indian)", "Nepali", "Oriya (e.g., Indian)", "Punjabi (e.g., Indian, Pakistani)", "Rohingya (e.g., Myanmar, Bangladesh)", "Sindhi (e.g., Pakistani)", "Sinhalese (e.g., Sri Lankan)", "Sikkimese (e.g., Indian)", "Tamil (e.g., Indian, Sri Lankan)", "Tuluva (e.g., Indian)"]
                            },
                            {
                                "title": 'Southeast Asia',
                                'options': ["Acehnese (e.g., Indonesian)", "Ambonese (e.g., Indonesian)", "Balinese (e.g., Indonesian)", "Batak (e.g., Indonesian)", "Banjar (e.g., Indonesian)", "Bruneian Malay (e.g., Brunei)", "Bugis (e.g., Indonesian)", "Cebuano (e.g., Filipino)", "Chinese Indonesian (e.g., Indonesian)", "Dayak (e.g., Indonesian, Malaysian)", "Hmong", "Iban (e.g., Malaysian)", "Ilocano (e.g., Filipino)", "Javanese (e.g., Indonesian)", "Kadazan-Dusun (e.g., Malaysian, Bruneian)", "Kachin (e.g., Myanmar)", "Karen (e.g., Myanmar)", "Khmer (e.g., Cambodian)", "Lao (e.g., Laotian)", "Madurese (e.g., Indonesian)", "Malay (e.g., Malaysian, Indonesian, Singaporean)", "Maranao (e.g., Philippines)", "Minangkabau (e.g., Indonesian)", "Moluccan (e.g., Indonesian)", "Mon (e.g., Myanmar)", "Moro (e.g., Filipino)", "Riau Malay (e.g., Indonesian)", "Rohingya (e.g., Myanmar, Bangladesh)", "Shan (e.g., Myanmar)", "Sundanese (e.g., Indonesian)", "T’boli (e.g., Philippines)", "Tagalog (e.g., Filipino)", "Thai", "Timorese (e.g., Indonesian, East Timorese)", "Vietnamese"]
                            },
                            {
                                "title": 'East Asia',
                                'options': ["Ainu (e.g., Indigenous people of Japan)", "Bai (e.g., Chinese)", "Buryat (e.g., Russian)", "Dai (e.g., Chinese)", "Dong (e.g., Chinese)", "Evenki (e.g., Russian, Chinese)", "Han Chinese", "Hani (e.g., Chinese)", "Hmong (e.g., Chinese)", "Kazakh (e.g., Chinese)", "Korean", "Manchu (e.g., Chinese)", "Miao (e.g., Chinese)", "Mongolian", "Okinawan (e.g., Japanese)", "Ryukyuan (e.g., Japanese)", "She (e.g., Chinese)", "Tibetan (e.g., Chinese, Indian, Nepali)", "Tujia (e.g., Chinese)", "Tungusic peoples (e.g., Chinese, Russian)", "Uyghur (e.g., Chinese)", "Xibe (e.g., Chinese)", "Yao (e.g., Chinese)", "Yi (e.g., Chinese)", "Zhuang (e.g., Chinese)"]
                            },
                            {
                                "title": 'Oceania',
                                'options': ["Aboriginal Australian", "Carolinian (e.g., Northern Mariana Islands)", "Chamorro (e.g., Guam, Northern Mariana Islands)", "Chuukese (e.g., Chuuk)", "Cook Islander (e.g., Cook Islands)", "Fijian", "Hawaiian", "I-Kiribati (e.g., Kiribati)", "Kanaka Maoli (Native Hawaiian)", "Maori (e.g., New Zealand)", "Marshallese (e.g., Marshall Islands)", "Micronesian", "Ni-Vanuatu (e.g., Vanuatu)", "Niuean (e.g., Niue)", "Palauan (e.g., Palau)", "Papua New Guinean", "Polynesian (e.g., Samoan, Tongan, Tokelauan)", "Pohnpeian (e.g., Pohnpei)", "Rotuman (e.g., Rotuma)", "Solomon Islander (e.g., Solomon Islands)", "Tahitian", "Tokelauan (e.g., Tokelau)", "Tongan", "Tuvaluan (e.g., Tuvalu)", "Yapese (e.g., Micronesian)"]
                            },
                            {
                                "title": '',
                                'options': ["None"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How open are you to learning about and experiencing different cultures? (Minimum 1; Maximum 1)",
                        'options': ["Extremely open", "Very open", "Moderately open", "Somewhat open", "Not open at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important are cultural traditions and customs to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important are cultural celebrations and holidays to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which cultural or religious celebrations do you partake in? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Christmas", "Diwali", "Easter", "Eid al-Fitr", "Hanukkah", "Holi", "Kwanzaa", "Lunar New Year", "Passover", "Thanksgiving", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Education & Intellectual Curiosity',
        'sections': [
            {
                'title': 'Education & Intellectual Curiosity',
                'parts': [
                    {
                        'question': "Which high school(s) did you attend?",
                        'type': 'multi-text',
                        'textMinCount': 1,
                        'textMaxCount': 5
                    },
                    {
                        'question': "What college do you currently attend?",
                        'type': 'text'
                    },
                    {
                        'question': "What college, if any, did you previously attend?",
                        'type': 'text'
                    },
                    {
                        'question': "What are you major(s)? (Minimum 1; Maximum 2)",
                        'options': ["Accounting", "Actuarial Science", "Aerospace Engineering", "African-American Studies", "Agricultural Engineering", "Agriculture", "American Studies", "Animal Science", "Anthropology", "Applied Mathematics", "Architectural Engineering", "Architecture", "Art History", "Asian Studies", "Astrophysics", "Biochemistry", "Biology", "Biomedical Engineering", "Biophysics", "Business Administration", "Chemical Engineering", "Chemistry", "Civil Engineering", "Classics", "Cognitive Science", "Communication", "Comparative Literature", "Computer Engineering", "Computer Science", "Creative Writing", "Criminal Justice", "Dance", "Data Science", "Earth Science", "Ecology", "Economics", "Education", "Electrical Engineering", "Engineering Management", "English", "Environmental Engineering", "Environmental Science", "Ethnic Studies", "Film Studies", "Finance", "Fine Arts", "Food Science", "Forensic Science", "French", "Gender Studies", "Genetics", "Geography", "Geological Engineering", "Geology", "German", "Graphic Design", "Health Sciences", "History", "Hospitality Management", "Human Resources", "Industrial Engineering", "Information Systems", "International Business", "International Relations", "Italian", "Japanese", "Journalism", "Kinesiology", "Landscape Architecture", "Latin American Studies", "Linguistics", "Management Information Systems", "Marine Biology", "Marketing", "Materials Science", "Mathematics", "Mechanical Engineering", "Media Studies", "Meteorology", "Microbiology", "Middle Eastern Studies", "Molecular Biology", "Music", "Neuroscience", "Nursing", "Nutrition", "Oceanography", "Operations Management", "Petroleum Engineering", "Pharmaceutical Sciences", "Philosophy", "Photography", "Physical Education", "Physics", "Political Science", "Psychology", "Public Health", "Public Relations", "Religious Studies", "Russian", "Social Work", "Sociology", "Software Engineering", "Spanish", "Special Education", "Sports Management", "Statistics", "Studio Art", "Supply Chain Management", "Theatre", "Urban Planning", "Women&#x2032;s Studies", "Zoology", "Undecided"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    },
                    {
                        'question': "What are your minor(s)? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Accounting", "Actuarial Science", "Aerospace Engineering", "African-American Studies", "Agricultural Engineering", "Agriculture", "American Studies", "Animal Science", "Anthropology", "Applied Mathematics", "Architectural Engineering", "Architecture", "Art History", "Asian Studies", "Astrophysics", "Biochemistry", "Biology", "Biomedical Engineering", "Biophysics", "Business Administration", "Chemical Engineering", "Chemistry", "Civil Engineering", "Classics", "Cognitive Science", "Communication", "Comparative Literature", "Computer Engineering", "Computer Science", "Creative Writing", "Criminal Justice", "Dance", "Data Science", "Earth Science", "Ecology", "Economics", "Education", "Electrical Engineering", "Engineering Management", "English", "Environmental Engineering", "Environmental Science", "Ethnic Studies", "Film Studies", "Finance", "Fine Arts", "Food Science", "Forensic Science", "French", "Gender Studies", "Genetics", "Geography", "Geological Engineering", "Geology", "German", "Graphic Design", "Health Sciences", "History", "Hospitality Management", "Human Resources", "Industrial Engineering", "Information Systems", "International Business", "International Relations", "Italian", "Japanese", "Journalism", "Kinesiology", "Landscape Architecture", "Latin American Studies", "Linguistics", "Management Information Systems", "Marine Biology", "Marketing", "Materials Science", "Mathematics", "Mechanical Engineering", "Media Studies", "Meteorology", "Microbiology", "Middle Eastern Studies", "Molecular Biology", "Music", "Neuroscience", "Nursing", "Nutrition", "Oceanography", "Operations Management", "Petroleum Engineering", "Pharmaceutical Sciences", "Philosophy", "Photography", "Physical Education", "Physics", "Political Science", "Psychology", "Public Health", "Public Relations", "Religious Studies", "Russian", "Social Work", "Sociology", "Software Engineering", "Spanish", "Special Education", "Sports Management", "Statistics", "Studio Art", "Supply Chain Management", "Theatre", "Urban Planning", "Women&#x2032;s Studies", "Zoology", "Undecided", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is the highest level of education you&#x2032;ve attained or are enrolled in? (Minimum 1; Maximum 1)",
                        'options': ["High school or General Educational Development (G.E.D.)", "Vocational/technical school", "Associate degree (A.A., A.S.)", "Bachelor&#x2032;s degree (B.A., B.S., B.F.A., B.B.A.)", "Master of Arts (M.A.), Master of Science (M.S.), or Master of Education (M.Ed.) degree", "Master of Business Administration (M.B.A.) degree", "Master of Social Work (M.S.W.) or Master of Public Health (M.P.H.) degree", "Juris Doctor (J.D.) degree", "Medical Doctor (M.D.), Doctor of Dental Surgery (D.D.S.), Doctor of Dental Medicine (D.M.D.), Doctor of Veterinary Medicine (D.V.M.), or Doctor of Psychology (Psy.D.) degree", "Doctoral degree (Ph.D., Ed.D.)", "None or drop out"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is the highest level of education you plan on attaining? (Minimum 1; Maximum 1)",
                        'options': ["High school or General Educational Development (G.E.D.)", "Vocational/technical school", "Associate degree (A.A., A.S.)", "Bachelor&#x2032;s degree (B.A., B.S., B.F.A., B.B.A.)", "Master of Arts (M.A.), Master of Science (M.S.), or Master of Education (M.Ed.) degree", "Master of Business Administration (M.B.A.) degree", "Master of Social Work (M.S.W.) or Master of Public Health (M.P.H.) degree", "Juris Doctor (J.D.) degree", "Medical Doctor (M.D.), Doctor of Dental Surgery (D.D.S.), Doctor of Dental Medicine (D.M.D.), Doctor of Veterinary Medicine (D.V.M.), or Doctor of Psychology (Psy.D.) degree", "Doctoral degree (Ph.D., Ed.D.)", "None or drop out"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How intellectually curious would you consider yourself to be? (Minimum 1; Maximum 1)",
                        'options': ["Extremely curious", "Very curious", "Moderately curious", "Somewhat curious", "Not curious at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you enjoy engaging in thought-provoking discussions? (Minimum 1; Maximum 1)",
                        'options': ["Always", "Often", "Sometimes", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you rate your critical thinking skills? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Poor", "I&#x2032;m not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "When faced with a problem, what is your preferred approach to solving it? (Minimum 1; Maximum 1)",
                        'options': ["Jump in and figure it out as I go", "Analyze the situation and come up with a plan", "Seek advice from others", "Combine research and intuition", "I&#x2032;m not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you handle conflicting opinions or information? (Minimum 1; Maximum 1)",
                        'options': ["Avoid confrontation", "Seek common ground", "Engage in a debate to find the truth", "Change my opinion if evidence supports it", "Stand by my beliefs no matter what"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your current cumulative GPA? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["4.0 or higher", "3.9-3.5", "3.4-3.0", "2.9-2.5", "2.4-2.0", "below 2.0", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What was your high school UGPA? (Minimum 1; Maximum 1)",
                        'options': ["4.0 or higher", "3.9-3.5", "3.4-3.0", "2.9-2.5", "2.4-2.0", "below 2.0"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What was your highest combined math and verbal SAT score? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["1600-1450", "1440-1360", "1350-1310", "1300-1270", "1260-1210", "1200-1160", "1150-1120", "1100-1000", "990-800", "790 and below", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What was your highest ACT score? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["36-33", "32-30", "29-28", "27-26", "25-24", "23-22", "21-20", "19-16", "15-10", "9 and below", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your preferred learning style? (Minimum 1; Maximum 1)",
                        'options': ["Visual (learning through images, diagrams, or videos)", "Auditory (learning through listening or speaking)", "Kinesthetic (learning through physical activities or hands-on experience)", "Reading/writing (learning through written text)", "A combination of styles", "It varies depending on the subject", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you typically study or learn new information? (Minimum 1; Maximum 1)",
                        'options': ["Taking detailed notes", "Reading and rereading material", "Discussing concepts with others", "Watching videos or attending lectures", "Hands-on activities", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Creativity & Innovation',
        'sections': [
            {
                'title': 'Creativity & Innovation',
                'parts': [
                    {
                        'question': "Which creative hobbies do you actively engage in? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Painting", "Drawing", "Writing", "Photography", "Dancing", "Music", "Cooking", "Gardening", "Crafting", "Theater", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "When faced with a problem, do you tend to: (Minimum 1; Maximum 1)",
                        'options': ["Stick to traditional solutions", "Think creatively and come up with new ideas", "A mix of traditional and creative approaches", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you open to new ideas and innovative solutions in your personal and professional life? (Minimum 1; Maximum 1)",
                        'options': ["Always open", "Usually open", "Sometimes open", "Rarely open", "Never open"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            },
        ]
    },
    {
        'title': 'Language & Communication',
        'sections': [
            {
                'title': 'Language & Communication',
                'parts': [
                    {
                        'question': "How many languages do you speak fluently? (Minimum 1; Maximum 1)",
                        'options': ["1", "2", "3", "4", "5 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which languages can you read, speak, and write fluently? (Minimum 1; Maximum &#8734)",
                        'options': ["Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Balochi", "Basque", "Belarusian", "Bengali", "Bhojpuri", "Bislama", "Bosnian", "Bulgarian", "Burmese", "Cantonese", "Catalan", "Cebuano", "Chichewa", "Chinese (Mandarin)", "Chittagonian", "Croatian", "Czech", "Danish", "Dari", "Divehi", "Dutch", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Fula", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Ilokano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kikuyu", "Kinyarwanda", "Kirundi", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latvian", "Lingala", "Lithuanian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauruan", "Nepali", "Norwegian", "Oriya", "Oromo", "Papiamento", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sango", "Saraiki", "Scottish Gaelic", "Serbian", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Sotho", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tok Pisin", "Tongan", "Tsonga", "Tswana", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang", "Zulu", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "Which languages can you read with at least basic proficiency? (Minimum 1; Maximum &#8734)",
                        'options': ["Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Balochi", "Basque", "Belarusian", "Bengali", "Bhojpuri", "Bislama", "Bosnian", "Bulgarian", "Burmese", "Cantonese", "Catalan", "Cebuano", "Chichewa", "Chinese (Mandarin)", "Chittagonian", "Croatian", "Czech", "Danish", "Dari", "Divehi", "Dutch", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Fula", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Ilokano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kikuyu", "Kinyarwanda", "Kirundi", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latvian", "Lingala", "Lithuanian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauruan", "Nepali", "Norwegian", "Oriya", "Oromo", "Papiamento", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sango", "Saraiki", "Scottish Gaelic", "Serbian", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Sotho", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tok Pisin", "Tongan", "Tsonga", "Tswana", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang", "Zulu", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "Which languages can you speak with at least basic proficiency? (Minimum 1; Maximum &#8734)",
                        'options': ["Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Balochi", "Basque", "Belarusian", "Bengali", "Bhojpuri", "Bislama", "Bosnian", "Bulgarian", "Burmese", "Cantonese", "Catalan", "Cebuano", "Chichewa", "Chinese (Mandarin)", "Chittagonian", "Croatian", "Czech", "Danish", "Dari", "Divehi", "Dutch", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Fula", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Ilokano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kikuyu", "Kinyarwanda", "Kirundi", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latvian", "Lingala", "Lithuanian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauruan", "Nepali", "Norwegian", "Oriya", "Oromo", "Papiamento", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sango", "Saraiki", "Scottish Gaelic", "Serbian", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Sotho", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tok Pisin", "Tongan", "Tsonga", "Tswana", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang", "Zulu", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "Which languages can you write with at least basic proficiency? (Minimum 1; Maximum &#8734)",
                        'options': ["Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Balochi", "Basque", "Belarusian", "Bengali", "Bhojpuri", "Bislama", "Bosnian", "Bulgarian", "Burmese", "Cantonese", "Catalan", "Cebuano", "Chichewa", "Chinese (Mandarin)", "Chittagonian", "Croatian", "Czech", "Danish", "Dari", "Divehi", "Dutch", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Fula", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Ilokano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kikuyu", "Kinyarwanda", "Kirundi", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latvian", "Lingala", "Lithuanian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauruan", "Nepali", "Norwegian", "Oriya", "Oromo", "Papiamento", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sango", "Saraiki", "Scottish Gaelic", "Serbian", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Sotho", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tok Pisin", "Tongan", "Tsonga", "Tswana", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang", "Zulu", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "How would you rate your storytelling abilities? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your level of verbosity? (Minimum 1; Maximum 1)",
                        'options': ["Extremely verbose", "Quite verbose", "Moderately verbose", "Somewhat concise", "Very concise", "It depends on the situation"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which curse words do you tend to use most frequently, if any? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Ass", "Assclown", "Asshat", "Asshole", "Badass", "Bastard", "Bitch", "Bloody", "Bullshit", "Cock", "Crap", "Cunt", "Damn", "Dick", "Dickhead", "Dipshit", "Douche", "Douchebag", "Fuck", "Hell", "Moron", "Motherfucker", "Prick", "Pussy", "Scum", "Shit", "Shithead", "Slut", "Son of a bitch", "Twat", "Whore", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None',
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personal Values & Worldviews',
        'sections': [
            {
                'title': 'Personal Values & Worldviews',
                'parts': [
                    {
                        'question': "Which of the following best describes your personal values and ethics? (Minimum 1; Maximum 1)",
                        'options': ["Strong religious beliefs (values based on faith and religious teachings)", "Secular humanist (belief in human progress and ethics without religion)", "Spiritual but not religious (focus on personal spiritual growth without adhering to a specific religion)", "Ethical egoist (belief in pursuing self-interest)", "Utilitarian (belief in maximizing overall happiness and minimizing suffering)", "Deontological (belief in following rules and duties regardless of consequences)", "Other", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you consume news and follow current events? (Minimum 1; Maximum 1)",
                        'options': ["Multiple times a day", "Daily", "A few times a week", "Weekly", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your top 2 favorite sources of news and media? (Minimum 1; Maximum 2)",
                        'options': ["Mainstream media outlets", "Independent news sources", "Social media", "Podcasts", "Newspapers or magazines", "Television or radio", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    }
                ]
            },
        ]
    },
    {
        'title': 'Social & Political Views',
        'sections': [
            {
                'title': 'Social & Political Views',
                'parts': [
                    {
                        'question': "Which best describes your political views? (Minimum 1; Maximum 1)",
                        'options': ["Anarchism (opposition to all forms of hierarchy and government)", "Centrism (moderate political views, balancing between left and right)", "Conservatism (support for traditional values and institutions)", "Democratic socialism (combining democratic politics with social ownership of the economy)", "Environmentalism (focus on environmental conservation and sustainability)", "Feminism (advocacy for gender equality)", "Green politics (emphasis on ecological wisdom and social justice)", "Libertarianism (minimal government intervention, emphasis on individual freedom)", "Liberalism (support for individual rights, democracy, and free markets)", "Marxism (abolition of class distinctions and common ownership of the means of production)", "Nationalism (promotion of national identity and interests)", "Progressivism (advocacy for social reform and progress)", "Social democracy (blend of socialism and democracy, advocating for social justice and welfare)", "Socialism (collective ownership and control of the means of production)", "Other/Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which political party do you most closely identify with? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Democratic Party", "Republican Party", "Libertarian Party", "Green Party", "Constitution Party", "Reform Party", "Socialist Party", "Communist Party", "Independent", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Who did you vote for president in the 2016 primary election? (Minimum 1; Maximum 1)",
                        'options': ["Hillary Clinton (Democratic)", "Bernie Sanders (Democratic)", "Donald Trump (Republican)", "Ted Cruz (Republican)", "John Kasich (Republican)", "Marco Rubio (Republican)", "Other candidate", "Did not vote / not eligible to vote"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Who did you vote for president in the 2016 general election? (Minimum 1; Maximum 1)",
                        'options': ["Donald Trump (Republican)", "Hillary Clinton (Democratic)", "Gary Johnson (Libertarian)", "Jill Stein (Green)", "Other candidate", "Did not vote / not eligible to vote"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Who did you vote for president in the 2020 primary election? (Minimum 1; Maximum 1)",
                        'options': ["Joe Biden (Democratic)", "Bernie Sanders (Democratic)", "Elizabeth Warren (Democratic)", "Pete Buttigieg (Democratic)", "Michael Bloomberg (Democratic)", "Amy Klobuchar (Democratic)", "Donald Trump (Republican)", "Other candidate", "Did not vote / not eligible to vote"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Who did you vote for president in the 2020 general election? (Minimum 1; Maximum 1)",
                        'options': ["Joe Biden (Democratic)", "Donald Trump (Republican)", "Jo Jorgensen (Libertarian)", "Howie Hawkins (Green)", "Other candidate", "Did not vote / not eligible to vote"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on capitalism? (Minimum 1; Maximum 1)",
                        'options': ["Strongly support", "Somewhat support", "Neutral", "Somewhat oppose", "Strongly oppose", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on climate change or global warming? (Minimum 1; Maximum 1)",
                        'options': ["Strongly believe it&#x2032;s a critical issue", "Somewhat concerned", "Neutral", "Somewhat skeptical", "Strongly skeptical", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on LGBTQIA+ rights and issues? (Minimum 1; Maximum 1)",
                        'options': ["I strongly support LGBTQIA+ rights and equality", "I generally support LGBTQIA+ rights and issues, but have some reservations", "I am neutral on LGBTQIA+ rights and issues", "I am somewhat opposed to LGBTQIA+ rights and issues, but respect others&#x2032; opinions", "I strongly oppose LGBTQIA+ rights and issues", "Not sure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on the use of gender pronouns (e.g., he, she, they)? (Minimum 1; Maximum 1)",
                        'options': ["I actively respect and use preferred gender pronouns, including non-binary and gender-neutral pronouns (e.g., they/them)", "I respect and use preferred gender pronouns, but might make mistakes and need reminders", "I&#x2032;m still learning about gender pronouns and may need guidance", "I&#x2032;m not comfortable using non-binary or gender-neutral pronouns, but respect traditional pronouns", "I don&#x2032;t understand or agree with the use of non-binary or gender-neutral pronouns", "Not sure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on white privilege? (Minimum 1; Maximum 1)",
                        'options': ["I acknowledge and understand white privilege and actively work to combat systemic racism", "I acknowledge white privilege, but I&#x2032;m still learning how to address it", "I&#x2032;m unsure about the concept of white privilege and would like to learn more", "I don&#x2032;t believe white privilege exists", "I haven&#x2032;t thought much about it", "Not sure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on vaccines in general? (Minimum 1; Maximum 1)",
                        'options': ["Strongly pro-vaccine (believe they are essential for public health)", "Somewhat pro-vaccine (generally support them, but have some concerns)", "Neutral (no strong opinion)", "Somewhat anti-vaccine (skeptical of their safety or efficacy)", "Strongly anti-vaccine (opposed to vaccines due to safety, efficacy, or other concerns)", "It depends on the specific vaccine", "Not sure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on COVID-19 vaccines? (Minimum 1; Maximum 1)",
                        'options': ["Strongly in favor (believe they were essential)", "Somewhat in favor (generally support them, but have some concerns)", "Neutral (no strong opinion)", "Somewhat against (skeptical of their safety or efficacy)", "Strongly against (opposed due to safety, efficacy, or other concerns)", "Not sure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on memes? (Minimum 1; Maximum 1)",
                        'options': ["Love them", "Enjoy them occasionally", "Neutral", "Not a fan", "Strongly dislike", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your views on daylight savings time? (Minimum 1; Maximum 1)",
                        'options': ["I like it because it provides more daylight in the evenings", "I dislike it because it disrupts my sleep schedule", "I think it&#x2032;s outdated and should be abolished", "I don&#x2032;t mind it and can adapt easily", "I think we should have permanent daylight savings time (more evening light year-round)", "I think we should have permanent standard time (consistent time year-round, no clock changes)", "I have mixed feelings about it", "I don&#x2032;t have a strong opinion", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often and why do you change your mind on politics? (Minimum 1; Maximum 1)",
                        'options': ["Frequently, I&#x2032;m open to new information", "Occasionally, when presented with compelling evidence", "Rarely, but it&#x2032;s possible", "Almost never, I&#x2032;m set in my beliefs", "Never, I&#x2032;m unwavering in my convictions", "It depends on the issue"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is politics in your life? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How active are you in activism and advocacy for social or political causes? (Minimum 1; Maximum 1)",
                        'options': ["Extremely active", "Very active", "Moderately active", "Slightly active", "Not active at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How engaged are you in civic life (e.g., voting, attending community meetings, participating in local politics)? (Minimum 1; Maximum 1)",
                        'options': ["Extremely engaged", "Very engaged", "Moderately engaged", "Slightly engaged", "Not engaged at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Environmental & Social Consciousness',
        'sections': [
            {
                'title': 'Environmental & Social Consciousness',
                'parts': [
                    {
                        'question': "How committed are you to living a sustainable lifestyle? (Minimum 1; Maximum 1)",
                        'options': ["Extremely committed", "Very committed", "Moderately committed", "Slightly committed", "Not committed at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you engage in environmentally friendly practices (e.g., recycling, reducing waste, conserving energy)? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Once a week", "A few times a month", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you volunteer or participate in community projects? (Minimum 1; Maximum 1)",
                        'options': ["Weekly", "Monthly", "A few times a year", "Once a year or less", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which social issues are most important to you? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Poverty", "Education", "Climate change", "Racial equality", "LGBTQ+ rights", "Gender equality", "Animal rights", "Healthcare", "Immigration", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How active are you in social or political activism? (Minimum 1; Maximum 1)",
                        'options': ["Extremely active", "Very active", "Moderately active", "Slightly active", "Not active at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            },
        ]
    },
    {
        'title': 'Empathy & Compassion',
        'sections': [
            {
                'title': 'Empathy & Compassion',
                'parts': [
                    {
                        'question': "How would you rate your level of empathy? (Minimum 1; Maximum 1)",
                        'options': ["Extremely high", "Very high", "Moderately high", "Somewhat low", "Very low"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you engage in acts of kindness or compassionate acts? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Weekly", "Monthly", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of the following acts of kindness or compassion have you performed recently? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Donated to a charity", "Volunteered my time", "Helped someone in need", "Offered emotional support to someone", "Paid for someone else&#x2032;s meal or coffee", "Random acts of kindness", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How would you rate your ability to provide emotional support to others? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How comfortable are you with providing a listening ear to others in need? (Minimum 1; Maximum 1)",
                        'options': ["Extremely comfortable", "Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not comfortable at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "In times of need, how available are you for others? (Minimum 1; Maximum 1)",
                        'options': ["Always available", "Usually available", "Sometimes available", "Rarely available", "Never available"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you express gratitude or appreciation for the people and things in your life? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Weekly", "Monthly", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "In what ways do you typically express gratitude or appreciation to others? (Minimum 1; Maximum &#8734) (Cannot select both \"I don&#x2032;t usually express gratitude or appreciation\" and other options)",
                        'options': ["Verbally", "Written notes or messages", "Small gifts or gestures", "Acts of service", "Quality time", "I don&#x2032;t usually express gratitude or appreciation"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': "I don&#x2032;t usually express gratitude or appreciation"
                    },
                    {
                        'question': "How important is it for you to receive expressions of gratitude or appreciation from others in your relationships? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Social Awareness & Sensitivity',
        'sections': [
            {
                'title': 'Social Awareness & Sensitivity',
                'parts': [
                    {
                        'question': "How would you rate your ability to pick up on social cues and nonverbal communication? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How sensitive are you to others&#x2032; feelings in social situations? (Minimum 1; Maximum 1)",
                        'options': ["Extremely sensitive", "Very sensitive", "Somewhat sensitive", "Not very sensitive", "Not sensitive at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How empathetic are you in social situations? (Minimum 1; Maximum 1)",
                        'options': ["Extremely empathetic", "Very empathetic", "Somewhat empathetic", "Not very empathetic", "Not empathetic at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you rate your ability to connect with others and understand different perspectives? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you rate your active listening skills? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Community & Belonging',
        'sections': [
            {
                'title': 'Community & Belonging',
                'parts': [
                    {
                        'question': "How important is a sense of community to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What types of groups, clubs, or organizations do you belong to or have an interest in? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Sports teams", "Hobby clubs", "Professional organizations", "Social clubs", "Religious or spiritual groups", "Volunteer organizations", "Neighborhood associations", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "How involved are you in the groups, clubs, or organizations you belong to? (Minimum 1; Maximum 1)",
                        'options': ["Very involved", "Moderately involved", "Somewhat involved", "Not very involved", "Not involved at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you engage with local groups, organizations, and events? (Minimum 1; Maximum 1)",
                        'options': ["Weekly", "Monthly", "A few times a year", "Once a year", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                ]
            }
        ]
    },
    {
        'title': 'Volunteering & Charitable Involvement',
        'sections': [
            {
                'title': 'Volunteering & Charitable Involvement',
                'parts': [
                    {
                        'question': "How often do you volunteer? (Minimum 1; Maximum 1)",
                        'options': ["Weekly", "Monthly", "A few times a year", "Once a year", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What types of organizations do you prefer to support through volunteering? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Animal welfare", "Children and youth", "Education", "Environment", "Health and medical", "Human rights", "International development", "Poverty and homelessness", "Seniors and elderly", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "How do you prefer to give to charity? (Minimum 1; Maximum 1)",
                        'options': ["Regularly scheduled donations", "One-time donations", "Participating in fundraising events", "In-kind donations", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What cause do you prioritize when giving to charity? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Animal welfare", "Children and youth", "Education", "Environment", "Health and medical", "Human rights", "International development", "Poverty and homelessness", "Seniors and elderly", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "How do you view the importance of philanthropy in your life? (Minimum 1; Maximum 1)",
                        'options': ["Essential", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Friendship & Social Circles',
        'sections': [
            {
                'title': 'Friendship & Social Circles',
                'parts': [
                    {
                        'question': "How would you describe the size of your social circle? (Minimum 1; Maximum 1)",
                        'options': ["Very large", "Large", "Average", "Small", "Very small"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you engage with your friends? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Weekly", "A few times a month", "Monthly", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you prefer to socialize with friends? (Minimum 1; Maximum 1)",
                        'options': ["Large group gatherings", "Small group gatherings", "One-on-one", "Online or via social media", "Mix of in-person and online"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you involved in Greek life? (Minimum 1; Maximum 1)",
                        'options': ["Yes, I&#x2032;m a member of a sorority/fraternity", "I used to be involved, but not anymore", "No, I&#x2032;ve never been involved in Greek life"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What sorority or fraternity do you belong to? (Minimum 1; Maximum 1)",
                        'options': ["Alpha Phi", "Delta Gamma", "Kappa Alpha Theta", "Sigma Chi", "Phi Delta Theta", "Alpha Epsilon Pi", "Lambda Chi Alpha", "Omega Psi Phi", "Zeta Phi Beta", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of friendship style do you have? (Minimum 1; Maximum 1)",
                        'options': ["Proactive and engaged", "Supportive and empathetic", "Fun and adventurous", "Low maintenance and easygoing", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you maintain friendships? (Minimum 1; Maximum 1)",
                        'options': ["Regular communication", "Social media engagement", "In-person meetups", "Shared interests and activities", "Support during difficult times", "Celebrating milestones and achievements", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What do you expect from your friends? (Minimum 1; Maximum 2)",
                        'options': ["Loyalty and trustworthiness", "Emotional support", "Shared interests and hobbies", "Intellectual stimulation", "A sense of adventure", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                    },
                    {
                        'question': "How do you feel about merging social circles with your partner? (Minimum 1; Maximum 1)",
                        'options': ["Eager to merge", "Open to some overlap", "Prefer to keep them separate", "Undecided", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "On which occasions do you usually give gifts? (Minimum 1; Maximum &#8734) (Cannot select both \"I don&#x2032;t usually give gifts\" and other options)",
                        'options': ["Birthdays", "Anniversaries", "Holidays", "Graduations", "Weddings", "Just because/random acts of kindness", "Other special occasions", "I don&#x2032;t usually give gifts"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'I don&#x2032;t usually give gifts',
                    },
                    {
                        'question': "What kind of gifts do you typically give to friends and loved ones? (Minimum 1; Maximum &#8734) (Cannot select both \"I don&#x2032;t usually give gifts\" and other options)",
                        'options': ["Small tokens or gestures", "Personalized and sentimental items", "Handmade or DIY gifts", "Practical and useful items", "Gift cards or cash", "Experiences or event tickets", "Luxurious or high-end items", "I don&#x2032;t usually give gifts"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'I don&#x2032;t usually give gifts',
                    }
                ]
            }
        ]
    },
    {
        'title': 'Social & Professional Life',
        'sections': [
            {
                'title': 'Social & Professional Life',
                'parts': [
                    {
                        'question': "How often do you engage in professional networking? (Minimum 1; Maximum 1)",
                        'options': ["Frequently", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your preferred method of networking? (Minimum 1; Maximum 1)",
                        'options': ["In-person events", "Online platforms like LinkedIn", "Social media", "Professional organizations", "Work-related conferences", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "In a collaborative or team setting, what role do you usually take on? (Minimum 1; Maximum 1)",
                        'options': ["Leader", "Contributor", "Facilitator", "Mediator", "Observer", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your conflict management style? (Minimum 1; Maximum 1)",
                        'options': ["Avoidant", "Collaborative", "Compromising", "Competitive", "Accommodating"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How resilient are you in challenging situations? (Minimum 1; Maximum 1)",
                        'options': ["Extremely resilient", "Very resilient", "Somewhat resilient", "Not very resilient", "Not resilient at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            },
        ]
    },
    {
        'title': 'Online Presence & Social Media',
        'sections': [
            {
                'title': 'Online Presence & Social Media',
                'parts': [
                    {
                        'question': "How would you describe your digital presence? (Minimum 1; Maximum 1)",
                        'options': ["Very active across multiple platforms", "Active on a few platforms", "Moderately active on one or two platforms", "Minimally active", "I have little to no online presence"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which social media platforms do you use most frequently? (Minimum 1; Maximum 5) (Cannot select both \"None\" and other options)",
                        'options': ["Facebook", "Instagram", "Twitter", "Snapchat", "TikTok", "LinkedIn", "Pinterest", "Reddit", "YouTube", "Twitch", "Discord", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 5,
                        'exclusive': 'None',
                    },
                    {
                        'question': "How comfortable are you with sharing personal information on social media? (Minimum 1; Maximum 1)",
                        'options': ["Very comfortable", "Somewhat comfortable", "Neutral", "Somewhat uncomfortable", "Very uncomfortable"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you prefer to engage with others through digital platforms? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Text messaging", "Video calls", "Voice calls", "Social media comments and reactions", "Direct messaging on social media", "Email", "Online forums", "Group chats", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None',
                    }
                ]
            }
        ]
    },
    {
        'title': 'Career & Professional Goals',
        'sections': [
            {
                'title': 'Career & Professional Goals',
                'parts': [
                    {
                        'question': "What are your long-term career aspirations? (Minimum 1; Maximum 2)",
                        'options': ["Reach executive level", "Start my own business", "Maintain a stable job", "Switch industries", "Retire early", "Focus on work-life balance", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    },
                    {
                        'question': "How satisfied are you with your current job and work environment? (Minimum 1; Maximum 1)",
                        'options': ["Extremely satisfied", "Satisfied", "Neutral", "Unsatisfied", "Extremely Unsatisfied", "I am not currently employed"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your work ethic? (Minimum 1; Maximum 1)",
                        'options': ["Highly ambitious and driven", "Dedicated and hardworking", "I put in the required effort", "I value work-life balance", "I prefer a laid-back approach"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much time and effort do you put into professional development? (Minimum 1; Maximum 1)",
                        'options': ["Constantly seeking opportunities to grow", "Regularly attend workshops, seminars, or classes", "Occasionally participate in professional development", "Rarely focus on professional development", "Not interested in professional development"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Work-Life Balance',
        'sections': [
            {
                'title': 'Work-Life Balance',
                'parts': [
                    {
                        'question': "How would you describe your work-life balance? (Minimum 1; Maximum 1)",
                        'options': ["Perfectly balanced", "Mostly balanced", "Sometimes balanced", "Mostly unbalanced", "Completely unbalanced"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your strategy for maintaining harmony between work and personal life? (Minimum 1; Maximum 1)",
                        'options': ["Strict boundaries between work and personal life", "Some boundaries with flexibility", "A fluid approach to work and personal life", "I struggle to find balance", "I don&#x2032;t have a specific strategy"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you allocate your time and energy between work and leisure? (Minimum 1; Maximum 1)",
                        'options': ["Mostly focused on work with little leisure", "More focused on work than leisure", "An equal balance between work and leisure", "More focused on leisure than work", "Mostly focused on leisure with little work"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How willing are you to adjust your work-life balance for a partner? (Minimum 1; Maximum 1)",
                        'options': ["Completely willing", "Somewhat willing", "Neutral", "Somewhat unwilling", "Completely unwilling"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your work priorities? (Minimum 1; Maximum 3)",
                        'options': ["Career advancement", "Financial stability", "Job satisfaction", "Work-life balance", "Social impact", "Networking", "Skill development", "Job security", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What are your leisure priorities? (Minimum 1; Maximum 3)",
                        'options': ["Travel", "Hobbies and interests", "Socializing", "Self-improvement", "Relaxation", "Fitness and wellness", "Family time", "Creative expression", "Volunteering", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    }
                ]
            }
        ]
    },
    {
        'title': 'Life Management & Planning',
        'sections': [
            {
                'title': 'Life Management & Planning',
                'parts': [
                    {
                        'question': "How would you rate your time management skills? (Minimum 1; Maximum 1)",
                        'options': ["Excellent", "Good", "Average", "Below average", "Poor"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What best describes your daily routine? (Minimum 1; Maximum 1)",
                        'options': ["Highly structured and consistent", "Somewhat structured with room for flexibility", "A mix of structure and spontaneity", "Mostly spontaneous and flexible", "No set routine"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you prioritize tasks and responsibilities? (Minimum 1; Maximum 1)",
                        'options': ["Strictly by importance and urgency", "A mix of importance, urgency, and personal preference", "Based on personal preference and enjoyment", "I struggle with prioritizing tasks", "I don&#x2032;t have a specific approach"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your punctuality in attending appointments and events? (Minimum 1; Maximum 1)",
                        'options': ["Always on time, no matter what", "Usually on time, but occasionally a few minutes late", "Sometimes late, but I try to be punctual", "Often late, punctuality is not my strong suit", "I&#x2032;m almost always late, Time management is a struggle for me"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How future-oriented are you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely future-oriented", "Mostly future-oriented", "Balanced between present and future", "Mostly present-oriented", "Extremely present-oriented"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you approach setting and achieving life goals? (Minimum 1; Maximum 1)",
                        'options': ["I set specific goals and create detailed plans", "I set general goals with some planning", "I have a rough idea of my goals and go with the flow", "I don&#x2032;t set specific goals but am open to opportunities", "I don&#x2032;t think about goals much"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you handle major life transitions? (Minimum 1; Maximum 1)",
                        'options': ["I thrive on change and adapt easily", "I&#x2032;m generally adaptable but need some time to adjust", "I have mixed feelings about change", "I struggle with change and need support", "I find change very difficult and resist it"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about adjusting your daily routine and priorities for a partner? (Minimum 1; Maximum 1)",
                        'options': ["Completely willing", "Somewhat willing", "Neutral", "Somewhat unwilling", "Completely unwilling"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Financial Management & Goals',
        'sections': [
            {
                'title': 'Financial Management & Goals',
                'parts': [
                    {
                        'question': "How would you describe your approach to managing finances? (Minimum 1; Maximum 1)",
                        'options': ["Extremely responsible and organized", "Mostly responsible", "A balanced approach", "Somewhat careless", "Very careless", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How frugal are you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely frugal", "Very frugal", "Somewhat frugal", "Not very frugal", "Not frugal at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you currently rent/lease or own your residence? (Minimum 1; Maximum 1)",
                        'options': ["Rent/lease", "Own", "Live with family/friends", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you currently rent, lease, or own your car? (Minimum 1; Maximum 1)",
                        'options': ["Rent/lease", "Own", "Borrow", "Don&#x2032;t have a car"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you have in your bank and brokerage account(s)? (Minimum 1; Maximum 1)",
                        'options': ["Less than $5,000", "$5,000-$19,999", "$20,000-$49,999", "$50,000-$99,999", "$100,000-$249,999", "$250,000-$999,999", "More than $1,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you owe in car loans? (Minimum 1; Maximum 1)",
                        'options': ["Less than $5,000", "$5,000-$19,999", "$20,000-$49,999", "$50,000-$99,999", "$100,000-$249,999", "$250,000-$999,999", "More than $1,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you owe in student loans? (Minimum 1; Maximum 1)",
                        'options': ["Less than $5,000", "$5,000-$19,999", "$20,000-$49,999", "$50,000-$99,999", "$100,000-$249,999", "$250,000-$999,999", "More than $1,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you owe in credit card debt? (Minimum 1; Maximum 1)",
                        'options': ["Less than $5,000", "$5,000-$19,999", "$20,000-$49,999", "$50,000-$99,999", "$100,000-$249,999", "$250,000-$999,999", "More than $1,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your credit score situation? (Minimum 1; Maximum 1)",
                        'options': ["Really good", "Good", "Okay", "Bad", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Did you run a lemonade stand, start a small business or side hustle, etc., when you were younger? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What car make do you currently drive? (Minimum 1; Maximum 1)",
                        'options': ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Karma", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rivian", "Rolls-Royce", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What year is the car you currently drive? (Minimum 1; Maximum 1)",
                        'options': ["2030", "2029", "2028", "2027", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "older than 2000", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your general approach to long-term financial planning? (Minimum 1; Maximum 1)",
                        'options': ["Detailed financial plan with clear milestones", "Have some financial goals", "No specific plan", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your long-term financial goals? (Minimum 1; Maximum 3)",
                        'options': ["Early retirement", "Homeownership", "Financial independence", "Saving for travel", "Starting a business", "Building an investment portfolio", "Saving for education", "Debt-free living", "No specific goals", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What net worth are you targeting for the next few decades? (Minimum 1; Maximum 1)",
                        'options': ["Less than $100,000", "$100,000-$499,999", "$500,000-$999,999", "$1,000,000-$4,999,999", "More than $5,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What annual income are you targeting for the next few decades? (Minimum 1; Maximum 1)",
                        'options': ["Less than $50,000", "$50,000-$99,999", "$100,000-$249,999", "$250,000-$999,999", "More than $1,000,000"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your expectations for financial management in a long-term relationship? (Minimum 1; Maximum 1)",
                        'options': ["Joint finances", "A mix of joint and separate finances", "Separate finances", "Open to discussing and negotiating", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about combining finances with a partner? (Minimum 1; Maximum 1)",
                        'options': ["Completely comfortable", "Somewhat comfortable", "Neutral", "Somewhat uncomfortable", "Completely uncomfortable"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your expectations for shared financial responsibilities in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Equal contribution", "I&#x2032;ll contribute more", "My partner should contribute more", "Separate finances", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your current occupation? (Minimum 1; Maximum 1)",
                        'options': ["Accountant", "Actor", "Architect", "Artist", "Banker", "Bartender", "Chef", "Chemist", "Civil servant", "Consultant", "Dentist", "Designer", "Doctor", "Economist", "Editor", "Electrician", "Engineer", "Entrepreneur", "Farmer", "Financial advisor", "Graphic designer", "Healthcare professional", "Homemaker", "Human resources professional", "IT professional", "Journalist", "Lawyer", "Librarian", "Manager", "Marketer", "Mechanic", "Nurse", "Pharmacist", "Photographer", "Pilot", "Police officer", "Professor", "Programmer", "Psychologist", "Real estate agent", "Receptionist", "Researcher", "Salesperson", "Scientist", "Social worker", "Software developer", "Student", "Surgeon", "Teacher", "Technician", "Translator", "Veterinarian", "Waiter/Waitress", "Writer", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "When you graduate, what industry will you likely work in? (Minimum 1; Maximum 1)",
                        'options': ["Accounting", "Acting", "Administrative", "Advertising", "Aerospace", "Agriculture", "Art", "Automotive", "Beauty and cosmetics", "Biotechnology", "Broadcasting", "Chemical", "Childcare", "Clothing and textiles", "Coaching", "Computer and technology", "Construction", "Consultancy", "Customer service", "Defense", "Digital content", "Digital marketing", "E-commerce", "Education", "Energy", "Entertainment", "Entrepreneurship", "Environmental services", "Fashion", "Film and television", "Finance and economics", "Fisheries", "Fitness and sports", "Food and beverage", "Forestry", "Gaming", "Government and public administration", "Graphic design", "Healthcare", "Health and wellness", "Hospitality", "Human resources", "Influencer", "Information", "Insurance", "Interior design", "International relations", "Legal services", "Logistics and supply chain", "Manufacturing", "Maritime", "Marketing and public relations", "Media and news", "Mental health services", "Mining", "Music", "Nonprofit and charitable organizations", "Oil and gas", "Performing arts", "Personal development", "Pharmaceutical", "Photography", "Publishing", "Real estate", "Research and development", "Retail", "Robotics", "Social services", "Space exploration", "Telecommunications", "Transportation", "Travel and tourism", "Utilities", "Veterinary and animal services", "Web development and design", "Wildlife and conservation", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            },
        ]
    },
    {
        'title': 'Home Life & Living Environment',
        'sections': [
            {
                'title': 'Home Life & Living Environment',
                'parts': [
                    {
                        'question': "Which home design style do you prefer? (Minimum 1; Maximum 1)",
                        'options': ["Minimalist", "Modern", "Mid-century modern", "Traditional", "Bohemian", "Rustic", "Industrial", "Scandinavian", "Eclectic", "Coastal", "Farmhouse", "Other/none"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is having a well-decorated living space to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever lived with a partner? (Minimum 1; Maximum 1)",
                        'options': ["Yes, and I enjoyed it", "Yes, but I didn&#x2032;t enjoy it", "No, but I&#x2032;m open to it", "No, and I prefer not to", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about sharing living spaces with a partner? (Minimum 1; Maximum 1)",
                        'options': ["Excited", "Comfortable", "Indifferent", "Slightly uncomfortable", "Very uncomfortable", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your expectations for a partner&#x2032;s involvement in household responsibilities? (Minimum 1; Maximum 1)",
                        'options': ["Equal division of chores", "I&#x2032;ll take on more chores", "They should take on more chores", "No specific expectations", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your level of neatness and organization? (Minimum 1; Maximum 1)",
                        'options': ["Extremely neat and organized", "Mostly neat and organized", "Average", "Mostly disorganized and messy", "Extremely disorganized and messy"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about clutter in your living space? (Minimum 1; Maximum 1)",
                        'options': ["I can&#x2032;t stand it", "It bothers me, but I can tolerate it", "It doesn&#x2032;t bother me much", "I don&#x2032;t mind it", "I embrace it"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Technology & Innovation',
        'sections': [
            {
                'title': 'Technology & Innovation',
                'parts': [
                    {
                        'question': "How would you rate your interest in technology and innovation? (Minimum 1; Maximum 1)",
                        'options': ["Extremely interested", "Very interested", "Somewhat interested", "Not very interested", "Not interested at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your perspective on the role of technology in society? (Minimum 1; Maximum 1)",
                        'options': ["Extremely beneficial", "Mostly beneficial", "Both beneficial and harmful", "Mostly harmful", "Extremely harmful"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which mobile operating system do you prefer? (Minimum 1; Maximum 1)",
                        'options': ["iPhone", "Android", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you prefer using a Mac or PC for computing? (Minimum 1; Maximum 1)",
                        'options': ["Mac", "PC", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which gaming platform do you prefer? (Minimum 1; Maximum 1)",
                        'options': ["PC", "Xbox", "PlayStation", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Hobbies, Interests & Leisure',
        'sections': [
            {
                'title': 'Hobbies, Interests & Leisure',
                'parts': [
                    {
                        'question': "How do you prefer to spend your leisure time? (Minimum 1; Maximum 5)",
                        'options': ["Reading", "Watching movies/television", "Playing video games", "Outdoor activities", "Sports", "Socializing", "Cooking", "Traveling", "Crafting", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5,
                    },
                    {
                        'question': "How important is relaxation and downtime in your life? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you more of an adventurous person or do you prefer a more predictable routine? (Minimum 1; Maximum 1)",
                        'options': ["Extremely adventurous", "Somewhat adventurous", "Balanced between adventure and routine", "Somewhat routine-oriented", "Extremely routine-oriented"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you enjoy trying new activities or hobbies? (Minimum 1; Maximum 1)",
                        'options': ["All the time", "Frequently", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is spontaneity in your life?",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Not very important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much alone time do you typically need? (Minimum 1; Maximum 1)",
                        'options': ["A lot", "A moderate amount", "A little", "None", "It depends on my mood"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are some of your personal interests? (Minimum 1; Maximum &#8734) (e.g., \"Painting\") (Cannot select both \"None\" and other options)",
                        'optionGroups': [
                            {
                                "title": 'Arts & Crafts',
                                'options': ["Painting", "Drawing", "Sketching", "Sculpting", "Photography", "Pottery", "Calligraphy", "Sewing", "Knitting", "Crochet", "Woodworking", "DIY projects", "Scrapbooking", "Printmaking", "Jewelry making"]
                            },
                            {
                                "title": 'Athletics & Fitness',
                                'options': ["Gym", "Yoga", "Pilates", "Breathwork", "Strength training", "Hiking", "Rock climbing", "Horseback riding", "Cycling", "Running", "Swimming", "CrossFit", "Camping", "Martial arts", "Dance", "Sports", "Basketball", "Football", "Soccer", "Tennis", "Golf", "Skiing", "Snowboarding", "Surfing", "Skateboarding"]
                            },
                            {
                                "title": 'Creative Expression',
                                'options': ["Music", "Singing", "Playing instruments", "Composing", "Writing", "Poetry", "Blogging", "Theater", "Acting", "Comedy", "Filmmaking", "Content creation", "Fashion", "Makeup", "Hairstyling", "Graphic design", "Interior design"]
                            },
                            {
                                "title": 'Education & Personal Development',
                                'options': ["Reading", "Learning languages", "Attending lectures", "Taking courses", "Workshops", "Seminars", "Book clubs", "Self-improvement", "Personal growth", "Meditation", "Journaling", "Psychology", "Philosophy", "Spirituality", "Astrology"]
                            },
                            {
                                "title": 'Food & Drink',
                                'options': ["Cooking", "Baking", "Wine tasting", "Craft beer", "Mixology", "Exploring new cuisines", "Attending food festivals", "Trying new recipes", "Hosting dinner parties", "Gardening", "Canning", "Preserving", "Foraging"]
                            },
                            {
                                "title": 'Games & Puzzles: ',
                                'options': ["Board games", "Card games", "Video games", "Escape rooms", "Crossword puzzles", "Sudoku", "Trivia nights", "Role-playing games", "Chess", "Strategy games"]
                            },
                            {
                                "title": 'Hobbies & Collections',
                                'options': ["Collecting stamps", "Coins", "Action figures", "Antiques", "Vintage items", "Comic books", "Vinyl records", "Memorabilia", "Model building", "Amateur radio", "Astronomy", "Birdwatching", "Gardening", "Fishing", "Hunting"]
                            },
                            {
                                "title": 'Outdoor & Nature',
                                'options': ["Wildlife observation", "Nature walks", "Birdwatching", "Gardening", "Beekeeping", "Photography", "Stargazing", "Beachcombing", "Geocaching", "Environmental conservation"]
                            },
                            {
                                "title": 'Social Activities & Community',
                                'options': ["Volunteering", "Community service", "Activism", "Charity work", "Attending social events", "Networking", "Joining clubs or organizations", "Mentoring", "Participating in cultural events", "Festivals", "Religious or spiritual gatherings"]
                            },
                            {
                                "title": 'Technology & Innovation',
                                'options': ["Coding", "Programming", "Web design", "App development", "Robotics", "Artificial intelligence", "Virtual reality", "Building computers", "Electronics", "3D printing", "Drone flying"]
                            },
                            {
                                "title": 'Travel & Exploration',
                                'options': ["Traveling", "Exploring new cities", "Backpacking", "Road trips", "Cruise vacations", "Cultural exchange programs", "Study abroad", "Adventure sports", "Ecotourism"]
                            },
                            {
                                "title": 'Visual & Performing Arts',
                                'options': ["Museums", "Art galleries", "Live theater", "Ballet", "Opera", "Concerts", "Film festivals", "Street art", "Photography", "Attending or participating in local arts events"]
                            },
                            {
                                "title": '',
                                'options': ["None"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "How do you balance socializing and spending time alone? (Minimum 1; Maximum 1)",
                        'options': ["I prioritize socializing over alone time", "I find a balance between socializing and alone time", "I prioritize alone time over socializing", "I mostly prefer to be alone", "It depends on my mood and circumstances"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Arts & Culture',
        'sections': [
            {
                'title': 'Arts & Culture',
                'parts': [
                    {
                        'question': "What type of art do you most enjoy? (Minimum 1; Maximum 1)",
                        'options': ["Visual arts", "Performing arts", "Music", "Literature", "Film", "Photography", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you visit art galleries or museums? (Minimum 1; Maximum 1)",
                        'options': ["A few times a week", "Weekly", "Monthly", "A few times a year", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you enjoy live performances, such as theater, concerts, or dance? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "Sometimes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of the following best describes your involvement in the arts? (Minimum 1; Maximum 1)",
                        'options': ["Actively create and/or perform", "Enjoy as a hobby", "Appreciate as an audience member", "Not particularly interested"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite type of live performance? (Minimum 1; Maximum 1)",
                        'options': ["Theater", "Concerts", "Dance", "Opera", "Comedy shows", "Spoken word/poetry", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you enjoy attending cultural festivals or events? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "Sometimes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Travel & Exploration',
        'sections': [
            {
                'title': 'Travel & Exploration',
                'parts': [
                    {
                        'question': "Do you like to travel? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "Sometimes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of travel do you prefer? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Adventure and outdoor activities", "Relaxing on a beach", "City breaks and cultural experiences", "Road trips", "Cruises", "Eco-tourism", "Food and wine tours", "Group tours", "Solo travel", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None',
                    },
                    {
                        'question': "How often do you travel? (Minimum 1; Maximum 1)",
                        'options': ["Rarely", "1-2 times a year", "3-4 times a year", "5 or more times a year", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often would you like to travel in the future? (Minimum 1; Maximum 1)",
                        'options': ["Rarely", "1-2 times a year", "3-4 times a year", "5 or more times a year", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you prefer domestic or international travel, or both equally? (Minimum 1; Maximum 1)",
                        'options': ["Domestic", "International", "Both equally"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you prefer to plan your vacations? (Minimum 1; Maximum 1)",
                        'options': ["I plan everything in detail", "I have a rough plan but leave room for spontaneity", "I go with the flow and make decisions as I travel"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which type of accommodation do you prefer when traveling? (Minimum 1; Maximum 1)",
                        'options': ["Budget-friendly options like hostels or guesthouses", "Mid-range hotels or vacation rentals", "Luxury hotels or resorts", "Unique accommodations like treehouses or glamping", "Staying with friends or family", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which countries have you visited for more than 3 days? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 10 favorite travel destinations? (Minimum 1; Maximum 10) (Cannot select both \"None\" and other options)",
                        'options': ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "None"],
                        'type': 'multi-select',
                        'maxOptions': 10,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are the top 25 countries you would you like to visit next? (Minimum 1; Maximum 25) (Cannot select both \"None\" and other options)",
                        'options': ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "None"],
                        'type': 'multi-select',
                        'maxOptions': 25,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your favorite types of destinations to visit? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Beaches", "Tropical islands", "Lakes and rivers", "Mountains", "Forests", "National parks", "Wildlife reserves", "Nature trails and hiking paths", "Deserts", "Cities", "Small towns", "Countrysides", "Historical sites", "Ancient ruins", "Castles and palaces", "Museums", "Art galleries", "Science centers and planetariums", "Theme parks", "Adventure parks", "Zoos and aquariums", "Religious sites and places of worship", "Gardens and parks", "Roadside attractions", "Sports events and stadiums", "Golf courses and country clubs", "Music festivals", "Nightclubs and entertainment districts", "Movie theaters and live performance venues", "Food markets and street food venues", "Wineries and vineyards", "Shopping districts", "Cruise ships", "Ski resorts", "Spa and wellness retreats", "Campgrounds", "Farm stays and agritourism", "Bed and breakfasts and inns", "Libraries and bookstores", "Casinos and gaming venues", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 3 favorite airlines? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'optionGroups': [
                            {
                                "title": 'U.S. Airlines',
                                'options': ["Alaska Airlines", "Allegiant Air", "American Airlines", "Delta Air Lines", "Frontier Airlines", "Hawaiian Airlines", "JetBlue Airways", "Southwest Airlines", "Spirit Airlines", "Sun Country Airlines", "United Airlines", "Other"]
                            },
                            {
                                "title": 'Foreign Airlines',
                                'options': ["Aer Lingus (Ireland)", "Aeroflot (Russia)", "Aeromexico (Mexico)", "Air Canada (Canada)", "Air China (China)", "Air France (France)", "Air India (India)", "Air New Zealand (New Zealand)", "Alitalia (Italy)", "All Nippon Airways (ANA) (Japan)", "Asiana Airlines (South Korea)", "Austrian Airlines (Austria)", "Avianca (Colombia)", "British Airways (UK)", "Cathay Pacific (Hong Kong)", "China Airlines (Taiwan)", "China Southern Airlines (China)", "Copa Airlines (Panama)", "EgyptAir (Egypt)", "Emirates (UAE)", "Ethiopian Airlines (Ethiopia)", "Etihad Airways (UAE)", "EVA Air (Taiwan)", "Finnair (Finland)", "Fiji Airways (Fiji)", "Iberia (Spain)", "Icelandair (Iceland)", "Japan Airlines (Japan)", "Kenya Airways (Kenya)", "KLM Royal Dutch Airlines (Netherlands)", "Korean Air (South Korea)", "LATAM Airlines (Chile)", "Lufthansa (Germany)", "Malaysia Airlines (Malaysia)", "Philippine Airlines (Philippines)", "Qantas (Australia)", "Qatar Airways (Qatar)", "Royal Air Maroc (Morocco)", "Royal Jordanian (Jordan)", "SAS Scandinavian Airlines (Sweden, Norway, Denmark)", "Singapore Airlines (Singapore)", "South African Airways (South Africa)", "Swiss International Air Lines (Switzerland)", "TAP Air Portugal (Portugal)", "Thai Airways (Thailand)", "Turkish Airlines (Turkey)", "Virgin Atlantic (UK)", "WestJet (Canada)", "Wizz Air (Hungary)", "Oman Air (Oman)", "Azul Brazilian Airlines (Brazil)", "Air Mauritius (Mauritius)", "Air Tahiti Nui (French Polynesia)", "Air Europa (Spain)", "Air Astana (Kazakhstan)", "RwandAir (Rwanda)", "Vueling (Spain)", "Caribbean Airlines (Trinidad and Tobago)", "Air Baltic (Latvia)", "Other"]
                            },
                            {
                                'title': '',
                                'options': ["None"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Living Location Preferences',
        'sections': [
            {
                'title': 'Living Location Preferences',
                'parts': [
                    {
                        'question': "What type of living environments do you prefer? (Minimum 1; Maximum 3)",
                        'options': ["Urban city center", "Suburban neighborhood", "Small town", "Rural countryside", "Coastal community", "Mountainous area", "Other", "Open to various living environments or none"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                    },
                    {
                        'question': "When choosing a place to live, what factors are most important to you? (Minimum 1; Maximum 3)",
                        'options': ["Job opportunities", "Cost of living", "Quality of schools", "Outdoor Recreational activities", "Cultural attractions", "Proximity to family and friends", "Climate", "Safety and crime rates", "Diversity", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "How important is it for you to live in a walkable area with shops, restaurants, and amenities nearby? (Minimum 1; Maximum 1)",
                        'options': ["Very important", "Important", "Somewhat important", "Not important"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of climates do you prefer to live in? (Minimum 1; Maximum 1",
                        'options': ["Mild and temperate climate", "Cold and snowy climate", "Hot and sunny climate", "Variable seasons", "Not sure", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How open are you to relocating for a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Very open, I love new adventures", "Open if it&#x2032;s the right opportunity", "Somewhat open, but with conditions", "Not open at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you willing to live in a different country for love? (Minimum 1; Maximum 1)",
                        'options': ["Yes, without hesitation", "Yes, but only for the right person and circumstances", "Maybe, it would depend on the country and situation", "No, I prefer to stay in my home country"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What state are you from? (Minimum 1; Maximum 1)",
                        'options': ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What region of the country are you from? (Minimum 1; Maximum 1)",
                        'options': ["Northeast", "Midwest", "South", "West", "Pacific Northwest", "Southwest", "Southeast", "Mid-Atlantic", "New England", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What state do you live in? (Minimum 1; Maximum 1)",
                        'options': ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What state does your dad live in? (Minimum 1; Maximum 1)",
                        'options': ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What state does your mom live in? (Minimum 1; Maximum 1)",
                        'options': ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What region of the country do you want to live in after graduation? (Minimum 1; Maximum 3)",
                        'options': ["Northeast", "Midwest", "South", "West", "Pacific Northwest", "Southwest", "Southeast", "Mid-Atlantic", "New England", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Where do you want to live after graduation? (Minimum 1; Maximum 3)",
                        'options': ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Overseas"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "How important is living near your family? (Minimum 1; Maximum 1)",
                        'options': ["Very important", "Important", "Somewhat important", "Not important"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is living near your friends? (Minimum 1; Maximum 1)",
                        'options': ["Very important", "Important", "Somewhat important", "Not important"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Entertainment & Media Preferences',
        'sections': [
            {
                'title': 'Entertainment & Media Preferences',
                'parts': [
                    {
                        'question': "What are your top 3 favorite movie genres? (Minimum 1; Maximum 3)(Cannot select both \"None\" and other options)",
                        'options': ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Science fiction", "Thriller", "War", "Western", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 10 favorite movies? (Minimum 1; Maximum 10) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 10,
                        'options': ["None"],
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 3 favorite Disney movies? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Alice in Wonderland", "Aladdin", "Atlantis: The Lost Empire", "Avengers: Endgame", "Bambi", "Beauty and the Beast", "Big Hero 6", "Black Is King", "Black Panther", "Brave", "Cars", "Cinderella", "Coco", "Enchanted", "Encanto", "Emperor&#x2032;s New Groove", "Fantasia", "Finding Dory", "Finding Nemo", "Frozen", "Hercules", "Honey, I Shrunk the Kids", "Homeward Bound", "Inside Out", "Lilo & Stitch", "Maleficent", "Mary Poppins", "Moana", "Monsters, Inc.", "Mulan", "Old Yeller", "One Hundred and One Dalmatians", "Pocahontas", "Pinocchio", "Pirates of the Caribbean", "Queen of Katwe", "Raya and the Last Dragon", "Ratatouille", "Remember the Titans", "Robin Hood", "Sleeping Beauty", "Snow White and the Seven Dwarfs", "Strange World", "Tangled", "Tarzan", "The Aristocats", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "The Fox and the Hound", "The Hunchback of Notre Dame", "The Incredibles", "The Jungle Book", "The Lion King", "The Little Mermaid", "The Mighty Ducks", "The Muppets", "The Nightmare Before Christmas", "The Parent Trap", "The Princess and the Frog", "The Jungle Book", "Treasure Planet", "Up", "WALL-E", "Wreck-It Ralph", "Who Framed Roger Rabbit", "Zootopia", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which TV show genres do you enjoy most? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Action & adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Reality", "Romance", "Science fiction", "Sitcom", "Thriller", "Variety", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 3 favorite TV channels? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': '3',
                        'textMinCount': 1,
                        'textMaxCount': 3,
                        'options': ['None'],
                        'exclusive': 'None'
                    },
                    {
                        'question': "Who are your top 3 favorite TV talk show hosts? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Andy Cohen", "Arsenio Hall", "Barbara Walters", "Bill Maher", "Carson Daly", "Chelsea Handler", "Conan O&#x2032;Brien", "Craig Kilborn", "Craig Ferguson", "David Letterman", "Dr. Drew Pinsky", "Dr. Oz", "Ellen DeGeneres", "Graham Norton", "Howard Stern", "James Corden", "Jay Leno", "Jerry Springer", "Jimmy Fallon", "Jimmy Kimmel", "John Oliver", "Jon Stewart", "Katie Couric", "Kelly Ripa", "Larry King", "Larry Wilmore", "Maury Povich", "Megyn Kelly", "Meredith Vieira", "Michael Strahan", "Montel Williams", "Oprah Winfrey", "Piers Morgan", "Regis Philbin", "Ricki Lake", "Rosie O&#x2032;Donnell", "Ryan Seacrest", "Stephen Colbert", "Steve Harvey", "Tom Green", "Tyra Banks", "Wendy Williams", "Whoopi Goldberg", "Wanda Sykes", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Do you enjoy playing video games? (Minimum 1; Maximum 1)",
                        'options': ["Yes, I love playing video games", "Yes, occasionally", "No, not really", "No, I don&#x2032;t play video games at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your top 3 favorite video game genres? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Action", "Adventure", "Casual", "Fighting", "Indie", "Massively multiplayer online (MMO)", "Platformer", "Puzzle", "Racing", "Role-playing (RPG)", "Shooter", "Simulation", "Sports", "Strategy", "Virtual reality", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 5 favorite video games? (Minimum 1; Maximum 5) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 5,
                        'textMaxCount': 5,
                        'options': ["None"],
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 3 favorite board games? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["7 Wonders", "Agricola", "Azul", "Balderdash", "Bananagrams", "Battleship", "Betrayal at House on the Hill", "Blokus", "Boggle", "Carcassonne", "Catan", "Chess", "Clue", "Codenames", "Concept", "Connect Four", "Cosmic Encounter", "Dominion", "Dixit", "Eldritch Horror", "Forbidden Island", "Gloomhaven", "Guess Who?", "Jenga", "King of Tokyo", "Life", "Love Letter", "Machi Koro", "Monopoly", "Mysterium", "Operation", "Othello", "Pandemic", "Power Grid", "Pictionary", "Puerto Rico", "Quarto", "Quoridor", "Risk", "Scattergories", "Scrabble", "Sequence", "Small World", "Sorry!", "Splendor", "Stratego", "Sushi Go!", "Taboo", "Ticket to Ride", "Trivial Pursuit", "Twister", "Uno", "Yahtzee", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 3 favorite card games? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Apples to Apples", "Baccarat", "Black Jack", "Bridge", "Canasta", "Cards Against Humanity", "Crazy Eights", "Cribbage", "Dominion", "Egyptian Ratscrew", "Euchre", "Exploding Kittens", "Fluxx", "Gin Rummy", "Go Fish", "Gwent", "Hanabi", "Hearts", "KeyForge", "Magic: The Gathering", "Munchkin", "Old Maid", "Phase 10", "Poker", "Pinochle", "Pit", "President", "Rook", "Rummy", "Saboteur", "Scopa", "Shithead", "Skat", "Skip-Bo", "Slapjack", "Snap", "Solitaire", "Spades", "Speed", "Spite and Malice", "Sushi Go!", "Tarot", "Texas Hold&#x2032;em", "The Game of Mao", "The Mind", "Tichu", "Uno", "War", "Whist", "Wizard", "Yu-Gi-Oh!", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you prefer to consume movies and TV shows? (Minimum 1; Maximum 2) (Cannot select both \"None\" and other options)",
                        'options': ["Streaming services (e.g., Netflix, Hulu)", "Live TV", "Physical media (e.g., DVDs, Blu-rays)", "Movie theaters", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Do you prefer physical books, eBooks, or audiobooks? (Minimum 1; Maximum 1) (Cannot select both \"None\" and other options)",
                        'options': ["Physical books", "eBooks", "Audiobooks", "A mix of formats", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you play video games? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "A few times a week", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you read books? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Weekly", "A few times a month", "Occasionally", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important are books in your life? (Minimum 1; Maximum 1)",
                        'options': ["Essential", "Very important", "Important", "Somewhat important", "Not at all important", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your top 3 favorite book genres? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Adventure", "Autobiography", "Biography", "Children&#x2032;s", "Classics", "Comics & graphic novels", "Crime", "Drama", "Fantasy", "Historical fiction", "Horror", "Mystery", "Non-fiction", "Poetry", "Romance", "Science fiction", "Self-help", "Thriller", "Young adult", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 10 favorite books? (Minimum 1; Maximum 10) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 10,
                        'textMaxCount': 10,
                        'options': ['None'],
                        'exclusive': 'None',
                    },
                    {
                        'question': "Who are your top 3 favorite authors? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 3,
                        'textMaxCount': 3,
                        'options': ['None'],
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 3 favorite music genres? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Alternative", "Blues", "Classical", "Country", "Dance", "Electronic", "Folk", "Funk", "Hip hop", "Indie", "Jazz", "Latin", "Metal", "Pop", "R&B", "Reggae", "Rock", "Soul", "World music", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Who are your top 3 favorite musicians? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 3,
                        'textMaxCount': 3,
                        'options': ['None'],
                        'exclusive': 'None',
                    },
                    {
                        'question': "What are your top 3 favorite musical instruments? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Accordion", "Banjo", "Bass guitar", "Cello", "Clarinet", "Drums", "Flute", "Guitar", "Harmonica", "Harp", "Keyboard", "Mandolin", "Oboe", "Organ", "Piano", "Saxophone", "Trombone", "Trumpet", "Ukulele", "Violin", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Sports & Physical Health',
        'sections': [
            {
                'title': 'Sports & Physical Health',
                'parts': [
                    {
                        'question': "How often do you exercise or engage in physical activities? (Minimum 1; Maximum 1)",
                        'options': ["5 or more times per week", "3-4 times per week", "1-2 times per week", "Occasionally", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What types of exercise or physical activities do you prefer? (Minimum 1; Maximum 3)",
                        'options': ["Cardio", "Strength training", "Flexibility/stretching", "Balance exercises", "Team sports", "Outdoor activities", "Indoor activities", "High-intensity interval training", "Low-intensity exercises", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "How many days a week do you usually go to the gym or work out? (Minimum 1; Maximum 1)",
                        'options': ["Every day", "5-6 days", "3-4 days", "1-2 days", "Rarely or never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your approach to nutrition and eating habits? (Minimum 1; Maximum 1)",
                        'options': ["Strictly healthy", "Mostly healthy with occasional indulgences", "Balanced mix of healthy and unhealthy", "Not focused on healthy eating", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you follow any specific dietary preferences or restrictions? (Minimum 1; Maximum &#8734) (Cannot select both \"No restrictions\" and other options)",
                        'options': ["Vegetarian", "Vegan", "Gluten-free", "Lactose intolerant", "Paleo", "Keto", "Low carb", "Low fat", "Other", "No restrictions"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'No restrictions',
                    },
                    {
                        'question': "On average, how many hours of sleep do you get per night? (Minimum 1; Maximum 1)",
                        'options': ["9 or more hours", "7-8 hours", "5-6 hours", "less than 5 hours"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many naps do you take each week? (Minimum 1; Maximum 1)",
                        'options': ["5 or more naps", "3-4 naps", "1-2 naps", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your preferred methods for rest and relaxation? (Minimum 1; Maximum 3)",
                        'options': ["Reading", "Meditation", "Yoga", "Taking naps", "Listening to music", "Watching TV or movies", "Spending time in nature", "Engaging in hobbies", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What is your level of interest in sports? (Minimum 1; Maximum 1)",
                        'options': ["Competitive athlete", "Amateur participant", "Avid fan", "Casual spectator", "Not interested at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which sports do you enjoy participating in? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["American football", "Baseball", "Basketball", "Boxing", "Cricket", "Crossfit", "Cycling", "Golf", "Gymnastics", "Ice hockey", "Martial arts", "Rugby", "Soccer", "Swimming", "Tennis", "Track and field", "Volleyball", "Wrestling", "Yoga", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which sports do you enjoy watching? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["American football", "Baseball", "Basketball", "Boxing", "Cricket", "Crossfit", "Cycling", "Golf", "Gymnastics", "Ice hockey", "Martial arts", "Rugby", "Soccer", "Swimming", "Tennis", "Track and field", "Volleyball", "Wrestling", "Yoga", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is your favorite professional baseball team (MLB)? (Minimum 1; Maximum 1)",
                        'options': ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite professional basketball team (NBA)? (Minimum 1; Maximum 1)",
                        'options': ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite professional football team (NFL)? (Minimum 1; Maximum 1)",
                        'options': ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite professional hockey team (NHL)? (Minimum 1; Maximum 1)",
                        'options': ["Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite college baseball team (NCAA)? (Minimum 1; Maximum 1)",
                        'options': ["Alabama Crimson Tide", "Arizona State Sun Devils", "Arkansas Razorbacks", "Auburn Tigers", "Baylor Bears", "Boston College Eagles", "California Golden Bears", "Clemson Tigers", "Coastal Carolina Chanticleers", "Duke Blue Devils", "East Carolina Pirates", "Florida Gators", "Florida State Seminoles", "Georgia Bulldogs", "Georgia Tech Yellow Jackets", "Indiana Hoosiers", "Kansas State Wildcats", "Kentucky Wildcats", "LSU Tigers", "Louisville Cardinals", "Miami Hurricanes", "Michigan Wolverines", "Mississippi State Bulldogs", "Missouri Tigers", "NC State Wolfpack", "North Carolina Tar Heels", "Ohio State Buckeyes", "Oklahoma Sooners", "Oklahoma State Cowboys", "Ole Miss Rebels", "Oregon Ducks", "Oregon State Beavers", "Penn State Nittany Lions", "Pepperdine Waves", "Pittsburgh Panthers", "Purdue Boilermakers", "Rice Owls", "Rutgers Scarlet Knights", "South Carolina Gamecocks", "Southern California Trojans", "Stanford Cardinal", "TCU Horned Frogs", "Tennessee Volunteers", "Texas A&M Aggies", "Texas Longhorns", "Texas Tech Red Raiders", "Tulane Green Wave", "UCLA Bruins", "UConn Huskies", "Vanderbilt Commodores", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Washington Huskies", "West Virginia Mountaineers", "Wichita State Shockers", "Xavier Musketeers", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite college basketball team (NCAA)? (Minimum 1; Maximum 1)",
                        'options': ["Alabama Crimson Tide", "Arizona State Sun Devils", "Arkansas Razorbacks", "Auburn Tigers", "Baylor Bears", "Boston College Eagles", "California Golden Bears", "Clemson Tigers", "Coastal Carolina Chanticleers", "Duke Blue Devils", "East Carolina Pirates", "Florida Gators", "Florida State Seminoles", "Georgia Bulldogs", "Georgia Tech Yellow Jackets", "Indiana Hoosiers", "Kansas State Wildcats", "Kentucky Wildcats", "LSU Tigers", "Louisville Cardinals", "Miami Hurricanes", "Michigan Wolverines", "Mississippi State Bulldogs", "Missouri Tigers", "NC State Wolfpack", "North Carolina Tar Heels", "Ohio State Buckeyes", "Oklahoma Sooners", "Oklahoma State Cowboys", "Ole Miss Rebels", "Oregon Ducks", "Oregon State Beavers", "Penn State Nittany Lions", "Pepperdine Waves", "Pittsburgh Panthers", "Purdue Boilermakers", "Rice Owls", "Rutgers Scarlet Knights", "South Carolina Gamecocks", "Southern California Trojans", "Stanford Cardinal", "TCU Horned Frogs", "Tennessee Volunteers", "Texas A&M Aggies", "Texas Longhorns", "Texas Tech Red Raiders", "Tulane Green Wave", "UCLA Bruins", "UConn Huskies", "Vanderbilt Commodores", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Washington Huskies", "West Virginia Mountaineers", "Wichita State Shockers", "Xavier Musketeers", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite college football team (NCAA)? (Minimum 1; Maximum 1)",
                        'options': ["Alabama Crimson Tide", "Arizona State Sun Devils", "Arkansas Razorbacks", "Auburn Tigers", "Baylor Bears", "Boston College Eagles", "California Golden Bears", "Clemson Tigers", "Coastal Carolina Chanticleers", "Duke Blue Devils", "East Carolina Pirates", "Florida Gators", "Florida State Seminoles", "Georgia Bulldogs", "Georgia Tech Yellow Jackets", "Indiana Hoosiers", "Kansas State Wildcats", "Kentucky Wildcats", "LSU Tigers", "Louisville Cardinals", "Miami Hurricanes", "Michigan Wolverines", "Mississippi State Bulldogs", "Missouri Tigers", "NC State Wolfpack", "North Carolina Tar Heels", "Ohio State Buckeyes", "Oklahoma Sooners", "Oklahoma State Cowboys", "Ole Miss Rebels", "Oregon Ducks", "Oregon State Beavers", "Penn State Nittany Lions", "Pepperdine Waves", "Pittsburgh Panthers", "Purdue Boilermakers", "Rice Owls", "Rutgers Scarlet Knights", "South Carolina Gamecocks", "Southern California Trojans", "Stanford Cardinal", "TCU Horned Frogs", "Tennessee Volunteers", "Texas A&M Aggies", "Texas Longhorns", "Texas Tech Red Raiders", "Tulane Green Wave", "UCLA Bruins", "UConn Huskies", "Vanderbilt Commodores", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Washington Huskies", "West Virginia Mountaineers", "Wichita State Shockers", "Xavier Musketeers", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your favorite college hockey team (NCAA)? (Minimum 1; Maximum 1)",
                        'options': ["Alabama Crimson Tide", "Arizona State Sun Devils", "Arkansas Razorbacks", "Auburn Tigers", "Baylor Bears", "Boston College Eagles", "California Golden Bears", "Clemson Tigers", "Coastal Carolina Chanticleers", "Duke Blue Devils", "East Carolina Pirates", "Florida Gators", "Florida State Seminoles", "Georgia Bulldogs", "Georgia Tech Yellow Jackets", "Indiana Hoosiers", "Kansas State Wildcats", "Kentucky Wildcats", "LSU Tigers", "Louisville Cardinals", "Miami Hurricanes", "Michigan Wolverines", "Mississippi State Bulldogs", "Missouri Tigers", "NC State Wolfpack", "North Carolina Tar Heels", "Ohio State Buckeyes", "Oklahoma Sooners", "Oklahoma State Cowboys", "Ole Miss Rebels", "Oregon Ducks", "Oregon State Beavers", "Penn State Nittany Lions", "Pepperdine Waves", "Pittsburgh Panthers", "Purdue Boilermakers", "Rice Owls", "Rutgers Scarlet Knights", "South Carolina Gamecocks", "Southern California Trojans", "Stanford Cardinal", "TCU Horned Frogs", "Tennessee Volunteers", "Texas A&M Aggies", "Texas Longhorns", "Texas Tech Red Raiders", "Tulane Green Wave", "UCLA Bruins", "UConn Huskies", "Vanderbilt Commodores", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Washington Huskies", "West Virginia Mountaineers", "Wichita State Shockers", "Xavier Musketeers", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How competitive are you when it comes to sports or physical activities? (Minimum 1; Maximum 1)",
                        'options': ["Highly competitive", "Moderately competitive", "Slightly competitive", "Not competitive at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is maintaining an active lifestyle to you? (Minimum 1; Maximum 1)",
                        'options': ["Essential", "Very important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Food & Cuisine Preferences',
        'sections': [
            {
                'title': 'Food & Cuisine Preferences',
                'parts': [
                    {
                        'question': "What are your top 5 favorite foods? (Minimum 1; Maximum 5) (Cannot select both \"None\" and other options)",
                        'options': ["Burgers", "Burritos", "Cakes", "Cheese", "Chicken nuggets", "Chocolate-based desserts", "Curry", "Fries", "Fried chicken", "Ice cream", "Pasta", "Pizza", "Ramen", "Salad", "Sandwiches", "Seafood", "Soups", "Steak", "Sushi", "Tacos", "None"],
                        'type': 'multi-select',
                        'maxOptions': 5,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 3 favorite types of cuisine? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["American", "Argentine", "Brazilian", "British", "Caribbean", "Chinese", "Colombian", "Cuban", "Egyptian", "Ethiopian", "French", "German", "Greek", "Indian", "Indonesian", "Irish", "Israeli", "Italian", "Japanese", "Korean", "Lebanese", "Malaysian", "Mediterranean", "Mexican", "Moroccan", "Nigerian", "Peruvian", "Polish", "Portuguese", "Russian", "Southern/Soul Food", "Spanish", "Sushi", "Swedish", "Syrian", "Thai", "Turkish", "Ukrainian", "Vegan/Vegetarian", "Vietnamese", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Where do you usually shop for groceries? (Minimum 1; Maximum 1)",
                        'options': ["Acme", "Aldi", "Costco", "Food Lion", "Fred Meyer", "Giant", "Giant Eagle", "H-E-B", "Harris Teeter", "Jewel-Osco", "Key Food", "King Soopers", "Kroger", "Meijer", "Piggly Wiggly", "Publix", "Ralphs", "Safeway", "Sam&#x2032;s Club", "Save-A-Lot", "Shaw&#x2032;s", "ShopRite", "Sprouts Farmers Market", "Stater Bros.", "Stop & Shop", "Target", "Trader Joe&#x2032;s", "Vons", "Walmart", "Wegmans", "Whole Foods Market", "Winn-Dixie", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What types of food do you consume? (Minimum 1; Maximum &#8734)",
                        'options': ["Beef", "Pork", "Lamb", "Chicken", "Turkey", "Duck", "Fish (including salmon, tuna, cod)", "Seafood (including shrimp, crab, lobster)", "Vegetables", "Fruits", "Legumes (including beans, lentils, chickpeas)", "Grains (including rice, quinoa, oats)", "Dairy products (including milk, cheese, yogurt)", "Eggs", "Nuts and seeds (including almonds, walnuts, sunflower seeds)", "Plant-based meat alternatives (including tofu, tempeh, seitan)", "Baked goods (bread, pastries, cakes)", "Processed foods (including chips, cookies, candy)", "Fast food", "Coffee", "Tea", "Soft drinks", "Gluten-free options", "Vegetarian or vegan options", "Organic or locally sourced foods"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "What are your top 3 favorite fast food restaurants? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Arby&#x2032;s", "Burger King", "Carl&#x2032;s Jr.", "Chick-fil-A", "Chipotle", "Dairy Queen", "Domino&#x2032;s", "Dunkin&#x2032;", "Five Guys", "Hardee&#x2032;s", "In-N-Out Burger", "Jack in the Box", "KFC", "Little Caesars", "McDonald&#x2032;s", "Panda Express", "Panera Bread", "Papa John&#x2032;s", "Pizza Hut", "Popeyes", "Quiznos", "Sonic Drive-In", "Starbucks", "Subway", "Taco Bell", "Tim Hortons", "Wendy&#x2032;s", "Whataburger", "White Castle", "Wingstop", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 7 favorite condiments? (Minimum 1; Maximum 7) (Cannot select both \"None\" and other options)",
                        'options': ["Barbecue sauce", "Buffalo sauce", "Dijon mustard", "Honey mustard", "Hot sauce", "Ketchup", "Mayonnaise", "Mustard", "Olive oil", "Pepper", "Pesto", "Ranch dressing", "Relish", "Salt", "Salsa", "Soy sauce", "Sriracha", "Steak sauce", "Sweet and sour sauce", "Tabasco sauce", "Tartar sauce", "Teriyaki sauce", "Thousand island dressing", "Vinegar", "Worcestershire sauce", "Yellow mustard", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 7,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is your favorite meal of the day? (Minimum 1; Maximum 1)",
                        'options': ["Breakfast", "Brunch", "Lunch", "Dinner", "Late-night snacks"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much coffee do you drink? (Minimum 1; Maximum 1)",
                        'options': ["Less than one cup a day", "1 cup a day", "2 cups a day", "3 cups a day", "4 or more cups a day", "I don&#x2032;t drink coffee"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you cook at home? (Minimum 1; Maximum 1)",
                        'options': ["Every day", "Almost every day", "A few times a week", "A few times a month", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you eat out at restaurants or order takeout? (Minimum 1; Maximum 1)",
                        'options': ["Every day", "Almost every day", "A few times a week", "A few times a month", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you keep kosher? If so, to what extent? (Minimum 1; Maximum 1)",
                        'options': ["Fully kosher both at home and outside", "Fully kosher at home and partially kosher outside", "Partially kosher at home and outside", "I don&#x2032;t keep kosher"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you keep halal? If so, to what extent? (Minimum 1; Maximum 1)",
                        'options': ["Fully halal both at home and outside", "Fully halal at home and partially halal outside", "Partially halal at home and outside", "I don&#x2032;t keep halal"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you vegetarian? If so, to what extent? (Minimum 1; Maximum 1)",
                        'options': ["Not vegetarian", "Mostly vegetarian, but eat meat occasionally", "Strict vegetarian, no meat, but consume dairy and eggs", "Pescatarian, consume fish and seafood, but no meat"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you vegan? If so, to what extent? (Minimum 1; Maximum 1)",
                        'options': ["Not vegan", "Mostly vegan, but consume animal products occasionally", "Strict vegan, no animal products at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have any of the following dietary restrictions? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Gluten-free", "Dairy-free", "Pescatarian", "Low sodium", "Low carb", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How important is it for your partner to share your dietary preferences or restrictions? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Somewhat important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you rate your cooking skills? (Minimum 1; Maximum 1)",
                        'options': ["Beginner, still learning the basics", "Intermediate, confident with most recipes", "Advanced, can handle complex dishes and techniques", "Expert, could be a professional chef"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Would you change your food and cuisine preferences for a partner? (Minimum 1; Maximum 1)",
                        'options': ["Yes, I&#x2032;m open to change", "Maybe, depends on the situation", "No, my preferences are important to me"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How adventurous are you when it comes to trying new foods? (Minimum 1; Maximum 1)",
                        'options': ["Extremely adventurous", "Very adventurous", "Moderately adventurous", "Slightly adventurous", "Not adventurous at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you try new restaurants or dining experiences? (Minimum 1; Maximum 1)",
                        'options': ["A few times a week", "A few times a month", "Once a month", "A few times a year", "Rarely", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personal Style & Aesthetics',
        'sections': [
            {
                'title': 'Personal Style & Aesthetics',
                'parts': [
                    {
                        'question': "How would you describe your personal style? (Minimum 1; Maximum 3)",
                        'options': ["Casual", "Sporty", "Elegant", "Trendy", "Minimalist", "Eclectic", "Vintage", "Bohemian", "Preppy", "Professional", "Alternative", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "How often do you wear cologne or perfume? (Minimum 1; Maximum 1)",
                        'options': ["Never", "Occasionally", "A few times a week", "Daily"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you wear makeup? (Minimum 1; Maximum 1)",
                        'options': ["Never", "Occasionally", "A few times a week", "Daily"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your favorite clothing brands? (Minimum 1; Maximum 5)",
                        'options': ["3.1 Phillip Lim", "7 For All Mankind", "Acne Studios", "Adidas", "A.P.C.", "Alice + Olivia", "AllSaints", "American Eagle Outfitters", "Anthropologie", "Armani", "ASOS", "Balenciaga", "Balmain", "Banana Republic", "Barneys New York", "BCBGMAXAZRIA", "Berluti", "Bottega Veneta", "Brioni", "Brooks", "Brooks Brothers", "Brunello Cucinelli", "Bulgari", "Burberry", "Calvin Klein", "Carhartt", "Cartier", "Chanel", "Chlo&#xE9", "Christian Louboutin", "Citizens of Humanity", "Coach", "Comme des Gar&#xE7ons", "Converse", "COS", "Cuyana", "Diane von F&#xFCrstenberg", "Diesel", "Dior", "Dolce & Gabbana", "Dr. Martens", "Dsquared2", "Eddie Bauer", "Eileen Fisher", "Elie Tahari", "Ermenegildo Zegna", "Everlane", "Faherty", "Fendi", "Fila", "Filson", "Forever 21", "FRAME", "Free People", "Ganni", "Gap", "Givenchy", "G-Star Raw", "Gucci", "H&M", "Helmut Lang", "Heron Preston", "Hollister", "Hugo Boss", "IRO", "Isabel Marant", "J Brand", "J.Crew", "Jacquemus", "James Perse", "Joie", "John Varvatos", "Karen Millen", "Karl Lagerfeld", "Kate Spade", "Kenzo", "Kiton", "Kith", "L&#x2032;Agence", "Lacoste", "Lanvin", "La Perla", "Levi&#x2032;s", "Loeffler Randall", "Longchamp", "Louis Vuitton", "Lululemon", "Maje", "Mansur Gavriel", "Marc Jacobs", "Marni", "Massimo Dutti", "Michael Kors", "Miu Miu", "MM6 Maison Margiela", "Montblanc", "Moschino", "Mulberry", "Nanushka", "Nautica", "Nili Lotan", "Nike", "North Face", "O&#x2032;Neill", "Old Navy", "Orlebar Brown", "Oscar de la Renta", "Paige", "Palm Angels", "Patagonia", "Paul Smith", "Philipp Plein", "Polo Ralph Lauren", "Prada", "Proenza Schouler", "Puma", "Rag & Bone", "Ralph & Russo", "Ralph Lauren", "Rebecca Minkoff", "Reebok", "Reformation", "Reiss", "Rick Owens", "Roberto Cavalli", "Rodarte", "Roksanda", "Saint Laurent", "Salvatore Ferragamo", "Sandro", "Scotch & Soda", "Self-Portrait", "Simon Miller", "Soludos", "St. John", "Staud", "Stella McCartney", "Steve Madden", "Stuart Weitzman", "Superdry", "Supreme", "Ted Baker", "Theory", "Thom Sweeney", "Tibi", "Tiffany & Co.", "Tod&#x2032;s", "Tom Ford", "Tommy Hilfiger", "Topshop", "Tory Burch", "Tot&#xEAme", "UGG", "Under Armour", "Uniqlo", "Ulla Johnson", "Urban Outfitters", "Valentino", "Vans", "Versace", "Victoria&#x2032;s Secret", "Vince", "Virgil Abloh", "Visvim", "Y-3", "Yeezy", "Yohji Yamamoto", "Zara", "Zimmermann", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "Which clothing colors look best on you? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Black", "White", "Gray", "Brown", "Beige", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which of these fashion trends do you like the most? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Streetwear", "Athleisure", "Vintage-inspired", "Eco-friendly", "Monochrome", "Bold prints", "Pastels", "Oversized fits", "Tailored suits", "High-end designer", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "How often do you go to the tanning salon? (Minimum 1; Maximum 1)",
                        'options': ["More than once a week", "Weekly", "Monthly", "A few times a year", "Once a year or less", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of hair do you have? (Minimum 1; Maximum 1)",
                        'options': ["Curly", "Straight", "Wavy", "Coily", "Bald or shaved head"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you usually wear your hair? (Minimum 1; Maximum 1)",
                        'options': ["Short and natural", "Long and natural", "Styled with heat tools", "Updo", "Braids", "Extensions or weave", "Shaved or buzz cut", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have any of the following body modifications? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Tattoos", "Piercings", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "Do you have facial hair (including mustache)? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you have abs? (Minimum 1; Maximum 1)",
                        'options': ["Yes, well-defined", "Yes, somewhat visible", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of the following physical characteristics do you have? (Minimum 1; Maximum &#8734)",
                        'options': ["Freckles", "Scars", "Birthmarks", "Moles", "Dimples", "Beauty marks", "Stretch marks", "Vitiligo", "Glasses", "Contact lenses", "Braces", "Unusual eye color", "Heterochromia (different colored eyes)"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity'
                    },
                    {
                        'question': "How important is your own appearance to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Would you be willing to change your personal style for a partner? (Minimum 1; Maximum 1)",
                        'options': ["I would completely change if necessary", "I would consider significant changes", "Only minor changes", "Not at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Pets & Animals',
        'sections': [
            {
                'title': 'Pets & Animals',
                'parts': [
                    {
                        'question': "Do you own any pets? (Minimum 1; Maximum 1)",
                        'options': ["Yes, I have one or more pets", "No, but I would like to have pets", "No, and I don&#x2032;t want any pets"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What types of pets do you prefer? (Minimum 1; Maximum 3) (Cannot select both \"No preference\" and other options)",
                        'options': ["Dogs", "Cats", "Birds", "Fish", "Reptiles", "Small mammals (e.g., rabbits, hamsters)", "Exotic pets (e.g., tarantulas, sugar gliders)", "Other", "No preference"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'No preference'
                    },
                    {
                        'question': "Are you open to adopting or rescuing pets? (Minimum 1; Maximum 1)",
                        'options': ["Yes, definitely", "Maybe, depends on the circumstances", "No, I prefer getting pets from breeders or other sources", "I don&#x2032;t want any pets"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about pets in the home? (Minimum 1; Maximum 1)",
                        'options': ["Prefer having pets inside", "Prefer pets to stay outdoors", "Prefer a mix of indoor and outdoor pets", "No pets allowed inside", "Depends on the type of pet"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of animal-related activities do you enjoy? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Visiting zoos or aquariums", "Volunteering at animal shelters", "Going to pet-friendly events", "Watching wildlife", "Birdwatching", "Horseback riding", "Dog training or agility", "Animal photography", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "What are your top 5 favorite animals? (Minimum 1; Maximum 5) (Cannot select both \"None\" and other options)",
                        'options': ["Alpacas", "Apes", "Armadillos", "Axolotls", "Bats", "Bears", "Bees", "Bison", "Butterflies", "Camels", "Cats", "Cheetahs", "Chickens", "Chameleons", "Chimpanzees", "Cockatoos", "Coral reefs", "Cows", "Crabs", "Crocodiles", "Deer", "Dolphins", "Dogs", "Eagles", "Elephants", "Flamingos", "Foxes", "Frogs", "Geckos", "Giraffes", "Goats", "Gorillas", "Hedgehogs", "Hermit crabs", "Horses", "Hummingbirds", "Iguanas", "Jellyfish", "Kangaroos", "Koalas", "Lemurs", "Leopards", "Lizards", "Lions", "Macaws", "Manatees", "Meerkats", "Monkeys", "Narwhals", "Octopuses", "Orangutans", "Otters", "Owls", "Ostriches", "Parrots", "Peacocks", "Penguins", "Pigs", "Platypuses", "Polar bears", "Porcupines", "Rabbits", "Raccoons", "Rhinoceroses", "Seals", "Sea turtles", "Sharks", "Sloths", "Snakes", "Squirrels", "Stingrays", "Swans", "Tapirs", "Tasmanian devils", "Tigers", "Toucans", "Turtles", "Walruses", "Warthogs", "Weasels", "Whales", "Wolves", "Zebras", "Zeppelin", "None"],
                        'type': 'multi-select',
                        'maxOptions': 5,
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Relationship Dynamics & Goals',
        'sections': [
            {
                'title': 'Relationship Dynamics & Goals',
                'parts': [
                    {
                        'question': "Which attachment style best describes you? (Minimum 1; Maximum 1)",
                        'options': ["Secure (little trouble communicating with partners)", "Anxious (needier in romantic relationships and need more reassurance)", "Avoidant (much more likely to avoid intimacy altogether and keep other people at a distance)", "Disorganized (combination of both anxious and avoidant)", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What type of relationship dynamics do you prefer? (Minimum 1; Maximum 1)",
                        'options': ["Balanced and equal", "One partner takes the lead", "Depends on the situation", "Other", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What level of commitment are you seeking in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Marriage", "Exclusive, long-term relationship", "Committed, but not exclusive", "Open relationship", "Casual dating", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your personal views on divorce? (Minimum 1; Maximum 1)",
                        'options': ["Strongly against", "Generally disapprove", "Neutral", "Generally approve", "Strongly support"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which relationship goals are most important to you? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Emotional intimacy", "Financial stability", "Starting a family", "Personal growth", "Shared hobbies/interests", "Traveling together", "Supporting each other&#x2032;s careers", "Spiritual connection", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you balance independence and interdependence in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Strongly value independence", "Mostly independent but appreciate some interdependence", "Equal balance of independence and interdependence", "Mostly interdependent but value some independence", "Strongly value interdependence"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Boundaries & Deal Breakers',
        'sections': [
            {
                'title': 'Boundaries & Deal Breakers',
                'parts': [
                    {
                        'question': "What are your deal breakers in a relationship? (Minimum 1; Maximum 5)",
                        'options': ["Lack of trust or honesty", "Poor communication", "Substance abuse", "Incompatible life goals", "Financial irresponsibility", "Infidelity", "Lack of emotional support", "Different views on family planning", "Disregard for personal boundaries", "Incompatible political views", "Long distance relationship", "Lack of ambition or motivation", "Different religious beliefs", "Incompatible lifestyle choices (e.g., diet, exercise)", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "Which of these personal boundaries are important to you in a relationship? (Minimum 1; Maximum 5)",
                        'options': ["Respecting privacy and personal space", "Maintaining a balance between individual and couple time", "Communicating openly about feelings and emotions", "Establishing clear expectations regarding finances", "Setting limits on social media usage", "Agreeing on appropriate boundaries with ex-partners", "Respecting each other&#x2032;s family and cultural backgrounds", "Defining emotional and physical boundaries", "Supporting each other&#x2032;s career and personal growth", "Deciding on acceptable levels of contact with friends of the opposite sex", "Agreeing on boundaries for discussing past relationships", "Establishing boundaries for decision-making and problem-solving", "Deciding on the role of spirituality or religion in the relationship", "Navigating and respecting dietary preferences and lifestyle choices", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "How willing are you to compromise on your boundaries or deal breakers in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Very willing, as long as it benefits the relationship", "Somewhat willing, depending on the situation", "Reluctant, but open to discussion", "Unwilling, my boundaries and deal breakers are non-negotiable", "It depends on the specific boundary or deal breaker", "I would need to discuss and evaluate it on a case-by-case basis"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Trust & Security',
        'sections': [
            {
                'title': 'Trust & Security',
                'parts': [
                    {
                        'question': "How important is trust to you in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important is honesty to you in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "In past relationships, have you ever experienced a breach of trust? (Minimum 1; Maximum 1)",
                        'options': ["Yes, multiple times", "Yes, but only once", "No, never", "I have not been in a serious relationship"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of these trust-building strategies do you believe are essential in a relationship? (Minimum 1; Maximum 3)",
                        'options': ["Open communication", "Emotional vulnerability", "Consistent actions", "Honesty", "Emotional support", "Quality time together", "Shared goals and values", "Respecting boundaries", "Forgiveness and understanding", "Transparency about past relationships", "Financial transparency", "Keeping promises", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "What aspects of relationship security are most important to you? (Minimum 1; Maximum 3)",
                        'options': ["Emotional support", "Financial stability", "Shared life goals", "Commitment", "Trust", "Consistent communication", "Quality time together", "Supporting each other&#x2032;s personal growth", "Shared values and beliefs", "Respect for each other&#x2032;s boundaries", "Mutual understanding and empathy", "Problem-solving and conflict resolution", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "Which of the following actions make you feel safe and supported in a relationship? (Minimum 1; Maximum 5)",
                        'options': ["Emotional vulnerability", "Open communication", "Active listening", "Showing empathy and understanding", "Expressing love and affection", "Trusting each other", "Encouraging each other&#x2032;s personal growth", "Respecting each other&#x2032;s boundaries", "Providing financial support", "Supporting each other&#x2032;s career", "Consistent acts of care and kindness", "Celebrating each other&#x2032;s achievements", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "How willing are you to provide emotional support and safety for your partner? (Minimum 1; Maximum 1)",
                        'options': ["Very willing", "Willing, but within my limits", "Willing to learn and grow in this area", "Somewhat hesitant, but open to trying", "Unwilling or unsure", "It depends on the situation and partner"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Love & Romance',
        'sections': [
            {
                'title': 'Love & Romance',
                'parts': [
                    {
                        'question': "What is your sexual orientation? (Minimum 1; Maximum 1)",
                        'options': ["Straight", "Homosexual", "Bisexual", "Pansexual", "Asexual", "Queer", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_sexual_orientation'
                    },
                    {
                        'question': "What is your current marital status? (Minimum 1; Maximum 1)",
                        'options': ["Never married", "Married", "Separated", "Divorced", "Widowed", "It&#x2032;s complicated"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you ever been in love? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What do you find most attractive in a potential partner? (Minimum 1; Maximum 3)",
                        'options': ["Physical appearance", "Intelligence", "Humor", "Kindness", "Confidence", "Ambition", "Shared interests", "Emotional connection", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "How important is physical attraction to you? (Minimum 1; Maximum 1)",
                        'options': ["Crucial", "Very important", "Important", "Somewhat important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What physical features are you most attracted to? (Minimum 1; Maximum 3)",
                        'options': ["Eyes", "Smile", "Hair", "Height", "Body type", "Style", "Fitness level", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 3
                    },
                    {
                        'question': "Which of the following body shapes are you most attracted to? (Minimum 1; Maximum 5)",                        
                        'optionGroups': [
                            {
                                'type': '0', // Male
                                'valuePrefix': 'M',
                                'options': ["img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png"]
                            },
                            {
                                'type': '1', // Female
                                'valuePrefix': 'F',
                                'options': ["img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png"]
                            },
                            {
                                'type': '2', // Intersex
                                'valuePrefix': 'I',
                                'options': ["img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png", "img/body1.png", "img/body2.png"]
                            }
                        ],
                        'type': 'image-select',
                        'maxOptions': 5,
                        'width': 140,
                        'height': 290,
                        'id': 'q_body_type_attracted'
                    },
                    {
                        'question': "Which of the following voices do you like? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["American accent (Northern)", "American accent (Southern)", "American accent (California)", "French accent", "Italian accent", "Spanish accent", "English accent (British)", "Irish accent", "Scottish accent", "Brazilian Portuguese accent", "Australian accent", "Argentine accent", "South African accent", "New Zealand accent", "Greek accent", "Caribbean accent", "Swedish accent", "Hungarian accent", "Czech accent", "Norwegian accent", "Dutch accent", "Swiss accent", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you express your love and affection? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Romantic gestures", "Verbal affirmations", "Physical touch", "Quality time", "Acts of service", "Gift-giving", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What romantic gestures do you appreciate most? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Surprises", "Love notes", "Flowers", "Candlelit dinners", "Weekend getaways", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is your ideal first date? (Minimum 1; Maximum 2)",
                        'options': ["Casual coffee or drink", "Fancy dinner", "Outdoor activity", "Movie or theater", "Art exhibit or museum", "Live music or concert", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 2
                    },
                    {
                        'question': "What is your opinion on who should pay on the first date? (Minimum 1; Maximum 1)",
                        'options': ["The guy", "The girl", "The person who initiated the date", "Split the bill equally", "The person with higher income", "Whoever feels comfortable paying", "Take turns paying for different parts of the date (e.g., one pays for dinner, the other pays for dessert)", "It doesn&#x2032;t matter", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How soon would you like to meet in person after connecting online? (Minimum 1; Maximum 1)",
                        'options': ["Right away", "After a few messages", "After a week or more of messaging", "Only after a video or phone call", "It depends on the connection"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often do you prefer to communicate with someone you&#x2032;re dating? (Minimum 1; Maximum 1)",
                        'options': ["Multiple times a day", "Daily", "Every few days", "Once a week", "As needed", "It depends on the relationship"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What are your expectations for exclusivity when dating someone? (Minimum 1; Maximum 1)",
                        'options': ["Exclusive from the start", "Exclusive after a few dates", "Exclusive after a few months", "Open to non-exclusive dating", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How long do you typically wait before introducing a partner to your friends and family? (Minimum 1; Maximum 1)",
                        'options': ["A few weeks", "A few months", "Six months or more", "It depends on the relationship", "Prefer not to introduce partners to friends and family"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "When would you like to get married? (Minimum 1; Maximum 1)",
                        'options': ["Within a year", "1-3 years", "3-5 years", "5+ years", "Never", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you envision making major decisions in a long-term relationship? (Minimum 1; Maximum 1)",
                        'options': ["Joint decision-making", "Individual decision-making with input from partner", "Defer to partner", "It depends on the situation", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Compatibility in Intimate Relationships',
        'sections': [
            {
                'title': 'Compatibility in Intimate Relationships',
                'parts': [
                    {
                        'question': "How important is physical affection to you in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Crucial", "Very important", "Somewhat important", "Not important at all", "Don&#x2032;t know"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about long-distance relationships? (Minimum 1; Maximum 1)",
                        'options': ["Willing to try", "Open if the connection is strong", "Would prefer not to", "Absolutely not"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How comfortable are you discussing sex? (Minimum 1; Maximum 1)",
                        'options': ["Very comfortable", "Somewhat comfortable", "Neutral", "Somewhat uncomfortable", "Very uncomfortable"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your preferred level of intimacy in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Deep emotional connection", "Strong physical connection", "Balanced emotional and physical connection", "Casual and lighthearted connection", "Don&#x2032;t know"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "With how many sexual partners have you consensually engaged in the following activities?",
                        'optionGroups': [
                            {
                                "title": 'Oral sex',
                                'options': ["None", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 or more"]
                            },
                            {
                                "title": 'Intercourse',
                                'options': ["None", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 or more"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'answerIncludeSubTitle': true
                    },
                    {
                        'question': "At what age did you first consensually engage in the following activities?",
                        'optionGroups': [
                            {
                                "title": 'Oral sex',
                                'options': ["12 or younger", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30 or older", "Never"]
                            },
                            {
                                "title": 'Intercourse',
                                'options': ["12 or younger", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30 or older", "Never"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'answerIncludeSubTitle': true
                    },
                    {
                        'question': "How often do you currently have sex? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Once a week", "A few times a month", "Once a month", "Less than once a month", "Not currently sexually active"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often would you like to have sex while dating? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Once a week", "A few times a month", "Once a month", "Less than once a month", "It depends on the relationship", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How often would you like to have sex during marriage? (Minimum 1; Maximum 1)",
                        'options': ["Daily", "Several times a week", "Once a week", "A few times a month", "Once a month", "Less than once a month", "It depends on the relationship", "Never"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your libido or level of sexual desire? (Minimum 1; Maximum 1)",
                        'options': ["Very high", "High", "Average", "Low", "Very low"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What times of the day do you, or would you, prefer to have sex? (Minimum 1; Maximum 2) (Cannot select both \"No preference\" and other options)",
                        'options': ["Morning", "Afternoon", "Evening", "Night", "Late night", "No preference"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'No preference'
                    },
                    {
                        'question': "How much lighting do you, or would you, prefer during sex? (Minimum 1; Maximum 2) (Cannot select both \"No preference\" and other options)",
                        'options': ["Bright", "Dim", "Candlelight", "Complete darkness", "No preference"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'No preference'
                    },
                    {
                        'question': "Where do you, or would you, prefer to have sex? (Minimum 1; Maximum 2) (Cannot select both \"No preference\" and other options)",
                        'options': ["Bedroom", "Living room", "Kitchen", "Bathroom", "Outdoors", "In a car", "Other", "No preference"],
                        'type': 'multi-select',
                        'maxOptions': 2,
                        'exclusive': 'No preference'
                    },
                    {
                        'question': "At what age did you start puberty? (Minimum 1; Maximum 1)",
                        'options': ["9 or younger", "10", "11", "12", "13", "14", "15", "16", "17", "18 or older", "unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Have you frozen your sperm or eggs? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you able to conceive a child? (Minimum 1; Maximum 1) (Question disappears if Sex &#x2260; Female)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                        'id': 'q_conceive_child'
                    },
                    {
                        'question': "Have you ever had a one-night stand? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you transgender? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Would you consider having a romantic relationship with a transgender person? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Maybe"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Would you consider an open relationship? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Maybe"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your love language? (Minimum 1; Maximum &#8734) (Cannot select both \"Don&#x2032;t know\" or \"None\" and other options)",
                        'options': ["Words of affirmation", "Quality time", "Receiving gifts", "Acts of service", "Physical touch", "Don&#x2032;t know", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'optionExclusives': [
                            {
                                'main': 'Don&#x2032;t know',
                                'others': ["Words of affirmation", "Quality time", "Receiving gifts", "Acts of service", "Physical touch",  "None"]
                            },
                            {
                                'main': 'None',
                                'others': ["Words of affirmation", "Quality time", "Receiving gifts", "Acts of service", "Physical touch", "Don&#x2032;t know"]
                            }
                        ],
                    },
                    {
                        'question': "How do you like to express love and affection to your partner? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Surprises", "Thoughtful gestures", "Verbal affirmations", "Physical affection", "Listening and providing emotional support", "Gift-giving", "Acts of service", "Spending time together", "Encouraging their dreams and goals", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What is your preferred relationship tempo? (Minimum 1; Maximum 1)",
                        'options': ["Ready for immediate commitment", "Moving towards long-term commitment", "Exclusive but not committed", "Slow and steady", "Casual dating", "It depends on the situation"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Conflict Resolution & Problem-Solving',
        'sections': [
            {
                'title': 'Conflict Resolution & Problem-Solving',
                'parts': [
                    {
                        'question': "How do you handle conflicts in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Discuss and resolve immediately", "Take time to cool off before discussing", "Avoid confrontation", "Seeking advice from friends or family", "Seek mediation from a third party", "Compromise", "Apologize and move on", "Hold grudges", "Passive-aggressive behavior", "Ignoring the issue and hoping it resolves on its own", "Using humor to diffuse tension", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your problem-solving style in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Analytical and logical", "Emotional and intuitive", "Collaborative and open-minded", "Decisive and assertive", "Adaptive and flexible", "Creative and innovative", "Avoidant and procrastinating", "Passive and accommodating", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you open to seeking professional help for relationship issues? (Minimum 1; Maximum 1)",
                        'options': ["Yes, definitely", "Maybe, if necessary", "No, I prefer to handle things on my own", "Don&#x2032;t know"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you feel about apologizing in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["I apologize easily", "I apologize when I feel I&#x2032;m wrong", "I struggle to apologize", "I rarely apologize", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How willing are you to compromise in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Very willing", "Somewhat willing", "Not very willing", "Unwilling", "It depends on the situation"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                ]
            }
        ]
    },
    {
        'title': 'Quality Time & Relationship Maintenance',
        'sections': [
            {
                'title': 'Quality Time & Relationship Maintenance',
                'parts': [
                    {
                        'question': "How do you prefer to spend quality time with your partner? (Minimum 1; Maximum 5)",
                        'options': ["Deep conversations", "Cuddling and watching movies", "Trying new activities together", "Cooking together", "Traveling", "Exercising together", "Going out with friends", "Attending events", "Pursuing hobbies together", "Alone time to recharge", "Working on projects together", "Romantic dates", "Exploring nature", "Attending workshops or classes", "Volunteering", "Playing games", "Reading together", "Listening to music or attending concerts", "Spontaneous adventures", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "How often do you prefer to have date nights? (Minimum 1; Maximum 1)",
                        'options': ["Once a week", "Once every two weeks", "Once a month", "A few times a year", "Whenever the mood strikes", "No set schedule"],
                        'type': 'multi-select',
                        'maxOptions': 1
                    },                    
                    {
                        'question': "How do you prefer to stay connected with your partner during the day? (Minimum 1; Maximum 1)",
                        'options': ["Texting", "Phone calls", "Video calls", "Emails", "Social media", "No contact during the day", "Only when necessary", "Mix", "Other"],
                        'type': 'multi-select',
                        'maxOptions': 1
                    }
                ]
            }
        ]
    },
    {
        'title': 'Family, Parenting & Support',
        'sections': [
            {
                'title': 'Family, Parenting & Support',
                'parts': [
                    {
                        'question': "How important is having children to you? (Minimum 1; Maximum 1)",
                        'options': ["Very important", "Somewhat important", "Not important at all", "Undecided"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many children do you have? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many children would you like to have? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5 or more", "undecided"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "When would you like to have your first or next child? (Minimum 1; Maximum 1)",
                        'options': ["Within a year", "1-3 years", "3-5 years", "5+ years", "Never", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Do you want biological children or are you open to adoption? (Minimum 1; Maximum 1)",
                        'options': ["Biological children only", "Open to adoption", "Both", "Undecided"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you envision raising your future children in terms of family values and upbringing? (Minimum 1; Maximum 1)",
                        'options': ["Very traditional", "Somewhat traditional", "Balanced", "Somewhat progressive", "Very progressive", "No children"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What do you believe should be a man&#x2032;s responsibilities in marriage? (Minimum 1; Maximum 5)",
                        'options': ["Emotional support", "Household chores", "Cooking", "Childcare", "Financial planning", "Generating income", "Sex, intimacy and romance", "Making decisions", "Resolving conflicts", "Planning for the family", "Home maintenance and repairs", "Creating a safe and loving home environment", "Fostering a sense of humor and fun", "Celebrating successes and milestones", "Upholding family traditions", "Caring for extended family members", "Staying fit and healthy", "Advocating for spouse&#x2032;s needs and dreams"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "What do you believe should be a woman&#x2032;s responsibilities in marriage? (Select up to 5)",
                        'options': ["Emotional support", "Household chores", "Cooking", "Childcare", "Financial planning", "Generating income", "Sex, intimacy and romance", "Making decisions", "Resolving conflicts", "Planning for the family", "Home maintenance and repairs", "Creating a safe and loving home environment", "Fostering a sense of humor and fun", "Celebrating successes and milestones", "Upholding family traditions", "Caring for extended family members", "Staying fit and healthy", "Advocating for spouse&#x2032;s needs and dreams"],
                        'type': 'multi-select',
                        'maxOptions': 5
                    },
                    {
                        'question': "What parenting style do you think you will prefer? (Minimum 1; Maximum 1)",
                        'options': ["Authoritative (supportive and responsive, sets clear expectations and boundaries)", "Authoritarian (strict rules and high expectations, less warmth and responsiveness)", "Permissive (nurturing and indulgent, few rules and expectations)", "Uninvolved (low responsiveness and minimal involvement, few rules and expectations)", "A mix of styles", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What style of baby names do you find appealing? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Classic/traditional (e.g., William, Elizabeth)", "Modern/trendy (e.g., Mason, Harper)", "Unique/uncommon (e.g., Zephyr, Seraphina)", "Cultural/ethnic (e.g., Ravi, Amara)", "Nature-inspired (e.g., River, Willow)", "Vintage/old-fashioned (e.g., Theodore, Evelyn)", "Short/simple (e.g., Max, Mia)", "Gender-neutral (e.g., Taylor, Jordan)", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you typically show support and encouragement to your partner? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Verbal affirmations", "Acts of service", "Quality time", "Physical touch", "Gift-giving", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What type of support do you appreciate most from your partner? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Verbal affirmations", "Acts of service", "Quality time", "Physical touch", "Gift-giving", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How do you build trust in a relationship? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Open communication", "Honesty", "Consistency", "Quality time", "Sharing vulnerabilities", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "What does loyalty mean to you in a relationship? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Unwavering support", "Trustworthiness", "Emotional fidelity", "Sexual fidelity", "Commitment to shared goals", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Family Dynamics & Relationships',
        'sections': [
            {
                'title': 'Family Dynamics & Relationships',
                'parts': [
                    {
                        'question': "How would you describe your family upbringing? (Minimum 1; Maximum 1)",
                        'options': ["Very traditional", "Somewhat traditional", "Balanced", "Somewhat progressive", "Very progressive"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your childhood? (Minimum 1; Maximum 1)",
                        'options': ["Extremely happy and fulfilling", "Generally happy with some ups and downs", "Average with a mix of good and bad experiences", "Somewhat challenging with more downs than ups", "Difficult and filled with adversity"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How important are family values to you? (Minimum 1; Maximum 1)",
                        'options': ["Extremely important", "Very important", "Moderately important", "Slightly important", "Not important at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is the highest level of education your dad attained? (Minimum 1; Maximum 1)",
                        'options': ["Elementary school", "Middle school", "High school or General Educational Development (G.E.D.)", "Vocational/technical school", "Associate degree (A.A., A.S.)", "Bachelor&#x2032;s degree (B.A., B.S., B.F.A., B.B.A.)", "Master of Arts (M.A.), Master of Science (M.S.), or Master of Education (M.Ed.) degree", "Master of Business Administration (M.B.A.) degree", "Master of Social Work (M.S.W.) or Master of Public Health (M.P.H.) degree", "Juris Doctor (J.D.) degree", "Medical Doctor (M.D.), Doctor of Dental Surgery (D.D.S.), Doctor of Dental Medicine (D.M.D.), Doctor of Veterinary Medicine (D.V.M.), or Doctor of Psychology (Psy.D.) degree", "Doctoral degree (Ph.D., Ed.D.)", "None or drop out"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is the highest level of education your mom attained? (Minimum 1; Maximum 1)",
                        'options': ["Elementary school", "Middle school", "High school or General Educational Development (G.E.D.)", "Vocational/technical school", "Associate degree (A.A., A.S.)", "Bachelor&#x2032;s degree (B.A., B.S., B.F.A., B.B.A.)", "Master of Arts (M.A.), Master of Science (M.S.), or Master of Education (M.Ed.) degree", "Master of Business Administration (M.B.A.) degree", "Master of Social Work (M.S.W.) or Master of Public Health (M.P.H.) degree", "Juris Doctor (J.D.) degree", "Medical Doctor (M.D.), Doctor of Dental Surgery (D.D.S.), Doctor of Dental Medicine (D.M.D.), Doctor of Veterinary Medicine (D.V.M.), or Doctor of Psychology (Psy.D.) degree", "Doctoral degree (Ph.D., Ed.D.)", "None or drop out"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are you adopted? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Were you an orphan? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Is your dad alive? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Is your mom alive? (Minimum 1; Maximum 1)",
                        'options': ["Yes", "No", "Unsure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Are your dad and mom still together? (Minimum 1; Maximum 1)",
                        'options': ["Yes, still together", "No, separated but not divorced", "No, divorced", "No, never were together", "No, one of them passed away", "Complicated", "Don&#x2032;t know"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your relationship with your dad? (Minimum 1; Maximum 1)",
                        'options': ["Very close", "Close", "Cordial", "Strained", "Distant"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your relationship with your mom? (Minimum 1; Maximum 1)",
                        'options': ["Very close", "Close", "Cordial", "Strained", "Distant"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you trust your dad? (Minimum 1; Maximum 1)",
                        'options': ["Completely", "Quite a bit", "Somewhat", "A little", "Not at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much do you trust your mom? (Minimum 1; Maximum 1)",
                        'options': ["Completely", "Quite a bit", "Somewhat", "A little", "Not at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your dad&#x2032;s occupation? (Minimum 1; Maximum 1)",
                        'options': ["Accountant", "Actor", "Architect", "Artist", "Banker", "Bartender", "Chef", "Chemist", "Civil servant", "Consultant", "Dentist", "Designer", "Doctor", "Economist", "Editor", "Electrician", "Engineer", "Entrepreneur", "Farmer", "Financial advisor", "Graphic designer", "Health care professional", "Homemaker", "Human resources professional", "IT professional", "Journalist", "Lawyer", "Librarian", "Manager", "Marketer", "Mechanic", "Nurse", "Pharmacist", "Photographer", "Pilot", "Police officer", "Professor", "Programmer", "Psychologist", "Real estate agent", "Receptionist", "Researcher", "Retired", "Salesperson", "Scientist", "Social worker", "Software developer", "Student", "Surgeon", "Teacher", "Technician", "Translator", "Veterinarian", "Waiter/waitress", "Writer", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your mom&#x2032;s occupation? (Minimum 1; Maximum 1)",
                        'options': ["Accountant", "Actor", "Architect", "Artist", "Banker", "Bartender", "Chef", "Chemist", "Civil servant", "Consultant", "Dentist", "Designer", "Doctor", "Economist", "Editor", "Electrician", "Engineer", "Entrepreneur", "Farmer", "Financial advisor", "Graphic designer", "Health care professional", "Homemaker", "Human resources professional", "IT professional", "Journalist", "Lawyer", "Librarian", "Manager", "Marketer", "Mechanic", "Nurse", "Pharmacist", "Photographer", "Pilot", "Police officer", "Professor", "Programmer", "Psychologist", "Real estate agent", "Receptionist", "Researcher", "Retired", "Salesperson", "Scientist", "Social worker", "Software developer", "Student", "Surgeon", "Teacher", "Technician", "Translator", "Veterinarian", "Waiter/waitress", "Writer", "Other", "None"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How would you describe your parents&#x2032; financial situation? (Minimum 1; Maximum 1)",
                        'options': ["Living in poverty", "Lower income", "Lower-middle class", "Middle class", "Upper-middle class", "Affluent", "Very wealthy", "Not sure"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What role does your family play in your decision-making process? (Minimum 1; Maximum 1)",
                        'options': ["My family&#x2032;s opinions are crucial", "Significant influence", "Some influence", "Minimal role", "No role"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you handle family conflicts? (Minimum 1; Maximum 1)",
                        'options': ["Rely on open communication", "Address issues calmly", "Seek compromise", "Stand my ground", "Avoid confrontation"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you balance your personal life with family commitments? (Minimum 1; Maximum 1)",
                        'options': ["Family always comes first", "Family and personal life have equal priority", "Personal life has a slight priority", "Personal life always comes first", "I maintain a flexible balance depending on the situation"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many full siblings (sharing both parents) do you have? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How many half siblings (sharing one parent) do you have? (Minimum 1; Maximum 1)",
                        'options': ["None", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 or more"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "What is your birth order position among your full siblings (those with whom you share both parents)? (Minimum 1; Maximum 1)",
                        'options': ["Only child", "Firstborn", "Second-born", "Third-born", "Fourth-born", "Fifth-born", "Sixth-born", "Seventh-born", "Eighth-born", "Ninth-born", "Tenth-born (or higher)"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How close are you to your siblings? (Minimum 1; Maximum 1)",
                        'options': ["Extremely", "Quite a bit", "Somewhat", "A little", "Not at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How close are you to your extended family? (Minimum 1; Maximum 1)",
                        'options': ["Extremely close", "Quite close", "Somewhat close", "A little close", "Not close at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Personal Space & Privacy',
        'sections': [
            {
                'title': 'Personal Space & Privacy',
                'parts': [
                    {
                        'question': "How much time do you spend with other people and how much time do you spend alone? (Minimum 1; Maximum 1)",
                        'options': ["Mostly with others, little alone time", "More time with others, some alone time", "Equal time with others and alone", "More time alone, some with others", "Mostly alone, little time with others"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How much time would you prefer to spend with other people and how much time would you prefer to spend alone? (Minimum 1; Maximum 1)",
                        'options': ["Mostly with others, little alone time", "More time with others, some alone time", "Equal time with others and alone", "More time alone, some with others", "Mostly alone, little time with others"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How do you approach setting and maintaining boundaries in relationships? (Minimum 1; Maximum 1)",
                        'options': ["I openly communicate my boundaries from the start", "I prefer to establish boundaries as issues arise", "I struggle to set boundaries but am working on it", "I rely on my partner to set boundaries", "I have few boundaries and am quite open"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "How comfortable are you with sharing personal information and experiences in a relationship? (Minimum 1; Maximum 1)",
                        'options': ["Extremely comfortable", "Very comfortable", "Moderately comfortable", "Somewhat comfortable", "Not comfortable at all"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Relationship History & Patterns',
        'sections': [
            {
                'title': 'Relationship History & Patterns',
                'parts': [
                    {
                        'question': "How would you describe your past relationship experiences? (Minimum 1; Maximum 1)",
                        'options': ["No serious relationships", "A few short-term relationships", "Several long-term relationships", "One long-term relationship", "Multiple casual relationships", "A mix of short-term, long-term, and casual relationships"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "For your past relationship experiences, provide their first and last name, current college, and relationship length (e.g., Y years and X months). (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'type': 'text-option',
                        'textCount': 'infinity',
                        'textMinCount': 5,
                        'options': ['None'],
                        'exclusive': 'None'
                    },
                    {
                        'question': "What patterns have you noticed in your relationships? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Attraction to similar personality types", "Repeating the same conflicts", "Losing interest over time", "Frequently becoming emotionally distant", "Often taking on a caretaker role", "Quickly becoming codependent", "Experiencing on-and-off relationships", "Falling into cycles of jealousy or insecurity", "Developing strong connections but struggling to maintain them", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    },
                    {
                        'question': "Which lessons have you learned from past relationships that you will apply to future ones? (Minimum 1; Maximum 3) (Cannot select both \"None\" and other options)",
                        'options': ["Importance of communication", "Setting healthy boundaries", "Maintaining individuality", "Prioritizing emotional support", "Compromising and problem-solving", "Managing conflict effectively", "Being more patient and understanding", "Investing in personal growth", "Recognizing and breaking unhealthy patterns", "Nurturing trust and emotional intimacy", "None"],
                        'type': 'multi-select',
                        'maxOptions': 3,
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Sense of Adventure & Risk-Taking',
        'sections': [
            {
                'title': 'Sense of Adventure & Risk-Taking',
                'parts': [
                    {
                        'question': "How would you describe your propensity to take risks? (Minimum 1; Maximum 1)",
                        'options': ["Always take risks", "Frequently take risks", "Occasionally take risks", "Rarely take risks", "Avoid risks at all costs"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    },
                    {
                        'question': "Which of the following adventure-seeking activities appeal to you the most? (Minimum 1; Maximum &#8734) (Cannot select both \"None\" and other options)",
                        'options': ["Traveling to new places", "Skydiving", "Scuba diving", "Mountain climbing", "Camping", "Trying exotic cuisines", "Attending cultural events", "Learning new languages", "Engaging in extreme sports", "Exploring urban environments", "Hiking in remote locations", "Starting a new hobby", "Going on impromptu road trips", "Attending music festivals", "Joining social clubs or groups", "Trying new fitness routines", "Pursuing artistic endeavors", "Experimenting with new technologies", "Participating in outdoor sports", "Engaging in environmental conservation efforts", "None"],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    },
                    {
                        'question': "How comfortable are you with uncertainty and change? (Minimum 1; Maximum 1)",
                        'options': ["Thrive in uncertain situations", "Adapt quickly to change", "Somewhat comfortable with uncertainty", "Prefer stability but can manage change", "Avoid uncertainty and change whenever possible"],
                        'type': 'multi-select',
                        'maxOptions': 1,
                    }
                ]
            }
        ]
    },
    {
        'title': 'Hates & Dislikes',
        'sections': [
            {
                'title': 'Hates & Dislikes',
                'parts': [
                    {
                        'question': "Which of the following do you seriously dislike or hate? (Minimum 1; Maximum &#8734) (E.g., \"Dishonesty\") (Cannot select both \"None\" and other options)",
                        'optionGroups': [
                            {
                                "title": 'Personal Traits',
                                'options': ["Dishonesty", "Arrogance", "Selfishness", "Hypocrisy", "Jealousy", "Overconfidence", "Rudeness", "Pessimism", "Bad manners", "Impatience", "Disorganization", "Irresponsibility", "Disrespect", "Passive-aggressiveness", "Narrow-mindedness", "Manipulation", "Vanity", "Entitlement"]
                            },
                            {
                                "title": 'Social Issues',
                                'options': ["Racism", "Sexism", "Ageism", "Bullying", "Injustice", "Corruption", "Animal cruelty", "Pollution", "Traffic", "Judgmental people", "Insensitivity", "Cliques", "Inequality", "Discrimination", "Religious intolerance", "Social inequality", "Abuse", "Homelessness", "Poverty", "Animal testing", "Consumerism", "Materialism", "War", "Deforestation", "Habitat destruction", "Littering", "Overpopulation"]
                            },
                            {
                                "title": 'Substance Use',
                                'options': ["Alcohol", "Drugs", "Smoking"]
                            },
                            {
                                "title": 'Communication & Media',
                                'options': ["Gossip", "Spam emails", "Reality TV", "Telemarketers", "Excessive social media usage", "Bad grammar", "Poor communication", "Excessive swearing", "Incompetence", "Liars", "Violence in the media", "Spoilers", "Reality television", "Online trolls", "Fake news"]
                            },
                            {
                                "title": 'Daily Annoyances',
                                'options': ["Inefficiency", "Ignorance", "Procrastination", "Laziness", "Greed", "Cold weather", "Hot weather", "Waiting in line", "Wasting time", "Delays", "Traffic", "Public restrooms", "Crying babies", "Excessive noise", "Mosquitoes", "Slow internet", "Being rushed", "Fast food", "Ignorance", "Plagiarism", "Bad customer service", "Broken promises", "Double standards", "Pettiness", "Ill-fitting clothes", "Overpriced items", "Uncertainty"]
                            },
                            {
                                "title": 'Relationships & Interactions',
                                'options': ["Unreliable people", "Bad drivers", "Complainers", "Drama", "Public speaking", "Vanity", "Broken promises", "Poor hygiene", "Bad odors", "Ungratefulness", "Fake people", "Inconsiderate people", "Betrayal"]
                            },
                            {
                                "title": 'Politics & Government',
                                'options': ["Politics", "Political correctness", "Corruption"]
                            },
                            {
                                "title": 'Public Figures',
                                'options': ["6ix9ine (Daniel Hernandez)", "Alexandria Ocasio-Cortez", "Amber Heard", "Anderson Cooper", "Andrew Tate", "Ann Coulter", "Anthony Fauci", "Barack Obama", "Ben Shapiro", "Benjamin Netanyahu", "Bernie Sanders", "Bill Cosby", "Bill Gates", "Brett Kavanaugh", "Candace Owens", "Cardi B", "Chris Brown", "Chris Cuomo", "Chuck Schumer", "David Duke", "Derek Chauvin", "Dick Cheney", "Don Lemon", "Donald Trump", "Donald Trump Jr.", "Ellen DeGeneres", "Elon Musk", "Ghislaine Maxwell", "Greta Thunberg", "Hillary Clinton", "Ilhan Omar", "J.K. Rowling", "Jack Dorsey", "Jake Paul", "Jeff Bezos", "Jimmy Kimmel", "Joe Biden", "Joe Scarborough", "Jordan Peterson", "Justin Bieber", "Kamala Harris", "Kanye West", "Kim Jong Un", "Laura Ingraham", "Logan Paul", "Marilyn Manson", "Marjorie Taylor Greene", "Martin Shkreli", "Matt Gaetz", "Maxine Waters", "Meghan Markle", "Mike Pence", "Milo Yiannopoulos", "Mitch McConnell", "Nancy Pelosi", "Nicki Minaj", "Piers Morgan", "Prince Harry", "Rachel Maddow", "Rudy Giuliani", "Sean Hannity", "Ted Cruz", "Ted Nugent", "Tucker Carlson", "Vladimir Putin", "Volodymyr Zelensky", "Xi Jinping"]
                            },
                            {
                                "title": '',
                                'options': ["None"]
                            }
                        ],
                        'type': 'multi-select',
                        'maxOptions': 'infinity',
                        'exclusive': 'None'
                    }
                ]
            }
        ]
    },
    {
        'title': 'Brands',
        'sections': [
            {
                'title': 'Brands',
                'parts': [
                    {
                        'question': "List all your favorite brands (Minimum 15; Maximum 100)",
                        'type': 'multi-text',
                        'textMinCount': 15,
                        'textMaxCount': 100
                    }
                ]
            }
        ]
    },
    {
        'title': 'Referrer',
        'sections': [
            {
                'title': 'Referrer',
                'parts': [
                    {
                        'question': "How did you hear about Love Story?",
                        'type': 'text'
                    }
                ]
            }
        ]
    }
]

const temp = {
    'title': '',
    'sections': [
        {
            'title': '',
            'parts': [
                {
                    'question': "",
                    'options': [""],
                    'type': 'multi-select',
                        'maxOptions': 1,
                },
                {
                    'question': "",
                    'options': [""],
                    'type': 'multi-select',
                    'maxOptions': 3
                },
                {
                    'question': "",
                    'options': [""],
                    'type': 'multi-select',
                    'inputType': 'number',
                    'maxOptions': 'infinity',
                    'exclusive': 'None',
                    'optionGroups': [
                        {
                            "title": '',
                            'options': ["", ""]
                        }
                    ],
                    'optionExclusives': [
                        {
                            'main': 'Finger',
                            'others': ["Multiple fingers"]
                        },
                        {
                            'main': 'Multiple fingers',
                            'others': ["Finger"]
                        }
                    ],
                    'type': 'text-option',
                    'textCount': 10,
                    'textMinCount': 1,
                    'textMaxCount': 1,
                    'type': 'multi-text',
                    'inputGroups': [
                        {
                            "title": ''
                        }
                    ],
                    // Maximum &#8734
                }
            ]
        },
        {
            'title': '',
            'parts': [
                {
                    'question': "",
                    'options': [""],
                    'type': 'multi-select',
                        'maxOptions': 1,
                }
            ]
        }
    ]
};