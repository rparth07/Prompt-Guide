# NLP

1. **Named Entity Recognition (NER) Prompt**: Identify and label all named entities in the following sentence: 'Barack Obama visited Paris last year.'

**Example:**
```
Prompt: Perform NER on the sentence: 'Barack Obama visited Paris last year.'
Expected Output: 
        - Entity: Barack Obama, Label: PERSON
        - Entity: Paris, Label: LOCATION
        - Entity: last year, Label: DATE
```

2. **Part-of-Speech Tagging Prompt**: Provide the part-of-speech tags for each word in the sentence: 'The quick brown fox jumps over the lazy dog.'

**Example:**
```
Prompt: Perform POS tagging on the sentence: 'The quick brown fox jumps over the lazy dog.'
Expected Output: 
        - The: DT (Determiner)
        - quick: JJ (Adjective)
        - brown: JJ (Adjective)
        - fox: NN (Noun)
        - jumps: VBZ (Verb)
        - over: IN (Preposition)
        - the: DT (Determiner)
        - lazy: JJ (Adjective)
        - dog: NN (Noun)
```

3. **Text Classification Prompt**: Classify the sentiment of the following review as positive, negative, or neutral: 'The movie was fantastic! I loved every minute of it.'

**Example:**
```
Prompt: Classify the sentiment of the review: 'The movie was fantastic! I loved every minute of it.'
Expected Output: Positive Sentiment
```

4. **Text Summarization Prompt**: Generate a concise summary of the following article: [Provide the article text]

**Example:**
```
Prompt: Summarize the following article: 'COVID-19 Vaccination: Progress and Challenges in Global Immunization Efforts'
Expected Output: This article discusses the progress and challenges of COVID-19 vaccination worldwide.
```

5. **Question Answering Prompt**: Answer the following question based on the provided passage: [Provide the passage and question]

**Example:**
```
Prompt: Answer the question: 'What is the capital of Australia?' based on the provided passage.
Passage: Australia is a country in Oceania. It is known for its unique wildlife and natural landmarks.
Question: What is the capital of Australia?
Expected Output: The capital of Australia is Canberra.
```

6. **Text Generation Prompt**: Compose a short poem about the beauty of nature.

**Example:**
```
Prompt: Write a short poem about the beauty of nature.
Expected Output: In the woods so green and vast,
                 Nature's wonders unsurpassed.
                 Rivers flowing, birds in flight,
                 Underneath the moon's soft light.
```

7. **Machine Translation Prompt**: Translate the following sentence from English to French: 'Hello, how are you?'

**Example:**
```
Prompt: Translate the following sentence from English to French: 'Hello, how are you?'
Expected Output: Bonjour, comment ça va?
```

8. **Text Completion Prompt**: Complete the sentence: 'The best way to learn a new language is...'

**Example:**
```
Prompt: Complete the sentence: 'The best way to learn a new language is...'
Expected Output: The best way to learn a new language is through immersion and practice.
```

9. **Sentiment Analysis Prompt**: Analyze the sentiment of the tweet: 'Just had the most amazing dinner at my favorite restaurant!'

**Example:**
```
Prompt: Analyze the sentiment of the tweet: 'Just had the most amazing dinner at my favorite restaurant!'
Expected Output: Positive Sentiment
```

10. **Speech Recognition Prompt**: Transcribe the following audio clip into text: [Provide the audio clip]

**Example:**
```
Prompt: Transcribe the following audio clip into text.
Audio Clip: [Audio clip of a person saying, 'Hello, how are you?']
Expected Output: Hello, how are you?
```

11. **Text Paraphrasing Prompt**: Rewrite the following sentence in a more formal style: 'I gotta go to the store.'

**Example:**
```
Prompt: Paraphrase the following sentence in a more formal style: 'I gotta go to the store.'
Expected Output: I need to go to the store.
```

12. **Document Classification Prompt**: Classify the type of document based on its content: [Provide the document text]

**Example:**
```
Prompt: Classify the type of document based on its content.
Document: This is a legal contract between Party A and Party B for the sale of property.
Expected Output: Legal Contract
```

