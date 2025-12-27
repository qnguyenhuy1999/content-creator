# Content Creator components

This is Content Creator design system component library that uses Storybook, TypeScript, and React.

## Local Development

## Setup

To spin up the project locally, follow these steps:

1. First, clone the repo.
2. `pnpm install` from the root of the project.
3. `pnpm --filter @content-creator/ui run storybook`

## Running up Storybook

1. `pnpm --filter @content-creator/ui run storybook`
2. Open [http://localhost:5175](http://localhost:5175/) to see Storybook.

Note: For some reason, the first load sometimes components don't load; refreshing the page fixes the issue.

## Creating Components

Use the create-story.cjs scaffolding script to create a new story and add components to index.ts:

```bash
Usage: node create-story.cjs <category> <componentName>

cd libs/components
node ./scripts/create-story.cjs atoms Link
```

## Our Design System Methodology

We follow the atomic design methodology, which takes cues from chemistry.

There are 5 stages of atomic design:

### Atoms

Basic building components like inputs, buttons, labels, etc.

### Molecules

Simple groups of atom components function together as a unit. e.g. search input

### Organisms

Complex ui components composed of groups of atoms and molecules, e.g. web header

### Templates

Page content-level groups of components placed into the layout. e.g. layout

### Pages

Full pages with all ui components.
(Note: In Storybook, we use this for testing how all our components work together and should not be imported into other apps.)

### More information

[https://atomicdesign.bradfrost.com/chapter-2/](https://atomicdesign.bradfrost.com/chapter-2/)

## Using component library in other projects

1. Add `@content-creator/ui` package to package.json.
2. Import the component: `import { TestComponent } from '@content-creator/ui‘`.

Note:

With a Next.js-based app, use `optimizePackageImports: ['@content-creator/ui']` to correctly treeshake components.

## Our coding standards

- Only use 'use client' if your component has hooks or client-side functions, e.g. on click.
- If there is no data for an HTML element, don't output HTML.
- Don't overload components if they need complex typing; break components into a set of components, e.g. Button and ButtonLink.
- Don't use `any` types using TypeScript. If you can't type it, use unknown, e.g. data from an unknown source.
- Don't add business logic to components; break it into utilities.
- Break components down into atoms, molecules, and reuse what we have; don't create one-off components.
- Avoid using JS where something can be done in pure CSS, especially around responsive design.

## Testing

When writing tests, there are two types of tests we use: unit tests and Storybook component testing.

### Unit tests

In the component library, our unit tests use Vitest and are only used to test basic JavaScript functions like utils.
They should not be used to test React components.

The format is `util.test.ts`, which are stored next to the file.

More information:

[https://vitest.dev/guide/#writing-tests](https://vitest.dev/guide/#writing-tests)

### Storybook component testing

In the component library, we test our components using Storybook component testing that uses Playwright.

By default, all stories will be tested for if components mount without crashing.

But sometimes we may want to test other features of components too.

- If the component has actions, e.g. clicking a button to open a dialog, we should have tests in the story.

Example:

```
export const PrimaryClick: Story = {
  args: {
    variant: 'primary',
    onClick: fn(),
    children: 'test',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Button has text', async () => {
      await expect(canvas.getByText('test')).toBeInTheDocument()
    })

    await step('Click primary button', async () => {
      await userEvent.click(canvas.getByRole('button'))
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  },
}

```

Note: You can run the tests inside Storybook without Playwright.

More information:

https://storybook.js.org/docs/writing-tests/component-testing
