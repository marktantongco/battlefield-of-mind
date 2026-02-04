# 🤖 OpenClaw Moltbot Integration Guide

Complete guide for integrating OpenClaw AI into your blog platform.

## What is OpenClaw?

**OpenClaw** (https://openclaw.ai) is an AI assistant that actually does things. It's powered by Claude (Anthropic) and provides:

- ✅ **Chat-based AI assistance** - WhatsApp, Telegram, or web
- ✅ **Email management** - Clears inbox, sends emails
- ✅ **Calendar automation** - Manages your schedule
- ✅ **Travel assistance** - Flight check-ins, bookings
- ✅ **Content generation** - Blog posts, SEO optimization
- ✅ **Multi-language support** - Translation services

Unlike direct Anthropic API, OpenClaw provides:
- Pre-built workflows and automations
- Multi-platform access (chat apps + API)
- Enterprise-grade Claude with added features
- Simpler integration and setup

## Getting Started with OpenClaw

### 1. Sign Up

1. Visit https://openclaw.ai
2. Click "Get Started" or "Sign Up"
3. Connect your preferred chat app:
   - WhatsApp (recommended)
   - Telegram
   - Web interface

### 2. Get Your API Key

1. Log in to OpenClaw dashboard
2. Navigate to Settings → API Keys
3. Generate a new API key
4. Copy and save it securely

**API Key format:** Usually a long alphanumeric string

### 3. Configure Your Deployment

Add to `terraform/terraform.tfvars`:

```hcl
openclaw_api_key = "your-openclaw-api-key-here"
openclaw_api_url = "https://api.openclaw.ai"
```

Or for local development, add to `.env`:

```bash
OPENCLAW_API_KEY=your-openclaw-api-key-here
OPENCLAW_API_URL=https://api.openclaw.ai
```

## Using OpenClaw in Your Code

### Basic Example

```typescript
import { sendToOpenClaw } from '@/lib/openclaw';

const response = await sendToOpenClaw([
  {
    role: 'user',
    content: 'Write a blog post about AI in healthcare'
  }
]);

console.log(response.content);
```

### Content Generation

```typescript
import { generateContentIdeas } from '@/lib/openclaw';

const ideas = await generateContentIdeas('AI Technology', 5);
// Returns: ["How AI is Transforming Healthcare", ...]
```

### SEO Optimization

```typescript
import { optimizeForSEO } from '@/lib/openclaw';

const result = await optimizeForSEO(
  'Your blog post content here...',
  ['AI', 'machine learning', 'technology']
);

console.log(result.optimizedContent);
console.log(result.suggestions);
console.log(result.metaDescription);
```

### Translation

```typescript
import { translateContent } from '@/lib/openclaw';

const translated = await translateContent(
  'Hello world! This is my blog post.',
  'Spanish'
);

console.log(translated); // "¡Hola mundo! Esta es mi publicación de blog."
```

### SEO Tags Generation

```typescript
import { generateSEOTags } from '@/lib/openclaw';

const tags = await generateSEOTags('Your content here...');

console.log(tags.title);       // SEO-optimized title
console.log(tags.description); // Meta description
console.log(tags.keywords);    // Array of keywords
```

## API Routes Integration

The platform includes pre-built API routes for OpenClaw:

### Generate Ideas
```bash
POST /api/ai/generate-ideas
{
  "topic": "AI Technology"
}
```

### Optimize SEO
```bash
POST /api/ai/optimize-seo
{
  "content": "Your blog post...",
  "keywords": ["AI", "tech"]
}
```

### Translate Content
```bash
POST /api/ai/translate
{
  "content": "Hello world",
  "targetLanguage": "Spanish"
}
```

### Generate Tags
```bash
POST /api/ai/generate-tags
{
  "content": "Your content here..."
}
```

## OpenClaw Helper Library

Located at: `src/lib/openclaw.ts`

### Available Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `sendToOpenClaw()` | Send messages to OpenClaw | Response object |
| `generateContentIdeas()` | Generate blog post ideas | Array of strings |
| `optimizeForSEO()` | Optimize content for SEO | Optimized content + suggestions |
| `translateContent()` | Translate to another language | Translated string |
| `generateSEOTags()` | Generate meta tags | Title, description, keywords |

### Configuration Options

```typescript
await sendToOpenClaw(messages, {
  model: 'claude-3-5-sonnet-20241022',  // Claude model
  temperature: 0.7,                      // Creativity (0-1)
  max_tokens: 2000,                      // Max response length
});
```

## Environment Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `OPENCLAW_API_KEY` | Yes | Your OpenClaw API key | - |
| `OPENCLAW_API_URL` | No | OpenClaw API endpoint | `https://api.openclaw.ai` |
| `OPENAI_API_KEY` | Optional | Fallback to OpenAI | - |

## Error Handling

```typescript
try {
  const response = await sendToOpenClaw(messages);
  console.log(response.content);
} catch (error) {
  if (error.message.includes('OPENCLAW_API_KEY')) {
    console.error('API key not configured');
  } else if (error.message.includes('401')) {
    console.error('Invalid API key');
  } else if (error.message.includes('429')) {
    console.error('Rate limit exceeded');
  } else {
    console.error('OpenClaw API error:', error);
  }
}
```

## Rate Limits

OpenClaw API rate limits vary by plan:
- **Free tier**: 100 requests/day
- **Pro tier**: 1,000 requests/day
- **Enterprise**: Custom limits

Monitor your usage in the OpenClaw dashboard.

## Best Practices

### 1. Cache Responses
```typescript
// Cache expensive operations
const cacheKey = `openclaw:${hash(content)}`;
let response = await cache.get(cacheKey);

if (!response) {
  response = await sendToOpenClaw(messages);
  await cache.set(cacheKey, response, 3600); // 1 hour
}
```

### 2. Use Appropriate Models
- **claude-3-5-sonnet**: Best for complex tasks, content generation
- **claude-3-haiku**: Faster, cheaper for simple tasks

### 3. Optimize Token Usage
- Keep prompts concise
- Use system messages effectively
- Set appropriate max_tokens

### 4. Handle Errors Gracefully
- Implement retry logic for transient errors
- Provide fallback content
- Log errors for monitoring

## Testing

### Unit Tests
```typescript
import { generateContentIdeas } from '@/lib/openclaw';

jest.mock('@/lib/openclaw');

test('generates content ideas', async () => {
  const ideas = await generateContentIdeas('AI', 3);
  expect(ideas).toHaveLength(3);
});
```

### Integration Tests
```bash
# Set test API key
export OPENCLAW_API_KEY=test-key

# Run tests
npm test
```

## Troubleshooting

### API Key Not Working
1. Verify key in OpenClaw dashboard
2. Check if key has proper permissions
3. Ensure key is not expired

### Rate Limit Errors
1. Check usage in dashboard
2. Implement request queuing
3. Upgrade to higher tier

### Slow Responses
1. Reduce max_tokens
2. Use faster model (haiku)
3. Implement caching

### Connection Errors
1. Check OPENCLAW_API_URL is correct
2. Verify network connectivity
3. Check firewall settings

## Support

- **OpenClaw Docs**: https://openclaw.ai/docs
- **API Reference**: https://openclaw.ai/api
- **Support Email**: support@openclaw.ai
- **Community**: Join Discord/Telegram

## Pricing

Visit https://openclaw.ai/pricing for current pricing:
- **Free**: Basic features, limited requests
- **Pro**: $20/month, more requests
- **Enterprise**: Custom pricing, unlimited requests

## Next Steps

1. ✅ Get your OpenClaw API key
2. ✅ Configure terraform.tfvars or .env
3. ✅ Deploy your application
4. ✅ Test AI features at `/ai-tools`
5. ✅ Start creating AI-powered content!

---

**Ready to supercharge your blog with AI? Get started at https://openclaw.ai! 🚀**