13. **Information Extraction Prompt**: Extract all the email addresses mentioned in the following text: 'Please send your inquiries to info@example.com or support@example.com.'

**Example:**
```
Prompt: Extract all the email addresses mentioned in the following text: 'Please send your inquiries to info@example.com or support@example.com.'
Expected Output: info@example.com, support@example.com
```

14. **Document Summarization Prompt**: Generate a brief summary of the research paper: 'Recent Advances in Artificial Intelligence.'

**Example:**
```
Prompt: Summarize the research paper: 'Recent Advances in Artificial Intelligence.'
Expected Output: This paper discusses recent advances in the field of artificial intelligence.
```

15. **Text Entailment Prompt**: Determine whether the following statement logically follows from the given context: [Provide the context and statement]

**Example:**
```
Prompt: Determine if the following statement logically follows from the context: 'The sky is blue.'
Context: The sky is clear, and the sun is shining.
Expected Output: Entailment (True)
```

16. **Text Alignment Prompt**: Align the following parallel sentences in English and Spanish: [Provide the sentences]

**Example:**
```
Prompt: Align the following parallel sentences in English and Spanish.
English Sentence: I love to travel.
Spanish Sentence: Me encanta viajar.
Expected Output: (English) I love to travel. - (Spanish) Me encanta viajar.
```

17. **Text Clustering Prompt**: Cluster the provided set of documents into different topics or categories.

**Example:**
```
Prompt: Cluster the provided set of documents into different topics or categories.
Documents: [List of documents]
Expected Output: Cluster 1: Technology, Cluster 2: Health, Cluster 3: Sports
```

18. **Text Similarity Prompt**: Calculate the similarity between the following two sentences: 'The sun is shining' and 'It is a sunny day.'

**Example:**
```
Prompt: Calculate the similarity between the following two sentences: 'The sun is shining' and 'It is a sunny day.'
Expected Output: High similarity
```

19. **Text Normalization Prompt**: Normalize the following text by converting all characters to lowercase and removing punctuation: 'Hello, World!'

**Example:**
```
Prompt: Normalize the following text by converting all characters to lowercase and removing punctuation: 'Hello, World!'
Expected Output: hello world
```

20. **Text Anomaly Detection Prompt**: Identify any anomalous sentences or phrases in the provided text: [Provide the text]

**Example:**
```
Prompt: Identify any anomalous sentences or phrases in the provided text.
Text: The quick brown fox jumps over the lazy dog. The weather is nice today. ze@th j#mped 0ver th3 l@zy d0g!
Expected Output: ze@th j#mped 0ver th3 l@zy d0g! (Anomalous)
```

21. **Language Identification Prompt**: Detect the language of the following text: 'Bonjour, comment ça va?'

**Example:**
```
Prompt: Detect the language of the following text: 'Bonjour, comment ça va?'
Expected Output: French
```

22. **Entity Linking Prompt**: Link all named entities in the text to their corresponding Wikipedia pages.

**Example:**
```
Prompt: Link all named entities in the text to their corresponding Wikipedia pages.
Text: Albert Einstein was a famous physicist.
Expected Output: 
                - Entity: Albert Einstein, Link: https://en.wikipedia.org/wiki/Albert_Einstein
```

23. **Text Dependency Parsing Prompt**: Parse the sentence and generate the dependency tree for the following text: 'John eats an apple.'

**Example:**
```
Prompt: Parse the sentence and generate the dependency tree for the following text: 'John eats an apple.'
Expected Output: 
        (ROOT
        (S
            (NP (NNP John))
            (VP (VBZ eats)
            (NP (DT an) (NN apple)))
            (. .))
```

24. **Text Generation with Constraints Prompt**: Generate a product description of 50 words with a focus on sustainability.

**Example:**
```
Prompt: Generate a product description of 50 words with a focus on sustainability.
Expected Output: Introducing our eco-friendly reusable water bottle made from recycled materials. Embrace sustainability while staying hydrated on the go.
```

