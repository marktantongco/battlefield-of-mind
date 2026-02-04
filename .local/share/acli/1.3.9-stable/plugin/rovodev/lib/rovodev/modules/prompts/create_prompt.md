Your goal is to collect information for a saved prompt definition and save it in the following format. You don't need to search the codebase to start, but follow the following steps:

Follow the following steps:
1. Ask the user about the name of the prompt
2. Ask about the description of the prompt
3. Ask about the content of the prompt
4. Save the prompt metadata into .rovodev/prompts.yml and the content into a markdown file in the .rovodev/ folder. Make sure to save the file in the correct format and do not overwrite existing prompts.

Follow the following yaml structure for .rovodev/prompts.yml:

```yaml
prompts:
- name: <name of the task>
    description: <description of the task>
    content_file: <path to the markdown file __relative to this file__ - i.e., without the .rovodev prefix>
````
