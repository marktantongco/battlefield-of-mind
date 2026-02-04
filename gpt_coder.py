import os
from openai import OpenAI

# It will automatically look for the OPENAI_API_KEY environment variable
client = OpenAI()

print("--- ChatGPT Coder (Terminal) ---")
user_prompt = input("What do you want to code today? ")

try:
    response = client.chat.completions.create(
        model="gpt-4o",  # or "gpt-3.5-turbo" if you want it cheaper
        messages=[
            {"role": "system", "content": "You are an expert coding assistant. Output only code and brief comments."},
            {"role": "user", "content": user_prompt}
        ]
    )
    
    print("\n--- CODE ---")
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Error: {e}")
    print("Did you forget to set the key? Run: export OPENAI_API_KEY='your-key'")