25. **Text Segmentation Prompt**: Segment the following text into separate sentences: 'The sun is shining. It's a beautiful day.'

**Example:**
```
Prompt: Segment the following text into separate sentences: 'The sun is shining. It's a beautiful day.'
Expected Output: 
        - Sentence 1: The sun is shining.
        - Sentence 2: It's a beautiful day.
```

26. **Text Expansion Prompt**: Expand the following abbreviations in the text: 'I'll be there at 2 p.m.'

**Example:**
```
Prompt: Expand the following abbreviations in the text: 'I'll be there at 2 p.m.'
Expected Output: I will be there at 2 in the afternoon.
```

27. **Intent Detection Prompt**: Identify the intent of the user's query: 'What time does the movie start?'

**Example:**
```
Prompt: Identify the intent of the user's query: 'What time does the movie start?'
Expected Output: Movie Showtime Inquiry
```

28. **Text Filtering Prompt**: Remove all profanity and offensive language from the text: [Provide the text]

**Example:**
```
Prompt: Remove all profanity and offensive language from the text.
Text: This is a *** good movie with great actors!
Expected Output: This is a good movie with great actors!
```

29. **Text Error Correction Prompt**: Correct the spelling and grammar errors in the following sentence: 'I am goin to the store.'

**Example:**
```
Prompt: Correct the spelling and grammar errors in the following sentence: 'I am goin to the store.'
Expected Output: I am going to the store.
```

30. **Text Sentiment Transfer Prompt**: Convert the sentiment of the following sentence from positive to negative: 'I love this product.'

**Example:**
```
Prompt: Convert the sentiment of the following sentence from positive to negative: 'I love this product.'
Expected Output: I dislike this product.
```

31. **Text Generation with Style Transfer Prompt**: Generate a news headline in a humorous style.

**Example:**
```
Prompt: Generate a news headline in a humorous style.
Expected Output: Breaking News: Penguins Take Over Ice Cream Shop, Demand Fish-Flavored Cones!
```

32. **Text Stylization Prompt**: Stylize the following text in a cursive font: 'Hello, World!'

**Example:**
```
Prompt: Stylize the following text in a cursive font: 'Hello, World!'
Expected Output: 𝓗𝓮𝓵𝓵𝓸, 𝓦𝓸𝓻𝓵𝓭!
```

33. **Text Language Adaptation Prompt**: Translate the given English text to Spanish while preserving the original meaning.

**Example:**
```
Prompt: Translate the given English text to Spanish while preserving the original meaning.
Text: The weather is beautiful today.
Expected Output: El clima está hermoso hoy.
```

34. **Text Revision Prompt**: Revise and improve the following paragraph for clarity and coherence.

**Example:**
```
Prompt: Revise and improve the following paragraph for clarity and coherence.
Text: The new product is good. I like it a lot.
Expected Output: The newly launched product is excellent, and I highly recommend it.
```

35. **Text Coherence Evaluation Prompt**: Assess the coherence of the provided text and rate it on a scale of 1 to 5, where 5 indicates high coherence.

**Example:**
```
Prompt: Assess the coherence of the provided text and rate it on a scale of 1 to 5, where 5 indicates high coherence.
Text: The moon is shining bright tonight. I need to buy groceries tomorrow.
Expected Output: Coherence Rating: 3 (Moderate coherence)
```

36. **Text Alignment for Parallel Corpora Prompt**: Align the English and Chinese sentences in the parallel corpus for machine translation.

**Example:**
```
Prompt: Align the English and Chinese sentences in the parallel corpus for machine translation.
English Sentence: I love reading books.
Chinese Sentence: 我喜欢读书。
Expected Output: (English) I love reading books. - (Chinese) 我喜欢读书。
```

37. **Text Emotion Recognition Prompt**: Detect the emotion expressed in the following sentence: 'I am feeling anxious about the upcoming exam.'

**Example:**
```
Prompt: Detect the emotion expressed in the following sentence: 'I am feeling anxious about the upcoming exam.'
Expected Output: Emotion: Anxiety
```

38. **Text Sarcasm Detection Prompt**: Determine if the following statement is sarcastic: 'Oh, great! Another rainy day!'

