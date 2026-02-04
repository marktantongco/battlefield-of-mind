# Local Development With Comment Generation Agent

## General Development
Install the code reviewer specific dependencies: 
```
uv sync --all-packages --extra code-reviewer
```

If you want to test your changes, an easy way to do so is to have your changed agent review your changes. You can do so with:
```
nemo acra-workflow "Review the code, where the target commit is [TARGET_COMMIT].  You should get the changes made using git diff <target_commit>, and review that diff" "{\"modelId\": \"claude-3-5-sonnet-v2@20241022\", \"temperature\": 0.1 }"  "dummy_run_name" --agent CommentGenerationAgent --agent-kwargs "{\"prompt_version\": \"efficient\"}"
```

You can also do the following if your changes are trivial or you have no changes:
```
nemo acra-workflow "Review the code, where the target commit is [TARGET_COMMIT], and the source commit is[SOURCE_COMMIT]. You should get the changes made using `git diff <target_commit> <source_commit>, and review that diff" "{\"modelId\": \"claude-3-5-sonnet-v2@20241022\", \"temperature\": 0.1 }"  "dummy_run_name" --agent CommentGenerationAgent --agent-kwargs "{\"prompt_version\": \"efficient\"}"
```

## Testing With Comment Ranker

If you need to use the comment ranker model edition of the comment generation agent, you must run:
```
atlas micros service assume -s devai-core -e ddev -i
```
To get the name of the endpoint, you must run: 
```
atlas micros resource info -r devai-comment-ranker -t sm-endpoint -e ddev -s devai-core | grep "endpoint-name"
```
That name can then be supplied as an agent kwarg:
```
nemo acra-workflow "Review the code, where the target commit is [TARGET_COMMIT].  You should get the changes made using git diff <target_commit>, and review that diff" "{\"modelId\": \"claude-3-5-sonnet-v2@20241022\", \"temperature\": 0.1 }"  "dummy_run_name" --agent CommentGenerationAgent --agent-kwargs "{\"prompt_version\": \"efficient\", \"comment_ranker_endpoint\": \"[ENDPOINT_NAME]\"}"
```