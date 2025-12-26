module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow hardcoded color values in JSX/TSX. Use Tailwind classes or CSS variables only.',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      hardcodedColor:
        'Hardcoded color "{{value}}" detected. Use Tailwind classes or CSS variables from styles.css',
    },
    schema: [],
  },
  create(context) {
    const colorPatterns = [
      /#[0-9a-fA-F]{3,8}\b/,
      /rgba?\s*\(/,
      /hsla?\s*\(/,
      /\[(#[0-9a-fA-F]{3,8}|rgb|hsl)/,
    ];

    function checkForHardcodedColor(node, value) {
      if (typeof value !== 'string') return;
      for (const pattern of colorPatterns) {
        if (pattern.test(value)) {
          context.report({
            node,
            messageId: 'hardcodedColor',
            data: { value },
          });
          break;
        }
      }
    }

    return {
      JSXAttribute(node) {
        if (node.value?.type === 'Literal') {
          checkForHardcodedColor(node, node.value.value);
        }
        if (node.value?.type === 'JSXExpressionContainer') {
          const expr = node.value.expression;
          if (expr.type === 'Literal') {
            checkForHardcodedColor(node, expr.value);
          }
          if (expr.type === 'TemplateLiteral') {
            expr.quasis.forEach((quasi) => {
              checkForHardcodedColor(node, quasi.value.raw);
            });
          }
        }
      },
      Property(node) {
        const keyName = node.key?.name || node.key?.value;
        if (
          keyName &&
          ['color', 'backgroundColor', 'borderColor'].includes(keyName) &&
          node.value?.type === 'Literal'
        ) {
          checkForHardcodedColor(node, node.value.value);
        }
      },
    };
  },
};