**Example:**
```
Prompt: Determine if the following statement is sarcastic: 'Oh, great! Another rainy day!'
Expected Output: Sarcastic (True)
```

39. **Text Gender Bias Detection Prompt**: Identify any gender bias in the provided text and suggest gender-neutral alternatives.

**Example:**
```
Prompt: Identify any gender bias in the provided text and suggest gender-neutral alternatives.
Text: The programmer worked hard on his project.
Expected Output: Suggested Alternative: The programmer worked hard on their project.
```

40. **Text Inference Prompt**: Infer the missing word in the following sentence: 'She was wearing a beautiful ___ dress.'

**Example:**
```
Prompt: Infer the missing word in the following sentence: 'She was wearing a beautiful ___ dress.'
Expected Output: She was wearing a beautiful red dress.
```

41. **Text Image Captioning Prompt**: Generate a descriptive caption for the provided image: [Provide the image]

**Example:**
```
Prompt: Generate a descriptive caption for the provided image.
Image: [Image of a beach with palm trees and a clear blue sky]
Expected Output: A serene beach with palm trees under a clear blue sky.
```

42. **

Text Plagiarism Detection Prompt**: Detect any plagiarized content in the given document.

**Example:**
```
Prompt: Detect any plagiarized content in the given document.
Document: [Provide the document text]
Expected Output: No plagiarized content detected.
```

43. **Text Style Transfer Prompt**: Change the writing style of the following text to formal: 'Hey, how's it going?'

**Example:**
```
Prompt: Change the writing style of the following text to formal: 'Hey, how's it going?'
Expected Output: Hello, how are you?
```

44. **Text Explanation Prompt**: Explain the reasoning behind the model's answer to the question: [Provide the question and context]

**Example:**
```
Prompt: Explain the reasoning behind the model's answer to the question: 'What is the capital of France?'
Context: France is a country located in Western Europe.
Expected Output: The model identified that Paris is the capital of France based on the provided context.
```

45. **Text Attribute Modification Prompt**: Modify the attribute of the following text to reflect a different sentiment: 'This cake is delicious.'

**Example:**
```
Prompt: Modify the attribute of the following text to reflect a different sentiment: 'This cake is delicious.'
Expected Output: This cake is tasteless.
```

46. **Text Intent Expansion Prompt**: Expand the user's query by predicting additional information required to answer the question.

**Example:**
```
Prompt: Expand the user's query by predicting additional information required to answer the question: 'What are the best restaurants in town?'
Expected Output: What are the best restaurants in town for Italian cuisine?
```

47. **Text Coherence Restoration Prompt**: Reorder the sentences in the following text to improve coherence: [Provide the text]

**Example:**
```
Prompt: Reorder the sentences in the following text to improve coherence.
Text: I went to the store. The sun was shining. It was a beautiful day.
Expected Output: The sun was shining. It was a beautiful day. I went to the store.
```

48. **Text Semantic Role Labeling Prompt**: Label the semantic roles of the words in the following sentence: 'The cat chased the mouse.'

**Example:**
```
Prompt: Label the semantic roles of the words in the following sentence: 'The cat chased the mouse.'
Expected Output: 
        - cat: Agent
        - chased: Predicate
        - mouse: Patient
```

49. **Text Conditional Generation Prompt**: Generate a story with a happy ending, based on the provided plot: [Provide the initial plot]

**Example:**
```
Prompt: Generate a story with a happy ending, based on the provided plot: 'A young girl finds a magical book that takes her on exciting adventures.'
Expected Output: As the young girl continued her magical adventures, she discovered her inner strength and courage, leading to a joyous and happy ending.
```

50. **Text Style Adaptation Prompt**: Adapt the writing style of the following text to match that of a children's storybook.

**Example:**
```
Prompt: Adapt the writing style of the following text to match that of a children's storybook.
Text: Once upon a time, in a faraway kingdom, there lived a brave knight.
Expected Output: Once upon a time, in a magical land, there was a brave knight who embarked on exciting quests.
```