# AI Guides

Artificial Intelligence and Machine Learning are transforming software development. This guide helps you understand the fundamentals.

## Introduction to LLMs

Large Language Models (LLMs) are AI systems trained on massive text datasets.

### How LLMs Work

1. **Training**: Model learns patterns from text data
2. **Inference**: Model generates text based on prompts
3. **Fine-tuning**: Model is adjusted for specific tasks

### Using AI in Applications

```javascript
async function askAI(question) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful coding tutor." },
        { role: "user", content: question },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
```

## RAG (Retrieval-Augmented Generation)

RAG combines search with AI to provide accurate, source-backed answers.

### How RAG Works

1. **Index**: Convert documents to vector embeddings
2. **Retrieve**: Find relevant chunks when a user asks a question
3. **Generate**: Send context + question to the LLM

### Vector Databases

```python
from chromadb import Client

client = Client()
collection = client.get_or_create_collection("documents")

# Add documents
collection.add(
  documents=["Python is a programming language.", "AI models learn from data."],
  ids=["doc1", "doc2"]
)

# Query
results = collection.query(query_texts=["How do I learn Python?"], n_results=2)
```

### Simple RAG Implementation

```python
def answer_question(question, vector_db, llm):
  relevant_docs = vector_db.search(question)
  context = "\n".join(relevant_docs)
  
  prompt = f"Context:\n{context}\n\nQuestion: {question}\n\nAnswer:"
  return llm.generate(prompt)
```

## Prompt Engineering

### Best Practices

1. **Be specific**: Tell the AI exactly what you want
2. **Provide context**: Give background information
3. **Use examples**: Show the format you expect
4. **Iterate**: Refine prompts based on results

### Example Prompts

```
You are a senior React developer. Review this code for bugs 
and suggest improvements. Focus on performance and accessibility.

Code:
[code here]
```

## Responsible AI

### Important Considerations

- **Bias**: AI can perpetuate biases in training data
- **Accuracy**: AI can confidently state incorrect facts
- **Privacy**: Never send sensitive data to public APIs
- **Attribution**: Respect copyright and licensing

## Related Projects

- [Project 10: AI Study Assistant](../projects/ai-study-assistant.md)
