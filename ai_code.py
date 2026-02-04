from transformers import pipeline

print("Downloading model... this may take a few minutes...")
# Using a tiny model to ensure it runs on mobile
generator = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0")

prompt = "Write a python function to add two numbers"
result = generator(prompt, max_length=100)

print("--- AI RESPONSE ---")
print(result[0]['generated_text'])
