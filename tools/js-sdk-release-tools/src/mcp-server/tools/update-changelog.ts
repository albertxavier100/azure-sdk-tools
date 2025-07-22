import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export const registerUpdateChangelogTool = async (server: McpServer) => {
  server.registerTool(
    'update_changelog',
    {
      title: 'Update Changelog',
      description: 'Update CHANGELOG.md with latest changes',
      inputSchema: {
        package_path: z.string().describe('Path to SDK package'),
        version: z.optional(z.string().describe('Version number for changelog entry')),
        changes: z
          .array(
            z.object({
              type: z.enum(['feature', 'bugfix', 'breaking', 'deprecation']),
              description: z.string(),
            })
          )
          .describe('List of changes to add'),
        auto_generate: z.boolean().default(false).describe('Auto-generate changelog from git history'),
      },
    },
    async ({ package_path, version, changes, auto_generate }) => {
      
      return { content: [{ type: 'text', text: '' }] };
    }
  );
};
